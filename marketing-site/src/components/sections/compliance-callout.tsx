import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { Button } from "@/components/ui/button";
import { TraceabilityDiagram } from "@/components/compliance/traceability-diagram";
import { LazyReveal } from "@/components/motion/lazy-reveal";

function ComplianceCallout() {
  return (
    <section className="py-20 sm:py-24">
      <Container>
        <LazyReveal className="flex flex-col gap-10">
          <SectionHeading
            eyebrow="Built for inspections"
            title="If SAPS walks in tomorrow, can you answer every question?"
            description="Every product is traced from the supplier who delivered it to the member who received it. Nothing is recorded by hand, and nothing can be quietly edited afterward, so when an inspection happens, the record is already there."
          />
          <TraceabilityDiagram compact />
          <Link href="/compliance" className="w-fit">
            <Button variant="outline">
              See how it works
              <ArrowRight className="size-4" />
            </Button>
          </Link>
        </LazyReveal>
      </Container>
    </section>
  );
}

export { ComplianceCallout };
