export type NavLink = {
  label: string;
  href: string;
};

export const NAV_LINKS: NavLink[] = [
  { label: "Product", href: "/features" },
  { label: "Compliance", href: "/compliance" },
  { label: "Pricing", href: "/pricing" },
];

export const NAV_CTA: NavLink = { label: "Contact", href: "/contact" };

export const FOOTER_LINKS: NavLink[] = [
  { label: "Features", href: "/features" },
  { label: "Compliance", href: "/compliance" },
  { label: "Pricing", href: "/pricing" },
  { label: "Contact", href: "/contact" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
];
