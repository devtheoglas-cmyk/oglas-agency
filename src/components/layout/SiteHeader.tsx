import { useCallback, useEffect, useRef, useState, type FocusEvent } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { primaryNavigation } from "../../data/nav";
import { services } from "../../data/services";
import { ArrowDown } from "../services/icons";
import { cn } from "../../lib/cn";
import { MobileNav } from "./MobileNav";

const lightHeaderRoutes = new Set(["/privacy"]);

function hasDarkHero(pathname: string): boolean {
  return !lightHeaderRoutes.has(pathname);
}

export function SiteHeader() {
  const { pathname } = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const closeMenu = useCallback(() => setIsMenuOpen(false), []);
  const darkHero = hasDarkHero(pathname);

  const closeServicesMenuOnBlur = (event: FocusEvent<HTMLLIElement>): void => {
    if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
      setIsServicesOpen(false);
    }
  };

  useEffect(() => {
    const updateHeader = (): void => setIsScrolled(window.scrollY > 36);
    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });
    return () => window.removeEventListener("scroll", updateHeader);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-[100] border-b transition-[background-color,border-color] duration-300",
          isScrolled
            ? "border-white/10 bg-dark/95 text-white backdrop-blur-md"
          : darkHero
              ? "border-transparent bg-transparent text-white"
              : "border-transparent bg-transparent text-black",
        )}
        data-site-header
      >
        <div className="mx-auto flex h-[82px] max-w-[1920px] items-center justify-between px-5 sm:px-8 lg:h-[96px] lg:px-[4.15vw]">
          <Link
            aria-label="The Oglas Agency home"
            className="font-body text-[1.1rem] font-extrabold tracking-[-0.07em] lg:text-[1.32rem]"
            to="/"
          >
            THE OGLAS
          </Link>

          <nav aria-label="Primary navigation" className="hidden md:block">
            <ul className="flex items-center gap-8 lg:gap-[3.15rem]">
              {primaryNavigation.map((item) => (
                <li
                  className={item.label === "Services" ? "site-services-menu-wrap" : undefined}
                  data-open={item.label === "Services" ? isServicesOpen : undefined}
                  key={item.to}
                  onBlur={item.label === "Services" ? closeServicesMenuOnBlur : undefined}
                  onFocus={item.label === "Services" ? () => setIsServicesOpen(true) : undefined}
                  onMouseEnter={item.label === "Services" ? () => setIsServicesOpen(true) : undefined}
                  onMouseLeave={item.label === "Services" ? () => setIsServicesOpen(false) : undefined}
                >
                  {item.label === "Services" ? (
                    <button
                      aria-expanded={isServicesOpen}
                      aria-haspopup="menu"
                      className={cn(
                        "relative block cursor-pointer py-3 text-[0.92rem] font-medium transition-colors hover:text-lime",
                        "after:absolute after:right-0 after:bottom-1 after:left-0 after:h-px after:origin-left after:scale-x-0 after:bg-current after:transition-transform hover:after:scale-x-100",
                        pathname.startsWith("/services/") && "text-lime after:scale-x-100",
                      )}
                      onClick={() => setIsServicesOpen(true)}
                      type="button"
                    >
                      <span className="inline-flex items-center gap-1.5">
                        Services
                        <ArrowDown className={cn("size-3.5 transition-transform duration-300", isServicesOpen && "rotate-180")} />
                      </span>
                    </button>
                  ) : (
                    <NavLink
                      className={({ isActive }) =>
                        cn(
                          "relative block py-3 text-[0.92rem] font-medium transition-colors hover:text-lime",
                          "after:absolute after:right-0 after:bottom-1 after:left-0 after:h-px after:origin-left after:scale-x-0 after:bg-current after:transition-transform hover:after:scale-x-100",
                          isActive && "text-lime after:scale-x-100",
                        )
                      }
                      to={item.to}
                    >
                      {item.label}
                    </NavLink>
                  )}
                  {item.label === "Services" && (
                    <div aria-label="Services menu" className="site-services-menu" role="menu">
                      <div className="border-b border-white/15 pb-3">
                        <p className="font-body text-xs font-semibold tracking-[0.14em] text-lime uppercase">What we do</p>
                        <p className="mt-1.5 max-w-md font-display text-2xl leading-none font-semibold tracking-[-0.03em] uppercase">
                          Brand, digital and web experiences built around your business.
                        </p>
                      </div>
                      <div className="grid gap-x-6 gap-y-1 pt-2 sm:grid-cols-2 lg:grid-cols-5">
                        {services.map((service) => (
                          <Link
                            className="group/menu-item border-b border-white/10 py-3 transition-colors hover:text-lime lg:border-b-0 lg:border-l lg:pl-5 lg:first:border-l-0 lg:first:pl-0"
                            key={service.id}
                            role="menuitem"
                            onClick={() => setIsServicesOpen(false)}
                            to={`/services/${service.id}`}
                          >
                            <span className="flex items-start justify-between gap-3">
                              <span className="font-display text-lg leading-[0.95] font-bold tracking-[-0.025em] uppercase">{service.title}</span>
                              <ArrowDown className="mt-0.5 size-4 shrink-0 -rotate-90 opacity-50 transition-transform duration-300 group-hover/menu-item:translate-x-1 group-hover/menu-item:opacity-100" />
                            </span>
                            <span className="mt-2 block space-y-1 font-body text-xs leading-[1.4] text-white/55 transition-colors group-hover/menu-item:text-white/75">
                              {service.highlights.map((highlight) => (
                                <span className="block" key={highlight}>{highlight}</span>
                              ))}
                            </span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          <button
            aria-controls="mobile-navigation"
            aria-expanded={isMenuOpen}
            aria-label="Open navigation"
            className="grid size-12 cursor-pointer place-content-center gap-1.5 rounded-full border border-current/40 md:hidden"
            onClick={() => setIsMenuOpen(true)}
            ref={triggerRef}
            type="button"
          >
            <span aria-hidden="true" className="block h-px w-5 bg-current" />
            <span aria-hidden="true" className="block h-px w-5 bg-current" />
          </button>
        </div>
      </header>

      <MobileNav isOpen={isMenuOpen} onClose={closeMenu} triggerRef={triggerRef} />
    </>
  );
}
