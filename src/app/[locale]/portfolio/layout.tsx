import type { Metadata } from "next";

// Page title and description (12 Nov 2026 audit): the page itself is a client component,
// so its metadata lives here.
export const metadata: Metadata = {
  title: "Work and products | Nexaro Tech",
  description: "Websites, platforms and products Nexaro Tech has shipped, including the Pyramids Cup 8 tournament stack.",
  alternates: { canonical: "/portfolio", languages: { en: "/portfolio", ar: "/ar/portfolio" } },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
