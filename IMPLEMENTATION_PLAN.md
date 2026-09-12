# Implementation Plan — Portfolio → Documentation-Style Site

Status: **In progress.** The plan below was approved and implementation has started.
See "Progress Log" at the bottom for what's actually built vs. still outstanding.

---

## 1. Current Architecture

- **Framework**: Next.js `14.0.2`, App Router, React 18, TypeScript 5 (strict), Tailwind CSS 3.3.
- **Routing**: A single route. `app/page.tsx` is a client component (`"use client"`) that renders one long scrollable page by stacking section components (`Header`, `HeroSection`, `AboutMe`, `Experience`, `Work`, `Contact`, `Footer`). Navigation is anchor-based (`#about`, `#experience`, `#work`, `#contact`) via `next/link` hash links, not real routes.
- **Components** (`app/components/*.tsx`): `header.tsx`, `hero_section.tsx`, `about_me.tsx`, `experience.tsx`, `work.tsx`, `contact.tsx`, `footer.tsx`. All are one-off, page-specific sections (not a reusable component library). Several are marked `"use client"` or depend on client-only libraries even though they render static content.
- **Data layer**: `public/data.ts` — a TypeScript module (not a JSON/content file) exporting `workData`, `navLinks`, `experienceData`, `technologies`, `aboutMe`. It lives under `public/`, which is meant for static assets served as-is; it works today only because it's imported at build time, but it's the wrong location and has no schema, validation, or content pipeline.
- **Styling**: Tailwind with a hardcoded dark palette (`bgDark`, `textGray`, `textBlue`, `headGray`, `bgNav`) defined directly in `tailwind.config.ts`. No CSS variables/design tokens, no light theme, no theme switcher.
- **Fonts**: Mixed strategy — `Inter` loaded correctly via `next/font/google` in `layout.tsx`, but four more font families (`Mono Sans`, `Noto Sans Linear B`, `Fira Code`, `Poppins`) are pulled in via render-blocking `@import url(...)` in `globals.css`. `Noto Sans Linear B` is an ancient-script glyph font, almost certainly a copy-paste mistake, not an intentional typeface choice. Twelve `Calibre*.otf` files sit in `public/font/` and are never referenced anywhere.
- **Animation**: `aos` (Animate On Scroll) drives `data-aos` fade/flip effects everywhere. `animejs` and `@types/animejs` are installed but never imported. `react-scroll` and `@heroicons/react` are installed but never imported either — dead dependencies.
- **Metadata/SEO**: Only a static `title`/`description`/`icons` in `layout.tsx`. No OpenGraph, no Twitter card, no canonical URLs, no `sitemap.xml`, no `robots.txt`, no structured data (JSON-LD).
- **Assets**: `public/media/images/*.png` (project screenshots + profile photo), `public/media/svgs/*`, `public/media/pdf/Mayur_Parmar_Fullstack_developer.pdf` (resume), plus a full logo kit (png/svg/pdf in black/white/color/no-bg) that isn't used on the site itself.
- **Tooling**: `next lint` via `eslint-config-next`; no test runner, no CI config, no `vercel.json` (deployment is presumably the default Vercel git integration, inferred from `.vercel` in `.gitignore`).
- **Content today**: Real, first-person content exists for **Experience** (3 roles) and **Work/Projects** (6 projects with links, stacks, descriptions) in `public/data.ts`, plus an "About Me" bio. There is currently **no content at all** for Engineering, AI Engineering, Open Source, or Notes — these sections don't exist in any form.

## 2. Current Problems (relative to the target)

1. **Structural mismatch**: A single anchor-scrolling marketing page cannot express the requested docs IA (Introduction / Projects / Engineering / AI Engineering / Experience / Open Source / Notes / Contact) — that requires real routes, a sidebar, and per-page layouts.
2. **No content system**: Data lives as ad hoc arrays in `public/data.ts` with no frontmatter, no per-project deep-dive fields (Overview/Role/Stack/Architecture/Features/Challenges/Decisions/Performance/Lessons), and no way to add an article without editing a TS file by hand.
3. **No design tokens**: Colors are hardcoded Tailwind theme values tied to one dark look; adding light mode means touching every component instead of swapping CSS variables.
4. **Dead weight**: `animejs`, `react-scroll`, `@heroicons/react`, and all 12 `Calibre*.otf` files are unused. `aos` is a scroll-animation library fundamentally at odds with the "no random animations" / documentation-layout aesthetic the spec asks for.
5. **Font loading is inconsistent and partly wrong**: render-blocking `@import` CSS fonts, plus an accidental "Noto Sans Linear B" family in the stack.
6. **No dark/light theme, no sidebar, no TOC, no breadcrumbs, no command palette, no search** — none of the docs chrome exists yet.
7. **No SEO infrastructure**: missing sitemap, robots.txt, OG/Twitter metadata, canonical URLs, JSON-LD.
8. **No content for 4 of the 8 requested sections** (Engineering, AI Engineering, Open Source, Notes) — these must be built from real material or explicitly marked `TODO: Content needed`, never invented.
9. **One data inconsistency to flag, not silently fix**: `experienceData` lists the current role "Software Engineer II" duration as `"March 2026 - June 2026"`, a future/likely-incorrect range (today is 2026-09-11, so this reads as either a typo or an already-ended stint mislabeled). I will ask you for the correct dates rather than guess.
10. **Next.js 14.0.2 is dated**; staying vs. upgrading is a real tradeoff (see §9).

## 3. New Architecture

- Keep **Next.js App Router** (it's the right tool) but restructure `app/` into real routed segments instead of one page with anchors.
- Introduce a **content layer**: MDX files under `content/{projects,engineering,ai,experience,notes}/*.mdx` with YAML frontmatter, parsed with `gray-matter`, rendered with `next-mdx-remote/rsc` (Server Components-friendly, no need for a heavier framework like Contentlayer/Velite/Fumadocs given the spec's "don't install unnecessary libraries" directive).
- Introduce a **docs shell**: persistent `Header` + collapsible `DocsSidebar` (desktop) / `MobileSidebar` (drawer) + `main` content + right-hand `TableOfContents`, generated from each MDX file's headings.
- Introduce a **design-token system**: CSS custom properties in `globals.css` for background/foreground/border/muted/accent/code-surface, switched via `[data-theme]` attribute driven by `next-themes`. Tailwind config maps utility classes to these variables instead of fixed hex values.
- Replace scroll animation with restrained, purposeful motion only (e.g. a fade-in on route mount, respecting `prefers-reduced-motion`) — drop `aos` entirely.
- Add a small **command palette + search** (`cmdk`) that indexes a build-time-generated JSON of `{title, description, category, tags, url}` across all content — no external search service, per spec.

## 4. Route Structure

```
app/
  layout.tsx                 → root layout: fonts, ThemeProvider, <DocsShell>
  page.tsx                   → "/" documentation-style homepage
  sitemap.ts                 → dynamic sitemap from content index
  robots.ts                  → robots.txt
  opengraph-image.tsx        → default OG image (optional, generated)

  projects/
    page.tsx                 → index/list of case studies
    [slug]/page.tsx           → MDX case study, generateStaticParams from content/projects

  engineering/
    page.tsx
    [slug]/page.tsx

  ai/
    page.tsx                 → AI Engineering index (with Production/Prototype/Experiment badges)
    [slug]/page.tsx

  experience/
    page.tsx                  → timeline (can stay data-driven, not necessarily MDX)

  open-source/
    page.tsx                  → list of contributions (TODO placeholders where real data is missing)

  notes/
    page.tsx
    [slug]/page.tsx

  contact/
    page.tsx
```

Each `[slug]` route uses `generateStaticParams` + `generateMetadata` for full static generation and per-page SEO.

## 5. Component Structure

```
components/
  docs/
    docs-shell.tsx            → composes header + sidebar + content + toc, handles responsive layout
    docs-sidebar.tsx          → desktop nav tree (sections → pages), active-route highlighting
    mobile-sidebar.tsx        → drawer, reuses the same nav tree data
    header.tsx                → logo, top-level nav, theme toggle, command palette trigger
    breadcrumbs.tsx
    table-of-contents.tsx     → scrollspy over in-page headings
    command-palette.tsx       → cmdk-based, keyboard (Ctrl/Cmd+K)
    search.tsx                → the input + results list used inside the command palette
  mdx/
    code-block.tsx            → syntax highlighting (rehype-pretty-code/shiki), copy button
    callout.tsx                → note/warning/tip variants
    tabs.tsx
    badge.tsx                  → status badges (Production/Prototype/Experiment, tech tags)
    mdx-components.tsx        → maps MDX elements → the above
  project/
    project-header.tsx        → title, role, stack, links, status badge
    architecture-diagram.tsx  → wraps Mermaid or a simple SVG/box-diagram component
  ui/
    button.tsx, theme-toggle.tsx, container.tsx  → small shared primitives
```

Each component stays single-purpose; no monolithic "page" components like today's `work.tsx`/`experience.tsx`.

## 6. Content Structure

```
content/
  projects/*.mdx        → frontmatter: title, description, role, stack[], status?, links{repo,live}, order
  engineering/*.mdx      → deep-dive engineering write-ups (system design, backend, infra topics)
  ai/*.mdx               → frontmatter includes status: "production" | "prototype" | "experiment"
  experience/*.mdx (or keep data.ts-derived JSON) → one entry per role
  notes/*.mdx             → short-form technical notes/posts
lib/
  content.ts             → reads/parses MDX + frontmatter, builds the search index, generates nav tree
```

Frontmatter schema is validated at build time (e.g. a small Zod schema) so a malformed new file fails the build loudly instead of rendering broken.

**Content sourcing rule (per your spec):** Projects and Experience are migrated from the real data already in `public/data.ts`, expanded into the fuller case-study shape (Overview/Role/Stack/Architecture/Features/Engineering Challenges/Technical Decisions/Performance/Lessons Learned) only where real detail is available — unknown fields become `TODO: Content needed` rather than invented text. Engineering, AI Engineering, Open Source, and Notes have no existing source material, so they'll ship as a minimal real skeleton (e.g. the "Match Macking" project's NLP/structured-extraction work is legitimate AI-engineering material and can seed the AI section) plus explicit `TODO: Content needed` stubs for the rest — I'll ask you for specifics before writing anything that reads as a real case study.

## 7. Design System

- **Tokens**: CSS variables for `--background`, `--foreground`, `--muted`, `--border`, `--accent`, `--code-bg`, `--code-fg`, defined once for light and once for dark, switched by `next-themes`' `data-theme` attribute. Tailwind config reads these via `hsl(var(--x))`-style utilities instead of fixed hex values like today's `bgDark`/`textBlue`.
- **Typography**: Keep `Inter` (via `next/font/google`) for body/UI text. Replace the CSS-`@import` font stack with a proper monospace pairing loaded via `next/font/google` (e.g. `JetBrains Mono` or keep `Fira Code`) for code and metadata labels. Drop `Mono Sans`, `Noto Sans Linear B`, and `Poppins` — none are used meaningfully today.
- **Layout primitives**: consistent spacing scale, max-width content container, borders over shadows/gradients, restrained corner radii — matching the spec's explicit "avoid gradient blobs / glassmorphism / excessive rounded cards" direction.
- **Assets cleanup**: drop the unused `Calibre*.otf` files and the unused logo PDF/PNG/SVG kit variants that aren't wired into the new header/footer, unless you want to keep them for brand reasons — I'll confirm before deleting anything from `public/`.

## 8. Migration Strategy (incremental)

1. **Scaffolding**: add the new dependencies (§9), set up `ThemeProvider`, CSS variables, base Tailwind config — site still renders the current page, now theme-aware, to prove the base layer works.
2. **Docs shell**: build `Header`, `DocsSidebar`, `MobileSidebar`, `TableOfContents`, `Breadcrumbs` against a static nav tree; wrap the existing homepage content in the new shell so nothing goes dark mid-migration.
3. **Content extraction**: move `workData`/`experienceData`/`aboutMe`/`technologies` out of `public/data.ts` into MDX + a small `lib/content.ts` reader; delete `public/data.ts` once nothing imports it.
4. **Route-by-route build-out**: Projects → Experience → AI Engineering → Engineering → Open Source → Notes → Contact → Homepage rewrite last (so the homepage can link to real, already-working routes).
5. **Command palette + search** once at least a few real routes/content exist to index.
6. **Cleanup pass**: remove `aos`, `animejs`, `react-scroll`, `@heroicons/react`, unused fonts/assets; delete now-dead `app/components/*` files.
7. **Verification pass** (spec Step 18): lint, typecheck, `next build`, click through every route, test both themes, keyboard nav, command palette, mobile layout, check for broken links/images/metadata.

Each step should be its own commit so the migration is reviewable and revertible.

## 9. Dependencies

**Add:**
| Package | Purpose |
|---|---|
| `next-mdx-remote` | Render MDX content from `content/` in Server Components |
| `gray-matter` | Parse frontmatter |
| `next-themes` | Light/dark theme switching via CSS variables |
| `cmdk` | Command palette (Ctrl/Cmd+K) + search UI |
| `rehype-pretty-code` + `shiki` | Syntax highlighting for code blocks |
| `remark-gfm` | GitHub-flavored markdown (tables, etc.) in MDX |
| `zod` (small, optional) | Validate frontmatter shape at build time |

**Remove:** `aos`, `@types/aos`, `animejs`, `@types/animejs`, `react-scroll`, `@types/react-scroll`, `@heroicons/react` (all unused or incompatible with the new direction).

**Keep:** `next`, `react`, `react-dom`, `react-icons` (still useful for inline icons), Tailwind + PostCSS + Autoprefixer, TypeScript, ESLint.

**Decision needed from you:** whether to upgrade Next.js off `14.0.2`. Recommendation: bump to the latest Next 14.x patch at minimum (low risk, bug fixes); a jump to Next 15 is a larger, separate decision (React 19 requirement, async `params`/`searchParams` breaking change) that I'd rather scope explicitly rather than bundle into this redesign.

## 10. Performance Considerations

- Every route is a Server Component by default; only interactive leaves (`ThemeToggle`, `CommandPalette`, `MobileSidebar`, `TableOfContents` scrollspy) are `"use client"`.
- MDX is rendered at build time (`generateStaticParams`), so project/note pages are fully static.
- Replace `@import`-loaded Google Fonts with `next/font/google` for all fonts (self-hosted, no render-blocking request, automatic `font-display: swap`).
- Use `next/image` consistently (already partly done) with explicit sizes for project screenshots; lazy-load below-the-fold images.
- Drop `aos`/`animejs` client JS entirely — removes a chunk of hydration-time work with no functional loss.
- Code-split the command palette (`dynamic(() => import(...), { ssr: false })`) since it's not needed for first paint.

## 11. SEO Strategy

- Per-route `generateMetadata` with title template (`"%s — Mayur Parmar"`), description, canonical URL.
- OpenGraph + Twitter card metadata (static default image now; per-page dynamic OG image is a nice-to-have, not required).
- `app/sitemap.ts` generated from the content index (all static routes + every MDX slug).
- `app/robots.ts` allowing all crawl, pointing at the sitemap.
- JSON-LD `Person` schema on the homepage/contact page, and `Article`/`CreativeWork` schema on project/note pages where appropriate.
- Homepage title stays `Mayur Parmar — Full-Stack AI Engineer` as specified.

---

## Open Questions Before I Start Implementing

1. **Experience dates**: `experienceData`'s "Software Engineer II" role lists `March 2026 - June 2026`. What's the correct duration?
2. **Content for Engineering / Open Source / Notes**: I have no existing material for these. Should I (a) stub them as `TODO: Content needed` pages so the IA is complete but honest, or (b) do you have write-ups, GitHub repos, or notes you want me to draw from?
3. **AI Engineering section**: The only project with clear AI-engineering substance today is "Match Macking" (NLP → structured data → scored matching). Is there other AI/LLM/RAG work you want documented, or should the section launch with just that one case study (marked appropriately as Production/Prototype/Experiment) plus TODO stubs for the rest?
4. **Next.js version**: stay on latest Next 14.x, or are you open to Next 15?
5. **Unused assets**: OK to delete the 12 unused `Calibre*.otf` files and the logo kit variants not used by the new header/footer, or should they be kept in `public/` regardless?

I'll wait for your go-ahead (and answers to the above where relevant) before touching any code.

---

## Progress Log

### Done

- **Design tokens**: `app/globals.css` / `tailwind.config.ts` now use the exact light/dark hex
  values from the spec (converted to HSL), with `border` / `border-subtle`, `accent` /
  `accent-hover`, `muted-foreground` / `subtle-foreground` / `faint-foreground` tiers, and a
  `rounded-badge` (5px) radius token.
- **Docs shell**: three-column layout — sticky grouped sidebar (`lib/nav.ts` groups: Get
  Started / Build / Experience / Open Source / Notes / Connect), centered `max-w-3xl` content
  column, sticky right-hand "On This Page" TOC (`components/docs/table-of-contents.tsx`,
  IntersectionObserver-based scrollspy over any `h2[id]`/`h3[id]` in `#main-content`).
- **Breadcrumbs** (`components/docs/breadcrumbs.tsx`) on every route.
- **Header**: sticky, `mayurparmar.dev` logo, command-palette search trigger with a `Ctrl K`
  badge, GitHub + LinkedIn icons, Resume link, theme toggle, mobile drawer.
- **Command palette / search** (`cmdk`): `Ctrl/Cmd+K`, indexes `lib/search-index.ts` (nav routes
  + all projects), keyboard nav, click-outside + Escape to close.
- **Project case-study pages**: `app/projects/[slug]/page.tsx`, statically generated for all 6
  projects. Each has Overview / Role / Technology / Architecture / Features / Engineering
  Challenges / Technical Decisions / Performance / Lessons Learned / Links, with `Badge`,
  `Callout`, and `PageNav` (prev/next) components. Sections with no verified source material
  (Architecture, Challenges, Decisions, Performance, Lessons) render an explicit
  "CONTENT NEEDED" callout rather than invented text. "Features" bullets are restructured from
  the existing (already-verified) project descriptions, not new claims.
  "NJ Jewels Wholesale" is the one `featured` project (per spec's example), shown with extra
  emphasis on `/projects` and on the homepage.
- **Homepage**: rebuilt hero (breadcrumb, 40px/34px H1, reusable `CodeBlock` with copy button),
  Featured Projects section links to the new internal case-study pages, "Latest Notes" reframed
  to the spec's non-`TODO` copy ("will be published here").
- **SEO**: `app/sitemap.ts`, `app/robots.ts`, `metadataBase` + OpenGraph + Twitter card in the
  root layout, per-route `alternates.canonical`, `Person` JSON-LD on the homepage.
- Verified: `npm run lint` (clean), `npm run build` (clean, all 6 project pages statically
  generated), manual browse in Chrome (light + dark, homepage, a project case study, command
  palette search + Enter-to-navigate). No console errors beyond an unrelated browser-extension
  hydration warning (`cz-shortcut-listen`, from ColorZilla, not app code).

### Color system / typography refinement pass (second round)

Refined the design system so it reads as a bespoke documentation product rather than a generic
template, per explicit reference study of a documentation site's type/color/density approach
(no branding, colors, or content copied — only the underlying design *approach* was studied):

- Added dedicated tokens instead of reusing generic `muted`/`border` everywhere: `code-border`
  (code blocks now use #F6F8FA / #E5E7EB light, #111827 / #1F2937 dark, matching the spec
  exactly), `nav-active` / `nav-hover` (subtle blue-tinted sidebar states, not plain gray),
  `badge` / `badge-border` / `badge-text` (visibly toned-down tech tags).
- `Badge` and `Callout` components rebuilt: badges are now subtle slate tones instead of
  bordered-and-bright; callouts (`info`/`warning`/`success`/`note`, plus `todo` for
  "CONTENT NEEDED") use exact spec colors — which, not by coincidence, are Tailwind's stock
  `blue`/`amber`/`emerald` palettes at 50/200/800 (light) and 950/900/200 (dark).
- Strengthened heading hierarchy: true H3-level content headings (card/section titles like
  "Web Platforms," "NJ Jewels Wholesale," "Match Macking") bumped from 14-16px to 18px/600
  weight; dense list-row titles (the "More Projects" list) kept at 15px/600 so they read as
  distinct from full headings without competing with them.
- Reworked vertical rhythm to the spec's explicit numbers: H1→description 16px, description→
  buttons 24px, H2→content 20px, section→section ~56px (was ~80px, felt too sparse).
- Header bumped to 64px (was 56px) with a full-strength border (was the subtle one); sidebar/TOC
  sticky offsets and scrollspy margins adjusted to match. Buttons standardized to a 40px height.
- Verified again: `npm run lint` and `npm run build` clean; re-browsed light + dark mode on the
  homepage and a project case study in Chrome — sidebar active/hover states, badge subtlety, and
  callout coloring all confirmed visually.

### Structural pass — from "portfolio with a sidebar" to "documentation with content" (third round)

Studied the reference documentation site's actual layout/density/sidebar behavior directly in a
browser (structure and spacing only — no branding, copy, or assets carried over) and used it to
find what still read as "portfolio," then fixed it:

- **Removed every homepage/project-list card.** "What I Build," "Engineering Stack," "Featured
  Projects," the AI Engineering teaser, and the Experience teaser no longer live in bordered
  boxes/grids — they're plain flowing `##`/`###` article content with thin `divide-y` separators
  between repeated entries, matching the explicit before/after example in this round's brief.
  `/projects` was flattened the same way (no more separate "Featured" card + "More Projects"
  list — one uniform list, dropped the now-dead `featured` field from the `Project` type).
- **Engineering Stack is now categorized** (Frontend / Backend / Databases / Infrastructure /
  AI) instead of one flat tag cloud — using the stack you listed yourself at the very start of
  this project, replacing the old flat `technologies` array that had drifted from it (had
  Angular.js/Electron.js/Three.js, which aren't in your stated core stack).
- **Removed every "TODO: Content needed" / "CONTENT NEEDED" callout from the live site.** Project
  case-study pages now only render the sections with real content (Overview, Role, Technology,
  Features, Links) — Architecture/Engineering Challenges/Technical Decisions/Performance/Lessons
  Learned are omitted entirely rather than shown empty, since there's no verified material for
  them yet. `StubPage` (Engineering/Open Source/Notes) now shows only a heading and a plain
  sentence, no callout box.
- **Sidebar restructured into real documentation groups**: Start Here / Engineering (Projects,
  Write-ups) / AI Engineering (Overview) / Experience (Career) / Open Source / Notes / Contact
  (Contact, Resume as an external link). All groups link only to routes that actually exist —
  no invented subpages (Backend/Frontend/RAG/Agents/etc. from the brief's illustrative sidebar
  aren't real pages yet, so they aren't in the nav).
- Verified again: `npm run lint`, `npx tsc --noEmit`, and `npm run build` all clean; re-browsed
  the homepage, `/projects`, a project case study, and `/engineering` in Chrome (dark + light) —
  confirmed no cards remain, no placeholder language is visible, and the reading experience is a
  continuous article rather than stacked sections.

### Color system — matched to the reference's actual palette (fourth round)

You asked directly for the same color code and theme as the reference, which supersedes the
earlier "don't copy colors/branding" instruction for this one aspect (layout, IA, and content
were never part of that ask and are unchanged). Rather than eyeball it from screenshots, I
extracted the reference's actual computed CSS values in a browser:

- **Accent**: a custom green, `#07C983` in dark mode and Tailwind's `green-600` (`#16A34A`) in
  light mode, with `green-700` (`#15803D`) as the solid-button/hover shade — replacing the blue
  accent used until now.
- **Text**: pure black (`#000000`) on light, pure white (`#FFFFFF`) on dark — the reference has
  no off-black/off-white softening, unlike the previous `#171717`/`#FAFAFA`.
- **Neutrals are hue-shifted toward green**, not pure gray — e.g. its light-mode border measured
  as `#EEF2F0` and dark-mode border as `#262A27`, both with a slight green cast rather than
  neutral. I carried that same tint through every border/muted/badge/nav token so the whole
  neutral scale feels intentional rather than just "gray site + green links."
- Semantic callouts (info/warning/success) were left as their standard blue/amber/emerald — that
  distinction (brand color vs. semantic meaning) is a deliberate, common documentation-site
  convention, not an oversight.
- Verified again: lint/build clean; re-browsed the homepage and a project page in both themes —
  the green accent, tinted neutrals, and pure black/white text all render as extracted.

### Bug fix — mobile menu and search were broken site-wide (fifth round)

You reported the project page "not working" and asked for a mobile/responsiveness check. All
routes returned 200 and rendered correctly content-wise (verified via `curl` against a production
build and a route-by-route headless check for horizontal overflow — none found on any of the 14
routes at a 390px width). The real, confirmed bug was global, not project-page-specific:

**Root cause**: `SiteHeader`'s `<header>` has `backdrop-blur` (a CSS `backdrop-filter`). Per the
CSS spec, `backdrop-filter` on an ancestor creates a new *containing block* for any
`position: fixed` descendant. Both the mobile nav drawer and the `Ctrl/Cmd+K` command palette are
`position: fixed` elements that lived *inside* that header, so their `h-full` / `inset-0` (meant
to size against the full viewport) instead resolved against the header's own 64px height —
collapsing the mobile drawer to a 63px sliver and the search modal's backdrop to a 96px strip,
with page content showing through undimmed underneath. On mobile, where the sidebar is only
reachable via that broken hamburger drawer, this made in-page navigation and search effectively
unusable — almost certainly what read as the project page/pages "not working."

**Fix**: both the drawer+overlay (`site-header.tsx`) and the command palette's overlay
(`command-palette.tsx`) now render via `createPortal(..., document.body)` instead of as
descendants of the blurred header, guarded by a `mounted` client flag (portals need `document`,
which doesn't exist during SSR). This was verified precisely, not just visually: before the fix,
`getBoundingClientRect()` on the drawer measured `height: 63.2px`; after, `height: 836px`
(matching the full test viewport) with `parentElement === document.body`. Confirmed the same for
the command palette overlay (96px → 844px), on both a synthetic 390px-wide viewport and normal
desktop width.

**Mobile-testing note for future sessions**: this environment's browser-automation `resize_window`
tool does not actually change `window.innerWidth` (confirmed both this round and the prior one),
so screenshots taken after "resizing" are still desktop-width renders. The workaround that
actually works: open a blank tab, inject an `<iframe>` element sized to the target viewport (e.g.
390×844) pointing at the dev server, and screenshot/interact with that — this produces a real,
accurate mobile-width render since the iframe establishes its own layout viewport.

- Verified: `npm run lint`, `npx tsc --noEmit`, `npm run build` all clean; re-tested the drawer and
  command palette at both mobile and desktop widths after the fix.

### Project thumbnails (sixth round)

Added a `ProjectThumbnail` component (`components/project/project-thumbnail.tsx`) — a
`next/image`-backed, 16:9, `object-cover object-top` box with the same border treatment as code
blocks — using the real project screenshots already sitting unused in `lib/data.ts`'s
`imageUrl` field (`public/media/images/*.png`, verified as genuine screenshots of the live
sites, not stock art). Wired in three places: a large hero-style thumbnail on each project's
case-study page (after the badges, before "Overview"), and a smaller thumbnail in a horizontal
image+text row on both `/projects` and the homepage's "Featured Projects" list. `object-top`
crops toward the header/hero of each screenshot rather than the center, since that's the most
identifying part of a website screenshot. Verified lint/build clean and checked rendering in
both themes.

### Thumbnail sizing/alignment fix (seventh round)

Two issues, both on `/projects` and the homepage "Featured Projects" list (the case-study pages'
standalone hero thumbnail was unaffected):

1. **Layout bug**: the thumbnail sat in a flex row next to the description text with default
   `align-items: stretch`, so it was being stretched to match the much-taller text column —
   which overrides `aspect-video` and turned the "horizontal" thumbnail back into a tall box.
   Fixed by widening the thumbnail (`w-48`→`w-64`), clamping the description to 3 lines
   (`line-clamp-3`) so the text column's height stays close to the image's, and keeping
   `sm:items-start` so both start flush at the top — the two elements now read as a properly
   proportioned, top-aligned pair instead of a small image floating next to a tall unrelated
   block of text.
2. **Real bug found while verifying the above**: for one dev-server run, `.relative` and
   `.aspect-video` were entirely missing from the compiled Tailwind CSS (confirmed by reading
   `document.styleSheets` directly), so the thumbnail wrapper collapsed to 0 height and
   `next/image`'s `fill` mode fell back to rendering the raw image at a huge intrinsic size,
   covering the whole page. A clean rebuild (`rm -rf .next && npm run build`) produced correct
   CSS on the first attempt but then hit a transient Windows `PageNotFoundError: /_document`
   file-lock race on a second attempt — retried immediately and it built clean. Restarting the
   dev server from that clean build resolved it. This looked like an app bug but was a
   dev-cache/Windows-filesystem artifact, not a code defect — noted here in case the same
   symptom (`position: static` where `relative` was applied, or a `fill` image rendering at
   viewport size) recurs in a future session: check `document.styleSheets` for the missing rule
   before assuming the component code is wrong.
- Verified: `lint`, `tsc --noEmit`, `build` clean; confirmed the fix visually in dark and light
  mode on both `/projects` and the homepage.

### Sidebar shifting between pages (eighth round)

Real bug: `DocsShell`'s three-column row uses `justify-center` on a flex container, and
`TableOfContents` returned `null` (unmounting entirely) whenever a page had fewer than 2
headings. Since headings are only detected client-side after mount, `headings` starts empty on
*every* page load — so the TOC column briefly disappeared on every page, then popped back in,
and on pages that never reach 2 headings (`/projects`, `/engineering`, `/ai`, stub pages) it
never came back. Each time that third column vanished, `justify-center` re-centered the
remaining sidebar+content pair, visibly shifting the sidebar's horizontal position relative to
pages where the TOC stayed mounted — exactly the "sidebar not properly fixed" symptom.

Fixed by always rendering the TOC's `<aside>` (so its width is permanently reserved in the flex
row) and only conditionally rendering its *contents* ("On This Page" + the list) once 2+
headings are found. Verified precisely, not just visually: `getBoundingClientRect()` on the
sidebar now returns the identical `x: 101.2` on the homepage, `/projects`, `/engineering`, and
`/ai` — four pages with 7, 0, 0, and 1 headings respectively — confirming the sidebar no longer
moves regardless of a page's heading count.

- Verified: `lint`, `build` clean; confirmed sidebar position is now pixel-identical across pages
  with and without an "On This Page" list.

### Sidebar spacing/typography matched to the reference (ninth round)

Extracted the reference's actual computed sidebar values via browser JS rather than eyeballing:
nav links are 14px/weight 400 (not bold), row height 36px via `py-1.5` + `leading-6`; group
labels are also 14px but weight 600, sentence-case with no uppercase/letter-spacing and
near-full-contrast color (not a muted small-caps eyebrow); the nav column itself is 288px
(`18rem`) wide, not 240px. Applied all of this to `nav-list.tsx` (labels: `text-sm font-semibold
text-foreground`, no `uppercase`; links: `text-sm leading-6 font-normal`, asymmetric
`pl-4 pr-3 py-1.5` padding) and `docs-sidebar.tsx` (`w-60` → `w-72`), widened the group and item
gaps (`gap-6`→`gap-8` between groups, `gap-0.5`→`gap-1` between links) to match the reference's
more generous breathing room. Left the border-radius scale and semantic callout colors alone —
out of scope for a font-size/spacing request and would conflict with the deliberately-set
"slightly sharp, technical" radius direction from earlier rounds.

**Noted, not changed**: two files had been hand-edited outside this conversation before this
turn — `docs-shell.tsx` lost its `mx-auto` (the content row now hugs the left edge instead of
centering: measured a 0px left / 82px right gap at 1482px viewport width), and
`command-palette.tsx`'s desktop search trigger widened from `w-64` to `w-72`. The second looks
harmless; the first looks like a real regression (asymmetric layout on wide screens) but wasn't
part of this request, so it's left as-is and flagged here rather than silently reverted.

- Verified: `lint`, `build` clean; confirmed sidebar typography/spacing visually against the
  reference on the homepage and `/projects`.

### Still outstanding (not fabricated, needs real content or a follow-up pass)

- **Engineering / Open Source / Notes** are still stub pages (heading + one soft sentence, no
  placeholder callout) — no source material exists yet for these per the "don't invent" rule.
- **MDX content layer** (`content/*.mdx`, `gray-matter`, `next-mdx-remote`) was not introduced —
  there's no long-form article content yet to justify it. The current plain-TSX pages already
  satisfy the docs IA; MDX is worth adding once real Engineering/AI/Notes articles exist.
- **Tabs component** (spec's "Architecture: [Frontend] [Backend] [Database]" pattern) not built —
  no project currently has multi-facet architecture content to justify it.
- **Mobile/tablet visual QA** was not done via screenshot (the browser automation tool's window
  resize wasn't reflected in captured screenshots in this session) — responsive classes
  (`md:`/`xl:`/`sm:` breakpoints, the existing mobile drawer) are in place and lint/build clean,
  but a real-device or DevTools-emulation pass is still worth doing.
- **Open data question, unresolved**: `lib/data.ts`'s current "Software Engineer II" role lists
  `"March 2026 - June 2026"` as its duration. Today is 2026-09-11, so that range is either a typo
  or an already-ended stint mislabeled as current. I did not guess a fix — flagging it for you to
  correct.
