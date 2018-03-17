seajs.use("./components/nav/nav-template.css");
define(function(require, exports, module) {
	var Vue = require("../../lib/vue");

	var template = '\
		<div class = "navigation-bar">\
			<ul class = "clearfix">\
				<li v-for="(item, index) in itemList">\
					<router-link v-bind:to="item.url" :index="index">{{item.name}}\
					</router-link>\
				</li>\
			</ul>\
		</div>';


	Vue.component("nav-template",{
		template:template,
		data:function(){
			return {
				itemList:[{
					url:"/a",
					name:"首页导航"
				},{
					url:"/b",
					name:"文章内容"
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


