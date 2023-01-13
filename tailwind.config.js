/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
        colors: {
            primary: {
                50: '#F8F0F8',
                100: '#F0DFF0',
                200: '#E6C7E6',
                300: '#DCAFD9',
                400: '#D096CC',
                500: '#D96FB6',
                600: '#C65B9D',
                700: '#A84A7F',
                800: '#8A3B63',
                900: '#6C2C47',
            },
            secondary: {
                50: '#F0F8F8',
                100: '#E6F0F0',
                200: '#D9E6E6',
                300: '#C7DCDC',
                400: '#B6D0D0',
                500: '#97D0E6',
                600: '#7FB6CC',
                700: '#6B9DB6',
                800: '#577F9D',
                900: '#436283',
            },
            tertiary: {
                50: '#F8F0F8',
                100: '#F0E6F0',
                200: '#E6D9E6',
                300: '#DCD0DC',
                400: '#D0C6D0',
                500: '#B297CD',
                600: '#9D7FB6',
                700: '#8A6B9D',
                800: '#774C84',
                900: '#63326B',
            },
            dark: {
                50: '#EBEEF1',
                100: '#B1BAC7',
                200: '#64768E',
                300: '#495566',
                400: '#2D353F',
                500: '#111418',
                600: '#0F1216',
                700: '#0C0E11',
                800: '#0A0B0D',
                900: '#08080A',
            },
            gray: {
                50: '#f8f9fa',
                100: '#e9ecef',
                200: '#dee2e6',
                300: '#ced4da',
                400: '#adb5bd',
                500: '#6c757d',
                600: '#495057',
                700: '#343a40',
                800: '#212529',
                900: '#131618',
            }
        }
    },
  },
  plugins: [
      require('tailwind-scrollbar'),
  ],
}