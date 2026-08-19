import { useCallback, useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { primaryNavigation } from "../../data/nav";
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
  const triggerRef = useRef<HTMLButtonElement>(null);
  const closeMenu = useCallback(() => setIsMenuOpen(false), []);
  const darkHero = hasDarkHero(pathname);

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
                <li key={item.to}>
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
