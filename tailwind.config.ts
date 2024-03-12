import type { Config } from "tailwindcss";

const { fontFamily } = require("tailwindcss/defaultTheme");

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mont: ["var(--font-mont)", ...fontFamily.sans],
      },
      colors: {
        // dark: "#121212",
        // light: "#f5f5f5",
        dark: "#3b0764",
        light: "#f3e8ff",
        primary: "#e11d48", // 240,86,199
        primaryDark: "#eab308", // 80,230,217
      },
      animation: {
        "spin-slow": "spin 8s linear infinite",
        overlayShow: "overlayShow 150ms cubic-bezier(0.16, 1, 0.3, 1)",
        contentShow: "contentShow 150ms cubic-bezier(0.16, 1, 0.3, 1)",
      },
      backgroundImage: {
        circularLight:
          "repeating-radial-gradient(rgba(59,7,100,0.5) 2px,rgba(255,255,255,0.2) 5px,rgba(255,255,255,0.2) 100px)",

        circularDark:
          "repeating-radial-gradient(rgba(243,232,255,0.5) 2px,rgba(255,255,255,0.02) 8px,rgba(255,255,255,0.02)  100px)",

        circularLightLg:
          "repeating-radial-gradient(rgba(59,7,100,0.5)  2px,rgba(255,255,255,0.2) 5px,rgba(255,255,255,0.2) 80px)",

        circularDarkLg:
          "repeating-radial-gradient(rgba(243,232,255,0.5) 2px,rgba(255,255,255,0.02) 8px,rgba(255,255,255,0.02) 80px)",

        circularLightMd:
          "repeating-radial-gradient(rgba(59,7,100,0.5)  2px,rgba(255,255,255,0.2) 5px,rgba(255,255,255,0.2) 60px)",

        circularDarkMd:
          "repeating-radial-gradient(rgba(243,232,255,0.5) 2px,rgba(255,255,255,0.02) 6px,rgba(255,255,255,0.02) 60px)",

        circularLightSm:
          "repeating-radial-gradient(rgba(59,7,100,0.5)  2px,rgba(255,255,255,0.2) 5px,rgba(255,255,255,0.2) 40px)",

        circularDarkSm:
          "repeating-radial-gradient(rgba(243,232,255,0.5) 2px,rgba(255,255,255,0.02) 4px,rgba(255,255,255,0.02) 40px)",
      },
      keyframes: {
        overlayShow: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        contentShow: {
          from: {
            opacity: "0",
            transform: "translate(-50%, -48%) scale(0.96)",
          },
          to: { opacity: "1", transform: "translate(-50%, -50%) scale(1)" },
        },
      },
    },
    screens: {
      "2xl": { max: "1535px" },
      // => @media (max-width: 1535px) { ... }

      xl: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }

      lg: { max: "1023px" },
      // => @media (max-width: 1023px) { ... }

      md: { max: "767px" },
      // => @media (max-width: 767px) { ... }

      sm: { max: "639px" },
      // => @media (max-width: 639px) { ... }

      xs: { max: "479px" },
      // => @media (max-width: 479px) { ... }
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
export default config;
