<template>
	<div class="div">
		<ul class="clearfix list">
			<li class="floatLeft item" v-for = "item in list"><a class="li-a" href="">{{item.name}}</a></li>
		</ul>
	</div>
</template>
<script>
	export default{
		name:"titles",
		data(){
			return {
				list:[
					{name:"新闻"},
					{name:"hao123"},
					{name:"地图"},
					{name:"视频"},
					{name:"贴吧"},
					{name:"学术"},
					{name:"登录"},
					{name:"设置"},
				]
			}
		}
	}
</script>
<style scoped>
.div{
	height: 50px;
}
.item .li-a{
	color: #333;
	font-weight: 700;
	line-height: 24px;
	margin-left: 20px;
	font-size: 13px;
	text-decoration: underline;
}
.item .li-a:hover{
	color: blue;
}
.list{
	z-index: 2;
    color: #fff;
    position: absolute;
    right: 0;
    top: 0;
    margin: 19px 0 5px;
    padding: 0 96px 0 0;
}
</style>