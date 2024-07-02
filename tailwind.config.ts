import type { Config } from 'tailwindcss';
import { fontFamily } from 'tailwindcss/defaultTheme';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      keyframes: {
        morph: {
          '0%, to': {
            'border-radius': '40% 70% 80% 30%/50% 60% 30% 70%',
          },
          '50%': {
            'border-radius': '60% 50% 70% 50%/30% 60% 40% 60%',
          },
        },
      },
      animation: {
        'morph-infinite': 'morph 8s ease-in-out infinite',
      },
      fontFamily: {
        mulish: ['var(--font-mullish)', ...fontFamily.sans],
        poppins: ['var(--font-poppins)', ...fontFamily.sans],
      },
      colors: {
        darkgrey: '#2d2e32',
        lightgrey: '#767676',
      },
      borderWidth: {
        3: '3px',
      },
    },
  },
  plugins: [],
};
export default config;
