/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        // Simple 8 row grid
        8: "repeat(8, minmax(0, 1fr))",

        // Complex site-specific row configuration
        layout: "6vw minmax(94vw, auto)",
      },
      gridTemplateRows: {
        // Simple 8 row grid
        8: "repeat(8, minmax(0, 1fr))",

        // Complex site-specific row configuration
        layout: "10vh minmax(90vh, auto)",
      },
      gridTemplateAreas: {
        default: ["header header", "sidebar main"],
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@savvywombat/tailwindcss-grid-areas"),
  ],
};
