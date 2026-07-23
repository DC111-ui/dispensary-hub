import { ADDONS } from "@/lib/constants/pricing";

function AddonsList() {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {ADDONS.map((addon) => (
        <div key={addon.id} className="border-border bg-card rounded-xl border p-5">
          <h3 className="font-semibold">{addon.name}</h3>
          <p className="text-muted-foreground mt-1 text-sm">{addon.description}</p>
        </div>
      ))}
    </div>
  );
}

export { AddonsList };
