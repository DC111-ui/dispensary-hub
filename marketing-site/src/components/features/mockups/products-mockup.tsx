import { DesktopFrame } from "./shell";
import { DEMO_PRODUCTS, DEMO_STAFF } from "@/lib/constants/demo-data";

function ProductsMockup() {
  return (
    <DesktopFrame
      active="products"
      path="products"
      staffName={DEMO_STAFF.manager.name}
      staffInitials={DEMO_STAFF.manager.initials}
    >
      <div className="border-border bg-background flex h-full flex-col overflow-hidden rounded-xl border">
        <div className="text-muted-foreground grid grid-cols-[1.6fr_0.8fr_0.6fr_0.6fr_0.6fr] gap-2 border-b border-border px-3 py-2 text-[10px] font-semibold tracking-wide uppercase">
          <span>Product</span>
          <span>Category</span>
          <span>THC</span>
          <span>Price</span>
          <span>Stock</span>
        </div>
        <div className="min-h-0 flex-1 overflow-hidden">
          {DEMO_PRODUCTS.map((product) => (
            <div
              key={product.name}
              className="border-border grid grid-cols-[1.6fr_0.8fr_0.6fr_0.6fr_0.6fr] items-center gap-2 border-b px-3 py-2 text-xs last:border-b-0"
            >
              <span className="truncate font-medium">{product.name}</span>
              <span className="text-muted-foreground">{product.category}</span>
              <span className="text-muted-foreground">{product.thc}</span>
              <span className="font-medium">{product.price}</span>
              <span
                className={
                  product.stock <= 6
                    ? "text-destructive font-medium"
                    : "text-muted-foreground"
                }
              >
                {product.stock <= 6 ? `${product.stock} · Low` : product.stock}
              </span>
            </div>
          ))}
        </div>
      </div>
    </DesktopFrame>
  );
}

export { ProductsMockup };
