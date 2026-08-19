import { cn } from "../../lib/cn";

interface MarqueeProps {
  items: string[];
  className?: string;
  /** seconds for one full loop */
  duration?: number;
}

/**
 * Accessible marquee: one real, readable list plus an aria-hidden duplicate for
 * a seamless loop. Pauses on hover/focus; fully static under reduced motion
 * (see the `.marquee` rules in index.css).
 */
export function Marquee({ items, className, duration = 28 }: MarqueeProps) {
  return (
    <div className={cn("marquee group relative overflow-hidden", className)}>
      <div
        className="marquee__track flex w-max items-center"
        style={{ animationDuration: `${duration}s` }}
      >
        <ul className="flex shrink-0 items-center">
          {items.map((item) => (
            <li
              className="px-8 font-wordmark text-[clamp(2.5rem,5vw,4.5rem)] leading-none tracking-wide text-white/85 lg:px-14"
              key={item}
            >
              {item}
            </li>
          ))}
        </ul>
        <ul aria-hidden="true" className="flex shrink-0 items-center">
          {items.map((item) => (
            <li
              className="px-8 font-wordmark text-[clamp(2.5rem,5vw,4.5rem)] leading-none tracking-wide text-white/85 lg:px-14"
              key={`${item}-dup`}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
