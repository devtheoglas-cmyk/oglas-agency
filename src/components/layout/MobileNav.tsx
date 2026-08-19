import { useEffect, useRef, type RefObject } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { primaryNavigation } from "../../data/nav";
import { cn } from "../../lib/cn";
import { startSmoothScroll, stopSmoothScroll } from "../../lib/smoothScroll";

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
  triggerRef: RefObject<HTMLButtonElement | null>;
}

const FOCUSABLE_SELECTOR =
  'a[href], button:not([disabled]), input:not([disabled]), textarea:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])';

export function MobileNav({ isOpen, onClose, triggerRef }: MobileNavProps) {
  const panelRef = useRef<HTMLDivElement>(null);
  const { pathname } = useLocation();
  const previousPathname = useRef(pathname);

  useEffect(() => {
    if (previousPathname.current !== pathname) {
      onClose();
      previousPathname.current = pathname;
    }
  }, [onClose, pathname]);

  useEffect(() => {
    if (!isOpen) return;

    const panel = panelRef.current;
    const inertTargets = Array.from(
      document.querySelectorAll<HTMLElement>("[data-site-header], #main, [data-site-footer]"),
    );
    const previousOverflow = document.body.style.overflow;
    const previousPaddingRight = document.body.style.paddingRight;
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;

    inertTargets.forEach((target) => {
      target.inert = true;
    });
    document.body.style.overflow = "hidden";
    if (scrollbarWidth > 0) document.body.style.paddingRight = `${scrollbarWidth}px`;
    stopSmoothScroll();

    const focusable = panel
      ? Array.from(panel.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR))
      : [];
    focusable[0]?.focus();

    const handleKeyDown = (event: KeyboardEvent): void => {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
        return;
      }

      if (event.key !== "Tab" || focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable.at(-1);
      if (!first || !last) return;

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      inertTargets.forEach((target) => {
        target.inert = false;
      });
      document.body.style.overflow = previousOverflow;
      document.body.style.paddingRight = previousPaddingRight;
      startSmoothScroll();
      triggerRef.current?.focus();
    };
  }, [isOpen, onClose, triggerRef]);

  if (!isOpen) return null;

  return (
    <div
      aria-label="Mobile navigation"
      aria-modal="true"
      className="fixed inset-0 z-[110] bg-dark text-white md:hidden"
      id="mobile-navigation"
      ref={panelRef}
      role="dialog"
    >
      <div className="flex h-full flex-col px-5 py-5 sm:px-8">
        <div className="flex items-center justify-between">
          <span className="font-body text-xl font-extrabold tracking-[-0.06em]">THE OGLAS</span>
          <button
            aria-label="Close navigation"
            className="grid size-12 cursor-pointer place-items-center rounded-full border border-white/30 text-2xl"
            onClick={onClose}
            type="button"
          >
            <span aria-hidden="true">×</span>
          </button>
        </div>

        <nav className="my-auto" aria-label="Mobile primary navigation">
          <ul className="space-y-1">
            {primaryNavigation.map((item, index) => (
              <li key={item.to}>
                <NavLink
                  className={({ isActive }) =>
                    cn(
                      "flex items-baseline justify-between border-b border-white/20 py-4 font-display text-[clamp(2.6rem,13vw,5rem)] leading-none uppercase",
                      isActive && "text-lime",
                    )
                  }
                  onClick={onClose}
                  to={item.to}
                >
                  {item.label}
                  <span aria-hidden="true" className="font-body text-xs font-medium">
                    0{index + 1}
                  </span>
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}
