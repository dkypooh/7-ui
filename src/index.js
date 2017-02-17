import sfbutton from 'sf-button';
import sftablecolumn from 'sf-table/src/table-column';
import sftable from 'sf-table/src/table.vue';
import sfcliploader from 'sf-spinner/src/clipLoader/clipLoader';
import sfscaleloader from 'sf-spinner/src/scaleLoader/scaleLoader';
import sfriseloader from 'sf-spinner/src/riseLoader/riseLoader';
import sfsquareloader from 'sf-spinner/src/squareLoader/squareLoader';
import sftoast from 'sf-toast/src/toast';
import sfprogressbar from 'sf-progressbar/src/progressbar';
import sftooltips from 'sf-tooltips';
import sfpagination from 'sf-pagination/src/pagination.vue';
import sfselect from 'sf-select/src/select.vue';
import sfoption from 'sf-select/src/option.vue';
import sfcolorpicker from 'sf-colorpicker/src/colorpicker';
import sfdnd from 'sf-dnd/src/draganddrop';
import sfdraggable from 'sf-dnd/src/draggable/draggable';
import sftreeselect from 'sf-tree-select/src/treeSelect';

const install = function(Vue, opts = {}) {

	if (install.installed) return;



	Vue.component('sf-button', sfbutton);



	Vue.component('sf-table-column', sftablecolumn);



	Vue.component('sf-table', sftable);



	Vue.component('sf-cliploader', sfcliploader);



	Vue.component('sf-scaleloader', sfscaleloader);



	Vue.component('sf-riseloader', sfriseloader);



	Vue.component('sf-squareloader', sfsquareloader);



	Vue.component('sf-toast', sftoast);



	Vue.component('sf-progressbar', sfprogressbar);



	Vue.component('sf-tooltips', sftooltips);



	Vue.component('sf-pagination', sfpagination);



	Vue.component('sf-select', sfselect);



	Vue.component('sf-option', sfoption);



	Vue.component('sf-colorpicker', sfcolorpicker);



	Vue.component('sf-dnd', sfdnd);



	Vue.component('sf-draggable', sfdraggable);



	Vue.component('sf-tree-select', sftreeselect);


	if(window != undefined){
		window.sfToast = sftoast;
	}
}

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
	install(window.Vue);
};