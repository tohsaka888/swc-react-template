const { baseConfig } = require("./webpack.base.conf");
const CssMinimizerWebpackPlugin = require("css-minimizer-webpack-plugin");

const { merge } = require("webpack-merge");

module.exports = merge(baseConfig, {
  mode: "production",
  cache: false,
  devtool: "source-map",
  output: {
    pathinfo: false,
  },
  performance: {
    hints: false,
  },
  optimization: {
    minimizer: [new CssMinimizerWebpackPlugin(), "..."],
    usedExports: true,
    nodeEnv: "production",
    moduleIds: "deterministic", // 不论是否添加任何新的本地依赖，对于前后两次构建，vendor hash 都应该保持一致
    runtimeChunk: "single", // 将第三方库(library)（例如 lodash 或 react）提取到单独的 vendor chunk 文件中，是比较推荐的做法，这是因为，它们很少像本地的源代码那样频繁修改。
    splitChunks: {
      chunks: "all",
      usedExports: true,
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendor",
          chunks: "all",
          reuseExistingChunk: true,
        },
      },
    },
  },
});
