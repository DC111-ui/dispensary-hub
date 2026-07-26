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

/** Desktop nav strip only — mirrors Stripe's own nav: plain links, a divider, then
 *  Guide me, then the sign-in + primary-CTA button cluster at the end of the bar. */
export const NAV_GUIDE_CTA: NavLink = { label: "Guide me", href: "/guide" };
export const NAV_SIGN_IN: NavLink = { label: "Sign in", href: "/sign-in" };
export const NAV_CONTACT_SALES: NavLink = { label: "Contact sales", href: "/contact" };

export const FOOTER_LINKS: NavLink[] = [
  { label: "Features", href: "/features" },
  { label: "Compliance", href: "/compliance" },
  { label: "About", href: "/about" },
  { label: "Pricing", href: "/pricing" },
  { label: "Free Demo", href: "/contact" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
];
