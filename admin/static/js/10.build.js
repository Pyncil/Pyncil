webpackJsonp([10],{

/***/ 46:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(57),
  /* template */
  __webpack_require__(76),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/home/ubuntu/workspace/admin/frontend/views/Dashboard.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Dashboard.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1bf2271e", Component.options)
  } else {
    hotAPI.reload("data-v-1bf2271e", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 57:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue_strap__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue_strap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue_strap__);




/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'dashboard',
  components: {
    dropdown: __WEBPACK_IMPORTED_MODULE_0_vue_strap__["dropdown"]
  }
});

/***/ }),

/***/ 76:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "animated fadeIn"
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-sm-6 col-lg-3"
  }, [_c('div', {
    staticClass: "card card-inverse card-primary"
  }, [_c('div', {
    staticClass: "card-block pb-0"
  }, [_c('dropdown', {
    staticClass: "float-right",
    attrs: {
      "type": "transparent p-0"
    }
  }, [_c('i', {
    staticClass: "icon-settings",
    slot: "button"
  }), _vm._v(" "), _c('div', {
    staticClass: "dropdown-menu dropdown-menu-right",
    slot: "dropdown-menu"
  }, [_c('a', {
    staticClass: "dropdown-item",
    attrs: {
      "href": "#"
    }
  }, [_vm._v("Action")]), _vm._v(" "), _c('a', {
    staticClass: "dropdown-item",
    attrs: {
      "href": "#"
    }
  }, [_vm._v("Another action")]), _vm._v(" "), _c('a', {
    staticClass: "dropdown-item",
    attrs: {
      "href": "#"
    }
  }, [_vm._v("Something else here")])])]), _vm._v(" "), _c('h4', {
    staticClass: "mb-0"
  }, [_vm._v("9.823")]), _vm._v(" "), _c('p', [_vm._v("Members online")])], 1), _vm._v(" "), _c('card-line1-chart-example', {
    staticClass: "chart-wrapper px-1",
    staticStyle: {
      "height": "70px"
    },
    attrs: {
      "height": "70"
    }
  })], 1)]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-6 col-lg-3"
  }, [_c('div', {
    staticClass: "card card-inverse card-info"
  }, [_c('div', {
    staticClass: "card-block pb-0"
  }, [_c('dropdown', {
    staticClass: "float-right",
    attrs: {
      "type": "transparent p-0"
    }
  }, [_c('i', {
    staticClass: "icon-settings",
    slot: "button"
  }), _vm._v(" "), _c('div', {
    staticClass: "dropdown-menu dropdown-menu-right",
    slot: "dropdown-menu"
  }, [_c('a', {
    staticClass: "dropdown-item",
    attrs: {
      "href": "#"
    }
  }, [_vm._v("Action")]), _vm._v(" "), _c('a', {
    staticClass: "dropdown-item",
    attrs: {
      "href": "#"
    }
  }, [_vm._v("Another action")]), _vm._v(" "), _c('a', {
    staticClass: "dropdown-item",
    attrs: {
      "href": "#"
    }
  }, [_vm._v("Something else here")])])]), _vm._v(" "), _c('h4', {
    staticClass: "mb-0"
  }, [_vm._v("9.823")]), _vm._v(" "), _c('p', [_vm._v("Members online")])], 1), _vm._v(" "), _c('card-line2-chart-example', {
    staticClass: "chart-wrapper px-1",
    staticStyle: {
      "height": "70px"
    },
    attrs: {
      "height": "70"
    }
  })], 1)]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-6 col-lg-3"
  }, [_c('div', {
    staticClass: "card card-inverse card-warning"
  }, [_c('div', {
    staticClass: "card-block pb-0"
  }, [_c('div', {
    staticClass: "btn-group float-right"
  }, [_c('dropdown', {
    staticClass: "float-right",
    attrs: {
      "type": "transparent p-0"
    }
  }, [_c('i', {
    staticClass: "icon-settings",
    slot: "button"
  }), _vm._v(" "), _c('div', {
    staticClass: "dropdown-menu dropdown-menu-right",
    slot: "dropdown-menu"
  }, [_c('a', {
    staticClass: "dropdown-item",
    attrs: {
      "href": "#"
    }
  }, [_vm._v("Action")]), _vm._v(" "), _c('a', {
    staticClass: "dropdown-item",
    attrs: {
      "href": "#"
    }
  }, [_vm._v("Another action")]), _vm._v(" "), _c('a', {
    staticClass: "dropdown-item",
    attrs: {
      "href": "#"
    }
  }, [_vm._v("Something else here")])])])], 1), _vm._v(" "), _c('h4', {
    staticClass: "mb-0"
  }, [_vm._v("9.823")]), _vm._v(" "), _c('p', [_vm._v("Members online")])]), _vm._v(" "), _c('card-line3-chart-example', {
    staticClass: "chart-wrapper",
    staticStyle: {
      "height": "70px"
    },
    attrs: {
      "height": "70"
    }
  })], 1)]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-6 col-lg-3"
  }, [_c('div', {
    staticClass: "card card-inverse card-danger"
  }, [_c('div', {
    staticClass: "card-block pb-0"
  }, [_c('div', {
    staticClass: "btn-group float-right"
  }, [_c('dropdown', {
    staticClass: "float-right",
    attrs: {
      "type": "transparent p-0"
    }
  }, [_c('i', {
    staticClass: "icon-settings",
    slot: "button"
  }), _vm._v(" "), _c('div', {
    staticClass: "dropdown-menu dropdown-menu-right",
    slot: "dropdown-menu"
  }, [_c('a', {
    staticClass: "dropdown-item",
    attrs: {
      "href": "#"
    }
  }, [_vm._v("Action")]), _vm._v(" "), _c('a', {
    staticClass: "dropdown-item",
    attrs: {
      "href": "#"
    }
  }, [_vm._v("Another action")]), _vm._v(" "), _c('a', {
    staticClass: "dropdown-item",
    attrs: {
      "href": "#"
    }
  }, [_vm._v("Something else here")])])])], 1), _vm._v(" "), _c('h4', {
    staticClass: "mb-0"
  }, [_vm._v("9.823")]), _vm._v(" "), _c('p', [_vm._v("Members online")])]), _vm._v(" "), _c('card-bar-chart-example', {
    staticClass: "chart-wrapper px-1",
    staticStyle: {
      "height": "70px"
    },
    attrs: {
      "height": "70"
    }
  })], 1)])]), _vm._v(" "), _c('div', {
    staticClass: "card"
  }, [_c('div', {
    staticClass: "card-block"
  }, [_vm._m(0), _vm._v(" "), _c('main-chart-example', {
    staticClass: "chart-wrapper",
    staticStyle: {
      "height": "300px",
      "margin-top": "40px"
    },
    attrs: {
      "height": "300"
    }
  })], 1), _vm._v(" "), _vm._m(1)]), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-sm-6 col-lg-3"
  }, [_c('div', {
    staticClass: "social-box facebook"
  }, [_c('i', {
    staticClass: "fa fa-facebook"
  }), _vm._v(" "), _c('div', {
    staticClass: "chart-wrapper"
  }, [_c('social-box-chart-example', {
    attrs: {
      "data": [65, 59, 84, 84, 51, 55, 40],
      "height": "90"
    }
  })], 1), _vm._v(" "), _vm._m(2)])]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-6 col-lg-3"
  }, [_c('div', {
    staticClass: "social-box twitter"
  }, [_c('i', {
    staticClass: "fa fa-twitter"
  }), _vm._v(" "), _c('div', {
    staticClass: "chart-wrapper"
  }, [_c('social-box-chart-example', {
    attrs: {
      "data": [1, 13, 9, 17, 34, 41, 38],
      "height": "90"
    }
  })], 1), _vm._v(" "), _vm._m(3)])]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-6 col-lg-3"
  }, [_c('div', {
    staticClass: "social-box linkedin"
  }, [_c('i', {
    staticClass: "fa fa-linkedin"
  }), _vm._v(" "), _c('div', {
    staticClass: "chart-wrapper"
  }, [_c('social-box-chart-example', {
    attrs: {
      "data": [78, 81, 80, 45, 34, 12, 40],
      "height": "90"
    }
  })], 1), _vm._v(" "), _vm._m(4)])]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-6 col-lg-3"
  }, [_c('div', {
    staticClass: "social-box google-plus"
  }, [_c('i', {
    staticClass: "fa fa-google-plus"
  }), _vm._v(" "), _c('div', {
    staticClass: "chart-wrapper"
  }, [_c('social-box-chart-example', {
    attrs: {
      "data": [35, 23, 56, 22, 97, 23, 64],
      "height": "90"
    }
  })], 1), _vm._v(" "), _vm._m(5)])])]), _vm._v(" "), _vm._m(6)])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-sm-5"
  }, [_c('h4', {
    staticClass: "card-title mb-0"
  }, [_vm._v("Traffic")]), _vm._v(" "), _c('div', {
    staticClass: "small text-muted"
  }, [_vm._v("November 2016")])]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-7 hidden-sm-down"
  }, [_c('button', {
    staticClass: "btn btn-primary float-right",
    attrs: {
      "type": "button"
    }
  }, [_c('i', {
    staticClass: "icon-cloud-download"
  })]), _vm._v(" "), _c('div', {
    staticClass: "btn-toolbar float-right",
    attrs: {
      "role": "toolbar",
      "aria-label": "Toolbar with button groups"
    }
  }, [_c('div', {
    staticClass: "btn-group mr-1",
    attrs: {
      "data-toggle": "buttons",
      "aria-label": "First group"
    }
  }, [_c('label', {
    staticClass: "btn btn-outline-secondary"
  }, [_c('input', {
    attrs: {
      "type": "radio",
      "name": "options",
      "id": "option1"
    }
  }), _vm._v(" Day\n              ")]), _vm._v(" "), _c('label', {
    staticClass: "btn btn-outline-secondary active"
  }, [_c('input', {
    attrs: {
      "type": "radio",
      "name": "options",
      "id": "option2",
      "checked": ""
    }
  }), _vm._v(" Month\n              ")]), _vm._v(" "), _c('label', {
    staticClass: "btn btn-outline-secondary"
  }, [_c('input', {
    attrs: {
      "type": "radio",
      "name": "options",
      "id": "option3"
    }
  }), _vm._v(" Year\n              ")])])])])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "card-footer"
  }, [_c('ul', [_c('li', [_c('div', {
    staticClass: "text-muted"
  }, [_vm._v("Visits")]), _vm._v(" "), _c('strong', [_vm._v("29.703 Users (40%)")]), _vm._v(" "), _c('div', {
    staticClass: "progress progress-xs mt-h"
  }, [_c('div', {
    staticClass: "progress-bar bg-success",
    staticStyle: {
      "width": "40%"
    },
    attrs: {
      "role": "progressbar",
      "aria-valuenow": "40",
      "aria-valuemin": "0",
      "aria-valuemax": "100"
    }
  })])]), _vm._v(" "), _c('li', {
    staticClass: "hidden-sm-down"
  }, [_c('div', {
    staticClass: "text-muted"
  }, [_vm._v("Unique")]), _vm._v(" "), _c('strong', [_vm._v("24.093 Users (20%)")]), _vm._v(" "), _c('div', {
    staticClass: "progress progress-xs mt-h"
  }, [_c('div', {
    staticClass: "progress-bar bg-info",
    staticStyle: {
      "width": "20%"
    },
    attrs: {
      "role": "progressbar",
      "aria-valuenow": "20",
      "aria-valuemin": "0",
      "aria-valuemax": "100"
    }
  })])]), _vm._v(" "), _c('li', [_c('div', {
    staticClass: "text-muted"
  }, [_vm._v("Pageviews")]), _vm._v(" "), _c('strong', [_vm._v("78.706 Views (60%)")]), _vm._v(" "), _c('div', {
    staticClass: "progress progress-xs mt-h"
  }, [_c('div', {
    staticClass: "progress-bar bg-warning",
    staticStyle: {
      "width": "60%"
    },
    attrs: {
      "role": "progressbar",
      "aria-valuenow": "60",
      "aria-valuemin": "0",
      "aria-valuemax": "100"
    }
  })])]), _vm._v(" "), _c('li', {
    staticClass: "hidden-sm-down"
  }, [_c('div', {
    staticClass: "text-muted"
  }, [_vm._v("New Users")]), _vm._v(" "), _c('strong', [_vm._v("22.123 Users (80%)")]), _vm._v(" "), _c('div', {
    staticClass: "progress progress-xs mt-h"
  }, [_c('div', {
    staticClass: "progress-bar bg-danger",
    staticStyle: {
      "width": "80%"
    },
    attrs: {
      "role": "progressbar",
      "aria-valuenow": "80",
      "aria-valuemin": "0",
      "aria-valuemax": "100"
    }
  })])]), _vm._v(" "), _c('li', {
    staticClass: "hidden-sm-down"
  }, [_c('div', {
    staticClass: "text-muted"
  }, [_vm._v("Bounce Rate")]), _vm._v(" "), _c('strong', [_vm._v("40.15%")]), _vm._v(" "), _c('div', {
    staticClass: "progress progress-xs mt-h"
  }, [_c('div', {
    staticClass: "progress-bar",
    staticStyle: {
      "width": "40%"
    },
    attrs: {
      "role": "progressbar",
      "aria-valuenow": "40",
      "aria-valuemin": "0",
      "aria-valuemax": "100"
    }
  })])])])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('ul', [_c('li', [_c('strong', [_vm._v("89k")]), _vm._v(" "), _c('span', [_vm._v("friends")])]), _vm._v(" "), _c('li', [_c('strong', [_vm._v("459")]), _vm._v(" "), _c('span', [_vm._v("feeds")])])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('ul', [_c('li', [_c('strong', [_vm._v("973k")]), _vm._v(" "), _c('span', [_vm._v("followers")])]), _vm._v(" "), _c('li', [_c('strong', [_vm._v("1.792")]), _vm._v(" "), _c('span', [_vm._v("tweets")])])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('ul', [_c('li', [_c('strong', [_vm._v("500+")]), _vm._v(" "), _c('span', [_vm._v("contacts")])]), _vm._v(" "), _c('li', [_c('strong', [_vm._v("292")]), _vm._v(" "), _c('span', [_vm._v("feeds")])])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('ul', [_c('li', [_c('strong', [_vm._v("894")]), _vm._v(" "), _c('span', [_vm._v("followers")])]), _vm._v(" "), _c('li', [_c('strong', [_vm._v("92")]), _vm._v(" "), _c('span', [_vm._v("circles")])])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-md-12"
  }, [_c('div', {
    staticClass: "card"
  }, [_c('div', {
    staticClass: "card-header"
  }, [_vm._v("\n          Traffic & Sales\n        ")]), _vm._v(" "), _c('div', {
    staticClass: "card-block"
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-sm-12 col-lg-4"
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-sm-6"
  }, [_c('div', {
    staticClass: "callout callout-info"
  }, [_c('small', {
    staticClass: "text-muted"
  }, [_vm._v("New Clients")]), _c('br'), _vm._v(" "), _c('strong', {
    staticClass: "h4"
  }, [_vm._v("9,123")])])]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-6"
  }, [_c('div', {
    staticClass: "callout callout-danger"
  }, [_c('small', {
    staticClass: "text-muted"
  }, [_vm._v("Recuring Clients")]), _c('br'), _vm._v(" "), _c('strong', {
    staticClass: "h4"
  }, [_vm._v("22,643")])])])]), _vm._v(" "), _c('hr', {
    staticClass: "mt-0"
  }), _vm._v(" "), _c('ul', {
    staticClass: "horizontal-bars"
  }, [_c('li', [_c('div', {
    staticClass: "title"
  }, [_vm._v("\n                    Monday\n                  ")]), _vm._v(" "), _c('div', {
    staticClass: "bars"
  }, [_c('div', {
    staticClass: "progress progress-xs"
  }, [_c('div', {
    staticClass: "progress-bar bg-info",
    staticStyle: {
      "width": "34%"
    },
    attrs: {
      "role": "progressbar",
      "aria-valuenow": "34",
      "aria-valuemin": "0",
      "aria-valuemax": "100"
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "progress progress-xs"
  }, [_c('div', {
    staticClass: "progress-bar bg-danger",
    staticStyle: {
      "width": "78%"
    },
    attrs: {
      "role": "progressbar",
      "aria-valuenow": "78",
      "aria-valuemin": "0",
      "aria-valuemax": "100"
    }
  })])])]), _vm._v(" "), _c('li', [_c('div', {
    staticClass: "title"
  }, [_vm._v("\n                    Tuesday\n                  ")]), _vm._v(" "), _c('div', {
    staticClass: "bars"
  }, [_c('div', {
    staticClass: "progress progress-xs"
  }, [_c('div', {
    staticClass: "progress-bar bg-info",
    staticStyle: {
      "width": "56%"
    },
    attrs: {
      "role": "progressbar",
      "aria-valuenow": "56",
      "aria-valuemin": "0",
      "aria-valuemax": "100"
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "progress progress-xs"
  }, [_c('div', {
    staticClass: "progress-bar bg-danger",
    staticStyle: {
      "width": "94%"
    },
    attrs: {
      "role": "progressbar",
      "aria-valuenow": "94",
      "aria-valuemin": "0",
      "aria-valuemax": "100"
    }
  })])])]), _vm._v(" "), _c('li', [_c('div', {
    staticClass: "title"
  }, [_vm._v("\n                    Wednesday\n                  ")]), _vm._v(" "), _c('div', {
    staticClass: "bars"
  }, [_c('div', {
    staticClass: "progress progress-xs"
  }, [_c('div', {
    staticClass: "progress-bar bg-info",
    staticStyle: {
      "width": "12%"
    },
    attrs: {
      "role": "progressbar",
      "aria-valuenow": "12",
      "aria-valuemin": "0",
      "aria-valuemax": "100"
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "progress progress-xs"
  }, [_c('div', {
    staticClass: "progress-bar bg-danger",
    staticStyle: {
      "width": "67%"
    },
    attrs: {
      "role": "progressbar",
      "aria-valuenow": "67",
      "aria-valuemin": "0",
      "aria-valuemax": "100"
    }
  })])])]), _vm._v(" "), _c('li', [_c('div', {
    staticClass: "title"
  }, [_vm._v("\n                    Thursday\n                  ")]), _vm._v(" "), _c('div', {
    staticClass: "bars"
  }, [_c('div', {
    staticClass: "progress progress-xs"
  }, [_c('div', {
    staticClass: "progress-bar bg-info",
    staticStyle: {
      "width": "43%"
    },
    attrs: {
      "role": "progressbar",
      "aria-valuenow": "43",
      "aria-valuemin": "0",
      "aria-valuemax": "100"
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "progress progress-xs"
  }, [_c('div', {
    staticClass: "progress-bar bg-danger",
    staticStyle: {
      "width": "91%"
    },
    attrs: {
      "role": "progressbar",
      "aria-valuenow": "91",
      "aria-valuemin": "0",
      "aria-valuemax": "100"
    }
  })])])]), _vm._v(" "), _c('li', [_c('div', {
    staticClass: "title"
  }, [_vm._v("\n                    Friday\n                  ")]), _vm._v(" "), _c('div', {
    staticClass: "bars"
  }, [_c('div', {
    staticClass: "progress progress-xs"
  }, [_c('div', {
    staticClass: "progress-bar bg-info",
    staticStyle: {
      "width": "22%"
    },
    attrs: {
      "role": "progressbar",
      "aria-valuenow": "22",
      "aria-valuemin": "0",
      "aria-valuemax": "100"
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "progress progress-xs"
  }, [_c('div', {
    staticClass: "progress-bar bg-danger",
    staticStyle: {
      "width": "73%"
    },
    attrs: {
      "role": "progressbar",
      "aria-valuenow": "73",
      "aria-valuemin": "0",
      "aria-valuemax": "100"
    }
  })])])]), _vm._v(" "), _c('li', [_c('div', {
    staticClass: "title"
  }, [_vm._v("\n                    Saturday\n                  ")]), _vm._v(" "), _c('div', {
    staticClass: "bars"
  }, [_c('div', {
    staticClass: "progress progress-xs"
  }, [_c('div', {
    staticClass: "progress-bar bg-info",
    staticStyle: {
      "width": "53%"
    },
    attrs: {
      "role": "progressbar",
      "aria-valuenow": "53",
      "aria-valuemin": "0",
      "aria-valuemax": "100"
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "progress progress-xs"
  }, [_c('div', {
    staticClass: "progress-bar bg-danger",
    staticStyle: {
      "width": "82%"
    },
    attrs: {
      "role": "progressbar",
      "aria-valuenow": "82",
      "aria-valuemin": "0",
      "aria-valuemax": "100"
    }
  })])])]), _vm._v(" "), _c('li', [_c('div', {
    staticClass: "title"
  }, [_vm._v("\n                    Sunday\n                  ")]), _vm._v(" "), _c('div', {
    staticClass: "bars"
  }, [_c('div', {
    staticClass: "progress progress-xs"
  }, [_c('div', {
    staticClass: "progress-bar bg-info",
    staticStyle: {
      "width": "9%"
    },
    attrs: {
      "role": "progressbar",
      "aria-valuenow": "9",
      "aria-valuemin": "0",
      "aria-valuemax": "100"
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "progress progress-xs"
  }, [_c('div', {
    staticClass: "progress-bar bg-danger",
    staticStyle: {
      "width": "69%"
    },
    attrs: {
      "role": "progressbar",
      "aria-valuenow": "69",
      "aria-valuemin": "0",
      "aria-valuemax": "100"
    }
  })])])]), _vm._v(" "), _c('li', {
    staticClass: "legend"
  }, [_c('span', {
    staticClass: "badge badge-pill badge-info"
  }), _vm._v(" "), _c('small', [_vm._v("New clients")]), _vm._v("   "), _c('span', {
    staticClass: "badge badge-pill badge-danger"
  }), _vm._v(" "), _c('small', [_vm._v("Recurring clients")])])])]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-6 col-lg-4"
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-sm-6"
  }, [_c('div', {
    staticClass: "callout callout-warning"
  }, [_c('small', {
    staticClass: "text-muted"
  }, [_vm._v("Pageviews")]), _c('br'), _vm._v(" "), _c('strong', {
    staticClass: "h4"
  }, [_vm._v("78,623")])])]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-6"
  }, [_c('div', {
    staticClass: "callout callout-success"
  }, [_c('small', {
    staticClass: "text-muted"
  }, [_vm._v("Organic")]), _c('br'), _vm._v(" "), _c('strong', {
    staticClass: "h4"
  }, [_vm._v("49,123")])])])]), _vm._v(" "), _c('hr', {
    staticClass: "mt-0"
  }), _vm._v(" "), _c('ul', {
    staticClass: "horizontal-bars type-2"
  }, [_c('li', [_c('i', {
    staticClass: "icon-user"
  }), _vm._v(" "), _c('span', {
    staticClass: "title"
  }, [_vm._v("Male")]), _vm._v(" "), _c('span', {
    staticClass: "value"
  }, [_vm._v("43%")]), _vm._v(" "), _c('div', {
    staticClass: "bars"
  }, [_c('div', {
    staticClass: "progress progress-xs"
  }, [_c('div', {
    staticClass: "progress-bar bg-warning",
    staticStyle: {
      "width": "43%"
    },
    attrs: {
      "role": "progressbar",
      "aria-valuenow": "43",
      "aria-valuemin": "0",
      "aria-valuemax": "100"
    }
  })])])]), _vm._v(" "), _c('li', [_c('i', {
    staticClass: "icon-user-female"
  }), _vm._v(" "), _c('span', {
    staticClass: "title"
  }, [_vm._v("Female")]), _vm._v(" "), _c('span', {
    staticClass: "value"
  }, [_vm._v("37%")]), _vm._v(" "), _c('div', {
    staticClass: "bars"
  }, [_c('div', {
    staticClass: "progress progress-xs"
  }, [_c('div', {
    staticClass: "progress-bar bg-warning",
    staticStyle: {
      "width": "37%"
    },
    attrs: {
      "role": "progressbar",
      "aria-valuenow": "37",
      "aria-valuemin": "0",
      "aria-valuemax": "100"
    }
  })])])]), _vm._v(" "), _c('li', {
    staticClass: "divider"
  }), _vm._v(" "), _c('li', [_c('i', {
    staticClass: "icon-globe"
  }), _vm._v(" "), _c('span', {
    staticClass: "title"
  }, [_vm._v("Organic Search")]), _vm._v(" "), _c('span', {
    staticClass: "value"
  }, [_vm._v("191,235 "), _c('span', {
    staticClass: "text-muted small"
  }, [_vm._v("(56%)")])]), _vm._v(" "), _c('div', {
    staticClass: "bars"
  }, [_c('div', {
    staticClass: "progress progress-xs"
  }, [_c('div', {
    staticClass: "progress-bar bg-success",
    staticStyle: {
      "width": "56%"
    },
    attrs: {
      "role": "progressbar",
      "aria-valuenow": "56",
      "aria-valuemin": "0",
      "aria-valuemax": "100"
    }
  })])])]), _vm._v(" "), _c('li', [_c('i', {
    staticClass: "icon-social-facebook"
  }), _vm._v(" "), _c('span', {
    staticClass: "title"
  }, [_vm._v("Facebook")]), _vm._v(" "), _c('span', {
    staticClass: "value"
  }, [_vm._v("51,223 "), _c('span', {
    staticClass: "text-muted small"
  }, [_vm._v("(15%)")])]), _vm._v(" "), _c('div', {
    staticClass: "bars"
  }, [_c('div', {
    staticClass: "progress progress-xs"
  }, [_c('div', {
    staticClass: "progress-bar bg-success",
    staticStyle: {
      "width": "15%"
    },
    attrs: {
      "role": "progressbar",
      "aria-valuenow": "15",
      "aria-valuemin": "0",
      "aria-valuemax": "100"
    }
  })])])]), _vm._v(" "), _c('li', [_c('i', {
    staticClass: "icon-social-twitter"
  }), _vm._v(" "), _c('span', {
    staticClass: "title"
  }, [_vm._v("Twitter")]), _vm._v(" "), _c('span', {
    staticClass: "value"
  }, [_vm._v("37,564 "), _c('span', {
    staticClass: "text-muted small"
  }, [_vm._v("(11%)")])]), _vm._v(" "), _c('div', {
    staticClass: "bars"
  }, [_c('div', {
    staticClass: "progress progress-xs"
  }, [_c('div', {
    staticClass: "progress-bar bg-success",
    staticStyle: {
      "width": "11%"
    },
    attrs: {
      "role": "progressbar",
      "aria-valuenow": "11",
      "aria-valuemin": "0",
      "aria-valuemax": "100"
    }
  })])])]), _vm._v(" "), _c('li', [_c('i', {
    staticClass: "icon-social-linkedin"
  }), _vm._v(" "), _c('span', {
    staticClass: "title"
  }, [_vm._v("LinkedIn")]), _vm._v(" "), _c('span', {
    staticClass: "value"
  }, [_vm._v("27,319 "), _c('span', {
    staticClass: "text-muted small"
  }, [_vm._v("(8%)")])]), _vm._v(" "), _c('div', {
    staticClass: "bars"
  }, [_c('div', {
    staticClass: "progress progress-xs"
  }, [_c('div', {
    staticClass: "progress-bar bg-success",
    staticStyle: {
      "width": "8%"
    },
    attrs: {
      "role": "progressbar",
      "aria-valuenow": "8",
      "aria-valuemin": "0",
      "aria-valuemax": "100"
    }
  })])])]), _vm._v(" "), _c('li', {
    staticClass: "divider text-center"
  }, [_c('button', {
    staticClass: "btn btn-sm btn-link text-muted",
    attrs: {
      "type": "button",
      "data-toggle": "tooltip",
      "data-placement": "top",
      "title": "",
      "data-original-title": "show more"
    }
  }, [_c('i', {
    staticClass: "icon-options"
  })])])])]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-6 col-lg-4"
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-sm-6"
  }, [_c('div', {
    staticClass: "callout"
  }, [_c('small', {
    staticClass: "text-muted"
  }, [_vm._v("CTR")]), _c('br'), _vm._v(" "), _c('strong', {
    staticClass: "h4"
  }, [_vm._v("23%")])])]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-6"
  }, [_c('div', {
    staticClass: "callout callout-primary"
  }, [_c('small', {
    staticClass: "text-muted"
  }, [_vm._v("Bounce Rate")]), _c('br'), _vm._v(" "), _c('strong', {
    staticClass: "h4"
  }, [_vm._v("5%")])])])]), _vm._v(" "), _c('hr', {
    staticClass: "mt-0"
  }), _vm._v(" "), _c('ul', {
    staticClass: "icons-list"
  }, [_c('li', [_c('i', {
    staticClass: "icon-screen-desktop bg-primary"
  }), _vm._v(" "), _c('div', {
    staticClass: "desc"
  }, [_c('div', {
    staticClass: "title"
  }, [_vm._v("iMac 4k")]), _vm._v(" "), _c('small', [_vm._v("Lorem ipsum dolor sit amet")])]), _vm._v(" "), _c('div', {
    staticClass: "value"
  }, [_c('div', {
    staticClass: "small text-muted"
  }, [_vm._v("Sold this week")]), _vm._v(" "), _c('strong', [_vm._v("1.924")])]), _vm._v(" "), _c('div', {
    staticClass: "actions"
  }, [_c('button', {
    staticClass: "btn btn-link text-muted",
    attrs: {
      "type": "button"
    }
  }, [_c('i', {
    staticClass: "icon-settings"
  })])])]), _vm._v(" "), _c('li', [_c('i', {
    staticClass: "icon-screen-smartphone bg-info"
  }), _vm._v(" "), _c('div', {
    staticClass: "desc"
  }, [_c('div', {
    staticClass: "title"
  }, [_vm._v("Samsung Galaxy Edge")]), _vm._v(" "), _c('small', [_vm._v("Lorem ipsum dolor sit amet")])]), _vm._v(" "), _c('div', {
    staticClass: "value"
  }, [_c('div', {
    staticClass: "small text-muted"
  }, [_vm._v("Sold this week")]), _vm._v(" "), _c('strong', [_vm._v("1.224")])]), _vm._v(" "), _c('div', {
    staticClass: "actions"
  }, [_c('button', {
    staticClass: "btn btn-link text-muted",
    attrs: {
      "type": "button"
    }
  }, [_c('i', {
    staticClass: "icon-settings"
  })])])]), _vm._v(" "), _c('li', [_c('i', {
    staticClass: "icon-screen-smartphone bg-warning"
  }), _vm._v(" "), _c('div', {
    staticClass: "desc"
  }, [_c('div', {
    staticClass: "title"
  }, [_vm._v("iPhone 6S")]), _vm._v(" "), _c('small', [_vm._v("Lorem ipsum dolor sit amet")])]), _vm._v(" "), _c('div', {
    staticClass: "value"
  }, [_c('div', {
    staticClass: "small text-muted"
  }, [_vm._v("Sold this week")]), _vm._v(" "), _c('strong', [_vm._v("1.163")])]), _vm._v(" "), _c('div', {
    staticClass: "actions"
  }, [_c('button', {
    staticClass: "btn btn-link text-muted",
    attrs: {
      "type": "button"
    }
  }, [_c('i', {
    staticClass: "icon-settings"
  })])])]), _vm._v(" "), _c('li', [_c('i', {
    staticClass: "icon-user bg-danger"
  }), _vm._v(" "), _c('div', {
    staticClass: "desc"
  }, [_c('div', {
    staticClass: "title"
  }, [_vm._v("Premium accounts")]), _vm._v(" "), _c('small', [_vm._v("Lorem ipsum dolor sit amet")])]), _vm._v(" "), _c('div', {
    staticClass: "value"
  }, [_c('div', {
    staticClass: "small text-muted"
  }, [_vm._v("Sold this week")]), _vm._v(" "), _c('strong', [_vm._v("928")])]), _vm._v(" "), _c('div', {
    staticClass: "actions"
  }, [_c('button', {
    staticClass: "btn btn-link text-muted",
    attrs: {
      "type": "button"
    }
  }, [_c('i', {
    staticClass: "icon-settings"
  })])])]), _vm._v(" "), _c('li', [_c('i', {
    staticClass: "icon-social-spotify bg-success"
  }), _vm._v(" "), _c('div', {
    staticClass: "desc"
  }, [_c('div', {
    staticClass: "title"
  }, [_vm._v("Spotify Subscriptions")]), _vm._v(" "), _c('small', [_vm._v("Lorem ipsum dolor sit amet")])]), _vm._v(" "), _c('div', {
    staticClass: "value"
  }, [_c('div', {
    staticClass: "small text-muted"
  }, [_vm._v("Sold this week")]), _vm._v(" "), _c('strong', [_vm._v("893")])]), _vm._v(" "), _c('div', {
    staticClass: "actions"
  }, [_c('button', {
    staticClass: "btn btn-link text-muted",
    attrs: {
      "type": "button"
    }
  }, [_c('i', {
    staticClass: "icon-settings"
  })])])]), _vm._v(" "), _c('li', [_c('i', {
    staticClass: "icon-cloud-download bg-danger"
  }), _vm._v(" "), _c('div', {
    staticClass: "desc"
  }, [_c('div', {
    staticClass: "title"
  }, [_vm._v("Ebook")]), _vm._v(" "), _c('small', [_vm._v("Lorem ipsum dolor sit amet")])]), _vm._v(" "), _c('div', {
    staticClass: "value"
  }, [_c('div', {
    staticClass: "small text-muted"
  }, [_vm._v("Downloads")]), _vm._v(" "), _c('strong', [_vm._v("121.924")])]), _vm._v(" "), _c('div', {
    staticClass: "actions"
  }, [_c('button', {
    staticClass: "btn btn-link text-muted",
    attrs: {
      "type": "button"
    }
  }, [_c('i', {
    staticClass: "icon-settings"
  })])])]), _vm._v(" "), _c('li', [_c('i', {
    staticClass: "icon-camera bg-warning"
  }), _vm._v(" "), _c('div', {
    staticClass: "desc"
  }, [_c('div', {
    staticClass: "title"
  }, [_vm._v("Photos")]), _vm._v(" "), _c('small', [_vm._v("Lorem ipsum dolor sit amet")])]), _vm._v(" "), _c('div', {
    staticClass: "value"
  }, [_c('div', {
    staticClass: "small text-muted"
  }, [_vm._v("Uploaded")]), _vm._v(" "), _c('strong', [_vm._v("12.125")])]), _vm._v(" "), _c('div', {
    staticClass: "actions"
  }, [_c('button', {
    staticClass: "btn btn-link text-muted",
    attrs: {
      "type": "button"
    }
  }, [_c('i', {
    staticClass: "icon-settings"
  })])])]), _vm._v(" "), _c('li', {
    staticClass: "divider text-center"
  }, [_c('button', {
    staticClass: "btn btn-sm btn-link text-muted",
    attrs: {
      "type": "button",
      "data-toggle": "tooltip",
      "data-placement": "top",
      "title": "show more"
    }
  }, [_c('i', {
    staticClass: "icon-options"
  })])])])])]), _vm._v(" "), _c('br'), _vm._v(" "), _c('table', {
    staticClass: "table table-hover table-outline mb-0 hidden-sm-down"
  }, [_c('thead', {
    staticClass: "thead-default"
  }, [_c('tr', [_c('th', {
    staticClass: "text-center"
  }, [_c('i', {
    staticClass: "icon-people"
  })]), _vm._v(" "), _c('th', [_vm._v("User")]), _vm._v(" "), _c('th', {
    staticClass: "text-center"
  }, [_vm._v("Country")]), _vm._v(" "), _c('th', [_vm._v("Usage")]), _vm._v(" "), _c('th', {
    staticClass: "text-center"
  }, [_vm._v("Payment Method")]), _vm._v(" "), _c('th', [_vm._v("Activity")])])]), _vm._v(" "), _c('tbody', [_c('tr', [_c('td', {
    staticClass: "text-center"
  }, [_c('div', {
    staticClass: "avatar"
  }, [_c('img', {
    staticClass: "img-avatar",
    attrs: {
      "src": "static/img/avatars/1.jpg",
      "alt": "admin@bootstrapmaster.com"
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "avatar-status badge-success"
  })])]), _vm._v(" "), _c('td', [_c('div', [_vm._v("Yiorgos Avraamu")]), _vm._v(" "), _c('div', {
    staticClass: "small text-muted"
  }, [_c('span', [_vm._v("New")]), _vm._v(" | Registered: Jan 1, 2015\n                  ")])]), _vm._v(" "), _c('td', {
    staticClass: "text-center"
  }, [_c('img', {
    staticStyle: {
      "height": "24px"
    },
    attrs: {
      "src": "static/img/flags/USA.png",
      "alt": "USA"
    }
  })]), _vm._v(" "), _c('td', [_c('div', {
    staticClass: "clearfix"
  }, [_c('div', {
    staticClass: "float-left"
  }, [_c('strong', [_vm._v("50%")])]), _vm._v(" "), _c('div', {
    staticClass: "float-right"
  }, [_c('small', {
    staticClass: "text-muted"
  }, [_vm._v("Jun 11, 2015 - Jul 10, 2015")])])]), _vm._v(" "), _c('div', {
    staticClass: "progress progress-xs"
  }, [_c('div', {
    staticClass: "progress-bar bg-success",
    staticStyle: {
      "width": "50%"
    },
    attrs: {
      "role": "progressbar",
      "aria-valuenow": "50",
      "aria-valuemin": "0",
      "aria-valuemax": "100"
    }
  })])]), _vm._v(" "), _c('td', {
    staticClass: "text-center"
  }, [_c('i', {
    staticClass: "fa fa-cc-mastercard",
    staticStyle: {
      "font-size": "24px"
    }
  })]), _vm._v(" "), _c('td', [_c('div', {
    staticClass: "small text-muted"
  }, [_vm._v("Last login")]), _vm._v(" "), _c('strong', [_vm._v("10 sec ago")])])]), _vm._v(" "), _c('tr', [_c('td', {
    staticClass: "text-center"
  }, [_c('div', {
    staticClass: "avatar"
  }, [_c('img', {
    staticClass: "img-avatar",
    attrs: {
      "src": "static/img/avatars/2.jpg",
      "alt": "admin@bootstrapmaster.com"
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "avatar-status badge-danger"
  })])]), _vm._v(" "), _c('td', [_c('div', [_vm._v("Avram Tarasios")]), _vm._v(" "), _c('div', {
    staticClass: "small text-muted"
  }, [_c('span', [_vm._v("Recurring")]), _vm._v(" | Registered: Jan 1, 2015\n                  ")])]), _vm._v(" "), _c('td', {
    staticClass: "text-center"
  }, [_c('img', {
    staticStyle: {
      "height": "24px"
    },
    attrs: {
      "src": "static/img/flags/Brazil.png",
      "alt": "Brazil"
    }
  })]), _vm._v(" "), _c('td', [_c('div', {
    staticClass: "clearfix"
  }, [_c('div', {
    staticClass: "float-left"
  }, [_c('strong', [_vm._v("10%")])]), _vm._v(" "), _c('div', {
    staticClass: "float-right"
  }, [_c('small', {
    staticClass: "text-muted"
  }, [_vm._v("Jun 11, 2015 - Jul 10, 2015")])])]), _vm._v(" "), _c('div', {
    staticClass: "progress progress-xs"
  }, [_c('div', {
    staticClass: "progress-bar bg-info",
    staticStyle: {
      "width": "10%"
    },
    attrs: {
      "role": "progressbar",
      "aria-valuenow": "10",
      "aria-valuemin": "0",
      "aria-valuemax": "100"
    }
  })])]), _vm._v(" "), _c('td', {
    staticClass: "text-center"
  }, [_c('i', {
    staticClass: "fa fa-cc-visa",
    staticStyle: {
      "font-size": "24px"
    }
  })]), _vm._v(" "), _c('td', [_c('div', {
    staticClass: "small text-muted"
  }, [_vm._v("Last login")]), _vm._v(" "), _c('strong', [_vm._v("5 minutes ago")])])]), _vm._v(" "), _c('tr', [_c('td', {
    staticClass: "text-center"
  }, [_c('div', {
    staticClass: "avatar"
  }, [_c('img', {
    staticClass: "img-avatar",
    attrs: {
      "src": "static/img/avatars/3.jpg",
      "alt": "admin@bootstrapmaster.com"
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "avatar-status badge-warning"
  })])]), _vm._v(" "), _c('td', [_c('div', [_vm._v("Quintin Ed")]), _vm._v(" "), _c('div', {
    staticClass: "small text-muted"
  }, [_c('span', [_vm._v("New")]), _vm._v(" | Registered: Jan 1, 2015\n                  ")])]), _vm._v(" "), _c('td', {
    staticClass: "text-center"
  }, [_c('img', {
    staticStyle: {
      "height": "24px"
    },
    attrs: {
      "src": "static/img/flags/India.png",
      "alt": "India"
    }
  })]), _vm._v(" "), _c('td', [_c('div', {
    staticClass: "clearfix"
  }, [_c('div', {
    staticClass: "float-left"
  }, [_c('strong', [_vm._v("74%")])]), _vm._v(" "), _c('div', {
    staticClass: "float-right"
  }, [_c('small', {
    staticClass: "text-muted"
  }, [_vm._v("Jun 11, 2015 - Jul 10, 2015")])])]), _vm._v(" "), _c('div', {
    staticClass: "progress progress-xs"
  }, [_c('div', {
    staticClass: "progress-bar bg-warning",
    staticStyle: {
      "width": "74%"
    },
    attrs: {
      "role": "progressbar",
      "aria-valuenow": "74",
      "aria-valuemin": "0",
      "aria-valuemax": "100"
    }
  })])]), _vm._v(" "), _c('td', {
    staticClass: "text-center"
  }, [_c('i', {
    staticClass: "fa fa-cc-stripe",
    staticStyle: {
      "font-size": "24px"
    }
  })]), _vm._v(" "), _c('td', [_c('div', {
    staticClass: "small text-muted"
  }, [_vm._v("Last login")]), _vm._v(" "), _c('strong', [_vm._v("1 hour ago")])])]), _vm._v(" "), _c('tr', [_c('td', {
    staticClass: "text-center"
  }, [_c('div', {
    staticClass: "avatar"
  }, [_c('img', {
    staticClass: "img-avatar",
    attrs: {
      "src": "static/img/avatars/4.jpg",
      "alt": "admin@bootstrapmaster.com"
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "avatar-status badge-default"
  })])]), _vm._v(" "), _c('td', [_c('div', [_vm._v("Enéas Kwadwo")]), _vm._v(" "), _c('div', {
    staticClass: "small text-muted"
  }, [_c('span', [_vm._v("New")]), _vm._v(" | Registered: Jan 1, 2015\n                  ")])]), _vm._v(" "), _c('td', {
    staticClass: "text-center"
  }, [_c('img', {
    staticStyle: {
      "height": "24px"
    },
    attrs: {
      "src": "static/img/flags/France.png",
      "alt": "France"
    }
  })]), _vm._v(" "), _c('td', [_c('div', {
    staticClass: "clearfix"
  }, [_c('div', {
    staticClass: "float-left"
  }, [_c('strong', [_vm._v("98%")])]), _vm._v(" "), _c('div', {
    staticClass: "float-right"
  }, [_c('small', {
    staticClass: "text-muted"
  }, [_vm._v("Jun 11, 2015 - Jul 10, 2015")])])]), _vm._v(" "), _c('div', {
    staticClass: "progress progress-xs"
  }, [_c('div', {
    staticClass: "progress-bar bg-danger",
    staticStyle: {
      "width": "98%"
    },
    attrs: {
      "role": "progressbar",
      "aria-valuenow": "98",
      "aria-valuemin": "0",
      "aria-valuemax": "100"
    }
  })])]), _vm._v(" "), _c('td', {
    staticClass: "text-center"
  }, [_c('i', {
    staticClass: "fa fa-paypal",
    staticStyle: {
      "font-size": "24px"
    }
  })]), _vm._v(" "), _c('td', [_c('div', {
    staticClass: "small text-muted"
  }, [_vm._v("Last login")]), _vm._v(" "), _c('strong', [_vm._v("Last month")])])]), _vm._v(" "), _c('tr', [_c('td', {
    staticClass: "text-center"
  }, [_c('div', {
    staticClass: "avatar"
  }, [_c('img', {
    staticClass: "img-avatar",
    attrs: {
      "src": "static/img/avatars/5.jpg",
      "alt": "admin@bootstrapmaster.com"
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "avatar-status badge-success"
  })])]), _vm._v(" "), _c('td', [_c('div', [_vm._v("Agapetus Tadeáš")]), _vm._v(" "), _c('div', {
    staticClass: "small text-muted"
  }, [_c('span', [_vm._v("New")]), _vm._v(" | Registered: Jan 1, 2015\n                  ")])]), _vm._v(" "), _c('td', {
    staticClass: "text-center"
  }, [_c('img', {
    staticStyle: {
      "height": "24px"
    },
    attrs: {
      "src": "static/img/flags/Spain.png",
      "alt": "Spain"
    }
  })]), _vm._v(" "), _c('td', [_c('div', {
    staticClass: "clearfix"
  }, [_c('div', {
    staticClass: "float-left"
  }, [_c('strong', [_vm._v("22%")])]), _vm._v(" "), _c('div', {
    staticClass: "float-right"
  }, [_c('small', {
    staticClass: "text-muted"
  }, [_vm._v("Jun 11, 2015 - Jul 10, 2015")])])]), _vm._v(" "), _c('div', {
    staticClass: "progress progress-xs"
  }, [_c('div', {
    staticClass: "progress-bar bg-info",
    staticStyle: {
      "width": "22%"
    },
    attrs: {
      "role": "progressbar",
      "aria-valuenow": "22",
      "aria-valuemin": "0",
      "aria-valuemax": "100"
    }
  })])]), _vm._v(" "), _c('td', {
    staticClass: "text-center"
  }, [_c('i', {
    staticClass: "fa fa-google-wallet",
    staticStyle: {
      "font-size": "24px"
    }
  })]), _vm._v(" "), _c('td', [_c('div', {
    staticClass: "small text-muted"
  }, [_vm._v("Last login")]), _vm._v(" "), _c('strong', [_vm._v("Last week")])])]), _vm._v(" "), _c('tr', [_c('td', {
    staticClass: "text-center"
  }, [_c('div', {
    staticClass: "avatar"
  }, [_c('img', {
    staticClass: "img-avatar",
    attrs: {
      "src": "static/img/avatars/6.jpg",
      "alt": "admin@bootstrapmaster.com"
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "avatar-status badge-danger"
  })])]), _vm._v(" "), _c('td', [_c('div', [_vm._v("Friderik Dávid")]), _vm._v(" "), _c('div', {
    staticClass: "small text-muted"
  }, [_c('span', [_vm._v("New")]), _vm._v(" | Registered: Jan 1, 2015\n                  ")])]), _vm._v(" "), _c('td', {
    staticClass: "text-center"
  }, [_c('img', {
    staticStyle: {
      "height": "24px"
    },
    attrs: {
      "src": "static/img/flags/Poland.png",
      "alt": "Poland"
    }
  })]), _vm._v(" "), _c('td', [_c('div', {
    staticClass: "clearfix"
  }, [_c('div', {
    staticClass: "float-left"
  }, [_c('strong', [_vm._v("43%")])]), _vm._v(" "), _c('div', {
    staticClass: "float-right"
  }, [_c('small', {
    staticClass: "text-muted"
  }, [_vm._v("Jun 11, 2015 - Jul 10, 2015")])])]), _vm._v(" "), _c('div', {
    staticClass: "progress progress-xs"
  }, [_c('div', {
    staticClass: "progress-bar bg-success",
    staticStyle: {
      "width": "43%"
    },
    attrs: {
      "role": "progressbar",
      "aria-valuenow": "43",
      "aria-valuemin": "0",
      "aria-valuemax": "100"
    }
  })])]), _vm._v(" "), _c('td', {
    staticClass: "text-center"
  }, [_c('i', {
    staticClass: "fa fa-cc-amex",
    staticStyle: {
      "font-size": "24px"
    }
  })]), _vm._v(" "), _c('td', [_c('div', {
    staticClass: "small text-muted"
  }, [_vm._v("Last login")]), _vm._v(" "), _c('strong', [_vm._v("Yesterday")])])])])])])])])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-1bf2271e", module.exports)
  }
}

/***/ })

});