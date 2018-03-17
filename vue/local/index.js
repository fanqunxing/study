define(function(require, exports, module) {
	var Vue = require("Vue");
	var VueRouter = require("Vue-router");
	var Nav = require("./components/nav/nav");
	var indexRouter = require("./router/indexRouter");
	Vue.use(VueRouter);

	
	
	new Vue({
		// el:
		router:indexRouter
	}).$mount("#app");


});