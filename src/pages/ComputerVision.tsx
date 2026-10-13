import { Link } from "react-router-dom";
import { useReveal } from "../lib/useReveal";

const SHELL = "mx-auto w-full max-w-[1760px] px-5 sm:px-8 lg:px-[4.15vw]";

const capabilities = [
  {
    title: "Object and Activity Detection",
    body: "Identify relevant objects and activities within supported visual inputs according to defined detection requirements. Computer vision can help teams focus on selected events or activities instead of relying solely on manual observation.",
  },
  {
    title: "Safety and Compliance Monitoring",
    body: "Support safety and compliance monitoring by identifying configured visual conditions and generating relevant alerts where the required detection capability is available. Human oversight and existing safety procedures remain important.",
  },
  {
    title: "Visual Inspection Workflows",
    body: "Use computer vision to support defined visual inspection processes where the relevant characteristics can be identified from visual inputs. Each workflow is evaluated against the actual inspection requirements before implementation.",
  },
  {
    title: "Camera Analytics and Dashboards",
    body: "Organise relevant visual information into structured outputs that support alerts, reports and camera analytics dashboards, helping operational teams review relevant events without treating every input equally.",
  },
];

const outcomes = [
  "Faster detection of relevant events",
  "More consistent monitoring",
  "Reduced manual review where automation is suitable",
  "Clearer operational visibility",
  "More structured visual reporting",
];

const process = [
  ["Discover", "Understand the business objective, current monitoring processes, available visual inputs and operational challenges."],
  ["Map", "Map detection requirements, expected outputs, users and the actions that should follow a relevant event."],
  ["Design", "Define the computer vision approach, workflow rules, integration requirements and reporting needs."],
  ["Build", "Develop and configure the required computer vision components and supporting workflows."],
  ["Validate", "Test the solution against relevant scenarios and operating conditions before deployment."],
  ["Deploy & Improve", "Deploy the validated solution and refine detection rules as conditions or requirements evolve."],
] as const;

const faqs = [
  ["What is computer vision?", "Computer vision is a field of artificial intelligence that enables computer systems to analyse visual inputs, such as images and video, to identify objects, activities or relevant visual conditions. Businesses can use it to support monitoring, visual inspection, alerts and operational reporting."],
  ["What can computer vision solutions be used for in business?", "Computer vision can support object and activity detection, safety and compliance monitoring, visual inspection workflows and camera analytics. The right capabilities depend on the business use case, available visual inputs and the requirements established for the solution."],
  ["Can computer vision solutions work with existing camera infrastructure?", "In many cases, computer vision solutions can be designed to work with existing camera infrastructure. Feasibility depends on camera compatibility, video quality, access, connectivity and processing requirements. The existing environment should be assessed first."],
  ["Can computer vision integrate with dashboards and business workflows?", "Yes. Computer vision workflows can provide relevant detections, alerts and structured visual information to compatible dashboards or business processes. Available integration options depend on the systems involved and the required workflow."],
  ["Does Oglas AI provide computer vision services in Dubai and the UAE?", "Oglas AI develops custom software and AI solutions for businesses in Dubai and across the UAE. Its Intelligent Computer Vision offering focuses on converting visual inputs into useful business signals through detection, monitoring, inspection and camera analytics capabilities."],
] as const;

function SectionHeading({ children, supporting }: { children: string; supporting?: string }) {
  return (
    <div className="mb-12 max-w-[1050px] lg:mb-20" data-reveal>
      <h2 className="font-display text-[clamp(2.2rem,4.7vw,5rem)] leading-[0.98] font-semibold tracking-[-0.04em] uppercase">
        {children}
      </h2>
      {supporting ? <p className="mt-5 max-w-[760px] font-body text-lg leading-relaxed text-black/65">{supporting}</p> : null}
    </div>
  );
}

export default function ComputerVision() {
  const pageRef = useReveal<HTMLDivElement>();

  return (
    <div ref={pageRef}>
      <section className="relative overflow-hidden bg-dark px-5 pt-40 pb-24 text-white sm:px-8 lg:min-h-[720px] lg:px-[4.15vw] lg:pt-52 lg:pb-32">
        <div className={`${SHELL} relative z-10`}>
          <div className="max-w-[1250px]">
            <h1 className="font-display text-[clamp(3.25rem,8.4vw,9.5rem)] leading-[0.86] font-extrabold tracking-[-0.055em] uppercase" data-reveal>
              Intelligent
              <br />
              Computer Vision
            </h1>
            <p className="mt-10 max-w-[760px] font-body text-lg leading-relaxed text-white/72 sm:text-xl" data-reveal>
              Turn camera streams and visual inspection points into useful business signals. Oglas AI develops computer vision solutions for businesses in Dubai and across the UAE, supporting object and activity detection, safety monitoring, visual inspection workflows and operational visibility.
            </p>
            <Link
              className="mt-10 inline-flex rounded-full border border-white/35 px-7 py-3 font-body text-sm tracking-[0.08em] uppercase transition-colors hover:bg-lime hover:text-black focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-lime"
              data-reveal
              to="/contacts"
            >
              Book a Free Consultation
            </Link>
          </div>
        </div>
        <div aria-hidden="true" className="pointer-events-none absolute right-[-10vw] bottom-[-20vw] h-[62vw] w-[62vw] rounded-full border border-lime/35 lg:right-[-8vw] lg:bottom-[-30vw]" />
        <div aria-hidden="true" className="pointer-events-none absolute right-[8vw] bottom-[-10vw] h-[34vw] w-[34vw] rounded-full border border-white/15" />
      </section>

      <section className="bg-white py-20 text-black sm:py-24 lg:py-36">
        <div className={SHELL}>
          <SectionHeading supporting="Businesses with camera infrastructure can have access to large amounts of visual data without an efficient way to identify the events that matter.">
            Computer Vision Solutions for Your Business Operations
          </SectionHeading>
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24" data-reveal>
            <p className="font-display text-[clamp(1.7rem,3vw,3rem)] leading-[1.02] font-semibold tracking-[-0.03em] uppercase">
              Turn visual data into useful operational information.
            </p>
            <div className="space-y-6 font-body text-base leading-relaxed text-black/72 sm:text-lg">
              <p>Depending on the environment, reviewing camera feeds and monitoring visual processes can require significant manual attention. Computer vision solutions help businesses analyse relevant visual inputs and identify predefined objects, activities or conditions.</p>
              <p>Oglas AI designs computer vision systems around the requirements of each business, helping organisations turn relevant visual information into structured signals that can support everyday operations.</p>
              <p>The objective is to make visual data more useful, reduce unnecessary manual review where automation is suitable, and give teams clearer visibility into the activities and exceptions they need to monitor.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-off-white py-20 text-black sm:py-24 lg:py-36">
        <div className={SHELL}>
          <SectionHeading supporting="The appropriate approach depends on the visual inputs available, the conditions being monitored and how the resulting information needs to be used.">
            Intelligent Computer Vision Capabilities
          </SectionHeading>
          <div className="border-t border-black/15" data-reveal>
            {capabilities.map((capability) => (
              <article className="grid gap-5 border-b border-black/15 py-8 sm:py-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20 lg:py-12" key={capability.title}>
                <h3 className="font-display text-[clamp(1.7rem,3vw,3rem)] leading-none font-semibold tracking-[-0.035em] uppercase">{capability.title}</h3>
                <p className="max-w-[720px] font-body text-base leading-relaxed text-black/70 sm:text-lg">{capability.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-dark py-20 text-white sm:py-24 lg:py-36">
        <div className={SHELL}>
          <SectionHeading supporting="Computer vision becomes more useful when the resulting information can reach the people and systems responsible for acting on it.">
            Connect Computer Vision with Existing Business Systems
          </SectionHeading>
          <div className="grid items-start gap-12 lg:grid-cols-[1fr_1.25fr] lg:gap-24" data-reveal>
            <p className="font-display text-[clamp(1.8rem,3.6vw,3.5rem)] leading-[0.98] font-semibold tracking-[-0.035em] uppercase">Make visual information more useful across your operations.</p>
            <div>
              <p className="max-w-[700px] font-body text-lg leading-relaxed text-white/72">Rather than treating camera analytics as an isolated activity, Oglas AI can design workflows around how detections, alerts and structured visual information need to be used within your business.</p>
              <div className="mt-12 grid border-y border-white/20 sm:grid-cols-5">
                {["Camera Feed", "Visual Analysis", "Relevant Detection", "Alert or Data", "Operational Review"].map((step, index) => (
                  <div className="relative border-b border-white/20 px-4 py-5 font-body text-sm font-semibold uppercase sm:border-r sm:border-b-0 sm:last:border-r-0 lg:px-5" key={step}>
                    <span className="mb-3 block font-body text-xs text-lime">0{index + 1}</span>
                    {step}
                  </div>
                ))}
              </div>
              <p className="mt-6 font-body text-sm leading-relaxed text-white/52">The precise workflow depends on the monitoring objective, available infrastructure, required integrations and the actions that should follow a detection.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 text-black sm:py-24 lg:py-36">
        <div className={SHELL}>
          <SectionHeading supporting="Computer vision requirements vary according to the environment, the type of visual data available and the business outcome being pursued.">
            Computer Vision Solutions Built Around Your Requirements
          </SectionHeading>
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24" data-reveal>
            <p className="font-display text-[clamp(1.7rem,3vw,3rem)] leading-[1.02] font-semibold tracking-[-0.03em] uppercase">Designed for your environment and use case.</p>
            <p className="max-w-[780px] font-body text-lg leading-relaxed text-black/72">Oglas AI approaches computer vision development by first understanding the intended use case and the practical conditions in which the solution will operate. This includes identifying what needs to be detected or inspected, understanding the available camera infrastructure, defining the conditions that should trigger an alert and establishing how the resulting information should be presented to users. The solution can then be designed around those requirements, with appropriate testing to assess whether the configured workflow performs as intended.</p>
          </div>
        </div>
      </section>

      <section className="bg-lime py-20 text-black sm:py-24 lg:py-36">
        <div className={SHELL}>
          <SectionHeading>What Intelligent Computer Vision Can Improve</SectionHeading>
          <div className="grid gap-x-10 gap-y-0 border-t border-black/20 sm:grid-cols-2 lg:grid-cols-5" data-reveal>
            {outcomes.map((outcome, index) => (
              <div className="border-b border-black/20 py-7 lg:border-r lg:py-8 lg:pr-7 lg:last:border-r-0" key={outcome}>
                <span className="font-body text-xs font-semibold tracking-[0.12em]">0{index + 1}</span>
                <h3 className="mt-8 font-display text-[clamp(1.5rem,2.3vw,2.35rem)] leading-[0.98] font-semibold tracking-[-0.03em] uppercase">{outcome}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-off-white py-20 text-black sm:py-24 lg:py-36">
        <div className={SHELL}>
          <SectionHeading>From Visual Data to Working Computer Vision</SectionHeading>
          <div className="border-t border-black/15" data-reveal>
            {process.map(([title, body]) => (
              <article className="grid gap-4 border-b border-black/15 py-7 sm:py-9 lg:grid-cols-[0.35fr_1fr] lg:gap-20" key={title}>
                <h3 className="font-display text-[clamp(1.6rem,2.6vw,2.6rem)] leading-none font-semibold tracking-[-0.035em] uppercase">{title}</h3>
                <p className="max-w-[760px] font-body text-base leading-relaxed text-black/70 sm:text-lg">{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 text-black sm:py-24 lg:py-36">
        <div className={SHELL}>
          <SectionHeading>Frequently Asked Questions</SectionHeading>
          <div className="mx-auto max-w-[1200px] border-t border-black/15" data-reveal>
            {faqs.map(([question, answer]) => (
              <details className="group border-b border-black/15 py-6 sm:py-8" key={question}>
                <summary className="flex cursor-pointer list-none items-center justify-between gap-8 font-display text-[clamp(1.4rem,2.4vw,2.3rem)] leading-none font-semibold tracking-[-0.03em] uppercase marker:hidden">
                  {question}
                  <span aria-hidden="true" className="font-body text-2xl font-light transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="max-w-[880px] pt-5 font-body text-base leading-relaxed text-black/70 sm:text-lg">{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-dark px-5 py-24 text-center text-white sm:px-8 lg:py-40">
        <div className="mx-auto max-w-[1200px]" data-reveal>
          <h2 className="font-display text-[clamp(2.6rem,6.5vw,7rem)] leading-[0.9] font-extrabold tracking-[-0.05em] uppercase">Turn camera data into actionable business signals.</h2>
          <p className="mx-auto mt-8 max-w-[760px] font-body text-lg leading-relaxed text-white/70">Make your visual data more useful with computer vision solutions designed around your operational requirements.</p>
          <Link className="mt-10 inline-flex rounded-full border border-white/35 px-7 py-3 font-body text-sm tracking-[0.08em] uppercase transition-colors hover:bg-lime hover:text-black focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-lime" to="/contacts">
            Book a Free Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}
