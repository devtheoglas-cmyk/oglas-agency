import { services } from "../data/services";
import { useReveal } from "../lib/useReveal";

const heroCopy =
  "We solve problems with creativity anywhere   they exist, spanning advertising,brand strategy, experience,design, and much more.";

export default function Services() {
  const pageRef = useReveal<HTMLDivElement>();

  return (
    <div ref={pageRef}>
      <section className="flex min-h-[520px] items-center bg-dark px-5 pt-40 pb-24 text-center text-white sm:px-8 lg:min-h-[680px] lg:px-[4.15vw] lg:pt-52 lg:pb-28">
        <div className="mx-auto w-full max-w-[1500px]">
          <h1
            className="mx-auto font-display text-[clamp(2.4rem,5.5vw,6.5rem)] leading-[0.98] font-extrabold tracking-[-0.045em] uppercase"
            data-reveal
          >
            {heroCopy}
          </h1>
        </div>
      </section>

      <section className="bg-white px-5 py-20 text-black sm:px-8 sm:py-24 lg:px-[4.15vw] lg:py-32">
        <div className="mx-auto max-w-[1760px]">
          <h2 className="mb-16 font-body text-lg font-medium lowercase lg:mb-28" data-reveal>
            services
          </h2>

          <ul className="border-t border-hairline-dark" data-reveal>
            {services.map((service) => (
              <li
                className="grid grid-cols-[1fr_auto] items-center gap-6 border-b border-hairline-dark py-7 sm:py-9 lg:py-11"
                key={service}
              >
                <span className="font-display text-[clamp(2.2rem,4.15vw,5rem)] leading-none font-medium tracking-[-0.045em]">
                  {service}
                </span>
                <span
                  aria-hidden="true"
                  className="font-body text-[clamp(1.8rem,3vw,3.7rem)] font-light leading-none"
                >
                  ↓
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
