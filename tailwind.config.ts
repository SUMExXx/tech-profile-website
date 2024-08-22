import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        'custom-gradient': 'linear-gradient(to bottom, #000000 0%, #380857 52%, #4D0B78 73%, #6D0EAA 100%)',
      },
      colors: {
        violet: '#7E12C3',
        lightViolet: '#8466C7',
        veryLightViolet: '#AF8BFF',
        neonGreen: '#37F713',
        grey: '#1D1D1F'
      },
      keyframes: {
        flicker: {
          '0%': { opacity: '1' },
          '10%': { opacity: '0.9' },
          '20%': { opacity: '1' },
          '30%': { opacity: '0.85' },
          '40%': { opacity: '1' },
          '50%': { opacity: '0.8' },
          '60%': { opacity: '1' },
          '70%': { opacity: '0.75' },
          '80%': { opacity: '1' },
          '90%': { opacity: '0.85' },
          '100%': { opacity: '1' },
        },
        'infinite-scroll': {
            from: { transform: 'translateX(0)' },
            to: { transform: 'translateX(-100%)' },
        },
        'infinite-scroll-reverse': {
            from: { transform: 'translateX(0)' },
            to: { transform: 'translateX(100%)' },
        },
      },
      animation: {
        flicker: 'flicker 1s infinite',
        'infinite-scroll': 'infinite-scroll 25s linear infinite',
        'infinite-scroll-reverse': 'infinite-scroll-reverse 25s linear infinite',
      },
      translate: {
        '5/12': '38%',
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
};
export default config;
