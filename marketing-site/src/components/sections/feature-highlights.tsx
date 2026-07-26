import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { Button } from "@/components/ui/button";
import { FeatureCategoryCard } from "@/components/features/feature-category-card";
import { FEATURE_CATEGORIES, HOME_FEATURED_ORDER } from "@/lib/constants/features";
import { LazyRevealGroup, LazyRevealItem } from "@/components/motion/lazy-reveal";

function FeatureHighlights() {
  const featured = FEATURE_CATEGORIES
    .filter((category) => category.homeFeatured)
    .sort((a, b) => HOME_FEATURED_ORDER.indexOf(a.id) - HOME_FEATURED_ORDER.indexOf(b.id));

  return (
    <section className="py-16 sm:py-20">
      <Container className="flex flex-col gap-10">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="A closer look"
            title="The parts you'll use every day"
            description="A quick look at the core of LeafLedger. The full list covers a lot more."
          />
          <Link href="/features" className="shrink-0">
            <Button variant="outline">
              View all features
              <ArrowRight className="size-4" />
            </Button>
          </Link>
        </div>

        <LazyRevealGroup className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((category) => (
            <LazyRevealItem key={category.id}>
              <FeatureCategoryCard category={category} />
            </LazyRevealItem>
          ))}
        </LazyRevealGroup>
      </Container>
    </section>
  );
}

export { FeatureHighlights };
