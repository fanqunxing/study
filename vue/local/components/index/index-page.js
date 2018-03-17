seajs.use("./components/index/index-template.css");
define(function(require, exports, module){
	var Vue = require("../../lib/vue");
	var banner = require("../banner/banner");

	Vue.component("index-page",{
		template:"<div><banner></banner></div>",
		components: {
            'child': banner,
        }
	})


	
});