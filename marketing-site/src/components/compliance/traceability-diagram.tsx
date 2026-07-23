import {
  Truck,
  FileText,
  Warehouse,
  ShoppingCart,
  User,
  ArrowRight,
  ArrowDown,
} from "lucide-react";

const CHAIN = [
  { icon: Truck, label: "Supplier", description: "Verified supplier record" },
  { icon: FileText, label: "Purchase", description: "Purchase order & invoice" },
  { icon: Warehouse, label: "Store", description: "Batch received into inventory" },
  { icon: ShoppingCart, label: "Sale", description: "Sale linked to the batch" },
  { icon: User, label: "Customer", description: "Customer record on file" },
];

function TraceabilityDiagram() {
  return (
    <div className="border-border bg-card rounded-2xl border p-6 shadow-sm sm:p-10">
      <div className="flex flex-col items-stretch gap-2 sm:flex-row sm:items-center sm:gap-0">
        {CHAIN.map(({ icon: Icon, label, description }, index) => (
          <div key={label} className="flex flex-1 flex-col items-center sm:flex-row">
            <div className="flex flex-1 flex-col items-center gap-3 text-center">
              <span className="bg-accent text-accent-foreground flex size-14 items-center justify-center rounded-full">
                <Icon className="size-6" />
              </span>
              <div>
                <p className="font-semibold">{label}</p>
                <p className="text-muted-foreground max-w-[10rem] text-xs">
                  {description}
                </p>
              </div>
            </div>
            {index < CHAIN.length - 1 ? (
              <>
                <ArrowDown className="text-muted-foreground my-2 size-5 shrink-0 sm:hidden" />
                <ArrowRight className="text-muted-foreground hidden size-5 shrink-0 sm:block" />
              </>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
}

export { TraceabilityDiagram };
