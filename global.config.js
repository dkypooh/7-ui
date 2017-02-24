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
			path : "table-column",
			name : 'sf-table-column'
		}, {
			path : "table.vue",
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
        name: "sf-form",
        label: "Form 表单",
        css : "style/form",
        path: "",
        child : [{
            path : "components/checkbox-group.vue",
            name : 'sf-checkbox-group'
        }, {
            path : "components/input.vue",
            name : 'sf-input'
        },{
            path : "components/checkbox.vue",
            name : 'sf-checkbox'
        },{
            path : "components/radio.vue",
            name : 'sf-radio'
        },{
            path : "components/radio-group.vue",
            name : 'sf-radio-group'
        },{
            path : "components/switch.vue",
            name : 'sf-switch'
        },{
        	path : "components/form.vue",
			name : "sf-form"
 		},{
            path : "components/form-item",
            name : "sf-form-item"
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
	},
	{
		name: "sf-tooltips",
		label: "tooltips提示",
		css : "tooltips",
		path :""
	},
	{
		name: "sf-pagination",
		label: "Pagination 分页器",
		css : "pagination",
		path :"pagination.vue"
	},
	{
		name: "sf-select",
		label: "Select 选择器",
		css :"select",
		path : "",
		child : [{
			path : "select.vue",
			name : 'sf-select'
		},{
			path : "option.vue",
			name : 'sf-option'
		}]
	},
	{
		name: "sf-colorpicker",
		label: "ColorPicker 取色板",
		css :"colorpicker",
		path : "colorpicker"
	},
	{
		name: "sf-dnd",
		label: "DragAndDrop 拖拽",
		css : "draganddrop",
		path :"",
		child : [{
			path : "draganddrop",
			name : 'sf-dnd'
		},{
			path : "draggable/draggable",
			name : 'sf-draggable'
		}]
	},
	{
		name: "sf-tree-select",
		label: "TreeSelect 树形下拉选择器",
		css : "treeSelect",
		path :"treeSelect"
	}
]