<template>
	<div class="div">
		<div class="logo">
			<img class="logo-img" src="/static/img/bd_logo1.png">
		</div>
		<div class="search clearfix">
			<div class="ipt floatLeft">
				<input v-focus v-model="search" v-on:input="getSearchItem">
				<span class="soutu-btn"></span>
			</div>
			<div class="btn floatLeft">
				<span class="search-btn" @click="getSearchItem">{{msg}}</span>
			</div>
			<Item v-show="isSearchShow" @ievent = "ievent" v-bind:items="searchItem"/>
		</div>
		
	</div>
</template>
<script>
import Item from "./Item"

export default{
	name:"centers",
	data(){
		return {
			msg:"百度一下",
			search:"",
			searchItem:[],
			isSearchShow:false
		}
	},
	methods:{
		getSearchItem(){
			var _this = this;
			$.ajax({
				url:"https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su",
				dataType:"jsonp",
				jsonp: "cb",
				data:{
					wd:_this.search
				},
				success:function(json){
					var data = json.s;
					_this.searchItem = data;
					if(_this.searchItem.length > 0){
						_this.isSearchShow = true;
					}
					
				}
			})
		},
		ievent(data){
			this.search = data;
			this.isSearchShow = false;
		}
	},
	components:{
		Item
	},
	directives: { 
	  focus: {  
	    // 指令的定义  
	    inserted: function (el) {  
	      el.focus()  
	    }  
	  }  
	}
}
</script>
<style scoped>
.logo{
	text-align: center;
}
.logo-img{
	width: 270px;
	height: 129px;
}
.ipt{
	width: 540px;
	height: 36px;
	border: solid 1px #4791ff;
	position: relative;
}
input{
	width: 500px;
	height: 22px;
    font: 16px/18px arial;
    line-height: 22px;
    margin: 6px 0 0 7px;
    padding: 0;
    background: transparent;
    border: 0;
    outline: 0;
    -webkit-appearance: none;
}
.soutu-btn{
	position: absolute;
	right: 10px;
    top: 50%;
    margin-top: -8px;
	display: block;
	background: url("/static/img/camera_new_5606e8f.png");
	width: 18px;
	height: 16px;
}
.search{
	margin: 22px auto 0;
    width: 641px;
    text-align: left;
    position: relative;
}
.search-btn{
	display: block;
    width: 100px;
    height: 35px;
    color: #fff;
    font-size: 15px;
    letter-spacing: 1px;
    background: #3385ff;
    border-bottom: 1px solid #2d78f4;
    outline: medium;
    -webkit-appearance: none;
    -webkit-border-radius: 0;
    text-align: center;
    line-height: 35px;
    cursor: pointer;
}
</style>