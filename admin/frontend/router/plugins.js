'use strict'

import slugify from 'slugify'
import titleCase from 'title-case'
import env from '../../../.env'

const plugins = env.plugins
var routes = []

Object.keys(plugins).forEach((plugin) => {
  if (plugins[plugin].active) {
    routes.push({
      name: titleCase(plugin),
      path: slugify(plugin),
      component: (resolve) => require(['plugins/' + plugin + '/views/index'], resolve)
    })
  }
})

export default routes
