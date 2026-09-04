import { useMemo, useState } from "react";
import { WorkCard } from "../components/ui/WorkCard";
import type { Work } from "../data/works";
import { cn } from "../lib/cn";
import { useReveal } from "../lib/useReveal";

type Category = "All" | "Branding" | "Web" | "Apps" | "Social media";
const FILTERS: Category[] = ["All", "Branding", "Web", "Apps", "Social media"];

interface IndexWork extends Work {
  categories: Category[];
}

const TAGLINE = "A reminder of what honesty feels like,";
const DEFAULT_TAGS = ["Branding", "Brand strategy", "Graphics", "Visual Identity"];
const WEB_TAGS = ["Branding", "Web design", "Graphics", "Visual Identity"];

const worksIndex: IndexWork[] = [
  { slug: "fishwala", name: "Fishwala", type: "Premium Fresh Fish Store", year: "2025", tagline: TAGLINE, tags: DEFAULT_TAGS, image: "/assets/home/cards/fishwala-stickers.webp", hasCaseStudy: true, categories: ["Branding", "Social media"] },
  { slug: "velvet-properties", name: "Velvet Properties", type: "Real Estate Broker", year: "2025", tagline: TAGLINE, tags: WEB_TAGS, image: "/assets/home/cards/velvet-properties.webp", hasCaseStudy: true, categories: ["Web", "Branding"] },
  { slug: "hopinz", name: "Hopinz", type: "Supermarket", year: "2025", tagline: TAGLINE, tags: DEFAULT_TAGS, image: "/assets/home/cards/hopinz.webp", categories: ["Branding"] },
  { slug: "offbean", name: "Offbean", type: "Coffee Cafe", year: "2025", tagline: TAGLINE, tags: DEFAULT_TAGS, image: "/assets/home/cards/offbean-drippers.webp", categories: ["Branding", "Social media"] },
  { slug: "snaxx", name: "Snaxx", type: "Vending Machine", year: "2025", tagline: TAGLINE, tags: DEFAULT_TAGS, image: "/assets/home/cards/snaxx.webp", categories: ["Apps", "Branding"] },
  { slug: "fishwala-2", name: "Fishwala", type: "Premium Fresh Fish Store", year: "2025", tagline: TAGLINE, tags: DEFAULT_TAGS, image: "/assets/home/cards/fishwala-apparel.webp", hasCaseStudy: true, caseStudySlug: "fishwala", categories: ["Branding", "Social media"] },
  { slug: "velvet-leather", name: "Velvet Leather", type: "Leather Goods", year: "2025", tagline: TAGLINE, tags: DEFAULT_TAGS, image: "/assets/home/cards/velvet-leather.webp", categories: ["Branding"] },
  { slug: "yellow-and", name: "Yellow And", type: "Stay Marketplace", year: "2025", tagline: TAGLINE, tags: WEB_TAGS, image: "/assets/home/cards/yellowand-summer.webp", categories: ["Web", "Apps"] },
];

const INITIAL_COUNT = 8;

export default function Works() {
  const pageRef = useReveal<HTMLDivElement>();
  const [category, setCategory] = useState<Category>("All");
  const [showAll, setShowAll] = useState(false);

  const filtered = useMemo(
    () => (category === "All" ? worksIndex : worksIndex.filter((w) => w.categories.includes(category))),
    [category],
  );
  const visible = showAll ? filtered : filtered.slice(0, INITIAL_COUNT);

  return (
    <div ref={pageRef}>
      <section className="bg-dark px-5 pt-40 pb-24 text-center text-white sm:px-8 lg:pt-52 lg:pb-28">
        <div className="mx-auto max-w-[1100px]">
          <h1
            className="font-display text-[clamp(3rem,7vw,7rem)] leading-[0.95] font-extrabold tracking-[-0.04em] uppercase"
            data-reveal
          >
            Our Work
          </h1>
          <p className="mx-auto mt-8 max-w-[620px] font-body text-base text-white/70 lg:text-lg" data-reveal>
            Since our inception in 2019, we've partnered with inspiring brands and people to shape ideas and bring them
            to life. Here's a selection of our favorite work.
          </p>
          <div className="mt-12 flex flex-wrap justify-center gap-3" data-reveal>
            {FILTERS.map((filter) => (
              <button
                aria-pressed={category === filter}
                className={cn(
                  "rounded-full border px-6 py-2.5 font-body text-sm tracking-wide uppercase transition-colors",
                  category === filter
                    ? "border-lime bg-lime text-black"
                    : "border-white/25 text-white/80 hover:border-white/60",
                )}
                key={filter}
                onClick={() => {
                  setCategory(filter);
                  setShowAll(false);
                }}
                type="button"
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-dark px-5 py-20 text-white sm:px-8 lg:px-[4.15vw] lg:py-28">
        <div className="mx-auto max-w-[1760px]">
          <h2 className="mb-14 font-body text-sm font-medium tracking-[0.05em] uppercase" data-reveal>
            Featured Work
          </h2>

          <div className="grid gap-x-8 gap-y-16 md:grid-cols-2 lg:gap-x-12" aria-live="polite">
            {visible.map((work) => (
              <WorkCard
                key={work.slug}
                work={work}
                subtitle={work.tagline}
                className="works-card-light"
              />
            ))}
          </div>

          {filtered.length > INITIAL_COUNT && (
            <div className="mt-16 flex justify-center border-t border-hairline pt-10">
              <button
                className="flex items-center gap-3 font-body text-base text-white/70 transition-colors hover:text-white"
                onClick={() => setShowAll((prev) => !prev)}
                type="button"
              >
                {showAll ? "Show less" : "Show more"}
                <span aria-hidden="true">{showAll ? "↑" : "↓"}</span>
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
