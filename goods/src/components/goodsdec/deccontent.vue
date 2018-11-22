<template>
  <div class="deccontent">
    <div class="decpeople">
      <span>收货人</span>
      <input type="text" v-model="name">
      <img src="../../assets/images/inspeople.png" alt="">
    </div>
    <div class="dectel">
      <span>手机号码</span>
      <input type="text" v-model="phone">
    </div>
    <div class="decadd">
      <span>所在地区</span>
      <input type="text" value="陕西省西安市雁塔区">
      <img src="../../assets/images/insarror.png" alt="">
    </div>
    <div class="decdel">
      <span>详细地址</span>
      <input type="text" v-model="delarea">
    </div>
    <div class="decbut">
      <img v-show="isShow" @click="changeimg" src="../../assets/images/insbut.png" alt="">
      <img v-show="!isShow" @click="changeimg" src="../../assets/images/decbut.png" alt="">
      <span>设为默认</span>
    </div>
    <div class="decfooter">
    <router-link to="/">
      <p @click="setmsg">保存</p>
    </router-link>
  </div>
  </div>
</template>

<script type='text/ecmascript-6'>
  export default {
    data () {
      return {
        name:'',
        phone:'',
        delarea:'',
        id:'',
        isShow:true,
        isDefault:''
      }
    },
    props:{
      getId:String
    },
    mounted(){
      this.getID()
    },
    methods:{
      /**
       * 获取id
       */
      getID:function(){
        this.id = this.getId
        // console.log("我是getId",this.id)
        var data = JSON.parse(localStorage.getItem("goodsdata"))
        for(var item = 0,len = data.length; item < len; item++){
          // console.log(data[item]);
          if(data[item].recAddrId == this.id){
            var deldata = data[item]
            // console.log('这是获取到的数据',deldata)
            this.name = deldata.recName
            this.phone = deldata.recPhoneNo
            this.delarea = deldata.address
          }
        }
      },
      /**
       * 默认按钮
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
       * 修改之后保存联系人信息
       */
      setmsg:function(){
        var user = this.name
        var tel = this.phone
        var deladd = this.delarea
        var datas = JSON.parse(localStorage.getItem("goodsdata"))
        console.log(datas)
        if(datas){
          if(name && phone && delarea){
            if(!this.isDefault || this.isDefault === "1"){
              for(var index = 0,en = datas.length; index<en; index++){
                data[index].checkIsUsed = "0"
              }
              datas.push({
                'recName':user,
                'recPhoneNo':tel,
                'address':deladd,
                'checkIsUsed':this.isDefault
              })
              localStorage.setItem("goodsdata",JSON.stringify(datas))
              console.log(datas)
            }
          }
        }
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
.decfooter{
  width:100%;
  height:1.26rem;
  background:#fff;
  position:fixed;
  bottom:0px;
}
.decfooter p{
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
