// Plugin Views
// import Buttons from 'plugins/Buttons'
// import SocialButtons from 'plugins/SocialButtons'
// import Cards from 'plugins/Cards'
// import Forms from 'plugins/Forms'
// import Modals from 'plugins/Modals'
// import Switches from 'plugins/Switches'
// import Tables from 'plugins/Tables'
const Buttons       = resolve => require(['plugins/Buttons'], resolve)
const SocialButtons = resolve => require(['plugins/SocialButtons'], resolve)
const Cards         = resolve => require(['plugins/Cards'], resolve)
const Forms         = resolve => require(['plugins/Forms'], resolve)
const Modals        = resolve => require(['plugins/Modals'], resolve)
const Switches      = resolve => require(['plugins/Switches'], resolve)
const Tables        = resolve => require(['plugins/Tables'], resolve)

// Create Routes
export default [{
    path: 'buttons',
    name: 'Buttons',
    component: Buttons
  }, {
    path: 'social-buttons',
    name: 'Social Buttons',
    component: SocialButtons
  }, {
    path: 'cards',
    name: 'Cards',
    component: Cards
  }, {
    path: 'forms',
    name: 'Forms',
    component: Forms
  }, {
    path: 'modals',
    name: 'Modals',
    component: Modals
  }, {
    path: 'switches',
    name: 'Switches',
    component: Switches
  }, {
    path: 'tables',
    name: 'Tables',
    component: Tables
  }
]