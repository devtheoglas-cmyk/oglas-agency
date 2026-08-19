export type WorkTag = string;

export interface Work {
  slug: string;
  name: string;
  type: string; // e.g. "Premium Fresh Fish Store"
  year: string;
  tagline: string;
  tags: WorkTag[];
  image: string; // path under /assets
  hasCaseStudy?: boolean;
}

const DEFAULT_TAGS: WorkTag[] = ["Branding", "Brand strategy", "Graphics", "Visual Identity"];
const WEB_TAGS: WorkTag[] = ["Branding", "Web design", "Graphics", "Visual Identity"];

// Home "CREATIVITY / CHANGE" brand-work grid (real Figma copy + optimized assets).
export const brandWorks: Work[] = [
  {
    slug: "fishwala",
    name: "Fishwala",
    type: "Premium Fresh Fish Store",
    year: "2025",
    tagline: "A reminder of what honesty feels like,",
    tags: DEFAULT_TAGS,
    image: "/assets/home/cards/fishwala-stickers.webp",
    hasCaseStudy: true,
  },
  {
    slug: "yellow-and",
    name: "Yellow And",
    type: "Stay Marketplace",
    year: "2025",
    tagline: "A reminder of what honesty feels like,",
    tags: DEFAULT_TAGS,
    image: "/assets/home/cards/yellowand-summer.webp",
  },
  {
    slug: "hopinz",
    name: "Hopinz",
    type: "Supermarket",
    year: "2025",
    tagline: "A reminder of what honesty feels like,",
    tags: DEFAULT_TAGS,
    image: "/assets/home/cards/hopinz.webp",
  },
  {
    slug: "offbean",
    name: "Offbean",
    type: "Coffee Cafe",
    year: "2025",
    tagline: "A reminder of what honesty feels like,",
    tags: DEFAULT_TAGS,
    image: "/assets/home/cards/offbean-drippers.webp",
  },
  {
    slug: "velvet-properties",
    name: "Velvet Properties",
    type: "Real Estate Broker",
    year: "2025",
    tagline: "A reminder of what honesty feels like,",
    tags: WEB_TAGS,
    image: "/assets/home/cards/velvet-leather.webp",
  },
  {
    slug: "fishwala-2",
    name: "Fishwala",
    type: "Premium Fresh Fish Store",
    year: "2025",
    tagline: "A reminder of what honesty feels like,",
    tags: DEFAULT_TAGS,
    image: "/assets/home/cards/fishwala-apparel.webp",
    hasCaseStudy: true,
  },
];

// Home "REFRAME / INTERACTION" product/app grid.
export const productWorks: Work[] = [
  {
    slug: "mio-pizzeria",
    name: "Mio Pizzeria",
    type: "Pizza Restaurant",
    year: "2025",
    tagline: "A reminder of what honesty feels like,",
    tags: DEFAULT_TAGS,
    image: "/assets/home/cards/mio-pizzeria.webp",
  },
  {
    slug: "gymkha",
    name: "Gymkha",
    type: "Gym wear",
    year: "2025",
    tagline: "A reminder of what honesty feels like,",
    tags: DEFAULT_TAGS,
    image: "/assets/home/cards/gymkha.webp",
  },
  {
    slug: "aspirant-wave",
    name: "Aspirant Wave",
    type: "Education Consultancy",
    year: "2025",
    tagline: "A reminder of what honesty feels like,",
    tags: DEFAULT_TAGS,
    image: "/assets/home/cards/aspirant-wave.webp",
  },
  {
    slug: "velvet-properties-2",
    name: "Velvet Properties",
    type: "Real Estate Broker",
    year: "2025",
    tagline: "A reminder of what honesty feels like,",
    tags: WEB_TAGS,
    image: "/assets/home/cards/velvet-properties.webp",
  },
  {
    slug: "heartflo",
    name: "Heartflo",
    type: "Health App",
    year: "2025",
    tagline: "A reminder of what honesty feels like,",
    tags: DEFAULT_TAGS,
    image: "/assets/home/cards/heartflo.webp",
  },
  {
    slug: "snaxx",
    name: "Snaxx",
    type: "Vending Machine",
    year: "2025",
    tagline: "A reminder of what honesty feels like,",
    tags: DEFAULT_TAGS,
    image: "/assets/home/cards/snaxx.webp",
  },
];

// Two featured cards under "VISUALS CREATED TO BE FELT".
export const featuredWorks: Work[] = brandWorks.slice(0, 2);
