import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: "320px", // You can adjust the pixel value to your preferred breakpoint width
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        gilroyRegular: ["gilroyRegular"],
      },
      colors: {
        lineStopLeft: "rgba(42, 45, 47, 0.4)",
        lineStopMiddle: "rgba(84, 87, 89, 1)",
        lineStopRight: "rgba(42, 45, 47, 0.4)",
      },
    },
  },
  plugins: [
    require("tailwindcss-gradients"),
    require('tailwind-scrollbar'),
  ], 
  
};
export default config;
