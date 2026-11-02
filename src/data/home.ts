import type { Testimonial } from "../components/ui/Carousel";

export const heroManifesto =
  "WE ARE A DUBAI-BASED BRANDING & CREATIVE AGENCY. WE BUILD DISTINCTIVE BRANDS THROUGH STRATEGY, DESIGN AND DIGITAL EXPERIENCES.";

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
  "Oglas Global is a Dubai-based branding and creative agency helping businesses build distinctive brands and meaningful digital experiences. From brand strategy and visual identity to web design, digital marketing, UX/UI design and web development, we bring creativity and strategic thinking together to help businesses connect with their audiences and grow.";

export const whatWeDoItems: ServiceEntry[] = [
  {
    title: "Branding & Brand Identity Design",
    description:
      "We build distinctive brands through strategic positioning, creative direction and visual identity design. From logo design and brand guidelines to consistent brand assets, we create identities that help businesses stand out, communicate clearly and build lasting recognition.",
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
      "We design responsive, user-friendly websites that combine distinctive visual design with clear content structure. From landing pages to complete business websites, our web design approach focuses on usability, performance and meaningful customer experiences across devices.",
  },
  {
    title: "Digital Marketing",
    description:
      "We plan and execute digital marketing strategies that connect brands with the right audiences. Through social media marketing, paid advertising, search and email campaigns, we create consistent brand experiences that support visibility, engagement and business growth.",
  },
  {
    title: "UX/UI Design",
    description:
      "We design intuitive digital experiences through research-led UX and thoughtful UI design. From user journeys and wireframes to accessible interfaces and scalable design systems, we create digital products that are functional, engaging and easy to use.",
  },
  {
    title: "Web Development",
    description:
      "We develop responsive websites and digital experiences built for speed, accessibility and long-term performance. Combining clean development practices with thoughtful implementation, we build websites that work seamlessly across devices and support your business goals.",
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
