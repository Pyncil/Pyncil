'use strict'

import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'

// Container Component
import Full from '../containers/Full'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  base: '/admin',
  linkActiveClass: 'open active',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    {
      path: '/',
      redirect: '/dashboard',
      name: 'Home',
      component: Full,
      children: routes
    }
  ]
})
