import navConfig from './nav.config.json';

const registerRoute = (config) => {
	let route = [{
		path: '/component',
		redirect: '/component/installation',
		component: require('./pages/component.vue'),
		children: []
	}];
	function addRoute(page) {
		const component = page.path === '/changelog' ? require('./pages/changelog.vue') : require(`./docs/zh-cn${page.path}.md`);
		let child = {
			path: page.path.slice(1),
			meta: {
				title: page.title || page.name,
				description: page.description
			},
			component: component.default || component
		};

		route[0].children.push(child);
	}
	config
		.map(nav => {
			if (nav.groups) {
				nav.groups.map(group => {
					group.list.map(page => {
						addRoute(page);
					});
				});
			} else if (nav.children) {
				nav.children.map(page => {
					addRoute(page);
				});
			} else {
				addRoute(nav);
			}
		});

	return { route, navs: config };
};


const route = registerRoute(navConfig);

route.route.push({
	path: '*',
	component: require('./docs/zh-cn/home.md')
});

export const navs = route.navs;
export default route.route;
