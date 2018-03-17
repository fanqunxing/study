define(function(require, exports, module){
	var Vue = require("../lib/vue");
	var VueRouter = require("../lib/vue-router");
	var indexPage = require("../components/index/index-page");
	

	Vue.use(VueRouter);

	var Foo = { template: '<div>foo</div>' };
	var Bar = { template: '<div>bar</div>' };

	var routes = [
		{
			path: '/a', 
			name:"Foo",
	  		component: Foo 
	  	},
	  	{
	  		path: '/b', 
	  		name:"Bar",
	  		component: Bar 
	  	}
	];

	module.exports = new VueRouter({
		routes:routes
	});

});