/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    fontFamily: {
      cursive: ["Dancing Script", "cursive"],
      serif: ["Merriweather", "serif"],
    },
    extend: {
      screens: {
        "max-sm": { max: "639px" },
      },
      backgroundImage: {
        hero: "url('/cakebg.jpg')",
      },
      colors: {
        darkPink: "#8E5572",
        darkYellow: "#84732B",
        mediumPink: "#f4acb7",
        mediumYellow: "#EAC435",
        mediumBlue: "#6CCAF6",
        lightPink: "#ffcad4",
        lightYellow: "#F4EEA9",
        lightGreen: "#CDE7B0",
        lightBlue: "#A4DEF9",
      },
    },
  },
  plugins: [],
};
