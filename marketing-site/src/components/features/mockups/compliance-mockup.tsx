import { ArrowRight } from "lucide-react";

import { DesktopFrame } from "./shell";
import { DEMO_STAFF } from "@/lib/constants/demo-data";

const TRAIL = ["Supplier", "Purchase", "Store stock", "Sale", "Customer"];

const LOG = [
  { time: "23 Jul, 11:42", who: DEMO_STAFF.compliance.name, what: "Ran inspection export for Batch BD-0472" },
  { time: "23 Jul, 09:15", who: DEMO_STAFF.cashier.name, what: "Sold Girl Scout Cookies 3.5g to Jason Petersen" },
  { time: "22 Jul, 16:03", who: DEMO_STAFF.inventory.name, what: "Transferred 10 units of BD-0472 to Sandton" },
  { time: "22 Jul, 08:30", who: DEMO_STAFF.inventory.name, what: "Received Batch NL-0640 from Highveld Herb Co." },
];

function ComplianceMockup() {
  return (
    <DesktopFrame
      active="compliance"
      path="compliance"
      staffName={DEMO_STAFF.compliance.name}
      staffInitials={DEMO_STAFF.compliance.initials}
    >
      <div className="flex h-full flex-col gap-4">
        <div className="border-border bg-background rounded-xl border p-4">
          <p className="mb-3 text-xs font-semibold">Where Batch BD-0472 came from</p>
          <div className="flex flex-wrap items-center gap-2">
            {TRAIL.map((step, i) => (
              <div key={step} className="flex items-center gap-2">
                <span className="border-border bg-secondary/50 rounded-full border px-2.5 py-1 text-[10px] font-medium">
                  {step}
                </span>
                {i < TRAIL.length - 1 && (
                  <ArrowRight className="text-muted-foreground size-3" />
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="border-border bg-background min-h-0 flex-1 overflow-hidden rounded-xl border">
          <div className="border-border border-b px-3 py-2 text-xs font-semibold">
            A record of every action, that can&apos;t be changed
          </div>
          {LOG.map((row) => (
            <div
              key={row.time + row.what}
              className="border-border flex items-center justify-between gap-3 border-b px-3 py-2.5 text-xs last:border-b-0"
            >
              <div className="min-w-0">
                <p className="truncate font-medium">{row.what}</p>
                <p className="text-muted-foreground">{row.who}</p>
              </div>
              <span className="text-muted-foreground shrink-0">{row.time}</span>
            </div>
          ))}
        </div>
      </div>
    </DesktopFrame>
  );
}

export { ComplianceMockup };
