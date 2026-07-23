import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";

const STEPS = [
  {
    step: "01",
    title: "Set up your catalog",
    description: "Add your products, batches, and suppliers — or start fresh.",
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
    <section className="bg-secondary/30 py-16 sm:py-20">
      <Container className="flex flex-col gap-10">
        <SectionHeading
          eyebrow="How it works"
          title="Up and running in three steps"
          align="center"
          className="mx-auto"
        />
        <div className="grid gap-8 sm:grid-cols-3">
          {STEPS.map(({ step, title, description }) => (
            <div key={step} className="flex flex-col gap-3">
              <span className="text-primary text-4xl font-semibold">{step}</span>
              <h3 className="font-semibold">{title}</h3>
              <p className="text-muted-foreground text-sm">{description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export { HowItWorks };
