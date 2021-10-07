module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        nmr: {
          blue: "#F6F8FA",
          txBlue: "#272D4E",
          black: "#514040",
        },
      },
      backgroundImage: {
        heroImg: "url('../images/hero.png')",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
