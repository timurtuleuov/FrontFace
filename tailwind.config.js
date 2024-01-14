/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      backgroundImage: theme => ({
        'brand-back': "url('src/assets/img/brand-back.jpg')",
        
      })
    },
  },
  plugins: [],
}