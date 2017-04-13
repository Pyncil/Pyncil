webpackJsonp([4],{

/***/ 54:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(65),
  /* template */
  __webpack_require__(79),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/home/ubuntu/workspace/content/plugins/Tables.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Tables.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-607a3472", Component.options)
  } else {
    hotAPI.reload("data-v-607a3472", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 65:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'tables'
});

/***/ }),

/***/ 79:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _vm._m(0)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "animated fadeIn"
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-lg-6"
  }, [_c('div', {
    staticClass: "card"
  }, [_c('div', {
    staticClass: "card-header"
  }, [_c('i', {
    staticClass: "fa fa-align-justify"
  }), _vm._v(" Simple Table\n        ")]), _vm._v(" "), _c('div', {
    staticClass: "card-block"
  }, [_c('table', {
    staticClass: "table"
  }, [_c('thead', [_c('tr', [_c('th', [_vm._v("Username")]), _vm._v(" "), _c('th', [_vm._v("Date registered")]), _vm._v(" "), _c('th', [_vm._v("Role")]), _vm._v(" "), _c('th', [_vm._v("Status")])])]), _vm._v(" "), _c('tbody', [_c('tr', [_c('td', [_vm._v("Samppa Nori")]), _vm._v(" "), _c('td', [_vm._v("2012/01/01")]), _vm._v(" "), _c('td', [_vm._v("Member")]), _vm._v(" "), _c('td', [_c('span', {
    staticClass: "badge badge-success"
  }, [_vm._v("Active")])])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("Estavan Lykos")]), _vm._v(" "), _c('td', [_vm._v("2012/02/01")]), _vm._v(" "), _c('td', [_vm._v("Staff")]), _vm._v(" "), _c('td', [_c('span', {
    staticClass: "badge badge-danger"
  }, [_vm._v("Banned")])])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("Chetan Mohamed")]), _vm._v(" "), _c('td', [_vm._v("2012/02/01")]), _vm._v(" "), _c('td', [_vm._v("Admin")]), _vm._v(" "), _c('td', [_c('span', {
    staticClass: "badge badge-default"
  }, [_vm._v("Inactive")])])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("Derick Maximinus")]), _vm._v(" "), _c('td', [_vm._v("2012/03/01")]), _vm._v(" "), _c('td', [_vm._v("Member")]), _vm._v(" "), _c('td', [_c('span', {
    staticClass: "badge badge-warning"
  }, [_vm._v("Pending")])])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("Friderik Dávid")]), _vm._v(" "), _c('td', [_vm._v("2012/01/21")]), _vm._v(" "), _c('td', [_vm._v("Staff")]), _vm._v(" "), _c('td', [_c('span', {
    staticClass: "badge badge-success"
  }, [_vm._v("Active")])])])])]), _vm._v(" "), _c('ul', {
    staticClass: "pagination"
  }, [_c('li', {
    staticClass: "page-item"
  }, [_c('a', {
    staticClass: "page-link",
    attrs: {
      "href": "#"
    }
  }, [_vm._v("Prev")])]), _vm._v(" "), _c('li', {
    staticClass: "page-item active"
  }, [_c('a', {
    staticClass: "page-link",
    attrs: {
      "href": "#"
    }
  }, [_vm._v("1")])]), _vm._v(" "), _c('li', {
    staticClass: "page-item"
  }, [_c('a', {
    staticClass: "page-link",
    attrs: {
      "href": "#"
    }
  }, [_vm._v("2")])]), _vm._v(" "), _c('li', {
    staticClass: "page-item"
  }, [_c('a', {
    staticClass: "page-link",
    attrs: {
      "href": "#"
    }
  }, [_vm._v("3")])]), _vm._v(" "), _c('li', {
    staticClass: "page-item"
  }, [_c('a', {
    staticClass: "page-link",
    attrs: {
      "href": "#"
    }
  }, [_vm._v("4")])]), _vm._v(" "), _c('li', {
    staticClass: "page-item"
  }, [_c('a', {
    staticClass: "page-link",
    attrs: {
      "href": "#"
    }
  }, [_vm._v("Next")])])])])])]), _vm._v(" "), _c('div', {
    staticClass: "col-lg-6"
  }, [_c('div', {
    staticClass: "card"
  }, [_c('div', {
    staticClass: "card-header"
  }, [_c('i', {
    staticClass: "fa fa-align-justify"
  }), _vm._v(" Striped Table\n        ")]), _vm._v(" "), _c('div', {
    staticClass: "card-block"
  }, [_c('table', {
    staticClass: "table table-striped"
  }, [_c('thead', [_c('tr', [_c('th', [_vm._v("Username")]), _vm._v(" "), _c('th', [_vm._v("Date registered")]), _vm._v(" "), _c('th', [_vm._v("Role")]), _vm._v(" "), _c('th', [_vm._v("Status")])])]), _vm._v(" "), _c('tbody', [_c('tr', [_c('td', [_vm._v("Yiorgos Avraamu")]), _vm._v(" "), _c('td', [_vm._v("2012/01/01")]), _vm._v(" "), _c('td', [_vm._v("Member")]), _vm._v(" "), _c('td', [_c('span', {
    staticClass: "badge badge-success"
  }, [_vm._v("Active")])])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("Avram Tarasios")]), _vm._v(" "), _c('td', [_vm._v("2012/02/01")]), _vm._v(" "), _c('td', [_vm._v("Staff")]), _vm._v(" "), _c('td', [_c('span', {
    staticClass: "badge badge-danger"
  }, [_vm._v("Banned")])])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("Quintin Ed")]), _vm._v(" "), _c('td', [_vm._v("2012/02/01")]), _vm._v(" "), _c('td', [_vm._v("Admin")]), _vm._v(" "), _c('td', [_c('span', {
    staticClass: "badge badge-default"
  }, [_vm._v("Inactive")])])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("Enéas Kwadwo")]), _vm._v(" "), _c('td', [_vm._v("2012/03/01")]), _vm._v(" "), _c('td', [_vm._v("Member")]), _vm._v(" "), _c('td', [_c('span', {
    staticClass: "badge badge-warning"
  }, [_vm._v("Pending")])])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("Agapetus Tadeáš")]), _vm._v(" "), _c('td', [_vm._v("2012/01/21")]), _vm._v(" "), _c('td', [_vm._v("Staff")]), _vm._v(" "), _c('td', [_c('span', {
    staticClass: "badge badge-success"
  }, [_vm._v("Active")])])])])]), _vm._v(" "), _c('ul', {
    staticClass: "pagination"
  }, [_c('li', {
    staticClass: "page-item"
  }, [_c('a', {
    staticClass: "page-link",
    attrs: {
      "href": "#"
    }
  }, [_vm._v("Prev")])]), _vm._v(" "), _c('li', {
    staticClass: "page-item active"
  }, [_c('a', {
    staticClass: "page-link",
    attrs: {
      "href": "#"
    }
  }, [_vm._v("1")])]), _vm._v(" "), _c('li', {
    staticClass: "page-item"
  }, [_c('a', {
    staticClass: "page-link",
    attrs: {
      "href": "#"
    }
  }, [_vm._v("2")])]), _vm._v(" "), _c('li', {
    staticClass: "page-item"
  }, [_c('a', {
    staticClass: "page-link",
    attrs: {
      "href": "#"
    }
  }, [_vm._v("3")])]), _vm._v(" "), _c('li', {
    staticClass: "page-item"
  }, [_c('a', {
    staticClass: "page-link",
    attrs: {
      "href": "#"
    }
  }, [_vm._v("4")])]), _vm._v(" "), _c('li', {
    staticClass: "page-item"
  }, [_c('a', {
    staticClass: "page-link",
    attrs: {
      "href": "#"
    }
  }, [_vm._v("Next")])])])])])])]), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-lg-6"
  }, [_c('div', {
    staticClass: "card"
  }, [_c('div', {
    staticClass: "card-header"
  }, [_c('i', {
    staticClass: "fa fa-align-justify"
  }), _vm._v(" Condensed Table\n        ")]), _vm._v(" "), _c('div', {
    staticClass: "card-block"
  }, [_c('table', {
    staticClass: "table table-condensed"
  }, [_c('thead', [_c('tr', [_c('th', [_vm._v("Username")]), _vm._v(" "), _c('th', [_vm._v("Date registered")]), _vm._v(" "), _c('th', [_vm._v("Role")]), _vm._v(" "), _c('th', [_vm._v("Status")])])]), _vm._v(" "), _c('tbody', [_c('tr', [_c('td', [_vm._v("Carwyn Fachtna")]), _vm._v(" "), _c('td', [_vm._v("2012/01/01")]), _vm._v(" "), _c('td', [_vm._v("Member")]), _vm._v(" "), _c('td', [_c('span', {
    staticClass: "badge badge-success"
  }, [_vm._v("Active")])])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("Nehemiah Tatius")]), _vm._v(" "), _c('td', [_vm._v("2012/02/01")]), _vm._v(" "), _c('td', [_vm._v("Staff")]), _vm._v(" "), _c('td', [_c('span', {
    staticClass: "badge badge-danger"
  }, [_vm._v("Banned")])])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("Ebbe Gemariah")]), _vm._v(" "), _c('td', [_vm._v("2012/02/01")]), _vm._v(" "), _c('td', [_vm._v("Admin")]), _vm._v(" "), _c('td', [_c('span', {
    staticClass: "badge badge-default"
  }, [_vm._v("Inactive")])])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("Eustorgios Amulius")]), _vm._v(" "), _c('td', [_vm._v("2012/03/01")]), _vm._v(" "), _c('td', [_vm._v("Member")]), _vm._v(" "), _c('td', [_c('span', {
    staticClass: "badge badge-warning"
  }, [_vm._v("Pending")])])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("Leopold Gáspár")]), _vm._v(" "), _c('td', [_vm._v("2012/01/21")]), _vm._v(" "), _c('td', [_vm._v("Staff")]), _vm._v(" "), _c('td', [_c('span', {
    staticClass: "badge badge-success"
  }, [_vm._v("Active")])])])])]), _vm._v(" "), _c('ul', {
    staticClass: "pagination"
  }, [_c('li', {
    staticClass: "page-item"
  }, [_c('a', {
    staticClass: "page-link",
    attrs: {
      "href": "#"
    }
  }, [_vm._v("Prev")])]), _vm._v(" "), _c('li', {
    staticClass: "page-item active"
  }, [_c('a', {
    staticClass: "page-link",
    attrs: {
      "href": "#"
    }
  }, [_vm._v("1")])]), _vm._v(" "), _c('li', {
    staticClass: "page-item"
  }, [_c('a', {
    staticClass: "page-link",
    attrs: {
      "href": "#"
    }
  }, [_vm._v("2")])]), _vm._v(" "), _c('li', {
    staticClass: "page-item"
  }, [_c('a', {
    staticClass: "page-link",
    attrs: {
      "href": "#"
    }
  }, [_vm._v("3")])]), _vm._v(" "), _c('li', {
    staticClass: "page-item"
  }, [_c('a', {
    staticClass: "page-link",
    attrs: {
      "href": "#"
    }
  }, [_vm._v("4")])]), _vm._v(" "), _c('li', {
    staticClass: "page-item"
  }, [_c('a', {
    staticClass: "page-link",
    attrs: {
      "href": "#"
    }
  }, [_vm._v("Next")])])])])])]), _vm._v(" "), _c('div', {
    staticClass: "col-lg-6"
  }, [_c('div', {
    staticClass: "card"
  }, [_c('div', {
    staticClass: "card-header"
  }, [_c('i', {
    staticClass: "fa fa-align-justify"
  }), _vm._v(" Bordered Table\n        ")]), _vm._v(" "), _c('div', {
    staticClass: "card-block"
  }, [_c('table', {
    staticClass: "table table-bordered"
  }, [_c('thead', [_c('tr', [_c('th', [_vm._v("Username")]), _vm._v(" "), _c('th', [_vm._v("Date registered")]), _vm._v(" "), _c('th', [_vm._v("Role")]), _vm._v(" "), _c('th', [_vm._v("Status")])])]), _vm._v(" "), _c('tbody', [_c('tr', [_c('td', [_vm._v("Pompeius René")]), _vm._v(" "), _c('td', [_vm._v("2012/01/01")]), _vm._v(" "), _c('td', [_vm._v("Member")]), _vm._v(" "), _c('td', [_c('span', {
    staticClass: "badge badge-success"
  }, [_vm._v("Active")])])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("Paĉjo Jadon")]), _vm._v(" "), _c('td', [_vm._v("2012/02/01")]), _vm._v(" "), _c('td', [_vm._v("Staff")]), _vm._v(" "), _c('td', [_c('span', {
    staticClass: "badge badge-danger"
  }, [_vm._v("Banned")])])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("Micheal Mercurius")]), _vm._v(" "), _c('td', [_vm._v("2012/02/01")]), _vm._v(" "), _c('td', [_vm._v("Admin")]), _vm._v(" "), _c('td', [_c('span', {
    staticClass: "badge badge-default"
  }, [_vm._v("Inactive")])])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("Ganesha Dubhghall")]), _vm._v(" "), _c('td', [_vm._v("2012/03/01")]), _vm._v(" "), _c('td', [_vm._v("Member")]), _vm._v(" "), _c('td', [_c('span', {
    staticClass: "badge badge-warning"
  }, [_vm._v("Pending")])])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("Hiroto Šimun")]), _vm._v(" "), _c('td', [_vm._v("2012/01/21")]), _vm._v(" "), _c('td', [_vm._v("Staff")]), _vm._v(" "), _c('td', [_c('span', {
    staticClass: "badge badge-success"
  }, [_vm._v("Active")])])])])]), _vm._v(" "), _c('ul', {
    staticClass: "pagination"
  }, [_c('li', {
    staticClass: "page-item"
  }, [_c('a', {
    staticClass: "page-link",
    attrs: {
      "href": "#"
    }
  }, [_vm._v("Prev")])]), _vm._v(" "), _c('li', {
    staticClass: "page-item active"
  }, [_c('a', {
    staticClass: "page-link",
    attrs: {
      "href": "#"
    }
  }, [_vm._v("1")])]), _vm._v(" "), _c('li', {
    staticClass: "page-item"
  }, [_c('a', {
    staticClass: "page-link",
    attrs: {
      "href": "#"
    }
  }, [_vm._v("2")])]), _vm._v(" "), _c('li', {
    staticClass: "page-item"
  }, [_c('a', {
    staticClass: "page-link",
    attrs: {
      "href": "#"
    }
  }, [_vm._v("3")])]), _vm._v(" "), _c('li', {
    staticClass: "page-item"
  }, [_c('a', {
    staticClass: "page-link",
    attrs: {
      "href": "#"
    }
  }, [_vm._v("4")])]), _vm._v(" "), _c('li', {
    staticClass: "page-item"
  }, [_c('a', {
    staticClass: "page-link",
    attrs: {
      "href": "#"
    }
  }, [_vm._v("Next")])])])])])])]), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-lg-12"
  }, [_c('div', {
    staticClass: "card"
  }, [_c('div', {
    staticClass: "card-header"
  }, [_c('i', {
    staticClass: "fa fa-align-justify"
  }), _vm._v(" Combined All Table\n        ")]), _vm._v(" "), _c('div', {
    staticClass: "card-block"
  }, [_c('table', {
    staticClass: "table table-bordered table-striped table-condensed"
  }, [_c('thead', [_c('tr', [_c('th', [_vm._v("Username")]), _vm._v(" "), _c('th', [_vm._v("Date registered")]), _vm._v(" "), _c('th', [_vm._v("Role")]), _vm._v(" "), _c('th', [_vm._v("Status")])])]), _vm._v(" "), _c('tbody', [_c('tr', [_c('td', [_vm._v("Vishnu Serghei")]), _vm._v(" "), _c('td', [_vm._v("2012/01/01")]), _vm._v(" "), _c('td', [_vm._v("Member")]), _vm._v(" "), _c('td', [_c('span', {
    staticClass: "badge badge-success"
  }, [_vm._v("Active")])])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("Zbyněk Phoibos")]), _vm._v(" "), _c('td', [_vm._v("2012/02/01")]), _vm._v(" "), _c('td', [_vm._v("Staff")]), _vm._v(" "), _c('td', [_c('span', {
    staticClass: "badge badge-danger"
  }, [_vm._v("Banned")])])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("Einar Randall")]), _vm._v(" "), _c('td', [_vm._v("2012/02/01")]), _vm._v(" "), _c('td', [_vm._v("Admin")]), _vm._v(" "), _c('td', [_c('span', {
    staticClass: "badge badge-default"
  }, [_vm._v("Inactive")])])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("Félix Troels")]), _vm._v(" "), _c('td', [_vm._v("2012/03/01")]), _vm._v(" "), _c('td', [_vm._v("Member")]), _vm._v(" "), _c('td', [_c('span', {
    staticClass: "badge badge-warning"
  }, [_vm._v("Pending")])])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("Aulus Agmundr")]), _vm._v(" "), _c('td', [_vm._v("2012/01/21")]), _vm._v(" "), _c('td', [_vm._v("Staff")]), _vm._v(" "), _c('td', [_c('span', {
    staticClass: "badge badge-success"
  }, [_vm._v("Active")])])])])]), _vm._v(" "), _c('nav', [_c('ul', {
    staticClass: "pagination"
  }, [_c('li', {
    staticClass: "page-item"
  }, [_c('a', {
    staticClass: "page-link",
    attrs: {
      "href": "#"
    }
  }, [_vm._v("Prev")])]), _vm._v(" "), _c('li', {
    staticClass: "page-item active"
  }, [_c('a', {
    staticClass: "page-link",
    attrs: {
      "href": "#"
    }
  }, [_vm._v("1")])]), _vm._v(" "), _c('li', {
    staticClass: "page-item"
  }, [_c('a', {
    staticClass: "page-link",
    attrs: {
      "href": "#"
    }
  }, [_vm._v("2")])]), _vm._v(" "), _c('li', {
    staticClass: "page-item"
  }, [_c('a', {
    staticClass: "page-link",
    attrs: {
      "href": "#"
    }
  }, [_vm._v("3")])]), _vm._v(" "), _c('li', {
    staticClass: "page-item"
  }, [_c('a', {
    staticClass: "page-link",
    attrs: {
      "href": "#"
    }
  }, [_vm._v("4")])]), _vm._v(" "), _c('li', {
    staticClass: "page-item"
  }, [_c('a', {
    staticClass: "page-link",
    attrs: {
      "href": "#"
    }
  }, [_vm._v("Next")])])])])])])])])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-607a3472", module.exports)
  }
}

/***/ })

});