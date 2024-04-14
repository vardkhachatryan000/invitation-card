/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Roboto', 'Helvetica', 'Arial', 'sans-serif']
      },
      textColor: {
        primary: "#a9787c",
        error: '#b50f04'
      },
      backgroundColor: {
        primary: "#a9787c"
      },
      borderColor: {
        primary: "#a9787c",
        error: '#b50f04'
      },
      borderWidth: {
        '1/5': '1.5px'
      },
      outline: {
        error: '#b50f04'
      },
      placeholderColor: {
        error: '#b50f04'
      }
    },
  },
  plugins: [],
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
}

