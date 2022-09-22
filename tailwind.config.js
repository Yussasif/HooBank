/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
      
    },
    extend: {
      colors: {
      
        backBlue: '#020611',
        darkGray: '#272727',
        lightGray: '#11101D',
        darkBlue: '#33BBCF',
        lightBlue: '#DEF9FA'
        
        
      },
      
    },
  },
  plugins: [],
}
