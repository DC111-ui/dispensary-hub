import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";

import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { Button } from "@/components/ui/button";
import { FeatureVisual } from "@/components/features/feature-visual";
import { FEATURE_CATEGORIES } from "@/lib/constants/features";
import { buildMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return FEATURE_CATEGORIES.map((category) => ({ slug: category.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const category = FEATURE_CATEGORIES.find((item) => item.id === slug);
  if (!category) return {};

  return buildMetadata({
    title: category.title,
    description: category.overview,
    path: `/features/${slug}`,
  });
}

export default async function FeatureDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const category = FEATURE_CATEGORIES.find((item) => item.id === slug);
  if (!category) notFound();

  return (
    <>
      <section className="pt-10">
        <Container>
          <Link
            href="/features"
            className="text-muted-foreground hover:text-foreground inline-flex items-center gap-1 text-sm"
          >
            <ArrowLeft className="size-4" />
            All features
          </Link>
        </Container>
      </section>

      <section className="py-10 sm:py-14">
        <Container>
          <SectionHeading
            eyebrow="Features"
            title={category.title}
            description={category.tagline}
          />
        </Container>
      </section>

      <section className="pb-10">
        <Container>
          <FeatureVisual category={category} />
        </Container>
      </section>

      <section className="pb-16 sm:pb-20">
        <Container className="grid gap-10 lg:grid-cols-2">
          <p className="text-muted-foreground text-base leading-7">
            {category.overview}
          </p>
          <ul className="flex flex-col gap-3">
            {category.highlights.map((highlight) => (
              <li key={highlight} className="flex items-start gap-2 text-sm">
                <Check className="text-primary mt-0.5 size-4 shrink-0" />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="bg-secondary/30 py-16 sm:py-20">
        <Container className="flex flex-col items-center gap-6 text-center">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            See {category.title} in action
          </h2>
          <Link href="/contact">
            <Button size="lg">
              Book a free demo
              <ArrowRight className="size-4" />
            </Button>
          </Link>
          <p className="text-muted-foreground text-sm">No cost, no obligation.</p>
        </Container>
      </section>
    </>
  );
}
