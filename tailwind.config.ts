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
        'light-gray': '#495060',
        'md-gray': '#262A33',
        'light-blue': '#008FFF',
        'dark-blue': '#15151C'
      },
      spacing: {
        '515': '515px',
        '90': '90px',
        '797': "797px"
      },
      fontFamily: {
        'mono': ['var(--font-ibm-mono)'],
        'sans-200': ['var(--font-ibm-sans-200)'],
        'sans-300': ['var(--font-ibm-sans-300)'],
        'sans-400': ['var(--font-ibm-sans-400)'],
        'sans-700': ['var(--font-ibm-sans-700)'],
        'mono-700': ['var(--font-ibm-mono-700)']
      }
    }
  },
  plugins: [],
};
export default config;