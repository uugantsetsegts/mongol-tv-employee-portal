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
        'canvas': '#000000',
        'card-dark': '#0f0f10',
        'card-navy': '#001b33',
        'card-deep': '#030719',
        'electric-blue': '#0088ff',
        'text-primary': '#ffffff',
        'text-secondary': 'rgba(255, 255, 255, 0.8)',
        'text-muted': 'rgba(255, 255, 255, 0.6)',
        'border-subtle': 'rgba(255, 255, 255, 0.08)',
        'aurora-violet': '#2d1b4e',
        'aurora-lavender': '#9b8ab8',
        'aurora-pink': '#c4a8d0',
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
      },
      borderRadius: {
        'card': '24px',
        'card-lg': '32px',
      },
      backgroundImage: {
        'hero-aurora': 'linear-gradient(180deg, #000000 0%, #0d0d1f 20%, #1a0f3d 40%, #2d1f5c 55%, #4a3575 70%, #6b4f8a 80%, #9b7ab0 90%, #c4a8d0 100%)',
        'card-gradient': 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)',
      },
      letterSpacing: {
        'tighter': '-0.04em',
        'tight': '-0.02em',
      },
    },
  },
  plugins: [],
}
export default config
