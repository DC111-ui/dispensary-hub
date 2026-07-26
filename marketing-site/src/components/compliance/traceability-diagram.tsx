import {
  Truck,
  FileText,
  Warehouse,
  ShoppingCart,
  User,
  ArrowRight,
  ArrowDown,
} from "lucide-react";

import { cn } from "@/lib/utils";

const CHAIN = [
  { icon: Truck, label: "Supplier", description: "Verified supplier record" },
  { icon: FileText, label: "Purchase", description: "Purchase order & invoice" },
  { icon: Warehouse, label: "Store", description: "Delivered and added to your stock" },
  { icon: ShoppingCart, label: "Sale", description: "Recorded as a sale" },
  { icon: User, label: "Customer", description: "Added to their profile" },
];

function TraceabilityDiagram({ compact = false }: { compact?: boolean }) {
  return (
    <div
      className={cn(
        "border-border bg-card rounded-2xl border shadow-sm",
        compact ? "p-4 sm:p-6" : "p-6 sm:p-10"
      )}
    >
      <div className="flex flex-col items-stretch gap-2 sm:flex-row sm:items-center sm:gap-0">
        {CHAIN.map(({ icon: Icon, label, description }, index) => (
          <div key={label} className="flex flex-1 flex-col items-center sm:flex-row">
            <div className="flex flex-1 flex-col items-center gap-2 text-center">
              <span
                className={cn(
                  "bg-accent text-accent-foreground flex items-center justify-center rounded-full",
                  compact ? "size-10" : "size-14"
                )}
              >
                <Icon className={compact ? "size-4.5" : "size-6"} />
              </span>
              <div>
                <p className={cn("font-semibold", compact ? "text-sm" : "")}>{label}</p>
                {compact ? null : (
                  <p className="text-muted-foreground max-w-[10rem] text-xs">{description}</p>
                )}
              </div>
            </div>
            {index < CHAIN.length - 1 ? (
              <>
                <ArrowDown className="text-muted-foreground my-1 size-4 shrink-0 sm:hidden" />
                <ArrowRight className="text-muted-foreground hidden size-4 shrink-0 sm:block" />
              </>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
}

export { TraceabilityDiagram };
