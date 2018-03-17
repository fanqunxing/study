define(function(require, exports, module) {
	var Vue = require("Vue");
	var VueRouter = require("Vue-router");
	var Nav = require("./components/nav/nav");
	var indexRouter = require("./router/indexRouter");
	var banner = require("./components/banner/banner");
	Vue.use(VueRouter);


	/*var Foo = { template: '<div>foo</div>' };
	var Bar = { template: '<div>bar</div>' };

	var routes = [
	  { path: '/foo', component: Foo },
	  { path: '/bar', component: Bar }
	];

	var router = new VueRouter({
	  routes:routes
	});*/
	
	new Vue({
		// el:
		router:indexRouter
	}).$mount("#app");


});