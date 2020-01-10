var HtmlWebpackPlugin = require('html-webpack-plugin');
var OpenBrowserPlugin = require('open-browser-webpack-plugin');

module.exports={
  entry: './main.js',
  output: {
    filename: 'bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      title:"webpack-demo08",
      filename: 'index.js.jsx.html'
    }),
    new OpenBrowserPlugin({url:'http://localhost:8080'})
  ]
}
