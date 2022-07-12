const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      fontFamily: {
        "poppins": ["Poppins", "sans serif"],
      },
      backgroundColor: {
        "blue": "#0062be",
        "red": "#e60c2c",
        "third": "#1e1e1e",
      },
      transition: {
        "pepsi-transition": "3s ease-in-out",
      },
      textColor: {
        "nav-color": "#ed0223"
      }
    },
  },
  plugins: [],
}