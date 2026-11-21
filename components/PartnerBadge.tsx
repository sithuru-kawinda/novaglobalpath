"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const partners = [
  { name: "Technische Universität Berlin", image: "/partners/tu-berlin.png" },
  { name: "Karlsruher Institut für Technologie (KIT)", image: "/partners/kit.png" },
  { name: "Universität Hamburg", image: "/partners/uni-hamburg.png" },
  { name: "Technical University of Munich", image: "/partners/tum.png" },
  { name: "Ludwig-Maximilians-Universität München", image: "/partners/lmu.png" },
  { name: "Hochschule Bonn-Rhein-Sieg", image: "/partners/h-brs.png" },
  { name: "Deutscher Bildungs-Award 2025/2026", image: "/partners/bildungs-award.png" },
];

const PARTNER_INTERVAL_MS = 3500;

/** Rotating "UNI PARTNERS" badge for the top-right corner of a hero. Desktop only. */
export default function PartnerBadge() {
  const [i, setI] = useState(0);

  useEffect(() => {
    const id = setTimeout(() => setI((n) => (n + 1) % partners.length), PARTNER_INTERVAL_MS);
    return () => clearTimeout(id);
  }, [i]);

  const prev = (i - 1 + partners.length) % partners.length;

  return (
    <div className="absolute right-6 top-[54px] hidden w-40 flex-col items-center gap-3 lg:flex">
      <div className="relative h-20 w-full [perspective:800px]">
        {partners.map((p, n) => {
          const angle = n === i ? 0 : n === prev ? 90 : -90;
          return (
            <div
              key={p.name}
              aria-hidden={n !== i}
              className="absolute inset-0 overflow-hidden rounded-2xl bg-white shadow-xl ring-2 ring-[#c9941a] transition-all duration-1000 ease-in-out"
              style={{ transform: `rotateY(${angle}deg)`, opacity: n === i ? 1 : 0 }}
            >
              <Image src={p.image} alt={p.name} fill sizes="160px" className="object-contain p-2" />
            </div>
          );
        })}
      </div>
      <p className="badge-title relative overflow-hidden rounded-full border border-[#c9941a] bg-gold px-4 py-1 text-[11px] font-bold tracking-widest text-navy">
        UNI PARTNERS
        <span className="badge-title-shine pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-white/30" />
      </p>
    </div>
  );
}
