/**
 * Created by David Maser on 13/06/2017.
 */
let webpack = require('webpack');
let HtmlWebPackPlugin = require('html-webpack-plugin');
module.exports = {
  entry: "./bronko.js",
  watch:true,
  watchOptions: {
    aggregateTimeout: 500,
    poll: 1000
  },
  output: {
    path: __dirname + "/dist",
    filename: "bronko.bundle.js"
  },
  module:{
    rules:[
      {
        test: /\.scss$/,
        use:[
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader"
          },
          {
            loader: "sass-loader",
            options: {
              includePaths: ["src/scss","src/styles"],
              outputStyle: 'compressed'
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin(
      {
        inject:'head',
        cache:true,
        hash:true
      }
    ),
    new webpack.ProvidePlugin({
      jQuery: 'jquery',
      $: 'jquery',
      jquery: 'jquery' })
  ]
};