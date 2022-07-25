/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  screens:{
    'sm': '320px',
    'md' : '640px',
    'lg' : '768px',
  },
}
