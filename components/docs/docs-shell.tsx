import type { ReactNode } from "react";
import SiteHeader from "./site-header";
import SiteFooter from "./site-footer";
import DocsSidebar from "./docs-sidebar";
import TableOfContents from "./table-of-contents";

export default function DocsShell({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <div className="flex w-full max-w-[1400px] flex-1 justify-center gap-8 px-4 lg:px-8">
        <DocsSidebar />
        <main id="main-content" className="min-w-0 max-w-3xl flex-1 py-10">
          {children}
        </main>
        <TableOfContents />
      </div>
      <SiteFooter />
    </div>
  );
}
