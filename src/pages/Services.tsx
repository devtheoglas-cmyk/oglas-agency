import { Fragment, useEffect, useRef, type CSSProperties, type MouseEvent, type ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChapterDock } from "../components/services/ChapterDock";
import { ArrowDown, ArrowRight, ArrowUpRight, Check, Spark } from "../components/services/icons";
import { ProcessTrack } from "../components/services/ProcessTrack";
import { ServicePlate } from "../components/services/ServicePlate";
import { ServicesFaq } from "../components/services/ServicesFaq";
import { BgImage } from "../components/ui/BgImage";
import { faqs, services, servicesIntro, type Service } from "../data/services";
import { siteDetails } from "../data/site";
import { brandWorks, productWorks, type Work } from "../data/works";
import { cn } from "../lib/cn";
import { scrollToSection } from "../lib/scrollToSection";
import { useReducedMotion } from "../lib/useReducedMotion";
import "../styles/services.css";

/*
  THESIS: Each discipline proves itself by doing its job on screen: a looping, phase-captioned
  plate beside a complete written spec, instead of the category's icon-card-and-blurb grid.
  OWN-WORLD: The Oglas frame unchanged: studio dark, gallery white and soft proof fields,
  Vend Sans display in uppercase, Manrope body, hairline rows, square plates, lime only for
  interface state and the plates' own signal.
  STORY: See all five disciplines at once, read any one in full detail (included, how it runs,
  what you receive, who it suits, real work), understand the shared process, ask, then start.
  FIRST VIEWPORT: The existing manifesto rising word by word across the shell, a supporting
  line with the Start a project pill beneath it, and a five-column index of the disciplines
  pinned to the bottom of the viewport, each wiping lime on hover.
  FORM: Discipline chapters with sticky proof plates, chapter dock, pinned process track.
  FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review,
  the verdict, DESIGN.md, and every shipping raster carrying its provenance
*/

const SHELL = "mx-auto w-full max-w-[1760px] px-5 sm:px-8 lg:px-[4.15vw]";

const allWorks: Work[] = [...brandWorks, ...productWorks];

function findWork(slug: string): Work | undefined {
  return allWorks.find((work) => (work.caseStudySlug ?? work.slug) === slug && work.hasCaseStudy);
}

function jumpTo(event: MouseEvent<HTMLAnchorElement>, id: string): void {
  event.preventDefault();
  scrollToSection(id);
}

/* ------------------------------------------------------------------ */

function Hero() {
  const words = servicesIntro.split(" ");

  return (
    <section className="relative flex min-h-svh flex-col bg-dark text-white">
      <div className={`${SHELL} flex flex-1 flex-col justify-center pt-32 pb-12 lg:pt-40 lg:pb-16`}>
        <h1 className="max-w-[1500px] font-display text-[clamp(2.3rem,5.3vw,6rem)] leading-[0.94] font-extrabold tracking-[-0.04em] uppercase [text-wrap:balance]">
          {words.map((word, i) => (
            <Fragment key={`${word}-${i}`}>
              <span className="svc-word">
                <span style={{ "--i": i } as CSSProperties}>{word}</span>
              </span>
              {i < words.length - 1 && " "}
            </Fragment>
          ))}
        </h1>

        <div className="svc-hero-follow mt-10 flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between lg:mt-14">
          <p className="max-w-[560px] font-body text-[clamp(1.05rem,1.3vw,1.3rem)] leading-[1.55] text-white/70">
            Five disciplines, one team: from the first idea to launch, and everything that follows.
          </p>
          <Link
            className="group inline-flex shrink-0 items-center gap-3 rounded-full bg-white px-7 py-4 font-body text-sm font-semibold tracking-[0.08em] text-black uppercase transition-colors duration-300 hover:bg-lime"
            to="/contacts"
          >
            Start a project
            <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </div>

      <nav aria-label="Our services" className={`${SHELL} svc-hero-follow pb-10 lg:pb-14`} style={{ "--delay": "0.95s" } as CSSProperties}>
        <ol className="grid border-t border-white/15 md:grid-cols-5">
          {services.map((service) => (
            <li className="border-b border-white/15 md:border-b-0 md:border-l md:first:border-l-0" key={service.id}>
              <a
                className="svc-index group relative flex h-full items-center justify-between gap-6 overflow-hidden py-5 transition-colors duration-300 hover:text-black focus-visible:text-black max-md:-mx-3 max-md:px-3 md:flex-col md:items-start md:justify-start md:px-5 md:py-7 lg:px-7 lg:py-8"
                href={`#${service.id}`}
                onClick={(event) => jumpTo(event, service.id)}
              >
                <span aria-hidden="true" className="svc-index-fill absolute inset-0 bg-lime" />
                <span className="relative font-display text-[clamp(1.4rem,1.9vw,2.15rem)] leading-[0.95] font-bold tracking-[-0.03em] uppercase">
                  {service.title}
                </span>
                <ul className="relative hidden flex-col gap-1.5 font-body text-sm text-white/55 transition-colors duration-300 group-hover:text-black/70 group-focus-visible:text-black/70 md:flex">
                  {service.highlights.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <ArrowDown className="relative size-5 shrink-0 transition-transform duration-300 group-hover:translate-y-1 md:mt-auto" />
              </a>
            </li>
          ))}
        </ol>
      </nav>
    </section>
  );
}

/* ------------------------------------------------------------------ */

function Block({ label, children, className }: { label: string; children: ReactNode; className?: string }) {
  return (
    <div className={className}>
      <h3 className="mb-6 font-body text-sm font-bold tracking-[0.08em] uppercase opacity-55 lg:mb-8">{label}</h3>
      {children}
    </div>
  );
}

function WorkLink({ work }: { work: Work }) {
  return (
    <Link className="group block" to={`/works/${work.caseStudySlug ?? work.slug}`}>
      <div className="relative overflow-hidden border border-current/10 bg-dark">
        <BgImage
          alt={`${work.name}, ${work.type}`}
          aspectRatio="920 / 582"
          className="transition-transform duration-[900ms] ease-out group-hover:scale-[1.05]"
          src={work.image}
        />
      </div>
      <div className="mt-4 flex items-start justify-between gap-4">
        <span>
          <span className="block font-display text-xl leading-none font-semibold tracking-[-0.02em] uppercase">{work.name}</span>
          <span className="mt-1.5 block font-body text-sm opacity-60">{work.type}</span>
        </span>
        <ArrowUpRight className="mt-0.5 size-5 shrink-0 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </div>
    </Link>
  );
}

function Chapter({ service, tone }: { service: Service; tone: "dark" | "light" }) {
  const dark = tone === "dark";
  const muted = dark ? "text-white/70" : "text-black/70";
  const rule = dark ? "border-white/15" : "border-black/15";
  const works = service.work.map(findWork).filter((work): work is Work => Boolean(work));

  return (
    <section
      aria-labelledby={`${service.id}-title`}
      className={cn("svc-chapter", dark ? "bg-dark text-white" : "bg-white text-black")}
      data-tone={tone}
      id={service.id}
    >
      <div className={`${SHELL} pt-24 pb-24 lg:pt-36 lg:pb-36`}>
        <header className={cn("grid gap-6 border-b pb-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,26rem)] lg:items-end lg:gap-16 lg:pb-14", rule)}>
          <h2
            className="svc-title font-display text-[clamp(2.6rem,8vw,9rem)] leading-[0.86] font-extrabold tracking-[-0.045em] uppercase outline-none [overflow-wrap:anywhere]"
            data-section-heading
            id={`${service.id}-title`}
            tabIndex={-1}
          >
            {service.title}
          </h2>
          <p className="font-body text-[clamp(1.1rem,1.35vw,1.4rem)] leading-[1.45] font-medium">{service.promise}</p>
        </header>

        <div className="mt-12 grid gap-14 lg:mt-16 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-[4.5vw]">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <div className="mx-auto w-full lg:max-w-[min(100%,calc((100svh_-_16rem)*1.25))]">
              <ServicePlate service={service} />
            </div>
          </div>

          <div className="flex min-w-0 flex-col gap-16 lg:gap-24">
            <div className={cn("max-w-[64ch] space-y-5 font-body text-[clamp(1.05rem,1.2vw,1.25rem)] leading-[1.65]", muted)}>
              {service.description.map((paragraph) => (
                <p key={paragraph.slice(0, 32)}>{paragraph}</p>
              ))}
            </div>

            <Block label="What's included">
              <ul className={cn("border-t", rule)}>
                {service.capabilities.map((capability) => (
                  <li className={cn("svc-cap border-b py-5 lg:py-6", rule)} key={capability.label}>
                    <div className="grid gap-1.5 sm:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] sm:gap-8">
                      <h4 className="m-0 font-body text-lg leading-snug font-semibold tracking-[-0.01em]">{capability.label}</h4>
                      <p className={cn("m-0 font-body text-base leading-[1.6]", muted)}>{capability.detail}</p>
                    </div>
                    {capability.children && (
                      <ul className={cn("mt-5 grid gap-4 border-l pl-5 sm:ml-[calc(42.5%_+_1.15rem)]", rule)}>
                        {capability.children.map((child) => (
                          <li key={child.label}>
                            <span className="block font-body text-base font-semibold">{child.label}</span>
                            <span className={cn("mt-1 block font-body text-base leading-[1.55]", muted)}>{child.detail}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </Block>

            <Block label="How it runs">
              <ol className="grid gap-x-10 gap-y-10 sm:grid-cols-2">
                {service.steps.map((step, i) => (
                  <li className={cn("svc-step relative border-t pt-6", rule)} key={step.title}>
                    <span className="font-display text-sm font-bold tracking-[0.04em] tabular-nums opacity-50">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h4 className="mt-3 mb-2 font-body text-lg font-semibold tracking-[-0.01em]">{step.title}</h4>
                    <p className={cn("m-0 font-body text-base leading-[1.6]", muted)}>{step.detail}</p>
                  </li>
                ))}
              </ol>
            </Block>

            <div className="grid gap-16 md:grid-cols-2 md:gap-10">
              <Block label="You receive">
                <ul className="flex flex-wrap gap-2">
                  {service.deliverables.map((item) => (
                    <li
                      className={cn(
                        "inline-flex items-center gap-2 rounded-full border px-4 py-2 font-body text-sm",
                        dark ? "border-white/20" : "border-black/20",
                      )}
                      key={item}
                    >
                      <Check className={cn("size-3.5 shrink-0", dark ? "text-lime" : "text-black")} strokeWidth={2.2} />
                      {item}
                    </li>
                  ))}
                </ul>
              </Block>

              <Block label="Right for you if">
                <ul className="grid gap-4">
                  {service.fit.map((line) => (
                    <li className="flex gap-3 font-body text-base leading-[1.55]" key={line}>
                      <ArrowRight className={cn("mt-1 size-4 shrink-0", dark ? "text-lime" : "text-black")} />
                      <span className={muted}>{line}</span>
                    </li>
                  ))}
                </ul>
              </Block>
            </div>

            {works.length > 0 && (
              <Block label="See it in our work">
                <ul className="grid gap-x-6 gap-y-10 sm:grid-cols-2">
                  {works.map((work) => (
                    <li key={work.slug}>
                      <WorkLink work={work} />
                    </li>
                  ))}
                </ul>
              </Block>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */

function CapabilityRibbon() {
  const labels = services.flatMap((service) =>
    service.capabilities.flatMap((capability) => [capability.label, ...(capability.children?.map((child) => child.label) ?? [])]),
  );
  const unique = Array.from(new Set(labels));
  const half = Math.ceil(unique.length / 2);
  const rows = [unique.slice(0, half), unique.slice(half)];

  return (
    <section aria-hidden="true" className="overflow-hidden border-t border-white/10 bg-dark py-16 text-white lg:py-24">
      {rows.map((row, r) => (
        <div className={cn("marquee group relative overflow-hidden", r === 1 && "svc-ribbon-reverse mt-3 lg:mt-5")} key={r}>
          <div className="marquee__track flex w-max items-center" style={{ animationDuration: `${70 + r * 12}s` }}>
            {[0, 1].map((copy) => (
              <ul className="flex shrink-0 items-center" key={copy}>
                {row.map((label) => (
                  <li className="flex items-center" key={`${copy}-${label}`}>
                    <span
                      className={cn(
                        "px-6 font-display text-[clamp(2.2rem,5.4vw,5.75rem)] leading-[1.05] font-extrabold tracking-[-0.04em] whitespace-nowrap uppercase lg:px-10",
                        r === 1 && "text-white/25",
                      )}
                    >
                      {label}
                    </span>
                    <Spark className="size-[clamp(1rem,1.8vw,1.75rem)] shrink-0 text-lime" />
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}

/* ------------------------------------------------------------------ */

function MagneticLink({ to, children }: { to: string; children: ReactNode }) {
  const area = useRef<HTMLDivElement>(null);
  const button = useRef<HTMLAnchorElement>(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const areaEl = area.current;
    const buttonEl = button.current;
    if (!areaEl || !buttonEl || reducedMotion) return;
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;

    const move = (event: PointerEvent): void => {
      const rect = areaEl.getBoundingClientRect();
      const x = event.clientX - (rect.left + rect.width / 2);
      const y = event.clientY - (rect.top + rect.height / 2);
      buttonEl.style.transform = `translate3d(${x * 0.28}px, ${y * 0.28}px, 0)`;
    };
    const reset = (): void => {
      buttonEl.style.transform = "";
    };

    areaEl.addEventListener("pointermove", move);
    areaEl.addEventListener("pointerleave", reset);
    return () => {
      areaEl.removeEventListener("pointermove", move);
      areaEl.removeEventListener("pointerleave", reset);
    };
  }, [reducedMotion]);

  return (
    <div className="grid size-[clamp(14rem,22vw,20rem)] shrink-0 place-items-center" ref={area}>
      <Link
        className="group grid size-[clamp(9.5rem,13vw,12rem)] place-items-center rounded-full bg-lime text-center text-black transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
        ref={button}
        to={to}
      >
        <span className="flex flex-col items-center gap-2 font-body text-sm font-bold tracking-[0.08em] uppercase">
          <ArrowUpRight className="size-6 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          {children}
        </span>
      </Link>
    </div>
  );
}

function ClosingCta() {
  const { dubai, india } = siteDetails.offices;
  const studios = [
    { name: "Dubai studio", email: dubai.email, phone: dubai.generalPhone },
    { name: "Calicut studio", email: india.email, phone: india.generalPhone },
  ];

  return (
    <section aria-labelledby="services-cta-title" className="bg-dark text-white">
      <div className={`${SHELL} py-24 lg:py-40`}>
        <div className="flex flex-col gap-12 lg:flex-row lg:items-center lg:justify-between lg:gap-16">
          <h2
            className="font-display text-[clamp(2.6rem,6.6vw,7.5rem)] leading-[0.88] font-extrabold tracking-[-0.045em] uppercase"
            id="services-cta-title"
          >
            Have a project in mind?
            <span className="block text-white/35">Let&apos;s build it together.</span>
          </h2>
          <MagneticLink to="/contacts">Start a project</MagneticLink>
        </div>

        <dl className="mt-16 grid gap-10 border-t border-white/15 pt-10 sm:grid-cols-2 lg:mt-24 lg:max-w-[880px]">
          {studios.map((studio) => (
            <div key={studio.name}>
              <dt className="font-body text-sm font-bold tracking-[0.08em] text-white/50 uppercase">{studio.name}</dt>
              <dd className="mt-4 grid gap-1.5 font-body text-lg">
                <a className="w-fit underline-offset-4 transition-colors hover:text-lime hover:underline" href={`mailto:${studio.email}`}>
                  {studio.email}
                </a>
                <a
                  className="w-fit text-white/70 underline-offset-4 transition-colors hover:text-lime hover:underline"
                  href={`tel:${studio.phone.replace(/\s+/g, "")}`}
                >
                  {studio.phone}
                </a>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */

export default function Services() {
  const location = useLocation();

  // Honour deep links such as /services#web-design once layout has settled.
  useEffect(() => {
    const id = location.hash.slice(1);
    if (!id) return;
    let frame = 0;
    void document.fonts.ready.then(() => {
      frame = window.requestAnimationFrame(() => {
        frame = window.requestAnimationFrame(() => scrollToSection(id, { immediate: true }));
      });
    });
    return () => window.cancelAnimationFrame(frame);
    // Only on arrival; in-page jumps update the hash themselves.
  }, []);

  return (
    <div>
      <Hero />
      {services.map((service, i) => (
        <Chapter key={service.id} service={service} tone={i % 2 === 0 ? "light" : "dark"} />
      ))}
      <ChapterDock services={services} />
      <CapabilityRibbon />
      <ProcessTrack />
      <section aria-labelledby="faq-title" className="bg-white text-black">
        <div className={`${SHELL} grid gap-12 py-24 lg:grid-cols-[minmax(0,0.38fr)_minmax(0,1fr)] lg:gap-16 lg:py-36`}>
          <div>
            <h2
              className="font-display text-[clamp(2.4rem,4.4vw,4.75rem)] leading-[0.9] font-extrabold tracking-[-0.04em] uppercase"
              id="faq-title"
            >
              Questions, answered
            </h2>
            <p className="mt-6 max-w-[34ch] font-body text-base leading-[1.6] text-black/65">
              Anything we have not covered? Write to{" "}
              <a className="font-semibold text-black underline underline-offset-4" href={`mailto:${siteDetails.offices.dubai.email}`}>
                {siteDetails.offices.dubai.email}
              </a>
              .
            </p>
          </div>
          <ServicesFaq faqs={faqs} />
        </div>
      </section>
      <ClosingCta />
    </div>
  );
}
