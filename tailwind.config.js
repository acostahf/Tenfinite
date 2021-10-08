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
          red: "#BF0A30",
          borderR: "#FC1F4E",
          darkBlue: "#002868",
          mdBlue: "#072F70",
        },
      },
      backgroundImage: {
        heroImg: "url('../images/heroBanner.jpg')",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
