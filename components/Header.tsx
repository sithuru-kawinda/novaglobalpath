"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { site, whatsappLink } from "@/lib/site";

type NavItem = { label: string; href?: string; children?: { label: string; href: string; text: string }[] };

const items: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Education", href: "/education" },
  {
    label: "Recruitment",
    children: [
      { label: "Shipping Recruitment", href: "/shipping-recruitment", text: "Cargo & cruise ship crewing" },
      { label: "Overseas Recruitment", href: "/overseas-recruitment", text: "Employment in Germany" },
    ],
  },
  { label: "Ausbildung Germany", href: "/ausbildung-germany" },
  { label: "Training", href: "/training" },
  { label: "Visa Services", href: "/visa-services" },
  { label: "About Us", href: "/about" },
];

const Chevron = ({ open }: { open?: boolean }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={`h-4 w-4 transition-transform duration-200 ${open ? "rotate-180" : "group-hover/dd:rotate-180 group-focus-within/dd:rotate-180"}`}
    aria-hidden="true"
  >
    <path d="m6 9 6 6 6-6" />
  </svg>
);

export default function Header({ ticker }: { ticker?: ReactNode }) {
  const [open, setOpen] = useState(false);
  const [sub, setSub] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dd, setDd] = useState(false);
  const ddRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  // Close the desktop dropdown on outside click or Escape.
  useEffect(() => {
    if (!dd) return;
    const onDown = (e: MouseEvent) => {
      if (!ddRef.current?.contains(e.target as Node)) setDd(false);
    };
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setDd(false);
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [dd]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (it: NavItem) =>
    it.href ? pathname === it.href : !!it.children?.some((c) => c.href === pathname);

  const close = () => {
    setOpen(false);
    setSub(false);
  };

  const link = (active: boolean) =>
    `relative rounded-full border-2 px-3 py-1.5 text-[15px] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold ${
      active
        ? "border-gold font-semibold text-navy"
        : "border-transparent font-medium text-slate-700 hover:border-slate-200 hover:text-navy"
    }`;

  const mobileLink = (active: boolean) =>
    `flex items-center rounded-full border-2 px-5 py-3 text-[17px] transition-colors ${
      active
        ? "border-gold bg-slate-50 font-semibold text-navy"
        : "border-transparent font-medium text-slate-700 hover:bg-slate-50 hover:text-navy"
    }`;

  return (
    <>
      {/* Top utility bar */}
      <div className="hidden bg-navy-deep text-xs text-white/80 md:block">
        <div className="flex items-center justify-between header-container py-2">
          <p className="tracking-wide font-medium text-yellow-300">Your Pathway to Germany for Education, Careers, Ausbildung &amp; Visas</p>
          <div className="flex items-center gap-5">
            <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="transition hover:text-gold">
              {site.phone}
            </a>
            <a href={`mailto:${site.email}`} className="transition hover:text-gold">
              {site.email}
            </a>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="transition hover:text-[#25D366]">
              WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Live news strip, under the utility bar */}
      {ticker}

      <header
        className={`sticky top-0 z-40 border-b-4 border-gold bg-white/95 transition-shadow duration-300 ${
          scrolled ? "shadow-lg shadow-navy/10" : "shadow-sm"
        }`}
      >
        <div className="flex items-center justify-between gap-6 header-container py-2.5">
          <Link href="/" onClick={close} aria-label="Novaglobalpath home" className="shrink-0">
            <Image
              src="/logo-nav.webp"
              alt="NOVA GLOBAL - Your pathway to Germany"
              width={1024}
              height={572}
              sizes="120px"
              className="h-12 w-auto sm:h-14"
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-1.5 xl:flex" aria-label="Main">
            {items.map((it) =>
              it.children ? (
                <div
                  key={it.label}
                  ref={ddRef}
                  className="relative"
                  onMouseEnter={() => setDd(true)}
                  onMouseLeave={() => setDd(false)}
                >
                  <button
                    type="button"
                    aria-haspopup="true"
                    aria-expanded={dd}
                    onClick={() => setDd(!dd)}
                    className={`${link(isActive(it) || dd)} flex items-center gap-1`}
                  >
                    {it.label}
                    <Chevron open={dd} />
                  </button>
                  <div
                    className={`absolute left-0 top-full z-50 min-w-full pt-[22px] transition-opacity duration-200 ${
                      dd ? "visible opacity-100" : "invisible opacity-0"
                    }`}
                  >
                    <div className="w-max min-w-full overflow-hidden rounded-b-lg border border-t-0 border-slate-200 bg-white py-1.5 shadow-xl shadow-navy/10">
                      {it.children.map((c) => (
                        <Link
                          key={c.href}
                          href={c.href}
                          onClick={() => setDd(false)}
                          className={`block whitespace-nowrap px-5 py-2.5 text-[15px] font-medium transition hover:bg-slate-50 hover:text-navy ${
                            pathname === c.href ? "text-navy" : "text-slate-700"
                          }`}
                        >
                          {c.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link key={it.href} href={it.href!} className={link(isActive(it))}>
                  {it.label}
                </Link>
              ),
            )}
            <Link
              href="/contact"
              className={`rounded-full px-6 py-2.5 text-[15px] font-semibold transition hover:-translate-y-0.5 ${
                pathname === "/contact"
                  ? "bg-navy text-white"
                  : "bg-gold text-navy shadow-md shadow-gold/30 hover:brightness-110"
              }`}
            >
              Contact
            </Link>
          </nav>

          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-nav"
            className="flex h-11 w-11 items-center justify-center rounded-lg border border-navy/20 text-navy transition hover:border-gold hover:bg-slate-50 xl:hidden"
            onClick={() => setOpen(!open)}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" className="h-6 w-6" aria-hidden="true">
              {open ? <path d="M6 6l12 12M18 6 6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>

        {/* Mobile nav */}
        {open && (
          <nav
            id="mobile-nav"
            className="max-h-[calc(100dvh-5rem)] animate-[hero-rise_0.25s_ease-out] overflow-y-auto border-t border-slate-200 bg-white px-4 pb-6 pt-3 shadow-xl xl:hidden"
            aria-label="Mobile"
          >
            <div className="space-y-1">
              {items.map((it) =>
                it.children ? (
                  <div key={it.label}>
                    <button
                      type="button"
                      aria-expanded={sub}
                      onClick={() => setSub(!sub)}
                      className={`${mobileLink(isActive(it))} w-full justify-between text-left`}
                    >
                      {it.label}
                      <Chevron open={sub} />
                    </button>
                    {sub && (
                      <div className="mb-1 ml-6 mt-1 space-y-0.5 border-l-2 border-gold/60 pl-3">
                        {it.children.map((c) => (
                          <Link
                            key={c.href}
                            href={c.href}
                            onClick={close}
                            className={`block rounded-lg px-3 py-3 transition-colors hover:bg-slate-50 ${
                              pathname === c.href ? "font-semibold text-navy" : "text-slate-600"
                            }`}
                          >
                            {c.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link key={it.href} href={it.href!} onClick={close} className={mobileLink(isActive(it))}>
                    {it.label}
                  </Link>
                ),
              )}
            </div>

            <Link
              href="/contact"
              onClick={close}
              className="mt-5 block rounded-full bg-gold px-6 py-3.5 text-center font-semibold text-navy shadow-md shadow-gold/30"
            >
              Contact Us →
            </Link>
            <div className="mt-3 grid grid-cols-2 gap-3">
              <a
                href={`tel:${site.phone.replace(/\s/g, "")}`}
                className="rounded-full border-2 border-navy/20 px-4 py-3 text-center font-semibold text-navy transition hover:border-navy"
              >
                Call
              </a>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-[#0a7d4f] px-4 py-3 text-center font-semibold text-white transition hover:brightness-110"
              >
                WhatsApp
              </a>
            </div>
          </nav>
        )}
      </header>
    </>
  );
}
