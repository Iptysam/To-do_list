const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    index: './src/index.js',
  },
  devServer: {
    static: './docs',
  },
  plugins: [
  new HtmlWebpackPlugin({
    template: './src/index.html',
  }),
],
  output: {
    filename: '[name].main.js',
    path: path.resolve(__dirname, 'docs'),
  },
  module: {
  rules: [
    {
      test: /\.css$/i,
      use: ['style-loader', 'css-loader'],
    },
  ],
},
optimization: {
  runtimeChunk: 'single',
},
};