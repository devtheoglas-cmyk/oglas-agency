import type { Testimonial } from "../components/ui/Carousel";

export const heroManifesto =
  "We are a collective of creative minds with an unlimited creative canvas and we use that creativity to build brand platforms that defy change and help businesses own an fair share of the future.";

// Mosaic of work shots for the hero collage grid.
export const heroCollage: string[] = [
  "/assets/home/90fe42c75249.webp",
  "/assets/home/1de8677ec52e.webp",
  "/assets/home/1b8ea071019c.webp",
  "/assets/home/81c4e1a8d7c6.webp",
  "/assets/home/66327bbdef79.webp",
  "/assets/home/2c66a434ab9c.webp",
  "/assets/home/92bef11c6cea.webp",
  "/assets/home/f8ab067cd971.webp",
  "/assets/home/48f316807915.webp",
  "/assets/home/d3be8ea937b2.webp",
  "/assets/home/5197c0a859a3.webp",
  "/assets/home/ddd538b68995.webp",
];

export interface BrandLogo {
  name: string;
  logo: string;
}

export interface ServiceEntry {
  title: string;
  description?: string;
  clients?: BrandLogo[];
  testimonial?: Testimonial;
}

export const whatWeDoIntro =
  "We bring together the right human expertise with the best use of technology to help define, design and accelerate delivery of more valuable, personal interactions between people and brands across their full ecosystem.";

export const whatWeDoItems: ServiceEntry[] = [
  {
    title: "Brand Design",
    description:
      "We define your brand's position, shape a distinct voice, and design a visual identity that works everywhere your brand appears. From logo to brand guidelines and social assets, we deliver high-quality branding you can confidently launch and grow with.",
    clients: [
      { name: "Offbean", logo: "/assets/brands/brand-offbean.webp" },
      { name: "Fishwala", logo: "/assets/brands/brand-fishwala.webp" },
      { name: "Truck'n'burg", logo: "/assets/brands/brand-trucknburg.webp" },
      { name: "Velvet", logo: "/assets/brands/brand-velvet.webp" },
    ],
    testimonial: {
      quote:
        "Working with Brand Appart has been an absolute pleasure. Beyond their creativity and professionalism, there's a real sense of kindness and care in everything they do. The team is always open, generous, and never gets stuck on small details, they never say no. I was truly impressed by their reliability, flexibility, and collaborative spirit. I couldn't recommend them more!",
      name: "Benny ferard",
      role: "Co-founder & COO @Yellowand",
      avatar: "/assets/brands/benny-ferard.webp",
    },
  },
  {
    title: "Web Design",
    description:
      "We design responsive, conversion-focused websites that pair a distinctive visual identity with a clear content structure. From landing pages to full brand sites, our layouts are built to feel native on every device and to guide visitors toward the action that matters to your business.",
  },
  {
    title: "Digital Marketing",
    description:
      "We plan and run campaigns that turn attention into growth — combining strategy, creative, and measurement. Paid and organic social, search, and email work together as a system, so every touchpoint reinforces your brand while moving prospects along your funnel.",
  },
  {
    title: "UX/UI Design",
    description:
      "We design product experiences that feel obvious to use and considered in every detail. Research-led flows, accessible interfaces, and design systems that scale — so your product looks and behaves the way your brand promises, on the first release and the fiftieth.",
  },
  {
    title: "Web Development",
    description:
      "We build the sites and apps we design — fast, accessible, and durable. Modern stacks, clean semantic markup, and a delivery process that prioritizes real-world performance so your product loads quickly, ranks well, and stays easy to maintain as your team grows.",
  },
];

export const clients: BrandLogo[] = [
  { name: "Gymkha", logo: "/assets/clients/gymkha.webp" },
  { name: "Velvet", logo: "/assets/clients/velvet-1.webp" },
  { name: "Snaxx", logo: "/assets/clients/snaxx.webp" },
  { name: "Aspirant Wave", logo: "/assets/clients/aspirant-wave.webp" },
];

export const testimonials: Testimonial[] = [
  {
    quote:
      "Working with the zimo team was such a great experience! They are detail oriented, responsible, thorough, and made our vision a reality. Couldn't recommend them more!!",
    name: "Akshay Kumar",
    role: "Founder @trucknburg",
  },
  {
    quote:
      "Working with Brand Appart has been an absolute pleasure. Beyond their creativity and professionalism, there's a real sense of kindness and care in everything they do. The team is always open, generous, and never gets stuck on small details, they never say no. I couldn't recommend them more!",
    name: "Benny ferard",
    role: "Co-founder & COO @Yellowand",
    avatar: "/assets/brands/benny-ferard.webp",
  },
];
