/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Roboto', 'Helvetica', 'Arial', 'sans-serif']
      },
      textColor: {
        primary: "#a9787c"
      },
      backgroundColor: {
        primary: "#a9787c"
      },
      borderColor: {
        primary: "#a9787c"
      },
      borderWidth: {
        '1/5': '1.5px'
      }
    },
  },
  plugins: [],
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
}

