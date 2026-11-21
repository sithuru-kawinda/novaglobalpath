import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import { CtaBand, PageHero } from "@/components/ui";

export const metadata: Metadata = {
  title: "Ausbildung Germany",
  description: "Vocational education and training in Germany: popular fields, support steps and language requirements.",
};

const highlights = [
  { value: "Workplace Training", label: "Practical experience" },
  { value: "Theoretical Education", label: "Classroom learning" },
  { value: "9 Popular Fields", label: "Healthcare to IT" },
  { value: "Application to Visa", label: "Step-by-step support" },
];

const fields = [
  "Nursing and healthcare",
  "Hotel management",
  "Restaurant and hospitality",
  "Cook and culinary training",
  "Mechatronics",
  "Electrical engineering",
  "Automotive technology",
  "Logistics and warehouse operations",
  "IT and technical professions",
];

const steps = [
  "Career counselling",
  "Selection of suitable Ausbildung occupations",
  "German language preparation guidance",
  "CV and motivation letter preparation",
  "Application assistance",
  "Employer interview coordination",
  "Training contract documentation support",
  "Visa application preparation guidance",
];

export default function Ausbildung() {
  return (
    <>
      <PageHero
        eyebrow="Ausbildung Germany"
        title="Start Your Professional Career Through"
        accent="Ausbildung in Germany"
        text="Ausbildung is Germany's vocational education and training system, combining practical workplace training with theoretical education."
        image="/hero/ausbildung.png"
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

      {/* Fields */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 md:py-16">
          <div className="mx-auto mb-8 max-w-2xl text-center md:mb-12">
            <p className="text-base font-semibold tracking-widest text-red">POPULAR FIELDS</p>
            <h2 className="mt-3 text-3xl font-bold text-navy md:text-5xl">Choose Your Ausbildung Field</h2>
            <div className="mx-auto mt-4 h-1 w-16 rounded bg-gold" />
            <p className="mt-4 text-base text-slate-600 md:mt-5 md:text-lg">
              We assist eligible international applicants interested in pursuing vocational training opportunities in
              Germany.
            </p>
          </div>
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {fields.map((f, i) => (
              <Reveal key={f} delay={(i % 3) * 100}>
                <li className="group relative flex h-full items-center gap-4 overflow-hidden rounded-xl border-2 border-slate-200 bg-slate-50 px-5 py-5 sm:gap-5 sm:px-6 sm:py-6 transition-colors duration-300 hover:border-navy">
                  <span className="absolute inset-y-0 left-0 w-1 origin-top scale-y-0 bg-gold transition-transform duration-300 group-hover:scale-y-100" />
                  <span className="text-3xl font-black leading-none text-navy/15 md:text-4xl transition-colors duration-300 group-hover:text-gold">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-base font-semibold text-navy md:text-lg">{f}</span>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Support steps */}
      <section className="relative overflow-hidden bg-navy-deep text-white">
        <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-blue/30 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-gold/10 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-4 py-12 md:py-16">
          <div className="mx-auto mb-8 max-w-2xl text-center md:mb-12">
            <p className="text-base font-semibold tracking-widest text-gold">OUR SUPPORT</p>
            <h2 className="mt-3 text-3xl font-bold md:text-5xl">Our Ausbildung Support</h2>
            <div className="mx-auto mt-4 h-1 w-16 rounded bg-gold" />
          </div>
          <ol className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) => (
              <li
                key={s}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-gold/60 hover:bg-white/10"
              >
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute -top-3 right-4 select-none text-7xl font-black leading-none text-white/5"
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="relative flex h-11 w-11 items-center justify-center rounded-full bg-gold text-lg font-bold text-navy">
                  {i + 1}
                </span>
                <h3 className="relative mt-4 text-lg font-semibold">{s}</h3>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Language note */}
      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-4 py-10 md:py-14">
          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_12px_32px_-8px_rgba(10,25,60,0.25)]">
            <div className="flex items-center gap-3 bg-navy px-5 py-4 md:px-8">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gold text-sm font-bold text-navy" aria-hidden="true">
                DE
              </span>
              <p className="text-sm font-semibold tracking-widest text-gold">LANGUAGE REQUIREMENTS</p>
            </div>
            <div className="p-5 md:p-8">
              <p className="text-base text-slate-700 md:text-lg">
                German language requirements depend on the following:
              </p>
              <ul className="mt-5 grid gap-3 sm:grid-cols-3">
                {["The occupation", "The training provider", "The visa category"].map((f, i) => (
                  <li
                    key={f}
                    className="flex items-center gap-3 rounded-xl border-2 border-navy/20 bg-slate-50 px-4 py-4 transition duration-300 hover:border-gold hover:bg-white"
                  >
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-navy text-sm font-bold text-gold">
                      {i + 1}
                    </span>
                    <span className="font-semibold text-navy">{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
