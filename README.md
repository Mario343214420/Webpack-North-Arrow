---

# webpack 打包指北

---

### demo1 基本js打包

<h6>1.安装依赖库<h6>
<h6>2.进入demo文件路径下，运行npm build打包dist文件<h6>
<h6>3.对比打包配置结果<h6>
<h6>for example demo01/dist<h6>
  
---
### demo2 批量js打包处理
<h6>js文件打包合并<h6>

---
### demo3 react.js工具打包处理
<h6>react.js打包合并<h6>

---

### demo4 stylus编译打包处理

---

### demo5 图片打包处理（包含详细说明）

可配置打包图片，可转base64

---

### demo6 CSS模块化

* :global打包工具不会对其操作 （需验证）

* :local会操作成哈希值压缩过的类名 （需验证）

经验证没有问题，但是会打包至bundle.js中 <br>
使用该demo打包需要使用命令行操作

```
:local(.title) {
  color: red;
}

//上面这种写法相当于
.titlt{
  color: red;
}
 
:global(.title) {
  color: green;
}
```

---

### demo7 JS压缩

---

### demo8 自动打开浏览器

html-webpack-plugin可以为您创建index.html，而打开浏览器- Webpack -plugin可以在Webpack加载时打开一个新的浏览器标签。

---

### demo9 js运行环境配置

不同环境运行不同代码。<br>
您只能在开发环境中使用环境标志来启用某些代码。

---

### demo10 代码分割
在大型项目开发中，将所有代码压缩进同一js文件中效率较低，比如使用three.js并编写大量代码，使用单一js文件运行，请求获取完该文件才会运行，此时若存在网速慢等问题，会造成页面获取该js文件后才渲染，甚至报错。若将不同功能代码段分割，分步骤逐步加载，便能够更高效的展示页面，并提供相应功能。

---

### demo11 bundle-loader 工具进行代码分割
使用 [bundle-loader](https://www.npmjs.com/package/bundle-loader) 工具分割代码

---

### demo12 图片打包处理（包含详细说明）

```
Error: webpack.optimize.CommonsChunkPlugin has been removed, please use config.optimization.splitChunks instead.
```

阮一峰老师代码中使用webpack3，在更新成webpack4之后，需要替换此组件配置项
<br>[webpack@4模块导入更新内容](https://www.webpackjs.com/plugins/split-chunks-plugin/#configuring-cache-groups)

--- 

##### SplitChunks插件
早期webpack的块及内部引入模块采用父子关系引入连接，使用配置CommonsChunkPlugin的方法避免重复依赖。
<br>自更新版本4.0开始，移除CommonsChunkPlugin，使用optimization.splitChunks和optimization.runtimeChunk作为替代。

---

###### demo12 配置

```
optimization:{
    splitChunks:{
      name: true,
      chunks:'async',
      // (the commons chunk name)
      filename: "commons.js",
      // 缓存组
      cacheGroups: {
        commons: {
          name: "commons",
          chunks: "initial", // "initial"（初始块）、"async"（按需块）、"all"（所有块）
          minChunks: 2
        }
      }
    }
  }
```

---
### demo13

> webpack build生成app、vendor、manifest的区别:

vendor.js: 默认将node_modules里require的依赖都打包在这里
manifest.js: 在vendor.js的基础上，主要将一些异步加载等打包在这里
app.js: 默认将所有你自己写的js打包在这里

> 按需加载与不按需加载的区别

**1.不按需加载**

```
import Vue from 'vue';
import Router from 'vue-router';
import Home from ‘home/Home’;
import Detail from 'detail/Detail';
```

会把所有js打包成一个app.js文件

**result:**

+ app.\*\*\*\*\*\*.js

+ app.\*\*\*\*\*\*.js.map

+ manifest.\*\*\*\*\*\*.js

+ manifest.\*\*\*\*\*\*.js.map

+ vendor.\*\*\*\*\*\*.js

+ vendor.\*\*\*\*\*\*.js.map

**2.按需加载**

```
import Vue from 'vue';
import Router from 'vue-router';
import Home from ‘home/Home’;
import Detail from 'detail/Detail';
```
会把app.js包打包成多个分离js文件，页面访问不同前端路由时，加载不同js文件。

**result:**

+ **1.\*\*\*\*\*\*.js**

+ **1.\*\*\*\*\*\*.js.map**

+ **2.\*\*\*\*\*\*.js**

+ **2.\*\*\*\*\*\*.js.map**

+ **3.\*\*\*\*\*\*.js**

+ **3.\*\*\*\*\*\*.js.map**

+ **app.\*\*\*\*\*\*.js**

+ **app.\*\*\*\*\*\*.js.map**

+ **manifest.\*\*\*\*\*\*.js**

+ **manifest.\*\*\*\*\*\*.js.map**

+ **vendor.\*\*\*\*\*\*.js**

+ **vendor.\*\*\*\*\*\*.js.map**

**延伸** vendor体积优化

1. 使用externals选项，使用script标签引用公共库

```
externals: {
'vue': 'Vue',
'vue-router': 'VueRouter',
'vuex': 'Vuex',
'axios': 'axios'
}

<script src="//cdn.bootcss.com/vue/2.2.5/vue.min.js"></script>
<script src="//cdn.bootcss.com/vue-router/2.3.0/vue-router.min.js"></script>
<script src="//cdn.bootcss.com/vuex/2.2.1/vuex.min.js"></script>
<script src="//cdn.bootcss.com/axios/0.15.3/axios.min.js"></script>
```

2. 可利用webpack.DllReferencePlugin webpack.DllReferencePlugin 将常用不怎么变更的文件，打入一个统一的文件，外链使用。这个主要作用也可用来缩小包构建的时间；

可利用 webpack-bundle-analyzer 可以分析打包后生成的文件结构，十分牛掰（最新 Vue-cli 带有此配置）；在 package.json 中配置如下命令 npm run analyz，运行即可查看之：

```"analyz": "NODE_ENV=production npm_config_report=true npm run build"```

对此可以分析研究，采取办法过滤掉重复的内容等... ... 其他还有诸如开启压缩啦，开启 Gzip 之类等等，来减小包的体积。

---
