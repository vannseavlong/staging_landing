export type NavItem = {
  key: string;
  label: string;
  href: string;
  kind?: "anchor" | "route";
};

export const NAV_ITEMS: NavItem[] = [
  { key: "home", label: "Home", href: "#hero", kind: "anchor" },
  { key: "service", label: "Service", href: "#service", kind: "anchor" },
  { key: "why-us", label: "Why Us", href: "#why-us", kind: "anchor" },
  {
    key: "testimonials",
    label: "Testimonials",
    href: "#testimonials",
    kind: "anchor",
  },
  { key: "faq", label: "FAQ", href: "#faq", kind: "anchor" },
  { key: "install", label: "Install", href: "#install", kind: "anchor" },
  { key: "faq-page", label: "FAQ Page", href: "/faq", kind: "route" },
];
