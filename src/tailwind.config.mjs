/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}', './public/**/*.html'],
    theme: {
        extend: {
            fontSize: {
                xs: ['0.75rem', { lineHeight: '1rem', letterSpacing: '0.01em', fontWeight: '400' }],
                sm: ['0.875rem', { lineHeight: '1.25rem', letterSpacing: '0.01em', fontWeight: '400' }],
                base: ['1rem', { lineHeight: '1.5rem', letterSpacing: '0.01em', fontWeight: '400' }],
                lg: ['1.125rem', { lineHeight: '1.75rem', letterSpacing: '0.01em', fontWeight: '400' }],
                xl: ['1.25rem', { lineHeight: '1.75rem', letterSpacing: '0.01em', fontWeight: '500' }],
                '2xl': ['1.5rem', { lineHeight: '2rem', letterSpacing: '0.01em', fontWeight: '500' }],
                '3xl': ['1.875rem', { lineHeight: '2.25rem', letterSpacing: '0.01em', fontWeight: '600' }],
                '4xl': ['2.25rem', { lineHeight: '2.5rem', letterSpacing: '0.01em', fontWeight: '600' }],
                '5xl': ['3rem', { lineHeight: '1', letterSpacing: '0.01em', fontWeight: '700' }],
                '6xl': ['3.75rem', { lineHeight: '1', letterSpacing: '0.01em', fontWeight: '700' }],
                '7xl': ['4.5rem', { lineHeight: '1', letterSpacing: '0.01em', fontWeight: '700' }],
                '8xl': ['6rem', { lineHeight: '1', letterSpacing: '0.01em', fontWeight: '700' }],
                '9xl': ['8rem', { lineHeight: '1', letterSpacing: '0.01em', fontWeight: '700' }],
            },
            fontFamily: {
                heading: "poppins-v2",
                paragraph: "roboto"
            },
            colors: {
                'kokum-accent': '#A855F7',
                destructive: '#EF4444',
                'destructive-foreground': '#FFFFFF',
                background: '#FAFAFB',
                secondary: '#8B5CF6',
                foreground: '#1F2937',
                'secondary-foreground': '#FFFFFF',
                'primary-foreground': '#FFFFFF',
                primary: '#EC4899',
                'accent': '#F59E0B',
                'accent-foreground': '#FFFFFF',
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-rainbow': 'linear-gradient(135deg, #667eea 0%, #764ba2 25%, #f093fb 50%, #4facfe 75%, #00f2fe 100%)',
                'gradient-sunset': 'linear-gradient(135deg, #ff6b6b 0%, #feca57 50%, #ee5a6f 100%)',
                'gradient-ocean': 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                'gradient-fire': 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
            },
            animation: {
                'float': 'float 3s ease-in-out infinite',
                'glow': 'glow 2s ease-in-out infinite alternate',
                'slide-up': 'slideUp 0.5s ease-out',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-20px)' },
                },
                glow: {
                    '0%': { boxShadow: '0 0 5px rgba(236, 72, 153, 0.5)' },
                    '100%': { boxShadow: '0 0 20px rgba(236, 72, 153, 0.8)' },
                },
                slideUp: {
                    '0%': { transform: 'translateY(100px)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' },
                },
            },
        },
    },
    future: {
        hoverOnlyWhenSupported: true,
    },
    plugins: [require('@tailwindcss/container-queries'), require('@tailwindcss/typography')],
}
