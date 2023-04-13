/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                //tertiary: "#de12f7",
                tertiary: '#740181',
                primary: '#f6f6f6',
                secondary: '#0B0B0B',
                'secondary-light': '#f59fc9',
                'secondary-dark': '#fb1385'
            },
            bg: {
                'radial-gold':
              'background: radial-gradient(ellipse farthest-corner at right bottom, #FEDB37 0%, #FDB931 8%, #9f7928 30%, #8A6E2F 40%, transparent 80%),radial-gradient(ellipse farthest-corner at left top, #FFFFFF 0%, #FFFFAC 8%, #D1B464 25%, #5d4a1f 62.5%, #5d4a1f 100%);}',
                'radial-gold-1': '#1d1d1d'
            }
        }
    },
    plugins: []
};
