import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PartnerBadge from "@/components/PartnerBadge";
import Reveal from "@/components/Reveal";
import { CtaBand } from "@/components/ui";

export const metadata: Metadata = {
  title: "Education & University Admissions",
  description:
    "Bachelor's and Master's admissions guidance for Sri Lankan students heading to German universities and Hochschulen: course selection, applications, documents, visa preparation and arrival support.",
};

const highlights = [
  { value: "Bachelor's & Master's", label: "Programme guidance" },
  { value: "Universities & HAWs", label: "Hochschule selection" },
  { value: "English & German", label: "Taught programmes" },
  { value: "End-to-end", label: "Application to arrival" },
];

const pathways = [
  {
    title: "Bachelor's Degrees",
    who: "A/L completers and school leavers",
    text: "Find undergraduate programmes that match your results and interests, and understand whether you can apply directly or need a preparatory route first.",
    points: ["Course and university shortlisting", "Entry route check (direct entry or Studienkolleg)", "Application and document preparation"],
  },
  {
    title: "Master's Degrees",
    who: "Bachelor's degree holders",
    text: "Choose a postgraduate programme that fits your degree and career goals, and prepare a strong application for competitive courses.",
    points: ["Degree recognition and eligibility check", "Motivation letter and CV guidance", "Application tracking and follow-up"],
  },
  {
    title: "Healthcare & Biomedical",
    who: "Nursing, medical lab and biomedical graduates",
    text: "Guidance for graduates from health-related fields who want to continue studies in Germany's healthcare and life-science sector.",
    points: ["Programme matching by specialisation", "Qualification recognition guidance", "Language-requirement planning"],
  },
  {
    title: "Preparatory & Language",
    who: "Students who need a foundation year",
    text: "Plan the language and foundation steps that some applicants need before starting a degree, so nothing delays your admission.",
    points: ["German language roadmap", "Studienkolleg guidance", "Timeline planning for the right intake"],
  },
];

const steps = [
  { title: "Free Consultation", text: "We learn about your results, goals, budget and preferred field of study." },
  { title: "Profile & Document Review", text: "We assess your academic documents, MOI and language level to confirm which routes are open to you." },
  { title: "Course & University Selection", text: "We shortlist suitable universities and Hochschulen and explain admission requirements for each." },
  { title: "Application Preparation", text: "We help you prepare, check and submit applications and any required supporting documents." },
  { title: "Offer & Follow-up", text: "We follow up with universities and guide you through the offer, enrolment and any conditions." },
  { title: "Visa Preparation", text: "We assist with student visa documentation and appointment preparation. Decisions rest with the German authorities." },
  { title: "Arrival & Settling In", text: "Accommodation and arrival guidance so you are ready from your first day." },
];

const documents: { title: string; note?: string }[] = [
  { title: "Valid passport" },
  { title: "Academic transcripts and certificates" },
  { title: "Degree certificate", note: "For Master's applicants" },
  { title: "Medium of Instruction (MOI) letter" },
  { title: "English or German language certificate", note: "Where required" },
  { title: "CV / résumé" },
  { title: "Motivation letter and recommendations", note: "Where required" },
  { title: "Proof of financial resources", note: "e.g. blocked account, for the visa stage" },
];

const intakes = [
  { name: "Winter Semester", month: "October", start: "Classes start around October", note: "Applications usually open in the months before, often closing mid-year." },
  { name: "Summer Semester", month: "April", start: "Classes start around April", note: "Fewer programmes offer this intake; deadlines are typically in winter." },
];

const faqs = [
  {
    q: "Do I need to speak German to study in Germany?",
    a: "Not always. Many Master's and some Bachelor's programmes are taught in English, but German-taught programmes usually need German language proof. We help you choose the route that fits your level.",
  },
  {
    q: "Are there tuition fees at German universities?",
    a: "Many public universities charge little or no tuition, but you still pay a semester contribution, and some universities or states charge fees for international students. We confirm the fees for each programme you consider.",
  },
  {
    q: "Can I work while I study?",
    a: "International students are generally allowed to work part-time within limits set by German law. The exact rules depend on your residence permit, so always check the current regulations.",
  },
  {
    q: "Do A/L students go directly to a Bachelor's programme?",
    a: "It depends on your results and the university. Some applicants can apply directly, while others need a preparatory route such as Studienkolleg. We check this during your profile review.",
  },
  {
    q: "Can you guarantee admission or a visa?",
    a: "No. Admission is decided by the university and visas by German authorities. We provide guidance and application support only, and we never guarantee an outcome.",
  },
];

function Heading({ eyebrow, title, text, light }: { eyebrow: string; title: string; text?: string; light?: boolean }) {
  return (
    <div className="mx-auto mb-8 max-w-2xl text-center md:mb-12">
      <p className="text-base font-semibold tracking-widest text-red">{eyebrow}</p>
      <h2 className={`mt-3 text-3xl font-bold md:text-5xl ${light ? "text-white" : "text-navy"}`}>{title}</h2>
      <div className="mx-auto mt-4 h-1 w-16 rounded bg-gold" />
      {text && <p className={`mt-4 text-base md:mt-5 md:text-xl ${light ? "text-white/80" : "text-slate-600"}`}>{text}</p>}
    </div>
  );
}

export default function Education() {
  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-navy-deep text-white">
        <Image src="/education/hero.webp" alt="" fill loading="eager" fetchPriority="high" quality={75} sizes="100vw" className="-z-20 object-cover object-[50%_30%]" />
        <div className="absolute inset-0 -z-10 bg-navy-deep/75 md:hidden" />
        <div className="absolute inset-0 -z-10 hidden bg-gradient-to-r from-navy-deep via-navy-deep/75 to-navy-deep/10 md:block" />
        <PartnerBadge />
        <div className="animate-[hero-rise_0.5s_ease-out_both] site-container pb-16 pt-11 md:pb-20 md:pt-12">
          <p className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-medium md:backdrop-blur-md">
            <span className="h-2 w-2 rounded-full bg-gold" />
            Education &amp; Admissions
          </p>
          <h1 className="mt-5 max-w-3xl break-words text-4xl font-bold leading-[1.1] tracking-tight sm:mt-6 md:text-6xl">
            Your Gateway to <span className="text-[#c9941a]">Higher Education in Germany</span>
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/80 sm:mt-6 sm:text-lg md:text-xl">
            We guide Sri Lankan students through university and Hochschule admissions, from choosing the right
            programme to landing in Germany.
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:mt-9 sm:flex-row sm:flex-wrap sm:gap-4">
            <Link
              href="/contact"
              className="rounded-full bg-gold px-7 py-3.5 text-center font-semibold text-navy shadow-lg shadow-gold/20 transition hover:-translate-y-0.5 hover:brightness-110"
            >
              Book a Free Consultation →
            </Link>
            <a
              href="#process"
              className="rounded-full border border-white/40 bg-white/10 px-7 py-3.5 text-center font-semibold md:backdrop-blur-md transition hover:bg-white/20"
            >
              See How It Works
            </a>
          </div>
        </div>
      </section>

      {/* Highlights strip */}
      <section className="border-b border-navy/15 bg-white">
        <dl className="site-container grid grid-cols-2 md:grid-cols-4">
          {highlights.map((h) => (
            <div key={h.value} className="px-4 py-6 text-center md:py-8 md:border-r md:border-navy/15 md:last:border-r-0">
              <dt className="text-base font-extrabold text-navy sm:text-lg md:text-xl">{h.value}</dt>
              <dd className="mt-1 text-sm text-slate-500">{h.label}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* Why Germany */}
      <section className="bg-white">
        <div className="grid gap-10 site-container py-12 md:py-16 lg:grid-cols-2 lg:items-stretch lg:gap-12">
          <div className="flex flex-col">
            <p className="text-base font-semibold tracking-widest text-red">WHY GERMANY</p>
            <h2 className="mt-3 text-3xl font-bold text-navy md:text-5xl">A Smart Place to Study</h2>
            <div className="mt-4 h-1 w-16 rounded bg-gold" />
            <p className="mt-4 text-base text-slate-600 md:mt-5 md:text-lg">
              Germany is home to respected public universities and practice-oriented universities of applied
              sciences, with a wide choice of English-taught programmes.
            </p>
            <div className="mt-6 grid min-h-[18rem] flex-1 grid-cols-2 gap-4 sm:mt-8 sm:min-h-[22rem] sm:gap-5">
              <Reveal className="h-full">
                <div className="relative h-full border-2 border-navy/20 p-2">
                  <div className="relative h-full overflow-hidden">
                    <Image
                      src="/education/students-2.webp"
                      alt="A student and an adviser reviewing a textbook together in a library"
                      fill
                      sizes="(min-width: 1024px) 25vw, 50vw"
                      className="object-cover"
                    />
                  </div>
                </div>
              </Reveal>
              <Reveal delay={600} className="h-full">
                <div className="relative mt-10 h-[calc(100%-2.5rem)] border-2 border-gold p-2">
                  <div className="relative h-full overflow-hidden">
                    <Image
                      src="/education/students-3.webp"
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

          <ol className="flex flex-col divide-y divide-slate-200 border-y border-slate-200">
            {[
              ["Low-cost public education", "Many public universities charge little or no tuition."],
              ["Respected qualifications", "Degrees recognised by employers around the world."],
              ["Practice-oriented study", "Universities of applied sciences link study with industry."],
              ["Career opportunities", "Post-study options in Europe's largest economy."],
            ].map(([t, d], i) => (
              <li key={t} className="group flex flex-1 items-center gap-4 py-5 md:gap-6 md:py-7">
                <span aria-hidden="true" className="w-12 shrink-0 text-4xl font-black leading-none text-navy/15 md:w-14 md:text-5xl transition-colors duration-300 group-hover:text-gold">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="text-lg font-bold text-navy md:text-xl">{t}</h3>
                  <p className="mt-1 text-slate-600">{d}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Study pathways */}
      <section className="bg-slate-50">
        <div className="site-container py-12 md:py-16">
          <Heading
            eyebrow="STUDY PATHWAYS"
            title="Find the Route That Fits You"
            text="Whatever your starting point, we map out a realistic path into German higher education."
          />
          <div className="space-y-5">
            {pathways.map((p, i) => (
              <Reveal key={p.title}>
                <article className="group relative grid gap-5 overflow-hidden rounded-xl border-2 border-slate-300 bg-white px-5 py-6 sm:gap-6 sm:px-6 sm:py-8 transition-colors duration-300 hover:border-navy lg:grid-cols-12 lg:gap-10 lg:px-10">
                  <span className="absolute inset-y-0 left-0 w-1 origin-top scale-y-0 bg-gold transition-transform duration-300 group-hover:scale-y-100" />

                  <div className="lg:col-span-4">
                    <p className="text-sm font-bold tracking-widest text-gold">{String(i + 1).padStart(2, "0")}</p>
                    <h3 className="mt-1 text-xl font-bold text-navy md:text-2xl">{p.title}</h3>
                    <p className="mt-3 inline-block rounded-full bg-navy/5 px-3 py-1 text-xs font-semibold text-navy">
                      For: {p.who}
                    </p>
                  </div>

                  <p className="leading-relaxed text-slate-600 lg:col-span-4">{p.text}</p>

                  <div className="lg:col-span-4">
                    <ul className="space-y-2.5">
                      {p.points.map((pt) => (
                        <li key={pt} className="flex gap-3 text-slate-700">
                          <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-navy text-xs text-gold">
                            ✓
                          </span>
                          {pt}
                        </li>
                      ))}
                    </ul>
                    <Link
                      href="/contact"
                      className="mt-4 inline-flex items-center gap-2 py-2 font-semibold text-navy transition hover:text-red"
                    >
                      Ask about this route <span aria-hidden="true">→</span>
                    </Link>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="process" className="relative scroll-mt-20 overflow-hidden bg-navy-deep text-white">
        <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 glow text-blue/30" />
        <div className="pointer-events-none absolute -bottom-32 -left-32 h-96 w-96 glow text-gold/10" />
        <div className="relative site-container py-12 md:py-16">
          <div className="mx-auto mb-8 max-w-2xl text-center md:mb-12">
            <p className="text-base font-semibold tracking-widest text-gold">OUR PROCESS</p>
            <h2 className="mt-3 text-3xl font-bold md:text-5xl">From First Chat to First Lecture</h2>
            <div className="mx-auto mt-4 h-1 w-16 rounded bg-gold" />
          </div>
          <ol className="relative space-y-8 md:space-y-0">
            {/* Timeline spine */}
            <div
              aria-hidden="true"
              className="absolute bottom-0 left-5 top-0 w-px bg-gradient-to-b from-gold via-gold/40 to-transparent md:left-1/2"
            />
            {steps.map((s, i) => {
              const left = i % 2 === 0;
              return (
                <li
                  key={s.title}
                  className={`relative pl-14 sm:pl-16 md:w-1/2 md:pb-10 md:pl-0 ${
                    left ? "md:pr-14 md:text-right" : "md:ml-auto md:pl-14"
                  }`}
                >
                  <span
                    className={`absolute left-0 top-0 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-gold text-base font-bold text-navy ring-8 ring-navy-deep ${
                      left ? "md:left-auto md:right-0 md:translate-x-1/2" : "md:-translate-x-1/2"
                    }`}
                  >
                    {i + 1}
                  </span>
                  <Reveal delay={(i % 3) * 100}>
                    <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 transition duration-300 hover:-translate-y-1 hover:border-gold/60 hover:bg-white/10 sm:p-6">
                      <span
                        aria-hidden="true"
                        className={`pointer-events-none absolute -top-4 select-none text-8xl font-black leading-none text-white/5 ${
                          left ? "right-4 md:left-4 md:right-auto" : "right-4"
                        }`}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <h3 className="relative text-xl font-semibold text-gold">{s.title}</h3>
                      <p className="relative mt-2 text-white/75">{s.text}</p>
                    </div>
                  </Reveal>
                </li>
              );
            })}
          </ol>
        </div>
      </section>

      {/* Documents + intakes */}
      <section className="bg-white">
        <div className="grid gap-6 site-container py-12 md:gap-8 md:py-16 lg:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-3xl border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-5 shadow-sm sm:p-8">
              <p className="text-sm font-semibold tracking-widest text-red">DOCUMENT CHECKLIST</p>
              <h2 className="mt-2 text-2xl font-bold text-navy md:text-3xl">What You Will Typically Need</h2>
              <div className="mt-2 h-1 w-12 rounded bg-gold" />
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {documents.map((d) => (
                  <li
                    key={d.title}
                    className="group flex gap-3 rounded-xl border border-slate-200 bg-white p-4 transition duration-300 hover:-translate-y-0.5 hover:border-gold hover:shadow-md"
                  >
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-navy text-sm font-bold text-gold transition group-hover:bg-gold group-hover:text-navy">
                      ✓
                    </span>
                    <span>
                      <span className="block font-semibold leading-snug text-navy">{d.title}</span>
                      {d.note && <span className="mt-0.5 block text-sm text-slate-500">{d.note}</span>}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 flex gap-2 rounded-xl bg-gold/15 p-4 text-sm text-slate-700">
                <span aria-hidden="true">ℹ️</span>
                Requirements vary by university and programme. We confirm your exact list.
              </p>
            </div>
          </Reveal>

          <Reveal delay={150}>
            <div className="relative h-full overflow-hidden rounded-3xl bg-navy-deep p-5 text-white shadow-sm sm:p-8">
              <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 glow text-blue/30" />
              <div className="relative">
                <p className="text-sm font-semibold tracking-widest text-gold">INTAKES</p>
                <h2 className="mt-2 text-2xl font-bold md:text-3xl">Two Main Start Dates a Year</h2>
                <div className="mt-2 h-1 w-12 rounded bg-gold" />
                <div className="mt-6 space-y-4">
                  {intakes.map((t) => (
                    <div
                      key={t.name}
                      className="rounded-2xl border border-white/10 bg-white/5 p-5 transition duration-300 hover:border-gold/60 hover:bg-white/10"
                    >
                      <div className="flex flex-wrap items-center justify-between gap-2 sm:gap-4">
                        <h3 className="text-lg font-semibold text-gold sm:text-xl">{t.name}</h3>
                        <span className="rounded-full bg-gold px-3 py-1 text-sm font-bold text-navy">{t.month}</span>
                      </div>
                      <p className="mt-2 font-medium text-white/90">{t.start}</p>
                      <p className="mt-1 text-sm text-white/70">{t.note}</p>
                    </div>
                  ))}
                </div>
                <p className="mt-6 flex gap-2 rounded-xl border border-gold/40 bg-gold/10 p-4 text-sm text-white/85">
                  <span aria-hidden="true">⏰</span>
                  Deadlines differ for every university, so start preparing well in advance.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-slate-50">
        <div className="mx-auto grid max-w-6xl gap-8 site-px py-12 md:py-16 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-28">
              <p className="text-base font-semibold tracking-widest text-red">FAQ</p>
              <h2 className="mt-3 text-3xl font-bold text-navy md:text-5xl">Common Questions</h2>
              <div className="mt-4 h-1 w-16 rounded bg-gold" />
              <p className="mt-4 text-base text-slate-600 md:mt-5 md:text-lg">Quick answers to what students and parents ask us most.</p>
              <div className="relative mt-6 overflow-hidden rounded-2xl bg-navy-deep p-5 text-white md:mt-8 md:p-6">
                <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 glow text-gold/20" />
                <p className="relative text-lg font-semibold text-gold">Still have a question?</p>
                <p className="relative mt-1 text-sm text-white/75">Talk to our team and get a clear answer for your situation.</p>
                <Link
                  href="/contact"
                  className="relative mt-4 inline-flex items-center gap-2 rounded-full bg-gold px-5 py-2.5 font-semibold text-navy transition hover:bg-white"
                >
                  Ask us <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </div>

          <div className="space-y-4 lg:col-span-8">
            {faqs.map((f, i) => (
              <Reveal key={f.q} delay={i * 80}>
                <details name="education-faq" className="group rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 open:border-gold open:shadow-lg hover:border-gold/60">
                  <summary className="flex cursor-pointer list-none items-center gap-3 p-4 font-semibold sm:gap-4 sm:p-5 text-navy [&::-webkit-details-marker]:hidden">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-navy text-sm font-bold text-gold transition group-open:bg-gold group-open:text-navy">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="flex-1 text-base leading-snug sm:text-lg">{f.q}</span>
                    <span
                      className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-gold text-xl leading-none text-gold transition duration-300 group-open:rotate-45 group-open:bg-gold group-open:text-navy"
                      aria-hidden="true"
                    >
                      +
                    </span>
                  </summary>
                  <p className="mx-4 border-t border-slate-100 pb-5 pt-4 text-slate-600 sm:mx-5 sm:pl-14">{f.a}</p>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand title="Ready to study in Germany?" text="Tell us about your goals and we will map out your admission pathway." />
    </>
  );
}
