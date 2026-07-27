import type { MetadataRoute } from "next";

import { SITE_URL } from "@/lib/constants/site";
import { FEATURE_CATEGORIES } from "@/lib/constants/features";

const STATIC_ROUTES: { path: string; priority: number }[] = [
  { path: "/", priority: 1 },
  { path: "/features", priority: 0.9 },
  { path: "/pricing", priority: 0.9 },
  { path: "/guide", priority: 0.5 },
  { path: "/compliance", priority: 0.7 },
  { path: "/about", priority: 0.6 },
  { path: "/contact", priority: 0.8 },
  { path: "/privacy", priority: 0.3 },
  { path: "/terms", priority: 0.3 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  // No lastModified: we have no reliable per-page content-change date, and
  // stamping every entry with the build time on every deploy is a worse
  // signal than omitting it (Google treats a lastmod that always matches
  // crawl/build time as unreliable and may discount it).
  const staticEntries = STATIC_ROUTES.map(({ path, priority }) => ({
    url: `${SITE_URL}${path}`,
    changeFrequency: "monthly" as const,
    priority,
  }));

  const featureEntries = FEATURE_CATEGORIES.map((category) => ({
    url: `${SITE_URL}/features/${category.id}`,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticEntries, ...featureEntries];
}
