/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
    },
    extend: {
      colors: { semiBlack: "#6e6e6e", ornage: "#f52225" },
    },
  },
  plugins: [],
};
