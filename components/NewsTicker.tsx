import { getTickerNews } from "@/lib/news";

/** Site-wide live headline strip (DW English – Germany feed). Cached server-side for 20 minutes. */
export default async function NewsTicker() {
  const items = await getTickerNews();
  if (items.length === 0) return null;

  // Duplicate the list so the marquee loops seamlessly
  const loop = [...items, ...items];

  return (
    <div className="bg-navy text-white" aria-label="Live Germany news">
      <div className="flex items-center gap-3 site-container py-2 sm:gap-4">
        <span className="relative z-10 flex shrink-0 items-center gap-2 rounded-full bg-gold px-2.5 py-1 text-[11px] font-bold tracking-wider text-navy sm:px-3 sm:text-xs">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-red" />
          </span>
          LIVE NEWS
        </span>

        <div className="news-ticker relative min-w-0 flex-1 overflow-hidden">
          <ul className="news-ticker-track flex w-max items-center gap-10 whitespace-nowrap text-sm">
            {loop.map((a, i) => (
              <li key={`${a.id}-${i}`} inert={i >= items.length} aria-hidden={i >= items.length}>
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
          <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 left-0 w-[3%] bg-gradient-to-r from-navy to-transparent" />
          <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 right-0 w-[3%] bg-gradient-to-l from-navy to-transparent" />
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
