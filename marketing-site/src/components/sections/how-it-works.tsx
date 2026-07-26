import { ArrowDown, ArrowRight } from "lucide-react";

import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";

const STEPS = [
  {
    step: "01",
    title: "Set up your catalog",
    description: "Add your products, batches, and suppliers, or start fresh.",
  },
  {
    step: "02",
    title: "Sell and track in real time",
    description: "Every sale updates your stock and customer records automatically.",
  },
  {
    step: "03",
    title: "Stay ready for inspections",
    description: "Every batch and sale is recorded automatically, so your records are always ready when you need them.",
  },
];

function HowItWorks() {
  return (
    <section className="bg-secondary/30 py-20 sm:py-24">
      <Container>
        <div className="flex flex-col gap-10">
          <SectionHeading
            eyebrow="How it works"
            title="Up and running in three steps"
            align="center"
            className="mx-auto"
          />
          <div className="flex flex-col items-stretch gap-4 sm:flex-row sm:items-start">
            {STEPS.map(({ step, title, description }, index) => (
              <div key={step} className="flex flex-1 flex-col items-center sm:flex-row">
                <div className="flex flex-1 flex-col gap-3 text-center sm:text-left">
                  <span className="text-primary text-4xl font-semibold">{step}</span>
                  <h3 className="font-semibold">{title}</h3>
                  <p className="text-muted-foreground text-sm">{description}</p>
                </div>
                {index < STEPS.length - 1 ? (
                  <>
                    <ArrowDown className="text-muted-foreground my-4 size-5 shrink-0 sm:hidden" />
                    <ArrowRight className="text-muted-foreground mt-8 ml-4 hidden size-5 shrink-0 sm:block" />
                  </>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

export { HowItWorks };
