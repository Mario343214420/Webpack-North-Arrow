var OpenBrowserPlugin = require ('open-browser-webpack-plugin')

module.exports = {
  entry: {
    bundle1: './main.jsx'
  },
  output: {
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015', 'react']
          }
        }
      }
    ]
  }
}
