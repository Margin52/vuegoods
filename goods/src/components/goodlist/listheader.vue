<template>
  <div class="listheader">
      <img src="../../assets/images/listback.png" alt=""/>
      <span>关闭</span>
      <p>收货地址管理</p>
  </div>
</template>

<script>
export default {
  name:"listheader",
  components:{},
  props:{},
  data(){
    return {
    }
  },
  watch:{},
  computed:{},
  methods:{},
  created(){},
  mounted(){}
}
</script>
<style lang="scss">
.listheader{
  width:100%;
  display:flex;
  align-items:center;
  height:1.14rem;
  box-sizing: border-box;
  padding:0 0.26rem;
  background:#0085cf;
}
.listheader img{
  width:0.5rem;
  height:0.5rem;
  margin-right:0.2rem;
}
.listheader span{
  font-size:0.28rem;
  color:#ffffff;
  opacity: .9;
  margin-right:0.47rem;
  margin-top:0.04rem;
}
.listheader p{
  font-size:0.34rem;
  color:#ffffff;
  opacity: .9;
}
</style>
