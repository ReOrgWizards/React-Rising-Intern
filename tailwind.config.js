/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: {
          "primary-color-0": "var(--primary-color-0)",
          "primary-color-100": "var(--primary-color-100)",
          "primary-color-200": "var(--primary-color-200)",
          "primary-color-300": "var(--primary-color-300)",
          "primary-color-400": "var(--primary-color-400)",
          "primary-color-500": "var(--primary-color-500)",
          "primary-color-600": "var(--primary-color-600)",
          "primary-color-700": "var(--primary-color-700)",
        },
        grey: {
          "primary-color-100": "var(--secondary-color-100)",
          "primary-color-200": "var(--secondary-color-200)",
          "primary-color-300": "var(--secondary-color-300)",
          "primary-color-400": "var(--secondary-color-400)",
          "primary-color-500": "var(--secondary-color-500)",
          "primary-color-600": "var(--secondary-color-600)",
          "primary-color-700": "var(--secondary-color-100)",
        },
      },

      fontFamily: {
        lato: ["Lato"],
        comfortaa: ["Comfortaa", "Sans-serif"],
      },

      borderRadius: {
        sm: "var(--border-radius-sm)",
        md: "var(--border-radius-md)",
        btn: "var(--btn-border-radius)",
      },

      backgroundImage: {
        bluishGradient: "var(--gradient-blue)",
      },

      fontSize: {
        xsm: "var(--font--xsm)",
        sm: "var(--font-sm)",
        md: "var(--font-md)",
        lg: "var(--font-lg)",
      },

      fontWeight: {
        thin: "var(--font-thin)",
        normal: "var(--font-normal)",
        semibold: "var(--font-semibold)",
      },
    },
  },
};
