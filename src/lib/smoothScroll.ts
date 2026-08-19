import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

gsap.registerPlugin(ScrollTrigger);

let activeLenis: Lenis | null = null;
let teardownActiveInstance: (() => void) | null = null;

export function initializeSmoothScroll(): () => void {
  teardownActiveInstance?.();

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    return () => undefined;
  }

  const lenis = new Lenis({ autoRaf: false });
  const updateScrollTrigger = (): void => ScrollTrigger.update();
  const tick = (seconds: number): void => lenis.raf(seconds * 1000);

  activeLenis = lenis;
  lenis.on("scroll", updateScrollTrigger);
  gsap.ticker.lagSmoothing(0);
  gsap.ticker.add(tick);

  const teardown = (): void => {
    gsap.ticker.remove(tick);
    lenis.off("scroll", updateScrollTrigger);
    lenis.destroy();

    if (activeLenis === lenis) {
      activeLenis = null;
    }

    if (teardownActiveInstance === teardown) {
      teardownActiveInstance = null;
    }
  };

  teardownActiveInstance = teardown;
  return teardown;
}

export function getSmoothScroll(): Lenis | null {
  return activeLenis;
}

export function stopSmoothScroll(): void {
  activeLenis?.stop();
}

export function startSmoothScroll(): void {
  activeLenis?.start();
}
