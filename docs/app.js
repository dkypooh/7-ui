/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(__dirname) {'use strict';

	var _vue = __webpack_require__(1);

	var _vue2 = _interopRequireDefault(_vue);

	var _app = __webpack_require__(2);

	var _app2 = _interopRequireDefault(_app);

	var _vueRouter = __webpack_require__(13);

	var _vueRouter2 = _interopRequireDefault(_vueRouter);

	var _route = __webpack_require__(14);

	var _route2 = _interopRequireDefault(_route);

	var _demoBlock = __webpack_require__(63);

	var _demoBlock2 = _interopRequireDefault(_demoBlock);

	var _footer = __webpack_require__(68);

	var _footer2 = _interopRequireDefault(_footer);

	var _header = __webpack_require__(72);

	var _header2 = _interopRequireDefault(_header);

	var _sideNav = __webpack_require__(77);

	var _sideNav2 = _interopRequireDefault(_sideNav);

	var _footerNav = __webpack_require__(82);

	var _footerNav2 = _interopRequireDefault(_footerNav);

	var _common = __webpack_require__(87);

	var _common2 = _interopRequireDefault(_common);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	_vue2.default.use(_vueRouter2.default);

	_vue2.default.component('demo-block', _demoBlock2.default);
	_vue2.default.component('main-footer', _footer2.default);
	_vue2.default.component('main-header', _header2.default);
	_vue2.default.component('side-nav', _sideNav2.default);
	_vue2.default.component('footer-nav', _footerNav2.default);

	var router = new _vueRouter2.default({
		mode: 'hash',
		base: __dirname,
		routes: _route2.default
	});

	new _vue2.default({ // eslint-disable-line
		render: function render(h) {
			return h(_app2.default);
		},
		router: router
	}).$mount('#app');
	/* WEBPACK VAR INJECTION */}.call(exports, "/"))

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {/*!
	 * Vue.js v2.1.10
	 * (c) 2014-2017 Evan You
	 * Released under the MIT License.
	 */(function(global,factory){ true?module.exports=factory():typeof define==='function'&&define.amd?define(factory):global.Vue=factory();})(this,function(){'use strict';/*  *//**
	 * Convert a value to a string that is actually rendered.
	 */function _toString(val){return val==null?'':typeof val==='object'?JSON.stringify(val,null,2):String(val);}/**
	 * Convert a input value to a number for persistence.
	 * If the conversion fails, return original string.
	 */function toNumber(val){var n=parseFloat(val);return isNaN(n)?val:n;}/**
	 * Make a map and return a function for checking if a key
	 * is in that map.
	 */function makeMap(str,expectsLowerCase){var map=Object.create(null);var list=str.split(',');for(var i=0;i<list.length;i++){map[list[i]]=true;}return expectsLowerCase?function(val){return map[val.toLowerCase()];}:function(val){return map[val];};}/**
	 * Check if a tag is a built-in tag.
	 */var isBuiltInTag=makeMap('slot,component',true);/**
	 * Remove an item from an array
	 */function remove$1(arr,item){if(arr.length){var index=arr.indexOf(item);if(index>-1){return arr.splice(index,1);}}}/**
	 * Check whether the object has the property.
	 */var hasOwnProperty=Object.prototype.hasOwnProperty;function hasOwn(obj,key){return hasOwnProperty.call(obj,key);}/**
	 * Check if value is primitive
	 */function isPrimitive(value){return typeof value==='string'||typeof value==='number';}/**
	 * Create a cached version of a pure function.
	 */function cached(fn){var cache=Object.create(null);return function cachedFn(str){var hit=cache[str];return hit||(cache[str]=fn(str));};}/**
	 * Camelize a hyphen-delimited string.
	 */var camelizeRE=/-(\w)/g;var camelize=cached(function(str){return str.replace(camelizeRE,function(_,c){return c?c.toUpperCase():'';});});/**
	 * Capitalize a string.
	 */var capitalize=cached(function(str){return str.charAt(0).toUpperCase()+str.slice(1);});/**
	 * Hyphenate a camelCase string.
	 */var hyphenateRE=/([^-])([A-Z])/g;var hyphenate=cached(function(str){return str.replace(hyphenateRE,'$1-$2').replace(hyphenateRE,'$1-$2').toLowerCase();});/**
	 * Simple bind, faster than native
	 */function bind$1(fn,ctx){function boundFn(a){var l=arguments.length;return l?l>1?fn.apply(ctx,arguments):fn.call(ctx,a):fn.call(ctx);}// record original fn length
	boundFn._length=fn.length;return boundFn;}/**
	 * Convert an Array-like object to a real Array.
	 */function toArray(list,start){start=start||0;var i=list.length-start;var ret=new Array(i);while(i--){ret[i]=list[i+start];}return ret;}/**
	 * Mix properties into target object.
	 */function extend(to,_from){for(var key in _from){to[key]=_from[key];}return to;}/**
	 * Quick object check - this is primarily used to tell
	 * Objects from primitive values when we know the value
	 * is a JSON-compliant type.
	 */function isObject(obj){return obj!==null&&typeof obj==='object';}/**
	 * Strict object type check. Only returns true
	 * for plain JavaScript objects.
	 */var toString=Object.prototype.toString;var OBJECT_STRING='[object Object]';function isPlainObject(obj){return toString.call(obj)===OBJECT_STRING;}/**
	 * Merge an Array of Objects into a single Object.
	 */function toObject(arr){var res={};for(var i=0;i<arr.length;i++){if(arr[i]){extend(res,arr[i]);}}return res;}/**
	 * Perform no operation.
	 */function noop(){}/**
	 * Always return false.
	 */var no=function(){return false;};/**
	 * Return same value
	 */var identity=function(_){return _;};/**
	 * Generate a static keys string from compiler modules.
	 */function genStaticKeys(modules){return modules.reduce(function(keys,m){return keys.concat(m.staticKeys||[]);},[]).join(',');}/**
	 * Check if two values are loosely equal - that is,
	 * if they are plain objects, do they have the same shape?
	 */function looseEqual(a,b){var isObjectA=isObject(a);var isObjectB=isObject(b);if(isObjectA&&isObjectB){return JSON.stringify(a)===JSON.stringify(b);}else if(!isObjectA&&!isObjectB){return String(a)===String(b);}else{return false;}}function looseIndexOf(arr,val){for(var i=0;i<arr.length;i++){if(looseEqual(arr[i],val)){return i;}}return-1;}/*  */var config={/**
	   * Option merge strategies (used in core/util/options)
	   */optionMergeStrategies:Object.create(null),/**
	   * Whether to suppress warnings.
	   */silent:false,/**
	   * Whether to enable devtools
	   */devtools:"development"!=='production',/**
	   * Error handler for watcher errors
	   */errorHandler:null,/**
	   * Ignore certain custom elements
	   */ignoredElements:[],/**
	   * Custom user key aliases for v-on
	   */keyCodes:Object.create(null),/**
	   * Check if a tag is reserved so that it cannot be registered as a
	   * component. This is platform-dependent and may be overwritten.
	   */isReservedTag:no,/**
	   * Check if a tag is an unknown element.
	   * Platform-dependent.
	   */isUnknownElement:no,/**
	   * Get the namespace of an element
	   */getTagNamespace:noop,/**
	   * Parse the real tag name for the specific platform.
	   */parsePlatformTagName:identity,/**
	   * Check if an attribute must be bound using property, e.g. value
	   * Platform-dependent.
	   */mustUseProp:no,/**
	   * List of asset types that a component can own.
	   */_assetTypes:['component','directive','filter'],/**
	   * List of lifecycle hooks.
	   */_lifecycleHooks:['beforeCreate','created','beforeMount','mounted','beforeUpdate','updated','beforeDestroy','destroyed','activated','deactivated'],/**
	   * Max circular updates allowed in a scheduler flush cycle.
	   */_maxUpdateCount:100};/*  *//**
	 * Check if a string starts with $ or _
	 */function isReserved(str){var c=(str+'').charCodeAt(0);return c===0x24||c===0x5F;}/**
	 * Define a property.
	 */function def(obj,key,val,enumerable){Object.defineProperty(obj,key,{value:val,enumerable:!!enumerable,writable:true,configurable:true});}/**
	 * Parse simple path.
	 */var bailRE=/[^\w.$]/;function parsePath(path){if(bailRE.test(path)){return;}else{var segments=path.split('.');return function(obj){for(var i=0;i<segments.length;i++){if(!obj){return;}obj=obj[segments[i]];}return obj;};}}/*  *//* globals MutationObserver */// can we use __proto__?
	var hasProto='__proto__'in{};// Browser environment sniffing
	var inBrowser=typeof window!=='undefined';var UA=inBrowser&&window.navigator.userAgent.toLowerCase();var isIE=UA&&/msie|trident/.test(UA);var isIE9=UA&&UA.indexOf('msie 9.0')>0;var isEdge=UA&&UA.indexOf('edge/')>0;var isAndroid=UA&&UA.indexOf('android')>0;var isIOS=UA&&/iphone|ipad|ipod|ios/.test(UA);// this needs to be lazy-evaled because vue may be required before
	// vue-server-renderer can set VUE_ENV
	var _isServer;var isServerRendering=function(){if(_isServer===undefined){/* istanbul ignore if */if(!inBrowser&&typeof global!=='undefined'){// detect presence of vue-server-renderer and avoid
	// Webpack shimming the process
	_isServer=global['process'].env.VUE_ENV==='server';}else{_isServer=false;}}return _isServer;};// detect devtools
	var devtools=inBrowser&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__;/* istanbul ignore next */function isNative(Ctor){return /native code/.test(Ctor.toString());}/**
	 * Defer a task to execute it asynchronously.
	 */var nextTick=function(){var callbacks=[];var pending=false;var timerFunc;function nextTickHandler(){pending=false;var copies=callbacks.slice(0);callbacks.length=0;for(var i=0;i<copies.length;i++){copies[i]();}}// the nextTick behavior leverages the microtask queue, which can be accessed
	// via either native Promise.then or MutationObserver.
	// MutationObserver has wider support, however it is seriously bugged in
	// UIWebView in iOS >= 9.3.3 when triggered in touch event handlers. It
	// completely stops working after triggering a few times... so, if native
	// Promise is available, we will use it:
	/* istanbul ignore if */if(typeof Promise!=='undefined'&&isNative(Promise)){var p=Promise.resolve();var logError=function(err){console.error(err);};timerFunc=function(){p.then(nextTickHandler).catch(logError);// in problematic UIWebViews, Promise.then doesn't completely break, but
	// it can get stuck in a weird state where callbacks are pushed into the
	// microtask queue but the queue isn't being flushed, until the browser
	// needs to do some other work, e.g. handle a timer. Therefore we can
	// "force" the microtask queue to be flushed by adding an empty timer.
	if(isIOS){setTimeout(noop);}};}else if(typeof MutationObserver!=='undefined'&&(isNative(MutationObserver)||// PhantomJS and iOS 7.x
	MutationObserver.toString()==='[object MutationObserverConstructor]')){// use MutationObserver where native Promise is not available,
	// e.g. PhantomJS IE11, iOS7, Android 4.4
	var counter=1;var observer=new MutationObserver(nextTickHandler);var textNode=document.createTextNode(String(counter));observer.observe(textNode,{characterData:true});timerFunc=function(){counter=(counter+1)%2;textNode.data=String(counter);};}else{// fallback to setTimeout
	/* istanbul ignore next */timerFunc=function(){setTimeout(nextTickHandler,0);};}return function queueNextTick(cb,ctx){var _resolve;callbacks.push(function(){if(cb){cb.call(ctx);}if(_resolve){_resolve(ctx);}});if(!pending){pending=true;timerFunc();}if(!cb&&typeof Promise!=='undefined'){return new Promise(function(resolve){_resolve=resolve;});}};}();var _Set;/* istanbul ignore if */if(typeof Set!=='undefined'&&isNative(Set)){// use native Set when available.
	_Set=Set;}else{// a non-standard Set polyfill that only works with primitive keys.
	_Set=function(){function Set(){this.set=Object.create(null);}Set.prototype.has=function has(key){return this.set[key]===true;};Set.prototype.add=function add(key){this.set[key]=true;};Set.prototype.clear=function clear(){this.set=Object.create(null);};return Set;}();}var warn=noop;var formatComponentName;{var hasConsole=typeof console!=='undefined';warn=function(msg,vm){if(hasConsole&&!config.silent){console.error("[Vue warn]: "+msg+" "+(vm?formatLocation(formatComponentName(vm)):''));}};formatComponentName=function(vm){if(vm.$root===vm){return'root instance';}var name=vm._isVue?vm.$options.name||vm.$options._componentTag:vm.name;return(name?"component <"+name+">":"anonymous component")+(vm._isVue&&vm.$options.__file?" at "+vm.$options.__file:'');};var formatLocation=function(str){if(str==='anonymous component'){str+=" - use the \"name\" option for better debugging messages.";}return"\n(found in "+str+")";};}/*  */var uid$1=0;/**
	 * A dep is an observable that can have multiple
	 * directives subscribing to it.
	 */var Dep=function Dep(){this.id=uid$1++;this.subs=[];};Dep.prototype.addSub=function addSub(sub){this.subs.push(sub);};Dep.prototype.removeSub=function removeSub(sub){remove$1(this.subs,sub);};Dep.prototype.depend=function depend(){if(Dep.target){Dep.target.addDep(this);}};Dep.prototype.notify=function notify(){// stablize the subscriber list first
	var subs=this.subs.slice();for(var i=0,l=subs.length;i<l;i++){subs[i].update();}};// the current target watcher being evaluated.
	// this is globally unique because there could be only one
	// watcher being evaluated at any time.
	Dep.target=null;var targetStack=[];function pushTarget(_target){if(Dep.target){targetStack.push(Dep.target);}Dep.target=_target;}function popTarget(){Dep.target=targetStack.pop();}/*
	 * not type checking this file because flow doesn't play well with
	 * dynamically accessing methods on Array prototype
	 */var arrayProto=Array.prototype;var arrayMethods=Object.create(arrayProto);['push','pop','shift','unshift','splice','sort','reverse'].forEach(function(method){// cache original method
	var original=arrayProto[method];def(arrayMethods,method,function mutator(){var arguments$1=arguments;// avoid leaking arguments:
	// http://jsperf.com/closure-with-arguments
	var i=arguments.length;var args=new Array(i);while(i--){args[i]=arguments$1[i];}var result=original.apply(this,args);var ob=this.__ob__;var inserted;switch(method){case'push':inserted=args;break;case'unshift':inserted=args;break;case'splice':inserted=args.slice(2);break;}if(inserted){ob.observeArray(inserted);}// notify change
	ob.dep.notify();return result;});});/*  */var arrayKeys=Object.getOwnPropertyNames(arrayMethods);/**
	 * By default, when a reactive property is set, the new value is
	 * also converted to become reactive. However when passing down props,
	 * we don't want to force conversion because the value may be a nested value
	 * under a frozen data structure. Converting it would defeat the optimization.
	 */var observerState={shouldConvert:true,isSettingProps:false};/**
	 * Observer class that are attached to each observed
	 * object. Once attached, the observer converts target
	 * object's property keys into getter/setters that
	 * collect dependencies and dispatches updates.
	 */var Observer=function Observer(value){this.value=value;this.dep=new Dep();this.vmCount=0;def(value,'__ob__',this);if(Array.isArray(value)){var augment=hasProto?protoAugment:copyAugment;augment(value,arrayMethods,arrayKeys);this.observeArray(value);}else{this.walk(value);}};/**
	 * Walk through each property and convert them into
	 * getter/setters. This method should only be called when
	 * value type is Object.
	 */Observer.prototype.walk=function walk(obj){var keys=Object.keys(obj);for(var i=0;i<keys.length;i++){defineReactive$$1(obj,keys[i],obj[keys[i]]);}};/**
	 * Observe a list of Array items.
	 */Observer.prototype.observeArray=function observeArray(items){for(var i=0,l=items.length;i<l;i++){observe(items[i]);}};// helpers
	/**
	 * Augment an target Object or Array by intercepting
	 * the prototype chain using __proto__
	 */function protoAugment(target,src){/* eslint-disable no-proto */target.__proto__=src;/* eslint-enable no-proto */}/**
	 * Augment an target Object or Array by defining
	 * hidden properties.
	 *//* istanbul ignore next */function copyAugment(target,src,keys){for(var i=0,l=keys.length;i<l;i++){var key=keys[i];def(target,key,src[key]);}}/**
	 * Attempt to create an observer instance for a value,
	 * returns the new observer if successfully observed,
	 * or the existing observer if the value already has one.
	 */function observe(value,asRootData){if(!isObject(value)){return;}var ob;if(hasOwn(value,'__ob__')&&value.__ob__ instanceof Observer){ob=value.__ob__;}else if(observerState.shouldConvert&&!isServerRendering()&&(Array.isArray(value)||isPlainObject(value))&&Object.isExtensible(value)&&!value._isVue){ob=new Observer(value);}if(asRootData&&ob){ob.vmCount++;}return ob;}/**
	 * Define a reactive property on an Object.
	 */function defineReactive$$1(obj,key,val,customSetter){var dep=new Dep();var property=Object.getOwnPropertyDescriptor(obj,key);if(property&&property.configurable===false){return;}// cater for pre-defined getter/setters
	var getter=property&&property.get;var setter=property&&property.set;var childOb=observe(val);Object.defineProperty(obj,key,{enumerable:true,configurable:true,get:function reactiveGetter(){var value=getter?getter.call(obj):val;if(Dep.target){dep.depend();if(childOb){childOb.dep.depend();}if(Array.isArray(value)){dependArray(value);}}return value;},set:function reactiveSetter(newVal){var value=getter?getter.call(obj):val;/* eslint-disable no-self-compare */if(newVal===value||newVal!==newVal&&value!==value){return;}/* eslint-enable no-self-compare */if("development"!=='production'&&customSetter){customSetter();}if(setter){setter.call(obj,newVal);}else{val=newVal;}childOb=observe(newVal);dep.notify();}});}/**
	 * Set a property on an object. Adds the new property and
	 * triggers change notification if the property doesn't
	 * already exist.
	 */function set$1(obj,key,val){if(Array.isArray(obj)){obj.length=Math.max(obj.length,key);obj.splice(key,1,val);return val;}if(hasOwn(obj,key)){obj[key]=val;return;}var ob=obj.__ob__;if(obj._isVue||ob&&ob.vmCount){"development"!=='production'&&warn('Avoid adding reactive properties to a Vue instance or its root $data '+'at runtime - declare it upfront in the data option.');return;}if(!ob){obj[key]=val;return;}defineReactive$$1(ob.value,key,val);ob.dep.notify();return val;}/**
	 * Delete a property and trigger change if necessary.
	 */function del(obj,key){var ob=obj.__ob__;if(obj._isVue||ob&&ob.vmCount){"development"!=='production'&&warn('Avoid deleting properties on a Vue instance or its root $data '+'- just set it to null.');return;}if(!hasOwn(obj,key)){return;}delete obj[key];if(!ob){return;}ob.dep.notify();}/**
	 * Collect dependencies on array elements when the array is touched, since
	 * we cannot intercept array element access like property getters.
	 */function dependArray(value){for(var e=void 0,i=0,l=value.length;i<l;i++){e=value[i];e&&e.__ob__&&e.__ob__.dep.depend();if(Array.isArray(e)){dependArray(e);}}}/*  *//**
	 * Option overwriting strategies are functions that handle
	 * how to merge a parent option value and a child option
	 * value into the final value.
	 */var strats=config.optionMergeStrategies;/**
	 * Options with restrictions
	 */{strats.el=strats.propsData=function(parent,child,vm,key){if(!vm){warn("option \""+key+"\" can only be used during instance "+'creation with the `new` keyword.');}return defaultStrat(parent,child);};}/**
	 * Helper that recursively merges two data objects together.
	 */function mergeData(to,from){if(!from){return to;}var key,toVal,fromVal;var keys=Object.keys(from);for(var i=0;i<keys.length;i++){key=keys[i];toVal=to[key];fromVal=from[key];if(!hasOwn(to,key)){set$1(to,key,fromVal);}else if(isPlainObject(toVal)&&isPlainObject(fromVal)){mergeData(toVal,fromVal);}}return to;}/**
	 * Data
	 */strats.data=function(parentVal,childVal,vm){if(!vm){// in a Vue.extend merge, both should be functions
	if(!childVal){return parentVal;}if(typeof childVal!=='function'){"development"!=='production'&&warn('The "data" option should be a function '+'that returns a per-instance value in component '+'definitions.',vm);return parentVal;}if(!parentVal){return childVal;}// when parentVal & childVal are both present,
	// we need to return a function that returns the
	// merged result of both functions... no need to
	// check if parentVal is a function here because
	// it has to be a function to pass previous merges.
	return function mergedDataFn(){return mergeData(childVal.call(this),parentVal.call(this));};}else if(parentVal||childVal){return function mergedInstanceDataFn(){// instance merge
	var instanceData=typeof childVal==='function'?childVal.call(vm):childVal;var defaultData=typeof parentVal==='function'?parentVal.call(vm):undefined;if(instanceData){return mergeData(instanceData,defaultData);}else{return defaultData;}};}};/**
	 * Hooks and param attributes are merged as arrays.
	 */function mergeHook(parentVal,childVal){return childVal?parentVal?parentVal.concat(childVal):Array.isArray(childVal)?childVal:[childVal]:parentVal;}config._lifecycleHooks.forEach(function(hook){strats[hook]=mergeHook;});/**
	 * Assets
	 *
	 * When a vm is present (instance creation), we need to do
	 * a three-way merge between constructor options, instance
	 * options and parent options.
	 */function mergeAssets(parentVal,childVal){var res=Object.create(parentVal||null);return childVal?extend(res,childVal):res;}config._assetTypes.forEach(function(type){strats[type+'s']=mergeAssets;});/**
	 * Watchers.
	 *
	 * Watchers hashes should not overwrite one
	 * another, so we merge them as arrays.
	 */strats.watch=function(parentVal,childVal){/* istanbul ignore if */if(!childVal){return parentVal;}if(!parentVal){return childVal;}var ret={};extend(ret,parentVal);for(var key in childVal){var parent=ret[key];var child=childVal[key];if(parent&&!Array.isArray(parent)){parent=[parent];}ret[key]=parent?parent.concat(child):[child];}return ret;};/**
	 * Other object hashes.
	 */strats.props=strats.methods=strats.computed=function(parentVal,childVal){if(!childVal){return parentVal;}if(!parentVal){return childVal;}var ret=Object.create(null);extend(ret,parentVal);extend(ret,childVal);return ret;};/**
	 * Default strategy.
	 */var defaultStrat=function(parentVal,childVal){return childVal===undefined?parentVal:childVal;};/**
	 * Validate component names
	 */function checkComponents(options){for(var key in options.components){var lower=key.toLowerCase();if(isBuiltInTag(lower)||config.isReservedTag(lower)){warn('Do not use built-in or reserved HTML elements as component '+'id: '+key);}}}/**
	 * Ensure all props option syntax are normalized into the
	 * Object-based format.
	 */function normalizeProps(options){var props=options.props;if(!props){return;}var res={};var i,val,name;if(Array.isArray(props)){i=props.length;while(i--){val=props[i];if(typeof val==='string'){name=camelize(val);res[name]={type:null};}else{warn('props must be strings when using array syntax.');}}}else if(isPlainObject(props)){for(var key in props){val=props[key];name=camelize(key);res[name]=isPlainObject(val)?val:{type:val};}}options.props=res;}/**
	 * Normalize raw function directives into object format.
	 */function normalizeDirectives(options){var dirs=options.directives;if(dirs){for(var key in dirs){var def=dirs[key];if(typeof def==='function'){dirs[key]={bind:def,update:def};}}}}/**
	 * Merge two option objects into a new one.
	 * Core utility used in both instantiation and inheritance.
	 */function mergeOptions(parent,child,vm){{checkComponents(child);}normalizeProps(child);normalizeDirectives(child);var extendsFrom=child.extends;if(extendsFrom){parent=typeof extendsFrom==='function'?mergeOptions(parent,extendsFrom.options,vm):mergeOptions(parent,extendsFrom,vm);}if(child.mixins){for(var i=0,l=child.mixins.length;i<l;i++){var mixin=child.mixins[i];if(mixin.prototype instanceof Vue$3){mixin=mixin.options;}parent=mergeOptions(parent,mixin,vm);}}var options={};var key;for(key in parent){mergeField(key);}for(key in child){if(!hasOwn(parent,key)){mergeField(key);}}function mergeField(key){var strat=strats[key]||defaultStrat;options[key]=strat(parent[key],child[key],vm,key);}return options;}/**
	 * Resolve an asset.
	 * This function is used because child instances need access
	 * to assets defined in its ancestor chain.
	 */function resolveAsset(options,type,id,warnMissing){/* istanbul ignore if */if(typeof id!=='string'){return;}var assets=options[type];// check local registration variations first
	if(hasOwn(assets,id)){return assets[id];}var camelizedId=camelize(id);if(hasOwn(assets,camelizedId)){return assets[camelizedId];}var PascalCaseId=capitalize(camelizedId);if(hasOwn(assets,PascalCaseId)){return assets[PascalCaseId];}// fallback to prototype chain
	var res=assets[id]||assets[camelizedId]||assets[PascalCaseId];if("development"!=='production'&&warnMissing&&!res){warn('Failed to resolve '+type.slice(0,-1)+': '+id,options);}return res;}/*  */function validateProp(key,propOptions,propsData,vm){var prop=propOptions[key];var absent=!hasOwn(propsData,key);var value=propsData[key];// handle boolean props
	if(isType(Boolean,prop.type)){if(absent&&!hasOwn(prop,'default')){value=false;}else if(!isType(String,prop.type)&&(value===''||value===hyphenate(key))){value=true;}}// check default value
	if(value===undefined){value=getPropDefaultValue(vm,prop,key);// since the default value is a fresh copy,
	// make sure to observe it.
	var prevShouldConvert=observerState.shouldConvert;observerState.shouldConvert=true;observe(value);observerState.shouldConvert=prevShouldConvert;}{assertProp(prop,key,value,vm,absent);}return value;}/**
	 * Get the default value of a prop.
	 */function getPropDefaultValue(vm,prop,key){// no default, return undefined
	if(!hasOwn(prop,'default')){return undefined;}var def=prop.default;// warn against non-factory defaults for Object & Array
	if(isObject(def)){"development"!=='production'&&warn('Invalid default value for prop "'+key+'": '+'Props with type Object/Array must use a factory function '+'to return the default value.',vm);}// the raw prop value was also undefined from previous render,
	// return previous default value to avoid unnecessary watcher trigger
	if(vm&&vm.$options.propsData&&vm.$options.propsData[key]===undefined&&vm[key]!==undefined){return vm[key];}// call factory function for non-Function types
	return typeof def==='function'&&prop.type!==Function?def.call(vm):def;}/**
	 * Assert whether a prop is valid.
	 */function assertProp(prop,name,value,vm,absent){if(prop.required&&absent){warn('Missing required prop: "'+name+'"',vm);return;}if(value==null&&!prop.required){return;}var type=prop.type;var valid=!type||type===true;var expectedTypes=[];if(type){if(!Array.isArray(type)){type=[type];}for(var i=0;i<type.length&&!valid;i++){var assertedType=assertType(value,type[i]);expectedTypes.push(assertedType.expectedType||'');valid=assertedType.valid;}}if(!valid){warn('Invalid prop: type check failed for prop "'+name+'".'+' Expected '+expectedTypes.map(capitalize).join(', ')+', got '+Object.prototype.toString.call(value).slice(8,-1)+'.',vm);return;}var validator=prop.validator;if(validator){if(!validator(value)){warn('Invalid prop: custom validator check failed for prop "'+name+'".',vm);}}}/**
	 * Assert the type of a value
	 */function assertType(value,type){var valid;var expectedType=getType(type);if(expectedType==='String'){valid=typeof value===(expectedType='string');}else if(expectedType==='Number'){valid=typeof value===(expectedType='number');}else if(expectedType==='Boolean'){valid=typeof value===(expectedType='boolean');}else if(expectedType==='Function'){valid=typeof value===(expectedType='function');}else if(expectedType==='Object'){valid=isPlainObject(value);}else if(expectedType==='Array'){valid=Array.isArray(value);}else{valid=value instanceof type;}return{valid:valid,expectedType:expectedType};}/**
	 * Use function string name to check built-in types,
	 * because a simple equality check will fail when running
	 * across different vms / iframes.
	 */function getType(fn){var match=fn&&fn.toString().match(/^\s*function (\w+)/);return match&&match[1];}function isType(type,fn){if(!Array.isArray(fn)){return getType(fn)===getType(type);}for(var i=0,len=fn.length;i<len;i++){if(getType(fn[i])===getType(type)){return true;}}/* istanbul ignore next */return false;}var util=Object.freeze({defineReactive:defineReactive$$1,_toString:_toString,toNumber:toNumber,makeMap:makeMap,isBuiltInTag:isBuiltInTag,remove:remove$1,hasOwn:hasOwn,isPrimitive:isPrimitive,cached:cached,camelize:camelize,capitalize:capitalize,hyphenate:hyphenate,bind:bind$1,toArray:toArray,extend:extend,isObject:isObject,isPlainObject:isPlainObject,toObject:toObject,noop:noop,no:no,identity:identity,genStaticKeys:genStaticKeys,looseEqual:looseEqual,looseIndexOf:looseIndexOf,isReserved:isReserved,def:def,parsePath:parsePath,hasProto:hasProto,inBrowser:inBrowser,UA:UA,isIE:isIE,isIE9:isIE9,isEdge:isEdge,isAndroid:isAndroid,isIOS:isIOS,isServerRendering:isServerRendering,devtools:devtools,nextTick:nextTick,get _Set(){return _Set;},mergeOptions:mergeOptions,resolveAsset:resolveAsset,get warn(){return warn;},get formatComponentName(){return formatComponentName;},validateProp:validateProp});/* not type checking this file because flow doesn't play well with Proxy */var initProxy;{var allowedGlobals=makeMap('Infinity,undefined,NaN,isFinite,isNaN,'+'parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,'+'Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,'+'require'// for Webpack/Browserify
	);var warnNonPresent=function(target,key){warn("Property or method \""+key+"\" is not defined on the instance but "+"referenced during render. Make sure to declare reactive data "+"properties in the data option.",target);};var hasProxy=typeof Proxy!=='undefined'&&Proxy.toString().match(/native code/);if(hasProxy){var isBuiltInModifier=makeMap('stop,prevent,self,ctrl,shift,alt,meta');config.keyCodes=new Proxy(config.keyCodes,{set:function set(target,key,value){if(isBuiltInModifier(key)){warn("Avoid overwriting built-in modifier in config.keyCodes: ."+key);return false;}else{target[key]=value;return true;}}});}var hasHandler={has:function has(target,key){var has=key in target;var isAllowed=allowedGlobals(key)||key.charAt(0)==='_';if(!has&&!isAllowed){warnNonPresent(target,key);}return has||!isAllowed;}};var getHandler={get:function get(target,key){if(typeof key==='string'&&!(key in target)){warnNonPresent(target,key);}return target[key];}};initProxy=function initProxy(vm){if(hasProxy){// determine which proxy handler to use
	var options=vm.$options;var handlers=options.render&&options.render._withStripped?getHandler:hasHandler;vm._renderProxy=new Proxy(vm,handlers);}else{vm._renderProxy=vm;}};}/*  */var VNode=function VNode(tag,data,children,text,elm,context,componentOptions){this.tag=tag;this.data=data;this.children=children;this.text=text;this.elm=elm;this.ns=undefined;this.context=context;this.functionalContext=undefined;this.key=data&&data.key;this.componentOptions=componentOptions;this.componentInstance=undefined;this.parent=undefined;this.raw=false;this.isStatic=false;this.isRootInsert=true;this.isComment=false;this.isCloned=false;this.isOnce=false;};var prototypeAccessors={child:{}};// DEPRECATED: alias for componentInstance for backwards compat.
	/* istanbul ignore next */prototypeAccessors.child.get=function(){return this.componentInstance;};Object.defineProperties(VNode.prototype,prototypeAccessors);var createEmptyVNode=function(){var node=new VNode();node.text='';node.isComment=true;return node;};function createTextVNode(val){return new VNode(undefined,undefined,undefined,String(val));}// optimized shallow clone
	// used for static nodes and slot nodes because they may be reused across
	// multiple renders, cloning them avoids errors when DOM manipulations rely
	// on their elm reference.
	function cloneVNode(vnode){var cloned=new VNode(vnode.tag,vnode.data,vnode.children,vnode.text,vnode.elm,vnode.context,vnode.componentOptions);cloned.ns=vnode.ns;cloned.isStatic=vnode.isStatic;cloned.key=vnode.key;cloned.isCloned=true;return cloned;}function cloneVNodes(vnodes){var res=new Array(vnodes.length);for(var i=0;i<vnodes.length;i++){res[i]=cloneVNode(vnodes[i]);}return res;}/*  */var hooks={init:init,prepatch:prepatch,insert:insert,destroy:destroy$1};var hooksToMerge=Object.keys(hooks);function createComponent(Ctor,data,context,children,tag){if(!Ctor){return;}var baseCtor=context.$options._base;if(isObject(Ctor)){Ctor=baseCtor.extend(Ctor);}if(typeof Ctor!=='function'){{warn("Invalid Component definition: "+String(Ctor),context);}return;}// async component
	if(!Ctor.cid){if(Ctor.resolved){Ctor=Ctor.resolved;}else{Ctor=resolveAsyncComponent(Ctor,baseCtor,function(){// it's ok to queue this on every render because
	// $forceUpdate is buffered by the scheduler.
	context.$forceUpdate();});if(!Ctor){// return nothing if this is indeed an async component
	// wait for the callback to trigger parent update.
	return;}}}// resolve constructor options in case global mixins are applied after
	// component constructor creation
	resolveConstructorOptions(Ctor);data=data||{};// extract props
	var propsData=extractProps(data,Ctor);// functional component
	if(Ctor.options.functional){return createFunctionalComponent(Ctor,propsData,data,context,children);}// extract listeners, since these needs to be treated as
	// child component listeners instead of DOM listeners
	var listeners=data.on;// replace with listeners with .native modifier
	data.on=data.nativeOn;if(Ctor.options.abstract){// abstract components do not keep anything
	// other than props & listeners
	data={};}// merge component management hooks onto the placeholder node
	mergeHooks(data);// return a placeholder vnode
	var name=Ctor.options.name||tag;var vnode=new VNode("vue-component-"+Ctor.cid+(name?"-"+name:''),data,undefined,undefined,undefined,context,{Ctor:Ctor,propsData:propsData,listeners:listeners,tag:tag,children:children});return vnode;}function createFunctionalComponent(Ctor,propsData,data,context,children){var props={};var propOptions=Ctor.options.props;if(propOptions){for(var key in propOptions){props[key]=validateProp(key,propOptions,propsData);}}// ensure the createElement function in functional components
	// gets a unique context - this is necessary for correct named slot check
	var _context=Object.create(context);var h=function(a,b,c,d){return createElement(_context,a,b,c,d,true);};var vnode=Ctor.options.render.call(null,h,{props:props,data:data,parent:context,children:children,slots:function(){return resolveSlots(children,context);}});if(vnode instanceof VNode){vnode.functionalContext=context;if(data.slot){(vnode.data||(vnode.data={})).slot=data.slot;}}return vnode;}function createComponentInstanceForVnode(vnode,// we know it's MountedComponentVNode but flow doesn't
	parent,// activeInstance in lifecycle state
	parentElm,refElm){var vnodeComponentOptions=vnode.componentOptions;var options={_isComponent:true,parent:parent,propsData:vnodeComponentOptions.propsData,_componentTag:vnodeComponentOptions.tag,_parentVnode:vnode,_parentListeners:vnodeComponentOptions.listeners,_renderChildren:vnodeComponentOptions.children,_parentElm:parentElm||null,_refElm:refElm||null};// check inline-template render functions
	var inlineTemplate=vnode.data.inlineTemplate;if(inlineTemplate){options.render=inlineTemplate.render;options.staticRenderFns=inlineTemplate.staticRenderFns;}return new vnodeComponentOptions.Ctor(options);}function init(vnode,hydrating,parentElm,refElm){if(!vnode.componentInstance||vnode.componentInstance._isDestroyed){var child=vnode.componentInstance=createComponentInstanceForVnode(vnode,activeInstance,parentElm,refElm);child.$mount(hydrating?vnode.elm:undefined,hydrating);}else if(vnode.data.keepAlive){// kept-alive components, treat as a patch
	var mountedNode=vnode;// work around flow
	prepatch(mountedNode,mountedNode);}}function prepatch(oldVnode,vnode){var options=vnode.componentOptions;var child=vnode.componentInstance=oldVnode.componentInstance;child._updateFromParent(options.propsData,// updated props
	options.listeners,// updated listeners
	vnode,// new parent vnode
	options.children// new children
	);}function insert(vnode){if(!vnode.componentInstance._isMounted){vnode.componentInstance._isMounted=true;callHook(vnode.componentInstance,'mounted');}if(vnode.data.keepAlive){vnode.componentInstance._inactive=false;callHook(vnode.componentInstance,'activated');}}function destroy$1(vnode){if(!vnode.componentInstance._isDestroyed){if(!vnode.data.keepAlive){vnode.componentInstance.$destroy();}else{vnode.componentInstance._inactive=true;callHook(vnode.componentInstance,'deactivated');}}}function resolveAsyncComponent(factory,baseCtor,cb){if(factory.requested){// pool callbacks
	factory.pendingCallbacks.push(cb);}else{factory.requested=true;var cbs=factory.pendingCallbacks=[cb];var sync=true;var resolve=function(res){if(isObject(res)){res=baseCtor.extend(res);}// cache resolved
	factory.resolved=res;// invoke callbacks only if this is not a synchronous resolve
	// (async resolves are shimmed as synchronous during SSR)
	if(!sync){for(var i=0,l=cbs.length;i<l;i++){cbs[i](res);}}};var reject=function(reason){"development"!=='production'&&warn("Failed to resolve async component: "+String(factory)+(reason?"\nReason: "+reason:''));};var res=factory(resolve,reject);// handle promise
	if(res&&typeof res.then==='function'&&!factory.resolved){res.then(resolve,reject);}sync=false;// return in case resolved synchronously
	return factory.resolved;}}function extractProps(data,Ctor){// we are only extracting raw values here.
	// validation and default values are handled in the child
	// component itself.
	var propOptions=Ctor.options.props;if(!propOptions){return;}var res={};var attrs=data.attrs;var props=data.props;var domProps=data.domProps;if(attrs||props||domProps){for(var key in propOptions){var altKey=hyphenate(key);checkProp(res,props,key,altKey,true)||checkProp(res,attrs,key,altKey)||checkProp(res,domProps,key,altKey);}}return res;}function checkProp(res,hash,key,altKey,preserve){if(hash){if(hasOwn(hash,key)){res[key]=hash[key];if(!preserve){delete hash[key];}return true;}else if(hasOwn(hash,altKey)){res[key]=hash[altKey];if(!preserve){delete hash[altKey];}return true;}}return false;}function mergeHooks(data){if(!data.hook){data.hook={};}for(var i=0;i<hooksToMerge.length;i++){var key=hooksToMerge[i];var fromParent=data.hook[key];var ours=hooks[key];data.hook[key]=fromParent?mergeHook$1(ours,fromParent):ours;}}function mergeHook$1(one,two){return function(a,b,c,d){one(a,b,c,d);two(a,b,c,d);};}/*  */function mergeVNodeHook(def,hookKey,hook,key){key=key+hookKey;var injectedHash=def.__injected||(def.__injected={});if(!injectedHash[key]){injectedHash[key]=true;var oldHook=def[hookKey];if(oldHook){def[hookKey]=function(){oldHook.apply(this,arguments);hook.apply(this,arguments);};}else{def[hookKey]=hook;}}}/*  */var normalizeEvent=cached(function(name){var once=name.charAt(0)==='~';// Prefixed last, checked first
	name=once?name.slice(1):name;var capture=name.charAt(0)==='!';name=capture?name.slice(1):name;return{name:name,once:once,capture:capture};});function createEventHandle(fn){var handle={fn:fn,invoker:function(){var arguments$1=arguments;var fn=handle.fn;if(Array.isArray(fn)){for(var i=0;i<fn.length;i++){fn[i].apply(null,arguments$1);}}else{fn.apply(null,arguments);}}};return handle;}function updateListeners(on,oldOn,add,remove$$1,vm){var name,cur,old,event;for(name in on){cur=on[name];old=oldOn[name];event=normalizeEvent(name);if(!cur){"development"!=='production'&&warn("Invalid handler for event \""+event.name+"\": got "+String(cur),vm);}else if(!old){if(!cur.invoker){cur=on[name]=createEventHandle(cur);}add(event.name,cur.invoker,event.once,event.capture);}else if(cur!==old){old.fn=cur;on[name]=old;}}for(name in oldOn){if(!on[name]){event=normalizeEvent(name);remove$$1(event.name,oldOn[name].invoker,event.capture);}}}/*  */// The template compiler attempts to minimize the need for normalization by
	// statically analyzing the template at compile time.
	//
	// For plain HTML markup, normalization can be completely skipped because the
	// generated render function is guaranteed to return Array<VNode>. There are
	// two cases where extra normalization is needed:
	// 1. When the children contains components - because a functional component
	// may return an Array instead of a single root. In this case, just a simple
	// nomralization is needed - if any child is an Array, we flatten the whole
	// thing with Array.prototype.concat. It is guaranteed to be only 1-level deep
	// because functional components already normalize their own children.
	function simpleNormalizeChildren(children){for(var i=0;i<children.length;i++){if(Array.isArray(children[i])){return Array.prototype.concat.apply([],children);}}return children;}// 2. When the children contains constrcuts that always generated nested Arrays,
	// e.g. <template>, <slot>, v-for, or when the children is provided by user
	// with hand-written render functions / JSX. In such cases a full normalization
	// is needed to cater to all possible types of children values.
	function normalizeChildren(children){return isPrimitive(children)?[createTextVNode(children)]:Array.isArray(children)?normalizeArrayChildren(children):undefined;}function normalizeArrayChildren(children,nestedIndex){var res=[];var i,c,last;for(i=0;i<children.length;i++){c=children[i];if(c==null||typeof c==='boolean'){continue;}last=res[res.length-1];//  nested
	if(Array.isArray(c)){res.push.apply(res,normalizeArrayChildren(c,(nestedIndex||'')+"_"+i));}else if(isPrimitive(c)){if(last&&last.text){last.text+=String(c);}else if(c!==''){// convert primitive to vnode
	res.push(createTextVNode(c));}}else{if(c.text&&last&&last.text){res[res.length-1]=createTextVNode(last.text+c.text);}else{// default key for nested array children (likely generated by v-for)
	if(c.tag&&c.key==null&&nestedIndex!=null){c.key="__vlist"+nestedIndex+"_"+i+"__";}res.push(c);}}}return res;}/*  */function getFirstComponentChild(children){return children&&children.filter(function(c){return c&&c.componentOptions;})[0];}/*  */var SIMPLE_NORMALIZE=1;var ALWAYS_NORMALIZE=2;// wrapper function for providing a more flexible interface
	// without getting yelled at by flow
	function createElement(context,tag,data,children,normalizationType,alwaysNormalize){if(Array.isArray(data)||isPrimitive(data)){normalizationType=children;children=data;data=undefined;}if(alwaysNormalize){normalizationType=ALWAYS_NORMALIZE;}return _createElement(context,tag,data,children,normalizationType);}function _createElement(context,tag,data,children,normalizationType){if(data&&data.__ob__){"development"!=='production'&&warn("Avoid using observed data object as vnode data: "+JSON.stringify(data)+"\n"+'Always create fresh vnode data objects in each render!',context);return createEmptyVNode();}if(!tag){// in case of component :is set to falsy value
	return createEmptyVNode();}// support single function children as default scoped slot
	if(Array.isArray(children)&&typeof children[0]==='function'){data=data||{};data.scopedSlots={default:children[0]};children.length=0;}if(normalizationType===ALWAYS_NORMALIZE){children=normalizeChildren(children);}else if(normalizationType===SIMPLE_NORMALIZE){children=simpleNormalizeChildren(children);}var vnode,ns;if(typeof tag==='string'){var Ctor;ns=config.getTagNamespace(tag);if(config.isReservedTag(tag)){// platform built-in elements
	vnode=new VNode(config.parsePlatformTagName(tag),data,children,undefined,undefined,context);}else if(Ctor=resolveAsset(context.$options,'components',tag)){// component
	vnode=createComponent(Ctor,data,context,children,tag);}else{// unknown or unlisted namespaced elements
	// check at runtime because it may get assigned a namespace when its
	// parent normalizes children
	vnode=new VNode(tag,data,children,undefined,undefined,context);}}else{// direct component options / constructor
	vnode=createComponent(tag,data,context,children);}if(vnode){if(ns){applyNS(vnode,ns);}return vnode;}else{return createEmptyVNode();}}function applyNS(vnode,ns){vnode.ns=ns;if(vnode.tag==='foreignObject'){// use default namespace inside foreignObject
	return;}if(vnode.children){for(var i=0,l=vnode.children.length;i<l;i++){var child=vnode.children[i];if(child.tag&&!child.ns){applyNS(child,ns);}}}}/*  */function initRender(vm){vm.$vnode=null;// the placeholder node in parent tree
	vm._vnode=null;// the root of the child tree
	vm._staticTrees=null;var parentVnode=vm.$options._parentVnode;var renderContext=parentVnode&&parentVnode.context;vm.$slots=resolveSlots(vm.$options._renderChildren,renderContext);vm.$scopedSlots={};// bind the createElement fn to this instance
	// so that we get proper render context inside it.
	// args order: tag, data, children, normalizationType, alwaysNormalize
	// internal version is used by render functions compiled from templates
	vm._c=function(a,b,c,d){return createElement(vm,a,b,c,d,false);};// normalization is always applied for the public version, used in
	// user-written render functions.
	vm.$createElement=function(a,b,c,d){return createElement(vm,a,b,c,d,true);};}function renderMixin(Vue){Vue.prototype.$nextTick=function(fn){return nextTick(fn,this);};Vue.prototype._render=function(){var vm=this;var ref=vm.$options;var render=ref.render;var staticRenderFns=ref.staticRenderFns;var _parentVnode=ref._parentVnode;if(vm._isMounted){// clone slot nodes on re-renders
	for(var key in vm.$slots){vm.$slots[key]=cloneVNodes(vm.$slots[key]);}}if(_parentVnode&&_parentVnode.data.scopedSlots){vm.$scopedSlots=_parentVnode.data.scopedSlots;}if(staticRenderFns&&!vm._staticTrees){vm._staticTrees=[];}// set parent vnode. this allows render functions to have access
	// to the data on the placeholder node.
	vm.$vnode=_parentVnode;// render self
	var vnode;try{vnode=render.call(vm._renderProxy,vm.$createElement);}catch(e){/* istanbul ignore else */if(config.errorHandler){config.errorHandler.call(null,e,vm);}else{{warn("Error when rendering "+formatComponentName(vm)+":");}throw e;}// return previous vnode to prevent render error causing blank component
	vnode=vm._vnode;}// return empty vnode in case the render function errored out
	if(!(vnode instanceof VNode)){if("development"!=='production'&&Array.isArray(vnode)){warn('Multiple root nodes returned from render function. Render function '+'should return a single root node.',vm);}vnode=createEmptyVNode();}// set parent
	vnode.parent=_parentVnode;return vnode;};// toString for mustaches
	Vue.prototype._s=_toString;// convert text to vnode
	Vue.prototype._v=createTextVNode;// number conversion
	Vue.prototype._n=toNumber;// empty vnode
	Vue.prototype._e=createEmptyVNode;// loose equal
	Vue.prototype._q=looseEqual;// loose indexOf
	Vue.prototype._i=looseIndexOf;// render static tree by index
	Vue.prototype._m=function renderStatic(index,isInFor){var tree=this._staticTrees[index];// if has already-rendered static tree and not inside v-for,
	// we can reuse the same tree by doing a shallow clone.
	if(tree&&!isInFor){return Array.isArray(tree)?cloneVNodes(tree):cloneVNode(tree);}// otherwise, render a fresh tree.
	tree=this._staticTrees[index]=this.$options.staticRenderFns[index].call(this._renderProxy);markStatic(tree,"__static__"+index,false);return tree;};// mark node as static (v-once)
	Vue.prototype._o=function markOnce(tree,index,key){markStatic(tree,"__once__"+index+(key?"_"+key:""),true);return tree;};function markStatic(tree,key,isOnce){if(Array.isArray(tree)){for(var i=0;i<tree.length;i++){if(tree[i]&&typeof tree[i]!=='string'){markStaticNode(tree[i],key+"_"+i,isOnce);}}}else{markStaticNode(tree,key,isOnce);}}function markStaticNode(node,key,isOnce){node.isStatic=true;node.key=key;node.isOnce=isOnce;}// filter resolution helper
	Vue.prototype._f=function resolveFilter(id){return resolveAsset(this.$options,'filters',id,true)||identity;};// render v-for
	Vue.prototype._l=function renderList(val,render){var ret,i,l,keys,key;if(Array.isArray(val)||typeof val==='string'){ret=new Array(val.length);for(i=0,l=val.length;i<l;i++){ret[i]=render(val[i],i);}}else if(typeof val==='number'){ret=new Array(val);for(i=0;i<val;i++){ret[i]=render(i+1,i);}}else if(isObject(val)){keys=Object.keys(val);ret=new Array(keys.length);for(i=0,l=keys.length;i<l;i++){key=keys[i];ret[i]=render(val[key],key,i);}}return ret;};// renderSlot
	Vue.prototype._t=function(name,fallback,props,bindObject){var scopedSlotFn=this.$scopedSlots[name];if(scopedSlotFn){// scoped slot
	props=props||{};if(bindObject){extend(props,bindObject);}return scopedSlotFn(props)||fallback;}else{var slotNodes=this.$slots[name];// warn duplicate slot usage
	if(slotNodes&&"development"!=='production'){slotNodes._rendered&&warn("Duplicate presence of slot \""+name+"\" found in the same render tree "+"- this will likely cause render errors.",this);slotNodes._rendered=true;}return slotNodes||fallback;}};// apply v-bind object
	Vue.prototype._b=function bindProps(data,tag,value,asProp){if(value){if(!isObject(value)){"development"!=='production'&&warn('v-bind without argument expects an Object or Array value',this);}else{if(Array.isArray(value)){value=toObject(value);}for(var key in value){if(key==='class'||key==='style'){data[key]=value[key];}else{var type=data.attrs&&data.attrs.type;var hash=asProp||config.mustUseProp(tag,type,key)?data.domProps||(data.domProps={}):data.attrs||(data.attrs={});hash[key]=value[key];}}}}return data;};// check v-on keyCodes
	Vue.prototype._k=function checkKeyCodes(eventKeyCode,key,builtInAlias){var keyCodes=config.keyCodes[key]||builtInAlias;if(Array.isArray(keyCodes)){return keyCodes.indexOf(eventKeyCode)===-1;}else{return keyCodes!==eventKeyCode;}};}function resolveSlots(children,context){var slots={};if(!children){return slots;}var defaultSlot=[];var name,child;for(var i=0,l=children.length;i<l;i++){child=children[i];// named slots should only be respected if the vnode was rendered in the
	// same context.
	if((child.context===context||child.functionalContext===context)&&child.data&&(name=child.data.slot)){var slot=slots[name]||(slots[name]=[]);if(child.tag==='template'){slot.push.apply(slot,child.children);}else{slot.push(child);}}else{defaultSlot.push(child);}}// ignore single whitespace
	if(defaultSlot.length&&!(defaultSlot.length===1&&(defaultSlot[0].text===' '||defaultSlot[0].isComment))){slots.default=defaultSlot;}return slots;}/*  */function initEvents(vm){vm._events=Object.create(null);vm._hasHookEvent=false;// init parent attached events
	var listeners=vm.$options._parentListeners;if(listeners){updateComponentListeners(vm,listeners);}}var target;function add$1(event,fn,once){if(once){target.$once(event,fn);}else{target.$on(event,fn);}}function remove$2(event,fn){target.$off(event,fn);}function updateComponentListeners(vm,listeners,oldListeners){target=vm;updateListeners(listeners,oldListeners||{},add$1,remove$2,vm);}function eventsMixin(Vue){var hookRE=/^hook:/;Vue.prototype.$on=function(event,fn){var vm=this;(vm._events[event]||(vm._events[event]=[])).push(fn);// optimize hook:event cost by using a boolean flag marked at registration
	// instead of a hash lookup
	if(hookRE.test(event)){vm._hasHookEvent=true;}return vm;};Vue.prototype.$once=function(event,fn){var vm=this;function on(){vm.$off(event,on);fn.apply(vm,arguments);}on.fn=fn;vm.$on(event,on);return vm;};Vue.prototype.$off=function(event,fn){var vm=this;// all
	if(!arguments.length){vm._events=Object.create(null);return vm;}// specific event
	var cbs=vm._events[event];if(!cbs){return vm;}if(arguments.length===1){vm._events[event]=null;return vm;}// specific handler
	var cb;var i=cbs.length;while(i--){cb=cbs[i];if(cb===fn||cb.fn===fn){cbs.splice(i,1);break;}}return vm;};Vue.prototype.$emit=function(event){var vm=this;var cbs=vm._events[event];if(cbs){cbs=cbs.length>1?toArray(cbs):cbs;var args=toArray(arguments,1);for(var i=0,l=cbs.length;i<l;i++){cbs[i].apply(vm,args);}}return vm;};}/*  */var activeInstance=null;function initLifecycle(vm){var options=vm.$options;// locate first non-abstract parent
	var parent=options.parent;if(parent&&!options.abstract){while(parent.$options.abstract&&parent.$parent){parent=parent.$parent;}parent.$children.push(vm);}vm.$parent=parent;vm.$root=parent?parent.$root:vm;vm.$children=[];vm.$refs={};vm._watcher=null;vm._inactive=false;vm._isMounted=false;vm._isDestroyed=false;vm._isBeingDestroyed=false;}function lifecycleMixin(Vue){Vue.prototype._mount=function(el,hydrating){var vm=this;vm.$el=el;if(!vm.$options.render){vm.$options.render=createEmptyVNode;{/* istanbul ignore if */if(vm.$options.template&&vm.$options.template.charAt(0)!=='#'){warn('You are using the runtime-only build of Vue where the template '+'option is not available. Either pre-compile the templates into '+'render functions, or use the compiler-included build.',vm);}else{warn('Failed to mount component: template or render function not defined.',vm);}}}callHook(vm,'beforeMount');vm._watcher=new Watcher(vm,function updateComponent(){vm._update(vm._render(),hydrating);},noop);hydrating=false;// manually mounted instance, call mounted on self
	// mounted is called for render-created child components in its inserted hook
	if(vm.$vnode==null){vm._isMounted=true;callHook(vm,'mounted');}return vm;};Vue.prototype._update=function(vnode,hydrating){var vm=this;if(vm._isMounted){callHook(vm,'beforeUpdate');}var prevEl=vm.$el;var prevVnode=vm._vnode;var prevActiveInstance=activeInstance;activeInstance=vm;vm._vnode=vnode;// Vue.prototype.__patch__ is injected in entry points
	// based on the rendering backend used.
	if(!prevVnode){// initial render
	vm.$el=vm.__patch__(vm.$el,vnode,hydrating,false/* removeOnly */,vm.$options._parentElm,vm.$options._refElm);}else{// updates
	vm.$el=vm.__patch__(prevVnode,vnode);}activeInstance=prevActiveInstance;// update __vue__ reference
	if(prevEl){prevEl.__vue__=null;}if(vm.$el){vm.$el.__vue__=vm;}// if parent is an HOC, update its $el as well
	if(vm.$vnode&&vm.$parent&&vm.$vnode===vm.$parent._vnode){vm.$parent.$el=vm.$el;}// updated hook is called by the scheduler to ensure that children are
	// updated in a parent's updated hook.
	};Vue.prototype._updateFromParent=function(propsData,listeners,parentVnode,renderChildren){var vm=this;var hasChildren=!!(vm.$options._renderChildren||renderChildren);vm.$options._parentVnode=parentVnode;vm.$vnode=parentVnode;// update vm's placeholder node without re-render
	if(vm._vnode){// update child tree's parent
	vm._vnode.parent=parentVnode;}vm.$options._renderChildren=renderChildren;// update props
	if(propsData&&vm.$options.props){observerState.shouldConvert=false;{observerState.isSettingProps=true;}var propKeys=vm.$options._propKeys||[];for(var i=0;i<propKeys.length;i++){var key=propKeys[i];vm[key]=validateProp(key,vm.$options.props,propsData,vm);}observerState.shouldConvert=true;{observerState.isSettingProps=false;}vm.$options.propsData=propsData;}// update listeners
	if(listeners){var oldListeners=vm.$options._parentListeners;vm.$options._parentListeners=listeners;updateComponentListeners(vm,listeners,oldListeners);}// resolve slots + force update if has children
	if(hasChildren){vm.$slots=resolveSlots(renderChildren,parentVnode.context);vm.$forceUpdate();}};Vue.prototype.$forceUpdate=function(){var vm=this;if(vm._watcher){vm._watcher.update();}};Vue.prototype.$destroy=function(){var vm=this;if(vm._isBeingDestroyed){return;}callHook(vm,'beforeDestroy');vm._isBeingDestroyed=true;// remove self from parent
	var parent=vm.$parent;if(parent&&!parent._isBeingDestroyed&&!vm.$options.abstract){remove$1(parent.$children,vm);}// teardown watchers
	if(vm._watcher){vm._watcher.teardown();}var i=vm._watchers.length;while(i--){vm._watchers[i].teardown();}// remove reference from data ob
	// frozen object may not have observer.
	if(vm._data.__ob__){vm._data.__ob__.vmCount--;}// call the last hook...
	vm._isDestroyed=true;callHook(vm,'destroyed');// turn off all instance listeners.
	vm.$off();// remove __vue__ reference
	if(vm.$el){vm.$el.__vue__=null;}// invoke destroy hooks on current rendered tree
	vm.__patch__(vm._vnode,null);};}function callHook(vm,hook){var handlers=vm.$options[hook];if(handlers){for(var i=0,j=handlers.length;i<j;i++){handlers[i].call(vm);}}if(vm._hasHookEvent){vm.$emit('hook:'+hook);}}/*  */var queue=[];var has$1={};var circular={};var waiting=false;var flushing=false;var index=0;/**
	 * Reset the scheduler's state.
	 */function resetSchedulerState(){queue.length=0;has$1={};{circular={};}waiting=flushing=false;}/**
	 * Flush both queues and run the watchers.
	 */function flushSchedulerQueue(){flushing=true;var watcher,id,vm;// Sort queue before flush.
	// This ensures that:
	// 1. Components are updated from parent to child. (because parent is always
	//    created before the child)
	// 2. A component's user watchers are run before its render watcher (because
	//    user watchers are created before the render watcher)
	// 3. If a component is destroyed during a parent component's watcher run,
	//    its watchers can be skipped.
	queue.sort(function(a,b){return a.id-b.id;});// do not cache length because more watchers might be pushed
	// as we run existing watchers
	for(index=0;index<queue.length;index++){watcher=queue[index];id=watcher.id;has$1[id]=null;watcher.run();// in dev build, check and stop circular updates.
	if("development"!=='production'&&has$1[id]!=null){circular[id]=(circular[id]||0)+1;if(circular[id]>config._maxUpdateCount){warn('You may have an infinite update loop '+(watcher.user?"in watcher with expression \""+watcher.expression+"\"":"in a component render function."),watcher.vm);break;}}}// call updated hooks
	index=queue.length;while(index--){watcher=queue[index];vm=watcher.vm;if(vm._watcher===watcher&&vm._isMounted){callHook(vm,'updated');}}// devtool hook
	/* istanbul ignore if */if(devtools&&config.devtools){devtools.emit('flush');}resetSchedulerState();}/**
	 * Push a watcher into the watcher queue.
	 * Jobs with duplicate IDs will be skipped unless it's
	 * pushed when the queue is being flushed.
	 */function queueWatcher(watcher){var id=watcher.id;if(has$1[id]==null){has$1[id]=true;if(!flushing){queue.push(watcher);}else{// if already flushing, splice the watcher based on its id
	// if already past its id, it will be run next immediately.
	var i=queue.length-1;while(i>=0&&queue[i].id>watcher.id){i--;}queue.splice(Math.max(i,index)+1,0,watcher);}// queue the flush
	if(!waiting){waiting=true;nextTick(flushSchedulerQueue);}}}/*  */var uid$2=0;/**
	 * A watcher parses an expression, collects dependencies,
	 * and fires callback when the expression value changes.
	 * This is used for both the $watch() api and directives.
	 */var Watcher=function Watcher(vm,expOrFn,cb,options){this.vm=vm;vm._watchers.push(this);// options
	if(options){this.deep=!!options.deep;this.user=!!options.user;this.lazy=!!options.lazy;this.sync=!!options.sync;}else{this.deep=this.user=this.lazy=this.sync=false;}this.cb=cb;this.id=++uid$2;// uid for batching
	this.active=true;this.dirty=this.lazy;// for lazy watchers
	this.deps=[];this.newDeps=[];this.depIds=new _Set();this.newDepIds=new _Set();this.expression=expOrFn.toString();// parse expression for getter
	if(typeof expOrFn==='function'){this.getter=expOrFn;}else{this.getter=parsePath(expOrFn);if(!this.getter){this.getter=function(){};"development"!=='production'&&warn("Failed watching path: \""+expOrFn+"\" "+'Watcher only accepts simple dot-delimited paths. '+'For full control, use a function instead.',vm);}}this.value=this.lazy?undefined:this.get();};/**
	 * Evaluate the getter, and re-collect dependencies.
	 */Watcher.prototype.get=function get(){pushTarget(this);var value=this.getter.call(this.vm,this.vm);// "touch" every property so they are all tracked as
	// dependencies for deep watching
	if(this.deep){traverse(value);}popTarget();this.cleanupDeps();return value;};/**
	 * Add a dependency to this directive.
	 */Watcher.prototype.addDep=function addDep(dep){var id=dep.id;if(!this.newDepIds.has(id)){this.newDepIds.add(id);this.newDeps.push(dep);if(!this.depIds.has(id)){dep.addSub(this);}}};/**
	 * Clean up for dependency collection.
	 */Watcher.prototype.cleanupDeps=function cleanupDeps(){var this$1=this;var i=this.deps.length;while(i--){var dep=this$1.deps[i];if(!this$1.newDepIds.has(dep.id)){dep.removeSub(this$1);}}var tmp=this.depIds;this.depIds=this.newDepIds;this.newDepIds=tmp;this.newDepIds.clear();tmp=this.deps;this.deps=this.newDeps;this.newDeps=tmp;this.newDeps.length=0;};/**
	 * Subscriber interface.
	 * Will be called when a dependency changes.
	 */Watcher.prototype.update=function update(){/* istanbul ignore else */if(this.lazy){this.dirty=true;}else if(this.sync){this.run();}else{queueWatcher(this);}};/**
	 * Scheduler job interface.
	 * Will be called by the scheduler.
	 */Watcher.prototype.run=function run(){if(this.active){var value=this.get();if(value!==this.value||// Deep watchers and watchers on Object/Arrays should fire even
	// when the value is the same, because the value may
	// have mutated.
	isObject(value)||this.deep){// set new value
	var oldValue=this.value;this.value=value;if(this.user){try{this.cb.call(this.vm,value,oldValue);}catch(e){/* istanbul ignore else */if(config.errorHandler){config.errorHandler.call(null,e,this.vm);}else{"development"!=='production'&&warn("Error in watcher \""+this.expression+"\"",this.vm);throw e;}}}else{this.cb.call(this.vm,value,oldValue);}}}};/**
	 * Evaluate the value of the watcher.
	 * This only gets called for lazy watchers.
	 */Watcher.prototype.evaluate=function evaluate(){this.value=this.get();this.dirty=false;};/**
	 * Depend on all deps collected by this watcher.
	 */Watcher.prototype.depend=function depend(){var this$1=this;var i=this.deps.length;while(i--){this$1.deps[i].depend();}};/**
	 * Remove self from all dependencies' subscriber list.
	 */Watcher.prototype.teardown=function teardown(){var this$1=this;if(this.active){// remove self from vm's watcher list
	// this is a somewhat expensive operation so we skip it
	// if the vm is being destroyed.
	if(!this.vm._isBeingDestroyed){remove$1(this.vm._watchers,this);}var i=this.deps.length;while(i--){this$1.deps[i].removeSub(this$1);}this.active=false;}};/**
	 * Recursively traverse an object to evoke all converted
	 * getters, so that every nested property inside the object
	 * is collected as a "deep" dependency.
	 */var seenObjects=new _Set();function traverse(val){seenObjects.clear();_traverse(val,seenObjects);}function _traverse(val,seen){var i,keys;var isA=Array.isArray(val);if(!isA&&!isObject(val)||!Object.isExtensible(val)){return;}if(val.__ob__){var depId=val.__ob__.dep.id;if(seen.has(depId)){return;}seen.add(depId);}if(isA){i=val.length;while(i--){_traverse(val[i],seen);}}else{keys=Object.keys(val);i=keys.length;while(i--){_traverse(val[keys[i]],seen);}}}/*  */function initState(vm){vm._watchers=[];var opts=vm.$options;if(opts.props){initProps(vm,opts.props);}if(opts.methods){initMethods(vm,opts.methods);}if(opts.data){initData(vm);}else{observe(vm._data={},true/* asRootData */);}if(opts.computed){initComputed(vm,opts.computed);}if(opts.watch){initWatch(vm,opts.watch);}}var isReservedProp={key:1,ref:1,slot:1};function initProps(vm,props){var propsData=vm.$options.propsData||{};var keys=vm.$options._propKeys=Object.keys(props);var isRoot=!vm.$parent;// root instance props should be converted
	observerState.shouldConvert=isRoot;var loop=function(i){var key=keys[i];/* istanbul ignore else */{if(isReservedProp[key]){warn("\""+key+"\" is a reserved attribute and cannot be used as component prop.",vm);}defineReactive$$1(vm,key,validateProp(key,props,propsData,vm),function(){if(vm.$parent&&!observerState.isSettingProps){warn("Avoid mutating a prop directly since the value will be "+"overwritten whenever the parent component re-renders. "+"Instead, use a data or computed property based on the prop's "+"value. Prop being mutated: \""+key+"\"",vm);}});}};for(var i=0;i<keys.length;i++)loop(i);observerState.shouldConvert=true;}function initData(vm){var data=vm.$options.data;data=vm._data=typeof data==='function'?data.call(vm):data||{};if(!isPlainObject(data)){data={};"development"!=='production'&&warn('data functions should return an object:\n'+'https://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function',vm);}// proxy data on instance
	var keys=Object.keys(data);var props=vm.$options.props;var i=keys.length;while(i--){if(props&&hasOwn(props,keys[i])){"development"!=='production'&&warn("The data property \""+keys[i]+"\" is already declared as a prop. "+"Use prop default value instead.",vm);}else{proxy(vm,keys[i]);}}// observe data
	observe(data,true/* asRootData */);}var computedSharedDefinition={enumerable:true,configurable:true,get:noop,set:noop};function initComputed(vm,computed){for(var key in computed){/* istanbul ignore if */if("development"!=='production'&&key in vm){warn("existing instance property \""+key+"\" will be "+"overwritten by a computed property with the same name.",vm);}var userDef=computed[key];if(typeof userDef==='function'){computedSharedDefinition.get=makeComputedGetter(userDef,vm);computedSharedDefinition.set=noop;}else{computedSharedDefinition.get=userDef.get?userDef.cache!==false?makeComputedGetter(userDef.get,vm):bind$1(userDef.get,vm):noop;computedSharedDefinition.set=userDef.set?bind$1(userDef.set,vm):noop;}Object.defineProperty(vm,key,computedSharedDefinition);}}function makeComputedGetter(getter,owner){var watcher=new Watcher(owner,getter,noop,{lazy:true});return function computedGetter(){if(watcher.dirty){watcher.evaluate();}if(Dep.target){watcher.depend();}return watcher.value;};}function initMethods(vm,methods){for(var key in methods){vm[key]=methods[key]==null?noop:bind$1(methods[key],vm);if("development"!=='production'&&methods[key]==null){warn("method \""+key+"\" has an undefined value in the component definition. "+"Did you reference the function correctly?",vm);}}}function initWatch(vm,watch){for(var key in watch){var handler=watch[key];if(Array.isArray(handler)){for(var i=0;i<handler.length;i++){createWatcher(vm,key,handler[i]);}}else{createWatcher(vm,key,handler);}}}function createWatcher(vm,key,handler){var options;if(isPlainObject(handler)){options=handler;handler=handler.handler;}if(typeof handler==='string'){handler=vm[handler];}vm.$watch(key,handler,options);}function stateMixin(Vue){// flow somehow has problems with directly declared definition object
	// when using Object.defineProperty, so we have to procedurally build up
	// the object here.
	var dataDef={};dataDef.get=function(){return this._data;};{dataDef.set=function(newData){warn('Avoid replacing instance root $data. '+'Use nested data properties instead.',this);};}Object.defineProperty(Vue.prototype,'$data',dataDef);Vue.prototype.$set=set$1;Vue.prototype.$delete=del;Vue.prototype.$watch=function(expOrFn,cb,options){var vm=this;options=options||{};options.user=true;var watcher=new Watcher(vm,expOrFn,cb,options);if(options.immediate){cb.call(vm,watcher.value);}return function unwatchFn(){watcher.teardown();};};}function proxy(vm,key){if(!isReserved(key)){Object.defineProperty(vm,key,{configurable:true,enumerable:true,get:function proxyGetter(){return vm._data[key];},set:function proxySetter(val){vm._data[key]=val;}});}}/*  */var uid=0;function initMixin(Vue){Vue.prototype._init=function(options){var vm=this;// a uid
	vm._uid=uid++;// a flag to avoid this being observed
	vm._isVue=true;// merge options
	if(options&&options._isComponent){// optimize internal component instantiation
	// since dynamic options merging is pretty slow, and none of the
	// internal component options needs special treatment.
	initInternalComponent(vm,options);}else{vm.$options=mergeOptions(resolveConstructorOptions(vm.constructor),options||{},vm);}/* istanbul ignore else */{initProxy(vm);}// expose real self
	vm._self=vm;initLifecycle(vm);initEvents(vm);initRender(vm);callHook(vm,'beforeCreate');initState(vm);callHook(vm,'created');if(vm.$options.el){vm.$mount(vm.$options.el);}};}function initInternalComponent(vm,options){var opts=vm.$options=Object.create(vm.constructor.options);// doing this because it's faster than dynamic enumeration.
	opts.parent=options.parent;opts.propsData=options.propsData;opts._parentVnode=options._parentVnode;opts._parentListeners=options._parentListeners;opts._renderChildren=options._renderChildren;opts._componentTag=options._componentTag;opts._parentElm=options._parentElm;opts._refElm=options._refElm;if(options.render){opts.render=options.render;opts.staticRenderFns=options.staticRenderFns;}}function resolveConstructorOptions(Ctor){var options=Ctor.options;if(Ctor.super){var superOptions=Ctor.super.options;var cachedSuperOptions=Ctor.superOptions;var extendOptions=Ctor.extendOptions;if(superOptions!==cachedSuperOptions){// super option changed
	Ctor.superOptions=superOptions;extendOptions.render=options.render;extendOptions.staticRenderFns=options.staticRenderFns;extendOptions._scopeId=options._scopeId;options=Ctor.options=mergeOptions(superOptions,extendOptions);if(options.name){options.components[options.name]=Ctor;}}}return options;}function Vue$3(options){if("development"!=='production'&&!(this instanceof Vue$3)){warn('Vue is a constructor and should be called with the `new` keyword');}this._init(options);}initMixin(Vue$3);stateMixin(Vue$3);eventsMixin(Vue$3);lifecycleMixin(Vue$3);renderMixin(Vue$3);/*  */function initUse(Vue){Vue.use=function(plugin){/* istanbul ignore if */if(plugin.installed){return;}// additional parameters
	var args=toArray(arguments,1);args.unshift(this);if(typeof plugin.install==='function'){plugin.install.apply(plugin,args);}else{plugin.apply(null,args);}plugin.installed=true;return this;};}/*  */function initMixin$1(Vue){Vue.mixin=function(mixin){this.options=mergeOptions(this.options,mixin);};}/*  */function initExtend(Vue){/**
	   * Each instance constructor, including Vue, has a unique
	   * cid. This enables us to create wrapped "child
	   * constructors" for prototypal inheritance and cache them.
	   */Vue.cid=0;var cid=1;/**
	   * Class inheritance
	   */Vue.extend=function(extendOptions){extendOptions=extendOptions||{};var Super=this;var SuperId=Super.cid;var cachedCtors=extendOptions._Ctor||(extendOptions._Ctor={});if(cachedCtors[SuperId]){return cachedCtors[SuperId];}var name=extendOptions.name||Super.options.name;{if(!/^[a-zA-Z][\w-]*$/.test(name)){warn('Invalid component name: "'+name+'". Component names '+'can only contain alphanumeric characters and the hyphen, '+'and must start with a letter.');}}var Sub=function VueComponent(options){this._init(options);};Sub.prototype=Object.create(Super.prototype);Sub.prototype.constructor=Sub;Sub.cid=cid++;Sub.options=mergeOptions(Super.options,extendOptions);Sub['super']=Super;// allow further extension/mixin/plugin usage
	Sub.extend=Super.extend;Sub.mixin=Super.mixin;Sub.use=Super.use;// create asset registers, so extended classes
	// can have their private assets too.
	config._assetTypes.forEach(function(type){Sub[type]=Super[type];});// enable recursive self-lookup
	if(name){Sub.options.components[name]=Sub;}// keep a reference to the super options at extension time.
	// later at instantiation we can check if Super's options have
	// been updated.
	Sub.superOptions=Super.options;Sub.extendOptions=extendOptions;// cache constructor
	cachedCtors[SuperId]=Sub;return Sub;};}/*  */function initAssetRegisters(Vue){/**
	   * Create asset registration methods.
	   */config._assetTypes.forEach(function(type){Vue[type]=function(id,definition){if(!definition){return this.options[type+'s'][id];}else{/* istanbul ignore if */{if(type==='component'&&config.isReservedTag(id)){warn('Do not use built-in or reserved HTML elements as component '+'id: '+id);}}if(type==='component'&&isPlainObject(definition)){definition.name=definition.name||id;definition=this.options._base.extend(definition);}if(type==='directive'&&typeof definition==='function'){definition={bind:definition,update:definition};}this.options[type+'s'][id]=definition;return definition;}};});}/*  */var patternTypes=[String,RegExp];function getComponentName(opts){return opts&&(opts.Ctor.options.name||opts.tag);}function matches(pattern,name){if(typeof pattern==='string'){return pattern.split(',').indexOf(name)>-1;}else{return pattern.test(name);}}function pruneCache(cache,filter){for(var key in cache){var cachedNode=cache[key];if(cachedNode){var name=getComponentName(cachedNode.componentOptions);if(name&&!filter(name)){pruneCacheEntry(cachedNode);cache[key]=null;}}}}function pruneCacheEntry(vnode){if(vnode){if(!vnode.componentInstance._inactive){callHook(vnode.componentInstance,'deactivated');}vnode.componentInstance.$destroy();}}var KeepAlive={name:'keep-alive',abstract:true,props:{include:patternTypes,exclude:patternTypes},created:function created(){this.cache=Object.create(null);},destroyed:function destroyed(){var this$1=this;for(var key in this.cache){pruneCacheEntry(this$1.cache[key]);}},watch:{include:function include(val){pruneCache(this.cache,function(name){return matches(val,name);});},exclude:function exclude(val){pruneCache(this.cache,function(name){return!matches(val,name);});}},render:function render(){var vnode=getFirstComponentChild(this.$slots.default);var componentOptions=vnode&&vnode.componentOptions;if(componentOptions){// check pattern
	var name=getComponentName(componentOptions);if(name&&(this.include&&!matches(this.include,name)||this.exclude&&matches(this.exclude,name))){return vnode;}var key=vnode.key==null// same constructor may get registered as different local components
	// so cid alone is not enough (#3269)
	?componentOptions.Ctor.cid+(componentOptions.tag?"::"+componentOptions.tag:''):vnode.key;if(this.cache[key]){vnode.componentInstance=this.cache[key].componentInstance;}else{this.cache[key]=vnode;}vnode.data.keepAlive=true;}return vnode;}};var builtInComponents={KeepAlive:KeepAlive};/*  */function initGlobalAPI(Vue){// config
	var configDef={};configDef.get=function(){return config;};{configDef.set=function(){warn('Do not replace the Vue.config object, set individual fields instead.');};}Object.defineProperty(Vue,'config',configDef);Vue.util=util;Vue.set=set$1;Vue.delete=del;Vue.nextTick=nextTick;Vue.options=Object.create(null);config._assetTypes.forEach(function(type){Vue.options[type+'s']=Object.create(null);});// this is used to identify the "base" constructor to extend all plain-object
	// components with in Weex's multi-instance scenarios.
	Vue.options._base=Vue;extend(Vue.options.components,builtInComponents);initUse(Vue);initMixin$1(Vue);initExtend(Vue);initAssetRegisters(Vue);}initGlobalAPI(Vue$3);Object.defineProperty(Vue$3.prototype,'$isServer',{get:isServerRendering});Vue$3.version='2.1.10';/*  */// attributes that should be using props for binding
	var acceptValue=makeMap('input,textarea,option,select');var mustUseProp=function(tag,type,attr){return attr==='value'&&acceptValue(tag)&&type!=='button'||attr==='selected'&&tag==='option'||attr==='checked'&&tag==='input'||attr==='muted'&&tag==='video';};var isEnumeratedAttr=makeMap('contenteditable,draggable,spellcheck');var isBooleanAttr=makeMap('allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,'+'default,defaultchecked,defaultmuted,defaultselected,defer,disabled,'+'enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,'+'muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,'+'required,reversed,scoped,seamless,selected,sortable,translate,'+'truespeed,typemustmatch,visible');var xlinkNS='http://www.w3.org/1999/xlink';var isXlink=function(name){return name.charAt(5)===':'&&name.slice(0,5)==='xlink';};var getXlinkProp=function(name){return isXlink(name)?name.slice(6,name.length):'';};var isFalsyAttrValue=function(val){return val==null||val===false;};/*  */function genClassForVnode(vnode){var data=vnode.data;var parentNode=vnode;var childNode=vnode;while(childNode.componentInstance){childNode=childNode.componentInstance._vnode;if(childNode.data){data=mergeClassData(childNode.data,data);}}while(parentNode=parentNode.parent){if(parentNode.data){data=mergeClassData(data,parentNode.data);}}return genClassFromData(data);}function mergeClassData(child,parent){return{staticClass:concat(child.staticClass,parent.staticClass),class:child.class?[child.class,parent.class]:parent.class};}function genClassFromData(data){var dynamicClass=data.class;var staticClass=data.staticClass;if(staticClass||dynamicClass){return concat(staticClass,stringifyClass(dynamicClass));}/* istanbul ignore next */return'';}function concat(a,b){return a?b?a+' '+b:a:b||'';}function stringifyClass(value){var res='';if(!value){return res;}if(typeof value==='string'){return value;}if(Array.isArray(value)){var stringified;for(var i=0,l=value.length;i<l;i++){if(value[i]){if(stringified=stringifyClass(value[i])){res+=stringified+' ';}}}return res.slice(0,-1);}if(isObject(value)){for(var key in value){if(value[key]){res+=key+' ';}}return res.slice(0,-1);}/* istanbul ignore next */return res;}/*  */var namespaceMap={svg:'http://www.w3.org/2000/svg',math:'http://www.w3.org/1998/Math/MathML'};var isHTMLTag=makeMap('html,body,base,head,link,meta,style,title,'+'address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,'+'div,dd,dl,dt,figcaption,figure,hr,img,li,main,ol,p,pre,ul,'+'a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,'+'s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,'+'embed,object,param,source,canvas,script,noscript,del,ins,'+'caption,col,colgroup,table,thead,tbody,td,th,tr,'+'button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,'+'output,progress,select,textarea,'+'details,dialog,menu,menuitem,summary,'+'content,element,shadow,template');// this map is intentionally selective, only covering SVG elements that may
	// contain child elements.
	var isSVG=makeMap('svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,'+'font-face,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,'+'polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view',true);var isPreTag=function(tag){return tag==='pre';};var isReservedTag=function(tag){return isHTMLTag(tag)||isSVG(tag);};function getTagNamespace(tag){if(isSVG(tag)){return'svg';}// basic support for MathML
	// note it doesn't support other MathML elements being component roots
	if(tag==='math'){return'math';}}var unknownElementCache=Object.create(null);function isUnknownElement(tag){/* istanbul ignore if */if(!inBrowser){return true;}if(isReservedTag(tag)){return false;}tag=tag.toLowerCase();/* istanbul ignore if */if(unknownElementCache[tag]!=null){return unknownElementCache[tag];}var el=document.createElement(tag);if(tag.indexOf('-')>-1){// http://stackoverflow.com/a/28210364/1070244
	return unknownElementCache[tag]=el.constructor===window.HTMLUnknownElement||el.constructor===window.HTMLElement;}else{return unknownElementCache[tag]=/HTMLUnknownElement/.test(el.toString());}}/*  *//**
	 * Query an element selector if it's not an element already.
	 */function query(el){if(typeof el==='string'){var selector=el;el=document.querySelector(el);if(!el){"development"!=='production'&&warn('Cannot find element: '+selector);return document.createElement('div');}}return el;}/*  */function createElement$1(tagName,vnode){var elm=document.createElement(tagName);if(tagName!=='select'){return elm;}if(vnode.data&&vnode.data.attrs&&'multiple'in vnode.data.attrs){elm.setAttribute('multiple','multiple');}return elm;}function createElementNS(namespace,tagName){return document.createElementNS(namespaceMap[namespace],tagName);}function createTextNode(text){return document.createTextNode(text);}function createComment(text){return document.createComment(text);}function insertBefore(parentNode,newNode,referenceNode){parentNode.insertBefore(newNode,referenceNode);}function removeChild(node,child){node.removeChild(child);}function appendChild(node,child){node.appendChild(child);}function parentNode(node){return node.parentNode;}function nextSibling(node){return node.nextSibling;}function tagName(node){return node.tagName;}function setTextContent(node,text){node.textContent=text;}function setAttribute(node,key,val){node.setAttribute(key,val);}var nodeOps=Object.freeze({createElement:createElement$1,createElementNS:createElementNS,createTextNode:createTextNode,createComment:createComment,insertBefore:insertBefore,removeChild:removeChild,appendChild:appendChild,parentNode:parentNode,nextSibling:nextSibling,tagName:tagName,setTextContent:setTextContent,setAttribute:setAttribute});/*  */var ref={create:function create(_,vnode){registerRef(vnode);},update:function update(oldVnode,vnode){if(oldVnode.data.ref!==vnode.data.ref){registerRef(oldVnode,true);registerRef(vnode);}},destroy:function destroy(vnode){registerRef(vnode,true);}};function registerRef(vnode,isRemoval){var key=vnode.data.ref;if(!key){return;}var vm=vnode.context;var ref=vnode.componentInstance||vnode.elm;var refs=vm.$refs;if(isRemoval){if(Array.isArray(refs[key])){remove$1(refs[key],ref);}else if(refs[key]===ref){refs[key]=undefined;}}else{if(vnode.data.refInFor){if(Array.isArray(refs[key])&&refs[key].indexOf(ref)<0){refs[key].push(ref);}else{refs[key]=[ref];}}else{refs[key]=ref;}}}/**
	 * Virtual DOM patching algorithm based on Snabbdom by
	 * Simon Friis Vindum (@paldepind)
	 * Licensed under the MIT License
	 * https://github.com/paldepind/snabbdom/blob/master/LICENSE
	 *
	 * modified by Evan You (@yyx990803)
	 *

	/*
	 * Not type-checking this because this file is perf-critical and the cost
	 * of making flow understand it is not worth it.
	 */var emptyNode=new VNode('',{},[]);var hooks$1=['create','activate','update','remove','destroy'];function isUndef(s){return s==null;}function isDef(s){return s!=null;}function sameVnode(vnode1,vnode2){return vnode1.key===vnode2.key&&vnode1.tag===vnode2.tag&&vnode1.isComment===vnode2.isComment&&!vnode1.data===!vnode2.data;}function createKeyToOldIdx(children,beginIdx,endIdx){var i,key;var map={};for(i=beginIdx;i<=endIdx;++i){key=children[i].key;if(isDef(key)){map[key]=i;}}return map;}function createPatchFunction(backend){var i,j;var cbs={};var modules=backend.modules;var nodeOps=backend.nodeOps;for(i=0;i<hooks$1.length;++i){cbs[hooks$1[i]]=[];for(j=0;j<modules.length;++j){if(modules[j][hooks$1[i]]!==undefined){cbs[hooks$1[i]].push(modules[j][hooks$1[i]]);}}}function emptyNodeAt(elm){return new VNode(nodeOps.tagName(elm).toLowerCase(),{},[],undefined,elm);}function createRmCb(childElm,listeners){function remove$$1(){if(--remove$$1.listeners===0){removeNode(childElm);}}remove$$1.listeners=listeners;return remove$$1;}function removeNode(el){var parent=nodeOps.parentNode(el);// element may have already been removed due to v-html / v-text
	if(parent){nodeOps.removeChild(parent,el);}}var inPre=0;function createElm(vnode,insertedVnodeQueue,parentElm,refElm,nested){vnode.isRootInsert=!nested;// for transition enter check
	if(createComponent(vnode,insertedVnodeQueue,parentElm,refElm)){return;}var data=vnode.data;var children=vnode.children;var tag=vnode.tag;if(isDef(tag)){{if(data&&data.pre){inPre++;}if(!inPre&&!vnode.ns&&!(config.ignoredElements.length&&config.ignoredElements.indexOf(tag)>-1)&&config.isUnknownElement(tag)){warn('Unknown custom element: <'+tag+'> - did you '+'register the component correctly? For recursive components, '+'make sure to provide the "name" option.',vnode.context);}}vnode.elm=vnode.ns?nodeOps.createElementNS(vnode.ns,tag):nodeOps.createElement(tag,vnode);setScope(vnode);/* istanbul ignore if */{createChildren(vnode,children,insertedVnodeQueue);if(isDef(data)){invokeCreateHooks(vnode,insertedVnodeQueue);}insert(parentElm,vnode.elm,refElm);}if("development"!=='production'&&data&&data.pre){inPre--;}}else if(vnode.isComment){vnode.elm=nodeOps.createComment(vnode.text);insert(parentElm,vnode.elm,refElm);}else{vnode.elm=nodeOps.createTextNode(vnode.text);insert(parentElm,vnode.elm,refElm);}}function createComponent(vnode,insertedVnodeQueue,parentElm,refElm){var i=vnode.data;if(isDef(i)){var isReactivated=isDef(vnode.componentInstance)&&i.keepAlive;if(isDef(i=i.hook)&&isDef(i=i.init)){i(vnode,false/* hydrating */,parentElm,refElm);}// after calling the init hook, if the vnode is a child component
	// it should've created a child instance and mounted it. the child
	// component also has set the placeholder vnode's elm.
	// in that case we can just return the element and be done.
	if(isDef(vnode.componentInstance)){initComponent(vnode,insertedVnodeQueue);if(isReactivated){reactivateComponent(vnode,insertedVnodeQueue,parentElm,refElm);}return true;}}}function initComponent(vnode,insertedVnodeQueue){if(vnode.data.pendingInsert){insertedVnodeQueue.push.apply(insertedVnodeQueue,vnode.data.pendingInsert);}vnode.elm=vnode.componentInstance.$el;if(isPatchable(vnode)){invokeCreateHooks(vnode,insertedVnodeQueue);setScope(vnode);}else{// empty component root.
	// skip all element-related modules except for ref (#3455)
	registerRef(vnode);// make sure to invoke the insert hook
	insertedVnodeQueue.push(vnode);}}function reactivateComponent(vnode,insertedVnodeQueue,parentElm,refElm){var i;// hack for #4339: a reactivated component with inner transition
	// does not trigger because the inner node's created hooks are not called
	// again. It's not ideal to involve module-specific logic in here but
	// there doesn't seem to be a better way to do it.
	var innerNode=vnode;while(innerNode.componentInstance){innerNode=innerNode.componentInstance._vnode;if(isDef(i=innerNode.data)&&isDef(i=i.transition)){for(i=0;i<cbs.activate.length;++i){cbs.activate[i](emptyNode,innerNode);}insertedVnodeQueue.push(innerNode);break;}}// unlike a newly created component,
	// a reactivated keep-alive component doesn't insert itself
	insert(parentElm,vnode.elm,refElm);}function insert(parent,elm,ref){if(parent){if(ref){nodeOps.insertBefore(parent,elm,ref);}else{nodeOps.appendChild(parent,elm);}}}function createChildren(vnode,children,insertedVnodeQueue){if(Array.isArray(children)){for(var i=0;i<children.length;++i){createElm(children[i],insertedVnodeQueue,vnode.elm,null,true);}}else if(isPrimitive(vnode.text)){nodeOps.appendChild(vnode.elm,nodeOps.createTextNode(vnode.text));}}function isPatchable(vnode){while(vnode.componentInstance){vnode=vnode.componentInstance._vnode;}return isDef(vnode.tag);}function invokeCreateHooks(vnode,insertedVnodeQueue){for(var i$1=0;i$1<cbs.create.length;++i$1){cbs.create[i$1](emptyNode,vnode);}i=vnode.data.hook;// Reuse variable
	if(isDef(i)){if(i.create){i.create(emptyNode,vnode);}if(i.insert){insertedVnodeQueue.push(vnode);}}}// set scope id attribute for scoped CSS.
	// this is implemented as a special case to avoid the overhead
	// of going through the normal attribute patching process.
	function setScope(vnode){var i;if(isDef(i=vnode.context)&&isDef(i=i.$options._scopeId)){nodeOps.setAttribute(vnode.elm,i,'');}if(isDef(i=activeInstance)&&i!==vnode.context&&isDef(i=i.$options._scopeId)){nodeOps.setAttribute(vnode.elm,i,'');}}function addVnodes(parentElm,refElm,vnodes,startIdx,endIdx,insertedVnodeQueue){for(;startIdx<=endIdx;++startIdx){createElm(vnodes[startIdx],insertedVnodeQueue,parentElm,refElm);}}function invokeDestroyHook(vnode){var i,j;var data=vnode.data;if(isDef(data)){if(isDef(i=data.hook)&&isDef(i=i.destroy)){i(vnode);}for(i=0;i<cbs.destroy.length;++i){cbs.destroy[i](vnode);}}if(isDef(i=vnode.children)){for(j=0;j<vnode.children.length;++j){invokeDestroyHook(vnode.children[j]);}}}function removeVnodes(parentElm,vnodes,startIdx,endIdx){for(;startIdx<=endIdx;++startIdx){var ch=vnodes[startIdx];if(isDef(ch)){if(isDef(ch.tag)){removeAndInvokeRemoveHook(ch);invokeDestroyHook(ch);}else{// Text node
	removeNode(ch.elm);}}}}function removeAndInvokeRemoveHook(vnode,rm){if(rm||isDef(vnode.data)){var listeners=cbs.remove.length+1;if(!rm){// directly removing
	rm=createRmCb(vnode.elm,listeners);}else{// we have a recursively passed down rm callback
	// increase the listeners count
	rm.listeners+=listeners;}// recursively invoke hooks on child component root node
	if(isDef(i=vnode.componentInstance)&&isDef(i=i._vnode)&&isDef(i.data)){removeAndInvokeRemoveHook(i,rm);}for(i=0;i<cbs.remove.length;++i){cbs.remove[i](vnode,rm);}if(isDef(i=vnode.data.hook)&&isDef(i=i.remove)){i(vnode,rm);}else{rm();}}else{removeNode(vnode.elm);}}function updateChildren(parentElm,oldCh,newCh,insertedVnodeQueue,removeOnly){var oldStartIdx=0;var newStartIdx=0;var oldEndIdx=oldCh.length-1;var oldStartVnode=oldCh[0];var oldEndVnode=oldCh[oldEndIdx];var newEndIdx=newCh.length-1;var newStartVnode=newCh[0];var newEndVnode=newCh[newEndIdx];var oldKeyToIdx,idxInOld,elmToMove,refElm;// removeOnly is a special flag used only by <transition-group>
	// to ensure removed elements stay in correct relative positions
	// during leaving transitions
	var canMove=!removeOnly;while(oldStartIdx<=oldEndIdx&&newStartIdx<=newEndIdx){if(isUndef(oldStartVnode)){oldStartVnode=oldCh[++oldStartIdx];// Vnode has been moved left
	}else if(isUndef(oldEndVnode)){oldEndVnode=oldCh[--oldEndIdx];}else if(sameVnode(oldStartVnode,newStartVnode)){patchVnode(oldStartVnode,newStartVnode,insertedVnodeQueue);oldStartVnode=oldCh[++oldStartIdx];newStartVnode=newCh[++newStartIdx];}else if(sameVnode(oldEndVnode,newEndVnode)){patchVnode(oldEndVnode,newEndVnode,insertedVnodeQueue);oldEndVnode=oldCh[--oldEndIdx];newEndVnode=newCh[--newEndIdx];}else if(sameVnode(oldStartVnode,newEndVnode)){// Vnode moved right
	patchVnode(oldStartVnode,newEndVnode,insertedVnodeQueue);canMove&&nodeOps.insertBefore(parentElm,oldStartVnode.elm,nodeOps.nextSibling(oldEndVnode.elm));oldStartVnode=oldCh[++oldStartIdx];newEndVnode=newCh[--newEndIdx];}else if(sameVnode(oldEndVnode,newStartVnode)){// Vnode moved left
	patchVnode(oldEndVnode,newStartVnode,insertedVnodeQueue);canMove&&nodeOps.insertBefore(parentElm,oldEndVnode.elm,oldStartVnode.elm);oldEndVnode=oldCh[--oldEndIdx];newStartVnode=newCh[++newStartIdx];}else{if(isUndef(oldKeyToIdx)){oldKeyToIdx=createKeyToOldIdx(oldCh,oldStartIdx,oldEndIdx);}idxInOld=isDef(newStartVnode.key)?oldKeyToIdx[newStartVnode.key]:null;if(isUndef(idxInOld)){// New element
	createElm(newStartVnode,insertedVnodeQueue,parentElm,oldStartVnode.elm);newStartVnode=newCh[++newStartIdx];}else{elmToMove=oldCh[idxInOld];/* istanbul ignore if */if("development"!=='production'&&!elmToMove){warn('It seems there are duplicate keys that is causing an update error. '+'Make sure each v-for item has a unique key.');}if(sameVnode(elmToMove,newStartVnode)){patchVnode(elmToMove,newStartVnode,insertedVnodeQueue);oldCh[idxInOld]=undefined;canMove&&nodeOps.insertBefore(parentElm,newStartVnode.elm,oldStartVnode.elm);newStartVnode=newCh[++newStartIdx];}else{// same key but different element. treat as new element
	createElm(newStartVnode,insertedVnodeQueue,parentElm,oldStartVnode.elm);newStartVnode=newCh[++newStartIdx];}}}}if(oldStartIdx>oldEndIdx){refElm=isUndef(newCh[newEndIdx+1])?null:newCh[newEndIdx+1].elm;addVnodes(parentElm,refElm,newCh,newStartIdx,newEndIdx,insertedVnodeQueue);}else if(newStartIdx>newEndIdx){removeVnodes(parentElm,oldCh,oldStartIdx,oldEndIdx);}}function patchVnode(oldVnode,vnode,insertedVnodeQueue,removeOnly){if(oldVnode===vnode){return;}// reuse element for static trees.
	// note we only do this if the vnode is cloned -
	// if the new node is not cloned it means the render functions have been
	// reset by the hot-reload-api and we need to do a proper re-render.
	if(vnode.isStatic&&oldVnode.isStatic&&vnode.key===oldVnode.key&&(vnode.isCloned||vnode.isOnce)){vnode.elm=oldVnode.elm;vnode.componentInstance=oldVnode.componentInstance;return;}var i;var data=vnode.data;var hasData=isDef(data);if(hasData&&isDef(i=data.hook)&&isDef(i=i.prepatch)){i(oldVnode,vnode);}var elm=vnode.elm=oldVnode.elm;var oldCh=oldVnode.children;var ch=vnode.children;if(hasData&&isPatchable(vnode)){for(i=0;i<cbs.update.length;++i){cbs.update[i](oldVnode,vnode);}if(isDef(i=data.hook)&&isDef(i=i.update)){i(oldVnode,vnode);}}if(isUndef(vnode.text)){if(isDef(oldCh)&&isDef(ch)){if(oldCh!==ch){updateChildren(elm,oldCh,ch,insertedVnodeQueue,removeOnly);}}else if(isDef(ch)){if(isDef(oldVnode.text)){nodeOps.setTextContent(elm,'');}addVnodes(elm,null,ch,0,ch.length-1,insertedVnodeQueue);}else if(isDef(oldCh)){removeVnodes(elm,oldCh,0,oldCh.length-1);}else if(isDef(oldVnode.text)){nodeOps.setTextContent(elm,'');}}else if(oldVnode.text!==vnode.text){nodeOps.setTextContent(elm,vnode.text);}if(hasData){if(isDef(i=data.hook)&&isDef(i=i.postpatch)){i(oldVnode,vnode);}}}function invokeInsertHook(vnode,queue,initial){// delay insert hooks for component root nodes, invoke them after the
	// element is really inserted
	if(initial&&vnode.parent){vnode.parent.data.pendingInsert=queue;}else{for(var i=0;i<queue.length;++i){queue[i].data.hook.insert(queue[i]);}}}var bailed=false;// list of modules that can skip create hook during hydration because they
	// are already rendered on the client or has no need for initialization
	var isRenderedModule=makeMap('attrs,style,class,staticClass,staticStyle,key');// Note: this is a browser-only function so we can assume elms are DOM nodes.
	function hydrate(elm,vnode,insertedVnodeQueue){{if(!assertNodeMatch(elm,vnode)){return false;}}vnode.elm=elm;var tag=vnode.tag;var data=vnode.data;var children=vnode.children;if(isDef(data)){if(isDef(i=data.hook)&&isDef(i=i.init)){i(vnode,true/* hydrating */);}if(isDef(i=vnode.componentInstance)){// child component. it should have hydrated its own tree.
	initComponent(vnode,insertedVnodeQueue);return true;}}if(isDef(tag)){if(isDef(children)){// empty element, allow client to pick up and populate children
	if(!elm.hasChildNodes()){createChildren(vnode,children,insertedVnodeQueue);}else{var childrenMatch=true;var childNode=elm.firstChild;for(var i$1=0;i$1<children.length;i$1++){if(!childNode||!hydrate(childNode,children[i$1],insertedVnodeQueue)){childrenMatch=false;break;}childNode=childNode.nextSibling;}// if childNode is not null, it means the actual childNodes list is
	// longer than the virtual children list.
	if(!childrenMatch||childNode){if("development"!=='production'&&typeof console!=='undefined'&&!bailed){bailed=true;console.warn('Parent: ',elm);console.warn('Mismatching childNodes vs. VNodes: ',elm.childNodes,children);}return false;}}}if(isDef(data)){for(var key in data){if(!isRenderedModule(key)){invokeCreateHooks(vnode,insertedVnodeQueue);break;}}}}else if(elm.data!==vnode.text){elm.data=vnode.text;}return true;}function assertNodeMatch(node,vnode){if(vnode.tag){return vnode.tag.indexOf('vue-component')===0||vnode.tag.toLowerCase()===(node.tagName&&node.tagName.toLowerCase());}else{return node.nodeType===(vnode.isComment?8:3);}}return function patch(oldVnode,vnode,hydrating,removeOnly,parentElm,refElm){if(!vnode){if(oldVnode){invokeDestroyHook(oldVnode);}return;}var isInitialPatch=false;var insertedVnodeQueue=[];if(!oldVnode){// empty mount (likely as component), create new root element
	isInitialPatch=true;createElm(vnode,insertedVnodeQueue,parentElm,refElm);}else{var isRealElement=isDef(oldVnode.nodeType);if(!isRealElement&&sameVnode(oldVnode,vnode)){// patch existing root node
	patchVnode(oldVnode,vnode,insertedVnodeQueue,removeOnly);}else{if(isRealElement){// mounting to a real element
	// check if this is server-rendered content and if we can perform
	// a successful hydration.
	if(oldVnode.nodeType===1&&oldVnode.hasAttribute('server-rendered')){oldVnode.removeAttribute('server-rendered');hydrating=true;}if(hydrating){if(hydrate(oldVnode,vnode,insertedVnodeQueue)){invokeInsertHook(vnode,insertedVnodeQueue,true);return oldVnode;}else{warn('The client-side rendered virtual DOM tree is not matching '+'server-rendered content. This is likely caused by incorrect '+'HTML markup, for example nesting block-level elements inside '+'<p>, or missing <tbody>. Bailing hydration and performing '+'full client-side render.');}}// either not server-rendered, or hydration failed.
	// create an empty node and replace it
	oldVnode=emptyNodeAt(oldVnode);}// replacing existing element
	var oldElm=oldVnode.elm;var parentElm$1=nodeOps.parentNode(oldElm);createElm(vnode,insertedVnodeQueue,// extremely rare edge case: do not insert if old element is in a
	// leaving transition. Only happens when combining transition +
	// keep-alive + HOCs. (#4590)
	oldElm._leaveCb?null:parentElm$1,nodeOps.nextSibling(oldElm));if(vnode.parent){// component root element replaced.
	// update parent placeholder node element, recursively
	var ancestor=vnode.parent;while(ancestor){ancestor.elm=vnode.elm;ancestor=ancestor.parent;}if(isPatchable(vnode)){for(var i=0;i<cbs.create.length;++i){cbs.create[i](emptyNode,vnode.parent);}}}if(parentElm$1!==null){removeVnodes(parentElm$1,[oldVnode],0,0);}else if(isDef(oldVnode.tag)){invokeDestroyHook(oldVnode);}}}invokeInsertHook(vnode,insertedVnodeQueue,isInitialPatch);return vnode.elm;};}/*  */var directives={create:updateDirectives,update:updateDirectives,destroy:function unbindDirectives(vnode){updateDirectives(vnode,emptyNode);}};function updateDirectives(oldVnode,vnode){if(oldVnode.data.directives||vnode.data.directives){_update(oldVnode,vnode);}}function _update(oldVnode,vnode){var isCreate=oldVnode===emptyNode;var isDestroy=vnode===emptyNode;var oldDirs=normalizeDirectives$1(oldVnode.data.directives,oldVnode.context);var newDirs=normalizeDirectives$1(vnode.data.directives,vnode.context);var dirsWithInsert=[];var dirsWithPostpatch=[];var key,oldDir,dir;for(key in newDirs){oldDir=oldDirs[key];dir=newDirs[key];if(!oldDir){// new directive, bind
	callHook$1(dir,'bind',vnode,oldVnode);if(dir.def&&dir.def.inserted){dirsWithInsert.push(dir);}}else{// existing directive, update
	dir.oldValue=oldDir.value;callHook$1(dir,'update',vnode,oldVnode);if(dir.def&&dir.def.componentUpdated){dirsWithPostpatch.push(dir);}}}if(dirsWithInsert.length){var callInsert=function(){for(var i=0;i<dirsWithInsert.length;i++){callHook$1(dirsWithInsert[i],'inserted',vnode,oldVnode);}};if(isCreate){mergeVNodeHook(vnode.data.hook||(vnode.data.hook={}),'insert',callInsert,'dir-insert');}else{callInsert();}}if(dirsWithPostpatch.length){mergeVNodeHook(vnode.data.hook||(vnode.data.hook={}),'postpatch',function(){for(var i=0;i<dirsWithPostpatch.length;i++){callHook$1(dirsWithPostpatch[i],'componentUpdated',vnode,oldVnode);}},'dir-postpatch');}if(!isCreate){for(key in oldDirs){if(!newDirs[key]){// no longer present, unbind
	callHook$1(oldDirs[key],'unbind',oldVnode,oldVnode,isDestroy);}}}}var emptyModifiers=Object.create(null);function normalizeDirectives$1(dirs,vm){var res=Object.create(null);if(!dirs){return res;}var i,dir;for(i=0;i<dirs.length;i++){dir=dirs[i];if(!dir.modifiers){dir.modifiers=emptyModifiers;}res[getRawDirName(dir)]=dir;dir.def=resolveAsset(vm.$options,'directives',dir.name,true);}return res;}function getRawDirName(dir){return dir.rawName||dir.name+"."+Object.keys(dir.modifiers||{}).join('.');}function callHook$1(dir,hook,vnode,oldVnode,isDestroy){var fn=dir.def&&dir.def[hook];if(fn){fn(vnode.elm,dir,vnode,oldVnode,isDestroy);}}var baseModules=[ref,directives];/*  */function updateAttrs(oldVnode,vnode){if(!oldVnode.data.attrs&&!vnode.data.attrs){return;}var key,cur,old;var elm=vnode.elm;var oldAttrs=oldVnode.data.attrs||{};var attrs=vnode.data.attrs||{};// clone observed objects, as the user probably wants to mutate it
	if(attrs.__ob__){attrs=vnode.data.attrs=extend({},attrs);}for(key in attrs){cur=attrs[key];old=oldAttrs[key];if(old!==cur){setAttr(elm,key,cur);}}// #4391: in IE9, setting type can reset value for input[type=radio]
	/* istanbul ignore if */if(isIE9&&attrs.value!==oldAttrs.value){setAttr(elm,'value',attrs.value);}for(key in oldAttrs){if(attrs[key]==null){if(isXlink(key)){elm.removeAttributeNS(xlinkNS,getXlinkProp(key));}else if(!isEnumeratedAttr(key)){elm.removeAttribute(key);}}}}function setAttr(el,key,value){if(isBooleanAttr(key)){// set attribute for blank value
	// e.g. <option disabled>Select one</option>
	if(isFalsyAttrValue(value)){el.removeAttribute(key);}else{el.setAttribute(key,key);}}else if(isEnumeratedAttr(key)){el.setAttribute(key,isFalsyAttrValue(value)||value==='false'?'false':'true');}else if(isXlink(key)){if(isFalsyAttrValue(value)){el.removeAttributeNS(xlinkNS,getXlinkProp(key));}else{el.setAttributeNS(xlinkNS,key,value);}}else{if(isFalsyAttrValue(value)){el.removeAttribute(key);}else{el.setAttribute(key,value);}}}var attrs={create:updateAttrs,update:updateAttrs};/*  */function updateClass(oldVnode,vnode){var el=vnode.elm;var data=vnode.data;var oldData=oldVnode.data;if(!data.staticClass&&!data.class&&(!oldData||!oldData.staticClass&&!oldData.class)){return;}var cls=genClassForVnode(vnode);// handle transition classes
	var transitionClass=el._transitionClasses;if(transitionClass){cls=concat(cls,stringifyClass(transitionClass));}// set the class
	if(cls!==el._prevClass){el.setAttribute('class',cls);el._prevClass=cls;}}var klass={create:updateClass,update:updateClass};/*  */var target$1;function add$2(event,handler,once,capture){if(once){var oldHandler=handler;var _target=target$1;// save current target element in closure
	handler=function(ev){remove$3(event,handler,capture,_target);arguments.length===1?oldHandler(ev):oldHandler.apply(null,arguments);};}target$1.addEventListener(event,handler,capture);}function remove$3(event,handler,capture,_target){(_target||target$1).removeEventListener(event,handler,capture);}function updateDOMListeners(oldVnode,vnode){if(!oldVnode.data.on&&!vnode.data.on){return;}var on=vnode.data.on||{};var oldOn=oldVnode.data.on||{};target$1=vnode.elm;updateListeners(on,oldOn,add$2,remove$3,vnode.context);}var events={create:updateDOMListeners,update:updateDOMListeners};/*  */function updateDOMProps(oldVnode,vnode){if(!oldVnode.data.domProps&&!vnode.data.domProps){return;}var key,cur;var elm=vnode.elm;var oldProps=oldVnode.data.domProps||{};var props=vnode.data.domProps||{};// clone observed objects, as the user probably wants to mutate it
	if(props.__ob__){props=vnode.data.domProps=extend({},props);}for(key in oldProps){if(props[key]==null){elm[key]='';}}for(key in props){cur=props[key];// ignore children if the node has textContent or innerHTML,
	// as these will throw away existing DOM nodes and cause removal errors
	// on subsequent patches (#3360)
	if(key==='textContent'||key==='innerHTML'){if(vnode.children){vnode.children.length=0;}if(cur===oldProps[key]){continue;}}if(key==='value'){// store value as _value as well since
	// non-string values will be stringified
	elm._value=cur;// avoid resetting cursor position when value is the same
	var strCur=cur==null?'':String(cur);if(shouldUpdateValue(elm,vnode,strCur)){elm.value=strCur;}}else{elm[key]=cur;}}}// check platforms/web/util/attrs.js acceptValue
	function shouldUpdateValue(elm,vnode,checkVal){return!elm.composing&&(vnode.tag==='option'||isDirty(elm,checkVal)||isInputChanged(vnode,checkVal));}function isDirty(elm,checkVal){// return true when textbox (.number and .trim) loses focus and its value is not equal to the updated value
	return document.activeElement!==elm&&elm.value!==checkVal;}function isInputChanged(vnode,newVal){var value=vnode.elm.value;var modifiers=vnode.elm._vModifiers;// injected by v-model runtime
	if(modifiers&&modifiers.number||vnode.elm.type==='number'){return toNumber(value)!==toNumber(newVal);}if(modifiers&&modifiers.trim){return value.trim()!==newVal.trim();}return value!==newVal;}var domProps={create:updateDOMProps,update:updateDOMProps};/*  */var parseStyleText=cached(function(cssText){var res={};var listDelimiter=/;(?![^(]*\))/g;var propertyDelimiter=/:(.+)/;cssText.split(listDelimiter).forEach(function(item){if(item){var tmp=item.split(propertyDelimiter);tmp.length>1&&(res[tmp[0].trim()]=tmp[1].trim());}});return res;});// merge static and dynamic style data on the same vnode
	function normalizeStyleData(data){var style=normalizeStyleBinding(data.style);// static style is pre-processed into an object during compilation
	// and is always a fresh object, so it's safe to merge into it
	return data.staticStyle?extend(data.staticStyle,style):style;}// normalize possible array / string values into Object
	function normalizeStyleBinding(bindingStyle){if(Array.isArray(bindingStyle)){return toObject(bindingStyle);}if(typeof bindingStyle==='string'){return parseStyleText(bindingStyle);}return bindingStyle;}/**
	 * parent component style should be after child's
	 * so that parent component's style could override it
	 */function getStyle(vnode,checkChild){var res={};var styleData;if(checkChild){var childNode=vnode;while(childNode.componentInstance){childNode=childNode.componentInstance._vnode;if(childNode.data&&(styleData=normalizeStyleData(childNode.data))){extend(res,styleData);}}}if(styleData=normalizeStyleData(vnode.data)){extend(res,styleData);}var parentNode=vnode;while(parentNode=parentNode.parent){if(parentNode.data&&(styleData=normalizeStyleData(parentNode.data))){extend(res,styleData);}}return res;}/*  */var cssVarRE=/^--/;var importantRE=/\s*!important$/;var setProp=function(el,name,val){/* istanbul ignore if */if(cssVarRE.test(name)){el.style.setProperty(name,val);}else if(importantRE.test(val)){el.style.setProperty(name,val.replace(importantRE,''),'important');}else{el.style[normalize(name)]=val;}};var prefixes=['Webkit','Moz','ms'];var testEl;var normalize=cached(function(prop){testEl=testEl||document.createElement('div');prop=camelize(prop);if(prop!=='filter'&&prop in testEl.style){return prop;}var upper=prop.charAt(0).toUpperCase()+prop.slice(1);for(var i=0;i<prefixes.length;i++){var prefixed=prefixes[i]+upper;if(prefixed in testEl.style){return prefixed;}}});function updateStyle(oldVnode,vnode){var data=vnode.data;var oldData=oldVnode.data;if(!data.staticStyle&&!data.style&&!oldData.staticStyle&&!oldData.style){return;}var cur,name;var el=vnode.elm;var oldStaticStyle=oldVnode.data.staticStyle;var oldStyleBinding=oldVnode.data.style||{};// if static style exists, stylebinding already merged into it when doing normalizeStyleData
	var oldStyle=oldStaticStyle||oldStyleBinding;var style=normalizeStyleBinding(vnode.data.style)||{};vnode.data.style=style.__ob__?extend({},style):style;var newStyle=getStyle(vnode,true);for(name in oldStyle){if(newStyle[name]==null){setProp(el,name,'');}}for(name in newStyle){cur=newStyle[name];if(cur!==oldStyle[name]){// ie9 setting to null has no effect, must use empty string
	setProp(el,name,cur==null?'':cur);}}}var style={create:updateStyle,update:updateStyle};/*  *//**
	 * Add class with compatibility for SVG since classList is not supported on
	 * SVG elements in IE
	 */function addClass(el,cls){/* istanbul ignore if */if(!cls||!cls.trim()){return;}/* istanbul ignore else */if(el.classList){if(cls.indexOf(' ')>-1){cls.split(/\s+/).forEach(function(c){return el.classList.add(c);});}else{el.classList.add(cls);}}else{var cur=' '+el.getAttribute('class')+' ';if(cur.indexOf(' '+cls+' ')<0){el.setAttribute('class',(cur+cls).trim());}}}/**
	 * Remove class with compatibility for SVG since classList is not supported on
	 * SVG elements in IE
	 */function removeClass(el,cls){/* istanbul ignore if */if(!cls||!cls.trim()){return;}/* istanbul ignore else */if(el.classList){if(cls.indexOf(' ')>-1){cls.split(/\s+/).forEach(function(c){return el.classList.remove(c);});}else{el.classList.remove(cls);}}else{var cur=' '+el.getAttribute('class')+' ';var tar=' '+cls+' ';while(cur.indexOf(tar)>=0){cur=cur.replace(tar,' ');}el.setAttribute('class',cur.trim());}}/*  */var hasTransition=inBrowser&&!isIE9;var TRANSITION='transition';var ANIMATION='animation';// Transition property/event sniffing
	var transitionProp='transition';var transitionEndEvent='transitionend';var animationProp='animation';var animationEndEvent='animationend';if(hasTransition){/* istanbul ignore if */if(window.ontransitionend===undefined&&window.onwebkittransitionend!==undefined){transitionProp='WebkitTransition';transitionEndEvent='webkitTransitionEnd';}if(window.onanimationend===undefined&&window.onwebkitanimationend!==undefined){animationProp='WebkitAnimation';animationEndEvent='webkitAnimationEnd';}}// binding to window is necessary to make hot reload work in IE in strict mode
	var raf=inBrowser&&window.requestAnimationFrame?window.requestAnimationFrame.bind(window):setTimeout;function nextFrame(fn){raf(function(){raf(fn);});}function addTransitionClass(el,cls){(el._transitionClasses||(el._transitionClasses=[])).push(cls);addClass(el,cls);}function removeTransitionClass(el,cls){if(el._transitionClasses){remove$1(el._transitionClasses,cls);}removeClass(el,cls);}function whenTransitionEnds(el,expectedType,cb){var ref=getTransitionInfo(el,expectedType);var type=ref.type;var timeout=ref.timeout;var propCount=ref.propCount;if(!type){return cb();}var event=type===TRANSITION?transitionEndEvent:animationEndEvent;var ended=0;var end=function(){el.removeEventListener(event,onEnd);cb();};var onEnd=function(e){if(e.target===el){if(++ended>=propCount){end();}}};setTimeout(function(){if(ended<propCount){end();}},timeout+1);el.addEventListener(event,onEnd);}var transformRE=/\b(transform|all)(,|$)/;function getTransitionInfo(el,expectedType){var styles=window.getComputedStyle(el);var transitioneDelays=styles[transitionProp+'Delay'].split(', ');var transitionDurations=styles[transitionProp+'Duration'].split(', ');var transitionTimeout=getTimeout(transitioneDelays,transitionDurations);var animationDelays=styles[animationProp+'Delay'].split(', ');var animationDurations=styles[animationProp+'Duration'].split(', ');var animationTimeout=getTimeout(animationDelays,animationDurations);var type;var timeout=0;var propCount=0;/* istanbul ignore if */if(expectedType===TRANSITION){if(transitionTimeout>0){type=TRANSITION;timeout=transitionTimeout;propCount=transitionDurations.length;}}else if(expectedType===ANIMATION){if(animationTimeout>0){type=ANIMATION;timeout=animationTimeout;propCount=animationDurations.length;}}else{timeout=Math.max(transitionTimeout,animationTimeout);type=timeout>0?transitionTimeout>animationTimeout?TRANSITION:ANIMATION:null;propCount=type?type===TRANSITION?transitionDurations.length:animationDurations.length:0;}var hasTransform=type===TRANSITION&&transformRE.test(styles[transitionProp+'Property']);return{type:type,timeout:timeout,propCount:propCount,hasTransform:hasTransform};}function getTimeout(delays,durations){/* istanbul ignore next */while(delays.length<durations.length){delays=delays.concat(delays);}return Math.max.apply(null,durations.map(function(d,i){return toMs(d)+toMs(delays[i]);}));}function toMs(s){return Number(s.slice(0,-1))*1000;}/*  */function enter(vnode,toggleDisplay){var el=vnode.elm;// call leave callback now
	if(el._leaveCb){el._leaveCb.cancelled=true;el._leaveCb();}var data=resolveTransition(vnode.data.transition);if(!data){return;}/* istanbul ignore if */if(el._enterCb||el.nodeType!==1){return;}var css=data.css;var type=data.type;var enterClass=data.enterClass;var enterToClass=data.enterToClass;var enterActiveClass=data.enterActiveClass;var appearClass=data.appearClass;var appearToClass=data.appearToClass;var appearActiveClass=data.appearActiveClass;var beforeEnter=data.beforeEnter;var enter=data.enter;var afterEnter=data.afterEnter;var enterCancelled=data.enterCancelled;var beforeAppear=data.beforeAppear;var appear=data.appear;var afterAppear=data.afterAppear;var appearCancelled=data.appearCancelled;// activeInstance will always be the <transition> component managing this
	// transition. One edge case to check is when the <transition> is placed
	// as the root node of a child component. In that case we need to check
	// <transition>'s parent for appear check.
	var context=activeInstance;var transitionNode=activeInstance.$vnode;while(transitionNode&&transitionNode.parent){transitionNode=transitionNode.parent;context=transitionNode.context;}var isAppear=!context._isMounted||!vnode.isRootInsert;if(isAppear&&!appear&&appear!==''){return;}var startClass=isAppear?appearClass:enterClass;var activeClass=isAppear?appearActiveClass:enterActiveClass;var toClass=isAppear?appearToClass:enterToClass;var beforeEnterHook=isAppear?beforeAppear||beforeEnter:beforeEnter;var enterHook=isAppear?typeof appear==='function'?appear:enter:enter;var afterEnterHook=isAppear?afterAppear||afterEnter:afterEnter;var enterCancelledHook=isAppear?appearCancelled||enterCancelled:enterCancelled;var expectsCSS=css!==false&&!isIE9;var userWantsControl=enterHook&&// enterHook may be a bound method which exposes
	// the length of original fn as _length
	(enterHook._length||enterHook.length)>1;var cb=el._enterCb=once(function(){if(expectsCSS){removeTransitionClass(el,toClass);removeTransitionClass(el,activeClass);}if(cb.cancelled){if(expectsCSS){removeTransitionClass(el,startClass);}enterCancelledHook&&enterCancelledHook(el);}else{afterEnterHook&&afterEnterHook(el);}el._enterCb=null;});if(!vnode.data.show){// remove pending leave element on enter by injecting an insert hook
	mergeVNodeHook(vnode.data.hook||(vnode.data.hook={}),'insert',function(){var parent=el.parentNode;var pendingNode=parent&&parent._pending&&parent._pending[vnode.key];if(pendingNode&&pendingNode.tag===vnode.tag&&pendingNode.elm._leaveCb){pendingNode.elm._leaveCb();}enterHook&&enterHook(el,cb);},'transition-insert');}// start enter transition
	beforeEnterHook&&beforeEnterHook(el);if(expectsCSS){addTransitionClass(el,startClass);addTransitionClass(el,activeClass);nextFrame(function(){addTransitionClass(el,toClass);removeTransitionClass(el,startClass);if(!cb.cancelled&&!userWantsControl){whenTransitionEnds(el,type,cb);}});}if(vnode.data.show){toggleDisplay&&toggleDisplay();enterHook&&enterHook(el,cb);}if(!expectsCSS&&!userWantsControl){cb();}}function leave(vnode,rm){var el=vnode.elm;// call enter callback now
	if(el._enterCb){el._enterCb.cancelled=true;el._enterCb();}var data=resolveTransition(vnode.data.transition);if(!data){return rm();}/* istanbul ignore if */if(el._leaveCb||el.nodeType!==1){return;}var css=data.css;var type=data.type;var leaveClass=data.leaveClass;var leaveToClass=data.leaveToClass;var leaveActiveClass=data.leaveActiveClass;var beforeLeave=data.beforeLeave;var leave=data.leave;var afterLeave=data.afterLeave;var leaveCancelled=data.leaveCancelled;var delayLeave=data.delayLeave;var expectsCSS=css!==false&&!isIE9;var userWantsControl=leave&&// leave hook may be a bound method which exposes
	// the length of original fn as _length
	(leave._length||leave.length)>1;var cb=el._leaveCb=once(function(){if(el.parentNode&&el.parentNode._pending){el.parentNode._pending[vnode.key]=null;}if(expectsCSS){removeTransitionClass(el,leaveToClass);removeTransitionClass(el,leaveActiveClass);}if(cb.cancelled){if(expectsCSS){removeTransitionClass(el,leaveClass);}leaveCancelled&&leaveCancelled(el);}else{rm();afterLeave&&afterLeave(el);}el._leaveCb=null;});if(delayLeave){delayLeave(performLeave);}else{performLeave();}function performLeave(){// the delayed leave may have already been cancelled
	if(cb.cancelled){return;}// record leaving element
	if(!vnode.data.show){(el.parentNode._pending||(el.parentNode._pending={}))[vnode.key]=vnode;}beforeLeave&&beforeLeave(el);if(expectsCSS){addTransitionClass(el,leaveClass);addTransitionClass(el,leaveActiveClass);nextFrame(function(){addTransitionClass(el,leaveToClass);removeTransitionClass(el,leaveClass);if(!cb.cancelled&&!userWantsControl){whenTransitionEnds(el,type,cb);}});}leave&&leave(el,cb);if(!expectsCSS&&!userWantsControl){cb();}}}function resolveTransition(def$$1){if(!def$$1){return;}/* istanbul ignore else */if(typeof def$$1==='object'){var res={};if(def$$1.css!==false){extend(res,autoCssTransition(def$$1.name||'v'));}extend(res,def$$1);return res;}else if(typeof def$$1==='string'){return autoCssTransition(def$$1);}}var autoCssTransition=cached(function(name){return{enterClass:name+"-enter",leaveClass:name+"-leave",appearClass:name+"-enter",enterToClass:name+"-enter-to",leaveToClass:name+"-leave-to",appearToClass:name+"-enter-to",enterActiveClass:name+"-enter-active",leaveActiveClass:name+"-leave-active",appearActiveClass:name+"-enter-active"};});function once(fn){var called=false;return function(){if(!called){called=true;fn();}};}function _enter(_,vnode){if(!vnode.data.show){enter(vnode);}}var transition=inBrowser?{create:_enter,activate:_enter,remove:function remove(vnode,rm){/* istanbul ignore else */if(!vnode.data.show){leave(vnode,rm);}else{rm();}}}:{};var platformModules=[attrs,klass,events,domProps,style,transition];/*  */// the directive module should be applied last, after all
	// built-in modules have been applied.
	var modules=platformModules.concat(baseModules);var patch$1=createPatchFunction({nodeOps:nodeOps,modules:modules});/**
	 * Not type checking this file because flow doesn't like attaching
	 * properties to Elements.
	 */var modelableTagRE=/^input|select|textarea|vue-component-[0-9]+(-[0-9a-zA-Z_-]*)?$/;/* istanbul ignore if */if(isIE9){// http://www.matts411.com/post/internet-explorer-9-oninput/
	document.addEventListener('selectionchange',function(){var el=document.activeElement;if(el&&el.vmodel){trigger(el,'input');}});}var model={inserted:function inserted(el,binding,vnode){{if(!modelableTagRE.test(vnode.tag)){warn("v-model is not supported on element type: <"+vnode.tag+">. "+'If you are working with contenteditable, it\'s recommended to '+'wrap a library dedicated for that purpose inside a custom component.',vnode.context);}}if(vnode.tag==='select'){var cb=function(){setSelected(el,binding,vnode.context);};cb();/* istanbul ignore if */if(isIE||isEdge){setTimeout(cb,0);}}else if(vnode.tag==='textarea'||el.type==='text'){el._vModifiers=binding.modifiers;if(!binding.modifiers.lazy){if(!isAndroid){el.addEventListener('compositionstart',onCompositionStart);el.addEventListener('compositionend',onCompositionEnd);}/* istanbul ignore if */if(isIE9){el.vmodel=true;}}}},componentUpdated:function componentUpdated(el,binding,vnode){if(vnode.tag==='select'){setSelected(el,binding,vnode.context);// in case the options rendered by v-for have changed,
	// it's possible that the value is out-of-sync with the rendered options.
	// detect such cases and filter out values that no longer has a matching
	// option in the DOM.
	var needReset=el.multiple?binding.value.some(function(v){return hasNoMatchingOption(v,el.options);}):binding.value!==binding.oldValue&&hasNoMatchingOption(binding.value,el.options);if(needReset){trigger(el,'change');}}}};function setSelected(el,binding,vm){var value=binding.value;var isMultiple=el.multiple;if(isMultiple&&!Array.isArray(value)){"development"!=='production'&&warn("<select multiple v-model=\""+binding.expression+"\"> "+"expects an Array value for its binding, but got "+Object.prototype.toString.call(value).slice(8,-1),vm);return;}var selected,option;for(var i=0,l=el.options.length;i<l;i++){option=el.options[i];if(isMultiple){selected=looseIndexOf(value,getValue(option))>-1;if(option.selected!==selected){option.selected=selected;}}else{if(looseEqual(getValue(option),value)){if(el.selectedIndex!==i){el.selectedIndex=i;}return;}}}if(!isMultiple){el.selectedIndex=-1;}}function hasNoMatchingOption(value,options){for(var i=0,l=options.length;i<l;i++){if(looseEqual(getValue(options[i]),value)){return false;}}return true;}function getValue(option){return'_value'in option?option._value:option.value;}function onCompositionStart(e){e.target.composing=true;}function onCompositionEnd(e){e.target.composing=false;trigger(e.target,'input');}function trigger(el,type){var e=document.createEvent('HTMLEvents');e.initEvent(type,true,true);el.dispatchEvent(e);}/*  */// recursively search for possible transition defined inside the component root
	function locateNode(vnode){return vnode.componentInstance&&(!vnode.data||!vnode.data.transition)?locateNode(vnode.componentInstance._vnode):vnode;}var show={bind:function bind(el,ref,vnode){var value=ref.value;vnode=locateNode(vnode);var transition=vnode.data&&vnode.data.transition;var originalDisplay=el.__vOriginalDisplay=el.style.display==='none'?'':el.style.display;if(value&&transition&&!isIE9){vnode.data.show=true;enter(vnode,function(){el.style.display=originalDisplay;});}else{el.style.display=value?originalDisplay:'none';}},update:function update(el,ref,vnode){var value=ref.value;var oldValue=ref.oldValue;/* istanbul ignore if */if(value===oldValue){return;}vnode=locateNode(vnode);var transition=vnode.data&&vnode.data.transition;if(transition&&!isIE9){vnode.data.show=true;if(value){enter(vnode,function(){el.style.display=el.__vOriginalDisplay;});}else{leave(vnode,function(){el.style.display='none';});}}else{el.style.display=value?el.__vOriginalDisplay:'none';}},unbind:function unbind(el,binding,vnode,oldVnode,isDestroy){if(!isDestroy){el.style.display=el.__vOriginalDisplay;}}};var platformDirectives={model:model,show:show};/*  */// Provides transition support for a single element/component.
	// supports transition mode (out-in / in-out)
	var transitionProps={name:String,appear:Boolean,css:Boolean,mode:String,type:String,enterClass:String,leaveClass:String,enterToClass:String,leaveToClass:String,enterActiveClass:String,leaveActiveClass:String,appearClass:String,appearActiveClass:String,appearToClass:String};// in case the child is also an abstract component, e.g. <keep-alive>
	// we want to recursively retrieve the real component to be rendered
	function getRealChild(vnode){var compOptions=vnode&&vnode.componentOptions;if(compOptions&&compOptions.Ctor.options.abstract){return getRealChild(getFirstComponentChild(compOptions.children));}else{return vnode;}}function extractTransitionData(comp){var data={};var options=comp.$options;// props
	for(var key in options.propsData){data[key]=comp[key];}// events.
	// extract listeners and pass them directly to the transition methods
	var listeners=options._parentListeners;for(var key$1 in listeners){data[camelize(key$1)]=listeners[key$1].fn;}return data;}function placeholder(h,rawChild){return /\d-keep-alive$/.test(rawChild.tag)?h('keep-alive'):null;}function hasParentTransition(vnode){while(vnode=vnode.parent){if(vnode.data.transition){return true;}}}function isSameChild(child,oldChild){return oldChild.key===child.key&&oldChild.tag===child.tag;}var Transition={name:'transition',props:transitionProps,abstract:true,render:function render(h){var this$1=this;var children=this.$slots.default;if(!children){return;}// filter out text nodes (possible whitespaces)
	children=children.filter(function(c){return c.tag;});/* istanbul ignore if */if(!children.length){return;}// warn multiple elements
	if("development"!=='production'&&children.length>1){warn('<transition> can only be used on a single element. Use '+'<transition-group> for lists.',this.$parent);}var mode=this.mode;// warn invalid mode
	if("development"!=='production'&&mode&&mode!=='in-out'&&mode!=='out-in'){warn('invalid <transition> mode: '+mode,this.$parent);}var rawChild=children[0];// if this is a component root node and the component's
	// parent container node also has transition, skip.
	if(hasParentTransition(this.$vnode)){return rawChild;}// apply transition data to child
	// use getRealChild() to ignore abstract components e.g. keep-alive
	var child=getRealChild(rawChild);/* istanbul ignore if */if(!child){return rawChild;}if(this._leaving){return placeholder(h,rawChild);}// ensure a key that is unique to the vnode type and to this transition
	// component instance. This key will be used to remove pending leaving nodes
	// during entering.
	var id="__transition-"+this._uid+"-";var key=child.key=child.key==null?id+child.tag:isPrimitive(child.key)?String(child.key).indexOf(id)===0?child.key:id+child.key:child.key;var data=(child.data||(child.data={})).transition=extractTransitionData(this);var oldRawChild=this._vnode;var oldChild=getRealChild(oldRawChild);// mark v-show
	// so that the transition module can hand over the control to the directive
	if(child.data.directives&&child.data.directives.some(function(d){return d.name==='show';})){child.data.show=true;}if(oldChild&&oldChild.data&&!isSameChild(child,oldChild)){// replace old child transition data with fresh one
	// important for dynamic transitions!
	var oldData=oldChild&&(oldChild.data.transition=extend({},data));// handle transition mode
	if(mode==='out-in'){// return placeholder node and queue update when leave finishes
	this._leaving=true;mergeVNodeHook(oldData,'afterLeave',function(){this$1._leaving=false;this$1.$forceUpdate();},key);return placeholder(h,rawChild);}else if(mode==='in-out'){var delayedLeave;var performLeave=function(){delayedLeave();};mergeVNodeHook(data,'afterEnter',performLeave,key);mergeVNodeHook(data,'enterCancelled',performLeave,key);mergeVNodeHook(oldData,'delayLeave',function(leave){delayedLeave=leave;},key);}}return rawChild;}};/*  */// Provides transition support for list items.
	// supports move transitions using the FLIP technique.
	// Because the vdom's children update algorithm is "unstable" - i.e.
	// it doesn't guarantee the relative positioning of removed elements,
	// we force transition-group to update its children into two passes:
	// in the first pass, we remove all nodes that need to be removed,
	// triggering their leaving transition; in the second pass, we insert/move
	// into the final disired state. This way in the second pass removed
	// nodes will remain where they should be.
	var props=extend({tag:String,moveClass:String},transitionProps);delete props.mode;var TransitionGroup={props:props,render:function render(h){var tag=this.tag||this.$vnode.data.tag||'span';var map=Object.create(null);var prevChildren=this.prevChildren=this.children;var rawChildren=this.$slots.default||[];var children=this.children=[];var transitionData=extractTransitionData(this);for(var i=0;i<rawChildren.length;i++){var c=rawChildren[i];if(c.tag){if(c.key!=null&&String(c.key).indexOf('__vlist')!==0){children.push(c);map[c.key]=c;(c.data||(c.data={})).transition=transitionData;}else{var opts=c.componentOptions;var name=opts?opts.Ctor.options.name||opts.tag:c.tag;warn("<transition-group> children must be keyed: <"+name+">");}}}if(prevChildren){var kept=[];var removed=[];for(var i$1=0;i$1<prevChildren.length;i$1++){var c$1=prevChildren[i$1];c$1.data.transition=transitionData;c$1.data.pos=c$1.elm.getBoundingClientRect();if(map[c$1.key]){kept.push(c$1);}else{removed.push(c$1);}}this.kept=h(tag,null,kept);this.removed=removed;}return h(tag,null,children);},beforeUpdate:function beforeUpdate(){// force removing pass
	this.__patch__(this._vnode,this.kept,false,// hydrating
	true// removeOnly (!important, avoids unnecessary moves)
	);this._vnode=this.kept;},updated:function updated(){var children=this.prevChildren;var moveClass=this.moveClass||(this.name||'v')+'-move';if(!children.length||!this.hasMove(children[0].elm,moveClass)){return;}// we divide the work into three loops to avoid mixing DOM reads and writes
	// in each iteration - which helps prevent layout thrashing.
	children.forEach(callPendingCbs);children.forEach(recordPosition);children.forEach(applyTranslation);// force reflow to put everything in position
	var f=document.body.offsetHeight;// eslint-disable-line
	children.forEach(function(c){if(c.data.moved){var el=c.elm;var s=el.style;addTransitionClass(el,moveClass);s.transform=s.WebkitTransform=s.transitionDuration='';el.addEventListener(transitionEndEvent,el._moveCb=function cb(e){if(!e||/transform$/.test(e.propertyName)){el.removeEventListener(transitionEndEvent,cb);el._moveCb=null;removeTransitionClass(el,moveClass);}});}});},methods:{hasMove:function hasMove(el,moveClass){/* istanbul ignore if */if(!hasTransition){return false;}if(this._hasMove!=null){return this._hasMove;}addTransitionClass(el,moveClass);var info=getTransitionInfo(el);removeTransitionClass(el,moveClass);return this._hasMove=info.hasTransform;}}};function callPendingCbs(c){/* istanbul ignore if */if(c.elm._moveCb){c.elm._moveCb();}/* istanbul ignore if */if(c.elm._enterCb){c.elm._enterCb();}}function recordPosition(c){c.data.newPos=c.elm.getBoundingClientRect();}function applyTranslation(c){var oldPos=c.data.pos;var newPos=c.data.newPos;var dx=oldPos.left-newPos.left;var dy=oldPos.top-newPos.top;if(dx||dy){c.data.moved=true;var s=c.elm.style;s.transform=s.WebkitTransform="translate("+dx+"px,"+dy+"px)";s.transitionDuration='0s';}}var platformComponents={Transition:Transition,TransitionGroup:TransitionGroup};/*  */// install platform specific utils
	Vue$3.config.isUnknownElement=isUnknownElement;Vue$3.config.isReservedTag=isReservedTag;Vue$3.config.getTagNamespace=getTagNamespace;Vue$3.config.mustUseProp=mustUseProp;// install platform runtime directives & components
	extend(Vue$3.options.directives,platformDirectives);extend(Vue$3.options.components,platformComponents);// install platform patch function
	Vue$3.prototype.__patch__=inBrowser?patch$1:noop;// wrap mount
	Vue$3.prototype.$mount=function(el,hydrating){el=el&&inBrowser?query(el):undefined;return this._mount(el,hydrating);};if("development"!=='production'&&inBrowser&&typeof console!=='undefined'){console[console.info?'info':'log']("You are running Vue in development mode.\n"+"Make sure to turn on production mode when deploying for production.\n"+"See more tips at https://vuejs.org/guide/deployment.html");}// devtools global hook
	/* istanbul ignore next */setTimeout(function(){if(config.devtools){if(devtools){devtools.emit('init',Vue$3);}else if("development"!=='production'&&inBrowser&&!isEdge&&/Chrome\/\d+/.test(window.navigator.userAgent)){console[console.info?'info':'log']('Download the Vue Devtools extension for a better development experience:\n'+'https://github.com/vuejs/vue-devtools');}}},0);/*  */// check whether current browser encodes a char inside attribute values
	function shouldDecode(content,encoded){var div=document.createElement('div');div.innerHTML="<div a=\""+content+"\">";return div.innerHTML.indexOf(encoded)>0;}// #3663
	// IE encodes newlines inside attribute values while other browsers don't
	var shouldDecodeNewlines=inBrowser?shouldDecode('\n','&#10;'):false;/*  */var decoder;function decode(html){decoder=decoder||document.createElement('div');decoder.innerHTML=html;return decoder.textContent;}/*  */var isUnaryTag=makeMap('area,base,br,col,embed,frame,hr,img,input,isindex,keygen,'+'link,meta,param,source,track,wbr',true);// Elements that you can, intentionally, leave open
	// (and which close themselves)
	var canBeLeftOpenTag=makeMap('colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr,source',true);// HTML5 tags https://html.spec.whatwg.org/multipage/indices.html#elements-3
	// Phrasing Content https://html.spec.whatwg.org/multipage/dom.html#phrasing-content
	var isNonPhrasingTag=makeMap('address,article,aside,base,blockquote,body,caption,col,colgroup,dd,'+'details,dialog,div,dl,dt,fieldset,figcaption,figure,footer,form,'+'h1,h2,h3,h4,h5,h6,head,header,hgroup,hr,html,legend,li,menuitem,meta,'+'optgroup,option,param,rp,rt,source,style,summary,tbody,td,tfoot,th,thead,'+'title,tr,track',true);/**
	 * Not type-checking this file because it's mostly vendor code.
	 *//*!
	 * HTML Parser By John Resig (ejohn.org)
	 * Modified by Juriy "kangax" Zaytsev
	 * Original code by Erik Arvidsson, Mozilla Public License
	 * http://erik.eae.net/simplehtmlparser/simplehtmlparser.js
	 */// Regular Expressions for parsing tags and attributes
	var singleAttrIdentifier=/([^\s"'<>/=]+)/;var singleAttrAssign=/(?:=)/;var singleAttrValues=[// attr value double quotes
	/"([^"]*)"+/.source,// attr value, single quotes
	/'([^']*)'+/.source,// attr value, no quotes
	/([^\s"'=<>`]+)/.source];var attribute=new RegExp('^\\s*'+singleAttrIdentifier.source+'(?:\\s*('+singleAttrAssign.source+')'+'\\s*(?:'+singleAttrValues.join('|')+'))?');// could use https://www.w3.org/TR/1999/REC-xml-names-19990114/#NT-QName
	// but for Vue templates we can enforce a simple charset
	var ncname='[a-zA-Z_][\\w\\-\\.]*';var qnameCapture='((?:'+ncname+'\\:)?'+ncname+')';var startTagOpen=new RegExp('^<'+qnameCapture);var startTagClose=/^\s*(\/?)>/;var endTag=new RegExp('^<\\/'+qnameCapture+'[^>]*>');var doctype=/^<!DOCTYPE [^>]+>/i;var comment=/^<!--/;var conditionalComment=/^<!\[/;var IS_REGEX_CAPTURING_BROKEN=false;'x'.replace(/x(.)?/g,function(m,g){IS_REGEX_CAPTURING_BROKEN=g==='';});// Special Elements (can contain anything)
	var isScriptOrStyle=makeMap('script,style',true);var reCache={};var ltRE=/&lt;/g;var gtRE=/&gt;/g;var nlRE=/&#10;/g;var ampRE=/&amp;/g;var quoteRE=/&quot;/g;function decodeAttr(value,shouldDecodeNewlines){if(shouldDecodeNewlines){value=value.replace(nlRE,'\n');}return value.replace(ltRE,'<').replace(gtRE,'>').replace(ampRE,'&').replace(quoteRE,'"');}function parseHTML(html,options){var stack=[];var expectHTML=options.expectHTML;var isUnaryTag$$1=options.isUnaryTag||no;var index=0;var last,lastTag;while(html){last=html;// Make sure we're not in a script or style element
	if(!lastTag||!isScriptOrStyle(lastTag)){var textEnd=html.indexOf('<');if(textEnd===0){// Comment:
	if(comment.test(html)){var commentEnd=html.indexOf('-->');if(commentEnd>=0){advance(commentEnd+3);continue;}}// http://en.wikipedia.org/wiki/Conditional_comment#Downlevel-revealed_conditional_comment
	if(conditionalComment.test(html)){var conditionalEnd=html.indexOf(']>');if(conditionalEnd>=0){advance(conditionalEnd+2);continue;}}// Doctype:
	var doctypeMatch=html.match(doctype);if(doctypeMatch){advance(doctypeMatch[0].length);continue;}// End tag:
	var endTagMatch=html.match(endTag);if(endTagMatch){var curIndex=index;advance(endTagMatch[0].length);parseEndTag(endTagMatch[1],curIndex,index);continue;}// Start tag:
	var startTagMatch=parseStartTag();if(startTagMatch){handleStartTag(startTagMatch);continue;}}var text=void 0,rest$1=void 0,next=void 0;if(textEnd>0){rest$1=html.slice(textEnd);while(!endTag.test(rest$1)&&!startTagOpen.test(rest$1)&&!comment.test(rest$1)&&!conditionalComment.test(rest$1)){// < in plain text, be forgiving and treat it as text
	next=rest$1.indexOf('<',1);if(next<0){break;}textEnd+=next;rest$1=html.slice(textEnd);}text=html.substring(0,textEnd);advance(textEnd);}if(textEnd<0){text=html;html='';}if(options.chars&&text){options.chars(text);}}else{var stackedTag=lastTag.toLowerCase();var reStackedTag=reCache[stackedTag]||(reCache[stackedTag]=new RegExp('([\\s\\S]*?)(</'+stackedTag+'[^>]*>)','i'));var endTagLength=0;var rest=html.replace(reStackedTag,function(all,text,endTag){endTagLength=endTag.length;if(stackedTag!=='script'&&stackedTag!=='style'&&stackedTag!=='noscript'){text=text.replace(/<!--([\s\S]*?)-->/g,'$1').replace(/<!\[CDATA\[([\s\S]*?)]]>/g,'$1');}if(options.chars){options.chars(text);}return'';});index+=html.length-rest.length;html=rest;parseEndTag(stackedTag,index-endTagLength,index);}if(html===last&&options.chars){options.chars(html);break;}}// Clean up any remaining tags
	parseEndTag();function advance(n){index+=n;html=html.substring(n);}function parseStartTag(){var start=html.match(startTagOpen);if(start){var match={tagName:start[1],attrs:[],start:index};advance(start[0].length);var end,attr;while(!(end=html.match(startTagClose))&&(attr=html.match(attribute))){advance(attr[0].length);match.attrs.push(attr);}if(end){match.unarySlash=end[1];advance(end[0].length);match.end=index;return match;}}}function handleStartTag(match){var tagName=match.tagName;var unarySlash=match.unarySlash;if(expectHTML){if(lastTag==='p'&&isNonPhrasingTag(tagName)){parseEndTag(lastTag);}if(canBeLeftOpenTag(tagName)&&lastTag===tagName){parseEndTag(tagName);}}var unary=isUnaryTag$$1(tagName)||tagName==='html'&&lastTag==='head'||!!unarySlash;var l=match.attrs.length;var attrs=new Array(l);for(var i=0;i<l;i++){var args=match.attrs[i];// hackish work around FF bug https://bugzilla.mozilla.org/show_bug.cgi?id=369778
	if(IS_REGEX_CAPTURING_BROKEN&&args[0].indexOf('""')===-1){if(args[3]===''){delete args[3];}if(args[4]===''){delete args[4];}if(args[5]===''){delete args[5];}}var value=args[3]||args[4]||args[5]||'';attrs[i]={name:args[1],value:decodeAttr(value,options.shouldDecodeNewlines)};}if(!unary){stack.push({tag:tagName,lowerCasedTag:tagName.toLowerCase(),attrs:attrs});lastTag=tagName;unarySlash='';}if(options.start){options.start(tagName,attrs,unary,match.start,match.end);}}function parseEndTag(tagName,start,end){var pos,lowerCasedTagName;if(start==null){start=index;}if(end==null){end=index;}if(tagName){lowerCasedTagName=tagName.toLowerCase();}// Find the closest opened tag of the same type
	if(tagName){for(pos=stack.length-1;pos>=0;pos--){if(stack[pos].lowerCasedTag===lowerCasedTagName){break;}}}else{// If no tag name is provided, clean shop
	pos=0;}if(pos>=0){// Close all the open elements, up the stack
	for(var i=stack.length-1;i>=pos;i--){if(options.end){options.end(stack[i].tag,start,end);}}// Remove the open elements from the stack
	stack.length=pos;lastTag=pos&&stack[pos-1].tag;}else if(lowerCasedTagName==='br'){if(options.start){options.start(tagName,[],true,start,end);}}else if(lowerCasedTagName==='p'){if(options.start){options.start(tagName,[],false,start,end);}if(options.end){options.end(tagName,start,end);}}}}/*  */function parseFilters(exp){var inSingle=false;var inDouble=false;var inTemplateString=false;var inRegex=false;var curly=0;var square=0;var paren=0;var lastFilterIndex=0;var c,prev,i,expression,filters;for(i=0;i<exp.length;i++){prev=c;c=exp.charCodeAt(i);if(inSingle){if(c===0x27&&prev!==0x5C){inSingle=false;}}else if(inDouble){if(c===0x22&&prev!==0x5C){inDouble=false;}}else if(inTemplateString){if(c===0x60&&prev!==0x5C){inTemplateString=false;}}else if(inRegex){if(c===0x2f&&prev!==0x5C){inRegex=false;}}else if(c===0x7C&&// pipe
	exp.charCodeAt(i+1)!==0x7C&&exp.charCodeAt(i-1)!==0x7C&&!curly&&!square&&!paren){if(expression===undefined){// first filter, end of expression
	lastFilterIndex=i+1;expression=exp.slice(0,i).trim();}else{pushFilter();}}else{switch(c){case 0x22:inDouble=true;break;// "
	case 0x27:inSingle=true;break;// '
	case 0x60:inTemplateString=true;break;// `
	case 0x28:paren++;break;// (
	case 0x29:paren--;break;// )
	case 0x5B:square++;break;// [
	case 0x5D:square--;break;// ]
	case 0x7B:curly++;break;// {
	case 0x7D:curly--;break;// }
	}if(c===0x2f){// /
	var j=i-1;var p=void 0;// find first non-whitespace prev char
	for(;j>=0;j--){p=exp.charAt(j);if(p!==' '){break;}}if(!p||!/[\w$]/.test(p)){inRegex=true;}}}}if(expression===undefined){expression=exp.slice(0,i).trim();}else if(lastFilterIndex!==0){pushFilter();}function pushFilter(){(filters||(filters=[])).push(exp.slice(lastFilterIndex,i).trim());lastFilterIndex=i+1;}if(filters){for(i=0;i<filters.length;i++){expression=wrapFilter(expression,filters[i]);}}return expression;}function wrapFilter(exp,filter){var i=filter.indexOf('(');if(i<0){// _f: resolveFilter
	return"_f(\""+filter+"\")("+exp+")";}else{var name=filter.slice(0,i);var args=filter.slice(i+1);return"_f(\""+name+"\")("+exp+","+args;}}/*  */var defaultTagRE=/\{\{((?:.|\n)+?)\}\}/g;var regexEscapeRE=/[-.*+?^${}()|[\]\/\\]/g;var buildRegex=cached(function(delimiters){var open=delimiters[0].replace(regexEscapeRE,'\\$&');var close=delimiters[1].replace(regexEscapeRE,'\\$&');return new RegExp(open+'((?:.|\\n)+?)'+close,'g');});function parseText(text,delimiters){var tagRE=delimiters?buildRegex(delimiters):defaultTagRE;if(!tagRE.test(text)){return;}var tokens=[];var lastIndex=tagRE.lastIndex=0;var match,index;while(match=tagRE.exec(text)){index=match.index;// push text token
	if(index>lastIndex){tokens.push(JSON.stringify(text.slice(lastIndex,index)));}// tag token
	var exp=parseFilters(match[1].trim());tokens.push("_s("+exp+")");lastIndex=index+match[0].length;}if(lastIndex<text.length){tokens.push(JSON.stringify(text.slice(lastIndex)));}return tokens.join('+');}/*  */function baseWarn(msg){console.error("[Vue parser]: "+msg);}function pluckModuleFunction(modules,key){return modules?modules.map(function(m){return m[key];}).filter(function(_){return _;}):[];}function addProp(el,name,value){(el.props||(el.props=[])).push({name:name,value:value});}function addAttr(el,name,value){(el.attrs||(el.attrs=[])).push({name:name,value:value});}function addDirective(el,name,rawName,value,arg,modifiers){(el.directives||(el.directives=[])).push({name:name,rawName:rawName,value:value,arg:arg,modifiers:modifiers});}function addHandler(el,name,value,modifiers,important){// check capture modifier
	if(modifiers&&modifiers.capture){delete modifiers.capture;name='!'+name;// mark the event as captured
	}if(modifiers&&modifiers.once){delete modifiers.once;name='~'+name;// mark the event as once
	}var events;if(modifiers&&modifiers.native){delete modifiers.native;events=el.nativeEvents||(el.nativeEvents={});}else{events=el.events||(el.events={});}var newHandler={value:value,modifiers:modifiers};var handlers=events[name];/* istanbul ignore if */if(Array.isArray(handlers)){important?handlers.unshift(newHandler):handlers.push(newHandler);}else if(handlers){events[name]=important?[newHandler,handlers]:[handlers,newHandler];}else{events[name]=newHandler;}}function getBindingAttr(el,name,getStatic){var dynamicValue=getAndRemoveAttr(el,':'+name)||getAndRemoveAttr(el,'v-bind:'+name);if(dynamicValue!=null){return parseFilters(dynamicValue);}else if(getStatic!==false){var staticValue=getAndRemoveAttr(el,name);if(staticValue!=null){return JSON.stringify(staticValue);}}}function getAndRemoveAttr(el,name){var val;if((val=el.attrsMap[name])!=null){var list=el.attrsList;for(var i=0,l=list.length;i<l;i++){if(list[i].name===name){list.splice(i,1);break;}}}return val;}var len;var str;var chr;var index$1;var expressionPos;var expressionEndPos;/**
	 * parse directive model to do the array update transform. a[idx] = val => $$a.splice($$idx, 1, val)
	 *
	 * for loop possible cases:
	 *
	 * - test
	 * - test[idx]
	 * - test[test1[idx]]
	 * - test["a"][idx]
	 * - xxx.test[a[a].test1[idx]]
	 * - test.xxx.a["asa"][test1[idx]]
	 *
	 */function parseModel(val){str=val;len=str.length;index$1=expressionPos=expressionEndPos=0;if(val.indexOf('[')<0||val.lastIndexOf(']')<len-1){return{exp:val,idx:null};}while(!eof()){chr=next();/* istanbul ignore if */if(isStringStart(chr)){parseString(chr);}else if(chr===0x5B){parseBracket(chr);}}return{exp:val.substring(0,expressionPos),idx:val.substring(expressionPos+1,expressionEndPos)};}function next(){return str.charCodeAt(++index$1);}function eof(){return index$1>=len;}function isStringStart(chr){return chr===0x22||chr===0x27;}function parseBracket(chr){var inBracket=1;expressionPos=index$1;while(!eof()){chr=next();if(isStringStart(chr)){parseString(chr);continue;}if(chr===0x5B){inBracket++;}if(chr===0x5D){inBracket--;}if(inBracket===0){expressionEndPos=index$1;break;}}}function parseString(chr){var stringQuote=chr;while(!eof()){chr=next();if(chr===stringQuote){break;}}}/*  */var dirRE=/^v-|^@|^:/;var forAliasRE=/(.*?)\s+(?:in|of)\s+(.*)/;var forIteratorRE=/\((\{[^}]*\}|[^,]*),([^,]*)(?:,([^,]*))?\)/;var bindRE=/^:|^v-bind:/;var onRE=/^@|^v-on:/;var argRE=/:(.*)$/;var modifierRE=/\.[^.]+/g;var decodeHTMLCached=cached(decode);// configurable state
	var warn$1;var platformGetTagNamespace;var platformMustUseProp;var platformIsPreTag;var preTransforms;var transforms;var postTransforms;var delimiters;/**
	 * Convert HTML string to AST.
	 */function parse(template,options){warn$1=options.warn||baseWarn;platformGetTagNamespace=options.getTagNamespace||no;platformMustUseProp=options.mustUseProp||no;platformIsPreTag=options.isPreTag||no;preTransforms=pluckModuleFunction(options.modules,'preTransformNode');transforms=pluckModuleFunction(options.modules,'transformNode');postTransforms=pluckModuleFunction(options.modules,'postTransformNode');delimiters=options.delimiters;var stack=[];var preserveWhitespace=options.preserveWhitespace!==false;var root;var currentParent;var inVPre=false;var inPre=false;var warned=false;parseHTML(template,{expectHTML:options.expectHTML,isUnaryTag:options.isUnaryTag,shouldDecodeNewlines:options.shouldDecodeNewlines,start:function start(tag,attrs,unary){// check namespace.
	// inherit parent ns if there is one
	var ns=currentParent&&currentParent.ns||platformGetTagNamespace(tag);// handle IE svg bug
	/* istanbul ignore if */if(isIE&&ns==='svg'){attrs=guardIESVGBug(attrs);}var element={type:1,tag:tag,attrsList:attrs,attrsMap:makeAttrsMap(attrs),parent:currentParent,children:[]};if(ns){element.ns=ns;}if(isForbiddenTag(element)&&!isServerRendering()){element.forbidden=true;"development"!=='production'&&warn$1('Templates should only be responsible for mapping the state to the '+'UI. Avoid placing tags with side-effects in your templates, such as '+"<"+tag+">"+', as they will not be parsed.');}// apply pre-transforms
	for(var i=0;i<preTransforms.length;i++){preTransforms[i](element,options);}if(!inVPre){processPre(element);if(element.pre){inVPre=true;}}if(platformIsPreTag(element.tag)){inPre=true;}if(inVPre){processRawAttrs(element);}else{processFor(element);processIf(element);processOnce(element);processKey(element);// determine whether this is a plain element after
	// removing structural attributes
	element.plain=!element.key&&!attrs.length;processRef(element);processSlot(element);processComponent(element);for(var i$1=0;i$1<transforms.length;i$1++){transforms[i$1](element,options);}processAttrs(element);}function checkRootConstraints(el){if("development"!=='production'&&!warned){if(el.tag==='slot'||el.tag==='template'){warned=true;warn$1("Cannot use <"+el.tag+"> as component root element because it may "+'contain multiple nodes:\n'+template);}if(el.attrsMap.hasOwnProperty('v-for')){warned=true;warn$1('Cannot use v-for on stateful component root element because '+'it renders multiple elements:\n'+template);}}}// tree management
	if(!root){root=element;checkRootConstraints(root);}else if(!stack.length){// allow root elements with v-if, v-else-if and v-else
	if(root.if&&(element.elseif||element.else)){checkRootConstraints(element);addIfCondition(root,{exp:element.elseif,block:element});}else if("development"!=='production'&&!warned){warned=true;warn$1("Component template should contain exactly one root element:"+"\n\n"+template+"\n\n"+"If you are using v-if on multiple elements, "+"use v-else-if to chain them instead.");}}if(currentParent&&!element.forbidden){if(element.elseif||element.else){processIfConditions(element,currentParent);}else if(element.slotScope){// scoped slot
	currentParent.plain=false;var name=element.slotTarget||'default';(currentParent.scopedSlots||(currentParent.scopedSlots={}))[name]=element;}else{currentParent.children.push(element);element.parent=currentParent;}}if(!unary){currentParent=element;stack.push(element);}// apply post-transforms
	for(var i$2=0;i$2<postTransforms.length;i$2++){postTransforms[i$2](element,options);}},end:function end(){// remove trailing whitespace
	var element=stack[stack.length-1];var lastNode=element.children[element.children.length-1];if(lastNode&&lastNode.type===3&&lastNode.text===' '){element.children.pop();}// pop stack
	stack.length-=1;currentParent=stack[stack.length-1];// check pre state
	if(element.pre){inVPre=false;}if(platformIsPreTag(element.tag)){inPre=false;}},chars:function chars(text){if(!currentParent){if("development"!=='production'&&!warned&&text===template){warned=true;warn$1('Component template requires a root element, rather than just text:\n\n'+template);}return;}// IE textarea placeholder bug
	/* istanbul ignore if */if(isIE&&currentParent.tag==='textarea'&&currentParent.attrsMap.placeholder===text){return;}var children=currentParent.children;text=inPre||text.trim()?decodeHTMLCached(text)// only preserve whitespace if its not right after a starting tag
	:preserveWhitespace&&children.length?' ':'';if(text){var expression;if(!inVPre&&text!==' '&&(expression=parseText(text,delimiters))){children.push({type:2,expression:expression,text:text});}else if(text!==' '||children[children.length-1].text!==' '){currentParent.children.push({type:3,text:text});}}}});return root;}function processPre(el){if(getAndRemoveAttr(el,'v-pre')!=null){el.pre=true;}}function processRawAttrs(el){var l=el.attrsList.length;if(l){var attrs=el.attrs=new Array(l);for(var i=0;i<l;i++){attrs[i]={name:el.attrsList[i].name,value:JSON.stringify(el.attrsList[i].value)};}}else if(!el.pre){// non root node in pre blocks with no attributes
	el.plain=true;}}function processKey(el){var exp=getBindingAttr(el,'key');if(exp){if("development"!=='production'&&el.tag==='template'){warn$1("<template> cannot be keyed. Place the key on real elements instead.");}el.key=exp;}}function processRef(el){var ref=getBindingAttr(el,'ref');if(ref){el.ref=ref;el.refInFor=checkInFor(el);}}function processFor(el){var exp;if(exp=getAndRemoveAttr(el,'v-for')){var inMatch=exp.match(forAliasRE);if(!inMatch){"development"!=='production'&&warn$1("Invalid v-for expression: "+exp);return;}el.for=inMatch[2].trim();var alias=inMatch[1].trim();var iteratorMatch=alias.match(forIteratorRE);if(iteratorMatch){el.alias=iteratorMatch[1].trim();el.iterator1=iteratorMatch[2].trim();if(iteratorMatch[3]){el.iterator2=iteratorMatch[3].trim();}}else{el.alias=alias;}}}function processIf(el){var exp=getAndRemoveAttr(el,'v-if');if(exp){el.if=exp;addIfCondition(el,{exp:exp,block:el});}else{if(getAndRemoveAttr(el,'v-else')!=null){el.else=true;}var elseif=getAndRemoveAttr(el,'v-else-if');if(elseif){el.elseif=elseif;}}}function processIfConditions(el,parent){var prev=findPrevElement(parent.children);if(prev&&prev.if){addIfCondition(prev,{exp:el.elseif,block:el});}else{warn$1("v-"+(el.elseif?'else-if="'+el.elseif+'"':'else')+" "+"used on element <"+el.tag+"> without corresponding v-if.");}}function findPrevElement(children){var i=children.length;while(i--){if(children[i].type===1){return children[i];}else{if("development"!=='production'&&children[i].text!==' '){warn$1("text \""+children[i].text.trim()+"\" between v-if and v-else(-if) "+"will be ignored.");}children.pop();}}}function addIfCondition(el,condition){if(!el.ifConditions){el.ifConditions=[];}el.ifConditions.push(condition);}function processOnce(el){var once=getAndRemoveAttr(el,'v-once');if(once!=null){el.once=true;}}function processSlot(el){if(el.tag==='slot'){el.slotName=getBindingAttr(el,'name');if("development"!=='production'&&el.key){warn$1("`key` does not work on <slot> because slots are abstract outlets "+"and can possibly expand into multiple elements. "+"Use the key on a wrapping element instead.");}}else{var slotTarget=getBindingAttr(el,'slot');if(slotTarget){el.slotTarget=slotTarget==='""'?'"default"':slotTarget;}if(el.tag==='template'){el.slotScope=getAndRemoveAttr(el,'scope');}}}function processComponent(el){var binding;if(binding=getBindingAttr(el,'is')){el.component=binding;}if(getAndRemoveAttr(el,'inline-template')!=null){el.inlineTemplate=true;}}function processAttrs(el){var list=el.attrsList;var i,l,name,rawName,value,arg,modifiers,isProp;for(i=0,l=list.length;i<l;i++){name=rawName=list[i].name;value=list[i].value;if(dirRE.test(name)){// mark element as dynamic
	el.hasBindings=true;// modifiers
	modifiers=parseModifiers(name);if(modifiers){name=name.replace(modifierRE,'');}if(bindRE.test(name)){// v-bind
	name=name.replace(bindRE,'');value=parseFilters(value);isProp=false;if(modifiers){if(modifiers.prop){isProp=true;name=camelize(name);if(name==='innerHtml'){name='innerHTML';}}if(modifiers.camel){name=camelize(name);}}if(isProp||platformMustUseProp(el.tag,el.attrsMap.type,name)){addProp(el,name,value);}else{addAttr(el,name,value);}}else if(onRE.test(name)){// v-on
	name=name.replace(onRE,'');addHandler(el,name,value,modifiers);}else{// normal directives
	name=name.replace(dirRE,'');// parse arg
	var argMatch=name.match(argRE);if(argMatch&&(arg=argMatch[1])){name=name.slice(0,-(arg.length+1));}addDirective(el,name,rawName,value,arg,modifiers);if("development"!=='production'&&name==='model'){checkForAliasModel(el,value);}}}else{// literal attribute
	{var expression=parseText(value,delimiters);if(expression){warn$1(name+"=\""+value+"\": "+'Interpolation inside attributes has been removed. '+'Use v-bind or the colon shorthand instead. For example, '+'instead of <div id="{{ val }}">, use <div :id="val">.');}}addAttr(el,name,JSON.stringify(value));}}}function checkInFor(el){var parent=el;while(parent){if(parent.for!==undefined){return true;}parent=parent.parent;}return false;}function parseModifiers(name){var match=name.match(modifierRE);if(match){var ret={};match.forEach(function(m){ret[m.slice(1)]=true;});return ret;}}function makeAttrsMap(attrs){var map={};for(var i=0,l=attrs.length;i<l;i++){if("development"!=='production'&&map[attrs[i].name]&&!isIE){warn$1('duplicate attribute: '+attrs[i].name);}map[attrs[i].name]=attrs[i].value;}return map;}function isForbiddenTag(el){return el.tag==='style'||el.tag==='script'&&(!el.attrsMap.type||el.attrsMap.type==='text/javascript');}var ieNSBug=/^xmlns:NS\d+/;var ieNSPrefix=/^NS\d+:/;/* istanbul ignore next */function guardIESVGBug(attrs){var res=[];for(var i=0;i<attrs.length;i++){var attr=attrs[i];if(!ieNSBug.test(attr.name)){attr.name=attr.name.replace(ieNSPrefix,'');res.push(attr);}}return res;}function checkForAliasModel(el,value){var _el=el;while(_el){if(_el.for&&_el.alias===value){warn$1("<"+el.tag+" v-model=\""+value+"\">: "+"You are binding v-model directly to a v-for iteration alias. "+"This will not be able to modify the v-for source array because "+"writing to the alias is like modifying a function local variable. "+"Consider using an array of objects and use v-model on an object property instead.");}_el=_el.parent;}}/*  */var isStaticKey;var isPlatformReservedTag;var genStaticKeysCached=cached(genStaticKeys$1);/**
	 * Goal of the optimizer: walk the generated template AST tree
	 * and detect sub-trees that are purely static, i.e. parts of
	 * the DOM that never needs to change.
	 *
	 * Once we detect these sub-trees, we can:
	 *
	 * 1. Hoist them into constants, so that we no longer need to
	 *    create fresh nodes for them on each re-render;
	 * 2. Completely skip them in the patching process.
	 */function optimize(root,options){if(!root){return;}isStaticKey=genStaticKeysCached(options.staticKeys||'');isPlatformReservedTag=options.isReservedTag||no;// first pass: mark all non-static nodes.
	markStatic(root);// second pass: mark static roots.
	markStaticRoots(root,false);}function genStaticKeys$1(keys){return makeMap('type,tag,attrsList,attrsMap,plain,parent,children,attrs'+(keys?','+keys:''));}function markStatic(node){node.static=isStatic(node);if(node.type===1){// do not make component slot content static. this avoids
	// 1. components not able to mutate slot nodes
	// 2. static slot content fails for hot-reloading
	if(!isPlatformReservedTag(node.tag)&&node.tag!=='slot'&&node.attrsMap['inline-template']==null){return;}for(var i=0,l=node.children.length;i<l;i++){var child=node.children[i];markStatic(child);if(!child.static){node.static=false;}}}}function markStaticRoots(node,isInFor){if(node.type===1){if(node.static||node.once){node.staticInFor=isInFor;}// For a node to qualify as a static root, it should have children that
	// are not just static text. Otherwise the cost of hoisting out will
	// outweigh the benefits and it's better off to just always render it fresh.
	if(node.static&&node.children.length&&!(node.children.length===1&&node.children[0].type===3)){node.staticRoot=true;return;}else{node.staticRoot=false;}if(node.children){for(var i=0,l=node.children.length;i<l;i++){markStaticRoots(node.children[i],isInFor||!!node.for);}}if(node.ifConditions){walkThroughConditionsBlocks(node.ifConditions,isInFor);}}}function walkThroughConditionsBlocks(conditionBlocks,isInFor){for(var i=1,len=conditionBlocks.length;i<len;i++){markStaticRoots(conditionBlocks[i].block,isInFor);}}function isStatic(node){if(node.type===2){// expression
	return false;}if(node.type===3){// text
	return true;}return!!(node.pre||!node.hasBindings&&// no dynamic bindings
	!node.if&&!node.for&&// not v-if or v-for or v-else
	!isBuiltInTag(node.tag)&&// not a built-in
	isPlatformReservedTag(node.tag)&&// not a component
	!isDirectChildOfTemplateFor(node)&&Object.keys(node).every(isStaticKey));}function isDirectChildOfTemplateFor(node){while(node.parent){node=node.parent;if(node.tag!=='template'){return false;}if(node.for){return true;}}return false;}/*  */var fnExpRE=/^\s*([\w$_]+|\([^)]*?\))\s*=>|^function\s*\(/;var simplePathRE=/^\s*[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['.*?']|\[".*?"]|\[\d+]|\[[A-Za-z_$][\w$]*])*\s*$/;// keyCode aliases
	var keyCodes={esc:27,tab:9,enter:13,space:32,up:38,left:37,right:39,down:40,'delete':[8,46]};var modifierCode={stop:'$event.stopPropagation();',prevent:'$event.preventDefault();',self:'if($event.target !== $event.currentTarget)return;',ctrl:'if(!$event.ctrlKey)return;',shift:'if(!$event.shiftKey)return;',alt:'if(!$event.altKey)return;',meta:'if(!$event.metaKey)return;'};function genHandlers(events,native){var res=native?'nativeOn:{':'on:{';for(var name in events){res+="\""+name+"\":"+genHandler(name,events[name])+",";}return res.slice(0,-1)+'}';}function genHandler(name,handler){if(!handler){return'function(){}';}else if(Array.isArray(handler)){return"["+handler.map(function(handler){return genHandler(name,handler);}).join(',')+"]";}else if(!handler.modifiers){return fnExpRE.test(handler.value)||simplePathRE.test(handler.value)?handler.value:"function($event){"+handler.value+"}";}else{var code='';var keys=[];for(var key in handler.modifiers){if(modifierCode[key]){code+=modifierCode[key];}else{keys.push(key);}}if(keys.length){code=genKeyFilter(keys)+code;}var handlerCode=simplePathRE.test(handler.value)?handler.value+'($event)':handler.value;return'function($event){'+code+handlerCode+'}';}}function genKeyFilter(keys){return"if("+keys.map(genFilterCode).join('&&')+")return;";}function genFilterCode(key){var keyVal=parseInt(key,10);if(keyVal){return"$event.keyCode!=="+keyVal;}var alias=keyCodes[key];return"_k($event.keyCode,"+JSON.stringify(key)+(alias?','+JSON.stringify(alias):'')+")";}/*  */function bind$2(el,dir){el.wrapData=function(code){return"_b("+code+",'"+el.tag+"',"+dir.value+(dir.modifiers&&dir.modifiers.prop?',true':'')+")";};}/*  */var baseDirectives={bind:bind$2,cloak:noop};/*  */// configurable state
	var warn$2;var transforms$1;var dataGenFns;var platformDirectives$1;var isPlatformReservedTag$1;var staticRenderFns;var onceCount;var currentOptions;function generate(ast,options){// save previous staticRenderFns so generate calls can be nested
	var prevStaticRenderFns=staticRenderFns;var currentStaticRenderFns=staticRenderFns=[];var prevOnceCount=onceCount;onceCount=0;currentOptions=options;warn$2=options.warn||baseWarn;transforms$1=pluckModuleFunction(options.modules,'transformCode');dataGenFns=pluckModuleFunction(options.modules,'genData');platformDirectives$1=options.directives||{};isPlatformReservedTag$1=options.isReservedTag||no;var code=ast?genElement(ast):'_c("div")';staticRenderFns=prevStaticRenderFns;onceCount=prevOnceCount;return{render:"with(this){return "+code+"}",staticRenderFns:currentStaticRenderFns};}function genElement(el){if(el.staticRoot&&!el.staticProcessed){return genStatic(el);}else if(el.once&&!el.onceProcessed){return genOnce(el);}else if(el.for&&!el.forProcessed){return genFor(el);}else if(el.if&&!el.ifProcessed){return genIf(el);}else if(el.tag==='template'&&!el.slotTarget){return genChildren(el)||'void 0';}else if(el.tag==='slot'){return genSlot(el);}else{// component or element
	var code;if(el.component){code=genComponent(el.component,el);}else{var data=el.plain?undefined:genData(el);var children=el.inlineTemplate?null:genChildren(el,true);code="_c('"+el.tag+"'"+(data?","+data:'')+(children?","+children:'')+")";}// module transforms
	for(var i=0;i<transforms$1.length;i++){code=transforms$1[i](el,code);}return code;}}// hoist static sub-trees out
	function genStatic(el){el.staticProcessed=true;staticRenderFns.push("with(this){return "+genElement(el)+"}");return"_m("+(staticRenderFns.length-1)+(el.staticInFor?',true':'')+")";}// v-once
	function genOnce(el){el.onceProcessed=true;if(el.if&&!el.ifProcessed){return genIf(el);}else if(el.staticInFor){var key='';var parent=el.parent;while(parent){if(parent.for){key=parent.key;break;}parent=parent.parent;}if(!key){"development"!=='production'&&warn$2("v-once can only be used inside v-for that is keyed. ");return genElement(el);}return"_o("+genElement(el)+","+onceCount++ +(key?","+key:"")+")";}else{return genStatic(el);}}function genIf(el){el.ifProcessed=true;// avoid recursion
	return genIfConditions(el.ifConditions.slice());}function genIfConditions(conditions){if(!conditions.length){return'_e()';}var condition=conditions.shift();if(condition.exp){return"("+condition.exp+")?"+genTernaryExp(condition.block)+":"+genIfConditions(conditions);}else{return""+genTernaryExp(condition.block);}// v-if with v-once should generate code like (a)?_m(0):_m(1)
	function genTernaryExp(el){return el.once?genOnce(el):genElement(el);}}function genFor(el){var exp=el.for;var alias=el.alias;var iterator1=el.iterator1?","+el.iterator1:'';var iterator2=el.iterator2?","+el.iterator2:'';el.forProcessed=true;// avoid recursion
	return"_l(("+exp+"),"+"function("+alias+iterator1+iterator2+"){"+"return "+genElement(el)+'})';}function genData(el){var data='{';// directives first.
	// directives may mutate the el's other properties before they are generated.
	var dirs=genDirectives(el);if(dirs){data+=dirs+',';}// key
	if(el.key){data+="key:"+el.key+",";}// ref
	if(el.ref){data+="ref:"+el.ref+",";}if(el.refInFor){data+="refInFor:true,";}// pre
	if(el.pre){data+="pre:true,";}// record original tag name for components using "is" attribute
	if(el.component){data+="tag:\""+el.tag+"\",";}// module data generation functions
	for(var i=0;i<dataGenFns.length;i++){data+=dataGenFns[i](el);}// attributes
	if(el.attrs){data+="attrs:{"+genProps(el.attrs)+"},";}// DOM props
	if(el.props){data+="domProps:{"+genProps(el.props)+"},";}// event handlers
	if(el.events){data+=genHandlers(el.events)+",";}if(el.nativeEvents){data+=genHandlers(el.nativeEvents,true)+",";}// slot target
	if(el.slotTarget){data+="slot:"+el.slotTarget+",";}// scoped slots
	if(el.scopedSlots){data+=genScopedSlots(el.scopedSlots)+",";}// inline-template
	if(el.inlineTemplate){var inlineTemplate=genInlineTemplate(el);if(inlineTemplate){data+=inlineTemplate+",";}}data=data.replace(/,$/,'')+'}';// v-bind data wrap
	if(el.wrapData){data=el.wrapData(data);}return data;}function genDirectives(el){var dirs=el.directives;if(!dirs){return;}var res='directives:[';var hasRuntime=false;var i,l,dir,needRuntime;for(i=0,l=dirs.length;i<l;i++){dir=dirs[i];needRuntime=true;var gen=platformDirectives$1[dir.name]||baseDirectives[dir.name];if(gen){// compile-time directive that manipulates AST.
	// returns true if it also needs a runtime counterpart.
	needRuntime=!!gen(el,dir,warn$2);}if(needRuntime){hasRuntime=true;res+="{name:\""+dir.name+"\",rawName:\""+dir.rawName+"\""+(dir.value?",value:("+dir.value+"),expression:"+JSON.stringify(dir.value):'')+(dir.arg?",arg:\""+dir.arg+"\"":'')+(dir.modifiers?",modifiers:"+JSON.stringify(dir.modifiers):'')+"},";}}if(hasRuntime){return res.slice(0,-1)+']';}}function genInlineTemplate(el){var ast=el.children[0];if("development"!=='production'&&(el.children.length>1||ast.type!==1)){warn$2('Inline-template components must have exactly one child element.');}if(ast.type===1){var inlineRenderFns=generate(ast,currentOptions);return"inlineTemplate:{render:function(){"+inlineRenderFns.render+"},staticRenderFns:["+inlineRenderFns.staticRenderFns.map(function(code){return"function(){"+code+"}";}).join(',')+"]}";}}function genScopedSlots(slots){return"scopedSlots:{"+Object.keys(slots).map(function(key){return genScopedSlot(key,slots[key]);}).join(',')+"}";}function genScopedSlot(key,el){return key+":function("+String(el.attrsMap.scope)+"){"+"return "+(el.tag==='template'?genChildren(el)||'void 0':genElement(el))+"}";}function genChildren(el,checkSkip){var children=el.children;if(children.length){var el$1=children[0];// optimize single v-for
	if(children.length===1&&el$1.for&&el$1.tag!=='template'&&el$1.tag!=='slot'){return genElement(el$1);}var normalizationType=getNormalizationType(children);return"["+children.map(genNode).join(',')+"]"+(checkSkip?normalizationType?","+normalizationType:'':'');}}// determine the normalization needed for the children array.
	// 0: no normalization needed
	// 1: simple normalization needed (possible 1-level deep nested array)
	// 2: full normalization needed
	function getNormalizationType(children){var res=0;for(var i=0;i<children.length;i++){var el=children[i];if(el.type!==1){continue;}if(needsNormalization(el)||el.ifConditions&&el.ifConditions.some(function(c){return needsNormalization(c.block);})){res=2;break;}if(maybeComponent(el)||el.ifConditions&&el.ifConditions.some(function(c){return maybeComponent(c.block);})){res=1;}}return res;}function needsNormalization(el){return el.for!==undefined||el.tag==='template'||el.tag==='slot';}function maybeComponent(el){return!isPlatformReservedTag$1(el.tag);}function genNode(node){if(node.type===1){return genElement(node);}else{return genText(node);}}function genText(text){return"_v("+(text.type===2?text.expression// no need for () because already wrapped in _s()
	:transformSpecialNewlines(JSON.stringify(text.text)))+")";}function genSlot(el){var slotName=el.slotName||'"default"';var children=genChildren(el);var res="_t("+slotName+(children?","+children:'');var attrs=el.attrs&&"{"+el.attrs.map(function(a){return camelize(a.name)+":"+a.value;}).join(',')+"}";var bind$$1=el.attrsMap['v-bind'];if((attrs||bind$$1)&&!children){res+=",null";}if(attrs){res+=","+attrs;}if(bind$$1){res+=(attrs?'':',null')+","+bind$$1;}return res+')';}// componentName is el.component, take it as argument to shun flow's pessimistic refinement
	function genComponent(componentName,el){var children=el.inlineTemplate?null:genChildren(el,true);return"_c("+componentName+","+genData(el)+(children?","+children:'')+")";}function genProps(props){var res='';for(var i=0;i<props.length;i++){var prop=props[i];res+="\""+prop.name+"\":"+transformSpecialNewlines(prop.value)+",";}return res.slice(0,-1);}// #3895, #4268
	function transformSpecialNewlines(text){return text.replace(/\u2028/g,'\\u2028').replace(/\u2029/g,'\\u2029');}/*  *//**
	 * Compile a template.
	 */function compile$1(template,options){var ast=parse(template.trim(),options);optimize(ast,options);var code=generate(ast,options);return{ast:ast,render:code.render,staticRenderFns:code.staticRenderFns};}/*  */// operators like typeof, instanceof and in are allowed
	var prohibitedKeywordRE=new RegExp('\\b'+('do,if,for,let,new,try,var,case,else,with,await,break,catch,class,const,'+'super,throw,while,yield,delete,export,import,return,switch,default,'+'extends,finally,continue,debugger,function,arguments').split(',').join('\\b|\\b')+'\\b');// check valid identifier for v-for
	var identRE=/[A-Za-z_$][\w$]*/;// strip strings in expressions
	var stripStringRE=/'(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*"|`(?:[^`\\]|\\.)*\$\{|\}(?:[^`\\]|\\.)*`|`(?:[^`\\]|\\.)*`/g;// detect problematic expressions in a template
	function detectErrors(ast){var errors=[];if(ast){checkNode(ast,errors);}return errors;}function checkNode(node,errors){if(node.type===1){for(var name in node.attrsMap){if(dirRE.test(name)){var value=node.attrsMap[name];if(value){if(name==='v-for'){checkFor(node,"v-for=\""+value+"\"",errors);}else{checkExpression(value,name+"=\""+value+"\"",errors);}}}}if(node.children){for(var i=0;i<node.children.length;i++){checkNode(node.children[i],errors);}}}else if(node.type===2){checkExpression(node.expression,node.text,errors);}}function checkFor(node,text,errors){checkExpression(node.for||'',text,errors);checkIdentifier(node.alias,'v-for alias',text,errors);checkIdentifier(node.iterator1,'v-for iterator',text,errors);checkIdentifier(node.iterator2,'v-for iterator',text,errors);}function checkIdentifier(ident,type,text,errors){if(typeof ident==='string'&&!identRE.test(ident)){errors.push("- invalid "+type+" \""+ident+"\" in expression: "+text);}}function checkExpression(exp,text,errors){try{new Function("return "+exp);}catch(e){var keywordMatch=exp.replace(stripStringRE,'').match(prohibitedKeywordRE);if(keywordMatch){errors.push("- avoid using JavaScript keyword as property name: "+"\""+keywordMatch[0]+"\" in expression "+text);}else{errors.push("- invalid expression: "+text);}}}/*  */function transformNode(el,options){var warn=options.warn||baseWarn;var staticClass=getAndRemoveAttr(el,'class');if("development"!=='production'&&staticClass){var expression=parseText(staticClass,options.delimiters);if(expression){warn("class=\""+staticClass+"\": "+'Interpolation inside attributes has been removed. '+'Use v-bind or the colon shorthand instead. For example, '+'instead of <div class="{{ val }}">, use <div :class="val">.');}}if(staticClass){el.staticClass=JSON.stringify(staticClass);}var classBinding=getBindingAttr(el,'class',false/* getStatic */);if(classBinding){el.classBinding=classBinding;}}function genData$1(el){var data='';if(el.staticClass){data+="staticClass:"+el.staticClass+",";}if(el.classBinding){data+="class:"+el.classBinding+",";}return data;}var klass$1={staticKeys:['staticClass'],transformNode:transformNode,genData:genData$1};/*  */function transformNode$1(el,options){var warn=options.warn||baseWarn;var staticStyle=getAndRemoveAttr(el,'style');if(staticStyle){/* istanbul ignore if */{var expression=parseText(staticStyle,options.delimiters);if(expression){warn("style=\""+staticStyle+"\": "+'Interpolation inside attributes has been removed. '+'Use v-bind or the colon shorthand instead. For example, '+'instead of <div style="{{ val }}">, use <div :style="val">.');}}el.staticStyle=JSON.stringify(parseStyleText(staticStyle));}var styleBinding=getBindingAttr(el,'style',false/* getStatic */);if(styleBinding){el.styleBinding=styleBinding;}}function genData$2(el){var data='';if(el.staticStyle){data+="staticStyle:"+el.staticStyle+",";}if(el.styleBinding){data+="style:("+el.styleBinding+"),";}return data;}var style$1={staticKeys:['staticStyle'],transformNode:transformNode$1,genData:genData$2};var modules$1=[klass$1,style$1];/*  */var warn$3;function model$1(el,dir,_warn){warn$3=_warn;var value=dir.value;var modifiers=dir.modifiers;var tag=el.tag;var type=el.attrsMap.type;{var dynamicType=el.attrsMap['v-bind:type']||el.attrsMap[':type'];if(tag==='input'&&dynamicType){warn$3("<input :type=\""+dynamicType+"\" v-model=\""+value+"\">:\n"+"v-model does not support dynamic input types. Use v-if branches instead.");}}if(tag==='select'){genSelect(el,value,modifiers);}else if(tag==='input'&&type==='checkbox'){genCheckboxModel(el,value,modifiers);}else if(tag==='input'&&type==='radio'){genRadioModel(el,value,modifiers);}else{genDefaultModel(el,value,modifiers);}// ensure runtime directive metadata
	return true;}function genCheckboxModel(el,value,modifiers){if("development"!=='production'&&el.attrsMap.checked!=null){warn$3("<"+el.tag+" v-model=\""+value+"\" checked>:\n"+"inline checked attributes will be ignored when using v-model. "+'Declare initial values in the component\'s data option instead.');}var number=modifiers&&modifiers.number;var valueBinding=getBindingAttr(el,'value')||'null';var trueValueBinding=getBindingAttr(el,'true-value')||'true';var falseValueBinding=getBindingAttr(el,'false-value')||'false';addProp(el,'checked',"Array.isArray("+value+")"+"?_i("+value+","+valueBinding+")>-1"+(trueValueBinding==='true'?":("+value+")":":_q("+value+","+trueValueBinding+")"));addHandler(el,'click',"var $$a="+value+","+'$$el=$event.target,'+"$$c=$$el.checked?("+trueValueBinding+"):("+falseValueBinding+");"+'if(Array.isArray($$a)){'+"var $$v="+(number?'_n('+valueBinding+')':valueBinding)+","+'$$i=_i($$a,$$v);'+"if($$c){$$i<0&&("+value+"=$$a.concat($$v))}"+"else{$$i>-1&&("+value+"=$$a.slice(0,$$i).concat($$a.slice($$i+1)))}"+"}else{"+value+"=$$c}",null,true);}function genRadioModel(el,value,modifiers){if("development"!=='production'&&el.attrsMap.checked!=null){warn$3("<"+el.tag+" v-model=\""+value+"\" checked>:\n"+"inline checked attributes will be ignored when using v-model. "+'Declare initial values in the component\'s data option instead.');}var number=modifiers&&modifiers.number;var valueBinding=getBindingAttr(el,'value')||'null';valueBinding=number?"_n("+valueBinding+")":valueBinding;addProp(el,'checked',"_q("+value+","+valueBinding+")");addHandler(el,'click',genAssignmentCode(value,valueBinding),null,true);}function genDefaultModel(el,value,modifiers){{if(el.tag==='input'&&el.attrsMap.value){warn$3("<"+el.tag+" v-model=\""+value+"\" value=\""+el.attrsMap.value+"\">:\n"+'inline value attributes will be ignored when using v-model. '+'Declare initial values in the component\'s data option instead.');}if(el.tag==='textarea'&&el.children.length){warn$3("<textarea v-model=\""+value+"\">:\n"+'inline content inside <textarea> will be ignored when using v-model. '+'Declare initial values in the component\'s data option instead.');}}var type=el.attrsMap.type;var ref=modifiers||{};var lazy=ref.lazy;var number=ref.number;var trim=ref.trim;var event=lazy||isIE&&type==='range'?'change':'input';var needCompositionGuard=!lazy&&type!=='range';var isNative=el.tag==='input'||el.tag==='textarea';var valueExpression=isNative?"$event.target.value"+(trim?'.trim()':''):trim?"(typeof $event === 'string' ? $event.trim() : $event)":"$event";valueExpression=number||type==='number'?"_n("+valueExpression+")":valueExpression;var code=genAssignmentCode(value,valueExpression);if(isNative&&needCompositionGuard){code="if($event.target.composing)return;"+code;}// inputs with type="file" are read only and setting the input's
	// value will throw an error.
	if("development"!=='production'&&type==='file'){warn$3("<"+el.tag+" v-model=\""+value+"\" type=\"file\">:\n"+"File inputs are read only. Use a v-on:change listener instead.");}addProp(el,'value',isNative?"_s("+value+")":"("+value+")");addHandler(el,event,code,null,true);if(trim||number||type==='number'){addHandler(el,'blur','$forceUpdate()');}}function genSelect(el,value,modifiers){{el.children.some(checkOptionWarning);}var number=modifiers&&modifiers.number;var assignment="Array.prototype.filter"+".call($event.target.options,function(o){return o.selected})"+".map(function(o){var val = \"_value\" in o ? o._value : o.value;"+"return "+(number?'_n(val)':'val')+"})"+(el.attrsMap.multiple==null?'[0]':'');var code=genAssignmentCode(value,assignment);addHandler(el,'change',code,null,true);}function checkOptionWarning(option){if(option.type===1&&option.tag==='option'&&option.attrsMap.selected!=null){warn$3("<select v-model=\""+option.parent.attrsMap['v-model']+"\">:\n"+'inline selected attributes on <option> will be ignored when using v-model. '+'Declare initial values in the component\'s data option instead.');return true;}return false;}function genAssignmentCode(value,assignment){var modelRs=parseModel(value);if(modelRs.idx===null){return value+"="+assignment;}else{return"var $$exp = "+modelRs.exp+", $$idx = "+modelRs.idx+";"+"if (!Array.isArray($$exp)){"+value+"="+assignment+"}"+"else{$$exp.splice($$idx, 1, "+assignment+")}";}}/*  */function text(el,dir){if(dir.value){addProp(el,'textContent',"_s("+dir.value+")");}}/*  */function html(el,dir){if(dir.value){addProp(el,'innerHTML',"_s("+dir.value+")");}}var directives$1={model:model$1,text:text,html:html};/*  */var cache=Object.create(null);var baseOptions={expectHTML:true,modules:modules$1,staticKeys:genStaticKeys(modules$1),directives:directives$1,isReservedTag:isReservedTag,isUnaryTag:isUnaryTag,mustUseProp:mustUseProp,getTagNamespace:getTagNamespace,isPreTag:isPreTag};function compile$$1(template,options){options=options?extend(extend({},baseOptions),options):baseOptions;return compile$1(template,options);}function compileToFunctions(template,options,vm){var _warn=options&&options.warn||warn;// detect possible CSP restriction
	/* istanbul ignore if */{try{new Function('return 1');}catch(e){if(e.toString().match(/unsafe-eval|CSP/)){_warn('It seems you are using the standalone build of Vue.js in an '+'environment with Content Security Policy that prohibits unsafe-eval. '+'The template compiler cannot work in this environment. Consider '+'relaxing the policy to allow unsafe-eval or pre-compiling your '+'templates into render functions.');}}}var key=options&&options.delimiters?String(options.delimiters)+template:template;if(cache[key]){return cache[key];}var res={};var compiled=compile$$1(template,options);res.render=makeFunction(compiled.render);var l=compiled.staticRenderFns.length;res.staticRenderFns=new Array(l);for(var i=0;i<l;i++){res.staticRenderFns[i]=makeFunction(compiled.staticRenderFns[i]);}{if(res.render===noop||res.staticRenderFns.some(function(fn){return fn===noop;})){_warn("failed to compile template:\n\n"+template+"\n\n"+detectErrors(compiled.ast).join('\n')+'\n\n',vm);}}return cache[key]=res;}function makeFunction(code){try{return new Function(code);}catch(e){return noop;}}/*  */var idToTemplate=cached(function(id){var el=query(id);return el&&el.innerHTML;});var mount=Vue$3.prototype.$mount;Vue$3.prototype.$mount=function(el,hydrating){el=el&&query(el);/* istanbul ignore if */if(el===document.body||el===document.documentElement){"development"!=='production'&&warn("Do not mount Vue to <html> or <body> - mount to normal elements instead.");return this;}var options=this.$options;// resolve template/el and convert to render function
	if(!options.render){var template=options.template;if(template){if(typeof template==='string'){if(template.charAt(0)==='#'){template=idToTemplate(template);/* istanbul ignore if */if("development"!=='production'&&!template){warn("Template element not found or is empty: "+options.template,this);}}}else if(template.nodeType){template=template.innerHTML;}else{{warn('invalid template option:'+template,this);}return this;}}else if(el){template=getOuterHTML(el);}if(template){var ref=compileToFunctions(template,{warn:warn,shouldDecodeNewlines:shouldDecodeNewlines,delimiters:options.delimiters},this);var render=ref.render;var staticRenderFns=ref.staticRenderFns;options.render=render;options.staticRenderFns=staticRenderFns;}}return mount.call(this,el,hydrating);};/**
	 * Get outerHTML of elements, taking care
	 * of SVG elements in IE as well.
	 */function getOuterHTML(el){if(el.outerHTML){return el.outerHTML;}else{var container=document.createElement('div');container.appendChild(el.cloneNode(true));return container.innerHTML;}}Vue$3.compile=compileToFunctions;return Vue$3;});
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(3)

	var Component = __webpack_require__(10)(
	  /* script */
	  __webpack_require__(11),
	  /* template */
	  __webpack_require__(12),
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)
	Component.options.__file = "/Users/matrix/Documents/Netease/NSFI/7-ui/doc/app.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] app.vue: functional components are not supported with templates, they should use render functions.")}

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-76a4a3b3", Component.options)
	  } else {
	    hotAPI.reload("data-v-76a4a3b3", Component.options)
	  }
	})()}

	module.exports = Component.exports


/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(4);
	if(typeof content === 'string') content = [[module.id, content, '']];
	if(content.locals) module.exports = content.locals;
	// add the styles to the DOM
	var update = __webpack_require__(8)("09aad87a", content, false);
	// Hot Module Replacement
	if(false) {
	 // When the styles change, update the <style> tags
	 if(!content.locals) {
	   module.hot.accept("!!./../../node_modules/.npminstall/css-loader/0.25.0/css-loader/index.js!./../../node_modules/.npminstall/vue-loader/10.3.0/vue-loader/lib/style-rewriter.js?id=data-v-76a4a3b3!./../../node_modules/.npminstall/sass-loader/4.1.1/sass-loader/index.js!./../../node_modules/.npminstall/vue-loader/10.3.0/vue-loader/lib/selector.js?type=styles&index=0!./app.vue", function() {
	     var newContent = require("!!./../../node_modules/.npminstall/css-loader/0.25.0/css-loader/index.js!./../../node_modules/.npminstall/vue-loader/10.3.0/vue-loader/lib/style-rewriter.js?id=data-v-76a4a3b3!./../../node_modules/.npminstall/sass-loader/4.1.1/sass-loader/index.js!./../../node_modules/.npminstall/vue-loader/10.3.0/vue-loader/lib/selector.js?type=styles&index=0!./app.vue");
	     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
	     update(newContent);
	   });
	 }
	 // When the module is disposed, remove the <style> tags
	 module.hot.dispose(function() { update(); });
	}

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(5)();
	// imports
	exports.i(__webpack_require__(6), "");

	// module
	exports.push([module.id, "\n@charset \"UTF-8\";\n/*\n\nColorbrewer theme\nOriginal: https://github.com/mbostock/colorbrewer-theme (c) Mike Bostock <mike@ocks.org>\nPorted by Fabrício Tavares de Oliveira\n\n*/\n.hljs {\n  display: block;\n  overflow-x: auto;\n  padding: 0.5em;\n  background: #fff;\n}\n.hljs,\n.hljs-subst {\n  color: #000;\n}\n.hljs-string,\n.hljs-meta,\n.hljs-symbol,\n.hljs-template-tag,\n.hljs-template-variable,\n.hljs-addition {\n  color: #756bb1;\n}\n.hljs-comment,\n.hljs-quote {\n  color: #636363;\n}\n.hljs-number,\n.hljs-regexp,\n.hljs-literal,\n.hljs-bullet,\n.hljs-link {\n  color: #31a354;\n}\n.hljs-deletion,\n.hljs-variable {\n  color: #88f;\n}\n.hljs-keyword,\n.hljs-selector-tag,\n.hljs-title,\n.hljs-section,\n.hljs-built_in,\n.hljs-doctag,\n.hljs-type,\n.hljs-tag,\n.hljs-name,\n.hljs-selector-id,\n.hljs-selector-class,\n.hljs-strong {\n  color: #3182bd;\n}\n.hljs-emphasis {\n  font-style: italic;\n}\n.hljs-attribute {\n  color: #e6550d;\n}\nhtml, body {\n  margin: 0;\n  padding: 0;\n  height: 100%;\n}\n#app {\n  height: 100%;\n}\nbody {\n  font-family: 'Helvetica Neue',Helvetica,'PingFang SC','Hiragino Sans GB','Microsoft YaHei',SimSun,sans-serif;\n  overflow: auto;\n  font-weight: 400;\n  -webkit-font-smoothing: antialiased;\n}\na {\n  color: #4078c0;\n  text-decoration: none;\n}\nbutton, input, select, textarea {\n  font-family: inherit;\n  font-size: inherit;\n  line-height: inherit;\n  color: inherit;\n}\n.hljs {\n  line-height: 1.8;\n  font-family: Menlo, Monaco, Consolas, Courier, monospace;\n  font-size: 12px;\n  padding: 18px 24px;\n  background-color: #f9fafc;\n  border: solid 1px #eaeefb;\n  margin-bottom: 25px;\n  border-radius: 2px;\n  -webkit-font-smoothing: auto;\n}\n.main-cnt {\n  margin-top: -80px;\n  padding: 80px 0 120px;\n  box-sizing: border-box;\n  min-height: 100%;\n}\n.container,\n.page-container {\n  width: 1140px;\n  margin: 0 auto;\n}\n.page-container {\n  padding-top: 55px;\n}\n.page-container h2 {\n    font-size: 28px;\n    color: #1f2d3d;\n    margin: 0;\n}\n.page-container h3 {\n    font-size: 22px;\n}\n.page-container h2, .page-container h3, .page-container h4, .page-container h5 {\n    font-weight: normal;\n    color: #1f2f3d;\n}\n.page-container p {\n    font-size: 14px;\n    color: #5e6d82;\n}\n.demo {\n  margin: 20px 0;\n}\n@media (max-width: 1140px) {\n.container,\n  .page-container {\n    width: 100%;\n}\n}\n", ""]);

	// exports


/***/ },
/* 5 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function () {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for (var i = 0; i < this.length; i++) {
				var item = this[i];
				if (item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function (modules, mediaQuery) {
			if (typeof modules === "string") modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for (var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if (typeof id === "number") alreadyImportedModules[id] = true;
			}
			for (i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if (typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if (mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if (mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(5)();
	// imports


	// module
	exports.push([module.id, "@font-face {\n  font-family: 'icomoon';\n  src:  url(" + __webpack_require__(7) + ");\n  font-weight: normal;\n  font-style: normal;\n}\n\n[class^=\"icon-\"], [class*=\" icon-\"] {\n  /* use !important to prevent issues with browser extensions that change fonts */\n  font-family: 'icomoon' !important;\n  speak: none;\n  font-style: normal;\n  font-weight: normal;\n  font-variant: normal;\n  text-transform: none;\n  line-height: 1;\n\n  /* Better Font Rendering =========== */\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n.icon-rate-face-off:before {\n  content: \"\\E900\";\n}\n.icon-rate-face-1:before {\n  content: \"\\E901\";\n}\n.icon-rate-face-2:before {\n  content: \"\\E902\";\n}\n.icon-rate-face-3:before {\n  content: \"\\E903\";\n}\n\n", ""]);

	// exports


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "0b32c05f9e42c3bd4e26d24ab7fbbadf.eot";

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	/*
	  MIT License http://www.opensource.org/licenses/mit-license.php
	  Author Tobias Koppers @sokra
	  Modified by Evan You @yyx990803
	*/

	var hasDocument = typeof document !== 'undefined'

	if (false) {
	  if (!hasDocument) {
	    throw new Error(
	    'vue-style-loader cannot be used in a non-browser environment. ' +
	    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
	  ) }
	}

	var listToStyles = __webpack_require__(9)

	/*
	type StyleObject = {
	  id: number;
	  parts: Array<StyleObjectPart>
	}

	type StyleObjectPart = {
	  css: string;
	  media: string;
	  sourceMap: ?string
	}
	*/

	var stylesInDom = {/*
	  [id: number]: {
	    id: number,
	    refs: number,
	    parts: Array<(obj?: StyleObjectPart) => void>
	  }
	*/}

	var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
	var singletonElement = null
	var singletonCounter = 0
	var isProduction = false
	var noop = function () {}

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

	module.exports = function (parentId, list, _isProduction) {
	  isProduction = _isProduction

	  var styles = listToStyles(parentId, list)
	  addStylesToDom(styles)

	  return function update (newList) {
	    var mayRemove = []
	    for (var i = 0; i < styles.length; i++) {
	      var item = styles[i]
	      var domStyle = stylesInDom[item.id]
	      domStyle.refs--
	      mayRemove.push(domStyle)
	    }
	    if (newList) {
	      styles = listToStyles(parentId, newList)
	      addStylesToDom(styles)
	    } else {
	      styles = []
	    }
	    for (var i = 0; i < mayRemove.length; i++) {
	      var domStyle = mayRemove[i]
	      if (domStyle.refs === 0) {
	        for (var j = 0; j < domStyle.parts.length; j++) {
	          domStyle.parts[j]()
	        }
	        delete stylesInDom[domStyle.id]
	      }
	    }
	  }
	}

	function addStylesToDom (styles /* Array<StyleObject> */) {
	  for (var i = 0; i < styles.length; i++) {
	    var item = styles[i]
	    var domStyle = stylesInDom[item.id]
	    if (domStyle) {
	      domStyle.refs++
	      for (var j = 0; j < domStyle.parts.length; j++) {
	        domStyle.parts[j](item.parts[j])
	      }
	      for (; j < item.parts.length; j++) {
	        domStyle.parts.push(addStyle(item.parts[j]))
	      }
	      if (domStyle.parts.length > item.parts.length) {
	        domStyle.parts.length = item.parts.length
	      }
	    } else {
	      var parts = []
	      for (var j = 0; j < item.parts.length; j++) {
	        parts.push(addStyle(item.parts[j]))
	      }
	      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
	    }
	  }
	}

	function listToStyles (parentId, list) {
	  var styles = []
	  var newStyles = {}
	  for (var i = 0; i < list.length; i++) {
	    var item = list[i]
	    var id = item[0]
	    var css = item[1]
	    var media = item[2]
	    var sourceMap = item[3]
	    var part = { css: css, media: media, sourceMap: sourceMap }
	    if (!newStyles[id]) {
	      part.id = parentId + ':0'
	      styles.push(newStyles[id] = { id: id, parts: [part] })
	    } else {
	      part.id = parentId + ':' + newStyles[id].parts.length
	      newStyles[id].parts.push(part)
	    }
	  }
	  return styles
	}

	function createStyleElement () {
	  var styleElement = document.createElement('style')
	  styleElement.type = 'text/css'
	  head.appendChild(styleElement)
	  return styleElement
	}

	function addStyle (obj /* StyleObjectPart */) {
	  var update, remove
	  var styleElement = document.querySelector('style[data-vue-ssr-id~="' + obj.id + '"]')
	  var hasSSR = styleElement != null

	  // if in production mode and style is already provided by SSR,
	  // simply do nothing.
	  if (hasSSR && isProduction) {
	    return noop
	  }

	  if (isOldIE) {
	    // use singleton mode for IE9.
	    var styleIndex = singletonCounter++
	    styleElement = singletonElement || (singletonElement = createStyleElement())
	    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
	    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
	  } else {
	    // use multi-style-tag mode in all other cases
	    styleElement = styleElement || createStyleElement()
	    update = applyToTag.bind(null, styleElement)
	    remove = function () {
	      styleElement.parentNode.removeChild(styleElement)
	    }
	  }

	  if (!hasSSR) {
	    update(obj)
	  }

	  return function updateStyle (newObj /* StyleObjectPart */) {
	    if (newObj) {
	      if (newObj.css === obj.css &&
	          newObj.media === obj.media &&
	          newObj.sourceMap === obj.sourceMap) {
	        return
	      }
	      update(obj = newObj)
	    } else {
	      remove()
	    }
	  }
	}

	var replaceText = (function () {
	  var textStore = []

	  return function (index, replacement) {
	    textStore[index] = replacement
	    return textStore.filter(Boolean).join('\n')
	  }
	})()

	function applyToSingletonTag (styleElement, index, remove, obj) {
	  var css = remove ? '' : obj.css

	  if (styleElement.styleSheet) {
	    styleElement.styleSheet.cssText = replaceText(index, css)
	  } else {
	    var cssNode = document.createTextNode(css)
	    var childNodes = styleElement.childNodes
	    if (childNodes[index]) styleElement.removeChild(childNodes[index])
	    if (childNodes.length) {
	      styleElement.insertBefore(cssNode, childNodes[index])
	    } else {
	      styleElement.appendChild(cssNode)
	    }
	  }
	}

	function applyToTag (styleElement, obj) {
	  var css = obj.css
	  var media = obj.media
	  var sourceMap = obj.sourceMap

	  if (media) {
	    styleElement.setAttribute('media', media)
	  }

	  if (sourceMap) {
	    // https://developer.chrome.com/devtools/docs/javascript-debugging
	    // this makes source maps inside style tags work properly in Chrome
	    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
	    // http://stackoverflow.com/a/26603875
	    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
	  }

	  if (styleElement.styleSheet) {
	    styleElement.styleSheet.cssText = css
	  } else {
	    while (styleElement.firstChild) {
	      styleElement.removeChild(styleElement.firstChild)
	    }
	    styleElement.appendChild(document.createTextNode(css))
	  }
	}


/***/ },
/* 9 */
/***/ function(module, exports) {

	/**
	 * Translates the list format produced by css-loader into something
	 * easier to manipulate.
	 */
	module.exports = function listToStyles(parentId, list) {
	  var styles = [];
	  var newStyles = {};
	  for (var i = 0; i < list.length; i++) {
	    var item = list[i];
	    var id = item[0];
	    var css = item[1];
	    var media = item[2];
	    var sourceMap = item[3];
	    var part = {
	      id: parentId + ':' + i,
	      css: css,
	      media: media,
	      sourceMap: sourceMap
	    };
	    if (!newStyles[id]) {
	      styles.push(newStyles[id] = { id: id, parts: [part] });
	    } else {
	      newStyles[id].parts.push(part);
	    }
	  }
	  return styles;
	};

/***/ },
/* 10 */
/***/ function(module, exports) {

	module.exports = function normalizeComponent (
	  rawScriptExports,
	  compiledTemplate,
	  scopeId,
	  cssModules
	) {
	  var esModule
	  var scriptExports = rawScriptExports = rawScriptExports || {}

	  // ES6 modules interop
	  var type = typeof rawScriptExports.default
	  if (type === 'object' || type === 'function') {
	    esModule = rawScriptExports
	    scriptExports = rawScriptExports.default
	  }

	  // Vue.extend constructor export interop
	  var options = typeof scriptExports === 'function'
	    ? scriptExports.options
	    : scriptExports

	  // render functions
	  if (compiledTemplate) {
	    options.render = compiledTemplate.render
	    options.staticRenderFns = compiledTemplate.staticRenderFns
	  }

	  // scopedId
	  if (scopeId) {
	    options._scopeId = scopeId
	  }

	  // inject cssModules
	  if (cssModules) {
	    var computed = options.computed || (options.computed = {})
	    Object.keys(cssModules).forEach(function (key) {
	      var module = cssModules[key]
	      computed[key] = function () { return module }
	    })
	  }

	  return {
	    esModule: esModule,
	    exports: scriptExports,
	    options: options
	  }
	}


/***/ },
/* 11 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	exports.default = {
	    name: 'app',
	    created: function created() {
	        window.addEventListener('hashchange', function () {
	            document.body.scrollTop = 0;
	            document.documentElement.scrollTop = 0;
	        });
	    }
	};

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    attrs: {
	      "id": "app"
	    }
	  }, [_c('main-header'), _vm._v(" "), _c('div', {
	    staticClass: "main-cnt"
	  }, [_c('router-view')], 1), _vm._v(" "), _c('main-footer')], 1)
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-76a4a3b3", module.exports)
	  }
	}

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * vue-router v2.0.1
	 * (c) 2016 Evan You
	 * @license MIT
	 */
	(function (global, factory) {
	   true ? module.exports = factory() : typeof define === 'function' && define.amd ? define(factory) : global.VueRouter = factory();
	})(this, function () {
	  'use strict';

	  var View = {
	    name: 'router-view',
	    functional: true,
	    props: {
	      name: {
	        type: String,
	        default: 'default'
	      }
	    },
	    render: function render(h, ref) {
	      var props = ref.props;
	      var children = ref.children;
	      var parent = ref.parent;
	      var data = ref.data;

	      data.routerView = true;

	      var route = parent.$route;
	      var cache = parent._routerViewCache || (parent._routerViewCache = {});
	      var depth = 0;
	      var inactive = false;

	      while (parent) {
	        if (parent.$vnode && parent.$vnode.data.routerView) {
	          depth++;
	        }
	        if (parent._inactive) {
	          inactive = true;
	        }
	        parent = parent.$parent;
	      }

	      data.routerViewDepth = depth;
	      var matched = route.matched[depth];
	      if (!matched) {
	        return h();
	      }

	      var name = props.name;
	      var component = inactive ? cache[name] : cache[name] = matched.components[name];

	      if (!inactive) {
	        var hooks = data.hook || (data.hook = {});
	        hooks.init = function (vnode) {
	          matched.instances[name] = vnode.child;
	        };
	        hooks.destroy = function (vnode) {
	          if (matched.instances[name] === vnode.child) {
	            matched.instances[name] = undefined;
	          }
	        };
	      }

	      return h(component, data, children);
	    }
	  };

	  /*  */

	  function resolvePath(relative, base, append) {
	    if (relative.charAt(0) === '/') {
	      return relative;
	    }

	    if (relative.charAt(0) === '?' || relative.charAt(0) === '#') {
	      return base + relative;
	    }

	    var stack = base.split('/');

	    // remove trailing segment if:
	    // - not appending
	    // - appending to trailing slash (last segment is empty)
	    if (!append || !stack[stack.length - 1]) {
	      stack.pop();
	    }

	    // resolve relative path
	    var segments = relative.replace(/^\//, '').split('/');
	    for (var i = 0; i < segments.length; i++) {
	      var segment = segments[i];
	      if (segment === '.') {
	        continue;
	      } else if (segment === '..') {
	        stack.pop();
	      } else {
	        stack.push(segment);
	      }
	    }

	    // ensure leading slash
	    if (stack[0] !== '') {
	      stack.unshift('');
	    }

	    return stack.join('/');
	  }

	  function parsePath(path) {
	    var hash = '';
	    var query = '';

	    var hashIndex = path.indexOf('#');
	    if (hashIndex >= 0) {
	      hash = path.slice(hashIndex);
	      path = path.slice(0, hashIndex);
	    }

	    var queryIndex = path.indexOf('?');
	    if (queryIndex >= 0) {
	      query = path.slice(queryIndex + 1);
	      path = path.slice(0, queryIndex);
	    }

	    return {
	      path: path,
	      query: query,
	      hash: hash
	    };
	  }

	  function cleanPath(path) {
	    return path.replace(/\/\//g, '/');
	  }

	  /*  */

	  function assert(condition, message) {
	    if (!condition) {
	      throw new Error("[vue-router] " + message);
	    }
	  }

	  function warn(condition, message) {
	    if (!condition) {
	      typeof console !== 'undefined' && console.warn("[vue-router] " + message);
	    }
	  }

	  /*  */

	  var encode = encodeURIComponent;
	  var decode = decodeURIComponent;

	  function resolveQuery(query, extraQuery) {
	    if (extraQuery === void 0) extraQuery = {};

	    if (query) {
	      var parsedQuery;
	      try {
	        parsedQuery = parseQuery(query);
	      } catch (e) {
	        warn(false, e.message);
	        parsedQuery = {};
	      }
	      for (var key in extraQuery) {
	        parsedQuery[key] = extraQuery[key];
	      }
	      return parsedQuery;
	    } else {
	      return extraQuery;
	    }
	  }

	  function parseQuery(query) {
	    var res = Object.create(null);

	    query = query.trim().replace(/^(\?|#|&)/, '');

	    if (!query) {
	      return res;
	    }

	    query.split('&').forEach(function (param) {
	      var parts = param.replace(/\+/g, ' ').split('=');
	      var key = decode(parts.shift());
	      var val = parts.length > 0 ? decode(parts.join('=')) : null;

	      if (res[key] === undefined) {
	        res[key] = val;
	      } else if (Array.isArray(res[key])) {
	        res[key].push(val);
	      } else {
	        res[key] = [res[key], val];
	      }
	    });

	    return res;
	  }

	  function stringifyQuery(obj) {
	    var res = obj ? Object.keys(obj).sort().map(function (key) {
	      var val = obj[key];

	      if (val === undefined) {
	        return '';
	      }

	      if (val === null) {
	        return encode(key);
	      }

	      if (Array.isArray(val)) {
	        var result = [];
	        val.slice().forEach(function (val2) {
	          if (val2 === undefined) {
	            return;
	          }
	          if (val2 === null) {
	            result.push(encode(key));
	          } else {
	            result.push(encode(key) + '=' + encode(val2));
	          }
	        });
	        return result.join('&');
	      }

	      return encode(key) + '=' + encode(val);
	    }).filter(function (x) {
	      return x.length > 0;
	    }).join('&') : null;
	    return res ? "?" + res : '';
	  }

	  /*  */

	  function createRoute(record, location, redirectedFrom) {
	    var route = {
	      name: location.name || record && record.name,
	      meta: record && record.meta || {},
	      path: location.path || '/',
	      hash: location.hash || '',
	      query: location.query || {},
	      params: location.params || {},
	      fullPath: getFullPath(location),
	      matched: record ? formatMatch(record) : []
	    };
	    if (redirectedFrom) {
	      route.redirectedFrom = getFullPath(redirectedFrom);
	    }
	    return Object.freeze(route);
	  }

	  // the starting route that represents the initial state
	  var START = createRoute(null, {
	    path: '/'
	  });

	  function formatMatch(record) {
	    var res = [];
	    while (record) {
	      res.unshift(record);
	      record = record.parent;
	    }
	    return res;
	  }

	  function getFullPath(ref) {
	    var path = ref.path;
	    var query = ref.query;if (query === void 0) query = {};
	    var hash = ref.hash;if (hash === void 0) hash = '';

	    return (path || '/') + stringifyQuery(query) + hash;
	  }

	  var trailingSlashRE = /\/$/;
	  function isSameRoute(a, b) {
	    if (b === START) {
	      return a === b;
	    } else if (!b) {
	      return false;
	    } else if (a.path && b.path) {
	      return a.path.replace(trailingSlashRE, '') === b.path.replace(trailingSlashRE, '') && a.hash === b.hash && isObjectEqual(a.query, b.query);
	    } else if (a.name && b.name) {
	      return a.name === b.name && a.hash === b.hash && isObjectEqual(a.query, b.query) && isObjectEqual(a.params, b.params);
	    } else {
	      return false;
	    }
	  }

	  function isObjectEqual(a, b) {
	    if (a === void 0) a = {};
	    if (b === void 0) b = {};

	    var aKeys = Object.keys(a);
	    var bKeys = Object.keys(b);
	    if (aKeys.length !== bKeys.length) {
	      return false;
	    }
	    return aKeys.every(function (key) {
	      return String(a[key]) === String(b[key]);
	    });
	  }

	  function isIncludedRoute(current, target) {
	    return current.path.indexOf(target.path) === 0 && (!target.hash || current.hash === target.hash) && queryIncludes(current.query, target.query);
	  }

	  function queryIncludes(current, target) {
	    for (var key in target) {
	      if (!(key in current)) {
	        return false;
	      }
	    }
	    return true;
	  }

	  /*  */

	  function normalizeLocation(raw, current, append) {
	    var next = typeof raw === 'string' ? { path: raw } : raw;
	    if (next.name || next._normalized) {
	      return next;
	    }

	    var parsedPath = parsePath(next.path || '');
	    var basePath = current && current.path || '/';
	    var path = parsedPath.path ? resolvePath(parsedPath.path, basePath, append) : current && current.path || '/';
	    var query = resolveQuery(parsedPath.query, next.query);
	    var hash = next.hash || parsedPath.hash;
	    if (hash && hash.charAt(0) !== '#') {
	      hash = "#" + hash;
	    }

	    return {
	      _normalized: true,
	      path: path,
	      query: query,
	      hash: hash
	    };
	  }

	  /*  */

	  // work around weird flow bug
	  var toTypes = [String, Object];

	  var Link = {
	    name: 'router-link',
	    props: {
	      to: {
	        type: toTypes,
	        required: true
	      },
	      tag: {
	        type: String,
	        default: 'a'
	      },
	      exact: Boolean,
	      append: Boolean,
	      replace: Boolean,
	      activeClass: String
	    },
	    render: function render(h) {
	      var this$1 = this;

	      var router = this.$router;
	      var current = this.$route;
	      var to = normalizeLocation(this.to, current, this.append);
	      var resolved = router.match(to);
	      var fullPath = resolved.redirectedFrom || resolved.fullPath;
	      var base = router.history.base;
	      var href = base ? cleanPath(base + fullPath) : fullPath;
	      var classes = {};
	      var activeClass = this.activeClass || router.options.linkActiveClass || 'router-link-active';
	      var compareTarget = to.path ? createRoute(null, to) : resolved;
	      classes[activeClass] = this.exact ? isSameRoute(current, compareTarget) : isIncludedRoute(current, compareTarget);

	      var on = {
	        click: function (e) {
	          // don't redirect with control keys
	          /* istanbul ignore if */
	          if (e.metaKey || e.ctrlKey || e.shiftKey) {
	            return;
	          }
	          // don't redirect when preventDefault called
	          /* istanbul ignore if */
	          if (e.defaultPrevented) {
	            return;
	          }
	          // don't redirect on right click
	          /* istanbul ignore if */
	          if (e.button !== 0) {
	            return;
	          }
	          e.preventDefault();
	          if (this$1.replace) {
	            router.replace(to);
	          } else {
	            router.push(to);
	          }
	        }
	      };

	      var data = {
	        class: classes
	      };

	      if (this.tag === 'a') {
	        data.on = on;
	        data.attrs = { href: href };
	      } else {
	        // find the first <a> child and apply listener and href
	        var a = findAnchor(this.$slots.default);
	        if (a) {
	          var aData = a.data || (a.data = {});
	          aData.on = on;
	          var aAttrs = aData.attrs || (aData.attrs = {});
	          aAttrs.href = href;
	        } else {
	          // doesn't have <a> child, apply listener to self
	          data.on = on;
	        }
	      }

	      return h(this.tag, data, this.$slots.default);
	    }
	  };

	  function findAnchor(children) {
	    if (children) {
	      var child;
	      for (var i = 0; i < children.length; i++) {
	        child = children[i];
	        if (child.tag === 'a') {
	          return child;
	        }
	        if (child.children && (child = findAnchor(child.children))) {
	          return child;
	        }
	      }
	    }
	  }

	  function install(Vue) {
	    if (install.installed) {
	      return;
	    }
	    install.installed = true;

	    Object.defineProperty(Vue.prototype, '$router', {
	      get: function get() {
	        return this.$root._router;
	      }
	    });

	    Object.defineProperty(Vue.prototype, '$route', {
	      get: function get$1() {
	        return this.$root._route;
	      }
	    });

	    Vue.mixin({
	      beforeCreate: function beforeCreate() {
	        if (this.$options.router) {
	          this._router = this.$options.router;
	          this._router.init(this);
	          Vue.util.defineReactive(this, '_route', this._router.history.current);
	        }
	      }
	    });

	    Vue.component('router-view', View);
	    Vue.component('router-link', Link);
	  }

	  var __moduleExports = Array.isArray || function (arr) {
	    return Object.prototype.toString.call(arr) == '[object Array]';
	  };

	  var isarray = __moduleExports;

	  /**
	   * Expose `pathToRegexp`.
	   */
	  var index = pathToRegexp;
	  var parse_1 = parse;
	  var compile_1 = compile;
	  var tokensToFunction_1 = tokensToFunction;
	  var tokensToRegExp_1 = tokensToRegExp;

	  /**
	   * The main path matching regexp utility.
	   *
	   * @type {RegExp}
	   */
	  var PATH_REGEXP = new RegExp([
	  // Match escaped characters that would otherwise appear in future matches.
	  // This allows the user to escape special characters that won't transform.
	  '(\\\\.)',
	  // Match Express-style parameters and un-named parameters with a prefix
	  // and optional suffixes. Matches appear as:
	  //
	  // "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?", undefined]
	  // "/route(\\d+)"  => [undefined, undefined, undefined, "\d+", undefined, undefined]
	  // "/*"            => ["/", undefined, undefined, undefined, undefined, "*"]
	  '([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))'].join('|'), 'g');

	  /**
	   * Parse a string for the raw tokens.
	   *
	   * @param  {string} str
	   * @return {!Array}
	   */
	  function parse(str) {
	    var tokens = [];
	    var key = 0;
	    var index = 0;
	    var path = '';
	    var res;

	    while ((res = PATH_REGEXP.exec(str)) != null) {
	      var m = res[0];
	      var escaped = res[1];
	      var offset = res.index;
	      path += str.slice(index, offset);
	      index = offset + m.length;

	      // Ignore already escaped sequences.
	      if (escaped) {
	        path += escaped[1];
	        continue;
	      }

	      var next = str[index];
	      var prefix = res[2];
	      var name = res[3];
	      var capture = res[4];
	      var group = res[5];
	      var modifier = res[6];
	      var asterisk = res[7];

	      // Push the current path onto the tokens.
	      if (path) {
	        tokens.push(path);
	        path = '';
	      }

	      var partial = prefix != null && next != null && next !== prefix;
	      var repeat = modifier === '+' || modifier === '*';
	      var optional = modifier === '?' || modifier === '*';
	      var delimiter = res[2] || '/';
	      var pattern = capture || group || (asterisk ? '.*' : '[^' + delimiter + ']+?');

	      tokens.push({
	        name: name || key++,
	        prefix: prefix || '',
	        delimiter: delimiter,
	        optional: optional,
	        repeat: repeat,
	        partial: partial,
	        asterisk: !!asterisk,
	        pattern: escapeGroup(pattern)
	      });
	    }

	    // Match any characters still remaining.
	    if (index < str.length) {
	      path += str.substr(index);
	    }

	    // If the path exists, push it onto the end.
	    if (path) {
	      tokens.push(path);
	    }

	    return tokens;
	  }

	  /**
	   * Compile a string to a template function for the path.
	   *
	   * @param  {string}             str
	   * @return {!function(Object=, Object=)}
	   */
	  function compile(str) {
	    return tokensToFunction(parse(str));
	  }

	  /**
	   * Prettier encoding of URI path segments.
	   *
	   * @param  {string}
	   * @return {string}
	   */
	  function encodeURIComponentPretty(str) {
	    return encodeURI(str).replace(/[\/?#]/g, function (c) {
	      return '%' + c.charCodeAt(0).toString(16).toUpperCase();
	    });
	  }

	  /**
	   * Encode the asterisk parameter. Similar to `pretty`, but allows slashes.
	   *
	   * @param  {string}
	   * @return {string}
	   */
	  function encodeAsterisk(str) {
	    return encodeURI(str).replace(/[?#]/g, function (c) {
	      return '%' + c.charCodeAt(0).toString(16).toUpperCase();
	    });
	  }

	  /**
	   * Expose a method for transforming tokens into the path function.
	   */
	  function tokensToFunction(tokens) {
	    // Compile all the tokens into regexps.
	    var matches = new Array(tokens.length);

	    // Compile all the patterns before compilation.
	    for (var i = 0; i < tokens.length; i++) {
	      if (typeof tokens[i] === 'object') {
	        matches[i] = new RegExp('^(?:' + tokens[i].pattern + ')$');
	      }
	    }

	    return function (obj, opts) {
	      var path = '';
	      var data = obj || {};
	      var options = opts || {};
	      var encode = options.pretty ? encodeURIComponentPretty : encodeURIComponent;

	      for (var i = 0; i < tokens.length; i++) {
	        var token = tokens[i];

	        if (typeof token === 'string') {
	          path += token;

	          continue;
	        }

	        var value = data[token.name];
	        var segment;

	        if (value == null) {
	          if (token.optional) {
	            // Prepend partial segment prefixes.
	            if (token.partial) {
	              path += token.prefix;
	            }

	            continue;
	          } else {
	            throw new TypeError('Expected "' + token.name + '" to be defined');
	          }
	        }

	        if (isarray(value)) {
	          if (!token.repeat) {
	            throw new TypeError('Expected "' + token.name + '" to not repeat, but received `' + JSON.stringify(value) + '`');
	          }

	          if (value.length === 0) {
	            if (token.optional) {
	              continue;
	            } else {
	              throw new TypeError('Expected "' + token.name + '" to not be empty');
	            }
	          }

	          for (var j = 0; j < value.length; j++) {
	            segment = encode(value[j]);

	            if (!matches[i].test(segment)) {
	              throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but received `' + JSON.stringify(segment) + '`');
	            }

	            path += (j === 0 ? token.prefix : token.delimiter) + segment;
	          }

	          continue;
	        }

	        segment = token.asterisk ? encodeAsterisk(value) : encode(value);

	        if (!matches[i].test(segment)) {
	          throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"');
	        }

	        path += token.prefix + segment;
	      }

	      return path;
	    };
	  }

	  /**
	   * Escape a regular expression string.
	   *
	   * @param  {string} str
	   * @return {string}
	   */
	  function escapeString(str) {
	    return str.replace(/([.+*?=^!:${}()[\]|\/\\])/g, '\\$1');
	  }

	  /**
	   * Escape the capturing group by escaping special characters and meaning.
	   *
	   * @param  {string} group
	   * @return {string}
	   */
	  function escapeGroup(group) {
	    return group.replace(/([=!:$\/()])/g, '\\$1');
	  }

	  /**
	   * Attach the keys as a property of the regexp.
	   *
	   * @param  {!RegExp} re
	   * @param  {Array}   keys
	   * @return {!RegExp}
	   */
	  function attachKeys(re, keys) {
	    re.keys = keys;
	    return re;
	  }

	  /**
	   * Get the flags for a regexp from the options.
	   *
	   * @param  {Object} options
	   * @return {string}
	   */
	  function flags(options) {
	    return options.sensitive ? '' : 'i';
	  }

	  /**
	   * Pull out keys from a regexp.
	   *
	   * @param  {!RegExp} path
	   * @param  {!Array}  keys
	   * @return {!RegExp}
	   */
	  function regexpToRegexp(path, keys) {
	    // Use a negative lookahead to match only capturing groups.
	    var groups = path.source.match(/\((?!\?)/g);

	    if (groups) {
	      for (var i = 0; i < groups.length; i++) {
	        keys.push({
	          name: i,
	          prefix: null,
	          delimiter: null,
	          optional: false,
	          repeat: false,
	          partial: false,
	          asterisk: false,
	          pattern: null
	        });
	      }
	    }

	    return attachKeys(path, keys);
	  }

	  /**
	   * Transform an array into a regexp.
	   *
	   * @param  {!Array}  path
	   * @param  {Array}   keys
	   * @param  {!Object} options
	   * @return {!RegExp}
	   */
	  function arrayToRegexp(path, keys, options) {
	    var parts = [];

	    for (var i = 0; i < path.length; i++) {
	      parts.push(pathToRegexp(path[i], keys, options).source);
	    }

	    var regexp = new RegExp('(?:' + parts.join('|') + ')', flags(options));

	    return attachKeys(regexp, keys);
	  }

	  /**
	   * Create a path regexp from string input.
	   *
	   * @param  {string}  path
	   * @param  {!Array}  keys
	   * @param  {!Object} options
	   * @return {!RegExp}
	   */
	  function stringToRegexp(path, keys, options) {
	    var tokens = parse(path);
	    var re = tokensToRegExp(tokens, options);

	    // Attach keys back to the regexp.
	    for (var i = 0; i < tokens.length; i++) {
	      if (typeof tokens[i] !== 'string') {
	        keys.push(tokens[i]);
	      }
	    }

	    return attachKeys(re, keys);
	  }

	  /**
	   * Expose a function for taking tokens and returning a RegExp.
	   *
	   * @param  {!Array}  tokens
	   * @param  {Object=} options
	   * @return {!RegExp}
	   */
	  function tokensToRegExp(tokens, options) {
	    options = options || {};

	    var strict = options.strict;
	    var end = options.end !== false;
	    var route = '';
	    var lastToken = tokens[tokens.length - 1];
	    var endsWithSlash = typeof lastToken === 'string' && /\/$/.test(lastToken);

	    // Iterate over the tokens and create our regexp string.
	    for (var i = 0; i < tokens.length; i++) {
	      var token = tokens[i];

	      if (typeof token === 'string') {
	        route += escapeString(token);
	      } else {
	        var prefix = escapeString(token.prefix);
	        var capture = '(?:' + token.pattern + ')';

	        if (token.repeat) {
	          capture += '(?:' + prefix + capture + ')*';
	        }

	        if (token.optional) {
	          if (!token.partial) {
	            capture = '(?:' + prefix + '(' + capture + '))?';
	          } else {
	            capture = prefix + '(' + capture + ')?';
	          }
	        } else {
	          capture = prefix + '(' + capture + ')';
	        }

	        route += capture;
	      }
	    }

	    // In non-strict mode we allow a slash at the end of match. If the path to
	    // match already ends with a slash, we remove it for consistency. The slash
	    // is valid at the end of a path match, not in the middle. This is important
	    // in non-ending mode, where "/test/" shouldn't match "/test//route".
	    if (!strict) {
	      route = (endsWithSlash ? route.slice(0, -2) : route) + '(?:\\/(?=$))?';
	    }

	    if (end) {
	      route += '$';
	    } else {
	      // In non-ending mode, we need the capturing groups to match as much as
	      // possible by using a positive lookahead to the end or next path segment.
	      route += strict && endsWithSlash ? '' : '(?=\\/|$)';
	    }

	    return new RegExp('^' + route, flags(options));
	  }

	  /**
	   * Normalize the given path string, returning a regular expression.
	   *
	   * An empty array can be passed in for the keys, which will hold the
	   * placeholder key descriptions. For example, using `/user/:id`, `keys` will
	   * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
	   *
	   * @param  {(string|RegExp|Array)} path
	   * @param  {(Array|Object)=}       keys
	   * @param  {Object=}               options
	   * @return {!RegExp}
	   */
	  function pathToRegexp(path, keys, options) {
	    keys = keys || [];

	    if (!isarray(keys)) {
	      options = /** @type {!Object} */keys;
	      keys = [];
	    } else if (!options) {
	      options = {};
	    }

	    if (path instanceof RegExp) {
	      return regexpToRegexp(path, /** @type {!Array} */keys);
	    }

	    if (isarray(path)) {
	      return arrayToRegexp( /** @type {!Array} */path, /** @type {!Array} */keys, options);
	    }

	    return stringToRegexp( /** @type {string} */path, /** @type {!Array} */keys, options);
	  }

	  index.parse = parse_1;
	  index.compile = compile_1;
	  index.tokensToFunction = tokensToFunction_1;
	  index.tokensToRegExp = tokensToRegExp_1;

	  /*  */

	  function createRouteMap(routes) {
	    var pathMap = Object.create(null);
	    var nameMap = Object.create(null);

	    routes.forEach(function (route) {
	      addRouteRecord(pathMap, nameMap, route);
	    });

	    return {
	      pathMap: pathMap,
	      nameMap: nameMap
	    };
	  }

	  function addRouteRecord(pathMap, nameMap, route, parent, matchAs) {
	    var path = route.path;
	    var name = route.name;
	    assert(path != null, "\"path\" is required in a route configuration.");

	    var record = {
	      path: normalizePath(path, parent),
	      components: route.components || { default: route.component },
	      instances: {},
	      name: name,
	      parent: parent,
	      matchAs: matchAs,
	      redirect: route.redirect,
	      beforeEnter: route.beforeEnter,
	      meta: route.meta || {}
	    };

	    if (route.children) {
	      // Warn if route is named and has a default child route.
	      // If users navigate to this route by name, the default child will
	      // not be rendered (GH Issue #629)
	      if (false) {}
	      route.children.forEach(function (child) {
	        addRouteRecord(pathMap, nameMap, child, record);
	      });
	    }

	    if (route.alias) {
	      if (Array.isArray(route.alias)) {
	        route.alias.forEach(function (alias) {
	          addRouteRecord(pathMap, nameMap, { path: alias }, parent, record.path);
	        });
	      } else {
	        addRouteRecord(pathMap, nameMap, { path: route.alias }, parent, record.path);
	      }
	    }

	    pathMap[record.path] = record;
	    if (name) {
	      nameMap[name] = record;
	    }
	  }

	  function normalizePath(path, parent) {
	    path = path.replace(/\/$/, '');
	    if (path[0] === '/') {
	      return path;
	    }
	    if (parent == null) {
	      return path;
	    }
	    return cleanPath(parent.path + "/" + path);
	  }

	  /*  */

	  var regexpCache = Object.create(null);

	  var regexpCompileCache = Object.create(null);

	  function createMatcher(routes) {
	    var ref = createRouteMap(routes);
	    var pathMap = ref.pathMap;
	    var nameMap = ref.nameMap;

	    function match(raw, currentRoute, redirectedFrom) {
	      var location = normalizeLocation(raw, currentRoute);
	      var name = location.name;

	      if (name) {
	        var record = nameMap[name];
	        if (record) {
	          location.path = fillParams(record.path, location.params, "named route \"" + name + "\"");
	          return _createRoute(record, location, redirectedFrom);
	        }
	      } else if (location.path) {
	        location.params = {};
	        for (var path in pathMap) {
	          if (matchRoute(path, location.params, location.path)) {
	            return _createRoute(pathMap[path], location, redirectedFrom);
	          }
	        }
	      }
	      // no match
	      return _createRoute(null, location);
	    }

	    function redirect(record, location) {
	      var originalRedirect = record.redirect;
	      var redirect = typeof originalRedirect === 'function' ? originalRedirect(createRoute(record, location)) : originalRedirect;

	      if (typeof redirect === 'string') {
	        redirect = { path: redirect };
	      }

	      if (!redirect || typeof redirect !== 'object') {
	        warn(false, "invalid redirect option: " + JSON.stringify(redirect));
	        return _createRoute(null, location);
	      }

	      var re = redirect;
	      var name = re.name;
	      var path = re.path;
	      var query = location.query;
	      var hash = location.hash;
	      var params = location.params;
	      query = re.hasOwnProperty('query') ? re.query : query;
	      hash = re.hasOwnProperty('hash') ? re.hash : hash;
	      params = re.hasOwnProperty('params') ? re.params : params;

	      if (name) {
	        // resolved named direct
	        var targetRecord = nameMap[name];
	        assert(targetRecord, "redirect failed: named route \"" + name + "\" not found.");
	        return match({
	          _normalized: true,
	          name: name,
	          query: query,
	          hash: hash,
	          params: params
	        }, undefined, location);
	      } else if (path) {
	        // 1. resolve relative redirect
	        var rawPath = resolveRecordPath(path, record);
	        // 2. resolve params
	        var resolvedPath = fillParams(rawPath, params, "redirect route with path \"" + rawPath + "\"");
	        // 3. rematch with existing query and hash
	        return match({
	          _normalized: true,
	          path: resolvedPath,
	          query: query,
	          hash: hash
	        }, undefined, location);
	      } else {
	        warn(false, "invalid redirect option: " + JSON.stringify(redirect));
	        return _createRoute(null, location);
	      }
	    }

	    function alias(record, location, matchAs) {
	      var aliasedPath = fillParams(matchAs, location.params, "aliased route with path \"" + matchAs + "\"");
	      var aliasedMatch = match({
	        _normalized: true,
	        path: aliasedPath
	      });
	      if (aliasedMatch) {
	        var matched = aliasedMatch.matched;
	        var aliasedRecord = matched[matched.length - 1];
	        location.params = aliasedMatch.params;
	        return _createRoute(aliasedRecord, location);
	      }
	      return _createRoute(null, location);
	    }

	    function _createRoute(record, location, redirectedFrom) {
	      if (record && record.redirect) {
	        return redirect(record, redirectedFrom || location);
	      }
	      if (record && record.matchAs) {
	        return alias(record, location, record.matchAs);
	      }
	      return createRoute(record, location, redirectedFrom);
	    }

	    return match;
	  }

	  function matchRoute(path, params, pathname) {
	    var keys, regexp;
	    var hit = regexpCache[path];
	    if (hit) {
	      keys = hit.keys;
	      regexp = hit.regexp;
	    } else {
	      keys = [];
	      regexp = index(path, keys);
	      regexpCache[path] = { keys: keys, regexp: regexp };
	    }
	    var m = pathname.match(regexp);

	    if (!m) {
	      return false;
	    } else if (!params) {
	      return true;
	    }

	    for (var i = 1, len = m.length; i < len; ++i) {
	      var key = keys[i - 1];
	      var val = typeof m[i] === 'string' ? decodeURIComponent(m[i]) : m[i];
	      if (key) {
	        params[key.name] = val;
	      }
	    }

	    return true;
	  }

	  function fillParams(path, params, routeMsg) {
	    try {
	      var filler = regexpCompileCache[path] || (regexpCompileCache[path] = index.compile(path));
	      return filler(params || {}, { pretty: true });
	    } catch (e) {
	      assert(false, "missing param for " + routeMsg + ": " + e.message);
	      return '';
	    }
	  }

	  function resolveRecordPath(path, record) {
	    return resolvePath(path, record.parent ? record.parent.path : '/', true);
	  }

	  /*  */

	  var inBrowser = typeof window !== 'undefined';

	  var supportsHistory = inBrowser && function () {
	    var ua = window.navigator.userAgent;

	    if ((ua.indexOf('Android 2.') !== -1 || ua.indexOf('Android 4.0') !== -1) && ua.indexOf('Mobile Safari') !== -1 && ua.indexOf('Chrome') === -1 && ua.indexOf('Windows Phone') === -1) {
	      return false;
	    }

	    return window.history && 'pushState' in window.history;
	  }();

	  /*  */

	  function runQueue(queue, fn, cb) {
	    var step = function (index) {
	      if (index >= queue.length) {
	        cb();
	      } else {
	        if (queue[index]) {
	          fn(queue[index], function () {
	            step(index + 1);
	          });
	        } else {
	          step(index + 1);
	        }
	      }
	    };
	    step(0);
	  }

	  /*  */

	  var History = function History(router, base) {
	    this.router = router;
	    this.base = normalizeBase(base);
	    // start with a route object that stands for "nowhere"
	    this.current = START;
	    this.pending = null;
	  };

	  History.prototype.listen = function listen(cb) {
	    this.cb = cb;
	  };

	  History.prototype.transitionTo = function transitionTo(location, cb) {
	    var this$1 = this;

	    var route = this.router.match(location, this.current);
	    this.confirmTransition(route, function () {
	      this$1.updateRoute(route);
	      cb && cb(route);
	      this$1.ensureURL();
	    });
	  };

	  History.prototype.confirmTransition = function confirmTransition(route, cb) {
	    var this$1 = this;

	    var current = this.current;
	    if (isSameRoute(route, current)) {
	      this.ensureURL();
	      return;
	    }

	    var ref = resolveQueue(this.current.matched, route.matched);
	    var deactivated = ref.deactivated;
	    var activated = ref.activated;

	    var queue = [].concat(
	    // in-component leave guards
	    extractLeaveGuards(deactivated),
	    // global before hooks
	    this.router.beforeHooks,
	    // enter guards
	    activated.map(function (m) {
	      return m.beforeEnter;
	    }),
	    // async components
	    resolveAsyncComponents(activated));

	    this.pending = route;
	    var iterator = function (hook, next) {
	      if (this$1.pending !== route) {
	        return;
	      }
	      hook(route, current, function (to) {
	        if (to === false) {
	          // next(false) -> abort navigation, ensure current URL
	          this$1.ensureURL();
	        } else if (typeof to === 'string' || typeof to === 'object') {
	          // next('/') or next({ path: '/' }) -> redirect
	          this$1.push(to);
	        } else {
	          // confirm transition and pass on the value
	          next(to);
	        }
	      });
	    };

	    runQueue(queue, iterator, function () {
	      var postEnterCbs = [];
	      var enterGuards = extractEnterGuards(activated, postEnterCbs, function () {
	        return this$1.current === route;
	      });
	      // wait until async components are resolved before
	      // extracting in-component enter guards
	      runQueue(enterGuards, iterator, function () {
	        if (this$1.pending === route) {
	          this$1.pending = null;
	          cb(route);
	          this$1.router.app.$nextTick(function () {
	            postEnterCbs.forEach(function (cb) {
	              return cb();
	            });
	          });
	        }
	      });
	    });
	  };

	  History.prototype.updateRoute = function updateRoute(route) {
	    var prev = this.current;
	    this.current = route;
	    this.cb && this.cb(route);
	    this.router.afterHooks.forEach(function (hook) {
	      hook && hook(route, prev);
	    });
	  };

	  function normalizeBase(base) {
	    if (!base) {
	      if (inBrowser) {
	        // respect <base> tag
	        var baseEl = document.querySelector('base');
	        base = baseEl ? baseEl.getAttribute('href') : '/';
	      } else {
	        base = '/';
	      }
	    }
	    // make sure there's the starting slash
	    if (base.charAt(0) !== '/') {
	      base = '/' + base;
	    }
	    // remove trailing slash
	    return base.replace(/\/$/, '');
	  }

	  function resolveQueue(current, next) {
	    var i;
	    var max = Math.max(current.length, next.length);
	    for (i = 0; i < max; i++) {
	      if (current[i] !== next[i]) {
	        break;
	      }
	    }
	    return {
	      activated: next.slice(i),
	      deactivated: current.slice(i)
	    };
	  }

	  function extractLeaveGuards(matched) {
	    return flatMapComponents(matched, function (def, instance) {
	      var guard = def && def.beforeRouteLeave;
	      if (guard) {
	        return function routeLeaveGuard() {
	          return guard.apply(instance, arguments);
	        };
	      }
	    }).reverse();
	  }

	  function extractEnterGuards(matched, cbs, isValid) {
	    return flatMapComponents(matched, function (def, _, match, key) {
	      var guard = def && def.beforeRouteEnter;
	      if (guard) {
	        return function routeEnterGuard(to, from, next) {
	          return guard(to, from, function (cb) {
	            next(cb);
	            if (typeof cb === 'function') {
	              cbs.push(function () {
	                // #750
	                // if a router-view is wrapped with an out-in transition,
	                // the instance may not have been registered at this time.
	                // we will need to poll for registration until current route
	                // is no longer valid.
	                poll(cb, match.instances, key, isValid);
	              });
	            }
	          });
	        };
	      }
	    });
	  }

	  function poll(cb, instances, key, isValid) {
	    if (instances[key]) {
	      cb(instances[key]);
	    } else if (isValid()) {
	      setTimeout(function () {
	        poll(cb, instances, key, isValid);
	      }, 16);
	    }
	  }

	  function resolveAsyncComponents(matched) {
	    return flatMapComponents(matched, function (def, _, match, key) {
	      // if it's a function and doesn't have Vue options attached,
	      // assume it's an async component resolve function.
	      // we are not using Vue's default async resolving mechanism because
	      // we want to halt the navigation until the incoming component has been
	      // resolved.
	      if (typeof def === 'function' && !def.options) {
	        return function (to, from, next) {
	          var resolve = function (resolvedDef) {
	            match.components[key] = resolvedDef;
	            next();
	          };

	          var reject = function (reason) {
	            warn(false, "Failed to resolve async component " + key + ": " + reason);
	            next(false);
	          };

	          var res = def(resolve, reject);
	          if (res && typeof res.then === 'function') {
	            res.then(resolve, reject);
	          }
	        };
	      }
	    });
	  }

	  function flatMapComponents(matched, fn) {
	    return Array.prototype.concat.apply([], matched.map(function (m) {
	      return Object.keys(m.components).map(function (key) {
	        return fn(m.components[key], m.instances[key], m, key);
	      });
	    }));
	  }

	  /*  */

	  function saveScrollPosition(key) {
	    if (!key) {
	      return;
	    }
	    window.sessionStorage.setItem(key, JSON.stringify({
	      x: window.pageXOffset,
	      y: window.pageYOffset
	    }));
	  }

	  function getScrollPosition(key) {
	    if (!key) {
	      return;
	    }
	    return JSON.parse(window.sessionStorage.getItem(key));
	  }

	  function getElementPosition(el) {
	    var docRect = document.documentElement.getBoundingClientRect();
	    var elRect = el.getBoundingClientRect();
	    return {
	      x: elRect.left - docRect.left,
	      y: elRect.top - docRect.top
	    };
	  }

	  function isValidPosition(obj) {
	    return isNumber(obj.x) || isNumber(obj.y);
	  }

	  function normalizePosition(obj) {
	    return {
	      x: isNumber(obj.x) ? obj.x : window.pageXOffset,
	      y: isNumber(obj.y) ? obj.y : window.pageYOffset
	    };
	  }

	  function isNumber(v) {
	    return typeof v === 'number';
	  }

	  /*  */

	  var genKey = function () {
	    return String(Date.now());
	  };
	  var _key = genKey();

	  var HTML5History = function (History) {
	    function HTML5History(router, base) {
	      var this$1 = this;

	      History.call(this, router, base);

	      this.transitionTo(getLocation(this.base));

	      var expectScroll = router.options.scrollBehavior;
	      window.addEventListener('popstate', function (e) {
	        _key = e.state && e.state.key;
	        var current = this$1.current;
	        this$1.transitionTo(getLocation(this$1.base), function (next) {
	          if (expectScroll) {
	            this$1.handleScroll(next, current, true);
	          }
	        });
	      });

	      if (expectScroll) {
	        window.addEventListener('scroll', function () {
	          saveScrollPosition(_key);
	        });
	      }
	    }

	    if (History) HTML5History.__proto__ = History;
	    HTML5History.prototype = Object.create(History && History.prototype);
	    HTML5History.prototype.constructor = HTML5History;

	    HTML5History.prototype.go = function go(n) {
	      window.history.go(n);
	    };

	    HTML5History.prototype.push = function push(location) {
	      var this$1 = this;

	      var current = this.current;
	      this.transitionTo(location, function (route) {
	        pushState(cleanPath(this$1.base + route.fullPath));
	        this$1.handleScroll(route, current, false);
	      });
	    };

	    HTML5History.prototype.replace = function replace(location) {
	      var this$1 = this;

	      var current = this.current;
	      this.transitionTo(location, function (route) {
	        replaceState(cleanPath(this$1.base + route.fullPath));
	        this$1.handleScroll(route, current, false);
	      });
	    };

	    HTML5History.prototype.ensureURL = function ensureURL() {
	      if (getLocation(this.base) !== this.current.fullPath) {
	        replaceState(cleanPath(this.base + this.current.fullPath));
	      }
	    };

	    HTML5History.prototype.handleScroll = function handleScroll(to, from, isPop) {
	      var router = this.router;
	      if (!router.app) {
	        return;
	      }

	      var behavior = router.options.scrollBehavior;
	      if (!behavior) {
	        return;
	      }
	      assert(typeof behavior === 'function', "scrollBehavior must be a function");

	      // wait until re-render finishes before scrolling
	      router.app.$nextTick(function () {
	        var position = getScrollPosition(_key);
	        var shouldScroll = behavior(to, from, isPop ? position : null);
	        if (!shouldScroll) {
	          return;
	        }
	        var isObject = typeof shouldScroll === 'object';
	        if (isObject && typeof shouldScroll.selector === 'string') {
	          var el = document.querySelector(shouldScroll.selector);
	          if (el) {
	            position = getElementPosition(el);
	          } else if (isValidPosition(shouldScroll)) {
	            position = normalizePosition(shouldScroll);
	          }
	        } else if (isObject && isValidPosition(shouldScroll)) {
	          position = normalizePosition(shouldScroll);
	        }

	        if (position) {
	          window.scrollTo(position.x, position.y);
	        }
	      });
	    };

	    return HTML5History;
	  }(History);

	  function getLocation(base) {
	    var path = window.location.pathname;
	    if (base && path.indexOf(base) === 0) {
	      path = path.slice(base.length);
	    }
	    return (path || '/') + window.location.search + window.location.hash;
	  }

	  function pushState(url, replace) {
	    // try...catch the pushState call to get around Safari
	    // DOM Exception 18 where it limits to 100 pushState calls
	    var history = window.history;
	    try {
	      if (replace) {
	        history.replaceState({ key: _key }, '', url);
	      } else {
	        _key = genKey();
	        history.pushState({ key: _key }, '', url);
	      }
	      saveScrollPosition(_key);
	    } catch (e) {
	      window.location[replace ? 'assign' : 'replace'](url);
	    }
	  }

	  function replaceState(url) {
	    pushState(url, true);
	  }

	  /*  */

	  var HashHistory = function (History) {
	    function HashHistory(router, base, fallback) {
	      var this$1 = this;

	      History.call(this, router, base);

	      // check history fallback deeplinking
	      if (fallback && this.checkFallback()) {
	        return;
	      }

	      ensureSlash();
	      this.transitionTo(getHash(), function () {
	        window.addEventListener('hashchange', function () {
	          this$1.onHashChange();
	        });
	      });
	    }

	    if (History) HashHistory.__proto__ = History;
	    HashHistory.prototype = Object.create(History && History.prototype);
	    HashHistory.prototype.constructor = HashHistory;

	    HashHistory.prototype.checkFallback = function checkFallback() {
	      var location = getLocation(this.base);
	      if (!/^\/#/.test(location)) {
	        window.location.replace(cleanPath(this.base + '/#' + location));
	        return true;
	      }
	    };

	    HashHistory.prototype.onHashChange = function onHashChange() {
	      if (!ensureSlash()) {
	        return;
	      }
	      this.transitionTo(getHash(), function (route) {
	        replaceHash(route.fullPath);
	      });
	    };

	    HashHistory.prototype.push = function push(location) {
	      this.transitionTo(location, function (route) {
	        pushHash(route.fullPath);
	      });
	    };

	    HashHistory.prototype.replace = function replace(location) {
	      this.transitionTo(location, function (route) {
	        replaceHash(route.fullPath);
	      });
	    };

	    HashHistory.prototype.go = function go(n) {
	      window.history.go(n);
	    };

	    HashHistory.prototype.ensureURL = function ensureURL() {
	      if (getHash() !== this.current.fullPath) {
	        replaceHash(this.current.fullPath);
	      }
	    };

	    return HashHistory;
	  }(History);

	  function ensureSlash() {
	    var path = getHash();
	    if (path.charAt(0) === '/') {
	      return true;
	    }
	    replaceHash('/' + path);
	    return false;
	  }

	  function getHash() {
	    // We can't use window.location.hash here because it's not
	    // consistent across browsers - Firefox will pre-decode it!
	    var href = window.location.href;
	    var index = href.indexOf('#');
	    return index === -1 ? '' : href.slice(index + 1);
	  }

	  function pushHash(path) {
	    window.location.hash = path;
	  }

	  function replaceHash(path) {
	    var i = window.location.href.indexOf('#');
	    window.location.replace(window.location.href.slice(0, i >= 0 ? i : 0) + '#' + path);
	  }

	  /*  */

	  var AbstractHistory = function (History) {
	    function AbstractHistory(router) {
	      History.call(this, router);
	      this.stack = [];
	      this.index = -1;
	    }

	    if (History) AbstractHistory.__proto__ = History;
	    AbstractHistory.prototype = Object.create(History && History.prototype);
	    AbstractHistory.prototype.constructor = AbstractHistory;

	    AbstractHistory.prototype.push = function push(location) {
	      var this$1 = this;

	      this.transitionTo(location, function (route) {
	        this$1.stack = this$1.stack.slice(0, this$1.index + 1).concat(route);
	        this$1.index++;
	      });
	    };

	    AbstractHistory.prototype.replace = function replace(location) {
	      var this$1 = this;

	      this.transitionTo(location, function (route) {
	        this$1.stack = this$1.stack.slice(0, this$1.index).concat(route);
	      });
	    };

	    AbstractHistory.prototype.go = function go(n) {
	      var this$1 = this;

	      var targetIndex = this.index + n;
	      if (targetIndex < 0 || targetIndex >= this.stack.length) {
	        return;
	      }
	      var route = this.stack[targetIndex];
	      this.confirmTransition(route, function () {
	        this$1.index = targetIndex;
	        this$1.updateRoute(route);
	      });
	    };

	    AbstractHistory.prototype.ensureURL = function ensureURL() {
	      // noop
	    };

	    return AbstractHistory;
	  }(History);

	  /*  */

	  var VueRouter = function VueRouter(options) {
	    if (options === void 0) options = {};

	    this.app = null;
	    this.options = options;
	    this.beforeHooks = [];
	    this.afterHooks = [];
	    this.match = createMatcher(options.routes || []);

	    var mode = options.mode || 'hash';
	    this.fallback = mode === 'history' && !supportsHistory;
	    if (this.fallback) {
	      mode = 'hash';
	    }
	    if (!inBrowser) {
	      mode = 'abstract';
	    }
	    this.mode = mode;
	  };

	  var prototypeAccessors = { currentRoute: {} };

	  prototypeAccessors.currentRoute.get = function () {
	    return this.history && this.history.current;
	  };

	  VueRouter.prototype.init = function init(app /* Vue component instance */) {
	    var this$1 = this;

	    assert(install.installed, "not installed. Make sure to call `Vue.use(VueRouter)` " + "before creating root instance.");

	    this.app = app;

	    var ref = this;
	    var mode = ref.mode;
	    var options = ref.options;
	    var fallback = ref.fallback;
	    switch (mode) {
	      case 'history':
	        this.history = new HTML5History(this, options.base);
	        break;
	      case 'hash':
	        this.history = new HashHistory(this, options.base, fallback);
	        break;
	      case 'abstract':
	        this.history = new AbstractHistory(this);
	        break;
	      default:
	        assert(false, "invalid mode: " + mode);
	    }

	    this.history.listen(function (route) {
	      this$1.app._route = route;
	    });
	  };

	  VueRouter.prototype.beforeEach = function beforeEach(fn) {
	    this.beforeHooks.push(fn);
	  };

	  VueRouter.prototype.afterEach = function afterEach(fn) {
	    this.afterHooks.push(fn);
	  };

	  VueRouter.prototype.push = function push(location) {
	    this.history.push(location);
	  };

	  VueRouter.prototype.replace = function replace(location) {
	    this.history.replace(location);
	  };

	  VueRouter.prototype.go = function go(n) {
	    this.history.go(n);
	  };

	  VueRouter.prototype.back = function back() {
	    this.go(-1);
	  };

	  VueRouter.prototype.forward = function forward() {
	    this.go(1);
	  };

	  VueRouter.prototype.getMatchedComponents = function getMatchedComponents() {
	    if (!this.currentRoute) {
	      return [];
	    }
	    return [].concat.apply([], this.currentRoute.matched.map(function (m) {
	      return Object.keys(m.components).map(function (key) {
	        return m.components[key];
	      });
	    }));
	  };

	  Object.defineProperties(VueRouter.prototype, prototypeAccessors);

	  VueRouter.install = install;

	  if (inBrowser && window.Vue) {
	    window.Vue.use(VueRouter);
	  }

	  return VueRouter;
	});

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.navs = undefined;

	var _navConfig = __webpack_require__(15);

	var _navConfig2 = _interopRequireDefault(_navConfig);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var registerRoute = function registerRoute(config) {
		var route = [{
			path: '/component',
			redirect: '/component/installation',
			component: __webpack_require__(16),
			children: []
		}];
		function addRoute(page) {
			var component = page.path === '/changelog' ? __webpack_require__(21) : __webpack_require__(29)("./zh-cn" + page.path + '.md');
			var child = {
				path: page.path.slice(1),
				meta: {
					title: page.title || page.name,
					description: page.description
				},
				component: component.default || component
			};

			route[0].children.push(child);
		}
		config.map(function (nav) {
			if (nav.groups) {
				nav.groups.map(function (group) {
					group.list.map(function (page) {
						addRoute(page);
					});
				});
			} else if (nav.children) {
				nav.children.map(function (page) {
					addRoute(page);
				});
			} else {
				addRoute(nav);
			}
		});

		return { route: route, navs: config };
	};

	var route = registerRoute(_navConfig2.default);

	// let guideRoute = {
	// 	path: '/guide',
	// 	name: '指南',
	// 	redirect: '/guide/design',
	// 	component: require('./pages/guide.vue'),
	// 	children: [{
	// 		path: 'design',
	// 		name: '设计原则',
	// 		component: require('./pages/design.vue')
	// 	}, {
	// 		path: 'nav',
	// 		name: '导航',
	// 		component: require('./pages/nav.vue')
	// 	}]
	// };
	//
	// let resourceRoute = {
	// 	path: '/resource',
	// 	name: '资源',
	// 	component: require('./pages/resource.vue')
	// };
	//
	// let indexRoute = {
	// 	path: '/',
	// 	name: '首页',
	// 	component: require('./pages/index.vue')
	// };
	//
	// route.route = route.route.concat([indexRoute, guideRoute, resourceRoute]);

	route.route.push({
		path: '*',
		component: __webpack_require__(30)
	});

	var navs = exports.navs = route.navs;
	exports.default = route.route;

/***/ },
/* 15 */
/***/ function(module, exports) {

	module.exports = [
		{
			"name": "开发指南",
			"children": [
				{
					"path": "/installation",
					"name": "安装"
				}
			]
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
					"list": [
						{
							"path": "/sf-button",
							"name": "Button 按钮",
							"title": "Button 按钮"
						},
						{
							"path": "/sf-table",
							"name": "Table 表单",
							"title": "Table 表单"
						},
						{
							"path": "/sf-spinner",
							"name": "Spinner 过场",
							"title": "Spinner 过场"
						},
						{
							"path": "/sf-toast",
							"name": "Toast 全局提示",
							"title": "Toast 全局提示"
						},
						{
							"path": "/sf-progressbar",
							"name": "Progressbar 进度条",
							"title": "Progressbar 进度条"
						},
						{
							"path": "/sf-tooltips",
							"name": "tooltips提示",
							"title": "tooltips提示"
						},
						{
							"path": "/sf-pagination",
							"name": "Pagination 分页器",
							"title": "Pagination 分页器"
						}
					]
				}
			]
		}
	];

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(17)

	var Component = __webpack_require__(10)(
	  /* script */
	  __webpack_require__(19),
	  /* template */
	  __webpack_require__(20),
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)
	Component.options.__file = "/Users/matrix/Documents/Netease/NSFI/7-ui/doc/pages/component.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] component.vue: functional components are not supported with templates, they should use render functions.")}

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-77ef1e84", Component.options)
	  } else {
	    hotAPI.reload("data-v-77ef1e84", Component.options)
	  }
	})()}

	module.exports = Component.exports


/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(18);
	if(typeof content === 'string') content = [[module.id, content, '']];
	if(content.locals) module.exports = content.locals;
	// add the styles to the DOM
	var update = __webpack_require__(8)("7851e9da", content, false);
	// Hot Module Replacement
	if(false) {
	 // When the styles change, update the <style> tags
	 if(!content.locals) {
	   module.hot.accept("!!./../../../node_modules/.npminstall/css-loader/0.25.0/css-loader/index.js!./../../../node_modules/.npminstall/vue-loader/10.3.0/vue-loader/lib/style-rewriter.js?id=data-v-77ef1e84!./../../../node_modules/.npminstall/sass-loader/4.1.1/sass-loader/index.js!./../../../node_modules/.npminstall/vue-loader/10.3.0/vue-loader/lib/selector.js?type=styles&index=0!./component.vue", function() {
	     var newContent = require("!!./../../../node_modules/.npminstall/css-loader/0.25.0/css-loader/index.js!./../../../node_modules/.npminstall/vue-loader/10.3.0/vue-loader/lib/style-rewriter.js?id=data-v-77ef1e84!./../../../node_modules/.npminstall/sass-loader/4.1.1/sass-loader/index.js!./../../../node_modules/.npminstall/vue-loader/10.3.0/vue-loader/lib/selector.js?type=styles&index=0!./component.vue");
	     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
	     update(newContent);
	   });
	 }
	 // When the module is disposed, remove the <style> tags
	 module.hot.dispose(function() { update(); });
	}

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(5)();
	// imports


	// module
	exports.push([module.id, "\n.page-component {\n  padding-bottom: 95px;\n}\n.page-component .content {\n  margin-left: -1px;\n}\n.page-component .content > h3 {\n    margin: 45px 0 15px;\n}\n.page-component .content > table {\n    border-collapse: collapse;\n    width: 100%;\n    background-color: #fff;\n    color: #5e6d82;\n    font-size: 14px;\n    margin-bottom: 45px;\n}\n.page-component .content > table strong {\n      font-weight: normal;\n}\n.page-component .content > table th {\n      text-align: left;\n      border-top: 1px solid #eaeefb;\n      background-color: #EFF2F7;\n}\n.page-component .content > table td, .page-component .content > table th {\n      border-bottom: 1px solid #eaeefb;\n      padding: 10px;\n}\n.page-component .content > table th:first-child, .page-component .content > table td:first-child {\n      padding-left: 10px;\n}\n", ""]);

	// exports


/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _route = __webpack_require__(14);

	exports.default = {
	  data: function data() {
	    return {
	      navsData: _route.navs
	    };
	  }
	}; //
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "page-container page-component"
	  }, [_c('div', {
	    staticClass: "g-row"
	  }, [_c('div', {
	    staticClass: "g-col-6"
	  }, [_c('side-nav', {
	    attrs: {
	      "data": _vm.navsData,
	      "base": "/component"
	    }
	  })], 1), _vm._v(" "), _c('div', {
	    staticClass: "g-col-18"
	  }, [_c('router-view', {
	    staticClass: "content"
	  }), _vm._v(" "), _c('footer-nav')], 1)])])
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-77ef1e84", module.exports)
	  }
	}

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(22)

	var Component = __webpack_require__(10)(
	  /* script */
	  __webpack_require__(24),
	  /* template */
	  __webpack_require__(28),
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)
	Component.options.__file = "/Users/matrix/Documents/Netease/NSFI/7-ui/doc/pages/changelog.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] changelog.vue: functional components are not supported with templates, they should use render functions.")}

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-edf8e0ca", Component.options)
	  } else {
	    hotAPI.reload("data-v-edf8e0ca", Component.options)
	  }
	})()}

	module.exports = Component.exports


/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(23);
	if(typeof content === 'string') content = [[module.id, content, '']];
	if(content.locals) module.exports = content.locals;
	// add the styles to the DOM
	var update = __webpack_require__(8)("59c88e53", content, false);
	// Hot Module Replacement
	if(false) {
	 // When the styles change, update the <style> tags
	 if(!content.locals) {
	   module.hot.accept("!!./../../../node_modules/.npminstall/css-loader/0.25.0/css-loader/index.js!./../../../node_modules/.npminstall/vue-loader/10.3.0/vue-loader/lib/style-rewriter.js?id=data-v-edf8e0ca!./../../../node_modules/.npminstall/sass-loader/4.1.1/sass-loader/index.js!./../../../node_modules/.npminstall/vue-loader/10.3.0/vue-loader/lib/selector.js?type=styles&index=0!./changelog.vue", function() {
	     var newContent = require("!!./../../../node_modules/.npminstall/css-loader/0.25.0/css-loader/index.js!./../../../node_modules/.npminstall/vue-loader/10.3.0/vue-loader/lib/style-rewriter.js?id=data-v-edf8e0ca!./../../../node_modules/.npminstall/sass-loader/4.1.1/sass-loader/index.js!./../../../node_modules/.npminstall/vue-loader/10.3.0/vue-loader/lib/selector.js?type=styles&index=0!./changelog.vue");
	     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
	     update(newContent);
	   });
	 }
	 // When the module is disposed, remove the <style> tags
	 module.hot.dispose(function() { update(); });
	}

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(5)();
	// imports


	// module
	exports.push([module.id, "\n.page-changelog {\n  padding-bottom: 100px;\n}\n.page-changelog .fr {\n    float: right;\n    padding: 0;\n}\n.page-changelog .fr a {\n      display: block;\n      padding: 10px 15px;\n      color: #475669;\n}\n.page-changelog .fr:hover a {\n      color: #20a0ff;\n}\n.page-changelog h2 {\n    margin-bottom: 40px;\n}\n.page-changelog .timeline {\n    margin: 0 0 0 105px;\n    padding-left: 25px;\n    position: relative;\n    color: #5e6d82;\n}\n.page-changelog .timeline:before {\n      content: '';\n      width: 1px;\n      height: 100%;\n      position: absolute;\n      left: 0;\n      top: 10px;\n      background-color: #eaeefa;\n}\n.page-changelog .timeline > li {\n      list-style: none;\n      position: relative;\n      line-height: 1.8;\n}\n.page-changelog .timeline > li:not(:last-child) {\n        margin-bottom: 50px;\n}\n.page-changelog .timeline > li:first-child {\n        margin-top: -10px;\n}\n.page-changelog .timeline > li:first-child h3:before {\n          left: -33px;\n          top: 10px;\n          width: 17px;\n          background-color: #20a0ff;\n          border: 0;\n}\n.page-changelog .timeline ul {\n      padding-left: 0;\n}\n.page-changelog .timeline li li {\n      font-size: 14px;\n      list-style: none;\n      padding-left: 0;\n}\n.page-changelog .timeline li li:before {\n        content: '';\n        circle: 4px #5e6d82;\n        margin-right: 5px;\n        display: inline-block;\n        vertical-align: middle;\n}\n.page-changelog .timeline h3 {\n      margin: 0 0 10px;\n}\n.page-changelog .timeline h3:before {\n        content: '';\n        display: block;\n        position: absolute;\n        left: -31px;\n        top: 13px;\n        circle: 13px transparent;\n        border: 2px solid #20a0ff;\n        box-sizing: border-box;\n        background-color: #fff;\n}\n.page-changelog .timeline h4 {\n      margin: 50px 0 10px;\n}\n.page-changelog .timeline p {\n      margin: 0;\n}\n.page-changelog .timeline em {\n      position: absolute;\n      left: -127px;\n      font-style: normal;\n      top: 6px;\n      font-size: 14px;\n      color: #99a9bf;\n}\n", ""]);

	// exports


/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _CHANGELOG = __webpack_require__(25);

	var _CHANGELOG2 = _interopRequireDefault(_CHANGELOG);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  components: {
	    ChangeLog: _CHANGELOG2.default
	  },
	  data: function data() {
	    return {
	      count: 3
	    };
	  },
	  mounted: function mounted() {
	    var changeLog = this.$refs.changeLog;
	    var changeLogNodes = changeLog.$el.children;
	    var fragments = '<li>' + changeLogNodes[1].outerHTML;

	    for (var len = changeLogNodes.length, i = 2; i < len; i++) {
	      var node = changeLogNodes[i];
	      fragments += node.tagName !== 'H3' ? changeLogNodes[i].outerHTML : '</li><li>' + changeLogNodes[i].outerHTML;
	    }
	    this.$refs.timeline.innerHTML = fragments + '</li>';

	    changeLog.$el.remove();
	  }
	}; //
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(26);

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	var Component = __webpack_require__(10)(
	  /* script */
	  null,
	  /* template */
	  __webpack_require__(27),
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)
	Component.options.__file = "/Users/matrix/Documents/Netease/NSFI/7-ui/.vueloader/11.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] 11.vue: functional components are not supported with templates, they should use render functions.")}

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-7d3351a6", Component.options)
	  } else {
	    hotAPI.reload("data-v-7d3351a6", Component.options)
	  }
	})()}

	module.exports = Component.exports


/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _vm._m(0)
	},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('section', [_c('h2', [_vm._v("更新日志")]), _vm._v(" "), _c('h3', [_vm._v("1.0.0 项目开始启动")])])
	}]}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-7d3351a6", module.exports)
	  }
	}

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "page-changelog"
	  }, [_c('h2', [_vm._v("\n    更新日志\n  ")]), _vm._v(" "), _c('ul', {
	    ref: "timeline",
	    staticClass: "timeline"
	  }), _vm._v(" "), _c('change-log', {
	    ref: "changeLog"
	  })], 1)
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-edf8e0ca", module.exports)
	  }
	}

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	var map = {
		"./zh-cn/home.md": 30,
		"./zh-cn/installation.md": 33,
		"./zh-cn/sf-button.md": 36,
		"./zh-cn/sf-pagination.md": 39,
		"./zh-cn/sf-progressbar.md": 45,
		"./zh-cn/sf-spinner.md": 48,
		"./zh-cn/sf-table.md": 51,
		"./zh-cn/sf-toast.md": 55,
		"./zh-cn/sf-tooltips.md": 59
	};
	function webpackContext(req) {
		return __webpack_require__(webpackContextResolve(req));
	};
	function webpackContextResolve(req) {
		return map[req] || (function() { throw new Error("Cannot find module '" + req + "'.") }());
	};
	webpackContext.keys = function webpackContextKeys() {
		return Object.keys(map);
	};
	webpackContext.resolve = webpackContextResolve;
	module.exports = webpackContext;
	webpackContext.id = 29;


/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(31);

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	var Component = __webpack_require__(10)(
	  /* script */
	  null,
	  /* template */
	  __webpack_require__(32),
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)
	Component.options.__file = "/Users/matrix/Documents/Netease/NSFI/7-ui/.vueloader/9.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] 9.vue: functional components are not supported with templates, they should use render functions.")}

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-51001d3c", Component.options)
	  } else {
	    hotAPI.reload("data-v-51001d3c", Component.options)
	  }
	})()}

	module.exports = Component.exports


/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _vm._m(0)
	},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('section', [_c('h2', [_vm._v("更新日志")]), _vm._v(" "), _c('h3', [_vm._v("1.0.0 项目开始启动")])])
	}]}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-51001d3c", module.exports)
	  }
	}

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(34);

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	var Component = __webpack_require__(10)(
	  /* script */
	  null,
	  /* template */
	  __webpack_require__(35),
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)
	Component.options.__file = "/Users/matrix/Documents/Netease/NSFI/7-ui/.vueloader/10.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] 10.vue: functional components are not supported with templates, they should use render functions.")}

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-7d4f80a8", Component.options)
	  } else {
	    hotAPI.reload("data-v-7d4f80a8", Component.options)
	  }
	})()}

	module.exports = Component.exports


/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _vm._m(0)
	},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('section', [_c('h2', [_vm._v("npm 安装")]), _vm._v(" "), _c('p', [_vm._v("推荐使用 npm 的方式安装，它能更好地和 "), _c('a', {
	    attrs: {
	      "href": "https://webpack.js.org/"
	    }
	  }, [_vm._v("webpack")]), _vm._v(" 打包工具配合使用。")]), _vm._v(" "), _c('pre', [_c('code', {
	    staticClass: "hljs language-shell"
	  }, [_vm._v("npm install 7-ui\n")])]), _vm._v(" "), _c('pre', [_c('code', {
	    staticClass: "hljs language-html"
	  }, [_c('span', {
	    staticClass: "hljs-meta"
	  }, [_vm._v("<!DOCTYPE html>")]), _vm._v("\n"), _c('span', {
	    staticClass: "hljs-tag"
	  }, [_vm._v("<"), _c('span', {
	    staticClass: "hljs-name"
	  }, [_vm._v("html")]), _vm._v(">")]), _vm._v("\n"), _c('span', {
	    staticClass: "hljs-tag"
	  }, [_vm._v("<"), _c('span', {
	    staticClass: "hljs-name"
	  }, [_vm._v("head")]), _vm._v(">")]), _vm._v("\n  "), _c('span', {
	    staticClass: "hljs-tag"
	  }, [_vm._v("<"), _c('span', {
	    staticClass: "hljs-name"
	  }, [_vm._v("meta")]), _vm._v(" "), _c('span', {
	    staticClass: "hljs-attr"
	  }, [_vm._v("charset")]), _vm._v("="), _c('span', {
	    staticClass: "hljs-string"
	  }, [_vm._v("\"UTF-8\"")]), _vm._v(">")]), _vm._v("\n  "), _c('span', {
	    staticClass: "hljs-comment"
	  }, [_vm._v("<!-- 引入样式 -->")]), _vm._v("\n  "), _c('span', {
	    staticClass: "hljs-tag"
	  }, [_vm._v("<"), _c('span', {
	    staticClass: "hljs-name"
	  }, [_vm._v("link")]), _vm._v(" "), _c('span', {
	    staticClass: "hljs-attr"
	  }, [_vm._v("rel")]), _vm._v("="), _c('span', {
	    staticClass: "hljs-string"
	  }, [_vm._v("\"stylesheet\"")]), _vm._v(" "), _c('span', {
	    staticClass: "hljs-attr"
	  }, [_vm._v("href")]), _vm._v("="), _c('span', {
	    staticClass: "hljs-string"
	  }, [_vm._v("\"https://unpkg.com/element-ui@1.0.0-rc.8/lib/theme-default/index.css\"")]), _vm._v(">")]), _vm._v("\n"), _c('span', {
	    staticClass: "hljs-tag"
	  }, [_vm._v("</"), _c('span', {
	    staticClass: "hljs-name"
	  }, [_vm._v("head")]), _vm._v(">")]), _vm._v("\n"), _c('span', {
	    staticClass: "hljs-tag"
	  }, [_vm._v("<"), _c('span', {
	    staticClass: "hljs-name"
	  }, [_vm._v("body")]), _vm._v(">")]), _vm._v("\n  "), _c('span', {
	    staticClass: "hljs-tag"
	  }, [_vm._v("<"), _c('span', {
	    staticClass: "hljs-name"
	  }, [_vm._v("div")]), _vm._v(" "), _c('span', {
	    staticClass: "hljs-attr"
	  }, [_vm._v("id")]), _vm._v("="), _c('span', {
	    staticClass: "hljs-string"
	  }, [_vm._v("\"app\"")]), _vm._v(">")]), _vm._v("\n    "), _c('span', {
	    staticClass: "hljs-tag"
	  }, [_vm._v("<"), _c('span', {
	    staticClass: "hljs-name"
	  }, [_vm._v("sf-button")]), _vm._v(" @"), _c('span', {
	    staticClass: "hljs-attr"
	  }, [_vm._v("click.native")]), _vm._v("="), _c('span', {
	    staticClass: "hljs-string"
	  }, [_vm._v("\"visible = true\"")]), _vm._v(">")]), _vm._v("按钮"), _c('span', {
	    staticClass: "hljs-tag"
	  }, [_vm._v("</"), _c('span', {
	    staticClass: "hljs-name"
	  }, [_vm._v("sf-button")]), _vm._v(">")]), _vm._v("\n  "), _c('span', {
	    staticClass: "hljs-tag"
	  }, [_vm._v("</"), _c('span', {
	    staticClass: "hljs-name"
	  }, [_vm._v("div")]), _vm._v(">")]), _vm._v("\n"), _c('span', {
	    staticClass: "hljs-tag"
	  }, [_vm._v("</"), _c('span', {
	    staticClass: "hljs-name"
	  }, [_vm._v("body")]), _vm._v(">")]), _vm._v("\n  "), _c('span', {
	    staticClass: "hljs-comment"
	  }, [_vm._v("<!-- 先引入 Vue -->")]), _vm._v("\n  "), _c('span', {
	    staticClass: "hljs-tag"
	  }, [_vm._v("<"), _c('span', {
	    staticClass: "hljs-name"
	  }, [_vm._v("script")]), _vm._v(" "), _c('span', {
	    staticClass: "hljs-attr"
	  }, [_vm._v("src")]), _vm._v("="), _c('span', {
	    staticClass: "hljs-string"
	  }, [_vm._v("\"https://unpkg.com/vue@2.0.3/dist/vue.js\"")]), _vm._v(">")]), _c('span', {
	    staticClass: "undefined"
	  }), _c('span', {
	    staticClass: "hljs-tag"
	  }, [_vm._v("</"), _c('span', {
	    staticClass: "hljs-name"
	  }, [_vm._v("script")]), _vm._v(">")]), _vm._v("\n  "), _c('span', {
	    staticClass: "hljs-comment"
	  }, [_vm._v("<!-- 引入组件库 -->")]), _vm._v("\n  "), _c('span', {
	    staticClass: "hljs-tag"
	  }, [_vm._v("<"), _c('span', {
	    staticClass: "hljs-name"
	  }, [_vm._v("script")]), _vm._v(" "), _c('span', {
	    staticClass: "hljs-attr"
	  }, [_vm._v("src")]), _vm._v("="), _c('span', {
	    staticClass: "hljs-string"
	  }, [_vm._v("\"https://unpkg.com/7-ui@1.0.0/dist/app.js\"")]), _vm._v(">")]), _c('span', {
	    staticClass: "undefined"
	  }), _c('span', {
	    staticClass: "hljs-tag"
	  }, [_vm._v("</"), _c('span', {
	    staticClass: "hljs-name"
	  }, [_vm._v("script")]), _vm._v(">")]), _vm._v("\n  "), _c('span', {
	    staticClass: "hljs-tag"
	  }, [_vm._v("<"), _c('span', {
	    staticClass: "hljs-name"
	  }, [_vm._v("script")]), _vm._v(">")]), _c('span', {
	    staticClass: "actionscript"
	  }, [_vm._v("\n    "), _c('span', {
	    staticClass: "hljs-keyword"
	  }, [_vm._v("new")]), _vm._v(" Vue({\n      el: "), _c('span', {
	    staticClass: "hljs-string"
	  }, [_vm._v("'#app'")]), _vm._v(",\n      data: "), _c('span', {
	    staticClass: "hljs-function"
	  }, [_c('span', {
	    staticClass: "hljs-keyword"
	  }, [_vm._v("function")]), _c('span', {
	    staticClass: "hljs-params"
	  }, [_vm._v("()")])]), _vm._v("{\n        "), _c('span', {
	    staticClass: "hljs-keyword"
	  }, [_vm._v("return")]), _vm._v(" { visible: "), _c('span', {
	    staticClass: "hljs-literal"
	  }, [_vm._v("false")]), _vm._v(" }\n      }\n    })\n  ")]), _c('span', {
	    staticClass: "hljs-tag"
	  }, [_vm._v("</"), _c('span', {
	    staticClass: "hljs-name"
	  }, [_vm._v("script")]), _vm._v(">")]), _vm._v("\n"), _c('span', {
	    staticClass: "hljs-tag"
	  }, [_vm._v("</"), _c('span', {
	    staticClass: "hljs-name"
	  }, [_vm._v("html")]), _vm._v(">")]), _vm._v("\n")])]), _vm._v(" "), _c('p', [_vm._v("如果是通过 npm 安装，并希望配合 webpack 使用，请阅读下一节：快速上手。")])])
	}]}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-7d4f80a8", module.exports)
	  }
	}

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(37);

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	var Component = __webpack_require__(10)(
	  /* script */
	  null,
	  /* template */
	  __webpack_require__(38),
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)
	Component.options.__file = "/Users/matrix/Documents/Netease/NSFI/7-ui/.vueloader/2.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] 2.vue: functional components are not supported with templates, they should use render functions.")}

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-509d78b5", Component.options)
	  } else {
	    hotAPI.reload("data-v-509d78b5", Component.options)
	  }
	})()}

	module.exports = Component.exports


/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('section', [_c('h2', [_vm._v("sf-button 按钮")]), _vm._v(" "), _c('p', [_vm._v("常用的操作按钮。")]), _vm._v(" "), _c('h3', [_vm._v("基础用法")]), _vm._v(" "), _c('p', [_vm._v("基础的按钮用法。")]), _vm._v(" "), _c('demo-block', {
	    staticClass: "demo-box"
	  }, [_c('div', {
	    staticClass: "source"
	  }, [_c('sf-button', [_vm._v("默认按钮")]), _vm._v(" "), _c('sf-button', {
	    attrs: {
	      "color": "primary"
	    }
	  }, [_vm._v("主要按钮")])], 1), _vm._v(" "), _c('div', {
	    staticClass: "meta"
	  }, [_c('div', {
	    staticClass: "description"
	  }, [_c('p', [_vm._v("sf-button 组件默认提供7种主题，由"), _c('code', [_vm._v("type")]), _vm._v("属性来定义，默认为"), _c('code', [_vm._v("default")]), _vm._v("。")])]), _vm._v(" "), _c('div', {
	    staticClass: "highlight"
	  }, [_c('pre', [_c('code', {
	    staticClass: "hljs language-html"
	  }, [_c('span', {
	    staticClass: "hljs-tag"
	  }, [_vm._v("<"), _c('span', {
	    staticClass: "hljs-name"
	  }, [_vm._v("sf-button")]), _vm._v(">")]), _vm._v("默认按钮"), _c('span', {
	    staticClass: "hljs-tag"
	  }, [_vm._v("</"), _c('span', {
	    staticClass: "hljs-name"
	  }, [_vm._v("sf-button")]), _vm._v(">")]), _vm._v("\n"), _c('span', {
	    staticClass: "hljs-tag"
	  }, [_vm._v("<"), _c('span', {
	    staticClass: "hljs-name"
	  }, [_vm._v("sf-button")]), _vm._v(" "), _c('span', {
	    staticClass: "hljs-attr"
	  }, [_vm._v("color")]), _vm._v("="), _c('span', {
	    staticClass: "hljs-string"
	  }, [_vm._v("\"primary\"")]), _vm._v(">")]), _vm._v("主要按钮"), _c('span', {
	    staticClass: "hljs-tag"
	  }, [_vm._v("</"), _c('span', {
	    staticClass: "hljs-name"
	  }, [_vm._v("sf-button")]), _vm._v(">")]), _vm._v("\n")])])])])]), _vm._v(" "), _c('h3', [_vm._v("禁用状态")]), _vm._v(" "), _c('p', [_vm._v("按钮不可用状态。")]), _vm._v(" "), _c('demo-block', {
	    staticClass: "demo-box"
	  }, [_c('div', {
	    staticClass: "source"
	  }, [_c('sf-button', {
	    attrs: {
	      "plain": true,
	      "disabled": true
	    }
	  }, [_vm._v("主要按钮")]), _vm._v(" "), _c('sf-button', {
	    attrs: {
	      "type": "primary",
	      "disabled": true
	    }
	  }, [_vm._v("主要按钮")]), _vm._v(" "), _c('sf-button', {
	    attrs: {
	      "type": "text",
	      "disabled": true
	    }
	  }, [_vm._v("文字按钮")])], 1), _vm._v(" "), _c('div', {
	    staticClass: "meta"
	  }, [_c('div', {
	    staticClass: "description"
	  }, [_c('p', [_vm._v("你可以使用"), _c('code', [_vm._v("disabled")]), _vm._v("属性来定义按钮是否可用，它接受一个"), _c('code', [_vm._v("Boolean")]), _vm._v("值。")])]), _vm._v(" "), _c('div', {
	    staticClass: "highlight"
	  }, [_c('pre', [_c('code', {
	    staticClass: "hljs language-html"
	  }, [_c('span', {
	    staticClass: "hljs-tag"
	  }, [_vm._v("<"), _c('span', {
	    staticClass: "hljs-name"
	  }, [_vm._v("sf-button")]), _vm._v(" "), _c('span', {
	    staticClass: "hljs-attr"
	  }, [_vm._v(":plain")]), _vm._v("="), _c('span', {
	    staticClass: "hljs-string"
	  }, [_vm._v("\"true\"")]), _vm._v(" "), _c('span', {
	    staticClass: "hljs-attr"
	  }, [_vm._v(":disabled")]), _vm._v("="), _c('span', {
	    staticClass: "hljs-string"
	  }, [_vm._v("\"true\"")]), _vm._v(">")]), _vm._v("主要按钮"), _c('span', {
	    staticClass: "hljs-tag"
	  }, [_vm._v("</"), _c('span', {
	    staticClass: "hljs-name"
	  }, [_vm._v("sf-button")]), _vm._v(">")]), _vm._v("\n"), _c('span', {
	    staticClass: "hljs-tag"
	  }, [_vm._v("<"), _c('span', {
	    staticClass: "hljs-name"
	  }, [_vm._v("sf-button")]), _vm._v(" "), _c('span', {
	    staticClass: "hljs-attr"
	  }, [_vm._v("type")]), _vm._v("="), _c('span', {
	    staticClass: "hljs-string"
	  }, [_vm._v("\"primary\"")]), _vm._v(" "), _c('span', {
	    staticClass: "hljs-attr"
	  }, [_vm._v(":disabled")]), _vm._v("="), _c('span', {
	    staticClass: "hljs-string"
	  }, [_vm._v("\"true\"")]), _vm._v(">")]), _vm._v("主要按钮"), _c('span', {
	    staticClass: "hljs-tag"
	  }, [_vm._v("</"), _c('span', {
	    staticClass: "hljs-name"
	  }, [_vm._v("sf-button")]), _vm._v(">")]), _vm._v("\n"), _c('span', {
	    staticClass: "hljs-tag"
	  }, [_vm._v("<"), _c('span', {
	    staticClass: "hljs-name"
	  }, [_vm._v("sf-button")]), _vm._v(" "), _c('span', {
	    staticClass: "hljs-attr"
	  }, [_vm._v("type")]), _vm._v("="), _c('span', {
	    staticClass: "hljs-string"
	  }, [_vm._v("\"text\"")]), _vm._v(" "), _c('span', {
	    staticClass: "hljs-attr"
	  }, [_vm._v(":disabled")]), _vm._v("="), _c('span', {
	    staticClass: "hljs-string"
	  }, [_vm._v("\"true\"")]), _vm._v(">")]), _vm._v("文字按钮"), _c('span', {
	    staticClass: "hljs-tag"
	  }, [_vm._v("</"), _c('span', {
	    staticClass: "hljs-name"
	  }, [_vm._v("sf-button")]), _vm._v(">")]), _vm._v("\n")])])])])]), _vm._v(" "), _c('h3', [_vm._v("有颜色倾向")]), _vm._v(" "), _c('p', [_vm._v("不同的颜色倾向代表不同的提示")]), _vm._v(" "), _c('demo-block', {
	    staticClass: "demo-box"
	  }, [_c('div', {
	    staticClass: "source"
	  }, [_c('div', {
	    staticClass: "block"
	  }, [_c('span', {
	    staticClass: "demonstration"
	  }, [_vm._v("默认显示颜色")]), _vm._v(" "), _c('span', {
	    staticClass: "wrapper"
	  }, [_c('sf-button', {
	    attrs: {
	      "color": "success"
	    }
	  }, [_vm._v("成功按钮")]), _vm._v(" "), _c('sf-button', {
	    attrs: {
	      "color": "warning"
	    }
	  }, [_vm._v("警告按钮")]), _vm._v(" "), _c('sf-button', {
	    attrs: {
	      "color": "danger"
	    }
	  }, [_vm._v("危险按钮")]), _vm._v(" "), _c('sf-button', {
	    attrs: {
	      "color": "info"
	    }
	  }, [_vm._v("信息按钮")])], 1)]), _vm._v(" "), _c('div', {
	    staticClass: "block"
	  }, [_c('span', {
	    staticClass: "demonstration"
	  }, [_vm._v("hover 显示颜色")]), _vm._v(" "), _c('span', {
	    staticClass: "wrapper"
	  }, [_c('sf-button', {
	    attrs: {
	      "plain": true,
	      "color": "success"
	    }
	  }, [_vm._v("成功按钮")]), _vm._v(" "), _c('sf-button', {
	    attrs: {
	      "plain": true,
	      "color": "warning"
	    }
	  }, [_vm._v("警告按钮")]), _vm._v(" "), _c('sf-button', {
	    attrs: {
	      "plain": true,
	      "color": "danger"
	    }
	  }, [_vm._v("危险按钮")]), _vm._v(" "), _c('sf-button', {
	    attrs: {
	      "plain": true,
	      "color": "info"
	    }
	  }, [_vm._v("信息按钮")])], 1)])]), _vm._v(" "), _c('div', {
	    staticClass: "meta"
	  }, [_c('div', {
	    staticClass: "description"
	  }, [_c('p', [_vm._v("朴素按钮同样设置了不同的"), _c('code', [_vm._v("type")]), _vm._v("属性对应的样式（可选值同上），默认为"), _c('code', [_vm._v("info")]), _vm._v("。设置"), _c('code', [_vm._v("plain")]), _vm._v("属性，它接受一个"), _c('code', [_vm._v("Boolean")]), _vm._v("。注意，在该情况下，"), _c('code', [_vm._v("type")]), _vm._v("虽然可以为"), _c('code', [_vm._v("text")]), _vm._v("，但是是没有意义的，会显示为"), _c('code', [_vm._v("text sf-button")]), _vm._v("的样式。")])]), _vm._v(" "), _c('div', {
	    staticClass: "highlight"
	  }, [_c('pre', [_c('code', {
	    staticClass: "hljs language-html"
	  }, [_c('span', {
	    staticClass: "hljs-tag"
	  }, [_vm._v("<"), _c('span', {
	    staticClass: "hljs-name"
	  }, [_vm._v("div")]), _vm._v(" "), _c('span', {
	    staticClass: "hljs-attr"
	  }, [_vm._v("class")]), _vm._v("="), _c('span', {
	    staticClass: "hljs-string"
	  }, [_vm._v("\"block\"")]), _vm._v(">")]), _vm._v("\n  "), _c('span', {
	    staticClass: "hljs-tag"
	  }, [_vm._v("<"), _c('span', {
	    staticClass: "hljs-name"
	  }, [_vm._v("span")]), _vm._v(" "), _c('span', {
	    staticClass: "hljs-attr"
	  }, [_vm._v("class")]), _vm._v("="), _c('span', {
	    staticClass: "hljs-string"
	  }, [_vm._v("\"demonstration\"")]), _vm._v(">")]), _vm._v("默认显示颜色"), _c('span', {
	    staticClass: "hljs-tag"
	  }, [_vm._v("</"), _c('span', {
	    staticClass: "hljs-name"
	  }, [_vm._v("span")]), _vm._v(">")]), _vm._v("\n  "), _c('span', {
	    staticClass: "hljs-tag"
	  }, [_vm._v("<"), _c('span', {
	    staticClass: "hljs-name"
	  }, [_vm._v("span")]), _vm._v(" "), _c('span', {
	    staticClass: "hljs-attr"
	  }, [_vm._v("class")]), _vm._v("="), _c('span', {
	    staticClass: "hljs-string"
	  }, [_vm._v("\"wrapper\"")]), _vm._v(">")]), _vm._v("\n    "), _c('span', {
	    staticClass: "hljs-tag"
	  }, [_vm._v("<"), _c('span', {
	    staticClass: "hljs-name"
	  }, [_vm._v("sf-button")]), _vm._v(" "), _c('span', {
	    staticClass: "hljs-attr"
	  }, [_vm._v("color")]), _vm._v("="), _c('span', {
	    staticClass: "hljs-string"
	  }, [_vm._v("\"success\"")]), _vm._v(">")]), _vm._v("成功按钮"), _c('span', {
	    staticClass: "hljs-tag"
	  }, [_vm._v("</"), _c('span', {
	    staticClass: "hljs-name"
	  }, [_vm._v("sf-button")]), _vm._v(">")]), _vm._v("\n    "), _c('span', {
	    staticClass: "hljs-tag"
	  }, [_vm._v("<"), _c('span', {
	    staticClass: "hljs-name"
	  }, [_vm._v("sf-button")]), _vm._v(" "), _c('span', {
	    staticClass: "hljs-attr"
	  }, [_vm._v("color")]), _vm._v("="), _c('span', {
	    staticClass: "hljs-string"
	  }, [_vm._v("\"warning\"")]), _vm._v(">")]), _vm._v("警告按钮"), _c('span', {
	    staticClass: "hljs-tag"
	  }, [_vm._v("</"), _c('span', {
	    staticClass: "hljs-name"
	  }, [_vm._v("sf-button")]), _vm._v(">")]), _vm._v("\n    "), _c('span', {
	    staticClass: "hljs-tag"
	  }, [_vm._v("<"), _c('span', {
	    staticClass: "hljs-name"
	  }, [_vm._v("sf-button")]), _vm._v(" "), _c('span', {
	    staticClass: "hljs-attr"
	  }, [_vm._v("color")]), _vm._v("="), _c('span', {
	    staticClass: "hljs-string"
	  }, [_vm._v("\"danger\"")]), _vm._v(">")]), _vm._v("危险按钮"), _c('span', {
	    staticClass: "hljs-tag"
	  }, [_vm._v("</"), _c('span', {
	    staticClass: "hljs-name"
	  }, [_vm._v("sf-button")]), _vm._v(">")]), _vm._v("\n    "), _c('span', {
	    staticClass: "hljs-tag"
	  }, [_vm._v("<"), _c('span', {
	    staticClass: "hljs-name"
	  }, [_vm._v("sf-button")]), _vm._v(" "), _c('span', {
	    staticClass: "hljs-attr"
	  }, [_vm._v("color")]), _vm._v("="), _c('span', {
	    staticClass: "hljs-string"
	  }, [_vm._v("\"info\"")]), _vm._v(">")]), _vm._v("信息按钮"), _c('span', {
	    staticClass: "hljs-tag"
	  }, [_vm._v("</"), _c('span', {
	    staticClass: "hljs-name"
	  }, [_vm._v("sf-button")]), _vm._v(">")]), _vm._v("\n  "), _c('span', {
	    staticClass: "hljs-tag"
	  }, [_vm._v("</"), _c('span', {
	    staticClass: "hljs-name"
	  }, [_vm._v("span")]), _vm._v(">")]), _vm._v("\n"), _c('span', {
	    staticClass: "hljs-tag"
	  }, [_vm._v("</"), _c('span', {
	    staticClass: "hljs-name"
	  }, [_vm._v("div")]), _vm._v(">")]), _vm._v("\n"), _c('span', {
	    staticClass: "hljs-tag"
	  }, [_vm._v("<"), _c('span', {
	    staticClass: "hljs-name"
	  }, [_vm._v("div")]), _vm._v(" "), _c('span', {
	    staticClass: "hljs-attr"
	  }, [_vm._v("class")]), _vm._v("="), _c('span', {
	    staticClass: "hljs-string"
	  }, [_vm._v("\"block\"")]), _vm._v(">")]), _vm._v("\n  "), _c('span', {
	    staticClass: "hljs-tag"
	  }, [_vm._v("<"), _c('span', {
	    staticClass: "hljs-name"
	  }, [_vm._v("span")]), _vm._v(" "), _c('span', {
	    staticClass: "hljs-attr"
	  }, [_vm._v("class")]), _vm._v("="), _c('span', {
	    staticClass: "hljs-string"
	  }, [_vm._v("\"demonstration\"")]), _vm._v(">")]), _vm._v("hover 显示颜色"), _c('span', {
	    staticClass: "hljs-tag"
	  }, [_vm._v("</"), _c('span', {
	    staticClass: "hljs-name"
	  }, [_vm._v("span")]), _vm._v(">")]), _vm._v("\n  "), _c('span', {
	    staticClass: "hljs-tag"
	  }, [_vm._v("<"), _c('span', {
	    staticClass: "hljs-name"
	  }, [_vm._v("span")]), _vm._v(" "), _c('span', {
	    staticClass: "hljs-attr"
	  }, [_vm._v("class")]), _vm._v("="), _c('span', {
	    staticClass: "hljs-string"
	  }, [_vm._v("\"wrapper\"")]), _vm._v(">")]), _vm._v("\n    "), _c('span', {
	    staticClass: "hljs-tag"
	  }, [_vm._v("<"), _c('span', {
	    staticClass: "hljs-name"
	  }, [_vm._v("sf-button")]), _vm._v(" "), _c('span', {
	    staticClass: "hljs-attr"
	  }, [_vm._v(":plain")]), _vm._v("="), _c('span', {
	    staticClass: "hljs-string"
	  }, [_vm._v("\"true\"")]), _vm._v(" "), _c('span', {
	    staticClass: "hljs-attr"
	  }, [_vm._v("color")]), _vm._v("="), _c('span', {
	    staticClass: "hljs-string"
	  }, [_vm._v("\"success\"")]), _vm._v(">")]), _vm._v("成功按钮"), _c('span', {
	    staticClass: "hljs-tag"
	  }, [_vm._v("</"), _c('span', {
	    staticClass: "hljs-name"
	  }, [_vm._v("sf-button")]), _vm._v(">")]), _vm._v("\n    "), _c('span', {
	    staticClass: "hljs-tag"
	  }, [_vm._v("<"), _c('span', {
	    staticClass: "hljs-name"
	  }, [_vm._v("sf-button")]), _vm._v(" "), _c('span', {
	    staticClass: "hljs-attr"
	  }, [_vm._v(":plain")]), _vm._v("="), _c('span', {
	    staticClass: "hljs-string"
	  }, [_vm._v("\"true\"")]), _vm._v(" "), _c('span', {
	    staticClass: "hljs-attr"
	  }, [_vm._v("color")]), _vm._v("="), _c('span', {
	    staticClass: "hljs-string"
	  }, [_vm._v("\"warning\"")]), _vm._v(">")]), _vm._v("警告按钮"), _c('span', {
	    staticClass: "hljs-tag"
	  }, [_vm._v("</"), _c('span', {
	    staticClass: "hljs-name"
	  }, [_vm._v("sf-button")]), _vm._v(">")]), _vm._v("\n    "), _c('span', {
	    staticClass: "hljs-tag"
	  }, [_vm._v("<"), _c('span', {
	    staticClass: "hljs-name"
	  }, [_vm._v("sf-button")]), _vm._v(" "), _c('span', {
	    staticClass: "hljs-attr"
	  }, [_vm._v(":plain")]), _vm._v("="), _c('span', {
	    staticClass: "hljs-string"
	  }, [_vm._v("\"true\"")]), _vm._v(" "), _c('span', {
	    staticClass: "hljs-attr"
	  }, [_vm._v("color")]), _vm._v("="), _c('span', {
	    staticClass: "hljs-string"
	  }, [_vm._v("\"danger\"")]), _vm._v(">")]), _vm._v("危险按钮"), _c('span', {
	    staticClass: "hljs-tag"
	  }, [_vm._v("</"), _c('span', {
	    staticClass: "hljs-name"
	  }, [_vm._v("sf-button")]), _vm._v(">")]), _vm._v("\n    "), _c('span', {
	    staticClass: "hljs-tag"
	  }, [_vm._v("<"), _c('span', {
	    staticClass: "hljs-name"
	  }, [_vm._v("sf-button")]), _vm._v(" "), _c('span', {
	    staticClass: "hljs-attr"
	  }, [_vm._v(":plain")]), _vm._v("="), _c('span', {
	    staticClass: "hljs-string"
	  }, [_vm._v("\"true\"")]), _vm._v(" "), _c('span', {
	    staticClass: "hljs-attr"
	  }, [_vm._v("color")]), _vm._v("="), _c('span', {
	    staticClass: "hljs-string"
	  }, [_vm._v("\"info\"")]), _vm._v(">")]), _vm._v("信息按钮"), _c('span', {
	    staticClass: "hljs-tag"
	  }, [_vm._v("</"), _c('span', {
	    staticClass: "hljs-name"
	  }, [_vm._v("sf-button")]), _vm._v(">")]), _vm._v("\n  "), _c('span', {
	    staticClass: "hljs-tag"
	  }, [_vm._v("</"), _c('span', {
	    staticClass: "hljs-name"
	  }, [_vm._v("span")]), _vm._v(">")]), _vm._v("\n"), _c('span', {
	    staticClass: "hljs-tag"
	  }, [_vm._v("</"), _c('span', {
	    staticClass: "hljs-name"
	  }, [_vm._v("div")]), _vm._v(">")]), _vm._v("\n")])])])])]), _vm._v(" "), _c('h3', [_vm._v("图标按钮")]), _vm._v(" "), _c('p', [_vm._v("带图标的按钮可增强辨识度(有文字)或节省空间(无文字)。")]), _vm._v(" "), _c('demo-block', {
	    staticClass: "demo-box"
	  }, [_c('div', {
	    staticClass: "source"
	  }, [(true) ? _c('sf-button', {
	    attrs: {
	      "icon": "sf-icon-loading",
	      "disabled": _vm.disabled
	    }
	  }, [_vm._v("加载")]) : _vm._e(), _vm._v(" "), _c('sf-button', {
	    attrs: {
	      "color": "primary",
	      "size": "large",
	      "disabled": ""
	    }
	  }, [_vm._v(" disabled"), _c('a', {
	    staticClass: "sf-icon sf-icon-date"
	  })])], 1), _vm._v(" "), _c('div', {
	    staticClass: "meta"
	  }, [_c('div', {
	    staticClass: "description"
	  }, [_c('p', [_vm._v("设置"), _c('code', [_vm._v("icon")]), _vm._v("属性即可，icon 的列表可以参考 Element 的 icon 组件，也可以设置在文字右边的 icon ，只要使用"), _c('code', [_vm._v("i")]), _vm._v("标签即可，可以使用自定义图标。")])]), _vm._v(" "), _c('div', {
	    staticClass: "highlight"
	  }, [_c('pre', [_c('code', {
	    staticClass: "hljs language-html"
	  }, [_c('span', {
	    staticClass: "hljs-tag"
	  }, [_vm._v("<"), _c('span', {
	    staticClass: "hljs-name"
	  }, [_vm._v("sf-button")]), _vm._v(" "), _c('span', {
	    staticClass: "hljs-attr"
	  }, [_vm._v("icon")]), _vm._v("="), _c('span', {
	    staticClass: "hljs-string"
	  }, [_vm._v("\"sf-icon-loading\"")]), _vm._v(" "), _c('span', {
	    staticClass: "hljs-attr"
	  }, [_vm._v(":disabled")]), _vm._v("="), _c('span', {
	    staticClass: "hljs-string"
	  }, [_vm._v("\"disabled\"")]), _vm._v(" "), _c('span', {
	    staticClass: "hljs-attr"
	  }, [_vm._v("v-if")]), _vm._v("="), _c('span', {
	    staticClass: "hljs-string"
	  }, [_vm._v("\"true\"")]), _vm._v(">")]), _vm._v("加载"), _c('span', {
	    staticClass: "hljs-tag"
	  }, [_vm._v("</"), _c('span', {
	    staticClass: "hljs-name"
	  }, [_vm._v("sf-button")]), _vm._v(">")]), _vm._v("\n"), _c('span', {
	    staticClass: "hljs-tag"
	  }, [_vm._v("<"), _c('span', {
	    staticClass: "hljs-name"
	  }, [_vm._v("sf-button")]), _vm._v(" "), _c('span', {
	    staticClass: "hljs-attr"
	  }, [_vm._v("color")]), _vm._v("="), _c('span', {
	    staticClass: "hljs-string"
	  }, [_vm._v("\"primary\"")]), _vm._v(" "), _c('span', {
	    staticClass: "hljs-attr"
	  }, [_vm._v("size")]), _vm._v("="), _c('span', {
	    staticClass: "hljs-string"
	  }, [_vm._v("\"large\"")]), _vm._v(" "), _c('span', {
	    staticClass: "hljs-attr"
	  }, [_vm._v("disabled")]), _vm._v(">")]), _vm._v(" disabled"), _c('span', {
	    staticClass: "hljs-tag"
	  }, [_vm._v("<"), _c('span', {
	    staticClass: "hljs-name"
	  }, [_vm._v("a")]), _vm._v(" "), _c('span', {
	    staticClass: "hljs-attr"
	  }, [_vm._v("class")]), _vm._v("="), _c('span', {
	    staticClass: "hljs-string"
	  }, [_vm._v("\"sf-icon sf-icon-date\"")]), _vm._v(">")]), _c('span', {
	    staticClass: "hljs-tag"
	  }, [_vm._v("</"), _c('span', {
	    staticClass: "hljs-name"
	  }, [_vm._v("a")]), _vm._v(">")]), _c('span', {
	    staticClass: "hljs-tag"
	  }, [_vm._v("</"), _c('span', {
	    staticClass: "hljs-name"
	  }, [_vm._v("sf-button")]), _vm._v(">")]), _vm._v("\n\n")])])])])]), _vm._v(" "), _c('h3', [_vm._v("不同尺寸")]), _vm._v(" "), _c('p', [_vm._v("sf-button 组件提供除了默认值以外的三种尺寸，可以在不同场景下选择合适的按钮尺寸。")]), _vm._v(" "), _c('demo-block', {
	    staticClass: "demo-box"
	  }, [_c('div', {
	    staticClass: "source"
	  }, [_c('sf-button', {
	    attrs: {
	      "color": "primary",
	      "size": "large"
	    }
	  }, [_vm._v("大型按钮")]), _vm._v(" "), _c('sf-button', {
	    attrs: {
	      "color": "primary"
	    }
	  }, [_vm._v("正常按钮")]), _vm._v(" "), _c('sf-button', {
	    attrs: {
	      "color": "primary",
	      "size": "small"
	    }
	  }, [_vm._v("小型按钮")]), _vm._v(" "), _c('sf-button', {
	    attrs: {
	      "color": "primary",
	      "size": "mini"
	    }
	  }, [_vm._v("超小按钮")])], 1), _vm._v(" "), _c('div', {
	    staticClass: "meta"
	  }, [_c('div', {
	    staticClass: "description"
	  }, [_c('p', [_vm._v("额外的尺寸："), _c('code', [_vm._v("large")]), _vm._v("、"), _c('code', [_vm._v("small")]), _vm._v("、"), _c('code', [_vm._v("mini")]), _vm._v("，通过设置"), _c('code', [_vm._v("size")]), _vm._v("属性来配置它们。")])]), _vm._v(" "), _c('div', {
	    staticClass: "highlight"
	  }, [_c('pre', [_c('code', {
	    staticClass: "hljs language-html"
	  }, [_c('span', {
	    staticClass: "hljs-tag"
	  }, [_vm._v("<"), _c('span', {
	    staticClass: "hljs-name"
	  }, [_vm._v("sf-button")]), _vm._v(" "), _c('span', {
	    staticClass: "hljs-attr"
	  }, [_vm._v("color")]), _vm._v("="), _c('span', {
	    staticClass: "hljs-string"
	  }, [_vm._v("\"primary\"")]), _vm._v(" "), _c('span', {
	    staticClass: "hljs-attr"
	  }, [_vm._v("size")]), _vm._v("="), _c('span', {
	    staticClass: "hljs-string"
	  }, [_vm._v("\"large\"")]), _vm._v(">")]), _vm._v("大型按钮"), _c('span', {
	    staticClass: "hljs-tag"
	  }, [_vm._v("</"), _c('span', {
	    staticClass: "hljs-name"
	  }, [_vm._v("sf-button")]), _vm._v(">")]), _vm._v("\n"), _c('span', {
	    staticClass: "hljs-tag"
	  }, [_vm._v("<"), _c('span', {
	    staticClass: "hljs-name"
	  }, [_vm._v("sf-button")]), _vm._v(" "), _c('span', {
	    staticClass: "hljs-attr"
	  }, [_vm._v("color")]), _vm._v("="), _c('span', {
	    staticClass: "hljs-string"
	  }, [_vm._v("\"primary\"")]), _vm._v(">")]), _vm._v("正常按钮"), _c('span', {
	    staticClass: "hljs-tag"
	  }, [_vm._v("</"), _c('span', {
	    staticClass: "hljs-name"
	  }, [_vm._v("sf-button")]), _vm._v(">")]), _vm._v("\n"), _c('span', {
	    staticClass: "hljs-tag"
	  }, [_vm._v("<"), _c('span', {
	    staticClass: "hljs-name"
	  }, [_vm._v("sf-button")]), _vm._v(" "), _c('span', {
	    staticClass: "hljs-attr"
	  }, [_vm._v("color")]), _vm._v("="), _c('span', {
	    staticClass: "hljs-string"
	  }, [_vm._v("\"primary\"")]), _vm._v(" "), _c('span', {
	    staticClass: "hljs-attr"
	  }, [_vm._v("size")]), _vm._v("="), _c('span', {
	    staticClass: "hljs-string"
	  }, [_vm._v("\"small\"")]), _vm._v(">")]), _vm._v("小型按钮"), _c('span', {
	    staticClass: "hljs-tag"
	  }, [_vm._v("</"), _c('span', {
	    staticClass: "hljs-name"
	  }, [_vm._v("sf-button")]), _vm._v(">")]), _vm._v("\n"), _c('span', {
	    staticClass: "hljs-tag"
	  }, [_vm._v("<"), _c('span', {
	    staticClass: "hljs-name"
	  }, [_vm._v("sf-button")]), _vm._v(" "), _c('span', {
	    staticClass: "hljs-attr"
	  }, [_vm._v("color")]), _vm._v("="), _c('span', {
	    staticClass: "hljs-string"
	  }, [_vm._v("\"primary\"")]), _vm._v(" "), _c('span', {
	    staticClass: "hljs-attr"
	  }, [_vm._v("size")]), _vm._v("="), _c('span', {
	    staticClass: "hljs-string"
	  }, [_vm._v("\"mini\"")]), _vm._v(">")]), _vm._v("超小按钮"), _c('span', {
	    staticClass: "hljs-tag"
	  }, [_vm._v("</"), _c('span', {
	    staticClass: "hljs-name"
	  }, [_vm._v("sf-button")]), _vm._v(">")]), _vm._v("\n")])])])])]), _vm._v(" "), _c('h3', [_vm._v("Attributes")]), _vm._v(" "), _vm._m(0)], 1)
	},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('table', {
	    staticClass: "table"
	  }, [_c('thead', [_c('tr', [_c('th', [_vm._v("参数")]), _vm._v(" "), _c('th', [_vm._v("说明")]), _vm._v(" "), _c('th', [_vm._v("类型")]), _vm._v(" "), _c('th', [_vm._v("可选值")]), _vm._v(" "), _c('th', [_vm._v("默认值")])])]), _vm._v(" "), _c('tbody', [_c('tr', [_c('td', [_vm._v("size")]), _vm._v(" "), _c('td', [_vm._v("尺寸")]), _vm._v(" "), _c('td', [_vm._v("string")]), _vm._v(" "), _c('td', [_vm._v("large,small,mini")]), _vm._v(" "), _c('td', [_vm._v("—")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("color")]), _vm._v(" "), _c('td', [_vm._v("类型")]), _vm._v(" "), _c('td', [_vm._v("string")]), _vm._v(" "), _c('td', [_vm._v("primary,success,warning,danger,info,text")]), _vm._v(" "), _c('td', [_vm._v("—")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("plain")]), _vm._v(" "), _c('td', [_vm._v("是否朴素按钮")]), _vm._v(" "), _c('td', [_vm._v("Boolean")]), _vm._v(" "), _c('td', [_vm._v("true,false")]), _vm._v(" "), _c('td', [_vm._v("false")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("disabled")]), _vm._v(" "), _c('td', [_vm._v("禁用")]), _vm._v(" "), _c('td', [_vm._v("boolean")]), _vm._v(" "), _c('td', [_vm._v("true, false")]), _vm._v(" "), _c('td', [_vm._v("false")])])])])
	}]}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-509d78b5", module.exports)
	  }
	}

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(40);

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(41)

	var Component = __webpack_require__(10)(
	  /* script */
	  __webpack_require__(43),
	  /* template */
	  __webpack_require__(44),
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)
	Component.options.__file = "/Users/matrix/Documents/Netease/NSFI/7-ui/.vueloader/3.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] 3.vue: functional components are not supported with templates, they should use render functions.")}

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-50ab9036", Component.options)
	  } else {
	    hotAPI.reload("data-v-50ab9036", Component.options)
	  }
	})()}

	module.exports = Component.exports


/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(42);
	if(typeof content === 'string') content = [[module.id, content, '']];
	if(content.locals) module.exports = content.locals;
	// add the styles to the DOM
	var update = __webpack_require__(8)("6f852e18", content, false);
	// Hot Module Replacement
	if(false) {
	 // When the styles change, update the <style> tags
	 if(!content.locals) {
	   module.hot.accept("!!./../../node_modules/.npminstall/css-loader/0.25.0/css-loader/index.js!./../../node_modules/.npminstall/vue-loader/10.3.0/vue-loader/lib/style-rewriter.js?id=data-v-50ab9036!./../../node_modules/.npminstall/vue-loader/10.3.0/vue-loader/lib/selector.js?type=styles&index=0!./3.vue", function() {
	     var newContent = require("!!./../../node_modules/.npminstall/css-loader/0.25.0/css-loader/index.js!./../../node_modules/.npminstall/vue-loader/10.3.0/vue-loader/lib/style-rewriter.js?id=data-v-50ab9036!./../../node_modules/.npminstall/vue-loader/10.3.0/vue-loader/lib/selector.js?type=styles&index=0!./3.vue");
	     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
	     update(newContent);
	   });
	 }
	 // When the module is disposed, remove the <style> tags
	 module.hot.dispose(function() { update(); });
	}

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(5)();
	// imports


	// module
	exports.push([module.id, "\n.sf-pagination {text-align: center\n}\n", ""]);

	// exports


/***/ },
/* 43 */
/***/ function(module, exports) {

	"use strict";

	exports.__esModule = true;
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	exports.default = {
	    data: function data() {
	        return {
	            limit: 2,
	            total: 20,
	            current: 2,
	            unit: 5
	        };
	    }
	};

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('section', [_c('h2', [_vm._v("七鱼分页器组件")]), _vm._v(" "), _c('h3', [_vm._v("基础功能")]), _vm._v(" "), _c('demo-block', {
	    staticClass: "demo-box"
	  }, [_c('div', {
	    staticClass: "source"
	  }, [
	    [_c('sf-pagination', {
	      attrs: {
	        "limit": _vm.limit,
	        "total": _vm.total,
	        "current": _vm.current,
	        "unit": _vm.unit
	      }
	    })]
	  ], 2), _vm._v(" "), _c('div', {
	    staticClass: "meta"
	  }, [_c('div', {
	    staticClass: "highlight"
	  }, [_c('pre', [_c('code', {
	    staticClass: "hljs language-html"
	  }, [_vm._v("    "), _c('span', {
	    staticClass: "hljs-tag"
	  }, [_vm._v("<"), _c('span', {
	    staticClass: "hljs-name"
	  }, [_vm._v("style")]), _vm._v(">")]), _c('span', {
	    staticClass: "css"
	  }, [_vm._v("\n        "), _c('span', {
	    staticClass: "hljs-selector-class"
	  }, [_vm._v(".sf-pagination")]), _vm._v(" {"), _c('span', {
	    staticClass: "hljs-attribute"
	  }, [_vm._v("text-align")]), _vm._v(": center}\n    ")]), _c('span', {
	    staticClass: "hljs-tag"
	  }, [_vm._v("</"), _c('span', {
	    staticClass: "hljs-name"
	  }, [_vm._v("style")]), _vm._v(">")]), _vm._v("\n    "), _c('span', {
	    staticClass: "hljs-tag"
	  }, [_vm._v("<"), _c('span', {
	    staticClass: "hljs-name"
	  }, [_vm._v("template")]), _vm._v(">")]), _vm._v("\n        "), _c('span', {
	    staticClass: "hljs-tag"
	  }, [_vm._v("<"), _c('span', {
	    staticClass: "hljs-name"
	  }, [_vm._v("sf-pagination")]), _vm._v(" "), _c('span', {
	    staticClass: "hljs-attr"
	  }, [_vm._v(":limit")]), _vm._v("="), _c('span', {
	    staticClass: "hljs-string"
	  }, [_vm._v("\"limit\"")]), _vm._v(" "), _c('span', {
	    staticClass: "hljs-attr"
	  }, [_vm._v(":total")]), _vm._v("="), _c('span', {
	    staticClass: "hljs-string"
	  }, [_vm._v("\"total\"")]), _vm._v(" "), _c('span', {
	    staticClass: "hljs-attr"
	  }, [_vm._v(":current")]), _vm._v("="), _c('span', {
	    staticClass: "hljs-string"
	  }, [_vm._v("\"current\"")]), _vm._v(" "), _c('span', {
	    staticClass: "hljs-attr"
	  }, [_vm._v(":unit")]), _vm._v("="), _c('span', {
	    staticClass: "hljs-string"
	  }, [_vm._v("\"unit\"")]), _vm._v(">")]), _c('span', {
	    staticClass: "hljs-tag"
	  }, [_vm._v("</"), _c('span', {
	    staticClass: "hljs-name"
	  }, [_vm._v("sf-pagination")]), _vm._v(">")]), _vm._v("\n    "), _c('span', {
	    staticClass: "hljs-tag"
	  }, [_vm._v("</"), _c('span', {
	    staticClass: "hljs-name"
	  }, [_vm._v("template")]), _vm._v(">")]), _vm._v("\n\n    "), _c('span', {
	    staticClass: "hljs-tag"
	  }, [_vm._v("<"), _c('span', {
	    staticClass: "hljs-name"
	  }, [_vm._v("script")]), _vm._v(">")]), _c('span', {
	    staticClass: "javascript"
	  }, [_vm._v("\n    "), _c('span', {
	    staticClass: "hljs-keyword"
	  }, [_vm._v("export")]), _vm._v(" "), _c('span', {
	    staticClass: "hljs-keyword"
	  }, [_vm._v("default")]), _vm._v(" {\n        data (){\n            "), _c('span', {
	    staticClass: "hljs-keyword"
	  }, [_vm._v("return")]), _vm._v(" {\n             "), _c('span', {
	    staticClass: "hljs-attr"
	  }, [_vm._v("limit")]), _vm._v(" : "), _c('span', {
	    staticClass: "hljs-number"
	  }, [_vm._v("2")]), _vm._v(",\n            "), _c('span', {
	    staticClass: "hljs-attr"
	  }, [_vm._v("total")]), _vm._v(" : "), _c('span', {
	    staticClass: "hljs-number"
	  }, [_vm._v("20")]), _vm._v(",\n            "), _c('span', {
	    staticClass: "hljs-attr"
	  }, [_vm._v("current")]), _vm._v(" : "), _c('span', {
	    staticClass: "hljs-number"
	  }, [_vm._v("2")]), _vm._v(",\n            "), _c('span', {
	    staticClass: "hljs-attr"
	  }, [_vm._v("unit")]), _vm._v(": "), _c('span', {
	    staticClass: "hljs-number"
	  }, [_vm._v("5")]), _vm._v("\n            }\n        }\n    }\n")]), _c('span', {
	    staticClass: "hljs-tag"
	  }, [_vm._v("</"), _c('span', {
	    staticClass: "hljs-name"
	  }, [_vm._v("script")]), _vm._v(">")]), _vm._v("\n")])])])])]), _vm._v(" "), _c('h3', [_vm._v("Attributes")]), _vm._v(" "), _vm._m(0)], 1)
	},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('table', {
	    staticClass: "table"
	  }, [_c('thead', [_c('tr', [_c('th', [_vm._v("参数")]), _vm._v(" "), _c('th', [_vm._v("说明")]), _vm._v(" "), _c('th', [_vm._v("类型")]), _vm._v(" "), _c('th', [_vm._v("可选值")]), _vm._v(" "), _c('th', [_vm._v("默认值")])])]), _vm._v(" "), _c('tbody', [_c('tr', [_c('td', [_vm._v("limit")]), _vm._v(" "), _c('td', [_vm._v("分页限制")]), _vm._v(" "), _c('td', [_vm._v("String, Number")]), _vm._v(" "), _c('td'), _vm._v(" "), _c('td', [_vm._v("—")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("total")]), _vm._v(" "), _c('td', [_vm._v("总数")]), _vm._v(" "), _c('td', [_vm._v("String, Number")]), _vm._v(" "), _c('td'), _vm._v(" "), _c('td')]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("current")]), _vm._v(" "), _c('td', [_vm._v("当前页")]), _vm._v(" "), _c('td', [_vm._v("String, Number")]), _vm._v(" "), _c('td'), _vm._v(" "), _c('td')]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("unit")]), _vm._v(" "), _c('td', [_vm._v("单元数")]), _vm._v(" "), _c('td', [_vm._v("String, Number")]), _vm._v(" "), _c('td'), _vm._v(" "), _c('td')])])])
	}]}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-50ab9036", module.exports)
	  }
	}

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(46);

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	var Component = __webpack_require__(10)(
	  /* script */
	  null,
	  /* template */
	  __webpack_require__(47),
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)
	Component.options.__file = "/Users/matrix/Documents/Netease/NSFI/7-ui/.vueloader/4.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] 4.vue: functional components are not supported with templates, they should use render functions.")}

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-50b9a7b7", Component.options)
	  } else {
	    hotAPI.reload("data-v-50b9a7b7", Component.options)
	  }
	})()}

	module.exports = Component.exports


/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('section', [_c('h2', [_vm._v("七鱼进度条组件")]), _vm._v(" "), _c('h3', [_vm._v("Success")]), _vm._v(" "), _c('demo-block', {
	    staticClass: "demo-box"
	  }, [_c('div', {
	    staticClass: "source"
	  }, [_c('sf-progressbar', {
	    attrs: {
	      "label": "success",
	      "percent": 20,
	      "type": "success",
	      "striped": ""
	    }
	  })], 1), _vm._v(" "), _c('div', {
	    staticClass: "meta"
	  }, [_c('div', {
	    staticClass: "description"
	  }, [_c('p', [_vm._v("四种状态的"), _c('code', [_vm._v("success")]), _vm._v(", "), _c('code', [_vm._v("info")]), _vm._v(", "), _c('code', [_vm._v("error")]), _vm._v(", "), _c('code', [_vm._v("warning")]), _vm._v("进度条组件")])]), _vm._v(" "), _c('div', {
	    staticClass: "highlight"
	  }, [_c('pre', [_c('code', {
	    staticClass: "hljs language-html"
	  }, [_vm._v("    "), _c('span', {
	    staticClass: "hljs-tag"
	  }, [_vm._v("<"), _c('span', {
	    staticClass: "hljs-name"
	  }, [_vm._v("sf-progressbar")]), _vm._v(" "), _c('span', {
	    staticClass: "hljs-attr"
	  }, [_vm._v("label")]), _vm._v("="), _c('span', {
	    staticClass: "hljs-string"
	  }, [_vm._v("\"success\"")]), _vm._v(" "), _c('span', {
	    staticClass: "hljs-attr"
	  }, [_vm._v(":percent")]), _vm._v("="), _c('span', {
	    staticClass: "hljs-string"
	  }, [_vm._v("20")]), _vm._v(" "), _c('span', {
	    staticClass: "hljs-attr"
	  }, [_vm._v("type")]), _vm._v("="), _c('span', {
	    staticClass: "hljs-string"
	  }, [_vm._v("\"success\"")]), _vm._v(" "), _c('span', {
	    staticClass: "hljs-attr"
	  }, [_vm._v("striped")]), _vm._v(">")]), _c('span', {
	    staticClass: "hljs-tag"
	  }, [_vm._v("</"), _c('span', {
	    staticClass: "hljs-name"
	  }, [_vm._v("sf-progressbar")]), _vm._v(">")]), _vm._v("\n")])])])])]), _vm._v(" "), _c('h3', [_vm._v("Info")]), _vm._v(" "), _c('demo-block', {
	    staticClass: "demo-box"
	  }, [_c('div', {
	    staticClass: "source"
	  }, [_c('sf-progressbar', {
	    attrs: {
	      "label": "info",
	      "percent": 30,
	      "type": "info"
	    }
	  })], 1), _vm._v(" "), _c('div', {
	    staticClass: "meta"
	  }, [_c('div', {
	    staticClass: "description"
	  }, [_c('p', [_vm._v("四种状态的"), _c('code', [_vm._v("success")]), _vm._v(", "), _c('code', [_vm._v("info")]), _vm._v(", "), _c('code', [_vm._v("error")]), _vm._v(", "), _c('code', [_vm._v("warning")]), _vm._v("进度条组件")])]), _vm._v(" "), _c('div', {
	    staticClass: "highlight"
	  }, [_c('pre', [_c('code', {
	    staticClass: "hljs language-html"
	  }, [_vm._v("\n    "), _c('span', {
	    staticClass: "hljs-tag"
	  }, [_vm._v("<"), _c('span', {
	    staticClass: "hljs-name"
	  }, [_vm._v("sf-progressbar")]), _vm._v(" "), _c('span', {
	    staticClass: "hljs-attr"
	  }, [_vm._v("label")]), _vm._v("="), _c('span', {
	    staticClass: "hljs-string"
	  }, [_vm._v("\"info\"")]), _vm._v(" "), _c('span', {
	    staticClass: "hljs-attr"
	  }, [_vm._v(":percent")]), _vm._v("="), _c('span', {
	    staticClass: "hljs-string"
	  }, [_vm._v("30")]), _vm._v(" "), _c('span', {
	    staticClass: "hljs-attr"
	  }, [_vm._v("type")]), _vm._v("="), _c('span', {
	    staticClass: "hljs-string"
	  }, [_vm._v("\"info\"")]), _vm._v(">")]), _c('span', {
	    staticClass: "hljs-tag"
	  }, [_vm._v("</"), _c('span', {
	    staticClass: "hljs-name"
	  }, [_vm._v("sf-progressbar")]), _vm._v(">")]), _vm._v("\n\n")])])])])]), _vm._v(" "), _c('h3', [_vm._v("Warning")]), _vm._v(" "), _c('demo-block', {
	    staticClass: "demo-box"
	  }, [_c('div', {
	    staticClass: "source"
	  }, [_c('sf-progressbar', {
	    attrs: {
	      "label": "warning",
	      "percent": 50,
	      "type": "warning"
	    }
	  })], 1), _vm._v(" "), _c('div', {
	    staticClass: "meta"
	  }, [_c('div', {
	    staticClass: "description"
	  }, [_c('p', [_vm._v("四种状态的"), _c('code', [_vm._v("success")]), _vm._v(", "), _c('code', [_vm._v("info")]), _vm._v(", "), _c('code', [_vm._v("error")]), _vm._v(", "), _c('code', [_vm._v("warning")]), _vm._v("进度条组件")])]), _vm._v(" "), _c('div', {
	    staticClass: "highlight"
	  }, [_c('pre', [_c('code', {
	    staticClass: "hljs language-html"
	  }, [_vm._v("\n    "), _c('span', {
	    staticClass: "hljs-tag"
	  }, [_vm._v("<"), _c('span', {
	    staticClass: "hljs-name"
	  }, [_vm._v("sf-progressbar")]), _vm._v(" "), _c('span', {
	    staticClass: "hljs-attr"
	  }, [_vm._v("label")]), _vm._v("="), _c('span', {
	    staticClass: "hljs-string"
	  }, [_vm._v("\"warning\"")]), _vm._v(" "), _c('span', {
	    staticClass: "hljs-attr"
	  }, [_vm._v(":percent")]), _vm._v("="), _c('span', {
	    staticClass: "hljs-string"
	  }, [_vm._v("50")]), _vm._v(" "), _c('span', {
	    staticClass: "hljs-attr"
	  }, [_vm._v("type")]), _vm._v("="), _c('span', {
	    staticClass: "hljs-string"
	  }, [_vm._v("\"warning\"")]), _vm._v(">")]), _c('span', {
	    staticClass: "hljs-tag"
	  }, [_vm._v("</"), _c('span', {
	    staticClass: "hljs-name"
	  }, [_vm._v("sf-progressbar")]), _vm._v(">")]), _vm._v("\n\n")])])])])]), _vm._v(" "), _c('h3', [_vm._v("Error")]), _vm._v(" "), _c('demo-block', {
	    staticClass: "demo-box"
	  }, [_c('div', {
	    staticClass: "source"
	  }, [_c('sf-progressbar', {
	    attrs: {
	      "label": "error",
	      "percent": 40,
	      "type": "error",
	      "striped": ""
	    }
	  })], 1), _vm._v(" "), _c('div', {
	    staticClass: "meta"
	  }, [_c('div', {
	    staticClass: "description"
	  }, [_c('p', [_vm._v("四种状态的"), _c('code', [_vm._v("success")]), _vm._v(", "), _c('code', [_vm._v("info")]), _vm._v(", "), _c('code', [_vm._v("error")]), _vm._v(", "), _c('code', [_vm._v("warning")]), _vm._v("进度条组件")])]), _vm._v(" "), _c('div', {
	    staticClass: "highlight"
	  }, [_c('pre', [_c('code', {
	    staticClass: "hljs language-html"
	  }, [_vm._v("\n    "), _c('span', {
	    staticClass: "hljs-tag"
	  }, [_vm._v("<"), _c('span', {
	    staticClass: "hljs-name"
	  }, [_vm._v("sf-progressbar")]), _vm._v(" "), _c('span', {
	    staticClass: "hljs-attr"
	  }, [_vm._v("label")]), _vm._v("="), _c('span', {
	    staticClass: "hljs-string"
	  }, [_vm._v("\"error\"")]), _vm._v(" "), _c('span', {
	    staticClass: "hljs-attr"
	  }, [_vm._v(":percent")]), _vm._v("="), _c('span', {
	    staticClass: "hljs-string"
	  }, [_vm._v("40")]), _vm._v(" "), _c('span', {
	    staticClass: "hljs-attr"
	  }, [_vm._v("type")]), _vm._v("="), _c('span', {
	    staticClass: "hljs-string"
	  }, [_vm._v("\"error\"")]), _vm._v(" "), _c('span', {
	    staticClass: "hljs-attr"
	  }, [_vm._v("striped")]), _vm._v(">")]), _c('span', {
	    staticClass: "hljs-tag"
	  }, [_vm._v("</"), _c('span', {
	    staticClass: "hljs-name"
	  }, [_vm._v("sf-progressbar")]), _vm._v(">")]), _vm._v("\n\n")])])])])]), _vm._v(" "), _c('h3', [_vm._v("Attributes")]), _vm._v(" "), _vm._m(0)], 1)
	},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('table', {
	    staticClass: "table"
	  }, [_c('thead', [_c('tr', [_c('th', [_vm._v("参数")]), _vm._v(" "), _c('th', [_vm._v("说明")]), _vm._v(" "), _c('th', [_vm._v("类型")]), _vm._v(" "), _c('th', [_vm._v("可选值")]), _vm._v(" "), _c('th', [_vm._v("默认值")])])]), _vm._v(" "), _c('tbody', [_c('tr', [_c('td', [_vm._v("label")]), _vm._v(" "), _c('td', [_vm._v("文本")]), _vm._v(" "), _c('td', [_vm._v("String, Number")]), _vm._v(" "), _c('td'), _vm._v(" "), _c('td', [_vm._v("—")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("percent")]), _vm._v(" "), _c('td', [_vm._v("百分比")]), _vm._v(" "), _c('td', [_vm._v("Number")]), _vm._v(" "), _c('td', [_vm._v("0-100")]), _vm._v(" "), _c('td', [_vm._v("0")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("type")]), _vm._v(" "), _c('td', [_vm._v("类型")]), _vm._v(" "), _c('td', [_vm._v("String")]), _vm._v(" "), _c('td', [_vm._v("sucess, info, warning, error")]), _vm._v(" "), _c('td', [_vm._v("info")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("striped")]), _vm._v(" "), _c('td', [_vm._v("是否条纹")]), _vm._v(" "), _c('td', [_vm._v("Boolean")]), _vm._v(" "), _c('td', [_vm._v("true, false")]), _vm._v(" "), _c('td', [_vm._v("false")])])])])
	}]}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-50b9a7b7", module.exports)
	  }
	}

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(49);

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	var Component = __webpack_require__(10)(
	  /* script */
	  null,
	  /* template */
	  __webpack_require__(50),
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)
	Component.options.__file = "/Users/matrix/Documents/Netease/NSFI/7-ui/.vueloader/5.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] 5.vue: functional components are not supported with templates, they should use render functions.")}

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-50c7bf38", Component.options)
	  } else {
	    hotAPI.reload("data-v-50c7bf38", Component.options)
	  }
	})()}

	module.exports = Component.exports


/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('section', [_c('h2', [_vm._v("七鱼Spinner组件")]), _vm._v(" "), _c('h3', [_vm._v("ClipLoader")]), _vm._v(" "), _c('demo-block', {
	    staticClass: "demo-box"
	  }, [_c('div', {
	    staticClass: "source"
	  }, [_c('sf-cliploader', {
	    attrs: {
	      "size": "60"
	    }
	  })], 1), _vm._v(" "), _c('div', {
	    staticClass: "meta"
	  }, [_c('div', {
	    staticClass: "description"
	  }, [_c('p', [_vm._v("clipLoader")])]), _vm._v(" "), _c('div', {
	    staticClass: "highlight"
	  }, [_c('pre', [_c('code', {
	    staticClass: "hljs language-html"
	  }, [_vm._v("    "), _c('span', {
	    staticClass: "hljs-tag"
	  }, [_vm._v("<"), _c('span', {
	    staticClass: "hljs-name"
	  }, [_vm._v("sf-cliploader")]), _vm._v(" "), _c('span', {
	    staticClass: "hljs-attr"
	  }, [_vm._v("size")]), _vm._v("="), _c('span', {
	    staticClass: "hljs-string"
	  }, [_vm._v("60")]), _vm._v(">")]), _c('span', {
	    staticClass: "hljs-tag"
	  }, [_vm._v("</"), _c('span', {
	    staticClass: "hljs-name"
	  }, [_vm._v("sf-cliploader")]), _vm._v(">")]), _vm._v("\n")])])])])]), _vm._v(" "), _c('h3', [_vm._v("riseLoader")]), _vm._v(" "), _c('demo-block', {
	    staticClass: "demo-box"
	  }, [_c('div', {
	    staticClass: "source"
	  }, [_c('sf-riseloader', {
	    attrs: {
	      "size": "60"
	    }
	  })], 1), _vm._v(" "), _c('div', {
	    staticClass: "meta"
	  }, [_c('div', {
	    staticClass: "description"
	  }, [_c('p', [_vm._v("riseLoader")])]), _vm._v(" "), _c('div', {
	    staticClass: "highlight"
	  }, [_c('pre', [_c('code', {
	    staticClass: "hljs language-html"
	  }, [_vm._v("    "), _c('span', {
	    staticClass: "hljs-tag"
	  }, [_vm._v("<"), _c('span', {
	    staticClass: "hljs-name"
	  }, [_vm._v("sf-riseloader")]), _vm._v(" "), _c('span', {
	    staticClass: "hljs-attr"
	  }, [_vm._v("size")]), _vm._v("="), _c('span', {
	    staticClass: "hljs-string"
	  }, [_vm._v("60")]), _vm._v(">")]), _c('span', {
	    staticClass: "hljs-tag"
	  }, [_vm._v("</"), _c('span', {
	    staticClass: "hljs-name"
	  }, [_vm._v("sf-riseloader")]), _vm._v(">")]), _vm._v("\n")])])])])]), _vm._v(" "), _c('h3', [_vm._v("scaleLoader")]), _vm._v(" "), _c('demo-block', {
	    staticClass: "demo-box"
	  }, [_c('div', {
	    staticClass: "source"
	  }, [_c('sf-scaleloader', {
	    attrs: {
	      "size": "60"
	    }
	  })], 1), _vm._v(" "), _c('div', {
	    staticClass: "meta"
	  }, [_c('div', {
	    staticClass: "description"
	  }, [_c('p', [_vm._v("scaleLoader")])]), _vm._v(" "), _c('div', {
	    staticClass: "highlight"
	  }, [_c('pre', [_c('code', {
	    staticClass: "hljs language-html"
	  }, [_vm._v("    "), _c('span', {
	    staticClass: "hljs-tag"
	  }, [_vm._v("<"), _c('span', {
	    staticClass: "hljs-name"
	  }, [_vm._v("sf-scaleloader")]), _vm._v(" "), _c('span', {
	    staticClass: "hljs-attr"
	  }, [_vm._v("size")]), _vm._v("="), _c('span', {
	    staticClass: "hljs-string"
	  }, [_vm._v("60")]), _vm._v(">")]), _c('span', {
	    staticClass: "hljs-tag"
	  }, [_vm._v("</"), _c('span', {
	    staticClass: "hljs-name"
	  }, [_vm._v("sf-scaleloader")]), _vm._v(">")]), _vm._v("\n")])])])])]), _vm._v(" "), _c('h3', [_vm._v("squareLoader")]), _vm._v(" "), _c('demo-block', {
	    staticClass: "demo-box"
	  }, [_c('div', {
	    staticClass: "source"
	  }, [_c('sf-squareloader', {
	    attrs: {
	      "size": "60"
	    }
	  })], 1), _vm._v(" "), _c('div', {
	    staticClass: "meta"
	  }, [_c('div', {
	    staticClass: "description"
	  }, [_c('p', [_vm._v("squareLoader")])]), _vm._v(" "), _c('div', {
	    staticClass: "highlight"
	  }, [_c('pre', [_c('code', {
	    staticClass: "hljs language-html"
	  }, [_vm._v("    "), _c('span', {
	    staticClass: "hljs-tag"
	  }, [_vm._v("<"), _c('span', {
	    staticClass: "hljs-name"
	  }, [_vm._v("sf-squareloader")]), _vm._v(" "), _c('span', {
	    staticClass: "hljs-attr"
	  }, [_vm._v("size")]), _vm._v("="), _c('span', {
	    staticClass: "hljs-string"
	  }, [_vm._v("60")]), _vm._v(">")]), _c('span', {
	    staticClass: "hljs-tag"
	  }, [_vm._v("</"), _c('span', {
	    staticClass: "hljs-name"
	  }, [_vm._v("sf-squareloader")]), _vm._v(">")]), _vm._v("\n")])])])])])], 1)
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-50c7bf38", module.exports)
	  }
	}

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(52);

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	var Component = __webpack_require__(10)(
	  /* script */
	  __webpack_require__(53),
	  /* template */
	  __webpack_require__(54),
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)
	Component.options.__file = "/Users/matrix/Documents/Netease/NSFI/7-ui/.vueloader/6.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] 6.vue: functional components are not supported with templates, they should use render functions.")}

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-50d5d6b9", Component.options)
	  } else {
	    hotAPI.reload("data-v-50d5d6b9", Component.options)
	  }
	})()}

	module.exports = Component.exports


/***/ },
/* 53 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	exports.default = {
	  data: function data() {
	    return {
	      tableData: [{
	        name: 'tom',
	        age: '10',
	        sex: 'male'
	      }, {
	        name: 'vina',
	        age: '11',
	        sex: 'female'
	      }, {
	        name: 'lucy',
	        age: '12',
	        sex: 'female'
	      }, {
	        name: 'joy',
	        age: '13',
	        sex: 'male'
	      }]
	    };
	  },

	  methods: {
	    sortMethod: function sortMethod(a, b) {
	      return a - b;
	    },
	    formatter: function formatter(row, column) {
	      return row.age + 'year';
	    },
	    rowClick: function rowClick(row, column, event) {
	      return row;
	    }

	  }
	};

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('section', [_c('h1', [_vm._v("七鱼表单组件")]), _vm._v(" "), _vm._m(0), _vm._v(" "), _c('h3', [_vm._v("基本用法")]), _vm._v(" "), _c('demo-block', {
	    staticClass: "demo-box"
	  }, [_c('div', {
	    staticClass: "source"
	  }, [
	    [_c('sf-table', {
	      attrs: {
	        "data": _vm.tableData
	      }
	    }, [_c('sf-table-column', {
	      attrs: {
	        "prop": "name",
	        "label": "姓名",
	        "width": "180"
	      }
	    }), _vm._v(" "), _c('sf-table-column', {
	      attrs: {
	        "prop": "age",
	        "label": "年龄"
	      }
	    }), _vm._v(" "), _c('sf-table-column', {
	      attrs: {
	        "prop": "sex",
	        "label": "性别"
	      }
	    })], 1)]
	  ], 2), _vm._v(" "), _c('div', {
	    staticClass: "meta"
	  }, [_c('div', {
	    staticClass: "description"
	  }, [_c('p', [_vm._v("当"), _c('code', [_vm._v("sf-table")]), _vm._v("元素中注入"), _c('code', [_vm._v("data")]), _vm._v("对象数组后，在"), _c('code', [_vm._v("sf-table-column")]), _vm._v("中用"), _c('code', [_vm._v("prop")]), _vm._v("属性来对应对象中的键名即可填入数据，用"), _c('code', [_vm._v("label")]), _vm._v("属性来定义表格的列名。可以使用"), _c('code', [_vm._v("width")]), _vm._v("属性来定义列宽(不设置则自适应)。")])]), _vm._v(" "), _c('div', {
	    staticClass: "highlight"
	  }, [_c('pre', [_c('code', {
	    staticClass: "hljs language-html"
	  }, [_vm._v("  "), _c('span', {
	    staticClass: "hljs-tag"
	  }, [_vm._v("<"), _c('span', {
	    staticClass: "hljs-name"
	  }, [_vm._v("template")]), _vm._v(">")]), _vm._v("\n    "), _c('span', {
	    staticClass: "hljs-tag"
	  }, [_vm._v("<"), _c('span', {
	    staticClass: "hljs-name"
	  }, [_vm._v("sf-table")]), _vm._v("\n      "), _c('span', {
	    staticClass: "hljs-attr"
	  }, [_vm._v(":data")]), _vm._v("="), _c('span', {
	    staticClass: "hljs-string"
	  }, [_vm._v("\"tableData\"")]), _vm._v("\n     >")]), _vm._v("\n      "), _c('span', {
	    staticClass: "hljs-tag"
	  }, [_vm._v("<"), _c('span', {
	    staticClass: "hljs-name"
	  }, [_vm._v("sf-table-column")]), _vm._v("\n          "), _c('span', {
	    staticClass: "hljs-attr"
	  }, [_vm._v("prop")]), _vm._v("="), _c('span', {
	    staticClass: "hljs-string"
	  }, [_vm._v("\"name\"")]), _vm._v("\n          "), _c('span', {
	    staticClass: "hljs-attr"
	  }, [_vm._v("label")]), _vm._v("="), _c('span', {
	    staticClass: "hljs-string"
	  }, [_vm._v("\"姓名\"")]), _vm._v("\n          "), _c('span', {
	    staticClass: "hljs-attr"
	  }, [_vm._v("width")]), _vm._v("="), _c('span', {
	    staticClass: "hljs-string"
	  }, [_vm._v("\"180\"")]), _vm._v(">")]), _vm._v("\n        "), _c('span', {
	    staticClass: "hljs-tag"
	  }, [_vm._v("</"), _c('span', {
	    staticClass: "hljs-name"
	  }, [_vm._v("sf-table-column")]), _vm._v(">")]), _vm._v("\n      "), _c('span', {
	    staticClass: "hljs-tag"
	  }, [_vm._v("<"), _c('span', {
	    staticClass: "hljs-name"
	  }, [_vm._v("sf-table-column")]), _vm._v("\n        "), _c('span', {
	    staticClass: "hljs-attr"
	  }, [_vm._v("prop")]), _vm._v("="), _c('span', {
	    staticClass: "hljs-string"
	  }, [_vm._v("\"age\"")]), _vm._v("\n        "), _c('span', {
	    staticClass: "hljs-attr"
	  }, [_vm._v("label")]), _vm._v("="), _c('span', {
	    staticClass: "hljs-string"
	  }, [_vm._v("\"年龄\"")]), _vm._v("\n        >")]), _vm._v("\n      "), _c('span', {
	    staticClass: "hljs-tag"
	  }, [_vm._v("</"), _c('span', {
	    staticClass: "hljs-name"
	  }, [_vm._v("sf-table-column")]), _vm._v(">")]), _vm._v("\n      "), _c('span', {
	    staticClass: "hljs-tag"
	  }, [_vm._v("<"), _c('span', {
	    staticClass: "hljs-name"
	  }, [_vm._v("sf-table-column")]), _vm._v("\n        "), _c('span', {
	    staticClass: "hljs-attr"
	  }, [_vm._v("prop")]), _vm._v("="), _c('span', {
	    staticClass: "hljs-string"
	  }, [_vm._v("\"sex\"")]), _vm._v("\n        "), _c('span', {
	    staticClass: "hljs-attr"
	  }, [_vm._v("label")]), _vm._v("="), _c('span', {
	    staticClass: "hljs-string"
	  }, [_vm._v("\"性别\"")]), _vm._v(">")]), _vm._v("\n      "), _c('span', {
	    staticClass: "hljs-tag"
	  }, [_vm._v("</"), _c('span', {
	    staticClass: "hljs-name"
	  }, [_vm._v("sf-table-column")]), _vm._v(">")]), _vm._v("\n    "), _c('span', {
	    staticClass: "hljs-tag"
	  }, [_vm._v("</"), _c('span', {
	    staticClass: "hljs-name"
	  }, [_vm._v("sf-table")]), _vm._v(">")]), _vm._v("\n  "), _c('span', {
	    staticClass: "hljs-tag"
	  }, [_vm._v("</"), _c('span', {
	    staticClass: "hljs-name"
	  }, [_vm._v("template")]), _vm._v(">")]), _vm._v("\n\n  "), _c('span', {
	    staticClass: "hljs-tag"
	  }, [_vm._v("<"), _c('span', {
	    staticClass: "hljs-name"
	  }, [_vm._v("script")]), _vm._v(">")]), _c('span', {
	    staticClass: "javascript"
	  }, [_vm._v("\n    "), _c('span', {
	    staticClass: "hljs-keyword"
	  }, [_vm._v("export")]), _vm._v(" "), _c('span', {
	    staticClass: "hljs-keyword"
	  }, [_vm._v("default")]), _vm._v(" {\n      data() {\n        "), _c('span', {
	    staticClass: "hljs-keyword"
	  }, [_vm._v("return")]), _vm._v(" {\n          "), _c('span', {
	    staticClass: "hljs-attr"
	  }, [_vm._v("tableData")]), _vm._v(": [{\n            "), _c('span', {
	    staticClass: "hljs-attr"
	  }, [_vm._v("name")]), _vm._v(": "), _c('span', {
	    staticClass: "hljs-string"
	  }, [_vm._v("'tom'")]), _vm._v(",\n            "), _c('span', {
	    staticClass: "hljs-attr"
	  }, [_vm._v("age")]), _vm._v(" : "), _c('span', {
	    staticClass: "hljs-string"
	  }, [_vm._v("'10'")]), _vm._v(",\n            "), _c('span', {
	    staticClass: "hljs-attr"
	  }, [_vm._v("sex")]), _vm._v(" : "), _c('span', {
	    staticClass: "hljs-string"
	  }, [_vm._v("'male'")]), _vm._v("\n          }, {\n            "), _c('span', {
	    staticClass: "hljs-attr"
	  }, [_vm._v("name")]), _vm._v(": "), _c('span', {
	    staticClass: "hljs-string"
	  }, [_vm._v("'vina'")]), _vm._v(",\n            "), _c('span', {
	    staticClass: "hljs-attr"
	  }, [_vm._v("age")]), _vm._v(": "), _c('span', {
	    staticClass: "hljs-string"
	  }, [_vm._v("'11'")]), _vm._v(",\n            "), _c('span', {
	    staticClass: "hljs-attr"
	  }, [_vm._v("sex")]), _vm._v(": "), _c('span', {
	    staticClass: "hljs-string"
	  }, [_vm._v("'female'")]), _vm._v("\n          }, {\n            "), _c('span', {
	    staticClass: "hljs-attr"
	  }, [_vm._v("name")]), _vm._v(": "), _c('span', {
	    staticClass: "hljs-string"
	  }, [_vm._v("'lucy'")]), _vm._v(",\n            "), _c('span', {
	    staticClass: "hljs-attr"
	  }, [_vm._v("age")]), _vm._v(": "), _c('span', {
	    staticClass: "hljs-string"
	  }, [_vm._v("'12'")]), _vm._v(",\n            "), _c('span', {
	    staticClass: "hljs-attr"
	  }, [_vm._v("sex")]), _vm._v(": "), _c('span', {
	    staticClass: "hljs-string"
	  }, [_vm._v("'female'")]), _vm._v("\n          }, {\n            "), _c('span', {
	    staticClass: "hljs-attr"
	  }, [_vm._v("name")]), _vm._v(": "), _c('span', {
	    staticClass: "hljs-string"
	  }, [_vm._v("'joy'")]), _vm._v(",\n            "), _c('span', {
	    staticClass: "hljs-attr"
	  }, [_vm._v("age")]), _vm._v(": "), _c('span', {
	    staticClass: "hljs-string"
	  }, [_vm._v("'13'")]), _vm._v(",\n            "), _c('span', {
	    staticClass: "hljs-attr"
	  }, [_vm._v("sex")]), _vm._v(": "), _c('span', {
	    staticClass: "hljs-string"
	  }, [_vm._v("'male'")]), _vm._v("\n          }]\n        }\n      }\n    }\n  ")]), _c('span', {
	    staticClass: "hljs-tag"
	  }, [_vm._v("</"), _c('span', {
	    staticClass: "hljs-name"
	  }, [_vm._v("script")]), _vm._v(">")]), _vm._v("\n")])])])])]), _vm._v(" "), _c('h3', [_vm._v("带斑马纹表格和边框表格")]), _vm._v(" "), _c('demo-block', {
	    staticClass: "demo-box"
	  }, [_c('div', {
	    staticClass: "source"
	  }, [
	    [_c('sf-table', {
	      attrs: {
	        "data": _vm.tableData,
	        "stripe": "",
	        "border": ""
	      }
	    }, [_c('sf-table-column', {
	      attrs: {
	        "prop": "name",
	        "label": "姓名",
	        "width": "180"
	      }
	    }), _vm._v(" "), _c('sf-table-column', {
	      attrs: {
	        "prop": "age",
	        "label": "年龄"
	      }
	    }), _vm._v(" "), _c('sf-table-column', {
	      attrs: {
	        "prop": "sex",
	        "label": "性别"
	      }
	    })], 1)]
	  ], 2), _vm._v(" "), _c('div', {
	    staticClass: "meta"
	  }, [_c('div', {
	    staticClass: "description"
	  }, [_c('p', [_vm._v("设置不同的表格表现形式")])]), _vm._v(" "), _c('div', {
	    staticClass: "highlight"
	  }, [_c('pre', [_c('code', {
	    staticClass: "hljs language-html"
	  }, [_vm._v("  "), _c('span', {
	    staticClass: "hljs-tag"
	  }, [_vm._v("<"), _c('span', {
	    staticClass: "hljs-name"
	  }, [_vm._v("template")]), _vm._v(">")]), _vm._v("\n    "), _c('span', {
	    staticClass: "hljs-tag"
	  }, [_vm._v("<"), _c('span', {
	    staticClass: "hljs-name"
	  }, [_vm._v("sf-table")]), _vm._v("\n      "), _c('span', {
	    staticClass: "hljs-attr"
	  }, [_vm._v(":data")]), _vm._v("="), _c('span', {
	    staticClass: "hljs-string"
	  }, [_vm._v("\"tableData\"")]), _vm._v(" "), _c('span', {
	    staticClass: "hljs-attr"
	  }, [_vm._v("stripe")]), _vm._v(" "), _c('span', {
	    staticClass: "hljs-attr"
	  }, [_vm._v("border")]), _vm._v("\n     >")]), _vm._v("\n      "), _c('span', {
	    staticClass: "hljs-tag"
	  }, [_vm._v("<"), _c('span', {
	    staticClass: "hljs-name"
	  }, [_vm._v("sf-table-column")]), _vm._v("\n          "), _c('span', {
	    staticClass: "hljs-attr"
	  }, [_vm._v("prop")]), _vm._v("="), _c('span', {
	    staticClass: "hljs-string"
	  }, [_vm._v("\"name\"")]), _vm._v("\n          "), _c('span', {
	    staticClass: "hljs-attr"
	  }, [_vm._v("label")]), _vm._v("="), _c('span', {
	    staticClass: "hljs-string"
	  }, [_vm._v("\"姓名\"")]), _vm._v("\n          "), _c('span', {
	    staticClass: "hljs-attr"
	  }, [_vm._v("width")]), _vm._v("="), _c('span', {
	    staticClass: "hljs-string"
	  }, [_vm._v("\"180\"")]), _vm._v(">")]), _vm._v("\n        "), _c('span', {
	    staticClass: "hljs-tag"
	  }, [_vm._v("</"), _c('span', {
	    staticClass: "hljs-name"
	  }, [_vm._v("sf-table-column")]), _vm._v(">")]), _vm._v("\n      "), _c('span', {
	    staticClass: "hljs-tag"
	  }, [_vm._v("<"), _c('span', {
	    staticClass: "hljs-name"
	  }, [_vm._v("sf-table-column")]), _vm._v("\n        "), _c('span', {
	    staticClass: "hljs-attr"
	  }, [_vm._v("prop")]), _vm._v("="), _c('span', {
	    staticClass: "hljs-string"
	  }, [_vm._v("\"age\"")]), _vm._v("\n        "), _c('span', {
	    staticClass: "hljs-attr"
	  }, [_vm._v("label")]), _vm._v("="), _c('span', {
	    staticClass: "hljs-string"
	  }, [_vm._v("\"年龄\"")]), _vm._v("\n        >")]), _vm._v("\n      "), _c('span', {
	    staticClass: "hljs-tag"
	  }, [_vm._v("</"), _c('span', {
	    staticClass: "hljs-name"
	  }, [_vm._v("sf-table-column")]), _vm._v(">")]), _vm._v("\n      "), _c('span', {
	    staticClass: "hljs-tag"
	  }, [_vm._v("<"), _c('span', {
	    staticClass: "hljs-name"
	  }, [_vm._v("sf-table-column")]), _vm._v("\n        "), _c('span', {
	    staticClass: "hljs-attr"
	  }, [_vm._v("prop")]), _vm._v("="), _c('span', {
	    staticClass: "hljs-string"
	  }, [_vm._v("\"sex\"")]), _vm._v("\n        "), _c('span', {
	    staticClass: "hljs-attr"
	  }, [_vm._v("label")]), _vm._v("="), _c('span', {
	    staticClass: "hljs-string"
	  }, [_vm._v("\"性别\"")]), _vm._v(">")]), _vm._v("\n      "), _c('span', {
	    staticClass: "hljs-tag"
	  }, [_vm._v("</"), _c('span', {
	    staticClass: "hljs-name"
	  }, [_vm._v("sf-table-column")]), _vm._v(">")]), _vm._v("\n    "), _c('span', {
	    staticClass: "hljs-tag"
	  }, [_vm._v("</"), _c('span', {
	    staticClass: "hljs-name"
	  }, [_vm._v("sf-table")]), _vm._v(">")]), _vm._v("\n  "), _c('span', {
	    staticClass: "hljs-tag"
	  }, [_vm._v("</"), _c('span', {
	    staticClass: "hljs-name"
	  }, [_vm._v("template")]), _vm._v(">")]), _vm._v("\n\n  "), _c('span', {
	    staticClass: "hljs-tag"
	  }, [_vm._v("<"), _c('span', {
	    staticClass: "hljs-name"
	  }, [_vm._v("script")]), _vm._v(">")]), _c('span', {
	    staticClass: "javascript"
	  }, [_vm._v("\n    "), _c('span', {
	    staticClass: "hljs-keyword"
	  }, [_vm._v("export")]), _vm._v(" "), _c('span', {
	    staticClass: "hljs-keyword"
	  }, [_vm._v("default")]), _vm._v(" {\n      data() {\n        "), _c('span', {
	    staticClass: "hljs-keyword"
	  }, [_vm._v("return")]), _vm._v(" {\n          "), _c('span', {
	    staticClass: "hljs-attr"
	  }, [_vm._v("tableData")]), _vm._v(": [{\n            "), _c('span', {
	    staticClass: "hljs-attr"
	  }, [_vm._v("name")]), _vm._v(": "), _c('span', {
	    staticClass: "hljs-string"
	  }, [_vm._v("'tom'")]), _vm._v(",\n            "), _c('span', {
	    staticClass: "hljs-attr"
	  }, [_vm._v("age")]), _vm._v(" : "), _c('span', {
	    staticClass: "hljs-string"
	  }, [_vm._v("'10'")]), _vm._v(",\n            "), _c('span', {
	    staticClass: "hljs-attr"
	  }, [_vm._v("sex")]), _vm._v(" : "), _c('span', {
	    staticClass: "hljs-string"
	  }, [_vm._v("'male'")]), _vm._v("\n          }, {\n            "), _c('span', {
	    staticClass: "hljs-attr"
	  }, [_vm._v("name")]), _vm._v(": "), _c('span', {
	    staticClass: "hljs-string"
	  }, [_vm._v("'vina'")]), _vm._v(",\n            "), _c('span', {
	    staticClass: "hljs-attr"
	  }, [_vm._v("age")]), _vm._v(": "), _c('span', {
	    staticClass: "hljs-string"
	  }, [_vm._v("'11'")]), _vm._v(",\n            "), _c('span', {
	    staticClass: "hljs-attr"
	  }, [_vm._v("sex")]), _vm._v(": "), _c('span', {
	    staticClass: "hljs-string"
	  }, [_vm._v("'female'")]), _vm._v("\n          }, {\n            "), _c('span', {
	    staticClass: "hljs-attr"
	  }, [_vm._v("name")]), _vm._v(": "), _c('span', {
	    staticClass: "hljs-string"
	  }, [_vm._v("'lucy'")]), _vm._v(",\n            "), _c('span', {
	    staticClass: "hljs-attr"
	  }, [_vm._v("age")]), _vm._v(": "), _c('span', {
	    staticClass: "hljs-string"
	  }, [_vm._v("'12'")]), _vm._v(",\n            "), _c('span', {
	    staticClass: "hljs-attr"
	  }, [_vm._v("sex")]), _vm._v(": "), _c('span', {
	    staticClass: "hljs-string"
	  }, [_vm._v("'female'")]), _vm._v("\n          }, {\n            "), _c('span', {
	    staticClass: "hljs-attr"
	  }, [_vm._v("name")]), _vm._v(": "), _c('span', {
	    staticClass: "hljs-string"
	  }, [_vm._v("'joy'")]), _vm._v(",\n            "), _c('span', {
	    staticClass: "hljs-attr"
	  }, [_vm._v("age")]), _vm._v(": "), _c('span', {
	    staticClass: "hljs-string"
	  }, [_vm._v("'13'")]), _vm._v(",\n            "), _c('span', {
	    staticClass: "hljs-attr"
	  }, [_vm._v("sex")]), _vm._v(": "), _c('span', {
	    staticClass: "hljs-string"
	  }, [_vm._v("'male'")]), _vm._v("\n          }]\n        }\n      }\n    }\n  ")]), _c('span', {
	    staticClass: "hljs-tag"
	  }, [_vm._v("</"), _c('span', {
	    staticClass: "hljs-name"
	  }, [_vm._v("script")]), _vm._v(">")]), _vm._v("\n")])])])])]), _vm._v(" "), _c('h3', [_vm._v("样式自定义")]), _vm._v(" "), _c('demo-block', {
	    staticClass: "demo-box"
	  }, [_c('div', {
	    staticClass: "source"
	  }, [
	    [_c('sf-table', {
	      attrs: {
	        "data": _vm.tableData,
	        "header-height": "100",
	        "height": "300",
	        "clazz": "sf-table-custom"
	      }
	    }, [_c('sf-table-column', {
	      attrs: {
	        "prop": "name",
	        "label": "姓名",
	        "width": "180"
	      }
	    }), _vm._v(" "), _c('sf-table-column', {
	      attrs: {
	        "prop": "age",
	        "label": "年龄"
	      }
	    }), _vm._v(" "), _c('sf-table-column', {
	      attrs: {
	        "prop": "sex",
	        "label": "性别"
	      }
	    })], 1)]
	  ], 2), _vm._v(" "), _c('div', {
	    staticClass: "meta"
	  }, [_c('div', {
	    staticClass: "description"
	  }, [_c('p', [_vm._v("支持自定义表格样式"), _c('code', [_vm._v("clazz")]), _vm._v(", 自定义表格高度"), _c('code', [_vm._v("height")]), _vm._v(", 表头高度"), _c('code', [_vm._v("header-height")])])]), _vm._v(" "), _c('div', {
	    staticClass: "highlight"
	  }, [_c('pre', [_c('code', {
	    staticClass: "hljs language-html"
	  }, [_vm._v("  "), _c('span', {
	    staticClass: "hljs-tag"
	  }, [_vm._v("<"), _c('span', {
	    staticClass: "hljs-name"
	  }, [_vm._v("template")]), _vm._v(">")]), _vm._v("\n    "), _c('span', {
	    staticClass: "hljs-tag"
	  }, [_vm._v("<"), _c('span', {
	    staticClass: "hljs-name"
	  }, [_vm._v("sf-table")]), _vm._v("\n      "), _c('span', {
	    staticClass: "hljs-attr"
	  }, [_vm._v(":data")]), _vm._v("="), _c('span', {
	    staticClass: "hljs-string"
	  }, [_vm._v("\"tableData\"")]), _vm._v(" "), _c('span', {
	    staticClass: "hljs-attr"
	  }, [_vm._v("header-height")]), _vm._v("="), _c('span', {
	    staticClass: "hljs-string"
	  }, [_vm._v("\"100\"")]), _vm._v(" "), _c('span', {
	    staticClass: "hljs-attr"
	  }, [_vm._v("height")]), _vm._v("="), _c('span', {
	    staticClass: "hljs-string"
	  }, [_vm._v("\"300\"")]), _vm._v(" "), _c('span', {
	    staticClass: "hljs-attr"
	  }, [_vm._v("clazz")]), _vm._v("="), _c('span', {
	    staticClass: "hljs-string"
	  }, [_vm._v("\"sf-table-custom\"")]), _vm._v("\n     >")]), _vm._v("\n      "), _c('span', {
	    staticClass: "hljs-tag"
	  }, [_vm._v("<"), _c('span', {
	    staticClass: "hljs-name"
	  }, [_vm._v("sf-table-column")]), _vm._v("\n          "), _c('span', {
	    staticClass: "hljs-attr"
	  }, [_vm._v("prop")]), _vm._v("="), _c('span', {
	    staticClass: "hljs-string"
	  }, [_vm._v("\"name\"")]), _vm._v("\n          "), _c('span', {
	    staticClass: "hljs-attr"
	  }, [_vm._v("label")]), _vm._v("="), _c('span', {
	    staticClass: "hljs-string"
	  }, [_vm._v("\"姓名\"")]), _vm._v("\n          "), _c('span', {
	    staticClass: "hljs-attr"
	  }, [_vm._v("width")]), _vm._v("="), _c('span', {
	    staticClass: "hljs-string"
	  }, [_vm._v("\"180\"")]), _vm._v(">")]), _vm._v("\n        "), _c('span', {
	    staticClass: "hljs-tag"
	  }, [_vm._v("</"), _c('span', {
	    staticClass: "hljs-name"
	  }, [_vm._v("sf-table-column")]), _vm._v(">")]), _vm._v("\n      "), _c('span', {
	    staticClass: "hljs-tag"
	  }, [_vm._v("<"), _c('span', {
	    staticClass: "hljs-name"
	  }, [_vm._v("sf-table-column")]), _vm._v("\n        "), _c('span', {
	    staticClass: "hljs-attr"
	  }, [_vm._v("prop")]), _vm._v("="), _c('span', {
	    staticClass: "hljs-string"
	  }, [_vm._v("\"age\"")]), _vm._v("\n        "), _c('span', {
	    staticClass: "hljs-attr"
	  }, [_vm._v("label")]), _vm._v("="), _c('span', {
	    staticClass: "hljs-string"
	  }, [_vm._v("\"年龄\"")]), _vm._v("\n        >")]), _vm._v("\n      "), _c('span', {
	    staticClass: "hljs-tag"
	  }, [_vm._v("</"), _c('span', {
	    staticClass: "hljs-name"
	  }, [_vm._v("sf-table-column")]), _vm._v(">")]), _vm._v("\n      "), _c('span', {
	    staticClass: "hljs-tag"
	  }, [_vm._v("<"), _c('span', {
	    staticClass: "hljs-name"
	  }, [_vm._v("sf-table-column")]), _vm._v("\n        "), _c('span', {
	    staticClass: "hljs-attr"
	  }, [_vm._v("prop")]), _vm._v("="), _c('span', {
	    staticClass: "hljs-string"
	  }, [_vm._v("\"sex\"")]), _vm._v("\n        "), _c('span', {
	    staticClass: "hljs-attr"
	  }, [_vm._v("label")]), _vm._v("="), _c('span', {
	    staticClass: "hljs-string"
	  }, [_vm._v("\"性别\"")]), _vm._v(">")]), _vm._v("\n      "), _c('span', {
	    staticClass: "hljs-tag"
	  }, [_vm._v("</"), _c('span', {
	    staticClass: "hljs-name"
	  }, [_vm._v("sf-table-column")]), _vm._v(">")]), _vm._v("\n    "), _c('span', {
	    staticClass: "hljs-tag"
	  }, [_vm._v("</"), _c('span', {
	    staticClass: "hljs-name"
	  }, [_vm._v("sf-table")]), _vm._v(">")]), _vm._v("\n  "), _c('span', {
	    staticClass: "hljs-tag"
	  }, [_vm._v("</"), _c('span', {
	    staticClass: "hljs-name"
	  }, [_vm._v("template")]), _vm._v(">")]), _vm._v("\n\n  "), _c('span', {
	    staticClass: "hljs-tag"
	  }, [_vm._v("<"), _c('span', {
	    staticClass: "hljs-name"
	  }, [_vm._v("script")]), _vm._v(">")]), _c('span', {
	    staticClass: "javascript"
	  }, [_vm._v("\n    "), _c('span', {
	    staticClass: "hljs-keyword"
	  }, [_vm._v("export")]), _vm._v(" "), _c('span', {
	    staticClass: "hljs-keyword"
	  }, [_vm._v("default")]), _vm._v(" {\n      data() {\n        "), _c('span', {
	    staticClass: "hljs-keyword"
	  }, [_vm._v("return")]), _vm._v(" {\n          "), _c('span', {
	    staticClass: "hljs-attr"
	  }, [_vm._v("tableData")]), _vm._v(": [{\n                "), _c('span', {
	    staticClass: "hljs-attr"
	  }, [_vm._v("name")]), _vm._v(": "), _c('span', {
	    staticClass: "hljs-string"
	  }, [_vm._v("'tom'")]), _vm._v(",\n                "), _c('span', {
	    staticClass: "hljs-attr"
	  }, [_vm._v("age")]), _vm._v(" : "), _c('span', {
	    staticClass: "hljs-string"
	  }, [_vm._v("'10'")]), _vm._v(",\n                "), _c('span', {
	    staticClass: "hljs-attr"
	  }, [_vm._v("sex")]), _vm._v(" : "), _c('span', {
	    staticClass: "hljs-string"
	  }, [_vm._v("'male'")]), _vm._v("\n            }, {\n                "), _c('span', {
	    staticClass: "hljs-attr"
	  }, [_vm._v("name")]), _vm._v(": "), _c('span', {
	    staticClass: "hljs-string"
	  }, [_vm._v("'vina'")]), _vm._v(",\n                "), _c('span', {
	    staticClass: "hljs-attr"
	  }, [_vm._v("age")]), _vm._v(": "), _c('span', {
	    staticClass: "hljs-string"
	  }, [_vm._v("'11'")]), _vm._v(",\n                "), _c('span', {
	    staticClass: "hljs-attr"
	  }, [_vm._v("sex")]), _vm._v(": "), _c('span', {
	    staticClass: "hljs-string"
	  }, [_vm._v("'female'")]), _vm._v("\n            }, {\n                "), _c('span', {
	    staticClass: "hljs-attr"
	  }, [_vm._v("name")]), _vm._v(": "), _c('span', {
	    staticClass: "hljs-string"
	  }, [_vm._v("'lucy'")]), _vm._v(",\n                "), _c('span', {
	    staticClass: "hljs-attr"
	  }, [_vm._v("age")]), _vm._v(": "), _c('span', {
	    staticClass: "hljs-string"
	  }, [_vm._v("'12'")]), _vm._v(",\n                "), _c('span', {
	    staticClass: "hljs-attr"
	  }, [_vm._v("sex")]), _vm._v(": "), _c('span', {
	    staticClass: "hljs-string"
	  }, [_vm._v("'female'")]), _vm._v("\n            }, {\n                "), _c('span', {
	    staticClass: "hljs-attr"
	  }, [_vm._v("name")]), _vm._v(": "), _c('span', {
	    staticClass: "hljs-string"
	  }, [_vm._v("'joy'")]), _vm._v(",\n                "), _c('span', {
	    staticClass: "hljs-attr"
	  }, [_vm._v("age")]), _vm._v(": "), _c('span', {
	    staticClass: "hljs-string"
	  }, [_vm._v("'13'")]), _vm._v(",\n                "), _c('span', {
	    staticClass: "hljs-attr"
	  }, [_vm._v("sex")]), _vm._v(": "), _c('span', {
	    staticClass: "hljs-string"
	  }, [_vm._v("'male'")]), _vm._v("\n            }, {\n                "), _c('span', {
	    staticClass: "hljs-attr"
	  }, [_vm._v("name")]), _vm._v(": "), _c('span', {
	    staticClass: "hljs-string"
	  }, [_vm._v("'joy'")]), _vm._v(",\n                "), _c('span', {
	    staticClass: "hljs-attr"
	  }, [_vm._v("age")]), _vm._v(": "), _c('span', {
	    staticClass: "hljs-string"
	  }, [_vm._v("'13'")]), _vm._v(",\n                "), _c('span', {
	    staticClass: "hljs-attr"
	  }, [_vm._v("sex")]), _vm._v(": "), _c('span', {
	    staticClass: "hljs-string"
	  }, [_vm._v("'male'")]), _vm._v("\n            }, {\n                "), _c('span', {
	    staticClass: "hljs-attr"
	  }, [_vm._v("name")]), _vm._v(": "), _c('span', {
	    staticClass: "hljs-string"
	  }, [_vm._v("'joy'")]), _vm._v(",\n                "), _c('span', {
	    staticClass: "hljs-attr"
	  }, [_vm._v("age")]), _vm._v(": "), _c('span', {
	    staticClass: "hljs-string"
	  }, [_vm._v("'13'")]), _vm._v(",\n                "), _c('span', {
	    staticClass: "hljs-attr"
	  }, [_vm._v("sex")]), _vm._v(": "), _c('span', {
	    staticClass: "hljs-string"
	  }, [_vm._v("'male'")]), _vm._v("\n            }]\n        }\n      }\n    }\n  ")]), _c('span', {
	    staticClass: "hljs-tag"
	  }, [_vm._v("</"), _c('span', {
	    staticClass: "hljs-name"
	  }, [_vm._v("script")]), _vm._v(">")]), _vm._v("\n")])])])])]), _vm._v(" "), _c('h3', [_vm._v("表格排序功能及自定义事件")]), _vm._v(" "), _c('demo-block', {
	    staticClass: "demo-box"
	  }, [_c('div', {
	    staticClass: "source"
	  }, [
	    [_c('sf-table', {
	      attrs: {
	        "data": _vm.tableData
	      },
	      on: {
	        "row-click": _vm.rowClick
	      }
	    }, [_c('sf-table-column', {
	      attrs: {
	        "prop": "name",
	        "label": "姓名",
	        "width": "180"
	      }
	    }), _vm._v(" "), _c('sf-table-column', {
	      attrs: {
	        "prop": "age",
	        "label": "年龄",
	        "sortable": "",
	        "sort-method": _vm.sortMethod,
	        "formatter": _vm.formatter
	      }
	    }), _vm._v(" "), _c('sf-table-column', {
	      attrs: {
	        "prop": "sex",
	        "label": "性别"
	      }
	    })], 1)]
	  ], 2), _vm._v(" "), _c('div', {
	    staticClass: "meta"
	  }, [_c('div', {
	    staticClass: "description"
	  }, [_c('p', [_vm._v("表格支持排序功能"), _c('code', [_vm._v("sortable")]), _vm._v(", 先支持行选中的自定义事件"), _c('code', [_vm._v("row-click")]), _vm._v(", 列表格式化 "), _c('code', [_vm._v("fomatter")])])]), _vm._v(" "), _c('div', {
	    staticClass: "highlight"
	  }, [_c('pre', [_c('code', {
	    staticClass: "hljs language-html"
	  }, [_vm._v("  "), _c('span', {
	    staticClass: "hljs-tag"
	  }, [_vm._v("<"), _c('span', {
	    staticClass: "hljs-name"
	  }, [_vm._v("template")]), _vm._v(">")]), _vm._v("\n    "), _c('span', {
	    staticClass: "hljs-tag"
	  }, [_vm._v("<"), _c('span', {
	    staticClass: "hljs-name"
	  }, [_vm._v("sf-table")]), _vm._v("\n      "), _c('span', {
	    staticClass: "hljs-attr"
	  }, [_vm._v(":data")]), _vm._v("="), _c('span', {
	    staticClass: "hljs-string"
	  }, [_vm._v("\"tableData\"")]), _vm._v(" @"), _c('span', {
	    staticClass: "hljs-attr"
	  }, [_vm._v("row-click")]), _vm._v("="), _c('span', {
	    staticClass: "hljs-string"
	  }, [_vm._v("\"rowClick\"")]), _vm._v("\n     >")]), _vm._v("\n      "), _c('span', {
	    staticClass: "hljs-tag"
	  }, [_vm._v("<"), _c('span', {
	    staticClass: "hljs-name"
	  }, [_vm._v("sf-table-column")]), _vm._v("\n          "), _c('span', {
	    staticClass: "hljs-attr"
	  }, [_vm._v("prop")]), _vm._v("="), _c('span', {
	    staticClass: "hljs-string"
	  }, [_vm._v("\"name\"")]), _vm._v("\n          "), _c('span', {
	    staticClass: "hljs-attr"
	  }, [_vm._v("label")]), _vm._v("="), _c('span', {
	    staticClass: "hljs-string"
	  }, [_vm._v("\"姓名\"")]), _vm._v("\n          "), _c('span', {
	    staticClass: "hljs-attr"
	  }, [_vm._v("width")]), _vm._v("="), _c('span', {
	    staticClass: "hljs-string"
	  }, [_vm._v("\"180\"")]), _vm._v(">")]), _vm._v("\n        "), _c('span', {
	    staticClass: "hljs-tag"
	  }, [_vm._v("</"), _c('span', {
	    staticClass: "hljs-name"
	  }, [_vm._v("sf-table-column")]), _vm._v(">")]), _vm._v("\n      "), _c('span', {
	    staticClass: "hljs-tag"
	  }, [_vm._v("<"), _c('span', {
	    staticClass: "hljs-name"
	  }, [_vm._v("sf-table-column")]), _vm._v("\n        "), _c('span', {
	    staticClass: "hljs-attr"
	  }, [_vm._v("prop")]), _vm._v("="), _c('span', {
	    staticClass: "hljs-string"
	  }, [_vm._v("\"age\"")]), _vm._v("\n        "), _c('span', {
	    staticClass: "hljs-attr"
	  }, [_vm._v("label")]), _vm._v("="), _c('span', {
	    staticClass: "hljs-string"
	  }, [_vm._v("\"年龄\"")]), _vm._v("\n        "), _c('span', {
	    staticClass: "hljs-attr"
	  }, [_vm._v("sortable")]), _vm._v("\n        "), _c('span', {
	    staticClass: "hljs-attr"
	  }, [_vm._v(":sort-method")]), _vm._v("="), _c('span', {
	    staticClass: "hljs-string"
	  }, [_vm._v("\"sortMethod\"")]), _vm._v("\n        "), _c('span', {
	    staticClass: "hljs-attr"
	  }, [_vm._v(":formatter")]), _vm._v("="), _c('span', {
	    staticClass: "hljs-string"
	  }, [_vm._v("\"formatter\"")]), _vm._v("\n        >")]), _vm._v("\n      "), _c('span', {
	    staticClass: "hljs-tag"
	  }, [_vm._v("</"), _c('span', {
	    staticClass: "hljs-name"
	  }, [_vm._v("sf-table-column")]), _vm._v(">")]), _vm._v("\n      "), _c('span', {
	    staticClass: "hljs-tag"
	  }, [_vm._v("<"), _c('span', {
	    staticClass: "hljs-name"
	  }, [_vm._v("sf-table-column")]), _vm._v("\n        "), _c('span', {
	    staticClass: "hljs-attr"
	  }, [_vm._v("prop")]), _vm._v("="), _c('span', {
	    staticClass: "hljs-string"
	  }, [_vm._v("\"sex\"")]), _vm._v("\n        "), _c('span', {
	    staticClass: "hljs-attr"
	  }, [_vm._v("label")]), _vm._v("="), _c('span', {
	    staticClass: "hljs-string"
	  }, [_vm._v("\"性别\"")]), _vm._v(">")]), _vm._v("\n      "), _c('span', {
	    staticClass: "hljs-tag"
	  }, [_vm._v("</"), _c('span', {
	    staticClass: "hljs-name"
	  }, [_vm._v("sf-table-column")]), _vm._v(">")]), _vm._v("\n    "), _c('span', {
	    staticClass: "hljs-tag"
	  }, [_vm._v("</"), _c('span', {
	    staticClass: "hljs-name"
	  }, [_vm._v("sf-table")]), _vm._v(">")]), _vm._v("\n  "), _c('span', {
	    staticClass: "hljs-tag"
	  }, [_vm._v("</"), _c('span', {
	    staticClass: "hljs-name"
	  }, [_vm._v("template")]), _vm._v(">")]), _vm._v("\n\n  "), _c('span', {
	    staticClass: "hljs-tag"
	  }, [_vm._v("<"), _c('span', {
	    staticClass: "hljs-name"
	  }, [_vm._v("script")]), _vm._v(">")]), _c('span', {
	    staticClass: "javascript"
	  }, [_vm._v("\n    "), _c('span', {
	    staticClass: "hljs-keyword"
	  }, [_vm._v("export")]), _vm._v(" "), _c('span', {
	    staticClass: "hljs-keyword"
	  }, [_vm._v("default")]), _vm._v(" {\n      data() {\n        "), _c('span', {
	    staticClass: "hljs-keyword"
	  }, [_vm._v("return")]), _vm._v(" {\n          "), _c('span', {
	    staticClass: "hljs-attr"
	  }, [_vm._v("tableData")]), _vm._v(": [{\n            "), _c('span', {
	    staticClass: "hljs-attr"
	  }, [_vm._v("name")]), _vm._v(": "), _c('span', {
	    staticClass: "hljs-string"
	  }, [_vm._v("'tom'")]), _vm._v(",\n            "), _c('span', {
	    staticClass: "hljs-attr"
	  }, [_vm._v("age")]), _vm._v(" : "), _c('span', {
	    staticClass: "hljs-string"
	  }, [_vm._v("'10'")]), _vm._v(",\n            "), _c('span', {
	    staticClass: "hljs-attr"
	  }, [_vm._v("sex")]), _vm._v(" : "), _c('span', {
	    staticClass: "hljs-string"
	  }, [_vm._v("'male'")]), _vm._v("\n          }, {\n            "), _c('span', {
	    staticClass: "hljs-attr"
	  }, [_vm._v("name")]), _vm._v(": "), _c('span', {
	    staticClass: "hljs-string"
	  }, [_vm._v("'vina'")]), _vm._v(",\n            "), _c('span', {
	    staticClass: "hljs-attr"
	  }, [_vm._v("age")]), _vm._v(": "), _c('span', {
	    staticClass: "hljs-string"
	  }, [_vm._v("'11'")]), _vm._v(",\n            "), _c('span', {
	    staticClass: "hljs-attr"
	  }, [_vm._v("sex")]), _vm._v(": "), _c('span', {
	    staticClass: "hljs-string"
	  }, [_vm._v("'female'")]), _vm._v("\n          }, {\n            "), _c('span', {
	    staticClass: "hljs-attr"
	  }, [_vm._v("name")]), _vm._v(": "), _c('span', {
	    staticClass: "hljs-string"
	  }, [_vm._v("'lucy'")]), _vm._v(",\n            "), _c('span', {
	    staticClass: "hljs-attr"
	  }, [_vm._v("age")]), _vm._v(": "), _c('span', {
	    staticClass: "hljs-string"
	  }, [_vm._v("'12'")]), _vm._v(",\n            "), _c('span', {
	    staticClass: "hljs-attr"
	  }, [_vm._v("sex")]), _vm._v(": "), _c('span', {
	    staticClass: "hljs-string"
	  }, [_vm._v("'female'")]), _vm._v("\n          }, {\n            "), _c('span', {
	    staticClass: "hljs-attr"
	  }, [_vm._v("name")]), _vm._v(": "), _c('span', {
	    staticClass: "hljs-string"
	  }, [_vm._v("'joy'")]), _vm._v(",\n            "), _c('span', {
	    staticClass: "hljs-attr"
	  }, [_vm._v("age")]), _vm._v(": "), _c('span', {
	    staticClass: "hljs-string"
	  }, [_vm._v("'13'")]), _vm._v(",\n            "), _c('span', {
	    staticClass: "hljs-attr"
	  }, [_vm._v("sex")]), _vm._v(": "), _c('span', {
	    staticClass: "hljs-string"
	  }, [_vm._v("'male'")]), _vm._v("\n          }]\n        }\n      },\n      "), _c('span', {
	    staticClass: "hljs-attr"
	  }, [_vm._v("methods")]), _vm._v(" : {\n            "), _c('span', {
	    staticClass: "hljs-attr"
	  }, [_vm._v("sortMethod")]), _vm._v(" : "), _c('span', {
	    staticClass: "hljs-function"
	  }, [_c('span', {
	    staticClass: "hljs-keyword"
	  }, [_vm._v("function")]), _vm._v("("), _c('span', {
	    staticClass: "hljs-params"
	  }, [_vm._v("a, b")]), _vm._v(")")]), _vm._v("{\n                "), _c('span', {
	    staticClass: "hljs-keyword"
	  }, [_vm._v("return")]), _vm._v(" a - b;\n            },\n            "), _c('span', {
	    staticClass: "hljs-attr"
	  }, [_vm._v("formatter")]), _vm._v(" : "), _c('span', {
	    staticClass: "hljs-function"
	  }, [_c('span', {
	    staticClass: "hljs-keyword"
	  }, [_vm._v("function")]), _vm._v("("), _c('span', {
	    staticClass: "hljs-params"
	  }, [_vm._v("row, column")]), _vm._v(")")]), _vm._v("{\n                "), _c('span', {
	    staticClass: "hljs-keyword"
	  }, [_vm._v("return")]), _vm._v(" row.age + "), _c('span', {
	    staticClass: "hljs-string"
	  }, [_vm._v("'year'")]), _vm._v(";\n            },\n            "), _c('span', {
	    staticClass: "hljs-attr"
	  }, [_vm._v("rowClick")]), _vm._v(" : "), _c('span', {
	    staticClass: "hljs-function"
	  }, [_c('span', {
	    staticClass: "hljs-keyword"
	  }, [_vm._v("function")]), _vm._v("("), _c('span', {
	    staticClass: "hljs-params"
	  }, [_vm._v("row, column, event")]), _vm._v(")")]), _vm._v("{\n                "), _c('span', {
	    staticClass: "hljs-keyword"
	  }, [_vm._v("return")]), _vm._v(" row\n            }\n\n        }\n    }\n  ")]), _c('span', {
	    staticClass: "hljs-tag"
	  }, [_vm._v("</"), _c('span', {
	    staticClass: "hljs-name"
	  }, [_vm._v("script")]), _vm._v(">")]), _vm._v("\n")])])])])])], 1)
	},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('p', [_vm._v("用于展示多条结构类似的数据, 打包文件自动安装了 "), _c('code', [_vm._v("sf-table")]), _vm._v(", "), _c('code', [_vm._v("sf-table-column")]), _vm._v(" 组件")])
	}]}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-50d5d6b9", module.exports)
	  }
	}

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(56);

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	var Component = __webpack_require__(10)(
	  /* script */
	  __webpack_require__(57),
	  /* template */
	  __webpack_require__(58),
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)
	Component.options.__file = "/Users/matrix/Documents/Netease/NSFI/7-ui/.vueloader/7.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] 7.vue: functional components are not supported with templates, they should use render functions.")}

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-50e3ee3a", Component.options)
	  } else {
	    hotAPI.reload("data-v-50e3ee3a", Component.options)
	  }
	})()}

	module.exports = Component.exports


/***/ },
/* 57 */
/***/ function(module, exports) {

	"use strict";

	exports.__esModule = true;
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	exports.default = {
	    methods: {
	        onClick: function onClick(type, msg) {
	            window.sfToast[type](msg);
	        }
	    }
	};

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('section', [_c('h2', [_vm._v("Toast 组件")]), _vm._v(" "), _c('h3', [_vm._v("Toast Error")]), _vm._v(" "), _c('demo-block', {
	    staticClass: "demo-box"
	  }, [_c('div', {
	    staticClass: "source"
	  }, [
	    [_c('sf-button', {
	      attrs: {
	        "color": "danger"
	      },
	      nativeOn: {
	        "click": function($event) {
	          _vm.onClick('error', 'error')
	        }
	      }
	    }, [_vm._v("Error")])]
	  ], 2), _vm._v(" "), _c('div', {
	    staticClass: "meta"
	  }, [_c('div', {
	    staticClass: "highlight"
	  }, [_c('pre', [_c('code', {
	    staticClass: "hljs language-html"
	  }, [_vm._v("    "), _c('span', {
	    staticClass: "hljs-tag"
	  }, [_vm._v("<"), _c('span', {
	    staticClass: "hljs-name"
	  }, [_vm._v("template")]), _vm._v(">")]), _vm._v("\n        "), _c('span', {
	    staticClass: "hljs-tag"
	  }, [_vm._v("<"), _c('span', {
	    staticClass: "hljs-name"
	  }, [_vm._v("sf-button")]), _vm._v(" "), _c('span', {
	    staticClass: "hljs-attr"
	  }, [_vm._v("color")]), _vm._v("="), _c('span', {
	    staticClass: "hljs-string"
	  }, [_vm._v("\"danger\"")]), _vm._v(" @"), _c('span', {
	    staticClass: "hljs-attr"
	  }, [_vm._v("click.native")]), _vm._v("="), _c('span', {
	    staticClass: "hljs-string"
	  }, [_vm._v("\"onClick('error','error')\"")]), _vm._v(">")]), _vm._v("Error"), _c('span', {
	    staticClass: "hljs-tag"
	  }, [_vm._v("</"), _c('span', {
	    staticClass: "hljs-name"
	  }, [_vm._v("sf-button")]), _vm._v(">")]), _vm._v("\n    "), _c('span', {
	    staticClass: "hljs-tag"
	  }, [_vm._v("</"), _c('span', {
	    staticClass: "hljs-name"
	  }, [_vm._v("template")]), _vm._v(">")]), _vm._v("\n    "), _c('span', {
	    staticClass: "hljs-tag"
	  }, [_vm._v("<"), _c('span', {
	    staticClass: "hljs-name"
	  }, [_vm._v("script")]), _vm._v(">")]), _c('span', {
	    staticClass: "javascript"
	  }, [_vm._v("\n        "), _c('span', {
	    staticClass: "hljs-keyword"
	  }, [_vm._v("export")]), _vm._v(" "), _c('span', {
	    staticClass: "hljs-keyword"
	  }, [_vm._v("default")]), _vm._v(" {\n            "), _c('span', {
	    staticClass: "hljs-attr"
	  }, [_vm._v("methods")]), _vm._v(" : {\n                "), _c('span', {
	    staticClass: "hljs-attr"
	  }, [_vm._v("onClick")]), _vm._v(" : "), _c('span', {
	    staticClass: "hljs-function"
	  }, [_c('span', {
	    staticClass: "hljs-keyword"
	  }, [_vm._v("function")]), _vm._v("("), _c('span', {
	    staticClass: "hljs-params"
	  }, [_vm._v("type, msg")]), _vm._v(")")]), _vm._v("{\n                    "), _c('span', {
	    staticClass: "hljs-built_in"
	  }, [_vm._v("window")]), _vm._v(".sfToast[type](msg)\n                }\n            }\n        }\n    ")]), _c('span', {
	    staticClass: "hljs-tag"
	  }, [_vm._v("</"), _c('span', {
	    staticClass: "hljs-name"
	  }, [_vm._v("script")]), _vm._v(">")]), _vm._v("\n")])])])])]), _vm._v(" "), _c('h3', [_vm._v("Toast Info")]), _vm._v(" "), _c('demo-block', {
	    staticClass: "demo-box"
	  }, [_c('div', {
	    staticClass: "source"
	  }, [
	    [_c('sf-button', {
	      attrs: {
	        "color": "info"
	      },
	      nativeOn: {
	        "click": function($event) {
	          _vm.onClick('info', 'info')
	        }
	      }
	    }, [_vm._v("Info")])]
	  ], 2), _vm._v(" "), _c('div', {
	    staticClass: "meta"
	  }, [_c('div', {
	    staticClass: "highlight"
	  }, [_c('pre', [_c('code', {
	    staticClass: "hljs language-html"
	  }, [_vm._v("    "), _c('span', {
	    staticClass: "hljs-tag"
	  }, [_vm._v("<"), _c('span', {
	    staticClass: "hljs-name"
	  }, [_vm._v("template")]), _vm._v(">")]), _vm._v("\n        "), _c('span', {
	    staticClass: "hljs-tag"
	  }, [_vm._v("<"), _c('span', {
	    staticClass: "hljs-name"
	  }, [_vm._v("sf-button")]), _vm._v(" "), _c('span', {
	    staticClass: "hljs-attr"
	  }, [_vm._v("color")]), _vm._v("="), _c('span', {
	    staticClass: "hljs-string"
	  }, [_vm._v("\"info\"")]), _vm._v(" @"), _c('span', {
	    staticClass: "hljs-attr"
	  }, [_vm._v("click.native")]), _vm._v("="), _c('span', {
	    staticClass: "hljs-string"
	  }, [_vm._v("\"onClick('info','info')\"")]), _vm._v(">")]), _vm._v("Info"), _c('span', {
	    staticClass: "hljs-tag"
	  }, [_vm._v("</"), _c('span', {
	    staticClass: "hljs-name"
	  }, [_vm._v("sf-button")]), _vm._v(">")]), _vm._v("\n    "), _c('span', {
	    staticClass: "hljs-tag"
	  }, [_vm._v("</"), _c('span', {
	    staticClass: "hljs-name"
	  }, [_vm._v("template")]), _vm._v(">")]), _vm._v("\n    "), _c('span', {
	    staticClass: "hljs-tag"
	  }, [_vm._v("<"), _c('span', {
	    staticClass: "hljs-name"
	  }, [_vm._v("script")]), _vm._v(">")]), _c('span', {
	    staticClass: "javascript"
	  }, [_vm._v("\n        "), _c('span', {
	    staticClass: "hljs-keyword"
	  }, [_vm._v("export")]), _vm._v(" "), _c('span', {
	    staticClass: "hljs-keyword"
	  }, [_vm._v("default")]), _vm._v(" {\n            "), _c('span', {
	    staticClass: "hljs-attr"
	  }, [_vm._v("methods")]), _vm._v(" : {\n                "), _c('span', {
	    staticClass: "hljs-attr"
	  }, [_vm._v("onClick")]), _vm._v(" : "), _c('span', {
	    staticClass: "hljs-function"
	  }, [_c('span', {
	    staticClass: "hljs-keyword"
	  }, [_vm._v("function")]), _vm._v("("), _c('span', {
	    staticClass: "hljs-params"
	  }, [_vm._v("type, msg")]), _vm._v(")")]), _vm._v("{\n                    "), _c('span', {
	    staticClass: "hljs-built_in"
	  }, [_vm._v("window")]), _vm._v(".sfToast[type](msg)\n                }\n            }\n        }\n    ")]), _c('span', {
	    staticClass: "hljs-tag"
	  }, [_vm._v("</"), _c('span', {
	    staticClass: "hljs-name"
	  }, [_vm._v("script")]), _vm._v(">")]), _vm._v("\n")])])])])]), _vm._v(" "), _c('h3', [_vm._v("Toast Warning")]), _vm._v(" "), _c('demo-block', {
	    staticClass: "demo-box"
	  }, [_c('div', {
	    staticClass: "source"
	  }, [
	    [_c('sf-button', {
	      attrs: {
	        "color": "warning"
	      },
	      nativeOn: {
	        "click": function($event) {
	          _vm.onClick('warning', 'warning')
	        }
	      }
	    }, [_vm._v("Warning")])]
	  ], 2), _vm._v(" "), _c('div', {
	    staticClass: "meta"
	  }, [_c('div', {
	    staticClass: "highlight"
	  }, [_c('pre', [_c('code', {
	    staticClass: "hljs language-html"
	  }, [_vm._v("    "), _c('span', {
	    staticClass: "hljs-tag"
	  }, [_vm._v("<"), _c('span', {
	    staticClass: "hljs-name"
	  }, [_vm._v("template")]), _vm._v(">")]), _vm._v("\n        "), _c('span', {
	    staticClass: "hljs-tag"
	  }, [_vm._v("<"), _c('span', {
	    staticClass: "hljs-name"
	  }, [_vm._v("sf-button")]), _vm._v(" "), _c('span', {
	    staticClass: "hljs-attr"
	  }, [_vm._v("color")]), _vm._v("="), _c('span', {
	    staticClass: "hljs-string"
	  }, [_vm._v("\"warning\"")]), _vm._v(" @"), _c('span', {
	    staticClass: "hljs-attr"
	  }, [_vm._v("click.native")]), _vm._v("="), _c('span', {
	    staticClass: "hljs-string"
	  }, [_vm._v("\"onClick('warning','warning')\"")]), _vm._v(">")]), _vm._v("Warning"), _c('span', {
	    staticClass: "hljs-tag"
	  }, [_vm._v("</"), _c('span', {
	    staticClass: "hljs-name"
	  }, [_vm._v("sf-button")]), _vm._v(">")]), _vm._v("\n    "), _c('span', {
	    staticClass: "hljs-tag"
	  }, [_vm._v("</"), _c('span', {
	    staticClass: "hljs-name"
	  }, [_vm._v("template")]), _vm._v(">")]), _vm._v("\n    "), _c('span', {
	    staticClass: "hljs-tag"
	  }, [_vm._v("<"), _c('span', {
	    staticClass: "hljs-name"
	  }, [_vm._v("script")]), _vm._v(">")]), _c('span', {
	    staticClass: "javascript"
	  }, [_vm._v("\n        "), _c('span', {
	    staticClass: "hljs-keyword"
	  }, [_vm._v("export")]), _vm._v(" "), _c('span', {
	    staticClass: "hljs-keyword"
	  }, [_vm._v("default")]), _vm._v(" {\n            "), _c('span', {
	    staticClass: "hljs-attr"
	  }, [_vm._v("methods")]), _vm._v(" : {\n                "), _c('span', {
	    staticClass: "hljs-attr"
	  }, [_vm._v("onClick")]), _vm._v(" : "), _c('span', {
	    staticClass: "hljs-function"
	  }, [_c('span', {
	    staticClass: "hljs-keyword"
	  }, [_vm._v("function")]), _vm._v("("), _c('span', {
	    staticClass: "hljs-params"
	  }, [_vm._v("type, msg")]), _vm._v(")")]), _vm._v("{\n                    "), _c('span', {
	    staticClass: "hljs-built_in"
	  }, [_vm._v("window")]), _vm._v(".sfToast[type](msg)\n                }\n            }\n        }\n    ")]), _c('span', {
	    staticClass: "hljs-tag"
	  }, [_vm._v("</"), _c('span', {
	    staticClass: "hljs-name"
	  }, [_vm._v("script")]), _vm._v(">")]), _vm._v("\n")])])])])]), _vm._v(" "), _c('h3', [_vm._v("Toast Success")]), _vm._v(" "), _c('demo-block', {
	    staticClass: "demo-box"
	  }, [_c('div', {
	    staticClass: "source"
	  }, [
	    [_c('sf-button', {
	      attrs: {
	        "color": "primary"
	      },
	      nativeOn: {
	        "click": function($event) {
	          _vm.onClick('success', 'success')
	        }
	      }
	    }, [_vm._v("Success")])]
	  ], 2), _vm._v(" "), _c('div', {
	    staticClass: "meta"
	  }, [_c('div', {
	    staticClass: "highlight"
	  }, [_c('pre', [_c('code', {
	    staticClass: "hljs language-html"
	  }, [_vm._v("    "), _c('span', {
	    staticClass: "hljs-tag"
	  }, [_vm._v("<"), _c('span', {
	    staticClass: "hljs-name"
	  }, [_vm._v("template")]), _vm._v(">")]), _vm._v("\n        "), _c('span', {
	    staticClass: "hljs-tag"
	  }, [_vm._v("<"), _c('span', {
	    staticClass: "hljs-name"
	  }, [_vm._v("sf-button")]), _vm._v(" "), _c('span', {
	    staticClass: "hljs-attr"
	  }, [_vm._v("color")]), _vm._v("="), _c('span', {
	    staticClass: "hljs-string"
	  }, [_vm._v("\"primary\"")]), _vm._v(" @"), _c('span', {
	    staticClass: "hljs-attr"
	  }, [_vm._v("click.native")]), _vm._v("="), _c('span', {
	    staticClass: "hljs-string"
	  }, [_vm._v("\"onClick('success','success')\"")]), _vm._v(">")]), _vm._v("Success"), _c('span', {
	    staticClass: "hljs-tag"
	  }, [_vm._v("</"), _c('span', {
	    staticClass: "hljs-name"
	  }, [_vm._v("sf-button")]), _vm._v(">")]), _vm._v("\n    "), _c('span', {
	    staticClass: "hljs-tag"
	  }, [_vm._v("</"), _c('span', {
	    staticClass: "hljs-name"
	  }, [_vm._v("template")]), _vm._v(">")]), _vm._v("\n    "), _c('span', {
	    staticClass: "hljs-tag"
	  }, [_vm._v("<"), _c('span', {
	    staticClass: "hljs-name"
	  }, [_vm._v("script")]), _vm._v(">")]), _c('span', {
	    staticClass: "javascript"
	  }, [_vm._v("\n        "), _c('span', {
	    staticClass: "hljs-keyword"
	  }, [_vm._v("export")]), _vm._v(" "), _c('span', {
	    staticClass: "hljs-keyword"
	  }, [_vm._v("default")]), _vm._v(" {\n            "), _c('span', {
	    staticClass: "hljs-attr"
	  }, [_vm._v("methods")]), _vm._v(" : {\n                "), _c('span', {
	    staticClass: "hljs-attr"
	  }, [_vm._v("onClick")]), _vm._v(" : "), _c('span', {
	    staticClass: "hljs-function"
	  }, [_c('span', {
	    staticClass: "hljs-keyword"
	  }, [_vm._v("function")]), _vm._v("("), _c('span', {
	    staticClass: "hljs-params"
	  }, [_vm._v("type, msg")]), _vm._v(")")]), _vm._v("{\n                    "), _c('span', {
	    staticClass: "hljs-built_in"
	  }, [_vm._v("window")]), _vm._v(".sfToast[type](msg)\n                }\n            }\n        }\n    ")]), _c('span', {
	    staticClass: "hljs-tag"
	  }, [_vm._v("</"), _c('span', {
	    staticClass: "hljs-name"
	  }, [_vm._v("script")]), _vm._v(">")]), _vm._v("\n")])])])])])], 1)
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-50e3ee3a", module.exports)
	  }
	}

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(60);

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	var Component = __webpack_require__(10)(
	  /* script */
	  __webpack_require__(61),
	  /* template */
	  __webpack_require__(62),
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)
	Component.options.__file = "/Users/matrix/Documents/Netease/NSFI/7-ui/.vueloader/8.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] 8.vue: functional components are not supported with templates, they should use render functions.")}

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-50f205bb", Component.options)
	  } else {
	    hotAPI.reload("data-v-50f205bb", Component.options)
	  }
	})()}

	module.exports = Component.exports


/***/ },
/* 61 */
/***/ function(module, exports) {

	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	"use strict";

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('section', [_c('h2', [_vm._v("tooltips组件")]), _vm._v(" "), _c('h3', [_vm._v("基础用法")]), _vm._v(" "), _c('demo-block', {
	    staticClass: "demo-box"
	  }, [_c('div', {
	    staticClass: "source"
	  }, [
	    [_c('div', {
	      staticStyle: {
	        "position": "relative",
	        "width": "400px",
	        "margin": "20px auto",
	        "height": "200px"
	      }
	    }, [_c('sf-tooltips', {
	      staticStyle: {
	        "position": "absolute",
	        "left": "-40px",
	        "top": "20px"
	      },
	      attrs: {
	        "content": "<p>tooltips hello</p><p>tooltips hello</p>",
	        "placement": "left up"
	      }
	    }, [_c('sf-button', [_vm._v("左上")])], 1), _vm._v(" "), _c('sf-tooltips', {
	      staticStyle: {
	        "position": "absolute",
	        "left": "-40px",
	        "top": "80px"
	      },
	      attrs: {
	        "content": "<p>tooltips hello</p><p>tooltips hello</p>",
	        "placement": "left"
	      }
	    }, [_c('sf-button', [_vm._v("左中")])], 1), _vm._v(" "), _c('sf-tooltips', {
	      staticStyle: {
	        "position": "absolute",
	        "left": "-40px",
	        "top": "140px"
	      },
	      attrs: {
	        "content": "<p>tooltips hello</p><p>tooltips hello</p>",
	        "placement": "left down"
	      }
	    }, [_c('sf-button', [_vm._v("左下")])], 1), _vm._v(" "), _c('sf-tooltips', {
	      staticStyle: {
	        "position": "absolute",
	        "left": "40px",
	        "top": "0px"
	      },
	      attrs: {
	        "content": "<p>tooltips hello</p><p>tooltips hello</p>",
	        "placement": "up left"
	      }
	    }, [_c('sf-button', [_vm._v("上左")])], 1), _vm._v(" "), _c('sf-tooltips', {
	      staticStyle: {
	        "position": "absolute",
	        "left": "140px",
	        "top": "0px"
	      },
	      attrs: {
	        "content": "<p>tooltips hello</p><p>tooltips hello</p>",
	        "placement": "up"
	      }
	    }, [_c('sf-button', [_vm._v("上中")])], 1), _vm._v(" "), _c('sf-tooltips', {
	      staticStyle: {
	        "position": "absolute",
	        "left": "240px",
	        "top": "0px"
	      },
	      attrs: {
	        "content": "<p>tooltips hello</p><p>tooltips hello</p>",
	        "placement": "up right"
	      }
	    }, [_c('sf-button', [_vm._v("上右")])], 1), _vm._v(" "), _c('sf-tooltips', {
	      staticStyle: {
	        "position": "absolute",
	        "left": "320px",
	        "top": "20px"
	      },
	      attrs: {
	        "content": "<p>tooltips hello</p><p>tooltips hello</p>",
	        "placement": "right up"
	      }
	    }, [_c('sf-button', [_vm._v("右上")])], 1), _vm._v(" "), _c('sf-tooltips', {
	      staticStyle: {
	        "position": "absolute",
	        "left": "320px",
	        "top": "80px"
	      },
	      attrs: {
	        "content": "<p>tooltips hello</p><p>tooltips hello</p>",
	        "placement": "right"
	      }
	    }, [_c('sf-button', [_vm._v("右中")])], 1), _vm._v(" "), _c('sf-tooltips', {
	      staticStyle: {
	        "position": "absolute",
	        "left": "320px",
	        "top": "140px"
	      },
	      attrs: {
	        "content": "<p>tooltips hello</p><p>tooltips hello</p>",
	        "placement": "right down"
	      }
	    }, [_c('sf-button', [_vm._v("右下")])], 1), _vm._v(" "), _c('sf-tooltips', {
	      staticStyle: {
	        "position": "absolute",
	        "left": "40px",
	        "top": "160px"
	      },
	      attrs: {
	        "content": "<p>tooltips hello</p><p>tooltips hello</p>",
	        "placement": "down left"
	      }
	    }, [_c('sf-button', [_vm._v("下左")])], 1), _vm._v(" "), _c('sf-tooltips', {
	      staticStyle: {
	        "position": "absolute",
	        "left": "140px",
	        "top": "160px"
	      },
	      attrs: {
	        "content": "<p>tooltips hello</p><p>tooltips hello</p>",
	        "placement": "down"
	      }
	    }, [_c('sf-button', [_vm._v("下中")])], 1), _vm._v(" "), _c('sf-tooltips', {
	      staticStyle: {
	        "position": "absolute",
	        "left": "240px",
	        "top": "160px"
	      },
	      attrs: {
	        "content": "<p>tooltips hello</p><p>tooltips hello</p>",
	        "placement": "down right"
	      }
	    }, [_c('sf-button', [_vm._v("下右")])], 1)], 1)]
	  ], 2), _vm._v(" "), _c('div', {
	    staticClass: "meta"
	  }, [_c('div', {
	    staticClass: "description"
	  }, [_c('p', [_vm._v("sf-tooltips组件。")])]), _vm._v(" "), _c('div', {
	    staticClass: "highlight"
	  }, [_c('pre', [_c('code', {
	    staticClass: "hljs language-html"
	  }, [_c('span', {
	    staticClass: "hljs-tag"
	  }, [_vm._v("<"), _c('span', {
	    staticClass: "hljs-name"
	  }, [_vm._v("template")]), _vm._v(">")]), _vm._v("\n"), _c('span', {
	    staticClass: "hljs-tag"
	  }, [_vm._v("<"), _c('span', {
	    staticClass: "hljs-name"
	  }, [_vm._v("div")]), _vm._v(" "), _c('span', {
	    staticClass: "hljs-attr"
	  }, [_vm._v("style")]), _vm._v("="), _c('span', {
	    staticClass: "hljs-string"
	  }, [_vm._v("\"position: relative; width: 400px; margin: 20px auto; height:200px;\"")]), _vm._v(">")]), _vm._v("\n\t\t"), _c('span', {
	    staticClass: "hljs-tag"
	  }, [_vm._v("<"), _c('span', {
	    staticClass: "hljs-name"
	  }, [_vm._v("sf-tooltips")]), _vm._v(" "), _c('span', {
	    staticClass: "hljs-attr"
	  }, [_vm._v("content")]), _vm._v("="), _c('span', {
	    staticClass: "hljs-string"
	  }, [_vm._v("\"<p>tooltips hello</p><p>tooltips hello</p>\"")]), _vm._v(" "), _c('span', {
	    staticClass: "hljs-attr"
	  }, [_vm._v("placement")]), _vm._v("="), _c('span', {
	    staticClass: "hljs-string"
	  }, [_vm._v("\"left up\"")]), _vm._v(" "), _c('span', {
	    staticClass: "hljs-attr"
	  }, [_vm._v("style")]), _vm._v("="), _c('span', {
	    staticClass: "hljs-string"
	  }, [_vm._v("\"position: absolute;left:-40px;top:20px;\"")]), _vm._v(">")]), _c('span', {
	    staticClass: "hljs-tag"
	  }, [_vm._v("<"), _c('span', {
	    staticClass: "hljs-name"
	  }, [_vm._v("sf-button")]), _vm._v(">")]), _vm._v("左上"), _c('span', {
	    staticClass: "hljs-tag"
	  }, [_vm._v("</"), _c('span', {
	    staticClass: "hljs-name"
	  }, [_vm._v("sf-button")]), _vm._v(">")]), _c('span', {
	    staticClass: "hljs-tag"
	  }, [_vm._v("</"), _c('span', {
	    staticClass: "hljs-name"
	  }, [_vm._v("sf-tooltips")]), _vm._v(">")]), _vm._v("\n\t\t"), _c('span', {
	    staticClass: "hljs-tag"
	  }, [_vm._v("<"), _c('span', {
	    staticClass: "hljs-name"
	  }, [_vm._v("sf-tooltips")]), _vm._v(" "), _c('span', {
	    staticClass: "hljs-attr"
	  }, [_vm._v("content")]), _vm._v("="), _c('span', {
	    staticClass: "hljs-string"
	  }, [_vm._v("\"<p>tooltips hello</p><p>tooltips hello</p>\"")]), _vm._v(" "), _c('span', {
	    staticClass: "hljs-attr"
	  }, [_vm._v("placement")]), _vm._v("="), _c('span', {
	    staticClass: "hljs-string"
	  }, [_vm._v("\"left\"")]), _vm._v(" "), _c('span', {
	    staticClass: "hljs-attr"
	  }, [_vm._v("style")]), _vm._v("="), _c('span', {
	    staticClass: "hljs-string"
	  }, [_vm._v("\"position: absolute;left:-40px;top:80px;\"")]), _vm._v(">")]), _c('span', {
	    staticClass: "hljs-tag"
	  }, [_vm._v("<"), _c('span', {
	    staticClass: "hljs-name"
	  }, [_vm._v("sf-button")]), _vm._v(">")]), _vm._v("左中"), _c('span', {
	    staticClass: "hljs-tag"
	  }, [_vm._v("</"), _c('span', {
	    staticClass: "hljs-name"
	  }, [_vm._v("sf-button")]), _vm._v(">")]), _c('span', {
	    staticClass: "hljs-tag"
	  }, [_vm._v("</"), _c('span', {
	    staticClass: "hljs-name"
	  }, [_vm._v("sf-tooltips")]), _vm._v(">")]), _vm._v("\n\t\t"), _c('span', {
	    staticClass: "hljs-tag"
	  }, [_vm._v("<"), _c('span', {
	    staticClass: "hljs-name"
	  }, [_vm._v("sf-tooltips")]), _vm._v(" "), _c('span', {
	    staticClass: "hljs-attr"
	  }, [_vm._v("content")]), _vm._v("="), _c('span', {
	    staticClass: "hljs-string"
	  }, [_vm._v("\"<p>tooltips hello</p><p>tooltips hello</p>\"")]), _vm._v(" "), _c('span', {
	    staticClass: "hljs-attr"
	  }, [_vm._v("placement")]), _vm._v("="), _c('span', {
	    staticClass: "hljs-string"
	  }, [_vm._v("\"left down\"")]), _vm._v(" "), _c('span', {
	    staticClass: "hljs-attr"
	  }, [_vm._v("style")]), _vm._v("="), _c('span', {
	    staticClass: "hljs-string"
	  }, [_vm._v("\"position: absolute;left:-40px;top:140px;\"")]), _vm._v(">")]), _c('span', {
	    staticClass: "hljs-tag"
	  }, [_vm._v("<"), _c('span', {
	    staticClass: "hljs-name"
	  }, [_vm._v("sf-button")]), _vm._v(">")]), _vm._v("左下"), _c('span', {
	    staticClass: "hljs-tag"
	  }, [_vm._v("</"), _c('span', {
	    staticClass: "hljs-name"
	  }, [_vm._v("sf-button")]), _vm._v(">")]), _c('span', {
	    staticClass: "hljs-tag"
	  }, [_vm._v("</"), _c('span', {
	    staticClass: "hljs-name"
	  }, [_vm._v("sf-tooltips")]), _vm._v(">")]), _vm._v("\n\t\t"), _c('span', {
	    staticClass: "hljs-tag"
	  }, [_vm._v("<"), _c('span', {
	    staticClass: "hljs-name"
	  }, [_vm._v("sf-tooltips")]), _vm._v(" "), _c('span', {
	    staticClass: "hljs-attr"
	  }, [_vm._v("content")]), _vm._v("="), _c('span', {
	    staticClass: "hljs-string"
	  }, [_vm._v("\"<p>tooltips hello</p><p>tooltips hello</p>\"")]), _vm._v(" "), _c('span', {
	    staticClass: "hljs-attr"
	  }, [_vm._v("placement")]), _vm._v("="), _c('span', {
	    staticClass: "hljs-string"
	  }, [_vm._v("\"up left\"")]), _vm._v(" "), _c('span', {
	    staticClass: "hljs-attr"
	  }, [_vm._v("style")]), _vm._v("="), _c('span', {
	    staticClass: "hljs-string"
	  }, [_vm._v("\"position: absolute;left:40px;top: 0px;\"")]), _vm._v(">")]), _c('span', {
	    staticClass: "hljs-tag"
	  }, [_vm._v("<"), _c('span', {
	    staticClass: "hljs-name"
	  }, [_vm._v("sf-button")]), _vm._v(">")]), _vm._v("上左"), _c('span', {
	    staticClass: "hljs-tag"
	  }, [_vm._v("</"), _c('span', {
	    staticClass: "hljs-name"
	  }, [_vm._v("sf-button")]), _vm._v(">")]), _c('span', {
	    staticClass: "hljs-tag"
	  }, [_vm._v("</"), _c('span', {
	    staticClass: "hljs-name"
	  }, [_vm._v("sf-tooltips")]), _vm._v(">")]), _vm._v("\n\t\t"), _c('span', {
	    staticClass: "hljs-tag"
	  }, [_vm._v("<"), _c('span', {
	    staticClass: "hljs-name"
	  }, [_vm._v("sf-tooltips")]), _vm._v(" "), _c('span', {
	    staticClass: "hljs-attr"
	  }, [_vm._v("content")]), _vm._v("="), _c('span', {
	    staticClass: "hljs-string"
	  }, [_vm._v("\"<p>tooltips hello</p><p>tooltips hello</p>\"")]), _vm._v(" "), _c('span', {
	    staticClass: "hljs-attr"
	  }, [_vm._v("placement")]), _vm._v("="), _c('span', {
	    staticClass: "hljs-string"
	  }, [_vm._v("\"up\"")]), _vm._v(" "), _c('span', {
	    staticClass: "hljs-attr"
	  }, [_vm._v("style")]), _vm._v("="), _c('span', {
	    staticClass: "hljs-string"
	  }, [_vm._v("\"position: absolute;left:140px;top: 0px\"")]), _vm._v(">")]), _c('span', {
	    staticClass: "hljs-tag"
	  }, [_vm._v("<"), _c('span', {
	    staticClass: "hljs-name"
	  }, [_vm._v("sf-button")]), _vm._v(">")]), _vm._v("上中"), _c('span', {
	    staticClass: "hljs-tag"
	  }, [_vm._v("</"), _c('span', {
	    staticClass: "hljs-name"
	  }, [_vm._v("sf-button")]), _vm._v(">")]), _c('span', {
	    staticClass: "hljs-tag"
	  }, [_vm._v("</"), _c('span', {
	    staticClass: "hljs-name"
	  }, [_vm._v("sf-tooltips")]), _vm._v(">")]), _vm._v("\n\t\t"), _c('span', {
	    staticClass: "hljs-tag"
	  }, [_vm._v("<"), _c('span', {
	    staticClass: "hljs-name"
	  }, [_vm._v("sf-tooltips")]), _vm._v(" "), _c('span', {
	    staticClass: "hljs-attr"
	  }, [_vm._v("content")]), _vm._v("="), _c('span', {
	    staticClass: "hljs-string"
	  }, [_vm._v("\"<p>tooltips hello</p><p>tooltips hello</p>\"")]), _vm._v(" "), _c('span', {
	    staticClass: "hljs-attr"
	  }, [_vm._v("placement")]), _vm._v("="), _c('span', {
	    staticClass: "hljs-string"
	  }, [_vm._v("\"up right\"")]), _vm._v(" "), _c('span', {
	    staticClass: "hljs-attr"
	  }, [_vm._v("style")]), _vm._v("="), _c('span', {
	    staticClass: "hljs-string"
	  }, [_vm._v("\"position: absolute;left:240px;top: 0px;\"")]), _vm._v(">")]), _c('span', {
	    staticClass: "hljs-tag"
	  }, [_vm._v("<"), _c('span', {
	    staticClass: "hljs-name"
	  }, [_vm._v("sf-button")]), _vm._v(">")]), _vm._v("上右"), _c('span', {
	    staticClass: "hljs-tag"
	  }, [_vm._v("</"), _c('span', {
	    staticClass: "hljs-name"
	  }, [_vm._v("sf-button")]), _vm._v(">")]), _c('span', {
	    staticClass: "hljs-tag"
	  }, [_vm._v("</"), _c('span', {
	    staticClass: "hljs-name"
	  }, [_vm._v("sf-tooltips")]), _vm._v(">")]), _vm._v("\n\t\t"), _c('span', {
	    staticClass: "hljs-tag"
	  }, [_vm._v("<"), _c('span', {
	    staticClass: "hljs-name"
	  }, [_vm._v("sf-tooltips")]), _vm._v(" "), _c('span', {
	    staticClass: "hljs-attr"
	  }, [_vm._v("content")]), _vm._v("="), _c('span', {
	    staticClass: "hljs-string"
	  }, [_vm._v("\"<p>tooltips hello</p><p>tooltips hello</p>\"")]), _vm._v(" "), _c('span', {
	    staticClass: "hljs-attr"
	  }, [_vm._v("placement")]), _vm._v("="), _c('span', {
	    staticClass: "hljs-string"
	  }, [_vm._v("\"right up\"")]), _vm._v(" "), _c('span', {
	    staticClass: "hljs-attr"
	  }, [_vm._v("style")]), _vm._v("="), _c('span', {
	    staticClass: "hljs-string"
	  }, [_vm._v("\"position: absolute;left:320px;top: 20px;\"")]), _vm._v(">")]), _c('span', {
	    staticClass: "hljs-tag"
	  }, [_vm._v("<"), _c('span', {
	    staticClass: "hljs-name"
	  }, [_vm._v("sf-button")]), _vm._v(">")]), _vm._v("右上"), _c('span', {
	    staticClass: "hljs-tag"
	  }, [_vm._v("</"), _c('span', {
	    staticClass: "hljs-name"
	  }, [_vm._v("sf-button")]), _vm._v(">")]), _c('span', {
	    staticClass: "hljs-tag"
	  }, [_vm._v("</"), _c('span', {
	    staticClass: "hljs-name"
	  }, [_vm._v("sf-tooltips")]), _vm._v(">")]), _vm._v("\n\t\t"), _c('span', {
	    staticClass: "hljs-tag"
	  }, [_vm._v("<"), _c('span', {
	    staticClass: "hljs-name"
	  }, [_vm._v("sf-tooltips")]), _vm._v(" "), _c('span', {
	    staticClass: "hljs-attr"
	  }, [_vm._v("content")]), _vm._v("="), _c('span', {
	    staticClass: "hljs-string"
	  }, [_vm._v("\"<p>tooltips hello</p><p>tooltips hello</p>\"")]), _vm._v(" "), _c('span', {
	    staticClass: "hljs-attr"
	  }, [_vm._v("placement")]), _vm._v("="), _c('span', {
	    staticClass: "hljs-string"
	  }, [_vm._v("\"right\"")]), _vm._v(" "), _c('span', {
	    staticClass: "hljs-attr"
	  }, [_vm._v("style")]), _vm._v("="), _c('span', {
	    staticClass: "hljs-string"
	  }, [_vm._v("\"position: absolute;left:320px;top: 80px;\"")]), _vm._v(">")]), _c('span', {
	    staticClass: "hljs-tag"
	  }, [_vm._v("<"), _c('span', {
	    staticClass: "hljs-name"
	  }, [_vm._v("sf-button")]), _vm._v(">")]), _vm._v("右中"), _c('span', {
	    staticClass: "hljs-tag"
	  }, [_vm._v("</"), _c('span', {
	    staticClass: "hljs-name"
	  }, [_vm._v("sf-button")]), _vm._v(">")]), _c('span', {
	    staticClass: "hljs-tag"
	  }, [_vm._v("</"), _c('span', {
	    staticClass: "hljs-name"
	  }, [_vm._v("sf-tooltips")]), _vm._v(">")]), _vm._v("\n\t\t"), _c('span', {
	    staticClass: "hljs-tag"
	  }, [_vm._v("<"), _c('span', {
	    staticClass: "hljs-name"
	  }, [_vm._v("sf-tooltips")]), _vm._v(" "), _c('span', {
	    staticClass: "hljs-attr"
	  }, [_vm._v("content")]), _vm._v("="), _c('span', {
	    staticClass: "hljs-string"
	  }, [_vm._v("\"<p>tooltips hello</p><p>tooltips hello</p>\"")]), _vm._v(" "), _c('span', {
	    staticClass: "hljs-attr"
	  }, [_vm._v("placement")]), _vm._v("="), _c('span', {
	    staticClass: "hljs-string"
	  }, [_vm._v("\"right down\"")]), _vm._v(" "), _c('span', {
	    staticClass: "hljs-attr"
	  }, [_vm._v("style")]), _vm._v("="), _c('span', {
	    staticClass: "hljs-string"
	  }, [_vm._v("\"position: absolute;left:320px;top:140px;\"")]), _vm._v(">")]), _c('span', {
	    staticClass: "hljs-tag"
	  }, [_vm._v("<"), _c('span', {
	    staticClass: "hljs-name"
	  }, [_vm._v("sf-button")]), _vm._v(">")]), _vm._v("右下"), _c('span', {
	    staticClass: "hljs-tag"
	  }, [_vm._v("</"), _c('span', {
	    staticClass: "hljs-name"
	  }, [_vm._v("sf-button")]), _vm._v(">")]), _c('span', {
	    staticClass: "hljs-tag"
	  }, [_vm._v("</"), _c('span', {
	    staticClass: "hljs-name"
	  }, [_vm._v("sf-tooltips")]), _vm._v(">")]), _vm._v("\n\t\t"), _c('span', {
	    staticClass: "hljs-tag"
	  }, [_vm._v("<"), _c('span', {
	    staticClass: "hljs-name"
	  }, [_vm._v("sf-tooltips")]), _vm._v(" "), _c('span', {
	    staticClass: "hljs-attr"
	  }, [_vm._v("content")]), _vm._v("="), _c('span', {
	    staticClass: "hljs-string"
	  }, [_vm._v("\"<p>tooltips hello</p><p>tooltips hello</p>\"")]), _vm._v(" "), _c('span', {
	    staticClass: "hljs-attr"
	  }, [_vm._v("placement")]), _vm._v("="), _c('span', {
	    staticClass: "hljs-string"
	  }, [_vm._v("\"down left\"")]), _vm._v(" "), _c('span', {
	    staticClass: "hljs-attr"
	  }, [_vm._v("style")]), _vm._v("="), _c('span', {
	    staticClass: "hljs-string"
	  }, [_vm._v("\"position: absolute;left:40px;top:160px;\"")]), _vm._v(">")]), _c('span', {
	    staticClass: "hljs-tag"
	  }, [_vm._v("<"), _c('span', {
	    staticClass: "hljs-name"
	  }, [_vm._v("sf-button")]), _vm._v(">")]), _vm._v("下左"), _c('span', {
	    staticClass: "hljs-tag"
	  }, [_vm._v("</"), _c('span', {
	    staticClass: "hljs-name"
	  }, [_vm._v("sf-button")]), _vm._v(">")]), _c('span', {
	    staticClass: "hljs-tag"
	  }, [_vm._v("</"), _c('span', {
	    staticClass: "hljs-name"
	  }, [_vm._v("sf-tooltips")]), _vm._v(">")]), _vm._v("\n\t\t"), _c('span', {
	    staticClass: "hljs-tag"
	  }, [_vm._v("<"), _c('span', {
	    staticClass: "hljs-name"
	  }, [_vm._v("sf-tooltips")]), _vm._v(" "), _c('span', {
	    staticClass: "hljs-attr"
	  }, [_vm._v("content")]), _vm._v("="), _c('span', {
	    staticClass: "hljs-string"
	  }, [_vm._v("\"<p>tooltips hello</p><p>tooltips hello</p>\"")]), _vm._v(" "), _c('span', {
	    staticClass: "hljs-attr"
	  }, [_vm._v("placement")]), _vm._v("="), _c('span', {
	    staticClass: "hljs-string"
	  }, [_vm._v("\"down\"")]), _vm._v(" "), _c('span', {
	    staticClass: "hljs-attr"
	  }, [_vm._v("style")]), _vm._v("="), _c('span', {
	    staticClass: "hljs-string"
	  }, [_vm._v("\"position: absolute;left:140px;top:160px;\"")]), _vm._v(">")]), _c('span', {
	    staticClass: "hljs-tag"
	  }, [_vm._v("<"), _c('span', {
	    staticClass: "hljs-name"
	  }, [_vm._v("sf-button")]), _vm._v(">")]), _vm._v("下中"), _c('span', {
	    staticClass: "hljs-tag"
	  }, [_vm._v("</"), _c('span', {
	    staticClass: "hljs-name"
	  }, [_vm._v("sf-button")]), _vm._v(">")]), _c('span', {
	    staticClass: "hljs-tag"
	  }, [_vm._v("</"), _c('span', {
	    staticClass: "hljs-name"
	  }, [_vm._v("sf-tooltips")]), _vm._v(">")]), _vm._v("\n\t\t"), _c('span', {
	    staticClass: "hljs-tag"
	  }, [_vm._v("<"), _c('span', {
	    staticClass: "hljs-name"
	  }, [_vm._v("sf-tooltips")]), _vm._v(" "), _c('span', {
	    staticClass: "hljs-attr"
	  }, [_vm._v("content")]), _vm._v("="), _c('span', {
	    staticClass: "hljs-string"
	  }, [_vm._v("\"<p>tooltips hello</p><p>tooltips hello</p>\"")]), _vm._v(" "), _c('span', {
	    staticClass: "hljs-attr"
	  }, [_vm._v("placement")]), _vm._v("="), _c('span', {
	    staticClass: "hljs-string"
	  }, [_vm._v("\"down right\"")]), _vm._v(" "), _c('span', {
	    staticClass: "hljs-attr"
	  }, [_vm._v("style")]), _vm._v("="), _c('span', {
	    staticClass: "hljs-string"
	  }, [_vm._v("\"position: absolute;left:240px;top:160px;\"")]), _vm._v(">")]), _c('span', {
	    staticClass: "hljs-tag"
	  }, [_vm._v("<"), _c('span', {
	    staticClass: "hljs-name"
	  }, [_vm._v("sf-button")]), _vm._v(">")]), _vm._v("下右"), _c('span', {
	    staticClass: "hljs-tag"
	  }, [_vm._v("</"), _c('span', {
	    staticClass: "hljs-name"
	  }, [_vm._v("sf-button")]), _vm._v(">")]), _c('span', {
	    staticClass: "hljs-tag"
	  }, [_vm._v("</"), _c('span', {
	    staticClass: "hljs-name"
	  }, [_vm._v("sf-tooltips")]), _vm._v(">")]), _vm._v("\n"), _c('span', {
	    staticClass: "hljs-tag"
	  }, [_vm._v("</"), _c('span', {
	    staticClass: "hljs-name"
	  }, [_vm._v("div")]), _vm._v(">")]), _vm._v("\n"), _c('span', {
	    staticClass: "hljs-tag"
	  }, [_vm._v("</"), _c('span', {
	    staticClass: "hljs-name"
	  }, [_vm._v("template")]), _vm._v(">")]), _vm._v("\n\n"), _c('span', {
	    staticClass: "hljs-tag"
	  }, [_vm._v("<"), _c('span', {
	    staticClass: "hljs-name"
	  }, [_vm._v("script")]), _vm._v(">")]), _c('span', {
	    staticClass: "undefined"
	  }, [_vm._v("\n\n")]), _c('span', {
	    staticClass: "hljs-tag"
	  }, [_vm._v("</"), _c('span', {
	    staticClass: "hljs-name"
	  }, [_vm._v("script")]), _vm._v(">")]), _vm._v("\n\n")])])])])])], 1)
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-50f205bb", module.exports)
	  }
	}

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(64)

	var Component = __webpack_require__(10)(
	  /* script */
	  __webpack_require__(66),
	  /* template */
	  __webpack_require__(67),
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)
	Component.options.__file = "/Users/matrix/Documents/Netease/NSFI/7-ui/doc/components/demo-block.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] demo-block.vue: functional components are not supported with templates, they should use render functions.")}

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-351d7e4e", Component.options)
	  } else {
	    hotAPI.reload("data-v-351d7e4e", Component.options)
	  }
	})()}

	module.exports = Component.exports


/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(65);
	if(typeof content === 'string') content = [[module.id, content, '']];
	if(content.locals) module.exports = content.locals;
	// add the styles to the DOM
	var update = __webpack_require__(8)("498cd584", content, false);
	// Hot Module Replacement
	if(false) {
	 // When the styles change, update the <style> tags
	 if(!content.locals) {
	   module.hot.accept("!!./../../../node_modules/.npminstall/css-loader/0.25.0/css-loader/index.js!./../../../node_modules/.npminstall/vue-loader/10.3.0/vue-loader/lib/style-rewriter.js?id=data-v-351d7e4e!./../../../node_modules/.npminstall/sass-loader/4.1.1/sass-loader/index.js!./../../../node_modules/.npminstall/vue-loader/10.3.0/vue-loader/lib/selector.js?type=styles&index=0!./demo-block.vue", function() {
	     var newContent = require("!!./../../../node_modules/.npminstall/css-loader/0.25.0/css-loader/index.js!./../../../node_modules/.npminstall/vue-loader/10.3.0/vue-loader/lib/style-rewriter.js?id=data-v-351d7e4e!./../../../node_modules/.npminstall/sass-loader/4.1.1/sass-loader/index.js!./../../../node_modules/.npminstall/vue-loader/10.3.0/vue-loader/lib/selector.js?type=styles&index=0!./demo-block.vue");
	     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
	     update(newContent);
	   });
	 }
	 // When the module is disposed, remove the <style> tags
	 module.hot.dispose(function() { update(); });
	}

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(5)();
	// imports


	// module
	exports.push([module.id, "\n.demo-block {\n  border: solid 1px #eaeefb;\n  border-radius: 4px;\n  transition: .2s;\n}\n.demo-block.hover {\n    box-shadow: 0 0 8px 0 rgba(232, 237, 250, 0.6), 0 2px 4px 0 rgba(232, 237, 250, 0.5);\n}\n.demo-block code {\n    font-family: Menlo, Monaco, Consolas, Courier, monospace;\n}\n.demo-block .source {\n    padding: 24px;\n}\n.demo-block .meta {\n    background-color: #f9fafc;\n    border-top: solid 1px #eaeefb;\n    clear: both;\n    overflow: hidden;\n    height: 0;\n    transition: height .2s;\n}\n.demo-block .description {\n    padding: 18px 24px;\n    width: 40%;\n    box-sizing: border-box;\n    border-left: solid 1px #eaeefb;\n    float: right;\n    font-size: 14px;\n    line-height: 1.8;\n    color: #5e6d82;\n    word-break: break-word;\n}\n.demo-block .description p {\n      margin: 0;\n}\n.demo-block .description code {\n      color: #5e6d82;\n      background-color: #e6effb;\n      margin: 0 4px;\n      transform: translateY(-2px);\n      display: inline-block;\n      padding: 1px 5px;\n      font-size: 12px;\n      border-radius: 3px;\n}\n.demo-block .highlight {\n    width: 60%;\n    border-right: solid 1px #eaeefb;\n}\n.demo-block .highlight pre {\n      margin: 0;\n}\n.demo-block .highlight code.hljs {\n      margin: 0;\n      border: none;\n      max-height: none;\n      border-radius: 0;\n}\n.demo-block .highlight code.hljs::before {\n        content: none;\n}\n.demo-block .demo-block-control {\n    border-top: solid 1px #eaeefb;\n    height: 36px;\n    box-sizing: border-box;\n    background-color: #fff;\n    border-bottom-left-radius: 4px;\n    border-bottom-right-radius: 4px;\n    text-align: center;\n    margin-top: -1px;\n    color: #d3dce6;\n    cursor: pointer;\n    transition: .2s;\n    position: relative;\n}\n.demo-block .demo-block-control i {\n      font-size: 12px;\n      line-height: 36px;\n      transition: .3s;\n}\n.demo-block .demo-block-control i.hovering {\n        transform: translateX(-40px);\n}\n.demo-block .demo-block-control span {\n      position: absolute;\n      transform: translateX(-30px);\n      font-size: 14px;\n      line-height: 36px;\n      transition: .3s;\n      display: inline-block;\n}\n.demo-block .demo-block-control:hover {\n      color: #20a0ff;\n      background-color: #f9fafc;\n}\n.demo-block .demo-block-control .text-slide-enter,\n    .demo-block .demo-block-control .text-slide-leave-active {\n      opacity: 0;\n      transform: translateX(10px);\n}\n", ""]);

	// exports


/***/ },
/* 66 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	exports.default = {
	  data: function data() {
	    return {
	      hovering: false,
	      isExpanded: false
	    };
	  },


	  computed: {
	    blockClass: function blockClass() {
	      return 'demo-' + this.$router.currentRoute.path.split('/').pop();
	    },
	    iconClass: function iconClass() {
	      return this.isExpanded ? 'sf-icon sf-icon-caret' : 'sf-icon sf-icon-caret';
	    },
	    controlText: function controlText() {
	      return this.isExpanded ? '隐藏代码' : '显示代码';
	    },
	    codeArea: function codeArea() {
	      return this.$el.getElementsByClassName('meta')[0];
	    },
	    codeAreaHeight: function codeAreaHeight() {
	      if (this.$el.getElementsByClassName('description').length > 0) {
	        return Math.max(this.$el.getElementsByClassName('description')[0].clientHeight, this.$el.getElementsByClassName('highlight')[0].clientHeight);
	      }
	      return this.$el.getElementsByClassName('highlight')[0].clientHeight;
	    }
	  },

	  watch: {
	    isExpanded: function isExpanded(val) {
	      this.codeArea.style.height = val ? this.codeAreaHeight + 1 + 'px' : '0';
	    }
	  },

	  mounted: function mounted() {
	    var _this = this;

	    this.$nextTick(function () {
	      var highlight = _this.$el.getElementsByClassName('highlight')[0];
	      if (_this.$el.getElementsByClassName('description').length === 0) {
	        highlight.style.width = '100%';
	        highlight.borderRight = 'none';
	      }
	    });
	  }
	};

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "demo-block",
	    class: [_vm.blockClass, {
	      'hover': _vm.hovering
	    }],
	    on: {
	      "mouseenter": function($event) {
	        _vm.hovering = true
	      },
	      "mouseleave": function($event) {
	        _vm.hovering = false
	      }
	    }
	  }, [_vm._t("default"), _vm._v(" "), _c('div', {
	    staticClass: "demo-block-control",
	    on: {
	      "click": function($event) {
	        _vm.isExpanded = !_vm.isExpanded
	      }
	    }
	  }, [_c('transition', {
	    attrs: {
	      "name": "arrow-slide"
	    }
	  }, [_c('i', {
	    class: [_vm.iconClass, {
	      'hovering': _vm.hovering
	    }]
	  })]), _vm._v(" "), _c('transition', {
	    attrs: {
	      "name": "text-slide"
	    }
	  }, [_c('span', {
	    staticClass: "hoving"
	  }, [_vm._v(_vm._s(_vm.controlText))])])], 1)], 2)
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-351d7e4e", module.exports)
	  }
	}

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(69)

	var Component = __webpack_require__(10)(
	  /* script */
	  null,
	  /* template */
	  __webpack_require__(71),
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)
	Component.options.__file = "/Users/matrix/Documents/Netease/NSFI/7-ui/doc/components/footer.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] footer.vue: functional components are not supported with templates, they should use render functions.")}

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-315acd74", Component.options)
	  } else {
	    hotAPI.reload("data-v-315acd74", Component.options)
	  }
	})()}

	module.exports = Component.exports


/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(70);
	if(typeof content === 'string') content = [[module.id, content, '']];
	if(content.locals) module.exports = content.locals;
	// add the styles to the DOM
	var update = __webpack_require__(8)("f59b8b80", content, false);
	// Hot Module Replacement
	if(false) {
	 // When the styles change, update the <style> tags
	 if(!content.locals) {
	   module.hot.accept("!!./../../../node_modules/.npminstall/css-loader/0.25.0/css-loader/index.js!./../../../node_modules/.npminstall/vue-loader/10.3.0/vue-loader/lib/style-rewriter.js?id=data-v-315acd74!./../../../node_modules/.npminstall/sass-loader/4.1.1/sass-loader/index.js!./../../../node_modules/.npminstall/vue-loader/10.3.0/vue-loader/lib/selector.js?type=styles&index=0!./footer.vue", function() {
	     var newContent = require("!!./../../../node_modules/.npminstall/css-loader/0.25.0/css-loader/index.js!./../../../node_modules/.npminstall/vue-loader/10.3.0/vue-loader/lib/style-rewriter.js?id=data-v-315acd74!./../../../node_modules/.npminstall/sass-loader/4.1.1/sass-loader/index.js!./../../../node_modules/.npminstall/vue-loader/10.3.0/vue-loader/lib/selector.js?type=styles&index=0!./footer.vue");
	     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
	     update(newContent);
	   });
	 }
	 // When the module is disposed, remove the <style> tags
	 module.hot.dispose(function() { update(); });
	}

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(5)();
	// imports


	// module
	exports.push([module.id, "\n.footer {\n  height: 120px;\n  background-color: #324057;\n  color: #a4aebd;\n  width: 100%;\n  z-index: 1000;\n  margin-top: -120px;\n}\n.footer * {\n    word-spacing: 0;\n}\n.footer .container {\n    height: 100%;\n}\n.footer .footer-main {\n    font-size: 0;\n    padding-top: 40px;\n    display: inline-block;\n}\n.footer .footer-main .footer-main-title {\n      line-height: 1;\n      font-size: 22px;\n      margin: 0;\n}\n.footer .footer-main .footer-main-link {\n      display: inline-block;\n      margin: 12px 18px 0 0;\n      line-height: 1;\n      font-size: 12px;\n      color: #768193;\n}\n.footer .footer-main .footer-main-link a {\n        color: #768193;\n        text-decoration: none;\n}\n.footer .footer-social {\n    float: right;\n    line-height: 120px;\n}\n.footer .footer-social .elementdoc {\n      transition: .3s;\n      display: inline-block;\n      line-height: 32px;\n      text-align: center;\n      color: #8D99AB;\n      background-color: transparent;\n      size: 32px;\n      font-size: 32px;\n      vertical-align: middle;\n}\n.footer .footer-social .elementdoc:hover {\n        transform: scale(1.2);\n}\n.footer .footer-social .doc-icon-weixin {\n      margin-right: 36px;\n}\n.footer .footer-social .doc-icon-weixin:hover {\n        color: #fff;\n}\n.footer .footer-social .doc-icon-github {\n      margin-right: 0;\n}\n.footer .footer-social .doc-icon-github:hover {\n        color: #fff;\n}\n.footer-popover {\n  padding: 0;\n  min-width: 120px;\n  line-height: normal;\n  box-shadow: 0 0 11px 0 rgba(174, 187, 211, 0.24);\n}\n.footer-popover .footer-popover-title {\n    border-bottom: solid 1px #eaeefb;\n    height: 30px;\n    line-height: 30px;\n    text-align: center;\n    color: #99a9bf;\n    background-color: #f8f9fe;\n}\n.footer-popover img {\n    size: 100px;\n    margin: 10px;\n}\n", ""]);

	// exports


/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _vm._m(0)
	},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('footer', {
	    staticClass: "footer"
	  }, [_c('div', {
	    staticClass: "container"
	  }, [_c('div', {
	    staticClass: "footer-main"
	  }, [_c('p', {
	    staticClass: "footer-main-title"
	  }, [_vm._v("SailFish UI Library")])]), _vm._v(" "), _c('div', {
	    staticClass: "footer-social"
	  }, [_c('a', {
	    attrs: {
	      "href": "https://github.com/dkypooh/7-ui",
	      "target": "_blank"
	    }
	  }, [_c('i', {
	    staticClass: "sf-icon sf-icon-github elementdoc"
	  })])])])])
	}]}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-315acd74", module.exports)
	  }
	}

/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(73)

	var Component = __webpack_require__(10)(
	  /* script */
	  __webpack_require__(75),
	  /* template */
	  __webpack_require__(76),
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)
	Component.options.__file = "/Users/matrix/Documents/Netease/NSFI/7-ui/doc/components/header.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] header.vue: functional components are not supported with templates, they should use render functions.")}

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-0884fd38", Component.options)
	  } else {
	    hotAPI.reload("data-v-0884fd38", Component.options)
	  }
	})()}

	module.exports = Component.exports


/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(74);
	if(typeof content === 'string') content = [[module.id, content, '']];
	if(content.locals) module.exports = content.locals;
	// add the styles to the DOM
	var update = __webpack_require__(8)("7a6afd4d", content, false);
	// Hot Module Replacement
	if(false) {
	 // When the styles change, update the <style> tags
	 if(!content.locals) {
	   module.hot.accept("!!./../../../node_modules/.npminstall/css-loader/0.25.0/css-loader/index.js!./../../../node_modules/.npminstall/vue-loader/10.3.0/vue-loader/lib/style-rewriter.js?id=data-v-0884fd38!./../../../node_modules/.npminstall/sass-loader/4.1.1/sass-loader/index.js!./../../../node_modules/.npminstall/vue-loader/10.3.0/vue-loader/lib/selector.js?type=styles&index=0!./header.vue", function() {
	     var newContent = require("!!./../../../node_modules/.npminstall/css-loader/0.25.0/css-loader/index.js!./../../../node_modules/.npminstall/vue-loader/10.3.0/vue-loader/lib/style-rewriter.js?id=data-v-0884fd38!./../../../node_modules/.npminstall/sass-loader/4.1.1/sass-loader/index.js!./../../../node_modules/.npminstall/vue-loader/10.3.0/vue-loader/lib/selector.js?type=styles&index=0!./header.vue");
	     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
	     update(newContent);
	   });
	 }
	 // When the module is disposed, remove the <style> tags
	 module.hot.dispose(function() { update(); });
	}

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(5)();
	// imports


	// module
	exports.push([module.id, "\n.headerWrapper {\n  height: 80px;\n}\n.header {\n  height: 80px;\n  background-color: #20a0ff;\n  color: #fff;\n  top: 0;\n  left: 0;\n  width: 100%;\n  z-index: 100;\n  position: relative;\n}\n.header .container {\n    height: 100%;\n}\n.header h1 {\n    margin: 0;\n    float: left;\n    font-size: 32px;\n    font-weight: normal;\n}\n.header h1 a {\n      color: #fff;\n      text-decoration: none;\n      display: block;\n      height: 80px;\n      line-height: 80px;\n}\n.header h1 span {\n      font-size: 12px;\n      display: inline-block;\n      width: 34px;\n      height: 18px;\n      border: 1px solid rgba(255, 255, 255, 0.5);\n      text-align: center;\n      line-height: 18px;\n      vertical-align: middle;\n      margin-left: 10px;\n      border-radius: 3px;\n}\n.header .nav {\n    float: right;\n    height: 100%;\n    line-height: 80px;\n    background: transparent;\n    padding: 0;\n    margin: 0;\n}\n.header .nav-item {\n    margin: 0;\n    float: left;\n    list-style: none;\n    position: relative;\n    cursor: pointer;\n    margin-left: 20px;\n}\n.header .nav-item a {\n      text-decoration: none;\n      color: #fff;\n      display: block;\n      padding: 0 20px;\n      opacity: .8;\n}\n.header .nav-item a.active, .header .nav-item a:hover {\n        opacity: 1;\n}\n.header .nav-item a.active::before {\n        content: '';\n        display: block;\n        position: absolute;\n        bottom: 0;\n        left: 0;\n        width: 100%;\n        height: 4px;\n        background: #99d2fc;\n}\n.header-fixed {\n  position: fixed;\n  top: -80px;\n  box-shadow: 0 2px 6px 0 rgba(50, 63, 87, 0.25);\n}\n.header-hangUp {\n  top: 0;\n}\n.header-home {\n  position: fixed;\n  top: 0;\n  background-color: rgba(32, 160, 255, 0);\n}\n", ""]);

	// exports


/***/ },
/* 75 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	exports.default = {
	  data: function data() {
	    return {
	      active: '',
	      isFixed: false,
	      isHome: false,
	      headerStyle: {},
	      hangUp: false
	    };
	  },

	  watch: {
	    '$route.path': function $routePath(val) {
	      this.isHome = val === '/';
	      this.headerStyle.backgroundColor = 'rgba(32, 160, 255, ' + (this.isHome ? '0' : '1') + ')';
	    }
	  },
	  mounted: function mounted() {
	    var _this = this;

	    this.isHome = this.$route.path === '/';
	    function scroll(fn) {
	      var beforeScrollTop = document.body.scrollTop;

	      window.addEventListener('scroll', function () {
	        var afterScrollTop = document.body.scrollTop;
	        var delta = afterScrollTop - beforeScrollTop;

	        if (delta === 0) return false;

	        fn(delta > 0 ? 'down' : 'up');
	        beforeScrollTop = afterScrollTop;
	      }, false);
	    }
	    scroll(function (direction) {
	      if (_this.isHome) {
	        _this.hangUp = false;
	        _this.isFixed = false;
	        _this.headerStyle.transition = '';
	        var threshold = 200;
	        var alpha = Math.min(document.body.scrollTop, threshold) / threshold;
	        _this.$refs.header.style.backgroundColor = 'rgba(32, 160, 255, ' + alpha + ')';
	        return;
	      }
	      _this.headerStyle.backgroundColor = 'rgba(32, 160, 255, 1)';
	      var bounding = _this.$el.getBoundingClientRect();
	      if (bounding.bottom < 0) {
	        _this.isFixed = true;
	        _this.$nextTick(function () {
	          _this.headerStyle.transition = 'all .5s ease';
	        });
	      }
	      if (bounding.top === 0) {
	        _this.isFixed = false;
	        _this.$nextTick(function () {
	          _this.headerStyle.transition = '';
	        });
	      }
	      _this.hangUp = direction === 'up';
	    });
	  }
	};

/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "headerWrapper"
	  }, [_c('header', {
	    ref: "header",
	    staticClass: "header",
	    class: {
	      'header-fixed': _vm.isFixed,
	      'header-hangUp': _vm.hangUp
	    },
	    style: (_vm.headerStyle)
	  }, [_vm._m(0)])])
	},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "container"
	  }, [_c('h1', [_c('a', {
	    attrs: {
	      "href": "https://github.com/dkypooh/7-ui",
	      "target": "_blank"
	    }
	  }, [_vm._v("SailFish"), _c('span', [_vm._v("Beta")])])]), _vm._v(" "), _vm._v("e\n        ")])
	}]}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-0884fd38", module.exports)
	  }
	}

/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(78)

	var Component = __webpack_require__(10)(
	  /* script */
	  __webpack_require__(80),
	  /* template */
	  __webpack_require__(81),
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)
	Component.options.__file = "/Users/matrix/Documents/Netease/NSFI/7-ui/doc/components/side-nav.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] side-nav.vue: functional components are not supported with templates, they should use render functions.")}

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-42c6acd0", Component.options)
	  } else {
	    hotAPI.reload("data-v-42c6acd0", Component.options)
	  }
	})()}

	module.exports = Component.exports


/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(79);
	if(typeof content === 'string') content = [[module.id, content, '']];
	if(content.locals) module.exports = content.locals;
	// add the styles to the DOM
	var update = __webpack_require__(8)("475023b6", content, false);
	// Hot Module Replacement
	if(false) {
	 // When the styles change, update the <style> tags
	 if(!content.locals) {
	   module.hot.accept("!!./../../../node_modules/.npminstall/css-loader/0.25.0/css-loader/index.js!./../../../node_modules/.npminstall/vue-loader/10.3.0/vue-loader/lib/style-rewriter.js?id=data-v-42c6acd0!./../../../node_modules/.npminstall/sass-loader/4.1.1/sass-loader/index.js!./../../../node_modules/.npminstall/vue-loader/10.3.0/vue-loader/lib/selector.js?type=styles&index=0!./side-nav.vue", function() {
	     var newContent = require("!!./../../../node_modules/.npminstall/css-loader/0.25.0/css-loader/index.js!./../../../node_modules/.npminstall/vue-loader/10.3.0/vue-loader/lib/style-rewriter.js?id=data-v-42c6acd0!./../../../node_modules/.npminstall/sass-loader/4.1.1/sass-loader/index.js!./../../../node_modules/.npminstall/vue-loader/10.3.0/vue-loader/lib/selector.js?type=styles&index=0!./side-nav.vue");
	     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
	     update(newContent);
	   });
	 }
	 // When the module is disposed, remove the <style> tags
	 module.hot.dispose(function() { update(); });
	}

/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(5)();
	// imports


	// module
	exports.push([module.id, "\n.side-nav {\n  width: 100%;\n  box-sizing: border-box;\n  padding-right: 30px;\n}\n.side-nav li {\n    list-style: none;\n}\n.side-nav ul {\n    padding: 0;\n    margin: 0;\n    overflow: hidden;\n}\n.side-nav .nav-item a {\n    font-size: 16px;\n    color: #5e6d82;\n    line-height: 40px;\n    height: 40px;\n    margin: 0;\n    padding: 0;\n    text-decoration: none;\n    display: block;\n    position: relative;\n    transition: all .3s;\n}\n.side-nav .nav-item a.active {\n      color: #20a0ff;\n}\n.side-nav .nav-item .nav-item a {\n    display: block;\n    height: 40px;\n    line-height: 40px;\n    font-size: 13px;\n    padding-left: 24px;\n}\n.side-nav .nav-item .nav-item a:hover {\n      color: #20a0ff;\n}\n.side-nav .nav-group__title {\n    font-size: 12px;\n    color: #99a9bf;\n    padding-left: 8px;\n    line-height: 26px;\n    margin-top: 10px;\n}\n", ""]);

	// exports


/***/ },
/* 80 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	exports.default = {
	  props: {
	    data: Array,
	    base: {
	      type: String,
	      default: ''
	    }
	  },
	  data: function data() {
	    return {
	      highlights: [],
	      navState: []
	    };
	  }
	};

/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "side-nav"
	  }, [_c('ul', _vm._l((_vm.data), function(item) {
	    return _c('li', {
	      staticClass: "nav-item"
	    }, [(!item.path) ? _c('a', [_vm._v(_vm._s(item.name))]) : _c('router-link', {
	      attrs: {
	        "active-class": "active",
	        "to": _vm.base + item.path,
	        "exact": ""
	      },
	      domProps: {
	        "textContent": _vm._s(item.title || item.name)
	      }
	    }), _vm._v(" "), (item.children) ? _c('ul', {
	      staticClass: "pure-menu-list sub-nav"
	    }, _vm._l((item.children), function(navItem) {
	      return _c('li', {
	        staticClass: "nav-item"
	      }, [_c('router-link', {
	        attrs: {
	          "active-class": "active",
	          "to": _vm.base + navItem.path,
	          "exact": ""
	        },
	        domProps: {
	          "textContent": _vm._s(navItem.title || navItem.name)
	        }
	      })], 1)
	    })) : _vm._e(), _vm._v(" "), (item.groups) ? _vm._l((item.groups), function(group) {
	      return _c('div', {
	        staticClass: "nav-group"
	      }, [_c('div', {
	        staticClass: "nav-group__title"
	      }, [_vm._v(_vm._s(group.groupName))]), _vm._v(" "), _c('ul', {
	        staticClass: "pure-menu-list"
	      }, _vm._l((group.list), function(navItem) {
	        return (!navItem.disabled) ? _c('li', {
	          staticClass: "nav-item"
	        }, [_c('router-link', {
	          attrs: {
	            "active-class": "active",
	            "to": _vm.base + navItem.path,
	            "exact": ""
	          },
	          domProps: {
	            "textContent": _vm._s(navItem.title)
	          }
	        })], 1) : _vm._e()
	      }))])
	    }) : _vm._e()], 2)
	  }))])
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-42c6acd0", module.exports)
	  }
	}

/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(83)

	var Component = __webpack_require__(10)(
	  /* script */
	  __webpack_require__(85),
	  /* template */
	  __webpack_require__(86),
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)
	Component.options.__file = "/Users/matrix/Documents/Netease/NSFI/7-ui/doc/components/footer-nav.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] footer-nav.vue: functional components are not supported with templates, they should use render functions.")}

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-2e0ad51c", Component.options)
	  } else {
	    hotAPI.reload("data-v-2e0ad51c", Component.options)
	  }
	})()}

	module.exports = Component.exports


/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(84);
	if(typeof content === 'string') content = [[module.id, content, '']];
	if(content.locals) module.exports = content.locals;
	// add the styles to the DOM
	var update = __webpack_require__(8)("ab584fee", content, false);
	// Hot Module Replacement
	if(false) {
	 // When the styles change, update the <style> tags
	 if(!content.locals) {
	   module.hot.accept("!!./../../../node_modules/.npminstall/css-loader/0.25.0/css-loader/index.js!./../../../node_modules/.npminstall/vue-loader/10.3.0/vue-loader/lib/style-rewriter.js?id=data-v-2e0ad51c!./../../../node_modules/.npminstall/sass-loader/4.1.1/sass-loader/index.js!./../../../node_modules/.npminstall/vue-loader/10.3.0/vue-loader/lib/selector.js?type=styles&index=0!./footer-nav.vue", function() {
	     var newContent = require("!!./../../../node_modules/.npminstall/css-loader/0.25.0/css-loader/index.js!./../../../node_modules/.npminstall/vue-loader/10.3.0/vue-loader/lib/style-rewriter.js?id=data-v-2e0ad51c!./../../../node_modules/.npminstall/sass-loader/4.1.1/sass-loader/index.js!./../../../node_modules/.npminstall/vue-loader/10.3.0/vue-loader/lib/selector.js?type=styles&index=0!./footer-nav.vue");
	     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
	     update(newContent);
	   });
	 }
	 // When the module is disposed, remove the <style> tags
	 module.hot.dispose(function() { update(); });
	}

/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(5)();
	// imports


	// module
	exports.push([module.id, "\n.footer-nav {\n  padding: 24px 0;\n  color: #99a9bf;\n  font-size: 14px;\n}\n.footer-nav::after {\n    content: '';\n    display: block;\n    clear: both;\n}\n.footer-nav i {\n    transition: .3s;\n    color: #d9def1;\n    vertical-align: baseline;\n}\n.footer-nav-link {\n  cursor: pointer;\n  transition: .3s;\n}\n.footer-nav-link:hover {\n    color: #20a0ff;\n}\n.footer-nav-link:hover i {\n      color: #20a0ff;\n}\n.footer-nav-left {\n  float: left;\n  margin-left: -4px;\n}\n.footer-nav-right {\n  float: right;\n  margin-right: -4px;\n}\n", ""]);

	// exports


/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _navConfig = __webpack_require__(15);

	var _navConfig2 = _interopRequireDefault(_navConfig);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  data: function data() {
	    return {
	      currentComponent: null,
	      nav: [],
	      currentIndex: -1,
	      leftNav: null,
	      rightNav: null
	    };
	  },


	  watch: {
	    '$route.path': function $routePath() {
	      // this.updateNav();
	    }
	  },

	  methods: {
	    //      updateNav() {
	    //        this.currentComponent = '/' + this.$route.path.split('/')[2];
	    //        for (let i = 0, len = this.nav.length; i < len; i++) {
	    //          if (this.nav[i].path === this.currentComponent) {
	    //            this.currentIndex = i;
	    //            break;
	    //          }
	    //        }
	    //        this.leftNav = this.nav[this.currentIndex - 1];
	    //        this.rightNav = this.nav[this.currentIndex + 1];
	    //      },

	    handleNavClick: function handleNavClick(direction) {
	      this.$router.push('/component' + (direction === 'prev' ? this.leftNav.path : this.rightNav.path));
	    }
	  },

	  created: function created() {
	    this.nav = _navConfig2.default[0].children.concat(_navConfig2.default[1]);
	    //      navConfig[2].groups.map(group => group.list).forEach(list => {
	    //        this.nav = this.nav.concat(list);
	    //      });
	    //      this.updateNav();
	  }
	}; //
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "footer-nav"
	  }, [(_vm.leftNav) ? _c('span', {
	    staticClass: "footer-nav-link footer-nav-left",
	    on: {
	      "click": function($event) {
	        _vm.handleNavClick('prev')
	      }
	    }
	  }, [_c('i', {
	    staticClass: "el-icon-arrow-left"
	  }), _vm._v("\n    " + _vm._s(_vm.leftNav.title || _vm.leftNav.name) + "\n  ")]) : _vm._e(), _vm._v(" "), (_vm.rightNav) ? _c('span', {
	    staticClass: "footer-nav-link footer-nav-right",
	    on: {
	      "click": function($event) {
	        _vm.handleNavClick('next')
	      }
	    }
	  }, [_vm._v("\n    " + _vm._s(_vm.rightNav.title || _vm.rightNav.name) + "\n    "), _c('i', {
	    staticClass: "el-icon-arrow-right"
	  })]) : _vm._e()])
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-2e0ad51c", module.exports)
	  }
	}

/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _vue = __webpack_require__(1);

	var _vue2 = _interopRequireDefault(_vue);

	var _sfButton = __webpack_require__(88);

	var _sfButton2 = _interopRequireDefault(_sfButton);

	var _tableColumn = __webpack_require__(90);

	var _tableColumn2 = _interopRequireDefault(_tableColumn);

	var _table = __webpack_require__(91);

	var _table2 = _interopRequireDefault(_table);

	var _clipLoader = __webpack_require__(99);

	var _clipLoader2 = _interopRequireDefault(_clipLoader);

	var _scaleLoader = __webpack_require__(102);

	var _scaleLoader2 = _interopRequireDefault(_scaleLoader);

	var _riseLoader = __webpack_require__(104);

	var _riseLoader2 = _interopRequireDefault(_riseLoader);

	var _squareLoader = __webpack_require__(106);

	var _squareLoader2 = _interopRequireDefault(_squareLoader);

	var _toast = __webpack_require__(108);

	var _toast2 = _interopRequireDefault(_toast);

	var _progressbar = __webpack_require__(110);

	var _progressbar2 = _interopRequireDefault(_progressbar);

	var _sfTooltips = __webpack_require__(112);

	var _sfTooltips2 = _interopRequireDefault(_sfTooltips);

	var _pagination = __webpack_require__(114);

	var _pagination2 = _interopRequireDefault(_pagination);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	_vue2.default.component('sf-button', _sfButton2.default);

	_vue2.default.component('sf-table-column', _tableColumn2.default);

	_vue2.default.component('sf-table', _table2.default);

	_vue2.default.component('sf-cliploader', _clipLoader2.default);

	_vue2.default.component('sf-scaleloader', _scaleLoader2.default);

	_vue2.default.component('sf-riseloader', _riseLoader2.default);

	_vue2.default.component('sf-squareloader', _squareLoader2.default);

	_vue2.default.component('sf-toast', _toast2.default);

	_vue2.default.component('sf-progressbar', _progressbar2.default);

	_vue2.default.component('sf-tooltips', _sfTooltips2.default);

	_vue2.default.component('sf-pagination', _pagination2.default);

	if (window != undefined) {
			window.sfToast = _toast2.default;
	}

/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	/**
	 * button 按钮元素基类
	 *
	 * @author:   波比(｡･∀･)ﾉﾞ
	 * @date:     2016-09-29  下午9:05
	 *
	 * @props {String} color			- 背景颜色 2. primary, 3. warning, 4. sucess, 5. danger
	 * @props {String} size				- 按钮大小 1. normal, 2. small, 3.large
	 * @props {Boolean} outline			- 是否有外边框
	 * @props {Boolean} block			- 是否是块级元素
	 * @props {Boolean} disabled		- 是否不可用
	 *
	 */

	module.exports = {
		name: 'sf-button',
		template: __webpack_require__(89),
		props: {
			color: {
				type: String,
				default: ''
			},
			size: {
				type: String,
				default: 'normal'
			},
			block: Boolean,
			disabled: Boolean,
			icon: String,
			plain: Boolean
		}
	};

/***/ },
/* 89 */
/***/ function(module, exports) {

	module.exports = "<transition name=\"fade\">\n<a\n   :class=\"[\n        'u-button',\n        'u-button--'+size,\n        'u-button--'+color,\n        {'is-disabled': disabled},\n        {'is-plain' : plain}\n    ]\"\n   :style=\"{display: block ? 'block' : 'inline-block' }\" >\n\t<slot></slot>\n</a>\n</transition>\n";

/***/ },
/* 90 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	/**
	 * table-column
	 *
	 *
	 * @author:   波比(｡･∀･)ﾉﾞ
	 * @date:     2017-01-12  下午4:13
	 */

	var columnIdSeed = 0;
	var defaults = {
		default: {
			order: ''
		},
		selection: {
			width: 48,
			minWidth: 48,
			realWidth: 48,
			order: '',
			className: 'sf-table__column--selection'
		},
		index: {
			width: 48,
			minWidth: 48,
			realWidth: 48,
			order: ''
		}
	};

	var forced = {
		selection: {
			headerTemplate: function headerTemplate(h, store) {
				return h(
					'input',
					{
						attrs: { type: 'checkbox' },
						on: {
							'click': this.toggleAllSelection
						}
					},
					[]
				);
			},
			template: function template(h, _ref, self) {
				var row = _ref.row,
				    column = _ref.column,
				    store = _ref.store,
				    $index = _ref.$index;

				return h(
					'input',
					{
						attrs: { type: 'checkbox',
							checked: self.isSelected(row)
						},
						on: {
							'click': function click() {
								store.commit('rowSelectedChanged', row);
							}
						}
					},
					[]
				);
			},
			sortable: false,
			resizable: false
		},
		index: {
			// headerTemplate: function(h) { return <div>#</div>; },
			headerTemplate: function headerTemplate(h, label) {
				return label || '#';
			},
			template: function template(h, _ref2) {
				var $index = _ref2.$index;

				return h(
					'div',
					null,
					[$index + 1]
				);
			},
			sortable: false
		}
	};

	/**
	 * 默认列设置
	 *
	 * @param type
	 * @param options
	 * @returns {{}}
	 */
	var getDefaultColumn = function getDefaultColumn(type, options) {
		var column = {};

		Object.assign(column, defaults[type || 'default']);

		for (var name in options) {
			if (options.hasOwnProperty(name)) {
				var value = options[name];
				if (typeof value !== 'undefined') {
					column[name] = value;
				}
			}
		}

		if (!column.minWidth) {
			column.minWidth = 80;
		}

		column.realWidth = column.width || column.minWidth;

		return column;
	};

	exports.default = {
		name: 'sf-table-column',

		props: {
			type: {
				type: String,
				default: 'default'
			},
			label: String,
			property: String,
			prop: String,
			width: {},
			minWidth: {},
			template: String,
			sortable: {
				type: [Boolean, String],
				default: false
			},
			sortMethod: Function,
			formatter: Function
		},

		render: function render() {},
		data: function data() {
			return {
				isChildColumn: false,
				columns: []
			};
		},
		beforeCreate: function beforeCreate() {
			this.row = {};
			this.column = {};
			this.$index = 0;
		},


		components: {},

		computed: {
			owner: function owner() {
				var parent = this.$parent;
				while (parent && !parent.tableId) {
					parent = parent.$parent;
				}
				return parent;
			}
		},

		created: function created() {
			this.customRender = this.$options.render;
			this.$options.render = function (h) {
				return h('div');
			};

			var columnId = this.columnId = 'column_' + columnIdSeed++;

			var parent = this.$parent;
			var owner = this.owner;

			var type = this.type;

			var width = this.width;
			if (width !== undefined) {
				width = parseInt(width, 10);
				if (isNaN(width)) {
					width = null;
				}
			}

			var minWidth = this.minWidth;
			if (minWidth !== undefined) {
				minWidth = parseInt(minWidth, 10);
				if (isNaN(minWidth)) {
					minWidth = 80;
				}
			}

			var template = void 0;

			var property = this.prop || this.property;

			template = function template(h, _ref3, parent) {
				var row = _ref3.row;

				return h(
					'span',
					null,
					[parent.getCellContent(row, property, columnId)]
				);
			};

			var column = getDefaultColumn(type, {
				id: columnId,
				label: this.label,
				property: property,
				type: type,
				template: template,
				minWidth: minWidth,
				width: width,
				align: this.align ? 'is-' + this.align : null,
				sortable: this.sortable === '' ? true : this.sortable,
				sortMethod: this.sortMethod,
				formatter: this.formatter
			});

			Object.assign(column, forced[type] || {});

			var renderColumn = column.template;
			var _self = this;

			column.template = function (h, data) {
				if (_self.$scopedSlots.default) {
					renderColumn = function renderColumn() {
						return _self.$scopedSlots.default(data);
					};
				}

				return h(
					'div',
					{
						'class': 'cell' },
					[renderColumn(h, data, this._renderProxy)]
				);
			};

			this.columnConfig = column;
		},


		watch: {},

		mounted: function mounted() {
			var owner = this.owner;
			var parent = this.$parent;
			var columnIndex = void 0;
			if (!this.isChildColumn) {
				columnIndex = [].indexOf.call(parent.$refs.hiddenColumns.children, this.$el);
			} else {
				columnIndex = [].indexOf.call(parent.$el.children, this.$el);
			}

			parent.store.commit('insertColumn', this.columnConfig, columnIndex);
		}
	};

/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	var Component = __webpack_require__(10)(
	  /* script */
	  __webpack_require__(92),
	  /* template */
	  __webpack_require__(98),
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)
	Component.options.__file = "/Users/matrix/Documents/Netease/NSFI/7-ui/node_modules/.npminstall/sf-table/0.0.8/sf-table/src/table.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] table.vue: functional components are not supported with templates, they should use render functions.")}

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-2faf1ac7", Component.options)
	  } else {
	    hotAPI.reload("data-v-2faf1ac7", Component.options)
	  }
	})()}

	module.exports = Component.exports


/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _tableStore = __webpack_require__(93);

	var _tableStore2 = _interopRequireDefault(_tableStore);

	var _tableLayout = __webpack_require__(95);

	var _tableLayout2 = _interopRequireDefault(_tableLayout);

	var _tableBody = __webpack_require__(96);

	var _tableBody2 = _interopRequireDefault(_tableBody);

	var _tableHeader = __webpack_require__(97);

	var _tableHeader2 = _interopRequireDefault(_tableHeader);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	exports.default = {
	    name: 'sf-table',

	    props: {
	        data: {
	            type: Array,
	            default: function _default() {
	                return [];
	            }
	        },

	        width: [String, Number],
	        height: [String, Number],
	        maxHeight: [String, Number],
	        clazz: [String, Number],
	        headerHeight: [String, Number],
	        stripe: Boolean,
	        border: Boolean,
	        emptyText: {
	            type: String
	        }
	    },

	    components: {
	        TableHeader: _tableHeader2.default,
	        TableBody: _tableBody2.default
	    },

	    methods: {
	        doLayout: function doLayout() {
	            var _this = this;

	            this.store.updateColumns();

	            this.$nextTick(function () {
	                if (_this.height || _this.maxHeight || _this.headerHeight) {
	                    _this.layout.setHeight(_this.height, _this.maxHeight, _this.headerHeight);
	                }
	            });
	        }
	    },

	    watch: {
	        data: {
	            immediate: true,
	            handler: function handler(val) {
	                this.store.commit('setData', val);
	            }
	        }
	    },

	    mounted: function mounted() {
	        this.doLayout();
	    },
	    data: function data() {

	        // store 用户实体组件实体之间通信
	        var store = new _tableStore2.default(this, {
	            rowKey: this.rowKey
	        });

	        // 布局实体
	        var layout = new _tableLayout2.default({
	            store: store,
	            table: this
	        });

	        window.layout = layout;
	        return {
	            store: store,
	            layout: layout
	        };
	    }
	};

/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _util = __webpack_require__(94);

	/**
	 * 排序数据
	 * @param data
	 * @param states
	 * @returns {*}
	 */
	var sortData = function sortData(data, states) {
		var sortingColumn = states.sortingColumn;
		if (!sortingColumn || typeof sortingColumn.sortable === 'string') {
			return data;
		}
		return (0, _util.orderBy)(data, states.sortProp, states.sortOrder, sortingColumn.sortMethod);
	};

	/**
	 * 切换行选择
	 *
	 * @param states
	 * @param row
	 * @param selected
	 * @returns {boolean}
	 */
	var toggleRowSelection = function toggleRowSelection(row) {
		row.selection = row.selection ? false : true;

		return true;
	};

	/**
	 * 表单存储对象
	 *
	 * @param table
	 * @param initialState
	 * @constructor
	 */
	var TableStore = function TableStore(table) {
		var initialState = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

		if (!table) {
			throw new Error('Table is required.');
		}
		this.table = table;

		this.states = {
			rowKey: null, // 行Key
			_columns: [], // 列数代理
			columns: [], // 列数
			_data: null, // 数据代理
			data: null, // 数据
			sortingColumn: null, // 排序列
			sortProp: null, // 排序属性
			sortOrder: null, // 排序方式
			isAllSelected: false, // 是否所有选中(checkbox)
			selection: [], // 选中项
			filters: {}
		};

		for (var prop in initialState) {
			if (initialState.hasOwnProperty(prop) && this.states.hasOwnProperty(prop)) {
				this.states[prop] = initialState[prop];
			}
		}
	};

	/**
	 *	事件分发集合
	 *
	 * @type {{
	 * 			setData: (function(*=, *=)),
	 * 			insertColumn: (function(*, *=, *=)),
	 * 			changeSortCondition: (function(*=)),
	 * 			rowSelectedChanged: (function(*=, *=)),
	 * 			toggleAllSelection: (function())
	 * 		}}
	 */
	TableStore.prototype.mutations = {
		/**
	  * 设置数据
	  * @param states
	  * @param data
	  */
		setData: function setData(states, data) {
			states._data = data;
			states.data = sortData(data || [], states);
		},

		/**
	  * 插入列表
	  * @param states
	  * @param column
	  * @param index
	  */
		insertColumn: function insertColumn(states, column, index) {
			var _columns = states._columns;
			if (typeof index !== 'undefined') {
				_columns.splice(index, 0, column);
			} else {
				_columns.push(column);
			}
			if (column.type === 'selection') {
				states.selectable = column.selectable;
				states.reserveSelection = column.reserveSelection;
			}
		},

		/**
	  * 改变适合
	  * @param states
	  */
		changeSortCondition: function changeSortCondition(states) {
			states.data = sortData(states.filteredData || states._data || [], states);

			this.table.$emit('sort-change', {
				column: this.states.sortingColumn,
				prop: this.states.sortProp,
				order: this.states.sortOrder
			});
		},
		rowSelectedChanged: function rowSelectedChanged(states, row) {
			var changed = toggleRowSelection(row);

			if (changed) {
				this.table.$emit('selection-row', row);
			}

			this.updateAllSelected(states);
		},
		toggleAllSelection: function toggleAllSelection() {}
	};

	/**
	 * 更新列
	 *
	 */
	TableStore.prototype.updateColumns = function () {
		var states = this.states;
		var _columns = states._columns;

		states.columns = [].concat(_columns);
	};

	/**
	 * 更新所有选中
	 *
	 * @param states
	 */
	TableStore.prototype.updateAllSelected = function (states) {
		var list = states.data;
		var len = 0;

		list.forEach(function (item) {
			if (item.selection) {
				len++;
			}
		});

		if (list.length === len) {
			states.isAllSelected = true;
		} else {
			states.isAllSelected = false;
		}
	};

	/**
	 * 分发事件
	 *
	 * @param name
	 * @param args
	 */
	TableStore.prototype.commit = function (name) {
		var mutations = this.mutations;
		if (mutations[name]) {
			for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
				args[_key - 1] = arguments[_key];
			}

			mutations[name].apply(this, [this.states].concat(args));
		}
	};

	exports.default = TableStore;

/***/ },
/* 94 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	/**
	 * 获取单位元素
	 *
	 * @param event
	 * @returns {*}
	 */
	var getCell = exports.getCell = function getCell(event) {
		var cell = event.target;

		while (cell && cell.tagName.toUpperCase() !== 'HTML') {
			if (cell.tagName.toUpperCase() === 'TD') {
				return cell;
			}
			cell = cell.parentNode;
		}

		return null;
	};

	/**
	 * 通过属性路径获取值
	 *
	 * @param object
	 * @param prop
	 * @returns {*}
	 */
	var getValueByPath = exports.getValueByPath = function getValueByPath(object, prop) {
		prop = prop || '';
		var paths = prop.split('.');
		var current = object;
		var result = null;
		for (var i = 0, j = paths.length; i < j; i++) {
			var path = paths[i];
			if (!current) break;

			if (i === j - 1) {
				result = current[path];
				break;
			}
			current = current[path];
		}
		return result;
	};

	/**
	 * 判断是否是对象
	 *
	 * @param obj
	 * @returns {boolean}
	 */
	var isObject = function isObject(obj) {
		return obj !== null && (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === 'object';
	};

	/**
	 * 顺序排序
	 *
	 * @param array
	 * @param sortKey
	 * @param reverse
	 * @param sortMethod
	 * @returns {*}
	 */
	var orderBy = exports.orderBy = function orderBy(array, sortKey, reverse, sortMethod) {
		if (typeof reverse === 'string') {
			reverse = reverse === 'descending' ? -1 : 1;
		}
		if (!sortKey) {
			return array;
		}
		var order = reverse && reverse < 0 ? -1 : 1;

		// sort on a copy to avoid mutating original array
		return array.slice().sort(sortMethod ? function (a, b) {
			return sortMethod(a, b) ? order : -order;
		} : function (a, b) {
			if (sortKey !== '$key') {
				if (isObject(a) && '$value' in a) a = a.$value;
				if (isObject(b) && '$value' in b) b = b.$value;
			}
			a = isObject(a) ? getValueByPath(a, sortKey) : a;
			b = isObject(b) ? getValueByPath(b, sortKey) : b;
			return a === b ? 0 : a > b ? order : -order;
		});
	};

	/**
	 * 通过列Id获取列元素
	 *
	 * @param table
	 * @param columnId
	 * @returns {*}
	 */
	var getColumnById = exports.getColumnById = function getColumnById(table, columnId) {
		var column = null;
		var columns = table.store.states._columns;

		columns.forEach(function (item) {
			if (item.id === columnId) {
				column = item;
			}
		});
		return column;
	};

	/**
	 * 通过元素获取列
	 *
	 * @param table
	 * @param cell
	 * @returns {*}
	 */
	var getColumnByCell = exports.getColumnByCell = function getColumnByCell(table, cell) {
		if (cell.className) {
			return getColumnById(table, cell.className);
		}
		return null;
	};

/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * table-layout 用于外层布局
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @author:   波比(｡･∀･)ﾉﾞ
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @date:     2017-02-05  下午1:59
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */

	var _util = __webpack_require__(94);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var TableLayout = function () {
		function TableLayout(options) {
			_classCallCheck(this, TableLayout);

			this.table = null;
			this.store = null;
			this.columns = null;
			this.fit = true;

			this.bodyWidth = null;

			this.headerHeight = 44; // Table Header Height
			this.bodyHeight = null; // Table Height - Table Header Height

			for (var name in options) {
				if (options.hasOwnProperty(name)) {
					this[name] = options[name];
				}
			}

			if (!this.table) {
				throw new Error('table is required for Table Layout');
			}
			if (!this.store) {
				throw new Error('store is required for Table Layout');
			}
		}

		/**
	  * 设置固定高度
	  * 
	  * @param height
	  */


		_createClass(TableLayout, [{
			key: 'setHeight',
			value: function setHeight(height, maxHeight, headerHeight) {
				var self = this;
				var el = this.table.$el;

				if (typeof headerHeight === 'string' && /^\d+$/.test(headerHeight)) {
					this.headerHeight = headerHeight;
				}

				if (typeof height === 'string' && /^\d+$/.test(height)) {
					height = Number(height);
				}

				if (typeof maxHeight == 'stirng' && /^\d+$/.test(height)) {
					maxHeight = Number(height);
				}

				if (!isNaN(maxHeight) && el && el.clientHeight > maxHeight) {
					el.style.height = maxHeight + 'px';
					self.bodyHeight = maxHeight - this.headerHeight + 'px';
				}

				if (!isNaN(height) && el) {
					el.style.height = height + 'px';
					self.bodyHeight = height - this.headerHeight + 'px';
				}
			}
		}]);

		return TableLayout;
	}();

	exports.default = TableLayout;

/***/ },
/* 96 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _util = __webpack_require__(94);

	exports.default = {
		props: {
			store: {
				required: true
			},
			layout: {
				required: true
			}
		},

		render: function render(h) {
			var _this = this;

			return h(
				"table",
				{
					"class": "sf-table__body",
					attrs: { cellspacing: "0",
						cellpadding: "0",
						border: "0"
					}
				},
				[this._l(this.columns, function (column) {
					return h(
						"col",
						{
							attrs: {
								name: column.id,
								width: column.width
							}
						},
						[]
					);
				}), h(
					"tbody",
					null,
					[this._l(this.data, function (row, $index) {
						return h(
							"tr",
							{
								on: {
									"click": function click($event) {
										return _this.handleClick($event, row);
									}
								},

								"class": _this.getRowClass(row, $index) },
							[_this._l(_this.columns, function (column, cellIndex) {
								return h(
									"td",
									{
										"class": [column.id, column.align, _this.isCellHidden(cellIndex) ? 'is-hidden' : '']
									},
									[column.template ? column.template.call(_this._renderProxy, h, {
										row: row,
										column: column,
										$index: $index,
										store: _this.store,
										_self: _this.$parent.$vnode.context
									}) : h(
										"div",
										{
											"class": "cell" },
										[_this.getCellContent(row, column.property, column.id)]
									)]
								);
							})]
						);
					})]
				)]
			);
		},


		computed: {
			data: function data() {
				return this.store.states.data;
			},
			columnsCount: function columnsCount() {
				return this.store.states.columns.length;
			},
			columns: function columns() {
				return this.store.states.columns;
			}
		},

		data: function data() {
			return {};
		},


		methods: {
			/**
	   * 设置行高的样式问题
	   *
	   * @param row
	   * @param index
	   * @returns {string}
	   */
			getRowClass: function getRowClass(row, index) {
				var classes = [];
				if (this.hoverRowIndex === index) {
					classes.push('hover-row');
				}

				var rowClassName = this.rowClassName;
				if (typeof rowClassName === 'string') {
					classes.push(rowClassName);
				} else if (typeof rowClassName === 'function') {
					classes.push(rowClassName.apply(null, [row, index]) || '');
				}

				return classes.join(' ');
			},


			/**
	   * 是否选择行或者列, 事件回调
	   *
	   * @param event
	   * @param row
	   */
			handleClick: function handleClick(event, row) {
				var table = this.$parent;
				var cell = (0, _util.getCell)(event);

				if (cell) {
					var column = (0, _util.getColumnByCell)(table, cell);
					if (column) {
						table.$emit('row-click', row, column, cell, event);
					}
				}

				table.$emit('row-click', row, event);
			},

			/**
	   * 获取列元素内容, 有格式化
	   *
	   * @param row
	   * @param property
	   * @param columnId
	   * @returns {*}
	   */
			getCellContent: function getCellContent(row, property, columnId) {
				var column = (0, _util.getColumnById)(this.$parent, columnId);
				if (column && column.formatter) {
					return column.formatter(row, column);
				}

				return (0, _util.getValueByPath)(row, property);
			},
			isSelected: function isSelected(row) {
				return row.selection ? true : false;
			},
			isCellHidden: function isCellHidden() {}
		}
	};

/***/ },
/* 97 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = {
		name: 'sf-table-header',

		render: function render(h) {
			var _this = this;

			return h(
				"table",
				{
					"class": "sf-table__header",
					attrs: { cellspacing: "0",
						cellpadding: "0",
						border: "0"
					}
				},
				[this._l(this.columns, function (column) {
					return h(
						"col",
						{
							attrs: {
								name: column.id,
								width: column.width
							}
						},
						[]
					);
				}), h(
					"thead",
					null,
					[h(
						"tr",
						null,
						[this._l(this.columns, function (column, cellIndex) {
							return h(
								"th",
								{
									style: _this.setHeaderHeight()
								},
								[h(
									"div",
									{
										"class": ['cell', column.filteredValue && column.filteredValue.length > 0 ? 'highlight' : ''] },
									[column.headerTemplate ? column.headerTemplate.call(_this._renderProxy, h, _this.store, column.label) : column.label, column.sortable ? h(
										"span",
										{ "class": "caret-wrapper",
											on: {
												"click": function click($event) {
													return _this.handleHeaderClick($event, column);
												}
											}
										},
										[h(
											"i",
											{ "class": "sf-icon sf-icon--dcaret" },
											[]
										)]
									) : '']
								)]
							);
						})]
					)]
				)]
			);
		},


		props: {
			store: {
				required: true
			},
			layout: {
				required: true
			},
			border: Boolean
		},

		computed: {
			columns: function columns() {
				return this.store.states.columns;
			}
		},

		methods: {
			toggleAllSelection: function toggleAllSelection() {
				this.store.commit('toggleAllSelection');
			},
			handleHeaderClick: function handleHeaderClick(event, column) {
				var target = event.target;
				while (target && target.tagName !== 'TH') {
					target = target.parentNode;
				}

				if (target && target.tagName === 'TH') {
					if (target.classList.contains('noclick')) {
						target.classList.remove('noclick');
						return;
					}
				}

				if (!column.sortable) return;

				var states = this.store.states;
				var sortProp = states.sortProp;
				var sortOrder = void 0;
				var sortingColumn = states.sortingColumn;

				if (sortingColumn !== column) {
					if (sortingColumn) {
						sortingColumn.order = null;
					}
					states.sortingColumn = column;
					sortProp = column.property;
				}

				if (!column.order) {
					sortOrder = column.order = 'ascending';
				} else if (column.order === 'ascending') {
					sortOrder = column.order = 'descending';
				} else {
					sortOrder = column.order = null;
					states.sortingColumn = null;
					sortProp = null;
				}
				states.sortProp = sortProp;
				states.sortOrder = sortOrder;

				this.store.commit('changeSortCondition');
			},
			setHeaderHeight: function setHeaderHeight() {
				return "height : " + this.layout.headerHeight + "px";
			}
		}
	};

/***/ },
/* 98 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "sf-table",
	    class: [{
	      'sf-table--striped': _vm.stripe,
	      'sf-table--border': _vm.border
	    }, _vm.clazz]
	  }, [_c('div', {
	    ref: "hiddenColumns",
	    staticClass: "hidden-columns"
	  }, [_vm._t("default")], 2), _vm._v(" "), _c('div', {
	    ref: "headerWrapper",
	    staticClass: "sf-table__header-wrapper"
	  }, [_c('table-header', {
	    attrs: {
	      "store": _vm.store,
	      "layout": _vm.layout,
	      "border": _vm.border
	    }
	  })], 1), _vm._v(" "), _c('div', {
	    ref: "bodyWrapper",
	    staticClass: "sf-table__body-wrapper",
	    style: ({
	      height: _vm.layout.bodyHeight
	    })
	  }, [_c('table-body', {
	    attrs: {
	      "store": _vm.store,
	      "layout": _vm.layout
	    }
	  }), _vm._v(" "), (!_vm.data || _vm.data.length === 0) ? _c('div', {
	    staticClass: "sf-table__empty-block"
	  }, [_c('span', {
	    staticClass: "sf-table__empty-text"
	  }, [_vm._v(_vm._s(_vm.emptyText))])]) : _vm._e()], 1)])
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-2faf1ac7", module.exports)
	  }
	}

/***/ },
/* 99 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	/**
	 * clipLoader 回纹针过场组件
	 *
	 * @author:   波比(｡･∀･)ﾉﾞ
	 * @date:     2016-10-10  上午11:53
	 */
	var mixin = __webpack_require__(100);

	module.exports = {
		name: 'sf-cliploader',
		mixins: [mixin],
		template: __webpack_require__(101),
		computed: {
			clipStyle: function clipStyle() {
				return {
					height: this.size + 'px',
					width: this.size + 'px',
					borderWidth: '2px',
					borderStyle: 'solid',
					borderColor: this.color + ' ' + this.color + ' transparent',
					borderRadius: '100%',
					background: 'transparent'
				};
			},
			cellStyle: function cellStyle() {
				return {
					height: this.size + 'px',
					width: this.size + 'px'
				};
			}
		}
	};

/***/ },
/* 100 */
/***/ function(module, exports) {

	'use strict';

	/**
	 * Spinner 用户模块 Mixin
	 *
	 * @author:   波比(｡･∀･)ﾉﾞ
	 * @date:     2016-10-10  上午11:32
	 *
	 * @props {Number} delayTime			- 延迟时间
	 *
	 */

	module.exports = {
		props: {
			delayTime: {
				type: Number,
				default: 500
			},
			color: {
				type: String,
				default: '#43b4ec'
			},
			size: {
				type: [String, Number],
				default: 35
			}
		}
	};

/***/ },
/* 101 */
/***/ function(module, exports) {

	module.exports = "<transition name=\"sf-spinner\">\n\t<div class=\"sf-spinner sf-spinner--clip\">\n\t\t<div class=\"cell\" :style=\"cellStyle\">\n\t\t\t<i class=\"clip\" :style=\"clipStyle\">\n\n\t\t\t</i>\n\t\t</div>\n\t</div>\n</transition>\n";

/***/ },
/* 102 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	/**
	 * scaleLoader 伸缩过场组件
	 *
	 * @author:   波比(｡･∀･)ﾉﾞ
	 * @date:     2016-10-10  上午11:53
	 */
	var mixin = __webpack_require__(100);

	module.exports = {
		name: 'sf-scaleloader',
		mixins: [mixin],
		props: {
			width: {
				type: Number,
				default: 4
			},
			height: {
				type: Number,
				default: 35
			},
			margin: {
				type: Number,
				default: 2
			}
		},
		template: __webpack_require__(103),
		computed: {
			scaleStyle: function scaleStyle() {
				return {
					width: this.width + 'px',
					height: this.height + 'px',
					margin: this.margin + 'px'
				};
			}
		}
	};

/***/ },
/* 103 */
/***/ function(module, exports) {

	module.exports = "<transition name=\"sf-spinner\">\n\t<div class=\"sf-spinner sf-spinner--scale\">\n\t\t<div class=\"cell\">\n\t\t\t<i class=\"scale scale1\" :style=\"scaleStyle\"></i>\n\t\t\t<i class=\"scale scale2\" :style=\"scaleStyle\"></i>\n\t\t\t<i class=\"scale scale3\" :style=\"scaleStyle\"></i>\n\t\t\t<i class=\"scale scale4\" :style=\"scaleStyle\"></i>\n\t\t\t<i class=\"scale scale5\" :style=\"scaleStyle\"></i>\n\t\t</div>\n\t</div>\n</transition>\n";

/***/ },
/* 104 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	/**
	 * riseLoader 上升过场组件
	 *
	 * @author:   波比(｡･∀･)ﾉﾞ
	 * @date:     2016-10-10  上午11:53
	 */
	var mixin = __webpack_require__(100);

	module.exports = {
		name: 'sf-riseloader',
		mixins: [mixin],
		template: __webpack_require__(105),
		computed: {
			riseStyle: function riseStyle() {
				return {
					height: this.size + 'px',
					width: this.size + 'px',
					margin: this.margin + 'px',
					backgroundColor: this.color
				};
			}
		}
	};

/***/ },
/* 105 */
/***/ function(module, exports) {

	module.exports = "<transition name=\"sf-spinner\">\n\t<div class=\"sf-spinner sf-spinner--rise\">\n\t\t<div class=\"cell\">\n\t\t\t<i class=\"rise\" :style=\"riseStyle\"></i>\n\t\t\t<i class=\"rise\" :style=\"riseStyle\"></i>\n\t\t\t<i class=\"rise\" :style=\"riseStyle\"></i>\n\t\t\t<i class=\"rise\" :style=\"riseStyle\"></i>\n\t\t\t<i class=\"rise\" :style=\"riseStyle\"></i>\n\t\t\t<i class=\"rise\" :style=\"riseStyle\"></i>\n\t\t</div>\n\t</div>\n</transition>";

/***/ },
/* 106 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	/**
	 * squareLoader 方块旋转过场组件
	 *
	 * @author:   波比(｡･∀･)ﾉﾞ
	 * @date:     2016-10-10  上午11:53
	 */
	var mixin = __webpack_require__(100);

	module.exports = {
		name: 'sf-squareloader',
		mixins: [mixin],
		template: __webpack_require__(107),
		computed: {
			squareStyle: function squareStyle() {
				return {
					width: this.size + 'px',
					height: this.size + 'px',
					backgroundColor: this.color
				};
			}
		}
	};

/***/ },
/* 107 */
/***/ function(module, exports) {

	module.exports = "<transition name=\"sf-spinner\">\n\t<div class=\"sf-spinner sf-spinner--square\">\n\t\t<div class=\"cell\">\n\t\t\t<i class=\"square\" :style=\"squareStyle\"></i>\n\t\t</div>\n\t</div>\n</transition>\n";

/***/ },
/* 108 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	/**
	 * notify 消息提示组件
	 *
	 * @author:   波比(｡･∀･)ﾉﾞ
	 * @date:     2016-10-08  下午5:10
	 * @param {String} position 				- ne[northeast],nw[northwest],se[southeast]
	 * 											- sw[southwest],n[north], s[south]
	 * @param {String} type						- Toast类型: 1. info, 2. warning, 3. success, 4. error
	 *
	 */
	var Vue = __webpack_require__(1);

	var toast = new Vue({
		template: __webpack_require__(109),
		el: '#iframe',
		data: function data() {
			return {
				position: 'sw',
				delayTime: 5000,
				messages: [],
				maxToastId: 0
			};
		},
		methods: {
			config: function config(_config) {
				this.position = _config.position;
				this.delayTime = _config.delayTime;
			},
			close: function close(id) {
				this.messages = this.messages.filter(function (itm) {
					return itm.id !== id;
				});
			}
		}
	});

	['info', 'warning', 'success', 'error'].forEach(function (type) {
		toast[type] = function (text) {
			if (!text) return;
			var id = ++this.maxToastId;
			this.messages.push({ type: type, text: text, id: id });

			setTimeout(function () {
				this.messages = this.messages.filter(function (itm) {
					return itm.id !== id;
				});
			}.bind(this), this.delayTime);
		};
	});

	module.exports = toast;

/***/ },
/* 109 */
/***/ function(module, exports) {

	module.exports = "<div class=\"sf-toast\" :class=\"['sf-toast--'+position]\">\n\t<transition-group name=\"toast_message\" tag=\"div\">\n\t\t<div class=\"toast_message\" :class=\"'message-'+x.type\" v-for=\"x in messages\" :key=\"x.id\" >\n\t\t\t<div class=\"text\" v-html=\"x.text\"></div>\n\t\t\t<i class=\"u-icon u-icon-close\" @click=\"close(x.id)\"></i>\n\t\t</div>\n\t</transition-group>\n</div>\n";

/***/ },
/* 110 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	/**
	 * progressbar 进度条基础组件
	 *
	 * @author:   波比(｡･∀･)ﾉﾞ
	 * @date:     2016-10-09  下午2:44
	 *
	 * @props {String} type					- info, warning, error, success
	 * @props {String} label				- 滚动条文本
	 * @props {Number} percent				- 百分比
	 *
	 */

	module.exports = {
		template: __webpack_require__(111),
		props: {
			type: {
				type: String,
				default: 'info'
			},
			label: {
				type: String,
				default: ''
			},
			percent: {
				type: [String, Number],
				default: 0
			},
			striped: {
				type: Boolean,
				default: false
			}
		}

	};

/***/ },
/* 111 */
/***/ function(module, exports) {

	module.exports = "<div class=\"sf-progressbar\">\n\t<div class=\"progressbar\" :class=\"['progressbar-' + type, {'progressbar--striped' : striped}]\" :style=\"{width : percent + '%'}\">\n\t\t\t{{label}}\n\t</div>\n</div>";

/***/ },
/* 112 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	/**
	 * sf-tooltips 组件
	 *
	 * @author:   jianfulee
	 * @date:     Jan 22, 2017 10:01 AM
	 *
	 * @props  {String} prop         -参数         
	 * 
	 */

	module.exports = {
		name: 'sf-tooltips',
		template: __webpack_require__(113),
		props: ['content', 'placement'],
		data: function data() {
			return {
				isShowTips: false
			};
		},
		created: function created() {},
		methods: {
			showTipsInfo: function showTipsInfo() {
				this.$data.isShowTips = true;
			},
			hideTipsInfo: function hideTipsInfo() {
				this.$data.isShowTips = false;
			}
		}
	};

/***/ },
/* 113 */
/***/ function(module, exports) {

	module.exports = "<div class=\"m-tooltips\">\n    <div v-on:mouseenter=\"showTipsInfo\" v-on:mouseleave=\"hideTipsInfo\" class=\"target\">\n        <slot>fff</slot>\n    </div>\n    <transition name=\"fade\">\n\t    <div class=\"cart\" v-show=\"isShowTips\" v-bind:class=\"{'cart-down': placement == 'down left' ||   placement == 'down' ||   placement == 'down right' ||  placement == 'down center','cart-up': placement == 'up' ||  placement == 'up left' ||  placement == 'up right' ||  placement == 'up center','cart-right': placement == 'right' ||  placement == 'right up' || placement == 'right center' || placement == 'right down','cart-left': placement == 'left' ||  placement == 'left up' ||  placement == 'left down' ||  placement == 'left center' || placement == 'left'}\"></div>\n\t</transition>\n\t<transition name=\"fade\">\n\t    <div class=\"content\" v-show=\"isShowTips\" ref=\"content\" v-bind:class=\"{'pos-down': placement == 'down','pos-up': placement == 'up','pos-left': placement == 'left' || placement == 'left center','pos-right': placement == 'right' ||  placement == 'right center','pos-down-left': placement == 'down left','pos-down-right': placement == 'down right','pos-right-down': placement == 'right down','pos-up-left': placement == 'up left','pos-up-right': placement == 'up right','pos-right-up': placement == 'right up','pos-left-up': placement == 'left up','pos-left-down': placement == 'left down'}\" v-html=\"content\">\n\t        \n\t    </div>\n\t</transition>\n</div>\n";

/***/ },
/* 114 */
/***/ function(module, exports, __webpack_require__) {

	var Component = __webpack_require__(10)(
	  /* script */
	  __webpack_require__(115),
	  /* template */
	  __webpack_require__(129),
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)
	Component.options.__file = "/Users/matrix/Documents/Netease/NSFI/7-ui/node_modules/.npminstall/sf-pagination/0.0.8/sf-pagination/src/pagination.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] pagination.vue: functional components are not supported with templates, they should use render functions.")}

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-e4179ce6", Component.options)
	  } else {
	    hotAPI.reload("data-v-e4179ce6", Component.options)
	  }
	})()}

	module.exports = Component.exports


/***/ },
/* 115 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	/**
	 * @name                    分页器组件
	 * @component               <pagination :total="total" :limit="limit" @onchange="onchange"></pagination>
	 */
	exports.default = {
	    components: {
	        'pagination': __webpack_require__(116),
	        'paginationItem': __webpack_require__(118),
	        'paginationNext': __webpack_require__(121),
	        'paginationPrev': __webpack_require__(124),
	        'paginationDot': __webpack_require__(127)
	    },
	    props: ['total', 'current', 'limit', 'unit'],
	    watch: {
	        current: function current(val, oldVal) {
	            this.refresh(val);
	        }
	    },
	    methods: {
	        setCurrent: function setCurrent(pageIndex) {
	            this.current = pageIndex;
	        },
	        goPrev: function goPrev(current) {
	            if (current > 1) {
	                this.current = this.current - 1;
	                this.refresh(this.current);
	            }
	        },
	        goNext: function goNext(current) {
	            if (current < this._total) {
	                this.current = this.current + 1;
	                this.refresh(this.current);
	            }
	        },
	        refresh: function refresh(current) {
	            var len = Math.ceil(this.total / this.limit),
	                offset = Math.floor(this.unit / 2),
	                start = current - offset,
	                end = current + offset;

	            // reset
	            Object.assign(this, {
	                pages: [],
	                _total: len
	            });
	            start = start <= 1 ? 1 : start;
	            end = end >= len ? len : end;
	            this.prevDot = start == 1 ? false : true;
	            this.nextDot = end == len ? false : true;

	            // 考虑边界情况
	            if (end - start < this.unit && len > this.unit) {
	                if (end == len) {
	                    start = len - this.unit + 1;
	                }

	                if (start == 1) {
	                    end = this.unit;
	                }
	            }

	            for (var i = start; i <= end; i++) {
	                this.pages.push(i);
	            }
	        }
	    },
	    data: function data() {
	        return {
	            pages: [],
	            nextDot: false,
	            prevDot: false,
	            _total: 0
	        };
	    },
	    created: function created() {
	        this.refresh(this.current);
	    }
	};

/***/ },
/* 116 */
/***/ function(module, exports, __webpack_require__) {

	var Component = __webpack_require__(10)(
	  /* script */
	  null,
	  /* template */
	  __webpack_require__(117),
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)
	Component.options.__file = "/Users/matrix/Documents/Netease/NSFI/7-ui/node_modules/.npminstall/sf-pagination/0.0.8/sf-pagination/src/pagination-root.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] pagination-root.vue: functional components are not supported with templates, they should use render functions.")}

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-3ef907d2", Component.options)
	  } else {
	    hotAPI.reload("data-v-3ef907d2", Component.options)
	  }
	})()}

	module.exports = Component.exports


/***/ },
/* 117 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('ul', {
	    staticClass: "sf-pagination"
	  }, [_vm._t("default")], 2)
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-3ef907d2", module.exports)
	  }
	}

/***/ },
/* 118 */
/***/ function(module, exports, __webpack_require__) {

	var Component = __webpack_require__(10)(
	  /* script */
	  __webpack_require__(119),
	  /* template */
	  __webpack_require__(120),
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)
	Component.options.__file = "/Users/matrix/Documents/Netease/NSFI/7-ui/node_modules/.npminstall/sf-pagination/0.0.8/sf-pagination/src/pagination-item.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] pagination-item.vue: functional components are not supported with templates, they should use render functions.")}

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-e1cafcfa", Component.options)
	  } else {
	    hotAPI.reload("data-v-e1cafcfa", Component.options)
	  }
	})()}

	module.exports = Component.exports


/***/ },
/* 119 */
/***/ function(module, exports) {

	"use strict";

	exports.__esModule = true;
	//
	//
	//
	//
	//
	//
	//
	//

	/**
	 * pagination item
	 * @module pagination/pagination-item
	 * @author Jack Yang
	 * @description a component for pagination-item
	 */
	exports.default = {
	    props: {
	        active: {
	            type: Boolean,
	            default: false
	        }
	    }
	};

/***/ },
/* 120 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('li', {
	    class: {
	      'active': _vm.active
	    }
	  }, [_c('a', [_vm._t("default")], 2)])
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-e1cafcfa", module.exports)
	  }
	}

/***/ },
/* 121 */
/***/ function(module, exports, __webpack_require__) {

	var Component = __webpack_require__(10)(
	  /* script */
	  __webpack_require__(122),
	  /* template */
	  __webpack_require__(123),
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)
	Component.options.__file = "/Users/matrix/Documents/Netease/NSFI/7-ui/node_modules/.npminstall/sf-pagination/0.0.8/sf-pagination/src/pagination-next.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] pagination-next.vue: functional components are not supported with templates, they should use render functions.")}

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-c45cbd3a", Component.options)
	  } else {
	    hotAPI.reload("data-v-c45cbd3a", Component.options)
	  }
	})()}

	module.exports = Component.exports


/***/ },
/* 122 */
/***/ function(module, exports) {

	"use strict";

	exports.__esModule = true;
	//
	//
	//
	//
	//
	//
	//
	//

	exports.default = {
	    props: {
	        disabled: {
	            type: Boolean,
	            default: false
	        }
	    }
	};

/***/ },
/* 123 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('li', {
	    class: {
	      'disabled': _vm.disabled
	    }
	  }, [_vm._m(0)])
	},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('a', [_c('i', {
	    staticClass: "sf-icon sf-icon--arrow-right"
	  })])
	}]}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-c45cbd3a", module.exports)
	  }
	}

/***/ },
/* 124 */
/***/ function(module, exports, __webpack_require__) {

	var Component = __webpack_require__(10)(
	  /* script */
	  __webpack_require__(125),
	  /* template */
	  __webpack_require__(126),
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)
	Component.options.__file = "/Users/matrix/Documents/Netease/NSFI/7-ui/node_modules/.npminstall/sf-pagination/0.0.8/sf-pagination/src/pagination-prev.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] pagination-prev.vue: functional components are not supported with templates, they should use render functions.")}

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-0615ceba", Component.options)
	  } else {
	    hotAPI.reload("data-v-0615ceba", Component.options)
	  }
	})()}

	module.exports = Component.exports


/***/ },
/* 125 */
/***/ function(module, exports) {

	"use strict";

	exports.__esModule = true;
	//
	//
	//
	//
	//
	//
	//
	//

	exports.default = {
	    props: {
	        disabled: {
	            type: Boolean,
	            default: false
	        }
	    }
	};

/***/ },
/* 126 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('li', {
	    class: {
	      'disabled': _vm.disabled
	    }
	  }, [_vm._m(0)])
	},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('a', [_c('i', {
	    staticClass: "sf-icon sf-icon--arrow-right arrow-left"
	  })])
	}]}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-0615ceba", module.exports)
	  }
	}

/***/ },
/* 127 */
/***/ function(module, exports, __webpack_require__) {

	var Component = __webpack_require__(10)(
	  /* script */
	  null,
	  /* template */
	  __webpack_require__(128),
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)
	Component.options.__file = "/Users/matrix/Documents/Netease/NSFI/7-ui/node_modules/.npminstall/sf-pagination/0.0.8/sf-pagination/src/pagination-dot.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] pagination-dot.vue: functional components are not supported with templates, they should use render functions.")}

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-04d24b09", Component.options)
	  } else {
	    hotAPI.reload("data-v-04d24b09", Component.options)
	  }
	})()}

	module.exports = Component.exports


/***/ },
/* 128 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('li', [_c('a', [_vm._t("default")], 2)])
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-04d24b09", module.exports)
	  }
	}

/***/ },
/* 129 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('pagination', [_c('pagination-prev', {
	    attrs: {
	      "disabled": _vm.current == 1
	    },
	    nativeOn: {
	      "click": function($event) {
	        _vm.goPrev(_vm.current)
	      }
	    }
	  }), _vm._v(" "), _c('pagination-dot', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (_vm.prevDot),
	      expression: "prevDot"
	    }]
	  }, [_vm._v("...")]), _vm._v(" "), _vm._l((_vm.pages), function(page) {
	    return _c('pagination-item', {
	      attrs: {
	        "active": page == _vm.current
	      },
	      nativeOn: {
	        "click": function($event) {
	          _vm.setCurrent(page)
	        }
	      }
	    }, [_vm._v("\n        " + _vm._s(page) + "\n    ")])
	  }), _vm._v(" "), _c('pagination-dot', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (_vm.nextDot),
	      expression: "nextDot"
	    }]
	  }, [_vm._v("...")]), _vm._v(" "), _c('pagination-next', {
	    attrs: {
	      "disabled": _vm.current == _vm._total
	    },
	    nativeOn: {
	      "click": function($event) {
	        _vm.goNext(_vm.current)
	      }
	    }
	  })], 2)
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-e4179ce6", module.exports)
	  }
	}

/***/ }
/******/ ]);