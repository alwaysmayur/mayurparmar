import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.{md,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        border: {
          DEFAULT: "hsl(var(--border))",
          subtle: "hsl(var(--border-subtle))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        subtle: {
          foreground: "hsl(var(--subtle-foreground))",
        },
        faint: {
          foreground: "hsl(var(--faint-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          hover: "hsl(var(--accent-hover))",
          foreground: "hsl(var(--accent-foreground))",
        },
        surface: "hsl(var(--surface))",
        code: {
          DEFAULT: "hsl(var(--code-bg))",
          border: "hsl(var(--code-border))",
          foreground: "hsl(var(--code-foreground))",
        },
        nav: {
          active: "hsl(var(--nav-active-bg))",
          hover: "hsl(var(--nav-hover-bg))",
        },
        badge: {
          DEFAULT: "hsl(var(--badge-bg))",
          border: "hsl(var(--badge-border))",
          text: "hsl(var(--badge-text))",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      borderRadius: {
        badge: "5px",
      },
    },
  },
  plugins: [],
};
export default config;
