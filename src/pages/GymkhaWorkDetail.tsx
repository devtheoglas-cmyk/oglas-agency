import type { ReactNode } from "react";
import { BgImage } from "../components/ui/BgImage";
import { WorkCard } from "../components/ui/WorkCard";
import type { Work } from "../data/works";
import { useReveal } from "../lib/useReveal";

const SHELL = "mx-auto w-full max-w-[1760px] px-5 sm:px-8 lg:px-[4.15vw]";
const B = "/assets/gymkha-brand";
const BOARD_RATIO = "1920 / 995";

const moreWork: Work[] = [
  {
    slug: "fishwala",
    name: "Fishwala",
    type: "Premium Fresh Fish Store",
    year: "2025",
    tagline: "Freshness, human again.",
    tags: ["Branding", "Brand strategy", "Graphics", "Visual Identity"],
    image: "/assets/home/cards/fishwala-stickers.webp",
    hasCaseStudy: true,
  },
  {
    slug: "velvet-properties",
    name: "Velvet Properties",
    type: "Real Estate Broker",
    year: "2025",
    tagline: "The art of realty.",
    tags: ["Branding", "Web design", "Graphics", "Visual Identity"],
    image: "/assets/home/cards/velvet-properties.webp",
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

function Board({ page, alt }: { page: string; alt: string }) {
  return (
    <div className="relative overflow-hidden bg-[#0a0a0a]" data-reveal style={{ aspectRatio: BOARD_RATIO }}>
      <BgImage alt={alt} fill src={`${B}/${page}.webp`} />
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
      <section
        aria-labelledby="gymkha-title"
        className="relative isolate min-h-[clamp(36rem,56vw,52rem)] overflow-hidden bg-black px-5 pt-32 pb-14 text-white sm:px-8 lg:px-[4.15vw]"
      >
        <GymkhaMark className="absolute top-1/2 left-1/2 w-[min(78vw,60rem)] -translate-x-1/2 -translate-y-1/2 text-white/[0.055]" />
        <div className="relative mx-auto flex min-h-[clamp(28rem,45vw,42rem)] w-full max-w-[1540px] flex-col justify-between">
          <div className="flex items-center justify-between font-body text-xs font-semibold tracking-[0.16em] uppercase" data-reveal>
            <span>Since 2025</span>
            <span>Gymkha</span>
          </div>

          <div className="grid items-end gap-8 lg:grid-cols-[1fr_auto]">
            <h1
              className="font-display text-[clamp(4rem,8vw,6rem)] leading-[0.76] font-semibold tracking-[-0.04em] uppercase"
              data-reveal
              id="gymkha-title"
            >
              <span className="block">Fear less.</span>
              <span className="block text-white/55">Move more.</span>
            </h1>
            <div className="pb-2 lg:pb-5" data-reveal>
              <p className="max-w-[15rem] -rotate-3 font-body text-[clamp(1.35rem,2vw,2rem)] leading-[0.95] font-semibold">
                Take the
                <br />
                first step.
              </p>
              <GymkhaMark className="mt-6 w-20 text-white" />
            </div>
          </div>

          <div className="flex flex-wrap gap-3" data-reveal>
            <span className="rounded-full border border-white/60 px-4 py-1 font-body text-xs uppercase">Project: Gymkha</span>
            <span className="rounded-full border border-white/60 px-4 py-1 font-body text-xs uppercase">Year: 2025</span>
          </div>
        </div>
      </section>

      <Board page="p11" alt="Gymkha campaign - Fear Less, Move More" />

      <section className="py-20 lg:py-28">
        <div className={SHELL}>
          <DetailRow label="Overview">
            <div className="max-w-[1100px] space-y-7 font-body text-[clamp(1rem,1.35vw,1.375rem)] leading-[1.55]">
              <p>
                Gymkha is an activewear identity built for people who dare to begin. Its defining thought, “Take the First
                Step,” turns the brand away from perfect outcomes and toward the courage it takes to start.
              </p>
              <p>
                The system makes movement feel immediate and human. Stark monochrome imagery, compressed typography,
                handwritten energy, and a sharp angular mark create a voice that is disciplined without becoming distant.
              </p>
            </div>
          </DetailRow>
        </div>
      </section>

      <section className="pb-20 lg:pb-28">
        <div className={SHELL}>
          <DetailRow label="Services">
            <ul className="font-body text-[clamp(1.25rem,2vw,2rem)]">
              <li className="border-b border-black/15 py-5">Brand Direction</li>
              <li className="border-b border-black/15 py-5">Visual Identity</li>
              <li className="border-b border-black/15 py-5">Campaign System</li>
              <li className="border-b border-black/15 py-5">Brand Collateral</li>
            </ul>
          </DetailRow>
        </div>
      </section>

      <section className="pb-8">
        <div className={SHELL}>
          <Board page="p06" alt="Gymkha manifesto - Take the First Step" />
        </div>
      </section>

      <section className="pb-14">
        <div className={SHELL}>
          <div className="grid gap-6 md:grid-cols-2">
            <Board page="p08" alt="Gymkha portrait campaign about starting small" />
            <Board page="p09" alt="Gymkha training campaign about first steps" />
          </div>
        </div>
      </section>

      <section className="pb-14 lg:pb-20">
        <div className={SHELL}>
          <DetailRow label="Brand Design">
            <p className="max-w-[1100px] font-body text-[clamp(1rem,1.35vw,1.375rem)] leading-[1.55]">
              The identity is built on productive tension: precision against imperfection, structure against motion,
              and performance against vulnerability. The angular G acts like a forward step, while the typography
              shifts between commanding statements and personal handwritten encouragement.
            </p>
          </DetailRow>
        </div>
      </section>

      <section className="pb-6">
        <div className={SHELL}>
          <Board page="p19" alt="Gymkha angular G symbol" />
        </div>
      </section>

      <section className="pb-14">
        <div className={SHELL}>
          <div className="grid gap-6 md:grid-cols-2">
            <Board page="p21" alt="Construction lines behind the Gymkha mark" />
            <Board page="p24" alt="Gymkha wordmark on black" />
          </div>
        </div>
      </section>

      <section className="pb-10">
        <div className={SHELL}>
          <Board page="p16" alt="Gymkha fabric texture with Take the First Step signature" />
        </div>
      </section>

      <section className="py-14 lg:py-20">
        <div className={SHELL}>
          <DetailRow label="Identity System">
            <p className="max-w-[1100px] font-body text-[clamp(1rem,1.35vw,1.375rem)] leading-[1.55]">
              Black and white keep every message direct. Cropped portraiture brings the audience close to the effort,
              while oversized language turns motivation into a physical part of the composition. Across garments and
              packaging, the mark can lead boldly or recede into texture.
            </p>
          </DetailRow>
        </div>
      </section>

      <section className="pb-6">
        <div className={SHELL}>
          <Board page="p27" alt="Gymkha monochrome activewear system" />
        </div>
      </section>

      <section className="pb-6">
        <div className={SHELL}>
          <div className="grid gap-6 md:grid-cols-2">
            <Board page="p29" alt="Gymkha embossed training towel" />
            <Board page="p30" alt="Gymkha oversized athletic jersey" />
          </div>
        </div>
      </section>

      <section className="pb-6">
        <div className={SHELL}>
          <Board page="p31" alt="Gymkha black performance jacket" />
        </div>
      </section>

      <section className="bg-black py-6 sm:py-8 lg:py-12">
        <div className={SHELL}>
          <div className="grid gap-6 md:grid-cols-2">
            <Board page="p32" alt="Gymkha Move More presentation box" />
            <Board page="p34" alt="Gymkha monochrome apparel packaging" />
          </div>
          <div className="mt-6">
            <Board page="p35" alt="Gymkha branded stationery box" />
          </div>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <Board page="p36" alt="Gymkha apparel hang tags" />
            <Board page="p37" alt="Gymkha Take Action thank-you cards" />
          </div>
        </div>
      </section>

      <section className="py-6 lg:py-10">
        <div className={SHELL}>
          <Board page="p38" alt="Gymkha manifesto campaign on monochrome athlete portrait" />
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <Board page="p39" alt="Gymkha Fear Less Move More typographic campaign" />
            <Board page="p40" alt="Gymkha Take the First Step campaign lockup" />
          </div>
        </div>
      </section>

      <section className="pb-20 pt-14 lg:pb-28 lg:pt-20">
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
