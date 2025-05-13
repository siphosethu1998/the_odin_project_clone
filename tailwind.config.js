/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        helvetica: ["Helvetica Neue", "Helvetica"],
      },
      screens: {
        "xxs": "340px",
        "xs": "480px",
      }
    },
  },
  plugins: [],
}
