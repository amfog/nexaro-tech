import type { MetadataRoute } from "next";

// 12 Nov 2026 audit: the site had no sitemap. English pages have no prefix (localePrefix
// "as-needed"), Arabic pages live under /ar.
const BASE = "https://project-jelc4.vercel.app";
const PATHS = [
  "", "/services", "/portfolio", "/about", "/contact", "/blog", "/legal",
  "/case-studies/pyramids-cup-8", "/case-studies/pyramids-q-player-platform", "/case-studies/pyramids-queue",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return PATHS.flatMap((p) => [
    { url: `${BASE}${p || "/"}`, lastModified: now, changeFrequency: "monthly" as const, priority: p === "" ? 1 : 0.7,
      alternates: { languages: { en: `${BASE}${p || "/"}`, ar: `${BASE}/ar${p}` } } },
  ]);
}
