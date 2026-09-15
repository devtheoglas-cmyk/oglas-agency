import { BgImage } from "../components/ui/BgImage";
import { agency, leadership, type TeamMember } from "../data/team";
import { useReveal } from "../lib/useReveal";

const founderStatementLines = [
  "Founded in 2019",
  "by Abi Roshan and Faheem Razi,",
  "THE Oglas is a borderless creative agency shaping culture through iconic, value-driven",
  "brand PLATFORMS.",
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
            className="grayscale transition-all duration-500 group-hover:grayscale-0 group-hover:scale-[1.04]"
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
      <p className="mt-4 font-body text-sm leading-relaxed text-white/60">{member.bio}</p>
    </article>
  );
}

export default function People() {
  const pageRef = useReveal<HTMLDivElement>();

  return (
    <div className="bg-dark text-white" ref={pageRef}>
      <section className="px-5 pt-28 sm:px-8 sm:pt-32 lg:px-[2.45vw] lg:pt-36">
        <div
          className="relative mx-auto aspect-[1826/1199] max-w-[1826px] overflow-hidden rounded-lg bg-black"
          data-reveal
        >
          <BgImage alt="Portrait grid of The Oglas Agency team members" fill src="/assets/people/portraits.jpg" />
        </div>
      </section>

      <section className="flex min-h-[420px] items-center px-5 py-20 text-center sm:px-8 lg:min-h-[620px] lg:px-[4.15vw] lg:py-32">
        <div className="mx-auto w-full max-w-[1500px]">
          <h1
            className="mx-auto font-display text-[clamp(2.2rem,4.6vw,5.6rem)] leading-[1.06] font-extrabold tracking-[-0.045em] uppercase"
            data-reveal
          >
            {founderStatementLines.map((line, index) => (
              <span className="block" key={line}>
                {line}
                {index < founderStatementLines.length - 1 ? " " : ""}
              </span>
            ))}
          </h1>
        </div>
      </section>

      {/* Leadership */}
      <section className="px-5 pb-20 sm:px-8 lg:px-[4.15vw] lg:pb-28">
        <div className="mx-auto max-w-[1760px]">
          <div className="mb-12 flex items-baseline gap-4 border-t border-white/12 pt-10 lg:mb-16">
            <h2 className="font-display text-[clamp(2rem,4vw,3.5rem)] font-semibold tracking-[-0.02em] uppercase" data-reveal>
              Leadership
            </h2>
            <span className="font-body text-sm text-white/40">0{leadership.length}</span>
          </div>
          <div className="grid grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {leadership.map((member) => (
              <MemberCard key={member.name} member={member} />
            ))}
          </div>
        </div>
      </section>

      {/* Agency */}
      <section className="px-5 pb-24 sm:px-8 lg:px-[4.15vw] lg:pb-36">
        <div className="mx-auto max-w-[1760px]">
          <div className="mb-12 flex items-baseline gap-4 border-t border-white/12 pt-10 lg:mb-16">
            <h2 className="font-display text-[clamp(2rem,4vw,3.5rem)] font-semibold tracking-[-0.02em] uppercase" data-reveal>
              Agency
            </h2>
            <span className="font-body text-sm text-white/40">0{agency.length}</span>
          </div>
          <div className="grid grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {agency.map((member) => (
              <MemberCard key={member.name} member={member} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
