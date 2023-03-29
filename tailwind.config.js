/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  content: [
    './app/**/*.{js,ts,jsx,tsx}', // Note the addition of the `app` directory.
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'secondary-content': colors.red,
        // ''
      },
    },
    // colors: {
    //     'secondary-content': colors.red
    // },
  },
  darkMode: 'class',
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('daisyui'),
  ],
  daisyui: {
    themes: [
      {
        bigyel: {
          // #ffe850 #ce171e  #f9d72f
          // primary
          // rgb(37, 40, 57) rgb(255, 223, 0) rgb(105, 118, 158) rgb(120, 130, 139) rgb(205, 23, 30)
          // font
          //
          // highlight
          // shadow
          //   ...require('daisyui/src/colors/themes')['[data-theme=bumblebee]'],
          'color-scheme': 'light',
          primary: '#ffe850',
          'primary-content': '#ce171e',
          secondary: '#252839',
          'secondary-content': '#78828B',
          accent: '#69769E',
          neutral: '#78828B',
          'base-100': '#ffffff',
        },
      },
    ],
    styled: true,
    // themes: true,
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    // prefix: '',
    darkTheme: 'bigyel',
  },
}