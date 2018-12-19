<template>
  <div class="listcontent">
    <div>
      <div class="listcontentbox" v-for="(goodsdatadel, index) in goodsdata" :data-key="index" :key="index">
        <p>{{goodsdatadel.recName}}</p>
        <p>{{goodsdatadel.recPhoneNo}}</p>
        <p><span v-if="goodsdatadel.checkIsUsed==='1'">[默认]</span>{{goodsdatadel.address}}</p>
        <router-link to="goodsdec" >
          <img @click="routerTo" :dataid="goodsdatadel.recAddrId" src="../../assets/images/listedit.png"/>
        </router-link>
      </div>
    </div>
  </div>

</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      isShow:false,
      islook:'',
      goodsdata:[],
      ename:'',
      ephone:'',
      eaddress:'',
      id:'',
    }
  },
  mounted(){
    this.isNull()
  },
  methods:{
    /**
     * 点击默认按钮
     */
    changeimg:function(){
      this.isShow = !this.isShow
    },
    /**
     * 判断从本地localStorage获取到的字符串是否为空
     */
    isNull:function(){
      var strings = '';
      strings = localStorage.getItem("goodsdata")
        if (!!strings)
        {
          var datas = JSON.parse(strings)
          this.goodsdata = datas
        }else{
          this.moockdata()
        }
    },
    /**
     * 从mock请求数据
     */
    moockdata:function(){
      axios.post('https://www.easy-mock.com/mock/5bf26de2a78cb61ecbaed73a/example/example')
        .then ((response)=>{
          /**
           * 把mock的数据保存到localStorage中
          */
          /**
            * JSON.stringify(response.data.rspBody.addList)的作用是把从mock的数据从json转换为string，因为localStorage只能存储string
          */
          localStorage.setItem("goodsdata",JSON.stringify(response.data.rspBody.addList))
          /**
           *取出localStorage中缓存的数据
          */
          var data = localStorage.getItem("goodsdata")
          // console.log(data)
          /**
           * JSON.parse的作用是将string转换为json
           */
          var datas = JSON.parse(localStorage.getItem("goodsdata"))
          // console.log(datas)
          this.goodsdata = datas
          /**
           * 把response写成函数的时候，this指向不知道指向哪里，下面的console打印不出来，然后改成箭头函数之后可以了
           */
          // console.log(this.goodsdata)
        })
        .catch(function(error){
          return error
        })
      },
      /**
       * 获取一组dom数据的id，提前在img中绑定一组数据的id
       */
      routerTo:function(e){
        /**
         * getAttribute() 方法返回指定属性名的属性值。
         */
        let id = e.target.getAttribute('dataid')
        console.log(id)
        this.$router.push({
          name:'goodsdec',
          params:{
            page:'1',
            code:'8989',
            getId:id
          }
        })
      }
  },
  watch: {
    'goodsdata': function (old, nVal) {
      console.log('***', old.length, nVal.length)
    }
  }

  }

</script>
<style lang="scss" scoped>
.listcontent{
  display:flex;
  flex-direction: column;
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
