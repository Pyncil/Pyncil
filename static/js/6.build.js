webpackJsonp([6],{

/***/ 50:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(61),
  /* template */
  __webpack_require__(77),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/home/ubuntu/workspace/content/plugins/Forms.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Forms.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-542b029c", Component.options)
  } else {
    hotAPI.reload("data-v-542b029c", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 61:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'forms'
});

/***/ }),

/***/ 77:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _vm._m(0)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "animated fadeIn"
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-sm-6"
  }, [_c('div', {
    staticClass: "card"
  }, [_c('div', {
    staticClass: "card-header"
  }, [_c('strong', [_vm._v("Credit Card")]), _vm._v(" "), _c('small', [_vm._v("Form")])]), _vm._v(" "), _c('div', {
    staticClass: "card-block"
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-sm-12"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": "name"
    }
  }, [_vm._v("Name")]), _vm._v(" "), _c('input', {
    staticClass: "form-control",
    attrs: {
      "type": "text",
      "id": "name",
      "placeholder": "Enter your name"
    }
  })])])]), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-sm-12"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": "ccnumber"
    }
  }, [_vm._v("Credit Card Number")]), _vm._v(" "), _c('input', {
    staticClass: "form-control",
    attrs: {
      "type": "text",
      "id": "ccnumber",
      "placeholder": "0000 0000 0000 0000"
    }
  })])])]), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "form-group col-sm-4"
  }, [_c('label', {
    attrs: {
      "for": "ccmonth"
    }
  }, [_vm._v("Month")]), _vm._v(" "), _c('select', {
    staticClass: "form-control",
    attrs: {
      "id": "ccmonth"
    }
  }, [_c('option', [_vm._v("1")]), _vm._v(" "), _c('option', [_vm._v("2")]), _vm._v(" "), _c('option', [_vm._v("3")]), _vm._v(" "), _c('option', [_vm._v("4")]), _vm._v(" "), _c('option', [_vm._v("5")]), _vm._v(" "), _c('option', [_vm._v("6")]), _vm._v(" "), _c('option', [_vm._v("7")]), _vm._v(" "), _c('option', [_vm._v("8")]), _vm._v(" "), _c('option', [_vm._v("9")]), _vm._v(" "), _c('option', [_vm._v("10")]), _vm._v(" "), _c('option', [_vm._v("11")]), _vm._v(" "), _c('option', [_vm._v("12")])])]), _vm._v(" "), _c('div', {
    staticClass: "form-group col-sm-4"
  }, [_c('label', {
    attrs: {
      "for": "ccyear"
    }
  }, [_vm._v("Year")]), _vm._v(" "), _c('select', {
    staticClass: "form-control",
    attrs: {
      "id": "ccyear"
    }
  }, [_c('option', [_vm._v("2014")]), _vm._v(" "), _c('option', [_vm._v("2015")]), _vm._v(" "), _c('option', [_vm._v("2016")]), _vm._v(" "), _c('option', [_vm._v("2017")]), _vm._v(" "), _c('option', [_vm._v("2018")]), _vm._v(" "), _c('option', [_vm._v("2019")]), _vm._v(" "), _c('option', [_vm._v("2020")]), _vm._v(" "), _c('option', [_vm._v("2021")]), _vm._v(" "), _c('option', [_vm._v("2022")]), _vm._v(" "), _c('option', [_vm._v("2023")]), _vm._v(" "), _c('option', [_vm._v("2024")]), _vm._v(" "), _c('option', [_vm._v("2025")])])]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-4"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": "cvv"
    }
  }, [_vm._v("CVV/CVC")]), _vm._v(" "), _c('input', {
    staticClass: "form-control",
    attrs: {
      "type": "text",
      "id": "cvv",
      "placeholder": "123"
    }
  })])])])])])]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-6"
  }, [_c('div', {
    staticClass: "card"
  }, [_c('div', {
    staticClass: "card-header"
  }, [_c('strong', [_vm._v("Company")]), _vm._v(" "), _c('small', [_vm._v("Form")])]), _vm._v(" "), _c('div', {
    staticClass: "card-block"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": "company"
    }
  }, [_vm._v("Company")]), _vm._v(" "), _c('input', {
    staticClass: "form-control",
    attrs: {
      "type": "text",
      "id": "company",
      "placeholder": "Enter your company name"
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": "vat"
    }
  }, [_vm._v("VAT")]), _vm._v(" "), _c('input', {
    staticClass: "form-control",
    attrs: {
      "type": "text",
      "id": "vat",
      "placeholder": "PL1234567890"
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": "street"
    }
  }, [_vm._v("Street")]), _vm._v(" "), _c('input', {
    staticClass: "form-control",
    attrs: {
      "type": "text",
      "id": "street",
      "placeholder": "Enter street name"
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "form-group col-sm-8"
  }, [_c('label', {
    attrs: {
      "for": "city"
    }
  }, [_vm._v("City")]), _vm._v(" "), _c('input', {
    staticClass: "form-control",
    attrs: {
      "type": "text",
      "id": "city",
      "placeholder": "Enter your city"
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "form-group col-sm-4"
  }, [_c('label', {
    attrs: {
      "for": "postal-code"
    }
  }, [_vm._v("Postal Code")]), _vm._v(" "), _c('input', {
    staticClass: "form-control",
    attrs: {
      "type": "text",
      "id": "postal-code",
      "placeholder": "Postal Code"
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": "country"
    }
  }, [_vm._v("Country")]), _vm._v(" "), _c('input', {
    staticClass: "form-control",
    attrs: {
      "type": "text",
      "id": "country",
      "placeholder": "Country name"
    }
  })])])])])]), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-md-6"
  }, [_c('div', {
    staticClass: "card"
  }, [_c('div', {
    staticClass: "card-header"
  }, [_c('strong', [_vm._v("Basic Form")]), _vm._v(" Elements\n        ")]), _vm._v(" "), _c('div', {
    staticClass: "card-block"
  }, [_c('form', {
    staticClass: "form-horizontal ",
    attrs: {
      "action": "",
      "method": "post",
      "enctype": "multipart/form-data"
    }
  }, [_c('div', {
    staticClass: "form-group row"
  }, [_c('label', {
    staticClass: "col-md-3 form-control-label"
  }, [_vm._v("Static")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-9"
  }, [_c('p', {
    staticClass: "form-control-static"
  }, [_vm._v("Username")])])]), _vm._v(" "), _c('div', {
    staticClass: "form-group row"
  }, [_c('label', {
    staticClass: "col-md-3 form-control-label",
    attrs: {
      "for": "text-input"
    }
  }, [_vm._v("Text Input")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-9"
  }, [_c('input', {
    staticClass: "form-control",
    attrs: {
      "type": "text",
      "id": "text-input",
      "name": "text-input",
      "placeholder": "Text"
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "help-block"
  }, [_vm._v("This is a help text")])])]), _vm._v(" "), _c('div', {
    staticClass: "form-group row"
  }, [_c('label', {
    staticClass: "col-md-3 form-control-label",
    attrs: {
      "for": "email-input"
    }
  }, [_vm._v("Email Input")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-9"
  }, [_c('input', {
    staticClass: "form-control",
    attrs: {
      "type": "email",
      "id": "email-input",
      "name": "email-input",
      "placeholder": "Enter Email"
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "help-block"
  }, [_vm._v("Please enter your email")])])]), _vm._v(" "), _c('div', {
    staticClass: "form-group row"
  }, [_c('label', {
    staticClass: "col-md-3 form-control-label",
    attrs: {
      "for": "password-input"
    }
  }, [_vm._v("Password")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-9"
  }, [_c('input', {
    staticClass: "form-control",
    attrs: {
      "type": "password",
      "id": "password-input",
      "name": "password-input",
      "placeholder": "Password"
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "help-block"
  }, [_vm._v("Please enter a complex password")])])]), _vm._v(" "), _c('div', {
    staticClass: "form-group row"
  }, [_c('label', {
    staticClass: "col-md-3 form-control-label",
    attrs: {
      "for": "disabled-input"
    }
  }, [_vm._v("Disabled Input")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-9"
  }, [_c('input', {
    staticClass: "form-control",
    attrs: {
      "type": "text",
      "id": "disabled-input",
      "name": "disabled-input",
      "placeholder": "Disabled",
      "disabled": ""
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "form-group row"
  }, [_c('label', {
    staticClass: "col-md-3 form-control-label",
    attrs: {
      "for": "textarea-input"
    }
  }, [_vm._v("Textarea")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-9"
  }, [_c('textarea', {
    staticClass: "form-control",
    attrs: {
      "id": "textarea-input",
      "name": "textarea-input",
      "rows": "9",
      "placeholder": "Content.."
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "form-group row"
  }, [_c('label', {
    staticClass: "col-md-3 form-control-label",
    attrs: {
      "for": "select"
    }
  }, [_vm._v("Select")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-9"
  }, [_c('select', {
    staticClass: "form-control",
    attrs: {
      "id": "select",
      "name": "select"
    }
  }, [_c('option', {
    attrs: {
      "value": "0"
    }
  }, [_vm._v("Please select")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "1"
    }
  }, [_vm._v("Option #1")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "2"
    }
  }, [_vm._v("Option #2")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "3"
    }
  }, [_vm._v("Option #3")])])])]), _vm._v(" "), _c('div', {
    staticClass: "form-group row"
  }, [_c('label', {
    staticClass: "col-md-3 form-control-label",
    attrs: {
      "for": "select"
    }
  }, [_vm._v("Select Large")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-9"
  }, [_c('select', {
    staticClass: "form-control form-control-lg",
    attrs: {
      "id": "select",
      "name": "select"
    }
  }, [_c('option', {
    attrs: {
      "value": "0"
    }
  }, [_vm._v("Please select")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "1"
    }
  }, [_vm._v("Option #1")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "2"
    }
  }, [_vm._v("Option #2")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "3"
    }
  }, [_vm._v("Option #3")])])])]), _vm._v(" "), _c('div', {
    staticClass: "form-group row"
  }, [_c('label', {
    staticClass: "col-md-3 form-control-label",
    attrs: {
      "for": "select"
    }
  }, [_vm._v("Select Small")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-9"
  }, [_c('select', {
    staticClass: "form-control form-control-sm",
    attrs: {
      "id": "select",
      "name": "select"
    }
  }, [_c('option', {
    attrs: {
      "value": "0"
    }
  }, [_vm._v("Please select")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "1"
    }
  }, [_vm._v("Option #1")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "2"
    }
  }, [_vm._v("Option #2")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "3"
    }
  }, [_vm._v("Option #3")])])])]), _vm._v(" "), _c('div', {
    staticClass: "form-group row"
  }, [_c('label', {
    staticClass: "col-md-3 form-control-label",
    attrs: {
      "for": "select"
    }
  }, [_vm._v("Disabled Select")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-9"
  }, [_c('select', {
    staticClass: "form-control",
    attrs: {
      "id": "disabledSelect",
      "disabled": ""
    }
  }, [_c('option', {
    attrs: {
      "value": "0"
    }
  }, [_vm._v("Please select")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "1"
    }
  }, [_vm._v("Option #1")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "2"
    }
  }, [_vm._v("Option #2")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "3"
    }
  }, [_vm._v("Option #3")])])])]), _vm._v(" "), _c('div', {
    staticClass: "form-group row"
  }, [_c('label', {
    staticClass: "col-md-3 form-control-label",
    attrs: {
      "for": "multiple-select"
    }
  }, [_vm._v("Multiple select")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-9"
  }, [_c('select', {
    staticClass: "form-control",
    attrs: {
      "id": "multiple-select",
      "name": "multiple-select",
      "size": "5",
      "multiple": ""
    }
  }, [_c('option', {
    attrs: {
      "value": "1"
    }
  }, [_vm._v("Option #1")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "2"
    }
  }, [_vm._v("Option #2")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "3"
    }
  }, [_vm._v("Option #3")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "4"
    }
  }, [_vm._v("Option #4")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "5"
    }
  }, [_vm._v("Option #5")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "6"
    }
  }, [_vm._v("Option #6")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "7"
    }
  }, [_vm._v("Option #7")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "8"
    }
  }, [_vm._v("Option #8")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "9"
    }
  }, [_vm._v("Option #9")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "10"
    }
  }, [_vm._v("Option #10")])])])]), _vm._v(" "), _c('div', {
    staticClass: "form-group row"
  }, [_c('label', {
    staticClass: "col-md-3 form-control-label"
  }, [_vm._v("Radios")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-9"
  }, [_c('div', {
    staticClass: "radio"
  }, [_c('label', {
    attrs: {
      "for": "radio1"
    }
  }, [_c('input', {
    attrs: {
      "type": "radio",
      "id": "radio1",
      "name": "radios",
      "value": "option1"
    }
  }), _vm._v(" Option 1\n                  ")])]), _vm._v(" "), _c('div', {
    staticClass: "radio"
  }, [_c('label', {
    attrs: {
      "for": "radio2"
    }
  }, [_c('input', {
    attrs: {
      "type": "radio",
      "id": "radio2",
      "name": "radios",
      "value": "option2"
    }
  }), _vm._v(" Option 2\n                  ")])]), _vm._v(" "), _c('div', {
    staticClass: "radio"
  }, [_c('label', {
    attrs: {
      "for": "radio3"
    }
  }, [_c('input', {
    attrs: {
      "type": "radio",
      "id": "radio3",
      "name": "radios",
      "value": "option3"
    }
  }), _vm._v(" Option 3\n                  ")])])])]), _vm._v(" "), _c('div', {
    staticClass: "form-group row"
  }, [_c('label', {
    staticClass: "col-md-3 form-control-label"
  }, [_vm._v("Inline Radios")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-9"
  }, [_c('label', {
    staticClass: "radio-inline",
    attrs: {
      "for": "inline-radio1"
    }
  }, [_c('input', {
    attrs: {
      "type": "radio",
      "id": "inline-radio1",
      "name": "inline-radios",
      "value": "option1"
    }
  }), _vm._v(" One\n                ")]), _vm._v(" "), _c('label', {
    staticClass: "radio-inline",
    attrs: {
      "for": "inline-radio2"
    }
  }, [_c('input', {
    attrs: {
      "type": "radio",
      "id": "inline-radio2",
      "name": "inline-radios",
      "value": "option2"
    }
  }), _vm._v(" Two\n                ")]), _vm._v(" "), _c('label', {
    staticClass: "radio-inline",
    attrs: {
      "for": "inline-radio3"
    }
  }, [_c('input', {
    attrs: {
      "type": "radio",
      "id": "inline-radio3",
      "name": "inline-radios",
      "value": "option3"
    }
  }), _vm._v(" Three\n                ")])])]), _vm._v(" "), _c('div', {
    staticClass: "form-group row"
  }, [_c('label', {
    staticClass: "col-md-3 form-control-label"
  }, [_vm._v("Checkboxes")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-9"
  }, [_c('div', {
    staticClass: "checkbox"
  }, [_c('label', {
    attrs: {
      "for": "checkbox1"
    }
  }, [_c('input', {
    attrs: {
      "type": "checkbox",
      "id": "checkbox1",
      "name": "checkbox1",
      "value": "option1"
    }
  }), _vm._v(" Option 1\n                  ")])]), _vm._v(" "), _c('div', {
    staticClass: "checkbox"
  }, [_c('label', {
    attrs: {
      "for": "checkbox2"
    }
  }, [_c('input', {
    attrs: {
      "type": "checkbox",
      "id": "checkbox2",
      "name": "checkbox2",
      "value": "option2"
    }
  }), _vm._v(" Option 2\n                  ")])]), _vm._v(" "), _c('div', {
    staticClass: "checkbox"
  }, [_c('label', {
    attrs: {
      "for": "checkbox3"
    }
  }, [_c('input', {
    attrs: {
      "type": "checkbox",
      "id": "checkbox3",
      "name": "checkbox3",
      "value": "option3"
    }
  }), _vm._v(" Option 3\n                  ")])])])]), _vm._v(" "), _c('div', {
    staticClass: "form-group row"
  }, [_c('label', {
    staticClass: "col-md-3 form-control-label"
  }, [_vm._v("Inline Checkboxes")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-9"
  }, [_c('label', {
    staticClass: "checkbox-inline",
    attrs: {
      "for": "inline-checkbox1"
    }
  }, [_c('input', {
    attrs: {
      "type": "checkbox",
      "id": "inline-checkbox1",
      "name": "inline-checkbox1",
      "value": "option1"
    }
  }), _vm._v("One\n                ")]), _vm._v(" "), _c('label', {
    staticClass: "checkbox-inline",
    attrs: {
      "for": "inline-checkbox2"
    }
  }, [_c('input', {
    attrs: {
      "type": "checkbox",
      "id": "inline-checkbox2",
      "name": "inline-checkbox2",
      "value": "option2"
    }
  }), _vm._v("Two\n                ")]), _vm._v(" "), _c('label', {
    staticClass: "checkbox-inline",
    attrs: {
      "for": "inline-checkbox3"
    }
  }, [_c('input', {
    attrs: {
      "type": "checkbox",
      "id": "inline-checkbox3",
      "name": "inline-checkbox3",
      "value": "option3"
    }
  }), _vm._v("Three\n                ")])])]), _vm._v(" "), _c('div', {
    staticClass: "form-group row"
  }, [_c('label', {
    staticClass: "col-md-3 form-control-label",
    attrs: {
      "for": "file-input"
    }
  }, [_vm._v("File input")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-9"
  }, [_c('input', {
    attrs: {
      "type": "file",
      "id": "file-input",
      "name": "file-input"
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "form-group row"
  }, [_c('label', {
    staticClass: "col-md-3 form-control-label",
    attrs: {
      "for": "file-multiple-input"
    }
  }, [_vm._v("Multiple File input")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-9"
  }, [_c('input', {
    attrs: {
      "type": "file",
      "id": "file-multiple-input",
      "name": "file-multiple-input",
      "multiple": ""
    }
  })])])])]), _vm._v(" "), _c('div', {
    staticClass: "card-footer"
  }, [_c('button', {
    staticClass: "btn btn-sm btn-primary",
    attrs: {
      "type": "submit"
    }
  }, [_c('i', {
    staticClass: "fa fa-dot-circle-o"
  }), _vm._v(" Submit")]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-sm btn-danger",
    attrs: {
      "type": "reset"
    }
  }, [_c('i', {
    staticClass: "fa fa-ban"
  }), _vm._v(" Reset")])])]), _vm._v(" "), _c('div', {
    staticClass: "card"
  }, [_c('div', {
    staticClass: "card-header"
  }, [_c('strong', [_vm._v("Inline")]), _vm._v(" Form\n        ")]), _vm._v(" "), _c('div', {
    staticClass: "card-block"
  }, [_c('form', {
    staticClass: "form-inline",
    attrs: {
      "action": "",
      "method": "post"
    }
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": "exampleInputName2"
    }
  }, [_vm._v("Name")]), _vm._v(" "), _c('input', {
    staticClass: "form-control",
    attrs: {
      "type": "text",
      "id": "exampleInputName2",
      "placeholder": "Jane Doe"
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": "exampleInputEmail2"
    }
  }, [_vm._v("Email")]), _vm._v(" "), _c('input', {
    staticClass: "form-control",
    attrs: {
      "type": "email",
      "id": "exampleInputEmail2",
      "placeholder": "jane.doe@example.com"
    }
  })])])]), _vm._v(" "), _c('div', {
    staticClass: "card-footer"
  }, [_c('button', {
    staticClass: "btn btn-sm btn-primary",
    attrs: {
      "type": "submit"
    }
  }, [_c('i', {
    staticClass: "fa fa-dot-circle-o"
  }), _vm._v(" Submit")]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-sm btn-danger",
    attrs: {
      "type": "reset"
    }
  }, [_c('i', {
    staticClass: "fa fa-ban"
  }), _vm._v(" Reset")])])])]), _vm._v(" "), _c('div', {
    staticClass: "col-md-6"
  }, [_c('div', {
    staticClass: "card"
  }, [_c('div', {
    staticClass: "card-header"
  }, [_c('strong', [_vm._v("Horizontal")]), _vm._v(" Form\n        ")]), _vm._v(" "), _c('div', {
    staticClass: "card-block"
  }, [_c('form', {
    staticClass: "form-horizontal ",
    attrs: {
      "action": "",
      "method": "post"
    }
  }, [_c('div', {
    staticClass: "form-group row"
  }, [_c('label', {
    staticClass: "col-md-3 form-control-label",
    attrs: {
      "for": "hf-email"
    }
  }, [_vm._v("Email")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-9"
  }, [_c('input', {
    staticClass: "form-control",
    attrs: {
      "type": "email",
      "id": "hf-email",
      "name": "hf-email",
      "placeholder": "Enter Email.."
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "help-block"
  }, [_vm._v("Please enter your email")])])]), _vm._v(" "), _c('div', {
    staticClass: "form-group row"
  }, [_c('label', {
    staticClass: "col-md-3 form-control-label",
    attrs: {
      "for": "hf-password"
    }
  }, [_vm._v("Password")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-9"
  }, [_c('input', {
    staticClass: "form-control",
    attrs: {
      "type": "password",
      "id": "hf-password",
      "name": "hf-password",
      "placeholder": "Enter Password.."
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "help-block"
  }, [_vm._v("Please enter your password")])])])])]), _vm._v(" "), _c('div', {
    staticClass: "card-footer"
  }, [_c('button', {
    staticClass: "btn btn-sm btn-primary",
    attrs: {
      "type": "submit"
    }
  }, [_c('i', {
    staticClass: "fa fa-dot-circle-o"
  }), _vm._v(" Submit")]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-sm btn-danger",
    attrs: {
      "type": "reset"
    }
  }, [_c('i', {
    staticClass: "fa fa-ban"
  }), _vm._v(" Reset")])])]), _vm._v(" "), _c('div', {
    staticClass: "card"
  }, [_c('div', {
    staticClass: "card-header"
  }, [_c('strong', [_vm._v("Normal")]), _vm._v(" Form\n        ")]), _vm._v(" "), _c('div', {
    staticClass: "card-block"
  }, [_c('form', {
    attrs: {
      "action": "",
      "method": "post"
    }
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": "nf-email"
    }
  }, [_vm._v("Email")]), _vm._v(" "), _c('input', {
    staticClass: "form-control",
    attrs: {
      "type": "email",
      "id": "nf-email",
      "name": "nf-email",
      "placeholder": "Enter Email.."
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "help-block"
  }, [_vm._v("Please enter your email")])]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": "nf-password"
    }
  }, [_vm._v("Password")]), _vm._v(" "), _c('input', {
    staticClass: "form-control",
    attrs: {
      "type": "password",
      "id": "nf-password",
      "name": "nf-password",
      "placeholder": "Enter Password.."
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "help-block"
  }, [_vm._v("Please enter your password")])])])]), _vm._v(" "), _c('div', {
    staticClass: "card-footer"
  }, [_c('button', {
    staticClass: "btn btn-sm btn-primary",
    attrs: {
      "type": "submit"
    }
  }, [_c('i', {
    staticClass: "fa fa-dot-circle-o"
  }), _vm._v(" Submit")]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-sm btn-danger",
    attrs: {
      "type": "reset"
    }
  }, [_c('i', {
    staticClass: "fa fa-ban"
  }), _vm._v(" Reset")])])]), _vm._v(" "), _c('div', {
    staticClass: "card"
  }, [_c('div', {
    staticClass: "card-header"
  }, [_vm._v("\n          Input "), _c('strong', [_vm._v("Grid")])]), _vm._v(" "), _c('div', {
    staticClass: "card-block"
  }, [_c('form', {
    staticClass: "form-horizontal ",
    attrs: {
      "action": "",
      "method": "post"
    }
  }, [_c('div', {
    staticClass: "form-group row"
  }, [_c('div', {
    staticClass: "col-sm-3"
  }, [_c('input', {
    staticClass: "form-control",
    attrs: {
      "type": "text",
      "placeholder": ".col-sm-3"
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "form-group row"
  }, [_c('div', {
    staticClass: "col-sm-4"
  }, [_c('input', {
    staticClass: "form-control",
    attrs: {
      "type": "text",
      "placeholder": ".col-sm-4"
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "form-group row"
  }, [_c('div', {
    staticClass: "col-sm-5"
  }, [_c('input', {
    staticClass: "form-control",
    attrs: {
      "type": "text",
      "placeholder": ".col-sm-5"
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "form-group row"
  }, [_c('div', {
    staticClass: "col-sm-6"
  }, [_c('input', {
    staticClass: "form-control",
    attrs: {
      "type": "text",
      "placeholder": ".col-sm-6"
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "form-group row"
  }, [_c('div', {
    staticClass: "col-sm-7"
  }, [_c('input', {
    staticClass: "form-control",
    attrs: {
      "type": "text",
      "placeholder": ".col-sm-7"
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "form-group row"
  }, [_c('div', {
    staticClass: "col-sm-8"
  }, [_c('input', {
    staticClass: "form-control",
    attrs: {
      "type": "text",
      "placeholder": ".col-sm-8"
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "form-group row"
  }, [_c('div', {
    staticClass: "col-sm-9"
  }, [_c('input', {
    staticClass: "form-control",
    attrs: {
      "type": "text",
      "placeholder": ".col-sm-9"
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "form-group row"
  }, [_c('div', {
    staticClass: "col-sm-10"
  }, [_c('input', {
    staticClass: "form-control",
    attrs: {
      "type": "text",
      "placeholder": ".col-sm-10"
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "form-group row"
  }, [_c('div', {
    staticClass: "col-sm-11"
  }, [_c('input', {
    staticClass: "form-control",
    attrs: {
      "type": "text",
      "placeholder": ".col-sm-11"
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "form-group row"
  }, [_c('div', {
    staticClass: "col-sm-12"
  }, [_c('input', {
    staticClass: "form-control",
    attrs: {
      "type": "text",
      "placeholder": ".col-sm-12"
    }
  })])])])]), _vm._v(" "), _c('div', {
    staticClass: "card-footer"
  }, [_c('button', {
    staticClass: "btn btn-sm btn-primary",
    attrs: {
      "type": "submit"
    }
  }, [_c('i', {
    staticClass: "fa fa-user"
  }), _vm._v(" Login")]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-sm btn-danger",
    attrs: {
      "type": "reset"
    }
  }, [_c('i', {
    staticClass: "fa fa-ban"
  }), _vm._v(" Reset")])])]), _vm._v(" "), _c('div', {
    staticClass: "card"
  }, [_c('div', {
    staticClass: "card-header"
  }, [_vm._v("\n          Input "), _c('strong', [_vm._v("Sizes")])]), _vm._v(" "), _c('div', {
    staticClass: "card-block"
  }, [_c('form', {
    staticClass: "form-horizontal ",
    attrs: {
      "action": "",
      "method": "post"
    }
  }, [_c('div', {
    staticClass: "form-group row"
  }, [_c('label', {
    staticClass: "col-sm-3 form-control-label",
    attrs: {
      "for": "input-small"
    }
  }, [_vm._v("Small Input")]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-6"
  }, [_c('input', {
    staticClass: "form-control form-control-sm",
    attrs: {
      "type": "text",
      "id": "input-small",
      "name": "input-small",
      "placeholder": ".form-control-sm"
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "form-group row"
  }, [_c('label', {
    staticClass: "col-sm-3 form-control-label",
    attrs: {
      "for": "input-normal"
    }
  }, [_vm._v("Normal Input")]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-6"
  }, [_c('input', {
    staticClass: "form-control",
    attrs: {
      "type": "text",
      "id": "input-normal",
      "name": "input-normal",
      "placeholder": "Normal"
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "form-group row"
  }, [_c('label', {
    staticClass: "col-sm-3 form-control-label",
    attrs: {
      "for": "input-large"
    }
  }, [_vm._v("Large Input")]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-6"
  }, [_c('input', {
    staticClass: "form-control form-control-lg",
    attrs: {
      "type": "text",
      "id": "input-large",
      "name": "input-large",
      "placeholder": ".form-control-lg"
    }
  })])])])]), _vm._v(" "), _c('div', {
    staticClass: "card-footer"
  }, [_c('button', {
    staticClass: "btn btn-sm btn-primary",
    attrs: {
      "type": "submit"
    }
  }, [_c('i', {
    staticClass: "fa fa-dot-circle-o"
  }), _vm._v(" Submit")]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-sm btn-danger",
    attrs: {
      "type": "reset"
    }
  }, [_c('i', {
    staticClass: "fa fa-ban"
  }), _vm._v(" Reset")])])])])]), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-sm-6"
  }, [_c('div', {
    staticClass: "card"
  }, [_c('div', {
    staticClass: "card-header"
  }, [_c('strong', [_vm._v("Validation states")]), _vm._v(" Form\n        ")]), _vm._v(" "), _c('div', {
    staticClass: "card-block"
  }, [_c('div', {
    staticClass: "form-group has-success"
  }, [_c('label', {
    staticClass: "form-form-control-label",
    attrs: {
      "for": "inputSuccess1"
    }
  }, [_vm._v("Input with success")]), _vm._v(" "), _c('input', {
    staticClass: "form-control",
    attrs: {
      "type": "text",
      "id": "inputSuccess1"
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "form-group has-warning"
  }, [_c('label', {
    staticClass: "form-form-control-label",
    attrs: {
      "for": "inputWarning1"
    }
  }, [_vm._v("Input with warning")]), _vm._v(" "), _c('input', {
    staticClass: "form-control",
    attrs: {
      "type": "text",
      "id": "inputWarning1"
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "form-group has-danger"
  }, [_c('label', {
    staticClass: "form-form-control-label",
    attrs: {
      "for": "inputError1"
    }
  }, [_vm._v("Input with error")]), _vm._v(" "), _c('input', {
    staticClass: "form-control",
    attrs: {
      "type": "text",
      "id": "inputError1"
    }
  })])])])]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-6"
  }, [_c('div', {
    staticClass: "card"
  }, [_c('div', {
    staticClass: "card-header"
  }, [_c('strong', [_vm._v("Validation states")]), _vm._v(" with optional icons\n        ")]), _vm._v(" "), _c('div', {
    staticClass: "card-block"
  }, [_c('div', {
    staticClass: "form-group has-success"
  }, [_c('label', {
    staticClass: "form-form-control-label",
    attrs: {
      "for": "inputSuccess2"
    }
  }, [_vm._v("Input with success")]), _vm._v(" "), _c('input', {
    staticClass: "form-control form-control-success",
    attrs: {
      "type": "text",
      "id": "inputSuccess2"
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "form-group has-warning"
  }, [_c('label', {
    staticClass: "form-form-control-label",
    attrs: {
      "for": "inputWarning2"
    }
  }, [_vm._v("Input with warning")]), _vm._v(" "), _c('input', {
    staticClass: "form-control form-control-warning",
    attrs: {
      "type": "text",
      "id": "inputWarning2"
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "form-group has-danger has-feedback"
  }, [_c('label', {
    staticClass: "form-form-control-label",
    attrs: {
      "for": "inputError2"
    }
  }, [_vm._v("Input with error")]), _vm._v(" "), _c('input', {
    staticClass: "form-control form-control-danger",
    attrs: {
      "type": "text",
      "id": "inputError2"
    }
  })])])])])]), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-sm-4"
  }, [_c('div', {
    staticClass: "card"
  }, [_c('div', {
    staticClass: "card-header"
  }, [_c('strong', [_vm._v("Icon/Text")]), _vm._v(" Groups\n        ")]), _vm._v(" "), _c('div', {
    staticClass: "card-block"
  }, [_c('form', {
    staticClass: "form-horizontal ",
    attrs: {
      "action": "",
      "method": "post"
    }
  }, [_c('div', {
    staticClass: "form-group row"
  }, [_c('div', {
    staticClass: "col-md-12"
  }, [_c('div', {
    staticClass: "input-group"
  }, [_c('span', {
    staticClass: "input-group-addon"
  }, [_c('i', {
    staticClass: "fa fa-user"
  })]), _vm._v(" "), _c('input', {
    staticClass: "form-control",
    attrs: {
      "type": "text",
      "id": "input1-group1",
      "name": "input1-group1",
      "placeholder": "Username"
    }
  })])])]), _vm._v(" "), _c('div', {
    staticClass: "form-group row"
  }, [_c('div', {
    staticClass: "col-md-12"
  }, [_c('div', {
    staticClass: "input-group"
  }, [_c('input', {
    staticClass: "form-control",
    attrs: {
      "type": "email",
      "id": "input2-group1",
      "name": "input2-group1",
      "placeholder": "Email"
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "input-group-addon"
  }, [_c('i', {
    staticClass: "fa fa-envelope-o"
  })])])])]), _vm._v(" "), _c('div', {
    staticClass: "form-group row"
  }, [_c('div', {
    staticClass: "col-md-12"
  }, [_c('div', {
    staticClass: "input-group"
  }, [_c('span', {
    staticClass: "input-group-addon"
  }, [_c('i', {
    staticClass: "fa fa-euro"
  })]), _vm._v(" "), _c('input', {
    staticClass: "form-control",
    attrs: {
      "type": "text",
      "id": "input3-group1",
      "name": "input3-group1",
      "placeholder": ".."
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "input-group-addon"
  }, [_vm._v(".00")])])])])])]), _vm._v(" "), _c('div', {
    staticClass: "card-footer"
  }, [_c('button', {
    staticClass: "btn btn-sm btn-success",
    attrs: {
      "type": "submit"
    }
  }, [_c('i', {
    staticClass: "fa fa-dot-circle-o"
  }), _vm._v(" Submit")]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-sm btn-danger",
    attrs: {
      "type": "reset"
    }
  }, [_c('i', {
    staticClass: "fa fa-ban"
  }), _vm._v(" Reset")])])])]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-4"
  }, [_c('div', {
    staticClass: "card"
  }, [_c('div', {
    staticClass: "card-header"
  }, [_c('strong', [_vm._v("Buttons")]), _vm._v(" Groups\n        ")]), _vm._v(" "), _c('div', {
    staticClass: "card-block"
  }, [_c('form', {
    staticClass: "form-horizontal ",
    attrs: {
      "action": "",
      "method": "post"
    }
  }, [_c('div', {
    staticClass: "form-group row"
  }, [_c('div', {
    staticClass: "col-md-12"
  }, [_c('div', {
    staticClass: "input-group"
  }, [_c('span', {
    staticClass: "input-group-btn"
  }, [_c('button', {
    staticClass: "btn btn-primary",
    attrs: {
      "type": "button"
    }
  }, [_c('i', {
    staticClass: "fa fa-search"
  }), _vm._v(" Search")])]), _vm._v(" "), _c('input', {
    staticClass: "form-control",
    attrs: {
      "type": "text",
      "id": "input1-group2",
      "name": "input1-group2",
      "placeholder": "Username"
    }
  })])])]), _vm._v(" "), _c('div', {
    staticClass: "form-group row"
  }, [_c('div', {
    staticClass: "col-md-12"
  }, [_c('div', {
    staticClass: "input-group"
  }, [_c('input', {
    staticClass: "form-control",
    attrs: {
      "type": "email",
      "id": "input2-group2",
      "name": "input2-group2",
      "placeholder": "Email"
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "input-group-btn"
  }, [_c('button', {
    staticClass: "btn btn-primary",
    attrs: {
      "type": "button"
    }
  }, [_vm._v("Submit")])])])])]), _vm._v(" "), _c('div', {
    staticClass: "form-group row"
  }, [_c('div', {
    staticClass: "col-md-12"
  }, [_c('div', {
    staticClass: "input-group"
  }, [_c('span', {
    staticClass: "input-group-btn"
  }, [_c('button', {
    staticClass: "btn btn-primary",
    attrs: {
      "type": "button"
    }
  }, [_c('i', {
    staticClass: "fa fa-facebook"
  })])]), _vm._v(" "), _c('input', {
    staticClass: "form-control",
    attrs: {
      "type": "text",
      "id": "input3-group2",
      "name": "input3-group2",
      "placeholder": "Search"
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "input-group-btn"
  }, [_c('button', {
    staticClass: "btn btn-primary",
    attrs: {
      "type": "button"
    }
  }, [_c('i', {
    staticClass: "fa fa-twitter"
  })])])])])])])]), _vm._v(" "), _c('div', {
    staticClass: "card-footer"
  }, [_c('button', {
    staticClass: "btn btn-sm btn-success",
    attrs: {
      "type": "submit"
    }
  }, [_c('i', {
    staticClass: "fa fa-dot-circle-o"
  }), _vm._v(" Submit")]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-sm btn-danger",
    attrs: {
      "type": "reset"
    }
  }, [_c('i', {
    staticClass: "fa fa-ban"
  }), _vm._v(" Reset")])])])]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-4"
  }, [_c('div', {
    staticClass: "card"
  }, [_c('div', {
    staticClass: "card-header"
  }, [_c('strong', [_vm._v("Dropdowns")]), _vm._v(" Groups\n        ")]), _vm._v(" "), _c('div', {
    staticClass: "card-block"
  }, [_c('form', {
    staticClass: "form-horizontal ",
    attrs: {
      "action": "",
      "method": "post"
    }
  }, [_c('div', {
    staticClass: "form-group row"
  }, [_c('div', {
    staticClass: "col-md-12"
  }, [_c('div', {
    staticClass: "input-group"
  }, [_c('div', {
    staticClass: "input-group-btn"
  }, [_c('button', {
    staticClass: "btn btn-primary dropdown-toggle",
    attrs: {
      "type": "button",
      "data-toggle": "dropdown"
    }
  }, [_vm._v("Action "), _c('span', {
    staticClass: "caret"
  })]), _vm._v(" "), _c('div', {
    staticClass: "dropdown-menu"
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
  }, [_vm._v("Something else here")]), _vm._v(" "), _c('div', {
    staticClass: "dropdown-divider",
    attrs: {
      "role": "separator"
    }
  }), _vm._v(" "), _c('a', {
    staticClass: "dropdown-item",
    attrs: {
      "href": "#"
    }
  }, [_vm._v("Separated link")])])]), _vm._v(" "), _c('input', {
    staticClass: "form-control",
    attrs: {
      "type": "text",
      "id": "input1-group3",
      "name": "input1-group3",
      "placeholder": "Username"
    }
  })])])]), _vm._v(" "), _c('div', {
    staticClass: "form-group row"
  }, [_c('div', {
    staticClass: "col-md-12"
  }, [_c('div', {
    staticClass: "input-group"
  }, [_c('input', {
    staticClass: "form-control",
    attrs: {
      "type": "email",
      "id": "input2-group3",
      "name": "input2-group3",
      "placeholder": "Email"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "input-group-btn"
  }, [_c('button', {
    staticClass: "btn btn-primary dropdown-toggle",
    attrs: {
      "type": "button",
      "data-toggle": "dropdown"
    }
  }, [_vm._v("Action "), _c('span', {
    staticClass: "caret"
  })]), _vm._v(" "), _c('div', {
    staticClass: "dropdown-menu dropdown-menu-right"
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
  }, [_vm._v("Something else here")]), _vm._v(" "), _c('div', {
    staticClass: "dropdown-divider",
    attrs: {
      "role": "separator"
    }
  }), _vm._v(" "), _c('a', {
    staticClass: "dropdown-item",
    attrs: {
      "href": "#"
    }
  }, [_vm._v("Separated link")])])])])])]), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-md-12"
  }, [_c('div', {
    staticClass: "input-group"
  }, [_c('div', {
    staticClass: "input-group-btn"
  }, [_c('button', {
    staticClass: "btn btn-primary",
    attrs: {
      "type": "button"
    }
  }, [_vm._v("Action")]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-primary dropdown-toggle dropdown-toggle-split",
    attrs: {
      "type": "button",
      "data-toggle": "dropdown"
    }
  }, [_c('span', {
    staticClass: "caret"
  })]), _vm._v(" "), _c('div', {
    staticClass: "dropdown-menu"
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
  }, [_vm._v("Something else here")]), _vm._v(" "), _c('div', {
    staticClass: "dropdown-divider",
    attrs: {
      "role": "separator"
    }
  }), _vm._v(" "), _c('a', {
    staticClass: "dropdown-item",
    attrs: {
      "href": "#"
    }
  }, [_vm._v("Separated link")])])]), _vm._v(" "), _c('input', {
    staticClass: "form-control",
    attrs: {
      "type": "text",
      "id": "input3-group3",
      "name": "input3-group3",
      "placeholder": ".."
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "input-group-btn"
  }, [_c('button', {
    staticClass: "btn btn-primary dropdown-toggle",
    attrs: {
      "type": "button",
      "data-toggle": "dropdown"
    }
  }, [_c('span', {
    staticClass: "caret"
  })]), _vm._v(" "), _c('div', {
    staticClass: "dropdown-menu dropdown-menu-right"
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
  }, [_vm._v("Something else here")]), _vm._v(" "), _c('div', {
    staticClass: "dropdown-divider",
    attrs: {
      "role": "separator"
    }
  }), _vm._v(" "), _c('a', {
    staticClass: "dropdown-item",
    attrs: {
      "href": "#"
    }
  }, [_vm._v("Separated link")])])])])])])])]), _vm._v(" "), _c('div', {
    staticClass: "card-footer"
  }, [_c('button', {
    staticClass: "btn btn-sm btn-success",
    attrs: {
      "type": "submit"
    }
  }, [_c('i', {
    staticClass: "fa fa-dot-circle-o"
  }), _vm._v(" Submit")]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-sm btn-danger",
    attrs: {
      "type": "reset"
    }
  }, [_c('i', {
    staticClass: "fa fa-ban"
  }), _vm._v(" Reset")])])])])]), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-md-6"
  }, [_c('div', {
    staticClass: "card"
  }, [_c('div', {
    staticClass: "card-header"
  }, [_vm._v("\n          Use the grid for big devices! "), _c('small', [_c('code', [_vm._v(".col-lg-*")]), _vm._v(" "), _c('code', [_vm._v(".col-md-*")]), _vm._v(" "), _c('code', [_vm._v(".col-sm-*")])])]), _vm._v(" "), _c('div', {
    staticClass: "card-block"
  }, [_c('form', {
    staticClass: "form-horizontal ",
    attrs: {
      "action": "",
      "method": "post"
    }
  }, [_c('div', {
    staticClass: "form-group row"
  }, [_c('div', {
    staticClass: "col-md-8"
  }, [_c('input', {
    staticClass: "form-control",
    attrs: {
      "type": "text",
      "placeholder": ".col-md-8"
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "col-md-4"
  }, [_c('input', {
    staticClass: "form-control",
    attrs: {
      "type": "text",
      "placeholder": ".col-md-4"
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "form-group row"
  }, [_c('div', {
    staticClass: "col-md-7"
  }, [_c('input', {
    staticClass: "form-control",
    attrs: {
      "type": "text",
      "placeholder": ".col-md-7"
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "col-md-5"
  }, [_c('input', {
    staticClass: "form-control",
    attrs: {
      "type": "text",
      "placeholder": ".col-md-5"
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "form-group row"
  }, [_c('div', {
    staticClass: "col-md-6"
  }, [_c('input', {
    staticClass: "form-control",
    attrs: {
      "type": "text",
      "placeholder": ".col-md-6"
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "col-md-6"
  }, [_c('input', {
    staticClass: "form-control",
    attrs: {
      "type": "text",
      "placeholder": ".col-md-6"
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "form-group row"
  }, [_c('div', {
    staticClass: "col-md-5"
  }, [_c('input', {
    staticClass: "form-control",
    attrs: {
      "type": "text",
      "placeholder": ".col-md-5"
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "col-md-7"
  }, [_c('input', {
    staticClass: "form-control",
    attrs: {
      "type": "text",
      "placeholder": ".col-md-7"
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "form-group row"
  }, [_c('div', {
    staticClass: "col-md-4"
  }, [_c('input', {
    staticClass: "form-control",
    attrs: {
      "type": "text",
      "placeholder": ".col-md-4"
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "col-md-8"
  }, [_c('input', {
    staticClass: "form-control",
    attrs: {
      "type": "text",
      "placeholder": ".col-md-8"
    }
  })])])])]), _vm._v(" "), _c('div', {
    staticClass: "card-footer"
  }, [_c('button', {
    staticClass: "btn btn-sm btn-primary",
    attrs: {
      "type": "submit"
    }
  }, [_vm._v("Action")]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-sm btn-danger",
    attrs: {
      "type": "button"
    }
  }, [_vm._v("Action")]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-sm btn-warning",
    attrs: {
      "type": "button"
    }
  }, [_vm._v("Action")]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-sm btn-info",
    attrs: {
      "type": "button"
    }
  }, [_vm._v("Action")]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-sm btn-success",
    attrs: {
      "type": "button"
    }
  }, [_vm._v("Action")])])])]), _vm._v(" "), _c('div', {
    staticClass: "col-md-6"
  }, [_c('div', {
    staticClass: "card"
  }, [_c('div', {
    staticClass: "card-header"
  }, [_vm._v("\n          Input Grid for small devices! "), _c('small', [_c('code', [_vm._v(".col-*")])])]), _vm._v(" "), _c('div', {
    staticClass: "card-block"
  }, [_c('form', {
    staticClass: "form-horizontal ",
    attrs: {
      "action": "",
      "method": "post"
    }
  }, [_c('div', {
    staticClass: "form-group row"
  }, [_c('div', {
    staticClass: "col-4"
  }, [_c('input', {
    staticClass: "form-control",
    attrs: {
      "type": "text",
      "placeholder": ".col-4"
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "col-8"
  }, [_c('input', {
    staticClass: "form-control",
    attrs: {
      "type": "text",
      "placeholder": ".col-8"
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "form-group row"
  }, [_c('div', {
    staticClass: "col-5"
  }, [_c('input', {
    staticClass: "form-control",
    attrs: {
      "type": "text",
      "placeholder": ".col-5"
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "col-7"
  }, [_c('input', {
    staticClass: "form-control",
    attrs: {
      "type": "text",
      "placeholder": ".col-7"
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "form-group row"
  }, [_c('div', {
    staticClass: "col-6"
  }, [_c('input', {
    staticClass: "form-control",
    attrs: {
      "type": "text",
      "placeholder": ".col-6"
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "col-6"
  }, [_c('input', {
    staticClass: "form-control",
    attrs: {
      "type": "text",
      "placeholder": ".col-6"
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "form-group row"
  }, [_c('div', {
    staticClass: "col-7"
  }, [_c('input', {
    staticClass: "form-control",
    attrs: {
      "type": "text",
      "placeholder": ".col-5"
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "col-5"
  }, [_c('input', {
    staticClass: "form-control",
    attrs: {
      "type": "text",
      "placeholder": ".col-5"
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "form-group row"
  }, [_c('div', {
    staticClass: "col-8"
  }, [_c('input', {
    staticClass: "form-control",
    attrs: {
      "type": "text",
      "placeholder": ".col-8"
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "col-4"
  }, [_c('input', {
    staticClass: "form-control",
    attrs: {
      "type": "text",
      "placeholder": ".col-4"
    }
  })])])])]), _vm._v(" "), _c('div', {
    staticClass: "card-footer"
  }, [_c('button', {
    staticClass: "btn btn-sm btn-primary",
    attrs: {
      "type": "submit"
    }
  }, [_vm._v("Action")]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-sm btn-danger",
    attrs: {
      "type": "button"
    }
  }, [_vm._v("Action")]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-sm btn-warning",
    attrs: {
      "type": "button"
    }
  }, [_vm._v("Action")]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-sm btn-info",
    attrs: {
      "type": "button"
    }
  }, [_vm._v("Action")]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-sm btn-success",
    attrs: {
      "type": "button"
    }
  }, [_vm._v("Action")])])])])]), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-sm-4"
  }, [_c('div', {
    staticClass: "card"
  }, [_c('div', {
    staticClass: "card-header"
  }, [_vm._v("\n          Example Form\n        ")]), _vm._v(" "), _c('div', {
    staticClass: "card-block"
  }, [_c('form', {
    attrs: {
      "action": "",
      "method": "post"
    }
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('div', {
    staticClass: "input-group"
  }, [_c('span', {
    staticClass: "input-group-addon"
  }, [_vm._v("Username")]), _vm._v(" "), _c('input', {
    staticClass: "form-control",
    attrs: {
      "type": "text",
      "id": "username3",
      "name": "username3"
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "input-group-addon"
  }, [_c('i', {
    staticClass: "fa fa-user"
  })])])]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('div', {
    staticClass: "input-group"
  }, [_c('span', {
    staticClass: "input-group-addon"
  }, [_vm._v("Email")]), _vm._v(" "), _c('input', {
    staticClass: "form-control",
    attrs: {
      "type": "email",
      "id": "email3",
      "name": "email3"
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "input-group-addon"
  }, [_c('i', {
    staticClass: "fa fa-envelope"
  })])])]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('div', {
    staticClass: "input-group"
  }, [_c('span', {
    staticClass: "input-group-addon"
  }, [_vm._v("Password")]), _vm._v(" "), _c('input', {
    staticClass: "form-control",
    attrs: {
      "type": "password",
      "id": "password3",
      "name": "password3"
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "input-group-addon"
  }, [_c('i', {
    staticClass: "fa fa-asterisk"
  })])])]), _vm._v(" "), _c('div', {
    staticClass: "form-group form-actions"
  }, [_c('button', {
    staticClass: "btn btn-sm btn-primary",
    attrs: {
      "type": "submit"
    }
  }, [_vm._v("Submit")])])])])])]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-4"
  }, [_c('div', {
    staticClass: "card"
  }, [_c('div', {
    staticClass: "card-header"
  }, [_vm._v("\n          Example Form\n        ")]), _vm._v(" "), _c('div', {
    staticClass: "card-block"
  }, [_c('form', {
    attrs: {
      "action": "",
      "method": "post"
    }
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('div', {
    staticClass: "input-group"
  }, [_c('input', {
    staticClass: "form-control",
    attrs: {
      "type": "text",
      "id": "username2",
      "name": "username2",
      "placeholder": "Username"
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "input-group-addon"
  }, [_c('i', {
    staticClass: "fa fa-user"
  })])])]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('div', {
    staticClass: "input-group"
  }, [_c('input', {
    staticClass: "form-control",
    attrs: {
      "type": "email",
      "id": "email2",
      "name": "email2",
      "placeholder": "Email"
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "input-group-addon"
  }, [_c('i', {
    staticClass: "fa fa-envelope"
  })])])]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('div', {
    staticClass: "input-group"
  }, [_c('input', {
    staticClass: "form-control",
    attrs: {
      "type": "password",
      "id": "password2",
      "name": "password2",
      "placeholder": "Password"
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "input-group-addon"
  }, [_c('i', {
    staticClass: "fa fa-asterisk"
  })])])]), _vm._v(" "), _c('div', {
    staticClass: "form-group form-actions"
  }, [_c('button', {
    staticClass: "btn btn-sm btn-default",
    attrs: {
      "type": "submit"
    }
  }, [_vm._v("Submit")])])])])])]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-4"
  }, [_c('div', {
    staticClass: "card"
  }, [_c('div', {
    staticClass: "card-header"
  }, [_vm._v("\n          Example Form\n        ")]), _vm._v(" "), _c('div', {
    staticClass: "card-block"
  }, [_c('form', {
    attrs: {
      "action": "",
      "method": "post"
    }
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('div', {
    staticClass: "input-group"
  }, [_c('span', {
    staticClass: "input-group-addon"
  }, [_c('i', {
    staticClass: "fa fa-user"
  })]), _vm._v(" "), _c('input', {
    staticClass: "form-control",
    attrs: {
      "type": "text",
      "id": "username",
      "name": "username",
      "placeholder": "Username"
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('div', {
    staticClass: "input-group"
  }, [_c('span', {
    staticClass: "input-group-addon"
  }, [_c('i', {
    staticClass: "fa fa-envelope"
  })]), _vm._v(" "), _c('input', {
    staticClass: "form-control",
    attrs: {
      "type": "email",
      "id": "email",
      "name": "email",
      "placeholder": "Email"
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('div', {
    staticClass: "input-group"
  }, [_c('span', {
    staticClass: "input-group-addon"
  }, [_c('i', {
    staticClass: "fa fa-asterisk"
  })]), _vm._v(" "), _c('input', {
    staticClass: "form-control",
    attrs: {
      "type": "password",
      "id": "password",
      "name": "password",
      "placeholder": "Password"
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "form-group form-actions"
  }, [_c('button', {
    staticClass: "btn btn-sm btn-success",
    attrs: {
      "type": "submit"
    }
  }, [_vm._v("Submit")])])])])])])]), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-lg-12"
  }, [_c('div', {
    staticClass: "card"
  }, [_c('div', {
    staticClass: "card-header"
  }, [_c('i', {
    staticClass: "fa fa-edit"
  }), _vm._v("Form Elements\n          "), _c('div', {
    staticClass: "card-actions"
  }, [_c('a', {
    staticClass: "btn-setting",
    attrs: {
      "href": "#"
    }
  }, [_c('i', {
    staticClass: "icon-settings"
  })]), _vm._v(" "), _c('a', {
    staticClass: "btn-minimize",
    attrs: {
      "href": "#"
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
  }, [_c('form', {
    staticClass: "form-horizontal"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    staticClass: "form-control-label",
    attrs: {
      "for": "prependedInput"
    }
  }, [_vm._v("Prepended text")]), _vm._v(" "), _c('div', {
    staticClass: "controls"
  }, [_c('div', {
    staticClass: "input-prepend input-group"
  }, [_c('span', {
    staticClass: "input-group-addon"
  }, [_vm._v("@")]), _vm._v(" "), _c('input', {
    staticClass: "form-control",
    attrs: {
      "id": "prependedInput",
      "size": "16",
      "type": "text"
    }
  })]), _vm._v(" "), _c('p', {
    staticClass: "help-block"
  }, [_vm._v("Here's some help text")])])]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    staticClass: "form-control-label",
    attrs: {
      "for": "appendedInput"
    }
  }, [_vm._v("Appended text")]), _vm._v(" "), _c('div', {
    staticClass: "controls"
  }, [_c('div', {
    staticClass: "input-group"
  }, [_c('input', {
    staticClass: "form-control",
    attrs: {
      "id": "appendedInput",
      "size": "16",
      "type": "text"
    }
  }), _c('span', {
    staticClass: "input-group-addon"
  }, [_vm._v(".00")])]), _vm._v(" "), _c('span', {
    staticClass: "help-block"
  }, [_vm._v("Here's more help text")])])]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    staticClass: "form-control-label",
    attrs: {
      "for": "appendedPrependedInput"
    }
  }, [_vm._v("Append and prepend")]), _vm._v(" "), _c('div', {
    staticClass: "controls"
  }, [_c('div', {
    staticClass: "input-prepend input-group"
  }, [_c('span', {
    staticClass: "input-group-addon"
  }, [_vm._v("$")]), _vm._v(" "), _c('input', {
    staticClass: "form-control",
    attrs: {
      "id": "appendedPrependedInput",
      "size": "16",
      "type": "text"
    }
  }), _c('span', {
    staticClass: "input-group-addon"
  }, [_vm._v(".00")])])])]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    staticClass: "form-control-label",
    attrs: {
      "for": "appendedInputButton"
    }
  }, [_vm._v("Append with button")]), _vm._v(" "), _c('div', {
    staticClass: "controls"
  }, [_c('div', {
    staticClass: "input-group"
  }, [_c('input', {
    staticClass: "form-control",
    attrs: {
      "id": "appendedInputButton",
      "size": "16",
      "type": "text"
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "input-group-btn"
  }, [_c('button', {
    staticClass: "btn btn-default",
    attrs: {
      "type": "button"
    }
  }, [_vm._v("Go!")])])])])]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    staticClass: "form-control-label",
    attrs: {
      "for": "appendedInputButtons"
    }
  }, [_vm._v("Two-button append")]), _vm._v(" "), _c('div', {
    staticClass: "controls"
  }, [_c('div', {
    staticClass: "input-group"
  }, [_c('input', {
    staticClass: "form-control",
    attrs: {
      "id": "appendedInputButtons",
      "size": "16",
      "type": "text"
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "input-group-btn"
  }, [_c('button', {
    staticClass: "btn btn-default",
    attrs: {
      "type": "button"
    }
  }, [_vm._v("Search")]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-default",
    attrs: {
      "type": "button"
    }
  }, [_vm._v("Options")])])])])]), _vm._v(" "), _c('div', {
    staticClass: "form-actions"
  }, [_c('button', {
    staticClass: "btn btn-primary",
    attrs: {
      "type": "submit"
    }
  }, [_vm._v("Save changes")]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-default",
    attrs: {
      "type": "button"
    }
  }, [_vm._v("Cancel")])])])])])])])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-542b029c", module.exports)
  }
}

/***/ })

});