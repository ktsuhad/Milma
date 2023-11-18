/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        royalblue: "#2c65da",
        darkslategray: "#313030",
        darkgray: "#989898",
        yellowgreen: "#9fdc3c",
        goldenrod: "#f7d047",
        saddlebrown: "#653425",
        sienna: "#683626",
        deepskyblue: "#52b5e5",
        gainsboro: "rgba(229, 229, 229, 0.3)",
      },
      fontFamily: {
        poppins: "Poppins",
        rupee: "Rupee",
      },
      borderRadius: {
        "6xl": "25px",
        "61xl": "80px",
      },
    },
  },
  plugins: [],
};
