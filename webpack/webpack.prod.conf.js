/*
 * @Author: tohsaka888
 * @Date: 2022-07-28 11:28:54
 * @LastEditors: tohsaka888
 * @LastEditTime: 2022-07-28 11:28:55
 * @Description: 请填写简介
 */

const { baseConfig, resolvePath } = require("./webpack.base.conf");
const CssMinimizerWebpackPlugin = require("css-minimizer-webpack-plugin");

const { merge } = require("webpack-merge");

module.exports = merge(baseConfig, {
  mode: "production",
  optimization: {
    minimizer: [new CssMinimizerWebpackPlugin(), "..."],
    usedExports: true,
    nodeEnv: "production",
  },
});
