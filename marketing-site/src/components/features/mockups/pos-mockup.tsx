import { Search, Trash2 } from "lucide-react";

import { DesktopFrame } from "./shell";
import { DEMO_PRODUCTS, DEMO_STAFF } from "@/lib/constants/demo-data";

const CART = [
  { name: "Blue Dream 3.5g", qty: 1, price: 280 },
  { name: "OG Kush Pre-Roll 1g", qty: 2, price: 65 },
  { name: "CBD Calm Tincture 30ml", qty: 1, price: 380 },
];

function PosMockup() {
  const subtotal = CART.reduce((sum, item) => sum + item.qty * item.price, 0);
  const tax = Math.round(subtotal * 0.15);
  const total = subtotal + tax;

  return (
    <DesktopFrame
      active="pos"
      path="pos"
      staffName={DEMO_STAFF.cashier.name}
      staffInitials={DEMO_STAFF.cashier.initials}
    >
      <div className="grid h-full grid-cols-1 gap-4 sm:grid-cols-[1.3fr_1fr]">
        <div className="flex min-h-0 flex-col gap-3">
          <div className="border-border bg-background text-muted-foreground flex items-center gap-2 rounded-lg border px-3 py-2 text-xs">
            <Search className="size-3.5" />
            Scan barcode or search products
          </div>
          <div className="grid flex-1 grid-cols-2 gap-2.5 overflow-hidden sm:grid-cols-3">
            {DEMO_PRODUCTS.slice(0, 6).map((product) => (
              <div
                key={product.name}
                className="border-border bg-background flex flex-col justify-between rounded-lg border p-2.5"
              >
                <p className="text-[11px] leading-snug font-medium">{product.name}</p>
                <p className="text-primary mt-2 text-sm font-semibold">{product.price}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="border-border bg-background flex min-h-0 flex-col rounded-xl border">
          <div className="border-border border-b px-3 py-2 text-xs font-semibold">
            Current sale
          </div>
          <div className="flex-1 space-y-2 overflow-hidden p-3">
            {CART.map((item) => (
              <div key={item.name} className="flex items-center justify-between text-xs">
                <div>
                  <p className="font-medium">{item.name}</p>
                  <p className="text-muted-foreground">Qty {item.qty}</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-medium">R{item.qty * item.price}</span>
                  <Trash2 className="text-muted-foreground size-3" />
                </div>
              </div>
            ))}
          </div>
          <div className="border-border space-y-1 border-t px-3 py-2.5 text-xs">
            <div className="text-muted-foreground flex justify-between">
              <span>Subtotal</span>
              <span>R{subtotal}</span>
            </div>
            <div className="text-muted-foreground flex justify-between">
              <span>Tax (15%)</span>
              <span>R{tax}</span>
            </div>
            <div className="flex justify-between text-sm font-semibold">
              <span>Total</span>
              <span>R{total}</span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2 p-3 pt-0">
            {["Cash", "Card", "EFT", "Wallet"].map((method, i) => (
              <div
                key={method}
                className={
                  i === 1
                    ? "bg-primary text-primary-foreground rounded-lg py-2 text-center text-xs font-medium"
                    : "border-border text-muted-foreground rounded-lg border py-2 text-center text-xs font-medium"
                }
              >
                {method}
              </div>
            ))}
          </div>
        </div>
      </div>
    </DesktopFrame>
  );
}

export { PosMockup };
