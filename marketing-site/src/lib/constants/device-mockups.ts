import { FEATURE_CATEGORIES } from "@/lib/constants/features";

export type DeviceMockupPaths = { web: string; mobile: string };

/**
 * Maps each feature category id to its photorealistic generated mockup
 * images (prompts for all 14 x web/mobile pairs are in
 * design/mockup-prompts.txt). Paths follow the
 * public/images/mockups/{id}-{web|mobile}.webp convention — once an image is
 * generated, approved, and converted to WebP, drop it in at that path and
 * the carousel picks it up automatically.
 */
export const DEVICE_MOCKUPS: Record<string, DeviceMockupPaths> = Object.fromEntries(
  FEATURE_CATEGORIES.map((category) => [
    category.id,
    {
      web: `/images/mockups/${category.id}-web.webp`,
      mobile: `/images/mockups/${category.id}-mobile.webp`,
    },
  ])
);

/**
 * Which {id}-{web|mobile}.webp files actually exist in public/images/mockups
 * right now. The carousel renders the real photo for a variant only if it's
 * listed here, and falls back to the placeholder otherwise — update this as
 * each generated image is approved and dropped in.
 *
 * Note: pos-mobile is intentionally NOT here. The only approved pos-mobile
 * shot is the hand-held hero photo (public/images/hero-phone-v2.webp) — the
 * carousel's mobile shots are all hand-free/floating, so POS shows its web
 * shot alone rather than a mismatched pair.
 *
 * Note: whatsapp-ordering-web is intentionally NOT here, and
 * whatsapp-ordering-mobile is the flat reference screenshot (not a
 * generated photo) — gpt-image-2 hard-refuses this category's screenshot
 * as a content_policy_violation (reproducing WhatsApp's recognizable
 * trademarked UI), confirmed on two separate reworded attempts. Only the
 * flat screenshot represents this category for now.
 */
export const AVAILABLE_MOCKUP_ASSETS = new Set<string>([
  "pos-web",
  "online-store-mobile",
  "online-store-web",
  "inventory-mobile",
  "inventory-web",
  "products-mobile",
  "products-web",
  "customers-mobile",
  "customers-web",
  "suppliers-mobile",
  "suppliers-web",
  "reporting-mobile",
  "reporting-web",
  "compliance-mobile",
  "compliance-web",
  "access-mobile",
  "access-web",
  "ai-forecasting-mobile",
  "ai-forecasting-web",
  "smart-inventory-mobile",
  "smart-inventory-web",
  "integrations-mobile",
  "integrations-web",
  "mobile-app-mobile",
  "mobile-app-web",
  "whatsapp-ordering-mobile",
]);

export function mockupAssetKey(categoryId: string, variant: "web" | "mobile") {
  return `${categoryId}-${variant}`;
}
