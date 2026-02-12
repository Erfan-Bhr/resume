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
                sans: ['Inter', 'ui-sans-serif', 'system-ui'],
                heading: ['Poppins', 'sans-serif']
            },
            spacing: {
                '1': '0.25rem',
                '2': '0.5rem',
                '3': '0.75rem',
                '4': '1rem',
                '5': '1.25rem',
                '6': '1.5rem',
                '8': '2rem',
                '10': '2.5rem'
            },
            container: {
                center: true,
                padding: {
                    DEFAULT: '2rem',
                    sm: '1rem',
                    lg: '4rem',
                    xl: '5rem',
                    '2xl': '6rem',
                },
            }
        }
    }
} as Config

