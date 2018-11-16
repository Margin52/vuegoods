<template>
  <div class="inscontent">
    <div class="inspeople">
      <span>收货人</span>
      <input type="text" v-model="username">
      <img @click="getcon" src="../../assets/images/inspeople.png" alt="">
    </div>
    <div class="instel">
      <span>手机号码</span>
      <input type="text" v-model="phone">
    </div>
    <div class="insadd">
      <span>所在地区</span>
      <input type="text">
      <img src="../../assets/images/insarror.png" alt="">
    </div>
    <div class="insdel">
      <span>详细地址</span>
      <input type="text">
    </div>
    <div class="insbut">
      <img @click="changeimg" v-if="isShow" src="../../assets/images/insbut.png" alt="">
      <img @click="changeimg" v-if="!isShow" src="../../assets/images/decbut.png" alt="">
      <span>设为默认</span>
    </div>
  </div>
</template>

<script type='text/ecmascript-6'>
  export default {
    data () {
      return {
        isShow:false,
        username:'',
        phone:''
      }
    },
    methods:{
      changeimg:function(){
        this.isShow = !this.isShow
      },
      getcon:function(){
        var that = this
        leadeon.getContacts({
          debug: false,
          success: function(res) {
            that.username = res.userName //用户姓名
            that.phone = res.phoneNum //手机号
            console.log('************', res)
            console.log(that.username,that.phone)
          },
          error: function(res) {}
        })
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
.inspeople,.instel,.insadd,.insdel,.insbut{
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
.insbut img{
  display:inline-block;
  width:0.42rem;
  height:0.42rem;
  margin-right:0.11rem;
}
</style>
