/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      keyframes:{
        move_tr:{
          '0%':{transform:'translate(0,0)'},
          '50%':{transform:'translate(130px,-120px)'},
          '100%':{transform:'translate(-85px,85px)'},
        },
        move_tl:{
          '0%':{transform:'translate(0,0)'},
          '100%':{transform:'translate(-120px,-90px)'},
        },
        move_t:{
          '0%':{transform:'translate(0,0)'},
          '50%':{transform:'translate(0,-78px)'},
          '100%':{transform:'translate(0px,60px)'}
        },
        menu:{
          '0%': { opacity: '0'},
          '100%': { opacity: '1' },
        }
      },
      animation:{
        'move_tr':'move_tr 5s linear infinite alternate',
        'move_tl':'move_tl 4s linear infinite alternate',
        'move_t':'move_t 6s linear infinite alternate',
        'menu': 'menu 200ms ease-in-out',
      }
      
    },
  },
  plugins: [],
}

