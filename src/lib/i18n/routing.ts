import { defineRouting } from "next-intl/routing";
import { createNavigation } from "next-intl/navigation";

export const routing = defineRouting({
  locales: ["en", "ar"],
  defaultLocale: "en",
  localePrefix: "as-needed", // Keeps URL clean for default locale (/en -> /)
  pathnames: {
    "/": "/",
    "/services": { en: "/services", ar: "/services" }, // Simplified for now
    "/portfolio": { en: "/portfolio", ar: "/portfolio" },
    "/about": { en: "/about", ar: "/about" },
    "/contact": { en: "/contact", ar: "/contact" },
  },
});

// Lightweight wrappers for navigation
export const { Link, redirect, usePathname, useRouter } = createNavigation(routing);
