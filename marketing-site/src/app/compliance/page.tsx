import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { Button } from "@/components/ui/button";
import { TraceabilityDiagram } from "@/components/compliance/traceability-diagram";
import { AuditLogExplainer } from "@/components/compliance/audit-log-explainer";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Compliance & Traceability",
  description:
    "See how LeafLedger keeps your records ready for any inspection, automatically.",
  path: "/compliance",
});

export default function CompliancePage() {
  return (
    <>
      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Compliance"
            title="Built to make inspections easy"
            titleClassName="text-4xl sm:text-5xl font-bold"
            description="Your business runs on paperwork and records. LeafLedger keeps track of everything automatically, from the moment stock arrives to the moment it's sold."
            className="max-w-2xl"
          />
        </Container>
      </section>

      <section className="pb-16 sm:pb-20">
        <Container className="flex flex-col gap-8">
          <div className="flex flex-col gap-2 text-center">
            <h2 className="text-2xl font-semibold tracking-tight">
              Where your products come from and where they go
            </h2>
            <p className="text-muted-foreground mx-auto max-w-2xl">
              Every product is linked, start to finish. You can trace anything
              on your shelf back to the supplier who delivered it, or trace a
              sale forward to the customer who bought it.
            </p>
          </div>
          <TraceabilityDiagram />
        </Container>
      </section>

      <section className="bg-secondary/30 py-16 sm:py-20">
        <Container className="flex flex-col gap-10">
          <SectionHeading
            eyebrow="Records"
            title="A record you can stand behind"
            description="You don't need to create reports by hand. Every action is recorded automatically, all the time."
            align="center"
            className="mx-auto"
          />
          <AuditLogExplainer />
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container className="flex flex-col items-center gap-6 text-center">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Ready to see it on your own data?
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
