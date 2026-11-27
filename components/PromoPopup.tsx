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
        className="relative my-auto w-full max-w-[17rem] min-[400px]:max-w-[18.5rem] sm:max-w-2xl md:max-w-3xl overflow-hidden rounded-2xl border-[3px] border-gold sm:border-4 bg-gradient-to-b from-navy to-navy-deep text-white shadow-2xl shadow-black/50 ring-2 ring-gold/40 ring-offset-2 ring-offset-navy"
      >
        <button
          type="button"
          onClick={close}
          aria-label="Close"
          className="group absolute right-1.5 top-3.5 sm:right-2 sm:top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-gold sm:h-11 sm:w-11 text-navy shadow-lg shadow-black/40 ring-2 ring-white/80 transition hover:scale-105 hover:bg-red hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        >
          <svg
            viewBox="0 0 24 24"
            className="h-4 w-4 transition-transform sm:h-5 sm:w-5 duration-200 group-hover:rotate-90"
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
          <div className="flex flex-col justify-center gap-2 px-3 pb-2.5 pt-3 text-center sm:gap-4 min-[400px]:px-4 sm:px-6 sm:py-7 md:px-8 md:py-8">
            <p className="pr-9 text-left text-[10px] leading-tight font-semibold uppercase tracking-wider text-gold sm:pr-0 sm:text-xs">
              Nova Global · Education &amp; Migration Consultants
            </p>

            <div>
              <h2 className="text-2xl font-black leading-none tracking-tight sm:text-4xl md:text-5xl">German</h2>
              <p className="mt-1 text-base font-bold sm:text-lg md:text-xl">Language Classes</p>
              <p className="mx-auto mt-1.5 inline-block rounded-full bg-gold px-4 py-0.5 text-lg sm:mt-2 sm:px-5 sm:py-1 sm:text-xl font-black text-navy">
                A1 to B2
              </p>
            </div>

            <p className="hidden text-sm text-white/80 sm:block">
              Planning to work in Germany, start an Ausbildung or study there? Start learning German today!
            </p>

            <div className="grid grid-cols-4 gap-1 sm:gap-1.5">
              {levels.map((l) => (
                <div key={l.code} className={`${l.bg} rounded-lg px-1 py-1.5`}>
                  <p className="text-base font-black leading-none sm:text-lg">{l.code}</p>
                  <p className="mt-0.5 hidden text-[10px] font-medium leading-tight sm:block">{l.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: benefits + call to action */}
          <div className="flex flex-col justify-center gap-2.5 px-3 pb-3 text-center sm:gap-4 sm:pb-5 min-[400px]:px-4 sm:border-l sm:border-gold/30 sm:px-6 sm:py-7 md:px-8 md:py-8">
            <ul className="hidden space-y-1.5 text-left text-sm sm:block">
              {perks.map((p) => (
                <li key={p} className="flex gap-2">
                  <span className="text-gold" aria-hidden="true">✔</span>
                  {p}
                </li>
              ))}
            </ul>

            <div className="-mx-3 -skew-y-1 bg-red px-2 py-2 shadow-lg min-[400px]:-mx-4 sm:mx-0 sm:py-2.5 sm:rounded-md">
              <p className="skew-y-1 text-sm font-black sm:text-base uppercase leading-tight">
                Register today – limited seats!
              </p>
            </div>

            <div className="flex flex-col gap-1.5 sm:gap-2">
              <a
                href="https://wa.me/94766120921"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center justify-center rounded-full bg-[#25D366] px-3 py-2 text-[13px] font-bold sm:px-4 sm:text-sm text-white hover:brightness-95"
              >
                WhatsApp +94 76 612 0921
              </a>
              <a
                href="tel:+4915752832325"
                className="inline-flex min-h-11 items-center justify-center rounded-full bg-gold px-3 py-2 text-[13px] font-bold sm:px-4 sm:text-sm text-navy hover:brightness-95"
              >
                📞 Call +49 1575 2832325
              </a>
            </div>

            <p className="hidden text-xs text-white/60 sm:block">🇱🇰 Sri Lanka | 🇩🇪 Germany</p>
          </div>
        </div>
      </div>
    </div>
  );
}
