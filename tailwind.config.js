/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        mainblue: '#063B93',
        skyblue: '#00B1E4',
        yellow: '#F6D000',
      },
    },
  },
  plugins: [],
}

