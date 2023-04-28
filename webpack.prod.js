const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const HtmlMinimizerPlugin = require("html-minimizer-webpack-plugin");

module.exports = merge(common, {
  mode: 'production',
  performance: {hints: false},
  optimization: {
    minimizer: [
      new HtmlMinimizerPlugin(),
      new CssMinimizerPlugin({
      parallel: true,
      minify: CssMinimizerPlugin.cleanCssMinify,
      minimizerOptions: {
        level: {
          1: {
            roundingPrecision: 'all=3,px=5',
          },
        },
      },
    }),new TerserPlugin({
      terserOptions: {
        compress: true,
        format: {
          comments: false,
        },
      },
      parallel: true,
      extractComments: false,

    }), '...'],
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
