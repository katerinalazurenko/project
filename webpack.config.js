const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: {
        main: path.resolve(__dirname, './src/index.js'),
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].bundle.js',
    },
    module: {
        rules: [
          {
            test: /\.(scss|css)$/,
            use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
          }
        ],
      },
    plugins: [
      new HTMLWebpackPlugin({
        template: './src/index.html',
      }),
      new CopyPlugin({
        patterns: [
            {
              from: path.resolve(__dirname, 'src/img'),
              to:   path.resolve(__dirname, 'dist/img')
            }
          ]
        }),
        new CopyPlugin({
          patterns: [
              {
                from: path.resolve(__dirname, 'src/fonts'),
                to:   path.resolve(__dirname, 'dist/fonts')
              }
            ]
          })
    ],
}
