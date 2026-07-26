import { Sparkles } from "lucide-react";

import { DesktopFrame, StatTile } from "./shell";
import { DEMO_STAFF } from "@/lib/constants/demo-data";

function AiForecastingMockup() {
  return (
    <DesktopFrame
      active="ai-forecasting"
      path="assistant"
      staffName={DEMO_STAFF.owner.name}
      staffInitials={DEMO_STAFF.owner.initials}
    >
      <div className="flex h-full flex-col gap-3">
        <div className="border-border bg-background flex items-start gap-2.5 rounded-xl border p-3">
          <span className="bg-accent text-accent-foreground flex size-7 shrink-0 items-center justify-center rounded-full">
            <Sparkles className="size-3.5" />
          </span>
          <p className="text-xs leading-relaxed">
            Blue Dream 3.5g is selling faster than usual this week. At the
            current pace, Cape Town CBD runs out in <b>4 days</b>. Want me to
            raise a purchase order with Cape Canna Farms?
          </p>
        </div>
        <div className="flex justify-end">
          <div className="bg-primary text-primary-foreground max-w-[80%] rounded-xl px-3 py-2 text-xs">
            Yes, order 40 units
          </div>
        </div>
        <div className="border-border bg-background flex items-start gap-2.5 rounded-xl border p-3">
          <span className="bg-accent text-accent-foreground flex size-7 shrink-0 items-center justify-center rounded-full">
            <Sparkles className="size-3.5" />
          </span>
          <p className="text-xs leading-relaxed">
            Done: PO-1043 sent to Cape Canna Farms for 40 units, expected in
            3 days.
          </p>
        </div>

        <div className="mt-auto grid grid-cols-3 gap-2.5">
          <StatTile label="Restock predictions" value="6" hint="Active this week" />
          <StatTile label="Slow movers flagged" value="2" hint="Girl Scout Cookies, +1" />
          <StatTile label="Forecast accuracy" value="91%" hint="Last 30 days" />
        </div>
      </div>
    </DesktopFrame>
  );
}

export { AiForecastingMockup };
