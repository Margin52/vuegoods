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
      <input type="text" v-model="area">
      <img src="../../assets/images/insarror.png" alt="">
    </div>
    <div class="insdel">
      <span>详细地址</span>
      <input type="text" v-model="delarea">
    </div>
    <div class="insbut">
      <img @click="changeimg" v-if="isShow" src="../../assets/images/insbut.png" alt="">
      <img @click="changeimg" v-if="!isShow" src="../../assets/images/decbut.png" alt="">
      <span>设为默认</span>
    </div>
    <router-link tag="div" class="insfooter" to="/">
      <p @click="savemsg">保存</p>
    </router-link>
  </div>
</template>

<script>
import axios from 'axios'
  export default {
    data () {
      return {
        isShow:true,
        isDefault:"",
        username:'',
        phone:'',
        area:'',
        delarea:''
      }
    },
    mounted(){
    },
    methods:{
      /**
       * 默认按钮点击
       */
      changeimg:function(){
        this.isShow = !this.isShow
        /**
         * 给按钮添加状态
         * isDefault在保存用户信息的时候会用到
         */
        if(this.isShow){
        /**
         * 未设置默认
         */
          this.isDefault = "0"
        }else{
          /**
           * 已设置默认
           */
          this.isDefault = "1"
        }
        console.log(this.isDefault)
      },
      /**
       * 客户端能力调用
       */
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
      },
      /**
       * 保存新建联系人信息
       */
      savemsg:function(){
        var user = this.username
        var tel = this.phone
        var add = this.area
        var deladd = this.delarea
        var data = JSON.parse(localStorage.getItem("goodsdata"))
        // console.log(data)
        if(data){
          if(user && tel && add && deladd){
            if(!this.isDefault || this.isDefault === "0"){
              /**
               * 未设置默认状态
               */
              data.push({
                'checkIsUsed':this.isDefault,
                'recName':user,
                'recPhoneNo':tel,
                'address':deladd
              })
              localStorage.setItem("goodsdata",JSON.stringify(data))
              alert("您已保存成功")
            }else{
              /**
               * 已设置默认状态
               * 将其他的默认状态重置
               */
              data.forEach((item,index) => {
                data[index].checkIsUsed = '0'
              });
              data.push({
                'checkIsUsed':this.isDefault,
                'recName':user,
                'recPhoneNo':tel,
                'address':deladd
              })
              data.reverse()
              localStorage.setItem("goodsdata",JSON.stringify(data))
              // console.log(localStorage.getItem("goodsdata"))
              alert("您已保存成功")

            }
          }
        }
      },
      testf:function(){
        console.log("testf")
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
.insfooter{
  position:fixed;
  bottom:0px;
  width:100%;
  height:1.26rem;
  background:#fff;
}
.insfooter p{
  width:5.88rem;
  height:0.83rem;
  font-size:0.27rem;
  color:#fff;
  background:#0085cf;
  border-radius:0.07rem;
  margin-left:0.3rem;
  margin-top:0.2rem;
  line-height:0.83rem;
  text-align: center;

}
</style>
