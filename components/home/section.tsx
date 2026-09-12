import type { ReactNode } from "react";

export default function Section({
  id,
  title,
  description,
  children,
}: {
  id: string;
  title: string;
  description?: string;
  children: ReactNode;
}) {
  return (
    <section className="border-t border-border-subtle py-7 first:border-t-0 first:pt-0">
      <h2 id={id} className="scroll-mt-24 text-[24px] font-semibold tracking-tight text-foreground">
        {title}
      </h2>
      {description ? (
        <p className="mt-2 max-w-2xl text-[15px] leading-[1.7] text-muted-foreground">{description}</p>
      ) : null}
      <div className="mt-5">{children}</div>
    </section>
  );
}
