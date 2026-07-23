import Link from "next/link";
import { ArrowRight, FileClock, GitBranch } from "lucide-react";

import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { Button } from "@/components/ui/button";
import { IconBadge } from "@/components/shared/icon-badge";

function ComplianceCallout() {
  return (
    <section className="py-16 sm:py-20">
      <Container className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div className="flex flex-col gap-6">
          <SectionHeading
            eyebrow="Compliance-grade by design"
            title="Every batch, every sale — fully traceable"
            description="An immutable audit log and a complete traceability chain from supplier through to sale, so you're always ready for an inspection."
          />
          <Link href="/compliance" className="w-fit">
            <Button variant="outline">
              See how traceability works
              <ArrowRight className="size-4" />
            </Button>
          </Link>
        </div>

        <div className="border-border bg-card grid gap-4 rounded-2xl border p-6 shadow-sm sm:grid-cols-2">
          <div className="flex flex-col gap-3">
            <IconBadge icon={GitBranch} />
            <h3 className="font-semibold">Full traceability chain</h3>
            <p className="text-muted-foreground text-sm">
              Supplier → Purchase → Store → Sale → Customer, linked end to end.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <IconBadge icon={FileClock} />
            <h3 className="font-semibold">Immutable audit log</h3>
            <p className="text-muted-foreground text-sm">
              Every action recorded with who, what, and when — never edited or deleted.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}

export { ComplianceCallout };
