import type { ReactNode } from "react";
import { WorkCard } from "../components/ui/WorkCard";
import { BgImage } from "../components/ui/BgImage";
import type { Work } from "../data/works";
import { useReveal } from "../lib/useReveal";

const SHELL = "mx-auto w-full max-w-[1760px] px-5 sm:px-8 lg:px-[4.15vw]";
const B = "/assets/gymkha-web";

// Full-bleed presentation slides sliced from the Figma case study, in order.
// Native frame width 997; ratio = 997 / band-height.
const BANDS: { n: string; h: number; bg: string; alt: string }[] = [
  { n: "b01-main", h: 5286, bg: "#0d0d0d", alt: "Gymkha e-commerce homepage — Big Season Sale, product and lifestyle mockups" },
  { n: "b02-explore", h: 1684, bg: "#a41f31", alt: "Gymkha Explore Fits page — categories, seasonal collections and mobile views" },
  { n: "b03-about", h: 1066, bg: "#0d0d0d", alt: "Gymkha About page — Built for Those Who Take the First Step" },
  { n: "b04-bag", h: 1532, bg: "#a41f31", alt: "Gymkha shopping bag and checkout flow across devices" },
];

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
    slug: "fishwala",
    name: "Fishwala",
    type: "Premium Fresh Fish Store",
    year: "2025",
    tagline: "A reminder of what honesty feels like,",
    tags: ["Branding", "Brand strategy", "Graphics", "Visual Identity"],
    image: "/assets/home/cards/fishwala-stickers.webp",
    hasCaseStudy: true,
  },
];

function GymkhaMark({ className = "" }: { className?: string }) {
  return (
    <svg aria-hidden="true" className={className} fill="none" viewBox="0 0 120 92">
      <path d="M56 4 9 45l47 43 53-47-54-1 44 9-43 31-37-35L59 12l48 1L56 4Z" fill="currentColor" />
    </svg>
  );
}

function Band({ n, h, bg, alt }: { n: string; h: number; bg: string; alt: string }) {
  return (
    <div className="relative w-full overflow-hidden" data-reveal style={{ aspectRatio: `997 / ${h}`, backgroundColor: bg }}>
      <BgImage alt={alt} fill fit="cover" src={`${B}/${n}.webp`} />
    </div>
  );
}

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

export default function GymkhaWorkDetail() {
  const pageRef = useReveal<HTMLDivElement>();

  return (
    <div ref={pageRef} className="bg-white text-black selection:bg-[#bdbdbd] selection:text-black">
      {/* Hero */}
      <section
        aria-labelledby="gymkha-title"
        className="relative isolate min-h-[clamp(34rem,52vw,48rem)] overflow-hidden bg-black px-5 pt-32 pb-14 text-white sm:px-8 lg:px-[4.15vw]"
      >
        <GymkhaMark className="absolute top-1/2 left-1/2 w-[min(78vw,60rem)] -translate-x-1/2 -translate-y-1/2 text-white/[0.055]" />
        <div className="relative mx-auto flex min-h-[clamp(26rem,42vw,40rem)] w-full max-w-[1540px] flex-col justify-between">
          <div className="flex items-center justify-between font-body text-xs font-semibold tracking-[0.16em] uppercase" data-reveal>
            <span>E-Commerce Website</span>
            <span>Gymkha — Sportswear</span>
          </div>

          <div className="grid items-end gap-8 lg:grid-cols-[1fr_auto]">
            <h1
              className="font-display text-[clamp(3rem,7vw,5.75rem)] leading-[0.82] font-semibold tracking-[-0.035em] uppercase"
              data-reveal
              id="gymkha-title"
            >
              <span className="block">Built for those who</span>
              <span className="block text-white/55">take the first step</span>
            </h1>
            <div className="pb-2 lg:pb-5" data-reveal>
              <p className="max-w-[16rem] font-body text-[clamp(1.1rem,1.5vw,1.5rem)] leading-[1.1] font-semibold">
                Move in Comfort — Summer 2025
              </p>
              <GymkhaMark className="mt-6 w-16 text-white" />
            </div>
          </div>

          <div className="flex flex-wrap gap-3" data-reveal>
            <span className="rounded-full border border-white/60 px-4 py-1 font-body text-xs uppercase">Project: Gymkha</span>
            <span className="rounded-full border border-white/60 px-4 py-1 font-body text-xs uppercase">Year: 2025</span>
          </div>
        </div>
      </section>

      {/* Hero e-commerce mockup */}
      <div className="relative w-full overflow-hidden bg-black" data-reveal style={{ aspectRatio: "997 / 526" }}>
        <BgImage alt="Gymkha homepage hero — Move in Comfort campaign" fill src={`${B}/hero.webp`} />
      </div>

      {/* Overview */}
      <section className="py-20 lg:py-28">
        <div className={SHELL}>
          <DetailRow label="Overview">
            <div className="max-w-[1100px] space-y-7 font-body text-[clamp(1rem,1.35vw,1.375rem)] leading-[1.55]">
              <p>
                Gymkha is a modern sportswear brand built around the idea of taking the first step toward movement,
                comfort, and becoming better every day.
              </p>
              <p>
                As the brand prepared to grow online, it needed a focused e-commerce experience that clearly communicated
                its identity, highlighted seasonal collections, and made shopping effortless for everyday movers.
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
              Build a simple and effective online store that reflects Gymkha&rsquo;s brand philosophy, showcases products
              clearly, supports seasonal collections, and guides users smoothly from discovery to checkout.
            </p>
          </DetailRow>
        </div>
      </section>

      {/* Solution */}
      <section className="pb-16 lg:pb-20">
        <div className={SHELL}>
          <DetailRow label="The solution">
            <p className="max-w-[1100px] font-body text-[clamp(1rem,1.35vw,1.375rem)] leading-[1.55]">
              Created a movement-focused digital experience that blends strong brand storytelling with clear navigation,
              seasonal highlights, and intuitive shopping flows, making it easy for users to explore, connect, and take
              their first step with Gymkha.
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
              <li className="border-b border-black/15 py-5">E-Commerce Design</li>
              <li className="border-b border-black/15 py-5">Interactive Design</li>
            </ul>
          </DetailRow>
        </div>
      </section>

      {/* Full-bleed design bands */}
      {BANDS.map((band) => (
        <Band key={band.n} alt={band.alt} bg={band.bg} h={band.h} n={band.n} />
      ))}

      {/* More work */}
      <section className="pb-20 pt-16 lg:pb-28 lg:pt-24">
        <div className={SHELL}>
          <div className="border-t border-black/12 pt-12">
            <h2 className="mb-10 font-display text-[clamp(2rem,4vw,3.5rem)] font-semibold tracking-[-0.02em] uppercase" data-reveal>
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
