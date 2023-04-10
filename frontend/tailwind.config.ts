import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{vue,ts}'],
  darkMode: 'media',
  theme: {
    extend: {},
    fontFamily: {
      display: ['Acme', 'serif'],
    },
  },
  plugins: [],
} as Config;
