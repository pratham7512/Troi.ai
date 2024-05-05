/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom': '0 0 35px rgba(0, 0, 0, 0.3)',
      },
      colors: {
        gr: '#9ca3af',
        bl: '#171717',
        rr:'#d01601'
      },
    },
  },
  plugins: [],
}