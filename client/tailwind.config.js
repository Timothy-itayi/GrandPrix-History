/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.js"],
  theme: {
    extend: {
      gridRow:{

      },
      maxWidth: {
      
      },
      keyframes:{
        fade: {
          '0%': {opacity: '0'},
          '100%': {opactiy: '1'},
        },
      },
    },
    animation:{
      fade:'fade 1s east-out',
    },
  },

  variants: {
    grayscale:['responsive', 'hover']
  },
  plugins: [ 
    require('tailwindcss-animated')
  ],
}

