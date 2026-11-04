export interface NavigationItem {
  label: string;
  to: string;
}

export const primaryNavigation: readonly NavigationItem[] = [
  { label: "Services", to: "/services" },
  { label: "Works", to: "/works" },
  { label: "People", to: "/about" },
  { label: "Blog", to: "/blog/brand-consistency-matters-for-growing-businesses-in-dubai" },
  { label: "Contacts", to: "/contacts" },
];
