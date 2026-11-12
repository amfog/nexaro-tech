import type { Metadata } from "next";

// Page title and description (12 Nov 2026 audit): the page itself is a client component,
// so its metadata lives here.
export const metadata: Metadata = {
  title: "About | Nexaro Tech",
  description: "Nexaro Tech is a software studio in Egypt building business systems, websites and esports platforms in Arabic and English.",
  alternates: { canonical: "/about", languages: { en: "/about", ar: "/ar/about" } },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
