webpackJsonp([7],{

/***/ 49:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(60),
  /* template */
  __webpack_require__(78),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/home/ubuntu/workspace/content/plugins/Cards.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Cards.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5b711fe6", Component.options)
  } else {
    hotAPI.reload("data-v-5b711fe6", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 60:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'cards'
});

/***/ }),

/***/ 78:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "animated fadeIn"
  }, [_vm._m(0), _vm._v(" "), _vm._m(1), _vm._v(" "), _vm._m(2), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-sm-6 col-md-4"
  }, [_c('div', {
    staticClass: "card card-inverse card-primary text-center"
  }, [_c('div', {
    staticClass: "card-block"
  }, [_c('blockquote', {
    staticClass: "card-blockquote"
  }, [_c('p', [_vm._v("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.")]), _vm._v(" "), _c('footer', [_vm._v("Someone famous in\n              "), _c('cite', {
    attrs: {
      "title": "Source Title"
    }
  }, [_vm._v("Source Title")])])])], 1)])]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-6 col-md-4"
  }, [_c('div', {
    staticClass: "card card-inverse card-success text-center"
  }, [_c('div', {
    staticClass: "card-block"
  }, [_c('blockquote', {
    staticClass: "card-blockquote"
  }, [_c('p', [_vm._v("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.")]), _vm._v(" "), _c('footer', [_vm._v("Someone famous in\n              "), _c('cite', {
    attrs: {
      "title": "Source Title"
    }
  }, [_vm._v("Source Title")])])])], 1)])]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-6 col-md-4"
  }, [_c('div', {
    staticClass: "card card-inverse card-info text-center"
  }, [_c('div', {
    staticClass: "card-block"
  }, [_c('blockquote', {
    staticClass: "card-blockquote"
  }, [_c('p', [_vm._v("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.")]), _vm._v(" "), _c('footer', [_vm._v("Someone famous in\n              "), _c('cite', {
    attrs: {
      "title": "Source Title"
    }
  }, [_vm._v("Source Title")])])])], 1)])]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-6 col-md-4"
  }, [_c('div', {
    staticClass: "card card-inverse card-warning text-center"
  }, [_c('div', {
    staticClass: "card-block"
  }, [_c('blockquote', {
    staticClass: "card-blockquote"
  }, [_c('p', [_vm._v("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.")]), _vm._v(" "), _c('footer', [_vm._v("Someone famous in\n              "), _c('cite', {
    attrs: {
      "title": "Source Title"
    }
  }, [_vm._v("Source Title")])])])], 1)])]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-6 col-md-4"
  }, [_c('div', {
    staticClass: "card card-inverse card-danger text-center"
  }, [_c('div', {
    staticClass: "card-block"
  }, [_c('blockquote', {
    staticClass: "card-blockquote"
  }, [_c('p', [_vm._v("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.")]), _vm._v(" "), _c('footer', [_vm._v("Someone famous in\n              "), _c('cite', {
    attrs: {
      "title": "Source Title"
    }
  }, [_vm._v("Source Title")])])])], 1)])]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-6 col-md-4"
  }, [_c('div', {
    staticClass: "card card-inverse card-primary text-center"
  }, [_c('div', {
    staticClass: "card-block"
  }, [_c('blockquote', {
    staticClass: "card-blockquote"
  }, [_c('p', [_vm._v("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.")]), _vm._v(" "), _c('footer', [_vm._v("Someone famous in\n              "), _c('cite', {
    attrs: {
      "title": "Source Title"
    }
  }, [_vm._v("Source Title")])])])], 1)])])]), _vm._v(" "), _vm._m(3)])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-sm-6 col-md-4"
  }, [_c('div', {
    staticClass: "card"
  }, [_c('div', {
    staticClass: "card-header"
  }, [_vm._v("\n          Card title\n        ")]), _vm._v(" "), _c('div', {
    staticClass: "card-block"
  }, [_vm._v("\n          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.\n        ")])])]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-6 col-md-4"
  }, [_c('div', {
    staticClass: "card"
  }, [_c('div', {
    staticClass: "card-block"
  }, [_vm._v("\n          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.\n        ")]), _vm._v(" "), _c('div', {
    staticClass: "card-footer"
  }, [_vm._v("Card footer")])])]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-6 col-md-4"
  }, [_c('div', {
    staticClass: "card"
  }, [_c('div', {
    staticClass: "card-header"
  }, [_c('i', {
    staticClass: "fa fa-check"
  }), _vm._v("Card with icon\n        ")]), _vm._v(" "), _c('div', {
    staticClass: "card-block"
  }, [_vm._v("\n          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.\n        ")])])]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-6 col-md-4"
  }, [_c('div', {
    staticClass: "card"
  }, [_c('div', {
    staticClass: "card-header"
  }, [_vm._v("\n          Card with switch\n          "), _c('label', {
    staticClass: "switch switch-sm switch-text switch-info float-right mb-0"
  }, [_c('input', {
    staticClass: "switch-input",
    attrs: {
      "type": "checkbox"
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "switch-label",
    attrs: {
      "data-on": "On",
      "data-off": "Off"
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "switch-handle"
  })])]), _vm._v(" "), _c('div', {
    staticClass: "card-block"
  }, [_vm._v("\n          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.\n        ")])])]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-6 col-md-4"
  }, [_c('div', {
    staticClass: "card"
  }, [_c('div', {
    staticClass: "card-header"
  }, [_vm._v("\n          Card with label\n          "), _c('span', {
    staticClass: "badge badge-success float-right"
  }, [_vm._v("Success")])]), _vm._v(" "), _c('div', {
    staticClass: "card-block"
  }, [_vm._v("\n          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.\n        ")])])]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-6 col-md-4"
  }, [_c('div', {
    staticClass: "card"
  }, [_c('div', {
    staticClass: "card-header"
  }, [_vm._v("\n          Card with label\n          "), _c('span', {
    staticClass: "badge badge-pill badge-danger float-right"
  }, [_vm._v("42")])]), _vm._v(" "), _c('div', {
    staticClass: "card-block"
  }, [_vm._v("\n          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.\n        ")])])])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-sm-6 col-md-4"
  }, [_c('div', {
    staticClass: "card card-outline-primary"
  }, [_c('div', {
    staticClass: "card-header"
  }, [_vm._v("\n          Card outline\n        ")]), _vm._v(" "), _c('div', {
    staticClass: "card-block"
  }, [_vm._v("\n          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.\n        ")])])]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-6 col-md-4"
  }, [_c('div', {
    staticClass: "card card-outline-secondary"
  }, [_c('div', {
    staticClass: "card-header"
  }, [_vm._v("\n          Card outline\n        ")]), _vm._v(" "), _c('div', {
    staticClass: "card-block"
  }, [_vm._v("\n          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.\n        ")])])]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-6 col-md-4"
  }, [_c('div', {
    staticClass: "card card-outline-success"
  }, [_c('div', {
    staticClass: "card-header"
  }, [_vm._v("\n          Card outline\n        ")]), _vm._v(" "), _c('div', {
    staticClass: "card-block"
  }, [_vm._v("\n          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.\n        ")])])]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-6 col-md-4"
  }, [_c('div', {
    staticClass: "card card-outline-info"
  }, [_c('div', {
    staticClass: "card-header"
  }, [_vm._v("\n          Card outline\n        ")]), _vm._v(" "), _c('div', {
    staticClass: "card-block"
  }, [_vm._v("\n          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.\n        ")])])]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-6 col-md-4"
  }, [_c('div', {
    staticClass: "card card-outline-warning"
  }, [_c('div', {
    staticClass: "card-header"
  }, [_vm._v("\n          Card outline\n        ")]), _vm._v(" "), _c('div', {
    staticClass: "card-block"
  }, [_vm._v("\n          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.\n        ")])])]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-6 col-md-4"
  }, [_c('div', {
    staticClass: "card card-outline-danger"
  }, [_c('div', {
    staticClass: "card-header"
  }, [_vm._v("\n          Card outline\n        ")]), _vm._v(" "), _c('div', {
    staticClass: "card-block"
  }, [_vm._v("\n          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.\n        ")])])])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-sm-6 col-md-4"
  }, [_c('div', {
    staticClass: "card card-accent-primary"
  }, [_c('div', {
    staticClass: "card-header"
  }, [_vm._v("\n          Card with accent\n        ")]), _vm._v(" "), _c('div', {
    staticClass: "card-block"
  }, [_vm._v("\n          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.\n        ")])])]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-6 col-md-4"
  }, [_c('div', {
    staticClass: "card card-accent-secondary"
  }, [_c('div', {
    staticClass: "card-header"
  }, [_vm._v("\n          Card with accent\n        ")]), _vm._v(" "), _c('div', {
    staticClass: "card-block"
  }, [_vm._v("\n          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.\n        ")])])]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-6 col-md-4"
  }, [_c('div', {
    staticClass: "card card-accent-success"
  }, [_c('div', {
    staticClass: "card-header"
  }, [_vm._v("\n          Card with accent\n        ")]), _vm._v(" "), _c('div', {
    staticClass: "card-block"
  }, [_vm._v("\n          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.\n        ")])])]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-6 col-md-4"
  }, [_c('div', {
    staticClass: "card card-accent-info"
  }, [_c('div', {
    staticClass: "card-header"
  }, [_vm._v("\n          Card with accent\n        ")]), _vm._v(" "), _c('div', {
    staticClass: "card-block"
  }, [_vm._v("\n          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.\n        ")])])]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-6 col-md-4"
  }, [_c('div', {
    staticClass: "card card-accent-warning"
  }, [_c('div', {
    staticClass: "card-header"
  }, [_vm._v("\n          Card with accent\n        ")]), _vm._v(" "), _c('div', {
    staticClass: "card-block"
  }, [_vm._v("\n          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.\n        ")])])]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-6 col-md-4"
  }, [_c('div', {
    staticClass: "card card-accent-danger"
  }, [_c('div', {
    staticClass: "card-header"
  }, [_vm._v("\n          Card with accent\n        ")]), _vm._v(" "), _c('div', {
    staticClass: "card-block"
  }, [_vm._v("\n          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.\n        ")])])])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-sm-6 col-md-4"
  }, [_c('div', {
    staticClass: "card card-inverse card-primary"
  }, [_c('div', {
    staticClass: "card-header"
  }, [_vm._v("\n          Card title\n        ")]), _vm._v(" "), _c('div', {
    staticClass: "card-block"
  }, [_vm._v("\n          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.\n        ")])])]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-6 col-md-4"
  }, [_c('div', {
    staticClass: "card card-inverse card-success"
  }, [_c('div', {
    staticClass: "card-header"
  }, [_vm._v("\n          Card title\n        ")]), _vm._v(" "), _c('div', {
    staticClass: "card-block"
  }, [_vm._v("\n          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.\n        ")])])]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-6 col-md-4"
  }, [_c('div', {
    staticClass: "card card-inverse card-info"
  }, [_c('div', {
    staticClass: "card-header"
  }, [_vm._v("\n          Card title\n        ")]), _vm._v(" "), _c('div', {
    staticClass: "card-block"
  }, [_vm._v("\n          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.\n        ")])])]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-6 col-md-4"
  }, [_c('div', {
    staticClass: "card card-inverse card-warning"
  }, [_c('div', {
    staticClass: "card-header"
  }, [_vm._v("\n          Card title\n        ")]), _vm._v(" "), _c('div', {
    staticClass: "card-block"
  }, [_vm._v("\n          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.\n        ")])])]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-6 col-md-4"
  }, [_c('div', {
    staticClass: "card card-inverse card-danger"
  }, [_c('div', {
    staticClass: "card-header"
  }, [_vm._v("\n          Card title\n        ")]), _vm._v(" "), _c('div', {
    staticClass: "card-block"
  }, [_vm._v("\n          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.\n        ")])])])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-5b711fe6", module.exports)
  }
}

/***/ })

});