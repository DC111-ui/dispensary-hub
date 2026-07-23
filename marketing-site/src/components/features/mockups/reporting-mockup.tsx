import { DesktopFrame, StatTile } from "./shell";
import { DEMO_STAFF } from "@/lib/constants/demo-data";

const WEEK = [
  { day: "Mon", value: 42 },
  { day: "Tue", value: 58 },
  { day: "Wed", value: 51 },
  { day: "Thu", value: 66 },
  { day: "Fri", value: 88 },
  { day: "Sat", value: 100 },
  { day: "Sun", value: 74 },
];

const TOP_PRODUCTS = [
  { name: "OG Kush Pre-Roll 1g", units: 64 },
  { name: "Blue Dream 3.5g", units: 41 },
  { name: "Sour Diesel 5-pack", units: 33 },
];

function ReportingMockup() {
  return (
    <DesktopFrame
      active="reporting"
      path="dashboard"
      staffName={DEMO_STAFF.owner.name}
      staffInitials={DEMO_STAFF.owner.initials}
    >
      <div className="flex h-full flex-col gap-4">
        <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-4">
          <StatTile label="Today's sales" value="R14,230" hint="+12% vs last Wed" />
          <StatTile label="This week" value="R86,540" />
          <StatTile label="Units sold" value="479" hint="Last 7 days" />
          <StatTile label="New customers" value="9" hint="This week" />
        </div>

        <div className="border-border bg-background flex min-h-0 flex-1 flex-col gap-3 rounded-xl border p-4">
          <p className="text-xs font-semibold">Sales this week</p>
          <div className="flex flex-1 items-end gap-3">
            {WEEK.map((row) => (
              <div key={row.day} className="flex flex-1 flex-col items-center gap-1.5">
                <div className="bg-secondary flex h-24 w-full items-end overflow-hidden rounded-md">
                  <div
                    className="bg-primary w-full rounded-md"
                    style={{ height: `${row.value}%` }}
                  />
                </div>
                <span className="text-muted-foreground text-[10px]">{row.day}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="border-border bg-background rounded-xl border p-3">
          <p className="mb-2 text-xs font-semibold">Top products this week</p>
          <div className="space-y-1.5">
            {TOP_PRODUCTS.map((product) => (
              <div key={product.name} className="flex items-center justify-between text-xs">
                <span>{product.name}</span>
                <span className="text-muted-foreground">{product.units} units</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </DesktopFrame>
  );
}

export { ReportingMockup };
