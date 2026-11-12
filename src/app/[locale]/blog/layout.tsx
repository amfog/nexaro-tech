import type { Metadata } from "next";

// Page title and description (12 Nov 2026 audit): the page itself is a client component,
// so its metadata lives here.
export const metadata: Metadata = {
  title: "Blog | Nexaro Tech",
  description: "Notes from building business systems, websites and esports platforms.",
  alternates: { canonical: "/blog", languages: { en: "/blog", ar: "/ar/blog" } },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
