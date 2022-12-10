/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'primary': '#CF95FC',
        'primary-100': '#9D84B8',
        'gray': '#ABB2BF',
        'gray-100': '#212025',
        'background': '#1E1D22',
        'white': '#FFFFFF' 
      }
    },
  },
  plugins: [],
}