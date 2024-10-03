/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        light: '#E1E7EE',
        dark: '#172A41',
        medium: '#6864AD',
        contrast: '#85D8C8'
      },
      fontFamily: {
        mainFont: ['Raleway']
      },
    },
  },
  plugins: [],
}
