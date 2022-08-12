/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      xs: "576",
      sm: "640px",

      md: "768px",

      lg: "1024px",

      xl: "1280px",

      "2xl": "1536px",
    },
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
      dmSans: ["DM Sans", "sans-serif"],
    },
    extend: {
      colors: { semiBlack: "#6e6e6e", ornage: "#f52225", blue: "#0f172a" },
      backgroundColor: { ornage: "#f52225", grayWhite: "#F9F9FC" },
    },
  },
  plugins: [],
};
