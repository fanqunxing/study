seajs.use("./components/index/banner-template.css");
define(function(require, exports, module){
	var Vue = require("../../lib/vue");
	var banner = require("../banner/banner");

	var a = Vue.component("index-page",{
		template:"<div><banner></banner></div>",
		components: {
            'child': banner,
        }
	});
	module.exports = {
		template:"<div><banner></banner></div>"
	}


	
});