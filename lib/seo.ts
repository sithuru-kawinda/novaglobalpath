import { site, socials, nav } from "@/lib/site";

export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || "https://novaglobalpath.com").replace(/\/$/, "");

export const sitemapPaths = nav.map((n) => n.href);

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${siteUrl}/#organization`,
  name: site.name,
  alternateName: "Nova Global Path",
  url: siteUrl,
  logo: `${siteUrl}/logo.webp`,
  image: `${siteUrl}/og-image.jpg`,
  description:
    "Education consultancy, maritime and overseas recruitment, Ausbildung placement support and visa application assistance for Germany.",
  telephone: site.phone,
  email: site.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: "294/9 Ihalakaragahamuna",
    addressLocality: "Kadawatha",
    addressCountry: "LK",
  },
  areaServed: [
    { "@type": "Country", name: "Sri Lanka" },
    { "@type": "Country", name: "Germany" },
  ],
  knowsAbout: [
    "Study in Germany",
    "Ausbildung in Germany",
    "Maritime recruitment",
    "German visa application support",
    "German language training",
  ],
  sameAs: Object.values(socials).filter(Boolean),
};

export const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteUrl}/#website`,
  url: siteUrl,
  name: site.name,
  publisher: { "@id": `${siteUrl}/#organization` },
  inLanguage: "en",
};
