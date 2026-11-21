import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { nav, services, site, socials, whatsappLink } from "@/lib/site";

const ico = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  className: "h-5 w-5",
  "aria-hidden": true,
};

const filled = { viewBox: "0 0 24 24", fill: "currentColor", className: "h-5 w-5", "aria-hidden": true };

function Social({ href, label, children, external = true }: { href: string; label: string; children: ReactNode; external?: boolean }) {
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      aria-label={label}
      className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition hover:-translate-y-0.5 hover:bg-gold hover:text-navy"
    >
      {children}
    </a>
  );
}

function Heading({ children }: { children: ReactNode }) {
  return (
    <div className="mb-6">
      <h3 className="text-lg font-semibold text-white">{children}</h3>
      <div className="mt-2 h-0.5 w-10 rounded bg-gold" />
    </div>
  );
}

const serviceHrefs = new Set(services.map((s) => s.href));
const quickLinks = nav.filter((n) => !serviceHrefs.has(n.href));

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t-4 border-gold bg-navy-deep text-white/75">
      <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-blue/20 blur-3xl" />
      {/* Main columns */}
      <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:grid-cols-2 md:py-16 lg:grid-cols-[1.4fr_1fr_1.2fr_1.2fr]">
        <div>
          <Image
            src="/logo.png"
            alt={site.name}
            width={200}
            height={100}
            className="h-20 w-auto rounded-xl bg-white p-1.5"
          />
          <p className="mt-4 text-xs font-semibold uppercase tracking-widest text-gold">{site.tagline}</p>
          <p className="mt-3 max-w-sm leading-relaxed">
            Your trusted partner for international education, maritime recruitment, overseas employment and visa
            application support, with Germany as our primary destination.
          </p>
          <div className="mt-6 flex gap-3">
            <Social href={`mailto:${site.email}`} label="Email" external={false}>
              <svg {...ico}>
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <path d="m3 7 9 6 9-6" />
              </svg>
            </Social>
            <Social href={whatsappLink} label="WhatsApp">
              <svg viewBox="0 0 32 32" fill="currentColor" className="h-5 w-5" aria-hidden="true">
                <path d="M16.003 3C8.832 3 3 8.83 3 16c0 2.294.6 4.53 1.74 6.5L3 29l6.68-1.72A12.94 12.94 0 0 0 16.003 29C23.172 29 29 23.17 29 16S23.172 3 16.003 3zm0 23.7a10.7 10.7 0 0 1-5.45-1.49l-.39-.23-3.96 1.02 1.06-3.86-.25-.4A10.67 10.67 0 0 1 5.3 16c0-5.9 4.8-10.7 10.7-10.7S26.7 10.1 26.7 16s-4.8 10.7-10.697 10.7zm5.87-8c-.32-.16-1.9-.94-2.2-1.05-.3-.1-.51-.16-.73.16-.21.32-.83 1.05-1.02 1.27-.19.21-.37.24-.7.08-.32-.16-1.35-.5-2.57-1.58-.95-.85-1.6-1.9-1.78-2.22-.19-.32-.02-.5.14-.66.14-.14.32-.37.48-.56.16-.19.21-.32.32-.54.1-.21.05-.4-.03-.56-.08-.16-.73-1.76-1-2.4-.26-.63-.53-.54-.73-.55h-.62c-.21 0-.56.08-.85.4-.3.32-1.12 1.1-1.12 2.68s1.15 3.11 1.3 3.32c.16.21 2.26 3.45 5.47 4.84.76.33 1.36.53 1.83.68.77.24 1.47.21 2.02.13.62-.09 1.9-.78 2.17-1.53.27-.75.27-1.4.19-1.53-.08-.13-.3-.21-.62-.37z" />
              </svg>
            </Social>
            {socials.facebook && (
              <Social href={socials.facebook} label="Facebook">
                <svg {...filled}>
                  <path d="M13.5 22v-8h2.7l.4-3.2h-3.1V8.9c0-.9.3-1.5 1.600-1.500h1.700V4.500c-.3 0-1.300-.1-2.400-.1-2.400 0-4 1.500-4 4.100v2.300H7.700V14h2.700v8h3.100Z" />
                </svg>
              </Social>
            )}
            {socials.instagram && (
              <Social href={socials.instagram} label="Instagram">
                <svg {...ico}>
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" />
                </svg>
              </Social>
            )}
            {socials.linkedin && (
              <Social href={socials.linkedin} label="LinkedIn">
                <svg {...filled}>
                  <path d="M5 9h3v10H5V9Zm1.500-5a1.800 1.800 0 1 1 0 3.600 1.800 1.800 0 0 1 0-3.600ZM10 9h2.900v1.400c.4-.8 1.400-1.700 3-1.700 3.100 0 3.700 2 3.700 4.700V19h-3v-5c0-1.200 0-2.700-1.700-2.700s-1.900 1.300-1.900 2.600V19H10V9Z" />
                </svg>
              </Social>
            )}
          </div>
        </div>

        <div>
          <Heading>Quick Links</Heading>
          <ul className="space-y-1">
            {quickLinks.map((n) => (
              <li key={n.href}>
                <Link href={n.href} className="inline-flex items-center gap-2 py-2 transition hover:translate-x-1 hover:text-gold">
                  <span className="text-gold">›</span>
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <Heading>Our Services</Heading>
          <ul className="space-y-1">
            {services.map((s) => (
              <li key={s.href}>
                <Link href={s.href} className="inline-flex items-center gap-2 py-2 transition hover:translate-x-1 hover:text-gold">
                  <span className="text-gold">›</span>
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <Heading>Contact Us</Heading>
          <address className="not-italic"><ul className="space-y-3">
            <li className="flex gap-3">
              <span className="mt-0.5 text-gold">
                <svg {...ico}>
                  <path d="M12 21s7-5.7 7-11a7 7 0 1 0-14 0c0 5.300 7 11 7 11Z" />
                  <circle cx="12" cy="10" r="2.500" />
                </svg>
              </span>
              <span>{site.address}</span>
            </li>
            <li className="flex gap-3">
              <span className="mt-0.5 text-gold">
                <svg {...ico}>
                  <path d="M5 4h4l2 5-2.500 1.500a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z" />
                </svg>
              </span>
              <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="inline-block py-1 hover:text-gold">{site.phone}</a>
            </li>
            <li className="flex gap-3">
              <span className="mt-0.5 text-gold">
                <svg {...ico}>
                  <rect x="3" y="5" width="18" height="14" rx="2" />
                  <path d="m3 7 9 6 9-6" />
                </svg>
              </span>
              <a href={`mailto:${site.email}`} className="inline-block break-all py-1 hover:text-gold">{site.email}</a>
            </li>
            <li className="flex gap-3">
              <span className="mt-0.5 text-[#25D366]">
                <svg viewBox="0 0 32 32" fill="currentColor" className="h-5 w-5" aria-hidden="true">
                  <path d="M16.003 3C8.832 3 3 8.83 3 16c0 2.294.6 4.53 1.74 6.5L3 29l6.68-1.72A12.94 12.94 0 0 0 16.003 29C23.172 29 29 23.17 29 16S23.172 3 16.003 3zm0 23.7a10.7 10.7 0 0 1-5.45-1.49l-.39-.23-3.96 1.02 1.06-3.86-.25-.4A10.67 10.67 0 0 1 5.3 16c0-5.9 4.8-10.7 10.7-10.7S26.7 10.1 26.7 16s-4.8 10.7-10.697 10.7zm5.87-8c-.32-.16-1.9-.94-2.2-1.05-.3-.1-.51-.16-.73.16-.21.32-.83 1.05-1.02 1.27-.19.21-.37.24-.7.08-.32-.16-1.35-.5-2.57-1.58-.95-.85-1.6-1.9-1.78-2.22-.19-.32-.02-.5.14-.66.14-.14.32-.37.48-.56.16-.19.21-.32.32-.54.1-.21.05-.4-.03-.56-.08-.16-.73-1.76-1-2.4-.26-.63-.53-.54-.73-.55h-.62c-.21 0-.56.08-.85.4-.3.32-1.12 1.1-1.12 2.68s1.15 3.11 1.3 3.32c.16.21 2.26 3.45 5.47 4.84.76.33 1.36.53 1.83.68.77.24 1.47.21 2.02.13.62-.09 1.9-.78 2.17-1.53.27-.75.27-1.4.19-1.53-.08-.13-.3-.21-.62-.37z" />
                </svg>
              </span>
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="inline-block py-1 hover:text-[#25D366]">Chat on WhatsApp</a>
            </li>
          </ul></address>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="relative border-t border-white/10 bg-black/20">
        <div className="mx-auto max-w-7xl px-4 py-6 text-sm">
          <div className="flex flex-col items-center justify-between gap-2 md:flex-row">
            <p>© 2026 {site.name}. All rights reserved.</p>
            <p className="text-white/60">{site.group} · Colombo, Sri Lanka · Germany</p>
          </div>
          <p className="mt-4 border-t border-white/10 pt-4 text-center text-xs leading-relaxed text-white/50 md:text-left">
            {site.name} provides consultancy and administrative application support only. Visa decisions are made
            exclusively by the relevant German authorities and diplomatic missions. We do not guarantee visa approval
            or represent ourselves as a German immigration authority or law firm.
          </p>
        </div>
      </div>
    </footer>
  );
}
