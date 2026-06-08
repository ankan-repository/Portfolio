/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
        display: ['Clash Display', 'Inter', 'sans-serif'],
      },
      colors: {
        dark: {
          900: '#020510',
          800: '#050c1a',
          700: '#0a1628',
          600: '#0f1e35',
        },
        cyan: {
          400: '#22d3ee',
          500: '#00d4ff',
          600: '#0ea5e9',
        },
        violet: {
          400: '#a78bfa',
          500: '#8b5cf6',
          600: '#7c3aed',
        },
        pink: {
          400: '#f472b6',
          500: '#ec4899',
        },
        emerald: {
          400: '#34d399',
          500: '#10b981',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-main': 'linear-gradient(135deg, #00d4ff 0%, #7c3aed 50%, #f472b6 100%)',
        'gradient-card': 'linear-gradient(135deg, rgba(0,212,255,0.05) 0%, rgba(124,58,237,0.05) 100%)',
        'hero-glow': 'radial-gradient(ellipse 80% 80% at 50% -20%, rgba(120,119,198,0.3), transparent)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out infinite 2s',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
        'spin-slower': 'spin 30s linear infinite reverse',
        'gradient-shift': 'gradientShift 4s ease infinite',
        'blink': 'blink 1s step-end infinite',
        'slide-up': 'slideUp 0.6s ease forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-16px)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(0,212,255,0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(0,212,255,0.6), 0 0 80px rgba(124,58,237,0.3)' },
        },
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        blink: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0 },
        },
        slideUp: {
          from: { opacity: 0, transform: 'translateY(20px)' },
          to: { opacity: 1, transform: 'translateY(0)' },
        },
      },
      boxShadow: {
        'glow-cyan': '0 0 20px rgba(0,212,255,0.3)',
        'glow-violet': '0 0 20px rgba(124,58,237,0.3)',
        'glow-pink': '0 0 20px rgba(244,114,182,0.3)',
        'card': '0 4px 32px rgba(0,0,0,0.4)',
        'card-hover': '0 8px 48px rgba(0,212,255,0.1)',
      },
      backdropBlur: {
        xs: '2px',
      },
      screens: {
        'xs': '480px',
      },
    },
  },
  plugins: [],
}
