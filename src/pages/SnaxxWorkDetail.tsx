import type { ReactNode } from "react";
import { WorkCard } from "../components/ui/WorkCard";
import { BgImage } from "../components/ui/BgImage";
import type { Work } from "../data/works";
import { useReveal } from "../lib/useReveal";

const SHELL = "mx-auto w-full max-w-[1760px] px-5 sm:px-8 lg:px-[4.15vw]";
const B = "/assets/snaxx-web";
const ORANGE = "#ef571c";

const moreWork: Work[] = [
  {
    slug: "velvet-properties",
    name: "Velvet Properties",
    type: "Real Estate Broker",
    year: "2025",
    tagline: "The art of realty.",
    tags: ["Website design", "Brand design", "UX Research", "Visual Identity"],
    image: "/assets/home/cards/velvet-properties.webp",
    hasCaseStudy: true,
  },
  {
    slug: "gymkha",
    name: "Gymkha",
    type: "Gym wear",
    year: "2025",
    tagline: "Take the first step.",
    tags: ["Website design", "UX/UI design", "E-commerce", "Interactive"],
    image: "/assets/home/cards/gymkha.webp",
    hasCaseStudy: true,
  },
];

const features: { title: string; body: string }[] = [
  {
    title: "Effortless Touch Navigation",
    body: "Designed for speed and simplicity, the touchscreen interface provides a smooth flow from browsing product categories to completing the transaction. Clear visuals and minimal steps ensure you get your desired item with zero confusion.",
  },
  {
    title: "24/7 Peak Performance",
    body: "Built for nonstop service, the machine stays fully stocked, keeps products fresh, and supports cashless payments ready anytime.",
  },
  {
    title: "On-Machine Purchase Guide",
    body: "Our easy-to-follow, three-step guide — choose, pay, and catch up — is prominently displayed right on the machine. Get your snack fast and flawlessly, even if it's your very first time using a smart vending system.",
  },
];

const testimonials: { quote: string; name: string; place: string }[] = [
  {
    quote:
      "Snaxx is a real convenience for our campus. Students can grab snacks quickly, it's always stocked, and the process is smooth. Life on campus is easier for everyone now.",
    name: "Campus store lead",
    place: "Kozhikode, Kerala",
  },
  {
    quote:
      "We didn't think a vending machine could make such a difference! Snaxx is easy to use, always ready, and students love it. It's become part of daily campus life.",
    name: "Gems Arts & Science College",
    place: "Malappuram, Kerala",
  },
  {
    quote:
      "Snaxx has completely changed snacking on our campus. Students grab what they want in seconds, no waiting, and it's always stocked. Everyone loves how easy and fast it is!",
    name: "Majlis Arts & Science College",
    place: "Malappuram, Kerala",
  },
  {
    quote:
      "We grab snacks from Snaxx almost every day during breaks. It's quick, fresh, and so convenient — it really makes campus life easier!",
    name: "Sri Shanmugha Institution",
    place: "Salem, Tamil Nadu",
  },
];

function DetailRow({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="grid gap-6 lg:grid-cols-[0.28fr_1fr] lg:gap-16">
      <h2 className="font-body text-base font-bold tracking-[-0.01em] uppercase" data-reveal>
        {label}
      </h2>
      <div data-reveal>{children}</div>
    </div>
  );
}

export default function SnaxxWorkDetail() {
  const pageRef = useReveal<HTMLDivElement>();

  return (
    <div ref={pageRef} className="bg-white text-black">
      {/* Hero */}
      <section
        aria-labelledby="snaxx-title"
        className="relative isolate grid min-h-[clamp(28rem,46vw,42rem)] overflow-hidden bg-black px-5 pt-32 pb-16 text-white sm:px-8 md:place-items-center md:py-24 lg:px-[4.15vw]"
        style={{ backgroundColor: "#0d0d0d" }}
      >
        <div className="relative mx-auto flex w-full max-w-[1280px] flex-col items-center text-center">
          <p className="mb-6 font-body text-xs tracking-[0.32em] uppercase" style={{ color: ORANGE }} data-reveal>
            Website Design
          </p>
          <h1
            className="font-display text-[clamp(2.5rem,6vw,5.5rem)] leading-[0.9] font-semibold tracking-[-0.025em] uppercase [text-wrap:balance]"
            data-reveal
            id="snaxx-title"
          >
            <span className="block">Making everyday snacking</span>
            <span className="block" style={{ color: ORANGE }}>
              quick, simple, accessible
            </span>
          </h1>
          <p className="mt-8 font-body text-[clamp(0.85rem,1.1vw,1.05rem)] tracking-[0.28em] text-white/70 uppercase" data-reveal>
            Vending machine sales &amp; service
          </p>
          <div className="mt-12 flex flex-wrap justify-center gap-3" data-reveal>
            <span className="rounded-full border border-white/60 px-4 py-1 font-body text-xs uppercase">
              Project: Snaxx
            </span>
            <span className="rounded-full border border-white/60 px-4 py-1 font-body text-xs uppercase">Year: 2025</span>
          </div>
        </div>
      </section>

      {/* Hero cover mockup */}
      <div className="relative w-full overflow-hidden bg-white" data-reveal style={{ aspectRatio: "997 / 526" }}>
        <BgImage alt="Snaxx — vending machine sales & service cover" fill src={`${B}/hero.webp`} />
      </div>

      {/* Overview */}
      <section className="py-20 lg:py-28">
        <div className={SHELL}>
          <DetailRow label="Overview">
            <div className="max-w-[1100px] space-y-7 font-body text-[clamp(1rem,1.35vw,1.375rem)] leading-[1.55]">
              <p>
                Snaxx is a modern vending brand built around the idea of making everyday snacking quick, simple, and
                accessible in shared spaces.
              </p>
              <p>
                As the brand prepared to expand across colleges, offices, and public locations, it needed a focused
                digital presence that clearly communicated its value, explained how the machines work, and built trust
                with both users and potential partners.
              </p>
            </div>
          </DetailRow>
        </div>
      </section>

      {/* Task */}
      <section className="pb-16 lg:pb-20">
        <div className={SHELL}>
          <DetailRow label="The task">
            <p className="max-w-[1100px] font-body text-[clamp(1rem,1.35vw,1.375rem)] leading-[1.55]">
              Build a simple and effective website that reflects Snaxx&rsquo;s brand vision, showcases the vending
              machines clearly, highlights key features and benefits, and guides users smoothly from discovery to
              franchise enquiry.
            </p>
          </DetailRow>
        </div>
      </section>

      {/* Solution */}
      <section className="pb-16 lg:pb-20">
        <div className={SHELL}>
          <DetailRow label="The solution">
            <p className="max-w-[1100px] font-body text-[clamp(1rem,1.35vw,1.375rem)] leading-[1.55]">
              Created a user-focused digital experience that blends friendly brand storytelling with clear product
              communication, real client testimonials, and intuitive user flows — making it easy for visitors to
              understand Snaxx, trust the product, and take the next step to get started.
            </p>
          </DetailRow>
        </div>
      </section>

      {/* Our role */}
      <section className="pb-20 lg:pb-28">
        <div className={SHELL}>
          <DetailRow label="Our role">
            <ul className="font-body text-[clamp(1.25rem,2vw,2rem)]">
              <li className="border-b border-black/15 py-5">Website Design</li>
              <li className="border-b border-black/15 py-5">UX / UI Design</li>
              <li className="border-b border-black/15 py-5">Interactive Design</li>
            </ul>
          </DetailRow>
        </div>
      </section>

      {/* Product highlights */}
      <section className="py-20 text-white lg:py-28" style={{ backgroundColor: "#0d0d0d" }}>
        <div className={SHELL}>
          <h2
            className="mb-14 font-display text-[clamp(2rem,4vw,3.5rem)] font-semibold tracking-[-0.02em] uppercase"
            data-reveal
          >
            Product highlights
          </h2>
          <div className="grid gap-x-8 gap-y-12 md:grid-cols-3">
            {features.map((f) => (
              <div key={f.title} data-reveal>
                <h3 className="mb-4 font-body text-lg font-bold uppercase" style={{ color: ORANGE }}>
                  {f.title}
                </h3>
                <p className="font-body text-sm leading-[1.6] text-white/70">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 lg:py-28">
        <div className={SHELL}>
          <h2
            className="mb-14 font-display text-[clamp(2rem,4vw,3.5rem)] font-semibold tracking-[-0.02em] uppercase"
            data-reveal
          >
            What our clients say
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            {testimonials.map((t) => (
              <div
                key={t.place + t.name}
                className="rounded-3xl bg-[#f8f5f5] px-8 py-10 sm:px-10"
                data-reveal
              >
                <blockquote className="font-body text-[clamp(1rem,1.3vw,1.2rem)] leading-[1.5]">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <div className="mt-6">
                  <span className="block font-body text-sm font-semibold">{t.name}</span>
                  <span className="block font-body text-xs text-black/55">{t.place}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Franchise CTA */}
      <section className="pb-20 lg:pb-28">
        <div className={SHELL}>
          <div
            className="rounded-3xl px-8 py-14 text-center text-white sm:px-12 lg:py-20"
            data-reveal
            style={{ backgroundColor: ORANGE }}
          >
            <h2 className="font-display text-[clamp(2rem,4vw,3.5rem)] font-semibold tracking-[-0.02em] uppercase">
              Own your Snaxx franchise
            </h2>
            <p className="mx-auto mt-6 max-w-[560px] font-body text-base leading-[1.6]">
              Bring smart vending to your space while we handle setup, stocking, and support.
            </p>
          </div>
        </div>
      </section>

      {/* More work */}
      <section className="pb-20 pt-4 lg:pb-28">
        <div className={SHELL}>
          <div className="border-t border-black/12 pt-12">
            <h2
              className="mb-10 font-display text-[clamp(2rem,4vw,3.5rem)] font-semibold tracking-[-0.02em] uppercase"
              data-reveal
            >
              More work
            </h2>
            <div className="grid gap-x-8 gap-y-14 md:grid-cols-2" data-reveal>
              {moreWork.map((work) => (
                <WorkCard key={work.slug} work={work} subtitle={work.tagline} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
