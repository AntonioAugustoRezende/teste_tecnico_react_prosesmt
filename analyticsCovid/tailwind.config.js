/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        menu: "menu 0.5s",
        bounce: "bounce 0.6s infinite",
        modal: "modal 2s",
      },

      keyframes: {
        menu: {
          "0%": {
            transform: "translateY(-150px)",
            // transform: "height: 0",
          },
          "100%": {
            transform: "translateY(0)",
            // transform: "height: 100",
          },
        },
        bounce: {
          to: {
            transform: " translateY(500px)",
          },
        },
        modal: {
          "0%": {
            transform: " translateY(-50%)",
            opacity: 0,
          },

          "25%": {
            transform: " translateY(0)",
            opacity: 1,
          },
        },
      },
    },
  },
  plugins: [],
};
