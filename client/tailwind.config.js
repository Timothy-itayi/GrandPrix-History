const flowbite = require("flowbite-react/tailwind");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.js", flowbite.content()],
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
    require('tailwindcss-animated'),
    flowbite.plugin()
  ],
}

