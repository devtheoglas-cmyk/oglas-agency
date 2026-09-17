import { WorkCard } from "../components/ui/WorkCard";
import { BgImage } from "../components/ui/BgImage";
import type { Work } from "../data/works";
import { useReveal } from "../lib/useReveal";

const SHELL = "mx-auto w-full max-w-[1760px] px-5 sm:px-8 lg:px-[4.15vw]";
const B = "/assets/velvet-web";

// Full-bleed design bands sliced from the Figma case study, in document order.
// width 1920 for every band; ratio = 1920 / band-height.
const BANDS: { n: string; h: number; alt: string }[] = [
  { n: "b01", h: 2820, alt: "Velvet Properties homepage — The Art of Curated Realty, desktop and mobile" },
  { n: "b02", h: 2710, alt: "Velvet Properties — Your Real Estate Solutions services layout" },
  { n: "b03", h: 1198, alt: "Velvet Properties — property management section" },
  { n: "b04", h: 2662, alt: "Velvet Properties — web design approach and brand colour palette" },
  { n: "b05", h: 1408, alt: "Velvet Properties — marketing insights section" },
  { n: "b06", h: 1822, alt: "Velvet Properties — marketing insights property mockups" },
  { n: "b07", h: 1800, alt: "Velvet Properties — brand positioning section" },
  { n: "b08", h: 1437, alt: "Velvet Properties — about the agency" },
  { n: "b09", h: 1583, alt: "Velvet Properties — sales appraisal section" },
  { n: "b10", h: 1524, alt: "Velvet Properties — curated listings section" },
  { n: "b11", h: 1606, alt: "Velvet Properties — property listing page mockups" },
  { n: "b12", h: 1459, alt: "Velvet Properties — listing detail page mockups" },
  { n: "b13", h: 1233, alt: "Velvet Properties — closing composition and footer" },
];

const moreWork: Work[] = [
  {
    slug: "gymkha",
    name: "Gymkha",
    type: "Gym wear",
    year: "2025",
    tagline: "Take the first step.",
    tags: ["Branding", "Web design", "Graphics", "Visual Identity"],
    image: "/assets/home/cards/gymkha.webp",
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

function Band({ n, h, alt }: { n: string; h: number; alt: string }) {
  return (
    <div
      className="relative w-full overflow-hidden bg-[#052c2f]"
      data-reveal
      style={{ aspectRatio: `1920 / ${h}` }}
    >
      <BgImage alt={alt} fill fit="cover" src={`${B}/${n}.webp`} />
    </div>
  );
}

function DetailRow({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="grid gap-6 lg:grid-cols-[0.28fr_1fr] lg:gap-16">
      <h2 className="font-body text-base font-bold tracking-[-0.01em] uppercase" data-reveal>
        {label}
      </h2>
      <div data-reveal>{children}</div>
    </div>
  );
}

export default function VelvetWorkDetail() {
  const pageRef = useReveal<HTMLDivElement>();

  return (
    <div ref={pageRef} className="bg-white text-black">
      {/* Hero */}
      <section
        aria-labelledby="velvet-title"
        className="relative isolate grid min-h-[clamp(28rem,46vw,42rem)] overflow-hidden bg-[#052c2f] px-5 pt-32 pb-16 text-[#ffeade] sm:px-8 md:place-items-center md:py-24 lg:px-[4.15vw]"
      >
        <div aria-hidden="true" className="absolute inset-0 overflow-hidden">
          <span
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[47%] font-display text-[clamp(24rem,60vw,64rem)] leading-none font-semibold text-transparent opacity-[0.18]"
            style={{ WebkitTextStroke: "1px rgb(255 215 185 / 0.55)" }}
          >
            V
          </span>
        </div>

        <div className="relative mx-auto flex w-full max-w-[1280px] flex-col items-center text-center">
          <p className="mb-6 font-body text-xs tracking-[0.32em] text-[#ffd7b9] uppercase" data-reveal>
            Website Design
          </p>
          <h1
            className="font-display text-[clamp(2.5rem,6vw,5.5rem)] leading-[0.9] font-semibold tracking-[-0.025em] uppercase [text-wrap:balance]"
            data-reveal
            id="velvet-title"
          >
            <span className="block">Redefining luxury real estate</span>
            <span className="block text-[#ffd7b9]">through a refined digital home</span>
          </h1>
          <p
            className="mt-8 font-body text-[clamp(0.85rem,1.1vw,1.05rem)] tracking-[0.28em] text-[#ffeade]/80 uppercase"
            data-reveal
          >
            The art of realty
          </p>
          <div className="mt-12 flex flex-wrap justify-center gap-3" data-reveal>
            <span className="rounded-full border border-[#ffd7b9]/70 px-4 py-1 font-body text-xs uppercase">
              Project: Velvet Properties
            </span>
            <span className="rounded-full border border-[#ffd7b9]/70 px-4 py-1 font-body text-xs uppercase">
              Year: 2025
            </span>
          </div>
        </div>
      </section>

      {/* Hero website mockup */}
      <div className="relative w-full overflow-hidden bg-white" data-reveal style={{ aspectRatio: "1920 / 966" }}>
        <BgImage alt="Velvet Properties website — The Art of Realty hero" fill src={`${B}/hero.webp`} />
      </div>

      {/* Overview */}
      <section className="py-20 lg:py-28">
        <div className={SHELL}>
          <DetailRow label="Overview">
            <div className="max-w-[1100px] space-y-7 font-body text-[clamp(1rem,1.35vw,1.375rem)] leading-[1.55]">
              <p>
                Velvet Properties is a Brisbane-based real estate agency specializing in luxury waterfront and canal
                homes. As the brand grew within a competitive high-end market, it required a digital presence that could
                clearly communicate its premium positioning while supporting lead generation and property sales.
              </p>
              <p>
                The primary objective was to create a website that not only showcases high-value listings but also
                strengthens the agency&rsquo;s credibility as a trusted selling partner. The platform needed to balance
                refined visual presentation with practical functionality, ensuring users could explore properties
                easily, access clear next steps, and engage with confidence.
              </p>
              <p>
                From the interactive hero slider to structured content hierarchy, every design decision was focused on
                clarity, usability, and strategic positioning. The result is a premium and modern real estate platform
                that combines visual elegance with a conversion-driven experience.
              </p>
            </div>
          </DetailRow>
        </div>
      </section>

      {/* Our role */}
      <section className="pb-20 lg:pb-28">
        <div className={SHELL}>
          <DetailRow label="Our role">
            <ul className="font-body text-[clamp(1.25rem,2vw,2rem)]">
              <li className="border-b border-black/15 py-5">Website Design</li>
              <li className="border-b border-black/15 py-5">Brand Design</li>
              <li className="border-b border-black/15 py-5">Design Strategy</li>
              <li className="border-b border-black/15 py-5">UX Research</li>
            </ul>
          </DetailRow>
        </div>
      </section>

      {/* Full-bleed design bands */}
      {BANDS.map((band) => (
        <Band key={band.n} alt={band.alt} h={band.h} n={band.n} />
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
