const path = require("path");
const { merge } = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const baseConfig = require("./webpack.base.js");

const devConfig = {
  mode: "development", // 开发模式
  entry: path.join(__dirname, "../example/src/index.tsx"), // 项目入口，处理资源文件的依赖关系
  output: {
    path: path.join(__dirname, "../dist"),
    filename: "bundle.js",
  },
  module: {
    rules: [],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "React Expanse",
      filename: "index.html",
      template: path.join(__dirname, "../example/index.html"),
      inject: true,
    }),
  ],
};
module.exports = merge(devConfig, baseConfig);
