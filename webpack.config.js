const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: {
    app: './src/js/script.js'
  },
  output: {
    path: path.join(__dirname, 'build/static/js/'),
    filename: '[name].bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                '@babel/preset-env'
              ]
            }
          }
        ]
      }
    ]
  },
  devServer: {
    port: 2222,
    publicPath: '/static/js/',
    contentBase: path.join(__dirname, 'build'),
    watchContentBase: true,
    hot: true,
    inline: true,
    open: true
  }
}
