const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    app: './src/index.js',   
  },
  devtool: 'inline-source-map',
  devServer: {
         contentBase: './dist',
         hot: true,
       },
  module: {
        rules: [
          {
          test: /\.css$/,
          use: ['style-loader', 'css-loader'],
          },
        ],
      },
  plugins: [
    //new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
    //new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Hot Module Replacement',
    }),
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
   // publicPath: '/',
  },
};