# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Next.js version warning

`AGENTS.md` states this is a newer Next.js (16.x, React 19) with breaking changes from what you may know. Before writing Next.js code, read the relevant guide in `node_modules/next/dist/docs/` (App Router docs are under `01-app/`; `02-pages/` is the legacy Pages Router). Heed deprecation notices.

## Commands

```bash
npm run dev     # dev server at http://localhost:3000
npm run build   # production build
npm run start   # serve production build
npm run lint    # eslint (flat config, next core-web-vitals + typescript)
npx tsc --noEmit  # type check
```

No test framework is configured.

## Architecture

Marketing site for Novaglobalpath (education, shipping/overseas recruitment, Ausbildung, visa services for Germany). App Router, TypeScript strict, Tailwind CSS 4. No `src/` directory; the `@/*` import alias maps to the repo root. Top-level dirs: `app/` (routes), `components/`, `lib/`.

- **Routes**: one folder per service page under `app/` (`about`, `education`, `shipping-recruitment`, `overseas-recruitment`, `ausbildung-germany`, `training`, `visa-services`, `contact`), plus `app/page.tsx` home.
- **Site content lives in `lib/`**: `lib/site.ts` holds contact details, socials, the `nav` list and `services` list (used by Header, Footer, home grid) — add a page by creating the route *and* adding it to `nav`/`services`. Its phone/WhatsApp/email values are placeholders (TODO from client). `lib/reviews.ts` is sample/placeholder testimonials.
- **Shared UI primitives** in `components/ui.tsx` (`PageHero`, `Section`, `BulletList`, `Card`, `ButtonLink`, `CtaBand`) — service pages are composed from these.
- **Root layout** (`app/layout.tsx`) renders `Header`, `NewsTicker`, `Footer`, `WhatsAppButton` around every page. It uses Inter via `next/font/google` and the global `LayoutProps<"/">` type helper. `NewsTicker` is an async server component wrapped in `<Suspense>` and passed into `Header` as a prop.
- **Live news ticker** (`lib/news.ts`): fetches DW / The Local RSS feeds, filters by topic regex and age, dedupes, and caches via `"use cache"` + `cacheLife` (shorter retry window when empty). This is the pattern for uncached/external data under `cacheComponents`.
- **Contact form**: `app/contact/EnquiryForm.tsx` (client) calls the `sendEnquiry` server action in `app/contact/actions.ts` (`useActionState`-style `{ok, message}` state). It only validates and `console.log`s — email delivery is an unimplemented TODO.
- **Styling**: `app/globals.css` has `@import "tailwindcss"` and an `@theme inline` block mapping brand CSS variables (`navy`, `navy-deep`, `blue`, `red`, `gold`) to Tailwind colors (`bg-navy`, `text-gold`, ...). Custom keyframes (hero, ticker) are also there.

Non-default settings in `next.config.ts` that affect how code must be written:
- `cacheComponents: true` — Cache Components model; dynamic/uncached data access in routes has specific rules, so check the docs in `node_modules/next/dist/docs/01-app/` (caching, `use cache`) before adding data fetching.
- `partialPrefetching: true` and `experimental.agentFeedback: true`.
- Tailwind is wired through Turbopack: a `rules` entry runs `*.css` through `@tailwindcss/turbopack`. There is no `postcss.config`.
