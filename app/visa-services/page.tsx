import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { CtaBand, PageHero } from "@/components/ui";

export const metadata: Metadata = {
  title: "Visa Consulting & Application Assistance",
  description: "Administrative guidance and application preparation assistance for Germany visa applications.",
};

const highlights = [
  { value: "6 Visa Categories", label: "Study, work, visit & more" },
  { value: "Document Checklists", label: "Prepared for you" },
  { value: "Appointment Prep", label: "Ready on the day" },
  { value: "Completeness Review", label: "Before you submit" },
];

const visas = [
  { title: "Student Visa", text: "University admission and study-related visa documentation support." },
  { title: "Ausbildung Visa", text: "Vocational training contract and application documentation support." },
  { title: "Employment / Work Visa", text: "Employment-related documentation and application preparation." },
  { title: "Visitor / Tourist Visa", text: "Schengen visitor and tourism application preparation." },
  { title: "Family Reunion Visa", text: "Documentation and application guidance for eligible family members." },
  { title: "Business Visa", text: "Business travel and supporting documentation preparation." },
];

const support = [
  "Initial application assessment",
  "Document checklist preparation",
  "Application form assistance",
  "Appointment preparation",
  "Travel itinerary and supporting document guidance",
  "Application review for completeness",
  "Interview preparation where applicable",
];

export default function Visa() {
  return (
    <>
      <PageHero
        eyebrow="Visa Services"
        title="Professional Guidance for Your"
        accent="Germany Visa Application"
        text="We provide administrative guidance and application preparation assistance for individuals planning to travel to Germany."
        image="/hero/visa.png"
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

      {/* Visa categories */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 md:py-16">
          <div className="mx-auto mb-8 max-w-2xl text-center md:mb-12">
            <p className="text-base font-semibold tracking-widest text-red">VISA CATEGORIES</p>
            <h2 className="mt-3 text-3xl font-bold text-navy md:text-5xl">Which Visa Do You Need?</h2>
            <div className="mx-auto mt-4 h-1 w-16 rounded bg-gold" />
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {visas.map((v, i) => (
              <Reveal key={v.title} delay={(i % 3) * 100}>
                <article className="group relative h-full overflow-hidden rounded-xl border-2 border-navy/40 bg-white p-5 sm:p-7 shadow-[0_8px_24px_-6px_rgba(10,25,60,0.35)] transition duration-300 hover:-translate-y-1 hover:border-navy hover:shadow-[0_16px_36px_-8px_rgba(10,25,60,0.5)]">
                  <span className="absolute inset-y-0 left-0 w-1 origin-top scale-y-0 bg-gold transition-transform duration-300 group-hover:scale-y-100" />
                  <p className="text-sm font-bold tracking-widest text-gold">{String(i + 1).padStart(2, "0")}</p>
                  <h3 className="mt-1 text-xl font-bold text-navy">{v.title}</h3>
                  <p className="mt-3 text-slate-600">{v.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Support services */}
      <section className="bg-navy text-white">
        <div className="mx-auto max-w-7xl px-4 py-12 md:py-16">
          <div className="mx-auto mb-8 max-w-2xl text-center md:mb-12">
            <p className="text-base font-semibold tracking-widest text-gold">OUR SUPPORT</p>
            <h2 className="mt-3 text-3xl font-bold text-white md:text-5xl">Our Visa Support Services</h2>
            <div className="mx-auto mt-4 h-1 w-16 rounded bg-gold" />
          </div>
          <ul className="mx-auto grid max-w-6xl gap-4 md:grid-cols-2 lg:grid-cols-3">
            {support.map((s, i) => (
              <Reveal key={s} delay={(i % 3) * 100}>
                <li className="flex h-full items-center gap-4 rounded-xl bg-white px-5 py-5 shadow-md transition duration-300 hover:-translate-y-0.5 hover:shadow-xl">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gold text-sm font-bold text-navy">
                    ✓
                  </span>
                  <span className="text-base font-semibold leading-snug text-navy md:text-lg">{s}</span>
                </li>
              </Reveal>
            ))}
            <Reveal delay={100} className="md:col-span-2">
              <li className="flex h-full flex-col items-start justify-between gap-3 rounded-xl border-2 border-gold px-5 py-5 text-white sm:flex-row sm:items-center sm:gap-4 sm:px-6">
                <span className="text-lg font-semibold">Ready to start your visa application?</span>
                <Link
                  href="/contact"
                  className="shrink-0 rounded-full bg-gold px-5 py-2.5 font-semibold text-navy transition hover:brightness-110"
                >
                  Get in touch →
                </Link>
              </li>
            </Reveal>
          </ul>
        </div>
      </section>

      {/* Important notice */}
      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-4 py-10 md:py-14">
          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_12px_32px_-8px_rgba(10,25,60,0.25)]">
            <div className="flex items-center gap-3 bg-navy px-6 py-4 md:px-8">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-red text-lg font-bold text-white" aria-hidden="true">
                !
              </span>
              <p className="text-sm font-semibold tracking-widest text-gold">IMPORTANT NOTICE</p>
            </div>
            <div className="grid divide-y divide-slate-200 md:grid-cols-3 md:divide-x md:divide-y-0">
              <div className="p-6 md:p-8">
                <h3 className="font-bold text-navy">Our Role</h3>
                <p className="mt-2 text-slate-600">
                  Novaglobalpath provides consultancy and administrative application support.
                </p>
              </div>
              <div className="p-6 md:p-8">
                <h3 className="font-bold text-navy">Visa Decisions</h3>
                <p className="mt-2 text-slate-600">
                  Visa decisions are exclusively made by the relevant German authorities and diplomatic missions.
                </p>
              </div>
              <div className="p-6 md:p-8">
                <h3 className="font-bold text-navy">No Guarantee</h3>
                <p className="mt-2 text-slate-600">
                  We do not guarantee visa approval or represent ourselves as a German immigration authority or law firm.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
