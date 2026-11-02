import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Suspense, useEffect, useLayoutEffect, useRef } from "react";
import { Outlet, useLocation, useNavigationType } from "react-router-dom";
import { getSmoothScroll, initializeSmoothScroll } from "../../lib/smoothScroll";
import { useReducedMotion } from "../../lib/useReducedMotion";
import { SiteFooter } from "./SiteFooter";
import { SiteHeader } from "./SiteHeader";
import { SkipLink } from "./SkipLink";

const TITLES: Readonly<Record<string, string>> = {
  "/": "Oglas Global | Branding & Creative Agency in Dubai",
  "/about": "About | The Oglas Agency",
  "/services": "Creative Services in Dubai | Oglas Global",
  "/works": "Works | The Oglas Agency",
  "/works/fishwala": "Fishwala | The Oglas Agency",
  "/works/velvet-properties": "Velvet Properties | The Oglas Agency",
  "/works/gymkha": "Gymkha | The Oglas Agency",
  "/works/aspirant-wave": "Aspirant Wave | The Oglas Agency",
  "/works/snaxx": "Snaxx | The Oglas Agency",
  "/contacts": "Contact | The Oglas Agency",
  "/privacy": "Privacy Policy | The Oglas Agency",
  "/blog/brand-consistency-matters-for-growing-businesses-in-dubai":
    "Why Brand Consistency Matters for Growing Businesses in Dubai | The Oglas",
};

const DESCRIPTIONS: Readonly<Record<string, string>> = {
  "/services":
    "Explore brand design, web design, digital marketing, UX/UI design and web development from Oglas Global's studios in Dubai and India.",
  "/blog/brand-consistency-matters-for-growing-businesses-in-dubai":
    "Dubai customers may encounter a business through search, social media, a website, an advert, a proposal or a face-to-face conversation. Each interaction shapes their impression.",
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
    const title = titleForPath(location.pathname);
    document.title = title;
    document.querySelector<HTMLMetaElement>('meta[property="og:title"]')?.setAttribute("content", title);
    document.querySelector<HTMLMetaElement>('meta[name="twitter:title"]')?.setAttribute("content", title);

    const description = DESCRIPTIONS[location.pathname];
    if (!description) return;

    document.querySelector<HTMLMetaElement>('meta[name="description"]')?.setAttribute("content", description);
    document.querySelector<HTMLMetaElement>('meta[property="og:description"]')?.setAttribute("content", description);
    document.querySelector<HTMLMetaElement>('meta[name="twitter:description"]')?.setAttribute("content", description);
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
