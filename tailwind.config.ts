import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      'xs': '360px',
      // => @media (min-width: 360px) { ... }
      
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '769px',
      // => @media (min-width: 769px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1440px',
      // => @media (min-width: 1440px) { ... }

      '2xl': '1600px',
      // => @media (min-width: 1600px) { ... }
    }
  },
  plugins: [],
};
export default config;
