import { useEffect, useState } from "react";
import type { Service } from "../../data/services";
import { cn } from "../../lib/cn";
import { scrollToSection } from "../../lib/scrollToSection";

/**
 * Floating chapter navigator. It appears while a service chapter crosses the
 * middle of the viewport, marks the chapter being read, and jumps between
 * chapters. Hidden (and inert) everywhere else on the page.
 */
export function ChapterDock({ services }: { services: Service[] }) {
  const [active, setActive] = useState<number | null>(null);

  useEffect(() => {
    const visible = new Set<number>();
    const sections = services
      .map((service) => document.getElementById(service.id))
      .filter((node): node is HTMLElement => node !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const index = sections.indexOf(entry.target as HTMLElement);
          if (entry.isIntersecting) visible.add(index);
          else visible.delete(index);
        }
        setActive(visible.size > 0 ? Math.max(...visible) : null);
      },
      { rootMargin: "-48% 0px -48% 0px" },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [services]);

  const isVisible = active !== null;

  return (
    <nav
      aria-label="Service chapters"
      className="svc-dock fixed bottom-4 left-1/2 z-40 max-w-[calc(100vw-2rem)] sm:bottom-6"
      data-visible={isVisible}
      inert={!isVisible}
    >
      <ol className="flex items-center gap-1 rounded-full border border-white/12 bg-black/85 p-1.5 text-white backdrop-blur-md">
        {services.map((service, i) => {
          const current = active === i;
          return (
            <li key={service.id}>
              <button
                aria-current={current ? "true" : undefined}
                aria-label={service.title}
                className={cn(
                  "flex h-9 cursor-pointer items-center gap-2 rounded-full px-3.5 font-body text-xs font-semibold tracking-[0.08em] uppercase transition-colors duration-300",
                  current ? "bg-lime text-black" : "text-white/60 hover:text-white",
                )}
                onClick={() => scrollToSection(service.id)}
                type="button"
              >
                <span className="tabular-nums">{i + 1}</span>
                <span className={cn(current ? "inline" : "hidden md:inline")}>{service.short}</span>
              </button>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
