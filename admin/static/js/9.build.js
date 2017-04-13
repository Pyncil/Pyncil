webpackJsonp([9],{

/***/ 47:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(58),
  /* template */
  __webpack_require__(83),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/home/ubuntu/workspace/admin/frontend/views/Widgets.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Widgets.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-92d40b8e", Component.options)
  } else {
    hotAPI.reload("data-v-92d40b8e", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 58:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'widgets',
  data: function data() {
    return {
      msg: 'Widgets'
    };
  }
});

/***/ }),

/***/ 83:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _vm._m(0)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "animated fadeIn"
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-sm-6 col-lg-3"
  }, [_c('div', {
    staticClass: "card"
  }, [_c('div', {
    staticClass: "card-block"
  }, [_c('div', {
    staticClass: "h4 m-0"
  }, [_vm._v("89.9%")]), _vm._v(" "), _c('div', [_vm._v("Lorem ipsum...")]), _vm._v(" "), _c('div', {
    staticClass: "progress progress-xs my-1"
  }, [_c('div', {
    staticClass: "progress-bar bg-success",
    staticStyle: {
      "width": "25%"
    },
    attrs: {
      "role": "progressbar",
      "aria-valuenow": "25",
      "aria-valuemin": "0",
      "aria-valuemax": "100"
    }
  })]), _vm._v(" "), _c('small', {
    staticClass: "text-muted"
  }, [_vm._v("Lorem ipsum dolor sit amet enim.")])])])]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-6 col-lg-3"
  }, [_c('div', {
    staticClass: "card"
  }, [_c('div', {
    staticClass: "card-block"
  }, [_c('div', {
    staticClass: "h4 m-0"
  }, [_vm._v("12.124")]), _vm._v(" "), _c('div', [_vm._v("Lorem ipsum...")]), _vm._v(" "), _c('div', {
    staticClass: "progress progress-xs my-1"
  }, [_c('div', {
    staticClass: "progress-bar bg-info",
    staticStyle: {
      "width": "25%"
    },
    attrs: {
      "role": "progressbar",
      "aria-valuenow": "25",
      "aria-valuemin": "0",
      "aria-valuemax": "100"
    }
  })]), _vm._v(" "), _c('small', {
    staticClass: "text-muted"
  }, [_vm._v("Lorem ipsum dolor sit amet enim.")])])])]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-6 col-lg-3"
  }, [_c('div', {
    staticClass: "card"
  }, [_c('div', {
    staticClass: "card-block"
  }, [_c('div', {
    staticClass: "h4 m-0"
  }, [_vm._v("$98.111,00")]), _vm._v(" "), _c('div', [_vm._v("Lorem ipsum...")]), _vm._v(" "), _c('div', {
    staticClass: "progress progress-xs my-1"
  }, [_c('div', {
    staticClass: "progress-bar bg-warning",
    staticStyle: {
      "width": "25%"
    },
    attrs: {
      "role": "progressbar",
      "aria-valuenow": "25",
      "aria-valuemin": "0",
      "aria-valuemax": "100"
    }
  })]), _vm._v(" "), _c('small', {
    staticClass: "text-muted"
  }, [_vm._v("Lorem ipsum dolor sit amet enim.")])])])]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-6 col-lg-3"
  }, [_c('div', {
    staticClass: "card"
  }, [_c('div', {
    staticClass: "card-block"
  }, [_c('div', {
    staticClass: "h4 m-0"
  }, [_vm._v("2 TB")]), _vm._v(" "), _c('div', [_vm._v("Lorem ipsum...")]), _vm._v(" "), _c('div', {
    staticClass: "progress progress-xs my-1"
  }, [_c('div', {
    staticClass: "progress-bar bg-danger",
    staticStyle: {
      "width": "25%"
    },
    attrs: {
      "role": "progressbar",
      "aria-valuenow": "25",
      "aria-valuemin": "0",
      "aria-valuemax": "100"
    }
  })]), _vm._v(" "), _c('small', {
    staticClass: "text-muted"
  }, [_vm._v("Lorem ipsum dolor sit amet enim.")])])])])]), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-sm-6 col-lg-3"
  }, [_c('div', {
    staticClass: "card card-inverse card-primary"
  }, [_c('div', {
    staticClass: "card-block"
  }, [_c('div', {
    staticClass: "h4 m-0"
  }, [_vm._v("89.9%")]), _vm._v(" "), _c('div', [_vm._v("Lorem ipsum...")]), _vm._v(" "), _c('div', {
    staticClass: "progress progress-white progress-xs my-1"
  }, [_c('div', {
    staticClass: "progress-bar",
    staticStyle: {
      "width": "25%"
    },
    attrs: {
      "role": "progressbar",
      "aria-valuenow": "25",
      "aria-valuemin": "0",
      "aria-valuemax": "100"
    }
  })]), _vm._v(" "), _c('small', {
    staticClass: "text-muted"
  }, [_vm._v("Lorem ipsum dolor sit amet enim.")])])])]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-6 col-lg-3"
  }, [_c('div', {
    staticClass: "card card-inverse card-warning"
  }, [_c('div', {
    staticClass: "card-block"
  }, [_c('div', {
    staticClass: "h4 m-0"
  }, [_vm._v("12.124")]), _vm._v(" "), _c('div', [_vm._v("Lorem ipsum...")]), _vm._v(" "), _c('div', {
    staticClass: "progress progress-white progress-xs my-1"
  }, [_c('div', {
    staticClass: "progress-bar",
    staticStyle: {
      "width": "25%"
    },
    attrs: {
      "role": "progressbar",
      "aria-valuenow": "25",
      "aria-valuemin": "0",
      "aria-valuemax": "100"
    }
  })]), _vm._v(" "), _c('small', {
    staticClass: "text-muted"
  }, [_vm._v("Lorem ipsum dolor sit amet enim.")])])])]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-6 col-lg-3"
  }, [_c('div', {
    staticClass: "card card-inverse card-danger"
  }, [_c('div', {
    staticClass: "card-block"
  }, [_c('div', {
    staticClass: "h4 m-0"
  }, [_vm._v("$98.111,00")]), _vm._v(" "), _c('div', [_vm._v("Lorem ipsum...")]), _vm._v(" "), _c('div', {
    staticClass: "progress progress-white progress-xs my-1"
  }, [_c('div', {
    staticClass: "progress-bar",
    staticStyle: {
      "width": "25%"
    },
    attrs: {
      "role": "progressbar",
      "aria-valuenow": "25",
      "aria-valuemin": "0",
      "aria-valuemax": "100"
    }
  })]), _vm._v(" "), _c('small', {
    staticClass: "text-muted"
  }, [_vm._v("Lorem ipsum dolor sit amet enim.")])])])]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-6 col-lg-3"
  }, [_c('div', {
    staticClass: "card card-inverse card-info"
  }, [_c('div', {
    staticClass: "card-block"
  }, [_c('div', {
    staticClass: "h4 m-0"
  }, [_vm._v("2 TB")]), _vm._v(" "), _c('div', [_vm._v("Lorem ipsum...")]), _vm._v(" "), _c('div', {
    staticClass: "progress progress-white progress-xs my-1"
  }, [_c('div', {
    staticClass: "progress-bar",
    staticStyle: {
      "width": "25%"
    },
    attrs: {
      "role": "progressbar",
      "aria-valuenow": "25",
      "aria-valuemin": "0",
      "aria-valuemax": "100"
    }
  })]), _vm._v(" "), _c('small', {
    staticClass: "text-muted"
  }, [_vm._v("Lorem ipsum dolor sit amet enim.")])])])])]), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-6 col-lg-3"
  }, [_c('div', {
    staticClass: "card"
  }, [_c('div', {
    staticClass: "card-block p-1 clearfix"
  }, [_c('i', {
    staticClass: "fa fa-cogs bg-primary p-1 font-2xl mr-1 float-left"
  }), _vm._v(" "), _c('div', {
    staticClass: "h5 text-primary mb-0 mt-h"
  }, [_vm._v("$1.999,50")]), _vm._v(" "), _c('div', {
    staticClass: "text-muted text-uppercase font-weight-bold font-xs"
  }, [_vm._v("Income")])])])]), _vm._v(" "), _c('div', {
    staticClass: "col-6 col-lg-3"
  }, [_c('div', {
    staticClass: "card"
  }, [_c('div', {
    staticClass: "card-block p-1 clearfix"
  }, [_c('i', {
    staticClass: "fa fa-laptop bg-info p-1 font-2xl mr-1 float-left"
  }), _vm._v(" "), _c('div', {
    staticClass: "h5 text-info mb-0 mt-h"
  }, [_vm._v("$1.999,50")]), _vm._v(" "), _c('div', {
    staticClass: "text-muted text-uppercase font-weight-bold font-xs"
  }, [_vm._v("Income")])])])]), _vm._v(" "), _c('div', {
    staticClass: "col-6 col-lg-3"
  }, [_c('div', {
    staticClass: "card"
  }, [_c('div', {
    staticClass: "card-block p-1 clearfix"
  }, [_c('i', {
    staticClass: "fa fa-moon-o bg-warning p-1 font-2xl mr-1 float-left"
  }), _vm._v(" "), _c('div', {
    staticClass: "h5 text-warning mb-0 mt-h"
  }, [_vm._v("$1.999,50")]), _vm._v(" "), _c('div', {
    staticClass: "text-muted text-uppercase font-weight-bold font-xs"
  }, [_vm._v("Income")])])])]), _vm._v(" "), _c('div', {
    staticClass: "col-6 col-lg-3"
  }, [_c('div', {
    staticClass: "card"
  }, [_c('div', {
    staticClass: "card-block p-1 clearfix"
  }, [_c('i', {
    staticClass: "fa fa-bell bg-danger p-1 font-2xl mr-1 float-left"
  }), _vm._v(" "), _c('div', {
    staticClass: "h5 text-danger mb-0 mt-h"
  }, [_vm._v("$1.999,50")]), _vm._v(" "), _c('div', {
    staticClass: "text-muted text-uppercase font-weight-bold font-xs"
  }, [_vm._v("Income")])])])]), _vm._v(" "), _c('div', {
    staticClass: "col-6 col-lg-3"
  }, [_c('div', {
    staticClass: "card"
  }, [_c('div', {
    staticClass: "card-block p-1 clearfix"
  }, [_c('i', {
    staticClass: "fa fa-cogs bg-primary p-1 font-2xl mr-1 float-left"
  }), _vm._v(" "), _c('div', {
    staticClass: "h5 text-primary mb-0 mt-h"
  }, [_vm._v("$1.999,50")]), _vm._v(" "), _c('div', {
    staticClass: "text-muted text-uppercase font-weight-bold font-xs"
  }, [_vm._v("Income")])]), _vm._v(" "), _c('div', {
    staticClass: "card-footer px-1 py-h"
  }, [_c('a', {
    staticClass: "font-weight-bold font-xs btn-block text-muted",
    attrs: {
      "href": "#"
    }
  }, [_vm._v("View More "), _c('i', {
    staticClass: "fa fa-angle-right float-right font-lg"
  })])])])]), _vm._v(" "), _c('div', {
    staticClass: "col-6 col-lg-3"
  }, [_c('div', {
    staticClass: "card"
  }, [_c('div', {
    staticClass: "card-block p-1 clearfix"
  }, [_c('i', {
    staticClass: "fa fa-laptop bg-info p-1 font-2xl mr-1 float-left"
  }), _vm._v(" "), _c('div', {
    staticClass: "h5 text-info mb-0 mt-h"
  }, [_vm._v("$1.999,50")]), _vm._v(" "), _c('div', {
    staticClass: "text-muted text-uppercase font-weight-bold font-xs"
  }, [_vm._v("Income")])]), _vm._v(" "), _c('div', {
    staticClass: "card-footer px-1 py-h"
  }, [_c('a', {
    staticClass: "font-weight-bold font-xs btn-block text-muted",
    attrs: {
      "href": "#"
    }
  }, [_vm._v("View More "), _c('i', {
    staticClass: "fa fa-angle-right float-right font-lg"
  })])])])]), _vm._v(" "), _c('div', {
    staticClass: "col-6 col-lg-3"
  }, [_c('div', {
    staticClass: "card"
  }, [_c('div', {
    staticClass: "card-block p-1 clearfix"
  }, [_c('i', {
    staticClass: "fa fa-moon-o bg-warning p-1 font-2xl mr-1 float-left"
  }), _vm._v(" "), _c('div', {
    staticClass: "h5 text-warning mb-0 mt-h"
  }, [_vm._v("$1.999,50")]), _vm._v(" "), _c('div', {
    staticClass: "text-muted text-uppercase font-weight-bold font-xs"
  }, [_vm._v("Income")])]), _vm._v(" "), _c('div', {
    staticClass: "card-footer px-1 py-h"
  }, [_c('a', {
    staticClass: "font-weight-bold font-xs btn-block text-muted",
    attrs: {
      "href": "#"
    }
  }, [_vm._v("View More "), _c('i', {
    staticClass: "fa fa-angle-right float-right font-lg"
  })])])])]), _vm._v(" "), _c('div', {
    staticClass: "col-6 col-lg-3"
  }, [_c('div', {
    staticClass: "card"
  }, [_c('div', {
    staticClass: "card-block p-1 clearfix"
  }, [_c('i', {
    staticClass: "fa fa-bell bg-danger p-1 font-2xl mr-1 float-left"
  }), _vm._v(" "), _c('div', {
    staticClass: "h5 text-danger mb-0 mt-h"
  }, [_vm._v("$1.999,50")]), _vm._v(" "), _c('div', {
    staticClass: "text-muted text-uppercase font-weight-bold font-xs"
  }, [_vm._v("Income")])]), _vm._v(" "), _c('div', {
    staticClass: "card-footer px-1 py-h"
  }, [_c('a', {
    staticClass: "font-weight-bold font-xs btn-block text-muted",
    attrs: {
      "href": "#"
    }
  }, [_vm._v("View More "), _c('i', {
    staticClass: "fa fa-angle-right float-right font-lg"
  })])])])])]), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-6 col-lg-3"
  }, [_c('div', {
    staticClass: "card"
  }, [_c('div', {
    staticClass: "card-block p-0 clearfix"
  }, [_c('i', {
    staticClass: "fa fa-cogs bg-primary p-2 font-2xl mr-1 float-left"
  }), _vm._v(" "), _c('div', {
    staticClass: "h5 text-primary mb-0 pt-1"
  }, [_vm._v("$1.999,50")]), _vm._v(" "), _c('div', {
    staticClass: "text-muted text-uppercase font-weight-bold font-xs"
  }, [_vm._v("Income")])])])]), _vm._v(" "), _c('div', {
    staticClass: "col-6 col-lg-3"
  }, [_c('div', {
    staticClass: "card"
  }, [_c('div', {
    staticClass: "card-block p-0 clearfix"
  }, [_c('i', {
    staticClass: "fa fa-laptop bg-info p-2 font-2xl mr-1 float-left"
  }), _vm._v(" "), _c('div', {
    staticClass: "h5 text-info mb-0 pt-1"
  }, [_vm._v("$1.999,50")]), _vm._v(" "), _c('div', {
    staticClass: "text-muted text-uppercase font-weight-bold font-xs"
  }, [_vm._v("Income")])])])]), _vm._v(" "), _c('div', {
    staticClass: "col-6 col-lg-3"
  }, [_c('div', {
    staticClass: "card"
  }, [_c('div', {
    staticClass: "card-block p-0 clearfix"
  }, [_c('i', {
    staticClass: "fa fa-moon-o bg-warning p-2 font-2xl mr-1 float-left"
  }), _vm._v(" "), _c('div', {
    staticClass: "h5 text-warning mb-0 pt-1"
  }, [_vm._v("$1.999,50")]), _vm._v(" "), _c('div', {
    staticClass: "text-muted text-uppercase font-weight-bold font-xs"
  }, [_vm._v("Income")])])])]), _vm._v(" "), _c('div', {
    staticClass: "col-6 col-lg-3"
  }, [_c('div', {
    staticClass: "card"
  }, [_c('div', {
    staticClass: "card-block p-0 clearfix"
  }, [_c('i', {
    staticClass: "fa fa-bell bg-danger p-2 font-2xl mr-1 float-left"
  }), _vm._v(" "), _c('div', {
    staticClass: "h5 text-danger mb-0 pt-1"
  }, [_vm._v("$1.999,50")]), _vm._v(" "), _c('div', {
    staticClass: "text-muted text-uppercase font-weight-bold font-xs"
  }, [_vm._v("Income")])])])]), _vm._v(" "), _c('div', {
    staticClass: "col-6 col-lg-3"
  }, [_c('div', {
    staticClass: "card"
  }, [_c('div', {
    staticClass: "card-block p-0 clearfix"
  }, [_c('i', {
    staticClass: "fa fa-cogs bg-primary p-2 px-3 font-2xl mr-1 float-left"
  }), _vm._v(" "), _c('div', {
    staticClass: "h5 text-primary mb-0 pt-1"
  }, [_vm._v("$1.999,50")]), _vm._v(" "), _c('div', {
    staticClass: "text-muted text-uppercase font-weight-bold font-xs"
  }, [_vm._v("Income")])])])]), _vm._v(" "), _c('div', {
    staticClass: "col-6 col-lg-3"
  }, [_c('div', {
    staticClass: "card"
  }, [_c('div', {
    staticClass: "card-block p-0 clearfix"
  }, [_c('i', {
    staticClass: "fa fa-laptop bg-info p-2 px-3 font-2xl mr-1 float-left"
  }), _vm._v(" "), _c('div', {
    staticClass: "h5 text-info mb-0 pt-1"
  }, [_vm._v("$1.999,50")]), _vm._v(" "), _c('div', {
    staticClass: "text-muted text-uppercase font-weight-bold font-xs"
  }, [_vm._v("Income")])])])]), _vm._v(" "), _c('div', {
    staticClass: "col-6 col-lg-3"
  }, [_c('div', {
    staticClass: "card"
  }, [_c('div', {
    staticClass: "card-block p-0 clearfix"
  }, [_c('i', {
    staticClass: "fa fa-moon-o bg-warning p-2 px-3 font-2xl mr-1 float-left"
  }), _vm._v(" "), _c('div', {
    staticClass: "h5 text-warning mb-0 pt-1"
  }, [_vm._v("$1.999,50")]), _vm._v(" "), _c('div', {
    staticClass: "text-muted text-uppercase font-weight-bold font-xs"
  }, [_vm._v("Income")])])])]), _vm._v(" "), _c('div', {
    staticClass: "col-6 col-lg-3"
  }, [_c('div', {
    staticClass: "card"
  }, [_c('div', {
    staticClass: "card-block p-0 clearfix"
  }, [_c('i', {
    staticClass: "fa fa-bell bg-danger p-2 px-3 font-2xl mr-1 float-left"
  }), _vm._v(" "), _c('div', {
    staticClass: "h5 text-danger mb-0 pt-1"
  }, [_vm._v("$1.999,50")]), _vm._v(" "), _c('div', {
    staticClass: "text-muted text-uppercase font-weight-bold font-xs"
  }, [_vm._v("Income")])])])])]), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-md-3 col-sm-6"
  }, [_c('div', {
    staticClass: "social-box facebook"
  }, [_c('i', {
    staticClass: "fa fa-facebook"
  }), _vm._v(" "), _c('ul', [_c('li', [_c('strong', [_vm._v("89k")]), _vm._v(" "), _c('span', [_vm._v("friends")])]), _vm._v(" "), _c('li', [_c('strong', [_vm._v("459")]), _vm._v(" "), _c('span', [_vm._v("feeds")])])])])]), _vm._v(" "), _c('div', {
    staticClass: "col-md-3 col-sm-6"
  }, [_c('div', {
    staticClass: "social-box twitter"
  }, [_c('i', {
    staticClass: "fa fa-twitter"
  }), _vm._v(" "), _c('ul', [_c('li', [_c('strong', [_vm._v("973k")]), _vm._v(" "), _c('span', [_vm._v("followers")])]), _vm._v(" "), _c('li', [_c('strong', [_vm._v("1.792")]), _vm._v(" "), _c('span', [_vm._v("tweets")])])])])]), _vm._v(" "), _c('div', {
    staticClass: "col-md-3 col-sm-6"
  }, [_c('div', {
    staticClass: "social-box linkedin"
  }, [_c('i', {
    staticClass: "fa fa-linkedin"
  }), _vm._v(" "), _c('ul', [_c('li', [_c('strong', [_vm._v("500+")]), _vm._v(" "), _c('span', [_vm._v("contacts")])]), _vm._v(" "), _c('li', [_c('strong', [_vm._v("292")]), _vm._v(" "), _c('span', [_vm._v("feeds")])])])])]), _vm._v(" "), _c('div', {
    staticClass: "col-md-3 col-sm-6"
  }, [_c('div', {
    staticClass: "social-box google-plus"
  }, [_c('i', {
    staticClass: "fa fa-google-plus"
  }), _vm._v(" "), _c('ul', [_c('li', [_c('strong', [_vm._v("894")]), _vm._v(" "), _c('span', [_vm._v("followers")])]), _vm._v(" "), _c('li', [_c('strong', [_vm._v("92")]), _vm._v(" "), _c('span', [_vm._v("circles")])])])])])]), _vm._v(" "), _c('div', {
    staticClass: "card-group"
  }, [_c('div', {
    staticClass: "card"
  }, [_c('div', {
    staticClass: "card-block"
  }, [_c('div', {
    staticClass: "h1 text-muted text-right mb-2"
  }, [_c('i', {
    staticClass: "icon-people"
  })]), _vm._v(" "), _c('div', {
    staticClass: "h4 mb-0"
  }, [_vm._v("87.500")]), _vm._v(" "), _c('small', {
    staticClass: "text-muted text-uppercase font-weight-bold"
  }, [_vm._v("Visitors")]), _vm._v(" "), _c('div', {
    staticClass: "progress progress-xs mt-1 mb-0"
  }, [_c('div', {
    staticClass: "progress-bar bg-info",
    staticStyle: {
      "width": "25%"
    },
    attrs: {
      "role": "progressbar",
      "aria-valuenow": "25",
      "aria-valuemin": "0",
      "aria-valuemax": "100"
    }
  })])])]), _vm._v(" "), _c('div', {
    staticClass: "card"
  }, [_c('div', {
    staticClass: "card-block"
  }, [_c('div', {
    staticClass: "h1 text-muted text-right mb-2"
  }, [_c('i', {
    staticClass: "icon-user-follow"
  })]), _vm._v(" "), _c('div', {
    staticClass: "h4 mb-0"
  }, [_vm._v("385")]), _vm._v(" "), _c('small', {
    staticClass: "text-muted text-uppercase font-weight-bold"
  }, [_vm._v("New Clients")]), _vm._v(" "), _c('div', {
    staticClass: "progress progress-xs mt-1 mb-0"
  }, [_c('div', {
    staticClass: "progress-bar bg-success",
    staticStyle: {
      "width": "25%"
    },
    attrs: {
      "role": "progressbar",
      "aria-valuenow": "25",
      "aria-valuemin": "0",
      "aria-valuemax": "100"
    }
  })])])]), _vm._v(" "), _c('div', {
    staticClass: "card"
  }, [_c('div', {
    staticClass: "card-block"
  }, [_c('div', {
    staticClass: "h1 text-muted text-right mb-2"
  }, [_c('i', {
    staticClass: "icon-basket-loaded"
  })]), _vm._v(" "), _c('div', {
    staticClass: "h4 mb-0"
  }, [_vm._v("1238")]), _vm._v(" "), _c('small', {
    staticClass: "text-muted text-uppercase font-weight-bold"
  }, [_vm._v("Products sold")]), _vm._v(" "), _c('div', {
    staticClass: "progress progress-xs mt-1 mb-0"
  }, [_c('div', {
    staticClass: "progress-bar bg-warning",
    staticStyle: {
      "width": "25%"
    },
    attrs: {
      "role": "progressbar",
      "aria-valuenow": "25",
      "aria-valuemin": "0",
      "aria-valuemax": "100"
    }
  })])])]), _vm._v(" "), _c('div', {
    staticClass: "card"
  }, [_c('div', {
    staticClass: "card-block"
  }, [_c('div', {
    staticClass: "h1 text-muted text-right mb-2"
  }, [_c('i', {
    staticClass: "icon-pie-chart"
  })]), _vm._v(" "), _c('div', {
    staticClass: "h4 mb-0"
  }, [_vm._v("28%")]), _vm._v(" "), _c('small', {
    staticClass: "text-muted text-uppercase font-weight-bold"
  }, [_vm._v("Returning Visitors")]), _vm._v(" "), _c('div', {
    staticClass: "progress progress-xs mt-1 mb-0"
  }, [_c('div', {
    staticClass: "progress-bar",
    staticStyle: {
      "width": "25%"
    },
    attrs: {
      "role": "progressbar",
      "aria-valuenow": "25",
      "aria-valuemin": "0",
      "aria-valuemax": "100"
    }
  })])])]), _vm._v(" "), _c('div', {
    staticClass: "card"
  }, [_c('div', {
    staticClass: "card-block"
  }, [_c('div', {
    staticClass: "h1 text-muted text-right mb-2"
  }, [_c('i', {
    staticClass: "icon-speedometer"
  })]), _vm._v(" "), _c('div', {
    staticClass: "h4 mb-0"
  }, [_vm._v("5:34:11")]), _vm._v(" "), _c('small', {
    staticClass: "text-muted text-uppercase font-weight-bold"
  }, [_vm._v("Avg. Time")]), _vm._v(" "), _c('div', {
    staticClass: "progress progress-xs mt-1 mb-0"
  }, [_c('div', {
    staticClass: "progress-bar bg-danger",
    staticStyle: {
      "width": "25%"
    },
    attrs: {
      "role": "progressbar",
      "aria-valuenow": "25",
      "aria-valuemin": "0",
      "aria-valuemax": "100"
    }
  })])])])]), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-sm-6 col-md-2"
  }, [_c('div', {
    staticClass: "card"
  }, [_c('div', {
    staticClass: "card-block"
  }, [_c('div', {
    staticClass: "h1 text-muted text-right mb-2"
  }, [_c('i', {
    staticClass: "icon-people"
  })]), _vm._v(" "), _c('div', {
    staticClass: "h4 mb-0"
  }, [_vm._v("87.500")]), _vm._v(" "), _c('small', {
    staticClass: "text-muted text-uppercase font-weight-bold"
  }, [_vm._v("Visitors")]), _vm._v(" "), _c('div', {
    staticClass: "progress progress-xs mt-1 mb-0"
  }, [_c('div', {
    staticClass: "progress-bar bg-info",
    staticStyle: {
      "width": "25%"
    },
    attrs: {
      "role": "progressbar",
      "aria-valuenow": "25",
      "aria-valuemin": "0",
      "aria-valuemax": "100"
    }
  })])])])]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-6 col-md-2"
  }, [_c('div', {
    staticClass: "card"
  }, [_c('div', {
    staticClass: "card-block"
  }, [_c('div', {
    staticClass: "h1 text-muted text-right mb-2"
  }, [_c('i', {
    staticClass: "icon-user-follow"
  })]), _vm._v(" "), _c('div', {
    staticClass: "h4 mb-0"
  }, [_vm._v("385")]), _vm._v(" "), _c('small', {
    staticClass: "text-muted text-uppercase font-weight-bold"
  }, [_vm._v("New Clients")]), _vm._v(" "), _c('div', {
    staticClass: "progress progress-xs mt-1 mb-0"
  }, [_c('div', {
    staticClass: "progress-bar bg-success",
    staticStyle: {
      "width": "25%"
    },
    attrs: {
      "role": "progressbar",
      "aria-valuenow": "25",
      "aria-valuemin": "0",
      "aria-valuemax": "100"
    }
  })])])])]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-6 col-md-2"
  }, [_c('div', {
    staticClass: "card"
  }, [_c('div', {
    staticClass: "card-block"
  }, [_c('div', {
    staticClass: "h1 text-muted text-right mb-2"
  }, [_c('i', {
    staticClass: "icon-basket-loaded"
  })]), _vm._v(" "), _c('div', {
    staticClass: "h4 mb-0"
  }, [_vm._v("1238")]), _vm._v(" "), _c('small', {
    staticClass: "text-muted text-uppercase font-weight-bold"
  }, [_vm._v("Products sold")]), _vm._v(" "), _c('div', {
    staticClass: "progress progress-xs mt-1 mb-0"
  }, [_c('div', {
    staticClass: "progress-bar bg-warning",
    staticStyle: {
      "width": "25%"
    },
    attrs: {
      "role": "progressbar",
      "aria-valuenow": "25",
      "aria-valuemin": "0",
      "aria-valuemax": "100"
    }
  })])])])]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-6 col-md-2"
  }, [_c('div', {
    staticClass: "card"
  }, [_c('div', {
    staticClass: "card-block"
  }, [_c('div', {
    staticClass: "h1 text-muted text-right mb-2"
  }, [_c('i', {
    staticClass: "icon-pie-chart"
  })]), _vm._v(" "), _c('div', {
    staticClass: "h4 mb-0"
  }, [_vm._v("28%")]), _vm._v(" "), _c('small', {
    staticClass: "text-muted text-uppercase font-weight-bold"
  }, [_vm._v("Returning Visitors")]), _vm._v(" "), _c('div', {
    staticClass: "progress progress-xs mt-1 mb-0"
  }, [_c('div', {
    staticClass: "progress-bar",
    staticStyle: {
      "width": "25%"
    },
    attrs: {
      "role": "progressbar",
      "aria-valuenow": "25",
      "aria-valuemin": "0",
      "aria-valuemax": "100"
    }
  })])])])]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-6 col-md-2"
  }, [_c('div', {
    staticClass: "card"
  }, [_c('div', {
    staticClass: "card-block"
  }, [_c('div', {
    staticClass: "h1 text-muted text-right mb-2"
  }, [_c('i', {
    staticClass: "icon-speedometer"
  })]), _vm._v(" "), _c('div', {
    staticClass: "h4 mb-0"
  }, [_vm._v("5:34:11")]), _vm._v(" "), _c('small', {
    staticClass: "text-muted text-uppercase font-weight-bold"
  }, [_vm._v("Avg. Time")]), _vm._v(" "), _c('div', {
    staticClass: "progress progress-xs mt-1 mb-0"
  }, [_c('div', {
    staticClass: "progress-bar bg-danger",
    staticStyle: {
      "width": "25%"
    },
    attrs: {
      "role": "progressbar",
      "aria-valuenow": "25",
      "aria-valuemin": "0",
      "aria-valuemax": "100"
    }
  })])])])]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-6 col-md-2"
  }, [_c('div', {
    staticClass: "card"
  }, [_c('div', {
    staticClass: "card-block"
  }, [_c('div', {
    staticClass: "h1 text-muted text-right mb-2"
  }, [_c('i', {
    staticClass: "icon-speech"
  })]), _vm._v(" "), _c('div', {
    staticClass: "h4 mb-0"
  }, [_vm._v("972")]), _vm._v(" "), _c('small', {
    staticClass: "text-muted text-uppercase font-weight-bold"
  }, [_vm._v("Comments")]), _vm._v(" "), _c('div', {
    staticClass: "progress progress-xs mt-1 mb-0"
  }, [_c('div', {
    staticClass: "progress-bar bg-info",
    staticStyle: {
      "width": "25%"
    },
    attrs: {
      "role": "progressbar",
      "aria-valuenow": "25",
      "aria-valuemin": "0",
      "aria-valuemax": "100"
    }
  })])])])])]), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-sm-6 col-md-2"
  }, [_c('div', {
    staticClass: "card card-inverse card-info"
  }, [_c('div', {
    staticClass: "card-block"
  }, [_c('div', {
    staticClass: "h1 text-muted text-right mb-2"
  }, [_c('i', {
    staticClass: "icon-people"
  })]), _vm._v(" "), _c('div', {
    staticClass: "h4 mb-0"
  }, [_vm._v("87.500")]), _vm._v(" "), _c('small', {
    staticClass: "text-muted text-uppercase font-weight-bold"
  }, [_vm._v("Visitors")]), _vm._v(" "), _c('div', {
    staticClass: "progress progress-white progress-xs mt-1"
  }, [_c('div', {
    staticClass: "progress-bar",
    staticStyle: {
      "width": "25%"
    },
    attrs: {
      "role": "progressbar",
      "aria-valuenow": "25",
      "aria-valuemin": "0",
      "aria-valuemax": "100"
    }
  })])])])]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-6 col-md-2"
  }, [_c('div', {
    staticClass: "card card-inverse card-success"
  }, [_c('div', {
    staticClass: "card-block"
  }, [_c('div', {
    staticClass: "h1 text-muted text-right mb-2"
  }, [_c('i', {
    staticClass: "icon-user-follow"
  })]), _vm._v(" "), _c('div', {
    staticClass: "h4 mb-0"
  }, [_vm._v("385")]), _vm._v(" "), _c('small', {
    staticClass: "text-muted text-uppercase font-weight-bold"
  }, [_vm._v("New Clients")]), _vm._v(" "), _c('div', {
    staticClass: "progress progress-white progress-xs mt-1"
  }, [_c('div', {
    staticClass: "progress-bar",
    staticStyle: {
      "width": "25%"
    },
    attrs: {
      "role": "progressbar",
      "aria-valuenow": "25",
      "aria-valuemin": "0",
      "aria-valuemax": "100"
    }
  })])])])]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-6 col-md-2"
  }, [_c('div', {
    staticClass: "card card-inverse card-warning"
  }, [_c('div', {
    staticClass: "card-block"
  }, [_c('div', {
    staticClass: "h1 text-muted text-right mb-2"
  }, [_c('i', {
    staticClass: "icon-basket-loaded"
  })]), _vm._v(" "), _c('div', {
    staticClass: "h4 mb-0"
  }, [_vm._v("1238")]), _vm._v(" "), _c('small', {
    staticClass: "text-muted text-uppercase font-weight-bold"
  }, [_vm._v("Products sold")]), _vm._v(" "), _c('div', {
    staticClass: "progress progress-white progress-xs mt-1"
  }, [_c('div', {
    staticClass: "progress-bar",
    staticStyle: {
      "width": "25%"
    },
    attrs: {
      "role": "progressbar",
      "aria-valuenow": "25",
      "aria-valuemin": "0",
      "aria-valuemax": "100"
    }
  })])])])]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-6 col-md-2"
  }, [_c('div', {
    staticClass: "card card-inverse card-primary"
  }, [_c('div', {
    staticClass: "card-block"
  }, [_c('div', {
    staticClass: "h1 text-muted text-right mb-2"
  }, [_c('i', {
    staticClass: "icon-pie-chart"
  })]), _vm._v(" "), _c('div', {
    staticClass: "h4 mb-0"
  }, [_vm._v("28%")]), _vm._v(" "), _c('small', {
    staticClass: "text-muted text-uppercase font-weight-bold"
  }, [_vm._v("Returning Visitors")]), _vm._v(" "), _c('div', {
    staticClass: "progress progress-white progress-xs mt-1"
  }, [_c('div', {
    staticClass: "progress-bar",
    staticStyle: {
      "width": "25%"
    },
    attrs: {
      "role": "progressbar",
      "aria-valuenow": "25",
      "aria-valuemin": "0",
      "aria-valuemax": "100"
    }
  })])])])]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-6 col-md-2"
  }, [_c('div', {
    staticClass: "card card-inverse card-danger"
  }, [_c('div', {
    staticClass: "card-block"
  }, [_c('div', {
    staticClass: "h1 text-muted text-right mb-2"
  }, [_c('i', {
    staticClass: "icon-speedometer"
  })]), _vm._v(" "), _c('div', {
    staticClass: "h4 mb-0"
  }, [_vm._v("5:34:11")]), _vm._v(" "), _c('small', {
    staticClass: "text-muted text-uppercase font-weight-bold"
  }, [_vm._v("Avg. Time")]), _vm._v(" "), _c('div', {
    staticClass: "progress progress-white progress-xs mt-1"
  }, [_c('div', {
    staticClass: "progress-bar",
    staticStyle: {
      "width": "25%"
    },
    attrs: {
      "role": "progressbar",
      "aria-valuenow": "25",
      "aria-valuemin": "0",
      "aria-valuemax": "100"
    }
  })])])])]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-6 col-md-2"
  }, [_c('div', {
    staticClass: "card card-inverse card-info"
  }, [_c('div', {
    staticClass: "card-block"
  }, [_c('div', {
    staticClass: "h1 text-muted text-right mb-2"
  }, [_c('i', {
    staticClass: "icon-speech"
  })]), _vm._v(" "), _c('div', {
    staticClass: "h4 mb-0"
  }, [_vm._v("972")]), _vm._v(" "), _c('small', {
    staticClass: "text-muted text-uppercase font-weight-bold"
  }, [_vm._v("Comments")]), _vm._v(" "), _c('div', {
    staticClass: "progress progress-white progress-xs mt-1"
  }, [_c('div', {
    staticClass: "progress-bar",
    staticStyle: {
      "width": "25%"
    },
    attrs: {
      "role": "progressbar",
      "aria-valuenow": "25",
      "aria-valuemin": "0",
      "aria-valuemax": "100"
    }
  })])])])])])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-92d40b8e", module.exports)
  }
}

/***/ })

});