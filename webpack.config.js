const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  mode: 'development', // development or production
  entry: './src/index.js',
  output: {
    filename: '[name].[contenthash].js',  //filename: 'index.[contenthash].js', 
  },
  plugins: [new HtmlWebpackPlugin({
    title: '小常',
    template: 'src/assets/index.html'  //按照我给你的模板生成html文件
  })],
  module: {
    rules: [
      {
        test: /\.css$/i,  //以.css结尾的用css-loader加载
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};