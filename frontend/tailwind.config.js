const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      // add default colors
      ...colors,
      // custom colors
      "midnight": "#0a2430",
      "edusight-purple": "#863DFD",
      "navbar-separator-grey": "#dedede",
      "yellow": "#F2D15D",
      // example of defining multiple color variants
      'tahiti': {
        100: '#cffafe',
        200: '#a5f3fc',
        300: '#67e8f9',
        400: '#22d3ee',
        DEFAULT: '#06b6d4',
        600: '#0891b2',
        700: '#0e7490',
        800: '#155e75',
        900: '#164e63',
      },
    },
  },
  plugins: [],
}

