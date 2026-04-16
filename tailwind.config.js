/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // We can use class strategy for high contrast if needed
  theme: {
    extend: {
      colors: {
        peterGreen: '#22c55e',
        peterYellow: '#eab308',
        peterDark: '#1f2937',
        peterWhite: '#ffffff',
      }
    },
  },
  plugins: [],
}
