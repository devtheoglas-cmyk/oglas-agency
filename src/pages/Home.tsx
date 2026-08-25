import { useId, useState } from "react";
import { Link } from "react-router-dom";
import { BgImage } from "../components/ui/BgImage";
import { Carousel } from "../components/ui/Carousel";
import { WorkCard } from "../components/ui/WorkCard";
import { clients, heroManifesto, testimonials, whatWeDoIntro, whatWeDoItems } from "../data/home";
import { brandWorks, featuredWorks, productWorks } from "../data/works";
import type { Work } from "../data/works";
import { cn } from "../lib/cn";
import { useReveal } from "../lib/useReveal";

const SHELL = "mx-auto w-full max-w-[1760px] px-5 sm:px-8 lg:px-[4.15vw]";

function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col overflow-hidden bg-dark text-white">
      <div className="flex flex-1 flex-col justify-center px-4 pt-24 pb-12 sm:px-8 lg:pt-32 lg:pb-16">
        <div className={`${SHELL} text-center`}>
          <h1
            className="mx-auto max-w-[1559px] break-words font-condensed text-[clamp(2.25rem,4.6vw,78px)] leading-[0.9] font-semibold tracking-[-0.03em] text-center text-white uppercase [text-wrap:balance] [leading-trim:none] lg:leading-[0.86]"
            data-reveal
          >
            {heroManifesto}
          </h1>
          <div className="mt-10 flex justify-center lg:mt-20" data-reveal>
            <span className="rounded-full border border-white/35 px-6 py-2.5 font-body text-sm tracking-[0.12em] text-white uppercase">
              Since 2019
            </span>
          </div>
        </div>
      </div>
      <div data-reveal>
        <BgImage
          alt="A collage of Oglas brand and packaging work"
          className="w-full"
          fit="contain"
          src="/assets/home/hero-collage.webp"
        />
      </div>
    </section>
  );
}

function SectionLabel({ children }: { children: string }) {
  return (
    <span className="flex items-center gap-2.5 font-body text-sm font-medium tracking-[0.08em] text-lime uppercase" data-reveal>
      <span aria-hidden="true" className="text-lg leading-none">
        •
      </span>
      {children}
    </span>
  );
}

function VisualsFelt() {
  return (
    <section className="bg-dark py-20 text-white lg:py-36">
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
    <div className="mt-16 lg:mt-72">
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
  return (
    <section className={cn("py-20 lg:py-72", dark ? "bg-dark text-white" : "bg-white text-black")}>
      <div className={SHELL}>
        <div className="mb-10 lg:mb-64">
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
        <div className="grid gap-x-8 gap-y-14 md:grid-cols-2 lg:gap-y-40" data-reveal>
          {works.map((work) => (
            <WorkCard key={work.slug} work={work} />
          ))}
        </div>
        <ShowcaseBand cta={bandCta} dark={dark} text={band} />
      </div>
    </section>
  );
}

function WhatWeDo() {
  const [open, setOpen] = useState("Brand Design");
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
          {whatWeDoItems.map((item) => {
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
            Wherever problems live, we meet them with creativity. From brand strategy to digital experiences, we design
            solutions that move brands forward.
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
      <WhatWeDo />
      <SharedSuccess />
      <Testimonials />
      <BuildBoldly />
    </div>
  );
}
