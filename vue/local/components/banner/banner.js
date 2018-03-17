seajs.use("./components/banner/banner-template.css")
define(function(require, exports, module){
	var Vue = require("../../lib/vue");

	var template = '\
		<div class="slide">\
			<div class="slideshow">\
				<transition-group tag="ul" name="image">\
					<li v-for="(img, index) in imgArray" v-show="index===mark" :key="index">\
						<a href="#">\
							<img :src="img">\
						</a>\
					</li>\
				</transition-group>\
			</div>\
			<div class="bar">\
				<span v-for="(item, index) in imgArray"\
					@click="change(index)"\
				 	:class="{\'active\':index===mark}" :key="index"></span>\
			</div>\
		</div>';

	/*var banner = Vue.extend({
        template:template,
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
    });*/
	Vue.component("banner",{
		template:template,
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

	/*module.exports = {
		template:banner
	}*/



});