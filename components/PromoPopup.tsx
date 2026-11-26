"use client";

import { useEffect, useState } from "react";

const levels = [
  { code: "A1", label: "Beginner", bg: "bg-sky-500" },
  { code: "A2", label: "Elementary", bg: "bg-blue-600" },
  { code: "B1", label: "Intermediate", bg: "bg-green-600" },
  { code: "B2", label: "Upper Int.", bg: "bg-emerald-800" },
];
const perks = [
  "Experienced trainers",
  "Practical conversation",
  "Grammar and vocabulary",
  "Exam preparation (Goethe / TELC)",
  "Affordable course fees",
];

export default function PromoPopup() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setOpen(true), 800);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && close();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  function close() {
    setOpen(false);
  }

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-black/65 p-2 min-[400px]:p-3 sm:p-6"
      onClick={close}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label="German language classes A1 to B2"
        onClick={(e) => e.stopPropagation()}
        className="relative my-auto w-full max-w-sm sm:max-w-2xl md:max-w-3xl overflow-hidden rounded-2xl border-4 border-gold bg-gradient-to-b from-navy to-navy-deep text-white shadow-2xl shadow-black/50 ring-2 ring-gold/40 ring-offset-2 ring-offset-navy"
      >
        <button
          type="button"
          onClick={close}
          aria-label="Close"
          className="group absolute right-2 top-4 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-gold text-navy shadow-lg shadow-black/40 ring-2 ring-white/80 transition hover:scale-105 hover:bg-red hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        >
          <svg
            viewBox="0 0 24 24"
            className="h-5 w-5 transition-transform duration-200 group-hover:rotate-90"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            aria-hidden="true"
          >
            <path d="M6 6l12 12M18 6L6 18" />
          </svg>
        </button>

        {/* German flag stripe */}
        <div className="flex h-2 w-full" aria-hidden="true">
          <span className="flex-1 bg-black" />
          <span className="flex-1 bg-red" />
          <span className="flex-1 bg-gold" />
        </div>

        <div className="grid sm:grid-cols-2">
          {/* Left: headline */}
          <div className="flex flex-col justify-center gap-4 px-4 pb-4 pt-4 text-center min-[400px]:px-5 sm:px-6 sm:py-7 md:px-8 md:py-8">
            <p className="pr-10 text-left text-[11px] font-semibold uppercase tracking-wider text-gold sm:pr-0 sm:text-xs">
              Nova Global · Education &amp; Migration Consultants
            </p>

            <div>
              <h2 className="text-3xl font-black leading-none tracking-tight min-[400px]:text-4xl md:text-5xl">German</h2>
              <p className="mt-1 text-base font-bold min-[400px]:text-lg md:text-xl">Language Classes</p>
              <p className="mx-auto mt-2 inline-block rounded-full bg-gold px-5 py-1 text-xl font-black text-navy">
                A1 to B2
              </p>
            </div>

            <p className="text-sm text-white/80">
              Planning to work in Germany, start an Ausbildung or study there? Start learning German today!
            </p>

            <div className="grid grid-cols-2 gap-1.5 min-[400px]:grid-cols-4">
              {levels.map((l) => (
                <div key={l.code} className={`${l.bg} rounded-lg px-1 py-1.5`}>
                  <p className="text-lg font-black leading-none">{l.code}</p>
                  <p className="mt-0.5 text-[10px] font-medium leading-tight">{l.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: benefits + call to action */}
          <div className="flex flex-col justify-center gap-4 px-4 pb-5 text-center min-[400px]:px-5 sm:border-l sm:border-gold/30 sm:px-6 sm:py-7 md:px-8 md:py-8">
            <ul className="space-y-1.5 text-left text-sm">
              {perks.map((p) => (
                <li key={p} className="flex gap-2">
                  <span className="text-gold" aria-hidden="true">✔</span>
                  {p}
                </li>
              ))}
            </ul>

            <div className="-mx-4 -skew-y-1 bg-red px-4 py-2.5 shadow-lg min-[400px]:-mx-5 sm:mx-0 sm:rounded-md">
              <p className="skew-y-1 text-base font-black uppercase leading-tight">
                Register today – limited seats!
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <a
                href="https://wa.me/94766120921"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center justify-center rounded-full bg-[#25D366] px-4 py-2 text-sm font-bold text-white hover:brightness-95"
              >
                WhatsApp +94 76 612 0921
              </a>
              <a
                href="tel:+4915752832325"
                className="inline-flex min-h-11 items-center justify-center rounded-full bg-gold px-4 py-2 text-sm font-bold text-navy hover:brightness-95"
              >
                📞 Call +49 1575 2832325
              </a>
            </div>

            <p className="text-xs text-white/60">🇱🇰 Sri Lanka | 🇩🇪 Germany</p>
          </div>
        </div>
      </div>
    </div>
  );
}
