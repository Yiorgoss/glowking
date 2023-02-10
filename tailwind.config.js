/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'inset-color': ' 0px 2px 4px #fb138580 ,  0px 4px 8px #fb138560,  0px 8px 16px #fb138530 ',
        'layered': '0px 1px 2px #fb138550, 0px 2px 4px #fb138550, 0px 4px 8px #fb138550, 0px 8px 16px #fb138550',
        'layered-xl': '0px 2px 4px #fb138550, 0px 4px 8px #fb138550, 0px 8px 16px #fb138550, 0px 16px 32px #fb138550'

      },

      colors: {
        primary: "#0B0B0B",
        secondary: "#fb1385",
        'secondary-light': "#f59fc9",
        'secondary-dark': "#fb1385",
        tertiary: "#f6f6f6"
      },
    },
  },
  plugins: [],
}
