/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: '0px',     //모바일 0px ~ 767px
        md: '768px',   //태블릿 768px ~ 1023px
        lg: '1024px',  //pc 1024px ~
      },
      colors: {
        mainblue: '#063B93',
        skyblue: '#00B1E4',
        mainyellow: '#F6D000',
      },
    },
  },
  plugins: [],
}

