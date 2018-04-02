seajs.use("./components/nav/nav-template.css");
define(function(require, exports, module) {
	var Vue = require("../../lib/vue");

	Vue.component("nav-template",{
		template:"#navigation-template",
		data:function(){
			return {
				itemList:[{
					url:"/a",
					name:"轮播图"
				},{
					url:"/b",
					name:"表格"
				},{
					url:"/c",
					name:"自由论坛"
				},{
					url:"/d",
					name:"关于我们"
				},{
					url:"/e",
					name:"关于站长"
				},{
					url:"/f",
					name:"留言板"
				}]
			}
		},
		methods:{
		}
	});
});


