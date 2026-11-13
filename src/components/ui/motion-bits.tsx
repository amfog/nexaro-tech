"use client";

import { animate, motion, useInView, useMotionValue, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * Small animation pieces for the 14 Nov 2026 revamp. Everything is quiet and short, plays once,
 * and is skipped for people who ask their device for reduced motion.
 */

/** Fades and lifts its children in the first time they scroll into view. */
export function Reveal({ children, delay = 0, className, y = 18 }: { children: ReactNode; delay?: number; className?: string; y?: number }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay, ease: [0.21, 0.6, 0.35, 1] }}
    >
      {children}
    </motion.div>
  );
}

/** Counts up to a number when it scrolls into view ("3,660" keeps its comma). */
export function CountUp({ value, className }: { value: string; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const reduce = useReducedMotion();
  const target = Number(value.replace(/[^0-9.]/g, ""));
  const [shown, setShown] = useState(reduce || !Number.isFinite(target) ? value : "0");
  const mv = useMotionValue(0);
  useEffect(() => {
    if (!inView || reduce || !Number.isFinite(target)) return;
    const controls = animate(mv, target, {
      duration: 1.4,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setShown(Math.round(v).toLocaleString("en-US")),
    });
    return () => controls.stop();
  }, [inView, reduce, target, mv]);
  return <span ref={ref} className={className}>{shown}</span>;
}

/**
 * A screenshot in a plain browser frame. With `tilt`, it starts leaning back and straightens as
 * the page scrolls (the hero product shot).
 */
export function BrowserFrame({ src, alt, url, tilt = false, className, priority = false }: { src: string; alt: string; url?: string; tilt?: boolean; className?: string; priority?: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "center center"] });
  const rotateX = useTransform(scrollYProgress, [0, 1], [tilt && !reduce ? 18 : 0, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [tilt && !reduce ? 0.94 : 1, 1]);
  return (
    <div ref={ref} className={cn("[perspective:1600px]", className)}>
      <motion.div style={{ rotateX, scale, transformOrigin: "center top" }} className="overflow-hidden rounded-xl border border-line-2 bg-panel shadow-[0_40px_120px_-40px_rgba(0,0,0,0.9)]">
        <div className="flex items-center gap-2 border-b border-line bg-panel-2 px-4 py-2.5">
          <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
          {url && <span className="ms-3 truncate rounded-md bg-white/[0.04] px-3 py-0.5 font-mono text-[11px] text-dim">{url}</span>}
        </div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={src} alt={alt} className="block w-full" loading={priority ? "eager" : "lazy"} decoding="async" />
      </motion.div>
    </div>
  );
}

/** Slow moving colour glow behind a section. Pure CSS, no canvas. */
export function Aurora({ className }: { className?: string }) {
  return (
    <div aria-hidden className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}>
      <div className="absolute left-1/2 top-[-20%] h-[70vh] w-[80vw] -translate-x-1/2 animate-aurora rounded-full bg-[radial-gradient(closest-side,rgba(45,212,232,0.18),transparent)] blur-3xl" />
      <div className="absolute right-[5%] top-[10%] h-[45vh] w-[40vw] animate-aurora rounded-full bg-[radial-gradient(closest-side,rgba(139,124,246,0.14),transparent)] blur-3xl [animation-delay:-6s]" />
    </div>
  );
}
