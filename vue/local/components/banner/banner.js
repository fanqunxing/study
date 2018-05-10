seajs.use("./components/banner/banner-template.css")
define(function(require, exports, module){
	var Vue = require("../../lib/vue");

	Vue.component("banner",{
		template:"#slide-template",
		data:function(){
			return{
				mark: 0,
		      	imgArray: [
		        	'./components/banner/img/s-banner1.jpg',  
		        	'./components/banner/img/s-banner2.jpg',  
		        	'./components/banner/img/s-banner3.jpg',  
		        	'./components/banner/img/s-banner4.jpg',
		        	'./components/banner/img/s-banner5.jpg' 
		      	]
			}
		},
		methods:{
			autoPlay:function(){
				this.mark ++;
				if(this.mark === this.imgArray.length){
					this.mark = 0;
				}
			},
			play:function(){
				var _this = this;
				setInterval(function(){
					_this.autoPlay()
				}, 2500);
			},
			change:function(i){
				this.mark = i;
			}
		},
		created:function(){
			this.play();
		}
	});
	
	module.exports = {
		template:"<banner></banner>"
	}
});