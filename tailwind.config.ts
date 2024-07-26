import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend:{
      colors: {
        'light-gray': '#495060'
      },
      spacing: {
        '515': '515px',
        '90': '90px',
        '797': "797px"
      },
      fontFamily: {
        'mono': ['var(--font-ibm-mono)'],
        'sans-300': ['var(--font-ibm-sans-300)'],
        'sans-400': ['var(--font-ibm-sans-400)']
      }
    }
  },
  plugins: [],
};
export default config;