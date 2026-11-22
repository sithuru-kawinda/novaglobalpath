import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { CtaBand, PageHero } from "@/components/ui";

export const metadata: Metadata = {
  title: "Overseas Recruitment – Germany",
  description: "Employment opportunities in Germany for qualified and skilled candidates, with support for candidates and employers.",
};

const highlights = [
  { value: "Germany", label: "Employment destination" },
  { value: "Qualified & Skilled", label: "Candidate profiles" },
  { value: "Candidates", label: "Registration to documentation" },
  { value: "Employers", label: "Matching and support" },
];

const support = [
  { title: "Registration & Screening", text: "Candidate registration and profile screening." },
  { title: "CV & Interviews", text: "CV preparation and interview coordination." },
  { title: "Employer Matching", text: "Employer matching and documentation support." },
  { title: "Visa Documentation", text: "Employment-related visa documentation guidance." },
];

export default function Overseas() {
  return (
    <>
      <PageHero
        eyebrow="Overseas Recruitment – Germany"
        title="Employment Opportunities"
        accent="in Germany"
        text="We present opportunities for qualified and skilled candidates, and support both candidates and employers throughout the process."
        image="/hero/overseas.webp"
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

      {/* How we support candidates */}
      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 md:py-16 lg:grid-cols-12 lg:gap-12 lg:items-center">
          <div className="lg:col-span-5">
            <p className="text-base font-semibold tracking-widest text-red">FOR CANDIDATES</p>
            <h2 className="mt-3 text-3xl font-bold text-navy md:text-5xl">How We Support Candidates</h2>
            <div className="mt-4 h-1 w-16 rounded bg-gold" />
            <p className="mt-4 text-base text-slate-600 md:mt-5 md:text-lg">
              From your first registration to your employment documents, we guide you through each step.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-flex rounded-full bg-navy px-7 py-3.5 font-semibold text-white shadow-lg shadow-navy/20 transition hover:-translate-y-0.5 hover:bg-navy-deep"
            >
              Register Your Interest →
            </Link>
          </div>

          <ol className="divide-y divide-slate-200 border-y border-slate-200 lg:col-span-7">
            {support.map((s, i) => (
              <Reveal key={s.title} delay={i * 100}>
                <li className="group flex items-center gap-4 py-5 md:gap-6 md:py-7">
                  <span aria-hidden="true" className="w-12 shrink-0 text-4xl font-black md:w-16 md:text-5xl leading-none text-navy/15 transition-colors duration-300 group-hover:text-gold">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="text-xl font-bold text-navy">{s.title}</h3>
                    <p className="mt-1 text-slate-600">{s.text}</p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Sectors and requirements */}
      <section className="relative overflow-hidden bg-navy-deep text-white">
        <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 glow text-blue/30" />
        <div className="pointer-events-none absolute -bottom-32 -left-32 h-96 w-96 glow text-gold/10" />
        <div className="relative mx-auto max-w-4xl px-4 py-12 text-center md:py-16">
          <p className="text-base font-semibold tracking-widest text-gold">SECTORS AND REQUIREMENTS</p>
          <h2 className="mt-3 text-3xl font-bold md:text-5xl">Opportunities Coming Soon</h2>
          <div className="mx-auto mt-4 h-1 w-16 rounded bg-gold" />
          <p className="mt-5 text-base leading-relaxed text-white/80 md:mt-6 md:text-xl">
            Detailed sectors, job types and requirements will be published here once confirmed. Please contact us to
            discuss your profile.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex rounded-full bg-gold px-7 py-3.5 font-semibold text-navy shadow-lg shadow-gold/20 transition hover:-translate-y-0.5 hover:brightness-110"
          >
            Discuss Your Profile →
          </Link>
        </div>
      </section>

      <CtaBand title="Candidates and employers" text="Register your interest or send an employer enquiry." />
    </>
  );
}
