import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        night: '#07070b',
        midnight: '#0e0f17',
        neon: {
          green: '#3bff9d',
          cyan: '#32e8ff',
          purple: '#8b5cf6',
        },
        glow: '#1c1f2b',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-space)', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        neon: '0 0 30px rgba(50, 232, 255, 0.25)',
      },
      backgroundImage: {
        'hero-gradient':
          'radial-gradient(circle at top, rgba(50, 232, 255, 0.15), transparent 45%), radial-gradient(circle at 20% 20%, rgba(139, 92, 246, 0.15), transparent 50%)',
      },
    },
  },
  plugins: [],
};

export default config;
