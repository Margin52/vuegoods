<template>
  <div class="app">
    <Goodslist></Goodslist>
  </div>
</template>

<script>
import Goodslist from'./page/Goodslist'
export default {
  name: 'App',
  components:{
    Goodslist
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
