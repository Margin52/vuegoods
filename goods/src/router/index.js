import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import goodsins from '../page/goodsins.vue'
import goodsdec from '../page/goodsdec.vue'
import Goodslist from '../page/Goodslist.vue'
import listcontent from '../components/goodlist/listcontent.vue'
import deccontent from '../components/goodsdec/deccontent.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/goodsins',
      name: 'goodsins',
      component: goodsins
    },
    {
      path: '/goodsdec',
      name: 'goodsdec',
      component: goodsdec
    },
    {
      path: '/',
      name: 'Goodslist',
      component: Goodslist
    },
    {
      path: '/listcontent',
      name: 'listcontent',
      component: listcontent
    },
    {
      path: '/deccontent',
      name: 'deccontent',
      component: deccontent
    }
  ]
})
