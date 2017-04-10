import Vue from 'vue'
import Router from 'vue-router'

// Containers
import Full from 'containers/Full'

// Views
import Dashboard from 'views/Dashboard'
import Widgets from 'views/Widgets'

// Views - Components
import Buttons from '../content/plugins/Buttons'
import SocialButtons from '../content/plugins/SocialButtons'
import Cards from '../content/plugins/Cards'
import Forms from '../content/plugins/Forms'
import Modals from '../content/plugins/Modals'
import Switches from '../content/plugins/Switches'
import Tables from '../content/plugins/Tables'

// Views - Icons
import FontAwesome from '../content/themes/FontAwesome'
import SimpleLineIcons from '../content/themes/SimpleLineIcons'

// Views - Pages
import Page404 from 'views/pages/Page404'
import Page500 from 'views/pages/Page500'
import Login from 'views/pages/Login'
import Register from 'views/pages/Register'

Vue.use(Router)

export default new Router({
  mode: 'hash', // Demo is living in GitHub.io, so required!
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
          children: [
            {
              path: 'buttons',
              name: 'Buttons',
              component: Buttons
            },
            {
              path: 'social-buttons',
              name: 'Social Buttons',
              component: SocialButtons
            },
            {
              path: 'cards',
              name: 'Cards',
              component: Cards
            },
            {
              path: 'forms',
              name: 'Forms',
              component: Forms
            },
            {
              path: 'modals',
              name: 'Modals',
              component: Modals
            },
            {
              path: 'switches',
              name: 'Switches',
              component: Switches
            },
            {
              path: 'tables',
              name: 'Tables',
              component: Tables
            }
          ]
        },
        {
          path: 'themes',
          redirect: '/themes/font-awesome',
          name: 'Themes',
          component: {
            render (c) { return c('router-view') }
          },
          children: [
            {
              path: 'font-awesome',
              name: 'Font Awesome',
              component: FontAwesome
            },
            {
              path: 'simple-line-icons',
              name: 'Simple Line Icons',
              component: SimpleLineIcons
            }
          ]
        }
      ]
    },
    {
      path: '/pages',
      redirect: '/pages/p404',
      name: 'Pages',
      component: {
        render (c) { return c('router-view') }
      },
      children: [
        {
          path: '404',
          name: 'Page404',
          component: Page404
        },
        {
          path: '500',
          name: 'Page500',
          component: Page500
        },
        {
          path: 'login',
          name: 'Login',
          component: Login
        },
        {
          path: 'register',
          name: 'Register',
          component: Register
        }
      ]
    }
  ]
})
