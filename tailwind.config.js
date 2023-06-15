/** @type {import('tailwindcss').Config} */
export default {
  content: ['index.html','src/**/*.{jsx,js}'],
  theme: {
    extend: {},
    screens: {
      'sm': '375px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1440px'
    }
  },
  plugins: [],
}

