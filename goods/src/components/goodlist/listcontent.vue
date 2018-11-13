<template>
  <div class="listcontent" v-for="listcontentarrdel in listcontentarr" :key="listcontentarrdel.index">
      <p>{{listcontentarrdel.listconname}}</p>
      <p>{{listcontentarrdel.listcontel}}</p>
      <p>{{listcontentarrdel.listconadd}}</p>
      <img src="../../assets/images/listedit.png" alt=""/>
  </div>
</template>

<script>
export default {
  components:{},
  props:{
     listcontentarr:Array
  },
  data(){
    return {
      // listcontentarr:[
      //   {
      //     listconname:"杨昊",
      //     listcontel:15202926079,
      //     listconadd:"陕西省西安市雁塔区中兴产业园",
      //     listconedit:"../../assets/images/listedit.png"
      //   },
      //   {
      //     listconname:"Matail",
      //     listcontel:18066520611,
      //     listconadd:"陕西省西安市雁塔区唐延南路10号",
      //     listconedit:"../../assets/images/listedit.png"
      //   }
      // ]

    },

  },
  watch:{},
  computed:{},
  methods:{},
  created(){},
  mounted(){}
}
</script>
<style lang="scss" scoped>
.listcontent{
  height:1.81rem;
  border-top:1px solid #e7e7e7;
  border-bottom: 1px solid #e7e7e7;
  display:flex;
  flex-direction: column;
  box-sizing: border-box;
  padding-right:0.26rem;
  padding-left:0.26rem;
  padding-top:0.08rem;
  margin-top:0.05rem;
  position:relative;
  background:#ffffff;
}
.listcontent :nth-child(1){
  font-size:0.28rem;
  color:#181818;
  line-height:0.52rem;
}
.listcontent :nth-child(2){
  font-size:0.28rem;
  color:#111111;
  line-height:0.46rem;
}
.listcontent :nth-child(3){
  font-size:0.28rem;
  color:#696969;
  line-height:0.42rem;
  margin-top:0.04rem;
}
.listcontent :nth-child(4){
  width:0.45rem;
  height:0.45rem;
  position:absolute;
  top:0.19rem;
  right:0.4rem;
}
</style>
