import { Check } from "lucide-react";

import { DesktopFrame } from "./shell";
import { DEMO_STAFF, DEMO_STORES } from "@/lib/constants/demo-data";

const STAFF_LIST = [
  { ...DEMO_STAFF.owner, store: "Both stores" },
  { ...DEMO_STAFF.cashier, store: DEMO_STORES[0].name },
  { ...DEMO_STAFF.inventory, store: DEMO_STORES[1].name },
];

function AccessMockup() {
  return (
    <DesktopFrame
      active="access"
      path="settings/access"
      staffName={DEMO_STAFF.owner.name}
      staffInitials={DEMO_STAFF.owner.initials}
    >
      <div className="flex h-full flex-col gap-4">
        <div className="grid grid-cols-2 gap-2.5">
          {DEMO_STORES.map((store, i) => (
            <div
              key={store.id}
              className={
                i === 0
                  ? "border-primary bg-accent flex items-center justify-between rounded-xl border p-3"
                  : "border-border bg-background flex items-center justify-between rounded-xl border p-3"
              }
            >
              <span className="text-xs font-medium">{store.name}</span>
              {i === 0 && <Check className="text-primary size-3.5" />}
            </div>
          ))}
        </div>

        <div className="border-border bg-background min-h-0 flex-1 overflow-hidden rounded-xl border">
          <div className="text-muted-foreground grid grid-cols-[1.3fr_1fr_1fr] gap-2 border-b border-border px-3 py-2 text-[10px] font-semibold tracking-wide uppercase">
            <span>Staff member</span>
            <span>Role</span>
            <span>Access</span>
          </div>
          {STAFF_LIST.map((staff) => (
            <div
              key={staff.name + staff.role}
              className="border-border grid grid-cols-[1.3fr_1fr_1fr] items-center gap-2 border-b px-3 py-2.5 text-xs last:border-b-0"
            >
              <span className="truncate font-medium">{staff.name}</span>
              <span className="text-muted-foreground">{staff.role}</span>
              <span className="text-muted-foreground">{staff.store}</span>
            </div>
          ))}
        </div>
      </div>
    </DesktopFrame>
  );
}

export { AccessMockup };
