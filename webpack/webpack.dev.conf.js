const { baseConfig } = require("./webpack.base.conf");
const { merge } = require("webpack-merge");
const { proxy } = require("../proxy.config");

module.exports = merge(baseConfig, {
  mode: "development",
  devtool: "eval-cheap-module-source-map",
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
