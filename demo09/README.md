>package.json 配置命令:

npx 调用项目内部安装的模块。
迷你的包能够提供一个设置环境变量的scripts，让你能够以unix方式设置环境变量，然后在windows上也能兼容运行。

```
"scripts": {
    "dev": "npx cross-env DEBUG=true webpack-dev-server --open",
    "build": "npx cross-env DEBUG=false webpack"
  },
```
