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
        primary: 'var(--color-primary)',
        'base-title': 'var(--color-base-title)',
        'base-subtitle': 'var(--color-base-subtitle)',
        'base-text': 'var(--color-base-text)',
        'base-span': 'var(--color-base-span)',
        'base-label': 'var(--color-base-label)',
        'base-border': 'var(--color-base-border)',
        'base-post': 'var(--color-base-post)',
        'base-profile': 'var(--color-base-profile)',
        'base-background': 'var(--color-base-background)',
        'base-input': 'var(--color-base-input)',
      },
      backgroundImage: {
        'lines-cover': 'var(--cover)',
      },
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            '--tw-prose-body': theme('colors.base-text'),
            '--tw-prose-headings': theme('colors.base-title'),
            '--tw-prose-links': theme('colors.primary'),
            '--tw-prose-bold': theme('colors.base-text'),
            '--tw-prose-counters': theme('colors.base-label'),
            '--tw-prose-bullets': theme('colors.base-label'),
            '--tw-prose-hr': theme('colors.base-title'),
            '--tw-prose-quotes': theme('colors.base-span'),
            '--tw-prose-quote-borders': theme('colors.base-border'),
            '--tw-prose-captions': theme('colors.primary'),
            '--tw-prose-code': theme('colors.primary'),
            '--tw-prose-pre-code': theme('colors.primary'),
            '--tw-prose-pre-bg': theme('colors.base-post'),
            '--tw-prose-th-borders': theme('colors.base-border'),
            '--tw-prose-td-borders': theme('colors.base-border'),
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/typography')({
      className: 'DEFAULT',
    }),
  ],
}
