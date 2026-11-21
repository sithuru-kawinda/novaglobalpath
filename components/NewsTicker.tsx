import { getTickerNews } from "@/lib/news";

/** Site-wide live headline strip (DW English – Germany feed). Cached server-side for 20 minutes. */
export default async function NewsTicker() {
  const items = await getTickerNews();
  if (items.length === 0) return null;

  // Duplicate the list so the marquee loops seamlessly
  const loop = [...items, ...items];

  return (
    <div className="bg-navy text-white" aria-label="Live Germany news">
      <div className="mx-auto flex max-w-7xl items-center gap-3 px-4 py-2 sm:gap-4">
        <span className="relative z-10 flex shrink-0 items-center gap-2 rounded-full bg-gold px-2.5 py-1 text-[11px] font-bold tracking-wider text-navy sm:px-3 sm:text-xs">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-red" />
          </span>
          LIVE NEWS
        </span>

        <div className="news-ticker relative min-w-0 flex-1 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_3%,black_97%,transparent)]">
          <ul className="news-ticker-track flex w-max items-center gap-10 whitespace-nowrap text-sm">
            {loop.map((a, i) => (
              <li key={`${a.id}-${i}`} aria-hidden={i >= items.length}>
                <a
                  href={a.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-white/90 transition hover:text-gold"
                >
                  <span className="text-gold">●</span>
                  {a.title}
                  <span className="text-xs text-white/50">— {a.source}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <a
          href="https://www.thelocal.de/"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden shrink-0 text-xs text-white/60 hover:text-gold sm:block"
        >
          Sources: DW · The Local
        </a>
      </div>
    </div>
  );
}
