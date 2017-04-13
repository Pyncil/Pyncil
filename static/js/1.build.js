webpackJsonp([1],{

/***/ 52:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(87)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(63),
  /* template */
  __webpack_require__(84),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/home/ubuntu/workspace/content/plugins/SocialButtons.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] SocialButtons.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-a66c8f52", Component.options)
  } else {
    hotAPI.reload("data-v-a66c8f52", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 63:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'social-buttons'
});

/***/ }),

/***/ 72:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(undefined);
// imports


// module
exports.push([module.i, "\n.btn {\n   margin-bottom: 4px;\n}\n", ""]);

// exports


/***/ }),

/***/ 84:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _vm._m(0)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "animated fadeIn"
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-12"
  }, [_c('div', {
    staticClass: "card"
  }, [_c('div', {
    staticClass: "card-header"
  }, [_c('strong', [_vm._v("Social Media Button")]), _vm._v(" "), _c('small', [_vm._v("Usage ex.")]), _c('code', {
    staticStyle: {
      "text-transform": "lowercase"
    }
  }, [_vm._v("<button class=\"btn btn-facebook\"><span>Facebook</span></button>")]), _vm._v(" "), _c('div', {
    staticClass: "card-actions"
  }, [_c('a', {
    staticClass: "btn-setting",
    attrs: {
      "href": "#"
    }
  }, [_c('i', {
    staticClass: "icon-settings"
  })]), _vm._v(" "), _c('button', {
    staticClass: "btn-minimize",
    attrs: {
      "type": "button",
      "data-toggle": "collapse",
      "data-target": "",
      "aria-expanded": "false",
      "aria-controls": "collapseExample"
    }
  }, [_c('i', {
    staticClass: "icon-arrow-up"
  })]), _vm._v(" "), _c('a', {
    staticClass: "btn-close",
    attrs: {
      "href": "#"
    }
  }, [_c('i', {
    staticClass: "icon-close"
  })])])]), _vm._v(" "), _c('div', {
    staticClass: "card-block"
  }, [_c('h6', [_vm._v("Size Small "), _c('small', [_vm._v("Add this class "), _c('code', [_vm._v(".btn-sm")])])]), _vm._v(" "), _c('p', [_c('button', {
    staticClass: "btn btn-sm btn-facebook",
    attrs: {
      "type": "button"
    }
  }, [_c('span', [_vm._v("Facebook")])]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-sm btn-twitter",
    attrs: {
      "type": "button"
    }
  }, [_c('span', [_vm._v("Twitter")])]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-sm btn-linkedin",
    attrs: {
      "type": "button"
    }
  }, [_c('span', [_vm._v("LinkedIn")])]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-sm btn-flickr",
    attrs: {
      "type": "button"
    }
  }, [_c('span', [_vm._v("Flickr")])]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-sm btn-tumblr",
    attrs: {
      "type": "button"
    }
  }, [_c('span', [_vm._v("Tumblr")])]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-sm btn-xing",
    attrs: {
      "type": "button"
    }
  }, [_c('span', [_vm._v("Xing")])]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-sm btn-github",
    attrs: {
      "type": "button"
    }
  }, [_c('span', [_vm._v("Github")])]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-sm btn-html5",
    attrs: {
      "type": "button"
    }
  }, [_c('span', [_vm._v("HTML5")])]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-sm btn-openid",
    attrs: {
      "type": "button"
    }
  }, [_c('span', [_vm._v("OpenID")])]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-sm btn-stack-overflow",
    attrs: {
      "type": "button"
    }
  }, [_c('span', [_vm._v("StackOverflow")])]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-sm btn-css3",
    attrs: {
      "type": "button"
    }
  }, [_c('span', [_vm._v("CSS3")])]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-sm btn-youtube",
    attrs: {
      "type": "button"
    }
  }, [_c('span', [_vm._v("YouTube")])]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-sm btn-dribbble",
    attrs: {
      "type": "button"
    }
  }, [_c('span', [_vm._v("Dribbble")])]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-sm btn-google-plus",
    attrs: {
      "type": "button"
    }
  }, [_c('span', [_vm._v("Google+")])]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-sm btn-instagram",
    attrs: {
      "type": "button"
    }
  }, [_c('span', [_vm._v("Instagram")])]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-sm btn-pinterest",
    attrs: {
      "type": "button"
    }
  }, [_c('span', [_vm._v("Pinterest")])]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-sm btn-vk",
    attrs: {
      "type": "button"
    }
  }, [_c('span', [_vm._v("VK")])]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-sm btn-yahoo",
    attrs: {
      "type": "button"
    }
  }, [_c('span', [_vm._v("Yahoo")])]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-sm btn-behance",
    attrs: {
      "type": "button"
    }
  }, [_c('span', [_vm._v("Behance")])]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-sm btn-dropbox",
    attrs: {
      "type": "button"
    }
  }, [_c('span', [_vm._v("Dropbox")])]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-sm btn-reddit",
    attrs: {
      "type": "button"
    }
  }, [_c('span', [_vm._v("Reddit")])]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-sm btn-spotify",
    attrs: {
      "type": "button"
    }
  }, [_c('span', [_vm._v("Spotify")])]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-sm btn-vine",
    attrs: {
      "type": "button"
    }
  }, [_c('span', [_vm._v("Vine")])]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-sm btn-foursquare",
    attrs: {
      "type": "button"
    }
  }, [_c('span', [_vm._v("Forsquare")])]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-sm btn-vimeo",
    attrs: {
      "type": "button"
    }
  }, [_c('span', [_vm._v("Vimeo")])])]), _vm._v(" "), _c('h6', [_vm._v("Size Normal")]), _vm._v(" "), _c('p', [_c('button', {
    staticClass: "btn btn-facebook",
    attrs: {
      "type": "button"
    }
  }, [_c('span', [_vm._v("Facebook")])]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-twitter",
    attrs: {
      "type": "button"
    }
  }, [_c('span', [_vm._v("Twitter")])]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-linkedin",
    attrs: {
      "type": "button"
    }
  }, [_c('span', [_vm._v("LinkedIn")])]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-flickr",
    attrs: {
      "type": "button"
    }
  }, [_c('span', [_vm._v("Flickr")])]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-tumblr",
    attrs: {
      "type": "button"
    }
  }, [_c('span', [_vm._v("Tumblr")])]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-xing",
    attrs: {
      "type": "button"
    }
  }, [_c('span', [_vm._v("Xing")])]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-github",
    attrs: {
      "type": "button"
    }
  }, [_c('span', [_vm._v("Github")])]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-html5",
    attrs: {
      "type": "button"
    }
  }, [_c('span', [_vm._v("HTML5")])]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-openid",
    attrs: {
      "type": "button"
    }
  }, [_c('span', [_vm._v("OpenID")])]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-stack-overflow",
    attrs: {
      "type": "button"
    }
  }, [_c('span', [_vm._v("StackOverflow")])]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-css3",
    attrs: {
      "type": "button"
    }
  }, [_c('span', [_vm._v("CSS3")])]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-youtube",
    attrs: {
      "type": "button"
    }
  }, [_c('span', [_vm._v("YouTube")])]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-dribbble",
    attrs: {
      "type": "button"
    }
  }, [_c('span', [_vm._v("Dribbble")])]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-google-plus",
    attrs: {
      "type": "button"
    }
  }, [_c('span', [_vm._v("Google+")])]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-instagram",
    attrs: {
      "type": "button"
    }
  }, [_c('span', [_vm._v("Instagram")])]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-pinterest",
    attrs: {
      "type": "button"
    }
  }, [_c('span', [_vm._v("Pinterest")])]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-vk",
    attrs: {
      "type": "button"
    }
  }, [_c('span', [_vm._v("VK")])]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-yahoo",
    attrs: {
      "type": "button"
    }
  }, [_c('span', [_vm._v("Yahoo")])]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-behance",
    attrs: {
      "type": "button"
    }
  }, [_c('span', [_vm._v("Behance")])]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-dropbox",
    attrs: {
      "type": "button"
    }
  }, [_c('span', [_vm._v("Dropbox")])]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-reddit",
    attrs: {
      "type": "button"
    }
  }, [_c('span', [_vm._v("Reddit")])]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-spotify",
    attrs: {
      "type": "button"
    }
  }, [_c('span', [_vm._v("Spotify")])]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-vine",
    attrs: {
      "type": "button"
    }
  }, [_c('span', [_vm._v("Vine")])]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-foursquare",
    attrs: {
      "type": "button"
    }
  }, [_c('span', [_vm._v("Forsquare")])]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-vimeo",
    attrs: {
      "type": "button"
    }
  }, [_c('span', [_vm._v("Vimeo")])])]), _vm._v(" "), _c('h6', [_vm._v("Size Large "), _c('small', [_vm._v("Add this class "), _c('code', [_vm._v(".btn-lg")])])]), _vm._v(" "), _c('p', [_c('button', {
    staticClass: "btn btn-lg btn-facebook",
    attrs: {
      "type": "button"
    }
  }, [_c('span', [_vm._v("Facebook")])]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-lg btn-twitter",
    attrs: {
      "type": "button"
    }
  }, [_c('span', [_vm._v("Twitter")])]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-lg btn-linkedin",
    attrs: {
      "type": "button"
    }
  }, [_c('span', [_vm._v("LinkedIn")])]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-lg btn-flickr",
    attrs: {
      "type": "button"
    }
  }, [_c('span', [_vm._v("Flickr")])]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-lg btn-tumblr",
    attrs: {
      "type": "button"
    }
  }, [_c('span', [_vm._v("Tumblr")])]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-lg btn-xing",
    attrs: {
      "type": "button"
    }
  }, [_c('span', [_vm._v("Xing")])]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-lg btn-github",
    attrs: {
      "type": "button"
    }
  }, [_c('span', [_vm._v("Github")])]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-lg btn-html5",
    attrs: {
      "type": "button"
    }
  }, [_c('span', [_vm._v("HTML5")])]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-lg btn-openid",
    attrs: {
      "type": "button"
    }
  }, [_c('span', [_vm._v("OpenID")])]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-lg btn-stack-overflow",
    attrs: {
      "type": "button"
    }
  }, [_c('span', [_vm._v("StackOverflow")])]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-lg btn-css3",
    attrs: {
      "type": "button"
    }
  }, [_c('span', [_vm._v("CSS3")])]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-lg btn-youtube",
    attrs: {
      "type": "button"
    }
  }, [_c('span', [_vm._v("YouTube")])]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-lg btn-dribbble",
    attrs: {
      "type": "button"
    }
  }, [_c('span', [_vm._v("Dribbble")])]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-lg btn-google-plus",
    attrs: {
      "type": "button"
    }
  }, [_c('span', [_vm._v("Google+")])]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-lg btn-instagram",
    attrs: {
      "type": "button"
    }
  }, [_c('span', [_vm._v("Instagram")])]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-lg btn-pinterest",
    attrs: {
      "type": "button"
    }
  }, [_c('span', [_vm._v("Pinterest")])]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-lg btn-vk",
    attrs: {
      "type": "button"
    }
  }, [_c('span', [_vm._v("VK")])]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-lg btn-yahoo",
    attrs: {
      "type": "button"
    }
  }, [_c('span', [_vm._v("Yahoo")])]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-lg btn-behance",
    attrs: {
      "type": "button"
    }
  }, [_c('span', [_vm._v("Behance")])]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-lg btn-dropbox",
    attrs: {
      "type": "button"
    }
  }, [_c('span', [_vm._v("Dropbox")])]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-lg btn-reddit",
    attrs: {
      "type": "button"
    }
  }, [_c('span', [_vm._v("Reddit")])]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-lg btn-spotify",
    attrs: {
      "type": "button"
    }
  }, [_c('span', [_vm._v("Spotify")])]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-lg btn-vine",
    attrs: {
      "type": "button"
    }
  }, [_c('span', [_vm._v("Vine")])]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-lg btn-foursquare",
    attrs: {
      "type": "button"
    }
  }, [_c('span', [_vm._v("Forsquare")])]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-lg btn-vimeo",
    attrs: {
      "type": "button"
    }
  }, [_c('span', [_vm._v("Vimeo")])])])])])]), _vm._v(" "), _c('div', {
    staticClass: "col-12"
  }, [_c('div', {
    staticClass: "card"
  }, [_c('div', {
    staticClass: "card-header"
  }, [_c('strong', [_vm._v("Social Media Button")]), _vm._v(" "), _c('small', [_vm._v("Only icons. Usage ex.")]), _vm._v(" "), _c('code', {
    staticStyle: {
      "text-transform": "lowercase"
    }
  }, [_vm._v("<button class=\"btn btn-facebook icon\"><span>Facebook</span></button>")]), _vm._v(" "), _c('div', {
    staticClass: "card-actions"
  }, [_c('a', {
    staticClass: "btn-setting",
    attrs: {
      "href": "#"
    }
  }, [_c('i', {
    staticClass: "icon-settings"
  })]), _vm._v(" "), _c('button', {
    staticClass: "btn-minimize",
    attrs: {
      "type": "button",
      "data-toggle": "collapse",
      "data-target": "",
      "aria-expanded": "false",
      "aria-controls": "collapseExample"
    }
  }, [_c('i', {
    staticClass: "icon-arrow-up"
  })]), _vm._v(" "), _c('a', {
    staticClass: "btn-close",
    attrs: {
      "href": "#"
    }
  }, [_c('i', {
    staticClass: "icon-close"
  })])])]), _vm._v(" "), _c('div', {
    staticClass: "card-block"
  }, [_c('h6', [_vm._v("Size Small "), _c('small', [_vm._v("Add this class "), _c('code', [_vm._v(".btn-sm")])])]), _vm._v(" "), _c('p', [_c('button', {
    staticClass: "btn btn-sm btn-facebook icon",
    attrs: {
      "type": "button"
    }
  }, [_c('span', [_vm._v("Facebook")])]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-sm btn-twitter icon",
    attrs: {
      "type": "button"
    }
  }, [_c('span', [_vm._v("Twitter")])]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-sm btn-linkedin icon",
    attrs: {
      "type": "button"
    }
  }, [_c('span', [_vm._v("LinkedIn")])]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-sm btn-flickr icon",
    attrs: {
      "type": "button"
    }
  }, [_c('span', [_vm._v("Flickr")])]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-sm btn-tumblr icon",
    attrs: {
      "type": "button"
    }
  }, [_c('span', [_vm._v("Tumblr")])]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-sm btn-xing icon",
    attrs: {
      "type": "button"
    }
  }, [_c('span', [_vm._v("Xing")])]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-sm btn-github icon",
    attrs: {
      "type": "button"
    }
  }, [_c('span', [_vm._v("Github")])]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-sm btn-html5 icon",
    attrs: {
      "type": "button"
    }
  }, [_c('span', [_vm._v("HTML5")])]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-sm btn-openid icon",
    attrs: {
      "type": "button"
    }
  }, [_c('span', [_vm._v("OpenID")])]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-sm btn-stack-overflow icon",
    attrs: {
      "type": "button"
    }
  }, [_c('span', [_vm._v("StackOverflow")])]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-sm btn-css3 icon",
    attrs: {
      "type": "button"
    }
  }, [_c('span', [_vm._v("CSS3")])]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-sm btn-youtube icon",
    attrs: {
      "type": "button"
    }
  }, [_c('span', [_vm._v("YouTube")])]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-sm btn-dribbble icon",
    attrs: {
      "type": "button"
    }
  }, [_c('span', [_vm._v("Dribbble")])]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-sm btn-google-plus icon",
    attrs: {
      "type": "button"
    }
  }, [_c('span', [_vm._v("Google+")])]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-sm btn-instagram icon",
    attrs: {
      "type": "button"
    }
  }, [_c('span', [_vm._v("Instagram")])]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-sm btn-pinterest icon",
    attrs: {
      "type": "button"
    }
  }, [_c('span', [_vm._v("Pinterest")])]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-sm btn-vk icon",
    attrs: {
      "type": "button"
    }
  }, [_c('span', [_vm._v("VK")])]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-sm btn-yahoo icon",
    attrs: {
      "type": "button"
    }
  }, [_c('span', [_vm._v("Yahoo")])]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-sm btn-behance icon",
    attrs: {
      "type": "button"
    }
  }, [_c('span', [_vm._v("Behance")])]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-sm btn-dropbox icon",
    attrs: {
      "type": "button"
    }
  }, [_c('span', [_vm._v("Dropbox")])]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-sm btn-reddit icon",
    attrs: {
      "type": "button"
    }
  }, [_c('span', [_vm._v("Reddit")])]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-sm btn-spotify icon",
    attrs: {
      "type": "button"
    }
  }, [_c('span', [_vm._v("Spotify")])]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-sm btn-vine icon",
    attrs: {
      "type": "button"
    }
  }, [_c('span', [_vm._v("Vine")])]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-sm btn-foursquare icon",
    attrs: {
      "type": "button"
    }
  }, [_c('span', [_vm._v("Forsquare")])]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-sm btn-vimeo icon",
    attrs: {
      "type": "button"
    }
  }, [_c('span', [_vm._v("Vimeo")])])]), _vm._v(" "), _c('h6', [_vm._v("Size Normal")]), _vm._v(" "), _c('p', [_c('button', {
    staticClass: "btn btn-facebook icon",
    attrs: {
      "type": "button"
    }
  }, [_c('span', [_vm._v("Facebook")])]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-twitter icon",
    attrs: {
      "type": "button"
    }
  }, [_c('span', [_vm._v("Twitter")])]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-linkedin icon",
    attrs: {
      "type": "button"
    }
  }, [_c('span', [_vm._v("LinkedIn")])]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-flickr icon",
    attrs: {
      "type": "button"
    }
  }, [_c('span', [_vm._v("Flickr")])]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-tumblr icon",
    attrs: {
      "type": "button"
    }
  }, [_c('span', [_vm._v("Tumblr")])]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-xing icon",
    attrs: {
      "type": "button"
    }
  }, [_c('span', [_vm._v("Xing")])]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-github icon",
    attrs: {
      "type": "button"
    }
  }, [_c('span', [_vm._v("Github")])]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-html5 icon",
    attrs: {
      "type": "button"
    }
  }, [_c('span', [_vm._v("HTML5")])]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-openid icon",
    attrs: {
      "type": "button"
    }
  }, [_c('span', [_vm._v("OpenID")])]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-stack-overflow icon",
    attrs: {
      "type": "button"
    }
  }, [_c('span', [_vm._v("StackOverflow")])]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-css3 icon",
    attrs: {
      "type": "button"
    }
  }, [_c('span', [_vm._v("CSS3")])]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-youtube icon",
    attrs: {
      "type": "button"
    }
  }, [_c('span', [_vm._v("YouTube")])]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-dribbble icon",
    attrs: {
      "type": "button"
    }
  }, [_c('span', [_vm._v("Dribbble")])]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-google-plus icon",
    attrs: {
      "type": "button"
    }
  }, [_c('span', [_vm._v("Google+")])]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-instagram icon",
    attrs: {
      "type": "button"
    }
  }, [_c('span', [_vm._v("Instagram")])]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-pinterest icon",
    attrs: {
      "type": "button"
    }
  }, [_c('span', [_vm._v("Pinterest")])]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-vk icon",
    attrs: {
      "type": "button"
    }
  }, [_c('span', [_vm._v("VK")])]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-yahoo icon",
    attrs: {
      "type": "button"
    }
  }, [_c('span', [_vm._v("Yahoo")])]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-behance icon",
    attrs: {
      "type": "button"
    }
  }, [_c('span', [_vm._v("Behance")])]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-dropbox icon",
    attrs: {
      "type": "button"
    }
  }, [_c('span', [_vm._v("Dropbox")])]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-reddit icon",
    attrs: {
      "type": "button"
    }
  }, [_c('span', [_vm._v("Reddit")])]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-spotify icon",
    attrs: {
      "type": "button"
    }
  }, [_c('span', [_vm._v("Spotify")])]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-vine icon",
    attrs: {
      "type": "button"
    }
  }, [_c('span', [_vm._v("Vine")])]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-foursquare icon",
    attrs: {
      "type": "button"
    }
  }, [_c('span', [_vm._v("Forsquare")])]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-vimeo icon",
    attrs: {
      "type": "button"
    }
  }, [_c('span', [_vm._v("Vimeo")])])]), _vm._v(" "), _c('h6', [_vm._v("Size Large "), _c('small', [_vm._v("Add this class "), _c('code', [_vm._v(".btn-lg")])])]), _vm._v(" "), _c('p', [_c('button', {
    staticClass: "btn btn-lg btn-facebook icon",
    attrs: {
      "type": "button"
    }
  }, [_c('span', [_vm._v("Facebook")])]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-lg btn-twitter icon",
    attrs: {
      "type": "button"
    }
  }, [_c('span', [_vm._v("Twitter")])]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-lg btn-linkedin icon",
    attrs: {
      "type": "button"
    }
  }, [_c('span', [_vm._v("LinkedIn")])]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-lg btn-flickr icon",
    attrs: {
      "type": "button"
    }
  }, [_c('span', [_vm._v("Flickr")])]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-lg btn-tumblr icon",
    attrs: {
      "type": "button"
    }
  }, [_c('span', [_vm._v("Tumblr")])]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-lg btn-xing icon",
    attrs: {
      "type": "button"
    }
  }, [_c('span', [_vm._v("Xing")])]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-lg btn-github icon",
    attrs: {
      "type": "button"
    }
  }, [_c('span', [_vm._v("Github")])]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-lg btn-html5 icon",
    attrs: {
      "type": "button"
    }
  }, [_c('span', [_vm._v("HTML5")])]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-lg btn-openid icon",
    attrs: {
      "type": "button"
    }
  }, [_c('span', [_vm._v("OpenID")])]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-lg btn-stack-overflow icon",
    attrs: {
      "type": "button"
    }
  }, [_c('span', [_vm._v("StackOverflow")])]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-lg btn-css3 icon",
    attrs: {
      "type": "button"
    }
  }, [_c('span', [_vm._v("CSS3")])]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-lg btn-youtube icon",
    attrs: {
      "type": "button"
    }
  }, [_c('span', [_vm._v("YouTube")])]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-lg btn-dribbble icon",
    attrs: {
      "type": "button"
    }
  }, [_c('span', [_vm._v("Dribbble")])]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-lg btn-google-plus icon",
    attrs: {
      "type": "button"
    }
  }, [_c('span', [_vm._v("Google+")])]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-lg btn-instagram icon",
    attrs: {
      "type": "button"
    }
  }, [_c('span', [_vm._v("Instagram")])]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-lg btn-pinterest icon",
    attrs: {
      "type": "button"
    }
  }, [_c('span', [_vm._v("Pinterest")])]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-lg btn-vk icon",
    attrs: {
      "type": "button"
    }
  }, [_c('span', [_vm._v("VK")])]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-lg btn-yahoo icon",
    attrs: {
      "type": "button"
    }
  }, [_c('span', [_vm._v("Yahoo")])]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-lg btn-behance icon",
    attrs: {
      "type": "button"
    }
  }, [_c('span', [_vm._v("Behance")])]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-lg btn-dropbox icon",
    attrs: {
      "type": "button"
    }
  }, [_c('span', [_vm._v("Dropbox")])]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-lg btn-reddit icon",
    attrs: {
      "type": "button"
    }
  }, [_c('span', [_vm._v("Reddit")])]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-lg btn-spotify icon",
    attrs: {
      "type": "button"
    }
  }, [_c('span', [_vm._v("Spotify")])]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-lg btn-vine icon",
    attrs: {
      "type": "button"
    }
  }, [_c('span', [_vm._v("Vine")])]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-lg btn-foursquare icon",
    attrs: {
      "type": "button"
    }
  }, [_c('span', [_vm._v("Forsquare")])]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-lg btn-vimeo icon",
    attrs: {
      "type": "button"
    }
  }, [_c('span', [_vm._v("Vimeo")])])])])])]), _vm._v(" "), _c('div', {
    staticClass: "col-12"
  }, [_c('div', {
    staticClass: "card"
  }, [_c('div', {
    staticClass: "card-header"
  }, [_c('strong', [_vm._v("Social Media Button")]), _vm._v(" "), _c('small', [_vm._v("Only text. Usage ex.")]), _vm._v(" "), _c('code', {
    staticStyle: {
      "text-transform": "lowercase"
    }
  }, [_vm._v("<button class=\"btn btn-facebook text\"><span>Facebook</span></button>")]), _vm._v(" "), _c('div', {
    staticClass: "card-actions"
  }, [_c('a', {
    staticClass: "btn-setting",
    attrs: {
      "href": "#"
    }
  }, [_c('i', {
    staticClass: "icon-settings"
  })]), _vm._v(" "), _c('button', {
    staticClass: "btn-minimize",
    attrs: {
      "type": "button",
      "data-toggle": "collapse",
      "data-target": "",
      "aria-expanded": "false",
      "aria-controls": "collapseExample"
    }
  }, [_c('i', {
    staticClass: "icon-arrow-up"
  })]), _vm._v(" "), _c('a', {
    staticClass: "btn-close",
    attrs: {
      "href": "#"
    }
  }, [_c('i', {
    staticClass: "icon-close"
  })])])]), _vm._v(" "), _c('div', {
    staticClass: "card-block"
  }, [_c('h6', [_vm._v("Size Small "), _c('small', [_vm._v("Add this class "), _c('code', [_vm._v(".btn-sm")])])]), _vm._v(" "), _c('p', [_c('button', {
    staticClass: "btn btn-sm btn-facebook text",
    attrs: {
      "type": "button"
    }
  }, [_c('span', [_vm._v("Facebook")])]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-sm btn-twitter text",
    attrs: {
      "type": "button"
    }
  }, [_c('span', [_vm._v("Twitter")])]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-sm btn-linkedin text",
    attrs: {
      "type": "button"
    }
  }, [_c('span', [_vm._v("LinkedIn")])]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-sm btn-flickr text",
    attrs: {
      "type": "button"
    }
  }, [_c('span', [_vm._v("Flickr")])]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-sm btn-tumblr text",
    attrs: {
      "type": "button"
    }
  }, [_c('span', [_vm._v("Tumblr")])]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-sm btn-xing text",
    attrs: {
      "type": "button"
    }
  }, [_c('span', [_vm._v("Xing")])]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-sm btn-github text",
    attrs: {
      "type": "button"
    }
  }, [_c('span', [_vm._v("Github")])]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-sm btn-html5 text",
    attrs: {
      "type": "button"
    }
  }, [_c('span', [_vm._v("HTML5")])]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-sm btn-openid text",
    attrs: {
      "type": "button"
    }
  }, [_c('span', [_vm._v("OpenID")])]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-sm btn-stack-overflow text",
    attrs: {
      "type": "button"
    }
  }, [_c('span', [_vm._v("StackOverflow")])]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-sm btn-css3 text",
    attrs: {
      "type": "button"
    }
  }, [_c('span', [_vm._v("CSS3")])]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-sm btn-youtube text",
    attrs: {
      "type": "button"
    }
  }, [_c('span', [_vm._v("YouTube")])]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-sm btn-dribbble text",
    attrs: {
      "type": "button"
    }
  }, [_c('span', [_vm._v("Dribbble")])]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-sm btn-google-plus text",
    attrs: {
      "type": "button"
    }
  }, [_c('span', [_vm._v("Google+")])]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-sm btn-instagram text",
    attrs: {
      "type": "button"
    }
  }, [_c('span', [_vm._v("Instagram")])]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-sm btn-pinterest text",
    attrs: {
      "type": "button"
    }
  }, [_c('span', [_vm._v("Pinterest")])]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-sm btn-vk text",
    attrs: {
      "type": "button"
    }
  }, [_c('span', [_vm._v("VK")])]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-sm btn-yahoo text",
    attrs: {
      "type": "button"
    }
  }, [_c('span', [_vm._v("Yahoo")])]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-sm btn-behance text",
    attrs: {
      "type": "button"
    }
  }, [_c('span', [_vm._v("Behance")])]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-sm btn-dropbox text",
    attrs: {
      "type": "button"
    }
  }, [_c('span', [_vm._v("Dropbox")])]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-sm btn-reddit text",
    attrs: {
      "type": "button"
    }
  }, [_c('span', [_vm._v("Reddit")])]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-sm btn-spotify text",
    attrs: {
      "type": "button"
    }
  }, [_c('span', [_vm._v("Spotify")])]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-sm btn-vine text",
    attrs: {
      "type": "button"
    }
  }, [_c('span', [_vm._v("Vine")])]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-sm btn-foursquare text",
    attrs: {
      "type": "button"
    }
  }, [_c('span', [_vm._v("Forsquare")])]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-sm btn-vimeo text",
    attrs: {
      "type": "button"
    }
  }, [_c('span', [_vm._v("Vimeo")])])]), _vm._v(" "), _c('h6', [_vm._v("Size Normal")]), _vm._v(" "), _c('p', [_c('button', {
    staticClass: "btn btn-facebook text",
    attrs: {
      "type": "button"
    }
  }, [_c('span', [_vm._v("Facebook")])]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-twitter text",
    attrs: {
      "type": "button"
    }
  }, [_c('span', [_vm._v("Twitter")])]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-linkedin text",
    attrs: {
      "type": "button"
    }
  }, [_c('span', [_vm._v("LinkedIn")])]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-flickr text",
    attrs: {
      "type": "button"
    }
  }, [_c('span', [_vm._v("Flickr")])]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-tumblr text",
    attrs: {
      "type": "button"
    }
  }, [_c('span', [_vm._v("Tumblr")])]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-xing text",
    attrs: {
      "type": "button"
    }
  }, [_c('span', [_vm._v("Xing")])]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-github text",
    attrs: {
      "type": "button"
    }
  }, [_c('span', [_vm._v("Github")])]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-html5 text",
    attrs: {
      "type": "button"
    }
  }, [_c('span', [_vm._v("HTML5")])]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-openid text",
    attrs: {
      "type": "button"
    }
  }, [_c('span', [_vm._v("OpenID")])]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-stack-overflow text",
    attrs: {
      "type": "button"
    }
  }, [_c('span', [_vm._v("StackOverflow")])]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-css3 text",
    attrs: {
      "type": "button"
    }
  }, [_c('span', [_vm._v("CSS3")])]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-youtube text",
    attrs: {
      "type": "button"
    }
  }, [_c('span', [_vm._v("YouTube")])]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-dribbble text",
    attrs: {
      "type": "button"
    }
  }, [_c('span', [_vm._v("Dribbble")])]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-google-plus text",
    attrs: {
      "type": "button"
    }
  }, [_c('span', [_vm._v("Google+")])]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-instagram text",
    attrs: {
      "type": "button"
    }
  }, [_c('span', [_vm._v("Instagram")])]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-pinterest text",
    attrs: {
      "type": "button"
    }
  }, [_c('span', [_vm._v("Pinterest")])]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-vk text",
    attrs: {
      "type": "button"
    }
  }, [_c('span', [_vm._v("VK")])]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-yahoo text",
    attrs: {
      "type": "button"
    }
  }, [_c('span', [_vm._v("Yahoo")])]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-behance text",
    attrs: {
      "type": "button"
    }
  }, [_c('span', [_vm._v("Behance")])]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-dropbox text",
    attrs: {
      "type": "button"
    }
  }, [_c('span', [_vm._v("Dropbox")])]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-reddit text",
    attrs: {
      "type": "button"
    }
  }, [_c('span', [_vm._v("Reddit")])]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-spotify text",
    attrs: {
      "type": "button"
    }
  }, [_c('span', [_vm._v("Spotify")])]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-vine text",
    attrs: {
      "type": "button"
    }
  }, [_c('span', [_vm._v("Vine")])]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-foursquare text",
    attrs: {
      "type": "button"
    }
  }, [_c('span', [_vm._v("Forsquare")])]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-vimeo text",
    attrs: {
      "type": "button"
    }
  }, [_c('span', [_vm._v("Vimeo")])])]), _vm._v(" "), _c('h6', [_vm._v("Size Large "), _c('small', [_vm._v("Add this class "), _c('code', [_vm._v(".btn-lg")])])]), _vm._v(" "), _c('p', [_c('button', {
    staticClass: "btn btn-lg btn-facebook text",
    attrs: {
      "type": "button"
    }
  }, [_c('span', [_vm._v("Facebook")])]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-lg btn-twitter text",
    attrs: {
      "type": "button"
    }
  }, [_c('span', [_vm._v("Twitter")])]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-lg btn-linkedin text",
    attrs: {
      "type": "button"
    }
  }, [_c('span', [_vm._v("LinkedIn")])]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-lg btn-flickr text",
    attrs: {
      "type": "button"
    }
  }, [_c('span', [_vm._v("Flickr")])]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-lg btn-tumblr text",
    attrs: {
      "type": "button"
    }
  }, [_c('span', [_vm._v("Tumblr")])]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-lg btn-xing text",
    attrs: {
      "type": "button"
    }
  }, [_c('span', [_vm._v("Xing")])]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-lg btn-github text",
    attrs: {
      "type": "button"
    }
  }, [_c('span', [_vm._v("Github")])]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-lg btn-html5 text",
    attrs: {
      "type": "button"
    }
  }, [_c('span', [_vm._v("HTML5")])]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-lg btn-openid text",
    attrs: {
      "type": "button"
    }
  }, [_c('span', [_vm._v("OpenID")])]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-lg btn-stack-overflow text",
    attrs: {
      "type": "button"
    }
  }, [_c('span', [_vm._v("StackOverflow")])]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-lg btn-css3 text",
    attrs: {
      "type": "button"
    }
  }, [_c('span', [_vm._v("CSS3")])]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-lg btn-youtube text",
    attrs: {
      "type": "button"
    }
  }, [_c('span', [_vm._v("YouTube")])]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-lg btn-dribbble text",
    attrs: {
      "type": "button"
    }
  }, [_c('span', [_vm._v("Dribbble")])]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-lg btn-google-plus text",
    attrs: {
      "type": "button"
    }
  }, [_c('span', [_vm._v("Google+")])]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-lg btn-instagram text",
    attrs: {
      "type": "button"
    }
  }, [_c('span', [_vm._v("Instagram")])]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-lg btn-pinterest text",
    attrs: {
      "type": "button"
    }
  }, [_c('span', [_vm._v("Pinterest")])]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-lg btn-vk text",
    attrs: {
      "type": "button"
    }
  }, [_c('span', [_vm._v("VK")])]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-lg btn-yahoo text",
    attrs: {
      "type": "button"
    }
  }, [_c('span', [_vm._v("Yahoo")])]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-lg btn-behance text",
    attrs: {
      "type": "button"
    }
  }, [_c('span', [_vm._v("Behance")])]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-lg btn-dropbox text",
    attrs: {
      "type": "button"
    }
  }, [_c('span', [_vm._v("Dropbox")])]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-lg btn-reddit text",
    attrs: {
      "type": "button"
    }
  }, [_c('span', [_vm._v("Reddit")])]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-lg btn-spotify text",
    attrs: {
      "type": "button"
    }
  }, [_c('span', [_vm._v("Spotify")])]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-lg btn-vine text",
    attrs: {
      "type": "button"
    }
  }, [_c('span', [_vm._v("Vine")])]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-lg btn-foursquare text",
    attrs: {
      "type": "button"
    }
  }, [_c('span', [_vm._v("Forsquare")])]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-lg btn-vimeo text",
    attrs: {
      "type": "button"
    }
  }, [_c('span', [_vm._v("Vimeo")])])])])])])])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-a66c8f52", module.exports)
  }
}

/***/ }),

/***/ 87:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(72);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("869983e0", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-a66c8f52\",\"scoped\":false,\"hasInlineConfig\":false}!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./SocialButtons.vue", function() {
     var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-a66c8f52\",\"scoped\":false,\"hasInlineConfig\":false}!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./SocialButtons.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ })

});