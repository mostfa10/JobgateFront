/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/app/components/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [
      {'postcss-import': {},
      'tailwindcss/nesting': 'postcss-nesting',
      tailwindcss: {},
      autoprefixer: {},
    }
  ]
}

