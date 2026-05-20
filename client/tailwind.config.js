/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: {
          50:  '#FEFCF8',
          100: '#FDF8F0',
          200: '#FAF4E6',
          300: '#F5EDD6',
          DEFAULT: '#FAF6ED',
        },
        gold: {
          light:   '#F0D080',
          DEFAULT: '#C9973B',
          dark:    '#8B6914',
          deep:    '#5C4209',
        },
        blush: {
          light: '#FDF0E8',
          DEFAULT: '#F5E6D3',
          dark:  '#E8C9AA',
        },
        brown: {
          light: '#A0714F',
          DEFAULT: '#6B4226',
          dark:  '#2C1810',
        },
        border: '#E8D5B0',
      },
      fontFamily: {
        serif:   ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans:    ['"Lato"', 'system-ui', 'sans-serif'],
        script:  ['"Great Vibes"', 'cursive'],
      },
      fontSize: {
        'display': ['4.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'heading': ['3rem',   { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'title':   ['2rem',   { lineHeight: '1.3' }],
        'lead':    ['1.25rem',{ lineHeight: '1.6' }],
      },
      boxShadow: {
        'gold-sm': '0 2px 8px rgba(201,151,59,0.15)',
        'gold':    '0 4px 20px rgba(201,151,59,0.25)',
        'gold-lg': '0 8px 40px rgba(201,151,59,0.35)',
        'soft':    '0 4px 24px rgba(44,24,16,0.08)',
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #C9973B 0%, #F0D080 50%, #C9973B 100%)',
        'cream-gradient': 'linear-gradient(180deg, #FAF6ED 0%, #FDF8F0 100%)',
        'shimmer': 'linear-gradient(90deg, transparent 0%, rgba(240,208,128,0.4) 50%, transparent 100%)',
      },
      animation: {
        'shimmer':    'shimmer 2.5s infinite',
        'ticker':     'ticker 30s linear infinite',
        'fade-up':    'fadeUp 0.7s ease-out forwards',
        'count-up':   'countUp 0.5s ease-out',
        'float':      'float 6s ease-in-out infinite',
      },
      keyframes: {
        shimmer: {
          '0%':   { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        ticker: {
          '0%':   { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-12px)' },
        },
      },
    },
  },
  plugins: [],
}
