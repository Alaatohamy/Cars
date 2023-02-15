/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      screens: {
        csm: "450px",
      },
      colors: {
        "customYellow": "#EF9011",
        "mintYellow": "#E1DFA4",
        "darkBlue": "#0F2837"
      },
      fontSize: {
        custom4Xl: "40px"
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}
