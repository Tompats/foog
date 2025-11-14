const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}', './public/**/*.html'],
  theme: {
    extend: {
      colors: {
        brand: {
          pine: '#356859',
          cloud: '#FDFAF6',
          terracotta: '#E26D5A',
          river: '#4C6A6D',
          moss: '#A7C957',
          rocky: '#1C1C1C',
          mist: '#6F888B'
        }
      },
      fontFamily: {
        sans: ['"Space Grotesk"', ...defaultTheme.fontFamily.sans]
      },
      backgroundImage: {
        'alpine-gradient': 'radial-gradient(circle at 20% 20%, rgba(167, 201, 87, 0.25), transparent 55%), radial-gradient(circle at 80% 0%, rgba(226, 109, 90, 0.18), transparent 40%), linear-gradient(135deg, #FDFAF6 0%, #F2F0EA 60%, #FDFAF6 100%)'
      },
      boxShadow: {
        glow: '0 25px 45px rgba(53, 104, 89, 0.25)'
      }
    }
  },
  plugins: [require('@tailwindcss/typography'), require('@tailwindcss/forms')]
};
