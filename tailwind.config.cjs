const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}', './public/**/*.html'],
  theme: {
    extend: {
      colors: {
        brand: {
          forest: '#2F5D46',
          sky: '#6CB7E8',
          sunrise: '#F4A340',
          mist: '#F8F9F6',
          sand: '#E7E3D8',
          rock: '#1E1F1C',
          fog: '#6C7174'
        }
      },
      fontFamily: {
        sans: ['"Space Grotesk"', ...defaultTheme.fontFamily.sans]
      },
      backgroundImage: {
        'alpine-gradient': 'radial-gradient(circle at top, rgba(108, 183, 232, 0.35), transparent 55%), linear-gradient(135deg, #F8F9F6 0%, #E7E3D8 50%, #F8F9F6 100%)'
      },
      boxShadow: {
        glow: '0 25px 45px rgba(47, 93, 70, 0.25)'
      }
    }
  },
  plugins: [require('@tailwindcss/typography'), require('@tailwindcss/forms')]
};
