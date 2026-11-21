import type { Metadata } from "next";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import { CtaBand, PageHero } from "@/components/ui";

export const metadata: Metadata = {
  title: "About Us",
  description: "Novaglobalpath is an international consultancy and recruitment organisation focused on Germany.",
};

const highlights = [
  { value: "Germany", label: "Our primary focus" },
  { value: "Education", label: "University admissions" },
  { value: "Recruitment", label: "Careers and Ausbildung" },
  { value: "Maritime", label: "Cargo and cruise crewing" },
];

const serve = [
  "Students (A/L completers, Bachelor's and Master's applicants, healthcare and biomedical graduates)",
  "Ausbildung and vocational applicants",
  "Professionals and skilled workers",
  "Seafarers and cruise ship staff",
  "Employers, shipowners, ship managers and cruise operators",
  "Educational institutions and training partners",
];

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="Who"
        accent="We Are"
        text="Novaglobalpath (Shipping & Overseas Recruitment) is an international consultancy and recruitment organisation."
        image="/hero/about.png"
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

      {/* Intro */}
      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 py-12 md:py-16 lg:grid-cols-2 lg:gap-12">
          <div>
            <p className="text-base font-semibold tracking-widest text-red">ABOUT NOVAGLOBALPATH</p>
            <h2 className="mt-3 text-3xl font-bold text-navy md:text-5xl">Your Bridge to Opportunities in Germany</h2>
            <div className="mt-4 h-1 w-16 rounded bg-gold" />
            <p className="mt-5 text-base leading-relaxed text-slate-600 md:mt-6 md:text-xl md:leading-relaxed">
              We connect talented individuals, mainly from Sri Lanka, with education, vocational training and career
              opportunities in Germany and other international markets.
            </p>
            <p className="mt-4 text-base leading-relaxed text-slate-600 md:text-xl md:leading-relaxed">
              Our primary focus is Germany, with additional services in international maritime and cruise ship
              recruitment.
            </p>
          </div>

          <div className="grid min-h-[16rem] grid-cols-2 gap-4 sm:min-h-[22rem] sm:gap-5">
            <Reveal className="h-full">
              <div className="relative h-full border-2 border-navy/20 p-2">
                <div className="relative h-full overflow-hidden">
                  <Image
                    src="/education/students-2.png"
                    alt="A student and an adviser reviewing a textbook together in a library"
                    fill
                    sizes="(min-width: 1024px) 25vw, 50vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </Reveal>
            <Reveal delay={400} className="h-full">
              <div className="relative mt-10 h-[calc(100%-2.5rem)] border-2 border-gold p-2">
                <div className="relative h-full overflow-hidden">
                  <Image
                    src="/education/students-3.jpg"
                    alt="Two students studying together at a laptop in a library"
                    fill
                    sizes="(min-width: 1024px) 25vw, 50vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Mission & vision */}
      <section className="bg-navy">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 md:grid-cols-2">
          <Reveal>
            <article className="flex h-full flex-col items-center rounded-2xl text-center bg-white p-6 shadow-[0_16px_40px_-10px_rgba(0,0,0,0.5)] md:p-8">
              <span className="w-fit rounded-full bg-navy px-4 py-1.5 text-sm font-bold tracking-widest text-gold">
                OUR MISSION
              </span>
              <h3 className="mt-4 text-2xl font-bold text-navy md:text-3xl">What We Do</h3>
              <div className="mt-3 h-1 w-14 rounded bg-gold" />
              <p className="mt-4 text-base leading-relaxed text-slate-700 md:text-xl md:leading-relaxed">
                To create international opportunities through education, professional recruitment, vocational training
                and responsible migration support.
              </p>
            </article>
          </Reveal>
          <Reveal delay={150}>
            <article className="flex h-full flex-col items-center rounded-2xl text-center bg-white p-6 shadow-[0_16px_40px_-10px_rgba(0,0,0,0.5)] md:p-8">
              <span className="w-fit rounded-full bg-navy px-4 py-1.5 text-sm font-bold tracking-widest text-gold">
                OUR VISION
              </span>
              <h3 className="mt-4 text-2xl font-bold text-navy md:text-3xl">Where We&apos;re Heading</h3>
              <div className="mt-3 h-1 w-14 rounded bg-gold" />
              <p className="mt-4 text-base leading-relaxed text-slate-700 md:text-xl md:leading-relaxed">
                To become a trusted international partner connecting global talent, European employers and educational
                institutions.
              </p>
            </article>
          </Reveal>
        </div>
      </section>

      {/* Who we serve */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 md:py-16">
          <div className="mx-auto mb-8 max-w-2xl text-center md:mb-12">
            <p className="text-base font-semibold tracking-widest text-red">WHO WE SERVE</p>
            <h2 className="mt-3 text-3xl font-bold text-navy md:text-5xl">People and Partners We Work With</h2>
            <div className="mx-auto mt-4 h-1 w-16 rounded bg-gold" />
          </div>
          <ul className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {serve.map((s, i) => (
              <Reveal key={s} delay={(i % 3) * 100}>
                <li className="group relative flex h-full items-start gap-4 overflow-hidden rounded-xl border-2 border-navy/30 bg-white p-6 shadow-[0_8px_24px_-6px_rgba(10,25,60,0.3)] transition duration-300 hover:-translate-y-1 hover:border-navy">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-navy text-sm font-bold text-gold transition-colors duration-300 group-hover:bg-gold group-hover:text-navy">
                    {i + 1}
                  </span>
                  <span className="text-base font-semibold leading-snug text-navy md:text-lg">{s}</span>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
