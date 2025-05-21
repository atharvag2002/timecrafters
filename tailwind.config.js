/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      colors:{
        greeen: "#043132"
      },
      fontFamily:{
        logo : "Josefin Sans",
        bond : "Unbounded"
      }
    },
  },
  plugins: [require('tailwind-scrollbar')],
}

