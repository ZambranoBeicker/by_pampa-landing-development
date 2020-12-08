const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");

const htmlWebpack = new htmlWebpackPlugin({
  template: path.resolve(__dirname, "src", "index.template.html"),
  filename: "index.html",
  minify: "auto",
});

module.exports = {
  entry: { index: path.resolve(__dirname, "src/js", "index.js") },
  output: {
    path: __dirname,
    publicPath: path.join(__dirname, "src"),
    filename: "./dist/bundle.js",
  },
  plugins: [
    htmlWebpack,
    new MiniCssExtractPlugin({
      filename: "./dist/[name].css",
    }),
  ],
  optimization: {
    minimizer: [new OptimizeCssAssetsPlugin({})],
  },
  module: {
    rules: [
      {
        test: /\.(scss)$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: "css-loader",
          },
          {
            loader: "sass-loader", // compiles Sass to CSS
          },
        ],
      },
      {
        test: /\.(jpg|png|gif)$/,
        use: "url-loader",
      },
    ],
  },

  devServer: {
    open: true,
  },
};
