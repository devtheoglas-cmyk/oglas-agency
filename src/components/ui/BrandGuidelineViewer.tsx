import { useCallback, useEffect, useRef, useState } from "react";
import { BgImage } from "./BgImage";

const TOTAL_PAGES = 54;
const IMG_BASE = "/assets/fishwala-brand";

const pageUrl = (n: number): string => `${IMG_BASE}/p${String(n).padStart(2, "0")}.webp`;

export function BrandGuidelineViewer() {
  const [page, setPage] = useState(1);
  const frameRef = useRef<HTMLDivElement>(null);

  const go = useCallback((delta: number) => {
    setPage((prev) => {
      const next = prev + delta;
      if (next < 1) return 1;
      if (next > TOTAL_PAGES) return TOTAL_PAGES;
      return next;
    });
  }, []);

  const jump = useCallback((n: number) => {
    setPage(Math.min(TOTAL_PAGES, Math.max(1, n)));
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent): void => {
      const target = e.target as HTMLElement | null;
      if (target && (target.tagName === "INPUT" || target.tagName === "TEXTAREA" || target.isContentEditable)) return;
      if (e.key === "ArrowRight") {
        e.preventDefault();
        go(1);
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        go(-1);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [go]);

  // Preload neighbors so page changes feel instant.
  useEffect(() => {
    const preload = (n: number): void => {
      if (n < 1 || n > TOTAL_PAGES) return;
      const img = new Image();
      img.src = pageUrl(n);
    };
    preload(page + 1);
    preload(page + 2);
    preload(page - 1);
  }, [page]);

  const onFrameClick = (e: React.MouseEvent<HTMLDivElement>): void => {
    const rect = frameRef.current?.getBoundingClientRect();
    if (!rect) return;
    const clickedLeftHalf = e.clientX - rect.left < rect.width / 2;
    go(clickedLeftHalf ? -1 : 1);
  };

  return (
    <div className="mx-auto w-full max-w-[1400px]">
      <div className="mb-6 flex items-end justify-between gap-6 text-white">
        <div>
          <p className="font-body text-xs tracking-[0.2em] uppercase text-white/55">Brand Guidelines</p>
          <h2 className="mt-3 font-display text-[clamp(1.6rem,3vw,2.4rem)] font-semibold tracking-[-0.02em] uppercase">
            Fishwala · 2025
          </h2>
        </div>
        <span className="shrink-0 rounded-full border border-white/25 px-4 py-1.5 font-body text-xs tracking-[0.15em] uppercase text-white/70">
          {String(page).padStart(2, "0")} / {String(TOTAL_PAGES).padStart(2, "0")}
        </span>
      </div>

      <div
        ref={frameRef}
        className="relative aspect-[1700/1080] w-full cursor-pointer overflow-hidden rounded-2xl bg-black shadow-2xl shadow-black/40"
        onClick={onFrameClick}
        role="group"
        aria-label={`Fishwala brand guidelines page ${page} of ${TOTAL_PAGES}`}
      >
        <BgImage
          alt={`Fishwala brand guideline page ${page}`}
          fill
          fit="contain"
          src={pageUrl(page)}
        />

        <button
          type="button"
          aria-label="Previous page"
          onClick={(e) => {
            e.stopPropagation();
            go(-1);
          }}
          disabled={page === 1}
          className="absolute top-1/2 left-4 z-10 grid size-12 -translate-y-1/2 place-items-center rounded-full border border-white/25 bg-black/50 text-white backdrop-blur-sm transition hover:bg-black/80 disabled:cursor-not-allowed disabled:opacity-30 lg:size-14"
        >
          <span aria-hidden="true" className="text-xl leading-none">
            ←
          </span>
        </button>
        <button
          type="button"
          aria-label="Next page"
          onClick={(e) => {
            e.stopPropagation();
            go(1);
          }}
          disabled={page === TOTAL_PAGES}
          className="absolute top-1/2 right-4 z-10 grid size-12 -translate-y-1/2 place-items-center rounded-full border border-white/25 bg-black/50 text-white backdrop-blur-sm transition hover:bg-black/80 disabled:cursor-not-allowed disabled:opacity-30 lg:size-14"
        >
          <span aria-hidden="true" className="text-xl leading-none">
            →
          </span>
        </button>
      </div>

      <div className="mt-5 flex items-center gap-4">
        <input
          type="range"
          min={1}
          max={TOTAL_PAGES}
          value={page}
          onChange={(e) => jump(Number(e.target.value))}
          className="w-full accent-lime"
          aria-label="Jump to page"
        />
      </div>

      <p className="mt-3 text-center font-body text-xs tracking-wide text-white/55">
        Click the left or right half of the page to flip · Arrow keys work too
      </p>
    </div>
  );
}
