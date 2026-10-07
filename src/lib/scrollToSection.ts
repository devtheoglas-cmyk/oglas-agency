import { getSmoothScroll } from "./smoothScroll";

/**
 * Scroll to an in-page section by id, through Lenis when it is running, and
 * move focus to the section heading so keyboard and screen-reader users land
 * where sighted users do.
 */
export function scrollToSection(id: string, options: { immediate?: boolean } = {}): void {
  const target = document.getElementById(id);
  if (!target) return;

  const lenis = getSmoothScroll();
  if (lenis) {
    lenis.scrollTo(target, { immediate: options.immediate, duration: 1.2 });
  } else {
    target.scrollIntoView({ block: "start" });
  }

  window.history.replaceState(window.history.state, "", `#${id}`);
  target.querySelector<HTMLElement>("[data-section-heading]")?.focus({ preventScroll: true });
}
