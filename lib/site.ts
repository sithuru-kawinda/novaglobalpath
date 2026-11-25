export const site = {
  name: "Novaglobalpath",
  group: "NOVA GROUP",
  tagline: "Shipping • Education • Overseas Recruitment",
  // TODO: replace placeholders with client-supplied details
  phone: "+49 176 70452479",
  whatsapp: "4917670452479",
  email: "novagerman@outlook.de",
  address: "294/9 Ihalakaragahamuna, Kadawatha, Sri Lanka",
  addressNote: "Appointment only",
};

// Add the real profile URLs; empty ones are hidden in the footer.
export const socials = {
  facebook: "",
  instagram: "",
  linkedin: "",
};

export const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/education", label: "Education" },
  { href: "/shipping-recruitment", label: "Shipping Recruitment" },
  { href: "/overseas-recruitment", label: "Overseas Recruitment" },
  { href: "/ausbildung-germany", label: "Ausbildung Germany" },
  { href: "/training", label: "Training" },
  { href: "/visa-services", label: "Visa Services" },
  { href: "/contact", label: "Contact" },
];

export const services = [
  { href: "/education", title: "Education & Admissions", text: "University and Hochschule admissions for students heading to Germany." },
  { href: "/shipping-recruitment", title: "Shipping Recruitment", text: "Cargo and cruise ship crewing for international operators." },
  { href: "/ausbildung-germany", title: "Germany Ausbildung", text: "Vocational training placements combining work and study." },
  { href: "/overseas-recruitment", title: "Overseas Recruitment", text: "Employment opportunities in Germany for skilled candidates." },
  { href: "/visa-services", title: "Visa Assistance", text: "Application preparation and documentation support." },
  { href: "/training", title: "Training & Preparation", text: "German language, CV, interview and cultural orientation." },
];

export const whatsappLink = `https://wa.me/${site.whatsapp}`;
