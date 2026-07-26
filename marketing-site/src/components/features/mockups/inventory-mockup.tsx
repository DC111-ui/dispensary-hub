import { DesktopFrame, StatTile } from "./shell";
import { DEMO_STAFF } from "@/lib/constants/demo-data";

const BATCH_HISTORY = [
  { date: "18 Jul 2026", event: "Received from Cape Canna Farms", change: "+40 units" },
  { date: "19 Jul 2026", event: "Sold in-store (6 sales)", change: "−4 units" },
  { date: "21 Jul 2026", event: "Sold in-store (3 sales)", change: "−2 units" },
  { date: "22 Jul 2026", event: "Transferred to Sandton", change: "−10 units" },
  { date: "23 Jul 2026", event: "Sold in-store (2 sales)", change: "−2 units" },
];

function InventoryMockup() {
  return (
    <DesktopFrame
      active="inventory"
      path="inventory/batches/BD-0472"
      staffName={DEMO_STAFF.inventory.name}
      staffInitials={DEMO_STAFF.inventory.initials}
    >
      <div className="flex h-full flex-col gap-4">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-sm font-semibold">Blue Dream 3.5g, Batch BD-0472</p>
            <p className="text-muted-foreground text-xs">Cape Canna Farms (Pty) Ltd</p>
          </div>
          <span className="bg-accent text-accent-foreground rounded-full px-2.5 py-1 text-[10px] font-medium">
            34 units left
          </span>
        </div>

        <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-4">
          <StatTile label="Received" value="18 Jul" hint="2026" />
          <StatTile label="Expires" value="14 Jan" hint="2027" />
          <StatTile label="Sold to date" value="6 units" hint="Since receipt" />
          <StatTile label="Cost / unit" value="R168" hint="From invoice" />
        </div>

        <div className="border-border bg-background min-h-0 flex-1 overflow-hidden rounded-xl border">
          <div className="border-border border-b px-3 py-2 text-xs font-semibold">
            Batch history
          </div>
          <div>
            {BATCH_HISTORY.map((row) => (
              <div
                key={row.event}
                className="border-border flex items-center justify-between border-b px-3 py-2 text-xs last:border-b-0"
              >
                <div>
                  <p className="font-medium">{row.event}</p>
                  <p className="text-muted-foreground">{row.date}</p>
                </div>
                <span
                  className={
                    row.change.startsWith("+")
                      ? "text-primary font-medium"
                      : "text-muted-foreground font-medium"
                  }
                >
                  {row.change}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </DesktopFrame>
  );
}

export { InventoryMockup };
