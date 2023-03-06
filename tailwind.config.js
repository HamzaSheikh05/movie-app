/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        burtons: "burtons",
      },
      screens: {
        other: { min: "340px", max: "1200px" },
      },
      backgroundImage: {
        "custom-bg":
          "linear-gradient(to right, rgba(15, 12, 41, 1), rgba(48, 43, 99, 1), rgba(36, 36, 62, 1))",
        "dark-bg":
          "linear-gradient(to right, rgba(4, 0, 17, 1), rgba(0, 0, 17, 1), rgba(4, 0, 17, 1))",
      },
    },
  },
  plugins: [],
};
