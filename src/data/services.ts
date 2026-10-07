export interface Capability {
  label: string;
  detail: string;
  children?: { label: string; detail: string }[];
}

export interface Step {
  title: string;
  detail: string;
}

export interface ReelImage {
  /** Image under /assets/services, cropped to 16:10 from existing portfolio artwork. */
  src: string;
  project: string;
  caption: string;
}

export interface Service {
  id: string;
  title: string;
  /** Short name for compact navigation (the chapter dock). */
  short: string;
  /** Three headline capabilities shown in the opening index. */
  highlights: [string, string, string];
  description: string[];
  capabilities: Capability[];
  steps: [Step, Step, Step, Step];
  deliverables: string[];
  fit: string[];
  /** Work slugs from data/works.ts that show this discipline in practice. */
  work: string[];
  /** Real project images shown beside the chapter, in reading order. */
  reel: ReelImage[];
}

export const servicesIntro =
  "We solve problems with creativity anywhere they exist, spanning advertising, brand strategy, experience, design, and much more.";

export const servicesSummary =
  "Brand design, web design, digital marketing, UX/UI design and web development, from our studios in Dubai and Calicut.";

export const services: Service[] = [
  {
    id: "brand-design",
    title: "Brand Design",
    short: "Brand",
    highlights: ["Strategy & positioning", "Logo & identity", "Brand guidelines"],
    description: [
      "We shape identities that feel unmistakably yours — from the core idea and voice to a complete visual system built to scale. Every mark, colour, and type choice is made to hold up across print, packaging, screens, and space.",
      "We start with research and positioning, then design the logo, colours, typography and supporting graphics, and finish with guidelines and templates your team can use day to day.",
    ],
    capabilities: [
      {
        label: "Brand strategy & positioning",
        detail: "Research into your audience and competitors, and a clear statement of what the brand stands for.",
      },
      { label: "Brand voice & messaging", detail: "Tone of voice, key messages and taglines." },
      { label: "Logo & wordmark", detail: "Primary logo, alternate versions, icon and favicon." },
      {
        label: "Visual identity system",
        detail: "Colour palette, typography, graphic elements, icons and photography style.",
      },
      {
        label: "Brand guidelines",
        detail: "A document showing how to use the brand correctly: logo spacing, colours, type and common mistakes.",
      },
      {
        label: "Art direction",
        detail: "Direction for photography, illustration and layouts across campaigns and content.",
      },
      {
        label: "Brand applications",
        detail: "Stationery, packaging, signage, merchandise and social media templates.",
      },
      { label: "Rebranding", detail: "Updating an existing brand while keeping what customers already recognise." },
    ],
    steps: [
      { title: "Discovery", detail: "Workshop and research into the business, audience and competitors." },
      { title: "Strategy", detail: "Positioning, personality and tone of voice agreed with you." },
      { title: "Identity design", detail: "Logo and visual system concepts, refined over review rounds." },
      { title: "Guidelines & handover", detail: "Brand guidelines, final artwork and templates delivered." },
    ],
    deliverables: [
      "Brand strategy summary",
      "Logo files for print and digital",
      "Colour and type specification",
      "Brand guidelines",
      "Stationery and packaging artwork",
      "Social media templates",
    ],
    fit: [
      "You are launching a new business.",
      "Your brand looks different across channels and needs to be made consistent.",
      "Your current identity no longer fits what the business offers.",
    ],
    work: ["fishwala", "velvet-properties"],
    reel: [
      { src: "/assets/services/brand-1.webp", project: "Velvet Properties", caption: "Logo construction" },
      { src: "/assets/services/brand-2.webp", project: "Fishwala", caption: "Colour palette" },
      { src: "/assets/services/brand-3.webp", project: "Fishwala", caption: "Typography" },
      { src: "/assets/services/brand-4.webp", project: "Fishwala", caption: "Storefront signage" },
      { src: "/assets/services/brand-5.webp", project: "Velvet Properties", caption: "Business cards" },
    ],
  },
  {
    id: "web-design",
    title: "Web Design",
    short: "Web",
    highlights: ["Sitemap & wireframes", "Responsive design", "Clickable prototypes"],
    description: [
      "We design websites that carry the brand and guide the visitor — clear structure, confident typography, and layouts that feel effortless. Every screen is planned around what a user actually needs to do next.",
      "Each page is planned around a goal, such as an enquiry, a booking or a sale, and designed for mobile as carefully as for desktop. You review the full site as a clickable prototype before development starts.",
    ],
    capabilities: [
      { label: "Site structure & sitemap", detail: "The pages the site needs and how visitors move between them." },
      { label: "Wireframes", detail: "Simple layouts that settle content and priorities before visual design." },
      { label: "Visual design", detail: "Every page designed in your brand style." },
      { label: "Responsive layouts", detail: "Desktop, tablet and mobile layouts designed separately." },
      { label: "Design system", detail: "Reusable components and styles that keep new pages consistent." },
      { label: "Interactive prototypes", detail: "A clickable version of the site for reviewing key journeys." },
      { label: "Landing pages", detail: "Single-purpose pages for campaigns and launches." },
      { label: "E-commerce design", detail: "Product listings, product pages, cart and checkout." },
    ],
    steps: [
      { title: "Brief & sitemap", detail: "Goals, audience and content gathered and turned into a sitemap." },
      { title: "Wireframes", detail: "Key pages laid out to agree structure and priorities." },
      { title: "Visual design", detail: "Pages designed for desktop and mobile, with feedback at each round." },
      { title: "Prototype & handoff", detail: "Clickable prototype for sign-off, then files and specs for development." },
    ],
    deliverables: [
      "Sitemap",
      "Wireframes",
      "Desktop and mobile designs",
      "Clickable prototype",
      "Component library",
      "Developer-ready design files",
    ],
    fit: [
      "You are launching or relaunching a website.",
      "Your current site looks dated or brings in few enquiries.",
      "You need landing pages for a launch, campaign or event.",
    ],
    work: ["velvet-properties", "gymkha", "aspirant-wave", "snaxx"],
    reel: [
      { src: "/assets/services/web-1.webp", project: "Velvet Properties", caption: "Homepage" },
      { src: "/assets/services/web-2.webp", project: "Gymkha", caption: "E-commerce website" },
      { src: "/assets/services/web-3.webp", project: "Aspirant Wave", caption: "Homepage" },
      { src: "/assets/services/web-4.webp", project: "Snaxx", caption: "Website" },
      { src: "/assets/services/web-5.webp", project: "Velvet Properties", caption: "Property management pages on mobile" },
    ],
  },
  {
    id: "digital-marketing",
    title: "Digital Marketing",
    short: "Marketing",
    highlights: ["Social media & video", "Meta & Google Ads", "SEO"],
    description: [
      "We turn a brand into content people stop for. From social campaigns to always-on creative, we plan, design, and produce work that stays consistent and keeps the audience engaged.",
      "We plan social media, paid advertising and SEO together, produce the content and ads, and review the results with you regularly to decide what to change.",
    ],
    capabilities: [
      { label: "Campaign strategy", detail: "Goals, audiences, channels and messages planned before launch." },
      {
        label: "Social Media Marketing",
        detail: "Content calendars, post and story design, captions and community management.",
        children: [
          { label: "Video Production", detail: "Reels and short-form video, from planning and shooting to editing." },
        ],
      },
      { label: "Influencer Marketing", detail: "Finding suitable creators, briefing them and managing collaborations." },
      {
        label: "Performance Marketing",
        detail: "Paid campaigns set up, run and optimised against agreed goals.",
        children: [
          { label: "Meta Ads", detail: "Facebook and Instagram campaigns, audiences and ad creative." },
          { label: "Google Ads", detail: "Search, display and YouTube campaigns." },
        ],
      },
      { label: "SEO", detail: "Technical fixes, keyword research and content to improve search rankings." },
    ],
    steps: [
      { title: "Audit & goals", detail: "Review of your current channels and agreement on goals." },
      { title: "Strategy & calendar", detail: "Channels, messages and a content calendar agreed before production." },
      { title: "Create & launch", detail: "Posts, videos and ads produced, approved and published." },
      { title: "Measure & optimise", detail: "Results reviewed with you, and budgets and content adjusted." },
    ],
    deliverables: [
      "Channel strategy",
      "Content calendar",
      "Posts, stories and reels",
      "Ad campaigns and ad creative",
      "Performance reports",
    ],
    fit: [
      "You post regularly but your audience is not growing.",
      "You are launching a product, location or event.",
      "You want ads run by the same team that makes the content.",
    ],
    work: ["fishwala"],
    reel: [
      { src: "/assets/services/marketing-1.webp", project: "Fishwala", caption: "Instagram profile" },
      { src: "/assets/services/marketing-2.webp", project: "Fishwala", caption: "Campaign lines" },
      { src: "/assets/services/marketing-3.webp", project: "Gymkha", caption: "Campaign visual" },
      { src: "/assets/services/marketing-4.webp", project: "Gymkha", caption: "Apparel campaign" },
      { src: "/assets/services/marketing-5.webp", project: "Fishwala", caption: "Outdoor billboard" },
    ],
  },
  {
    id: "ux-ui-design",
    title: "UX/UI Design",
    short: "UX/UI",
    highlights: ["User research", "Flows & wireframes", "UI & usability testing"],
    description: [
      "We design products that are simple to use and satisfying to move through. Research, user flows, wireframes, and polished interfaces come together into an experience that feels obvious in the best way.",
      "We research how your users behave, map their journeys, find where they get stuck and design screens that fix it. Prototypes are tested with real users before development.",
    ],
    capabilities: [
      { label: "User research", detail: "Interviews, surveys and analytics reviews." },
      { label: "Journey mapping & user flows", detail: "Each step a user takes, mapped to show gaps and friction." },
      {
        label: "Information architecture",
        detail: "Navigation and content structure based on how users look for things.",
      },
      { label: "Wireframes", detail: "Screen layouts focused on structure and function." },
      {
        label: "UI design",
        detail: "Final screens in your brand, including empty, loading, error and success states.",
      },
      { label: "Interaction design", detail: "Animations and transitions that give clear feedback." },
      { label: "Usability testing", detail: "Users try the prototype and we fix the problems they hit." },
      { label: "Design systems", detail: "Components, styles and documentation for consistent product design." },
    ],
    steps: [
      { title: "Research", detail: "Interviews and data to understand users and their problems." },
      { title: "Flows & structure", detail: "User journeys and navigation mapped and agreed." },
      { title: "Wireframe & prototype", detail: "Screens linked into a prototype and tested with users." },
      { title: "UI & handoff", detail: "Final interface and specs prepared for development." },
    ],
    deliverables: [
      "Research findings",
      "User journey maps",
      "Wireframes",
      "Final UI designs",
      "Interactive prototype",
      "Design system and specs",
    ],
    fit: [
      "You are building a new app or digital product.",
      "Users drop off before completing sign-up, booking or checkout.",
      "Your product has grown and the design is no longer consistent.",
    ],
    work: ["gymkha", "aspirant-wave", "snaxx"],
    reel: [
      { src: "/assets/services/ux-1.webp", project: "Gymkha", caption: "Shopping on mobile" },
      { src: "/assets/services/ux-2.webp", project: "Heartflo", caption: "Meditation app screen" },
      { src: "/assets/services/ux-3.webp", project: "Gymkha", caption: "Cart flow" },
      { src: "/assets/services/ux-4.webp", project: "Velvet Properties", caption: "Listing search and filters" },
      { src: "/assets/services/ux-5.webp", project: "Gymkha", caption: "Explore page" },
    ],
  },
  {
    id: "web-development",
    title: "Web Development",
    short: "Development",
    highlights: ["Front-end build", "CMS integration", "Performance & SEO"],
    description: [
      "We build fast, reliable websites and applications that match the design pixel for pixel. Clean, maintainable code, smooth performance, and everything wired up to work the way it should.",
      "Design and development happen in the same studio, so the build follows the approved design closely. Every site is tested across devices and browsers, set up for search and supported after launch.",
    ],
    capabilities: [
      { label: "Front-end build", detail: "Responsive, accessible code built from the approved design." },
      {
        label: "CMS integration",
        detail: "A content management system so your team can edit pages, posts and listings.",
      },
      {
        label: "Forms & integrations",
        detail: "Contact forms, booking tools, analytics and other third-party services.",
      },
      { label: "Animation & interaction", detail: "Motion from the design built to run smoothly on all devices." },
      { label: "Performance & SEO", detail: "Fast loading, clean markup, metadata and structured data." },
      { label: "Testing & QA", detail: "Checks across browsers, devices and screen sizes before launch." },
      { label: "Launch setup", detail: "Domain, hosting, SSL and analytics configured." },
      { label: "Ongoing support", detail: "Updates, fixes and improvements after launch." },
    ],
    steps: [
      { title: "Technical plan", detail: "Platform, integrations and content structure agreed." },
      { title: "Build", detail: "Pages developed on a private preview link you can review." },
      { title: "Test & refine", detail: "Testing across devices and browsers, plus speed and SEO checks." },
      { title: "Launch & support", detail: "Go-live, a CMS walkthrough and ongoing support." },
    ],
    deliverables: [
      "Production website",
      "CMS access and walkthrough",
      "Analytics setup",
      "Cross-device testing",
      "Launch checklist",
      "Post-launch support",
    ],
    fit: [
      "You have approved designs that need building.",
      "Your current site is slow or hard to update.",
      "You want one team to handle design and development.",
    ],
    work: [],
    reel: [
      { src: "/assets/services/dev-1.webp", project: "Mio Pizzeria", caption: "Website" },
      { src: "/assets/services/dev-2.webp", project: "Velvet Properties", caption: "Homepage on mobile" },
      { src: "/assets/services/dev-3.webp", project: "Velvet Properties", caption: "About page, desktop and mobile" },
      { src: "/assets/services/dev-4.webp", project: "Velvet Properties", caption: "Listings on mobile" },
      { src: "/assets/services/dev-5.webp", project: "Aspirant Wave", caption: "Homepage" },
    ],
  },
];

export interface ProcessStage {
  title: string;
  detail: string;
  youSee: string;
  weNeed: string;
}

export const processIntro = "Every project goes through the same six stages, whichever services it involves.";

export const processStages: ProcessStage[] = [
  {
    title: "Discover",
    detail: "We learn about the business, its goals, audience and competitors.",
    youSee: "A written brief",
    weNeed: "An intro call and any existing material",
  },
  {
    title: "Define",
    detail: "We agree scope, approach and timeline.",
    youSee: "A proposal with scope and timeline",
    weNeed: "Sign-off on scope",
  },
  {
    title: "Design",
    detail: "We present concepts and refine them over review rounds.",
    youSee: "Designs and prototypes at each milestone",
    weNeed: "Consolidated feedback",
  },
  {
    title: "Build",
    detail: "Development, artwork, content and campaigns are produced.",
    youSee: "Preview links and progress updates",
    weNeed: "Content and approvals",
  },
  {
    title: "Launch",
    detail: "We go live, hand over files and guidelines, and check everything works.",
    youSee: "The live product and final files",
    weNeed: "Final approval",
  },
  {
    title: "Grow",
    detail: "We measure results, make improvements and provide support.",
    youSee: "Reports and recommendations",
    weNeed: "Regular check-ins",
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
      "No. You can start with one service, such as a new identity or a website, and add others later. The same team handles all five, so the work stays consistent.",
  },
  {
    question: "How long does a project take?",
    answer: "It depends on the scope. After the first call we send a timeline with milestones before work begins.",
  },
  {
    question: "How much does it cost?",
    answer: "Pricing depends on scope. We send a proposal with deliverables, timeline and cost before any work starts.",
  },
  {
    question: "What do you need from us to start?",
    answer:
      "A call about your business and goals, plus any existing material such as logos, brand files, website access or past campaigns.",
  },
  {
    question: "How involved will we be?",
    answer:
      "You review the work at each milestone. We present it, explain the decisions and collect your feedback before moving on.",
  },
  {
    question: "Do you work with clients outside the UAE?",
    answer: "Yes. We have studios in Dubai and Calicut, India, and run reviews over video calls.",
  },
  {
    question: "What happens after launch?",
    answer: "We offer ongoing support: updates, fixes, new pages, campaign content and performance reviews.",
  },
];
