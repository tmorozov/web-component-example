const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.ts',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    clean: true,
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  mode: "development",
  devtool: 'inline-source-map',
  plugins: [
    new HtmlWebpackPlugin({
        hash: true,
        title: 'Webpack Example App',
        header: 'Webpack Example Title',
        metaDesc: 'Webpack Example Description',
        template: './src/index.html',
        filename: 'index.html',
        inject: 'body'
      })
  ],
};