import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial":
          "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [
    plugin(function ({ addComponents }) {
      addComponents({
        ".heading": {
          fontSize: "2em",
          fontWeight: "900",
        },
        ".subheading": {
          fontSize: "1.5em",
          fontWeight: "bold",
          marginTop: "1em",
        },
        ".sectionHeading": {
          fontSize: "1em",
        },
        ".section": {
          padding: "1em",
        },
        ".list": {
          listStyleType: "disc",
          paddingLeft: "1.8em",
        },
      });
    }),
  ],
};
export default config;
