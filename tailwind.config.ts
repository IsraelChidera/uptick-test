import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './sections/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        white: '#FFFFFF',
        uptickBlue: '#7EA3FF',
        uptickDarkBlue: '#477BFF',
        uptickBlack: '#4D4D4D',
        uptickGray: '#B3B3B3',
        upBlack: '#1c1c1c',
        upLightBlue: '#EDF2FF',
        upDarkBlue: '#1c3166',
        upLightGray: '#999999',
      },
      fontFamily: {
        raleway: ['Raleway', 'sans-serif'],
      },
      backgroundImage: {
        'about-pattern': "url('/about-pattern.svg')",
        'achieve-pattern': "url('/achieve-pattern.svg')",
        'vector-pattern':
          "linear-gradient(180deg, rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.65)), url('/achieve-pattern.svg')",
        'vector-black-pattern':
          "linear-gradient(180deg,rgba(0, 0, 0, 0.8),rgba(0, 0, 0, 0.8)),url('/achieve-pattern.svg')",
        'wave-pattern': "url('/assets/waves.svg')",
        beginner:
          "linear-gradient(97deg, #000 30.56%, rgba(0, 0, 0, 0.00) 89.37%), url('/assets/beginner-bg.png')",
        tech: "linear-gradient(97deg, #000 30.56%, rgba(0, 0, 0, 0.00) 89.37%), url('/assets/tech-bg.png')",
        business:
          "linear-gradient(97deg, #000 30.56%, rgba(0, 0, 0, 0.00) 89.37%), url('/assets/business-bg.png')",
        map: "linear-gradient(97deg, #000 30.56%, rgba(0, 0, 0, 0.00) 89.37%), url('/assets/map-bg.png')",
      },
    },
  },
  plugins: [],
};
export default config;
