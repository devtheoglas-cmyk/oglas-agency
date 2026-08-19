import { useEffect, useRef } from "react";

/**
 * Scroll reveal for elements marked `data-reveal` inside the returned scope.
 *
 * Design contract (PLAN §7): content is visible by DEFAULT and motion is a
 * progressive enhancement — nothing is ever left permanently hidden.
 *
 * Mechanism is pure CSS classes (no rAF/GSAP dependency for visibility):
 *  - Base CSS shows `[data-reveal]` fully visible.
 *  - Only when JS confirms motion is allowed do we add `html.js-motion`, which
 *    hides not-yet-revealed elements. An IntersectionObserver then adds
 *    `.is-revealed` (immediately for in-view elements, on scroll for the rest),
 *    and a safety timeout reveals anything still hidden.
 *  - `@media (prefers-reduced-motion: reduce)` forces everything visible.
 * If JS never runs, `html.js-motion` is absent, so content stays visible.
 */
const prefersReducedMotion = (): boolean =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export function useReveal<T extends HTMLElement>() {
  const scope = useRef<T>(null);

  useEffect(() => {
    const root = scope.current;
    if (!root || prefersReducedMotion()) return;

    const targets = Array.from(root.querySelectorAll<HTMLElement>("[data-reveal]"));
    if (targets.length === 0) return;

    document.documentElement.classList.add("js-motion");

    const reveal = (el: HTMLElement): void => el.classList.add("is-revealed");

    const observer = new IntersectionObserver(
      (entries, obs) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            reveal(entry.target as HTMLElement);
            obs.unobserve(entry.target);
          }
        }
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.01 },
    );

    targets.forEach((el) => observer.observe(el));

    // Safety net: never leave content hidden even if the observer misfires.
    const safety = window.setTimeout(() => targets.forEach(reveal), 2000);

    return () => {
      observer.disconnect();
      window.clearTimeout(safety);
    };
  }, []);

  return scope;
}
