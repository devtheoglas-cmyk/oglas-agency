import type { ReactNode } from "react";
import { WorkCard } from "../components/ui/WorkCard";
import { BgImage } from "../components/ui/BgImage";
import type { Work } from "../data/works";
import { useReveal } from "../lib/useReveal";

const SHELL = "mx-auto w-full max-w-[1760px] px-5 sm:px-8 lg:px-[4.15vw]";
const B = "/assets/aspirant-web";

// Full-bleed presentation slides sliced from the Figma case study, in order.
// w/h are each file's exact pixel dimensions (ratio = w / h); w defaults to 997.
const BANDS: { n: string; h: number; w?: number; bg: string; alt: string }[] = [
  { n: "b01-01", h: 3200, w: 2991, bg: "#ef4335", alt: "Aspirant Wave homepage — hero, A Wave of Possibilities" },
  { n: "b01-02", h: 3200, w: 2991, bg: "#ef4335", alt: "Aspirant Wave homepage — proven expertise and personalized assistance" },
  { n: "b01-03", h: 3200, w: 2991, bg: "#ef4335", alt: "Aspirant Wave homepage — tailored academic programs and scholarships" },
  { n: "b01-04", h: 3200, w: 2991, bg: "#ef4335", alt: "Aspirant Wave homepage — success stories and student testimonials" },
  { n: "b01-05", h: 1561, w: 2991, bg: "#ef4335", alt: "Aspirant Wave homepage — highlights and footer" },
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

function Band({ n, h, w = 997, bg, alt }: { n: string; h: number; w?: number; bg: string; alt: string }) {
  return (
    <div className="relative w-full overflow-hidden" data-reveal style={{ aspectRatio: `${w} / ${h}`, backgroundColor: bg }}>
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

export default function AspirantWaveWorkDetail() {
  const pageRef = useReveal<HTMLDivElement>();

  return (
    <div ref={pageRef} className="bg-white text-black">
      {/* Hero */}
      <section
        aria-labelledby="aspirant-title"
        className="relative isolate grid min-h-[clamp(28rem,46vw,42rem)] overflow-hidden bg-[#ef4335] px-5 pt-32 pb-16 text-white sm:px-8 md:place-items-center md:py-24 lg:px-[4.15vw]"
      >
        <div aria-hidden="true" className="absolute inset-0 overflow-hidden opacity-30">
          <svg className="absolute top-1/2 left-1/2 h-auto w-[min(70vw,52rem)] -translate-x-1/2 -translate-y-1/2" fill="none" viewBox="0 0 400 160">
            <ellipse cx="140" cy="80" rx="130" ry="70" stroke="white" strokeWidth="3" />
            <ellipse cx="260" cy="80" rx="130" ry="70" stroke="white" strokeWidth="3" />
          </svg>
        </div>

        <div className="relative mx-auto flex w-full max-w-[1280px] flex-col items-center text-center">
          <p className="mb-6 font-body text-xs tracking-[0.32em] text-white/80 uppercase" data-reveal>
            Website Design
          </p>
          <h1
            className="font-display text-[clamp(2.5rem,6vw,5.5rem)] leading-[0.9] font-semibold tracking-[-0.025em] uppercase [text-wrap:balance]"
            data-reveal
            id="aspirant-title"
          >
            <span className="block">A wave of possibilities</span>
            <span className="block text-white/70">for every education aspirant</span>
          </h1>
          <p className="mt-8 font-body text-[clamp(0.85rem,1.1vw,1.05rem)] tracking-[0.28em] text-white/80 uppercase" data-reveal>
            Study abroad consultancy
          </p>
          <div className="mt-12 flex flex-wrap justify-center gap-3" data-reveal>
            <span className="rounded-full border border-white/70 px-4 py-1 font-body text-xs uppercase">
              Project: Aspirant Wave
            </span>
            <span className="rounded-full border border-white/70 px-4 py-1 font-body text-xs uppercase">Year: 2025</span>
          </div>
        </div>
      </section>

      {/* Hero cover mockup */}
      <div className="relative w-full overflow-hidden bg-white" data-reveal style={{ aspectRatio: "997 / 527" }}>
        <BgImage alt="Aspirant Wave — study abroad consultancy cover" fill src={`${B}/hero.webp`} />
      </div>

      {/* Overview */}
      <section className="py-20 lg:py-28">
        <div className={SHELL}>
          <DetailRow label="Overview">
            <div className="max-w-[1100px] space-y-7 font-body text-[clamp(1rem,1.35vw,1.375rem)] leading-[1.55]">
              <p>
                Aspirant Wave, a global education platform redefining student aspirations, recognized the need for a
                stronger digital presence.
              </p>
              <p>
                Their existing design was outdated, failing to capture attention or reflect the brand&rsquo;s vision of
                guiding students toward global opportunities. Seeking a modern, emotionally engaging experience, they
                partnered with The Oglas to craft a platform that seamlessly connects ambition, clarity, and confidence
                for every aspirant.
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
              Develop a modern, user-focused platform that simplifies global education, builds trust, and guides
              aspirants toward Aspirant Wave&rsquo;s vision of purposeful learning.
            </p>
          </DetailRow>
        </div>
      </section>

      {/* Solution */}
      <section className="pb-16 lg:pb-20">
        <div className={SHELL}>
          <DetailRow label="The solution">
            <p className="max-w-[1100px] font-body text-[clamp(1rem,1.35vw,1.375rem)] leading-[1.55]">
              Crafted an intuitive, visually engaging experience that blends storytelling with clarity, connecting
              aspirants to the right opportunities and turning a complex process into an inspiring journey.
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

      {/* Full-bleed design bands */}
      {BANDS.map((band) => (
        <Band key={band.n} alt={band.alt} bg={band.bg} h={band.h} n={band.n} w={band.w} />
      ))}

      {/* More work */}
      <section className="pb-20 pt-16 lg:pb-28 lg:pt-24">
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
