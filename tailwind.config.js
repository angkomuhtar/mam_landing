const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      padding: "1rem",
      screens: {
        sm: "600px",
        md: "728px",
        lg: "984px",
        xl: "1240px",
        "2xl": "1240px",
      },
    },
    extend: {
      fontFamily: {
        sans: ["Montserrat", ...defaultTheme.fontFamily.sans],
        inter: ["Inter"],
        poppins: ["Poppins"],
      },
      fontSize: {
        tiny: ["0.625rem", "0.8125rem"],
        "tiny+": ["0.6875rem", "0.875rem"],
        "xs+": ["0.8125rem", "1.125rem"],
        "sm+": ["0.9375rem", "1.375rem"],
      },
      colors: {
        red: {
          50: "#fdf6ef",
          100: "#fbe9d9",
          200: "#f7d1b1",
          300: "#f1b280",
          400: "#ea884d",
          500: "#e5692a",
          600: "#d7501f",
          700: "#ba3f1d",
          800: "#8e321e",
          900: "#732b1b",
        },
        muted: "#FFF0E9",
        white: "#FBFBFB",
        gray: "#F1EFEF",
        secondary: "#777",
        black: "#191716",
      },
    },
  },
  plugins: [],
};
