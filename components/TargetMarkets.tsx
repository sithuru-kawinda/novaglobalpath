import Image from "next/image";

const markets = [
  {
    role: "Primary Destination",
    name: "Germany",
    code: "DE",
    text: "Education, Ausbildung, overseas recruitment and visa assistance.",
    chips: [["Education", "Ausbildung"], ["Recruitment", "Visa"]],
    image: "/market-de.webp",
    bg: "from-navy-deep via-navy to-blue",
  },
  {
    role: "Candidate Market",
    name: "Sri Lanka",
    code: "LK",
    text: "Source of students, trainees and skilled professionals; local consultation and support.",
    chips: [["Students", "Trainees", "Skilled professionals"]],
    image: "/market-lk.webp",
    bg: "from-[#5a0d26] via-[#8d153a] to-[#c9941a]",
  },
  {
    role: "Crewing Markets",
    name: "International Maritime",
    code: "SEA",
    text: "Cargo and cruise ship recruitment and crewing partnerships.",
    chips: [["Cargo", "Cruise", "Crewing partners"]],
    image: "/market-sea.webp",
    bg: "from-navy-deep via-navy to-blue",
  },
];

export default function TargetMarkets() {
  return (
    <section className="bg-gradient-to-b from-white via-slate-50 to-white">
      <div className="site-container pb-16 pt-12">
        <div className="mx-auto mb-10 max-w-2xl text-center md:mb-14">
          <p className="text-base font-semibold tracking-widest text-red">WHERE WE WORK</p>
          <h2 className="mt-3 text-3xl font-bold text-navy md:text-5xl">Our Target Markets</h2>
          <div className="mx-auto mt-4 h-1 w-16 rounded bg-gold" />
          <p className="mt-4 text-base text-slate-600 md:mt-5 md:text-xl">
            Connecting Sri Lankan talent with opportunities in Germany and international maritime markets.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {markets.map((m) => (
            <article
              key={m.name}
              className="group relative isolate flex min-h-[400px] sm:min-h-[480px] flex-col justify-end overflow-hidden rounded-3xl text-white shadow-[0_10px_40px_-5px_rgba(0,0,0,0.4)] ring-1 ring-black/5 transition duration-300 hover:-translate-y-2 hover:shadow-[0_20px_50px_-5px_rgba(0,0,0,0.55)]"
            >
              <div className={`absolute inset-0 -z-20 bg-gradient-to-br ${m.bg}`} />
              {m.image && (
                <Image
                  src={m.image}
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 33vw, 100vw"
                  className="-z-10 object-cover transition-transform duration-700 group-hover:scale-110"
                />
              )}
              <div className="absolute inset-0 -z-10 bg-gradient-to-t from-navy-deep via-navy-deep/70 to-navy-deep/10 transition-opacity duration-500 group-hover:opacity-95" />

              <span className="absolute right-5 top-3 text-5xl sm:right-6 sm:top-4 sm:text-7xl font-black tracking-tight text-white/20 transition-colors duration-300 group-hover:text-gold/40">{m.code}</span>

              <div className="p-6 sm:p-8 lg:p-6 xl:p-8">
                <p className="inline-flex rounded-full bg-gold px-4 py-1 text-xs font-bold tracking-widest text-navy">
                  {m.role.toUpperCase()}
                </p>
                <h3 className="mt-4 text-3xl font-bold sm:text-4xl">{m.name}</h3>
                <p className="mt-3 text-base leading-relaxed text-white/85 sm:text-lg">{m.text}</p>
                <div className="mt-5 space-y-2">
                  {m.chips.map((row) => (
                    <div key={row.join()} className="flex flex-wrap gap-1.5 xl:gap-2">
                      {row.map((c) => (
                        <span
                          key={c}
                          className="whitespace-nowrap rounded-full border border-white/30 bg-white/10 px-2.5 py-1 text-xs md:backdrop-blur transition-colors duration-300 group-hover:border-gold/60 group-hover:bg-gold/20 xl:px-3 xl:text-sm"
                        >
                          {c}
                        </span>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-6 text-center text-xs text-slate-400">
          Photo: Port of Hamburg via Wikimedia Commons, CC BY-SA.
        </p>
      </div>
    </section>
  );
}
