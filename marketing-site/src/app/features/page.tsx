import type { Metadata } from "next";

import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { FeatureCategoryDetail } from "@/components/features/feature-category-detail";
import { FEATURE_CATEGORIES } from "@/lib/constants/features";

export const metadata: Metadata = {
  title: "Features",
  description:
    "Everything LeafLedger does: sales, stock, customers, suppliers, reports, compliance, staff access, online ordering, and more, all in one place.",
};

export default function FeaturesPage() {
  return (
    <>
      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Features"
            title="Everything your store needs, in one platform"
            description="Everything you do in your store, every day, covered in one place."
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
    </>
  );
}
