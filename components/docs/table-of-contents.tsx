"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

type Heading = {
  id: string;
  text: string;
  level: number;
};

export default function TableOfContents() {
  const pathname = usePathname();
  const [headings, setHeadings] = useState<Heading[]>([]);
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const root = document.getElementById("main-content");
    if (!root) return;

    const nodes = Array.from(root.querySelectorAll<HTMLHeadingElement>("h2[id], h3[id]"));
    setHeadings(
      nodes.map((node) => ({
        id: node.id,
        text: node.textContent ?? "",
        level: node.tagName === "H3" ? 3 : 2,
      }))
    );

    if (nodes.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting);
        if (visible.length > 0) {
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin: "-88px 0px -70% 0px", threshold: 0 }
    );

    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, [pathname]);

  const hasToc = headings.length >= 2;

  return (
    <aside className="sticky top-16 hidden h-[calc(100vh-4rem)] w-48 shrink-0 overflow-y-auto py-10 pl-6 xl:block">
      {hasToc ? (
        <>
          <p className="text-[11px] font-medium uppercase tracking-wide text-faint-foreground">
            On This Page
          </p>
          <ul className="mt-3 space-y-2 border-l border-border-subtle">
            {headings.map((heading) => (
              <li key={heading.id} style={{ paddingLeft: heading.level === 3 ? "1.5rem" : "1rem" }}>
                <a
                  href={`#${heading.id}`}
                  className={`block border-l -ml-px pl-3 text-[13px] transition-colors ${
                    activeId === heading.id
                      ? "border-accent font-medium text-foreground"
                      : "border-transparent text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {heading.text}
                </a>
              </li>
            ))}
          </ul>
        </>
      ) : null}
    </aside>
  );
}
