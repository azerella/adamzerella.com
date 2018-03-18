const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HTMLMinifier = require("html-minifier").minify;
const ExtractTextPlugin = require("extract-text-webpack-plugin");

 module.exports = {
  entry: './index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'htdocs')
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "env",
              "react",
              "minify"
            ]}
        }
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: {
            loader: "css-loader",
            options: {
              minimize: true,
              sourceMap: true
            }
          }
        })
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|ico)$/,
        use: {
          loader: "file-loader",
          options: {
            name: "assets/images/[name].[ext]"
          }
        }
      },
      {
        test: /\.(txt|pdf|html)$/,
        include: /assets/,
        use: {
          loader: "file-loader",
          options: {
            name: "assets/content/[name].[ext]"
          }
        }
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['htdocs']),
    new HtmlWebpackPlugin({
        template: "./index.html",
        favicon: "./assets/images/favicon.ico",
        minify: HTMLMinifier,
        xhtml: true,
        hash: true
    }),
    new ExtractTextPlugin({
      filename: "[name].css",
      allChunks: true
    })
  ],
};