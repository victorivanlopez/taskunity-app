/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        'taskunity': {
          '50': '#f0f3fd',
          '100': '#e4eafb',
          '200': '#ced7f7',
          '300': '#afbdf2',
          '400': '#8f9aea',
          '500': '#7479e0',
          '600': '#5d59d2',
          '700': '#4f4ab8',
          '800': '#423f98',
          '900': '#383877',
          '950': '#222145',
        },
      },
    },
  },
  plugins: [],
}