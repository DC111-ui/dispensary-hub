import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ROADMAP_ITEMS } from "@/lib/constants/roadmap";

function RoadmapTeaser() {
  const preview = ROADMAP_ITEMS.slice(0, 4);

  return (
    <section className="bg-secondary/30 py-16 sm:py-20">
      <Container className="flex flex-col gap-10">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="What's next"
            title="On the roadmap"
            description="We're building beyond the core platform. Here's what's coming next."
          />
          <Link href="/features#roadmap" className="shrink-0">
            <Button variant="outline">
              See full roadmap
              <ArrowRight className="size-4" />
            </Button>
          </Link>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {preview.map(({ id, title, description, icon: Icon }) => (
            <div
              key={id}
              className="border-border bg-background/60 flex flex-col gap-3 rounded-xl border border-dashed p-5"
            >
              <div className="flex items-center justify-between">
                <Icon className="text-muted-foreground size-5" />
                <Badge variant="accent">Coming soon</Badge>
              </div>
              <h3 className="text-sm font-semibold">{title}</h3>
              <p className="text-muted-foreground text-sm">{description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export { RoadmapTeaser };
