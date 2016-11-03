/**
 * file Select 基础组件
 *
 * @author:   波比(｡･∀･)ﾉﾞ
 * @date:     2016-11-03  下午3:52
 */
var util = require('./util');
var dom = require('./dom');
var _ = require('lodash');
var cache = {};

var cacheEntry = {
	id : -1,				// 缓存id
	name : "file",			// 文件名
	accept : '',
	num : 0,
	multiple : true,		// 是否多选
	onchange : function(){

	}
};

/**
 * 初始化缓存
 *
 * @param id
 * @returns {*}
 */
var initCache = function(id){
	var entry = cache[id];

	if(!entry){
		entry = {};
		cache[id] = entry;
	}

	return entry;
};

/**
 * 参数构建input参数
 *
 * @param form
 * @param param
 */
var initFormParam = function(form, param){
	if(util.typeof(param) != 'object') return;

	var arr = [];
	for(var key in param){
		arr.push('<input type="hidden" name="'+key+'" value="'+param[key]+'">')
	}

	form.insertAdjacentHTML('afterBegin', arr.join(''));
};

/**
 * 构建form节点
 *
 * @param id
 * @param param
 */
var doBuildParent = function(id, param){
	var form = document.createElement('form');
	form.setAttribute('id', id);
	form.style.display = 'none';
	initFormParam(form, param);
	cache[id].form = form;

	document.body.appendChild(form);
};

/**
 * append 文件
 *
 * @param id
 * @param entry
 */
var doAppendFile = function(id, entry){
	var accept = '',
		multiple = '',
		file = null,
		fid =  id + '#' + (++entry.num);

	if(!!entry.accept){
		accept = 'accept="'+entry.accept+'"';
	}

	if(!!entry.multiple){
		multiple = 'multiple = "true"';
	}

	file = dom.html2node('<input type="file" '+multiple+' '+accept+' contenteditable="false" id="'+fid+'"/>')

	entry.form.appendChild(file);

	file.addEventListener('change', onFileChange);

	return fid;
};

/**
 * 处理Label点击回调
 *
 * @param labNode
 */
var handlFileLabelClick = function(labNode){
	var doLabelClick = function(event){
		event.stopPropagation();
		event.preventDefault();
	}
	labNode.addEventListener('click', doLabelClick)
}

/**
 * 获取文件改变回调
 *
 * @param event
 */
var onFileChange = function(event){
	var element = event.target,
		id = element.id.split('#')[0],
		entry = cache[id];

	if (!element.value || !entry) return;

	if (!element.name){
		element.name = entry.name;
	}
	entry.onchange({
		id: element.form.id,    // form.id == entry.id
		form:element.form,
		label:entry.lab,
		files : element.files
	});

}
/**
 * 绑定节点
 *
 * @param id
 * @param options
 */
var bind = function(id, options){
	if(!id){
		console.error('node id is null', id, options)
		return;
	}

	var node = util.typeof(id) == 'string' ? document.getElementById(id) : id;

	if(!/htmllabelelement/.test(util.typeof(node))){
		console.error('node is not label tag', id, node, options)
		return;
	}

	var name  = options.name || 'file',
		uniqueId = _.uniqueId( name + '-'),
		cch = initCache(uniqueId),
		options = options || {};

	doBuildParent(uniqueId, options.param);

	_.merge(cch, cacheEntry, {
		id : uniqueId,
		name : name,
		lab : node,
		accept : options.accept || '',
		multiple : !!options.multiple,
		onchange : options.onchange || function(){}
	});

	node.htmlFor = doAppendFile(uniqueId, cch);

	return uniqueId;

};


var unbind = function(id){
	var entry = cache[id];
	if(!entry) return;

	entry.form.parentNode.removeChild(entry.form);
	delete cache[id];
};


var findEntryByName = function(name){
	if(!name) return;

	var reg = new RegExp('^'+name+'-\\d+$', 'i'),
		ret = {};

	for(var id in cache){
		if(reg.test(id)){
			ret[id] = cache[id];
		}
	}

	return ret;
};


module.exports = {
	bind : bind,
	unbind : unbind,
	findEntryByName : findEntryByName
}
