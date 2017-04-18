'use strict'

// Theme Views
const FontAwesome     = (resolve) => require(['themes/FontAwesome'], resolve)
const SimpleLineIcons = (resolve) => require(['themes/SimpleLineIcons'], resolve)

// Create Routes
export default [
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
