/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Docs Nuxt: https://tailwindcss.nuxtjs.org/
 */

const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  theme: {
    extend: {
      fontFamily: {
        // First add to nuxt config
        sans: ['Work Sans', ...defaultTheme.fontFamily.sans],
        serif: ['Montserrat', ...defaultTheme.fontFamily.sans]
      },
      colors: {
        primary: {
          100: '#CFD9DE',
          200: '#B7C6CD',
          300: '#9FB3BC',
          400: '#87A0AC',
          500: '#6F8D9B',
          600: '#56707C',
          700: '#3F525B',
          800: '#28343A',
          900: '#111619'
        },
        social: {
          twitter: '#1da1f2',
          facebook: '#1877f2',
          instagram: '#e4405f',
          mail: '#005ff9',
          whatsapp: '#25D366'
        }
      },
      height: {
        '10v': '10vh',
        '20v': '20vh',
        '30v': '30vh',
        '40v': '40vh',
        '50v': '50vh',
        '60v': '60vh',
        '70v': '70vh',
        '80v': '80vh',
        '90v': '90vh',
        '100v': '100vh'
      }
    }
  },
  variants: {},
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio')
  ],
  purge: {
    // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
    enabled: process.env.NODE_ENV === 'production',
    content: [
      'node_modules/components-helpdev-storyblok/**/*.vue',
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'node_modules/vue-tailwind/dist/*.js',
      'nuxt.config.js'
    ]
  }
};
