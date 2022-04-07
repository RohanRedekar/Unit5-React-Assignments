const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(".", "build"), //folder
    filename: "bundle.js",
  },
  mode: "development",
  module: {
    rules: [
      { test: /\.css$/, use: ["style-loader", "css-loader"] },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
    ],
  },
};
