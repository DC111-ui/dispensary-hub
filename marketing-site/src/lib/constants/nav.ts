export type NavLink = {
  label: string;
  href: string;
};

export const NAV_LINKS: NavLink[] = [
  { label: "Features", href: "/features" },
  { label: "Compliance", href: "/compliance" },
  { label: "About", href: "/about" },
  { label: "Pricing", href: "/pricing" },
];

export const NAV_CTA: NavLink = { label: "Get a Free Demo", href: "/contact" };

export const FOOTER_LINKS: NavLink[] = [
  { label: "Features", href: "/features" },
  { label: "Compliance", href: "/compliance" },
  { label: "About", href: "/about" },
  { label: "Pricing", href: "/pricing" },
  { label: "Free Demo", href: "/contact" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
];
