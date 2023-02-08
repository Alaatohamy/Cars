/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        "yellow": "#EF9011",
        "mintYellow": "#E1DFA4"
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}
