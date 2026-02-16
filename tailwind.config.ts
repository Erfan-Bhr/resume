import type { Config } from 'tailwindcss'

export default {
    content: [
        './components/**/*.{vue,js,ts}',
        './layouts/**/*.vue',
        './pages/**/*.vue',
        './app.vue'
    ],
    theme: {
        extend: {
            colors: {
                background: '#a38c74',
                primary: '#46463b',
                secondary: '#887059',
                text: '#c7ac90',
                full_char: '#202b2f',
                empty_char: '#ccae90',
                border: '#5f4f3c',
                edu_border: '#42453a',
                secondary_heading: '#222823',

            },
            fontFamily: {
                sans: ['Vazir', 'ui-sans-serif', 'system-ui']
            },
            fontSize: {
                'h1-mobile': 'var(--h1-mobile)',
                'h2-mobile': 'var(--h2-mobile)',
                'h3-mobile': 'var(--h3-mobile)',
                'h1-tablet': 'var(--h1-tablet)',
                'h2-tablet': 'var(--h2-tablet)',
                'h3-tablet': 'var(--h3-tablet)',
                'h1-desktop': 'var(--h1-desktop)',
                'h2-desktop': 'var(--h2-desktop)',
                'h3-desktop': 'var(--h3-desktop)',
                'body-mobile': 'var(--font-body-mobile)',
                'body-tablet': 'var(--font-body-tablet',
                'body-desktop': 'var(--font-body-desktop)',
            },
            lineHeight: {
                body: 'var(--line-height-body)',
                heading: 'var(--line-height-heading)',
            },
            spacing: {
                xs: 'var(--space-xs)', /* 4 */
                sm: 'var(--space-sm)', /* 8 */
                md: 'var(--space-md)', /* 16 */
                lg: 'var(--space-lg)', /* 24 */
                xl: 'var(--space-xl)', /* 32 */
                '2xl': 'var(--space-2xl)', /* 48 */
                '3xl': 'var(--space-3xl)', /* 64 */
                '4xl': 'var(--space-4xl)', /* 80 */
                '5xl': 'var(--space-5xl)', /* 96 */
            },
            boxShadow: {
                'inner-custom': 'inset 0 0 60px rgb(163 140 116 / 0.5)',
                'inner-custom-soft': 'inset 0 0 30px rgb(163 140 116 / 0.3)',
                'inner-custom-strong': 'inset 0 0 90px rgb(163 140 116 / 0.7)',
            },
            container: {
                center: true,
                padding: {
                    DEFAULT: 'var(--container-padding-mobile)',
                    sm: 'var(--container-padding-tablet)',
                    lg: 'var(--container-padding-desktop)',
                },
            }
        }
    }
} as Config

