import { Layers, ShieldCheck, LineChart, Building2 } from "lucide-react";

import { Container } from "@/components/shared/container";
import { IconBadge } from "@/components/shared/icon-badge";
import { LazyRevealGroup, LazyRevealItem } from "@/components/motion/lazy-reveal";

const VALUE_PROPS = [
  {
    icon: Layers,
    title: "One system, not five",
    description: "Everything you need in one app. No more juggling notebooks and spreadsheets.",
  },
  {
    icon: ShieldCheck,
    title: "Compliance built in",
    description: "We keep track of everything automatically, so you're always ready if someone checks your records.",
  },
  {
    icon: LineChart,
    title: "Numbers you can trust",
    description: "The numbers that matter, without the spreadsheet.",
  },
  {
    icon: Building2,
    title: "One account, every store",
    description: "The right access, for the right person, at every location.",
  },
];

function ValueProps() {
  return (
    <section className="py-12 sm:py-16">
      <Container>
        <LazyRevealGroup className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {VALUE_PROPS.map(({ icon, title, description }) => (
            <LazyRevealItem key={title} className="flex flex-col gap-4">
              <IconBadge icon={icon} />
              <div className="flex flex-col gap-1.5">
                <h3 className="font-semibold">{title}</h3>
                <p className="text-muted-foreground text-sm">{description}</p>
              </div>
            </LazyRevealItem>
          ))}
        </LazyRevealGroup>
      </Container>
    </section>
  );
}

export { ValueProps };
