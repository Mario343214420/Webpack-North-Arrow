var OpenBrowserPlugin = require('open-browser-webpack-plugin')

module.exports = {
  entry: {
    bundle1:'./module1.js',
    bundle2:'./module2.js',
  },
  output: {
    filename: '[name].js'
  },
  // plugins:[
  //   new OpenBrowserPlugin({url:"http://localhost:3456"})
  // ]
}
