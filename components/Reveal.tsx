"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

// One IntersectionObserver is shared by every Reveal on the page (pages use ~15), instead of one each.
const callbacks = new WeakMap<Element, () => void>();
let sharedIo: IntersectionObserver | null = null;

function observeOnce(el: Element, onShow: () => void) {
  sharedIo ??= new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        sharedIo?.unobserve(entry.target);
        callbacks.get(entry.target)?.();
        callbacks.delete(entry.target);
      }
    },
    { threshold: 0.08, rootMargin: "0px 0px -4% 0px" },
  );
  callbacks.set(el, onShow);
  sharedIo.observe(el);
  return () => {
    callbacks.delete(el);
    sharedIo?.unobserve(el);
  };
}

// Fades and slides its children in once they scroll into view; `delay` staggers siblings.
export default function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    return observeOnce(el, () => setShown(true));
  }, []);

  return (
    <div
      ref={ref}
      data-reveal
      className={`transition-[opacity,translate] duration-500 ease-out motion-reduce:transition-none ${
        shown ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0 motion-reduce:translate-y-0 motion-reduce:opacity-100"
      } ${className}`}
      style={{ transitionDelay: `${Math.min(delay, 240)}ms` }}
    >
      {children}
    </div>
  );
}
