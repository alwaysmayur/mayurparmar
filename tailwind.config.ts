import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        mono: ["Mono Sans", "monospace"],
        noto: ['"Noto Sans Linear B"', "sans-serif"],
        sans: ["Inter", "Noto Sans Linear B", "sans-serif"],
        code: ["Fira Code", "monospace"],
        roboto: ["Roboto Mono", "monospace"],
        poppins: ['Poppins', 'sans-serif'],
      },
      fontWeight: {
        thin: "100",
        light: "300",
        normal: "400",
        medium: "500",
        semibold: "600",
        bold: "700",
        extrabold: "800",
        black: "900",
      },
      lineHeight: {
        "76": "76px",
      },
      letterSpacing: {
        tighter: "-0.05em",
        tight: "-0.025em",
        normal: "0",
        wide: "0.025em",
        wider: "0.05em",
        widest: "0.1em",
      },
      colors: {
        bgDark: "#0a192f",
        textGray: "#8892b0",
        textBlue: "#64ffda",
        headGray: "#ccd6f6",
        bgNav:"#04364A"
      },
    },
  },
  plugins: [],
};
export default config;
