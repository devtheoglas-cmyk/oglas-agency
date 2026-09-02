import { Link, Navigate, useParams } from "react-router-dom";
import { BgImage } from "../components/ui/BgImage";
import { WorkCard } from "../components/ui/WorkCard";
import type { Work } from "../data/works";
import { useReveal } from "../lib/useReveal";

const SHELL = "mx-auto w-full max-w-[1760px] px-5 sm:px-8 lg:px-[4.15vw]";
const IMG = "/assets/workdetail";
const BRAND = "/assets/fishwala-brand";
const BRAND_RATIO = "1700 / 1080";

const overview = [
  "Over the years, the way people buy fresh food has changed. Customers now expect not just quality, but trust, transparency, and a brand they can rely on. In a space often crowded with noise and inconsistency, many fresh seafood businesses struggle to stand out while maintaining credibility.",
  "Amid this shift, Fishwala set out to redefine how fresh seafood is experienced. With a vision to bring clarity, confidence, and consistency to the everyday buying journey, the brand approached us to shape a strong and recognizable identity for its next phase of growth.",
  "Our ambition was simple: to build a modern, trustworthy brand that reflects freshness, reliability, and calm confidence across every touchpoint.",
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

function Full({ src, alt, ratio, bg = "bg-fishwala-navy" }: { src: string; alt: string; ratio: string; bg?: string }) {
  return (
    <div className={`relative overflow-hidden ${bg}`} data-reveal style={{ aspectRatio: ratio }}>
      <BgImage alt={alt} fill src={src} />
    </div>
  );
}

function LabeledRow({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="grid gap-8 border-t border-black/12 pt-10 lg:grid-cols-[0.35fr_1fr] lg:gap-16 lg:pt-14">
      <h2 className="font-body text-sm font-semibold tracking-[0.18em] uppercase" data-reveal>
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
    <div ref={pageRef}>
      {/* Navy intro — centered heading with meta pills */}
      <section className="bg-fishwala-navy px-5 pt-36 pb-16 text-white sm:px-8 lg:px-[4.15vw] lg:pt-48 lg:pb-24">
        <div className="mx-auto flex max-w-[1400px] flex-col items-center text-center">
          <h1
            className="font-display text-[clamp(2rem,4.4vw,4.8rem)] leading-[1.02] font-semibold tracking-[-0.02em] uppercase [text-wrap:balance]"
            data-reveal
          >
            Elevating the fresh food experience through strategic brand design
          </h1>
          <div className="mt-10 flex flex-wrap justify-center gap-4" data-reveal>
            <span className="rounded-full border border-white/40 px-5 py-2 font-body text-xs tracking-[0.18em] uppercase">
              Project: Fishwala
            </span>
            <span className="rounded-full border border-white/40 px-5 py-2 font-body text-xs tracking-[0.18em] uppercase">
              Year: 2025
            </span>
          </div>
        </div>
      </section>

      {/* Water hero — full-width brand claim image */}
      <div className="w-full bg-fishwala-navy" style={{ aspectRatio: BRAND_RATIO }}>
        <BgImage alt="Fishwala — a reminder of what honesty feels like" fill src={`${BRAND}/p09.webp`} />
      </div>

      {/* Overview + Services (white bg) */}
      <section className="bg-white py-20 text-black lg:py-28">
        <div className={SHELL}>
          <LabeledRow label="Overview">
            <div className="max-w-[1000px] space-y-6 font-body text-lg leading-relaxed text-black/80">
              {overview.map((para) => (
                <p key={para.slice(0, 24)}>{para}</p>
              ))}
            </div>
          </LabeledRow>
          <div className="mt-14 lg:mt-20">
            <LabeledRow label="Services">
              <ul className="divide-y divide-black/12 font-display text-xl font-medium">
                <li className="py-4">Brand Design</li>
                <li className="py-4">Social Media</li>
              </ul>
            </LabeledRow>
          </div>
        </div>
      </section>

      {/* Mascot showcase — navy panel + character detail grid + caption */}
      <section className="bg-white pb-10 lg:pb-16">
        <div className={SHELL}>
          <Full src={`${BRAND}/p24.webp`} alt="Fishwala mascot on a calm navy field" ratio={BRAND_RATIO} />
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            <Full src={`${BRAND}/p25.webp`} alt="Fishwala mascot detail" ratio="900 / 1188" bg="bg-fishwala-navy" />
            <Full src={`${BRAND}/p26.webp`} alt="Fishwala mascot detail" ratio="900 / 1188" bg="bg-fishwala-navy" />
            <Full src={`${BRAND}/p27.webp`} alt="Fishwala mascot detail" ratio="900 / 1188" bg="bg-fishwala-navy" />
          </div>
          <p
            className="mx-auto mt-10 max-w-[720px] text-center font-body text-sm leading-relaxed text-black/50"
            data-reveal
          >
            Fishwala&apos;s character is built around presence — not noise. He observes, understands, and represents
            clarity in a noisy market. Every curve in his form mirrors the flow of water: simple, adaptive, calm.
          </p>
        </div>
      </section>

      {/* FISHWALA wordmark */}
      <section className="bg-white pb-6">
        <div className={SHELL}>
          <p
            className="text-center font-display text-[clamp(4rem,15vw,16rem)] leading-[0.9] font-semibold tracking-[-0.03em] text-fishwala-navy uppercase"
            data-reveal
          >
            Fishwala
          </p>
        </div>
      </section>

      {/* Brand design 1: apparel + description + storefront */}
      <section className="bg-white py-12 lg:py-16">
        <div className={SHELL}>
          <div className="grid gap-6 md:grid-cols-2">
            <Full src={`${BRAND}/p35.webp`} alt="Fishwala apparel" ratio={BRAND_RATIO} />
            <Full src={`${BRAND}/p36.webp`} alt="Fishwala apparel" ratio={BRAND_RATIO} />
          </div>
          <div className="mt-14 lg:mt-20">
            <LabeledRow label="Brand Design">
              <p className="max-w-[1000px] font-body text-lg leading-relaxed text-black/80">
                {brandDesignOne}
              </p>
            </LabeledRow>
          </div>
          <div className="mt-14">
            <Full src={`${BRAND}/p44.webp`} alt="Fishwala storefront signage" ratio={BRAND_RATIO} />
          </div>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            <Full src={`${BRAND}/p11.webp`} alt="Fishwala logo variations" ratio={BRAND_RATIO} />
            <Full src={`${BRAND}/p23.webp`} alt="Fishwala fresh fishes" ratio={BRAND_RATIO} />
            <Full src={`${BRAND}/p31.webp`} alt="Fishwala stickers" ratio={BRAND_RATIO} />
          </div>
          <div className="mt-6">
            <Full src={`${BRAND}/p38.webp`} alt="Fishwala signage in context" ratio={BRAND_RATIO} />
          </div>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <Full src={`${BRAND}/p51.webp`} alt="Fishwala fish price display" ratio={BRAND_RATIO} />
            <Full src={`${BRAND}/p29.webp`} alt="Fishwala plastic bag" ratio={BRAND_RATIO} />
          </div>
        </div>
      </section>

      {/* Brand design 2: description + stationery */}
      <section className="bg-white py-12 lg:py-16">
        <div className={SHELL}>
          <LabeledRow label="Brand Design">
            <p className="max-w-[1000px] font-body text-lg leading-relaxed text-black/80">
              {brandDesignTwo}
            </p>
          </LabeledRow>
          <div className="mt-14">
            <Full src={`${BRAND}/p46.webp`} alt="Fishwala stationery" ratio={BRAND_RATIO} />
          </div>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            <Full src={`${BRAND}/p50.webp`} alt="Fishwala fish packaging" ratio={BRAND_RATIO} />
            <Full src={`${BRAND}/p45.webp`} alt="Fishwala carry bag" ratio={BRAND_RATIO} />
            <Full src={`${BRAND}/p52.webp`} alt="Fishwala product packs" ratio={BRAND_RATIO} />
          </div>
        </div>
      </section>

      {/* Testimonial (solid black rounded card) */}
      <section className="bg-white py-16 lg:py-24">
        <div className={SHELL}>
          <div className="rounded-3xl bg-dark p-8 text-white sm:p-12 lg:p-16" data-reveal>
            <blockquote className="max-w-[1200px] font-body text-[clamp(1.2rem,2vw,1.75rem)] leading-[1.5]">
              Working with The Oglas has been an absolute pleasure. Beyond their creativity and professionalism,
              there&apos;s a real sense of kindness and care in everything they do. The team is always open, generous,
              and never gets stuck on small details, they never say no. I was truly impressed by their reliability,
              flexibility, and collaborative spirit. I couldn&apos;t recommend them more!
            </blockquote>
            <div className="mt-10 flex flex-wrap items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <span className="grid size-10 place-items-center rounded-full bg-white/15 font-body text-sm font-semibold">
                  BF
                </span>
                <div>
                  <span className="block font-body text-base font-semibold">Benny Ferard</span>
                  <span className="block font-body text-sm text-white/60">Co-founder &amp; COO @Fishwala</span>
                </div>
              </div>
              <Link
                className="inline-flex items-center gap-3 rounded-full border border-white/30 px-6 py-3 font-body text-xs tracking-[0.18em] uppercase transition-colors hover:bg-lime hover:text-black"
                to="/contacts"
              >
                Contact Sales
                <span aria-hidden="true" className="grid size-7 place-items-center rounded-full bg-white/15">
                  ↗
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Credits */}
      <section className="bg-white py-12 text-black lg:py-16">
        <div className={SHELL}>
          <LabeledRow label="Credits">
            <dl className="grid gap-x-10 gap-y-6 sm:grid-cols-2 lg:grid-cols-2">
              {credits.map(([role, name]) => (
                <div className="flex items-center justify-between gap-6 border-b border-black/10 pb-4" key={role}>
                  <dt className="font-body text-sm text-black/60">{role}</dt>
                  <dd className="flex items-center gap-3 font-body text-base">
                    <span className="grid size-8 place-items-center rounded-full bg-black/10 text-xs font-semibold">
                      {name
                        .split(" ")
                        .map((part) => part[0])
                        .join("")
                        .slice(0, 2)}
                    </span>
                    {name}
                  </dd>
                </div>
              ))}
            </dl>
          </LabeledRow>
        </div>
      </section>

      {/* Billboard */}
      <section className="bg-white pb-12">
        <div className={SHELL}>
          <Full src={`${BRAND}/p31.webp`} alt="Fishwala — Fresh doesn't shout." ratio={BRAND_RATIO} bg="bg-white" />
        </div>
      </section>

      {/* More work */}
      <section className="bg-white py-16 text-black lg:py-24">
        <div className={SHELL}>
          <h2 className="mb-12 font-body text-sm font-semibold tracking-[0.18em] uppercase" data-reveal>
            More work
          </h2>
          <div className="grid gap-x-8 gap-y-14 md:grid-cols-2" data-reveal>
            {moreWork.map((work) => (
              <WorkCard key={work.slug} work={work} subtitle={work.tagline} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
