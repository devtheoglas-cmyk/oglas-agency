import { getSmoothScroll } from "../../lib/smoothScroll";
import { useReducedMotion } from "../../lib/useReducedMotion";

function focusMain(): void {
  document.querySelector<HTMLElement>("#main")?.focus({ preventScroll: true });
}

export function BackToTop() {
  const reducedMotion = useReducedMotion();

  const handleClick = (): void => {
    const lenis = getSmoothScroll();

    if (!reducedMotion && lenis) {
      lenis.scrollTo(0, { duration: 1, onComplete: focusMain });
      return;
    }

    window.scrollTo({ top: 0, behavior: "auto" });
    focusMain();
  };

  return (
    <button
      className="group inline-flex cursor-pointer items-center gap-3 text-left text-sm font-medium text-white transition-colors hover:text-lime"
      onClick={handleClick}
      type="button"
    >
      Back to top
      <span aria-hidden="true" className="transition-transform group-hover:-translate-y-1">
        ↑
      </span>
    </button>
  );
}
