import { useId, useState } from "react";
import { cn } from "../../lib/cn";

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  avatar?: string;
}

interface CarouselProps {
  items: Testimonial[];
  className?: string;
}

/**
 * Manual testimonial carousel (no autoplay — per spec): a stacked card effect
 * with circular prev/next controls. Inactive slides are hidden from the
 * accessibility tree and tab order.
 */
export function Carousel({ items, className }: CarouselProps) {
  const [active, setActive] = useState(0);
  const baseId = useId();
  const count = items.length;

  const go = (delta: number) => setActive((prev) => (prev + delta + count) % count);
  const current = items[active];
  if (!current) return null;

  return (
    <div className={cn("mx-auto max-w-[900px]", className)}>
      <div className="relative">
        {/* Stacked card backdrops for depth */}
        <div aria-hidden="true" className="absolute inset-x-4 -top-3 h-full rounded-2xl bg-off-white/70" />
        <div aria-hidden="true" className="absolute inset-x-8 -top-6 h-full rounded-2xl bg-off-white/40" />

        {items.map((item, index) => (
          <div
            aria-hidden={index !== active}
            className={cn(
              "relative rounded-2xl bg-off-white px-8 py-10 text-black transition-opacity duration-500 sm:px-12 sm:py-14",
              index === active ? "opacity-100" : "pointer-events-none absolute inset-0 opacity-0",
            )}
            hidden={index !== active}
            id={`${baseId}-slide-${index}`}
            key={item.name}
          >
            <blockquote className="font-body text-base leading-relaxed sm:text-lg">{item.quote}</blockquote>
            <footer className="mt-8 flex items-center gap-4">
              {item.avatar && (
                <img alt="" className="size-11 rounded-full object-cover" loading="lazy" src={item.avatar} />
              )}
              <span>
                <span className="block font-semibold">{item.name}</span>
                <span className="block text-sm text-black/55">{item.role}</span>
              </span>
            </footer>
          </div>
        ))}
      </div>

      {count > 1 && (
        <div className="mt-10 flex justify-center gap-4">
          <button
            aria-controls={`${baseId}-slide-${active}`}
            aria-label="Previous testimonial"
            className="grid size-11 place-items-center rounded-full bg-white text-black transition-transform hover:scale-105"
            onClick={() => go(-1)}
            type="button"
          >
            <span aria-hidden="true">‹</span>
          </button>
          <button
            aria-controls={`${baseId}-slide-${active}`}
            aria-label="Next testimonial"
            className="grid size-11 place-items-center rounded-full bg-white text-black transition-transform hover:scale-105"
            onClick={() => go(1)}
            type="button"
          >
            <span aria-hidden="true">›</span>
          </button>
        </div>
      )}
    </div>
  );
}
