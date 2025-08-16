
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'playfair': ['Playfair Display', 'serif'],
      },
      colors: {
        'ocean-blue': '#0077be',
        'aqua': '#00bcd4',
        'sand': '#f5f1eb',
        'sunset': '#ff6b35',
        'wave': '#4dd0e1',
      }
    },
  },
  plugins: [],
}
