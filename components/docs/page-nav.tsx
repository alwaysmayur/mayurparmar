import Link from "next/link";

export type PageNavLink = {
  title: string;
  href: string;
};

export default function PageNav({
  prev,
  next,
}: {
  prev?: PageNavLink;
  next?: PageNavLink;
}) {
  if (!prev && !next) return null;

  return (
    <div className="mt-12 flex items-stretch gap-4 border-t border-border-subtle pt-8">
      <div className="flex-1">
        {prev ? (
          <Link
            href={prev.href}
            className="block rounded-md border border-border p-3 transition-colors hover:border-accent"
          >
            <p className="text-[12px] text-muted-foreground">← Previous</p>
            <p className="mt-1 text-sm font-medium text-foreground">{prev.title}</p>
          </Link>
        ) : null}
      </div>
      <div className="flex-1">
        {next ? (
          <Link
            href={next.href}
            className="block rounded-md border border-border p-3 text-right transition-colors hover:border-accent"
          >
            <p className="text-[12px] text-muted-foreground">Next →</p>
            <p className="mt-1 text-sm font-medium text-foreground">{next.title}</p>
          </Link>
        ) : null}
      </div>
    </div>
  );
}
