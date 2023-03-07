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
          "linear-gradient(to right, rgba(0, 0, 0, 1), rgba(67, 67, 67, 1), rgba(0, 0, 0, 1), rgba(67, 67, 67, 1), rgba(0, 0, 0, 1))",
        "dark-bg":
          "linear-gradient(to right, rgba(4, 0, 17, 1), rgba(0, 0, 17, 1), rgba(4, 0, 17, 1))",
      },
      animation: {
        pulse: "pulse 1s cubic-bezier(0.2, 0.1, 0.2, 0.5)",
        bounce: "bounce 1s",
        ping: "ping 1s cubic-bezier(0, 0, 0.2, 1)",
      },
    },
  },
  plugins: [],
};
