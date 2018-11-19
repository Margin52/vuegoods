<template>
  <div class="goodsins">
    <insheader></insheader>
    <inscontent></inscontent>
    <insfooter></insfooter>
  </div>
</template>

<script type='text/ecmascript-6'>
import insheader from "../components/goodsins/insheader"
import inscontent from "../components/goodsins/inscontent"
import insfooter from "../components/goodsins/insfooter"
import axios from 'axios'
  export default {
    components:{
      insheader,
      inscontent,
      insfooter
    }

  }
</script>

<style lang='scss' scoped type='text/css'>
.goodsins{
  display:flex;
  flex-direction: column;
  justify-content:space-between;
  width:100%;
  height:100%;
  background:#f6f6f6;
}
.insfooter{
  position:fixed;
  bottom:0rem;
}

</style>
