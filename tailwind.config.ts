import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      blue: "#000F9F",
      white: "#FFFFFF",
      background: "#FAFAFA",
      black: "#000000",
      whiteGrey: "#FDFEFF",
      grey: "#F8F8F8",
      transparent: "rgba(0,0,0,0)",
    },
    extend: {
      fontFamily: {
        mona: ["var(--font-mona)"],
      },
      animation: {
        ["infinite-slider"]: "infiniteSlider 20s linear infinite",
      },
      keyframes: {
        infiniteSlider: {
          "0%": { transform: "translateX(0)" },
          "100%": {
            transform: "translateX(calc(-600px * 3 - 32px))",
          },
        },
      },
    },
  },
  plugins: [],
};
export default config;
