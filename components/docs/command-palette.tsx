"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { useRouter } from "next/navigation";
import { Command } from "cmdk";
import { searchIndex } from "@/lib/search-index";

export default function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const router = useRouter();

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((prev) => !prev);
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  const go = (href: string) => {
    setOpen(false);
    router.push(href);
  };

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="hidden h-9 w-72 items-center gap-2 rounded-md border border-border bg-surface px-3 text-left text-sm text-muted-foreground transition-colors hover:border-accent/50 sm:flex"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          className="h-4 w-4 shrink-0"
          aria-hidden="true"
        >
          <circle cx="11" cy="11" r="7" />
          <path strokeLinecap="round" d="m20 20-3.5-3.5" />
        </svg>
        <span className="flex-1">Search documentation...</span>
        <kbd className="rounded border border-border px-1.5 py-0.5 font-mono text-[11px] text-subtle-foreground">
          Ctrl K
        </kbd>
      </button>

      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Search documentation"
        className="flex h-9 w-9 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-muted hover:text-foreground sm:hidden"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          className="h-[18px] w-[18px]"
          aria-hidden="true"
        >
          <circle cx="11" cy="11" r="7" />
          <path strokeLinecap="round" d="m20 20-3.5-3.5" />
        </svg>
      </button>

      {mounted && open
        ? createPortal(
            <div
              className="fixed inset-0 z-50 flex items-start justify-center bg-foreground/20 px-4 pt-24 backdrop-blur-sm"
              onClick={() => setOpen(false)}
            >
              <Command
                shouldFilter
                className="w-full max-w-lg overflow-hidden rounded-lg border border-border bg-background shadow-lg"
                onClick={(e) => e.stopPropagation()}
                loop
              >
                <Command.Input
                  autoFocus
                  placeholder="Search documentation..."
                  className="w-full border-b border-border-subtle bg-transparent px-4 py-3 text-sm text-foreground outline-none placeholder:text-muted-foreground"
                />
                <Command.List className="max-h-80 overflow-y-auto p-2">
                  <Command.Empty className="px-3 py-6 text-center text-sm text-muted-foreground">
                    No results found.
                  </Command.Empty>
                  {searchIndex.map((entry) => (
                    <Command.Item
                      key={entry.href}
                      value={`${entry.title} ${entry.category} ${entry.description}`}
                      onSelect={() => go(entry.href)}
                      className="flex cursor-pointer flex-col gap-0.5 rounded-md px-3 py-2 text-sm data-[selected=true]:bg-muted"
                    >
                      <div className="flex items-center justify-between gap-2">
                        <span className="font-medium text-foreground">{entry.title}</span>
                        <span className="font-mono text-[11px] text-subtle-foreground">{entry.category}</span>
                      </div>
                      {entry.description ? (
                        <span className="line-clamp-1 text-[13px] text-muted-foreground">
                          {entry.description}
                        </span>
                      ) : null}
                    </Command.Item>
                  ))}
                </Command.List>
              </Command>
            </div>,
            document.body
          )
        : null}
    </>
  );
}
