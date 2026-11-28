import { Link, Navigate, useParams } from "react-router-dom";
import { ArrowUpRight } from "../components/services/icons";
import { ServicesFaq } from "../components/services/ServicesFaq";
import { BgImage } from "../components/ui/BgImage";
import { featuredInsight } from "../data/insights";
import { faqs, processIntro, processStages, services, type Faq, type Service } from "../data/services";
import { siteDetails } from "../data/site";
import { brandWorks, productWorks, type Work } from "../data/works";
import { cn } from "../lib/cn";
import "../styles/services.css";

const SHELL = "mx-auto w-full max-w-[1760px] px-5 sm:px-8 lg:px-[4.15vw]";
const allWorks: Work[] = [...brandWorks, ...productWorks];

function findWork(slug: string): Work | undefined {
  return allWorks.find((work) => (work.caseStudySlug ?? work.slug) === slug && work.hasCaseStudy);
}

function Section({
  id,
  title,
  intro,
  dark = false,
  soft = false,
  children,
}: {
  id: string;
  title: string;
  intro?: string;
  dark?: boolean;
  soft?: boolean;
  children: React.ReactNode;
}) {
  return (
    <section
      aria-labelledby={id}
      className={cn("py-20 lg:py-36", dark ? "bg-dark text-white" : soft ? "bg-off-white text-black" : "bg-white text-black")}
    >
      <div className={SHELL}>
        <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:gap-24">
          <h2
            className="font-display text-[clamp(2.5rem,5.4vw,6rem)] leading-[0.92] font-extrabold tracking-[-0.04em] uppercase"
            data-section-heading
            id={id}
          >
            {title}
          </h2>
          {intro && (
            <p className={cn("max-w-[760px] font-body text-[clamp(1.05rem,1.35vw,1.3rem)] leading-[1.65]", dark ? "text-white/70" : "text-black/70")}>
              {intro}
            </p>
          )}
        </div>
        {children}
      </div>
    </section>
  );
}

function WorkLink({ work }: { work: Work }) {
  return (
    <Link className="group block" to={`/works/${work.caseStudySlug ?? work.slug}`}>
      <div className="overflow-hidden border border-current/10 bg-dark">
        <BgImage
          alt={`${work.name}, ${work.type}`}
          aspectRatio="920 / 582"
          className="transition-transform duration-[900ms] ease-out group-hover:scale-[1.05]"
          src={work.image}
        />
      </div>
      <div className="mt-4 flex items-start justify-between gap-4">
        <span>
          <span className="block font-display text-xl font-semibold uppercase">{work.name}</span>
          <span className="mt-1 block font-body text-sm opacity-60">{work.type}</span>
        </span>
        <ArrowUpRight className="size-5 shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </div>
    </Link>
  );
}

function serviceFaqs(service: Service): Faq[] {
  return [
    {
      question: `What is included in ${service.title}?`,
      answer: `The scope can include ${service.capabilities.slice(0, 5).map((item) => item.label).join(', ')}. The final combination depends on your business requirements.`,
    },
    {
      question: `What will we receive from the ${service.title.toLowerCase()} project?`,
      answer: `Typical deliverables include ${service.deliverables.join(', ')}. Your proposal will confirm the deliverables included in your project.`,
    },
    {
      question: `How does the ${service.title.toLowerCase()} process work?`,
      answer: `The service moves through ${service.steps.map((step) => step.title).join(', ')}. You can review the work at the agreed milestones.`,
    },
    faqs[2]!,
    faqs[4]!,
    faqs[7]!,
  ];
}

function ServicePage({ service }: { service: Service }) {
  const works = service.work.map(findWork).filter((work): work is Work => Boolean(work));
  const applications = Array.from(new Map(service.reel.map((image) => [image.project, image])).values());
  const approach = service.description[1] ?? service.description[0];
  const reasons = [
    { title: "Service expertise", text: approach },
    { title: "Clear delivery", text: processIntro },
    { title: "Ongoing improvement", text: processStages[5]!.detail },
  ];

  return (
    <div>
      <section aria-labelledby="service-title" className="bg-dark pt-32 text-white lg:pt-44">
        <div className={`${SHELL} pb-24 lg:pb-36`}>
          <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-end lg:gap-[5vw]">
            <div>
              <h1
                className="svc-title font-display text-[clamp(2.75rem,14vw,7.5rem)] leading-[0.84] font-extrabold tracking-[-0.04em] uppercase"
                id="service-title"
              >
                {service.title}
              </h1>
              <p className="mt-8 max-w-[700px] font-body text-[clamp(1.1rem,1.45vw,1.45rem)] leading-[1.65] text-white/70">{service.description[0]}</p>
              <Link className="group mt-9 inline-flex items-center gap-3 rounded-full bg-white px-7 py-4 font-body text-sm font-semibold uppercase text-black transition-colors hover:bg-lime" to="/contacts">
                Discuss your project
                <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
            <div>
              <BgImage
                alt={service.reel[0]?.alt ?? `${service.title} project work`}
                aspectRatio="16 / 10"
                className="overflow-hidden bg-ink"
                src={service.reel[0]!.src}
              />
              <p className="mt-3 font-body text-sm text-white/65">{service.reel[0]!.project} · {service.reel[0]!.caption}</p>
            </div>
          </div>
          <ul className="mt-16 grid border-t border-white/15 sm:grid-cols-3 lg:mt-24">
            {service.highlights.map((item) => (
              <li className="border-b border-white/15 py-6 font-body text-sm font-semibold uppercase sm:border-b-0 sm:border-l sm:px-6 sm:first:border-l-0 sm:first:pl-0" key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <Section id="understanding-title" intro={service.description[0]} title="Understanding the service">
        <div className="mt-14 grid border-t border-black/15 pt-10 lg:mt-20 lg:grid-cols-[0.75fr_1.25fr] lg:gap-24 lg:pt-14">
          <p className="font-body text-sm font-semibold uppercase text-black/50">Why businesses need it</p>
          <div className="max-w-[760px] space-y-6 font-body text-[clamp(1.05rem,1.35vw,1.3rem)] leading-[1.7] text-black/70">
            {service.description.slice(1).map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
        </div>
      </Section>

      <Section id="challenges-title" intro="This service is most useful when one or more of these business challenges is present." soft title="Business challenges">
        <ul className="mt-14 border-t border-black/15 lg:mt-20">
          {service.fit.map((challenge, index) => (
            <li className="grid gap-4 border-b border-black/15 py-7 sm:grid-cols-[3rem_1fr] lg:py-9" key={challenge}>
              <span className="font-body text-sm tabular-nums text-black/45">{String(index + 1).padStart(2, "0")}</span>
              <p className="max-w-[1000px] font-display text-[clamp(1.6rem,3vw,3.2rem)] leading-[1.05] font-semibold tracking-[-0.03em] uppercase">{challenge}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section dark id="capabilities-title" intro="The service is organised into specific capabilities and practical deliverables." title="Our services & capabilities">
        <div className="mt-14 grid gap-16 lg:mt-20 lg:grid-cols-[1.25fr_0.75fr] lg:gap-20">
          <ul className="border-t border-white/15">
            {service.capabilities.map((capability) => (
              <li className="svc-cap border-b border-white/15 py-6" key={capability.label}>
                <div className="grid gap-2 sm:grid-cols-[0.75fr_1.25fr] sm:gap-8">
                  <h3 className="font-body text-lg font-semibold">{capability.label}</h3>
                  <p className="font-body text-base leading-[1.65] text-white/65">{capability.detail}</p>
                </div>
              </li>
            ))}
          </ul>
          <div>
            <h3 className="font-body text-sm font-bold uppercase text-white/50">What you receive</h3>
            <ul className="mt-6 border-t border-white/15">
              {service.deliverables.map((item) => <li className="border-b border-white/15 py-4 font-body" key={item}>{item}</li>)}
            </ul>
          </div>
        </div>
      </Section>

      <Section id="approach-title" intro={approach} title="Our approach & strategy">
        <div className="mt-14 grid border-t border-black/15 md:grid-cols-3 lg:mt-20">
          {service.highlights.map((item, index) => (
            <article className="border-b border-black/15 py-8 md:border-b-0 md:border-l md:px-8 md:first:border-l-0 md:first:pl-0" key={item}>
              <h3 className="font-display text-[clamp(1.8rem,2.6vw,3rem)] leading-none font-semibold tracking-[-0.03em] uppercase">{item}</h3>
              <p className="mt-5 font-body text-base leading-[1.65] text-black/65">{service.capabilities[index]?.detail}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section id="process-title" intro={`The ${service.title.toLowerCase()} work moves through four clear stages, with review points built into delivery.`} soft title="Our process">
        <ol className="mt-14 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:mt-20 lg:grid-cols-4">
          {service.steps.map((step, index) => (
            <li className="svc-step relative border-t border-black/15 pt-7" key={step.title}>
              <span className="font-body text-sm tabular-nums text-black/45">{String(index + 1).padStart(2, "0")}</span>
              <h3 className="mt-4 font-display text-[clamp(1.7rem,2.3vw,2.6rem)] leading-none font-semibold tracking-[-0.03em] uppercase">{step.title}</h3>
              <p className="mt-5 font-body text-base leading-[1.65] text-black/65">{step.detail}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section dark id="methods-title" intro="Relevant tools and creative methods depend on the agreed scope. These are the core methods represented in this service." title="Tools, technologies & creative methods">
        <ul className="mt-14 grid border-t border-white/15 md:grid-cols-3 lg:mt-20">
          {service.highlights.map((item, index) => (
            <li className="border-b border-white/15 py-8 md:border-b-0 md:border-l md:px-8 md:first:border-l-0 md:first:pl-0" key={item}>
              <h3 className="font-display text-[clamp(1.8rem,2.6vw,3rem)] leading-none font-semibold tracking-[-0.03em] uppercase">{item}</h3>
              <p className="mt-5 font-body text-base leading-[1.65] text-white/65">{service.capabilities[index]?.detail}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section id="applications-title" intro="These examples show where the service has been applied across real brand and digital work." title="Industries & applications">
        <ul className="mt-14 border-t border-black/15 lg:mt-20">
          {applications.map((item) => (
            <li className="grid gap-3 border-b border-black/15 py-7 md:grid-cols-[0.75fr_1.25fr] md:items-center lg:py-9" key={item.project}>
              <h3 className="font-display text-[clamp(1.7rem,2.7vw,3.2rem)] leading-none font-semibold tracking-[-0.03em] uppercase">{item.project}</h3>
              <p className="font-body text-base text-black/60">{item.caption}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section id="projects-title" intro="Selected work demonstrates how the service is applied in practice." soft title="Selected projects & case studies">
        {works.length > 0 ? (
          <ul className="mt-14 grid gap-x-8 gap-y-14 md:grid-cols-2 lg:mt-20 lg:grid-cols-3">
            {works.map((work) => <li key={work.slug}><WorkLink work={work} /></li>)}
          </ul>
        ) : (
          <ul className="mt-14 grid gap-8 md:grid-cols-2 lg:mt-20 lg:grid-cols-3">
            {service.reel.slice(0, 3).map((image) => (
              <li key={image.src}>
                <BgImage alt={image.alt ?? `${image.project}, ${image.caption}`} aspectRatio="16 / 10" src={image.src} />
                <h3 className="mt-4 font-display text-xl font-semibold uppercase">{image.project}</h3>
                <p className="mt-1 font-body text-sm text-black/60">{image.caption}</p>
              </li>
            ))}
          </ul>
        )}
        <Link className="mt-12 inline-block font-body text-sm font-semibold uppercase underline underline-offset-4" to="/works">View all works</Link>
      </Section>

      <Section dark id="why-oglas-title" intro={`Oglas combines ${service.title.toLowerCase()} expertise with a clear review and delivery process.`} title="Why choose Oglas Global?">
        <div className="mt-14 grid border-t border-white/15 md:grid-cols-3 lg:mt-20">
          {reasons.map((reason) => (
            <article className="border-b border-white/15 py-8 md:border-b-0 md:border-l md:px-8 md:first:border-l-0 md:first:pl-0" key={reason.title}>
              <h3 className="font-display text-[clamp(1.8rem,2.6vw,3rem)] leading-none font-semibold tracking-[-0.03em] uppercase">{reason.title}</h3>
              <p className="mt-5 font-body text-base leading-[1.65] text-white/65">{reason.text}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section id="insight-title" intro="Useful thinking for businesses planning brand and digital work." title="Related insight">
        <Link className="group mt-14 grid border-y border-black/15 py-8 lg:mt-20 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-16 lg:py-12" to={featuredInsight.href}>
          <BgImage alt={featuredInsight.title} aspectRatio="16 / 10" src={featuredInsight.image} />
          <div className="mt-8 lg:mt-0">
            <p className="font-body text-sm font-semibold uppercase text-black/50">{featuredInsight.category}</p>
            <h3 className="mt-5 font-display text-[clamp(2rem,4vw,4.5rem)] leading-[0.95] font-extrabold tracking-[-0.04em] uppercase">{featuredInsight.title}</h3>
            <p className="mt-6 max-w-[65ch] font-body text-base leading-[1.7] text-black/65">{featuredInsight.excerpt}</p>
            <span className="mt-7 inline-block font-body text-sm font-semibold uppercase underline underline-offset-4">Read article</span>
          </div>
        </Link>
      </Section>

      <section aria-labelledby="faq-title" className="bg-off-white py-20 text-black lg:py-36">
        <div className={`${SHELL} grid gap-12 lg:grid-cols-[0.42fr_1fr] lg:gap-20`}>
          <div>
            <h2 className="font-display text-[clamp(2.5rem,5vw,5.5rem)] leading-[0.92] font-extrabold tracking-[-0.04em] uppercase" id="faq-title">FAQ</h2>
            <p className="mt-6 max-w-[34ch] font-body text-base leading-[1.65] text-black/65">
              Other questions? Email <a className="font-semibold text-black underline underline-offset-4" href={`mailto:${siteDetails.offices.dubai.email}`}>{siteDetails.offices.dubai.email}</a>.
            </p>
          </div>
          <ServicesFaq faqs={serviceFaqs(service)} />
        </div>
      </section>

      <section aria-labelledby="services-cta-title" className="bg-dark py-24 text-white lg:py-40">
        <div className={SHELL}>
          <div className="flex flex-col items-start gap-10 lg:flex-row lg:items-end lg:justify-between">
            <h2 className="max-w-[1100px] font-display text-[clamp(2.8rem,6.6vw,6rem)] leading-[0.9] font-extrabold tracking-[-0.04em] uppercase" id="services-cta-title">
              Ready to discuss {service.title.toLowerCase()}?
            </h2>
            <Link className="group inline-flex shrink-0 items-center gap-3 rounded-full bg-white px-8 py-5 font-body text-sm font-semibold uppercase text-black transition-colors hover:bg-lime" to="/contacts">
              Start a project
              <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
          <p className="mt-8 max-w-[760px] font-body text-lg leading-[1.65] text-white/70">Tell us about your business goals, current challenges and the outcome you want to create.</p>
        </div>
      </section>
    </div>
  );
}

export default function Services() {
  const { serviceId } = useParams<{ serviceId: string }>();
  const service = services.find((item) => item.id === serviceId);
  if (!service) return <Navigate replace to="/services/brand-design" />;
  return <ServicePage service={service} />;
}
