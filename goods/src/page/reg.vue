<template>
  <div class="reg">
    <img class="regbg" src="../assets/images/regbg.png" alt="">
    <div class="regbox"></div>
    <div class="regdiv">
      <div class="reg-user">
        <span>用户名</span>
        <input type="text">
      </div>
      <div class="reg-password">
        <span>密码</span>
        <input type="text">
      </div>
      <router-link to="/Goodslist">
        <div class="reg-reg">
          <p class="reg-reg-p">登陆</p>
        </div>
      </router-link>
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
input{
  border:none;
  output:none;
}
.reg{
  position:relative;
}
.regbg{
  display:inline-block;
  width:127%;
  height:100%;
}
.regdiv{
  position:absolute;
  top:20%;
  left:15%;
  width:70%;
  height:20%;
}
.regbox{
  position:absolute;
  top:20%;
  left:15%;
  width:70%;
  height:20%;
  background:#687484;
  opacity: .5;
  border-radius:0.1rem;
}
.reg-user,.reg-password,.reg-reg{
  width:100%;
  height:20%;
  display:flex;
  align-items: center;
  margin-top:5%;
  box-sizing: border-box;
  padding-left:5%;
}
.reg-user span,.reg-password span{
  display:inline-block;
  width:20%;
  height:100%;
  margin-right:5%;
  font-size:0.25rem;
  line-height:200%;
}
.reg-user input,.reg-password input{
  display:inline-block;
  width:65%;
  height:100%;
  background:#687484;
  // opacity: .5;
}
.reg-reg-p{
  width:20%;
  height:100%;
  font-size:0.25rem;
  margin:0 auto;
  text-align:center;
  line-height:200%;
  background:#687484;
  border-radius: 0.1rem;
}

</style>
