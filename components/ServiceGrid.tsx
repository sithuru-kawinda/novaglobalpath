import Link from "next/link";
import type { ReactNode } from "react";
import { services } from "@/lib/site";

const svg = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  className: "h-8 w-8",
  "aria-hidden": true,
};

const icons: Record<string, ReactNode> = {
  "/education": (
    <svg {...svg}>
      <path d="M22 9 12 4 2 9l10 5 10-5Z" />
      <path d="M6 11.5V16c0 1.5 2.7 3 6 3s6-1.5 6-3v-4.5" />
      <path d="M22 9v6" />
    </svg>
  ),
  "/shipping-recruitment": (
    <svg {...svg}>
      <path d="M12 3v10" />
      <circle cx="12" cy="5" r="1.5" />
      <path d="M8 8h8" />
      <path d="M4 14c0 4 3.6 7 8 7s8-3 8-7" />
      <path d="M4 14l2.5-1M20 14l-2.5-1" />
    </svg>
  ),
  "/ausbildung-germany": (
    <svg {...svg}>
      <path d="M14.7 6.3a4 4 0 0 0-5.4 5.1L3.5 17.2a1.8 1.8 0 0 0 2.5 2.5l5.8-5.8a4 4 0 0 0 5.1-5.4l-2.6 2.6-2.3-.6-.6-2.3 2.3-2.6Z" />
    </svg>
  ),
  "/overseas-recruitment": (
    <svg {...svg}>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18" />
      <path d="M12 3c2.6 2.5 3.8 5.5 3.8 9s-1.2 6.5-3.8 9c-2.6-2.5-3.8-5.5-3.8-9S9.4 5.5 12 3Z" />
    </svg>
  ),
  "/visa-services": (
    <svg {...svg}>
      <rect x="5" y="2.5" width="14" height="19" rx="2" />
      <circle cx="12" cy="10" r="3.5" />
      <path d="M8.5 10h7M12 6.5c-1.4 1.2-1.4 5.8 0 7M12 6.5c1.4 1.2 1.4 5.8 0 7M8.5 17.5h7" />
    </svg>
  ),
  "/training": (
    <svg {...svg}>
      <path d="M4 5.5A1.5 1.5 0 0 1 5.5 4H20v14H5.5A1.5 1.5 0 0 0 4 19.5v-14Z" />
      <path d="M4 19.5A1.5 1.5 0 0 0 5.5 21H20v-3" />
      <path d="M9 8h7M9 12h5" />
    </svg>
  ),
};

export default function ServiceGrid() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-slate-50 to-white">
      <div className="pointer-events-none absolute -left-24 top-40 h-72 w-72 glow text-gold/10" />
      <div className="pointer-events-none absolute -right-24 bottom-10 h-72 w-72 glow text-blue/10" />
      <div className="relative mx-auto max-w-7xl px-4 pb-16 pt-12">
        <div className="mx-auto mb-10 max-w-2xl text-center md:mb-14">
          <p className="text-base font-semibold tracking-widest text-red">WHAT WE DO</p>
          <h2 className="mt-3 text-3xl font-bold text-navy md:text-5xl">Our Core Business Areas</h2>
          <div className="mx-auto mt-4 h-1 w-16 rounded bg-gold" />
          <p className="mt-4 text-base text-slate-600 md:mt-5 md:text-xl">
            Six specialist services under one trusted brand, guiding you from first enquiry to arrival in Germany.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Link
              key={s.href}
              href={s.href}
              className="group relative flex flex-col rounded-lg bg-white p-6 shadow-[0_10px_40px_-5px_rgba(0,0,0,0.35)] ring-1 ring-black/5 transition duration-300 hover:-translate-y-1 hover:bg-navy hover:shadow-[0_20px_50px_-5px_rgba(0,0,0,0.5)]"
            >
              <span className="absolute right-6 top-4 text-5xl font-bold text-gold/25 transition-colors duration-300 group-hover:text-white/15">0{i + 1}</span>

              <span className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-gold bg-navy text-white ring-4 ring-gold/20 transition-colors duration-300 group-hover:bg-gold group-hover:text-navy group-hover:ring-white/20 [&>svg]:h-6 [&>svg]:w-6">
                {icons[s.href]}
              </span>

              <h3 className="mt-5 text-xl font-semibold text-navy-deep sm:text-2xl transition-colors duration-300 group-hover:text-white">{s.title}</h3>
              <p className="mt-2 flex-1 text-[15px] leading-relaxed text-slate-600 transition-colors duration-300 group-hover:text-white/80">{s.text}</p>

              <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-navy-deep transition-colors duration-300 group-hover:text-gold">
                Learn more
                <span className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true">→</span>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
