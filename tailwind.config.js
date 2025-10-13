/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        mplus: ['"M PLUS Rounded 1c"', 'sans-serif'],
      },
    },
    fontFamily: {
      sans: ['"M PLUS Rounded 1c"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.text-outline': {
          textShadow:
            '1px 1px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000',
        },
        '.text-outline-lg': {
          textShadow:
            '2px 2px 0 #000, -2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000',
        },
        '.text-outline-xl': {
          textShadow:
            '3px 3px 0 #000, -3px -3px 0 #000, 3px -3px 0 #000, -3px 3px 0 #000',
        },
      };
      addUtilities(newUtilities);
    },
  ],
};
