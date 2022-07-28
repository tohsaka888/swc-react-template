/*
 * @Author: tohsaka888
 * @Date: 2022-07-28 11:28:27
 * @LastEditors: tohsaka888
 * @LastEditTime: 2022-07-28 14:40:01
 * @Description: 请填写简介
 */

const { baseConfig } = require("./webpack.base.conf");

const { merge } = require("webpack-merge");

module.exports = merge(baseConfig, {
  mode: "development",
  devtool: "inline-source-map",
  cache: {
    type: "memory",
    cacheUnaffected: true,
  },
  experiments: {
    cacheUnaffected: true,
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
  },
});
