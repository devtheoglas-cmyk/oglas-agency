export interface Service {
  title: string;
  description: string;
  deliverables: string[];
}

export const services: Service[] = [
  {
    title: "Brand Design",
    description:
      "We shape identities that feel unmistakably yours — from the core idea and voice to a complete visual system built to scale. Every mark, colour, and type choice is made to hold up across print, packaging, screens, and space.",
    deliverables: ["Logo & wordmark", "Visual identity system", "Brand guidelines", "Art direction"],
  },
  {
    title: "Web Design",
    description:
      "We design websites that carry the brand and guide the visitor — clear structure, confident typography, and layouts that feel effortless. Every screen is planned around what a user actually needs to do next.",
    deliverables: ["Responsive layouts", "Design system", "Interactive prototypes", "Landing pages"],
  },
  {
    title: "Digital Marketing",
    description:
      "We turn a brand into content people stop for. From social campaigns to always-on creative, we plan, design, and produce work that stays consistent and keeps the audience engaged.",
    deliverables: ["Social campaigns", "Content design", "Motion & video", "Ad creative"],
  },
  {
    title: "UX/UI Design",
    description:
      "We design products that are simple to use and satisfying to move through. Research, user flows, wireframes, and polished interfaces come together into an experience that feels obvious in the best way.",
    deliverables: ["User research", "Flows & wireframes", "UI design", "Usability testing"],
  },
  {
    title: "Web Development",
    description:
      "We build fast, reliable websites and applications that match the design pixel for pixel. Clean, maintainable code, smooth performance, and everything wired up to work the way it should.",
    deliverables: ["Front-end build", "CMS integration", "Performance & SEO", "Ongoing support"],
  },
];
