"use client";

import Image from "next/image";
import { useCallback, useEffect, useState, useSyncExternalStore } from "react";
import { reviews, type Review } from "@/lib/reviews";

const INTERVAL_MS = 3500;

function subscribe(cb: () => void) {
  window.addEventListener("resize", cb);
  return () => window.removeEventListener("resize", cb);
}
function getVisible() {
  const w = window.innerWidth;
  return w >= 1024 ? 3 : w >= 768 ? 2 : 1;
}

function Stars() {
  return (
    <div className="flex gap-1 text-gold" role="img" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
          <path d="m12 2.5 2.9 6 6.6.9-4.8 4.6 1.2 6.5L12 17.3 6.1 20.5l1.2-6.5L2.5 9.4l6.6-.9L12 2.5Z" />
        </svg>
      ))}
    </div>
  );
}

function ReviewCard({ r }: { r: Review }) {
  return (
    <figure className="relative flex h-full flex-col rounded-2xl bg-white p-6 shadow-[0_10px_40px_-8px_rgba(0,0,0,0.3)] ring-1 ring-black/5">
      <span className="absolute right-6 top-2 font-serif text-8xl leading-none text-navy/10" aria-hidden="true">
        &ldquo;
      </span>
      <Stars />
      <blockquote className="mt-5 flex-1 text-base italic sm:text-lg leading-relaxed text-slate-700">{r.text}</blockquote>
      <figcaption className="mt-6 flex items-center gap-4 border-t border-slate-100 pt-5">
        {r.image ? (
          <Image src={r.image} alt={r.name} width={56} height={56} className="h-14 w-14 rounded-full object-cover object-top ring-2 ring-gold ring-offset-2" />
        ) : (
          <span className="flex h-14 w-14 items-center justify-center rounded-full bg-navy text-lg font-bold text-white ring-2 ring-gold ring-offset-2">
            {r.name.charAt(0)}
          </span>
        )}
        <span>
          <span className="block text-lg font-semibold text-navy">{r.name}</span>
          <span className="mt-0.5 inline-block rounded-full bg-navy/5 px-2.5 py-0.5 text-xs font-medium text-navy">{r.role}</span>
        </span>
      </figcaption>
    </figure>
  );
}

export default function Reviews() {
  const n = reviews.length;
  const visible = useSyncExternalStore(subscribe, getVisible, () => 3);
  // The track holds the reviews plus a copy of the first `visible` ones, so the loop is seamless.
  // We start at the copy (pos = n) and step towards 0, which moves the cards left to right.
  const [pos, setPos] = useState(n);
  const [animate, setAnimate] = useState(true);

  useEffect(() => {
    if (n <= visible) return;
    const id = setInterval(() => {
      setAnimate(true);
      setPos((p) => (p > 0 ? p - 1 : p));
    }, INTERVAL_MS);
    return () => clearInterval(id);
  }, [n, visible]);

  const onTransitionEnd = useCallback(() => {
    if (pos === 0) {
      setAnimate(false);
      setPos(n);
    }
  }, [pos, n]);

  if (n === 0) return null;

  const track = [...reviews, ...reviews.slice(0, visible)];

  return (
    <section className="overflow-hidden bg-slate-50">
      <div className="site-container pb-16 pt-12">
        <div className="mx-auto mb-8 max-w-2xl text-center md:mb-14">
          <p className="text-base font-semibold tracking-widest text-red">TESTIMONIALS</p>
          <h2 className="mt-3 text-3xl font-bold text-navy md:text-5xl">What Our Clients Say</h2>
          <div className="mx-auto mt-4 h-1 w-16 rounded bg-gold" />
          <p className="mt-4 text-base text-slate-600 md:mt-5 md:text-xl">
            Students, trainees and partners who trusted us with their journey.
          </p>
        </div>

        <div className="-mx-3 overflow-hidden py-10">
          <div
            className={`flex ${animate ? "transition-transform duration-700 ease-in-out" : ""}`}
            style={{ transform: `translateX(-${(pos * 100) / visible}%)` }}
            onTransitionEnd={onTransitionEnd}
          >
            {track.map((r, i) => (
              <div key={`${r.name}-${i}`} className="shrink-0 px-3" style={{ width: `${100 / visible}%` }}>
                <ReviewCard r={r} />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 flex justify-center gap-2" aria-hidden="true">
          {reviews.map((_, i) => (
            <span
              key={i}
              className={`h-2 rounded-full transition-all ${i === pos % n ? "w-8 bg-gold" : "w-2 bg-slate-300"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
