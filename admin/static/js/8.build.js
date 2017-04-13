webpackJsonp([8],{

/***/ 48:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(59),
  /* template */
  __webpack_require__(74),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/home/ubuntu/workspace/content/plugins/Buttons.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Buttons.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-046f8a44", Component.options)
  } else {
    hotAPI.reload("data-v-046f8a44", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 59:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'buttons'
});

/***/ }),

/***/ 74:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _vm._m(0)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "animated fadeIn"
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-md-6"
  }, [_c('div', {
    staticClass: "card"
  }, [_c('div', {
    staticClass: "card-header"
  }, [_c('strong', [_vm._v("Options")])]), _vm._v(" "), _c('div', {
    staticClass: "card-block"
  }, [_c('button', {
    staticClass: "btn btn-primary",
    attrs: {
      "type": "button"
    }
  }, [_vm._v("Primary")]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-secondary",
    attrs: {
      "type": "button"
    }
  }, [_vm._v("Secondary")]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-success",
    attrs: {
      "type": "button"
    }
  }, [_vm._v("Success")]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-warning",
    attrs: {
      "type": "button"
    }
  }, [_vm._v("Warning")]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-danger",
    attrs: {
      "type": "button"
    }
  }, [_vm._v("Danger")]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-link",
    attrs: {
      "type": "button"
    }
  }, [_vm._v("Link")])])]), _vm._v(" "), _c('div', {
    staticClass: "card"
  }, [_c('div', {
    staticClass: "card-header"
  }, [_c('strong', [_vm._v("With Icons")])]), _vm._v(" "), _c('div', {
    staticClass: "card-block"
  }, [_c('button', {
    staticClass: "btn btn-primary",
    attrs: {
      "type": "button"
    }
  }, [_c('i', {
    staticClass: "fa fa-star"
  }), _vm._v("  Primary")]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-secondary",
    attrs: {
      "type": "button"
    }
  }, [_c('i', {
    staticClass: "fa fa-lightbulb-o"
  }), _vm._v("  Secondary")]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-success",
    attrs: {
      "type": "button"
    }
  }, [_c('i', {
    staticClass: "fa fa-magic"
  }), _vm._v("  Success")]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-warning",
    attrs: {
      "type": "button"
    }
  }, [_c('i', {
    staticClass: "fa fa-map-marker"
  }), _vm._v("  Warning")]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-danger",
    attrs: {
      "type": "button"
    }
  }, [_c('i', {
    staticClass: "fa fa-rss"
  }), _vm._v("  Danger")]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-link",
    attrs: {
      "type": "button"
    }
  }, [_c('i', {
    staticClass: "fa fa-link"
  }), _vm._v("  Link")])])]), _vm._v(" "), _c('div', {
    staticClass: "card"
  }, [_c('div', {
    staticClass: "card-header"
  }, [_c('strong', [_vm._v("Size Large")]), _vm._v(" "), _c('small', [_vm._v("Add this class "), _c('code', [_vm._v(".btn-lg")])])]), _vm._v(" "), _c('div', {
    staticClass: "card-block"
  }, [_c('button', {
    staticClass: "btn btn-primary btn-lg",
    attrs: {
      "type": "button"
    }
  }, [_vm._v("Primary")]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-secondary btn-lg",
    attrs: {
      "type": "button"
    }
  }, [_vm._v("Secondary")]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-success btn-lg",
    attrs: {
      "type": "button"
    }
  }, [_vm._v("Success")]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-info btn-lg",
    attrs: {
      "type": "button"
    }
  }, [_vm._v("Info")]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-warning btn-lg",
    attrs: {
      "type": "button"
    }
  }, [_vm._v("Warning")]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-danger btn-lg",
    attrs: {
      "type": "button"
    }
  }, [_vm._v("Danger")]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-link btn-lg",
    attrs: {
      "type": "button"
    }
  }, [_vm._v("Link")])])]), _vm._v(" "), _c('div', {
    staticClass: "card"
  }, [_c('div', {
    staticClass: "card-header"
  }, [_c('strong', [_vm._v("Size Small")]), _vm._v(" "), _c('small', [_vm._v("Add this class "), _c('code', [_vm._v(".btn-sm")])])]), _vm._v(" "), _c('div', {
    staticClass: "card-block"
  }, [_c('button', {
    staticClass: "btn btn-primary btn-sm",
    attrs: {
      "type": "button"
    }
  }, [_vm._v("Primary")]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-secondary btn-sm",
    attrs: {
      "type": "button"
    }
  }, [_vm._v("Secondary")]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-success btn-sm",
    attrs: {
      "type": "button"
    }
  }, [_vm._v("Success")]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-info btn-sm",
    attrs: {
      "type": "button"
    }
  }, [_vm._v("Info")]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-warning btn-sm",
    attrs: {
      "type": "button"
    }
  }, [_vm._v("Warning")]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-danger btn-sm",
    attrs: {
      "type": "button"
    }
  }, [_vm._v("Danger")]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-link btn-sm",
    attrs: {
      "type": "button"
    }
  }, [_vm._v("Link")])])]), _vm._v(" "), _c('div', {
    staticClass: "card"
  }, [_c('div', {
    staticClass: "card-header"
  }, [_c('strong', [_vm._v("Disabled state")]), _vm._v(" "), _c('small', [_vm._v("Add this "), _c('code', [_vm._v("disabled=\"disabled\"")])])]), _vm._v(" "), _c('div', {
    staticClass: "card-block"
  }, [_c('button', {
    staticClass: "btn btn-primary",
    attrs: {
      "type": "button",
      "disabled": "disabled"
    }
  }, [_vm._v("Primary")]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-secondary",
    attrs: {
      "type": "button",
      "disabled": "disabled"
    }
  }, [_vm._v("Secondary")]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-success",
    attrs: {
      "type": "button",
      "disabled": "disabled"
    }
  }, [_vm._v("Success")]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-info",
    attrs: {
      "type": "button",
      "disabled": "disabled"
    }
  }, [_vm._v("Info")]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-warning",
    attrs: {
      "type": "button",
      "disabled": "disabled"
    }
  }, [_vm._v("Warning")]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-danger",
    attrs: {
      "type": "button",
      "disabled": "disabled"
    }
  }, [_vm._v("Danger")]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-link",
    attrs: {
      "type": "button",
      "disabled": "disabled"
    }
  }, [_vm._v("Link")])])]), _vm._v(" "), _c('div', {
    staticClass: "card"
  }, [_c('div', {
    staticClass: "card-header"
  }, [_c('strong', [_vm._v("Active state")]), _vm._v(" "), _c('small', [_vm._v("Add this class "), _c('code', [_vm._v(".active")])])]), _vm._v(" "), _c('div', {
    staticClass: "card-block"
  }, [_c('button', {
    staticClass: "btn btn-primary active",
    attrs: {
      "type": "button"
    }
  }, [_vm._v("Primary")]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-secondary active",
    attrs: {
      "type": "button"
    }
  }, [_vm._v("Secondary")]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-success active",
    attrs: {
      "type": "button"
    }
  }, [_vm._v("Success")]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-info active",
    attrs: {
      "type": "button"
    }
  }, [_vm._v("Info")]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-warning active",
    attrs: {
      "type": "button"
    }
  }, [_vm._v("Warning")]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-danger active",
    attrs: {
      "type": "button"
    }
  }, [_vm._v("Danger")]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-link active",
    attrs: {
      "type": "button"
    }
  }, [_vm._v("Link")])])]), _vm._v(" "), _c('div', {
    staticClass: "card"
  }, [_c('div', {
    staticClass: "card-header"
  }, [_c('strong', [_vm._v("Block Level Buttons")]), _vm._v(" "), _c('small', [_vm._v("Add this class "), _c('code', [_vm._v(".btn-block")])])]), _vm._v(" "), _c('div', {
    staticClass: "card-block"
  }, [_c('button', {
    staticClass: "btn btn-secondary btn-lg btn-block",
    attrs: {
      "type": "button"
    }
  }, [_vm._v("Block level button")]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-primary btn-lg btn-block",
    attrs: {
      "type": "button"
    }
  }, [_vm._v("Block level button")]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-success btn-lg btn-block",
    attrs: {
      "type": "button"
    }
  }, [_vm._v("Block level button")]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-info btn-lg btn-block",
    attrs: {
      "type": "button"
    }
  }, [_vm._v("Block level button")]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-warning btn-lg btn-block",
    attrs: {
      "type": "button"
    }
  }, [_vm._v("Block level button")]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-danger btn-lg btn-block",
    attrs: {
      "type": "button"
    }
  }, [_vm._v("Block level button")]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-link btn-lg btn-block",
    attrs: {
      "type": "button"
    }
  }, [_vm._v("Block level button")])])])]), _vm._v(" "), _c('div', {
    staticClass: "col-md-6"
  }, [_c('div', {
    staticClass: "card"
  }, [_c('div', {
    staticClass: "card-header"
  }, [_c('strong', [_vm._v("Options")])]), _vm._v(" "), _c('div', {
    staticClass: "card-block"
  }, [_c('button', {
    staticClass: "btn btn-outline-primary",
    attrs: {
      "type": "button"
    }
  }, [_vm._v("Primary")]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-outline-secondary",
    attrs: {
      "type": "button"
    }
  }, [_vm._v("Secondary")]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-outline-success",
    attrs: {
      "type": "button"
    }
  }, [_vm._v("Success")]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-outline-warning",
    attrs: {
      "type": "button"
    }
  }, [_vm._v("Warning")]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-outline-danger",
    attrs: {
      "type": "button"
    }
  }, [_vm._v("Danger")])])]), _vm._v(" "), _c('div', {
    staticClass: "card"
  }, [_c('div', {
    staticClass: "card-header"
  }, [_c('strong', [_vm._v("With Icons")])]), _vm._v(" "), _c('div', {
    staticClass: "card-block"
  }, [_c('button', {
    staticClass: "btn btn-outline-primary",
    attrs: {
      "type": "button"
    }
  }, [_c('i', {
    staticClass: "fa fa-star"
  }), _vm._v("  Primary")]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-outline-secondary",
    attrs: {
      "type": "button"
    }
  }, [_c('i', {
    staticClass: "fa fa-lightbulb-o"
  }), _vm._v("  Secondary")]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-outline-success",
    attrs: {
      "type": "button"
    }
  }, [_c('i', {
    staticClass: "fa fa-magic"
  }), _vm._v("  Success")]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-outline-warning",
    attrs: {
      "type": "button"
    }
  }, [_c('i', {
    staticClass: "fa fa-map-marker"
  }), _vm._v("  Warning")]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-outline-danger",
    attrs: {
      "type": "button"
    }
  }, [_c('i', {
    staticClass: "fa fa-rss"
  }), _vm._v("  Danger")])])]), _vm._v(" "), _c('div', {
    staticClass: "card"
  }, [_c('div', {
    staticClass: "card-header"
  }, [_c('strong', [_vm._v("Size Large")]), _vm._v(" "), _c('small', [_vm._v("Add this class "), _c('code', [_vm._v(".btn-lg")])])]), _vm._v(" "), _c('div', {
    staticClass: "card-block"
  }, [_c('button', {
    staticClass: "btn btn-outline-primary btn-lg",
    attrs: {
      "type": "button"
    }
  }, [_vm._v("Primary")]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-outline-secondary btn-lg",
    attrs: {
      "type": "button"
    }
  }, [_vm._v("Secondary")]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-outline-success btn-lg",
    attrs: {
      "type": "button"
    }
  }, [_vm._v("Success")]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-outline-info btn-lg",
    attrs: {
      "type": "button"
    }
  }, [_vm._v("Info")]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-outline-warning btn-lg",
    attrs: {
      "type": "button"
    }
  }, [_vm._v("Warning")]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-outline-danger btn-lg",
    attrs: {
      "type": "button"
    }
  }, [_vm._v("Danger")])])]), _vm._v(" "), _c('div', {
    staticClass: "card"
  }, [_c('div', {
    staticClass: "card-header"
  }, [_c('strong', [_vm._v("Size Small")]), _vm._v(" "), _c('small', [_vm._v("Add this class "), _c('code', [_vm._v(".btn-sm")])])]), _vm._v(" "), _c('div', {
    staticClass: "card-block"
  }, [_c('button', {
    staticClass: "btn btn-outline-primary btn-sm",
    attrs: {
      "type": "button"
    }
  }, [_vm._v("Primary")]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-outline-secondary btn-sm",
    attrs: {
      "type": "button"
    }
  }, [_vm._v("Secondary")]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-outline-success btn-sm",
    attrs: {
      "type": "button"
    }
  }, [_vm._v("Success")]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-outline-info btn-sm",
    attrs: {
      "type": "button"
    }
  }, [_vm._v("Info")]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-outline-warning btn-sm",
    attrs: {
      "type": "button"
    }
  }, [_vm._v("Warning")]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-outline-danger btn-sm",
    attrs: {
      "type": "button"
    }
  }, [_vm._v("Danger")])])]), _vm._v(" "), _c('div', {
    staticClass: "card"
  }, [_c('div', {
    staticClass: "card-header"
  }, [_c('strong', [_vm._v("Disabled state")]), _vm._v(" "), _c('small', [_vm._v("Add this "), _c('code', [_vm._v("disabled=\"disabled\"")])])]), _vm._v(" "), _c('div', {
    staticClass: "card-block"
  }, [_c('button', {
    staticClass: "btn btn-outline-primary",
    attrs: {
      "type": "button",
      "disabled": "disabled"
    }
  }, [_vm._v("Primary")]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-outline-secondary",
    attrs: {
      "type": "button",
      "disabled": "disabled"
    }
  }, [_vm._v("Secondary")]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-success",
    attrs: {
      "type": "button",
      "disabled": "disabled"
    }
  }, [_vm._v("Success")]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-outline-info",
    attrs: {
      "type": "button",
      "disabled": "disabled"
    }
  }, [_vm._v("Info")]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-outline-warning",
    attrs: {
      "type": "button",
      "disabled": "disabled"
    }
  }, [_vm._v("Warning")]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-outline-danger",
    attrs: {
      "type": "button",
      "disabled": "disabled"
    }
  }, [_vm._v("Danger")])])]), _vm._v(" "), _c('div', {
    staticClass: "card"
  }, [_c('div', {
    staticClass: "card-header"
  }, [_c('strong', [_vm._v("Active state")]), _vm._v(" "), _c('small', [_vm._v("Add this class "), _c('code', [_vm._v(".active")])])]), _vm._v(" "), _c('div', {
    staticClass: "card-block"
  }, [_c('button', {
    staticClass: "btn btn-outline-primary active",
    attrs: {
      "type": "button"
    }
  }, [_vm._v("Primary")]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-outline-secondary active",
    attrs: {
      "type": "button"
    }
  }, [_vm._v("Secondary")]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-outline-success active",
    attrs: {
      "type": "button"
    }
  }, [_vm._v("Success")]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-outline-info active",
    attrs: {
      "type": "button"
    }
  }, [_vm._v("Info")]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-outline-warning active",
    attrs: {
      "type": "button"
    }
  }, [_vm._v("Warning")]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-outline-danger active",
    attrs: {
      "type": "button"
    }
  }, [_vm._v("Danger")])])]), _vm._v(" "), _c('div', {
    staticClass: "card"
  }, [_c('div', {
    staticClass: "card-header"
  }, [_c('strong', [_vm._v("Block Level Buttons")]), _vm._v(" "), _c('small', [_vm._v("Add this class "), _c('code', [_vm._v(".btn-block")])])]), _vm._v(" "), _c('div', {
    staticClass: "card-block"
  }, [_c('button', {
    staticClass: "btn btn-outline-secondary btn-lg btn-block",
    attrs: {
      "type": "button"
    }
  }, [_vm._v("Block level button")]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-outline-primary btn-lg btn-block",
    attrs: {
      "type": "button"
    }
  }, [_vm._v("Block level button")]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-outline-success btn-lg btn-block",
    attrs: {
      "type": "button"
    }
  }, [_vm._v("Block level button")]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-outline-info btn-lg btn-block",
    attrs: {
      "type": "button"
    }
  }, [_vm._v("Block level button")]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-outline-warning btn-lg btn-block",
    attrs: {
      "type": "button"
    }
  }, [_vm._v("Block level button")]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-outline-danger btn-lg btn-block",
    attrs: {
      "type": "button"
    }
  }, [_vm._v("Block level button")])])])])])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-046f8a44", module.exports)
  }
}

/***/ })

});