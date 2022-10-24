/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        ...defaultTheme.colors,
        ...{
          background: "#0f0b15",
          subBackground: "#323232",
          primary: "#FFC400",
          secondary: "#830ff8",
          customGrayHeavy: "#424242",
          customGrayLight: "#999999",
          text: "#CCCCCC",
          input: "#453b55",
          subInput: "#524a5e",
          placeholder: "#7F788D",
        },
      },
      animation: {
        "bounce-five": "bounce 1s ease-in-out 4.5",
        "ping-slow": "ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite",
      },
      transitionProperty: {
        width: "width",
        opacity: "opacity",
        position: "position",
      },
    },
    fontFamily: {
      oswald: ["Oswald"],
    },
  },
  plugins: [],
}
