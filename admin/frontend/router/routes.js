'use strict'

// Subfolders
import Plugins from './plugins'

// Top Level Views
export default [
  {
    name: 'Dashboard',
    path: 'dashboard',
    icon: 'icon-speedometer',
    component: (resolve) => require(['views/Dashboard'], resolve)
  },
  {
    name: 'Widgets',
    path: 'widgets',
    icon: 'icon-calculator',
    component: (resolve) => require(['views/Widgets'], resolve)
  },
  {
    name: 'Plugins',
    path: 'plugins',
    icon: 'icon-puzzle',
    redirect: '/plugins/buttons',
    component: {
      render (c) { return c('router-view') }
    },
    children: Plugins
  }
]
