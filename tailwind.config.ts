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
        primary: "#191919",
        "green-fourth": "#D1F121",
        green: "#D0FF1A",
      },
      fontFamily: {
        'Pragmatica': ['pragmatica', 'sans-serif']
      }
    },
  },
  plugins: [],
};
export default config;
