/** @type {import('tailwindcss').Config} */
const path = require('path')

module.exports = {
  content: ['./src/**/*.astro'],
  darkMode: 'class',
  theme: {
    colors: {
      black: "#222221",
      black50: "#222221cc",
      white: '#ffffff',
      primary: '#FF7E33',
    },
    textColor: {
      white: "#FFFFFF",
      black: "#222221",
      black50: "#909090",
      primary: '#FF7E33',
    },
    fontFamily: {
      sans: ['Jost', 'sans-serif'],
      serif: ['Caveat', 'cursive'],
    },
    screens: {
      'sm': '480px',
      'md': '768px',
      'lg': '976px',
      'xl': '1170px',
      '2xl': '1440px',
    },
    container: {
      padding: '1rem',
      center: true,
    },
    extend: {
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
