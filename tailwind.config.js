module.exports = { 
    content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}", 
    ],
    theme: {
    extend: {},
    },
    plugins: [
        require("daisyui"),
    ],
    daisyui: {
        themes: [
            {
                mytheme: {
                    "primary": "#777c76",
                    "base-100": "#1f282b",
                },
            },
        ],
    },
}