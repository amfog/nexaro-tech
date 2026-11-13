"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/en/services", label: "Services" },
  { href: "/en/portfolio", label: "Products" },
  { href: "/en/case-studies/pyramids-cup-8", label: "Case study" },
  { href: "/en/about", label: "About" },
  { href: "/en/blog", label: "Blog" },
];

/** 14 Nov 2026 revamp: plain wordmark, quiet links, white contact button; the bar gets a border
 *  and a blur only after the page scrolls. */
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const path = usePathname();

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 8);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        scrolled || isOpen ? "border-b border-line bg-space/80 backdrop-blur-xl" : "border-b border-transparent"
      )}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <Link href="/en" className="flex items-center gap-2.5">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/nexaro-logo.svg" alt="" className="h-7 w-7" />
          <span className="text-[15px] font-semibold tracking-tight text-ink">Nexaro Tech</span>
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn("text-sm transition-colors hover:text-ink", path?.startsWith(link.href) ? "text-ink" : "text-mute")}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Link href="/en/contact" className="inline-flex h-9 items-center rounded-full bg-white px-4 text-sm font-medium text-black transition-colors hover:bg-white/85">
            Book a call
          </Link>
        </div>

        <button onClick={() => setIsOpen(!isOpen)} className="p-2 text-ink md:hidden" aria-label={isOpen ? "Close menu" : "Open menu"} aria-expanded={isOpen}>
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-t border-line md:hidden"
          >
            <div className="space-y-1 px-5 py-4">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href} onClick={() => setIsOpen(false)} className="block py-2.5 text-base text-mute hover:text-ink">
                  {link.label}
                </Link>
              ))}
              <Link href="/en/contact" onClick={() => setIsOpen(false)} className="mt-3 block rounded-full bg-white py-3 text-center font-medium text-black">
                Book a call
              </Link>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
