/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-brown": "#3C3633",
        "light-brown": "#747264",
        "cream-brown": "#e1d9d4",
        "cream-white": "#EEEDEB",
        "white-creme": "#F6F6F6",
      },
      fontFamily: {
        Roboto: "Roboto",
        Pacifico: "Pacifico",
      },
    },
  },
  plugins: [],
};
