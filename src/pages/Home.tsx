import { useId, useState } from "react";
import { Link } from "react-router-dom";
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
    <section className="relative overflow-hidden bg-dark pt-32 pb-14 text-white lg:pt-40">
      <div className={`${SHELL} text-center`}>
        <h1
          className="mx-auto max-w-[1500px] font-display text-[clamp(2rem,4.8vw,5.6rem)] leading-[0.98] font-bold tracking-[-0.02em] uppercase"
          data-reveal
        >
          {heroManifesto}
        </h1>
        <div className="mt-20 flex justify-center" data-reveal>
          <span className="rounded-full border border-white/35 px-6 py-2.5 font-body text-sm tracking-[0.12em] text-white uppercase">
            Since 2019
          </span>
        </div>
      </div>
      <div className="mt-16 flex flex-col gap-2 lg:mt-20 lg:gap-3" data-reveal>
        <HeroBandRow band={1} duration="40s" />
        <HeroBandRow band={2} duration="34s" reverse />
        <HeroBandRow band={3} duration="46s" />
      </div>
    </section>
  );
}

/**
 * One scrolling band of the hero collage. The band image is repeated across a
 * double-width track and translated -50%, so the loop reset is invisible.
 * `reverse` flips the scroll direction (right instead of left).
 */
function HeroBandRow({ band, duration, reverse }: { band: 1 | 2 | 3; duration: string; reverse?: boolean }) {
  return (
    <div className="marquee relative overflow-hidden">
      <div
        className="marquee__track flex w-max"
        style={{ animationDirection: reverse ? "reverse" : "normal", animationDuration: duration }}
      >
        {[0, 1, 2, 3].map((i) => (
          <img
            key={i}
            aria-hidden={i > 0 ? true : undefined}
            alt={i === 0 ? "A collage of Oglas brand and packaging work" : ""}
            className="block h-[clamp(88px,13vw,220px)] w-auto max-w-none shrink-0"
            decoding="async"
            src={`/assets/home/hero/band-${band}.webp`}
          />
        ))}
      </div>
    </div>
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
    <section className="bg-dark py-24 text-white lg:py-36">
      <div className={SHELL}>
        <div className="mb-14 flex flex-wrap items-end justify-between gap-6 lg:mb-20">
          <div className="flex flex-col gap-4">
            <SectionLabel>our works</SectionLabel>
            <h2
              className="font-display text-[clamp(2.2rem,4.4vw,4.1rem)] leading-[1] font-extrabold tracking-[-0.055em] uppercase"
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
        <div className="grid gap-x-8 gap-y-14 md:grid-cols-2" data-reveal>
          {featuredWorks.map((work) => (
            <WorkCard key={work.slug} showTags={false} work={work} />
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
    <div className="mt-24 lg:mt-72">
      <div className="flex items-center justify-center gap-6 lg:gap-10">
        <span aria-hidden="true" className={cn("hidden h-px flex-1 border-t sm:block", ruleClass)} />
        <span className="rounded-full border border-current/30 px-6 py-2.5 font-body text-[0.68rem] tracking-[0.2em] uppercase">
          {cta}
        </span>
        <span aria-hidden="true" className={cn("hidden h-px flex-1 border-t sm:block", ruleClass)} />
      </div>
      <p
        className="mx-auto mt-8 max-w-[880px] text-center font-display text-[clamp(1.4rem,2.8vw,2.4rem)] leading-[1.15] font-semibold tracking-[-0.02em] uppercase"
        data-reveal
      >
        {text}
      </p>
    </div>
  );
}

function WorkShowcase({ overline, lineOne, lineTwo, ghost, works, band, bandCta, dark = true }: ShowcaseProps) {
  return (
    <section className={cn("py-28 lg:py-72", dark ? "bg-dark text-white" : "bg-white text-black")}>
      <div className={SHELL}>
        <div className="mb-16 lg:mb-64">
          <h2
            className="text-center font-display text-[clamp(3rem,14.5vw,13.5rem)] leading-[0.9] font-extrabold tracking-[-0.045em] uppercase"
            data-reveal
          >
            {lineOne}
          </h2>
          <div className="relative flex items-center justify-center py-2 lg:py-14">
            {/* Ghost word layered between the two display lines */}
            <span
              aria-hidden="true"
              className={cn(
                "pointer-events-none select-none font-display text-[clamp(1.8rem,6vw,7rem)] leading-none font-semibold tracking-[-0.04em] uppercase",
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
            className="text-center font-display text-[clamp(3rem,14.5vw,13.5rem)] leading-[0.9] font-extrabold tracking-[-0.045em] uppercase"
            data-reveal
          >
            {lineTwo}
          </h2>
        </div>
        <div className="grid gap-x-8 gap-y-40 md:grid-cols-2" data-reveal>
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
    <section className="bg-white py-24 text-black lg:py-64">
      <div className={SHELL}>
        <div className="mb-16 max-w-[1100px] lg:mb-20">
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
                <div className="flex w-full items-center justify-between gap-6 border-b border-hairline-dark py-7 lg:py-9" key={item.title}>
                  <span className="font-body text-2xl font-medium tracking-[-0.02em]">{item.title}</span>
                  <span aria-hidden="true" className="font-body text-2xl leading-none text-black/60">
                    ↓
                  </span>
                </div>
              );
            }

            return (
              <div className="pb-10" key={item.title}>
                <div className="rounded-3xl bg-dark p-8 text-white lg:p-12">
                  <button
                    aria-controls={panelId}
                    aria-expanded={isOpen}
                    className="flex w-full items-start justify-between gap-6 text-left"
                    onClick={() => setOpen(isOpen ? "" : item.title)}
                    type="button"
                  >
                    <span className="font-body text-2xl font-semibold lg:text-3xl">{item.title}</span>
                    <span
                      aria-hidden="true"
                      className={cn(
                        "shrink-0 text-2xl leading-none transition-transform duration-300",
                        isOpen ? "rotate-180" : "rotate-90",
                      )}
                    >
                      ↑
                    </span>
                  </button>

                  <div
                    className={cn("grid transition-all duration-500", isOpen ? "mt-8 grid-rows-[1fr]" : "grid-rows-[0fr]")}
                    hidden={!isOpen}
                    id={panelId}
                  >
                    <div className="overflow-hidden">
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
                                <img
                                  alt={item.testimonial.name}
                                  className="size-10 rounded-full object-cover"
                                  loading="lazy"
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
                                  <img
                                    alt={client.name}
                                    className="h-full w-full object-cover"
                                    loading="lazy"
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
              <img
                alt=""
                className="h-12 w-auto object-contain opacity-90 lg:h-16"
                loading="lazy"
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
