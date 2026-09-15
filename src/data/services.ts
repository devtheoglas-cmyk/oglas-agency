export interface Deliverable {
  label: string;
  children?: string[];
}

export interface Service {
  title: string;
  description: string;
  deliverables: Deliverable[];
}

export const services: Service[] = [
  {
    title: "Brand Design",
    description:
      "We shape identities that feel unmistakably yours — from the core idea and voice to a complete visual system built to scale. Every mark, colour, and type choice is made to hold up across print, packaging, screens, and space.",
    deliverables: [
      { label: "Logo & wordmark" },
      { label: "Visual identity system" },
      { label: "Brand guidelines" },
      { label: "Art direction" },
    ],
  },
  {
    title: "Web Design",
    description:
      "We design websites that carry the brand and guide the visitor — clear structure, confident typography, and layouts that feel effortless. Every screen is planned around what a user actually needs to do next.",
    deliverables: [
      { label: "Responsive layouts" },
      { label: "Design system" },
      { label: "Interactive prototypes" },
      { label: "Landing pages" },
    ],
  },
  {
    title: "Digital Marketing",
    description:
      "We turn a brand into content people stop for. From social campaigns to always-on creative, we plan, design, and produce work that stays consistent and keeps the audience engaged.",
    deliverables: [
      { label: "Social Media Marketing", children: ["Video Production"] },
      { label: "Influencer Marketing" },
      { label: "Performance Marketing", children: ["Meta Ads", "Google Ads"] },
      { label: "SEO" },
    ],
  },
  {
    title: "UX/UI Design",
    description:
      "We design products that are simple to use and satisfying to move through. Research, user flows, wireframes, and polished interfaces come together into an experience that feels obvious in the best way.",
    deliverables: [
      { label: "User research" },
      { label: "Flows & wireframes" },
      { label: "UI design" },
      { label: "Usability testing" },
    ],
  },
  {
    title: "Web Development",
    description:
      "We build fast, reliable websites and applications that match the design pixel for pixel. Clean, maintainable code, smooth performance, and everything wired up to work the way it should.",
    deliverables: [
      { label: "Front-end build" },
      { label: "CMS integration" },
      { label: "Performance & SEO" },
      { label: "Ongoing support" },
    ],
  },
];
