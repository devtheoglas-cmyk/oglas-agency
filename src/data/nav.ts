export interface NavigationItem {
  label: string;
  to: string;
}

export const primaryNavigation: readonly NavigationItem[] = [
  { label: "Services", to: "/services" },
  { label: "Works", to: "/works" },
  { label: "People", to: "/about" },
  { label: "Contacts", to: "/contacts" },
];
