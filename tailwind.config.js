module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      visibility: ["group-hover", "focus"],
      display: ["group-hover", "focus"],
      opacity: ["group-hover", "focus"],
    },
  },
  plugins: [],
};
