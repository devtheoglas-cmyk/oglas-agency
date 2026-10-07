import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

function Base({ children, ...props }: IconProps) {
  return (
    <svg
      aria-hidden="true"
      fill="none"
      focusable="false"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.6}
      viewBox="0 0 24 24"
      {...props}
    >
      {children}
    </svg>
  );
}

export function ArrowUpRight(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M7 17 17 7M8.5 7H17v8.5" />
    </Base>
  );
}

export function ArrowDown(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M12 4v16M5.5 13.5 12 20l6.5-6.5" />
    </Base>
  );
}

export function ArrowRight(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M4 12h16M13.5 5.5 20 12l-6.5 6.5" />
    </Base>
  );
}

export function Check(props: IconProps) {
  return (
    <Base {...props}>
      <path d="m4.5 12.5 4.75 4.75L19.5 7" />
    </Base>
  );
}

export function Pause(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M9 6v12M15 6v12" />
    </Base>
  );
}

export function Play(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M8 5.5v13l10.5-6.5L8 5.5Z" />
    </Base>
  );
}

/** Four-point spark used as the separator in the capability ribbon. */
export function Spark(props: IconProps) {
  return (
    <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" {...props}>
      <path
        d="M12 0c.6 6.4 5.6 11.4 12 12-6.4.6-11.4 5.6-12 12-.6-6.4-5.6-11.4-12-12C6.4 11.4 11.4 6.4 12 0Z"
        fill="currentColor"
      />
    </svg>
  );
}
