import type { LucideIcon } from "lucide-react";
import {
  LayoutDashboard,
  ShoppingCart,
  Package,
  Tags,
  Users,
  Truck,
  ShieldCheck,
  Globe,
  Plug,
  KeyRound,
  Sparkles,
} from "lucide-react";

import { cn } from "@/lib/utils";
import { DEMO_BUSINESS, DEMO_STORES } from "@/lib/constants/demo-data";

type NavId =
  | "reporting"
  | "pos"
  | "inventory"
  | "products"
  | "customers"
  | "suppliers"
  | "online-store"
  | "compliance"
  | "integrations"
  | "access"
  | "ai-forecasting";

const NAV_ITEMS: { id: NavId; label: string; icon: LucideIcon }[] = [
  { id: "reporting", label: "Dashboard", icon: LayoutDashboard },
  { id: "pos", label: "Point of Sale", icon: ShoppingCart },
  { id: "inventory", label: "Inventory", icon: Package },
  { id: "products", label: "Products", icon: Tags },
  { id: "customers", label: "Customers", icon: Users },
  { id: "suppliers", label: "Suppliers", icon: Truck },
  { id: "online-store", label: "Online Store", icon: Globe },
  { id: "ai-forecasting", label: "AI Assistant", icon: Sparkles },
  { id: "compliance", label: "Compliance", icon: ShieldCheck },
  { id: "integrations", label: "Integrations", icon: Plug },
  { id: "access", label: "Access", icon: KeyRound },
];

function BrowserChrome({ path }: { path: string }) {
  return (
    <div className="bg-muted/60 border-border flex items-center gap-3 border-b px-4 py-2.5">
      <div className="flex gap-1.5">
        <span className="size-2.5 rounded-full bg-[#ff5f57]" />
        <span className="size-2.5 rounded-full bg-[#febc2e]" />
        <span className="size-2.5 rounded-full bg-[#28c840]" />
      </div>
      <div className="bg-background border-border text-muted-foreground flex-1 truncate rounded-md border px-3 py-1 text-xs">
        app.leafledger.co/{path}
      </div>
    </div>
  );
}

function DesktopFrame({
  active,
  path,
  store = DEMO_STORES[0].name,
  staffInitials,
  staffName,
  children,
}: {
  active: NavId;
  path: string;
  store?: string;
  staffInitials: string;
  staffName: string;
  children: React.ReactNode;
}) {
  return (
    <div className="border-border bg-card overflow-hidden rounded-2xl border shadow-xl">
      <BrowserChrome path={path} />
      <div className="flex h-[420px] sm:h-[460px]">
        <aside className="border-border bg-secondary/40 hidden w-44 shrink-0 flex-col gap-0.5 border-r p-3 sm:flex">
          <div className="flex items-center gap-2 px-2 pb-3">
            <span className="bg-primary text-primary-foreground flex size-6 items-center justify-center rounded-md text-[10px] font-bold">
              D4
            </span>
            <span className="truncate text-xs font-semibold">{DEMO_BUSINESS}</span>
          </div>
          {NAV_ITEMS.map(({ id, label, icon: Icon }) => (
            <div
              key={id}
              className={cn(
                "flex items-center gap-2.5 rounded-lg px-2.5 py-2 text-xs font-medium",
                id === active
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground"
              )}
            >
              <Icon className="size-3.5 shrink-0" />
              <span className="truncate">{label}</span>
            </div>
          ))}
        </aside>

        <div className="flex min-w-0 flex-1 flex-col">
          <div className="border-border flex items-center justify-between gap-3 border-b px-4 py-2.5 sm:px-6">
            <span className="text-muted-foreground truncate text-xs font-medium">{store}</span>
            <div className="flex items-center gap-2">
              <span className="border-border bg-background text-muted-foreground rounded-full border px-2.5 py-1 text-[10px]">
                {staffName}
              </span>
              <span className="bg-accent text-accent-foreground flex size-6 items-center justify-center rounded-full text-[10px] font-semibold">
                {staffInitials}
              </span>
            </div>
          </div>
          <div className="min-w-0 flex-1 overflow-hidden p-4 sm:p-6">{children}</div>
        </div>
      </div>
    </div>
  );
}

function PhoneFrame({
  children,
  label = "LeafLedger",
}: {
  children: React.ReactNode;
  label?: string;
}) {
  return (
    <div className="flex justify-center">
      <div className="border-foreground/80 bg-card relative flex h-[520px] w-[280px] flex-col overflow-hidden rounded-[2.5rem] border-[6px] shadow-xl">
        <div className="bg-foreground/80 absolute top-0 left-1/2 z-10 h-5 w-28 -translate-x-1/2 rounded-b-2xl" />
        <div className="border-border flex items-center justify-center border-b px-4 pt-7 pb-2.5">
          <span className="text-xs font-semibold">{label}</span>
        </div>
        <div className="flex-1 overflow-hidden">{children}</div>
      </div>
    </div>
  );
}

function StatTile({
  label,
  value,
  hint,
}: {
  label: string;
  value: string;
  hint?: string;
}) {
  return (
    <div className="border-border bg-background rounded-xl border p-3">
      <p className="text-muted-foreground text-[10px] font-medium tracking-wide uppercase">
        {label}
      </p>
      <p className="mt-1 text-lg font-semibold">{value}</p>
      {hint && <p className="text-muted-foreground mt-0.5 text-[10px]">{hint}</p>}
    </div>
  );
}

export { DesktopFrame, PhoneFrame, StatTile, BrowserChrome, NAV_ITEMS };
export type { NavId };
