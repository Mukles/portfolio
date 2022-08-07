/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
      sm: ["16px", "30px"],
      lg: ["18px", "23px"],
      "3xl": ["30px", "42px"],
      "4xl": ["32px", "42px"],
    },
    extend: {
      colors: { semiBlack: "#6e6e6e", ornage: "#f52225", blue: "#0f172a" },
      backgroundColor: { ornage: "#f52225", grayWhite: "#F9F9FC" },
    },
  },
  plugins: [],
};
