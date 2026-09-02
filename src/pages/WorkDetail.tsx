import { Link, Navigate, useParams } from "react-router-dom";
import { BgImage } from "../components/ui/BgImage";
import { WorkCard } from "../components/ui/WorkCard";
import type { Work } from "../data/works";
import { useReveal } from "../lib/useReveal";

const SHELL = "mx-auto w-full max-w-[1760px] px-5 sm:px-8 lg:px-[4.15vw]";
const IMG = "/assets/workdetail";
const B = "/assets/fishwala-brand";
// The source boards are 2380 × 1512 and share an 84px proofing footer.
// Display only the finished artwork so the confidential release note and
// board labels never appear on the published case study.
const BRAND_ART_RATIO = "2380 / 1428";

const overview = [
  "Over the years, the way people buy fresh food has changed. Customers now expect not just quality, but trust, transparency, and a brand they can rely on. In a space often crowded with noise and inconsistency, many fresh seafood businesses struggle to stand out while maintaining credibility.",
  "Amid this shift, Fishwala set out to redefine how fresh seafood is experienced. With a vision to bring clarity, confidence, and consistency to the everyday buying journey, the brand approached us to shape a strong and recognizable identity for its next phase of growth.",
  "Our ambition was simple: to build a modern, trustworthy brand that reflects freshness, reliability, and calm confidence across every touchpoint",
];

const brandDesignOne =
  "From a modest local presence to a brand built for everyday recognition, Fishwala's identity evolved to meet the expectations of a new generation of customers. What began as a functional fresh-food business is now a confident, modern brand with a clear voice and strong visual character.";
const brandDesignTwo =
  "At the heart of this transformation is the brand's iconic character, redesigned to reflect trust, freshness, and approachability across all touchpoints. The new identity system is flexible, adaptive, and built to scale seamlessly across stores, packaging, and digital platforms, creating a consistent and inclusive brand experience for every customer.";

const credits: [string, string][] = [
  ["Creative Director", "Sharath Annan"],
  ["Art Director", "Sharath Annan"],
  ["Brand Designer", "Sharath Annan"],
  ["Web Designer", "Sharath Annan"],
];

const moreWork: Work[] = [
  {
    slug: "offbean",
    name: "Offbean",
    type: "Coffee Cafe",
    year: "2025",
    tagline: "A reminder of what honesty feels like,",
    tags: ["Branding", "Brand strategy", "Graphics", "Visual Identity"],
    image: `${IMG}/48f316807915.webp`,
  },
  {
    slug: "yellow-and",
    name: "Yellow And",
    type: "Stay Marketplace",
    year: "2025",
    tagline: "A reminder of what honesty feels like,",
    tags: ["Branding", "Brand strategy", "Graphics", "Visual Identity"],
    image: `${IMG}/90fe42c75249.webp`,
  },
];

/** A brand-book page with its proofing footer cropped non-destructively. */
function Page({ n, alt }: { n: string; alt: string }) {
  return (
    <div className="relative overflow-hidden" data-reveal style={{ aspectRatio: BRAND_ART_RATIO }}>
      <BgImage
        alt={alt}
        fill
        src={`${B}/${n}.webp`}
        style={{ backgroundPosition: "center top", backgroundSize: "100% auto" }}
      />
    </div>
  );
}

/** Label-left / content-right row used for Overview, Services, Brand Design, Credits. */
function Row({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="grid gap-6 lg:grid-cols-[0.28fr_1fr] lg:gap-16">
      <h2 className="font-body text-base font-bold tracking-[-0.01em] uppercase" data-reveal>
        {label}
      </h2>
      <div data-reveal>{children}</div>
    </div>
  );
}

export default function WorkDetail() {
  const { slug } = useParams();
  const pageRef = useReveal<HTMLDivElement>();

  if (slug !== "fishwala") return <Navigate replace to="/works" />;

  return (
    <div ref={pageRef} className="bg-white">
      {/* 1 — Navy intro */}
      <section className="grid bg-fishwala-navy px-5 pt-32 pb-16 text-white sm:px-8 md:min-h-[clamp(25.875rem,33vw,39rem)] md:place-items-center md:py-16 lg:px-[4.15vw]">
        <div className="mx-auto flex w-full flex-col items-center text-center">
          <h1
            className="font-display text-[clamp(2.25rem,5vw,4.25rem)] leading-[0.93] font-semibold tracking-[-0.025em] uppercase [text-wrap:balance]"
            data-reveal
          >
            <span className="md:block">Elevating the fresh food</span>{" "}
            <span className="md:block">experience through strategic</span>{" "}
            <span className="md:block">brand design</span>
          </h1>
          <div className="mt-12 flex flex-wrap justify-center gap-3" data-reveal>
            <span className="rounded-full border border-white/70 px-3 py-0.5 font-body text-[clamp(0.7rem,1vw,0.9rem)] leading-none tracking-[-0.02em] uppercase">
              Project: Fishwala
            </span>
            <span className="rounded-full border border-white/70 px-3 py-0.5 font-body text-[clamp(0.7rem,1vw,0.9rem)] leading-none tracking-[-0.02em] uppercase">
              Year: 2025
            </span>
          </div>
        </div>
      </section>

      {/* 2 — Water hero: Freshness, human again. */}
      <Page n="p03" alt="Fishwala — Freshness, human again." />

      {/* 3 — Overview */}
      <section className="py-20 text-black lg:py-28">
        <div className={SHELL}>
          <Row label="Overview">
            <div className="max-w-[1100px] space-y-7 font-body text-[clamp(1rem,1.35vw,1.375rem)] leading-[1.55] text-black">
              {overview.map((p) => (
                <p key={p.slice(0, 24)}>{p}</p>
              ))}
            </div>
          </Row>
        </div>
      </section>

      {/* 4 — Services */}
      <section className="pb-20 text-black lg:pb-28">
        <div className={SHELL}>
          <Row label="Services">
            <ul className="font-body text-[clamp(1.25rem,2vw,2rem)]">
              <li className="border-b border-black/15 py-5">Brand Design</li>
              <li className="border-b border-black/15 py-5">Social Media</li>
            </ul>
          </Row>
        </div>
      </section>

      {/* 5 — Mascot on navy + 6 — character detail crops + 7 — caption */}
      <section className="pb-10">
        <div className={SHELL}>
          <Page n="p02" alt="Fishwala mascot" />
          <div className="mt-6">
            <Page n="p26" alt="Fishwala character detail — eye, fin, tail" />
          </div>
        </div>
      </section>

      {/* 8 — Logo lockup */}
      <section className="pb-10">
        <div className={SHELL}>
          <Page n="p04" alt="Fishwala logo lockup" />
        </div>
      </section>

      {/* 9 — Apparel two-up */}
      <section className="pb-14">
        <div className={SHELL}>
          <div className="grid gap-6 md:grid-cols-2">
            <Page n="p42" alt="Fishwala apparel — Quiet is a flex" />
            <Page n="p35" alt="Fishwala apparel and poster — Clean looks better calm" />
          </div>
        </div>
      </section>

      {/* 10 — Brand design 1 */}
      <section className="pb-14 text-black lg:pb-20">
        <div className={SHELL}>
          <Row label="Brand Design">
            <p className="max-w-[1100px] font-body text-[clamp(1rem,1.35vw,1.375rem)] leading-[1.55]">
              {brandDesignOne}
            </p>
          </Row>
        </div>
      </section>

      {/* 11 — Storefront */}
      <section className="pb-6">
        <div className={SHELL}>
          <Page n="p41" alt="Fishwala storefront signage" />
        </div>
      </section>

      {/* 12 — Identity three-up */}
      <section className="pb-6">
        <div className={SHELL}>
          <div className="grid gap-6 md:grid-cols-3">
            <Page n="p15" alt="Fishwala logo variations" />
            <Page n="p23" alt="Fishwala typeface and fresh fishes menu" />
            <Page n="p31" alt="Fishwala sticker set" />
          </div>
        </div>
      </section>

      {/* 13 — A-frame sign */}
      <section className="pb-6">
        <div className={SHELL}>
          <Page n="p44" alt="Fishwala opening hours A-frame sign" />
        </div>
      </section>

      {/* 14 — Price card + carry bags */}
      <section className="pb-14">
        <div className={SHELL}>
          <div className="grid gap-6 md:grid-cols-2">
            <Page n="p51" alt="Fishwala price card" />
            <Page n="p28" alt="Fishwala carry bags" />
          </div>
        </div>
      </section>

      {/* 15 — Brand design 2 */}
      <section className="pb-14 text-black lg:pb-20">
        <div className={SHELL}>
          <Row label="Brand Design">
            <p className="max-w-[1100px] font-body text-[clamp(1rem,1.35vw,1.375rem)] leading-[1.55]">
              {brandDesignTwo}
            </p>
          </Row>
        </div>
      </section>

      {/* 16 — Stationery */}
      <section className="pb-6">
        <div className={SHELL}>
          <Page n="p46" alt="Fishwala stationery system" />
        </div>
      </section>

      {/* 17 — Packaging three-up */}
      <section className="pb-16 lg:pb-24">
        <div className={SHELL}>
          <div className="grid gap-6 md:grid-cols-3">
            <Page n="p38" alt="Fishwala fish tray packaging" />
            <Page n="p40" alt="Fishwala carry bag — You can't rush trust" />
            <Page n="p36" alt="Fishwala retail packs" />
          </div>
        </div>
      </section>

      {/* 18 — Testimonial */}
      <section className="pb-16 lg:pb-24">
        <div className={SHELL}>
          <div className="rounded-3xl bg-dark px-8 py-12 text-white sm:px-12 lg:px-16 lg:py-16" data-reveal>
            <blockquote className="max-w-[1300px] font-body text-[clamp(1.25rem,2.15vw,2rem)] leading-[1.4] font-semibold">
              Working with The Oglas has been an absolute pleasure. Beyond their creativity and professionalism,
              there&apos;s a real sense of kindness and care in everything they do. The team is always open, generous,
              and never gets stuck on small details, they never say no. I was truly impressed by their reliability,
              flexibility, and collaborative spirit. I couldn&apos;t recommend them more!
            </blockquote>
            <div className="mt-12 flex flex-wrap items-center justify-between gap-8">
              <div className="flex items-center gap-4">
                <span className="grid size-14 shrink-0 place-items-center rounded-full bg-white/15 font-body text-sm font-semibold">
                  BF
                </span>
                <div>
                  <span className="block font-body text-lg font-semibold">Benny ferard</span>
                  <span className="block font-body text-sm text-white/55">Co-founder &amp; COO @Fishwala</span>
                </div>
              </div>
              <Link
                className="group inline-flex items-center gap-4 font-body text-sm font-bold tracking-[0.08em] uppercase"
                to="/contacts"
              >
                Contact Sales
                <span
                  aria-hidden="true"
                  className="grid size-11 place-items-center rounded-full bg-white text-black transition-colors group-hover:bg-lime"
                >
                  ✆
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 19 — Credits */}
      <section className="pb-16 text-black lg:pb-20">
        <div className={SHELL}>
          <h2 className="font-body text-base font-bold uppercase" data-reveal>
            Credits
          </h2>
          <dl className="mt-8 grid gap-x-16 border-t border-black/12 sm:grid-cols-2" data-reveal>
            {credits.map(([role, name]) => (
              <div className="flex items-center justify-between gap-6 border-b border-black/12 py-6" key={role}>
                <dt className="font-body text-base text-black/55">{role}</dt>
                <dd className="flex items-center gap-4 font-body text-lg">
                  <span className="grid size-10 shrink-0 place-items-center rounded-full bg-black/10 text-xs font-semibold">
                    SA
                  </span>
                  {name}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* 20 — Billboard */}
      <section className="pb-16 lg:pb-24">
        <div className={SHELL}>
          <Page n="p52" alt="Fishwala billboard — Fresh doesn't shout." />
        </div>
      </section>

      {/* 21 — More work */}
      <section className="pb-20 text-black lg:pb-28">
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
