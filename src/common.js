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


import sfcheckboxgroup from 'sf-form/src/components/checkbox-group.vue';
Vue.component('sf-checkbox-group', sfcheckboxgroup);


import sfinput from 'sf-form/src/components/input.vue';
Vue.component('sf-input', sfinput);


import sfcheckbox from 'sf-form/src/components/checkbox.vue';
Vue.component('sf-checkbox', sfcheckbox);


import sfradio from 'sf-form/src/components/radio.vue';
Vue.component('sf-radio', sfradio);


import sfradiogroup from 'sf-form/src/components/radio-group.vue';
Vue.component('sf-radio-group', sfradiogroup);


import sfswitch from 'sf-form/src/components/switch.vue';
Vue.component('sf-switch', sfswitch);


import sfform from 'sf-form/src/components/form.vue';
Vue.component('sf-form', sfform);


import sfformitem from 'sf-form/src/components/form-item';
Vue.component('sf-form-item', sfformitem);


import sftoast from 'sf-toast/src/toast';
Vue.component('sf-toast', sftoast);


import sfprogressbar from 'sf-progressbar/src/progressbar';
Vue.component('sf-progressbar', sfprogressbar);


import sftooltips from 'sf-tooltips';
Vue.component('sf-tooltips', sftooltips);


import sfpagination from 'sf-pagination/src/pagination.vue';
Vue.component('sf-pagination', sfpagination);


import sfselect from 'sf-select/src/select.vue';
Vue.component('sf-select', sfselect);


import sfoption from 'sf-select/src/option.vue';
Vue.component('sf-option', sfoption);


import sfcolorpicker from 'sf-colorpicker/src/colorpicker';
Vue.component('sf-colorpicker', sfcolorpicker);


import sfdnd from 'sf-dnd/src/draganddrop';
Vue.component('sf-dnd', sfdnd);


import sfdraggable from 'sf-dnd/src/draggable/draggable';
Vue.component('sf-draggable', sfdraggable);

import dragresize from 'sf-dnd/src/dragresize/dragresize';
 Vue.directive('dragresize', dragresize)


import sftreeselect from 'sf-tree-select/src/treeSelect';
Vue.component('sf-tree-select', sftreeselect);


import sfpicviewer from 'sf-picviewer/src/picviewer';
Vue.component('sf-picviewer', sfpicviewer);


if(window != undefined){
		window.sfToast = sftoast;
	}