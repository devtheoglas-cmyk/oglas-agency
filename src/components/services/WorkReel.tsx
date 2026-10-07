import { useEffect, useRef, useState } from "react";
import type { ReelImage } from "../../data/services";
import { BgImage } from "../ui/BgImage";

/**
 * Real project images for a service chapter.
 *
 * Large screens: one sticky 16:10 frame. As the reader moves down the
 * chapter, `active` advances and the next image wipes up over the last one.
 * Smaller screens: the same images as a swipeable row with captions.
 *
 * Images only mount once the chapter is near the viewport, so the page does
 * not download all five reels up front.
 */
export function WorkReel({ images, active, title }: { images: ReelImage[]; active: number; title: string }) {
  const root = useRef<HTMLDivElement>(null);
  const [near, setNear] = useState(false);
  const current = images[active] ?? images[0];

  useEffect(() => {
    const node = root.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setNear(true);
          observer.disconnect();
        }
      },
      { rootMargin: "100% 0px" },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={root}>
      <figure className="m-0 hidden lg:block">
        <div className="relative aspect-[16/10] overflow-hidden bg-ink">
          {near &&
            images.map((image, i) => (
              <div
                aria-hidden={i !== active}
                className="svc-reel-frame absolute inset-0 overflow-hidden"
                data-state={i === active ? "active" : i < active ? "past" : "next"}
                key={image.src}
              >
                <BgImage alt={`${image.project}, ${image.caption}`} className="svc-reel-image" fill src={image.src} />
              </div>
            ))}
        </div>
        {current && (
          <figcaption className="mt-4 flex items-baseline justify-between gap-6 font-body text-sm">
            <span>
              <span className="font-semibold">{current.project}</span>
              <span className="opacity-60"> · {current.caption}</span>
            </span>
            <span className="shrink-0 tabular-nums opacity-50">
              {active + 1} / {images.length}
            </span>
          </figcaption>
        )}
      </figure>

      <ul aria-label={`${title} work`} className="svc-reel-strip -mx-5 flex snap-x snap-mandatory gap-3 overflow-x-auto px-5 pb-2 sm:-mx-8 sm:px-8 lg:hidden">
        {images.map((image) => (
          <li className="w-[84%] shrink-0 snap-start sm:w-[62%]" key={image.src}>
            <div className="relative aspect-[16/10] overflow-hidden bg-ink">
              {near && <BgImage alt={`${image.project}, ${image.caption}`} fill src={image.src} />}
            </div>
            <p className="mt-3 font-body text-sm">
              <span className="font-semibold">{image.project}</span>
              <span className="opacity-60"> · {image.caption}</span>
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
