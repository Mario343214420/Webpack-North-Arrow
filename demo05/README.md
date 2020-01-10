>url-loader作用：

如果页面图片较多，发很多 http 请求，会降低页面性能。这个问题可以通过 url-loader 解决。url-loader 会将引入的图片以 base64 编码并打包到文件中，最终只需要引入这个dataURL 就能访问图片了。当然，如果图片较大，编码会消耗性能。因此 url-loader 提供了一个 limit 参数，小于 limit 字节的文件会被转为 base64，大于 limit 的会使用 file-loader 的参数进行命名，并把图片 copy 到指定文件夹内。
由于 url-loader 包含了 file-loader 所以，file-loader 内的 option 在 url-loader 中均能使用。

>url-loader 不适用的场景：

一个图片好几次或大量使用时，浏览器本来是有缓存的，结果你直接生成 base64 打包到代码里面，请求速度来讲无疑是不划算的。

>安装依赖：

    ```
    npm install --save url-loader file-loader
    ```
    
>webpack.config.js 配置文件中添加处理规则：

    ```
    module：{
        rules：[
            { test: /\.(jpg|png|gif|bmp|jpeg)$/i,//正则表达式匹配图片规则，i忽略大小写
            use: [{
            loader:'url-loader',
            options:{
                limit:8192,//限制打包图片的大小：
                // 如果大于或等于8192Byte，则按照相应的文件名和路径打包图片；如果小于8192Byte，则将图片转成base64格式的字符串。
                name:'img/[name].[hash:8].[ext]',//img:图片打包的文件夹；
                // [name].[ext]：设定图片按照本来的文件名和扩展名打包，不用进行额外编码
                // [hash:8]：一个项目中如果两个文件夹中的图片重名，打包图片就会被覆盖，加上hash值的前八位作为图片名，可以避免重名。
            }
            }]}
        ]
    }
    ```
>url-loader 只处理两种图片引入情况：

（注意url-loader的引入必须是相对路径）

>React 组件内部直接引入：
    ```
    import red_png from "./red.png";
    <img src = {red_png} />
    ```
>css 背景图引入：

(使用url-loader相对路径，不使用的话需要绝对引用)

    ```
    background-image: url("./images/blue.png");
    ```
    
>js中的路径赋值，例如：

    ```
    const img=getElementByTagName('img')[0];
    img.src="./imges/img.jpg"
    ```
    
>请使用：

    ```
    const img=getElementByTagName('img')[0];
    img.src=require("./imges/img.jpg")
    ```
    
>参考：

[webpack—url-loader](https://segmentfault.com/a/1190000015946766)
解决项目中所有图片打包问题

