var hasClass = function(obj, cls) {
	return obj.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'));
};

var addClass = function(obj, cls) {
	if (!hasClass(obj, cls)) obj.className += ' ' + cls;
};

var removeClass = function(obj, cls) {
	if (hasClass(obj, cls)) {
		const reg = new RegExp('(\\s|^)' + cls + '(\\s|$)');
		obj.className = obj.className.replace(reg, ' ');
	}
};

var toggleClass = function(obj, cls) {
	if (hasClass(obj, cls)) {
		removeClass(obj, cls);
	} else {
		addClass(obj, cls);
	}
};

module.exports = {
	hasClass : hasClass,
	addClass : addClass,
	removeClass : removeClass,
	toggleClass : toggleClass
}
