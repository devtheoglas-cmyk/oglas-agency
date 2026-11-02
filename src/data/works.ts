export type WorkTag = string;

export interface Work {
  slug: string;
  name: string;
  type: string; // e.g. "Premium Fresh Fish Store"
  year: string;
  tagline: string;
  tags: WorkTag[];
  image: string; // path under /assets
  alt?: string;
  hasCaseStudy?: boolean;
  caseStudySlug?: string;
}

const DEFAULT_TAGS: WorkTag[] = ["Branding", "Brand strategy", "Graphics", "Visual Identity"];
const WEB_TAGS: WorkTag[] = ["Branding", "Web design", "Graphics", "Visual Identity"];

// Home "CREATIVITY / CHANGE" brand-work grid (real Figma copy + optimized assets).
export const brandWorks: Work[] = [
  {
    slug: "fishwala",
    name: "Fishwala",
    type: "Brand Identity & Visual Design for a Premium Fresh Fish Store",
    year: "2025",
    tagline: "A reminder of what honesty feels like,",
    tags: DEFAULT_TAGS,
    image: "/assets/home/cards/fishwala-stickers.webp",
    alt: "Fishwala brand identity featuring illustrated fish characters, creative stickers and visual branding for a premium fresh fish store.",
    hasCaseStudy: true,
  },
  {
    slug: "yellow-and",
    name: "Yellow And",
    type: "Creative Campaign Design for Stay Marketplace",
    year: "2025",
    tagline: "A reminder of what honesty feels like,",
    tags: DEFAULT_TAGS,
    image: "/assets/home/cards/yellowand-summer.webp",
    alt: "Yellow And creative advertising campaign featuring a summer swimming pool promotion for Stay Marketplace.",
  },
  {
    slug: "hopinz",
    name: "Hopinz",
    type: "Brand Identity Design for a Supermarket",
    year: "2025",
    tagline: "A reminder of what honesty feels like,",
    tags: DEFAULT_TAGS,
    image: "/assets/home/cards/hopinz.webp",
    alt: "Hopinz supermarket logo and brand identity design displayed in a beach-inspired visual setting.",
  },
  {
    slug: "offbean",
    name: "Offbean",
    type: "Coffee Brand Identity & Packaging Design",
    year: "2025",
    tagline: "A reminder of what honesty feels like,",
    tags: DEFAULT_TAGS,
    image: "/assets/home/cards/offbean-drippers.webp",
    alt: "Offbean coffee brand packaging design featuring colourful coffee dripper boxes and product branding.",
  },
  {
    slug: "velvet-properties",
    name: "Velvet Properties",
    type: "Real Estate Branding & Website Design",
    year: "2025",
    tagline: "A reminder of what honesty feels like,",
    tags: WEB_TAGS,
    image: "/assets/home/cards/velvet-properties.webp",
    alt: "Velvet Properties real estate website design displayed on mobile screens with a premium property brand identity.",
    hasCaseStudy: true,
  },
];

// Home "REFRAME / INTERACTION" product/app grid.
export const productWorks: Work[] = [
  {
    slug: "mio-pizzeria",
    name: "Mio Pizzeria",
    type: "Restaurant Branding & Creative Design",
    year: "2025",
    tagline: "A reminder of what honesty feels like,",
    tags: DEFAULT_TAGS,
    image: "/assets/home/cards/mio-pizzeria.webp",
    alt: "Mio Pizzeria website design displayed on a laptop, showcasing the restaurant's digital brand experience.",
  },
  {
    slug: "gymkha",
    name: "Gymkha",
    type: "Sportswear Branding & Website Design",
    year: "2025",
    tagline: "Take the first step.",
    tags: WEB_TAGS,
    image: "/assets/home/cards/gymkha.webp",
    alt: "Gymkha sportswear brand website and mobile experience displayed on a smartphone.",
    hasCaseStudy: true,
  },
  {
    slug: "aspirant-wave",
    name: "Aspirant Wave",
    type: "Education Consultancy Branding & Website Design",
    year: "2025",
    tagline: "A wave of possibilities.",
    tags: WEB_TAGS,
    image: "/assets/home/cards/aspirant-wave.webp",
    alt: "Aspirant Wave education consultancy website design displayed on a laptop screen.",
    hasCaseStudy: true,
  },
  {
    slug: "velvet-properties-2",
    name: "Velvet Properties",
    type: "Real Estate Branding & Website Design",
    year: "2025",
    tagline: "A reminder of what honesty feels like,",
    tags: WEB_TAGS,
    image: "/assets/home/cards/velvet-properties.webp",
    alt: "Velvet Properties real estate website design displayed on mobile screens with a premium property brand identity.",
    hasCaseStudy: true,
    caseStudySlug: "velvet-properties",
  },
  {
    slug: "heartflo",
    name: "Heartflo",
    type: "Health App Interface & Visual Design",
    year: "2025",
    tagline: "A reminder of what honesty feels like,",
    tags: DEFAULT_TAGS,
    image: "/assets/home/cards/heartflo.webp",
    alt: "Heartflo health application UI design featuring mobile screens, wellness content and interactive user interfaces.",
  },
  {
    slug: "snaxx",
    name: "Snaxx",
    type: "Vending Machine Brand & Digital Design",
    year: "2025",
    tagline: "Quick, simple, accessible.",
    tags: WEB_TAGS,
    image: "/assets/home/cards/snaxx.webp",
    alt: "Snaxx vending machine branding and digital design displayed on a laptop screen.",
    hasCaseStudy: true,
  },
];

// Two featured cards under "VISUALS CREATED TO BE FELT".
export const featuredWorks: Work[] = brandWorks.slice(0, 2);
