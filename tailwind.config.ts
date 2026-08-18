import type { Config } from 'tailwindcss';

/**
 * RV Capital design system.
 *
 * Palette: deep ink/charcoal + off-white + a single muted brass/gold accent.
 * No bright colours, no decorative gradients. Typography pairs a refined serif
 * (Playfair Display) for headlines with a clean geometric sans (Inter) for UI.
 */
const config: Config = {
  content: [
    './src/app/**/*.{ts,tsx,mdx}',
    './src/components/**/*.{ts,tsx}',
    './src/lib/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#0B0F14',
          900: '#0B0F14',
          800: '#10151C',
          700: '#161C25',
          600: '#1E2630',
          500: '#2A333F',
        },
        bone: {
          DEFAULT: '#F7F5F0',
          200: '#EFEBE2',
          300: '#E3DDD0',
        },
        brass: {
          DEFAULT: '#B08D57',
          light: '#C6A15B',
          dark: '#8F7043',
        },
        muted: '#6B7280',
      },
      fontFamily: {
        serif: ['var(--font-serif)', 'Georgia', 'Cambria', 'Times New Roman', 'serif'],
        sans: ['var(--font-sans)', 'ui-sans-serif', 'system-ui', 'Arial', 'sans-serif'],
      },
      letterSpacing: {
        widest: '0.25em',
      },
      maxWidth: {
        content: '72rem',
        prose: '46rem',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.7s cubic-bezier(0.16, 1, 0.3, 1) both',
      },
      transitionTimingFunction: {
        'ease-luxe': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
  plugins: [],
};

export default config;
