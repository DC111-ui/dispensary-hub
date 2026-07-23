import Link from "next/link";
import { ArrowRight, ShieldCheck, Boxes, Users, Store } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/shared/container";

const HERO_TILES = [
  { icon: Store, label: "Point of Sale" },
  { icon: Boxes, label: "Batch Inventory" },
  { icon: Users, label: "Customers & Loyalty" },
  { icon: ShieldCheck, label: "Compliance & Audit" },
];

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="from-accent/60 via-background to-background pointer-events-none absolute inset-0 bg-gradient-to-br" />
      <Container className="relative grid gap-12 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:py-28">
        <div className="flex flex-col gap-6">
          <span className="border-border bg-background/70 text-muted-foreground w-fit rounded-full border px-3 py-1 text-xs font-medium tracking-wide uppercase">
            Now onboarding early customers
          </span>
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
            The cloud platform for regulated retailers.
          </h1>
          <p className="text-muted-foreground max-w-xl text-lg">
            Run sales, inventory, customers, suppliers, and compliance from a single
            dashboard — built for retailers who operate under strict record-keeping
            and traceability requirements.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link href="/contact?plan=professional">
              <Button size="lg" className="w-full sm:w-auto">
                Book a demo
                <ArrowRight className="size-4" />
              </Button>
            </Link>
            <Link href="/features">
              <Button size="lg" variant="outline" className="w-full sm:w-auto">
                Explore features
              </Button>
            </Link>
          </div>
        </div>

        <div className="relative">
          <div className="border-border bg-card/80 grid grid-cols-2 gap-4 rounded-2xl border p-6 shadow-xl backdrop-blur-sm">
            {HERO_TILES.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="border-border bg-background flex flex-col items-start gap-3 rounded-xl border p-5"
              >
                <span className="bg-accent text-accent-foreground flex size-9 items-center justify-center rounded-lg">
                  <Icon className="size-4.5" />
                </span>
                <span className="text-sm font-medium">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

export { Hero };
