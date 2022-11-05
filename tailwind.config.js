/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    colors: {
      white: "#FFF",
      firstColor: "#FF3811",
      secondColor: "#fc7e65",
      dark: "#151515",
      secondaryDark: "#444444",
      lightDark: "#737373",
    },
  },
  plugins: [require("daisyui")],
};
