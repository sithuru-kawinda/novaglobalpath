import { whatsappLink } from "@/lib/site";

export default function WhatsAppButton() {
  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="group fixed bottom-4 right-4 z-50 sm:bottom-5 sm:right-5"
    >
      {/* Tooltip above the icon */}
      <span className="pointer-events-none absolute bottom-full right-0 mb-3 translate-y-2 whitespace-nowrap rounded-lg bg-white px-4 py-2 text-sm font-semibold text-navy opacity-0 shadow-lg ring-1 ring-slate-200 transition-all duration-200 group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100">
        Chat with us
        <span className="absolute -bottom-1 right-5 h-2.5 w-2.5 rotate-45 bg-white ring-1 ring-slate-200 [clip-path:polygon(100%_0,100%_100%,0_100%)]" />
      </span>

      {/* Pulse ring */}
      <span className="pointer-events-none absolute inset-0 animate-ping rounded-full bg-[#25D366] opacity-40 group-hover:hidden" />

      <span className="relative flex h-12 w-12 items-center sm:h-14 sm:w-14 justify-center rounded-full bg-[#25D366] shadow-lg shadow-green-900/30 transition-transform duration-300 group-hover:scale-110">
        <svg viewBox="0 0 32 32" className="h-7 w-7 sm:h-8 sm:w-8" fill="#fff" aria-hidden="true">
          <path d="M16.003 3C8.832 3 3 8.83 3 16c0 2.294.6 4.53 1.74 6.5L3 29l6.68-1.72A12.94 12.94 0 0 0 16.003 29C23.172 29 29 23.17 29 16S23.172 3 16.003 3zm0 23.7a10.7 10.7 0 0 1-5.45-1.49l-.39-.23-3.96 1.02 1.06-3.86-.25-.4A10.67 10.67 0 0 1 5.3 16c0-5.9 4.8-10.7 10.7-10.7S26.7 10.1 26.7 16s-4.8 10.7-10.697 10.7zm5.87-8c-.32-.16-1.9-.94-2.2-1.05-.3-.1-.51-.16-.73.16-.21.32-.83 1.05-1.02 1.27-.19.21-.37.24-.7.08-.32-.16-1.35-.5-2.57-1.58-.95-.85-1.6-1.9-1.78-2.22-.19-.32-.02-.5.14-.66.14-.14.32-.37.48-.56.16-.19.21-.32.32-.54.1-.21.05-.4-.03-.56-.08-.16-.73-1.76-1-2.4-.26-.63-.53-.54-.73-.55h-.62c-.21 0-.56.08-.85.4-.3.32-1.12 1.1-1.12 2.68s1.15 3.11 1.3 3.32c.16.21 2.26 3.45 5.47 4.84.76.33 1.36.53 1.83.68.77.24 1.47.21 2.02.13.62-.09 1.9-.78 2.17-1.53.27-.75.27-1.4.19-1.53-.08-.13-.3-.21-.62-.37z" />
        </svg>
      </span>
    </a>
  );
}
