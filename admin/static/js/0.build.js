webpackJsonp([0],{

/***/ 51:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(62),
  /* template */
  __webpack_require__(80),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/home/ubuntu/workspace/content/plugins/Modals.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Modals.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6405e8f3", Component.options)
  } else {
    hotAPI.reload("data-v-6405e8f3", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 62:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue_strap_src_Modal__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue_strap_src_Modal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue_strap_src_Modal__);




/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'modals',
  components: {
    modal: __WEBPACK_IMPORTED_MODULE_0_vue_strap_src_Modal___default.a
  },
  data: function data() {
    return {
      myModal: false,
      largeModal: false,
      smallModal: false,
      primaryModal: false,
      successModal: false,
      warningModal: false,
      dangerModal: false,
      infoModal: false
    };
  }
});

/***/ }),

/***/ 68:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_utils_js__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_NodeList_js__ = __webpack_require__(69);





/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    okText: {
      type: String,
      default: 'Save changes'
    },
    cancelText: {
      type: String,
      default: 'Close'
    },
    title: {
      type: String,
      default: ''
    },
    show: {
      required: true,
      type: Boolean,
      coerce: __WEBPACK_IMPORTED_MODULE_0__utils_utils_js__["a" /* coerce */].boolean,
      twoWay: true
    },
    width: {
      default: null
    },
    callback: {
      type: Function,
      default: function _default() {}
    },
    effect: {
      type: String,
      default: null
    },
    backdrop: {
      type: Boolean,
      coerce: __WEBPACK_IMPORTED_MODULE_0__utils_utils_js__["a" /* coerce */].boolean,
      default: true
    },
    large: {
      type: Boolean,
      coerce: __WEBPACK_IMPORTED_MODULE_0__utils_utils_js__["a" /* coerce */].boolean,
      default: false
    },
    small: {
      type: Boolean,
      coerce: __WEBPACK_IMPORTED_MODULE_0__utils_utils_js__["a" /* coerce */].boolean,
      default: false
    }
  },
  computed: {
    optionalWidth: function optionalWidth() {
      if (this.width === null) {
        return null;
      } else if (Number.isInteger(this.width)) {
        return this.width + 'px';
      }
      return this.width;
    }
  },
  watch: {
    show: function show(val) {
      var _this = this;

      var el = this.$el;
      var body = document.body;
      var scrollBarWidth = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils_utils_js__["b" /* getScrollBarWidth */])();
      if (val) {
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils_NodeList_js__["a" /* default */])(el).find('.modal-content').focus();
        el.style.display = 'block';
        setTimeout(function () {
          return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils_NodeList_js__["a" /* default */])(el).addClass('in');
        }, 0);
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils_NodeList_js__["a" /* default */])(body).addClass('modal-open');
        if (scrollBarWidth !== 0) {
          body.style.paddingRight = scrollBarWidth + 'px';
        }
        if (this.backdrop) {
          __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils_NodeList_js__["a" /* default */])(el).on('click', function (e) {
            if (e.target === el) _this.show = false;
          });
        }
      } else {
        body.style.paddingRight = null;
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils_NodeList_js__["a" /* default */])(body).removeClass('modal-open');
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils_NodeList_js__["a" /* default */])(el).removeClass('in').on('transitionend', function () {
          __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils_NodeList_js__["a" /* default */])(el).off('click transitionend');
          el.style.display = 'none';
        });
      }
    }
  },
  methods: {
    close: function close() {
      this.show = false;
    }
  }
});

/***/ }),

/***/ 69:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ArrayProto = Array.prototype;
var nodeError = new Error('Passed arguments must be of Node');
var blurEvent = void 0;
var blurList = [];
var Events = [];

function isNode(val) {
  return val instanceof window.Node;
}
function isNodeList(val) {
  return val instanceof window.NodeList || val instanceof NodeList || val instanceof window.HTMLCollection || val instanceof Array;
}

function splitWords(val) {
  val = val.trim();return val.length ? val.replace(/\s+/, ' ').split(' ') : [];
}
function joinWords(val) {
  return val.length ? val.join(' ') : '';
}

var NodeList = function () {
  function NodeList(args) {
    _classCallCheck(this, NodeList);

    var nodes = args;
    if (args[0] === window) {
      nodes = [window];
    } else if (typeof args[0] === 'string') {
      nodes = (args[1] || document).querySelectorAll(args[0]);
      if (args[1]) {
        this.owner = args[1];
      }
    } else if (0 in args && !isNode(args[0]) && args[0] && 'length' in args[0]) {
      nodes = args[0];
      if (args[1]) {
        this.owner = args[1];
      }
    }
    if (nodes) {
      for (var i in nodes) {
        this[i] = nodes[i];
      }
      this.length = nodes.length;
    } else {
      this.length = 0;
    }
  }

  _createClass(NodeList, [{
    key: 'concat',
    value: function concat() {
      var nodes = ArrayProto.slice.call(this);
      function flatten(arr) {
        ArrayProto.forEach.call(arr, function (el) {
          if (isNode(el)) {
            if (!~nodes.indexOf(el)) nodes.push(el);
          } else if (isNodeList(el)) {
            flatten(el);
          }
        });
      }

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      ArrayProto.forEach.call(args, function (arg) {
        if (isNode(arg)) {
          if (!~nodes.indexOf(arg)) nodes.push(arg);
        } else if (isNodeList(arg)) {
          flatten(arg);
        } else {
          throw Error('Concat arguments must be of a Node, NodeList, HTMLCollection, or Array of (Node, NodeList, HTMLCollection, Array)');
        }
      });
      return NodeListJS(nodes, this);
    }
  }, {
    key: 'delete',
    value: function _delete() {
      var notRemoved = flatten(this).filter(function (el) {
        if (el.remove) {
          el.remove();
        } else if (el.parentNode) {
          el.parentNode.removeChild(el);
        }
        return document.body.contains(el);
      });
      if (notRemoved.length) console.warn('NodeList: Some nodes could not be deleted.');
      return notRemoved;
    }
  }, {
    key: 'each',
    value: function each() {
      for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      ArrayProto.forEach.apply(this, args);
      return this;
    }
  }, {
    key: 'filter',
    value: function filter() {
      for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        args[_key3] = arguments[_key3];
      }

      return NodeListJS(ArrayProto.filter.apply(this, args), this);
    }
  }, {
    key: 'find',
    value: function find(element) {
      var nodes = [];
      flatten(this).forEach(function (node) {
        ArrayProto.push.apply(nodes, node.querySelectorAll(element));
      });
      return flatten(nodes, this.owner);
    }
  }, {
    key: 'findChildren',
    value: function findChildren(element) {
      var _this = this;

      if (element) return this.find(element).filter(function (el) {
        return _this.includes(el.parentElement);
      });
      return flatten(this.map(function (el) {
        return el.children;
      }));
    }
  }, {
    key: 'forEach',
    value: function forEach() {
      for (var _len4 = arguments.length, args = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
        args[_key4] = arguments[_key4];
      }

      ArrayProto.forEach.apply(this, args);
      return this;
    }
  }, {
    key: 'includes',
    value: function includes(element, index) {
      return ~this.indexOf(element, index);
    }
  }, {
    key: 'map',
    value: function map() {
      for (var _len5 = arguments.length, args = Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
        args[_key5] = arguments[_key5];
      }

      var mapped = ArrayProto.map.apply(this, args);
      return mapped.some(function (el) {
        return isNode(el) || isNodeList(el);
      }) ? flatten(mapped, this) : mapped;
    }
  }, {
    key: 'parent',
    value: function parent() {
      return flatten(this.map(function (el) {
        return el.parentNode;
      }), this);
    }
  }, {
    key: 'pop',
    value: function pop(amount) {
      if (typeof amount !== 'number') {
        amount = 1;
      }
      var nodes = [];
      var pop = ArrayProto.pop.bind(this);
      while (amount--) {
        nodes.push(pop());
      }return NodeListJS(nodes, this);
    }
  }, {
    key: 'push',
    value: function push() {
      var _this2 = this;

      for (var _len6 = arguments.length, args = Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
        args[_key6] = arguments[_key6];
      }

      ArrayProto.forEach.call(args, function (arg) {
        if (!isNode(arg)) throw nodeError;
        if (!~_this2.indexOf(arg)) ArrayProto.push.call(_this2, arg);
      });
      return this;
    }
  }, {
    key: 'shift',
    value: function shift(amount) {
      if (typeof amount !== 'number') {
        amount = 1;
      }
      var nodes = [];
      while (amount--) {
        nodes.push(ArrayProto.shift.call(this));
      }return nodes.length == 1 ? nodes[0] : NodeListJS(nodes, this);
    }
  }, {
    key: 'slice',
    value: function slice() {
      for (var _len7 = arguments.length, args = Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
        args[_key7] = arguments[_key7];
      }

      return NodeListJS(ArrayProto.slice.apply(this, args), this);
    }
  }, {
    key: 'splice',
    value: function splice() {
      for (var _len8 = arguments.length, args = Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {
        args[_key8] = arguments[_key8];
      }

      for (var i = 2, l = args.length; i < l; i++) {
        if (!isNode(args[i])) throw nodeError;
      }
      ArrayProto.splice.apply(this, args);
      return this;
    }
  }, {
    key: 'unshift',
    value: function unshift() {
      var _this3 = this;

      var unshift = ArrayProto.unshift.bind(this);

      for (var _len9 = arguments.length, args = Array(_len9), _key9 = 0; _key9 < _len9; _key9++) {
        args[_key9] = arguments[_key9];
      }

      ArrayProto.forEach.call(args, function (arg) {
        if (!isNode(arg)) throw nodeError;
        if (!~_this3.indexOf(arg)) unshift(arg);
      });
      return this;
    }
  }, {
    key: 'addClass',
    value: function addClass(classes) {
      return this.toggleClass(classes, true);
    }
  }, {
    key: 'removeClass',
    value: function removeClass(classes) {
      return this.toggleClass(classes, false);
    }
  }, {
    key: 'toggleClass',
    value: function toggleClass(classes, value) {
      var method = value === undefined || value === null ? 'toggle' : value ? 'add' : 'remove';
      if (typeof classes === 'string') {
        classes = splitWords(classes);
      }
      this.each(function (el) {
        var list = splitWords(el.className);
        classes.forEach(function (c) {
          var hasClass = ~list.indexOf(c);
          if (!hasClass && method !== 'remove') list.push(c);
          if (hasClass && method !== 'add') {
            list = list.filter(function (el) {
              return el !== c;
            });
          }
        });
        list = joinWords(list);
        if (!list) el.removeAttribute('class');else el.className = list;
      });
      return this;
    }
  }, {
    key: 'get',
    value: function get(prop) {
      var arr = [];
      this.each(function (el) {
        if (el !== null) {
          el = el[prop];
        }
        arr.push(el);
      });
      return flatten(arr, this);
    }
  }, {
    key: 'set',
    value: function set(prop, value) {
      if (prop.constructor === Object) {
        this.each(function (el) {
          if (el) {
            for (var key in prop) {
              if (key in el) {
                el[key] = prop[key];
              }
            }
          }
        });
      } else {
        this.each(function (el) {
          if (prop in el) {
            el[prop] = value;
          }
        });
      }
      return this;
    }
  }, {
    key: 'call',
    value: function call() {
      for (var _len10 = arguments.length, args = Array(_len10), _key10 = 0; _key10 < _len10; _key10++) {
        args[_key10] = arguments[_key10];
      }

      var method = ArrayProto.shift.call(args);
      var arr = [];
      var returnThis = true;
      this.each(function (el) {
        if (el && el[method] instanceof Function) {
          el = el[method].apply(el, args);
          arr.push(el);
          if (returnThis && el !== undefined) {
            returnThis = false;
          }
        } else {
          arr.push(undefined);
        }
      });
      return returnThis ? this : flatten(arr, this);
    }
  }, {
    key: 'item',
    value: function item(index) {
      return NodeListJS([this[index]], this);
    }
  }, {
    key: 'on',
    value: function on(events, selector, callback) {
      if (typeof events === 'string') {
        events = splitWords(events);
      }
      if (!this || !this.length) return this;
      if (callback === undefined) {
        callback = selector;
        selector = null;
      }
      if (!callback) return this;
      var fn = callback;
      callback = selector ? function (e) {
        var els = NodeListJS(selector, this);
        if (!els.length) {
          return;
        }
        els.some(function (el) {
          var target = el.contains(e.target);
          if (target) fn.call(el, e, el);
          return target;
        });
      } : function (e) {
        fn.apply(this, [e, this]);
      };
      this.each(function (el) {
        events.forEach(function (event) {
          if (el === window || isNode(el)) {
            el.addEventListener(event, callback, false);
            Events.push({
              el: el,
              event: event,
              callback: callback
            });
          }
        });
      });
      return this;
    }
  }, {
    key: 'off',
    value: function off(events, callback) {
      if (events instanceof Function) {
        callback = events;
        events = null;
      }
      events = events instanceof Array ? events : typeof events === 'string' ? splitWords(events) : null;
      this.each(function (el) {
        Events = Events.filter(function (e) {
          if (e && e.el === el && (!callback || callback === e.callback) && (!events || ~events.indexOf(e.event))) {
            e.el.removeEventListener(e.event, e.callback);
            return false;
          }
          return true;
        });
      });
      return this;
    }
  }, {
    key: 'onBlur',
    value: function onBlur(callback) {
      if (!this || !this.length) return this;
      if (!callback) return this;
      this.each(function (el) {
        blurList.push({ el: el, callback: callback });
      });
      if (!blurEvent) {
        blurEvent = function blurEvent(e) {
          blurList.forEach(function (item) {
            var target = item.el.contains(e.target) || item.el === e.target;
            if (!target) item.callback.call(item.el, e, item.el);
          });
        };
        document.addEventListener('click', blurEvent, false);
        document.addEventListener('touchstart', blurEvent, false);
      }
      return this;
    }
  }, {
    key: 'offBlur',
    value: function offBlur(callback) {
      this.each(function (el) {
        blurList = blurList.filter(function (blur) {
          if (blur && blur.el === el && (!callback || blur.callback === callback)) {
            return false;
          }
          return el;
        });
      });
      return this;
    }
  }, {
    key: 'asArray',
    get: function get() {
      return ArrayProto.slice.call(this);
    }
  }]);

  return NodeList;
}();

var NL = NodeList.prototype;

function flatten(arr, owner) {
  var list = [];
  ArrayProto.forEach.call(arr, function (el) {
    if (isNode(el)) {
      if (!~list.indexOf(el)) list.push(el);
    } else if (isNodeList(el)) {
      for (var id in el) {
        list.push(el[id]);
      }
    } else if (el !== null) {
      arr.get = NL.get;
      arr.set = NL.set;
      arr.call = NL.call;
      arr.owner = owner;
      return arr;
    }
  });
  return NodeListJS(list, owner);
}

Object.getOwnPropertyNames(ArrayProto).forEach(function (key) {
  if (key !== 'join' && key !== 'copyWithin' && key !== 'fill' && NL[key] === undefined) {
    NL[key] = ArrayProto[key];
  }
});
if (window.Symbol && Symbol.iterator) {
  NL[Symbol.iterator] = NL.values = ArrayProto[Symbol.iterator];
}
var div = document.createElement('div');
function setterGetter(prop) {
  var _this4 = this;

  if (NL[prop]) return;
  if (div[prop] instanceof Function) {
    NL[prop] = function () {
      for (var _len11 = arguments.length, args = Array(_len11), _key11 = 0; _key11 < _len11; _key11++) {
        args[_key11] = arguments[_key11];
      }

      var arr = [];
      var returnThis = true;
      for (var i in NL) {
        var el = NL[i];
        if (el && el[prop] instanceof Function) {
          el = el[prop].apply(el, args);
          arr.push(el);
          if (returnThis && el !== undefined) {
            returnThis = false;
          }
        } else {
          arr.push(undefined);
        }
      }
      return returnThis ? _this4 : flatten(arr, _this4);
    };
  } else {
    Object.defineProperty(NL, prop, {
      get: function get() {
        var arr = [];
        this.each(function (el) {
          if (el !== null) {
            el = el[prop];
          }
          arr.push(el);
        });
        return flatten(arr, this);
      },
      set: function set(value) {
        this.each(function (el) {
          if (el && prop in el) {
            el[prop] = value;
          }
        });
      }
    });
  }
}
for (var prop in div) {
  setterGetter(prop);
}function NodeListJS() {
  for (var _len12 = arguments.length, args = Array(_len12), _key12 = 0; _key12 < _len12; _key12++) {
    args[_key12] = arguments[_key12];
  }

  return new NodeList(args);
}
window.NL = NodeListJS;

/* harmony default export */ __webpack_exports__["a"] = (NodeListJS);

/***/ }),

/***/ 70:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return coerce; });
/* unused harmony export getJSON */
/* harmony export (immutable) */ __webpack_exports__["b"] = getScrollBarWidth;
/* unused harmony export translations */
/* unused harmony export delayer */
/* unused harmony export VueFixer */

var coerce = {
  boolean: function boolean(val) {
    return typeof val === 'string' ? val === '' || val === 'true' ? true : val === 'false' || val === 'null' || val === 'undefined' ? false : val : val;
  },

  number: function number(val) {
    var alt = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    return typeof val === 'number' ? val : val === undefined || val === null || isNaN(Number(val)) ? alt : Number(val);
  },

  string: function string(val) {
    return val === undefined || val === null ? '' : val + '';
  },

  pattern: function pattern(val) {
    return val instanceof Function || val instanceof RegExp ? val : typeof val === 'string' ? new RegExp(val) : null;
  }
};

function getJSON(url) {
  var request = new window.XMLHttpRequest();
  var data = {};

  var p = {
    then: function then(fn1, fn2) {
      return p.done(fn1).fail(fn2);
    },
    catch: function _catch(fn) {
      return p.fail(fn);
    },
    always: function always(fn) {
      return p.done(fn).fail(fn);
    }
  };
  ['done', 'fail'].forEach(function (name) {
    data[name] = [];
    p[name] = function (fn) {
      if (fn instanceof Function) data[name].push(fn);
      return p;
    };
  });
  p.done(JSON.parse);
  request.onreadystatechange = function () {
    if (request.readyState === 4) {
      var e = { status: request.status };
      if (request.status === 200) {
        try {
          var response = request.responseText;
          for (var i in data.done) {
            var value = data.done[i](response);
            if (value !== undefined) {
              response = value;
            }
          }
        } catch (err) {
          data.fail.forEach(function (fail) {
            return fail(err);
          });
        }
      } else {
        data.fail.forEach(function (fail) {
          return fail(e);
        });
      }
    }
  };
  request.open('GET', url);
  request.setRequestHeader('Accept', 'application/json');
  request.send();
  return p;
}

function getScrollBarWidth() {
  if (document.documentElement.scrollHeight <= document.documentElement.clientHeight) {
    return 0;
  }
  var inner = document.createElement('p');
  inner.style.width = '100%';
  inner.style.height = '200px';

  var outer = document.createElement('div');
  outer.style.position = 'absolute';
  outer.style.top = '0px';
  outer.style.left = '0px';
  outer.style.visibility = 'hidden';
  outer.style.width = '200px';
  outer.style.height = '150px';
  outer.style.overflow = 'hidden';
  outer.appendChild(inner);

  document.body.appendChild(outer);
  var w1 = inner.offsetWidth;
  outer.style.overflow = 'scroll';
  var w2 = inner.offsetWidth;
  if (w1 === w2) w2 = outer.clientWidth;

  document.body.removeChild(outer);

  return w1 - w2;
}

function translations() {
  var lang = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'en';

  var text = {
    daysOfWeek: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
    limit: 'Limit reached ({{limit}} items max).',
    loading: 'Loading...',
    minLength: 'Min. Length',
    months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    notSelected: 'Nothing Selected',
    required: 'Required',
    search: 'Search'
  };
  return window.VueStrapLang ? window.VueStrapLang(lang) : text;
}

function delayer(fn, varTimer) {
  var ifNaN = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 100;

  function toInt(el) {
    return (/^[0-9]+$/.test(el) ? Number(el) || 1 : null
    );
  }
  var timerId;
  return function () {
    var _this = this;

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    if (timerId) clearTimeout(timerId);
    timerId = setTimeout(function () {
      fn.apply(_this, args);
    }, toInt(varTimer) || toInt(this[varTimer]) || ifNaN);
  };
}

function VueFixer(vue) {
  var vue2 = !window.Vue || !window.Vue.partial;
  var mixin = {
    computed: {
      vue2: function vue2() {
        return !this.$dispatch;
      }
    }
  };
  if (!vue2) {
    if (vue.beforeCreate) {
      mixin.create = vue.beforeCreate;
      delete vue.beforeCreate;
    }
    if (vue.beforeMount) {
      vue.beforeCompile = vue.beforeMount;
      delete vue.beforeMount;
    }
    if (vue.mounted) {
      vue.ready = vue.mounted;
      delete vue.mounted;
    }
  } else {
    if (vue.beforeCompile) {
      vue.beforeMount = vue.beforeCompile;
      delete vue.beforeCompile;
    }
    if (vue.compiled) {
      mixin.compiled = vue.compiled;
      delete vue.compiled;
    }
    if (vue.ready) {
      vue.mounted = vue.ready;
      delete vue.ready;
    }
  }
  if (!vue.mixins) {
    vue.mixins = [];
  }
  vue.mixins.unshift(mixin);
  return vue;
}

/***/ }),

/***/ 71:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(undefined);
// imports


// module
exports.push([module.i, "\n.modal {\n  transition: all 0.3s ease;\n}\n.modal.in {\n  background-color: rgba(0,0,0,0.5);\n}\n.modal.zoom .modal-dialog {\n  -webkit-transform: scale(0.1);\n  -moz-transform: scale(0.1);\n  -ms-transform: scale(0.1);\n  transform: scale(0.1);\n  top: 300px;\n  opacity: 0;\n  -webkit-transition: all 0.3s;\n  -moz-transition: all 0.3s;\n  transition: all 0.3s;\n}\n.modal.zoom.in .modal-dialog {\n  -webkit-transform: scale(1);\n  -moz-transform: scale(1);\n  -ms-transform: scale(1);\n  transform: scale(1);\n  -webkit-transform: translate3d(0, -300px, 0);\n  transform: translate3d(0, -300px, 0);\n  opacity: 1;\n}\n", ""]);

// exports


/***/ }),

/***/ 73:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(86)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(68),
  /* template */
  __webpack_require__(82),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/home/ubuntu/workspace/node_modules/vue-strap/src/Modal.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Modal.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7fbae1af", Component.options)
  } else {
    hotAPI.reload("data-v-7fbae1af", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 80:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "wrapper"
  }, [_c('div', {
    staticClass: "animated fadeIn"
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-lg-12"
  }, [_c('div', {
    staticClass: "card"
  }, [_vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "card-block"
  }, [_c('button', {
    staticClass: "btn btn-secondary",
    attrs: {
      "type": "button"
    },
    on: {
      "click": function($event) {
        _vm.myModal = true
      }
    }
  }, [_vm._v("Launch demo modal")]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-secondary",
    attrs: {
      "type": "button"
    },
    on: {
      "click": function($event) {
        _vm.largeModal = true
      }
    }
  }, [_vm._v("Launch large modal")]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-secondary",
    attrs: {
      "type": "button"
    },
    on: {
      "click": function($event) {
        _vm.smallModal = true
      }
    }
  }, [_vm._v("Launch small modal")]), _vm._v(" "), _c('hr'), _vm._v(" "), _c('button', {
    staticClass: "btn btn-primary",
    attrs: {
      "type": "button"
    },
    on: {
      "click": function($event) {
        _vm.primaryModal = true
      }
    }
  }, [_vm._v("Launch primary modal")]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-success",
    attrs: {
      "type": "button"
    },
    on: {
      "click": function($event) {
        _vm.successModal = true
      }
    }
  }, [_vm._v("Launch success modal")]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-warning",
    attrs: {
      "type": "button"
    },
    on: {
      "click": function($event) {
        _vm.warningModal = true
      }
    }
  }, [_vm._v("Launch warning modal")]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-danger",
    attrs: {
      "type": "button"
    },
    on: {
      "click": function($event) {
        _vm.dangerModal = true
      }
    }
  }, [_vm._v("Launch danger modal")]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-info",
    attrs: {
      "type": "button"
    },
    on: {
      "click": function($event) {
        _vm.infoModal = true
      }
    }
  }, [_vm._v("Launch info modal")])])])])])]), _vm._v(" "), _c('modal', {
    attrs: {
      "title": "Modal title",
      "effect": "fade/zoom"
    },
    on: {
      "ok": function($event) {
        _vm.myModal = false
      }
    },
    model: {
      value: (_vm.myModal),
      callback: function($$v) {
        _vm.myModal = $$v
      },
      expression: "myModal"
    }
  }, [_c('div', {
    staticClass: "modal-header",
    slot: "modal-header"
  }, [_c('h4', {
    staticClass: "modal-title"
  }, [_vm._v("Modal title")])]), _vm._v("\n    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\n    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\n    proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n  ")]), _vm._v(" "), _c('modal', {
    attrs: {
      "title": "Modal title",
      "large": "",
      "effect": "fade/zoom"
    },
    on: {
      "ok": function($event) {
        _vm.largeModal = false
      }
    },
    model: {
      value: (_vm.largeModal),
      callback: function($$v) {
        _vm.largeModal = $$v
      },
      expression: "largeModal"
    }
  }, [_c('div', {
    staticClass: "modal-header",
    slot: "modal-header"
  }, [_c('h4', {
    staticClass: "modal-title"
  }, [_vm._v("Modal title")])]), _vm._v("\n    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\n    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\n    proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n  ")]), _vm._v(" "), _c('modal', {
    attrs: {
      "title": "Modal title",
      "small": "",
      "effect": "fade/zoom"
    },
    on: {
      "ok": function($event) {
        _vm.smallModal = false
      }
    },
    model: {
      value: (_vm.smallModal),
      callback: function($$v) {
        _vm.smallModal = $$v
      },
      expression: "smallModal"
    }
  }, [_c('div', {
    staticClass: "modal-header",
    slot: "modal-header"
  }, [_c('h4', {
    staticClass: "modal-title"
  }, [_vm._v("Modal title")])]), _vm._v("\n    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\n    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\n    proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n  ")]), _vm._v(" "), _c('modal', {
    staticClass: "modal-primary",
    attrs: {
      "title": "Modal title",
      "effect": "fade/zoom"
    },
    on: {
      "ok": function($event) {
        _vm.primaryModal = false
      }
    },
    model: {
      value: (_vm.primaryModal),
      callback: function($$v) {
        _vm.primaryModal = $$v
      },
      expression: "primaryModal"
    }
  }, [_c('div', {
    staticClass: "modal-header",
    slot: "modal-header"
  }, [_c('h4', {
    staticClass: "modal-title"
  }, [_vm._v("Modal title")])]), _vm._v("\n    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\n    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\n    proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n  ")]), _vm._v(" "), _c('modal', {
    staticClass: "modal-success",
    attrs: {
      "title": "Modal title",
      "effect": "fade/zoom"
    },
    on: {
      "ok": function($event) {
        _vm.successModal = false
      }
    },
    model: {
      value: (_vm.successModal),
      callback: function($$v) {
        _vm.successModal = $$v
      },
      expression: "successModal"
    }
  }, [_c('div', {
    staticClass: "modal-header",
    slot: "modal-header"
  }, [_c('h4', {
    staticClass: "modal-title"
  }, [_vm._v("Modal title")])]), _vm._v("\n    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\n    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\n    proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n  ")]), _vm._v(" "), _c('modal', {
    staticClass: "modal-warning",
    attrs: {
      "title": "Modal title",
      "effect": "fade/zoom"
    },
    on: {
      "ok": function($event) {
        _vm.warningModal = false
      }
    },
    model: {
      value: (_vm.warningModal),
      callback: function($$v) {
        _vm.warningModal = $$v
      },
      expression: "warningModal"
    }
  }, [_c('div', {
    staticClass: "modal-header",
    slot: "modal-header"
  }, [_c('h4', {
    staticClass: "modal-title"
  }, [_vm._v("Modal title")])]), _vm._v("\n    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\n    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\n    proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n  ")]), _vm._v(" "), _c('modal', {
    staticClass: "modal-danger",
    attrs: {
      "title": "Modal title",
      "effect": "fade/zoom"
    },
    on: {
      "ok": function($event) {
        _vm.dangerModal = false
      }
    },
    model: {
      value: (_vm.dangerModal),
      callback: function($$v) {
        _vm.dangerModal = $$v
      },
      expression: "dangerModal"
    }
  }, [_c('div', {
    staticClass: "modal-header",
    slot: "modal-header"
  }, [_c('h4', {
    staticClass: "modal-title"
  }, [_vm._v("Modal title")])]), _vm._v("\n    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\n    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\n    proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n  ")]), _vm._v(" "), _c('modal', {
    staticClass: "modal-info",
    attrs: {
      "title": "Modal title",
      "effect": "fade/zoom"
    },
    on: {
      "ok": function($event) {
        _vm.infoModal = false
      }
    },
    model: {
      value: (_vm.infoModal),
      callback: function($$v) {
        _vm.infoModal = $$v
      },
      expression: "infoModal"
    }
  }, [_c('div', {
    staticClass: "modal-header",
    slot: "modal-header"
  }, [_c('h4', {
    staticClass: "modal-title"
  }, [_vm._v("Modal title")])]), _vm._v("\n    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\n    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\n    proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n  ")])], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "card-header"
  }, [_c('i', {
    staticClass: "fa fa-align-justify"
  }), _vm._v(" Bootstrap Modals\n          ")])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-6405e8f3", module.exports)
  }
}

/***/ }),

/***/ 82:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    class: {
      'modal': true,
      'fade': _vm.effect === 'fade',
        'zoom': _vm.effect === 'zoom'
    },
    attrs: {
      "role": "dialog"
    }
  }, [_c('div', {
    class: {
      'modal-dialog': true, 'modal-lg': _vm.large, 'modal-sm': _vm.small
    },
    style: ({
      width: _vm.optionalWidth
    }),
    attrs: {
      "role": "document"
    }
  }, [_c('div', {
    staticClass: "modal-content"
  }, [_vm._t("modal-header", [_c('div', {
    staticClass: "modal-header"
  }, [_c('button', {
    staticClass: "close",
    attrs: {
      "type": "button"
    },
    on: {
      "click": _vm.close
    }
  }, [_c('span', [_vm._v("×")])]), _vm._v(" "), _c('h4', {
    staticClass: "modal-title"
  }, [_vm._t("title", [_vm._v("\n              " + _vm._s(_vm.title) + "\n            ")])], 2)])]), _vm._v(" "), _vm._t("modal-body", [_c('div', {
    staticClass: "modal-body"
  })]), _vm._v(" "), _vm._t("modal-footer", [_c('div', {
    staticClass: "modal-footer"
  }, [_c('button', {
    staticClass: "btn btn-default",
    attrs: {
      "type": "button"
    },
    on: {
      "click": _vm.close
    }
  }, [_vm._v(_vm._s(_vm.cancelText))]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-primary",
    attrs: {
      "type": "button"
    },
    on: {
      "click": _vm.callback
    }
  }, [_vm._v(_vm._s(_vm.okText))])])])], 2)])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-7fbae1af", module.exports)
  }
}

/***/ }),

/***/ 86:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(71);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("058319ec", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../css-loader/index.js!../../vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-7fbae1af\",\"scoped\":false,\"hasInlineConfig\":false}!../../vue-loader/lib/selector.js?type=styles&index=0!./Modal.vue", function() {
     var newContent = require("!!../../css-loader/index.js!../../vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-7fbae1af\",\"scoped\":false,\"hasInlineConfig\":false}!../../vue-loader/lib/selector.js?type=styles&index=0!./Modal.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ })

});