import { useEffect, useState } from "react";

const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";

function getInitialPreference(): boolean {
  return typeof window !== "undefined" && window.matchMedia(REDUCED_MOTION_QUERY).matches;
}

export function useReducedMotion(): boolean {
  const [reducedMotion, setReducedMotion] = useState(getInitialPreference);

  useEffect(() => {
    const query = window.matchMedia(REDUCED_MOTION_QUERY);
    const updatePreference = (event: MediaQueryListEvent): void => {
      setReducedMotion(event.matches);
    };

    setReducedMotion(query.matches);
    query.addEventListener("change", updatePreference);

    return () => query.removeEventListener("change", updatePreference);
  }, []);

  return reducedMotion;
}
