import Image from "next/image";

const partners = [
  { name: "Technische Universität Berlin", image: "/partners/tu-berlin.png" },
  { name: "Karlsruher Institut für Technologie (KIT)", image: "/partners/kit.png" },
  { name: "Universität Hamburg", image: "/partners/uni-hamburg.png" },
  { name: "Technical University of Munich", image: "/partners/tum.png" },
  { name: "Ludwig-Maximilians-Universität München", image: "/partners/lmu.png" },
  { name: "Hochschule Bonn-Rhein-Sieg", image: "/partners/h-brs.png" },
  { name: "Deutscher Bildungs-Award 2025/2026", image: "/partners/bildungs-award.png" },
];

function Logos({ hidden = false }: { hidden?: boolean }) {
  return (
    <ul className="flex shrink-0 items-center gap-6 pr-6" aria-hidden={hidden || undefined}>
      {partners.map((p) => (
        <li
          key={p.name}
          className="relative h-20 w-36 shrink-0 sm:h-24 sm:w-44 overflow-hidden rounded-2xl bg-white shadow-lg ring-1 ring-white/20 transition duration-300 hover:scale-105"
        >
          <Image
            src={p.image}
            alt={hidden ? "" : p.name}
            fill
            sizes="(min-width: 640px) 176px, 144px"
            className="object-contain p-2.5"
          />
        </li>
      ))}
    </ul>
  );
}

export default function Partners() {
  return (
    <section className="relative overflow-hidden bg-navy-deep py-12 text-white md:py-16">
      <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 glow text-blue/30" />
      <div className="pointer-events-none absolute -bottom-32 -left-32 h-96 w-96 glow text-gold/10" />
      <div className="mx-auto mb-8 max-w-2xl px-4 text-center md:mb-12">
        <p className="text-base font-semibold tracking-widest text-gold">PARTNERSHIPS</p>
        <h2 className="mt-3 text-3xl font-bold md:text-5xl">Our University Partners</h2>
        <div className="mx-auto mt-4 h-1 w-16 rounded bg-gold" />
        <p className="mt-4 text-base text-white/80 md:mt-5 md:text-xl">
          Pathways to leading German universities for ambitious students.
        </p>
      </div>

      <div className="partners-marquee relative overflow-hidden">
        <div className="partners-track flex w-max">
          <Logos />
          <Logos hidden />
          <Logos hidden />
          <Logos hidden />
        </div>
        <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 left-0 w-[8%] bg-gradient-to-r from-navy-deep to-transparent" />
        <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 right-0 w-[8%] bg-gradient-to-l from-navy-deep to-transparent" />
      </div>
    </section>
  );
}
