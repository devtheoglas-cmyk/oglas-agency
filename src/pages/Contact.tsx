import { ContactForm } from "../components/ui/ContactForm";
import type { OfficeDetails } from "../data/site";
import { siteDetails } from "../data/site";
import { useReveal } from "../lib/useReveal";

const SHELL = "mx-auto w-full max-w-[1760px] px-5 sm:px-8 lg:px-[4.15vw]";

function OfficeBlock({ office }: { office: OfficeDetails }) {
  return (
    <div className="border-t border-white/12 py-14" data-reveal>
      <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <h2 className="font-display text-[clamp(2.4rem,4.5vw,4rem)] font-semibold tracking-[-0.03em] uppercase">
          {office.city}
        </h2>
        <div className="grid gap-10 sm:grid-cols-2">
          <div>
            <p className="mb-2 font-body text-sm font-semibold underline underline-offset-4">Find us</p>
            <address className="font-body text-sm leading-relaxed text-white/70 not-italic">
              {office.address.map((line) => (
                <span className="block" key={line}>
                  {line}
                </span>
              ))}
            </address>
            <p className="mt-6 mb-2 font-body text-sm font-semibold underline underline-offset-4">Email</p>
            <a
              className="font-body text-sm text-white/70 transition-colors hover:text-lime"
              href={`mailto:${office.email}`}
            >
              {office.email}
            </a>
          </div>
          <div>
            <p className="mb-2 font-body text-sm font-semibold underline underline-offset-4">Recruitment</p>
            <a
              className="font-body text-sm text-white/70 transition-colors hover:text-lime"
              href={`mailto:${office.recruitmentEmail}`}
            >
              {office.recruitmentEmail}
            </a>
            <p className="mt-6 mb-2 font-body text-sm font-semibold underline underline-offset-4">New business</p>
            <p className="font-body text-sm text-white/70">{office.newBusinessContact}</p>
            <a
              className="block font-body text-sm text-white/70 transition-colors hover:text-lime"
              href={`tel:${office.newBusinessPhone.replace(/\s/g, "")}`}
            >
              {office.newBusinessPhone}
            </a>
            <a
              className="block font-body text-sm text-white/70 transition-colors hover:text-lime"
              href={`mailto:${office.newBusinessEmail}`}
            >
              {office.newBusinessEmail}
            </a>
          </div>
        </div>
      </div>
      <div className="mt-10 flex flex-wrap gap-x-12 gap-y-3">
        <a
          className="font-display text-[clamp(1.4rem,2.4vw,2rem)] font-medium tracking-[-0.02em] transition-colors hover:text-lime"
          href={`tel:${office.generalPhone.replace(/\s/g, "")}`}
        >
          {office.generalPhone}
        </a>
        <span className="font-display text-[clamp(1.4rem,2.4vw,2rem)] font-medium tracking-[-0.02em] text-white/70">
          {office.coordinates}
        </span>
      </div>
    </div>
  );
}

export default function Contact() {
  const pageRef = useReveal<HTMLDivElement>();

  const scrollToForm = () => {
    document.getElementById("your-contacts")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div ref={pageRef}>
      <section className="bg-dark px-5 pt-40 pb-24 text-center text-white sm:px-8 lg:pt-52 lg:pb-28">
        <div className="mx-auto max-w-[1200px]">
          <h1
            className="font-display text-[clamp(2.6rem,6vw,6.5rem)] leading-[0.98] font-extrabold tracking-[-0.04em] uppercase"
            data-reveal
          >
            The right design partner for your next project
          </h1>
          <button
            className="mt-10 rounded-full border border-white/30 px-8 py-3 font-body text-sm tracking-wide uppercase transition-colors hover:bg-lime hover:text-black"
            data-reveal
            onClick={scrollToForm}
            type="button"
          >
            Contact us
          </button>
        </div>
      </section>

      <section className="bg-white py-20 text-black lg:py-28" id="your-contacts">
        <div className={SHELL}>
          <h2 className="font-body text-sm font-medium tracking-[0.05em] uppercase" data-reveal>
            Your contacts
          </h2>
          <div className="mx-auto max-w-[1200px]" data-reveal>
            <ContactForm />
          </div>
        </div>
      </section>

      <section className="bg-dark py-16 text-white lg:py-24">
        <div className={SHELL}>
          <OfficeBlock office={siteDetails.offices.dubai} />
          <OfficeBlock office={siteDetails.offices.india} />
        </div>
      </section>

      <section className="bg-off-white py-20 text-black lg:py-28">
        <div className={SHELL}>
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div data-reveal>
              <h2 className="font-display text-[clamp(2.4rem,5vw,4.5rem)] leading-[1.02] font-extrabold tracking-[-0.03em] uppercase">
                We are a proudly creative-led agency based in the UAE.
              </h2>
              <span className="mt-8 inline-block rounded-full border border-black/25 px-5 py-2 font-body text-xs tracking-[0.15em] text-black/70 uppercase">
                Team Oglas_Family picture
              </span>
            </div>
            <div className="overflow-hidden rounded-lg bg-white" data-reveal>
              <img
                alt="The Oglas Agency team"
                className="block w-full"
                decoding="async"
                loading="lazy"
                src="/assets/contact/team.webp"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
