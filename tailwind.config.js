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
      black: "#282932",
      gray: "#8D9CA4",
      grey: "#F8F8F8",
      green: "#5B7017",
      unknown: "#E5EFE9"
    },
    height: {
			"10v": "10vh",
      "18v": "18vh",
			"20v": "20vh",
			"30v": "30vh",
			"40v": "40vh",
			"50v": "50vh",
			"60v": "60vh",
			"70v": "70vh",
			"80v": "80vh",
			"90v": "90vh",
			"100v": "100vh",
		},
  },
  plugins: [],
  screens:{
    'sm': '640px',
    'md' : '768px',
    'lg' : '1024px',
  },
}
