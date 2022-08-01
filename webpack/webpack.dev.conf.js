/*
 * @Author: tohsaka888
 * @Date: 2022-07-28 11:28:27
 * @LastEditors: tohsaka888
 * @LastEditTime: 2022-07-28 16:31:06
 * @Description: 请填写简介
 */

const { baseConfig, resolvePath } = require("./webpack.base.conf");

const { merge } = require("webpack-merge");

module.exports = merge(baseConfig, {
  mode: "development",
  devtool: "eval-cheap-module-source-map",
  cache: {
    type: "memory",
  },
  devServer: {
    hot: true,
    port: 3000,
    host: "localhost",
    open: true,
    allowedHosts: "auto",
    compress: true,
    client: {
      progress: true,
      logging: "info",
    },
    historyApiFallback: true
  },
  stats: {
    colors: true,
    modules: false,
    assets: false,
    nestedModulesSpace: 15,
    chunks: false,
    env: true,
    errorDetails: "auto",
    hash: false,
    publicPath: false,
    moduleAssets: false,
    runtimeModules: false,
    dependentModules: false,
  },
  optimization: {
    usedExports: true,
    runtimeChunk: true,
  },
});
