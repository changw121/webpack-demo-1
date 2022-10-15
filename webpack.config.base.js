const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: '[name].[contenthash].js',  //filename: 'index.[contenthash].js', 
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: '小常',
      template: 'src/assets/index.html'  //按照我给你的模板生成html文件
    })
]
};