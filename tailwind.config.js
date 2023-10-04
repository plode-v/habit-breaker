/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      "dela": 'Dela Gothic One'
    },
    extend: {
      screens: {
        "3xl": "2100px"
      }
    },
  },
  plugins: [],
}