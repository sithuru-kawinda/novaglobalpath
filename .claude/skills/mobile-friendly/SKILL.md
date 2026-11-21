---
name: mobile-friendly
description: Make a Novaglobalpath page or component fully mobile-friendly (responsive Tailwind 4, touch-friendly, no horizontal scroll). Use when the user asks to make a page responsive, mobile-friendly, or to fix mobile layout, one page at a time.
---

# Mobile-friendly workflow (Novaglobalpath)

Stack: Next.js 16 App Router, React 19, Tailwind CSS 4 (mobile-first: unprefixed = mobile, `sm:` 640, `md:` 768, `lg:` 1024, `xl:` 1280). Brand tokens: `navy`, `navy-deep`, `blue`, `red`, `gold`.

## Process: ONE page at a time
1. Do the page the user named (or the next in the order below). Never start the next page without asking the user "Okay to move to <next page>?" and waiting for a yes.
2. Read the page file and every component it imports.
3. Audit against the checklist below at three widths: **360px** (small phone), **768px** (tablet), **1280px** (desktop must not regress).
4. Fix with Tailwind classes only. Keep desktop (`lg:`+) looking exactly as it is; change the unprefixed/`sm:`/`md:` values.
5. Verify: `npx tsc --noEmit` and `npx eslint <changed files>`. If the dev server is available, check in a 360px viewport. If you did not view it in a browser, say so.
6. Report in plain language: what changed per section, what you could not verify, then ask permission for the next page.

Page order: global (Header, Footer, WhatsAppButton, NewsTicker) → Home → Education → Shipping → Overseas → Ausbildung → Training → Visa Services → About → Contact.

## Checklist
**Layout**
- No horizontal scroll at 360px. Watch: fixed widths (`w-[22rem]`, `min-w-*`), `whitespace-nowrap`, long unbroken text (emails -> `break-words`/`break-all`), absolutely positioned blobs (`-right-32` etc. need a parent with `overflow-hidden`).
- Multi-column grids start as 1 column: `grid gap-5 sm:grid-cols-2 lg:grid-cols-3`. Avoid `grid-cols-2` on mobile for long text; ok for short stat labels.
- Section padding scales: `px-4 py-10 md:py-16` (not a flat `py-16/py-20` on mobile).
- Side-by-side splits (`lg:grid-cols-2`, `lg:col-span-*`) must stack cleanly; decide image/text order with `order-*` if the image should come second on mobile.
- `sticky` side columns only at `lg:` (`lg:sticky`); never sticky on mobile.
- Fixed-height containers (`h-[..]`, `min-h-[22rem]`) should be `lg:`-only or `aspect-*`.

**Typography**
- Headlines scale: `text-3xl md:text-5xl` (hero `text-4xl md:text-6xl`; check long words like "Ausbildung" do not overflow at 360px; use `break-words` or reduce to `text-[2rem]` if needed).
- Body copy `text-base` on mobile (>=16px); `text-lg/xl` from `md:`.
- Line length / big decorative numbers (`text-6xl` watermarks) should shrink on mobile.

**Touch**
- Tap targets >= 44x44px (buttons `py-3` min, icon buttons `h-11 w-11`).
- Hover-only UI (dropdowns, `group-hover` reveals) needs a tap equivalent. Hover lift effects are fine but must not hide content.
- Form inputs: font-size >= 16px (prevents iOS zoom), correct `type`/`inputMode`/`autoComplete`, labels visible.
- Spacing between adjacent tappable items >= 8px.

**Media**
- `next/image` with accurate `sizes` (`100vw` on mobile) and `fill` + `object-cover` or `aspect-*`; no fixed-pixel widths.
- Hero text stays readable on a photo: gradient overlay must be strong enough on mobile (`from-navy-deep/90` for small screens; the left-to-right gradient fades out where text sits on narrow screens).
- Respect `motion-reduce` for animations (Reveal already does).

**Components to remember**
- `PageHero` (components/ui.tsx), `CtaBand`, `Reveal`, `Header` (mobile menu is `xl:hidden`; desktop nav is `xl:flex`), `Footer`, `WhatsAppButton` (fixed; must not cover form buttons/CTAs: add bottom padding or offset on mobile).
- `cacheComponents` is on: do not introduce uncached data access while editing.

## Do not
- Do not change copy, colours, or desktop design unless asked.
- Do not add new dependencies.
- Do not claim it is verified on a device if only the type check/lint ran.
