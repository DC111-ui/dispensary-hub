export type InsightArticle = {
  title: string;
  excerpt: string;
  category: string;
  authorName: string;
  href: string;
};

/**
 * PLACEHOLDER DATA.
 *
 * No blog/insights content exists yet. Do not ship this file as-is:
 * replace every entry below with a real article before the Insights
 * section goes live, and point `href` at the real published post.
 */
export const PLACEHOLDER_INSIGHTS: InsightArticle[] = [
  {
    title: "Replace with a real article title, e.g. what to have ready before an inspection",
    excerpt: "Replace with a one to two sentence summary of the real article.",
    category: "Compliance",
    authorName: "Author name",
    href: "#",
  },
  {
    title: "Replace with a second real article title, ideally about day-to-day operations",
    excerpt: "Replace with a one to two sentence summary of the real article.",
    category: "Operations",
    authorName: "Author name",
    href: "#",
  },
  {
    title: "Replace with a third real article title, ideally about growing a club or store",
    excerpt: "Replace with a one to two sentence summary of the real article.",
    category: "Growth",
    authorName: "Author name",
    href: "#",
  },
];
