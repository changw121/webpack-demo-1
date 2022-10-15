//继承base的内容
const base = require('./webpack.config.base.js')

module.exports = {
  //将base所有属性抄过来了
  ...base,
  mode: 'development', 
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
  },
  module: {
    rules: [
      ...base.module.rules,
      {
        test: /\.css$/i,  //以.css结尾的用css-loader加载
        use: ["style-loader", "css-loader"],  //在html页面里面生成style标签放入css代码,生产环境中用主要因为它快，不需要生成文件
      },
    ],
  },
};