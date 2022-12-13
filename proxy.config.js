// example
// * 详情可见： https://webpack.docschina.org/configuration/dev-server#devserverproxy
module.exports = {
  "/api": {
    target: "https://other-server.example.com",
    secure: false,
    changeOrigin: true,
  },
};
