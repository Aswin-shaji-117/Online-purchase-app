/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'sans-serif'] // Fixed typo
      },
      gridTemplateColumns: {
        "70/30": '70% 30%', // Corrected the value
      }
    },
  },
  plugins: [],
}
