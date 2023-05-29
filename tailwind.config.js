/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    screens:{
      sm:'480px',
      md:'768px',
      lg:'976px',
      xl:'1440px'
    },
    extend: {
      colors:{
        DarkGrayishBlue: 'hsl(227, 12%, 61%)',
        VeryDarkBlue: 'hsl(233, 12%, 13%)',
        VeryPaleRed:' hsl(13, 100%, 96%)',
        VeryLightGray:' hsl(0, 0%, 98%)',
        BrightRed:' hsl(12, 88%, 59%)',
        BrightRedLight:' hsl(12, 88%, 69%)',
        BrightRedSuplight:' hsl(12, 88%, 95%)',
        DarkBlue: 'hsl(228, 39%, 23%)',
        DBlue:'#101826',
        BtnBlue:'#0A95FF',
        TagBlue:"#E1ECF4",
        Green:"#228B22",
        Red:"#DB0000",
        background:"#540075;",
        Error:"#F8D7DA"

      },
     
    },
  },
  plugins: [],
}