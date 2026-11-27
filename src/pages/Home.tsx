import { useId, useRef, useState, type CSSProperties } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";
import { ProcessTrack } from "../components/services/ProcessTrack";
import { ServicesFaq } from "../components/services/ServicesFaq";
import { BgImage } from "../components/ui/BgImage";
import { Carousel } from "../components/ui/Carousel";
import { WorkCard } from "../components/ui/WorkCard";
import { clients, heroManifesto, testimonials, whatWeDoIntro, whatWeDoItems } from "../data/home";
import { featuredInsight } from "../data/insights";
import { faqs, processStages } from "../data/services";
import { brandWorks, featuredWorks, productWorks } from "../data/works";
import type { Work } from "../data/works";
import { cn } from "../lib/cn";
import { useReveal } from "../lib/useReveal";
import "../styles/home.css";

const SHELL = "mx-auto w-full max-w-[1760px] px-5 sm:px-8 lg:px-[4.15vw]";

gsap.registerPlugin(useGSAP, ScrollTrigger);

function Hero() {
  const heroRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    const media = gsap.matchMedia();
    media.add({
      desktop: "(min-width: 768px)",
      mobile: "(max-width: 767px)",
      motion: "(prefers-reduced-motion: no-preference)",
    }, (context) => {
      if (!context.conditions?.motion) return;
      const desktop = context.conditions.desktop;

      gsap.to(".home-hero-copy", {
        y: desktop ? 100 : 40,
        opacity: 0.25,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "65% top",
          scrub: 0.5,
        },
      });

      gsap.fromTo(".home-hero-scroll-art", {
        scale: desktop ? 0.86 : 0.94,
        rotation: desktop ? -3 : -1.5,
        borderRadius: 24,
      }, {
        scale: 1,
        rotation: 0,
        borderRadius: 0,
        ease: "none",
        scrollTrigger: {
          trigger: ".home-hero-artwork",
          start: "top 85%",
          end: "top 15%",
          scrub: 0.6,
          invalidateOnRefresh: true,
        },
      });
    });
    return () => media.revert();
  }, { scope: heroRef });

  return (
    <section ref={heroRef} className="relative flex min-h-screen flex-col overflow-hidden bg-dark text-white">
      <div className="flex flex-1 flex-col justify-center px-4 pt-24 pb-12 sm:px-8 lg:pt-32 lg:pb-16">
        <div className={`${SHELL} home-hero-copy text-center`}>
          <h1
            className="mx-auto max-w-[1559px] break-words font-condensed text-[clamp(2.25rem,4.6vw,78px)] leading-[0.9] font-semibold tracking-[-0.03em] text-center text-white uppercase [text-wrap:balance] [leading-trim:none] lg:leading-[0.86]"
            aria-label={heroManifesto}
          >
            {heroManifesto.split(" ").map((word, index) => (
              <span aria-hidden="true" key={`${word}-${index}`}>
                <span className="home-hero-word-mask">
                  <span className="home-hero-word" style={{ "--word-delay": `${index * 30}ms` } as CSSProperties}>
                    {word}
                  </span>
                </span>{" "}
              </span>
            ))}
          </h1>
          <div className="home-hero-badge mt-10 flex flex-wrap justify-center gap-3 lg:mt-20">
            <span className="rounded-full border border-white/35 px-6 py-2.5 font-body text-sm tracking-[0.12em] text-white uppercase">
              Since 2019
            </span>
            <Link
              className="rounded-full bg-white px-6 py-2.5 font-body text-sm font-semibold tracking-[0.08em] text-black uppercase transition-colors hover:bg-lime"
              to="/contacts"
            >
              Start a project
            </Link>
          </div>
        </div>
      </div>
      <div className="home-hero-artwork overflow-hidden">
        <BgImage
          alt="A collage of Oglas brand and packaging work"
          className="home-hero-scroll-art w-full overflow-hidden"
          fit="contain"
          src="/assets/home/hero-collage.webp"
        />
      </div>
    </section>
  );
}

function SectionLabel({ children, onLight = false }: { children: string; onLight?: boolean }) {
  return (
    <span
      className={cn(
        "flex items-center gap-2.5 font-body text-sm font-medium tracking-[0.08em] uppercase",
        onLight ? "text-black/60" : "text-lime",
      )}
      data-reveal
    >
      <span aria-hidden="true" className="text-lg leading-none">
        •
      </span>
      {children}
    </span>
  );
}

function AboutOglas() {
  return (
    <section className="bg-white py-20 text-black lg:py-36">
      <div className={SHELL}>
        <SectionLabel onLight>about Oglas Global</SectionLabel>
        <div className="mt-8 grid gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(20rem,0.8fr)] lg:items-end lg:gap-20">
          <h2
            className="font-display text-[clamp(2.4rem,5.3vw,6rem)] leading-[0.92] font-extrabold tracking-[-0.04em] uppercase"
            data-reveal
          >
            Founded in 2019 by Abi Roshan and Faheem Razi, Oglas Global is a borderless creative agency shaping culture through iconic, value-driven brand platforms.
          </h2>
          <div data-reveal>
            <p className="font-body text-lg leading-[1.7] text-black/70">{whatWeDoIntro}</p>
            <Link
              className="mt-8 inline-flex items-center gap-2 rounded-full border border-black/25 px-6 py-3 font-body text-sm font-semibold tracking-[0.08em] uppercase transition-colors hover:bg-black hover:text-white"
              to="/about"
            >
              Meet the agency <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

const whyOglasItems = [
  { title: "Strategy", text: processStages[0]!.detail },
  { title: "Creativity", text: processStages[2]!.detail },
  { title: "Technology", text: processStages[3]!.detail },
];

function WhyOglas() {
  return (
    <section className="bg-dark py-20 text-white lg:py-36">
      <div className={SHELL}>
        <SectionLabel>why choose Oglas Global?</SectionLabel>
        <h2
          className="mt-8 max-w-[1200px] font-display text-[clamp(2.6rem,6vw,6.5rem)] leading-[0.9] font-extrabold tracking-[-0.04em] uppercase"
          data-reveal
        >
          Strategy, creativity and technology working together.
        </h2>
        <div className="mt-14 grid border-t border-white/15 md:grid-cols-3 lg:mt-20" data-reveal>
          {whyOglasItems.map((item) => (
            <article className="border-b border-white/15 py-8 md:border-b-0 md:border-l md:px-8 md:first:border-l-0 md:first:pl-0" key={item.title}>
              <h3 className="font-display text-3xl font-semibold tracking-[-0.02em] uppercase">{item.title}</h3>
              <p className="mt-5 max-w-[38ch] font-body text-base leading-[1.65] text-white/65">{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

const industryWorks = [...brandWorks, ...productWorks].filter((work) =>
  ["fishwala", "velvet-properties", "gymkha", "aspirant-wave", "snaxx"].includes(work.slug),
);

function IndustriesWeServe() {
  return (
    <section className="bg-white py-20 text-black lg:py-36">
      <div className={SHELL}>
        <SectionLabel onLight>industries we serve</SectionLabel>
        <div className="mt-8 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <h2
            className="max-w-[1050px] font-display text-[clamp(2.5rem,5.4vw,6rem)] leading-[0.9] font-extrabold tracking-[-0.04em] uppercase"
            data-reveal
          >
            Relevant industries supported by actual experience.
          </h2>
          <Link className="w-fit shrink-0 font-body text-sm font-semibold tracking-[0.08em] uppercase underline underline-offset-4" to="/works">
            Explore all work
          </Link>
        </div>
        <ol className="mt-14 border-t border-black/15 lg:mt-20" data-reveal>
          {industryWorks.map((work, index) => {
            const content = (
              <>
                <span className="font-body text-sm tabular-nums text-black/45">{String(index + 1).padStart(2, "0")}</span>
                <span className="font-display text-[clamp(1.65rem,3.2vw,3.6rem)] leading-none font-semibold tracking-[-0.025em] uppercase">{work.name}</span>
                <span className="font-body text-sm leading-relaxed text-black/60 md:text-right">{work.type}</span>
              </>
            );

            return (
              <li className="border-b border-black/15" key={work.slug}>
                {work.hasCaseStudy ? (
                  <Link
                    className="grid items-center gap-4 py-6 transition-colors hover:text-black/55 md:grid-cols-[3rem_minmax(0,1fr)_minmax(14rem,0.65fr)] lg:py-8"
                    to={`/works/${work.caseStudySlug ?? work.slug}`}
                  >
                    {content}
                  </Link>
                ) : (
                  <div className="grid items-center gap-4 py-6 md:grid-cols-[3rem_minmax(0,1fr)_minmax(14rem,0.65fr)] lg:py-8">{content}</div>
                )}
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}

function Expertise() {
  return (
    <section className="bg-off-white py-20 text-black lg:py-36">
      <div className={SHELL}>
        <SectionLabel onLight>our expertise / capabilities</SectionLabel>
        <h2
          className="mt-8 max-w-[1120px] font-display text-[clamp(2.5rem,5.4vw,6rem)] leading-[0.9] font-extrabold tracking-[-0.04em] uppercase"
          data-reveal
        >
          The combination of strategy, creativity and technology.
        </h2>
        <div className="mt-14 grid gap-8 lg:mt-20 lg:grid-cols-3" data-reveal>
          {whyOglasItems.map((item, index) => (
            <article className="border-t border-black/20 pt-7" key={item.title}>
              <span className="font-body text-sm tabular-nums text-black/45">{String(index + 1).padStart(2, "0")}</span>
              <h3 className="mt-4 font-display text-[clamp(2rem,3vw,3.5rem)] leading-none font-semibold tracking-[-0.03em] uppercase">{item.title}</h3>
              <p className="mt-5 max-w-[42ch] font-body text-base leading-[1.65] text-black/65">{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function LatestInsights() {
  return (
    <section className="bg-off-white py-20 text-black lg:py-36">
      <div className={SHELL}>
        <div className="mb-10 flex flex-wrap items-end justify-between gap-6 lg:mb-14">
          <div>
            <SectionLabel onLight>insights / latest articles</SectionLabel>
            <h2 className="mt-6 font-display text-[clamp(2.5rem,5vw,5.5rem)] leading-[0.9] font-extrabold tracking-[-0.04em] uppercase" data-reveal>
              Latest thinking and knowledge.
            </h2>
          </div>
          <Link className="font-body text-sm font-semibold tracking-[0.08em] uppercase underline underline-offset-4" to="/insights">
            View all insights
          </Link>
        </div>
        <Link
          className="group grid gap-8 border-t border-black/15 pt-7 lg:grid-cols-[minmax(0,1.15fr)_minmax(20rem,0.85fr)] lg:gap-16"
          data-reveal
          to={featuredInsight.href}
        >
          <BgImage
            alt="Brand Consistency Drives Growth campaign image featuring The Oglas branded materials, website screens and Dubai skyline"
            aspectRatio="16 / 9"
            className="w-full overflow-hidden transition-transform duration-500 ease-out group-hover:scale-[1.01]"
            src={featuredInsight.image}
          />
          <div className="flex max-w-[38rem] flex-col items-start lg:py-3">
            <p className="font-body text-sm font-semibold tracking-[0.1em] text-black/60 uppercase">{featuredInsight.category}</p>
            <h3 className="mt-5 font-display text-[clamp(2.2rem,4vw,4.8rem)] leading-[0.9] font-extrabold tracking-[-0.04em] uppercase">{featuredInsight.title}</h3>
            <p className="mt-6 font-body text-base leading-[1.7] text-black/70">{featuredInsight.excerpt}</p>
            <span className="mt-8 font-body text-sm font-semibold tracking-[0.08em] uppercase underline underline-offset-4">Read article →</span>
          </div>
        </Link>
      </div>
    </section>
  );
}

function HomeFaq() {
  return (
    <section aria-labelledby="home-faq-title" className="bg-white py-20 text-black lg:py-36">
      <div className={`${SHELL} grid gap-12 lg:grid-cols-[minmax(0,0.38fr)_minmax(0,1fr)] lg:gap-16`}>
        <div>
          <SectionLabel onLight>frequently asked questions</SectionLabel>
          <h2
            className="mt-6 font-display text-[clamp(2.5rem,5vw,5.5rem)] leading-[0.9] font-extrabold tracking-[-0.04em] uppercase"
            data-reveal
            id="home-faq-title"
          >
            Genuine questions from potential clients.
          </h2>
        </div>
        <div data-reveal>
          <ServicesFaq faqs={faqs} />
        </div>
      </div>
    </section>
  );
}

function VisualsFelt() {
  return (
    <section className="bg-dark py-14 text-white lg:py-24">
      <div className={SHELL}>
        <div className="mb-14 flex flex-wrap items-end justify-between gap-6 lg:mb-20">
          <div className="flex flex-col gap-4">
            <SectionLabel>our works</SectionLabel>
            <h2
              className="font-display text-[clamp(2rem,4.93vw,94.63px)] leading-[1.02] font-semibold tracking-[-0.02em] uppercase break-words"
              data-reveal
            >
              Visuals created to be felt
            </h2>
            <span
              aria-hidden="true"
              className="works-accent mt-1 h-[3px] w-40 rounded-full bg-lime lg:w-56"
            />
          </div>
          <Link
            className="flex shrink-0 items-center gap-2 rounded-full border border-white/30 px-6 py-3 font-body text-sm tracking-wide uppercase transition-colors hover:bg-lime hover:text-black"
            data-reveal
            to="/works"
          >
            View our works
            <span aria-hidden="true">↗</span>
          </Link>
        </div>
        <div className="grid gap-x-8 gap-y-14 md:grid-cols-2 md:gap-x-16 lg:gap-x-24 lg:gap-y-16" data-reveal>
          {featuredWorks.map((work) => (
            <WorkCard key={work.slug} work={work} />
          ))}
        </div>
      </div>
    </section>
  );
}

interface ShowcaseProps {
  overline: string;
  lineOne: string;
  lineTwo: string;
  ghost: string;
  works: Work[];
  band: string;
  bandCta: string;
  dark?: boolean;
}

function ShowcaseBand({ text, cta, dark }: { text: string; cta: string; dark: boolean }) {
  const ruleClass = dark ? "border-white/15" : "border-black/15";
  return (
    <div className="mt-16 lg:mt-32">
      <div className="flex items-center justify-center gap-6 lg:gap-10">
        <span aria-hidden="true" className={cn("band-rule-left hidden h-px flex-1 border-t origin-right sm:block", ruleClass)} />
        <span className="band-pill rounded-full border border-current/30 px-6 py-2.5 font-body text-[0.68rem] tracking-[0.2em] uppercase">
          {cta}
        </span>
        <span aria-hidden="true" className={cn("band-rule-right hidden h-px flex-1 border-t origin-left sm:block", ruleClass)} />
      </div>
      <p
        className="band-text mx-auto mt-8 max-w-[880px] text-center font-display text-[clamp(1.4rem,2.8vw,2.4rem)] leading-[1.15] font-semibold tracking-[-0.02em] uppercase"
        data-reveal
      >
        {text}
      </p>
    </div>
  );
}

function WorkShowcase({ overline, lineOne, lineTwo, ghost, works, band, bandCta, dark = true }: ShowcaseProps) {
  // Unique keywords drawn from the projects themselves, for the ribbon.
  const keywords = Array.from(new Set(works.flatMap((w) => w.tags)));

  return (
    <section className={cn("py-14 lg:py-28", dark ? "bg-dark text-white" : "bg-white text-black")}>
      <div className={SHELL}>
        <div className="mb-12 lg:mb-24">
          <h2
            className="showcase-word-left text-center font-display text-[clamp(2.5rem,13vw,250px)] leading-[0.74] font-semibold tracking-[-0.02em] uppercase break-words [text-wrap:balance]"
            data-reveal
          >
            {lineOne}
          </h2>
          <div className="relative flex items-center justify-center py-2 lg:py-14">
            {/* Ghost word layered between the two display lines */}
            <span
              aria-hidden="true"
              className={cn(
                "showcase-ghost pointer-events-none select-none font-display text-[clamp(1.8rem,6vw,7rem)] leading-none font-semibold tracking-[-0.04em] uppercase",
                dark ? "text-white/[0.07]" : "text-black/[0.06]",
              )}
            >
              {ghost}
            </span>
            <span className="absolute rounded-full border border-current/25 px-5 py-2 font-body text-[0.7rem] tracking-[0.2em] uppercase">
              {overline}
            </span>
          </div>
          <h2
            className="showcase-word-right text-center font-display text-[clamp(2.5rem,13vw,250px)] leading-[0.74] font-semibold tracking-[-0.02em] uppercase break-words [text-wrap:balance]"
            data-reveal
          >
            {lineTwo}
          </h2>
        </div>

        {/* Keyword ribbon — fills the gap between the display words and the
           project grid with quiet motion. */}
        <div
          className={cn(
            "marquee relative mb-14 overflow-hidden border-y py-5 lg:mb-20",
            dark ? "border-white/12" : "border-black/12",
          )}
        >
          <ul className="marquee__track flex w-max items-center" aria-hidden="true" style={{ animationDuration: "38s" }}>
            {[...keywords, ...keywords, ...keywords, ...keywords].map((k, i) => (
              <li
                className="flex items-center gap-8 px-8 font-display text-[clamp(1rem,2vw,1.9rem)] font-semibold tracking-[-0.01em] uppercase opacity-70 lg:gap-12 lg:px-12"
                key={`${k}-${i}`}
              >
                {k}
                <span aria-hidden="true" className="text-lime">
                  ✦
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="grid gap-x-8 gap-y-16 md:grid-cols-2 lg:gap-y-24" data-reveal>
          {works.map((work) => (
            <WorkCard key={work.slug} work={work} />
          ))}
        </div>
        <ShowcaseBand cta={bandCta} dark={dark} text={band} />
      </div>
    </section>
  );
}

const homeServiceIds = ["brand-design", "web-design", "digital-marketing", "ux-ui-design", "web-development"] as const;

function WhatWeDo() {
  const [open, setOpen] = useState("Branding & Brand Identity Design");
  const baseId = useId();

  return (
    <section className="bg-white py-20 text-black lg:py-64">
      <div className={SHELL}>
        <div className="whatwedo-head mb-16 max-w-[1100px] lg:mb-20">
          <h2 className="font-display text-[clamp(1.8rem,3.2vw,2.7rem)] font-bold tracking-[-0.02em] uppercase" data-reveal>
            What we do
          </h2>
          <p className="mt-6 font-body text-lg leading-relaxed text-black/75" data-reveal>
            {whatWeDoIntro}
          </p>
          <p className="mt-5 font-body font-medium" data-reveal>
            See how we can help.
          </p>
        </div>

        <div data-reveal>
          {whatWeDoItems.map((item, itemIndex) => {
            const expandable = Boolean(item.description);
            const isOpen = expandable && open === item.title;
            const panelId = `${baseId}-${item.title.replace(/\s+/g, "-")}`;

            if (!expandable) {
              return (
                <div className="whatwedo-item flex w-full items-center justify-between gap-6 border-b border-hairline-dark py-7 lg:py-9" key={item.title}>
                  <span className="font-body text-2xl font-medium tracking-[-0.02em]">{item.title}</span>
                  <span aria-hidden="true" className="font-body text-2xl leading-none text-black/60">
                    ↓
                  </span>
                </div>
              );
            }

            return (
              <div className="whatwedo-item pb-10" key={item.title}>
                <div
                  className={cn(
                    "whatwedo-card group rounded-3xl bg-dark p-7 text-white transition-all duration-500 ease-out sm:p-9 lg:p-12",
                    isOpen && "whatwedo-card-open shadow-2xl shadow-black/40",
                  )}
                  data-state={isOpen ? "open" : "closed"}
                >
                  <button
                    aria-controls={panelId}
                    aria-expanded={isOpen}
                    className="flex w-full items-start justify-between gap-6 text-left transition-colors duration-300 hover:text-lime"
                    onClick={() => setOpen(isOpen ? "" : item.title)}
                    type="button"
                  >
                    <span className="font-body text-xl font-semibold transition-transform duration-500 ease-out group-hover:translate-x-1 sm:text-2xl lg:text-3xl">
                      {item.title}
                    </span>
                    <span
                      aria-hidden="true"
                      className={cn(
                        "shrink-0 text-2xl leading-none transition-transform duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]",
                        isOpen ? "rotate-180 text-lime" : "rotate-90",
                      )}
                    >
                      ↑
                    </span>
                  </button>

                  <div
                    className={cn(
                      "grid transition-[grid-template-rows,margin] duration-500 ease-[cubic-bezier(0.22,0.61,0.36,1)]",
                      isOpen ? "mt-8 grid-rows-[1fr]" : "grid-rows-[0fr]",
                    )}
                    id={panelId}
                  >
                    <div className="whatwedo-panel overflow-hidden">
                      <p className="max-w-[620px] font-body text-base leading-relaxed text-white/75">
                        {item.description}
                      </p>
                      <Link
                        className="mt-7 inline-flex items-center gap-2 font-body text-sm font-semibold tracking-[0.08em] text-lime uppercase underline decoration-1 underline-offset-4"
                        to={`/services/${homeServiceIds[itemIndex]}`}
                      >
                        Explore {item.title} <span aria-hidden="true">↗</span>
                      </Link>
                      {item.testimonial && (
                        <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
                          <div className="max-w-[520px]">
                            <blockquote className="font-body text-sm leading-relaxed text-white/75">
                              {item.testimonial.quote}
                            </blockquote>
                            <div className="mt-6 flex items-center gap-3">
                              {item.testimonial.avatar && (
                                <BgImage
                                  alt={item.testimonial.name}
                                  aspectRatio={1}
                                  className="size-10 rounded-full"
                                  src={item.testimonial.avatar}
                                />
                              )}
                              <span>
                                <span className="block text-sm font-semibold">{item.testimonial.name}</span>
                                <span className="block text-xs text-white/55">{item.testimonial.role}</span>
                              </span>
                            </div>
                          </div>
                          {item.clients && (
                            <ul className="flex flex-wrap gap-3">
                              {item.clients.map((client) => (
                                <li className="h-24 w-24 overflow-hidden rounded-2xl" key={client.name}>
                                  <BgImage
                                    alt={client.name}
                                    aspectRatio={1}
                                    className="h-full w-full"
                                    src={client.logo}
                                  />
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function LogoMarqueeRow({ reverse, duration }: { reverse?: boolean; duration: string }) {
  const track = [...clients, ...clients];
  return (
    <div className="marquee group relative overflow-hidden">
      <div
        className="marquee__track flex w-max items-center"
        style={{ animationDirection: reverse ? "reverse" : "normal", animationDuration: duration }}
      >
        <ul aria-hidden="true" className="flex shrink-0 items-center">
          {track.map((client, index) => (
            <li className="px-8 lg:px-14" key={`${client.name}-${index}`}>
              <BgImage
                alt=""
                className="block h-12 w-auto opacity-90 lg:h-16"
                fit="contain"
                src={client.logo}
              />
            </li>
          ))}
        </ul>
        <ul className="sr-only">
          {clients.map((client) => (
            <li key={client.name}>{client.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function SharedSuccess() {
  return (
    <section className="bg-dark py-24 text-white lg:py-64">
      <div className={cn(SHELL, "mb-16 lg:mb-28")}>
        <SectionLabel>our clients</SectionLabel>
        <h2
          className="mt-6 font-display text-[clamp(2.2rem,4.4vw,4.1rem)] leading-[1] font-extrabold tracking-[-0.055em] uppercase"
          data-reveal
        >
          Shared Success
        </h2>
      </div>
      <div className="flex flex-col gap-10 lg:gap-20">
        <LogoMarqueeRow duration="26s" reverse />
        <LogoMarqueeRow duration="30s" />
        <LogoMarqueeRow duration="22s" reverse />
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="bg-dark py-24 text-white lg:py-32">
      <div className={SHELL}>
        <div className="mb-16 lg:mb-20">
          <h2
            className="text-center font-display text-[clamp(2rem,4.4vw,4rem)] leading-[1.05] font-extrabold tracking-[-0.03em] uppercase"
            data-reveal
          >
            What our partners are saying
          </h2>
          <div className="mt-8 flex items-center justify-center gap-6 lg:gap-10">
            <span aria-hidden="true" className="hidden h-px flex-1 border-t border-white/15 sm:block" />
            <span
              className="shrink-0 rounded-full border border-white/25 px-6 py-2.5 font-body text-[0.68rem] tracking-[0.2em] uppercase"
              data-reveal
            >
              Genuine testimonial
            </span>
            <span aria-hidden="true" className="hidden h-px flex-1 border-t border-white/15 sm:block" />
          </div>
        </div>
        <div data-reveal>
          <Carousel items={testimonials} />
        </div>
      </div>
    </section>
  );
}

function BuildBoldly() {
  return (
    <section className="bg-white py-24 text-black lg:py-40">
      <div className={SHELL}>
        <h2
          className="text-center font-display text-[clamp(2.6rem,6.5vw,5.5rem)] leading-[1] font-bold tracking-[-0.02em]"
          data-reveal
        >
          Build Boldly
          <br />
          Start Here
        </h2>
        <div
          className="mx-auto mt-14 flex max-w-[1200px] flex-col items-start gap-8 rounded-2xl bg-dark px-8 py-10 text-white sm:flex-row sm:items-center sm:justify-between lg:px-14 lg:py-12"
          data-reveal
        >
          <p className="max-w-[240px] font-body text-lg font-medium">Built for better solutions.</p>
          <p className="max-w-[620px] font-body text-white/70">
            Partner with Oglas Global, a Dubai-based branding and creative agency, to build distinctive brand identities,
            meaningful digital experiences and marketing strategies that move your business forward.
          </p>
          <Link
            className="shrink-0 rounded-full bg-white px-8 py-3.5 font-body text-sm font-medium text-black transition-transform hover:scale-[1.03]"
            to="/contacts"
          >
            Contact us
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const pageRef = useReveal<HTMLDivElement>();

  return (
    <div ref={pageRef}>
      <Hero />
      <AboutOglas />
      <WhatWeDo />
      <ProcessTrack />
      <WhyOglas />
      <VisualsFelt />
      <WorkShowcase
        overline="strategic opportunity"
        lineOne="Creativity"
        lineTwo="Change"
        ghost="creates"
        works={brandWorks}
        band="Brand experience is more than a trend, It's an emotion."
        bandCta="branding approach"
        dark={false}
      />
      <WorkShowcase
        overline="userflow, responsive design"
        lineOne="Reframe"
        lineTwo="Interaction"
        ghost="the user"
        works={productWorks}
        band="Adapt with better tools, sharper thinking, and stronger intent"
        bandCta="user first approach"
      />
      <IndustriesWeServe />
      <Expertise />
      <SharedSuccess />
      <Testimonials />
      <LatestInsights />
      <HomeFaq />
      <BuildBoldly />
    </div>
  );
}
