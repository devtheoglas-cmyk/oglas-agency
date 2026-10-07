export type PlateKind = "brand" | "web" | "marketing" | "ux" | "dev";

export interface Capability {
  label: string;
  detail: string;
  children?: { label: string; detail: string }[];
}

export interface Step {
  title: string;
  detail: string;
}

export interface Service {
  id: string;
  title: string;
  /** Short name for compact navigation (the chapter dock). */
  short: string;
  /** One-line promise that sits under the chapter title. */
  promise: string;
  /** Three headline capabilities shown in the opening index. */
  highlights: [string, string, string];
  description: string[];
  capabilities: Capability[];
  steps: [Step, Step, Step, Step];
  deliverables: string[];
  fit: string[];
  /** Work slugs from data/works.ts that show this discipline in practice. */
  work: string[];
  plate: {
    kind: PlateKind;
    /** The four phases the animated plate plays through, in order. */
    phases: [string, string, string, string];
    label: string;
  };
}

export const servicesIntro =
  "We solve problems with creativity anywhere they exist, spanning advertising, brand strategy, experience, design, and much more.";

export const services: Service[] = [
  {
    id: "brand-design",
    title: "Brand Design",
    short: "Brand",
    promise: "A brand people recognise at a glance, and a system your team can use without us in the room.",
    highlights: ["Strategy & positioning", "Logo & identity", "Brand guidelines"],
    description: [
      "We shape identities that feel unmistakably yours — from the core idea and voice to a complete visual system built to scale. Every mark, colour, and type choice is made to hold up across print, packaging, screens, and space.",
      "It starts with strategy, not sketches. We get clear on who you serve, what you stand for and where you differ, then turn those answers into a mark, a palette, a typographic voice and a set of rules that keep every future touchpoint consistent.",
    ],
    capabilities: [
      {
        label: "Brand strategy & positioning",
        detail: "Audience, competitors and the one idea you should own, agreed in writing before design begins.",
      },
      {
        label: "Brand voice & messaging",
        detail: "How the brand speaks: tone, key messages, taglines and the words to steer clear of.",
      },
      {
        label: "Logo & wordmark",
        detail: "A primary mark plus the alternate lockups, icon and favicon it needs to work at every size.",
      },
      {
        label: "Visual identity system",
        detail: "Colour, typography, graphic elements, iconography and image style that behave as one family.",
      },
      {
        label: "Brand guidelines",
        detail: "A practical rulebook — usage, spacing, do's and don'ts — so anyone can apply the brand correctly.",
      },
      {
        label: "Art direction",
        detail: "Photography, illustration and layout direction that keep campaigns and content on-brand.",
      },
      {
        label: "Brand applications",
        detail: "Stationery, packaging, signage, merchandise and social templates that put the identity to work.",
      },
      {
        label: "Rebranding",
        detail: "Evolving an existing brand without throwing away the recognition you have already earned.",
      },
    ],
    steps: [
      {
        title: "Discovery",
        detail: "A workshop and market scan to understand the business, the audience and the competition.",
      },
      {
        title: "Strategy",
        detail: "Positioning, personality and voice, agreed with you before a single logo is drawn.",
      },
      {
        title: "Identity design",
        detail: "Concepts for the mark and the system, refined together through structured review rounds.",
      },
      {
        title: "System & handover",
        detail: "Guidelines, master artwork and templates delivered, ready for your team and partners.",
      },
    ],
    deliverables: [
      "Brand strategy summary",
      "Logo suite for print & digital",
      "Colour & type specification",
      "Brand guidelines",
      "Stationery & packaging artwork",
      "Social media templates",
    ],
    fit: [
      "You are launching a new business and need to look established from day one.",
      "Your brand has drifted and looks different on every channel.",
      "You have outgrown an identity that no longer reflects what you offer.",
    ],
    work: ["fishwala", "velvet-properties"],
    plate: {
      kind: "brand",
      phases: ["Position", "Mark", "Colour & type", "Apply"],
      label:
        "Animation: a positioning map finds an open space, a mark is constructed on a grid, a palette and type pair are chosen, and the identity is applied to a card and a phone.",
    },
  },
  {
    id: "web-design",
    title: "Web Design",
    short: "Web",
    promise: "Websites that look like your brand and guide every visitor to the next step.",
    highlights: ["Sitemap & wireframes", "Responsive design", "Clickable prototypes"],
    description: [
      "We design websites that carry the brand and guide the visitor — clear structure, confident typography, and layouts that feel effortless. Every screen is planned around what a user actually needs to do next.",
      "Each page is built around a goal — an enquiry, a booking, a purchase — and designed for the phone in someone's hand as carefully as the desktop. You review the whole site as a clickable prototype before development starts.",
    ],
    capabilities: [
      {
        label: "Site structure & sitemap",
        detail: "The pages you need, what lives on each one, and how visitors move between them.",
      },
      {
        label: "Wireframes",
        detail: "Low-fidelity layouts that settle content and hierarchy before visual design starts.",
      },
      {
        label: "Visual design",
        detail: "Every page designed in your brand, with typography, imagery and detail that feel finished.",
      },
      {
        label: "Responsive layouts",
        detail: "Desktop, tablet and mobile designed deliberately, not left to shrink on their own.",
      },
      {
        label: "Design system",
        detail: "Reusable components and styles, so new pages stay consistent as the site grows.",
      },
      {
        label: "Interactive prototypes",
        detail: "A clickable version of the site to walk through real journeys before a line of code.",
      },
      {
        label: "Landing pages",
        detail: "Focused, campaign-ready pages built around a single action.",
      },
      {
        label: "E-commerce design",
        detail: "Product listings, product pages, cart and checkout designed to make buying easy.",
      },
    ],
    steps: [
      {
        title: "Brief & sitemap",
        detail: "Goals, audiences and content gathered, then shaped into a sitemap you approve.",
      },
      {
        title: "Wireframes",
        detail: "Key pages laid out in grey so structure and priorities are settled early.",
      },
      {
        title: "Visual design",
        detail: "The brand applied page by page, on desktop and mobile, with your feedback at each round.",
      },
      {
        title: "Prototype & handoff",
        detail: "A clickable prototype for sign-off, then organised files and specs for development.",
      },
    ],
    deliverables: [
      "Sitemap",
      "Wireframes",
      "Desktop & mobile designs",
      "Clickable prototype",
      "Component library",
      "Developer-ready design files",
    ],
    fit: [
      "You are launching or relaunching a website.",
      "Your current site looks dated or is not turning visitors into enquiries.",
      "You need landing pages for a launch, a campaign or an event.",
    ],
    work: ["velvet-properties", "gymkha", "aspirant-wave", "snaxx"],
    plate: {
      kind: "web",
      phases: ["Sitemap", "Wireframe", "Design", "Responsive"],
      label:
        "Animation: a sitemap branches out, grey wireframe blocks lay out a page, the page fills with finished design while a cursor clicks the main button, and a phone version slides in beside it.",
    },
  },
  {
    id: "digital-marketing",
    title: "Digital Marketing",
    short: "Marketing",
    promise: "Content people stop for, and campaigns that turn that attention into enquiries.",
    highlights: ["Social media & video", "Meta & Google Ads", "SEO"],
    description: [
      "We turn a brand into content people stop for. From social campaigns to always-on creative, we plan, design, and produce work that stays consistent and keeps the audience engaged.",
      "Organic content builds the audience, paid campaigns put the right message in front of the right people, and search makes sure you are found when they look. We plan all three together and review the results with you, so the next month is smarter than the last.",
    ],
    capabilities: [
      {
        label: "Campaign strategy",
        detail: "Goals, audiences, channels and messaging planned before anything is posted or paid for.",
      },
      {
        label: "Social Media Marketing",
        detail: "Content calendars, post and story design, captions and community management.",
        children: [
          {
            label: "Video Production",
            detail: "Reels, short-form edits and shoots planned for the way each platform is watched.",
          },
        ],
      },
      {
        label: "Influencer Marketing",
        detail: "Finding creators who fit the brand, briefing them and managing the collaboration.",
      },
      {
        label: "Performance Marketing",
        detail: "Paid campaigns planned, built and optimised against clear goals.",
        children: [
          {
            label: "Meta Ads",
            detail: "Facebook and Instagram campaigns, audiences and creative testing.",
          },
          {
            label: "Google Ads",
            detail: "Search, display and YouTube campaigns that meet people while they are looking.",
          },
        ],
      },
      {
        label: "SEO",
        detail: "Technical fixes, keyword strategy and content that help you rank for the searches that matter.",
      },
    ],
    steps: [
      {
        title: "Audit & goals",
        detail: "Where your channels stand today, who you want to reach and what success should look like.",
      },
      {
        title: "Strategy & calendar",
        detail: "Channels, messages and a content calendar agreed before production starts.",
      },
      {
        title: "Create & launch",
        detail: "Posts, reels and ads designed, produced, approved and published on schedule.",
      },
      {
        title: "Measure & optimise",
        detail: "Results reviewed with you, and budgets and creative adjusted toward what performs.",
      },
    ],
    deliverables: [
      "Channel strategy",
      "Content calendar",
      "Post, story & reel creative",
      "Ad campaigns & creative variations",
      "Performance reports",
    ],
    fit: [
      "You post regularly but the audience is not growing.",
      "You are launching a product, a location or an event and need people to know.",
      "You want paid ads run by the same team that makes the creative.",
    ],
    work: ["fishwala"],
    plate: {
      kind: "marketing",
      phases: ["Plan", "Create", "Publish", "Measure"],
      label:
        "Animation: a content calendar fills with scheduled posts, a social post is designed on a phone, likes rise as it is published, and a results chart climbs.",
    },
  },
  {
    id: "ux-ui-design",
    title: "UX/UI Design",
    short: "UX/UI",
    promise: "Products that feel obvious to use, because the hard thinking happened first.",
    highlights: ["User research", "Flows & wireframes", "UI & usability testing"],
    description: [
      "We design products that are simple to use and satisfying to move through. Research, user flows, wireframes, and polished interfaces come together into an experience that feels obvious in the best way.",
      "We learn who your users are and what they are trying to do, find exactly where they get stuck, and design flows and interfaces that remove the friction. Then we put the prototype in front of real people before anything ships.",
    ],
    capabilities: [
      {
        label: "User research",
        detail: "Interviews, surveys and analytics reviews to understand real needs and behaviour.",
      },
      {
        label: "Journey mapping & user flows",
        detail: "Every step a user takes, mapped so gaps and friction become visible.",
      },
      {
        label: "Information architecture",
        detail: "Navigation and content organised the way users expect to find them.",
      },
      {
        label: "Wireframes",
        detail: "Screen layouts focused on structure and function before style.",
      },
      {
        label: "UI design",
        detail: "Polished, on-brand screens with every state considered: empty, loading, error and success.",
      },
      {
        label: "Interaction design",
        detail: "Micro-interactions and transitions that make the product feel responsive and alive.",
      },
      {
        label: "Usability testing",
        detail: "Real users try the prototype; we fix whatever trips them up.",
      },
      {
        label: "Design systems",
        detail: "Components, tokens and documentation that keep the product consistent as it grows.",
      },
    ],
    steps: [
      {
        title: "Research",
        detail: "Users, goals and pain points understood through conversations and data.",
      },
      {
        title: "Flows & structure",
        detail: "Journeys and information architecture mapped and agreed.",
      },
      {
        title: "Wireframe & prototype",
        detail: "Screens sketched, linked into a prototype and tested with users.",
      },
      {
        title: "UI & handoff",
        detail: "Final interface, every state designed, with specs and components for development.",
      },
    ],
    deliverables: [
      "Research findings",
      "User journey maps",
      "Wireframes",
      "High-fidelity UI",
      "Interactive prototype",
      "Design system & specs",
    ],
    fit: [
      "You are building a new app, platform or digital product.",
      "Users drop off before they finish signing up, booking or buying.",
      "Your product has grown feature by feature and no longer feels consistent.",
    ],
    work: ["gymkha", "aspirant-wave", "snaxx"],
    plate: {
      kind: "ux",
      phases: ["Research", "Flow", "Test", "Interface"],
      label:
        "Animation: research notes collect around a user, their journey is mapped screen to screen, a point of friction is found in testing and fixed, and the finished interface appears.",
    },
  },
  {
    id: "web-development",
    title: "Web Development",
    short: "Development",
    promise: "Fast, reliable builds that match the design pixel for pixel.",
    highlights: ["Front-end build", "CMS integration", "Performance & SEO"],
    description: [
      "We build fast, reliable websites and applications that match the design pixel for pixel. Clean, maintainable code, smooth performance, and everything wired up to work the way it should.",
      "Because the same studio designs and builds, nothing gets lost in handover. We test across devices and browsers, tune performance and search basics, and stay on hand after launch.",
    ],
    capabilities: [
      {
        label: "Front-end build",
        detail: "Responsive, accessible code that reproduces the approved design precisely.",
      },
      {
        label: "CMS integration",
        detail: "Edit pages, posts and listings yourself, without touching code.",
      },
      {
        label: "Forms & integrations",
        detail: "Contact forms, booking tools, analytics and the third-party services your business runs on.",
      },
      {
        label: "Animation & interaction",
        detail: "The motion in the design, built to run smoothly on every device.",
      },
      {
        label: "Performance & SEO",
        detail: "Fast load times, clean markup, metadata and structured data from day one.",
      },
      {
        label: "Testing & QA",
        detail: "Checked across browsers, devices and screen sizes before anything goes live.",
      },
      {
        label: "Launch setup",
        detail: "Domain, hosting, SSL and analytics configured for a smooth go-live.",
      },
      {
        label: "Ongoing support",
        detail: "Updates, fixes and improvements once the site is live.",
      },
    ],
    steps: [
      {
        title: "Technical plan",
        detail: "Platform, integrations and content structure decided around how your team will use the site.",
      },
      {
        title: "Build",
        detail: "Pages and components developed on a private preview link you can follow along with.",
      },
      {
        title: "Test & refine",
        detail: "Every page checked across devices and browsers, then tuned for speed and search.",
      },
      {
        title: "Launch & support",
        detail: "Go-live handled end to end, followed by a walkthrough and ongoing support.",
      },
    ],
    deliverables: [
      "Production website",
      "CMS access & walkthrough",
      "Analytics setup",
      "Cross-device QA",
      "Launch checklist",
      "Post-launch support",
    ],
    fit: [
      "You have designs and need them built properly.",
      "Your current site is slow, fragile or hard to update.",
      "You want design and development handled by one team.",
    ],
    work: [],
    plate: {
      kind: "dev",
      phases: ["Code", "Connect", "Test", "Launch"],
      label:
        "Animation: code is written line by line, the site is connected to a CMS and analytics, it is checked on desktop, tablet and phone, and it deploys and goes live.",
    },
  },
];

export interface ProcessStage {
  title: string;
  detail: string;
  youSee: string;
  weNeed: string;
}

export const processIntro =
  "Whichever services you choose, every project follows the same rhythm, so you always know what is happening, what comes next and what we need from you.";

export const processStages: ProcessStage[] = [
  {
    title: "Discover",
    detail: "We learn the business: goals, audience, competitors and what success should look like.",
    youSee: "A clear, written brief",
    weNeed: "An intro call and anything that exists today",
  },
  {
    title: "Define",
    detail: "Scope, strategy and plan are agreed, so everyone knows what is being made and why.",
    youSee: "A proposal with scope and timeline",
    weNeed: "Sign-off on scope",
  },
  {
    title: "Design",
    detail: "Concepts are explored and refined through structured review rounds.",
    youSee: "Designs and prototypes at each milestone",
    weNeed: "One consolidated round of feedback",
  },
  {
    title: "Build",
    detail: "Production: development, artwork, content and campaigns made ready for the world.",
    youSee: "Preview links and regular updates",
    weNeed: "Content and approvals",
  },
  {
    title: "Launch",
    detail: "We go live, hand over files and guidelines, and check that everything works as it should.",
    youSee: "The live product and every master file",
    weNeed: "Final approval",
  },
  {
    title: "Grow",
    detail: "We measure, optimise and support, so the work keeps performing after launch.",
    youSee: "Reports and recommendations",
    weNeed: "A regular check-in",
  },
];

export interface Faq {
  question: string;
  answer: string;
}

export const faqs: Faq[] = [
  {
    question: "Do I need to take all five services?",
    answer:
      "No. Many clients start with one discipline, such as a new identity or a website, and add others when they need them. Because one team covers all five, everything stays consistent when you do.",
  },
  {
    question: "How long does a project take?",
    answer:
      "It depends on scope: a focused landing page moves much faster than a full identity and website. After the discovery call we share a timeline with clear milestones before any work begins.",
  },
  {
    question: "How much does it cost?",
    answer:
      "Pricing follows scope. Once we understand what you need, we send a proposal that sets out the deliverables, timeline and cost, so there are no surprises later.",
  },
  {
    question: "What do you need from us to get started?",
    answer:
      "A conversation about your business and goals, plus anything that already exists: logos, brand files, website access, past campaigns. Starting from nothing is fine too.",
  },
  {
    question: "How involved will we be?",
    answer:
      "You review the work at every milestone. We present it, explain the thinking behind each decision and collect feedback in structured rounds, so decisions are made together.",
  },
  {
    question: "Do you work with clients outside the UAE?",
    answer:
      "Yes. With studios in Dubai and Calicut, India, we are set up to work across regions and time zones, running reviews over video calls and shared workspaces.",
  },
  {
    question: "What happens after launch?",
    answer:
      "We stay on hand. Ongoing support covers updates, fixes, new pages, campaign creative and performance reviews, so the work keeps improving after it goes live.",
  },
];
