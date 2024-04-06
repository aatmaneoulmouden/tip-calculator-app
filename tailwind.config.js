/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*{.html,js}"],
  theme: {
    container: {
      padding: {
        DEFAULT: '0',
        sm: '0',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    fontFamily: {
      'main': ['Space Mono', 'monospace'],
    },
    extend: {
      colors: {
        'strong-cyan': 'hsl(172, 67%, 45%)',
        'very-dark-cyan': 'hsl(183, 100%, 15%)',
        'dark-grayish-cyan': 'hsl(186, 14%, 43%)',
        'grayish-cyan': 'hsl(184, 14%, 56%)',
        'light-grayish-cyan': 'hsl(185, 41%, 84%)',
        'very-light-grayish-cyan': 'hsl(189, 41%, 97%)',
        'white': 'hsl(0, 0%, 100%)',
      },
      boxShadow: {
        'main': 'rgba(94, 122, 125, 0.2) 0px 48px 100px 0px',
      }
    },
  },
  plugins: [],
}

