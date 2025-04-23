/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3252df',
        primaryDark : 'rgba(32, 63, 199, 1)',

        // landing
        landingContent: {
          p: '#B0B0B0',
          h2: '#152C5B',
        },
        // ----

      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
