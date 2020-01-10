var OpenBrowserPlugin = require('open-browser-webpack-plugin')

module.exports = {
  entry: './main.js',
  output: {
    filename: 'bundle.js'
  },
  plugins:[
    new OpenBrowserPlugin({url:"http://localhost:3456"})
  ]
}
