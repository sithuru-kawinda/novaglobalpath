import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { CtaBand, PageHero } from "@/components/ui";

export const metadata: Metadata = {
  title: "Training & Professional Development",
  description: "German language preparation from A1, CV and interview preparation, and cultural orientation.",
};

const highlights = [
  { value: "From A1", label: "German language" },
  { value: "CV Writing", label: "Professional CVs" },
  { value: "Interviews", label: "Readiness practice" },
  { value: "Orientation", label: "Work and daily life" },
];

const items = [
  { title: "German Language Preparation", text: "Language preparation starting from A1 level." },
  { title: "CV & Interview Preparation", text: "Professional CV writing and interview readiness." },
  { title: "Professional & Cultural Orientation", text: "Know what to expect at work and in daily life in Germany." },
];

export default function Training() {
  return (
    <>
      <PageHero
        eyebrow="Training & Professional Development"
        title="Be Ready"
        accent="Before You Travel"
        text="Preparation for life and work in Germany, so that candidates are ready before they travel."
        image="/hero/training.webp"
      />

      {/* Highlights strip */}
      <section className="border-b border-navy/15 bg-white">
        <dl className="mx-auto grid max-w-7xl grid-cols-2 md:grid-cols-4">
          {highlights.map((h) => (
            <div key={h.value} className="px-4 py-6 text-center md:py-8 md:border-r md:border-navy/15 md:last:border-r-0">
              <dt className="text-base font-extrabold text-navy sm:text-lg md:text-xl">{h.value}</dt>
              <dd className="mt-1 text-sm text-slate-500">{h.label}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* Training programmes */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-12 md:py-16">
          <div className="mx-auto mb-8 max-w-2xl text-center md:mb-12">
            <p className="text-base font-semibold tracking-widest text-red">WHAT WE OFFER</p>
            <h2 className="mt-3 text-3xl font-bold text-navy md:text-5xl">Preparation for Germany</h2>
            <div className="mx-auto mt-4 h-1 w-16 rounded bg-gold" />
          </div>
          <div className="space-y-5">
            {items.map((it, i) => (
              <Reveal key={it.title}>
                <article className="group relative grid items-center gap-3 overflow-hidden rounded-xl border-2 border-slate-300 bg-white px-5 py-6 sm:gap-6 sm:px-6 sm:py-8 transition-colors duration-300 hover:border-navy lg:grid-cols-12 lg:gap-10 lg:px-10">
                  <span className="absolute inset-y-0 left-0 w-1 origin-top scale-y-0 bg-gold transition-transform duration-300 group-hover:scale-y-100" />
                  <span aria-hidden="true" className="text-5xl font-black leading-none text-navy/15 md:text-6xl transition-colors duration-300 group-hover:text-gold lg:col-span-2">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="lg:col-span-6">
                    <h3 className="text-xl font-bold text-navy md:text-2xl">{it.title}</h3>
                    <p className="mt-2 text-base text-slate-600 md:text-lg">{it.text}</p>
                  </div>
                  <div className="lg:col-span-4 lg:text-right">
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 py-2 font-semibold text-navy transition hover:text-red"
                    >
                      Ask about this <span aria-hidden="true">→</span>
                    </Link>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
