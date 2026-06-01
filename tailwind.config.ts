import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Brand extracted from hpjax.com logo
        teal: {
          DEFAULT: "#3FBFAE", // brand teal — decorative / large UI elements
          dark: "#1E847C",    // accessible teal — white text 4.53:1 WCAG AA
          foreground: "#FFFFFF",
        },
        primary: {
          DEFAULT: "#BF9B30", // warm gold — logo title text + acupuncture needles
          light: "#D4B458",
          dark: "#8F7220",
          foreground: "#FFFFFF",
        },
        secondary: {
          DEFAULT: "#7BA368", // sage green — hands motif + tagline
          light: "#9CC48A",
          dark: "#5A7A4A",
          foreground: "#FFFFFF",
        },
        surface: {
          DEFAULT: "#FDFBF7", // warm off-white background
          muted: "#F4F0E8",
        },
        ink: {
          DEFAULT: "#1A1A1A",
          muted: "#555555",
          subtle: "#888888",
        },
      },
      fontFamily: {
        heading: ["var(--font-playfair)", "Georgia", "serif"],
        body: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      keyframes: {
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-in-up": "fadeInUp 0.5s ease-out forwards",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

export default config;
