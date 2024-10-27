import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        anuphan: ["Anuphan", "sans-serif"],
      },
      colors: {
        primary: {
          DEFAULT: '#0B0E18',
          10: '#101423',
        },
        secondary: {
          DEFAULT: '#FCFCFD',
          30: '#313856',
          20:'#777E90',
          10: '#C0C0C9',
        },
        blue: {
          20: '#97CFFD',
          10: '#4EAEFD',
        },
        'dark-primary': '#222',
        'dark-secondary': '#333',
        'light-primary': '#fff',
      },
    },
  },
  plugins: [],
};
export default config;
