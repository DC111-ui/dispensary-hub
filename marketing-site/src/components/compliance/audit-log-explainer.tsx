import { FileClock, Lock, UserCheck } from "lucide-react";

import { IconBadge } from "@/components/shared/icon-badge";

const POINTS = [
  {
    icon: FileClock,
    title: "Every action, timestamped",
    description:
      "Sales, stock changes, and other actions are saved the moment they happen.",
  },
  {
    icon: UserCheck,
    title: "Linked to the staff member who did it",
    description: "You can always see which staff member made each change.",
  },
  {
    icon: Lock,
    title: "Nothing can be changed",
    description: "Once something is recorded, it can't be edited or deleted.",
  },
];

function AuditLogExplainer() {
  return (
    <div className="grid gap-8 sm:grid-cols-3">
      {POINTS.map(({ icon, title, description }) => (
        <div key={title} className="flex flex-col gap-4">
          <IconBadge icon={icon} />
          <div className="flex flex-col gap-1.5">
            <h3 className="font-semibold">{title}</h3>
            <p className="text-muted-foreground text-sm">{description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export { AuditLogExplainer };
