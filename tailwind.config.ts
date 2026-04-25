import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        space: {
          DEFAULT: "#0A0E27",
          light: "#13183F",
          dark: "#050714",
        },
        neon: {
          cyan: "#00F5FF",
          purple: "#B829F7",
        },
        gold: "#FFD700",
        text: {
          primary: "#FFFFFF",
          secondary: "#E0E0E0",
          muted: "#A0A0A0",
        },
      },
      fontFamily: {
        orbitron: ["var(--font-orbitron)"],
        rajdhani: ["var(--font-rajdhani)"],
        inter: ["var(--font-inter)"],
        tajawal: ["var(--font-tajawal)"],
      },
    },
  },
};

export default config;
