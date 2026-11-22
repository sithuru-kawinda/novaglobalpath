import type { Metadata } from "next";
import type { ReactNode } from "react";
import { PageHero } from "@/components/ui";
import { site, whatsappLink } from "@/lib/site";
import EnquiryForm from "./EnquiryForm";

export const metadata: Metadata = {
  title: "Contact",
  description: "Send an enquiry or reach Novaglobalpath by phone, WhatsApp or email.",
};

const Svg = ({ children }: { children: ReactNode }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-5 w-5"
    aria-hidden="true"
  >
    {children}
  </svg>
);

export default function Contact() {
  const contacts = [
    {
      label: "Phone",
      value: site.phone,
      href: `tel:${site.phone.replace(/\s/g, "")}`,
      icon: (
        <Svg>
          <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2Z" />
        </Svg>
      ),
    },
    {
      label: "Email",
      value: site.email,
      href: `mailto:${site.email}`,
      icon: (
        <Svg>
          <rect x="2" y="4" width="20" height="16" rx="2" />
          <path d="m22 7-10 6L2 7" />
        </Svg>
      ),
    },
    {
      label: "Office",
      value: site.address,
      icon: (
        <Svg>
          <path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 0 1 16 0Z" />
          <circle cx="12" cy="10" r="3" />
        </Svg>
      ),
    },
  ];

  return (
    <>
      <PageHero eyebrow="Contact" title="Let's Start" accent="Your Journey" cta={false} text="Send us an enquiry and we will get back to you." image="/hero/contact.webp" />

      <section className="bg-slate-50">
        <div className="mx-auto grid max-w-6xl items-stretch gap-6 px-4 pb-24 pt-10 md:py-12 lg:grid-cols-12">
          {/* Left: contact details */}
          <aside className="relative flex flex-col overflow-hidden rounded-2xl bg-gradient-to-br from-navy-deep via-navy to-blue p-6 text-white sm:p-8 shadow-[0_20px_60px_-15px_rgba(10,25,60,0.4)] lg:col-span-5">
            <div className="pointer-events-none absolute -bottom-24 -left-24 h-64 w-64 glow text-gold/20" />
            <p className="relative text-sm font-semibold tracking-widest text-gold">GET IN TOUCH</p>
            <h2 className="relative mt-1 text-2xl font-bold md:text-3xl">Prefer to Talk Directly?</h2>
            <div className="relative mt-3 h-1 w-14 rounded bg-gold" />

            <ul className="relative my-6 flex flex-1 flex-col justify-around gap-6">
              {contacts.map((c) => (
                <li key={c.label} className="flex items-center gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/10 text-gold ring-1 ring-white/20">
                    {c.icon}
                  </span>
                  <div className="min-w-0">
                    <p className="text-xs font-semibold uppercase tracking-widest text-white/60">{c.label}</p>
                    {c.href ? (
                      <a href={c.href} className="mt-0.5 block break-words text-lg font-medium transition hover:text-gold">
                        {c.value}
                      </a>
                    ) : (
                      <p className="mt-0.5 text-lg font-medium">{c.value}</p>
                    )}
                  </div>
                </li>
              ))}
            </ul>

            <div className="relative border-t border-white/15 pt-6">
              <p className="font-medium text-white/75">Prefer WhatsApp?</p>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center gap-2 rounded-full bg-[#0a7d4f] px-6 py-2.5 font-semibold text-white shadow-md transition hover:-translate-y-0.5 hover:brightness-110"
              >
                <svg viewBox="0 0 32 32" fill="currentColor" className="h-5 w-5" aria-hidden="true">
                  <path d="M16.003 3C8.832 3 3 8.83 3 16c0 2.294.6 4.53 1.74 6.5L3 29l6.68-1.72A12.94 12.94 0 0 0 16.003 29C23.172 29 29 23.17 29 16S23.172 3 16.003 3zm0 23.7a10.7 10.7 0 0 1-5.45-1.49l-.39-.23-3.96 1.02 1.06-3.86-.25-.4A10.67 10.67 0 0 1 5.3 16c0-5.9 4.8-10.7 10.7-10.7S26.7 10.1 26.7 16s-4.8 10.7-10.697 10.7zm5.87-8c-.32-.16-1.9-.94-2.2-1.05-.3-.1-.51-.16-.73.16-.21.32-.83 1.05-1.02 1.27-.19.21-.37.24-.7.08-.32-.16-1.35-.5-2.57-1.58-.95-.85-1.6-1.9-1.78-2.22-.19-.32-.02-.5.14-.66.14-.14.32-.37.48-.56.16-.19.21-.32.32-.54.1-.21.05-.4-.03-.56-.08-.16-.73-1.76-1-2.4-.26-.63-.53-.54-.73-.55h-.62c-.21 0-.56.08-.85.4-.3.32-1.12 1.1-1.12 2.68s1.15 3.11 1.3 3.32c.16.21 2.26 3.45 5.47 4.84.76.33 1.36.53 1.83.68.77.24 1.47.21 2.02.13.62-.09 1.9-.78 2.17-1.53.27-.75.27-1.4.19-1.53-.08-.13-.3-.21-.62-.37z" />
                </svg>
                Chat on WhatsApp
              </a>
            </div>
          </aside>

          {/* Right: enquiry form */}
          <div className="flex flex-col overflow-hidden rounded-2xl bg-white shadow-[0_20px_60px_-15px_rgba(10,25,60,0.4)] ring-1 ring-slate-200 lg:col-span-7">
            <div className="border-b-4 border-gold bg-white px-6 py-6 md:px-8">
              <p className="text-sm font-semibold tracking-widest text-red">SEND AN ENQUIRY</p>
              <h2 className="mt-1 text-2xl font-bold text-navy md:text-3xl">Tell Us About Your Goals</h2>
              <p className="mt-2 text-slate-600">Fill in the form and we will get back to you.</p>
            </div>
            <div className="flex-1 p-6 md:p-8">
              <EnquiryForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
