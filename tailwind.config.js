/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif'],
        'chivo': ['Chivo', 'sans-serif']
      },
      keyframes: {
        bounce2: {
          '0%, 100%': { transform: 'translateY(-25%) rotate(90deg)', animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)' },
          '50%': { transform: 'translateY(0%) rotate(90deg)', animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)' },
        }
      },
      animation: {
        bounce2: 'bounce2 1s ease-in-out infinite',
      }
    },
  },
  plugins: [require("daisyui"), require('tailwind-scrollbar-hide')],
  daisyui: {
    styled: true,
    themes: true,
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
    darkTheme: "dark",
  },
}
