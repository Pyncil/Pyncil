'use strict'

import env from '../../../.env'

const plugins = env.plugins
var routes = []

var toTitle = function (str) {
  return str.replace('_', ' ').replace(/(\s*)(\w+)/g, (match, space, word) => {
    return space + word.charAt(0).toUpperCase() + word.substr(1).toLowerCase()
  })
}

var toSlug = function (str) {
  return str.replace('_', '-').toLowerCase()
}

Object.keys(plugins).forEach((plugin) => {
  if (plugins[plugin].active) {
    routes.push({
      name: toTitle(plugin),
      path: toSlug(plugin),
      component: (resolve) => require(['plugins/' + plugin + '/views/index'], resolve)
    })
  }
})

export default routes
