<template>
  <div class="goodlist">
    <listheader></listheader>
    <listcontent :listcontentarr="listcontentarr"></listcontent>
  </div>
</template>
<script>
import listheader from '../components/goodlist/listheader'
import listcontent from '../components/goodlist/listcontent'
export default {
  name:"goodlist",
  components:{
    listheader,
    listcontent
  },
  data(){
    return{
      listcontentarr:[
        {
          listconname:"杨昊",
          listcontel:15202926079,
          listconadd:"陕西省西安市雁塔区中兴产业园",
          listconedit:"../../assets/images/listedit.png"
        },
        {
          listconname:"Matail",
          listcontel:18066520611,
          listconadd:"陕西省西安市雁塔区唐延南路10号",
          listconedit:"../../assets/images/listedit.png"
        }
      ]
    }
  }
}
</script>
<style lang="scss">
body{
  background:#f6f6f6;
}
</style>


