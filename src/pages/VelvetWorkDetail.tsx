import { WorkCard } from "../components/ui/WorkCard";
import { BgImage } from "../components/ui/BgImage";
import type { Work } from "../data/works";
import { useReveal } from "../lib/useReveal";

const SHELL = "mx-auto w-full max-w-[1760px] px-5 sm:px-8 lg:px-[4.15vw]";
const B = "/assets/velvet-brand";
const IMG = "/assets/workdetail";
const BOARD_RATIO = "1920 / 970";

const moreWork: Work[] = [
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
  {
    slug: "yellow-and",
    name: "Yellow And",
    type: "Stay Marketplace",
    year: "2025",
    tagline: "A reminder of what honesty feels like,",
    tags: ["Branding", "Web design", "Graphics", "Visual Identity"],
    image: `${IMG}/90fe42c75249.webp`,
  },
];

function Board({ page, alt }: { page: string; alt: string }) {
  return (
    <div className="relative overflow-hidden" data-reveal style={{ aspectRatio: BOARD_RATIO }}>
      <BgImage alt={alt} fill src={`${B}/${page}.webp`} />
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
      <section
        aria-labelledby="velvet-title"
        className="relative isolate grid min-h-[clamp(31rem,52vw,48rem)] overflow-hidden bg-[#052d30] px-5 pt-32 pb-16 text-[#ffeade] sm:px-8 md:place-items-center md:py-24 lg:px-[4.15vw]"
      >
        <div aria-hidden="true" className="absolute inset-0 overflow-hidden text-[#ffbf94]">
          <span
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[47%] font-display text-[clamp(27rem,68vw,72rem)] leading-none font-semibold text-transparent opacity-20"
            style={{ WebkitTextStroke: "1px rgb(255 191 148 / 0.5)" }}
          >
            V
          </span>
          <span
            className="absolute top-1/2 left-1/2 -translate-x-[56%] -translate-y-[47%] font-display text-[clamp(22rem,56vw,60rem)] leading-none font-semibold text-transparent opacity-15"
            style={{ WebkitTextStroke: "1px rgb(255 191 148 / 0.5)" }}
          >
            V
          </span>
          <span
            className="absolute top-1/2 left-1/2 -translate-x-[44%] -translate-y-[47%] font-display text-[clamp(17rem,44vw,48rem)] leading-none font-semibold text-transparent opacity-10"
            style={{ WebkitTextStroke: "1px rgb(255 191 148 / 0.5)" }}
          >
            V
          </span>
        </div>

        <div className="relative mx-auto flex w-full max-w-[1280px] flex-col items-center text-center">
          <h1
            className="font-display text-[clamp(2.75rem,6.2vw,6rem)] leading-[0.88] font-semibold tracking-[-0.025em] uppercase [text-wrap:balance]"
            data-reveal
            id="velvet-title"
          >
            <span className="block">Redefining luxury real estate</span>
            <span className="block text-[#ffbf94]">through the art of identity</span>
          </h1>
          <p className="mt-8 font-body text-[clamp(0.85rem,1.1vw,1.05rem)] tracking-[0.28em] text-[#ffeade]/80 uppercase" data-reveal>
            The art of realty
          </p>
          <div className="mt-12 flex flex-wrap justify-center gap-3" data-reveal>
            <span className="rounded-full border border-[#ffbf94]/75 px-4 py-1 font-body text-xs uppercase">
              Project: Velvet Properties
            </span>
            <span className="rounded-full border border-[#ffbf94]/75 px-4 py-1 font-body text-xs uppercase">
              Year: 2025
            </span>
          </div>
        </div>
      </section>

      <Board page="p02" alt="Velvet Properties interior and geometric V brand mark" />

      <section className="py-20 lg:py-28">
        <div className={SHELL}>
          <DetailRow label="Overview">
            <div className="max-w-[1100px] space-y-7 font-body text-[clamp(1rem,1.35vw,1.375rem)] leading-[1.55]">
              <p>
                Velvet Properties is a boutique real estate agency specializing in the curation and acquisition of
                luxury properties. Established with a vision to redefine the art of real estate, the brand elevates
                the living experience by transforming exceptional spaces into timeless masterpieces.
              </p>
              <p>
                Built around credibility, integrity, transparency, and honesty, the identity balances a polished
                real-estate presence with an expressive system rooted in art, architecture, and detail.
              </p>
            </div>
          </DetailRow>
        </div>
      </section>

      <section className="pb-20 lg:pb-28">
        <div className={SHELL}>
          <DetailRow label="Services">
            <ul className="font-body text-[clamp(1.25rem,2vw,2rem)]">
              <li className="border-b border-black/15 py-5">Brand Strategy</li>
              <li className="border-b border-black/15 py-5">Visual Identity</li>
              <li className="border-b border-black/15 py-5">Brand Collateral</li>
            </ul>
          </DetailRow>
        </div>
      </section>

      <section className="pb-8">
        <div className={SHELL}>
          <Board page="p16" alt="Velvet Properties — Crafting Stories, Legacies Begin Here" />
        </div>
      </section>

      <section className="pb-14">
        <div className={SHELL}>
          <div className="grid gap-6 md:grid-cols-2">
            <Board page="p17" alt="Velvet Properties art of realty campaign composition" />
            <Board page="p07" alt="Velvet Properties geometric V identity construction" />
          </div>
        </div>
      </section>

      <section className="pb-14 lg:pb-20">
        <div className={SHELL}>
          <DetailRow label="Brand Design">
            <p className="max-w-[1100px] font-body text-[clamp(1rem,1.35vw,1.375rem)] leading-[1.55]">
              The identity reframes property as something more considered than a transaction. A sculpted V, a quiet
              wordmark, and the line “The Art of Realty” create a flexible visual language that feels architectural,
              assured, and distinctly personal.
            </p>
          </DetailRow>
        </div>
      </section>

      <section className="pb-6">
        <div className={SHELL}>
          <Board page="p09" alt="Velvet Properties wordmark on deep green" />
        </div>
      </section>

      <section className="pb-14">
        <div className={SHELL}>
          <div className="grid gap-6 md:grid-cols-2">
            <Board page="p13" alt="Velvet Properties embossed brand book" />
            <Board page="p15" alt="Velvet Properties brand colour palette" />
          </div>
        </div>
      </section>

      <section className="pb-6">
        <div className={SHELL}>
          <Board page="p23" alt="Velvet Properties embossed V brand mark" />
        </div>
      </section>

      <section className="py-14 lg:py-20">
        <div className={SHELL}>
          <DetailRow label="Identity System">
            <p className="max-w-[1100px] font-body text-[clamp(1rem,1.35vw,1.375rem)] leading-[1.55]">
              Deep green provides stability and trust, while copper and peach bring warmth and cultivated character.
              The nested V pattern extends the mark into a recognizable frame for spaces, imagery, print, and
              large-format communications.
            </p>
          </DetailRow>
        </div>
      </section>

      <section className="pb-6">
        <div className={SHELL}>
          <Board page="p26" alt="Velvet Properties architectural window campaign" />
        </div>
      </section>

      <section className="pb-16 lg:pb-24">
        <div className={SHELL}>
          <div className="grid gap-6 md:grid-cols-2">
            <Board page="p28" alt="Velvet Properties embossed pattern detail" />
            <Board page="p33" alt="Velvet Properties outdoor realty campaign" />
          </div>
        </div>
      </section>

      <section className="bg-[#052d30] py-6 sm:py-8 lg:py-12">
        <div className={SHELL}>
          <div className="grid gap-6 md:grid-cols-2">
            <Board page="p37" alt="Velvet Properties business card mockup" />
            <Board page="p38" alt="Velvet Properties envelope mockup" />
          </div>
          <div className="mt-6">
            <Board page="p41" alt="Velvet Properties stationery suite" />
          </div>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            <Board page="p42" alt="Velvet Properties letterhead front and back" />
            <Board page="p43" alt="Velvet Properties visiting card system" />
            <Board page="p44" alt="Velvet Properties branded envelope system" />
          </div>
          <div className="mt-6">
            <Board page="p45" alt="Velvet Properties letter pad system" />
          </div>
        </div>
      </section>

      <section className="py-6 lg:py-10">
        <div className={SHELL}>
          <div className="grid gap-6 md:grid-cols-2">
            <Board page="p46" alt="Velvet Properties street-level campaign" />
            <Board page="p47" alt="Velvet Properties paired architectural advertisements" />
          </div>
          <div className="mt-6">
            <Board page="p48" alt="Velvet Properties large-format Realty campaign" />
          </div>
        </div>
      </section>

      <section className="pb-20 pt-14 lg:pb-28 lg:pt-20">
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
