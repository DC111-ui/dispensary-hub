import { Check } from "lucide-react";

import { DesktopFrame } from "./shell";
import { DEMO_INTEGRATIONS, DEMO_STAFF } from "@/lib/constants/demo-data";

const GROUPS: { label: string; items: string[]; connected: string[] }[] = [
  { label: "Accounting", items: DEMO_INTEGRATIONS.accounting, connected: ["Xero"] },
  { label: "Payments", items: DEMO_INTEGRATIONS.payments, connected: ["Yoco", "PayFast"] },
  { label: "Messaging", items: DEMO_INTEGRATIONS.messaging, connected: ["WhatsApp"] },
  { label: "Marketing", items: DEMO_INTEGRATIONS.marketing, connected: [] },
];

function IntegrationsMockup() {
  return (
    <DesktopFrame
      active="integrations"
      path="settings/integrations"
      staffName={DEMO_STAFF.owner.name}
      staffInitials={DEMO_STAFF.owner.initials}
    >
      <div className="grid h-full grid-cols-1 gap-3 overflow-hidden sm:grid-cols-2">
        {GROUPS.map((group) => (
          <div key={group.label} className="border-border bg-background rounded-xl border p-3">
            <p className="text-muted-foreground mb-2 text-[10px] font-semibold tracking-wide uppercase">
              {group.label}
            </p>
            <div className="space-y-1.5">
              {group.items.map((item) => {
                const connected = group.connected.includes(item);
                return (
                  <div
                    key={item}
                    className="border-border/70 flex items-center justify-between rounded-lg border px-2.5 py-1.5 text-xs"
                  >
                    <span className="font-medium">{item}</span>
                    {connected ? (
                      <span className="text-primary flex items-center gap-1 text-[10px] font-medium">
                        <Check className="size-3" /> Connected
                      </span>
                    ) : (
                      <span className="text-muted-foreground text-[10px]">Connect</span>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </DesktopFrame>
  );
}

export { IntegrationsMockup };
