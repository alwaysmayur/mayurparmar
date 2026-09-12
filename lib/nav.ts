import { resumeUrl } from "./data";

export type NavItem = {
  title: string;
  href: string;
  external?: boolean;
};

export type NavGroup = {
  label: string;
  items: NavItem[];
};

export const navGroups: NavGroup[] = [
  {
    label: "Start Here",
    items: [{ title: "Introduction", href: "/" }],
  },
  {
    label: "Engineering",
    items: [{ title: "Projects", href: "/projects" }],
  },
  {
    label: "AI Engineering",
    items: [{ title: "Overview", href: "/ai" }],
  },
  {
    label: "Experience",
    items: [{ title: "Career", href: "/experience" }],
  },
  {
    label: "Contact",
    items: [
      { title: "Contact", href: "/contact" },
      { title: "Resume", href: resumeUrl, external: true },
    ],
  },
];

// Flat list, used by the command palette and search. Excludes external file links.
export const navItems: NavItem[] = navGroups.flatMap((group) =>
  group.items.filter((item) => !item.external)
);
