<template>
  <div id="app">
    <MyHead /> 
    <Center />
  </div>
</template>

<script>
import MyHead from "./components/Title"
import Center from "./components/Center"
 
export default {
  name: 'App',
  components:{
    MyHead,
    Center
  }
}
</script>

<style>
#app {
  /*font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;*/
}
</style>
