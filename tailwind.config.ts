import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
        "3xl": "1600px",
      },
    },
    extend: {
      colors: {
        lightGrey: "#F8F8F8",
        mediumGrey: "#CCCCCC",
        darkGrey: "#333333",
        pinkAccent: "#E10C73",
        tealAccent: "#225566",
        mintAccent: "#BCE2E2",

        border: "#e2e2e2",
        input: "#e2e2e2",
        ring: "#a3a3a3",
        background: "#ffffff",
        foreground: "#0a0a0a",
        primary: {
          DEFAULT: "#000000",
          foreground: "#ffffff",
        },
        secondary: {
          DEFAULT: "#f4f4f5",
          foreground: "#18181b",
        },
        destructive: {
          DEFAULT: "#ef4444",
          foreground: "#fafafa",
        },
        muted: {
          DEFAULT: "#f4f4f5",
          foreground: "#71717a",
        },
        accent: {
          DEFAULT: "#f4f4f5",
          foreground: "#18181b",
        },
        popover: {
          DEFAULT: "#ffffff",
          foreground: "#0a0a0a",
        },
        card: {
          DEFAULT: "#ffffff",
          foreground: "#0a0a0a",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)"],
        roboto: ["Roboto", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        arial: ["Arial", "sans-serif"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0px" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0px" },
        },
        spin: {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
        "spin-reverse": {
          from: { transform: "rotate(360deg)" },
          to: { transform: "rotate(0deg)" },
        },
      },
      animation: {
        "spin-slow": "spin 10s linear infinite",
        "spin-superslow": "spin 230s linear infinite",
        "spin-slow-reverse": "spin-reverse 10s linear infinite",
        "spin-superslow-reverse": "spin-reverse 230s linear infinite",
        spin: "spin 20s linear infinite",
        "spin-reverse": "spin-reverse 20s linear infinite",
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
