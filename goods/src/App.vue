<template>
  <div class="app">
    <router-view></router-view>
  </div>
</template>

<script>
import goodsins from'./page/goodsins'
import Goodslist from'./page/Goodslist'
import goodsdec from'./page/goodsdec'

export default {
  name: 'App',
  components:{
    goodsins,
    Goodslist,
    goodsdec
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
