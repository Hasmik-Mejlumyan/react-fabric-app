/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'background-color': 'var(--background-color)',
        'toolbar-bg-color': 'var(--toolbar-bg-color)',
        'text-color': 'var(--text-color)',
        'border-color': 'var(--border-color)',
      }
    },
  },
  plugins: [],
}

