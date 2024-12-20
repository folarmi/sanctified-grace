/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./app/**/*.{js,tsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  darkMode: "media",
  theme: {
    extend: {
      colors: {
        ash_one: "#D9D9D9",
        ash_100: "#fbfbfb",
        ash_200: "#f5f5f5",
        ash_300: "#878787",
        ash_400: "#f2f2f2",
        ash_500: "#F0F0F0",
        ash_600: "#4D4D4D",
        orange_100: "#F9AF1C",
        ash_200: "#E8E8E8",
        ash_300: "#f0f0f0",
        sky_blue: "#c6dbf6",
        primary: "#001229",
        blue_100: "#216bc4",
        blue_200: "#00397F",
        blue_300: "#E8F1FD",
        navy_blue: "#02387c",
        dark_blue: "#001328",
        dark_mode: "#202020",
        gold_highlight: "#FFF5BD",
      },
      fontFamily: {
        Georgia: ["Georgia"],
        GeorgiaBold: ["GeorgiaBold"],
        MontserratLight: ["MontserratLight"],
        MontserratMedium: ["MontserratMedium"],
        MontserratSemiBold: ["MontserratSemiBold"],
      },
      boxShadow: {
        "resources-shadow": "0px 4px 28.9px 0px #00000014",
      },
    },
  },
  plugins: [],
};
