/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: '0px',     //         w-0px 이상
        sm: '350px',   //스마트폰  w-350px 이상
        md: '768px',   //태블릿    w-768px 이상
        lg: '1024px',  //pc        w-1024px 이상
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

