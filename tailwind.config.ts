import type { Config } from 'tailwindcss';

const config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      fontFamily: {
        urbane: ['Urbane'],
        zillaSlab: ['var(--font-zillaSlab)'],
      },
      colors: {
        yellow: {
          main: '#DE9300',
        },
        black: {
          1: '#121212',
          2: '#13556A',
        },
        white: {
          1: '#FFFFFF',
          2: '#F6FDFF',
          3: 'rgba(255, 255, 255, 0.70)',
          4: 'rgba(255, 255, 255, 0.80)',
          5: 'rgba(255, 255, 255, 0.50)',
        },
        blue: {
          1: '#1E708A',
          main: '#08222B',
        },
        gray: {
          light: '#F1F1F1',
          1: '#434343',
          2: 'rgba(19, 85, 106, 0.50)',
          3: 'rgba(0, 0, 0, 0.40)',
        },
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config;

export default config;
