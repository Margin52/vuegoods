<template>
  <div class="goodsdec">
    <decheader></decheader>
    <deccontent></deccontent>
    <decfooter></decfooter>
  </div>
</template>

<script type='text/ecmascript-6'>
import decheader from "../components/goodsdec/decheader"
import deccontent from "../components/goodsdec/deccontent"
import decfooter from "../components/goodsdec/decfooter"
  export default {
    components:{
      decheader,
      deccontent,
      decfooter
    }

  }
</script>

<style lang='scss' scoped type='text/css'>
.goodsdec{
  display:flex;
  flex-direction: column;
  justify-content:space-between;
  width:100%;
  height:100%;
  background:#f6f6f6;
}
.decfooter{
  position:fixed;
  bottom:0rem;
}

</style>
