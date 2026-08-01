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

// Tone carries the chain's own logic: teal marks the two points where
// custody crosses outside the store (a verified supplier, a known
// customer); gold marks the paper record (the invoice); rust marks the
// active, in-store transaction (the sale). Held stock, with nothing
// happening to it yet, stays ink-neutral.
const CHAIN = [
  { icon: Truck, label: "Supplier", description: "Verified supplier record", tone: "teal" as const },
  { icon: FileText, label: "Purchase", description: "Purchase order & invoice", tone: "gold" as const },
  { icon: Warehouse, label: "Store", description: "Delivered and added to your stock", tone: "neutral" as const },
  { icon: ShoppingCart, label: "Sale", description: "Recorded as a sale", tone: "rust" as const },
  { icon: User, label: "Customer", description: "Added to their profile", tone: "teal" as const },
];

const TONE_CLASSES = {
  teal: "bg-teal text-teal-foreground",
  gold: "bg-gold text-gold-foreground",
  rust: "bg-rust text-rust-foreground",
  neutral: "bg-accent text-accent-foreground",
};

function TraceabilityDiagram({ compact = false }: { compact?: boolean }) {
  return (
    <div
      className={cn(
        "border-border/60 bg-card shadow-soft rounded-3xl border",
        compact ? "p-6 sm:p-8" : "p-6 sm:p-10"
      )}
    >
      <div className="flex flex-col items-stretch gap-2 sm:flex-row sm:items-center sm:gap-0">
        {CHAIN.map(({ icon: Icon, label, description, tone }, index) => (
          <div key={label} className="flex flex-1 flex-col items-center sm:flex-row">
            <div className="flex flex-1 flex-col items-center gap-2 text-center">
              <span
                className={cn(
                  "flex items-center justify-center rounded-full",
                  TONE_CLASSES[tone],
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
