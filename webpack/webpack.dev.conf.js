const { baseConfig } = require("./webpack.base.conf");
const { merge } = require("webpack-merge");
const { proxy } = require("../proxy.config");

module.exports = merge(baseConfig, {
  mode: "development",
  devtool: "inline-source-map",
  cache: {
    type: "memory",
    cacheUnaffected: true,
    maxGenerations: 1,
  },
  devServer: {
    hot: true,
    port: "auto",
    host: "local-ip",
    open: true,
    allowedHosts: "auto",
    compress: true,
    magicHtml: true,
    client: {
      progress: true,
      logging: "info",
    },
    proxy,
    historyApiFallback: true,
  },
  optimization: {
    usedExports: true,
    runtimeChunk: true,
  },
});
