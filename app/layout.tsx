import type { Metadata } from "next";
import { Suspense } from "react";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NewsTicker from "@/components/NewsTicker";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScrollAnimations from "@/components/ScrollAnimations";
import PromoPopup from "@/components/PromoPopup";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"], display: "swap" });

const ogTitle = "Novaglobalpath | Your Pathway to Germany";
const ogDescription =
  "Education, maritime & overseas recruitment, Ausbildung and visa application support for Germany. Expert guidance from Novaglobalpath.";

export const metadata: Metadata = {
  // TODO: set NEXT_PUBLIC_SITE_URL to the real domain so OG image URLs are absolute
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://novaglobalpath.com"),
  openGraph: {
    type: "website",
    siteName: "Novaglobalpath",
    title: ogTitle,
    description: ogDescription,
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Novaglobalpath – Connecting Global Talent with Opportunities in Germany" }],
  },
  twitter: {
    card: "summary_large_image",
    title: ogTitle,
    description: ogDescription,
    images: ["/og-image.jpg"],
  },
  title: {
    default: "Novaglobalpath | Connecting Global Talent with Opportunities in Germany",
    template: "%s | Novaglobalpath",
  },
  description:
    "International education, maritime recruitment, Ausbildung, overseas employment and visa application support for Germany.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <Header
          ticker={
            <Suspense fallback={<div className="h-[41px] bg-navy" aria-hidden="true" />}>
              <NewsTicker />
            </Suspense>
          }
        />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
        <ScrollAnimations />
        <PromoPopup />
      </body>
    </html>
  );
}
