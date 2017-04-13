import Vue from 'vue'
import VueRouter from 'vue-router'

// Subfolders
import Plugins from './plugins'
import Themes from './themes'

// Global Container
import Full from '../containers/Full'

// Top Level Views
const Dashboard = resolve => require(['views/Dashboard'], resolve)
const Widgets   = resolve => require(['views/Widgets'], resolve)

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
      children: [
        {
          path: 'dashboard',
          name: 'Dashboard',
          component: Dashboard
        },
        {
          path: 'widgets',
          name: 'Widgets',
          component: Widgets
        },
        {
          path: 'plugins',
          redirect: '/plugins/buttons',
          name: 'Plugins',
          component: {
            render (c) { return c('router-view') }
          },
          children: Plugins
        },
        {
          path: 'themes',
          redirect: '/themes/font-awesome',
          name: 'Themes',
          component: {
            render (c) { return c('router-view') }
          },
          children: Themes
        }
      ]
    }
  ]
})
