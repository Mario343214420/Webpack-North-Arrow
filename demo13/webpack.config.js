var webpack = require('webpack');

module.exports = {
  entry: {
    app: './main.js',
    // bundle: ['jquery'],不需要
  },
  output: {
    filename: '[name].dist.js'
    // 需动态配置，不然打包生成文件名重复，会报错
    // Multiple assets emit to the same filename ***.js
  },
  optimization: {
    // minimize:true/false // 是否压缩代码
    // minimizer: // 可以自定义UglifyJsPlugin和一些配置,默认的压缩为uglifyjs-webpack-plugin
    /*
    // 比如在构建的时候,希望新增css的压缩
    minimizer:mode === "development"? []: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: mode === "development"
      }),
      new OptimizeCSSAssetsPlugin()
    ]
    */
    // runtimeChunk // 默认为false,runtime相关的代码(各个模块之间的引用和加载的逻辑)内嵌入每个entry。
    // true/'single'/multiple (same as true)/name:()=>{"manifest"} (自定义)
    // namedModules,namedChunks // 不建议配置
    // splitChunks 根据不同的策略来分割打包出来的bundle
    splitChunks: {
      chunks: 'all',
      // 'all' 同时分割同步和异步代码
      // 'initial' 同时打包同步、异步代码，但不考虑异步引入，直接将异步代码与引入代码打包在一起
      cacheGroups: {
        vendor: {
          name: 'vendor',
          chunks: 'all',
        }
      }
    }
  }
};
