/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      height:{
        '118':'26rem',
        '128':'30rem'
      },
      width:{
        '18':'4.5rem',
        '94':'375px'
      },
      colors:{
        'warna1':'#86A789',
        'warna2':'#B2C8BA',
        'warna3':'#D2E3C8',
        'warna4':'#EBF3E8',
        'warna5':'#C5E898'
      }
    },
  },
  plugins: [],
}

