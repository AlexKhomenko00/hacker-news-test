module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      gridTemplateColumns: {
        square: "repeat(3, minmax(50px, 1fr))",
      },
      gridTemplateRows: {
        square: "repeat(2, minmax(50px, 1fr))",
      },
      width: {
        "1/3": "calc(33% - 1em)",
        "1/2": "calc(50% - 1em)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
