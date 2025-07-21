/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        themeblack: '#020202',
          themered: '#f50e32'
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  }, 
  plugins: [],
}