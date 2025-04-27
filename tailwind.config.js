/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}"
  ],
  theme: {
    extend: {
      colors: {
        primary: 'rgb(50, 82, 223)',
        primaryDark : 'rgba(32, 63, 199, 1)',
        secondary : 'rgba(21, 44, 91, 1)',
        myDark: 'rgba(0, 0, 0, 1)',
        myGray: 'rgba(245, 246, 248, 1)',
        darkGray: 'rgba(211, 214, 220, 1)',
        iconGray: 'rgba(171, 171, 171, 1)',
        buttonColor: 'rgba(50, 82, 223, 1)',
        myWhite: 'rgba(255, 255, 255, 1)',
        boxShadow: {
          'custom-hover': '0px 8px 15px 0px rgba(50, 82, 223, 0.3)',
        },

        // landing
        landingContent: {
          p: '#B0B0B0',
          h2: '#152C5B',
        },
        // ----

      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
