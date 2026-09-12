import type { ReactNode } from "react";

const variants = {
  note: "border-border bg-muted text-foreground",
  todo: "border-blue-200 bg-blue-50 text-blue-800 dark:border-blue-900 dark:bg-blue-950 dark:text-blue-200",
  info: "border-blue-200 bg-blue-50 text-blue-800 dark:border-blue-900 dark:bg-blue-950 dark:text-blue-200",
  warning:
    "border-amber-200 bg-amber-50 text-amber-800 dark:border-amber-900 dark:bg-amber-950 dark:text-amber-200",
  success:
    "border-emerald-200 bg-emerald-50 text-emerald-800 dark:border-emerald-900 dark:bg-emerald-950 dark:text-emerald-200",
} as const;

export default function Callout({
  variant = "note",
  title,
  children,
}: {
  variant?: keyof typeof variants;
  title?: string;
  children: ReactNode;
}) {
  return (
    <div className={`rounded-md border px-4 py-3 text-sm leading-[1.6] ${variants[variant]}`}>
      {title ? <p className="mb-1 font-semibold">{title}</p> : null}
      <div className="opacity-90">{children}</div>
    </div>
  );
}
