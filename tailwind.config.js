/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "havelock-blue": {
          50: "#f3f6fb",
          100: "#e3ebf6",
          200: "#cdddf0",
          300: "#abc6e5",
          400: "#83a9d7",
          500: "#5e87c9",
          600: "#5274be",
          700: "#4762ae",
          800: "#3f518e",
          900: "#374671",
          950: "#252c46",
        },
      },
    },
  },
  plugins: [],
};
