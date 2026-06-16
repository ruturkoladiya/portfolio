"use client";
// Robust scroll-reveal using IntersectionObserver.
// Respects prefers-reduced-motion: if enabled, all elements are revealed immediately.

import { useEffect } from "react";

export function useScrollAnimation() {
  useEffect(() => {
    // Respect user's reduced motion preference
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Step 1 — activate the CSS hiding BEFORE we observe
    document.body.setAttribute("data-js-animate", "true");

    const reveal = (el: Element) => {
      el.classList.add("fade-in-visible");
    };

    const targets = document.querySelectorAll(".fade-in-hidden");

    // If user prefers reduced motion, reveal everything immediately
    if (prefersReducedMotion) {
      targets.forEach(reveal);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            reveal(entry.target);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    targets.forEach((el) => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        reveal(el);
      } else {
        observer.observe(el);
      }
    });

    return () => observer.disconnect();
  }, []);
}
