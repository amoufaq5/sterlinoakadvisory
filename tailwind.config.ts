/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        oak: '#8B6914',
        'oak-light': '#C49A28',
        'oak-pale': '#E8D9A0',
        dark: '#1C1C1C',
        'warm-white': '#FAF7F2',
        cream: '#F5F0E8',
        'section-bg': '#EFEBE0',
        mid: '#5A5A5A',
        'light-gray': '#9A9A9A',
        border: 'rgba(139,105,20,0.18)',
      },
      fontFamily: {
        display: ['Cormorant Garamond', 'serif'],
        body: ['Jost', 'sans-serif'],
      },
      maxWidth: {
        content: '1280px',
      },
    },
  },
  plugins: [],
}
