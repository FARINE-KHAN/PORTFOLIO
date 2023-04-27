/** @type {import('tailwindcss').Config} */
export default {
 content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  screen:{
    'sm': {'min': '320px', 'max': '767px'},
  },
  theme: {
    extend: {},
    fontFamily:{
      signature:['Great Vibes']
    }
  },
  plugins: [],
}

