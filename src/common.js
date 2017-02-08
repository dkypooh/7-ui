import Vue from 'vue';


import sfbutton from 'sf-button';
Vue.component('sf-button', sfbutton);


import sftablecolumn from 'sf-table/src/table-column';
Vue.component('sf-table-column', sftablecolumn);


import sftable from 'sf-table/src/table.vue';
Vue.component('sf-table', sftable);


import sfcliploader from 'sf-spinner/src/clipLoader/clipLoader';
Vue.component('sf-cliploader', sfcliploader);


import sfscaleloader from 'sf-spinner/src/scaleLoader/scaleLoader';
Vue.component('sf-scaleloader', sfscaleloader);


import sfriseloader from 'sf-spinner/src/riseLoader/riseLoader';
Vue.component('sf-riseloader', sfriseloader);


import sfsquareloader from 'sf-spinner/src/squareLoader/squareLoader';
Vue.component('sf-squareloader', sfsquareloader);


import sftoast from 'sf-toast/src/toast';
Vue.component('sf-toast', sftoast);


import sfprogressbar from 'sf-progressbar/src/progressbar';
Vue.component('sf-progressbar', sfprogressbar);


import sftooltips from 'sf-tooltips';
Vue.component('sf-tooltips', sftooltips);


import sfpagination from 'sf-pagination/src/pagination.vue';
Vue.component('sf-pagination', sfpagination);


if(window != undefined){
		window.sfToast = sftoast;
	}