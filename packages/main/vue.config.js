const isProduction = process.env.ENV === 'production'
module.exports = {
  lintOnSave: false,
  configureWebpack: {
    devtool: isProduction ? 'none' : 'source-map',
    externals: {},
    target: process.env.TARGET
  },
  css: {
    loaderOptions: {
      // pass options to sass-loader
      sass: {
        // @/ is an alias to src/
        // so this assumes you have a file named `src/variables.scss`
        data: '@import "~@/style/import.scss";',
        sourceMap: !isProduction
      },
      css: {
        sourceMap: !isProduction
      }
    }
  }
}
