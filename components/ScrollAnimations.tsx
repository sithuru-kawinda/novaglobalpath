"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

// React tags every DOM node it has finished hydrating with an internal "__reactFiber$..." key.
// We only touch an element's classes after that, otherwise React reports a hydration mismatch.
const isHydrated = (el: Element) => Object.keys(el).some((k) => k.startsWith("__reactFiber"));

/**
 * Site-wide scroll reveal: blocks inside every <main> section (except the hero) fade and
 * slide up the first time they scroll into view, like the Home page. Blocks that are already
 * on screen when the page loads are left alone (the hero animates on its own). The classes are
 * removed once the animation ends so elements keep their own hover/transition styles.
 */
export default function ScrollAnimations() {
  const pathname = usePathname();

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const timers = new Set<number>();
    let cancelled = false;

    const sections = Array.from(document.querySelectorAll("main > section, main > * > section")).slice(1);
    let pending: { el: HTMLElement; i: number }[] = [];

    for (const section of sections) {
      const containers = Array.from(section.children).filter((c) => c.tagName === "DIV" || c.tagName === "DL");
      for (const c of containers) {
        (Array.from(c.children) as HTMLElement[]).forEach((el, i) => {
          if (el.hasAttribute("data-reveal") || el.closest("[data-reveal]") || el.querySelector("[data-reveal]")) return;
          pending.push({ el, i });
        });
      }
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const el = entry.target as HTMLElement;
          io.unobserve(el);
          el.classList.add("rv-in");
          const delay = parseInt(el.style.getPropertyValue("--rv-delay")) || 0;
          const t = window.setTimeout(() => {
            el.classList.remove("rv", "rv-in");
            el.style.removeProperty("--rv-delay");
            timers.delete(t);
          }, delay + 600);
          timers.add(t);
        }
      },
      { threshold: 0.06, rootMargin: "0px 0px -4% 0px" },
    );

    const started = Date.now();
    const step = () => {
      if (cancelled) return;
      const waiting: typeof pending = [];
      const hidden: typeof pending = [];
      const vh = window.innerHeight;
      // Read phase: measure everything before touching any class, so layout is computed once
      for (const item of pending) {
        if (!item.el.isConnected) continue;
        if (!isHydrated(item.el)) {
          waiting.push(item);
          continue;
        }
        const r = item.el.getBoundingClientRect();
        if (r.top < vh * 0.96 && r.bottom > 0) continue; // already visible: no animation
        hidden.push(item);
      }
      // Write phase
      for (const item of hidden) {
        item.el.style.setProperty("--rv-delay", `${Math.min(item.i, 4) * 60}ms`);
        item.el.classList.add("rv");
        io.observe(item.el);
      }
      pending = waiting;
      if (pending.length && Date.now() - started < 6000) {
        const t = window.setTimeout(() => {
          timers.delete(t);
          step();
        }, 120);
        timers.add(t);
      }
    };
    step();

    return () => {
      cancelled = true;
      io.disconnect();
      timers.forEach(clearTimeout);
    };
  }, [pathname]);

  return null;
}
