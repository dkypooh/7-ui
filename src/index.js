import Table from 'sf-table/src/table.vue';
import TableColumn from 'sf-table/src/table-column';

const install = function(Vue, opts = {}) {

	if (install.installed) return;

	Vue.component(Table.name, Table);
	Vue.component(TableColumn.name, TableColumn);
}

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
	install(window.Vue);
};
