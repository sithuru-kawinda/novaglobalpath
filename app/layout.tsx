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

export const metadata: Metadata = {
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
