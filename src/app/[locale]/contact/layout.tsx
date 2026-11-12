import type { Metadata } from "next";

// Page title and description (12 Nov 2026 audit): the page itself is a client component,
// so its metadata lives here.
export const metadata: Metadata = {
  title: "Contact | Nexaro Tech",
  description: "Tell us how your team works today. We reply by email, set up a short call and send a written scope and price.",
  alternates: { canonical: "/contact", languages: { en: "/contact", ar: "/ar/contact" } },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
