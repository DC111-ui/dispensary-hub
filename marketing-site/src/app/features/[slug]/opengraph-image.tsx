import { FEATURE_CATEGORIES } from "@/lib/constants/features";
import { OG_IMAGE_CONTENT_TYPE, OG_IMAGE_SIZE, renderOgImage } from "@/lib/og-image";

export const size = OG_IMAGE_SIZE;
export const contentType = OG_IMAGE_CONTENT_TYPE;

export function generateStaticParams() {
  return FEATURE_CATEGORIES.map((category) => ({ slug: category.id }));
}

export default async function OpengraphImage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const category = FEATURE_CATEGORIES.find((item) => item.id === slug);

  return renderOgImage({
    eyebrow: "Features",
    title: category?.title ?? "LeafLedger",
    description: category?.tagline ?? "One simple system for cannabis retail.",
  });
}
