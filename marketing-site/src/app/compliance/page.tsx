import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { Button } from "@/components/ui/button";
import { TraceabilityDiagram } from "@/components/compliance/traceability-diagram";
import { AuditLogExplainer } from "@/components/compliance/audit-log-explainer";

export const metadata: Metadata = {
  title: "Compliance & Traceability",
  description:
    "See how LeafLedger keeps regulated retailers audit-ready with a full batch traceability chain and an immutable audit log.",
};

export default function CompliancePage() {
  return (
    <>
      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Compliance"
            title="Built for inspection-ready operations"
            description="Regulated retail runs on records. LeafLedger keeps a complete, tamper-proof trail from every supplier delivery to every sale."
            align="center"
            className="mx-auto"
          />
        </Container>
      </section>

      <section className="pb-16 sm:pb-20">
        <Container className="flex flex-col gap-8">
          <div className="flex flex-col gap-2 text-center">
            <h2 className="text-2xl font-semibold tracking-tight">
              The batch traceability chain
            </h2>
            <p className="text-muted-foreground mx-auto max-w-2xl">
              Every batch is linked end to end, so any product on the shelf can be
              traced back to the supplier that delivered it — and any sale can be
              traced forward to the customer who bought it.
            </p>
          </div>
          <TraceabilityDiagram />
        </Container>
      </section>

      <section className="bg-secondary/30 py-16 sm:py-20">
        <Container className="flex flex-col gap-10">
          <SectionHeading
            eyebrow="Audit log"
            title="A record you can stand behind"
            description="Compliance isn't a report you generate once a quarter — it's built into how every action in the system is recorded."
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
              Book a demo
              <ArrowRight className="size-4" />
            </Button>
          </Link>
        </Container>
      </section>
    </>
  );
}
