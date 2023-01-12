/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,jsx}',
    './pages/**/*.{js,jsx}',
    './sections/**/*.{js,jsx}',
    './styles/**/*.{js,jsx}',
    './utils/**/*.{js,jsx}',
  ],
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        grey: '#89807c',
        bgGrey: '#f3f2f0',
        black: '#000000',
        pink: '#e6b59e',
        water: '#8dbcd2',
        drop: '#c8e2ed',
        lightBrown: '#3e3836',
        brown: '#322c29',
        darkBrown: '#25211e',
      },
     
      screens: {
        xs: '480px',
        ss: '620px',
        sm: '768px',
        md: '1060px',
        lg: '1200px',
        xl: '1700px',
      },
    },
  },
  plugins: [],
};
