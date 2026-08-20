import { Link } from "react-router-dom";
import type { Work } from "../../data/works";
import { cn } from "../../lib/cn";

interface WorkCardProps {
  work: Work;
  className?: string;
  /** Text shown under the name. Defaults to the work's type. */
  subtitle?: string;
  /** Show the tag chip row below the subtitle. Defaults to true. */
  showTags?: boolean;
}

function CardInner({ work, subtitle, showTags = true }: WorkCardProps) {
  return (
    <>
      <div className="relative aspect-[920/582] overflow-hidden bg-dark">
        <img
          alt={`${work.name} — ${work.type}`}
          className="block h-full w-full object-cover"
          decoding="async"
          loading="lazy"
          src={work.image}
        />
      </div>
      {/* Colors inherit the section's currentColor so cards work on both dark
         and light sections (white text on dark, black text on light). */}
      <div className="mt-5 flex flex-col gap-3">
        <div className="flex items-baseline gap-3">
          <span className="font-body text-base font-semibold opacity-60">{work.year}</span>
          <span className="opacity-60">•</span>
          <h3 className="font-body text-base font-semibold tracking-[-0.005em] uppercase">
            {work.name}
          </h3>
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

export function WorkCard({ work, className, subtitle, showTags }: WorkCardProps) {
  if (work.hasCaseStudy) {
    return (
      <Link
        className="group block outline-offset-8"
        to="/works/fishwala"
        aria-label={`View the ${work.name} case study`}
      >
        <div className={cn("", className)}>
          <CardInner showTags={showTags} subtitle={subtitle} work={work} />
        </div>
      </Link>
    );
  }
  return (
    <article className={cn("group block", className)}>
      <CardInner showTags={showTags} subtitle={subtitle} work={work} />
    </article>
  );
}
