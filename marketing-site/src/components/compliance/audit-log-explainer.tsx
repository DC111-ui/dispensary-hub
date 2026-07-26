import { FileClock, Lock, UserCheck } from "lucide-react";

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
    <div className="mx-auto flex max-w-2xl flex-col">
      {POINTS.map(({ icon: Icon, title, description }, index) => (
        <div key={title} className="flex gap-4">
          <div className="flex flex-col items-center">
            <span className="bg-accent text-accent-foreground flex size-10 shrink-0 items-center justify-center rounded-full">
              <Icon className="size-4.5" />
            </span>
            {index < POINTS.length - 1 ? (
              <span className="bg-border my-1 w-px flex-1" aria-hidden="true" />
            ) : null}
          </div>
          <div className={index < POINTS.length - 1 ? "pb-8" : ""}>
            <h3 className="pt-2 font-semibold">{title}</h3>
            <p className="text-muted-foreground text-sm">{description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export { AuditLogExplainer };
