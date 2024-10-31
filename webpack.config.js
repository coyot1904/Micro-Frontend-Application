const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container; // Import directly from webpack

module.exports = {
  entry: "./src/index.js",
  output: {
    publicPath: "http://localhost:3000/",
  },
  mode: "development",
  devServer: {
    headers: { "Access-Control-Allow-Origin": "*" },
    port: 3000,
    historyApiFallback: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
    new ModuleFederationPlugin({
      name: "container",
      remotes: {
        products: "products@http://localhost:3001/remoteEntry.js",
        auth: "auth@http://localhost:3002/remoteEntry.js",
        orders: "orders@http://localhost:3003/remoteEntry.js",
      },
      shared: {
        react: { singleton: true, eager: true, requiredVersion: false },
        "react-dom": { singleton: true, eager: true, requiredVersion: false },
        "react-redux": { singleton: true, eager: true, requiredVersion: false },
        "@reduxjs/toolkit": {
          singleton: true,
          eager: true,
          requiredVersion: false,
        },
      },
    }),
  ],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: "babel-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
};
