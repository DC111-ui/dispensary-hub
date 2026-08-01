import Link from "next/link";

import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { PLACEHOLDER_INSIGHTS } from "@/lib/constants/insights";

/**
 * Article/insights grid. Not wired into src/app/page.tsx yet — the data it
 * reads (PLACEHOLDER_INSIGHTS) is unfilled placeholder copy. Once real
 * articles exist, replace that constant and import this component into the
 * homepage section list.
 */
function InsightsGrid() {
  return (
    <section className="py-24 sm:py-32">
      <Container className="flex flex-col gap-16">
        <SectionHeading
          eyebrow="Insights"
          title="Ideas to help you run your club"
          description="Plain-language guides on compliance, day-to-day operations, and growing your store."
          align="center"
          className="mx-auto max-w-2xl"
        />

        <div className="grid gap-8 sm:grid-cols-3">
          {PLACEHOLDER_INSIGHTS.map((article) => (
            <Link key={article.title} href={article.href} className="group flex flex-col gap-4">
              <div className="bg-secondary/50 border-border/60 aspect-[4/3] overflow-hidden rounded-2xl border">
                <div className="text-muted-foreground/50 flex h-full w-full items-center justify-center text-sm">
                  Article image
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-primary text-xs font-semibold tracking-wide uppercase">
                  {article.category}
                </span>
                <h3 className="group-hover:text-muted-foreground text-lg leading-snug font-semibold transition-colors">
                  {article.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{article.excerpt}</p>
                <span className="text-muted-foreground text-xs">By {article.authorName}</span>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}

export { InsightsGrid };
