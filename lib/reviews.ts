// SAMPLE REVIEWS — the names and review text are placeholders and the photos are stock images, not real clients.
// Replace all of it with real client testimonials (with permission) before launch.
// Optional `image`: path to a real client photo in /public/reviews (shown instead of the initial badge).
export type Review = { name: string; role: string; text: string; image?: string };

export const reviews: Review[] = [
  {
    name: "Kasun Perera",
    role: "Education – Germany",
    text: "Replace this with a real review from a student who used the university admissions service.",
    image: "/reviews/22.webp",
  },
  {
    name: "Nuwan Jayasinghe",
    role: "Ausbildung Germany",
    text: "Replace this with a real review from an Ausbildung applicant about the support they received.",
    image: "/reviews/23.webp",
  },
  {
    name: "Tharindu Fernando",
    role: "Recruitment Partner",
    text: "Replace this with a real review from an employer or crewing partner.",
    image: "/reviews/24.webp",
  },
  {
    name: "Dilini Wickramasinghe",
    role: "Shipping Recruitment",
    text: "Replace this with a real review from a seafarer or cruise ship professional.",
    image: "/reviews/25.webp",
  },
  {
    name: "Nadeesha Silva",
    role: "Visa Services",
    text: "Replace this with a real review from a client who received visa application support.",
    image: "/reviews/26.webp",
  },
];
