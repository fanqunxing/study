define(function(require, exports, module){
	var Vue = require("../lib/vue");
	var VueRouter = require("../lib/vue-router");
	var bannerPage = require("../components/index/banner-page");
	var table = require("../components/table/table");
	
	Vue.use(VueRouter);

	var Foo = { template: '<div>foo</div>' };
	var Bar = { template: '<div>bar</div>' };

	var routes = [
		{
			path: '/a', 
			name:"bannerPage",
	  		component: bannerPage 
	  	},
	  	{
	  		path: '/b', 
	  		name:"table",
	  		component: table 
	  	},
	  	{
	  		path: '/c', 
	  		name:"Foo",
	  		component:Foo
	  	}
	];

	module.exports = new VueRouter({
		routes:routes
	});

});