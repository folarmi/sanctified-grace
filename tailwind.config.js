/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./app/**/*.{js,tsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        ash_one: "#D9D9D9",
        ash_100: "#fbfbfb",
        orange_100: "#F9AF1C",
        ash_200: "#E8E8E8",
        sky_blue: "#c6dbf6",
        primary: "#001229",
        blue_100: "#216ac4",
        navy_blue: "#02387c",
      },
      fontFamily: {
        Georgia: ["Georgia"],
        GeorgiaBold: ["GeorgiaBold"],
        MontserratLight: ["MontserratLight"],
        MontserratMedium: ["MontserratMedium"],
        MontserratSemiBold: ["MontserratSemiBold"],
      },
    },
  },
  plugins: [],
};
