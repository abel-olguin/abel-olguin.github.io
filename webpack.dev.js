const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require("path");
const HtmlMinimizerPlugin = require("html-minimizer-webpack-plugin");

module.exports = merge(common, {
  mode: 'development',
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'dist'),
    },
    port: 3000,
    open: true,
    hot: true,
    compress: true,
    historyApiFallback: true,
  },
  optimization: {
    minimizer: [
        new HtmlMinimizerPlugin(),
    ],
    splitChunks: {
      cacheGroups: {
        bundle: {
          name: 'bundle',
          type: 'css/mini-extract',
          chunks: "all",
          enforce: true,
        }
      },
    },
  },
});

