/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'blue': "#ECF2FF"
      },
      spacing: {
        '92': '23rem'
      },
      borderRadius: {
        "4xl": "2rem"
      }
    },
  },
  plugins: [],
}

