import NavList from "./nav-list";

export default function DocsSidebar() {
  return (
    <aside className="thin-scrollbar sticky top-16 hidden h-[calc(100vh-4rem)] w-72 shrink-0 overflow-y-auto border-r border-border-subtle py-10 pr-4 md:block">
      <nav aria-label="Documentation">
        <NavList />
      </nav>
    </aside>
  );
}
