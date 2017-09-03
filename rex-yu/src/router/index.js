import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home/Home'
import Messageboard from '@/components/Messageboard/Messageboard'

Vue.use(Router)

export default new Router({
  mode: 'history',
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/home',
      component: Home
    },
    {
      path:'/messageboard',
      name:'Messageboard',
      component: Messageboard
    }
  ]
})
