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
    },
    extend: {
      fontFamily: {
        mona: ["var(--font-mona)"],
      },
    },
  },
  plugins: [],
};
export default config;
