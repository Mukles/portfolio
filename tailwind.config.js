/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
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
