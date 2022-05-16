const path = require('path')

module.exports = {
  plugins: {
    'tailwindcss/nesting': 'postcss-nesting',
    tailwindcss: {},
    'postcss-import-svg': {
      paths: [path.resolve(__dirname, 'docs')]
    },
    autoprefixer: {},
  },
}
