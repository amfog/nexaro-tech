"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/en", label: "Home" },
  { href: "/en/services", label: "Services" },
  { href: "/en/portfolio", label: "Products" },
  { href: "/en/about", label: "About" },
  { href: "/en/blog", label: "Blog" },
];

/**
 * 14 Nov 2026 (owner: "Raycast for Nexaro Tech with our colours"): a floating glass pill, like
 * Raycast's, in our navy with the cyan to purple button. Same links as before.
 */
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-3 z-50 px-3">
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="mx-auto max-w-5xl rounded-2xl border border-white/10 bg-[#0A0E27]/70 shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_10px_40px_-10px_rgba(0,0,0,0.6)] backdrop-blur-xl"
      >
        <div className="flex h-14 items-center justify-between px-4">
          <Link href="/en" className="flex items-center gap-2 group">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/nexaro-logo.svg" alt="Nexaro" className="h-7 w-7" />
            <span className="text-sm font-bold tracking-wider text-white transition-colors group-hover:text-cyan-400">
              NEXARO<span className="text-cyan-400">.TECH</span>
            </span>
          </Link>

          <nav className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-lg px-3 py-1.5 text-sm font-medium text-gray-300 transition-colors hover:bg-white/[0.06] hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:block">
            <Link
              href="/en/contact"
              className="inline-flex items-center rounded-xl bg-gradient-to-r from-[#00F5FF] to-[#B829F7] px-4 py-2 text-sm font-semibold text-[#0A0E27] shadow-[0_0_20px_rgba(0,245,255,0.35)] transition-opacity hover:opacity-90"
            >
              Get in touch
            </Link>
          </div>

          <button onClick={() => setIsOpen(!isOpen)} className="p-2 text-white md:hidden" aria-label={isOpen ? "Close menu" : "Open menu"} aria-expanded={isOpen}>
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="overflow-hidden border-t border-white/10 md:hidden"
            >
              <div className="space-y-1 px-4 py-3">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="block rounded-lg px-2 py-2.5 text-base font-medium text-gray-300 transition-colors hover:bg-white/[0.06] hover:text-white"
                  >
                    {link.label}
                  </Link>
                ))}
                <Link
                  href="/en/contact"
                  onClick={() => setIsOpen(false)}
                  className="mt-2 block rounded-xl bg-gradient-to-r from-[#00F5FF] to-[#B829F7] py-3 text-center font-semibold text-[#0A0E27]"
                >
                  Get in touch
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </header>
  );
}
