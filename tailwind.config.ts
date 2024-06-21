import type { Config } from "tailwindcss";
import * as colors from "tailwindcss/colors"

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend:{
      colors: {
        'dark-bg': '#1A1A24'
      },
      spacing: {
        '515': '515px',
        '90': '90px',
        '797': "797px"
      }
    }
  },
  plugins: [],
};
export default config;