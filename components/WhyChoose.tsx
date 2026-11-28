import type { ReactNode } from "react";

const svg = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  className: "h-7 w-7",
  "aria-hidden": true,
};

const reasons: { title: string; text: string; icon: ReactNode }[] = [
  {
    title: "Germany-Focused Network",
    text: "Germany-focused international service network.",
    icon: (
      <svg {...svg}>
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18" />
        <path d="M12 3c2.6 2.5 3.8 5.5 3.8 9s-1.2 6.5-3.8 9c-2.6-2.5-3.8-5.5-3.8-9S9.4 5.5 12 3Z" />
      </svg>
    ),
  },
  {
    title: "Europe–Sri Lanka Link",
    text: "Recruitment connections between Europe and Sri Lanka.",
    icon: (
      <svg {...svg}>
        <path d="M4 8h14l-3.5-3.5M20 16H6l3.5 3.5" />
      </svg>
    ),
  },
  {
    title: "Everything Under One Roof",
    text: "Multiple service areas under one organisation.",
    icon: (
      <svg {...svg}>
        <path d="m12 3 9 5-9 5-9-5 9-5Z" />
        <path d="m3 13 9 5 9-5" />
        <path d="m3 17.5 9 5 9-5" />
      </svg>
    ),
  },
  {
    title: "Transparent Guidance",
    text: "Candidate-focused guidance and transparent application processes.",
    icon: (
      <svg {...svg}>
        <path d="M12 3 4.5 6v5.5c0 4.3 3.1 8 7.5 9.5 4.4-1.5 7.5-5.2 7.5-9.5V6L12 3Z" />
        <path d="m8.5 12 2.5 2.5 4.5-5" />
      </svg>
    ),
  },
  {
    title: "Employer Coordination",
    text: "Professional employer coordination.",
    icon: (
      <svg {...svg}>
        <rect x="3" y="7" width="18" height="13" rx="2" />
        <path d="M9 7V5a1.5 1.5 0 0 1 1.5-1.5h3A1.5 1.5 0 0 1 15 5v2" />
        <path d="M3 13h18" />
      </svg>
    ),
  },
  {
    title: "Education & Career Support",
    text: "International education and career support.",
    icon: (
      <svg {...svg}>
        <path d="M22 9 12 4 2 9l10 5 10-5Z" />
        <path d="M6 11.5V16c0 1.5 2.7 3 6 3s6-1.5 6-3v-4.5" />
        <path d="M22 9v6" />
      </svg>
    ),
  },
];

export default function WhyChoose() {
  return (
    <section className="relative overflow-hidden bg-navy-deep text-white">
      <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 glow text-blue/30" />
      <div className="pointer-events-none absolute -bottom-32 -left-32 h-96 w-96 glow text-gold/10" />

      <div className="relative site-container py-12 md:py-16">
        {/* Intro panel */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-base font-semibold tracking-widest text-gold">WHY US</p>
          <h2 className="mt-3 text-3xl font-bold leading-tight md:text-5xl">Why Choose Novaglobalpath?</h2>
          <div className="mx-auto mt-5 h-1 w-16 rounded bg-gold" />
          <p className="mt-5 text-base leading-relaxed text-white/75 md:mt-6 md:text-lg">
            A trusted partner connecting talented people with education, training and career opportunities in
            Germany, with clear guidance at every step.
          </p>
        </div>

        {/* Reasons: open list, no cards */}
        <ol className="mt-10 grid md:mt-16 gap-x-12 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((r, i) => (
            <li key={r.title} className="group relative border-t border-white/15 py-6 md:py-8">
              <span className="absolute left-0 top-[-1px] h-px w-0 bg-gold transition-all duration-500 group-hover:w-full" />
              <div className="flex items-center gap-4">
                <span className="text-5xl font-bold leading-none text-transparent [-webkit-text-stroke:1.5px_rgba(245,184,0,0.7)] transition-colors duration-300 group-hover:text-gold">
                  0{i + 1}
                </span>
                <span className="ml-auto flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-gold transition-colors duration-300 group-hover:bg-gold group-hover:text-navy">
                  {r.icon}
                </span>
              </div>
              <h3 className="mt-4 text-xl font-semibold md:mt-5 md:text-2xl">{r.title}</h3>
              <p className="mt-2 leading-relaxed text-white/65">{r.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
