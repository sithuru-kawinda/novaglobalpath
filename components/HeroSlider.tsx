"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import PartnerBadge from "./PartnerBadge";

// Hero images live in /public/hero
const slides = [
  {
    tag: "Germany 🇩🇪 · Our Primary Destination",
    label: "Germany",
    title: "Connecting Global Talent with",
    highlight: "Opportunities in Germany",
    text: "Your trusted partner for international education, maritime recruitment, overseas employment and visa application support.",
    image: "/hero/germany.webp",
    cta: { href: "#services", label: "Explore Our Services" },
  },
  {
    tag: "Education & Ausbildung",
    label: "Study & Train",
    title: "Study and Train in Germany with",
    highlight: "Expert Guidance",
    text: "From university admissions to vocational Ausbildung placements, we guide you at every step.",
    image: "/hero/education.webp",
    cta: { href: "/education", label: "Study in Germany" },
  },
  {
    tag: "Shipping & Maritime Recruitment",
    label: "Maritime",
    title: "Crewing Partnerships for",
    highlight: "Cargo and Cruise Operators",
    text: "Qualified deck, engine and hospitality professionals matched with global shipping companies.",
    image: "/hero/maritime.webp",
    cta: { href: "/shipping-recruitment", label: "Maritime Recruitment" },
  },
];

const iconProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.7,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  className: "h-7 w-7",
  "aria-hidden": true,
};

const quick = [
  {
    href: "/education",
    title: "Education",
    text: "University admissions",
    icon: (
      <svg {...iconProps}>
        <path d="M22 9 12 4 2 9l10 5 10-5Z" />
        <path d="M6 11.5V16c0 1.5 2.7 3 6 3s6-1.5 6-3v-4.5" />
        <path d="M22 9v6" />
      </svg>
    ),
  },
  {
    href: "/ausbildung-germany",
    title: "Ausbildung",
    text: "Vocational training",
    icon: (
      <svg {...iconProps}>
        <path d="M4 5.5A1.5 1.5 0 0 1 5.5 4H20v14H5.5A1.5 1.5 0 0 0 4 19.5v-14Z" />
        <path d="M4 19.5A1.5 1.5 0 0 0 5.5 21H20v-3" />
        <path d="M9 8h7M9 12h5" />
      </svg>
    ),
  },
  {
    href: "/overseas-recruitment",
    title: "Careers",
    text: "Jobs & recruitment",
    icon: (
      <svg {...iconProps}>
        <circle cx="9" cy="8" r="3.5" />
        <path d="M2.5 20c0-3.6 2.9-6 6.5-6s6.5 2.4 6.5 6" />
        <circle cx="17.5" cy="9" r="2.5" />
        <path d="M17.5 14c2.5 0 4 1.7 4 4.5" />
      </svg>
    ),
  },
  {
    href: "/visa-services",
    title: "Visa",
    text: "Application support",
    icon: (
      <svg {...iconProps}>
        <rect x="5" y="2.5" width="14" height="19" rx="2" />
        <circle cx="12" cy="10" r="3.5" />
        <path d="M8.5 10h7M12 6.5c-1.4 1.2-1.4 5.8 0 7M12 6.5c1.4 1.2 1.4 5.8 0 7M8.5 17.5h7" />
      </svg>
    ),
  },
];

const INTERVAL_MS = 5000;

export default function HeroSlider() {
  const [index, setIndex] = useState(0);
  // Only the first slide's image is fetched up front; the others load after the page has finished loading
  const [armed, setArmed] = useState(false);

  useEffect(() => {
    let t: ReturnType<typeof setTimeout>;
    const arm = () => {
      t = setTimeout(() => setArmed(true), 1000);
    };
    if (document.readyState === "complete") arm();
    else window.addEventListener("load", arm, { once: true });
    return () => {
      clearTimeout(t);
      window.removeEventListener("load", arm);
    };
  }, []);

  useEffect(() => {
    const id = setTimeout(() => setIndex((i) => (i + 1) % slides.length), INTERVAL_MS);
    return () => clearTimeout(id);
  }, [index]);

  return (
    <section className="relative">
      <div
        className="relative isolate overflow-hidden bg-navy-deep text-white"
        aria-roledescription="carousel"
      >
        {/* Backgrounds */}
        {slides.map((s, i) => (
          <div
            key={s.image}
            aria-hidden={i !== index}
            className={`absolute inset-0 -z-10 transition-opacity duration-1000 ${i === index ? "opacity-100" : "opacity-0"}`}
          >
            {(i === 0 || armed) && (
              <Image
                src={s.image}
                alt=""
                fill
                loading={i === 0 ? "eager" : "lazy"}
                fetchPriority={i === 0 ? "high" : "auto"}
                quality={75}
                sizes="100vw"
                className="object-cover"
                style={i === index ? { animation: `hero-zoom ${INTERVAL_MS + 1000}ms ease-out forwards` } : undefined}
              />
            )}
          </div>
        ))}
        <div className="absolute inset-0 -z-10 bg-navy-deep/75 lg:hidden" />
        <div className="absolute inset-0 -z-10 hidden bg-gradient-to-r from-navy-deep via-navy-deep/80 to-navy-deep/10 lg:block" />
        <div className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-t from-navy-deep/80 to-transparent" />

        <PartnerBadge />

        <div className="grid items-start gap-10 site-container pb-36 pt-11 md:pt-12 lg:min-h-[620px]">
          {/* Copy */}
          <div key={index} className="w-full lg:w-2/3" style={{ animation: "hero-rise 700ms ease-out both" }}>
            <p className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-medium text-white md:backdrop-blur-md">
              <span className="h-2 w-2 rounded-full bg-gold" />
              {slides[index].tag}
            </p>
            <h1 className="mt-5 break-words text-4xl font-bold leading-[1.08] tracking-tight sm:mt-6 md:text-6xl">
              {slides[index].title}{" "}
              <span className="text-[#c9941a]">
                {slides[index].highlight}
              </span>
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-white/80 sm:mt-6 sm:text-lg">{slides[index].text}</p>
            <div className="mt-7 flex flex-col gap-3 sm:mt-9 sm:flex-row sm:flex-wrap sm:gap-4">
              <Link
                href={slides[index].cta.href}
                className="rounded-full bg-gold px-7 py-3.5 text-center font-semibold text-navy shadow-lg shadow-gold/20 transition hover:-translate-y-0.5 hover:brightness-110"
              >
                {slides[index].cta.label} →
              </Link>
              <Link
                href="/contact"
                className="rounded-full border border-white/40 bg-white/10 px-7 py-3.5 text-center font-semibold md:backdrop-blur-md transition hover:bg-white/20"
              >
                Contact Novaglobalpath
              </Link>
            </div>
          </div>
        </div>

        {/* Slide dots */}
        <div className="absolute inset-x-0 bottom-28 flex justify-center gap-2">
          {slides.map((s, i) => (
            <button
              key={s.label}
              type="button"
              aria-label={`Show slide ${i + 1}`}
              onClick={() => setIndex(i)}
              className="group flex h-6 items-center px-1"
            >
              <span className={`block h-2 rounded-full transition-all ${i === index ? "w-8 bg-gold" : "w-2 bg-white/50"}`} />
            </button>
          ))}
        </div>
      </div>

      {/* Floating quick-access bar */}
      <div className="relative z-10 mx-auto -mt-16 max-w-6xl site-px">
        <div className="grid grid-cols-2 overflow-hidden rounded-2xl bg-white shadow-2xl shadow-navy/25 ring-1 ring-slate-200 lg:grid-cols-4">
          {quick.map((q, i) => (
            <Link
              key={q.href}
              href={q.href}
              className={`group relative flex flex-col items-center gap-3 px-3 py-5 text-center transition-colors sm:flex-row sm:gap-4 sm:px-6 sm:py-6 sm:text-left ${
                i % 2 === 1 ? "bg-gold hover:bg-[#ffcb2e]" : "bg-white hover:bg-amber-50"
              } ${i % 2 === 1 ? "border-l border-slate-200" : ""} ${i >= 2 ? "border-t border-slate-200" : ""} ${
                i > 0 ? "lg:border-l" : ""
              } lg:border-t-0`}
            >
              <span className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gold transition-transform duration-300 group-hover:scale-x-100" />
              <span className={`flex h-12 w-12 shrink-0 items-center sm:h-14 sm:w-14 justify-center rounded-xl text-navy transition-colors ${i % 2 === 1 ? "bg-navy/10 group-hover:bg-navy/15" : "bg-navy/5 group-hover:bg-gold/30"}`}>
                {q.icon}
              </span>
              <span className="min-w-0 flex-1">
                <span className="block text-base font-semibold text-navy sm:text-lg">{q.title}</span>
                <span className={`block text-sm ${i % 2 === 1 ? "text-navy/90" : "text-slate-500"}`}>{q.text}</span>
              </span>
              <span className={`hidden transition-transform group-hover:translate-x-1 sm:block ${i % 2 === 1 ? "text-navy/70" : "text-slate-400"}`} aria-hidden="true">
                →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
