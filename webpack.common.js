const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: {
        'js/bundle': [
            path.resolve(__dirname, 'src/js/main.js'),
        ]
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
    },
    /*externals: {
      jquery: 'jQuery',
    },*/
    plugins: [
        new MiniCssExtractPlugin({filename: 'css/[name].min.css', ignoreOrder: false,}),
        new HtmlWebpackPlugin({
            template: 'src/index.html'
        })
    ],
    module: {
        rules: [
            {
                test: /.s?css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader?url=false",
                    'postcss-loader'],
            },

        ],
    },
};
