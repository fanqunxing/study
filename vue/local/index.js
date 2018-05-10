define(function(require, exports, module) {
	var Vue = require("Vue");
	var VueRouter = require("Vue-router");
	var Nav = require("./components/nav/nav");
	var indexRouter = require("./router/indexRouter");
	var $ = require("./lib/jquery");

	Vue.use(VueRouter);
	
	new Vue({
		router:indexRouter
	}).$mount("#app");

	$.ajax({
		url:"https://baike.so.com/Asyncdata/entryStat"
	})

});