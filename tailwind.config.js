/** @type {import('tailwindcss').Config} */
export default {
   content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      backgroundImage: {
      'bannerBtn-gradient' :  'linear-gradient(99deg, #FFF 3.36%, rgba(255, 255, 255, 0.00) 238.16%)',
      // 'custom-gradient' : 'background: conic-gradient(from -2deg at 28.99% 107.28%, #37312A 175.51443457603455deg, #191817 342.4887156486511deg, #191817 360deg)'
      'custom-gradient' : 'conic-gradient(from -2deg at 28.99% 107.28%, #37312A 175.51443457603455deg, #191817 342.4887156486511deg, #191817 360deg)'
    },
    colors:{
      'purpleColor' : "#6100C2"
    },
    boxShadow: {
      'custom': '2px 0px 90px 0px rgba(97, 0, 194, 0.40)',
    },

    },
  },
  plugins: [],
}

