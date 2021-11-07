module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}','./components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
     extend: {
       backgroundImage:{
         'test-pic': "url(https://mdbootstrap.com/img/new/slides/052.jpg)"
       }
     },
  },
  variants: {
    extend: {},
  },
  plugins: []
}