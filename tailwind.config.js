/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,vue}"],
  theme: {
    extend: {
    },
    fontFamily: {
      // on importe la typographie qu'on veut utilser
      // mais on doit l'ajouter aussi dans index.html
      Poppins: ["Poppins, sans-serif"],
    },
  },
  plugins: [],
}

