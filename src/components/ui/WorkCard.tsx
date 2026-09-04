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
      <div className={cn("relative overflow-hidden", aspectClassName, frameClassName)}>
        <BgImage
          alt={`${work.name} — ${work.type}`}
          fill
          fit={imageFit}
          src={work.image}
        />
      </div>
      {/* Colors inherit the section's currentColor so cards work on both dark
         and light sections (white text on dark, black text on light). */}
      <div className="mt-5 flex flex-col gap-3">
        <div className="flex items-baseline gap-3 font-display text-[clamp(1.25rem,1.77vw,34px)] leading-[1.02] font-semibold tracking-[-0.02em] uppercase">
          <span className="opacity-60">{work.year}</span>
          <span className="opacity-60">•</span>
          <h3>{work.name}</h3>
        </div>
        <p className="font-body text-base opacity-60">{subtitle ?? work.type}</p>
        {showTags && (
          <ul className="flex flex-wrap gap-2 pt-1">
            {work.tags.map((tag) => (
              <li
                className="rounded-full border border-current/25 px-3 py-1 font-body text-xs opacity-70"
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
