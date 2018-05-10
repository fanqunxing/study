<template>
	<div class="search-div">
		<ul>
			<li  class="item" v-for="item in items" @click="iclick(item)">{{item}}</li>
		</ul>
	</div>
</template>
<script>
export default{
	name:"Item",
	props: ['items'],
	data(){
		return {}
	},
	methods:{
		iclick(item){
			this.$emit('ievent',item);
		}
	}
}
</script>
<style scoped>
	.search-div{
		position: absolute;
		width: 540px;
		top: 36px;

	}
	ul{
		border: solid 1px #ccc;
	}
	.item{
		width: 540px;
		line-height: 25px;
		padding-left: 10px;
		cursor: pointer;

	}
	.item:hover{
		background: #eee;
	}
</style>