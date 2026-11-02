import { Link } from "react-router-dom";
import { BgImage } from "../components/ui/BgImage";

const benefits = [
  {
    title: "1. Stronger recognition",
    body: "Customers are more likely to connect repeated visual and verbal cues with a business when those cues remain consistent. Familiar colours, typography, imagery and language help people identify the company across different channels. A clear Visual Identity reduces the effort needed to recognise who is communicating.",
  },
  {
    title: "2. Greater confidence and trust",
    body: "Outdated website branding, unrelated social content or conflicting proposals can raise questions about attention to detail. A coherent presentation signals organisation and professionalism, although it never replaces reliable delivery.",
  },
  {
    title: "3. Clearer market positioning",
    body: "A strong Brand Strategy makes it easier to explain who the business serves and why customers should choose it. Consistent messaging reinforces that position over time. Without it, one campaign may present the company as premium, another as low-cost, and another may communicate no clear advantage. The result is confusion rather than a memorable reason to choose the brand.",
  },
  {
    title: "4. A more connected customer experience",
    body: "Customers move between touchpoints: an advert, a landing page, a sales call, a proposal and the service itself. When each stage communicates a different promise, the journey feels fragmented. A joined-up Brand Experience makes the visual language, information and tone feel connected, helping customers know what to expect. Business Queensland's business branding guide also connects consistency with communication, culture and customer experience.",
  },
  {
    title: "5. Easier and more efficient growth",
    body: "As a business grows, more employees, suppliers and agencies create customer-facing material. Without shared standards, every person may interpret the brand differently. Guidelines, templates and approved assets reduce guesswork, support faster production and help maintain quality across departments and locations.",
  },
];

const growthSteps = [
  {
    title: "Begin with a clear brand strategy",
    body: "Before redesigning the logo, define the fundamentals: target audience, purpose, market position, differentiators, personality and customer promise. Make sure leadership and customer-facing employees understand them. In the UAE, adapt communication for different audiences without changing core values.",
  },
  {
    title: "Create a flexible visual identity system",
    body: "A practical Visual Identity system should define logo variations, spacing, colour values, typography, image direction, graphic elements and layout principles. Show how these elements work across social posts, presentations, packaging, signage and digital interfaces. Keep the system flexible across formats but clear enough to prevent guesswork. Adobe's guide to maintaining a consistent brand identity offers practical advice for growing teams.",
  },
  {
    title: "Define how the brand speaks",
    body: "Visual alignment is only one part of consistency. Set guidelines for tone of voice, preferred vocabulary, headlines, calls to action and descriptions of products or services. A brand can be friendly on social media and formal in a proposal while still sounding like the same organisation. A concise messaging framework helps employees and partners communicate the same value proposition.",
  },
  {
    title: "Review the full customer journey",
    body: "List the places where customers meet your business: website, search listings, social media, advertising, email, WhatsApp, proposals, invoices, packaging, physical spaces and customer support. Check that key information, visual elements and messages agree. Prioritise touchpoints that influence discovery, evaluation and purchase, then update the rest in a planned sequence. For digital channels, Nielsen Norman Group's guidance on consistency and standards explains why familiar patterns reduce confusion and help people know what to expect.",
  },
  {
    title: "Give people ownership",
    body: "Keep approved assets in one accessible location, provide templates for regular communications and assign responsibility for brand reviews. A lightweight approval process can prevent outdated or off-brand materials from being published. Review the system as the company evolves, documenting changes so different teams do not create their own versions.",
  },
];

const faqs = [
  {
    question: "1. What is brand consistency?",
    answer: "Brand consistency is the practice of presenting the same recognisable identity, message and values across all customer touchpoints. It includes visual elements such as logos, colours and typography, as well as tone of voice, service communication and customer experience.",
  },
  {
    question: "2. Why is brand consistency important for businesses in Dubai?",
    answer: "It helps Dubai businesses remain recognisable across a mix of digital and physical channels and communicate clearly with diverse audiences. A coherent brand can strengthen perceived professionalism, clarify the company's value and make customer interactions feel connected.",
  },
  {
    question: "3. How does brand consistency help a growing business?",
    answer: "It supports brand recognition, reinforces market positioning and creates a more dependable customer experience. Shared guidelines also help employees, branches and external partners produce aligned communications as the business expands.",
  },
  {
    question: "4. What is the difference between brand strategy and visual identity?",
    answer: "Brand Strategy defines the business's audience, purpose, positioning, personality and value proposition. Visual Identity expresses that strategy through designed elements such as logos, colours, typography, imagery and layouts. Strategy sets the direction; visual identity makes it recognisable.",
  },
  {
    question: "5. How can a business improve brand consistency?",
    answer: "Start by auditing customer touchpoints, then clarify the brand strategy and create visual and verbal guidelines. Use approved templates, store assets in one place and assign responsibility for reviewing the website, social media, advertising, sales materials and customer communications.",
  },
];

function ArticleSection({ children, title }: { children: React.ReactNode; title: string }) {
  return (
    <section className="border-t border-black/15 pt-12 lg:pt-16">
      <h2 className="max-w-[18ch] font-display text-[clamp(2rem,4vw,4.25rem)] leading-[0.92] font-extrabold tracking-[-0.04em] uppercase">
        {title}
      </h2>
      <div className="mt-8 grid max-w-[72ch] gap-6 font-body text-base leading-[1.75] text-black/75 lg:mt-10 lg:text-lg">
        {children}
      </div>
    </section>
  );
}

export default function BlogBrandConsistency() {
  return (
    <article className="bg-off-white pt-[82px] text-black lg:pt-[96px]">
      <header className="bg-dark text-white">
        <div className="mx-auto grid max-w-[1760px] gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-20 lg:px-[4.15vw] lg:py-28">
          <div className="flex flex-col justify-end">
            <Link className="mb-12 w-fit font-body text-sm font-semibold tracking-[0.1em] text-lime uppercase underline-offset-4 hover:underline" to="/services">
              Brand Design
            </Link>
            <h1 className="max-w-[10ch] font-display text-[clamp(3rem,6.2vw,7rem)] leading-[0.86] font-extrabold tracking-[-0.05em] uppercase">
              Why Brand Consistency Matters for Growing Businesses in Dubai
            </h1>
          </div>
          <BgImage
            alt="Brand Consistency Drives Growth campaign image featuring The Oglas branded materials, website screens and Dubai skyline"
            aspectRatio="16 / 9"
            className="w-full overflow-hidden"
            src="/assets/blog/brand-consistency-drives-growth.jpeg"
          />
        </div>
      </header>

      <div className="mx-auto max-w-[1160px] px-5 py-16 sm:px-8 lg:px-0 lg:py-28">
        <div className="grid gap-6 border-b border-black/15 pb-16 font-body text-[clamp(1.25rem,2vw,1.75rem)] leading-[1.55] text-black/80 lg:pb-24">
          <p>Dubai customers may encounter a business through search, social media, a website, an advert, a proposal or a face-to-face conversation. Each interaction shapes their impression. Conflicting design, messages or tone can make the brand feel disconnected.</p>
          <p>For UAE startups, SMEs and growing companies, Brand Consistency is more than a design preference. It helps people recognise the business, understand its value and experience the same promise throughout the customer journey. A clear system also gives employees and partners a shared direction as the company expands.</p>
        </div>

        <div className="grid gap-16 py-16 lg:gap-24 lg:py-24">
          <ArticleSection title="What Does Brand Consistency Mean?">
            <p>Brand consistency means presenting a recognisable identity and message across every place where people encounter your business. It includes visual elements such as logos, colours, typography and imagery, as well as messaging, tone of voice and the way customers are treated.</p>
            <p>The aim is not to make every social post, website page or brochure look identical. Each channel has its own purpose. The aim is to make every interaction feel as though it comes from the same organisation. This reflects the wider design principle of consistency and standards: Nielsen Norman Group explains how familiar patterns help people understand what to expect across digital experiences.</p>
            <p>This is where Brand Strategy and Brand Identity Design work together. Brand Strategy defines the audience, positioning, values, personality and promise of the business. Brand Identity Design translates that direction into practical assets and rules, from the logo and Visual Identity to brand language and communication templates. When the strategy and identity are aligned, a company can communicate with greater clarity.</p>
          </ArticleSection>

          <ArticleSection title="Why Consistency Matters in Dubai's Competitive Market">
            <p>Dubai businesses communicate with residents, visitors, corporate buyers and international partners across crowded digital and physical channels. Customers may compare several providers before making contact, so conflicting brand signals can make a company harder to understand.</p>
            <p>A consistent identity helps new businesses build credibility and SMEs maintain recognition as they expand. Campaigns can adapt to local audiences and events while keeping the brand recognisable.</p>
          </ArticleSection>

          <ArticleSection title="Five Business Benefits of a Consistent Brand">
            {benefits.map((benefit) => (
              <div className="pt-4" key={benefit.title}>
                <h3 className="font-body text-xl font-bold tracking-[-0.02em] text-black">{benefit.title}</h3>
                <p className="mt-3">{benefit.body}</p>
              </div>
            ))}
          </ArticleSection>

          <ArticleSection title="Signs Your Brand Is Becoming Inconsistent">
            <p>Inconsistency often develops gradually. Look for different logo versions or colours, conflicting website and social messages, changes in tone between advertising and sales, outdated service descriptions, or branches creating materials without shared standards.</p>
            <p>These issues do not automatically require a rebrand. Review the touchpoints, find where the experience breaks and decide which rules or assets need updating.</p>
          </ArticleSection>

          <ArticleSection title="How to Build Brand Consistency as Your Business Grows">
            {growthSteps.map((step) => (
              <div className="pt-4" key={step.title}>
                <h3 className="font-body text-xl font-bold tracking-[-0.02em] text-black">{step.title}</h3>
                <p className="mt-3">{step.body}</p>
              </div>
            ))}
          </ArticleSection>

          <ArticleSection title="When Should a Growing Business Refresh Its Brand?">
            <p>Consider a refresh when the business enters a new market, adds services, changes its positioning or outgrows its existing visual assets. The goal is not change for its own sake. Protect what customers recognise and update what no longer supports the business, with Brand Strategy guiding the design.</p>
          </ArticleSection>

          <ArticleSection title="How The Oglas Helps Businesses Build a Consistent Brand">
            <p>Consistency requires strategic direction as well as thoughtful execution. The Oglas Agency works across brand design, web design and digital marketing, connecting brand positioning and identity with the channels where customers experience a business.</p>
            <p>When choosing a branding agency in Dubai, look for a partner that connects positioning with execution. The Oglas offers brand design and creative services covering brand positioning, a distinct brand voice and visual identity assets designed to work across touchpoints.</p>
            <p>The Oglas portfolio includes projects such as Fishwala, Velvet Properties, Hopinz, Offbean, Snaxx and Yellow And, with work spanning branding, brand strategy, graphics and visual identity.</p>
            <p>For a company preparing to launch, reposition or scale, the first step is identifying what the brand must communicate and where the current experience feels disconnected. A suitable creative partner can turn those findings into a practical identity system.</p>
          </ArticleSection>

          <ArticleSection title="Conclusion: Consistency Builds a Stronger Foundation for Growth">
            <p>As a business grows, its brand appears in more places and is represented by more people. Without shared direction, that growth can create a fragmented identity. With a clear Brand Strategy, a flexible Visual Identity and aligned communication, every interaction can reinforce the same promise.</p>
            <p>For businesses in Dubai and across the UAE, Brand Consistency helps make a company easier to recognise, understand and trust. Strong brands do not repeat the same design everywhere; they make every interaction feel connected.</p>
            <p>Building a brand that can grow with your business? Speak with The Oglas team about creating a consistent brand strategy and identity for your next stage of growth.</p>
          </ArticleSection>

          <ArticleSection title="Frequently Asked Questions">
            {faqs.map((faq) => (
              <div className="pt-4" key={faq.question}>
                <h3 className="font-body text-xl font-bold tracking-[-0.02em] text-black">{faq.question}</h3>
                <p className="mt-3">{faq.answer}</p>
              </div>
            ))}
          </ArticleSection>
        </div>
      </div>
    </article>
  );
}
