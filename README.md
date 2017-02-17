# 7-ui
7-UI elements Component Library


## npm 安装

推荐使用 npm 的方式安装，它能更好地和 webpack 打包工具配合使用。
> npm install 7-ui

```html
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="UTF-8">
      <!-- 引入样式 -->
      <link rel="stylesheet" href="https://unpkg.com/7-ui/dist/style.css">
    </head>
    <body>
      <div id="app">
        <sf-button @click.native="visible = true">按钮</sf-button>
      </div>
    </body>
      <!-- 先引入 Vue -->
      <script src="https://unpkg.com/vue@2.0.3/dist/vue.js"></script>
      <!-- 引入组件库 -->
      <script src="https://unpkg.com/7-ui/dist/app.js"></script>
      <script>
        new Vue({
          el: '#app',
          data: function(){
            return { visible: false }
          }
        })
      </script>
    </html>
```

## 工具使用

配置文件 `global.config.js`
```js
    /**
     * 全局配置文件
     *
     * @type {*[]}
     */
    module.exports = [
    	{
    		name : "sf-button",   // 组件npm包名称
    		label : "Button 按钮", // 组件名字(导航栏展示)
    		css  : "button.css",   // 组件样式文件, 完整地址(sf-button/src/button.css)
    		path : ""              // 组件打包文件地址
    	},
    	{
    		name: "sf-table",
    		label: "Table 表单",
    		css : "table.css",
    		path :"",
    		child : [{
    			path : "table-column", // 完整地址('sf-table/src/table-column')
    			name : 'sf-table-column'
    		}, {
    			path : "table.vue",  // 完整地址('sf-table/src/table.vue')
    			name : 'sf-table'
    		}]
    	},
    	{
    		name: "sf-spinner",
    		label: "Spinner 过场",
    		css : "spinner",
    		path: "",
    		child : [{
    			path : "clipLoader/clipLoader",
    			name : 'sf-cliploader'
    		}, {
    			path : "scaleLoader/scaleLoader",
    			name : 'sf-scaleloader'
    		},{
    			path : "riseLoader/riseLoader",
    			name : 'sf-riseloader'
    		},{
    			path : "squareLoader/squareLoader",
    			name : 'sf-squareloader'
    		}]

    	},
    	{
    		name: "sf-toast",
    		label: "Toast 全局提示",
    		css: "toast",
    		path :"toast"
    	},
    	{
    		name: "sf-progressbar",
    		label: "Progressbar 进度条",
    		css : "progressbar",
    		path :"progressbar"
    	}
    ]
```

### 组件安装
如需增加额外组件,需要在本地此仓库添加 `npm包(component.package.json)` 及修改响应的`配置文件(global.config.js)`
> gulp install

### 文档打包任务(default)
> gulp document

### 代码打包任务
> gulp build

