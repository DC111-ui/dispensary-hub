import { Leaf } from "lucide-react";

import { BrowserChrome } from "./shell";
import { DEMO_BUSINESS, DEMO_PRODUCTS } from "@/lib/constants/demo-data";

function OnlineStoreMockup() {
  const items = DEMO_PRODUCTS.slice(0, 6);

  return (
    <div className="border-border bg-card overflow-hidden rounded-2xl border shadow-xl">
      <BrowserChrome path="shop.leafledger.co/discreet420" />
      <div className="h-[420px] overflow-hidden p-4 sm:h-[460px] sm:p-6">
        <div className="mb-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="bg-primary text-primary-foreground flex size-7 items-center justify-center rounded-md">
              <Leaf className="size-3.5" />
            </span>
            <span className="text-sm font-semibold">{DEMO_BUSINESS}</span>
          </div>
          <span className="border-border text-muted-foreground rounded-full border px-3 py-1 text-[10px] font-medium">
            Cape Town CBD · Reserve for pickup
          </span>
        </div>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          {items.map((product) => (
            <div
              key={product.name}
              className="border-border bg-background flex flex-col gap-2 rounded-xl border p-3"
            >
              <div className="bg-secondary/60 flex h-16 items-center justify-center rounded-lg">
                <Leaf className="text-muted-foreground/50 size-5" />
              </div>
              <p className="text-[11px] leading-snug font-medium">{product.name}</p>
              <div className="flex items-center justify-between">
                <span className="text-primary text-xs font-semibold">{product.price}</span>
                <span className="bg-accent text-accent-foreground rounded-md px-2 py-1 text-[10px] font-medium">
                  Reserve
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export { OnlineStoreMockup };
