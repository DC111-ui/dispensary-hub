import type { FeatureCategory } from "@/lib/constants/features";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { IconBadge } from "@/components/shared/icon-badge";

function FeatureCategoryCard({ category }: { category: FeatureCategory }) {
  return (
    <Card className="h-full">
      <CardHeader>
        <IconBadge icon={category.icon} />
        <CardTitle className="pt-2">{category.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground text-sm">{category.tagline}</p>
      </CardContent>
    </Card>
  );
}

export { FeatureCategoryCard };
