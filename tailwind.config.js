/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: '#0a192f',
        'light-navy': '#112240',
        'lightest-navy': '#233554',
        slate: '#8892b0',
        'light-slate': '#a8b2d1',
        'lightest-slate': '#ccd6f6',
        white: '#e6f1ff',
        green: '#64ffda',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['Fira Code', 'monospace'],
      },
      transitionTimingFunction: {
        'in-out-cubic': 'cubic-bezier(0.645, 0.045, 0.355, 1)',
      },
    },
  },
  plugins: [],
}
