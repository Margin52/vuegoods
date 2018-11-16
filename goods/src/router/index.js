import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import goodsins from '../page/goodsins.vue'
import goodsdec from '../page/goodsdec.vue'
import Goodslist from '../page/Goodslist.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/',
      name: 'goodsins',
      component: goodsins
    },
    {
      path: '/goodsdec',
      name: 'goodsdec',
      component: goodsdec
    },
    {
      path: '/Goodslist',
      name: 'Goodslist',
      component: Goodslist
    }
  ]
})
