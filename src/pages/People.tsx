import { Link } from "react-router-dom";
import { ProcessTrack } from "../components/services/ProcessTrack";
import { BgImage } from "../components/ui/BgImage";
import { WorkCard } from "../components/ui/WorkCard";
import { clients, whatWeDoIntro } from "../data/home";
import { processStages, services, servicesSummary } from "../data/services";
import { agency, leadership, type TeamMember } from "../data/team";
import { brandCaseStudyWorks, productCaseStudyWorks } from "../data/works";
import { useReveal } from "../lib/useReveal";

const SHELL = "mx-auto w-full max-w-[1760px] px-5 sm:px-8 lg:px-[4.15vw]";

const founderStatement =
  "FOUNDED IN 2019 BY ABI ROSHAN AND FAHEEM RAZI, OGLAS GLOBAL IS A BORDERLESS CREATIVE AGENCY SHAPING CULTURE THROUGH ICONIC, VALUE-DRIVEN BRAND PLATFORMS.";

const beliefs = [
  { title: "Strategy", text: processStages[0]!.detail },
  { title: "Creativity", text: processStages[2]!.detail },
  { title: "Technology", text: processStages[3]!.detail },
];

const reasons = [
  { title: "Integrated capabilities", text: servicesSummary[0] },
  {
    title: "A clear process",
    text: "Every project follows six stages, whatever services it involves. This keeps expectations clear and creates opportunities to review progress.",
  },
  { title: "Built to improve", text: processStages[5]!.detail },
];

const caseStudyWorks = [
  ...brandCaseStudyWorks,
  ...productCaseStudyWorks.filter((work) => work.caseStudySlug !== "velvet-properties"),
];

function initials(name: string): string {
  const parts = name.trim().split(/\s+/).filter(Boolean);
  if (parts.length === 0) return "";
  const first = parts[0] ?? "";
  const last = parts[parts.length - 1] ?? "";
  if (parts.length > 1) return `${first.charAt(0)}${last.charAt(0)}`.toUpperCase();
  return first.slice(0, 2).toUpperCase();
}

function MemberCard({ member }: { member: TeamMember }) {
  return (
    <article className="group flex flex-col" data-reveal>
      <div className="relative aspect-[4/5] overflow-hidden rounded-lg border border-white/10 bg-charcoal">
        {member.photo ? (
          <BgImage
            alt={`${member.name} — ${member.role}`}
            className="grayscale transition-all duration-500 group-hover:scale-[1.04] group-hover:grayscale-0"
            fill
            src={member.photo}
          />
        ) : (
          <span
            aria-hidden="true"
            className="grid h-full w-full place-items-center bg-gradient-to-br from-graphite to-charcoal font-display text-[clamp(2.5rem,5vw,4rem)] font-semibold tracking-[-0.02em] text-white/25"
          >
            {initials(member.name)}
          </span>
        )}
      </div>
      <h3 className="mt-5 font-display text-xl font-semibold tracking-[-0.01em] uppercase">{member.name}</h3>
      <p className="mt-1 font-body text-sm font-medium text-lime">{member.role}</p>
      <p className="mt-4 font-body text-sm leading-relaxed text-white/65">{member.bio}</p>
    </article>
  );
}

function TeamGroup({ title, members, columns }: { title: string; members: TeamMember[]; columns: string }) {
  return (
    <div>
      <div className="mb-12 flex items-baseline gap-4 border-t border-white/15 pt-10 lg:mb-16">
        <h3 className="font-display text-[clamp(2rem,4vw,3.5rem)] font-semibold tracking-[-0.02em] uppercase" data-reveal>
          {title}
        </h3>
        <span className="font-body text-sm tabular-nums text-white/45">{String(members.length).padStart(2, "0")}</span>
      </div>
      <div className={`grid grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 ${columns}`}>
        {members.map((member) => (
          <MemberCard key={member.name} member={member} />
        ))}
      </div>
    </div>
  );
}

export default function People() {
  const pageRef = useReveal<HTMLDivElement>();

  return (
    <div className="bg-dark text-white" ref={pageRef}>
      <section aria-labelledby="about-hero-title" className="px-5 pt-28 sm:px-8 sm:pt-32 lg:px-[2.45vw] lg:pt-36">
        <div className="relative mx-auto aspect-[1826/1199] max-w-[1826px] overflow-hidden rounded-lg bg-black" data-reveal>
          <BgImage alt="Portrait grid of The Oglas Agency team members" fill src="/assets/people/portraits.jpg" />
        </div>
        <div className="mx-auto flex min-h-[420px] w-full max-w-[1500px] items-center py-20 text-center lg:min-h-[620px] lg:py-32">
          <h1
            className="font-display text-[clamp(2.2rem,4.6vw,5.6rem)] leading-[1.06] font-extrabold tracking-[-0.04em] uppercase"
            data-reveal
            id="about-hero-title"
          >
            {founderStatement}
          </h1>
        </div>
      </section>

      <section aria-labelledby="who-we-are-title" className="bg-white py-20 text-black lg:py-36">
        <div className={`${SHELL} grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24`}>
          <h2
            className="font-display text-[clamp(2.6rem,5.5vw,6rem)] leading-[0.92] font-extrabold tracking-[-0.04em] uppercase"
            data-reveal
            id="who-we-are-title"
          >
            Who we are
          </h2>
          <div className="max-w-[850px] lg:pt-3" data-reveal>
            <p className="font-body text-[clamp(1.2rem,1.7vw,1.75rem)] leading-[1.55]">{whatWeDoIntro}</p>
            <p className="mt-8 max-w-[65ch] font-body text-base leading-[1.75] text-black/65">{servicesSummary[1]}</p>
          </div>
        </div>
      </section>

      <section aria-labelledby="our-story-title" className="bg-dark py-20 text-white lg:py-36">
        <div className={SHELL}>
          <h2 className="font-display text-[clamp(2.6rem,6vw,6rem)] leading-[0.9] font-extrabold tracking-[-0.04em] uppercase" data-reveal id="our-story-title">
            Our story
          </h2>
          <div className="mt-14 grid border-t border-white/15 pt-10 lg:mt-20 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24 lg:pt-14">
            <p className="font-body text-sm font-semibold tracking-[0.08em] text-lime uppercase" data-reveal>
              Dubai, UAE — Since 2019
            </p>
            <div className="max-w-[900px] space-y-7 font-body text-[clamp(1.1rem,1.5vw,1.5rem)] leading-[1.65] text-white/75" data-reveal>
              <p>{founderStatement}</p>
              <p>{servicesSummary[0]}</p>
            </div>
          </div>
        </div>
      </section>

      <section aria-labelledby="beliefs-title" className="bg-off-white py-20 text-black lg:py-36">
        <div className={SHELL}>
          <h2 className="font-display text-[clamp(2.6rem,6vw,6rem)] leading-[0.9] font-extrabold tracking-[-0.04em] uppercase" data-reveal id="beliefs-title">
            What we believe
          </h2>
          <div className="mt-14 grid border-t border-black/15 md:grid-cols-3 lg:mt-20" data-reveal>
            {beliefs.map((belief) => (
              <article className="border-b border-black/15 py-9 md:border-b-0 md:border-l md:px-9 md:first:border-l-0 md:first:pl-0" key={belief.title}>
                <h3 className="font-display text-[clamp(2rem,3vw,3.5rem)] leading-none font-semibold tracking-[-0.03em] uppercase">{belief.title}</h3>
                <p className="mt-6 max-w-[38ch] font-body text-base leading-[1.65] text-black/65">{belief.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section aria-labelledby="what-we-do-title" className="bg-dark py-20 text-white lg:py-36">
        <div className={SHELL}>
          <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:gap-24">
            <h2 className="font-display text-[clamp(2.6rem,5.5vw,6rem)] leading-[0.92] font-extrabold tracking-[-0.04em] uppercase" data-reveal id="what-we-do-title">
              What we do
            </h2>
            <p className="max-w-[720px] font-body text-[clamp(1.1rem,1.45vw,1.4rem)] leading-[1.65] text-white/70" data-reveal>{servicesSummary[0]}</p>
          </div>
          <ol className="mt-14 border-t border-white/15 lg:mt-20" data-reveal>
            {services.map((service, index) => (
              <li className="border-b border-white/15" key={service.id}>
                <Link
                  className="group grid gap-5 py-8 transition-colors hover:text-lime md:grid-cols-[3rem_minmax(12rem,0.55fr)_minmax(18rem,1fr)_auto] md:items-start lg:py-10"
                  to={`/services/${service.id}`}
                >
                  <span className="font-body text-sm tabular-nums text-white/45">{String(index + 1).padStart(2, "0")}</span>
                  <h3 className="font-display text-[clamp(1.8rem,2.6vw,3.2rem)] leading-none font-semibold tracking-[-0.03em] uppercase">{service.title}</h3>
                  <div>
                    <p className="max-w-[65ch] font-body text-sm leading-[1.7] text-white/65 group-hover:text-white/75">{service.description[0]}</p>
                    <ul className="mt-5 flex flex-wrap gap-x-5 gap-y-2 font-body text-xs tracking-[0.05em] text-white/45 uppercase">
                      {service.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
                    </ul>
                  </div>
                  <span className="font-body text-sm font-semibold uppercase underline decoration-1 underline-offset-4">Explore</span>
                </Link>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <ProcessTrack pinned={false} title="How we think & work" />

      <section aria-labelledby="experience-title" className="bg-white py-20 text-black lg:py-36">
        <div className={SHELL}>
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <h2 className="max-w-[1100px] font-display text-[clamp(2.6rem,6vw,6rem)] leading-[0.9] font-extrabold tracking-[-0.04em] uppercase" data-reveal id="experience-title">
              Our experience in action
            </h2>
            <Link className="w-fit shrink-0 font-body text-sm font-semibold uppercase underline underline-offset-4" to="/works">View all works</Link>
          </div>
          <div className="mt-14 grid gap-x-8 gap-y-16 md:grid-cols-2 xl:grid-cols-3 lg:mt-20" data-reveal>
            {caseStudyWorks.map((work) => <WorkCard key={work.slug} work={work} />)}
          </div>
        </div>
      </section>

      <section aria-labelledby="people-title" className="bg-dark py-20 text-white lg:py-36">
        <div className={SHELL}>
          <h2 className="max-w-[1100px] font-display text-[clamp(2.6rem,6vw,6rem)] leading-[0.9] font-extrabold tracking-[-0.04em] uppercase" data-reveal id="people-title">
            The people behind Oglas
          </h2>
          <div className="mt-16 space-y-24 lg:mt-24 lg:space-y-32">
            <TeamGroup columns="lg:grid-cols-4" members={leadership} title="Leadership" />
            <TeamGroup columns="lg:grid-cols-3 xl:grid-cols-4" members={agency} title="Agency" />
          </div>
        </div>
      </section>

      <section aria-labelledby="clients-title" className="bg-off-white py-20 text-black lg:py-36">
        <div className={SHELL}>
          <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-24">
            <h2 className="font-display text-[clamp(2.6rem,5.5vw,6rem)] leading-[0.92] font-extrabold tracking-[-0.04em] uppercase" data-reveal id="clients-title">
              Who we work with
            </h2>
            <div data-reveal>
              <p className="max-w-[760px] font-body text-[clamp(1.1rem,1.45vw,1.4rem)] leading-[1.65]">{servicesSummary[1]}</p>
              <p className="mt-6 max-w-[760px] font-body text-base leading-[1.7] text-black/65">
                Our published work includes fresh food, real estate, sportswear, education consultancy and digital retail projects.
              </p>
            </div>
          </div>
          <ul className="mt-14 grid border-t border-black/15 sm:grid-cols-2 lg:mt-20 lg:grid-cols-4" data-reveal>
            {clients.map((client) => (
              <li className="flex min-h-40 items-center justify-center border-b border-black/15 p-8 sm:border-l sm:first:border-l-0 lg:min-h-52" key={client.name}>
                <BgImage alt={client.name} className="h-16 w-full max-w-[180px] brightness-0" fit="contain" src={client.logo} />
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section aria-labelledby="why-oglas-title" className="bg-dark py-20 text-white lg:py-36">
        <div className={SHELL}>
          <h2 className="max-w-[1100px] font-display text-[clamp(2.6rem,6vw,6rem)] leading-[0.9] font-extrabold tracking-[-0.04em] uppercase" data-reveal id="why-oglas-title">
            Why Oglas Global
          </h2>
          <div className="mt-14 grid border-t border-white/15 md:grid-cols-3 lg:mt-20" data-reveal>
            {reasons.map((reason) => (
              <article className="border-b border-white/15 py-9 md:border-b-0 md:border-l md:px-9 md:first:border-l-0 md:first:pl-0" key={reason.title}>
                <h3 className="font-display text-[clamp(1.8rem,2.6vw,3rem)] leading-none font-semibold tracking-[-0.03em] uppercase">{reason.title}</h3>
                <p className="mt-6 max-w-[42ch] font-body text-base leading-[1.65] text-white/65">{reason.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section aria-labelledby="work-together-title" className="bg-white py-24 text-black lg:py-40">
        <div className={SHELL}>
          <h2 className="text-center font-display text-[clamp(2.8rem,6.5vw,6rem)] leading-[0.95] font-extrabold tracking-[-0.04em] uppercase" data-reveal id="work-together-title">
            Let&apos;s work together
          </h2>
          <div className="mx-auto mt-14 flex max-w-[1200px] flex-col items-start gap-8 rounded-2xl bg-dark px-8 py-10 text-white sm:flex-row sm:items-center sm:justify-between lg:px-14 lg:py-12" data-reveal>
            <p className="max-w-[250px] font-body text-lg font-medium">Built for better solutions.</p>
            <p className="max-w-[620px] font-body leading-[1.65] text-white/70">
              Partner with Oglas Global, a Dubai-based branding and creative agency, to build distinctive brand identities, meaningful digital experiences and marketing strategies that move your business forward.
            </p>
            <Link className="shrink-0 rounded-full bg-white px-8 py-3.5 font-body text-sm font-medium text-black transition-transform hover:scale-[1.03]" to="/contacts">Contact us</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
