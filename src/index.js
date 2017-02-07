import sfButton from 'sf-button';
import Table from 'sf-table/src/table.vue';
import TableColumn from 'sf-table/src/table-column';
import ClipLoader from 'sf-spinner/src/clipLoader/clipLoader';
import ScaleLoader from 'sf-spinner/src/scaleLoader/scaleLoader';
import RiseLoader from 'sf-spinner/src/riseLoader/riseLoader';
import SquareLoader from 'sf-spinner/src/squareLoader/squareLoader'


const install = function(Vue, opts = {}) {

	if (install.installed) return;


	Vue.component('sf-button', sfButton);
	Vue.component('sf-table', Table);
	Vue.component('sf-table-column', TableColumn);
	Vue.component('sf-cliploader', ClipLoader);
	Vue.component('sf-scaleloader', ScaleLoader);
	Vue.component('sf-riseloader', RiseLoader);
	Vue.component('sf-squareloader', SquareLoader);
}

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
	install(window.Vue);
};