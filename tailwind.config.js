/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{html,js,ts,jsx,tsx}'],
    theme: {
        extend: {
            gap: {
                'cust-1': '0.3125rem',
            },
            scale: {
                'cust-1': '60%',
                'cust-2': '70%',
            },
        },
        colors: {
            'cust-1': '#121213',
            'cust-2': '#3a3a3c',
            'cust-3': '#818384',
            'cust-4': '#f8f8f8',
            'cust-5': '#b1a04c',
            'cust-6': '#618c55',
        },
    },
    plugins: [],
};
