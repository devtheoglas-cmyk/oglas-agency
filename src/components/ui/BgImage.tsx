import { useEffect, useState, type CSSProperties, type DragEvent, type MouseEvent } from "react";

type BgImageProps = {
  src: string;
  alt: string;
  className?: string;
  fit?: "cover" | "contain";
  aspectRatio?: string | number;
  style?: CSSProperties;
};

const preventDefault = (e: MouseEvent | DragEvent) => e.preventDefault();

export function BgImage({
  src,
  alt,
  className,
  fit = "cover",
  aspectRatio,
  style,
}: BgImageProps) {
  const [ratio, setRatio] = useState<string | number | undefined>(aspectRatio);

  useEffect(() => {
    if (aspectRatio) {
      setRatio(aspectRatio);
      return;
    }
    let cancelled = false;
    const img = new Image();
    img.onload = () => {
      if (cancelled) return;
      if (img.naturalWidth && img.naturalHeight) {
        setRatio(`${img.naturalWidth} / ${img.naturalHeight}`);
      }
    };
    img.src = src;
    return () => {
      cancelled = true;
    };
  }, [src, aspectRatio]);

  return (
    <div
      role="img"
      aria-label={alt}
      className={className}
      style={{
        backgroundImage: `url("${src.replace(/"/g, '\\"')}")`,
        backgroundSize: fit,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        userSelect: "none",
        WebkitUserSelect: "none",
        aspectRatio: ratio,
        ...style,
      }}
      onContextMenu={preventDefault}
      onDragStart={preventDefault}
    />
  );
}
