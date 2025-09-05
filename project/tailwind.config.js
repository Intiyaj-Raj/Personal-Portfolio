/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backfaceVisibility: {
        'hidden': 'hidden',
        'visible': 'visible',
      },
      colors: {
        'hacker-green': '#00ff41',
        'hacker-green-light': '#39ff14',
        'hacker-dark': '#0a0a0a',
        'hacker-gray': '#1a1a1a',
        'terminal-green': '#00cc33',
      },
      fontFamily: {
        'mono': ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      animation: {
        'glitch': 'glitch 1s infinite',
        'matrix-rain': 'matrix-rain 20s linear infinite',
        'neon-pulse': 'neon-pulse 2s ease-in-out infinite alternate',
        'scan-line': 'scan-line 2s linear infinite',
      },
      keyframes: {
        glitch: {
          '0%, 14%, 15%, 49%, 50%, 99%, 100%': {
            transform: 'translate3d(0, 0, 0)',
          },
          '1%, 13%': {
            transform: 'translate3d(-2px, 0, 0)',
          },
          '16%, 48%': {
            transform: 'translate3d(2px, 0, 0)',
          },
        },
        'neon-pulse': {
          '0%': {
            boxShadow: '0 0 20px rgba(0, 255, 65, 0.5)',
          },
          '100%': {
            boxShadow: '0 0 40px rgba(0, 255, 65, 1)',
          },
        },
        'scan-line': {
          '0%': {
            transform: 'translateY(-100%)',
          },
          '100%': {
            transform: 'translateY(100vh)',
          },
        },
      },
      backgroundImage: {
        'grid-pattern': 'linear-gradient(rgba(0,255,65,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,65,0.1) 1px, transparent 1px)',
      },
      backgroundSize: {
        'grid': '20px 20px',
      },
    },
  },
  plugins: [],
};