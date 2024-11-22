import type { Config } from "tailwindcss"
import colors from "./src/assets/colors"

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors,
      fontFamily: {
        vazir: ["var(--font-vazir)", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config
