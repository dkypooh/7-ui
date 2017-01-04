import Vue from 'vue';
import entry from './test.vue';
import App from './app.vue';

Vue.component('main-body', entry);


new Vue({ // eslint-disable-line
	render: h => h(App)
}).$mount('#app');
