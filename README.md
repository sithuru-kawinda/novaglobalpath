# Novaglobalpath

Marketing website for **Novaglobalpath** (NOVA GROUP), a consultancy and recruitment organisation that connects talent, mainly from Sri Lanka, with education, vocational training and career opportunities in Germany, plus international maritime and cruise-ship recruitment.

> Novaglobalpath provides consultancy and administrative application support only. Visa decisions are made exclusively by the relevant German authorities and diplomatic missions. Nothing on the site guarantees admission, employment or visa approval.

## Pages

| Route | Purpose |
| --- | --- |
| `/` | Home: hero slider, services, why choose us, target markets, university partners, testimonials |
| `/education` | University and Hochschule admissions: pathways, process, documents, intakes, FAQ |
| `/shipping-recruitment` | Cargo and cruise ship recruitment, roles and employer services |
| `/overseas-recruitment` | Employment opportunities in Germany for skilled candidates |
| `/ausbildung-germany` | Vocational training (Ausbildung): fields, support steps, language note |
| `/training` | German language, CV and interview preparation, cultural orientation |
| `/visa-services` | Visa categories and application support |
| `/about` | Who we are, mission, vision, who we serve |
| `/contact` | Enquiry form (sent by email) and contact details |

## Tech stack

- [Next.js](https://nextjs.org) 16 (App Router, Turbopack) and React 19
- TypeScript (strict)
- Tailwind CSS 4, wired through Turbopack (no `postcss.config`)
- [Nodemailer](https://nodemailer.com) for the enquiry email (Gmail SMTP)

This is a newer Next.js with breaking changes. Before changing framework-level code, read the relevant guide in `node_modules/next/dist/docs/`. `next.config.ts` enables `cacheComponents` and `partialPrefetching`, which change how data fetching and caching must be written.

## Getting started

Requirements: Node.js 20 or newer and npm.

```bash
npm install
npm run dev        # http://localhost:3000
```

| Script | What it does |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Create a production build |
| `npm run start` | Serve the production build |
| `npm run lint` | Run ESLint |
| `npx tsc --noEmit` | Type-check |

No test framework is configured.

## Environment variables

Create `.env.local` in the project root. It is git-ignored and must never be committed.

```bash
# Gmail account that SENDS the enquiry emails
GMAIL_USER=your-address@gmail.com
# A Gmail App Password (Google Account > Security > 2-Step Verification > App passwords),
# not the normal account password
GMAIL_APP_PASSWORD=xxxx xxxx xxxx xxxx

# Where enquiries are delivered
ENQUIRY_TO=novagerman@outlook.de
```

Restart the dev server after changing this file. When deploying, set the same variables in the hosting provider's environment settings, because `.env.local` is not uploaded.

If the variables are missing or Google rejects the login, the form shows a friendly error and the real reason is logged in the server console.

## Project structure

```
app/
  layout.tsx              Root layout: Header, news ticker, Footer, WhatsApp button, scroll animations
  page.tsx                Home
  <route>/page.tsx        One folder per page (see the table above)
  contact/
    EnquiryForm.tsx       Client form (custom service dropdown)
    actions.ts            Server action that validates and emails the enquiry
  globals.css             Tailwind import, brand colour tokens, keyframes
components/
  ui.tsx                  PageHero, CtaBand and other shared building blocks
  Header.tsx, Footer.tsx  Site navigation (with Recruitment dropdown and mobile menu)
  HeroSlider.tsx          Home hero
  PartnerBadge.tsx        Rotating "UNI PARTNERS" badge shown in every hero
  Reveal.tsx              Scroll-in animation wrapper
  ScrollAnimations.tsx    Site-wide scroll reveal for every section below the hero
  NewsTicker.tsx          Live Germany news strip
  ServiceGrid, WhyChoose, TargetMarkets, Partners, Reviews   Home sections
lib/
  site.ts                 Contact details, social links, navigation and services lists
  reviews.ts              Testimonials
  news.ts                 RSS headline fetching and caching for the ticker
public/                   Images (hero photos in public/hero, partner logos in public/partners)
.claude/skills/           Project skills, including mobile-friendly
```

## Editing content

- **Contact details and navigation:** edit `lib/site.ts`. The phone, WhatsApp and email values are placeholders until the client supplies the real ones. Empty social links are hidden in the footer.
- **Adding a page:** create `app/<route>/page.tsx`, then add it to `nav`/`services` in `lib/site.ts` and to the `items` list in `components/Header.tsx`.
- **Hero images:** pass `image="/hero/<file>"` to `PageHero`. Use wide images, around 1920px, so they stay sharp.
- **Testimonials:** edit `lib/reviews.ts` (currently sample content).
- **Brand colours:** `navy`, `navy-deep`, `blue`, `red` and `gold` are defined in `app/globals.css` and used as Tailwind colours (`bg-navy`, `text-gold`, and so on).

## Design notes

- **Mobile first:** every page is responsive. The `.claude/skills/mobile-friendly` skill describes the checklist (no horizontal scroll, 44px tap targets, 16px form text) used when adding or changing pages.
- **Animations:** heroes rise in on load and sections fade in on scroll. Reduced-motion settings are respected.
- **Live news ticker:** headlines come from public DW and The Local RSS feeds, filtered to education, jobs, Ausbildung and visa topics, and cached for 20 minutes. No API key is required.

## Known to-dos

- Replace the placeholder phone, WhatsApp and email in `lib/site.ts` and add social profile URLs.
- Replace the sample testimonials in `lib/reviews.ts` with real ones.
- Publish the sector and requirement details on the Overseas Recruitment page once confirmed.
- Use larger source images for the About and Contact heroes, which are currently low resolution.
- The Home hero's third slide uses `/hero/maritime.png` (a German flag photo); swap it for a maritime image.

## Deployment

The easiest option is [Vercel](https://vercel.com/new). Set the environment variables above in the project settings and run the standard Next.js build (`npm run build`). See the [Next.js deployment docs](https://nextjs.org/docs/app/building-your-application/deploying) for other hosts.

## License and credits

Proprietary. All rights reserved by Novaglobalpath. The Port of Hamburg photo used on Home is from Wikimedia Commons (CC BY-SA). Confirm usage rights for all other stock-style images before launch.
