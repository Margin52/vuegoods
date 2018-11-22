<template>
  <div class="goodsdec">
    <decheader></decheader>
    <deccontent :getId="getId"></deccontent>
  </div>
</template>

<script type='text/ecmascript-6'>
import decheader from "../components/goodsdec/decheader"
import deccontent from "../components/goodsdec/deccontent"
  export default {
    data(){
      return{
        page:'',
        code:'',
        getId:''
      }
    },
    components:{
      decheader,
      deccontent
    },
    created(){
      this.getID()
    },
    methods:{
      getID :function(){
        /**
         * page和code是测试，getId是需要传送的值
         */
        // this.page = this.$route.params.page
        // this.code = this.$route.params.code
        this.getId = this.$route.params.getId

        // console.log('page',this.page)
        // console.log('code',this.code)
        console.log(this.getId)

      }
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
