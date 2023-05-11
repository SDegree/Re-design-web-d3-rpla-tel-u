/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}", "./index.html"],
  theme: {
    extend: {
      colors: {
        youngBlue: "#00FFCA",
        oldBlue: "#0A4D68",
      },
      borderWidth: {
        6: "6px",
      },
    },
  },
  plugins: [],
};
