import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'sky-top': '#4a6fa5',
        'sky-mid': '#7c5fc2',
        'sky-bottom': '#c084fc',
        'sculpture-ink': '#1b1b1b',
        'signal-blue': '#2b7fff',
        'dusk-blue': '#426188',
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'sky-gradient': 'linear-gradient(180deg, #4a6fa5 0%, #7c5fc2 35%, #c084fc 70%, #e8c4ff 100%)',
      },
    },
  },
  plugins: [],
}
export default config
