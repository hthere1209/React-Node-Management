const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: "https://ronnel-talented-dev-backend.onrender.com",
      changeOrigin: true,
    })
  );
};

