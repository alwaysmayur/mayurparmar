"use client";

import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { LuGithub, LuLinkedin } from "react-icons/lu";
import ThemeToggle from "@/components/ui/theme-toggle";
import CommandPalette from "./command-palette";
import NavList from "./nav-list";
import { socialLinks, resumeUrl } from "@/lib/data";

export default function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  const openMenu = useCallback(() => setIsOpen(true), []);
  const closeMenu = useCallback(() => setIsOpen(false), []);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    document.body.classList.toggle("overflow-hidden", isOpen);

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeMenu();
    };
    document.addEventListener("keydown", onKey);

    return () => {
      document.body.classList.remove("overflow-hidden");
      document.removeEventListener("keydown", onKey);
    };
  }, [isOpen, closeMenu]);

  return (
    <header className="sticky top-0 z-40 h-16 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/75">
      <div className="mx-auto flex h-16 max-w-[1400px] items-center justify-between gap-4 px-4 lg:px-8">
        <Link
          href="/"
          className="shrink-0 font-mono text-sm font-semibold tracking-tight text-foreground"
        >
          mayurparmar<span className="text-accent">.dev</span>
        </Link>

        <div className="flex flex-1 justify-center">
          <CommandPalette />
        </div>

        <div className="flex items-center gap-1.5">
          <a
            href={socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            className="hidden h-9 w-9 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-muted hover:text-foreground sm:flex"
          >
            <LuGithub size={18} />
          </a>
          <a
            href={socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
            className="hidden h-9 w-9 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-muted hover:text-foreground sm:flex"
          >
            <LuLinkedin size={18} />
          </a>
          <a
            href={resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden h-9 items-center rounded-md border border-border px-3 text-sm font-medium text-foreground transition-colors hover:bg-muted md:inline-flex"
          >
            Resume
          </a>
          <ThemeToggle />
          <button
            type="button"
            onClick={openMenu}
            aria-label="Open navigation menu"
            aria-expanded={isOpen}
            aria-controls="mobile-nav"
            className="flex h-9 w-9 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-muted hover:text-foreground md:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              className="h-5 w-5"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5" />
            </svg>
          </button>
        </div>
      </div>

      {mounted
        ? createPortal(
            <>
              <div
                className={`fixed inset-0 z-40 bg-foreground/20 backdrop-blur-sm transition-opacity duration-200 md:hidden ${
                  isOpen ? "opacity-100" : "pointer-events-none opacity-0"
                }`}
                onClick={closeMenu}
                aria-hidden={!isOpen}
              />

              <aside
                id="mobile-nav"
                role="dialog"
                aria-modal="true"
                aria-label="Navigation menu"
                className={`fixed right-0 top-0 z-50 h-full w-72 max-w-[80vw] overflow-y-auto border-l border-border bg-background p-5 shadow-lg transition-transform duration-300 md:hidden ${
                  isOpen ? "translate-x-0" : "translate-x-full"
                }`}
              >
                <div className="mb-6 flex items-center justify-between">
                  <span className="font-mono text-sm font-semibold">Navigate</span>
                  <button
                    type="button"
                    onClick={closeMenu}
                    aria-label="Close navigation menu"
                    className="flex h-9 w-9 items-center justify-center rounded-md text-muted-foreground hover:bg-muted hover:text-foreground"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      className="h-5 w-5"
                      aria-hidden="true"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                <nav aria-label="Documentation">
                  <NavList onNavigate={closeMenu} />
                </nav>
                <div className="mt-6 flex items-center gap-3 border-t border-border-subtle pt-4">
                  <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground">
                    GitHub
                  </a>
                  <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground">
                    LinkedIn
                  </a>
                  <a href={resumeUrl} target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground">
                    Resume
                  </a>
                </div>
              </aside>
            </>,
            document.body
          )
        : null}
    </header>
  );
}
