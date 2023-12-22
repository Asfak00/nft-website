/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#3D00B7",
      },
      screens: {
        md: "1025px",
        sm: "425px",
      },
    },
  },
  plugins: [],
};
