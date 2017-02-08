var globalConfigList = require('../global.config');
var fsExtra = require('fs-extra');
var path = require('path');

var buildDoc = function(list){
	var start = [`import Vue from 'vue';\n\n`]

	var mid = list.map(function(item){
		var alias = item.name.split('-').join('');
		if(item.child && item.child.length){
			return item.child.map(function(child){
				var childName = child.name.split('-').join('');

				return `import ${childName} from '${item.name}/src/${child.path}';\nVue.component('${child.name}', ${childName});\n\n`;
			}).join('\n')
		}else{
			var _path = '';
			if(item.path){
				_path = `${item.name}/src/${item.path}`
			}else{
				_path = item.name;
			}
			return `import ${alias} from '${_path}';\nVue.component('${item.name}', ${alias});\n\n`;
		}

	})

	var end = [`if(window != undefined){
		window.sfToast = sftoast;
	}`
	]

	var ret = [].concat(start, mid, end);

	fsExtra.outputFileSync(path.resolve(__dirname, '../src/common.js'), ret.join('\n'))

}

var buildDocStyle = function(list){
	var start = [`@charset "UTF-8";
@import '../node_modules/ui-style/src/_var.css';
@import '~7ui-grid';
@import '../node_modules/ui-style/src/icon.css';
@import '../node_modules/ui-style/src/_mixins.css';`]
	
	var mid = list.map(function(item){
		var alias = item.css;
		return `@import '../node_modules/${item.name}/src/${alias}';\n\n`
	})

	var ret = [].concat(start, mid);
	fsExtra.outputFileSync(path.resolve(__dirname, '../src/style.css'), ret.join('\n'))
};

var buildNavigate = function(list){
	var navPath = list.map(function(item){
		return `{
			"path": "/${item.name}",
			"name": "${item.label}",
			"title": "${item.label}"
		}`
	});

	var navDoc = `[
  {
    "name": "开发指南",
    "children": [{
      "path": "/installation",
      "name": "安装"
    }]
  },
  {
    "name": "更新日志",
    "path": "/changelog"
  },
  {
    "name": "基础组件",
    "groups": [
      {
        "groupName": "Basic",
        "list": [${navPath.join(',')}]
      }
    ]
  }
]`
	fsExtra.outputFileSync(path.resolve(__dirname, '../doc/nav.config.json'), navDoc)
}


buildDoc(globalConfigList);

buildDocStyle(globalConfigList);

buildNavigate(globalConfigList);

console.log('file is created');