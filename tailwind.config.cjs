/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        background_900: "#000A0F",
        background_800: "#00111A",
        background_700: "#0D1D25",

        white: "#FFFFFF",

        gray_300: "#7C7C8A",
        gray_200: "#CAC4CC",
        gray_100: "#E1E1E6",

        red_300: "#750310",
        red_200: "#92000E",
        red_100: "#AB4D55",

        blue: "#82F3FF"
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
        DMSans: ['DM Sans', 'sans-serif'],
      },
      screens: {
        xs: "480px",
      }
    },

  },
  plugins: [],
}
