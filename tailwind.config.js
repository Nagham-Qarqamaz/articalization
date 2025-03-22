/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#947048',
                    50: '#D5C0A8',
                    100: '#CFB79C',
                    200: '#C3A584',
                    300: '#B7946C',
                    400: '#AC8254',
                    500: '#947048',
                    600: '#7C5E3C',
                    700: '#644C31',
                    800: '#4C3925',
                    900: '#342719',
                    950: '#281E13'
                },
            },
        },
    },
    plugins: [],
}