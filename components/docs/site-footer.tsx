import { socialLinks } from "@/lib/data";

export default function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-2 px-4 py-8 text-sm text-muted-foreground sm:flex-row sm:justify-between">
        <p>&copy; {new Date().getFullYear()} Mayur Parmar. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" className="hover:text-foreground">
            GitHub
          </a>
          <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-foreground">
            LinkedIn
          </a>
          <a href={`mailto:${socialLinks.email}`} className="hover:text-foreground">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
