import type { Metadata } from "next";

import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { FeatureCategoryDetail } from "@/components/features/feature-category-detail";
import { RoadmapCard } from "@/components/features/roadmap-card";
import { FEATURE_CATEGORIES } from "@/lib/constants/features";
import { ROADMAP_ITEMS } from "@/lib/constants/roadmap";

export const metadata: Metadata = {
  title: "Features",
  description:
    "Everything LeafLedger does — sales, stock, customers, suppliers, reports, compliance, and staff access, all in one place.",
};

export default function FeaturesPage() {
  return (
    <>
      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Features"
            title="Everything your store needs, in one platform"
            description="Eight areas that cover everything you do in your store, every day."
            align="center"
            className="mx-auto"
          />
        </Container>
      </section>

      <section className="pb-16 sm:pb-20">
        <Container className="flex flex-col gap-6">
          {FEATURE_CATEGORIES.map((category) => (
            <FeatureCategoryDetail key={category.id} category={category} />
          ))}
        </Container>
      </section>

      <section id="roadmap" className="bg-secondary/30 py-16 sm:py-20 scroll-mt-20">
        <Container className="flex flex-col gap-10">
          <SectionHeading
            eyebrow="Roadmap"
            title="Coming soon"
            description="These aren't built yet — they're what we're building next. Nothing here is live in the product today."
            align="center"
            className="mx-auto"
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {ROADMAP_ITEMS.map((item) => (
              <RoadmapCard key={item.id} item={item} />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
