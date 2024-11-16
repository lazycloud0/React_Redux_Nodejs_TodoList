const webpack = require("webpack");

module.exports = function override(config) {
  config.resolve = {
    ...config.resolve,
    fallback: {
      ...config.resolve.fallback,
      process: require.resolve("process/browser.js"),
      vm: require.resolve("vm-browserify"),
      path: require.resolve("path-browserify"),
      os: require.resolve("os-browserify/browser"),
      crypto: require.resolve("crypto-browserify"),
      stream: require.resolve("stream-browserify"),
      buffer: require.resolve("buffer"),
    },
    alias: {
      ...config.resolve.alias,
      "process/browser": "process/browser.js",
    },
  };

  config.plugins = [
    ...config.plugins,
    new webpack.ProvidePlugin({
      process: ["process/browser.js"],
      Buffer: ["buffer", "Buffer"],
    }),
  ];

  return config;
};
