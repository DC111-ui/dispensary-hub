import { Layers, ShieldCheck, LineChart, Building2 } from "lucide-react";

import { Container } from "@/components/shared/container";
import { IconBadge } from "@/components/shared/icon-badge";

const VALUE_PROPS = [
  {
    icon: Layers,
    title: "One system, not five",
    description: "Sales, inventory, customers, suppliers, and reporting in a single dashboard.",
  },
  {
    icon: ShieldCheck,
    title: "Compliance built in",
    description: "An immutable audit trail and full batch traceability, not bolted on after the fact.",
  },
  {
    icon: LineChart,
    title: "Owner-level visibility",
    description: "Real KPIs and reports so you always know how the business is actually doing.",
  },
  {
    icon: Building2,
    title: "Built to scale with you",
    description: "From a single counter to multi-store operations, with role-based access throughout.",
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
