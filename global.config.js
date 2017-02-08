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
	},{
		name: "sf-tooltips",
		label: "tootips提示",
		css: "tooltips",
		path: ""
	}
]