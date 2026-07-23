import type { RoadmapItem } from "@/lib/constants/roadmap";
import { Badge } from "@/components/ui/badge";

function RoadmapCard({ item }: { item: RoadmapItem }) {
  const Icon = item.icon;

  return (
    <div className="border-border bg-background/60 flex flex-col gap-3 rounded-xl border border-dashed p-5">
      <div className="flex items-center justify-between">
        <Icon className="text-muted-foreground size-5" />
        <Badge variant="accent">Coming soon</Badge>
      </div>
      <h3 className="text-sm font-semibold">{item.title}</h3>
      <p className="text-muted-foreground text-sm">{item.description}</p>
    </div>
  );
}

export { RoadmapCard };
