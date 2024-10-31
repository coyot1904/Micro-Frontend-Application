const path = require("path");
const { ModuleFederationPlugin } = require("webpack").container;
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.tsx", // Your entry file
  mode: "development",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js", // Adjust this if necessary
    publicPath: "http://localhost:3003/",
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "orders",
      filename: "remoteEntry.js",
      exposes: {
        "./OrderApp": "./src/App", // Ensure the path is correct
      },
      shared: {
        react: { singleton: true, eager: true },
        "react-dom": { singleton: true, eager: true },
      },
    }),
    new HtmlWebpackPlugin({
      template: "./dist/index.html",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/, // Rule for CSS files
        use: ["style-loader", "css-loader"], // Use these loaders
      },
    ],
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"), // Serve from the 'dist' directory
    },
    port: 3003, // Set a unique port for each micro-frontend
    historyApiFallback: true,
    headers: { "Access-Control-Allow-Origin": "*" },
    static: path.join(__dirname, "dist"),
  },
};
