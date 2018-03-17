seajs.use("./components/table/table.css");
define(function(require, exports, module){
	var Vue = require("../../lib/vue");
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
	 			list:[
	 				{
	 					name:"曹操",
	 					score:"89"
	 				},
	 				{
	 					name:"孙权",
	 					score:"98"
	 				},
	 				{
	 					name:"刘备",
	 					score:"65"
	 				}
	 			]
	 		}
	 	},
	 	template:template,
	 	methods:{
	 		deletes:function(index){
	 			this.list.splice(index,1);
	 		}
	 	},
	 	mounted:function(){
	 		this.list = [
	 			{
 					name:"曹丕",
 					score:"90"
 				},
 				{
 					name:"孙皓",
 					score:"99"
 				},
 				{
 					name:"刘禅",
 					score:"66"
 				}
	 		]
	 	}
	 });

	 module.exports = {
	 	template:'<table-template></table-template>'
	 }
});