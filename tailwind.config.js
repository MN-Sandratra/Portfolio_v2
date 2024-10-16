const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-poppins)', 'sans-serif'],
        poppins: ['var(--font-poppins)', 'sans-serif'],
      },
      colors: {
        primary: {
          light: '#64ffda',
          dark: '#64ffda',
        },
        background: {
          light: '#ffffff',
          dark: '#0a192f',
        },
        text: {
          light: '#333333',
          dark: '#ccd6f6',
        },
        secondary: {
          light: '#8892b0',
          dark: '#8892b0',
        },
      },
      keyframes: {
        gradient: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          }
        }
      },
      animation: {
        gradient: 'gradient 3s ease infinite',
      },
    },
  },
  plugins: [],
};
