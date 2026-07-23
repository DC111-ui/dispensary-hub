import { DesktopFrame } from "./shell";
import { DEMO_SUPPLIERS, DEMO_STAFF } from "@/lib/constants/demo-data";

const OPEN_ORDER = [
  { item: "Blue Dream 3.5g", qty: 40, cost: "R6,720" },
  { item: "Northern Lights 3.5g", qty: 25, cost: "R4,250" },
];

function SuppliersMockup() {
  return (
    <DesktopFrame
      active="suppliers"
      path="suppliers"
      staffName={DEMO_STAFF.manager.name}
      staffInitials={DEMO_STAFF.manager.initials}
    >
      <div className="grid h-full grid-cols-1 gap-4 sm:grid-cols-[1.2fr_1fr]">
        <div className="border-border bg-background flex min-h-0 flex-col overflow-hidden rounded-xl border">
          <div className="text-muted-foreground grid grid-cols-[1.4fr_0.7fr_0.7fr] gap-2 border-b border-border px-3 py-2 text-[10px] font-semibold tracking-wide uppercase">
            <span>Supplier</span>
            <span>Lead time</span>
            <span>On-time</span>
          </div>
          {DEMO_SUPPLIERS.map((supplier) => (
            <div
              key={supplier.name}
              className="border-border grid grid-cols-[1.4fr_0.7fr_0.7fr] items-center gap-2 border-b px-3 py-2.5 text-xs last:border-b-0"
            >
              <span className="truncate font-medium">{supplier.name}</span>
              <span className="text-muted-foreground">{supplier.leadTime}</span>
              <span className="text-primary font-medium">{supplier.onTime}</span>
            </div>
          ))}
        </div>

        <div className="border-border bg-background flex flex-col rounded-xl border">
          <div className="border-border flex items-center justify-between border-b px-3 py-2">
            <span className="text-xs font-semibold">Purchase order PO-1042</span>
            <span className="bg-accent text-accent-foreground rounded-full px-2 py-0.5 text-[10px] font-medium">
              Awaiting delivery
            </span>
          </div>
          <div className="flex-1 space-y-2 p-3">
            {OPEN_ORDER.map((line) => (
              <div key={line.item} className="flex items-center justify-between text-xs">
                <span>
                  {line.item} × {line.qty}
                </span>
                <span className="font-medium">{line.cost}</span>
              </div>
            ))}
          </div>
          <div className="border-border flex items-center justify-between border-t px-3 py-2.5 text-xs font-semibold">
            <span>Total</span>
            <span>R10,970</span>
          </div>
        </div>
      </div>
    </DesktopFrame>
  );
}

export { SuppliersMockup };
