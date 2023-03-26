/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')

module.exports = {
    mode: 'jit',
    content: [
        "./app/**/*.{js,ts,jsx,tsx}", // Note the addition of the `app` directory.
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'secondary-content': colors.red,
                // '' 
            }    
        },
        // colors: {
        //     'secondary-content': colors.red 
        // },
    },
    darkMode: 'class',
    plugins: [
        require("@tailwindcss/forms"),
        require('@tailwindcss/typography'),
        require("daisyui"),
    ],
    daisyui:{
        themes:[
            {
              bulmblebee: {
                ...require("daisyui/src/colors/themes")["[data-theme=light]"],
                "secondary-content": "blue",
              },
            },
        ],
        styled: true,
        themes: true,
        base: true,
        utils: true,
        logs: true,
        rtl: false,
        prefix: "",
        darkTheme: "bumblebee",
    },
}