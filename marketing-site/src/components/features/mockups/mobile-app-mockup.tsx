import { AlertTriangle, ShoppingCart, Package, Users } from "lucide-react";

import { PhoneFrame, StatTile } from "./shell";
import { DEMO_STAFF, DEMO_STORES } from "@/lib/constants/demo-data";

const QUICK_ACTIONS = [
  { icon: ShoppingCart, label: "Sales" },
  { icon: Package, label: "Stock" },
  { icon: Users, label: "Customers" },
];

function MobileAppMockup() {
  return (
    <PhoneFrame>
      <div className="flex h-full flex-col gap-3 p-3">
        <div>
          <p className="text-muted-foreground text-[10px]">{DEMO_STORES[0].name}</p>
          <p className="text-sm font-semibold">Good afternoon, {DEMO_STAFF.owner.name.split(" ")[0]}</p>
        </div>

        <div className="grid grid-cols-2 gap-2">
          <StatTile label="Today's sales" value="R14,230" />
          <StatTile label="Units sold" value="97" />
        </div>

        <div className="grid grid-cols-3 gap-2">
          {QUICK_ACTIONS.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="border-border bg-background flex flex-col items-center gap-1.5 rounded-xl border py-2.5"
            >
              <Icon className="text-primary size-4" />
              <span className="text-[10px] font-medium">{label}</span>
            </div>
          ))}
        </div>

        <div className="border-border bg-background flex items-start gap-2.5 rounded-xl border p-2.5">
          <AlertTriangle className="text-destructive mt-0.5 size-3.5 shrink-0" />
          <p className="text-[11px] leading-snug">
            Girl Scout Cookies 3.5g is down to 6 units at Cape Town CBD
          </p>
        </div>

        <div className="border-border bg-background flex-1 rounded-xl border p-2.5">
          <p className="mb-1.5 text-[10px] font-semibold">Recent sales</p>
          <div className="space-y-1.5 text-[11px]">
            <div className="flex justify-between">
              <span>Blue Dream 3.5g</span>
              <span className="text-muted-foreground">R280</span>
            </div>
            <div className="flex justify-between">
              <span>OG Kush Pre-Roll ×2</span>
              <span className="text-muted-foreground">R130</span>
            </div>
          </div>
        </div>
      </div>
    </PhoneFrame>
  );
}

export { MobileAppMockup };
