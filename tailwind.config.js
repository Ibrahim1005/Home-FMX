/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary:{
        DEFAULT: "#35ac0b",
      },
      },
      backgroundImage: {
        showcase: "url('/src/images/showcase-background.png')",
        successStory: "url('/src/images/successStory-background.png')",
        dataSecurity: "url('/src/images/lady-security-background.svg')",
    },
    fontFamily: {
       roboto: ["Roboto", "sans-serif"],
       fontFamily: [] 
    }
  },
  },
  plugins: [],
};
