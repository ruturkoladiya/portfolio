"use client";
// Robust scroll-reveal using IntersectionObserver.

// Strategy:
//  1. Set data-js-animate="true" on <body> — this activates the
//     CSS that hides .fade-in-hidden elements (JS-gated, so content
//     is always visible before JS runs).
//  2. Mark elements already in the viewport as visible immediately.
//  3. Use the observer (threshold 0) to reveal the rest on scroll.

import { useEffect } from "react";

export function useScrollAnimation() {
  useEffect(() => {
    // Step 1 — activate the CSS hiding BEFORE we observe
    document.body.setAttribute("data-js-animate", "true");

    const reveal = (el: Element) => {
      el.classList.add("fade-in-visible");
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            reveal(entry.target);
            // Once revealed, no need to keep observing
            observer.unobserve(entry.target);
          }
        });
      },
      {
        // threshold 0 = trigger as soon as any pixel is visible
        threshold: 0,
        // Small negative margin so elements reveal just before
        // fully entering the viewport (feels snappier)
        rootMargin: "0px 0px -40px 0px",
      }
    );

    const targets = document.querySelectorAll(".fade-in-hidden");

    targets.forEach((el) => {
      // Step 2 — reveal elements already visible in the viewport
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        // Already visible — reveal instantly (no animation delay)
        reveal(el);
      } else {
        // Will enter viewport later — let the observer handle it
        observer.observe(el);
      }
    });

    return () => observer.disconnect();
  }, []);
}
