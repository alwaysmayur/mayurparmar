"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navGroups } from "@/lib/nav";

export default function NavList({ onNavigate }: { onNavigate?: () => void }) {
  const pathname = usePathname();

  return (
    <div className="flex flex-col gap-8">
      {navGroups.map((group) => (
        <div key={group.label}>
          <p className="px-4 text-sm font-semibold text-foreground">{group.label}</p>
          <ul className="mt-3 flex flex-col gap-1">
            {group.items.map((item) => {
              const isActive =
                !item.external &&
                (item.href === "/" ? pathname === "/" : pathname.startsWith(item.href));

              const className = `block rounded-md py-1.5 pl-4 pr-3 text-sm leading-6 font-normal transition-colors ${
                isActive
                  ? "bg-nav-active text-foreground"
                  : "text-muted-foreground hover:bg-nav-hover hover:text-foreground"
              }`;

              return (
                <li key={item.href}>
                  {item.external ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={onNavigate}
                      className={className}
                    >
                      {item.title}
                    </a>
                  ) : (
                    <Link
                      href={item.href}
                      onClick={onNavigate}
                      aria-current={isActive ? "page" : undefined}
                      className={className}
                    >
                      {item.title}
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </div>
  );
}
