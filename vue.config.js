module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `
            @import "@/scss/styles.scss";
            @import "@/assets/icons/style.scss";
        `,
      },
    },
  },
};
