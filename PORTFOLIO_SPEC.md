You are working on my existing developer portfolio.

Your task is to transform it into a premium open-source-framework-style documentation website.

IMPORTANT:

Read `PORTFOLIO_SPEC.md` completely before making implementation decisions.

Do not start coding immediately.

## Step 1 — Audit

First inspect the repository.

Check:

* package.json
* Next.js version
* app/pages structure
* components
* styles
* Tailwind configuration
* existing routes
* existing portfolio content
* assets
* fonts
* metadata
* deployment configuration
* dependencies

Also inspect the current website implementation and understand what can be reused.

Do not destroy existing functionality without understanding it.

## Step 2 — Plan

After auditing the project, create:

`IMPLEMENTATION_PLAN.md`

Include:

1. Current architecture
2. Current problems
3. New architecture
4. Route structure
5. Component structure
6. Content structure
7. Design system
8. Migration strategy
9. Dependencies to add/remove
10. Performance considerations
11. SEO strategy

Then implement the plan.

## Step 3 — Design

Transform the website from a traditional portfolio into documentation.

The primary UX should resemble:

Next.js Docs
+
Vercel Docs
+
GitHub Docs
+
modern open-source documentation

Do not clone any existing site.

Create an original design.

## Step 4 — Information Architecture

Implement:

Introduction
Projects
Engineering
AI Engineering
Experience
Open Source
Notes
Contact

Use a documentation sidebar.

Desktop:

Header
Sidebar
Main content
Table of contents

Mobile:

Header
Menu drawer
Content

## Step 5 — Homepage

Create a documentation-style homepage.

Hero:

Mayur Parmar

Full-Stack AI Engineer

Builds scalable web applications, backend systems and AI-powered products.

Add:

* Explore Projects
* GitHub
* Resume

Add developer-style code block.

Add sections:

* Overview
* What I Build
* Engineering Stack
* Featured Projects
* AI Engineering
* Experience
* Latest Notes

## Step 6 — Project Documentation

Convert projects into technical case studies.

Do NOT simply create cards.

Each project should have:

Overview
Role
Stack
Architecture
Features
Engineering Challenges
Technical Decisions
Performance
Lessons Learned

Use diagrams/components where useful.

Do not fabricate information.

## Step 7 — AI Engineering

Create a dedicated AI section.

Show AI as a serious engineering capability.

Include:

LLM applications
RAG
Embeddings
Vector search
AI agents
Structured outputs
Evaluation

Create case studies for actual/prototype projects.

Clearly distinguish:

Production

Prototype

Experiment

## Step 8 — Documentation Components

Build reusable components:

DocsLayout
DocsSidebar
MobileSidebar
Header
Breadcrumbs
TableOfContents
CodeBlock
Callout
Tabs
Badge
ProjectHeader
ArchitectureDiagram
Search
CommandPalette

Keep components reusable.

Avoid massive monolithic components.

## Step 9 — MDX

Use MDX for documentation content where practical.

Create content structure:

content/
projects/
engineering/
ai/
experience/
notes/

Make adding a new article/project easy.

## Step 10 — Command Palette

Implement Ctrl+K.

It should search/navigate:

Projects
Engineering
AI
Experience
Notes
Contact

Support keyboard navigation.

## Step 11 — Search

Implement lightweight documentation search initially.

Search:

titles
descriptions
categories
tags

Do not introduce an external search service unless actually necessary.

## Step 12 — Theme

Implement:

Dark mode
Light mode

Use CSS variables/design tokens.

Do not scatter hardcoded colors throughout components.

## Step 13 — Responsive

The website must work perfectly on:

Desktop
Laptop
Tablet
Mobile

Pay special attention to:

sidebar
code blocks
tables
architecture diagrams
navigation
search

## Step 14 — SEO

Implement:

metadata
OpenGraph
canonical URLs
sitemap
robots.txt
structured data where appropriate

Homepage:

Mayur Parmar — Full-Stack AI Engineer

## Step 15 — Performance

Keep the site extremely fast.

Prefer:

Server Components
Static rendering
optimized images
minimal client JavaScript
lazy loading
code splitting

Do not install unnecessary libraries.

## Step 16 — Accessibility

Implement:

semantic HTML
keyboard navigation
focus states
ARIA where necessary
accessible contrast
reduced motion

## Step 17 — Visual Quality

This must NOT look like an AI-generated generic portfolio.

Avoid:

huge gradient blobs
generic glassmorphism
excessive rounded cards
random animations
fake metrics
skill progress bars
stock imagery
overly flashy effects

Prioritize:

typography
spacing
borders
hierarchy
documentation layout
code blocks
navigation
content quality

## Step 18 — Verify

After implementation:

Run lint.

Run type checking.

Run production build.

Fix all errors.

Check every route.

Check mobile layout.

Check dark/light mode.

Check keyboard navigation.

Check command palette.

Check broken links.

Check images.

Check metadata.

## Important

Do not fabricate portfolio information.

If information is missing, create:

TODO: Content needed

instead of inventing facts.

Do not stop after creating the homepage.

The goal is a complete portfolio transformation.

Work incrementally and keep the code maintainable.

Start by auditing the repository.
