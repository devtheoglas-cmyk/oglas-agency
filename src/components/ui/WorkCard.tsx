import { Link } from "react-router-dom";
import type { Work } from "../../data/works";
import { cn } from "../../lib/cn";
import { BgImage } from "./BgImage";

interface WorkCardProps {
  work: Work;
  className?: string;
  /** Text shown under the name. Defaults to the work's type. */
  subtitle?: string;
  /** Show the tag chip row below the subtitle. Defaults to true. */
  showTags?: boolean;
  /** Tailwind classes for the image frame. Controls background and fit. */
  frameClassName?: string;
  /** object-fit strategy for the image. Defaults to "cover". */
  imageFit?: "cover" | "contain";
  /** Tailwind aspect utility for the image frame. Defaults to the shared 920/582. */
  aspectClassName?: string;
}

function CardInner({
  work,
  subtitle,
  showTags = true,
  frameClassName = "bg-dark",
  imageFit = "cover",
  aspectClassName = "aspect-[920/582]",
}: WorkCardProps) {
  return (
    <>
      <div className={cn("relative overflow-hidden border border-current/10", aspectClassName, frameClassName)}>
        <BgImage
          alt={`${work.name} — ${work.type}`}
          className="transition-transform duration-[900ms] ease-out will-change-transform group-hover:scale-[1.06]"
          fill
          fit={imageFit}
          src={work.image}
        />
        {/* Subtle darkening + reveal only on interactive (case-study) cards */}
        {work.hasCaseStudy && (
          <>
            <span
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
            />
            <span
              aria-hidden="true"
              className="absolute right-4 top-4 grid size-12 translate-y-2 place-items-center rounded-full bg-lime text-black opacity-0 transition-all duration-500 ease-out group-hover:translate-y-0 group-hover:opacity-100 lg:size-14"
            >
              <span className="text-lg leading-none">↗</span>
            </span>
            <span className="absolute bottom-4 left-4 translate-y-2 rounded-full bg-white/90 px-4 py-1.5 font-body text-xs font-semibold tracking-[0.12em] text-black uppercase opacity-0 transition-all duration-500 ease-out group-hover:translate-y-0 group-hover:opacity-100">
              View case study
            </span>
          </>
        )}
      </div>
      {/* Colors inherit the section's currentColor so cards work on both dark
         and light sections (white text on dark, black text on light). */}
      <div className="mt-5 flex flex-col gap-3">
        <div className="flex items-baseline gap-3 font-display text-[clamp(1.25rem,1.77vw,34px)] leading-[1.02] font-semibold tracking-[-0.02em] uppercase transition-colors duration-300 group-hover:text-lime">
          <span className="opacity-60">{work.year}</span>
          <span className="opacity-60">•</span>
          <h3 className="transition-transform duration-500 ease-out group-hover:translate-x-1">{work.name}</h3>
        </div>
        <p className="font-body text-base opacity-60">{subtitle ?? work.type}</p>
        {showTags && (
          <ul className="flex flex-wrap gap-2 pt-1">
            {work.tags.map((tag) => (
              <li
                className="rounded-full border border-current/25 px-3 py-1 font-body text-xs opacity-70 transition-colors duration-300 group-hover:border-current/40"
                key={tag}
              >
                {tag}
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}

export function WorkCard({
  work,
  className,
  subtitle,
  showTags,
  frameClassName,
  imageFit,
  aspectClassName,
}: WorkCardProps) {
  const inner = (
    <CardInner
      aspectClassName={aspectClassName}
      frameClassName={frameClassName}
      imageFit={imageFit}
      showTags={showTags}
      subtitle={subtitle}
      work={work}
    />
  );
  if (work.hasCaseStudy) {
    return (
      <Link
        className="group block outline-offset-8"
        to={`/works/${work.caseStudySlug ?? work.slug}`}
        aria-label={`View the ${work.name} case study`}
      >
        <div className={cn("card-flip", className)}>{inner}</div>
      </Link>
    );
  }
  return <article className={cn("card-flip group block", className)}>{inner}</article>;
}
