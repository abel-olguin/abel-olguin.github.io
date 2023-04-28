module.exports = {
    purge: ['./src/*.html'],
    darkMode: 'class',
    theme: {
        extend: {
            screens: {
                'print': {'raw': 'print'},
            }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
