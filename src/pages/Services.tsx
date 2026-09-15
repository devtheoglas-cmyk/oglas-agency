import { useId, useState } from "react";
import { Link } from "react-router-dom";
import { services } from "../data/services";
import { cn } from "../lib/cn";
import { useReveal } from "../lib/useReveal";

const heroCopy =
  "We solve problems with creativity anywhere they exist, spanning advertising, brand strategy, experience, design, and much more.";

export default function Services() {
  const pageRef = useReveal<HTMLDivElement>();
  const [open, setOpen] = useState<string>(services[0]?.title ?? "");
  const baseId = useId();

  return (
    <div ref={pageRef}>
      <section className="flex min-h-[520px] items-center bg-dark px-5 pt-40 pb-24 text-center text-white sm:px-8 lg:min-h-[680px] lg:px-[4.15vw] lg:pt-52 lg:pb-28">
        <div className="mx-auto w-full max-w-[1500px]">
          <h1
            className="mx-auto font-display text-[clamp(2.4rem,5.5vw,6.5rem)] leading-[0.98] font-extrabold tracking-[-0.045em] uppercase [text-wrap:balance]"
            data-reveal
          >
            {heroCopy}
          </h1>
        </div>
      </section>

      <section className="bg-white px-5 py-20 text-black sm:px-8 sm:py-24 lg:px-[4.15vw] lg:py-32">
        <div className="mx-auto max-w-[1760px]">
          <h2 className="mb-16 font-body text-lg font-medium lowercase lg:mb-24" data-reveal>
            services
          </h2>

          <ul className="border-t border-hairline-dark" data-reveal>
            {services.map((service) => {
              const isOpen = open === service.title;
              const panelId = `${baseId}-${service.title.replace(/\s+/g, "-")}`;

              return (
                <li className="border-b border-hairline-dark" key={service.title}>
                  <button
                    aria-controls={panelId}
                    aria-expanded={isOpen}
                    className="group grid w-full grid-cols-[1fr_auto] items-center gap-6 py-7 text-left transition-colors hover:text-emerald sm:py-9 lg:py-11"
                    onClick={() => setOpen(isOpen ? "" : service.title)}
                    type="button"
                  >
                    <span className="font-display text-[clamp(2.2rem,4.15vw,5rem)] leading-none font-medium tracking-[-0.045em] transition-transform duration-500 ease-out group-hover:translate-x-2">
                      {service.title}
                    </span>
                    <span
                      aria-hidden="true"
                      className={cn(
                        "font-body text-[clamp(1.8rem,3vw,3.7rem)] font-light leading-none transition-transform duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]",
                        isOpen ? "rotate-180 text-emerald" : "rotate-0",
                      )}
                    >
                      ↓
                    </span>
                  </button>

                  <div
                    className={cn(
                      "grid transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.22,0.61,0.36,1)]",
                      isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
                    )}
                    id={panelId}
                  >
                    <div className="overflow-hidden">
                      <div className="grid gap-8 pb-10 lg:grid-cols-[1fr_auto] lg:gap-16 lg:pb-14">
                        <p className="max-w-[820px] font-body text-lg leading-relaxed text-black/75">
                          {service.description}
                        </p>
                        <ul className="flex flex-col gap-3 lg:min-w-[280px]">
                          {service.deliverables.map((item) => (
                            <li className="border-b border-hairline-dark pb-3" key={item.label}>
                              <span className="flex items-center gap-3 font-body text-base">
                                <span aria-hidden="true" className="text-emerald">
                                  ✦
                                </span>
                                {item.label}
                              </span>
                              {item.children && (
                                <ul className="mt-2 flex flex-col gap-2 pl-7">
                                  {item.children.map((child) => (
                                    <li className="flex items-center gap-2 font-body text-sm text-black/60" key={child}>
                                      <span aria-hidden="true" className="text-emerald/70">
                                        –
                                      </span>
                                      {child}
                                    </li>
                                  ))}
                                </ul>
                              )}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>

          <div className="mt-16 flex flex-col items-start gap-6 rounded-2xl bg-dark px-8 py-10 text-white sm:flex-row sm:items-center sm:justify-between lg:mt-24 lg:px-12 lg:py-12" data-reveal>
            <p className="max-w-[620px] font-display text-[clamp(1.4rem,2.2vw,2.2rem)] font-semibold leading-tight uppercase">
              Have a project in mind? Let&apos;s build it together.
            </p>
            <Link
              className="inline-flex shrink-0 items-center gap-3 rounded-full bg-white px-7 py-4 font-body text-sm font-semibold tracking-[0.08em] text-black uppercase transition-colors hover:bg-lime"
              to="/contacts"
            >
              Start a project
              <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
