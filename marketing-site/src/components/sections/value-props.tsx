import { Layers, ShieldCheck, LineChart, Building2 } from "lucide-react";

import { Container } from "@/components/shared/container";
import { IconBadge } from "@/components/shared/icon-badge";

const VALUE_PROPS = [
  {
    icon: Layers,
    tone: "rust" as const,
    title: "One system, not five",
    description: "Everything you need in one app. No more juggling notebooks and spreadsheets.",
  },
  {
    icon: ShieldCheck,
    tone: "chartreuse" as const,
    title: "Compliance built in",
    description: "We keep track of everything automatically, so you're always ready if someone checks your records.",
  },
  {
    icon: LineChart,
    tone: "green" as const,
    title: "Numbers you can trust",
    description: "The numbers that matter, without the spreadsheet.",
  },
  {
    icon: Building2,
    tone: "teal" as const,
    title: "One account, every store",
    description: "The right access, for the right person, at every location.",
  },
];

function ValueProps() {
  return (
    <section className="py-12 sm:py-16">
      <Container>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {VALUE_PROPS.map(({ icon, tone, title, description }) => (
            <div key={title} className="flex flex-col gap-4">
              <IconBadge icon={icon} tone={tone} />
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
