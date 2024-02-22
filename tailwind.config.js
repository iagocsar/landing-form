/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    backgroundImage: {
      'hero': "url('/img/hero4.png')",
    },
    binanceImage: {
      'binance': "url('/img/binance.png')",
    },
  },
  plugins: [],
}