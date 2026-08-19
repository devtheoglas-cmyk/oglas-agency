import { Link } from "react-router-dom";
import { siteDetails } from "../../data/site";
import { BackToTop } from "./BackToTop";

const footerLinkClass = "w-fit text-sm font-medium text-white transition-colors hover:text-lime";

export function SiteFooter() {
  return (
    <footer className="overflow-hidden bg-black text-white" data-site-footer>
      <div className="mx-auto max-w-[1920px] px-5 pt-16 pb-7 sm:px-8 lg:px-[4.15vw] lg:pt-24 lg:pb-10">
        <div className="grid gap-14 border-b border-white/25 pb-20 sm:grid-cols-2 lg:grid-cols-[1.05fr_1.1fr_0.75fr_auto] lg:gap-8 lg:pb-28">
          <div>
            <p className="max-w-48 text-sm font-medium leading-relaxed text-white/75">2025 The Oglas Agency</p>
          </div>

          <div>
            <p className="mb-5 text-sm font-medium text-white/75">Talk to us or ask us anything</p>
            <div className="flex flex-col gap-3">
              <Link className={footerLinkClass} to="/contacts">
                Contact Us
              </Link>
              <a className={footerLinkClass} href={`mailto:${siteDetails.businessEmail}`}>
                Send E-mail
              </a>
              <Link className={footerLinkClass} to="/privacy">
                Privacy Policy
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <a
              className={footerLinkClass}
              href={siteDetails.socials.linkedin}
              rel="noopener noreferrer"
              target="_blank"
            >
              LinkedIn
            </a>
            <a
              className={footerLinkClass}
              href={siteDetails.socials.instagram}
              rel="noopener noreferrer"
              target="_blank"
            >
              Instagram
            </a>
            <a
              className={footerLinkClass}
              href={siteDetails.socials.behance}
              rel="noopener noreferrer"
              target="_blank"
            >
              Behance
            </a>
          </div>

          <div className="sm:text-right">
            <BackToTop />
          </div>
        </div>

        <div aria-hidden="true" className="font-wordmark text-[clamp(5rem,17vw,20rem)] leading-[0.78] tracking-[-0.025em] whitespace-nowrap uppercase">
          The Oglas Agency
        </div>

        <div className="mt-9 flex flex-col gap-3 border-t border-white/25 pt-6 text-xs font-medium uppercase sm:flex-row sm:items-center sm:justify-between lg:mt-12">
          <p>© 2025 the oglas agency</p>
          <p>Based in Dubai, UAE</p>
        </div>
      </div>
    </footer>
  );
}
