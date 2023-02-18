/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-space-grotesk)'],
      },
      colors: {
        background: '#18181b',
        text: '#e7e9ea',
        white: '#ffffff',
        primary: '#fd4927',
      },
    },
  },
  plugins: [],
};
