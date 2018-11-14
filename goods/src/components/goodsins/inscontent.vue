<template>
  <div class="inscontent">
    <div class="inspeople">
      <input type="text" placeholder="收货人">
      <img src="../../assets/images/inspeople.png" alt="">
    </div>
    <div class="instel">
      <input type="text" placeholder="手机号码">
    </div>
    <div class="insadd">
      <input type="text" placeholder="所在地区">
      <img src="../../assets/images/insarror.png" alt="">
    </div>
    <div class="insdel">
      <input type="text" placeholder="详细地址">
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
.inscontent{
  height:100%;
}
input{
  border:none;
  output:none;
}
.inspeople,.instel,.insadd,.insdel{
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
  justify-content:space-between;
  align-items: center;
}
input{
  width:5rem;
  font-size:0.27rem;
  color:#969696;
}
.inspeople img {
  display:inline-block;
  width:0.43rem;
  height:0.43rem;
}
.insadd img{
  display:inline-block;
  width:0.18rem;
  height:0.27rem;
  margin-right:0.1rem;
}
</style>
