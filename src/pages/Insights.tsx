import { Link } from "react-router-dom";
import { BgImage } from "../components/ui/BgImage";
import { useReveal } from "../lib/useReveal";

const article = {
  category: "Brand Design",
  href: "/blog/brand-consistency-matters-for-growing-businesses-in-dubai",
  image: "/assets/blog/brand-consistency-drives-growth.jpeg",
  title: "Why Brand Consistency Matters for Growing Businesses in Dubai",
  excerpt:
    "Dubai customers may encounter a business through search, social media, a website, an advert, a proposal or a face-to-face conversation. Each interaction shapes their impression. Conflicting design, messages or tone can make the brand feel disconnected.",
};

export default function Insights() {
  const pageRef = useReveal<HTMLDivElement>();

  return (
    <div className="bg-off-white text-black" ref={pageRef}>
      <header className="bg-dark px-5 pt-40 pb-20 text-white sm:px-8 lg:px-[4.15vw] lg:pt-52 lg:pb-28">
        <div className="mx-auto max-w-[1760px]" data-reveal>
          <h1 className="font-display text-[clamp(4rem,11vw,12rem)] leading-[0.78] font-extrabold tracking-[-0.055em] uppercase">
            Insights
          </h1>
        </div>
      </header>

      <section className="px-5 py-16 sm:px-8 lg:px-[4.15vw] lg:py-28">
        <div className="mx-auto max-w-[1760px]">
          <Link
            className="group grid gap-8 border-t border-black/15 pt-6 focus-visible:outline-2 focus-visible:outline-offset-8 focus-visible:outline-black lg:grid-cols-[minmax(0,1.15fr)_minmax(20rem,0.85fr)] lg:gap-16 lg:pt-8"
            data-reveal
            to={article.href}
          >
            <BgImage
              alt="Brand Consistency Drives Growth campaign image featuring The Oglas branded materials, website screens and Dubai skyline"
              aspectRatio="16 / 9"
              className="w-full overflow-hidden transition-transform duration-500 ease-out group-hover:scale-[1.01]"
              src={article.image}
            />
            <div className="flex max-w-[38rem] flex-col items-start lg:py-3">
              <p className="font-body text-sm font-semibold tracking-[0.1em] text-black/60 uppercase">{article.category}</p>
              <h2 className="mt-6 font-display text-[clamp(2.5rem,4.7vw,5.5rem)] leading-[0.86] font-extrabold tracking-[-0.05em] uppercase">
                {article.title}
              </h2>
              <p className="mt-6 max-w-[63ch] font-body text-base leading-[1.7] text-black/70 lg:text-lg">{article.excerpt}</p>
              <span className="mt-8 font-body text-sm font-semibold tracking-[0.1em] uppercase underline decoration-1 underline-offset-4">
                Read article <span aria-hidden="true">→</span>
              </span>
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
}
