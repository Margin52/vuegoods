<template>
  <div class="myCheck">
    <div class="ch-mon">
      <div class="ch-mon-box" ref="chbox" @click="decbor" data-id="1">
        <span class="ch-mon-b-span" ref="titone">5月</span>
        <img v-if="one" src="../assets/images/myCheck/ch-hea-bor.png" alt="" class="ch-mon-b-img">
      </div>
      <div class="ch-mon-box" ref="chbox" @click="decbor" data-id="2">
        <span class="ch-mon-b-span" ref="tittwo">6月</span>
        <img v-if="two" src="../assets/images/myCheck/ch-hea-bor.png" alt="" class="ch-mon-b-img">
      </div>
      <div class="ch-mon-box" ref="chbox" @click="decbor" data-id="3">
        <span class="ch-mon-b-span" ref="titthree">7月</span>
        <img v-if="three" src="../assets/images/myCheck/ch-hea-bor.png" alt="" class="ch-mon-b-img">
      </div>
      <div class="ch-mon-box" ref="chbox" @click="decbor" data-id="4">
        <span class="ch-mon-b-span" ref="titfour">8月</span>
        <img v-if="four" src="../assets/images/myCheck/ch-hea-bor.png" alt="" class="ch-mon-b-img">
      </div>
      <div class="ch-mon-box" ref="chbox" @click="decbor" data-id="5">
        <span class="ch-mon-b-span" ref="titfive">9月</span>
        <img v-if="five" src="../assets/images/myCheck/ch-hea-bor.png" alt="" class="ch-mon-b-img">
      </div>
      <div class="ch-mon-box" ref="chbox" @click="decbor" data-id="6">
        <span class="ch-mon-b-span" ref="titsix">10月</span>
        <img v-if="six" src="../assets/images/myCheck/ch-hea-bor.png" alt="" class="ch-mon-b-img">
      </div>
    </div>
    <div class="ch-tit">
      <p class="ch-tit-p-one"><span>10</span>月比例分析图</p>
      <p class="ch-tit-p-two"><span>10</span>月1日-<span>11</span>月2日</p>
    </div>
    <div class="ch-chart">
      <canvas canvas-id="ringCanvas"></canvas>
    </div>
  </div>
</template>

<script>
// 路径是wxCharts文件相对于本文件的相对路径
// import wxCharts from '../../utils/wxcharts-min.js'
import wxcharts from '../../static/utils/wxcharts-min.js'
// import { fetch, port, checkHuModal } from '../../utils/index'
export default {
  data () {
    return{
      one : '',
      two : '',
      three : '',
      four : '',
      five : '',
      six : ''
    }
  },
  created(){

  },
  mounted(){
    this.chchart()
  },
  methods:{
    decbor:function(e){
      // console.log("this",this)
      let id = e.currentTarget.dataset.id
      // const self = this
      // console.log(e)
      switch (id) {
        case '1':
          this.one = true
          this.two = false
          this.three = false
          this.four =  false
          this.five = false
          this.six = false
          // this.$refs.titone.style.fontSize = "20px"
          // this.$refs.titone.style.fontWeight = "bold"
        break;
        case '2':
          this.one = false
          this.two = true
          this.three = false
          this.four =  false
          this.five = false
          this.six = false
        break;
        case '3':
          this.one = false
          this.two = false
          this.three = true
          this.four =  false
          this.five = false
          this.six = false
        break;
        case '4':
          this.one = false
          this.two = false
          this.three = false
          this.four =  true
          this.five = false
          this.six = false
        break;
        case '5':
          this.one = false
          this.two = false
          this.three = false
          this.four =  false
          this.five = true
          this.six = false
        break;
        case '6':
          this.one = false
          this.two = false
          this.three = false
          this.four =  false
          this.five = false
          this.six = true
        break;
      }
    },
    chchart:function(){
      new wxcharts({
        canvasId: 'ringCanvas',
        type: 'ring',
        animation:'true',
        legend:'true',
        dataPointShape :'true',
        title:'',
        titlename:'账单总额',
        titlefontSize:27,
        titlecolor:'#666666',
        subtitle:'',
        subtitlename:'￥50.00',
        subtitlefontSize:27,
        subtitlecolor:'#01a4ff',
        series: [{
            name: '固定费用 150元',
            data: 150,
        }, {
            name: '语音通信费 50元',
            data: 50,
        }, {
            name: '上网费 60元',
            data: 60,
        }, {
            name: '短彩信 10元',
            data: 10,
        },{
            name: '增值业务费 20元',
            data: 20,
        }, {
            name: '代收费 9元',
            data: 9,
        }, {
            name: '其他费用 11元',
            data: 11,
        }, {
            name: '系统费用减免  -10元',
            data: -10,
        },{
            name: '本月通信费优惠 -60元',
            data: -60,
        }, {
            name: '单位已代付 -140元',
            data: -140,
        }, {
            name: '本地退费  -20元',
            data: -10,
        }, {
            name: '他人代付  -20元',
            data: -20,
        }],
          width: 340,
          height: 1240,
          dataLabel: false
      });
    }
  }

}
</script>

<style lang='scss' scoped>
.myCheck{
  .ch-mon{
    width:100%;
    height:90px;
    border-top:1px solid #dddddd;
    border-bottom:1px solid #ededed;
    display:flex;
    justify-content: space-around;
    align-items:center;
    .ch-mon-box{
      text-align:center;
      display:flex;
      flex-direction: column;
      height:90px;
      .ch-mon-b-span{
        font-size:27px;
        color:#666666;
        margin-top:30px;
        margin-bottom:10px;
      }
      .ch-mon-b-img{
        width:64px;
        height:18px;
      }
    }
  }
  .ch-tit{
    height:80px;
    border-bottom:1px solid #e9e9e9;
    display:flex;
    justify-content: space-between;
    align-items:center;
    box-sizing: border-box;
    padding:0 30px;
    .ch-tit-p-one{
      font-size:30px;
      color:#333333;
      font-weight:bold;
    }
    .ch-tit-p-two{
      font-size:28px;
      color:#999999;
    }
  }
  .ch-chart{
    width:100%;
    // height:620px;
    // .ringCanvas{
    //   width: 1280px;
    //   height: 1240px;
    //   transform: scale(0.5)
    // }
  }
}
</style>
