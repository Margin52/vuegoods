<!--  -->
<template>
  <div class="bs">
    <div class="bsListBox">
      <div class="bsList" for="(item, index) in bsdatas">
        <div class="bsListTop">
          <image class="bsListTopImg" src="../../common/img/bsListdec.png"/>
          <span class="bsListTopSpan">{{item.listname}}</span>
        </div>
        <div class="bsListCon" for="(itemdel, itemindex) in item.chlisthaha">
          <div class="bsListConLe">
            <p class="bsListConLeTime">
              <span>{{itemdel.listonetext}}</span>
              <span>{{itemdel.listonemon}}</span>
            </p>
            <span class="bsListConLeType">{{itemdel.listtype}}</span>
          </div>
          <div class="bsListConRi">
            <p class="bsListConRiMoney">￥<span class="bsListConRiMoneySpan">{{itemdel.listmoney}}</span></p>
            <span class="bsListConRiArea">{{itemdel.listarea}}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="bsFixedTime">
      <image class="bsListTopImg" src="../../common/img/bsListdec.png"/>
      <span class="bsListTopSpan">{{time}}</span>
    </div>
    <div class="bsFooter">
      <p>以上为截止目前<span>{{}}</span>的查询结果</p>
    </div>
  </div>
</template>

<script>
export default {
  config: {
    defaultTitle: '交费历史',
    navigationBarTextStyle: 'white',
    backgroundTextStyle: 'light',
    enablePullDownRefresh: true,
  },
  data () {
    return {
      time:'2018年10月',
      bsdatas:''
    };
  },

props: {},

components: {},

computed: {},

mounted() {
  this.getbsdata()
},

methods: {
  /**
   * 获取用户信息
   */
  /**
   * 接口请求
   */
 async getbsdata () {
    let res =  await this.$api.request({
      url: 'https://www.easy-mock.com/mock/5bf26de2a78cb61ecbaed73a/example/businessdata',
      method: 'POST',
      dataType: 'json',
      data: {
        key: 'value'
      }
    })
    let data = res.data
    if (data.retCode === '000000') {
      this.bsdatas = data.rspBody.bsdata
      console.log(this.bsdatas)
    }
    console.log('data', data)
  },
  /**
   * 滚动效果
   */
  scroll: function (e) {
    let p = 0
    for (let i = 0; i < this.data.Height.length; i++) {
      if (e.detail.scrollTop > this.data.viewHeight[i - 1]) {
        p = i
      }
    }
    if (this.data.topName != this.data.capHistoryinfo[p].date) {
      console.log('改变了')
      console.log(this.data.viewHeight.length)
      this.setData({
        topName: this.data.capHistoryinfo[p].date
      })
    }
  }
},

created() {},

destroyed() {},

onShow() {},

onHide() {},

}

</script>
<style lang='scss'>
.bsList{
  display:flex;
  flex-direction: column;
  .bsListCon:last-child {
    border: none;
  }
}
.bsListTop{
	height: 60px;
  border-top:1px solid #e9e9e9;
  border-bottom:1px solid #e9e9e9;
	background-color: #f6f6f6;
  display:flex;
  box-sizing: border-box;
  padding:0 30px;
  align-items: center;
}
.bsListTopImg{
  width:6px;
  height:24px;
  margin-right:16px;
}
.bsListTopSpan{
	font-size: 26px;
	color: #00a4ff;
}
.bsListCon{
	height: 150px;
	background-color: #ffffff;
  border-bottom:solid 1px #e9e9e9;
  display:flex;
  box-sizing: border-box;
  padding:0 30px;
  justify-content: space-between;
}
.bsListConLe{
  box-sizing: border-box;
  padding-top:41px;
  padding-bottom:38px;
}
.bsListConLeTime{
	font-size: 30px;
	line-height: 38px;
	color: #666666;
  margin-bottom:6px;
}
.bsListConLeType{
	font-size: 26px;
	line-height: 38px;
	color: #999999;
}
.bsListConRi{
  text-align: right;
  box-sizing: border-box;
  padding-top:39px;
  padding-bottom:38px;
}
.bsListConRiMoney{
	font-size: 20px;
	line-height: 38px;
	letter-spacing: 0px;
	color: #00a4ff;
   margin-bottom:5px;
}
.bsListConRiMoneySpan{
  font-size:27px;
}
.bsListConRiArea{
	font-size: 26px;
	line-height: 38px;
	color: #999999;
}
.bsFixedTime{
  width:100%;
  height: 60px;
  border-top:1px solid #e9e9e9;
  border-bottom:1px solid #e9e9e9;
	background-color: #f6f6f6;
  display:flex;
  box-sizing: border-box;
  padding:0 30px;
  align-items: center;
  position:fixed;
  top:0px;
}
</style>
