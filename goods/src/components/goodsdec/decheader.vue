<template>
  <div class="decheader">
    <router-link to="/">
      <img src="../../assets/images/listback.png" alt=""/>
    </router-link>
    <span>关闭</span>
    <p>修改收货人地址</p>
  </div>
</template>

<script type='text/ecmascript-6'>
  export default {
    data () {
      return {
      }
    }
  }
</script>

<style lang='scss' scoped='' type='text/css'>

.decheader{
  width:100%;
  display:flex;
  align-items:center;
  height:1.14rem;
  box-sizing: border-box;
  padding:0 0.26rem;
  background:#0085cf;
}
.decheader img{
  width:0.5rem;
  height:0.5rem;
  margin-right:0.2rem;
}
.decheader span{
  font-size:0.28rem;
  color:#ffffff;
  opacity: .9;
  margin-right:0.50rem;
  margin-top:0.04rem;
}
.decheader p{
  font-size:0.34rem;
  color:#ffffff;
  opacity: .9;
}
</style>
