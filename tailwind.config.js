// tailwind.config.js
module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        "mobile-light": "url('./assets/bg-mobile-light.jpg')",
        "mobile-dark": "url('./assets/bg-mobile-dark.jpg')",
        "icon-light": "url('./assets/icon-moon.svg')",
        "icon-dark": "url('./assets/icon-sun.svg')",
        "icon-cross": "url('./assets/icon-cross.svg')",
        "icon-check": "url('./assets/icon-check.svg')",
      }),
    },

    fontSize: {
      "2xl": [
        "28px",
        {
          letterSpacing: "0.3em",
        },
      ],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
