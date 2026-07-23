import { FileClock, Lock, UserCheck } from "lucide-react";

import { IconBadge } from "@/components/shared/icon-badge";

const POINTS = [
  {
    icon: FileClock,
    title: "Every action, timestamped",
    description:
      "Sales, inventory movements, and record changes are logged the moment they happen.",
  },
  {
    icon: UserCheck,
    title: "Attributed to a staff member",
    description: "Every entry is tied to the staff user who performed the action.",
  },
  {
    icon: Lock,
    title: "Immutable by design",
    description: "Audit records can't be edited or deleted — only appended to.",
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
