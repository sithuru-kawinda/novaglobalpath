import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { site, whatsappLink } from "@/lib/site";
import PartnerBadge from "./PartnerBadge";

export function PageHero({
  eyebrow,
  title,
  accent,
  text,
  image = "/hero/germany.webp",
  cta = true,
}: {
  eyebrow?: string;
  title: string;
  accent?: string;
  text?: string;
  image?: string;
  cta?: boolean;
}) {
  return (
    <section className="relative isolate overflow-hidden bg-navy-deep text-white">
      <Image src={image} alt="" fill loading="eager" fetchPriority="high" quality={75} sizes="100vw" className="-z-20 object-cover object-[50%_40%]" />
      <div className="absolute inset-0 -z-10 bg-navy-deep/75 md:hidden" />
      <div className="absolute inset-0 -z-10 hidden bg-gradient-to-r from-navy-deep via-navy-deep/75 to-navy-deep/10 md:block" />
      <PartnerBadge />
      <div className="mx-auto max-w-7xl animate-[hero-rise_0.5s_ease-out_both] px-4 pb-16 pt-11 md:pb-20 md:pt-12">
        {eyebrow && (
          <p className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-medium md:backdrop-blur-md">
            <span className="h-2 w-2 rounded-full bg-gold" />
            {eyebrow}
          </p>
        )}
        <h1 className="mt-5 max-w-3xl break-words text-4xl font-bold leading-[1.1] tracking-tight sm:mt-6 md:text-6xl">
          {title}
          {accent && <> <span className="text-[#c9941a]">{accent}</span></>}
        </h1>
        {text && <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/80 sm:mt-6 sm:text-lg md:text-xl">{text}</p>}
        {cta && (
          <div className="mt-7 flex flex-col gap-3 sm:mt-9 sm:flex-row sm:flex-wrap sm:gap-4">
            <Link
              href="/contact"
              className="rounded-full bg-gold px-7 py-3.5 text-center font-semibold text-navy shadow-lg shadow-gold/20 transition hover:-translate-y-0.5 hover:brightness-110"
            >
              Talk to Our Team →
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}

export function Section({ title, children, tint }: { title?: string; children: ReactNode; tint?: boolean }) {
  return (
    <section className={tint ? "bg-slate-50" : ""}>
      <div className="mx-auto max-w-7xl px-4 py-14">
        {title && <h2 className="mb-8 text-2xl font-bold text-navy md:text-3xl">{title}</h2>}
        {children}
      </div>
    </section>
  );
}

export function BulletList({ items, ordered }: { items: string[]; ordered?: boolean }) {
  const Tag = ordered ? "ol" : "ul";
  return (
    <Tag className={`space-y-2 pl-5 ${ordered ? "list-decimal" : "list-disc"} marker:text-gold`}>
      {items.map((i) => (
        <li key={i}>{i}</li>
      ))}
    </Tag>
  );
}

export function Card({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
      <h3 className="mb-4 text-lg font-semibold text-navy">{title}</h3>
      {children}
    </div>
  );
}

export function ButtonLink({
  href,
  children,
  variant = "gold",
}: {
  href: string;
  children: ReactNode;
  variant?: "gold" | "outline";
}) {
  const styles =
    variant === "gold" ? "bg-gold text-navy hover:brightness-110" : "border border-white text-white hover:bg-white/10";
  return (
    <Link href={href} className={`inline-block rounded-lg px-6 py-3 font-semibold transition ${styles}`}>
      {children}
    </Link>
  );
}

export function CtaBand({
  title = "Ready to start your journey?",
  text = "Send us an enquiry and our team will guide you through the next steps.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="bg-white px-4 py-10">
      <div className="mx-auto grid max-w-7xl overflow-hidden rounded-3xl shadow-[0_20px_60px_-10px_rgba(0,0,0,0.45)] ring-1 ring-black/5 lg:grid-cols-2">
        <div className="relative flex flex-col justify-center overflow-hidden bg-gradient-to-br from-navy-deep via-navy to-blue p-6 text-white sm:p-8 md:p-10">
          <div className="pointer-events-none absolute -bottom-24 -left-24 h-64 w-64 glow text-gold/20" />
          <p className="relative text-sm font-semibold tracking-widest text-gold">GET STARTED</p>
          <h2 className="relative mt-2 text-2xl font-bold capitalize leading-tight sm:text-3xl md:text-4xl">{title}</h2>
          <div className="relative mt-5 h-1 w-16 rounded bg-gold" />
          <p className="relative mt-4 text-base text-white/80 sm:mt-5 sm:text-lg md:text-xl">{text}</p>
          <div className="relative mt-6 flex flex-wrap items-center gap-4">
            <Link
              href="/contact"
              className="w-full rounded-full bg-gold px-6 py-3.5 text-center font-semibold text-navy shadow-lg shadow-black/30 transition hover:-translate-y-0.5 hover:brightness-110 sm:w-auto sm:px-8 sm:py-4"
            >
              Contact Novaglobalpath →
            </Link>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border-2 border-white/60 px-6 py-3.5 font-semibold sm:w-auto sm:px-8 sm:py-4 text-white transition hover:-translate-y-0.5 hover:border-[#0a7d4f] hover:bg-[#0a7d4f] hover:text-white"
            >
              <svg viewBox="0 0 32 32" fill="currentColor" className="h-5 w-5" aria-hidden="true">
                <path d="M16.003 3C8.832 3 3 8.83 3 16c0 2.294.6 4.53 1.74 6.5L3 29l6.68-1.72A12.94 12.94 0 0 0 16.003 29C23.172 29 29 23.17 29 16S23.172 3 16.003 3zm0 23.7a10.7 10.7 0 0 1-5.45-1.49l-.39-.23-3.96 1.02 1.06-3.86-.25-.4A10.67 10.67 0 0 1 5.3 16c0-5.9 4.8-10.7 10.7-10.7S26.7 10.1 26.7 16s-4.8 10.7-10.697 10.7zm5.87-8c-.32-.16-1.9-.94-2.2-1.05-.3-.1-.51-.16-.73.16-.21.32-.83 1.05-1.02 1.27-.19.21-.37.24-.7.08-.32-.16-1.35-.5-2.57-1.58-.95-.85-1.6-1.9-1.78-2.22-.19-.32-.02-.5.14-.66.14-.14.32-.37.48-.56.16-.19.21-.32.32-.54.1-.21.05-.4-.03-.56-.08-.16-.73-1.76-1-2.4-.26-.63-.53-.54-.73-.55h-.62c-.21 0-.56.08-.85.4-.3.32-1.12 1.1-1.12 2.68s1.15 3.11 1.3 3.32c.16.21 2.26 3.45 5.47 4.84.76.33 1.36.53 1.83.68.77.24 1.47.21 2.02.13.62-.09 1.9-.78 2.17-1.53.27-.75.27-1.4.19-1.53-.08-.13-.3-.21-.62-.37z" />
              </svg>
              Chat on WhatsApp
            </a>
          </div>
          <p className="relative mt-5 flex flex-wrap gap-x-6 gap-y-1 text-sm text-white/70">
            <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="transition hover:text-gold">{site.phone}</a>
            <a href={`mailto:${site.email}`} className="transition hover:text-gold">{site.email}</a>
          </p>
        </div>
        <div className="relative min-h-[200px] lg:min-h-0">
          <Image src="/cta-new.webp" alt="" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-navy/30 to-transparent" />
        </div>
      </div>
    </section>
  );
}
