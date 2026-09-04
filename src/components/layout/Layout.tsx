import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Suspense, useEffect, useLayoutEffect, useRef } from "react";
import { Outlet, useLocation, useNavigationType } from "react-router-dom";
import { getSmoothScroll, initializeSmoothScroll } from "../../lib/smoothScroll";
import { useReducedMotion } from "../../lib/useReducedMotion";
import { SiteFooter } from "./SiteFooter";
import { SiteHeader } from "./SiteHeader";
import { SkipLink } from "./SkipLink";

const TITLES: Readonly<Record<string, string>> = {
  "/": "The Oglas Agency",
  "/about": "About | The Oglas Agency",
  "/services": "Services | The Oglas Agency",
  "/works": "Works | The Oglas Agency",
  "/works/fishwala": "Fishwala | The Oglas Agency",
  "/works/velvet-properties": "Velvet Properties | The Oglas Agency",
  "/contacts": "Contact | The Oglas Agency",
  "/privacy": "Privacy Policy | The Oglas Agency",
};

function titleForPath(pathname: string): string {
  return TITLES[pathname] ?? "Page not found — The Oglas Agency";
}

export function Layout() {
  const location = useLocation();
  const navigationType = useNavigationType();
  const reducedMotion = useReducedMotion();
  const scrollPositions = useRef(new Map<string, number>());
  const firstRoute = useRef(true);

  useEffect(() => initializeSmoothScroll(), [reducedMotion]);

  useEffect(() => {
    document.title = titleForPath(location.pathname);
  }, [location.pathname]);

  useEffect(() => {
    const previousRestoration = window.history.scrollRestoration;
    window.history.scrollRestoration = "manual";
    return () => {
      window.history.scrollRestoration = previousRestoration;
    };
  }, []);

  useLayoutEffect(() => {
    const routeKey = location.key;
    const destination = navigationType === "POP" ? (scrollPositions.current.get(routeKey) ?? 0) : 0;
    const frame = window.requestAnimationFrame(() => {
      const lenis = getSmoothScroll();
      if (lenis) {
        lenis.scrollTo(destination, { immediate: true });
      } else {
        window.scrollTo({ top: destination, behavior: "auto" });
      }

      if (!firstRoute.current) {
        document.querySelector<HTMLElement>("#main")?.focus({ preventScroll: true });
      }
      firstRoute.current = false;
    });

    return () => {
      window.cancelAnimationFrame(frame);
      scrollPositions.current.set(routeKey, window.scrollY);
    };
  }, [location.key, navigationType]);

  useEffect(() => {
    let cancelled = false;

    const refreshAfterLayoutSettles = async (): Promise<void> => {
      await document.fonts.ready;
      const images = Array.from(document.querySelectorAll<HTMLImageElement>("#main img"));
      await Promise.allSettled(
        images.map((image) => (image.complete ? Promise.resolve() : image.decode())),
      );

      window.requestAnimationFrame(() => {
        window.requestAnimationFrame(() => {
          if (!cancelled) ScrollTrigger.refresh();
        });
      });
    };

    void refreshAfterLayoutSettles();
    return () => {
      cancelled = true;
    };
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-dark">
      <SkipLink />
      <SiteHeader />
      <main className="outline-none" id="main" tabIndex={-1}>
        <Suspense
          fallback={
            <div className="grid min-h-screen place-items-center bg-dark text-sm text-white" role="status">
              Loading…
            </div>
          }
        >
          <Outlet />
        </Suspense>
      </main>
      <SiteFooter />
    </div>
  );
}
