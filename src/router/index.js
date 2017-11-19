import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login'
import home from '@/home/home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: login
    },
    {
      path: '/home',
      component: home
    }
  ]
})
