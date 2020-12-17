module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    backgroundColor: (theme) => ({
      ...theme('colors'),
      primary: '#03a9f4',
      secondary: '#ffed4a',
      danger: '#e3342f',
    }),
    container: {
      center: true,
    },
  },
  variants: {},
  plugins: [require('tailwindcss'), require('autoprefixer')],
};
