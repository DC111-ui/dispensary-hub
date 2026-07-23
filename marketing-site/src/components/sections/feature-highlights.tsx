import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { Button } from "@/components/ui/button";
import { FeatureCategoryCard } from "@/components/features/feature-category-card";
import { FEATURE_CATEGORIES } from "@/lib/constants/features";

function FeatureHighlights() {
  const featured = FEATURE_CATEGORIES.filter((category) => category.homeFeatured);

  return (
    <section className="py-16 sm:py-20">
      <Container className="flex flex-col gap-10">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="Everything in one place"
            title="Built for how regulated retail actually runs"
            description="From the counter to the back office, LeafLedger covers every part of the day-to-day."
          />
          <Link href="/features" className="shrink-0">
            <Button variant="outline">
              View all features
              <ArrowRight className="size-4" />
            </Button>
          </Link>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((category) => (
            <FeatureCategoryCard key={category.id} category={category} />
          ))}
        </div>
      </Container>
    </section>
  );
}

export { FeatureHighlights };
