/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: {
          "primary-color-0": "#ecf0fd",
          "primary-color-100": "#d2dbfb",
          "primary-color-200": "#9ab3f6",
          "primary-color-300": "#588cf1",
          "primary-color-400": "#2d68c4",
          "primary-color-500": " #1c4688",
          "primary-color-600": "#0d2751",
          "primary-color-700": "#031028",
        },
        grey: {
          "primary-color-100": "#dbdcde",
          "primary-color-200": "#b3b4b9",
          "primary-color-300": "#8c8e95",
          "primary-color-400": "#686a70",
          "primary-color-500": "#46484c",
          "primary-color-600": "#27282b",
          "primary-color-700": "#101112",
        },
      },

      fontFamily: {
        lato: ["Lato"],
        comfortaa: ["Comfortaa"],
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

      padding: {
        xsm: "var(--padding-xsm)",
        xm: "var(--padding-sm)",
        md: "var(--padding-md)",
        lg: "var(--padding-lg)",
        xl: "var(--padding-xl)",
        "2xl": "var(--padding-2xl)",
        "3xl": "var(--padding-3xl",
      },
    },
  },
};
