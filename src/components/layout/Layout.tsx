import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Suspense, useEffect, useLayoutEffect, useRef } from "react";
import { Outlet, useLocation, useNavigationType } from "react-router-dom";
import { getSmoothScroll, initializeSmoothScroll } from "../../lib/smoothScroll";
import { useReducedMotion } from "../../lib/useReducedMotion";
import { services } from "../../data/services";
import { SiteFooter } from "./SiteFooter";
import { SiteHeader } from "./SiteHeader";
import { SkipLink } from "./SkipLink";

const TITLES: Readonly<Record<string, string>> = {
  "/": "Branding Agency in Dubai | Oglas Global",
  "/about": "Oglas Global Founders & Team | Dubai Branding Agency",
  "/services": "Branding & Creative Services in Dubai | Oglas Global",
  "/works": "Branding & Creative Portfolio in Dubai | Oglas Global",
  "/works/fishwala": "Fishwala Branding Case Study | Oglas Global",
  "/works/velvet-properties": "Velvet Properties Website Design | Oglas Global",
  "/works/gymkha": "Gymkha Sportswear Website Design | Oglas Global",
  "/works/aspirant-wave": "Aspirant Wave Website Design | Oglas Global",
  "/works/snaxx": "Snaxx Website Design Project | Oglas Global",
  "/contacts": "Contact Oglas Global | Dubai Branding Agency",
  "/privacy": "Privacy Policy | Oglas Global",
  "/insights": "Branding & Creative Insights in Dubai | Oglas Global",
  "/blog/brand-consistency-matters-for-growing-businesses-in-dubai":
    "Why Brand Consistency Matters in Dubai | Oglas Global",
};

const DESCRIPTIONS: Readonly<Record<string, string>> = {
  "/":
    "Oglas Global is a branding agency in Dubai offering brand strategy, visual identity, digital marketing, web design and development.",
  "/about":
    "Meet the founders and team behind Oglas Global, a Dubai-based branding agency. Explore the people and leadership behind the company.",
  "/services":
    "Oglas Global offers branding services in Dubai, including brand strategy, visual identity, web design, digital marketing, UX/UI and web development.",
  "/works":
    "Explore Oglas Global's creative portfolio in Dubai, showcasing branding, web design, apps and social media projects created for growing brands.",
  "/works/fishwala":
    "Explore Oglas Global's Fishwala branding project, featuring strategic brand design created to elevate the fresh food experience.",
  "/works/velvet-properties":
    "Explore Oglas Global's Velvet Properties project, a refined website design created to showcase a luxury real estate brand with clarity and elegance.",
  "/works/gymkha":
    "Explore Oglas Global's Gymkha project: an e-commerce experience for a modern sportswear brand focused on movement, comfort and everyday performance.",
  "/works/aspirant-wave":
    "Explore Oglas Global's Aspirant Wave website design project for a study abroad consultancy connecting students with global education opportunities.",
  "/works/snaxx":
    "See how Oglas Global designed the Snaxx website for a vending machine sales and service brand, with a clear, user-focused digital experience.",
  "/contacts":
    "Contact Oglas Global, a Dubai-based branding agency, to discuss brand strategy, visual identity, web design and digital marketing for your business.",
  "/privacy":
    "Read Oglas Global's privacy policy to learn what information we collect, how we use it, and how we protect your privacy.",
  "/insights":
    "Explore Oglas Global's insights on branding, brand consistency, creative design and digital experiences for businesses in Dubai and beyond.",
  "/blog/brand-consistency-matters-for-growing-businesses-in-dubai":
    "Learn why brand consistency matters for Dubai businesses and how aligned visuals, messaging and customer experiences build recognition and trust.",
};

function titleForPath(pathname: string): string {
  const serviceId = pathname.match(/^\/services\/([^/]+)$/)?.[1];
  const service = services.find((item) => item.id === serviceId);
  if (service) return `${service.title} Services in Dubai | Oglas Global`;
  return TITLES[pathname] ?? "Page not found — The Oglas Agency";
}

function descriptionForPath(pathname: string): string | undefined {
  const serviceId = pathname.match(/^\/services\/([^/]+)$/)?.[1];
  const service = services.find((item) => item.id === serviceId);
  return service?.description[0] ?? DESCRIPTIONS[pathname];
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

    const canonicalUrl = `https://www.oglasglobal.com${
      location.pathname === "/" ? "" : location.pathname.replace(/\/$/, "")
    }`;
    let canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = canonicalUrl;
    document.querySelector<HTMLMetaElement>('meta[property="og:url"]')?.setAttribute("content", canonicalUrl);

    const description = descriptionForPath(location.pathname);
    if (description) {
      document.querySelector<HTMLMetaElement>('meta[name="description"]')?.setAttribute("content", description);
      document.querySelector<HTMLMetaElement>('meta[property="og:description"]')?.setAttribute("content", description);
      document.querySelector<HTMLMetaElement>('meta[name="twitter:description"]')?.setAttribute("content", description);
    }
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
