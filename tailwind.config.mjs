/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    safelist: [
        'w-10',
        'h-10',
    ],
    theme: {
        extend: {
            screens: {
                'print': {'raw': 'print'},
            }
        },
    },
    plugins: [],
}
