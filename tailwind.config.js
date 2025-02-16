/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Open Sans', 'Helvetica', 'Arial', 'sans-serif'],
      },
      colors: {
        'secondary': '#ffa800',
        'secondary-dark': '#FF972D',
        'primary': '#3DAA33',
        'primary-dark': '#3cac36',
        'muted': '#54595f',
        'dark-muted': '#1d1d23',
        'paragraph-color': '#6F6B80',
        'red': '#EF4646',
        'dark': '#1c1d20',
        'light': '#f7f7f7',
        'tsl-black': '#221638',
        'tsl-blue': '#65C2F9',
        'tsl-dark-blue': '#6244c5',
        'tsl-orange': '#fab550',
        'tsl-dark-orange': '#F86F03',
        'tsl-light-black': '#181818',
        'tsl-red': '#e54b4b',
        'tsl-footer-bg': '#252a47',
      },
    },
  },
  plugins: [],
}

