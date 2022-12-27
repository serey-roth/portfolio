/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.js', './components/**/*.js'],
  theme: {
    extend: {
      screens: {
        'mobile-sm': '320px',
        'mobile-md': '375px',
        'mobile-lg': '425px',
        'xl': '1100px',
        '2xl': '2000px',

      },
    },
  },
  plugins: [],
}
