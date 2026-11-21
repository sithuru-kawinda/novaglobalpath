import { cacheLife } from "next/cache";

/**
 * Headline ticker data from free public RSS feeds — no API key:
 *  - Deutsche Welle (DW) English: "Germany" and "All" feeds
 *  - The Local Germany (English-language news about life and work in Germany)
 * Only headlines that match this website's topics (education, jobs & careers, Ausbildung,
 * visas & immigration) are kept. We store just the headline and link to the original publisher —
 * no article text or images.
 */

export type Headline = { id: string; title: string; url: string; source: string; publishedAt: string };

type Feed = { url: string; source: string; host: string; needsGermany?: boolean };

const FEEDS: Feed[] = [
  { url: "https://rss.dw.com/rdf/rss-en-ger", source: "DW", host: "www.dw.com" },
  { url: "https://rss.dw.com/rdf/rss-en-all", source: "DW", host: "www.dw.com", needsGermany: true },
  { url: "https://www.thelocal.de/feeds/rss.php", source: "The Local", host: "www.thelocal.de" },
];

const MAX_AGE_DAYS = 45;

// Only these topics are shown: education, jobs & careers, Ausbildung, visas / immigration
const relevant =
  /universit|hochschule|\bstudents?\b|study (in|abroad)|international students|scholarship|tuition|\bdaad\b|ausbildung|apprentic|vocational|trainee|skilled (worker|labou?r|immigra)|fachkr|\bjobs?\b|job market|career|recruit|\bhir(e|ing)\b|work(ing)? (visa|permit)|job seeker|opportunity card|blue card|\bvisas?\b|residen(ce|cy) permit|citizenship|naturali[sz]ation|immigra|seafar|maritime|shipping|\bcrew|cruise|port of hamburg|german language|language course|\bgoethe\b/i;

// Obvious off-topic matches (sport, celebrity, war, gaming) are dropped even if a keyword matches
const offTopic = /job cuts|cutting jobs|cuts? (\d[\d,. ]* )?jobs|layoffs?|laid off|fired|unemploy|insolvenc|asylum|deport|rwanda|migrant hub|football|bundesliga|lawsuit|girlfriend|ukraine|russia|putin|\bwar\b|gaming|grand theft auto|christmas|recipe/i;

const germanHint = /german|deutsch|berlin|munich|hamburg|frankfurt|bundes|ausbildung|fachkr/i;

const entities: Record<string, string> = { amp: "&", lt: "<", gt: ">", quot: '"', apos: "'", nbsp: " " };

function decode(s: string) {
  return s
    .replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, "$1")
    .replace(/&#x([0-9a-f]+);/gi, (_, h) => String.fromCodePoint(parseInt(h, 16)))
    .replace(/&#(\d+);/g, (_, d) => String.fromCodePoint(parseInt(d, 10)))
    .replace(/&([a-z]+);/gi, (m, n) => entities[n.toLowerCase()] ?? m)
    .replace(/<[^>]*>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function parse(xml: string, feed: Feed): Headline[] {
  const out: Headline[] = [];
  for (const item of xml.match(/<item[\s>][\s\S]*?<\/item>/gi) ?? []) {
    const tag = (n: string) => item.match(new RegExp(`<${n}[^>]*>([\\s\\S]*?)</${n}>`, "i"))?.[1] ?? "";
    const title = decode(tag("title"));
    const url = decode(tag("link")).split("?")[0];
    const ms = Date.parse(decode(tag("dc:date") || tag("pubDate")));
    if (!title || Number.isNaN(ms)) continue;
    if (!url.startsWith(`https://${feed.host}/`)) continue; // only link to the publisher itself
    if (!relevant.test(title) || offTopic.test(title)) continue;
    if (feed.needsGermany && !germanHint.test(title) && !germanHint.test(url)) continue; // general world feed
    if (Date.now() - ms > MAX_AGE_DAYS * 86400_000 || ms > Date.now() + 3600_000) continue; // stale / future
    out.push({ id: url.toLowerCase(), title, url, source: feed.source, publishedAt: new Date(ms).toISOString() });
  }
  return out;
}

/** Latest topic-relevant headlines for the site-wide ticker. Cached on the server for 20 minutes. */
export async function getTickerNews(): Promise<Headline[]> {
  "use cache";

  const results = await Promise.allSettled(
    FEEDS.map(async (feed) => {
      const res = await fetch(feed.url, {
        headers: { "User-Agent": "Mozilla/5.0 (compatible; NovaglobalpathNews/1.0)" },
        signal: AbortSignal.timeout(10000),
      });
      if (!res.ok) throw new Error(`${feed.url} ${res.status}`);
      return parse(await res.text(), feed);
    }),
  );

  // Merge, drop duplicates (same link or same headline), newest first
  const seen = new Set<string>();
  const headlines = results
    .flatMap((r) => (r.status === "fulfilled" ? r.value : []))
    .sort((a, b) => Date.parse(b.publishedAt) - Date.parse(a.publishedAt))
    .filter((h) => {
      const k = h.title.toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();
      if (seen.has(h.id) || seen.has(k)) return false;
      seen.add(h.id);
      seen.add(k);
      return true;
    })
    .slice(0, 12);

  if (headlines.length === 0) {
    cacheLife({ stale: 60, revalidate: 300, expire: 900 }); // nothing / failed: retry in ~5 min
  } else {
    cacheLife({ stale: 300, revalidate: 1200, expire: 86400 }); // refresh every 20 minutes
  }
  return headlines;
}
