/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./src/**/*.{tsx,jsx,ts,js}'],
  theme: {
    extend: {
      fontFamily: {
        concert: ['"Concert One"', 'sans-serif'],
        sans2: ['"Proxima Nova"', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
}
