<template>
  <div class="deccontent">
    <div class="decpeople">
      <span>收货人</span>
      <input type="text" value="杨豪">
      <img src="../../assets/images/inspeople.png" alt="">
    </div>
    <div class="dectel">
      <span>手机号码</span>
      <input type="text" value="15202926079">
    </div>
    <div class="decadd">
      <span>所在地区</span>
      <input type="text" value="陕西省西安市雁塔区">
      <img src="../../assets/images/insarror.png" alt="">
    </div>
    <div class="decdel">
      <span>详细地址</span>
      <input type="text" value="中兴产业园">
    </div>
    <div class="decbut">
      <img src="../../assets/images/insbut.png" alt="">
      <span>设为默认</span>
    </div>
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
.deccontent{
  height:100%;
}
input{
  border:none;
  output:none;
}
.decpeople,.dectel,.decadd,.decdel,.decbut{
  width:100%;
  height:0.92rem;
  border-top:1px solid #e7e7e7;
  border-bottom:1px solid #e7e7e7;
  margin-top:0.1rem;
  box-sizing: border-box;
  padding-left:0.33rem;
  padding-right:0.33rem;
  background:#fff;
  display:flex;
  align-items: center;
}
span{
  display:inline-block;
  width:1.44rem;
}
input{
  width:5rem;
  font-size:0.26rem;
  color:#000000;
}
.decpeople img {
  display:inline-block;
  width:0.43rem;
  height:0.43rem;
}
.decadd img{
  display:inline-block;
  width:0.18rem;
  height:0.27rem;
  margin-right:0.1rem;
}
.decbut img{
  display:inline-block;
  width:0.42rem;
  height:0.42rem;
  margin-right:0.11rem;
}
</style>
