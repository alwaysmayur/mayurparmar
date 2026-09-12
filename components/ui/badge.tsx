import type { ReactNode } from "react";

const variants = {
  default: "border-badge-border bg-badge text-badge-text",
  accent: "border-accent/40 bg-accent/[0.08] text-accent",
} as const;

export default function Badge({
  variant = "default",
  children,
}: {
  variant?: keyof typeof variants;
  children: ReactNode;
}) {
  return (
    <span
      className={`inline-flex items-center rounded-badge border px-2 py-1 font-mono text-xs ${variants[variant]}`}
    >
      {children}
    </span>
  );
}
