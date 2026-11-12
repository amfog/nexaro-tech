import type { Metadata } from "next";

// Page title and description (12 Nov 2026 audit): the page itself is a client component,
// so its metadata lives here.
export const metadata: Metadata = {
  title: "Services | Nexaro Tech",
  description: "Business systems (ERP), bilingual websites, esports systems, apps, automation and AI. Each priced once after a short discovery call.",
  alternates: { canonical: "/services", languages: { en: "/services", ar: "/ar/services" } },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
