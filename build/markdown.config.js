var path  = require('path');
var globalConfigList = require('../global.config');

var output = globalConfigList.map(function(item){
	return {
		name : item.name,
		path :  path.resolve(__dirname, '../node_modules/'+item.name+'/README.md')
	}
})


module.exports = output;