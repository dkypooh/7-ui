var path = require('path');
var fsExtra = require('fs-extra');
var config = require('../markdown.config');

var targetPath = path.resolve(__dirname, '../doc/docs/zh-cn/')

var copyFile = function(configList){
	configList.forEach(function(itm){
		fsExtra.copySync(itm.path,  path.resolve(targetPath, './'+itm.name + '.md'))
	})

	console.log('拷贝文件完成')
}


copyFile(config);