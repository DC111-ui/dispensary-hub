import { Layers, ShieldCheck, LineChart, Building2 } from "lucide-react";

import { Container } from "@/components/shared/container";
import { IconBadge } from "@/components/shared/icon-badge";

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
    title: "See how your store is doing",
    description: "Clear numbers on sales and stock. No spreadsheets, no guessing.",
  },
  {
    icon: Building2,
    title: "Grows with you",
    description: "Works for one store or many, with the right access for every staff member.",
  },
];

function ValueProps() {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {VALUE_PROPS.map(({ icon, title, description }) => (
            <div key={title} className="flex flex-col gap-4">
              <IconBadge icon={icon} />
              <div className="flex flex-col gap-1.5">
                <h3 className="font-semibold">{title}</h3>
                <p className="text-muted-foreground text-sm">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export { ValueProps };
