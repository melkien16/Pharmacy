/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#87CEEB",
        secondary: "#90EE90",
        darkgray: "#333333",
        lightgray: "#D3D3D3"
      },
    },
  },
  plugins: [],
};
