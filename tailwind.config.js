module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    extend: {
      width: {
        inherit: "inherit",
      },
    },
  },
  variants: {},
  plugins: [require("tailwindcss"), require("autoprefixer")],
};
