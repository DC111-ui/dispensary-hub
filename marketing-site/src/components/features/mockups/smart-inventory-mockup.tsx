import { AlertTriangle, Clock, TrendingDown } from "lucide-react";

import { DesktopFrame } from "./shell";
import { DEMO_STAFF } from "@/lib/constants/demo-data";

const ALERTS = [
  {
    icon: AlertTriangle,
    title: "Girl Scout Cookies 3.5g: 6 units left",
    detail: "Reorder suggested: 30 units from Karoo Green Growers",
  },
  {
    icon: Clock,
    title: "Northern Lights 3.5g: expires in 9 days",
    detail: "3 units left. Consider a discount to move stock.",
  },
  {
    icon: TrendingDown,
    title: "CBD Calm Tincture 30ml: slow mover",
    detail: "Only 2 sold in the last 30 days across both stores",
  },
];

function SmartInventoryMockup() {
  return (
    <DesktopFrame
      active="inventory"
      path="inventory/alerts"
      staffName={DEMO_STAFF.inventory.name}
      staffInitials={DEMO_STAFF.inventory.initials}
    >
      <div className="flex h-full flex-col gap-3">
        <p className="text-xs font-semibold">Needs attention</p>
        {ALERTS.map(({ icon: Icon, title, detail }) => (
          <div
            key={title}
            className="border-border bg-background flex items-start gap-3 rounded-xl border p-3"
          >
            <span className="bg-accent text-accent-foreground flex size-7 shrink-0 items-center justify-center rounded-full">
              <Icon className="size-3.5" />
            </span>
            <div>
              <p className="text-xs font-medium">{title}</p>
              <p className="text-muted-foreground mt-0.5 text-[11px]">{detail}</p>
            </div>
          </div>
        ))}
      </div>
    </DesktopFrame>
  );
}

export { SmartInventoryMockup };
