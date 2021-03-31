const path = require("path");
const { merge } = require("webpack-merge");
const baseConfig = require("./webpack.base.js");

const devConfig = {
  mode: "production",
  entry: path.join(__dirname, "../example/src/index.tsx"), // 项目入口，处理资源文件的依赖关系
  output: {
    path: path.join(__dirname, "../dist"),
    filename: "bundle.js",
  },
};
module.exports = merge(devConfig, baseConfig);
