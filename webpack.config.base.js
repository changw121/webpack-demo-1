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
  ],
  module: {
    rules: [
      {
        test: /\.less$/i,
        use: [
          "style-loader",
          "css-loader",
          "less-loader",
        ],
      },
      {
        test: /\.scss$/i,
        use: [
          "style-loader",  //将js字符串转化成style标签
          "css-loader",  //将css代码转化成js字符串
          {
            loader: "sass-loader", //将scss代码转化成css代码
            options: {
              implementation: require('dart-sass')
            }
          }
        ],
      },
    ],
  }
};