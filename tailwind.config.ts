import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors:{
        "fayhr-blue": "#01A8F6",
        "fayhr-gray": "#F5F5F5",
      },
      fontFamily: {
        "poppins": ["Poppins", "sans-serif"],
        "roboto": ["Roboto", "sans-serif"],
      },
      fontSize: {
        "xxs": "8px",
      },
    },
  },
  plugins: [],
};
export default config;
