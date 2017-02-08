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
      <link rel="stylesheet" href="https://unpkg.com/element-ui@1.0.0-rc.8/lib/theme-default/index.css">
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
    		name : "sf-button",
    		label : "Button 按钮",
    		css  : "button.css",
    		path : ""
    	},
    	{
    		name: "sf-table",
    		label: "Table 表单",
    		css : "table.css",
    		path :"",
    		child : [{
    			path : "/table-column",
    			name : 'sf-table-column'
    		}, {
    			path : "/table.vue",
    			name : 'sf-table'
    		}]
    	},
    	{
    		name: "sf-spinner",
    		label: "Spinner 过场",
    		css : "spinner",
    		path: "",
    		child : [{
    			path : "/clipLoader/clipLoader",
    			name : 'sf-cliploader'
    		}, {
    			path : "/scaleLoader/scaleLoader",
    			name : 'sf-scaleloader'
    		},{
    			path : "/riseLoader/riseLoader",
    			name : 'sf-riseloader'
    		},{
    			path : "/squareLoader/squareLoader",
    			name : 'sf-squareloader'
    		}]

    	},
    	{
    		name: "sf-toast",
    		label: "Toast 全局提示",
    		css: "toast",
    		path :"/toast"
    	},
    	{
    		name: "sf-progressbar",
    		label: "Progressbar 进度条",
    		css : "progressbar",
    		path :"/progressbar"
    	}
    ]
```
### 文档打包任务(default)

> gulp document

### 代码打包任务

> gulp build

