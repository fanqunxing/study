seajs.use("./components/table/table.css");
define(function(require, exports, module){
	var Vue = require("../../lib/vue");
	var $ = require("../../lib/jquery");
	var template = '\
		<table class="table">\
	    	<thead>\
				<tr>\
					<th>姓名</th>\
					<th>成绩</th>\
					<th>删除</th>\
				</tr>\
	    	</thead>\
	    	<tbody>\
				<tr v-for="(item, index) in list">\
					<td>{{item.name}}</td>\
					<td>{{item.score}}</td>\
					<td @click="deletes(index)">删除</td>\
				</tr>\
	    	</tbody>\
	    </table>';

	 Vue.component("table-template",{
	 	data:function(){
	 		return {
	 			list:[]
	 		}
	 	},
	 	template:template,
	 	methods:{
	 		deletes:function(index){
	 			this.list.splice(index,1);
	 		}
	 	},
	 	mounted:function(){
	 		var _this = this;
	 		$.ajax({
	 			url:"/code/vue/study/vue/local/data/table.json",
	 			type:"get",
	 			dataType:"text",
	 			success:function(json){
	 				_this.list = JSON.parse(json).data;
	 			}
	 		});
	 		
	 	}
	 });

	 module.exports = {
	 	template:'<table-template></table-template>'
	 }
});