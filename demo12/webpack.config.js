var webpack = require('webpack');
module.exports = {
  entry: {
    bundle1:'./module1.jsx',
    bundle2:'./module2.jsx',
  },
  output: {
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test:/\.js[x]?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015', 'react']
          }
        }
      }
    ]
  },
  // plugins: [
  //
  // ],
  optimization:{
    splitChunks:{
      name: true,
      chunks:'async',
      // (the commons chunk name)
      filename: "commons.js",
      cacheGroups: {
        commons: {
          name: "commons",
          chunks: "initial",
          minChunks: 2
        }
      }
    }
  }
}
