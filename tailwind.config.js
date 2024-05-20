/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
    },
    extend: {
      screens: {
        'xxs':'320px',
        'xs': '475px', // Custom extra-small screen
        'sm': '640px', // Custom small screen
        'md': '768px', // Custom medium screen
        'mmd': '991px', // Custom medium x screen
        'lg': '1024px', // Custom large screen
        'xl': '1280px', // Custom extra-large screen
        '2xl': '1536px', // Custom double extra-large screen
      }
    },
  },
  plugins: [],
}