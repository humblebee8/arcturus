module.exports = {
  mode: 'jit',
  content: ['./public/**/*.{scss,sass,css}', './src/**/*.{astro,js,jsx,ts,tsx,vue,svelte,scss,sass,css}'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'astro': '#000014',
        'arcturus': '#abcdef'
      }
    },
  },
  plugins: [],
}