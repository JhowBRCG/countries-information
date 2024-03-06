import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'dark-theme-900': 'hsl(207, 26%, 17%)',
        'dark-theme-600': 'hsl(209, 23%, 22%)',
        'dark-theme-400': 'hsl(209, 23%, 28%)',
        'light-theme': 'hsl(0, 0%, 98%)',
        'light-mode-text': 'hsl(200, 15%, 8%)',
        'light-mode-input': 'hsl(0, 0%, 52%)',
        'hover-dark': 'hsl(209, 23%, 28%)',
      },
      boxShadow: {
        primary: '0px 0px 6px 2px rgba(0,0,0,0.20);',
      },
    },
  },
  plugins: [],
  darkMode: 'class',
}
export default config
