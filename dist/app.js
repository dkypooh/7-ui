!function(t){function e(r){if(n[r])return n[r].exports;var i=n[r]={exports:{},id:r,loaded:!1};return t[r].call(i.exports,i,i.exports,e),i.loaded=!0,i.exports}var n={};return e.m=t,e.c=n,e.p="",e(0)}([function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}var i=n(20),s=r(i),o=n(8),l=r(o),a=n(16),u=r(a),c=n(11),d=r(c),f=n(13),h=r(f),p=n(12),m=r(p),y=n(14),g=r(y),b=function t(e){arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};t.installed||(e.component("sf-button",s.default),e.component("sf-table",l.default),e.component("sf-table-column",u.default),e.component("sf-cliploader",d.default),e.component("sf-scaleloader",h.default),e.component("sf-riseloader",m.default),e.component("sf-squareloader",g.default))};"undefined"!=typeof window&&window.Vue&&b(window.Vue)},function(t,e){"use strict";t.exports={props:{delayTime:{type:Number,default:500},color:{type:String,default:"#43b4ec"},size:{type:[String,Number],default:35}}}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r=(e.getCell=function(t){for(var e=t.target;e&&"HTML"!==e.tagName.toUpperCase();){if("TD"===e.tagName.toUpperCase())return e;e=e.parentNode}return null},e.getValueByPath=function(t,e){e=e||"";for(var n=e.split("."),r=t,i=null,s=0,o=n.length;s<o;s++){var l=n[s];if(!r)break;if(s===o-1){i=r[l];break}r=r[l]}return i}),i=function(t){return null!==t&&"object"===("undefined"==typeof t?"undefined":n(t))},s=(e.orderBy=function(t,e,n,s){if("string"==typeof n&&(n="descending"===n?-1:1),!e)return t;var o=n&&n<0?-1:1;return t.slice().sort(s?function(t,e){return s(t,e)?o:-o}:function(t,n){return"$key"!==e&&(i(t)&&"$value"in t&&(t=t.$value),i(n)&&"$value"in n&&(n=n.$value)),t=i(t)?r(t,e):t,n=i(n)?r(n,e):n,t===n?0:t>n?o:-o})},e.getColumnById=function(t,e){var n=null,r=t.store.states._columns;return r.forEach(function(t){t.id===e&&(n=t)}),n});e.getColumnByCell=function(t,e){return e.className?s(t,e.className):null}},function(t,e){t.exports='<transition name=sf-spinner><div class="sf-spinner sf-spinner--clip"><div class=cell :style=cellStyle><i class=clip :style=clipStyle></i></div></div></transition>'},function(t,e){t.exports='<transition name=sf-spinner><div class="sf-spinner sf-spinner--rise"><div class=cell><i class=rise :style=riseStyle></i> <i class=rise :style=riseStyle></i> <i class=rise :style=riseStyle></i> <i class=rise :style=riseStyle></i> <i class=rise :style=riseStyle></i> <i class=rise :style=riseStyle></i></div></div></transition>'},function(t,e){t.exports='<transition name=sf-spinner><div class="sf-spinner sf-spinner--scale"><div class=cell><i class="scale scale1" :style=scaleStyle></i> <i class="scale scale2" :style=scaleStyle></i> <i class="scale scale3" :style=scaleStyle></i> <i class="scale scale4" :style=scaleStyle></i> <i class="scale scale5" :style=scaleStyle></i></div></div></transition>'},function(t,e){t.exports='<transition name=sf-spinner><div class="sf-spinner sf-spinner--square"><div class=cell><i class=square :style=squareStyle></i></div></div></transition>'},function(t,e){t.exports="<transition name=fade><a :class=\"[\n        'u-button',\n        'u-button--'+size,\n        'u-button--'+color,\n        {'is-disabled': disabled},\n        {'is-plain' : plain}\n    ]\" :style=\"{display: block ? 'block' : 'inline-block' }\"><slot></slot></a></transition>"},function(t,e,n){var r=n(9)(n(21),n(10),null,null);t.exports=r.exports},function(t,e){t.exports=function(t,e,n,r){var i,s=t=t||{},o=typeof t.default;"object"!==o&&"function"!==o||(i=t,s=t.default);var l="function"==typeof s?s.options:s;if(e&&(l.render=e.render,l.staticRenderFns=e.staticRenderFns),n&&(l._scopeId=n),r){var a=l.computed||(l.computed={});Object.keys(r).forEach(function(t){var e=r[t];a[t]=function(){return e}})}return{esModule:i,exports:s,options:l}}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"sf-table",class:[{"sf-table--striped":t.stripe,"sf-table--border":t.border},t.clazz]},[n("div",{ref:"hiddenColumns",staticClass:"hidden-columns"},[t._t("default")],2),t._v(" "),n("div",{ref:"headerWrapper",staticClass:"sf-table__header-wrapper"},[n("table-header",{attrs:{store:t.store,layout:t.layout,border:t.border}})],1),t._v(" "),n("div",{ref:"bodyWrapper",staticClass:"sf-table__body-wrapper",style:{height:t.layout.bodyHeight}},[n("table-body",{attrs:{store:t.store,layout:t.layout}}),t._v(" "),t.data&&0!==t.data.length?t._e():n("div",{staticClass:"sf-table__empty-block"},[n("span",{staticClass:"sf-table__empty-text"},[t._v(t._s(t.emptyText))])])],1)])},staticRenderFns:[]}},function(t,e,n){"use strict";var r=n(1);t.exports={name:"sf-cliploader",mixins:[r],template:n(3),computed:{clipStyle:function(){return{height:this.size+"px",width:this.size+"px",borderWidth:"2px",borderStyle:"solid",borderColor:this.color+" "+this.color+" transparent",borderRadius:"100%",background:"transparent"}},cellStyle:function(){return{height:this.size+"px",width:this.size+"px"}}}}},function(t,e,n){"use strict";var r=n(1);t.exports={name:"sf-riseloader",mixins:[r],template:n(4),computed:{riseStyle:function(){return{height:this.size+"px",width:this.size+"px",margin:this.margin+"px",backgroundColor:this.color}}}}},function(t,e,n){"use strict";var r=n(1);t.exports={name:"sf-scaleloader",mixins:[r],props:{width:{type:Number,default:4},height:{type:Number,default:35},margin:{type:Number,default:2}},template:n(5),computed:{scaleStyle:function(){return{width:this.width+"px",height:this.height+"px",margin:this.margin+"px"}}}}},function(t,e,n){"use strict";var r=n(1);t.exports={name:"sf-squareloader",mixins:[r],template:n(6),computed:{squareStyle:function(){return{width:this.size+"px",height:this.size+"px",backgroundColor:this.color}}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(2);e.default={props:{store:{required:!0},layout:{required:!0}},render:function(t){var e=this;return t("table",{class:"sf-table__body",attrs:{cellspacing:"0",cellpadding:"0",border:"0"}},[this._l(this.columns,function(e){return t("col",{attrs:{name:e.id,width:e.width}},[])}),t("tbody",null,[this._l(this.data,function(n,r){return t("tr",{on:{click:function(t){return e.handleClick(t,n)}},class:e.getRowClass(n,r)},[e._l(e.columns,function(i,s){return t("td",{class:[i.id,i.align,e.isCellHidden(s)?"is-hidden":""]},[i.template?i.template.call(e._renderProxy,t,{row:n,column:i,$index:r,store:e.store,_self:e.$parent.$vnode.context}):t("div",{class:"cell"},[e.getCellContent(n,i.property,i.id)])])})])})])])},computed:{data:function(){return this.store.states.data},columnsCount:function(){return this.store.states.columns.length},columns:function(){return this.store.states.columns}},data:function(){return{}},methods:{getRowClass:function(t,e){var n=[];this.hoverRowIndex===e&&n.push("hover-row");var r=this.rowClassName;return"string"==typeof r?n.push(r):"function"==typeof r&&n.push(r.apply(null,[t,e])||""),n.join(" ")},handleClick:function(t,e){var n=this.$parent,i=(0,r.getCell)(t);if(i){var s=(0,r.getColumnByCell)(n,i);s&&n.$emit("row-click",e,s,i,t)}n.$emit("row-click",e,t)},getCellContent:function(t,e,n){var i=(0,r.getColumnById)(this.$parent,n);return i&&i.formatter?i.formatter(t,i):(0,r.getValueByPath)(t,e)},isSelected:function(t){return!!t.selection},isCellHidden:function(){}}}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=0,r={default:{order:""},selection:{width:48,minWidth:48,realWidth:48,order:"",className:"sf-table__column--selection"},index:{width:48,minWidth:48,realWidth:48,order:""}},i={selection:{headerTemplate:function(t,e){return t("input",{attrs:{type:"checkbox"},on:{click:this.toggleAllSelection}},[])},template:function(t,e,n){var r=e.row,i=(e.column,e.store);e.$index;return t("input",{attrs:{type:"checkbox",checked:n.isSelected(r)},on:{click:function(){i.commit("rowSelectedChanged",r)}}},[])},sortable:!1,resizable:!1},index:{headerTemplate:function(t,e){return e||"#"},template:function(t,e){var n=e.$index;return t("div",null,[n+1])},sortable:!1}},s=function(t,e){var n={};Object.assign(n,r[t||"default"]);for(var i in e)if(e.hasOwnProperty(i)){var s=e[i];"undefined"!=typeof s&&(n[i]=s)}return n.minWidth||(n.minWidth=80),n.realWidth=n.width||n.minWidth,n};e.default={name:"sf-table-column",props:{type:{type:String,default:"default"},label:String,property:String,prop:String,width:{},minWidth:{},template:String,sortable:{type:[Boolean,String],default:!1},sortMethod:Function,formatter:Function},render:function(){},data:function(){return{isChildColumn:!1,columns:[]}},beforeCreate:function(){this.row={},this.column={},this.$index=0},components:{},computed:{owner:function(){for(var t=this.$parent;t&&!t.tableId;)t=t.$parent;return t}},created:function(){this.customRender=this.$options.render,this.$options.render=function(t){return t("div")};var t=this.columnId="column_"+n++,e=(this.$parent,this.owner,this.type),r=this.width;void 0!==r&&(r=parseInt(r,10),isNaN(r)&&(r=null));var o=this.minWidth;void 0!==o&&(o=parseInt(o,10),isNaN(o)&&(o=80));var l=void 0,a=this.prop||this.property;l=function(e,n,r){var i=n.row;return e("span",null,[r.getCellContent(i,a,t)])};var u=s(e,{id:t,label:this.label,property:a,type:e,template:l,minWidth:o,width:r,align:this.align?"is-"+this.align:null,sortable:""===this.sortable||this.sortable,sortMethod:this.sortMethod,formatter:this.formatter});Object.assign(u,i[e]||{});var c=u.template,d=this;u.template=function(t,e){return d.$scopedSlots.default&&(c=function(){return d.$scopedSlots.default(e)}),t("div",{class:"cell"},[c(t,e,this._renderProxy)])},this.columnConfig=u},watch:{},mounted:function(){var t=(this.owner,this.$parent),e=void 0;e=this.isChildColumn?[].indexOf.call(t.$el.children,this.$el):[].indexOf.call(t.$refs.hiddenColumns.children,this.$el),t.store.commit("insertColumn",this.columnConfig,e)}}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"sf-table-header",render:function(t){var e=this;return t("table",{class:"sf-table__header",attrs:{cellspacing:"0",cellpadding:"0",border:"0"}},[this._l(this.columns,function(e){return t("col",{attrs:{name:e.id,width:e.width}},[])}),t("thead",null,[t("tr",null,[this._l(this.columns,function(n,r){return t("th",{style:e.setHeaderHeight()},[t("div",{class:["cell",n.filteredValue&&n.filteredValue.length>0?"highlight":""]},[n.headerTemplate?n.headerTemplate.call(e._renderProxy,t,e.store,n.label):n.label,n.sortable?t("span",{class:"caret-wrapper",on:{click:function(t){return e.handleHeaderClick(t,n)}}},[t("i",{class:"u-icon u-icon--dcaret"},[])]):""])])})])])])},props:{store:{required:!0},layout:{required:!0},border:Boolean},computed:{columns:function(){return this.store.states.columns}},methods:{toggleAllSelection:function(){this.store.commit("toggleAllSelection")},handleHeaderClick:function(t,e){for(var n=t.target;n&&"TH"!==n.tagName;)n=n.parentNode;if(n&&"TH"===n.tagName&&n.classList.contains("noclick"))return void n.classList.remove("noclick");if(e.sortable){var r=this.store.states,i=r.sortProp,s=void 0,o=r.sortingColumn;o!==e&&(o&&(o.order=null),r.sortingColumn=e,i=e.property),e.order?"ascending"===e.order?s=e.order="descending":(s=e.order=null,r.sortingColumn=null,i=null):s=e.order="ascending",r.sortProp=i,r.sortOrder=s,this.store.commit("changeSortCondition")}},setHeaderHeight:function(){return"height : "+this.layout.headerHeight+"px"}}}},function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var i=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),s=(n(2),function(){function t(e){r(this,t),this.table=null,this.store=null,this.columns=null,this.fit=!0,this.bodyWidth=null,this.headerHeight=44,this.bodyHeight=null;for(var n in e)e.hasOwnProperty(n)&&(this[n]=e[n]);if(!this.table)throw new Error("table is required for Table Layout");if(!this.store)throw new Error("store is required for Table Layout")}return i(t,[{key:"setHeight",value:function(t,e,n){var r=this,i=this.table.$el;"string"==typeof n&&/^\d+$/.test(n)&&(this.headerHeight=n),"string"==typeof t&&/^\d+$/.test(t)&&(t=Number(t)),"stirng"==typeof e&&/^\d+$/.test(t)&&(e=Number(t)),!isNaN(e)&&i&&i.clientHeight>e&&(i.style.height=e+"px",r.bodyHeight=e-this.headerHeight+"px"),!isNaN(t)&&i&&(i.style.height=t+"px",r.bodyHeight=t-this.headerHeight+"px")}}]),t}());e.default=s},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(2),i=function(t,e){var n=e.sortingColumn;return n&&"string"!=typeof n.sortable?(0,r.orderBy)(t,e.sortProp,e.sortOrder,n.sortMethod):t},s=function(t){return t.selection=!t.selection,!0},o=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(!t)throw new Error("Table is required.");this.table=t,this.states={rowKey:null,_columns:[],columns:[],_data:null,data:null,sortingColumn:null,sortProp:null,sortOrder:null,isAllSelected:!1,selection:[],filters:{}};for(var n in e)e.hasOwnProperty(n)&&this.states.hasOwnProperty(n)&&(this.states[n]=e[n])};o.prototype.mutations={setData:function(t,e){t._data=e,t.data=i(e||[],t)},insertColumn:function(t,e,n){var r=t._columns;"undefined"!=typeof n?r.splice(n,0,e):r.push(e),"selection"===e.type&&(t.selectable=e.selectable,t.reserveSelection=e.reserveSelection)},changeSortCondition:function(t){t.data=i(t.filteredData||t._data||[],t),this.table.$emit("sort-change",{column:this.states.sortingColumn,prop:this.states.sortProp,order:this.states.sortOrder})},rowSelectedChanged:function(t,e){var n=s(e);n&&this.table.$emit("selection-row",e),this.updateAllSelected(t)},toggleAllSelection:function(){}},o.prototype.updateColumns=function(){var t=this.states,e=t._columns;t.columns=[].concat(e)},o.prototype.updateAllSelected=function(t){var e=t.data,n=0;e.forEach(function(t){t.selection&&n++}),e.length===n?t.isAllSelected=!0:t.isAllSelected=!1},o.prototype.commit=function(t){var e=this.mutations;if(e[t]){for(var n=arguments.length,r=Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];e[t].apply(this,[this.states].concat(r))}},e.default=o},function(t,e,n){"use strict";t.exports={name:"sf-button",template:n(7),props:{color:{type:String,default:""},size:{type:String,default:"normal"},block:Boolean,disabled:Boolean,icon:String,plain:Boolean}}},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i=n(19),s=r(i),o=n(18),l=r(o),a=n(15),u=r(a),c=n(17),d=r(c);e.default={name:"sf-table",props:{data:{type:Array,default:function(){return[]}},width:[String,Number],height:[String,Number],maxHeight:[String,Number],clazz:[String,Number],headerHeight:[String,Number],stripe:Boolean,border:Boolean,emptyText:{type:String}},components:{TableHeader:d.default,TableBody:u.default},methods:{doLayout:function(){var t=this;this.store.updateColumns(),this.$nextTick(function(){(t.height||t.maxHeight||t.headerHeight)&&t.layout.setHeight(t.height,t.maxHeight,t.headerHeight)})}},watch:{data:{immediate:!0,handler:function(t){this.store.commit("setData",t)}}},mounted:function(){this.doLayout()},data:function(){var t=new s.default(this,{rowKey:this.rowKey}),e=new l.default({store:t,table:this});return window.layout=e,{store:t,layout:e}}}}]);