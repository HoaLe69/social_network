/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: "#8E8E8E",
        "gray-med": "#ababab",
        primary: "#0095F6",
        black: "#262626",
        "black-light": "#8E8E8E",
        white: "#EFEFEF",
        "white-blur": "rgb(219, 219, 219)",
        red: "rgb(255, 48, 64)",
        blue: "#0095F6",
        overlay: "rgba(0, 0, 0, .05)",
        "overlay-2": "rgba(0, 0, 0, .4)",
        "gray-light": "rgb(239, 239, 239)",
      },
      boxShadow: {
        medium: "10px 0 10px -9px rgba(0, 0, 0 , .15)",
      },
    },
  },
  plugins: [],
};
