/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: "#4c1d95",
        secondary: "#ff9776",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
  darkMode: "class",
};
