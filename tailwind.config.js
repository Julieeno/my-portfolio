/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Figtree', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        'sage': {
          50: '#f2f4f3',
          100: '#e6e9e7',
          200: '#cbd3ce',
          300: '#b0bdb4',
          400: '#94a699',
          500: '#798f7f',
          600: '#637268',
          700: '#4f5b53',
          800: '#3d463f',
          900: '#2c322d',
          950: '#1a1e1b',
        },
      },
    },
  },
  plugins: [],
}