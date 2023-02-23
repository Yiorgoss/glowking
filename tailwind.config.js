/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#f6f6f6",
        secondary: "#0B0B0B",
        tertiary: "#fb1385",
        'secondary-light': "#f59fc9",
        'secondary-dark': "#fb1385",
      },
    },
  },
  plugins: [],
}
