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
      animation: {
        fadeIn:
          'fadeIn 0.8s cubic-bezier(0.39, 0.575, 0.565, 1) both',
        slideIn:
          'slideIn 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both',
      },
      keyframes: {
        slideIn: {
          '0%': { transform: 'translateX(100%)' },
        },
        fadeIn: {
          '0%': { opacity: 0 },
        },
      },
    },
  },
  plugins: [],
};
