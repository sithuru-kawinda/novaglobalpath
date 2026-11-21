"use client";

import { useActionState, useEffect, useRef, useState, type ReactNode } from "react";
import { sendEnquiry, type EnquiryState } from "./actions";

const initial: EnquiryState = { ok: false, message: "" };

const interests = [
  "Education & Admissions",
  "Shipping Recruitment",
  "Overseas Recruitment",
  "Ausbildung Germany",
  "Training",
  "Visa Services",
  "Employer / Partnership",
];

const label = "mb-1.5 block text-sm font-semibold text-navy";
const input =
  "w-full rounded-lg border border-slate-300 bg-white py-3 pl-11 pr-4 text-navy transition placeholder:text-slate-400 hover:border-slate-400 focus:border-navy focus:outline-none focus:ring-4 focus:ring-navy/10";

const Icon = ({ children }: { children: ReactNode }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="pointer-events-none absolute left-3.5 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400"
    aria-hidden="true"
  >
    {children}
  </svg>
);

function ServiceSelect() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const [active, setActive] = useState(-1);
  const ref = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    if (!open) return;
    const onDown = (e: MouseEvent) => {
      if (!ref.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onDown);
    return () => document.removeEventListener("mousedown", onDown);
  }, [open]);

  useEffect(() => {
    if (open && active >= 0) listRef.current?.children[active]?.scrollIntoView({ block: "nearest", behavior: "smooth" });
  }, [active, open]);

  const choose = (v: string) => {
    setValue(v);
    setOpen(false);
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") setOpen(false);
    else if (e.key === "ArrowDown") {
      e.preventDefault();
      setOpen(true);
      setActive((a) => Math.min(a + 1, interests.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActive((a) => Math.max(a - 1, 0));
    } else if (e.key === "Enter" && open && active >= 0) {
      e.preventDefault();
      choose(interests[active]);
    }
  };

  return (
    <div ref={ref} className="relative" onKeyDown={onKeyDown}>
      <input type="hidden" name="interest" value={value} />
      <button
        type="button"
        id="interest"
        aria-haspopup="listbox"
        aria-expanded={open}
        onClick={() => setOpen(!open)}
        className={`flex w-full items-center justify-between gap-2 rounded-lg border bg-white px-4 py-3 text-left transition hover:border-slate-400 focus:outline-none focus:ring-4 focus:ring-navy/10 ${
          open ? "border-navy ring-4 ring-navy/10" : "border-slate-300"
        }`}
      >
        <span className={value ? "text-navy" : "text-slate-400"}>{value || "Select a service…"}</span>
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`h-4 w-4 shrink-0 text-slate-500 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
          aria-hidden="true"
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </button>

      <ul
        ref={listRef}
        role="listbox"
        aria-labelledby="interest"
        className={`absolute left-0 right-0 top-full z-30 mt-2 origin-top overflow-y-auto overscroll-contain rounded-xl border border-slate-200 bg-white py-1.5 shadow-2xl shadow-navy/20 transition duration-200 ease-out [scrollbar-width:thin] ${
          open ? "max-h-56 scale-100 opacity-100" : "pointer-events-none max-h-0 scale-95 opacity-0"
        }`}
      >
        {interests.map((i, idx) => (
          <li
            key={i}
            role="option"
            aria-selected={value === i}
            onClick={() => choose(i)}
            onMouseEnter={() => setActive(idx)}
            className={`flex cursor-pointer items-center justify-between px-4 py-2.5 transition-colors ${
              active === idx ? "bg-slate-100 text-navy" : "text-slate-700"
            } ${value === i ? "font-semibold text-navy" : ""}`}
          >
            {i}
            {value === i && <span className="text-gold">✓</span>}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function EnquiryForm() {
  const [state, action, pending] = useActionState(sendEnquiry, initial);

  return (
    <form action={action} className="grid gap-4 md:grid-cols-2">
      <div>
        <label htmlFor="name" className={label}>Full name</label>
        <div className="relative">
          <Icon>
            <circle cx="12" cy="8" r="4" />
            <path d="M4 21a8 8 0 0 1 16 0" />
          </Icon>
          <input id="name" name="name" placeholder="Your full name" required className={input} />
        </div>
      </div>
      <div>
        <label htmlFor="email" className={label}>Email</label>
        <div className="relative">
          <Icon>
            <rect x="2" y="4" width="20" height="16" rx="2" />
            <path d="m22 7-10 6L2 7" />
          </Icon>
          <input id="email" name="email" type="email" placeholder="you@example.com" required className={input} />
        </div>
      </div>
      <div>
        <label htmlFor="phone" className={label}>Phone / WhatsApp</label>
        <div className="relative">
          <Icon>
            <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2Z" />
          </Icon>
          <input id="phone" name="phone" placeholder="+94 ..." className={input} />
        </div>
      </div>
      <div>
        <label htmlFor="interest" className={label}>I am interested in</label>
        <ServiceSelect />
      </div>
      <div className="md:col-span-2">
        <label htmlFor="message" className={label}>Your message</label>
        <textarea
          id="message"
          name="message"
          rows={3}
          placeholder="Tell us a little about your goals"
          required
          className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-navy transition placeholder:text-slate-400 hover:border-slate-400 focus:border-navy focus:outline-none focus:ring-4 focus:ring-navy/10"
        />
      </div>
      <div className="md:col-span-2">
        <button
          type="submit"
          disabled={pending}
          className="w-full rounded-lg bg-navy px-8 py-3.5 text-lg font-semibold text-white shadow-lg shadow-navy/25 transition hover:bg-navy-deep disabled:opacity-60"
        >
          {pending ? "Sending…" : "Send Enquiry →"}
        </button>
        {state.message && (
          <p
            role="status"
            className={`mt-3 rounded-lg px-4 py-3 text-center font-medium ${
              state.ok ? "bg-green-50 text-green-700" : "bg-red-50 text-red-600"
            }`}
          >
            {state.message}
          </p>
        )}
      </div>
    </form>
  );
}
