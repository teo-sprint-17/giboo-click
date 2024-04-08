import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      animation: {
        'fade-in-custom': 'fadeInCustom 1s ease-in-out forwards',
        'fade-in-delay': 'fadeInDelay 1s ease-in-out forwards',
      },
      keyframes: {
        fadeInCustom: {
          '0%': { opacity: '0' },
          '30%': { opacity: '0.3' },
          '100%': { opacity: '1' },
        },
        fadeInDelay: {
          '0%': { opacity: '0' },
          '90%': { opacity: '0.1' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};
export default config;
