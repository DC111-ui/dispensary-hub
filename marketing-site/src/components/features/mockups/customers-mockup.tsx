import { DesktopFrame, StatTile } from "./shell";
import { DEMO_CUSTOMERS, DEMO_STAFF } from "@/lib/constants/demo-data";

const PURCHASES = [
  { date: "20 Jul 2026", item: "Girl Scout Cookies 3.5g", total: "R320" },
  { date: "12 Jul 2026", item: "OG Kush Pre-Roll 1g ×3", total: "R195" },
  { date: "29 Jun 2026", item: "Green Crack Cartridge 0.5g", total: "R450" },
];

function CustomersMockup() {
  const customer = DEMO_CUSTOMERS[0];

  return (
    <DesktopFrame
      active="customers"
      path="customers/jason-petersen"
      staffName={DEMO_STAFF.cashier.name}
      staffInitials={DEMO_STAFF.cashier.initials}
    >
      <div className="flex h-full flex-col gap-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="bg-accent text-accent-foreground flex size-9 items-center justify-center rounded-full text-xs font-semibold">
              JP
            </span>
            <div>
              <p className="text-sm font-semibold">{customer.name}</p>
              <p className="text-muted-foreground text-xs">Member since {customer.since}</p>
            </div>
          </div>
          <span className="bg-primary text-primary-foreground rounded-full px-2.5 py-1 text-[10px] font-medium">
            {customer.tier} tier
          </span>
        </div>

        <div className="grid grid-cols-3 gap-2.5">
          <StatTile label="Reward points" value={customer.points.toLocaleString()} />
          <StatTile label="Lifetime spend" value="R18,640" />
          <StatTile label="Visits" value="47" hint="Last: 20 Jul" />
        </div>

        <div className="border-border bg-background min-h-0 flex-1 overflow-hidden rounded-xl border">
          <div className="border-border border-b px-3 py-2 text-xs font-semibold">
            Purchase history
          </div>
          {PURCHASES.map((row) => (
            <div
              key={row.item}
              className="border-border flex items-center justify-between border-b px-3 py-2 text-xs last:border-b-0"
            >
              <div>
                <p className="font-medium">{row.item}</p>
                <p className="text-muted-foreground">{row.date}</p>
              </div>
              <span className="font-medium">{row.total}</span>
            </div>
          ))}
        </div>
      </div>
    </DesktopFrame>
  );
}

export { CustomersMockup };
