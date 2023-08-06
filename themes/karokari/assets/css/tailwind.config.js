/** @type {import('tailwindcss').Config} */
const themeDir = __dirname + "/../../";

module.exports = {
  content: [themeDir + "layouts/**/*.html"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter"],
        lexend: ["Lexend"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
