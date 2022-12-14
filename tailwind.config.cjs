/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", "*"],
  theme: {
    extend: {},
    colors: {
      white: "#ffffff",
      brand: {
        50: "#E8E8E8",
        100: "#D4D4D4",
        200: "#A6A6A6",
        300: "#7A7A7A",
        400: "#4D4D4D",
        500: "#202020",
        600: "#1A1A1A",
        700: "#141414",
        800: "#0D0D0D",
        900: "#080808",
      },
    },
  },
  plugins: [],
};
