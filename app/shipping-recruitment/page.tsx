import type { Metadata } from "next";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import { CtaBand, PageHero } from "@/components/ui";

export const metadata: Metadata = {
  title: "Shipping & Maritime Recruitment",
  description: "Cargo and cruise ship recruitment and crewing partnerships for international shipping companies.",
};

const stats = [
  { value: "Cargo & Commercial", label: "Merchant shipping" },
  { value: "Cruise Ships", label: "Hotel & galley crew" },
  { value: "Deck & Engine", label: "Officers and ratings" },
  { value: "Employers", label: "Long-term partnerships" },
];

const sectors = [
  {
    id: "merchant",
    tab: "Merchant Shipping",
    title: "Cargo & Commercial Vessels",
    sub: "Deck and engine personnel",
    roles: [
      "Deck Officers",
      "Chief Officers and Second Officers",
      "Engine Officers",
      "Marine Engineers",
      "Able Seamen (AB)",
      "Ordinary Seamen (OS)",
      "Motormen and Oilers",
      "Wipers and Engine Ratings",
      "Other qualified deck and engine personnel",
    ],
  },
  {
    id: "cruise",
    tab: "Cruise Ships",
    title: "Cruise Ship Recruitment",
    sub: "Hotel, galley and guest services",
    roles: [
      "Executive Chefs and Sous Chefs",
      "Cooks and Commis Chefs",
      "Restaurant and Food Service Staff",
      "Bartenders and Bar Staff",
      "Housekeeping Personnel",
      "Cabin Stewards",
      "Receptionists and Guest Services",
      "Hotel and Galley Personnel",
    ],
  },
];

const services = [
  "Candidate sourcing and screening",
  "Qualification and experience verification",
  "Interview coordination",
  "Documentation coordination",
  "Recruitment partnership development",
  "Crew placement coordination",
];

export default function Shipping() {
  return (
    <>
      <PageHero
        eyebrow="Shipping & Maritime Recruitment"
        title="Connecting Maritime Professionals with"
        accent="Global Shipping Companies"
        text="Novaglobalpath supports maritime recruitment and crewing partnerships for international shipping companies, ship management organisations and cruise operators."
        image="/market-sea.jpg"
      />

      {/* Highlights strip */}
      <section className="bg-white">
        <dl className="mx-auto grid max-w-7xl grid-cols-2 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.value} className="px-4 py-6 text-center md:py-8 md:border-r md:border-navy/15 md:last:border-r-0">
              <dt className="text-base font-extrabold text-navy sm:text-lg md:text-xl">{s.value}</dt>
              <dd className="mt-1 text-sm text-slate-500">{s.label}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* Coverage: tabs */}
      <section id="coverage" className="scroll-mt-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 md:py-20">
          <div className="mx-auto mb-10 max-w-2xl text-center">
            <p className="text-base font-semibold tracking-widest text-red">RECRUITMENT COVERAGE</p>
            <h2 className="mt-3 text-3xl font-bold text-navy md:text-5xl">Roles We Recruit For</h2>
            <div className="mx-auto mt-4 h-1 w-16 rounded bg-gold" />
          </div>
          <div className="grid gap-6 lg:grid-cols-2">
            {sectors.map((s, i) => (
              <Reveal key={s.id} delay={i * 150}>
                <article className="group relative h-full overflow-hidden rounded-2xl border-2 border-slate-200 bg-slate-50 p-5 sm:p-8 transition-colors duration-300 hover:border-gold">
                  <p className="text-sm font-bold tracking-widest text-gold">{String(i + 1).padStart(2, "0")}</p>
                  <h3 className="mt-1 text-xl font-bold text-navy md:text-2xl">{s.title}</h3>
                  <p className="mt-1 text-slate-500">{s.sub}</p>
                  <ul className="mt-6 flex flex-wrap gap-3">
                    {s.roles.map((r) => (
                      <li
                        key={r}
                        className="rounded-full border border-slate-200 bg-white px-4 py-2 font-medium text-slate-700 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:border-gold hover:text-navy hover:shadow-md"
                      >
                        {r}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Employer services: stepped flow */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-12 md:py-20">
          <div className="mx-auto mb-10 max-w-2xl text-center md:mb-14">
            <p className="text-base font-semibold tracking-widest text-red">FOR EMPLOYERS</p>
            <h2 className="mt-3 text-3xl font-bold text-navy md:text-5xl">Our Recruitment Services</h2>
            <div className="mx-auto mt-4 h-1 w-16 rounded bg-gold" />
          </div>
          <ol className="grid gap-x-8 gap-y-8 md:gap-y-10 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <Reveal key={s} delay={(i % 3) * 100}>
                <li className="group relative border-t-4 border-navy/15 pt-6 transition-colors duration-300 hover:border-gold">
                  <span className="text-5xl font-black leading-none text-navy/10 md:text-6xl transition-colors duration-300 group-hover:text-gold">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-3 text-xl font-bold text-navy">{s}</h3>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Partnerships: image band */}
      <section className="relative isolate overflow-hidden text-white">
        <Image src="/market-sea.jpg" alt="" fill sizes="100vw" className="-z-20 object-cover object-[50%_65%]" />
        <div className="absolute inset-0 -z-10 bg-navy-deep/85" />
        <div className="mx-auto max-w-4xl px-4 py-12 text-center md:py-20">
          <p className="text-base font-semibold tracking-widest text-gold">PARTNERSHIPS</p>
          <div className="mx-auto mt-4 h-1 w-16 rounded bg-gold" />
          <p className="mt-5 text-lg leading-relaxed md:mt-6 md:text-3xl md:leading-snug">
            We aim to establish long-term partnerships with shipowners, ship management companies, cruise operators and
            authorised crewing agencies.
          </p>
        </div>
      </section>

      <CtaBand title="Employers & crewing partners" text="Talk to us about crew sourcing and placement coordination." />
    </>
  );
}
