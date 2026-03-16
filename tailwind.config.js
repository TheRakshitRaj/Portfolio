/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                display: ['"Clash Display"', 'sans-serif'],
                body: ['"Inter Variable"', 'sans-serif'],
            },
            colors: {
                'bg-primary': '#0a0e27',
                'bg-secondary': '#1a1f3a',
                'accent-primary': '#60a5fa',
                'accent-secondary': '#a78bfa',
                'text-primary': '#f8fafc',
                'text-secondary': '#cbd5e1',
            },
            backdropBlur: {
                xs: '2px',
            },
            animation: {
                'fade-in': 'fadeIn 0.6s ease-out forwards',
                'slide-up': 'slideUp 0.6s ease-out forwards',
                'fade-in-delayed': 'fadeIn 0.6s ease-out 0.2s forwards',
                'slide-up-delayed': 'slideUp 0.6s ease-out 0.2s forwards',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                slideUp: {
                    '0%': { transform: 'translateY(20px)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' },
                },
            },
        },
    },
    plugins: [],
}
