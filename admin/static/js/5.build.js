webpackJsonp([5],{

/***/ 53:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(64),
  /* template */
  __webpack_require__(85),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/home/ubuntu/workspace/content/plugins/Switches.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Switches.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-f278e5a2", Component.options)
  } else {
    hotAPI.reload("data-v-f278e5a2", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 64:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'switches'
});

/***/ }),

/***/ 85:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _vm._m(0)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "animated fadeIn"
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-md-12"
  }, [_c('div', {
    staticClass: "card"
  }, [_c('div', {
    staticClass: "card-header"
  }, [_vm._v("\n          3d Switch\n        ")]), _vm._v(" "), _c('div', {
    staticClass: "card-block"
  }, [_c('label', {
    staticClass: "switch switch-3d switch-primary"
  }, [_c('input', {
    staticClass: "switch-input",
    attrs: {
      "type": "checkbox",
      "checked": ""
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "switch-label"
  }), _vm._v(" "), _c('span', {
    staticClass: "switch-handle"
  })]), _vm._v("\n             \n          "), _c('label', {
    staticClass: "switch switch-3d switch-secondary"
  }, [_c('input', {
    staticClass: "switch-input",
    attrs: {
      "type": "checkbox",
      "checked": ""
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "switch-label"
  }), _vm._v(" "), _c('span', {
    staticClass: "switch-handle"
  })]), _vm._v("\n             \n          "), _c('label', {
    staticClass: "switch switch-3d switch-success"
  }, [_c('input', {
    staticClass: "switch-input",
    attrs: {
      "type": "checkbox",
      "checked": ""
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "switch-label"
  }), _vm._v(" "), _c('span', {
    staticClass: "switch-handle"
  })]), _vm._v("\n             \n          "), _c('label', {
    staticClass: "switch switch-3d switch-warning"
  }, [_c('input', {
    staticClass: "switch-input",
    attrs: {
      "type": "checkbox",
      "checked": ""
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "switch-label"
  }), _vm._v(" "), _c('span', {
    staticClass: "switch-handle"
  })]), _vm._v("\n             \n          "), _c('label', {
    staticClass: "switch switch-3d switch-info"
  }, [_c('input', {
    staticClass: "switch-input",
    attrs: {
      "type": "checkbox",
      "checked": ""
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "switch-label"
  }), _vm._v(" "), _c('span', {
    staticClass: "switch-handle"
  })]), _vm._v("\n             \n          "), _c('label', {
    staticClass: "switch switch-3d switch-danger"
  }, [_c('input', {
    staticClass: "switch-input",
    attrs: {
      "type": "checkbox",
      "checked": ""
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "switch-label"
  }), _vm._v(" "), _c('span', {
    staticClass: "switch-handle"
  })])])])]), _vm._v(" "), _c('div', {
    staticClass: "col-md-6"
  }, [_c('div', {
    staticClass: "card"
  }, [_c('div', {
    staticClass: "card-header"
  }, [_vm._v("\n          Switch default\n        ")]), _vm._v(" "), _c('div', {
    staticClass: "card-block"
  }, [_c('label', {
    staticClass: "switch switch-default switch-primary"
  }, [_c('input', {
    staticClass: "switch-input",
    attrs: {
      "type": "checkbox",
      "checked": ""
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "switch-label"
  }), _vm._v(" "), _c('span', {
    staticClass: "switch-handle"
  })]), _vm._v("\n             \n          "), _c('label', {
    staticClass: "switch switch-default switch-secondary"
  }, [_c('input', {
    staticClass: "switch-input",
    attrs: {
      "type": "checkbox",
      "checked": ""
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "switch-label"
  }), _vm._v(" "), _c('span', {
    staticClass: "switch-handle"
  })]), _vm._v("\n             \n          "), _c('label', {
    staticClass: "switch switch-default switch-success"
  }, [_c('input', {
    staticClass: "switch-input",
    attrs: {
      "type": "checkbox",
      "checked": ""
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "switch-label"
  }), _vm._v(" "), _c('span', {
    staticClass: "switch-handle"
  })]), _vm._v("\n             \n          "), _c('label', {
    staticClass: "switch switch-default switch-warning"
  }, [_c('input', {
    staticClass: "switch-input",
    attrs: {
      "type": "checkbox",
      "checked": ""
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "switch-label"
  }), _vm._v(" "), _c('span', {
    staticClass: "switch-handle"
  })]), _vm._v("\n             \n          "), _c('label', {
    staticClass: "switch switch-default switch-info"
  }, [_c('input', {
    staticClass: "switch-input",
    attrs: {
      "type": "checkbox",
      "checked": ""
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "switch-label"
  }), _vm._v(" "), _c('span', {
    staticClass: "switch-handle"
  })]), _vm._v("\n             \n          "), _c('label', {
    staticClass: "switch switch-default switch-danger"
  }, [_c('input', {
    staticClass: "switch-input",
    attrs: {
      "type": "checkbox",
      "checked": ""
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "switch-label"
  }), _vm._v(" "), _c('span', {
    staticClass: "switch-handle"
  })])])])]), _vm._v(" "), _c('div', {
    staticClass: "col-md-6"
  }, [_c('div', {
    staticClass: "card"
  }, [_c('div', {
    staticClass: "card-header"
  }, [_vm._v("\n          Switch default - pills\n        ")]), _vm._v(" "), _c('div', {
    staticClass: "card-block"
  }, [_c('label', {
    staticClass: "switch switch-default switch-pill switch-primary"
  }, [_c('input', {
    staticClass: "switch-input",
    attrs: {
      "type": "checkbox",
      "checked": ""
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "switch-label"
  }), _vm._v(" "), _c('span', {
    staticClass: "switch-handle"
  })]), _vm._v("\n             \n          "), _c('label', {
    staticClass: "switch switch-default switch-pill switch-secondary"
  }, [_c('input', {
    staticClass: "switch-input",
    attrs: {
      "type": "checkbox",
      "checked": ""
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "switch-label"
  }), _vm._v(" "), _c('span', {
    staticClass: "switch-handle"
  })]), _vm._v("\n             \n          "), _c('label', {
    staticClass: "switch switch-default switch-pill switch-success"
  }, [_c('input', {
    staticClass: "switch-input",
    attrs: {
      "type": "checkbox",
      "checked": ""
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "switch-label"
  }), _vm._v(" "), _c('span', {
    staticClass: "switch-handle"
  })]), _vm._v("\n             \n          "), _c('label', {
    staticClass: "switch switch-default switch-pill switch-warning"
  }, [_c('input', {
    staticClass: "switch-input",
    attrs: {
      "type": "checkbox",
      "checked": ""
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "switch-label"
  }), _vm._v(" "), _c('span', {
    staticClass: "switch-handle"
  })]), _vm._v("\n             \n          "), _c('label', {
    staticClass: "switch switch-default switch-pill switch-info"
  }, [_c('input', {
    staticClass: "switch-input",
    attrs: {
      "type": "checkbox",
      "checked": ""
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "switch-label"
  }), _vm._v(" "), _c('span', {
    staticClass: "switch-handle"
  })]), _vm._v("\n             \n          "), _c('label', {
    staticClass: "switch switch-default switch-pill switch-danger"
  }, [_c('input', {
    staticClass: "switch-input",
    attrs: {
      "type": "checkbox",
      "checked": ""
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "switch-label"
  }), _vm._v(" "), _c('span', {
    staticClass: "switch-handle"
  })])])])]), _vm._v(" "), _c('div', {
    staticClass: "col-md-6"
  }, [_c('div', {
    staticClass: "card"
  }, [_c('div', {
    staticClass: "card-header"
  }, [_vm._v("\n          Switch outline\n        ")]), _vm._v(" "), _c('div', {
    staticClass: "card-block"
  }, [_c('label', {
    staticClass: "switch switch-default switch-primary-outline"
  }, [_c('input', {
    staticClass: "switch-input",
    attrs: {
      "type": "checkbox",
      "checked": ""
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "switch-label"
  }), _vm._v(" "), _c('span', {
    staticClass: "switch-handle"
  })]), _vm._v("\n             \n          "), _c('label', {
    staticClass: "switch switch-default switch-secondary-outline"
  }, [_c('input', {
    staticClass: "switch-input",
    attrs: {
      "type": "checkbox",
      "checked": ""
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "switch-label"
  }), _vm._v(" "), _c('span', {
    staticClass: "switch-handle"
  })]), _vm._v("\n             \n          "), _c('label', {
    staticClass: "switch switch-default switch-success-outline"
  }, [_c('input', {
    staticClass: "switch-input",
    attrs: {
      "type": "checkbox",
      "checked": ""
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "switch-label"
  }), _vm._v(" "), _c('span', {
    staticClass: "switch-handle"
  })]), _vm._v("\n             \n          "), _c('label', {
    staticClass: "switch switch-default switch-warning-outline"
  }, [_c('input', {
    staticClass: "switch-input",
    attrs: {
      "type": "checkbox",
      "checked": ""
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "switch-label"
  }), _vm._v(" "), _c('span', {
    staticClass: "switch-handle"
  })]), _vm._v("\n             \n          "), _c('label', {
    staticClass: "switch switch-default switch-info-outline"
  }, [_c('input', {
    staticClass: "switch-input",
    attrs: {
      "type": "checkbox",
      "checked": ""
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "switch-label"
  }), _vm._v(" "), _c('span', {
    staticClass: "switch-handle"
  })]), _vm._v("\n             \n          "), _c('label', {
    staticClass: "switch switch-default switch-danger-outline"
  }, [_c('input', {
    staticClass: "switch-input",
    attrs: {
      "type": "checkbox",
      "checked": ""
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "switch-label"
  }), _vm._v(" "), _c('span', {
    staticClass: "switch-handle"
  })])])])]), _vm._v(" "), _c('div', {
    staticClass: "col-md-6"
  }, [_c('div', {
    staticClass: "card"
  }, [_c('div', {
    staticClass: "card-header"
  }, [_vm._v("\n          Switch outline - pills\n        ")]), _vm._v(" "), _c('div', {
    staticClass: "card-block"
  }, [_c('label', {
    staticClass: "switch switch-default switch-pill switch-primary-outline"
  }, [_c('input', {
    staticClass: "switch-input",
    attrs: {
      "type": "checkbox",
      "checked": ""
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "switch-label"
  }), _vm._v(" "), _c('span', {
    staticClass: "switch-handle"
  })]), _vm._v("\n             \n          "), _c('label', {
    staticClass: "switch switch-default switch-pill switch-secondary-outline"
  }, [_c('input', {
    staticClass: "switch-input",
    attrs: {
      "type": "checkbox",
      "checked": ""
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "switch-label"
  }), _vm._v(" "), _c('span', {
    staticClass: "switch-handle"
  })]), _vm._v("\n             \n          "), _c('label', {
    staticClass: "switch switch-default switch-pill switch-success-outline"
  }, [_c('input', {
    staticClass: "switch-input",
    attrs: {
      "type": "checkbox",
      "checked": ""
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "switch-label"
  }), _vm._v(" "), _c('span', {
    staticClass: "switch-handle"
  })]), _vm._v("\n             \n          "), _c('label', {
    staticClass: "switch switch-default switch-pill switch-warning-outline"
  }, [_c('input', {
    staticClass: "switch-input",
    attrs: {
      "type": "checkbox",
      "checked": ""
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "switch-label"
  }), _vm._v(" "), _c('span', {
    staticClass: "switch-handle"
  })]), _vm._v("\n             \n          "), _c('label', {
    staticClass: "switch switch-default switch-pill switch-info-outline"
  }, [_c('input', {
    staticClass: "switch-input",
    attrs: {
      "type": "checkbox",
      "checked": ""
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "switch-label"
  }), _vm._v(" "), _c('span', {
    staticClass: "switch-handle"
  })]), _vm._v("\n             \n          "), _c('label', {
    staticClass: "switch switch-default switch-pill switch-danger-outline"
  }, [_c('input', {
    staticClass: "switch-input",
    attrs: {
      "type": "checkbox",
      "checked": ""
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "switch-label"
  }), _vm._v(" "), _c('span', {
    staticClass: "switch-handle"
  })])])])]), _vm._v(" "), _c('div', {
    staticClass: "col-md-6"
  }, [_c('div', {
    staticClass: "card"
  }, [_c('div', {
    staticClass: "card-header"
  }, [_vm._v("\n          Switch outline alternative\n        ")]), _vm._v(" "), _c('div', {
    staticClass: "card-block"
  }, [_c('label', {
    staticClass: "switch switch-default switch-primary-outline-alt"
  }, [_c('input', {
    staticClass: "switch-input",
    attrs: {
      "type": "checkbox",
      "checked": ""
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "switch-label"
  }), _vm._v(" "), _c('span', {
    staticClass: "switch-handle"
  })]), _vm._v("\n             \n          "), _c('label', {
    staticClass: "switch switch-default switch-secondary-outline-alt"
  }, [_c('input', {
    staticClass: "switch-input",
    attrs: {
      "type": "checkbox",
      "checked": ""
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "switch-label"
  }), _vm._v(" "), _c('span', {
    staticClass: "switch-handle"
  })]), _vm._v("\n             \n          "), _c('label', {
    staticClass: "switch switch-default switch-success-outline-alt"
  }, [_c('input', {
    staticClass: "switch-input",
    attrs: {
      "type": "checkbox",
      "checked": ""
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "switch-label"
  }), _vm._v(" "), _c('span', {
    staticClass: "switch-handle"
  })]), _vm._v("\n             \n          "), _c('label', {
    staticClass: "switch switch-default switch-warning-outline-alt"
  }, [_c('input', {
    staticClass: "switch-input",
    attrs: {
      "type": "checkbox",
      "checked": ""
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "switch-label"
  }), _vm._v(" "), _c('span', {
    staticClass: "switch-handle"
  })]), _vm._v("\n             \n          "), _c('label', {
    staticClass: "switch switch-default switch-info-outline-alt"
  }, [_c('input', {
    staticClass: "switch-input",
    attrs: {
      "type": "checkbox",
      "checked": ""
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "switch-label"
  }), _vm._v(" "), _c('span', {
    staticClass: "switch-handle"
  })]), _vm._v("\n             \n          "), _c('label', {
    staticClass: "switch switch-default switch-danger-outline-alt"
  }, [_c('input', {
    staticClass: "switch-input",
    attrs: {
      "type": "checkbox",
      "checked": ""
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "switch-label"
  }), _vm._v(" "), _c('span', {
    staticClass: "switch-handle"
  })])])])]), _vm._v(" "), _c('div', {
    staticClass: "col-md-6"
  }, [_c('div', {
    staticClass: "card"
  }, [_c('div', {
    staticClass: "card-header"
  }, [_vm._v("\n          Switch outline alternative - pills\n        ")]), _vm._v(" "), _c('div', {
    staticClass: "card-block"
  }, [_c('label', {
    staticClass: "switch switch-default switch-pill switch-primary-outline-alt"
  }, [_c('input', {
    staticClass: "switch-input",
    attrs: {
      "type": "checkbox",
      "checked": ""
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "switch-label"
  }), _vm._v(" "), _c('span', {
    staticClass: "switch-handle"
  })]), _vm._v("\n             \n          "), _c('label', {
    staticClass: "switch switch-default switch-pill switch-secondary-outline-alt"
  }, [_c('input', {
    staticClass: "switch-input",
    attrs: {
      "type": "checkbox",
      "checked": ""
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "switch-label"
  }), _vm._v(" "), _c('span', {
    staticClass: "switch-handle"
  })]), _vm._v("\n             \n          "), _c('label', {
    staticClass: "switch switch-default switch-pill switch-success-outline-alt"
  }, [_c('input', {
    staticClass: "switch-input",
    attrs: {
      "type": "checkbox",
      "checked": ""
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "switch-label"
  }), _vm._v(" "), _c('span', {
    staticClass: "switch-handle"
  })]), _vm._v("\n             \n          "), _c('label', {
    staticClass: "switch switch-default switch-pill switch-warning-outline-alt"
  }, [_c('input', {
    staticClass: "switch-input",
    attrs: {
      "type": "checkbox",
      "checked": ""
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "switch-label"
  }), _vm._v(" "), _c('span', {
    staticClass: "switch-handle"
  })]), _vm._v("\n             \n          "), _c('label', {
    staticClass: "switch switch-default switch-pill switch-info-outline-alt"
  }, [_c('input', {
    staticClass: "switch-input",
    attrs: {
      "type": "checkbox",
      "checked": ""
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "switch-label"
  }), _vm._v(" "), _c('span', {
    staticClass: "switch-handle"
  })]), _vm._v("\n             \n          "), _c('label', {
    staticClass: "switch switch-default switch-pill switch-danger-outline-alt"
  }, [_c('input', {
    staticClass: "switch-input",
    attrs: {
      "type": "checkbox",
      "checked": ""
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "switch-label"
  }), _vm._v(" "), _c('span', {
    staticClass: "switch-handle"
  })])])])]), _vm._v(" "), _c('div', {
    staticClass: "col-md-6"
  }, [_c('div', {
    staticClass: "card"
  }, [_c('div', {
    staticClass: "card-header"
  }, [_vm._v("\n          Switch with text\n        ")]), _vm._v(" "), _c('div', {
    staticClass: "card-block"
  }, [_c('label', {
    staticClass: "switch switch-text switch-primary"
  }, [_c('input', {
    staticClass: "switch-input",
    attrs: {
      "type": "checkbox",
      "checked": ""
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "switch-label",
    attrs: {
      "data-on": "On",
      "data-off": "Off"
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "switch-handle"
  })]), _vm._v("\n             \n          "), _c('label', {
    staticClass: "switch switch-text switch-secondary"
  }, [_c('input', {
    staticClass: "switch-input",
    attrs: {
      "type": "checkbox",
      "checked": ""
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "switch-label",
    attrs: {
      "data-on": "On",
      "data-off": "Off"
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "switch-handle"
  })]), _vm._v("\n             \n          "), _c('label', {
    staticClass: "switch switch-text switch-success"
  }, [_c('input', {
    staticClass: "switch-input",
    attrs: {
      "type": "checkbox",
      "checked": ""
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "switch-label",
    attrs: {
      "data-on": "On",
      "data-off": "Off"
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "switch-handle"
  })]), _vm._v("\n             \n          "), _c('label', {
    staticClass: "switch switch-text switch-warning"
  }, [_c('input', {
    staticClass: "switch-input",
    attrs: {
      "type": "checkbox",
      "checked": ""
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "switch-label",
    attrs: {
      "data-on": "On",
      "data-off": "Off"
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "switch-handle"
  })]), _vm._v("\n             \n          "), _c('label', {
    staticClass: "switch switch-text switch-info"
  }, [_c('input', {
    staticClass: "switch-input",
    attrs: {
      "type": "checkbox",
      "checked": ""
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "switch-label",
    attrs: {
      "data-on": "On",
      "data-off": "Off"
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "switch-handle"
  })]), _vm._v("\n             \n          "), _c('label', {
    staticClass: "switch switch-text switch-danger"
  }, [_c('input', {
    staticClass: "switch-input",
    attrs: {
      "type": "checkbox",
      "checked": ""
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "switch-label",
    attrs: {
      "data-on": "On",
      "data-off": "Off"
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "switch-handle"
  })])])])]), _vm._v(" "), _c('div', {
    staticClass: "col-md-6"
  }, [_c('div', {
    staticClass: "card"
  }, [_c('div', {
    staticClass: "card-header"
  }, [_vm._v("\n          Switch with text - pills\n        ")]), _vm._v(" "), _c('div', {
    staticClass: "card-block"
  }, [_c('label', {
    staticClass: "switch switch-text switch-pill switch-primary"
  }, [_c('input', {
    staticClass: "switch-input",
    attrs: {
      "type": "checkbox",
      "checked": ""
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "switch-label",
    attrs: {
      "data-on": "On",
      "data-off": "Off"
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "switch-handle"
  })]), _vm._v("\n             \n          "), _c('label', {
    staticClass: "switch switch-text switch-pill switch-secondary"
  }, [_c('input', {
    staticClass: "switch-input",
    attrs: {
      "type": "checkbox",
      "checked": ""
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "switch-label",
    attrs: {
      "data-on": "On",
      "data-off": "Off"
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "switch-handle"
  })]), _vm._v("\n             \n          "), _c('label', {
    staticClass: "switch switch-text switch-pill switch-success"
  }, [_c('input', {
    staticClass: "switch-input",
    attrs: {
      "type": "checkbox",
      "checked": ""
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "switch-label",
    attrs: {
      "data-on": "On",
      "data-off": "Off"
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "switch-handle"
  })]), _vm._v("\n             \n          "), _c('label', {
    staticClass: "switch switch-text switch-pill switch-warning"
  }, [_c('input', {
    staticClass: "switch-input",
    attrs: {
      "type": "checkbox",
      "checked": ""
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "switch-label",
    attrs: {
      "data-on": "On",
      "data-off": "Off"
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "switch-handle"
  })]), _vm._v("\n             \n          "), _c('label', {
    staticClass: "switch switch-text switch-pill switch-info"
  }, [_c('input', {
    staticClass: "switch-input",
    attrs: {
      "type": "checkbox",
      "checked": ""
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "switch-label",
    attrs: {
      "data-on": "On",
      "data-off": "Off"
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "switch-handle"
  })]), _vm._v("\n             \n          "), _c('label', {
    staticClass: "switch switch-text switch-pill switch-danger"
  }, [_c('input', {
    staticClass: "switch-input",
    attrs: {
      "type": "checkbox",
      "checked": ""
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "switch-label",
    attrs: {
      "data-on": "On",
      "data-off": "Off"
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "switch-handle"
  })])])])]), _vm._v(" "), _c('div', {
    staticClass: "col-md-6"
  }, [_c('div', {
    staticClass: "card"
  }, [_c('div', {
    staticClass: "card-header"
  }, [_vm._v("\n          Switch with text outline\n        ")]), _vm._v(" "), _c('div', {
    staticClass: "card-block"
  }, [_c('label', {
    staticClass: "switch switch-text switch-primary-outline"
  }, [_c('input', {
    staticClass: "switch-input",
    attrs: {
      "type": "checkbox",
      "checked": ""
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "switch-label",
    attrs: {
      "data-on": "On",
      "data-off": "Off"
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "switch-handle"
  })]), _vm._v("\n             \n          "), _c('label', {
    staticClass: "switch switch-text switch-secondary-outline"
  }, [_c('input', {
    staticClass: "switch-input",
    attrs: {
      "type": "checkbox",
      "checked": ""
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "switch-label",
    attrs: {
      "data-on": "On",
      "data-off": "Off"
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "switch-handle"
  })]), _vm._v("\n             \n          "), _c('label', {
    staticClass: "switch switch-text switch-success-outline"
  }, [_c('input', {
    staticClass: "switch-input",
    attrs: {
      "type": "checkbox",
      "checked": ""
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "switch-label",
    attrs: {
      "data-on": "On",
      "data-off": "Off"
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "switch-handle"
  })]), _vm._v("\n             \n          "), _c('label', {
    staticClass: "switch switch-text switch-warning-outline"
  }, [_c('input', {
    staticClass: "switch-input",
    attrs: {
      "type": "checkbox",
      "checked": ""
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "switch-label",
    attrs: {
      "data-on": "On",
      "data-off": "Off"
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "switch-handle"
  })]), _vm._v("\n             \n          "), _c('label', {
    staticClass: "switch switch-text switch-info-outline"
  }, [_c('input', {
    staticClass: "switch-input",
    attrs: {
      "type": "checkbox",
      "checked": ""
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "switch-label",
    attrs: {
      "data-on": "On",
      "data-off": "Off"
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "switch-handle"
  })]), _vm._v("\n             \n          "), _c('label', {
    staticClass: "switch switch-text switch-danger-outline"
  }, [_c('input', {
    staticClass: "switch-input",
    attrs: {
      "type": "checkbox",
      "checked": ""
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "switch-label",
    attrs: {
      "data-on": "On",
      "data-off": "Off"
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "switch-handle"
  })])])])]), _vm._v(" "), _c('div', {
    staticClass: "col-md-6"
  }, [_c('div', {
    staticClass: "card"
  }, [_c('div', {
    staticClass: "card-header"
  }, [_vm._v("\n          Switch with text outline - pills\n        ")]), _vm._v(" "), _c('div', {
    staticClass: "card-block"
  }, [_c('label', {
    staticClass: "switch switch-text switch-pill switch-primary-outline"
  }, [_c('input', {
    staticClass: "switch-input",
    attrs: {
      "type": "checkbox",
      "checked": ""
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "switch-label",
    attrs: {
      "data-on": "On",
      "data-off": "Off"
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "switch-handle"
  })]), _vm._v("\n             \n          "), _c('label', {
    staticClass: "switch switch-text switch-pill switch-secondary-outline"
  }, [_c('input', {
    staticClass: "switch-input",
    attrs: {
      "type": "checkbox",
      "checked": ""
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "switch-label",
    attrs: {
      "data-on": "On",
      "data-off": "Off"
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "switch-handle"
  })]), _vm._v("\n             \n          "), _c('label', {
    staticClass: "switch switch-text switch-pill switch-success-outline"
  }, [_c('input', {
    staticClass: "switch-input",
    attrs: {
      "type": "checkbox",
      "checked": ""
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "switch-label",
    attrs: {
      "data-on": "On",
      "data-off": "Off"
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "switch-handle"
  })]), _vm._v("\n             \n          "), _c('label', {
    staticClass: "switch switch-text switch-pill switch-warning-outline"
  }, [_c('input', {
    staticClass: "switch-input",
    attrs: {
      "type": "checkbox",
      "checked": ""
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "switch-label",
    attrs: {
      "data-on": "On",
      "data-off": "Off"
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "switch-handle"
  })]), _vm._v("\n             \n          "), _c('label', {
    staticClass: "switch switch-text switch-pill switch-info-outline"
  }, [_c('input', {
    staticClass: "switch-input",
    attrs: {
      "type": "checkbox",
      "checked": ""
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "switch-label",
    attrs: {
      "data-on": "On",
      "data-off": "Off"
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "switch-handle"
  })]), _vm._v("\n             \n          "), _c('label', {
    staticClass: "switch switch-text switch-pill switch-danger-outline"
  }, [_c('input', {
    staticClass: "switch-input",
    attrs: {
      "type": "checkbox",
      "checked": ""
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "switch-label",
    attrs: {
      "data-on": "On",
      "data-off": "Off"
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "switch-handle"
  })])])])]), _vm._v(" "), _c('div', {
    staticClass: "col-md-6"
  }, [_c('div', {
    staticClass: "card"
  }, [_c('div', {
    staticClass: "card-header"
  }, [_vm._v("\n          Switch with text outline alternative\n        ")]), _vm._v(" "), _c('div', {
    staticClass: "card-block"
  }, [_c('label', {
    staticClass: "switch switch-text switch-primary-outline-alt"
  }, [_c('input', {
    staticClass: "switch-input",
    attrs: {
      "type": "checkbox",
      "checked": ""
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "switch-label",
    attrs: {
      "data-on": "On",
      "data-off": "Off"
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "switch-handle"
  })]), _vm._v("\n             \n          "), _c('label', {
    staticClass: "switch switch-text switch-secondary-outline-alt"
  }, [_c('input', {
    staticClass: "switch-input",
    attrs: {
      "type": "checkbox",
      "checked": ""
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "switch-label",
    attrs: {
      "data-on": "On",
      "data-off": "Off"
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "switch-handle"
  })]), _vm._v("\n             \n          "), _c('label', {
    staticClass: "switch switch-text switch-success-outline-alt"
  }, [_c('input', {
    staticClass: "switch-input",
    attrs: {
      "type": "checkbox",
      "checked": ""
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "switch-label",
    attrs: {
      "data-on": "On",
      "data-off": "Off"
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "switch-handle"
  })]), _vm._v("\n             \n          "), _c('label', {
    staticClass: "switch switch-text switch-warning-outline-alt"
  }, [_c('input', {
    staticClass: "switch-input",
    attrs: {
      "type": "checkbox",
      "checked": ""
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "switch-label",
    attrs: {
      "data-on": "On",
      "data-off": "Off"
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "switch-handle"
  })]), _vm._v("\n             \n          "), _c('label', {
    staticClass: "switch switch-text switch-info-outline-alt"
  }, [_c('input', {
    staticClass: "switch-input",
    attrs: {
      "type": "checkbox",
      "checked": ""
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "switch-label",
    attrs: {
      "data-on": "On",
      "data-off": "Off"
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "switch-handle"
  })]), _vm._v("\n             \n          "), _c('label', {
    staticClass: "switch switch-text switch-danger-outline-alt"
  }, [_c('input', {
    staticClass: "switch-input",
    attrs: {
      "type": "checkbox",
      "checked": ""
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "switch-label",
    attrs: {
      "data-on": "On",
      "data-off": "Off"
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "switch-handle"
  })])])])]), _vm._v(" "), _c('div', {
    staticClass: "col-md-6"
  }, [_c('div', {
    staticClass: "card"
  }, [_c('div', {
    staticClass: "card-header"
  }, [_vm._v("\n          Switch with text outline alternative - pills\n        ")]), _vm._v(" "), _c('div', {
    staticClass: "card-block"
  }, [_c('label', {
    staticClass: "switch switch-text switch-pill switch-primary-outline-alt"
  }, [_c('input', {
    staticClass: "switch-input",
    attrs: {
      "type": "checkbox",
      "checked": ""
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "switch-label",
    attrs: {
      "data-on": "On",
      "data-off": "Off"
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "switch-handle"
  })]), _vm._v("\n             \n          "), _c('label', {
    staticClass: "switch switch-text switch-pill switch-secondary-outline-alt"
  }, [_c('input', {
    staticClass: "switch-input",
    attrs: {
      "type": "checkbox",
      "checked": ""
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "switch-label",
    attrs: {
      "data-on": "On",
      "data-off": "Off"
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "switch-handle"
  })]), _vm._v("\n             \n          "), _c('label', {
    staticClass: "switch switch-text switch-pill switch-success-outline-alt"
  }, [_c('input', {
    staticClass: "switch-input",
    attrs: {
      "type": "checkbox",
      "checked": ""
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "switch-label",
    attrs: {
      "data-on": "On",
      "data-off": "Off"
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "switch-handle"
  })]), _vm._v("\n             \n          "), _c('label', {
    staticClass: "switch switch-text switch-pill switch-warning-outline-alt"
  }, [_c('input', {
    staticClass: "switch-input",
    attrs: {
      "type": "checkbox",
      "checked": ""
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "switch-label",
    attrs: {
      "data-on": "On",
      "data-off": "Off"
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "switch-handle"
  })]), _vm._v("\n             \n          "), _c('label', {
    staticClass: "switch switch-text switch-pill switch-info-outline-alt"
  }, [_c('input', {
    staticClass: "switch-input",
    attrs: {
      "type": "checkbox",
      "checked": ""
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "switch-label",
    attrs: {
      "data-on": "On",
      "data-off": "Off"
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "switch-handle"
  })]), _vm._v("\n             \n          "), _c('label', {
    staticClass: "switch switch-text switch-pill switch-danger-outline-alt"
  }, [_c('input', {
    staticClass: "switch-input",
    attrs: {
      "type": "checkbox",
      "checked": ""
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "switch-label",
    attrs: {
      "data-on": "On",
      "data-off": "Off"
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "switch-handle"
  })])])])]), _vm._v(" "), _c('div', {
    staticClass: "col-md-6"
  }, [_c('div', {
    staticClass: "card"
  }, [_c('div', {
    staticClass: "card-header"
  }, [_vm._v("\n          Switch with icon\n        ")]), _vm._v(" "), _c('div', {
    staticClass: "card-block"
  }, [_c('label', {
    staticClass: "switch switch-icon switch-primary"
  }, [_c('input', {
    staticClass: "switch-input",
    attrs: {
      "type": "checkbox",
      "checked": ""
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "switch-label",
    attrs: {
      "data-on": "&#xf00c",
      "data-off": "&#xf00d"
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "switch-handle"
  })]), _vm._v("\n             \n          "), _c('label', {
    staticClass: "switch switch-icon switch-secondary"
  }, [_c('input', {
    staticClass: "switch-input",
    attrs: {
      "type": "checkbox",
      "checked": ""
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "switch-label",
    attrs: {
      "data-on": "&#xf00c",
      "data-off": "&#xf00d"
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "switch-handle"
  })]), _vm._v("\n             \n          "), _c('label', {
    staticClass: "switch switch-icon switch-success"
  }, [_c('input', {
    staticClass: "switch-input",
    attrs: {
      "type": "checkbox",
      "checked": ""
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "switch-label",
    attrs: {
      "data-on": "&#xf00c",
      "data-off": "&#xf00d"
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "switch-handle"
  })]), _vm._v("\n             \n          "), _c('label', {
    staticClass: "switch switch-icon switch-warning"
  }, [_c('input', {
    staticClass: "switch-input",
    attrs: {
      "type": "checkbox",
      "checked": ""
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "switch-label",
    attrs: {
      "data-on": "&#xf00c",
      "data-off": "&#xf00d"
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "switch-handle"
  })]), _vm._v("\n             \n          "), _c('label', {
    staticClass: "switch switch-icon switch-info"
  }, [_c('input', {
    staticClass: "switch-input",
    attrs: {
      "type": "checkbox",
      "checked": ""
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "switch-label",
    attrs: {
      "data-on": "&#xf00c",
      "data-off": "&#xf00d"
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "switch-handle"
  })]), _vm._v("\n             \n          "), _c('label', {
    staticClass: "switch switch-icon switch-danger"
  }, [_c('input', {
    staticClass: "switch-input",
    attrs: {
      "type": "checkbox",
      "checked": ""
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "switch-label",
    attrs: {
      "data-on": "&#xf00c",
      "data-off": "&#xf00d"
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "switch-handle"
  })])])])]), _vm._v(" "), _c('div', {
    staticClass: "col-md-6"
  }, [_c('div', {
    staticClass: "card"
  }, [_c('div', {
    staticClass: "card-header"
  }, [_vm._v("\n          Switch with icon - pills\n        ")]), _vm._v(" "), _c('div', {
    staticClass: "card-block"
  }, [_c('label', {
    staticClass: "switch switch-icon switch-pill switch-primary"
  }, [_c('input', {
    staticClass: "switch-input",
    attrs: {
      "type": "checkbox",
      "checked": ""
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "switch-label",
    attrs: {
      "data-on": "&#xf00c",
      "data-off": "&#xf00d"
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "switch-handle"
  })]), _vm._v("\n             \n          "), _c('label', {
    staticClass: "switch switch-icon switch-pill switch-secondary"
  }, [_c('input', {
    staticClass: "switch-input",
    attrs: {
      "type": "checkbox",
      "checked": ""
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "switch-label",
    attrs: {
      "data-on": "&#xf00c",
      "data-off": "&#xf00d"
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "switch-handle"
  })]), _vm._v("\n             \n          "), _c('label', {
    staticClass: "switch switch-icon switch-pill switch-success"
  }, [_c('input', {
    staticClass: "switch-input",
    attrs: {
      "type": "checkbox",
      "checked": ""
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "switch-label",
    attrs: {
      "data-on": "&#xf00c",
      "data-off": "&#xf00d"
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "switch-handle"
  })]), _vm._v("\n             \n          "), _c('label', {
    staticClass: "switch switch-icon switch-pill switch-warning"
  }, [_c('input', {
    staticClass: "switch-input",
    attrs: {
      "type": "checkbox",
      "checked": ""
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "switch-label",
    attrs: {
      "data-on": "&#xf00c",
      "data-off": "&#xf00d"
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "switch-handle"
  })]), _vm._v("\n             \n          "), _c('label', {
    staticClass: "switch switch-icon switch-pill switch-info"
  }, [_c('input', {
    staticClass: "switch-input",
    attrs: {
      "type": "checkbox",
      "checked": ""
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "switch-label",
    attrs: {
      "data-on": "&#xf00c",
      "data-off": "&#xf00d"
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "switch-handle"
  })]), _vm._v("\n             \n          "), _c('label', {
    staticClass: "switch switch-icon switch-pill switch-danger"
  }, [_c('input', {
    staticClass: "switch-input",
    attrs: {
      "type": "checkbox",
      "checked": ""
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "switch-label",
    attrs: {
      "data-on": "&#xf00c",
      "data-off": "&#xf00d"
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "switch-handle"
  })])])])]), _vm._v(" "), _c('div', {
    staticClass: "col-md-6"
  }, [_c('div', {
    staticClass: "card"
  }, [_c('div', {
    staticClass: "card-header"
  }, [_vm._v("\n          Switch with icon outline\n        ")]), _vm._v(" "), _c('div', {
    staticClass: "card-block"
  }, [_c('label', {
    staticClass: "switch switch-icon switch-primary-outline"
  }, [_c('input', {
    staticClass: "switch-input",
    attrs: {
      "type": "checkbox",
      "checked": ""
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "switch-label",
    attrs: {
      "data-on": "&#xf00c",
      "data-off": "&#xf00d"
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "switch-handle"
  })]), _vm._v("\n             \n          "), _c('label', {
    staticClass: "switch switch-icon switch-secondary-outline"
  }, [_c('input', {
    staticClass: "switch-input",
    attrs: {
      "type": "checkbox",
      "checked": ""
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "switch-label",
    attrs: {
      "data-on": "&#xf00c",
      "data-off": "&#xf00d"
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "switch-handle"
  })]), _vm._v("\n             \n          "), _c('label', {
    staticClass: "switch switch-icon switch-success-outline"
  }, [_c('input', {
    staticClass: "switch-input",
    attrs: {
      "type": "checkbox",
      "checked": ""
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "switch-label",
    attrs: {
      "data-on": "&#xf00c",
      "data-off": "&#xf00d"
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "switch-handle"
  })]), _vm._v("\n             \n          "), _c('label', {
    staticClass: "switch switch-icon switch-warning-outline"
  }, [_c('input', {
    staticClass: "switch-input",
    attrs: {
      "type": "checkbox",
      "checked": ""
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "switch-label",
    attrs: {
      "data-on": "&#xf00c",
      "data-off": "&#xf00d"
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "switch-handle"
  })]), _vm._v("\n             \n          "), _c('label', {
    staticClass: "switch switch-icon switch-info-outline"
  }, [_c('input', {
    staticClass: "switch-input",
    attrs: {
      "type": "checkbox",
      "checked": ""
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "switch-label",
    attrs: {
      "data-on": "&#xf00c",
      "data-off": "&#xf00d"
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "switch-handle"
  })]), _vm._v("\n             \n          "), _c('label', {
    staticClass: "switch switch-icon switch-danger-outline"
  }, [_c('input', {
    staticClass: "switch-input",
    attrs: {
      "type": "checkbox",
      "checked": ""
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "switch-label",
    attrs: {
      "data-on": "&#xf00c",
      "data-off": "&#xf00d"
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "switch-handle"
  })])])])]), _vm._v(" "), _c('div', {
    staticClass: "col-md-6"
  }, [_c('div', {
    staticClass: "card"
  }, [_c('div', {
    staticClass: "card-header"
  }, [_vm._v("\n          Switch with icon outline - pills\n        ")]), _vm._v(" "), _c('div', {
    staticClass: "card-block"
  }, [_c('label', {
    staticClass: "switch switch-icon switch-pill switch-primary-outline"
  }, [_c('input', {
    staticClass: "switch-input",
    attrs: {
      "type": "checkbox",
      "checked": ""
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "switch-label",
    attrs: {
      "data-on": "&#xf00c",
      "data-off": "&#xf00d"
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "switch-handle"
  })]), _vm._v("\n             \n          "), _c('label', {
    staticClass: "switch switch-icon switch-pill switch-secondary-outline"
  }, [_c('input', {
    staticClass: "switch-input",
    attrs: {
      "type": "checkbox",
      "checked": ""
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "switch-label",
    attrs: {
      "data-on": "&#xf00c",
      "data-off": "&#xf00d"
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "switch-handle"
  })]), _vm._v("\n             \n          "), _c('label', {
    staticClass: "switch switch-icon switch-pill switch-success-outline"
  }, [_c('input', {
    staticClass: "switch-input",
    attrs: {
      "type": "checkbox",
      "checked": ""
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "switch-label",
    attrs: {
      "data-on": "&#xf00c",
      "data-off": "&#xf00d"
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "switch-handle"
  })]), _vm._v("\n             \n          "), _c('label', {
    staticClass: "switch switch-icon switch-pill switch-warning-outline"
  }, [_c('input', {
    staticClass: "switch-input",
    attrs: {
      "type": "checkbox",
      "checked": ""
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "switch-label",
    attrs: {
      "data-on": "&#xf00c",
      "data-off": "&#xf00d"
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "switch-handle"
  })]), _vm._v("\n             \n          "), _c('label', {
    staticClass: "switch switch-icon switch-pill switch-info-outline"
  }, [_c('input', {
    staticClass: "switch-input",
    attrs: {
      "type": "checkbox",
      "checked": ""
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "switch-label",
    attrs: {
      "data-on": "&#xf00c",
      "data-off": "&#xf00d"
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "switch-handle"
  })]), _vm._v("\n             \n          "), _c('label', {
    staticClass: "switch switch-icon switch-pill switch-danger-outline"
  }, [_c('input', {
    staticClass: "switch-input",
    attrs: {
      "type": "checkbox",
      "checked": ""
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "switch-label",
    attrs: {
      "data-on": "&#xf00c",
      "data-off": "&#xf00d"
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "switch-handle"
  })])])])]), _vm._v(" "), _c('div', {
    staticClass: "col-md-6"
  }, [_c('div', {
    staticClass: "card"
  }, [_c('div', {
    staticClass: "card-header"
  }, [_vm._v("\n          Switch with icon outline alternative\n        ")]), _vm._v(" "), _c('div', {
    staticClass: "card-block"
  }, [_c('label', {
    staticClass: "switch switch-icon switch-primary-outline-alt"
  }, [_c('input', {
    staticClass: "switch-input",
    attrs: {
      "type": "checkbox",
      "checked": ""
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "switch-label",
    attrs: {
      "data-on": "&#xf00c",
      "data-off": "&#xf00d"
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "switch-handle"
  })]), _vm._v("\n             \n          "), _c('label', {
    staticClass: "switch switch-icon switch-secondary-outline-alt"
  }, [_c('input', {
    staticClass: "switch-input",
    attrs: {
      "type": "checkbox",
      "checked": ""
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "switch-label",
    attrs: {
      "data-on": "&#xf00c",
      "data-off": "&#xf00d"
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "switch-handle"
  })]), _vm._v("\n             \n          "), _c('label', {
    staticClass: "switch switch-icon switch-success-outline-alt"
  }, [_c('input', {
    staticClass: "switch-input",
    attrs: {
      "type": "checkbox",
      "checked": ""
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "switch-label",
    attrs: {
      "data-on": "&#xf00c",
      "data-off": "&#xf00d"
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "switch-handle"
  })]), _vm._v("\n             \n          "), _c('label', {
    staticClass: "switch switch-icon switch-warning-outline-alt"
  }, [_c('input', {
    staticClass: "switch-input",
    attrs: {
      "type": "checkbox",
      "checked": ""
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "switch-label",
    attrs: {
      "data-on": "&#xf00c",
      "data-off": "&#xf00d"
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "switch-handle"
  })]), _vm._v("\n             \n          "), _c('label', {
    staticClass: "switch switch-icon switch-info-outline-alt"
  }, [_c('input', {
    staticClass: "switch-input",
    attrs: {
      "type": "checkbox",
      "checked": ""
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "switch-label",
    attrs: {
      "data-on": "&#xf00c",
      "data-off": "&#xf00d"
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "switch-handle"
  })]), _vm._v("\n             \n          "), _c('label', {
    staticClass: "switch switch-icon switch-danger-outline-alt"
  }, [_c('input', {
    staticClass: "switch-input",
    attrs: {
      "type": "checkbox",
      "checked": ""
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "switch-label",
    attrs: {
      "data-on": "&#xf00c",
      "data-off": "&#xf00d"
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "switch-handle"
  })])])])]), _vm._v(" "), _c('div', {
    staticClass: "col-md-6"
  }, [_c('div', {
    staticClass: "card"
  }, [_c('div', {
    staticClass: "card-header"
  }, [_vm._v("\n          Switch with icon outline alternative - pills\n        ")]), _vm._v(" "), _c('div', {
    staticClass: "card-block"
  }, [_c('label', {
    staticClass: "switch switch-icon switch-pill switch-primary-outline-alt"
  }, [_c('input', {
    staticClass: "switch-input",
    attrs: {
      "type": "checkbox",
      "checked": ""
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "switch-label",
    attrs: {
      "data-on": "&#xf00c",
      "data-off": "&#xf00d"
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "switch-handle"
  })]), _vm._v("\n             \n          "), _c('label', {
    staticClass: "switch switch-icon switch-pill switch-secondary-outline-alt"
  }, [_c('input', {
    staticClass: "switch-input",
    attrs: {
      "type": "checkbox",
      "checked": ""
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "switch-label",
    attrs: {
      "data-on": "&#xf00c",
      "data-off": "&#xf00d"
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "switch-handle"
  })]), _vm._v("\n             \n          "), _c('label', {
    staticClass: "switch switch-icon switch-pill switch-success-outline-alt"
  }, [_c('input', {
    staticClass: "switch-input",
    attrs: {
      "type": "checkbox",
      "checked": ""
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "switch-label",
    attrs: {
      "data-on": "&#xf00c",
      "data-off": "&#xf00d"
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "switch-handle"
  })]), _vm._v("\n             \n          "), _c('label', {
    staticClass: "switch switch-icon switch-pill switch-warning-outline-alt"
  }, [_c('input', {
    staticClass: "switch-input",
    attrs: {
      "type": "checkbox",
      "checked": ""
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "switch-label",
    attrs: {
      "data-on": "&#xf00c",
      "data-off": "&#xf00d"
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "switch-handle"
  })]), _vm._v("\n             \n          "), _c('label', {
    staticClass: "switch switch-icon switch-pill switch-info-outline-alt"
  }, [_c('input', {
    staticClass: "switch-input",
    attrs: {
      "type": "checkbox",
      "checked": ""
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "switch-label",
    attrs: {
      "data-on": "&#xf00c",
      "data-off": "&#xf00d"
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "switch-handle"
  })]), _vm._v("\n             \n          "), _c('label', {
    staticClass: "switch switch-icon switch-pill switch-danger-outline-alt"
  }, [_c('input', {
    staticClass: "switch-input",
    attrs: {
      "type": "checkbox",
      "checked": ""
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "switch-label",
    attrs: {
      "data-on": "&#xf00c",
      "data-off": "&#xf00d"
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "switch-handle"
  })])])])]), _vm._v(" "), _c('div', {
    staticClass: "col-md-12"
  }, [_c('div', {
    staticClass: "card"
  }, [_c('div', {
    staticClass: "card-header"
  }, [_vm._v("\n          Sizes\n        ")]), _vm._v(" "), _c('div', {
    staticClass: "card-block p-0"
  }, [_c('table', {
    staticClass: "table table-hover table-striped table-align-middle mb-0"
  }, [_c('thead', [_c('th', [_vm._v("Size")]), _vm._v(" "), _c('th', [_vm._v("Example")]), _vm._v(" "), _c('th', [_vm._v("CSS Class")])]), _vm._v(" "), _c('tbody', [_c('tr', [_c('td', [_vm._v("\n                  Large\n                ")]), _vm._v(" "), _c('td', [_c('label', {
    staticClass: "switch switch-lg switch-3d switch-primary"
  }, [_c('input', {
    staticClass: "switch-input",
    attrs: {
      "type": "checkbox",
      "checked": ""
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "switch-label"
  }), _vm._v(" "), _c('span', {
    staticClass: "switch-handle"
  })])]), _vm._v(" "), _c('td', [_vm._v("\n                  Add following class "), _c('code', [_vm._v(".switch-lg")])])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("\n                  Normal\n                ")]), _vm._v(" "), _c('td', [_c('label', {
    staticClass: "switch switch-3d switch-primary"
  }, [_c('input', {
    staticClass: "switch-input",
    attrs: {
      "type": "checkbox",
      "checked": ""
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "switch-label"
  }), _vm._v(" "), _c('span', {
    staticClass: "switch-handle"
  })])]), _vm._v(" "), _c('td', [_vm._v("\n                  -\n                ")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("\n                  Small\n                ")]), _vm._v(" "), _c('td', [_c('label', {
    staticClass: "switch switch-sm switch-3d switch-primary"
  }, [_c('input', {
    staticClass: "switch-input",
    attrs: {
      "type": "checkbox",
      "checked": ""
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "switch-label"
  }), _vm._v(" "), _c('span', {
    staticClass: "switch-handle"
  })])]), _vm._v(" "), _c('td', [_vm._v("\n                  Add following class "), _c('code', [_vm._v(".switch-sm")])])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("\n                  Extra small\n                ")]), _vm._v(" "), _c('td', [_c('label', {
    staticClass: "switch switch-xs switch-3d switch-primary"
  }, [_c('input', {
    staticClass: "switch-input",
    attrs: {
      "type": "checkbox",
      "checked": ""
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "switch-label"
  }), _vm._v(" "), _c('span', {
    staticClass: "switch-handle"
  })])]), _vm._v(" "), _c('td', [_vm._v("\n                  Add following class "), _c('code', [_vm._v(".switch-sm")])])])])])])])])])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-f278e5a2", module.exports)
  }
}

/***/ })

});