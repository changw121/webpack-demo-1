const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const base = require('./webpack.config.base.js')

module.exports = {
  ...base,
  mode: 'production', // development or production
  plugins: [
    ...base.plugins,
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash].css",
      chunkFilename: "[id].[contenthash].css",
      ignoreOrder: false,
    })
],
  module: {
    rules: [
      ...base.module.rules,
      {
        test: /\.css$/i,  //以.css结尾的用css-loader加载
        //将css抽成文件在html中link，生产环境中用这个，可以做缓存
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: "../",
            },
          },
          "css-loader",
        ],
      },
    ],
  },
};