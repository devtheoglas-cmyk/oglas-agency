import { Link, Navigate, useParams } from "react-router-dom";
import { WorkCard } from "../components/ui/WorkCard";
import type { Work } from "../data/works";
import { useReveal } from "../lib/useReveal";

const SHELL = "mx-auto w-full max-w-[1760px] px-5 sm:px-8 lg:px-[4.15vw]";
const IMG = "/assets/workdetail";

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

function Full({ src, alt, ratio }: { src: string; alt: string; ratio: string }) {
  return (
    <div className="overflow-hidden bg-fishwala-navy" data-reveal style={{ aspectRatio: ratio }}>
      <img alt={alt} className="block h-full w-full object-cover" decoding="async" loading="lazy" src={src} />
    </div>
  );
}

export default function WorkDetail() {
  const { slug } = useParams();
  const pageRef = useReveal<HTMLDivElement>();

  if (slug !== "fishwala") return <Navigate replace to="/works" />;

  return (
    <div ref={pageRef}>
      {/* Navy intro */}
      <section className="bg-fishwala-navy px-5 pt-36 pb-16 text-white sm:px-8 lg:px-[4.15vw] lg:pt-48">
        <div className="mx-auto max-w-[1760px]">
          <h1
            className="max-w-[1400px] font-display text-[clamp(2rem,4vw,4.4rem)] leading-[1.05] font-extrabold tracking-[-0.03em] uppercase"
            data-reveal
          >
            Elevating the fresh food experience through strategic brand design
          </h1>
          <div className="mt-10 flex gap-12 font-body text-sm tracking-wide uppercase" data-reveal>
            <span>Project: fishwala</span>
            <span>Year: 2025</span>
          </div>
        </div>
      </section>

      {/* Water hero (text baked into asset) */}
      <img
        alt="Fishwala — Freshness. Human again."
        className="block w-full"
        data-reveal
        decoding="async"
        src={`${IMG}/f868de050fea.webp`}
      />

      {/* Overview */}
      <section className="bg-dark py-20 text-white lg:py-28">
        <div className={SHELL}>
          <div className="grid gap-10 border-t border-white/12 pt-12 lg:grid-cols-[0.4fr_1fr]">
            <h2 className="font-body text-sm tracking-[0.2em] lowercase" data-reveal>
              overview
            </h2>
            <div className="max-w-[1000px] space-y-6" data-reveal>
              {overview.map((para) => (
                <p className="font-body text-lg leading-relaxed text-white/80" key={para.slice(0, 24)}>
                  {para}
                </p>
              ))}
            </div>
          </div>
          <div className="mt-14 grid gap-10 border-t border-white/12 pt-12 lg:grid-cols-[0.4fr_1fr]">
            <h2 className="font-body text-sm tracking-[0.2em] lowercase" data-reveal>
              Services
            </h2>
            <div className="flex flex-col gap-2 font-display text-2xl font-medium" data-reveal>
              <span>Brand Design</span>
              <span>Social Media</span>
            </div>
          </div>
        </div>
      </section>

      {/* Brand marks */}
      <section className="bg-dark pb-10">
        <div className={`${SHELL} space-y-6`}>
          <Full src={`${IMG}/f007f85e0aba.webp`} alt="Fishwala brand character" ratio="1837 / 721" />
          <Full src={`${IMG}/2ff3f59366b8.webp`} alt="Fishwala visual identity system" ratio="1837 / 853" />
          <Full src={`${IMG}/efd6e549b63c.webp`} alt="Fishwala logotype" ratio="1838 / 572" />
        </div>
      </section>

      {/* Brand design 1 + apparel + storefront */}
      <section className="bg-dark py-16 lg:py-20">
        <div className={SHELL}>
          <div className="grid gap-10 border-t border-white/12 pt-12 text-white lg:grid-cols-[0.4fr_1fr]">
            <h2 className="font-body text-sm tracking-[0.2em] lowercase" data-reveal>
              Brand design
            </h2>
            <p className="max-w-[1000px] font-body text-lg leading-relaxed text-white/80" data-reveal>
              {brandDesignOne}
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <Full src={`${IMG}/9c75abeeadb9.webp`} alt="Fishwala apparel" ratio="896 / 568" />
            <Full src={`${IMG}/ffc9cc5026f4.webp`} alt="Fishwala apparel" ratio="894 / 564" />
          </div>
          <div className="mt-6">
            <Full src={`${IMG}/eeadbbf0c49a.webp`} alt="Fishwala storefront signage" ratio="1829 / 1144" />
          </div>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            <Full src={`${IMG}/e842e140ea95.webp`} alt="Fishwala brand detail" ratio="608 / 384" />
            <Full src={`${IMG}/c9ec08d7a67a.webp`} alt="Fishwala brand detail" ratio="607 / 384" />
            <Full src={`${IMG}/2a42eebb4724.webp`} alt="Fishwala brand detail" ratio="602 / 384" />
          </div>
          <div className="mt-6">
            <Full src={`${IMG}/5c63d0aea3a5.webp`} alt="Fishwala in context" ratio="1831 / 1157" />
          </div>
        </div>
      </section>

      {/* Brand design 2 + packaging */}
      <section className="bg-dark py-16 lg:py-20">
        <div className={SHELL}>
          <div className="grid gap-10 border-t border-white/12 pt-12 text-white lg:grid-cols-[0.4fr_1fr]">
            <h2 className="font-body text-sm tracking-[0.2em] lowercase" data-reveal>
              Brand design
            </h2>
            <p className="max-w-[1000px] font-body text-lg leading-relaxed text-white/80" data-reveal>
              {brandDesignTwo}
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <Full src={`${IMG}/625b353341da.webp`} alt="Fishwala signage" ratio="891 / 565" />
            <Full src={`${IMG}/4a6a79d70c92.webp`} alt="Fishwala packaging" ratio="913 / 567" />
          </div>
          <div className="mt-6">
            <Full src={`${IMG}/ed9719c4226d.webp`} alt="Fishwala stationery" ratio="1831 / 1151" />
          </div>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            <Full src={`${IMG}/ce54863d8e05.webp`} alt="Fishwala product" ratio="604 / 382" />
            <Full src={`${IMG}/f368efd813ec.webp`} alt="Fishwala product" ratio="600 / 382" />
            <Full src={`${IMG}/1b78f597ee25.webp`} alt="Fishwala product" ratio="602 / 382" />
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="bg-dark py-16 text-white lg:py-24">
        <div className={SHELL}>
          <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-10 lg:p-16" data-reveal>
            <blockquote className="max-w-[1100px] font-display text-[clamp(1.4rem,2.4vw,2.2rem)] leading-[1.35] font-medium">
              Working with Brand Appart has been an absolute pleasure. Beyond their creativity and professionalism,
              there's a real sense of kindness and care in everything they do. The team is always open, generous, and
              never gets stuck on small details, they never say no. I was truly impressed by their reliability,
              flexibility, and collaborative spirit. I couldn't recommend them more!
            </blockquote>
            <div className="mt-8 flex flex-wrap items-end justify-between gap-6">
              <div>
                <span className="block font-body text-lg font-semibold">Benny ferard</span>
                <span className="block font-body text-sm text-muted-light">Co-founder &amp; COO @Fishwala</span>
              </div>
              <Link
                className="rounded-full border border-white/30 px-7 py-3 font-body text-sm tracking-wide uppercase transition-colors hover:bg-lime hover:text-black"
                to="/contacts"
              >
                Contact sales
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Credits */}
      <section className="bg-dark py-12 text-white">
        <div className={SHELL}>
          <div className="border-t border-white/12 pt-10">
            <h2 className="mb-8 font-body text-sm tracking-[0.2em] lowercase" data-reveal>
              credits
            </h2>
            <dl className="grid gap-x-10 gap-y-6 sm:grid-cols-2 lg:grid-cols-4" data-reveal>
              {credits.map(([role, name]) => (
                <div key={role}>
                  <dt className="font-body text-sm text-muted-light">{role}</dt>
                  <dd className="font-body text-base">{name}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* Billboard */}
      <section className="bg-dark pb-4">
        <div className={SHELL}>
          <Full src={`${IMG}/226850b4b082.webp`} alt="Fishwala — Fresh doesn't shout." ratio="1826 / 1161" />
        </div>
      </section>

      {/* More work */}
      <section className="bg-dark py-20 text-white lg:py-28">
        <div className={SHELL}>
          <h2 className="mb-12 font-body text-sm tracking-[0.2em] lowercase" data-reveal>
            more work
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
