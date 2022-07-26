/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
    },
    extend: {},
    colors: {
      yellow: "#F7B614",
      white: "#fff",
      category: "#F2EFE6",
      black: "#282932"
    },
  },
  plugins: [],
  screens:{
    'sm': '640px',
    'md' : '768px',
    'lg' : '1024px',
  },
}
