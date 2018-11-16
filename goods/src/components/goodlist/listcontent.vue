<template>
  <div class="listcontent">
    <div class="listcontentbox" v-for="(listcontentarrdel, index) in listcontentarr" :key="index">
        <p>{{listcontentarrdel.listconname}}</p>
        <p>{{listcontentarrdel.listcontel}}</p>
        <p><span>[默认]</span>{{listcontentarrdel.listconadd}}</p>
        <router-link to="/goodsdec">
          <img :src="listcontentarrdel.listconedit"/>
        </router-link>
    </div>
  </div>
</template>

<script>
export default {
  components:{},
  props:{
     listcontentarr:Array
  },
  watch:{},
  computed:{},
  methods:{},
  created(){},
  mounted(){
  }

  }

</script>
<style lang="scss" scoped>
.listcontent{
  display:flex;
  flex-direction: column;
  box-sizing: border-box;

}
.listcontentbox{
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
.listcontent :nth-child(3) span{
  font-size:0.28rem;
  color:#df005e;
  line-height:0.42rem;
  margin-top:0.04rem;
}
.listcontent :nth-child(3){
  font-size:0.28rem;
  color:#696969;
  line-height:0.42rem;
  margin-top:0.04rem;
}
.listcontent :nth-child(4) img{
  width:0.45rem;
  height:0.45rem;
  position:absolute;
  top:0.19rem;
  right:0.4rem;
}
</style>
