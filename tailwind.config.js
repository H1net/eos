/** @type {import('tailwindcss').Config} */
module.exports = {
    mode: 'jit',
    content: [
        "./app/**/*.{js,ts,jsx,tsx}", // Note the addition of the `app` directory.
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {},
    },
    darkMode: 'class',
    plugins: [
        require("@tailwindcss/forms"),
        require('@tailwindcss/typography'),
        require("daisyui"),
    ],
    daisyui:{
        themes:['dark', 'bumblebee']
    },
}