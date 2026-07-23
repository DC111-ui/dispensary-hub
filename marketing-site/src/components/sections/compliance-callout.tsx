import Link from "next/link";
import { ArrowRight, FileClock, GitBranch } from "lucide-react";

import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { Button } from "@/components/ui/button";
import { IconBadge } from "@/components/shared/icon-badge";

function ComplianceCallout() {
  return (
    <section className="py-16 sm:py-20">
      <Container className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div className="flex flex-col gap-6">
          <SectionHeading
            eyebrow="Built for inspections"
            title="Know where everything came from — and where it went"
            description="We keep track of every product and every sale automatically, so you can answer any question during an inspection."
          />
          <Link href="/compliance" className="w-fit">
            <Button variant="outline">
              See how it works
              <ArrowRight className="size-4" />
            </Button>
          </Link>
        </div>

        <div className="border-border bg-card grid gap-4 rounded-2xl border p-6 shadow-sm sm:grid-cols-2">
          <div className="flex flex-col gap-3">
            <IconBadge icon={GitBranch} />
            <h3 className="font-semibold">Follow every product</h3>
            <p className="text-muted-foreground text-sm">
              From your supplier, to your shelf, to your customer — all connected.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <IconBadge icon={FileClock} />
            <h3 className="font-semibold">A complete history</h3>
            <p className="text-muted-foreground text-sm">
              Every action is saved — who did it, what they did, and when. Nothing can be changed or deleted.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}

export { ComplianceCallout };
