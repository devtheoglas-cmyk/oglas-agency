import { useId, useState } from "react";
import type { Faq } from "../../data/services";
import { cn } from "../../lib/cn";

export function ServicesFaq({ faqs }: { faqs: Faq[] }) {
  const [open, setOpen] = useState<number | null>(0);
  const baseId = useId();

  return (
    <ul className="border-t border-black/15">
      {faqs.map((faq, i) => {
        const isOpen = open === i;
        const panelId = `${baseId}-panel-${i}`;
        const buttonId = `${baseId}-button-${i}`;

        return (
          <li className="border-b border-black/15" key={faq.question}>
            <h3 className="m-0">
              <button
                aria-controls={panelId}
                aria-expanded={isOpen}
                className="group flex w-full cursor-pointer items-center justify-between gap-6 py-6 text-left lg:py-7"
                id={buttonId}
                onClick={() => setOpen(isOpen ? null : i)}
                type="button"
              >
                <span className="font-body text-[clamp(1.1rem,1.5vw,1.45rem)] leading-snug font-semibold tracking-[-0.015em] transition-transform duration-300 ease-out group-hover:translate-x-1">
                  {faq.question}
                </span>
                <span
                  aria-hidden="true"
                  className={cn(
                    "relative grid size-10 shrink-0 place-items-center rounded-full border transition-colors duration-300",
                    isOpen ? "border-black bg-black text-lime" : "border-black/25 group-hover:border-black",
                  )}
                >
                  <span className="absolute h-[1.5px] w-3.5 bg-current" />
                  <span
                    className={cn(
                      "absolute h-3.5 w-[1.5px] bg-current transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]",
                      isOpen ? "rotate-90 scale-y-0" : "rotate-0",
                    )}
                  />
                </span>
              </button>
            </h3>
            <div
              aria-labelledby={buttonId}
              className={cn(
                "grid transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
              )}
              id={panelId}
              inert={!isOpen}
              role="region"
            >
              <div className="overflow-hidden">
                <p className="max-w-[64ch] pb-8 font-body text-base leading-[1.65] text-black/70 lg:text-lg">{faq.answer}</p>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
