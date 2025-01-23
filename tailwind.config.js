/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,vue}"],
  theme: {
    extend: {

      backgroundImage: {
        main: "url('/src/assets/images/mountain.jpg')",
      },
      colors: {
        'green-pastel': '#638785',
        'white-pastel': '#F0F5F5',
      }
    },
    fontFamily: {
      // on importe la typographie qu'on veut utilser
      // mais on doit l'ajouter aussi dans index.html
      Poppins: ["Poppins, sans-serif"],
    },
  },
  plugins: [],
}

