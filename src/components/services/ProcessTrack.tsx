import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import { processIntro, processStages } from "../../data/services";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const SHELL = "mx-auto w-full max-w-[1760px] px-5 sm:px-8 lg:px-[4.15vw]";

/**
 * "How a project moves": on large screens the section pins and the six
 * stages travel sideways as you scroll, with a lime rule tracking progress.
 * Below lg, or with reduced motion, the same list reads as a vertical
 * timeline, so no content depends on the pinned version.
 */
export function ProcessTrack() {
  const section = useRef<HTMLElement>(null);
  const viewport = useRef<HTMLDivElement>(null);
  const track = useRef<HTMLOListElement>(null);
  const progress = useRef<HTMLSpanElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(min-width: 1024px) and (prefers-reduced-motion: no-preference)", () => {
        const trackEl = track.current;
        const viewportEl = viewport.current;
        const progressEl = progress.current;
        if (!trackEl || !viewportEl || !progressEl) return;

        const distance = (): number => Math.max(0, trackEl.scrollWidth - viewportEl.clientWidth);

        const travel = gsap.to(trackEl, {
          x: () => -distance(),
          ease: "none",
          scrollTrigger: {
            trigger: section.current,
            start: "top top",
            end: () => `+=${distance()}`,
            pin: true,
            scrub: 0.6,
            invalidateOnRefresh: true,
            onUpdate: (self) => {
              progressEl.style.transform = `scaleX(${self.progress})`;
            },
          },
        });

        gsap.utils.toArray<HTMLElement>(".svc-stage", trackEl).forEach((stage) => {
          gsap.fromTo(
            stage.querySelectorAll(".svc-stage-body"),
            { opacity: 0.25, y: 28 },
            {
              opacity: 1,
              y: 0,
              ease: "power3.out",
              scrollTrigger: {
                trigger: stage,
                containerAnimation: travel,
                start: "left 92%",
                end: "left 55%",
                scrub: true,
              },
            },
          );
        });

        return () => {
          progressEl.style.transform = "";
        };
      });
    },
    { scope: section },
  );

  return (
    <section
      aria-labelledby="process-title"
      className="relative overflow-hidden bg-off-white text-black lg:motion-safe:flex lg:motion-safe:h-svh lg:motion-safe:flex-col"
      id="process"
      ref={section}
    >
      <div className={`${SHELL} pt-24 pb-14 lg:pt-32 lg:pb-12 lg:motion-reduce:pb-4`}>
        <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.8fr)] lg:items-end lg:gap-16">
          <h2
            className="font-display text-[clamp(2.4rem,5vw,5.5rem)] leading-[0.9] font-extrabold tracking-[-0.04em] uppercase outline-none"
            data-section-heading
            id="process-title"
            tabIndex={-1}
          >
            How a project moves
          </h2>
          <p className="max-w-[560px] font-body text-[clamp(1.05rem,1.2vw,1.25rem)] leading-[1.6] text-black/70">
            {processIntro}
          </p>
        </div>
      </div>

      <div className="lg:motion-safe:flex-1 lg:motion-safe:overflow-hidden" ref={viewport}>
        <ol
          className={`${SHELL} flex flex-col pb-20 lg:motion-safe:pb-0 lg:motion-reduce:grid lg:motion-reduce:grid-cols-3 lg:motion-reduce:gap-x-12 lg:motion-safe:mx-0 lg:motion-safe:h-full lg:motion-safe:w-max lg:motion-safe:max-w-none lg:motion-safe:flex-row lg:motion-safe:items-stretch lg:motion-safe:pr-[30vw] lg:motion-safe:pl-[max(4.15vw,calc((100vw_-_1760px)/2_+_4.15vw))]`}
          ref={track}
        >
          {processStages.map((stage, i) => (
            <li
              className="svc-stage relative flex shrink-0 flex-col border-t border-black/15 py-8 lg:motion-safe:w-[clamp(320px,27vw,440px)] lg:motion-safe:border-t-0 lg:motion-safe:border-l lg:motion-safe:px-9 lg:motion-safe:py-2 lg:motion-safe:first:border-l-0 lg:motion-safe:first:pl-0"
              key={stage.title}
            >
              <div className="svc-stage-body flex h-full flex-col">
                <div className="flex items-baseline gap-4">
                  <span className="font-display text-[clamp(3.5rem,6vw,6rem)] leading-[0.8] font-extrabold tracking-[-0.05em] text-black/15 tabular-nums">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-display text-[clamp(1.6rem,2.2vw,2.4rem)] leading-none font-bold tracking-[-0.03em] uppercase">
                    {stage.title}
                  </h3>
                </div>
                <p className="mt-6 max-w-[38ch] font-body text-base leading-[1.6] text-black/75 lg:mt-8">{stage.detail}</p>
                <dl className="mt-6 grid gap-4 border-t border-black/10 pt-5 font-body text-sm lg:mt-auto">
                  <div className="grid grid-cols-[7.5rem_1fr] gap-3">
                    <dt className="font-semibold tracking-[0.06em] text-black/50 uppercase">You see</dt>
                    <dd className="m-0 text-black/85">{stage.youSee}</dd>
                  </div>
                  <div className="grid grid-cols-[7.5rem_1fr] gap-3">
                    <dt className="font-semibold tracking-[0.06em] text-black/50 uppercase">We need</dt>
                    <dd className="m-0 text-black/85">{stage.weNeed}</dd>
                  </div>
                </dl>
              </div>
            </li>
          ))}
        </ol>
      </div>

      <div className={`${SHELL} hidden pt-10 pb-12 lg:motion-safe:block`}>
        <div aria-hidden="true" className="relative h-px bg-black/15">
          <span className="absolute inset-0 origin-left scale-x-0 bg-black" ref={progress} />
        </div>
      </div>
    </section>
  );
}
