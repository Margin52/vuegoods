<template>
  <div class="goodlist">
    <listheader></listheader>
    <listcontent></listcontent>
    <listfooter></listfooter>
  </div>
</template>
<script>
import listheader from '../components/goodlist/listheader'
import listcontent from '../components/goodlist/listcontent'
import listfooter from '../components/goodlist/listfooter'
import listedit from '@/assets/images/listedit.png'

export default {
  name:"goodlist",
  components:{
    listheader,
    listcontent,
    listfooter
  }
}
</script>
<style lang="scss">
body{
  background:#f6f6f6;
}
.goodlist{
  height:100%;
  display:flex;
  flex-direction: column;
  width:100%;
  justify-content: space-between;
}
.listcontent{
  width:100%;
  height:9.0rem;
  display:flex;
  flex-direction: column;
  flex:1;
  overflow-y: scroll;
}

</style>


