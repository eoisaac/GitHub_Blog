/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx', './index.html'],
  darkMode: 'class',
  theme: {
    fontFamily: {
      sans: ['Nunito', 'sans-serif'],
      mono: ['Fira Code', 'monospace'],
    },
    extend: {
      colors: {
        primary: 'rgb(var(--color-primary) / <alpha-value>)',
        'base-title': 'rgb(var(--color-base-title) / <alpha-value>)',
        'base-subtitle': 'rgb(var(--color-base-subtitle) / <alpha-value>)',
        'base-text': 'rgb(var(--color-base-text) / <alpha-value>)',
        'base-span': 'rgb(var(--color-base-span) / <alpha-value>)',
        'base-label': 'rgb(var(--color-base-label) / <alpha-value>)',
        'base-border': 'rgb(var(--color-base-border) / <alpha-value>)',
        'base-post': 'rgb(var(--color-base-post) / <alpha-value>)',
        'base-profile': 'rgb(var(--color-base-profile) / <alpha-value>)',
        'base-background': 'rgb(var(--color-base-background) / <alpha-value>)',
        'base-input': 'rgb(var(--color-base-input) / <alpha-value>)',
      },
      backgroundImage: {
        'lines-cover': "url('./public/assets/images/cover.svg')",
      },
    },
  },
  plugins: [],
}
