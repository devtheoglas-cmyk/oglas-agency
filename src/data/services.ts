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
  alt?: string;
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
  "Branding, Web Design & Digital Marketing Services in Dubai";

export const servicesSummary = [
  "Oglas Global brings together brand design, web design, digital marketing, UX/UI design and web development to help businesses build stronger brands and meaningful digital experiences.",
  "Our team works from Dubai, UAE, delivering creative solutions for businesses across different markets.",
];

export const services: Service[] = [
  {
    id: "brand-design",
    title: "Brand Design",
    short: "Brand",
    highlights: ["Strategy & positioning", "Logo & identity", "Brand guidelines"],
    description: [
      "We create distinctive brand identities through strategic branding, thoughtful design and creative direction. From understanding your business positioning and audience to developing logos, visual identities and brand guidelines, we build consistent brand systems that communicate what your business stands for.",
      "Our branding process considers how your identity appears across digital platforms, print, packaging and physical spaces, helping your brand maintain a recognizable presence as your business grows.",
    ],
    capabilities: [
      {
        label: "Brand strategy & positioning",
        detail: "Research into your business, audience and competitors to establish a clear brand position.",
      },
      { label: "Brand voice & messaging", detail: "Developing your brand's tone of voice, key messages and taglines." },
      { label: "Logo & wordmark", detail: "Creating primary logos, alternate versions, icons and favicons." },
      {
        label: "Visual identity system",
        detail: "Developing color palettes, typography, graphic elements, icons and photography direction.",
      },
      {
        label: "Brand guidelines",
        detail: "Documenting logo usage, spacing, colors, typography and other essential brand rules.",
      },
      {
        label: "Art direction",
        detail: "Establishing the visual direction for photography, illustration and layouts across campaigns and content.",
      },
      {
        label: "Brand applications",
        detail: "Applying the identity across stationery, packaging, signage, merchandise and social media templates.",
      },
      { label: "Rebranding", detail: "Updating an existing brand identity while retaining the elements customers already recognize." },
    ],
    steps: [
      { title: "Discovery", detail: "Research into your business, audience and competitors." },
      { title: "Strategy", detail: "Agreeing on brand positioning, personality and tone of voice." },
      { title: "Identity Design", detail: "Developing and refining logo and visual identity concepts." },
      { title: "Guidelines & Handover", detail: "Delivering brand guidelines, final artwork and templates." },
    ],
    deliverables: [
      "Brand strategy summary",
      "Logo files for print and digital",
      "Color and typography specifications",
      "Brand guidelines",
      "Stationery and packaging artwork",
      "Social media templates",
    ],
    fit: [
      "You're launching a new business and need a distinctive identity.",
      "Your brand looks inconsistent across different channels.",
      "Your existing identity no longer represents what your business offers.",
    ],
    work: ["fishwala", "velvet-properties"],
    reel: [
      { src: "/assets/services/brand-1.webp", project: "Velvet Properties", caption: "Logo construction", alt: "Velvet Properties logo construction showing geometric logo development lines." },
      { src: "/assets/services/brand-2.webp", project: "Fishwala", caption: "Colour palette", alt: "Fishwala brand colour palette featuring navy, white, blue and orange." },
      { src: "/assets/services/brand-3.webp", project: "Fishwala", caption: "Typography" },
      { src: "/assets/services/brand-4.webp", project: "Fishwala", caption: "Storefront signage", alt: "Fishwala storefront signage displaying the brand logo and illustrated fish mascot." },
      { src: "/assets/services/brand-5.webp", project: "Velvet Properties", caption: "Business cards", alt: "Velvet Properties branded business cards featuring a dark green visual identity." },
    ],
  },
  {
    id: "web-design",
    title: "Web Design",
    short: "Web",
    highlights: ["Sitemap & wireframes", "Responsive design", "Clickable prototypes"],
    description: [
      "Our web design services focus on creating responsive, user-friendly websites that communicate your brand and guide visitors towards meaningful actions. From website structure and wireframes to visual design and interactive prototypes, we plan each page around what your audience needs to do next.",
      "Every website design considers usability across desktop, tablet and mobile. We also create clickable prototypes so you can review important pages and user journeys before development begins.",
    ],
    capabilities: [
      { label: "Site Structure & Sitemap", detail: "Planning the pages your website needs and how visitors move between them." },
      { label: "Wireframes", detail: "Creating page layouts that establish content hierarchy and priorities before visual design." },
      { label: "Visual Design", detail: "Designing website pages that reflect your brand identity and visual direction." },
      { label: "Responsive Layouts", detail: "Developing separate design considerations for desktop, tablet and mobile screens." },
      { label: "Design System", detail: "Establishing reusable components and styles to maintain consistency across pages." },
      { label: "Interactive Prototypes", detail: "Building clickable website previews to review important interactions and user journeys." },
      { label: "Landing Pages", detail: "Designing focused pages for marketing campaigns, product launches and events." },
      { label: "E-commerce Design", detail: "Planning product listings, product pages, shopping carts and checkout experiences." },
    ],
    steps: [
      { title: "Brief & Sitemap", detail: "Gathering business goals, audience information and content requirements." },
      { title: "Wireframes", detail: "Mapping important pages and agreeing on website structure." },
      { title: "Visual Design", detail: "Designing desktop and mobile pages with feedback at each stage." },
      { title: "Prototype & Handoff", detail: "Preparing clickable prototypes and design files for development." },
    ],
    deliverables: [
      "Website sitemap",
      "Page wireframes",
      "Desktop and mobile designs",
      "Clickable website prototype",
      "Component library",
      "Developer-ready design files",
    ],
    fit: [
      "You're launching or redesigning a business website.",
      "Your current website looks outdated or generates few enquiries.",
      "You need dedicated landing pages for a campaign, launch or event.",
    ],
    work: ["velvet-properties", "gymkha", "aspirant-wave", "snaxx"],
    reel: [
      { src: "/assets/services/web-1.webp", project: "Velvet Properties", caption: "Homepage", alt: "Velvet Properties real estate homepage website design displayed on a desktop screen." },
      { src: "/assets/services/web-2.webp", project: "Gymkha", caption: "E-commerce website", alt: "Gymkha sportswear e-commerce website design displayed in a portfolio presentation." },
      { src: "/assets/services/web-3.webp", project: "Aspirant Wave", caption: "Homepage" },
      { src: "/assets/services/web-4.webp", project: "Snaxx", caption: "Website", alt: "Snaxx vending machine website design displayed on a laptop mockup." },
      { src: "/assets/services/web-5.webp", project: "Velvet Properties", caption: "Property management pages on mobile", alt: "Velvet Properties property listing page with search and property filters." },
    ],
  },
  {
    id: "digital-marketing",
    title: "Digital Marketing",
    short: "Marketing",
    highlights: ["Social media & video", "Meta & Google Ads", "SEO"],
    description: [
      "Our digital marketing services help businesses strengthen their online presence through strategic campaigns, creative content and performance-focused advertising.",
      "From social media marketing and video production to Meta Ads, Google Ads and SEO, we plan and manage digital campaigns designed to reach relevant audiences, build engagement and support business growth.",
      "We bring content creation, advertising and search optimization together, reviewing campaign performance and identifying opportunities to improve.",
    ],
    capabilities: [
      { label: "Campaign Strategy", detail: "Planning goals, target audiences, channels and key messages before launching campaigns." },
      {
        label: "Social Media Marketing",
        detail: "Creating content calendars, social media posts, stories, captions and community management plans.",
        children: [
          { label: "Video Production", detail: "Producing reels and short-form videos from planning and shooting to editing." },
        ],
      },
      { label: "Influencer Marketing", detail: "Identifying suitable creators, preparing campaign briefs and managing collaborations." },
      {
        label: "Performance Marketing",
        detail: "Setting up, managing and optimizing paid campaigns against agreed objectives.",
        children: [
          { label: "Meta Ads", detail: "Planning and managing Facebook and Instagram campaigns, including audience targeting and creative development." },
          { label: "Google Ads", detail: "Managing search, display and YouTube advertising campaigns." },
        ],
      },
      { label: "SEO", detail: "Supporting search visibility through technical improvements, keyword research and relevant content development." },
    ],
    steps: [
      { title: "Audit & Goals", detail: "Reviewing existing channels, campaigns and business objectives." },
      { title: "Strategy & Calendar", detail: "Agreeing on channels, messages and content schedules." },
      { title: "Create & Launch", detail: "Producing posts, videos and advertisements for approval and publication." },
      { title: "Measure & Optimize", detail: "Reviewing results and refining campaigns, budgets and content." },
    ],
    deliverables: [
      "Channel strategy",
      "Content calendar",
      "Social media posts, stories and reels",
      "Advertising campaigns and creative assets",
      "Performance reports",
    ],
    fit: [
      "You're publishing content regularly but your audience isn't growing.",
      "You're launching a product, business location or event.",
      "You want advertising and creative production managed by the same team.",
    ],
    work: ["fishwala"],
    reel: [
      { src: "/assets/services/marketing-1.webp", project: "Fishwala", caption: "Instagram profile", alt: "Fishwala Instagram profile showing its brand identity and social media presentation." },
      { src: "/assets/services/marketing-2.webp", project: "Fishwala", caption: "Campaign lines", alt: "Fishwala promotional campaign graphics featuring branded advertising messages." },
      { src: "/assets/services/marketing-3.webp", project: "Gymkha", caption: "Campaign visual" },
      { src: "/assets/services/marketing-4.webp", project: "Gymkha", caption: "Apparel campaign", alt: "Gymkha sportswear apparel campaign featuring bold branded typography." },
      { src: "/assets/services/marketing-5.webp", project: "Fishwala", caption: "Outdoor billboard", alt: "Fishwala outdoor advertising billboard featuring the Fresh Doesn't Shout campaign." },
    ],
  },
  {
    id: "ux-ui-design",
    title: "UX/UI Design",
    short: "UX/UI",
    highlights: ["User research", "Flows & wireframes", "UI & usability testing"],
    description: [
      "Our UX/UI design services focus on creating intuitive digital products that are easy to navigate and enjoyable to use. Through user research, journey mapping, wireframing and interface design, we develop experiences that help people complete tasks with clarity and confidence.",
      "We study how users interact with digital products, identify points of friction and refine the experience through interactive prototypes and usability testing before development.",
    ],
    capabilities: [
      { label: "User Research", detail: "Using interviews, surveys and analytics reviews to understand user needs and behavior." },
      { label: "Journey Mapping & User Flows", detail: "Mapping user journeys to identify gaps, friction and opportunities to improve interactions." },
      {
        label: "Information Architecture",
        detail: "Planning navigation and content structures around how users find information.",
      },
      { label: "Wireframes", detail: "Creating screen layouts that establish structure, content priorities and functionality." },
      {
        label: "UI Design",
        detail: "Designing final interfaces, including empty, loading, error and success states.",
      },
      { label: "Interaction Design", detail: "Planning animations and transitions that provide clear feedback during interactions." },
      { label: "Usability Testing", detail: "Testing prototypes with users and refining designs based on identified problems." },
      { label: "Design Systems", detail: "Creating reusable components, styles and documentation for consistent digital product design." },
    ],
    steps: [
      { title: "Research", detail: "Interviews and data analysis to understand users and their problems." },
      { title: "Flows & Structure", detail: "Mapping user journeys and agreeing on navigation." },
      { title: "Wireframe & Prototype", detail: "Connecting screens into interactive prototypes and testing important journeys." },
      { title: "UI & Handoff", detail: "Delivering final interface designs and specifications for development." },
    ],
    deliverables: [
      "Research findings",
      "User journey maps",
      "Wireframes",
      "Final UI designs",
      "Interactive prototype",
      "Design system and specifications",
    ],
    fit: [
      "You're building a new application or digital product.",
      "Users drop off before completing registration, booking or checkout.",
      "Your product has grown and its interface is no longer consistent.",
    ],
    work: ["gymkha", "aspirant-wave", "snaxx"],
    reel: [
      { src: "/assets/services/ux-1.webp", project: "Gymkha", caption: "Shopping on mobile", alt: "Gymkha mobile shopping interface displayed on a smartphone." },
      { src: "/assets/services/ux-2.webp", project: "Heartflo", caption: "Meditation app screen", alt: "Heartflo meditation application onboarding screen showing its mobile UI." },
      { src: "/assets/services/ux-3.webp", project: "Gymkha", caption: "Cart flow" },
      { src: "/assets/services/ux-4.webp", project: "Velvet Properties", caption: "Listing search and filters", alt: "Velvet Properties property search interface with desktop and mobile layouts." },
      { src: "/assets/services/ux-5.webp", project: "Gymkha", caption: "Explore page", alt: "Gymkha Explore Fits digital shopping page displayed in a UI design presentation." },
    ],
  },
  {
    id: "web-development",
    title: "Web Development",
    short: "Development",
    highlights: ["Front-end build", "CMS integration", "Performance & SEO"],
    description: [
      "Our web development services focus on building fast, reliable and responsive websites that bring approved designs to life. From front-end development and CMS integration to third-party connections, testing and launch configuration, we develop websites designed to work smoothly across devices.",
      "Design and development happen within the same studio, allowing the development process to follow the approved visual direction closely. Every website is tested across devices and browsers, with performance, technical SEO and post-launch support considered throughout the process.",
    ],
    capabilities: [
      { label: "Front-end Development", detail: "Building responsive and accessible interfaces from approved designs." },
      {
        label: "CMS Integration",
        detail: "Integrating content management systems so your team can update website pages, posts and listings.",
      },
      {
        label: "Forms & Integrations",
        detail: "Connecting contact forms, booking tools, analytics and other third-party services.",
      },
      { label: "Animation & Interaction", detail: "Implementing animations and interactive elements that work smoothly across devices." },
      { label: "Performance & SEO", detail: "Working on loading speed, clean markup, metadata and structured data." },
      { label: "Testing & Quality Assurance", detail: "Checking website functionality across browsers, devices and screen sizes before launch." },
      { label: "Launch Setup", detail: "Configuring domain, hosting, SSL and analytics." },
      { label: "Ongoing Support", detail: "Providing updates, fixes and improvements after launch." },
    ],
    steps: [
      { title: "Technical Plan", detail: "Agreeing on the platform, integrations and content structure." },
      { title: "Build", detail: "Developing website pages on a private preview link for review." },
      { title: "Test & Refine", detail: "Testing across devices and browsers, followed by speed and SEO checks." },
      { title: "Launch & Support", detail: "Publishing the website, providing a CMS walkthrough and supporting it after launch." },
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
      "You have approved website designs that need development.",
      "Your current website is slow or difficult to update.",
      "You want one team to manage both design and development.",
    ],
    work: [],
    reel: [
      { src: "/assets/services/dev-1.webp", project: "Mio Pizzeria", caption: "Website", alt: "Mio Pizzeria website displayed on a laptop mockup." },
      { src: "/assets/services/dev-2.webp", project: "Velvet Properties", caption: "Homepage on mobile" },
      { src: "/assets/services/dev-3.webp", project: "Velvet Properties", caption: "About page, desktop and mobile", alt: "Velvet Properties responsive About page displayed in desktop and mobile layouts." },
      { src: "/assets/services/dev-4.webp", project: "Velvet Properties", caption: "Listings on mobile" },
      { src: "/assets/services/dev-5.webp", project: "Aspirant Wave", caption: "Homepage", alt: "Aspirant Wave education consultancy homepage displayed in a website design presentation." },
    ],
  },
];

export interface ProcessStage {
  title: string;
  detail: string;
  youSee: string;
  weNeed: string;
}

export const processIntro =
  "Every project follows six stages, whatever services it involves. This process keeps expectations clear, gives you opportunities to review progress and helps our team move from the initial idea to launch and ongoing improvement.";

export const processStages: ProcessStage[] = [
  {
    title: "Discover",
    detail: "We learn about your business, goals, target audience and competitors.",
    youSee: "A written project brief.",
    weNeed: "An introductory call and any existing relevant materials.",
  },
  {
    title: "Define",
    detail: "We agree on the project scope, approach and timeline before work begins.",
    youSee: "A proposal outlining the scope and timeline.",
    weNeed: "Your approval of the proposed scope.",
  },
  {
    title: "Design",
    detail: "We present concepts, explain our approach and refine the work through review rounds.",
    youSee: "Designs and prototypes at each milestone",
    weNeed: "Consolidated feedback",
  },
  {
    title: "Build",
    detail: "Development, artwork, content and campaign materials are produced according to the agreed direction.",
    youSee: "Preview links and progress updates.",
    weNeed: "Required content and approvals.",
  },
  {
    title: "Launch",
    detail: "We go live, hand over final files and guidelines, and check that everything works as expected.",
    youSee: "The live product and final deliverables.",
    weNeed: "Final approval.",
  },
  {
    title: "Grow",
    detail: "We review results, identify improvement opportunities and provide ongoing support where agreed.",
    youSee: "Reports and recommendations",
    weNeed: "Regular check-ins and feedback.",
  },
];

export interface Faq {
  question: string;
  answer: string;
}

export const faqs: Faq[] = [
  {
    question: "What services does the agency offer?",
    answer:
      "We offer five main service categories: Brand Design, Web Design, Digital Marketing, UX/UI Design and Web Development. You can choose an individual service or combine multiple services depending on your business needs.",
  },
  {
    question: "Do I need to take all five services?",
    answer:
      "No. You can start with one service, such as a new brand identity or website, and add other services later. Our team can coordinate the work across all five service categories to maintain consistency.",
  },
  {
    question: "How long does a project take?",
    answer:
      "Project timelines depend on the scope, deliverables and requirements. After our initial discussion, we'll provide a proposed timeline with milestones before work begins.",
  },
  {
    question: "How much do your services cost?",
    answer:
      "Pricing depends on the project scope and the deliverables involved. We prepare a proposal outlining the agreed work, timeline and cost before starting the project.",
  },
  {
    question: "What do you need from us to get started?",
    answer:
      "We begin with a conversation about your business and goals. Existing materials such as logos, brand files, website access and previous campaigns can also help us understand your requirements.",
  },
  {
    question: "How involved will we be?",
    answer:
      "You'll have opportunities to review the work at each agreed milestone. We'll present the concepts, explain the decisions and collect your feedback before moving to the next stage.",
  },
  {
    question: "Do you work with clients outside the UAE?",
    answer:
      "Yes. Our studio is located in Dubai, UAE. Project discussions, reviews and approvals can also be managed through video calls.",
  },
  {
    question: "What happens after the project launches?",
    answer:
      "We offer ongoing support where agreed, including updates, fixes, new website pages, campaign content and performance reviews.",
  },
];
