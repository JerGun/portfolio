/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ...defaultTheme.colors,
        ...{
          background: "#0f0b15",
          subBackground: "#323232",
          primary: "#FFC300",
          secondary: "#830ff8",
          input: "#453b55",
          subInput: "#524a5e",
          placeholder: "#7F788D",
        },
      },
    },
    fontFamily: {
      oswald: ["Oswald"],
    },
  },
  plugins: [],
}
