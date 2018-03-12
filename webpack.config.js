const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const webpack = require('webpack');



module.exports = {
  entry: [
    "./src/js/app.js"
  ],
  output: {
    path: path.join(__dirname , "dist"),
    publicPath: '/',
    filename: "bundle.js"
  },
  devServer: {
    contentBase: "./src"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src/index.html'),
    }),
    new webpack.LoaderOptionsPlugin({
       debug: true
     }),
    new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
    }),
  ],

  performance: {
    hints: false
  },

  resolve: {
    extensions: ['.js', '.jsx'],
  },

};