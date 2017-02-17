## npm 安装
推荐使用 npm 的方式安装，它能更好地和 [webpack](https://webpack.js.org/) 打包工具配合使用。

```shell
npm install 7-ui
```

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <!-- 引入样式 -->
  <link rel="stylesheet" href="https://unpkg.com/7-ui@1.0.0/dist/style.css">
</head>
<body>
  <div id="app">
    <sf-button @click.native="visible = true">按钮</sf-button>
  </div>
</body>
  <!-- 先引入 Vue -->
  <script src="https://unpkg.com/vue@2.0.3/dist/vue.js"></script>
  <!-- 引入组件库 -->
  <script src="https://unpkg.com/7-ui@1.0.0/dist/app.js"></script>
  <script>
    new Vue({
      el: '#app',
      data: function() {
        return { visible: false }
      }
    })
  </script>
</html>
```
如果是通过 npm 安装，并希望配合 webpack 使用，请阅读下一节：快速上手。
