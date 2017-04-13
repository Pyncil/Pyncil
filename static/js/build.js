/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	var parentJsonpFunction = window["webpackJsonp"];
/******/ 	window["webpackJsonp"] = function webpackJsonpCallback(chunkIds, moreModules, executeModules) {
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [], result;
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId])
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(chunkIds, moreModules, executeModules);
/******/ 		while(resolves.length)
/******/ 			resolves.shift()();
/******/
/******/ 	};
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// objects to store loaded and loading chunks
/******/ 	var installedChunks = {
/******/ 		11: 0
/******/ 	};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		if(installedChunks[chunkId] === 0)
/******/ 			return Promise.resolve();
/******/
/******/ 		// a Promise means "currently loading".
/******/ 		if(installedChunks[chunkId]) {
/******/ 			return installedChunks[chunkId][2];
/******/ 		}
/******/
/******/ 		// setup Promise in chunk cache
/******/ 		var promise = new Promise(function(resolve, reject) {
/******/ 			installedChunks[chunkId] = [resolve, reject];
/******/ 		});
/******/ 		installedChunks[chunkId][2] = promise;
/******/
/******/ 		// start chunk loading
/******/ 		var head = document.getElementsByTagName('head')[0];
/******/ 		var script = document.createElement('script');
/******/ 		script.type = 'text/javascript';
/******/ 		script.charset = 'utf-8';
/******/ 		script.async = true;
/******/ 		script.timeout = 120000;
/******/
/******/ 		if (__webpack_require__.nc) {
/******/ 			script.setAttribute("nonce", __webpack_require__.nc);
/******/ 		}
/******/ 		script.src = __webpack_require__.p + "" + chunkId + ".build.js";
/******/ 		var timeout = setTimeout(onScriptComplete, 120000);
/******/ 		script.onerror = script.onload = onScriptComplete;
/******/ 		function onScriptComplete() {
/******/ 			// avoid mem leaks in IE.
/******/ 			script.onerror = script.onload = null;
/******/ 			clearTimeout(timeout);
/******/ 			var chunk = installedChunks[chunkId];
/******/ 			if(chunk !== 0) {
/******/ 				if(chunk) chunk[1](new Error('Loading chunk ' + chunkId + ' failed.'));
/******/ 				installedChunks[chunkId] = undefined;
/******/ 			}
/******/ 		};
/******/ 		head.appendChild(script);
/******/
/******/ 		return promise;
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/js/";
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 9);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

// this module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  scopeId,
  cssModules
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  // inject cssModules
  if (cssModules) {
    var computed = Object.create(options.computed || null)
    Object.keys(cssModules).forEach(function (key) {
      var module = cssModules[key]
      computed[key] = function () { return module }
    })
    options.computed = computed
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process, global) {var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _toString(val) {
  return val == null ? '' : (typeof val === 'undefined' ? 'undefined' : _typeof(val)) === 'object' ? JSON.stringify(val, null, 2) : String(val);
}

function toNumber(val) {
  var n = parseFloat(val);
  return isNaN(n) ? val : n;
}

function makeMap(str, expectsLowerCase) {
  var map = Object.create(null);
  var list = str.split(',');
  for (var i = 0; i < list.length; i++) {
    map[list[i]] = true;
  }
  return expectsLowerCase ? function (val) {
    return map[val.toLowerCase()];
  } : function (val) {
    return map[val];
  };
}

var isBuiltInTag = makeMap('slot,component', true);

function remove(arr, item) {
  if (arr.length) {
    var index = arr.indexOf(item);
    if (index > -1) {
      return arr.splice(index, 1);
    }
  }
}

var hasOwnProperty = Object.prototype.hasOwnProperty;
function hasOwn(obj, key) {
  return hasOwnProperty.call(obj, key);
}

function isPrimitive(value) {
  return typeof value === 'string' || typeof value === 'number';
}

function cached(fn) {
  var cache = Object.create(null);
  return function cachedFn(str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str));
  };
}

var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) {
    return c ? c.toUpperCase() : '';
  });
});

var capitalize = cached(function (str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
});

var hyphenateRE = /([^-])([A-Z])/g;
var hyphenate = cached(function (str) {
  return str.replace(hyphenateRE, '$1-$2').replace(hyphenateRE, '$1-$2').toLowerCase();
});

function bind(fn, ctx) {
  function boundFn(a) {
    var l = arguments.length;
    return l ? l > 1 ? fn.apply(ctx, arguments) : fn.call(ctx, a) : fn.call(ctx);
  }

  boundFn._length = fn.length;
  return boundFn;
}

function toArray(list, start) {
  start = start || 0;
  var i = list.length - start;
  var ret = new Array(i);
  while (i--) {
    ret[i] = list[i + start];
  }
  return ret;
}

function extend(to, _from) {
  for (var key in _from) {
    to[key] = _from[key];
  }
  return to;
}

function isObject(obj) {
  return obj !== null && (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === 'object';
}

var toString = Object.prototype.toString;
var OBJECT_STRING = '[object Object]';
function isPlainObject(obj) {
  return toString.call(obj) === OBJECT_STRING;
}

function toObject(arr) {
  var res = {};
  for (var i = 0; i < arr.length; i++) {
    if (arr[i]) {
      extend(res, arr[i]);
    }
  }
  return res;
}

function noop() {}

var no = function no() {
  return false;
};

var identity = function identity(_) {
  return _;
};

function genStaticKeys(modules) {
  return modules.reduce(function (keys, m) {
    return keys.concat(m.staticKeys || []);
  }, []).join(',');
}

function looseEqual(a, b) {
  var isObjectA = isObject(a);
  var isObjectB = isObject(b);
  if (isObjectA && isObjectB) {
    try {
      return JSON.stringify(a) === JSON.stringify(b);
    } catch (e) {
      return a === b;
    }
  } else if (!isObjectA && !isObjectB) {
    return String(a) === String(b);
  } else {
    return false;
  }
}

function looseIndexOf(arr, val) {
  for (var i = 0; i < arr.length; i++) {
    if (looseEqual(arr[i], val)) {
      return i;
    }
  }
  return -1;
}

function once(fn) {
  var called = false;
  return function () {
    if (!called) {
      called = true;
      fn();
    }
  };
}

var config = {
  optionMergeStrategies: Object.create(null),

  silent: false,

  productionTip: process.env.NODE_ENV !== 'production',

  devtools: process.env.NODE_ENV !== 'production',

  performance: false,

  errorHandler: null,

  ignoredElements: [],

  keyCodes: Object.create(null),

  isReservedTag: no,

  isUnknownElement: no,

  getTagNamespace: noop,

  parsePlatformTagName: identity,

  mustUseProp: no,

  _assetTypes: ['component', 'directive', 'filter'],

  _lifecycleHooks: ['beforeCreate', 'created', 'beforeMount', 'mounted', 'beforeUpdate', 'updated', 'beforeDestroy', 'destroyed', 'activated', 'deactivated'],

  _maxUpdateCount: 100
};

var emptyObject = Object.freeze({});

function isReserved(str) {
  var c = (str + '').charCodeAt(0);
  return c === 0x24 || c === 0x5F;
}

function def(obj, key, val, enumerable) {
  Object.defineProperty(obj, key, {
    value: val,
    enumerable: !!enumerable,
    writable: true,
    configurable: true
  });
}

var bailRE = /[^\w.$]/;
function parsePath(path) {
  if (bailRE.test(path)) {
    return;
  }
  var segments = path.split('.');
  return function (obj) {
    for (var i = 0; i < segments.length; i++) {
      if (!obj) {
        return;
      }
      obj = obj[segments[i]];
    }
    return obj;
  };
}

var hasProto = '__proto__' in {};

var inBrowser = typeof window !== 'undefined';
var UA = inBrowser && window.navigator.userAgent.toLowerCase();
var isIE = UA && /msie|trident/.test(UA);
var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
var isEdge = UA && UA.indexOf('edge/') > 0;
var isAndroid = UA && UA.indexOf('android') > 0;
var isIOS = UA && /iphone|ipad|ipod|ios/.test(UA);
var isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge;

var _isServer;
var isServerRendering = function isServerRendering() {
  if (_isServer === undefined) {
    if (!inBrowser && typeof global !== 'undefined') {
      _isServer = global['process'].env.VUE_ENV === 'server';
    } else {
      _isServer = false;
    }
  }
  return _isServer;
};

var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

function isNative(Ctor) {
  return (/native code/.test(Ctor.toString())
  );
}

var hasSymbol = typeof Symbol !== 'undefined' && isNative(Symbol) && typeof Reflect !== 'undefined' && isNative(Reflect.ownKeys);

var nextTick = function () {
  var callbacks = [];
  var pending = false;
  var timerFunc;

  function nextTickHandler() {
    pending = false;
    var copies = callbacks.slice(0);
    callbacks.length = 0;
    for (var i = 0; i < copies.length; i++) {
      copies[i]();
    }
  }

  if (typeof Promise !== 'undefined' && isNative(Promise)) {
    var p = Promise.resolve();
    var logError = function logError(err) {
      console.error(err);
    };
    timerFunc = function timerFunc() {
      p.then(nextTickHandler).catch(logError);

      if (isIOS) {
        setTimeout(noop);
      }
    };
  } else if (typeof MutationObserver !== 'undefined' && (isNative(MutationObserver) || MutationObserver.toString() === '[object MutationObserverConstructor]')) {
    var counter = 1;
    var observer = new MutationObserver(nextTickHandler);
    var textNode = document.createTextNode(String(counter));
    observer.observe(textNode, {
      characterData: true
    });
    timerFunc = function timerFunc() {
      counter = (counter + 1) % 2;
      textNode.data = String(counter);
    };
  } else {
    timerFunc = function timerFunc() {
      setTimeout(nextTickHandler, 0);
    };
  }

  return function queueNextTick(cb, ctx) {
    var _resolve;
    callbacks.push(function () {
      if (cb) {
        cb.call(ctx);
      }
      if (_resolve) {
        _resolve(ctx);
      }
    });
    if (!pending) {
      pending = true;
      timerFunc();
    }
    if (!cb && typeof Promise !== 'undefined') {
      return new Promise(function (resolve) {
        _resolve = resolve;
      });
    }
  };
}();

var _Set;

if (typeof Set !== 'undefined' && isNative(Set)) {
  _Set = Set;
} else {
  _Set = function () {
    function Set() {
      this.set = Object.create(null);
    }
    Set.prototype.has = function has(key) {
      return this.set[key] === true;
    };
    Set.prototype.add = function add(key) {
      this.set[key] = true;
    };
    Set.prototype.clear = function clear() {
      this.set = Object.create(null);
    };

    return Set;
  }();
}

var warn = noop;
var tip = noop;
var formatComponentName;

if (process.env.NODE_ENV !== 'production') {
  var hasConsole = typeof console !== 'undefined';
  var classifyRE = /(?:^|[-_])(\w)/g;
  var classify = function classify(str) {
    return str.replace(classifyRE, function (c) {
      return c.toUpperCase();
    }).replace(/[-_]/g, '');
  };

  warn = function warn(msg, vm) {
    if (hasConsole && !config.silent) {
      console.error("[Vue warn]: " + msg + " " + (vm ? formatLocation(formatComponentName(vm)) : ''));
    }
  };

  tip = function tip(msg, vm) {
    if (hasConsole && !config.silent) {
      console.warn("[Vue tip]: " + msg + " " + (vm ? formatLocation(formatComponentName(vm)) : ''));
    }
  };

  formatComponentName = function formatComponentName(vm, includeFile) {
    if (vm.$root === vm) {
      return '<Root>';
    }
    var name = typeof vm === 'string' ? vm : typeof vm === 'function' && vm.options ? vm.options.name : vm._isVue ? vm.$options.name || vm.$options._componentTag : vm.name;

    var file = vm._isVue && vm.$options.__file;
    if (!name && file) {
      var match = file.match(/([^/\\]+)\.vue$/);
      name = match && match[1];
    }

    return (name ? "<" + classify(name) + ">" : "<Anonymous>") + (file && includeFile !== false ? " at " + file : '');
  };

  var formatLocation = function formatLocation(str) {
    if (str === "<Anonymous>") {
      str += " - use the \"name\" option for better debugging messages.";
    }
    return "\n(found in " + str + ")";
  };
}

var uid$1 = 0;

var Dep = function Dep() {
  this.id = uid$1++;
  this.subs = [];
};

Dep.prototype.addSub = function addSub(sub) {
  this.subs.push(sub);
};

Dep.prototype.removeSub = function removeSub(sub) {
  remove(this.subs, sub);
};

Dep.prototype.depend = function depend() {
  if (Dep.target) {
    Dep.target.addDep(this);
  }
};

Dep.prototype.notify = function notify() {
  var subs = this.subs.slice();
  for (var i = 0, l = subs.length; i < l; i++) {
    subs[i].update();
  }
};

Dep.target = null;
var targetStack = [];

function pushTarget(_target) {
  if (Dep.target) {
    targetStack.push(Dep.target);
  }
  Dep.target = _target;
}

function popTarget() {
  Dep.target = targetStack.pop();
}

var arrayProto = Array.prototype;
var arrayMethods = Object.create(arrayProto);['push', 'pop', 'shift', 'unshift', 'splice', 'sort', 'reverse'].forEach(function (method) {
  var original = arrayProto[method];
  def(arrayMethods, method, function mutator() {
    var arguments$1 = arguments;

    var i = arguments.length;
    var args = new Array(i);
    while (i--) {
      args[i] = arguments$1[i];
    }
    var result = original.apply(this, args);
    var ob = this.__ob__;
    var inserted;
    switch (method) {
      case 'push':
        inserted = args;
        break;
      case 'unshift':
        inserted = args;
        break;
      case 'splice':
        inserted = args.slice(2);
        break;
    }
    if (inserted) {
      ob.observeArray(inserted);
    }

    ob.dep.notify();
    return result;
  });
});

var arrayKeys = Object.getOwnPropertyNames(arrayMethods);

var observerState = {
  shouldConvert: true,
  isSettingProps: false
};

var Observer = function Observer(value) {
  this.value = value;
  this.dep = new Dep();
  this.vmCount = 0;
  def(value, '__ob__', this);
  if (Array.isArray(value)) {
    var augment = hasProto ? protoAugment : copyAugment;
    augment(value, arrayMethods, arrayKeys);
    this.observeArray(value);
  } else {
    this.walk(value);
  }
};

Observer.prototype.walk = function walk(obj) {
  var keys = Object.keys(obj);
  for (var i = 0; i < keys.length; i++) {
    defineReactive$$1(obj, keys[i], obj[keys[i]]);
  }
};

Observer.prototype.observeArray = function observeArray(items) {
  for (var i = 0, l = items.length; i < l; i++) {
    observe(items[i]);
  }
};

function protoAugment(target, src) {
  target.__proto__ = src;
}

function copyAugment(target, src, keys) {
  for (var i = 0, l = keys.length; i < l; i++) {
    var key = keys[i];
    def(target, key, src[key]);
  }
}

function observe(value, asRootData) {
  if (!isObject(value)) {
    return;
  }
  var ob;
  if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
    ob = value.__ob__;
  } else if (observerState.shouldConvert && !isServerRendering() && (Array.isArray(value) || isPlainObject(value)) && Object.isExtensible(value) && !value._isVue) {
    ob = new Observer(value);
  }
  if (asRootData && ob) {
    ob.vmCount++;
  }
  return ob;
}

function defineReactive$$1(obj, key, val, customSetter) {
  var dep = new Dep();

  var property = Object.getOwnPropertyDescriptor(obj, key);
  if (property && property.configurable === false) {
    return;
  }

  var getter = property && property.get;
  var setter = property && property.set;

  var childOb = observe(val);
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: function reactiveGetter() {
      var value = getter ? getter.call(obj) : val;
      if (Dep.target) {
        dep.depend();
        if (childOb) {
          childOb.dep.depend();
        }
        if (Array.isArray(value)) {
          dependArray(value);
        }
      }
      return value;
    },
    set: function reactiveSetter(newVal) {
      var value = getter ? getter.call(obj) : val;

      if (newVal === value || newVal !== newVal && value !== value) {
        return;
      }

      if (process.env.NODE_ENV !== 'production' && customSetter) {
        customSetter();
      }
      if (setter) {
        setter.call(obj, newVal);
      } else {
        val = newVal;
      }
      childOb = observe(newVal);
      dep.notify();
    }
  });
}

function set(target, key, val) {
  if (Array.isArray(target) && typeof key === 'number') {
    target.length = Math.max(target.length, key);
    target.splice(key, 1, val);
    return val;
  }
  if (hasOwn(target, key)) {
    target[key] = val;
    return val;
  }
  var ob = target.__ob__;
  if (target._isVue || ob && ob.vmCount) {
    process.env.NODE_ENV !== 'production' && warn('Avoid adding reactive properties to a Vue instance or its root $data ' + 'at runtime - declare it upfront in the data option.');
    return val;
  }
  if (!ob) {
    target[key] = val;
    return val;
  }
  defineReactive$$1(ob.value, key, val);
  ob.dep.notify();
  return val;
}

function del(target, key) {
  if (Array.isArray(target) && typeof key === 'number') {
    target.splice(key, 1);
    return;
  }
  var ob = target.__ob__;
  if (target._isVue || ob && ob.vmCount) {
    process.env.NODE_ENV !== 'production' && warn('Avoid deleting properties on a Vue instance or its root $data ' + '- just set it to null.');
    return;
  }
  if (!hasOwn(target, key)) {
    return;
  }
  delete target[key];
  if (!ob) {
    return;
  }
  ob.dep.notify();
}

function dependArray(value) {
  for (var e = void 0, i = 0, l = value.length; i < l; i++) {
    e = value[i];
    e && e.__ob__ && e.__ob__.dep.depend();
    if (Array.isArray(e)) {
      dependArray(e);
    }
  }
}

var strats = config.optionMergeStrategies;

if (process.env.NODE_ENV !== 'production') {
  strats.el = strats.propsData = function (parent, child, vm, key) {
    if (!vm) {
      warn("option \"" + key + "\" can only be used during instance " + 'creation with the `new` keyword.');
    }
    return defaultStrat(parent, child);
  };
}

function mergeData(to, from) {
  if (!from) {
    return to;
  }
  var key, toVal, fromVal;
  var keys = Object.keys(from);
  for (var i = 0; i < keys.length; i++) {
    key = keys[i];
    toVal = to[key];
    fromVal = from[key];
    if (!hasOwn(to, key)) {
      set(to, key, fromVal);
    } else if (isPlainObject(toVal) && isPlainObject(fromVal)) {
      mergeData(toVal, fromVal);
    }
  }
  return to;
}

strats.data = function (parentVal, childVal, vm) {
  if (!vm) {
    if (!childVal) {
      return parentVal;
    }
    if (typeof childVal !== 'function') {
      process.env.NODE_ENV !== 'production' && warn('The "data" option should be a function ' + 'that returns a per-instance value in component ' + 'definitions.', vm);
      return parentVal;
    }
    if (!parentVal) {
      return childVal;
    }

    return function mergedDataFn() {
      return mergeData(childVal.call(this), parentVal.call(this));
    };
  } else if (parentVal || childVal) {
    return function mergedInstanceDataFn() {
      var instanceData = typeof childVal === 'function' ? childVal.call(vm) : childVal;
      var defaultData = typeof parentVal === 'function' ? parentVal.call(vm) : undefined;
      if (instanceData) {
        return mergeData(instanceData, defaultData);
      } else {
        return defaultData;
      }
    };
  }
};

function mergeHook(parentVal, childVal) {
  return childVal ? parentVal ? parentVal.concat(childVal) : Array.isArray(childVal) ? childVal : [childVal] : parentVal;
}

config._lifecycleHooks.forEach(function (hook) {
  strats[hook] = mergeHook;
});

function mergeAssets(parentVal, childVal) {
  var res = Object.create(parentVal || null);
  return childVal ? extend(res, childVal) : res;
}

config._assetTypes.forEach(function (type) {
  strats[type + 's'] = mergeAssets;
});

strats.watch = function (parentVal, childVal) {
  if (!childVal) {
    return Object.create(parentVal || null);
  }
  if (!parentVal) {
    return childVal;
  }
  var ret = {};
  extend(ret, parentVal);
  for (var key in childVal) {
    var parent = ret[key];
    var child = childVal[key];
    if (parent && !Array.isArray(parent)) {
      parent = [parent];
    }
    ret[key] = parent ? parent.concat(child) : [child];
  }
  return ret;
};

strats.props = strats.methods = strats.computed = function (parentVal, childVal) {
  if (!childVal) {
    return Object.create(parentVal || null);
  }
  if (!parentVal) {
    return childVal;
  }
  var ret = Object.create(null);
  extend(ret, parentVal);
  extend(ret, childVal);
  return ret;
};

var defaultStrat = function defaultStrat(parentVal, childVal) {
  return childVal === undefined ? parentVal : childVal;
};

function checkComponents(options) {
  for (var key in options.components) {
    var lower = key.toLowerCase();
    if (isBuiltInTag(lower) || config.isReservedTag(lower)) {
      warn('Do not use built-in or reserved HTML elements as component ' + 'id: ' + key);
    }
  }
}

function normalizeProps(options) {
  var props = options.props;
  if (!props) {
    return;
  }
  var res = {};
  var i, val, name;
  if (Array.isArray(props)) {
    i = props.length;
    while (i--) {
      val = props[i];
      if (typeof val === 'string') {
        name = camelize(val);
        res[name] = { type: null };
      } else if (process.env.NODE_ENV !== 'production') {
        warn('props must be strings when using array syntax.');
      }
    }
  } else if (isPlainObject(props)) {
    for (var key in props) {
      val = props[key];
      name = camelize(key);
      res[name] = isPlainObject(val) ? val : { type: val };
    }
  }
  options.props = res;
}

function normalizeDirectives(options) {
  var dirs = options.directives;
  if (dirs) {
    for (var key in dirs) {
      var def = dirs[key];
      if (typeof def === 'function') {
        dirs[key] = { bind: def, update: def };
      }
    }
  }
}

function mergeOptions(parent, child, vm) {
  if (process.env.NODE_ENV !== 'production') {
    checkComponents(child);
  }
  normalizeProps(child);
  normalizeDirectives(child);
  var extendsFrom = child.extends;
  if (extendsFrom) {
    parent = typeof extendsFrom === 'function' ? mergeOptions(parent, extendsFrom.options, vm) : mergeOptions(parent, extendsFrom, vm);
  }
  if (child.mixins) {
    for (var i = 0, l = child.mixins.length; i < l; i++) {
      var mixin = child.mixins[i];
      if (mixin.prototype instanceof Vue$3) {
        mixin = mixin.options;
      }
      parent = mergeOptions(parent, mixin, vm);
    }
  }
  var options = {};
  var key;
  for (key in parent) {
    mergeField(key);
  }
  for (key in child) {
    if (!hasOwn(parent, key)) {
      mergeField(key);
    }
  }
  function mergeField(key) {
    var strat = strats[key] || defaultStrat;
    options[key] = strat(parent[key], child[key], vm, key);
  }
  return options;
}

function resolveAsset(options, type, id, warnMissing) {
  if (typeof id !== 'string') {
    return;
  }
  var assets = options[type];

  if (hasOwn(assets, id)) {
    return assets[id];
  }
  var camelizedId = camelize(id);
  if (hasOwn(assets, camelizedId)) {
    return assets[camelizedId];
  }
  var PascalCaseId = capitalize(camelizedId);
  if (hasOwn(assets, PascalCaseId)) {
    return assets[PascalCaseId];
  }

  var res = assets[id] || assets[camelizedId] || assets[PascalCaseId];
  if (process.env.NODE_ENV !== 'production' && warnMissing && !res) {
    warn('Failed to resolve ' + type.slice(0, -1) + ': ' + id, options);
  }
  return res;
}

function validateProp(key, propOptions, propsData, vm) {
  var prop = propOptions[key];
  var absent = !hasOwn(propsData, key);
  var value = propsData[key];

  if (isType(Boolean, prop.type)) {
    if (absent && !hasOwn(prop, 'default')) {
      value = false;
    } else if (!isType(String, prop.type) && (value === '' || value === hyphenate(key))) {
      value = true;
    }
  }

  if (value === undefined) {
    value = getPropDefaultValue(vm, prop, key);

    var prevShouldConvert = observerState.shouldConvert;
    observerState.shouldConvert = true;
    observe(value);
    observerState.shouldConvert = prevShouldConvert;
  }
  if (process.env.NODE_ENV !== 'production') {
    assertProp(prop, key, value, vm, absent);
  }
  return value;
}

function getPropDefaultValue(vm, prop, key) {
  if (!hasOwn(prop, 'default')) {
    return undefined;
  }
  var def = prop.default;

  if (process.env.NODE_ENV !== 'production' && isObject(def)) {
    warn('Invalid default value for prop "' + key + '": ' + 'Props with type Object/Array must use a factory function ' + 'to return the default value.', vm);
  }

  if (vm && vm.$options.propsData && vm.$options.propsData[key] === undefined && vm._props[key] !== undefined) {
    return vm._props[key];
  }

  return typeof def === 'function' && getType(prop.type) !== 'Function' ? def.call(vm) : def;
}

function assertProp(prop, name, value, vm, absent) {
  if (prop.required && absent) {
    warn('Missing required prop: "' + name + '"', vm);
    return;
  }
  if (value == null && !prop.required) {
    return;
  }
  var type = prop.type;
  var valid = !type || type === true;
  var expectedTypes = [];
  if (type) {
    if (!Array.isArray(type)) {
      type = [type];
    }
    for (var i = 0; i < type.length && !valid; i++) {
      var assertedType = assertType(value, type[i]);
      expectedTypes.push(assertedType.expectedType || '');
      valid = assertedType.valid;
    }
  }
  if (!valid) {
    warn('Invalid prop: type check failed for prop "' + name + '".' + ' Expected ' + expectedTypes.map(capitalize).join(', ') + ', got ' + Object.prototype.toString.call(value).slice(8, -1) + '.', vm);
    return;
  }
  var validator = prop.validator;
  if (validator) {
    if (!validator(value)) {
      warn('Invalid prop: custom validator check failed for prop "' + name + '".', vm);
    }
  }
}

function assertType(value, type) {
  var valid;
  var expectedType = getType(type);
  if (expectedType === 'String') {
    valid = (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === (expectedType = 'string');
  } else if (expectedType === 'Number') {
    valid = (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === (expectedType = 'number');
  } else if (expectedType === 'Boolean') {
    valid = (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === (expectedType = 'boolean');
  } else if (expectedType === 'Function') {
    valid = (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === (expectedType = 'function');
  } else if (expectedType === 'Object') {
    valid = isPlainObject(value);
  } else if (expectedType === 'Array') {
    valid = Array.isArray(value);
  } else {
    valid = value instanceof type;
  }
  return {
    valid: valid,
    expectedType: expectedType
  };
}

function getType(fn) {
  var match = fn && fn.toString().match(/^\s*function (\w+)/);
  return match && match[1];
}

function isType(type, fn) {
  if (!Array.isArray(fn)) {
    return getType(fn) === getType(type);
  }
  for (var i = 0, len = fn.length; i < len; i++) {
    if (getType(fn[i]) === getType(type)) {
      return true;
    }
  }

  return false;
}

function handleError(err, vm, info) {
  if (config.errorHandler) {
    config.errorHandler.call(null, err, vm, info);
  } else {
    if (process.env.NODE_ENV !== 'production') {
      warn("Error in " + info + ":", vm);
    }

    if (inBrowser && typeof console !== 'undefined') {
      console.error(err);
    } else {
      throw err;
    }
  }
}

var initProxy;

if (process.env.NODE_ENV !== 'production') {
  var allowedGlobals = makeMap('Infinity,undefined,NaN,isFinite,isNaN,' + 'parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,' + 'Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,' + 'require');

  var warnNonPresent = function warnNonPresent(target, key) {
    warn("Property or method \"" + key + "\" is not defined on the instance but " + "referenced during render. Make sure to declare reactive data " + "properties in the data option.", target);
  };

  var hasProxy = typeof Proxy !== 'undefined' && Proxy.toString().match(/native code/);

  if (hasProxy) {
    var isBuiltInModifier = makeMap('stop,prevent,self,ctrl,shift,alt,meta');
    config.keyCodes = new Proxy(config.keyCodes, {
      set: function set(target, key, value) {
        if (isBuiltInModifier(key)) {
          warn("Avoid overwriting built-in modifier in config.keyCodes: ." + key);
          return false;
        } else {
          target[key] = value;
          return true;
        }
      }
    });
  }

  var hasHandler = {
    has: function has(target, key) {
      var has = key in target;
      var isAllowed = allowedGlobals(key) || key.charAt(0) === '_';
      if (!has && !isAllowed) {
        warnNonPresent(target, key);
      }
      return has || !isAllowed;
    }
  };

  var getHandler = {
    get: function get(target, key) {
      if (typeof key === 'string' && !(key in target)) {
        warnNonPresent(target, key);
      }
      return target[key];
    }
  };

  initProxy = function initProxy(vm) {
    if (hasProxy) {
      var options = vm.$options;
      var handlers = options.render && options.render._withStripped ? getHandler : hasHandler;
      vm._renderProxy = new Proxy(vm, handlers);
    } else {
      vm._renderProxy = vm;
    }
  };
}

var mark;
var measure;

if (process.env.NODE_ENV !== 'production') {
  var perf = inBrowser && window.performance;

  if (perf && perf.mark && perf.measure && perf.clearMarks && perf.clearMeasures) {
    mark = function mark(tag) {
      return perf.mark(tag);
    };
    measure = function measure(name, startTag, endTag) {
      perf.measure(name, startTag, endTag);
      perf.clearMarks(startTag);
      perf.clearMarks(endTag);
      perf.clearMeasures(name);
    };
  }
}

var VNode = function VNode(tag, data, children, text, elm, context, componentOptions) {
  this.tag = tag;
  this.data = data;
  this.children = children;
  this.text = text;
  this.elm = elm;
  this.ns = undefined;
  this.context = context;
  this.functionalContext = undefined;
  this.key = data && data.key;
  this.componentOptions = componentOptions;
  this.componentInstance = undefined;
  this.parent = undefined;
  this.raw = false;
  this.isStatic = false;
  this.isRootInsert = true;
  this.isComment = false;
  this.isCloned = false;
  this.isOnce = false;
};

var prototypeAccessors = { child: {} };

prototypeAccessors.child.get = function () {
  return this.componentInstance;
};

Object.defineProperties(VNode.prototype, prototypeAccessors);

var createEmptyVNode = function createEmptyVNode() {
  var node = new VNode();
  node.text = '';
  node.isComment = true;
  return node;
};

function createTextVNode(val) {
  return new VNode(undefined, undefined, undefined, String(val));
}

function cloneVNode(vnode) {
  var cloned = new VNode(vnode.tag, vnode.data, vnode.children, vnode.text, vnode.elm, vnode.context, vnode.componentOptions);
  cloned.ns = vnode.ns;
  cloned.isStatic = vnode.isStatic;
  cloned.key = vnode.key;
  cloned.isCloned = true;
  return cloned;
}

function cloneVNodes(vnodes) {
  var len = vnodes.length;
  var res = new Array(len);
  for (var i = 0; i < len; i++) {
    res[i] = cloneVNode(vnodes[i]);
  }
  return res;
}

var normalizeEvent = cached(function (name) {
  var once$$1 = name.charAt(0) === '~';
  name = once$$1 ? name.slice(1) : name;
  var capture = name.charAt(0) === '!';
  name = capture ? name.slice(1) : name;
  return {
    name: name,
    once: once$$1,
    capture: capture
  };
});

function createFnInvoker(fns) {
  function invoker() {
    var arguments$1 = arguments;

    var fns = invoker.fns;
    if (Array.isArray(fns)) {
      for (var i = 0; i < fns.length; i++) {
        fns[i].apply(null, arguments$1);
      }
    } else {
      return fns.apply(null, arguments);
    }
  }
  invoker.fns = fns;
  return invoker;
}

function updateListeners(on, oldOn, add, remove$$1, vm) {
  var name, cur, old, event;
  for (name in on) {
    cur = on[name];
    old = oldOn[name];
    event = normalizeEvent(name);
    if (!cur) {
      process.env.NODE_ENV !== 'production' && warn("Invalid handler for event \"" + event.name + "\": got " + String(cur), vm);
    } else if (!old) {
      if (!cur.fns) {
        cur = on[name] = createFnInvoker(cur);
      }
      add(event.name, cur, event.once, event.capture);
    } else if (cur !== old) {
      old.fns = cur;
      on[name] = old;
    }
  }
  for (name in oldOn) {
    if (!on[name]) {
      event = normalizeEvent(name);
      remove$$1(event.name, oldOn[name], event.capture);
    }
  }
}

function mergeVNodeHook(def, hookKey, hook) {
  var invoker;
  var oldHook = def[hookKey];

  function wrappedHook() {
    hook.apply(this, arguments);

    remove(invoker.fns, wrappedHook);
  }

  if (!oldHook) {
    invoker = createFnInvoker([wrappedHook]);
  } else {
    if (oldHook.fns && oldHook.merged) {
      invoker = oldHook;
      invoker.fns.push(wrappedHook);
    } else {
      invoker = createFnInvoker([oldHook, wrappedHook]);
    }
  }

  invoker.merged = true;
  def[hookKey] = invoker;
}

function simpleNormalizeChildren(children) {
  for (var i = 0; i < children.length; i++) {
    if (Array.isArray(children[i])) {
      return Array.prototype.concat.apply([], children);
    }
  }
  return children;
}

function normalizeChildren(children) {
  return isPrimitive(children) ? [createTextVNode(children)] : Array.isArray(children) ? normalizeArrayChildren(children) : undefined;
}

function normalizeArrayChildren(children, nestedIndex) {
  var res = [];
  var i, c, last;
  for (i = 0; i < children.length; i++) {
    c = children[i];
    if (c == null || typeof c === 'boolean') {
      continue;
    }
    last = res[res.length - 1];

    if (Array.isArray(c)) {
      res.push.apply(res, normalizeArrayChildren(c, (nestedIndex || '') + "_" + i));
    } else if (isPrimitive(c)) {
      if (last && last.text) {
        last.text += String(c);
      } else if (c !== '') {
        res.push(createTextVNode(c));
      }
    } else {
      if (c.text && last && last.text) {
        res[res.length - 1] = createTextVNode(last.text + c.text);
      } else {
        if (c.tag && c.key == null && nestedIndex != null) {
          c.key = "__vlist" + nestedIndex + "_" + i + "__";
        }
        res.push(c);
      }
    }
  }
  return res;
}

function getFirstComponentChild(children) {
  return children && children.filter(function (c) {
    return c && c.componentOptions;
  })[0];
}

function initEvents(vm) {
  vm._events = Object.create(null);
  vm._hasHookEvent = false;

  var listeners = vm.$options._parentListeners;
  if (listeners) {
    updateComponentListeners(vm, listeners);
  }
}

var target;

function add(event, fn, once$$1) {
  if (once$$1) {
    target.$once(event, fn);
  } else {
    target.$on(event, fn);
  }
}

function remove$1(event, fn) {
  target.$off(event, fn);
}

function updateComponentListeners(vm, listeners, oldListeners) {
  target = vm;
  updateListeners(listeners, oldListeners || {}, add, remove$1, vm);
}

function eventsMixin(Vue) {
  var hookRE = /^hook:/;
  Vue.prototype.$on = function (event, fn) {
    var this$1 = this;

    var vm = this;
    if (Array.isArray(event)) {
      for (var i = 0, l = event.length; i < l; i++) {
        this$1.$on(event[i], fn);
      }
    } else {
      (vm._events[event] || (vm._events[event] = [])).push(fn);

      if (hookRE.test(event)) {
        vm._hasHookEvent = true;
      }
    }
    return vm;
  };

  Vue.prototype.$once = function (event, fn) {
    var vm = this;
    function on() {
      vm.$off(event, on);
      fn.apply(vm, arguments);
    }
    on.fn = fn;
    vm.$on(event, on);
    return vm;
  };

  Vue.prototype.$off = function (event, fn) {
    var this$1 = this;

    var vm = this;

    if (!arguments.length) {
      vm._events = Object.create(null);
      return vm;
    }

    if (Array.isArray(event)) {
      for (var i$1 = 0, l = event.length; i$1 < l; i$1++) {
        this$1.$off(event[i$1], fn);
      }
      return vm;
    }

    var cbs = vm._events[event];
    if (!cbs) {
      return vm;
    }
    if (arguments.length === 1) {
      vm._events[event] = null;
      return vm;
    }

    var cb;
    var i = cbs.length;
    while (i--) {
      cb = cbs[i];
      if (cb === fn || cb.fn === fn) {
        cbs.splice(i, 1);
        break;
      }
    }
    return vm;
  };

  Vue.prototype.$emit = function (event) {
    var vm = this;
    if (process.env.NODE_ENV !== 'production') {
      var lowerCaseEvent = event.toLowerCase();
      if (lowerCaseEvent !== event && vm._events[lowerCaseEvent]) {
        tip("Event \"" + lowerCaseEvent + "\" is emitted in component " + formatComponentName(vm) + " but the handler is registered for \"" + event + "\". " + "Note that HTML attributes are case-insensitive and you cannot use " + "v-on to listen to camelCase events when using in-DOM templates. " + "You should probably use \"" + hyphenate(event) + "\" instead of \"" + event + "\".");
      }
    }
    var cbs = vm._events[event];
    if (cbs) {
      cbs = cbs.length > 1 ? toArray(cbs) : cbs;
      var args = toArray(arguments, 1);
      for (var i = 0, l = cbs.length; i < l; i++) {
        cbs[i].apply(vm, args);
      }
    }
    return vm;
  };
}

function resolveSlots(children, context) {
  var slots = {};
  if (!children) {
    return slots;
  }
  var defaultSlot = [];
  var name, child;
  for (var i = 0, l = children.length; i < l; i++) {
    child = children[i];

    if ((child.context === context || child.functionalContext === context) && child.data && (name = child.data.slot)) {
      var slot = slots[name] || (slots[name] = []);
      if (child.tag === 'template') {
        slot.push.apply(slot, child.children);
      } else {
        slot.push(child);
      }
    } else {
      defaultSlot.push(child);
    }
  }

  if (!defaultSlot.every(isWhitespace)) {
    slots.default = defaultSlot;
  }
  return slots;
}

function isWhitespace(node) {
  return node.isComment || node.text === ' ';
}

function resolveScopedSlots(fns) {
  var res = {};
  for (var i = 0; i < fns.length; i++) {
    res[fns[i][0]] = fns[i][1];
  }
  return res;
}

var activeInstance = null;

function initLifecycle(vm) {
  var options = vm.$options;

  var parent = options.parent;
  if (parent && !options.abstract) {
    while (parent.$options.abstract && parent.$parent) {
      parent = parent.$parent;
    }
    parent.$children.push(vm);
  }

  vm.$parent = parent;
  vm.$root = parent ? parent.$root : vm;

  vm.$children = [];
  vm.$refs = {};

  vm._watcher = null;
  vm._inactive = null;
  vm._directInactive = false;
  vm._isMounted = false;
  vm._isDestroyed = false;
  vm._isBeingDestroyed = false;
}

function lifecycleMixin(Vue) {
  Vue.prototype._update = function (vnode, hydrating) {
    var vm = this;
    if (vm._isMounted) {
      callHook(vm, 'beforeUpdate');
    }
    var prevEl = vm.$el;
    var prevVnode = vm._vnode;
    var prevActiveInstance = activeInstance;
    activeInstance = vm;
    vm._vnode = vnode;

    if (!prevVnode) {
      vm.$el = vm.__patch__(vm.$el, vnode, hydrating, false, vm.$options._parentElm, vm.$options._refElm);
    } else {
      vm.$el = vm.__patch__(prevVnode, vnode);
    }
    activeInstance = prevActiveInstance;

    if (prevEl) {
      prevEl.__vue__ = null;
    }
    if (vm.$el) {
      vm.$el.__vue__ = vm;
    }

    if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {
      vm.$parent.$el = vm.$el;
    }
  };

  Vue.prototype.$forceUpdate = function () {
    var vm = this;
    if (vm._watcher) {
      vm._watcher.update();
    }
  };

  Vue.prototype.$destroy = function () {
    var vm = this;
    if (vm._isBeingDestroyed) {
      return;
    }
    callHook(vm, 'beforeDestroy');
    vm._isBeingDestroyed = true;

    var parent = vm.$parent;
    if (parent && !parent._isBeingDestroyed && !vm.$options.abstract) {
      remove(parent.$children, vm);
    }

    if (vm._watcher) {
      vm._watcher.teardown();
    }
    var i = vm._watchers.length;
    while (i--) {
      vm._watchers[i].teardown();
    }

    if (vm._data.__ob__) {
      vm._data.__ob__.vmCount--;
    }

    vm._isDestroyed = true;

    vm.__patch__(vm._vnode, null);

    callHook(vm, 'destroyed');

    vm.$off();

    if (vm.$el) {
      vm.$el.__vue__ = null;
    }

    vm.$options._parentElm = vm.$options._refElm = null;
  };
}

function mountComponent(vm, el, hydrating) {
  vm.$el = el;
  if (!vm.$options.render) {
    vm.$options.render = createEmptyVNode;
    if (process.env.NODE_ENV !== 'production') {
      if (vm.$options.template && vm.$options.template.charAt(0) !== '#' || vm.$options.el || el) {
        warn('You are using the runtime-only build of Vue where the template ' + 'compiler is not available. Either pre-compile the templates into ' + 'render functions, or use the compiler-included build.', vm);
      } else {
        warn('Failed to mount component: template or render function not defined.', vm);
      }
    }
  }
  callHook(vm, 'beforeMount');

  var updateComponent;

  if (process.env.NODE_ENV !== 'production' && config.performance && mark) {
    updateComponent = function updateComponent() {
      var name = vm._name;
      var id = vm._uid;
      var startTag = "vue-perf-start:" + id;
      var endTag = "vue-perf-end:" + id;

      mark(startTag);
      var vnode = vm._render();
      mark(endTag);
      measure(name + " render", startTag, endTag);

      mark(startTag);
      vm._update(vnode, hydrating);
      mark(endTag);
      measure(name + " patch", startTag, endTag);
    };
  } else {
    updateComponent = function updateComponent() {
      vm._update(vm._render(), hydrating);
    };
  }

  vm._watcher = new Watcher(vm, updateComponent, noop);
  hydrating = false;

  if (vm.$vnode == null) {
    vm._isMounted = true;
    callHook(vm, 'mounted');
  }
  return vm;
}

function updateChildComponent(vm, propsData, listeners, parentVnode, renderChildren) {
  var hasChildren = !!(renderChildren || vm.$options._renderChildren || parentVnode.data.scopedSlots || vm.$scopedSlots !== emptyObject);

  vm.$options._parentVnode = parentVnode;
  vm.$vnode = parentVnode;
  if (vm._vnode) {
    vm._vnode.parent = parentVnode;
  }
  vm.$options._renderChildren = renderChildren;

  if (propsData && vm.$options.props) {
    observerState.shouldConvert = false;
    if (process.env.NODE_ENV !== 'production') {
      observerState.isSettingProps = true;
    }
    var props = vm._props;
    var propKeys = vm.$options._propKeys || [];
    for (var i = 0; i < propKeys.length; i++) {
      var key = propKeys[i];
      props[key] = validateProp(key, vm.$options.props, propsData, vm);
    }
    observerState.shouldConvert = true;
    if (process.env.NODE_ENV !== 'production') {
      observerState.isSettingProps = false;
    }

    vm.$options.propsData = propsData;
  }

  if (listeners) {
    var oldListeners = vm.$options._parentListeners;
    vm.$options._parentListeners = listeners;
    updateComponentListeners(vm, listeners, oldListeners);
  }

  if (hasChildren) {
    vm.$slots = resolveSlots(renderChildren, parentVnode.context);
    vm.$forceUpdate();
  }
}

function isInInactiveTree(vm) {
  while (vm && (vm = vm.$parent)) {
    if (vm._inactive) {
      return true;
    }
  }
  return false;
}

function activateChildComponent(vm, direct) {
  if (direct) {
    vm._directInactive = false;
    if (isInInactiveTree(vm)) {
      return;
    }
  } else if (vm._directInactive) {
    return;
  }
  if (vm._inactive || vm._inactive == null) {
    vm._inactive = false;
    for (var i = 0; i < vm.$children.length; i++) {
      activateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'activated');
  }
}

function deactivateChildComponent(vm, direct) {
  if (direct) {
    vm._directInactive = true;
    if (isInInactiveTree(vm)) {
      return;
    }
  }
  if (!vm._inactive) {
    vm._inactive = true;
    for (var i = 0; i < vm.$children.length; i++) {
      deactivateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'deactivated');
  }
}

function callHook(vm, hook) {
  var handlers = vm.$options[hook];
  if (handlers) {
    for (var i = 0, j = handlers.length; i < j; i++) {
      try {
        handlers[i].call(vm);
      } catch (e) {
        handleError(e, vm, hook + " hook");
      }
    }
  }
  if (vm._hasHookEvent) {
    vm.$emit('hook:' + hook);
  }
}

var queue = [];
var has = {};
var circular = {};
var waiting = false;
var flushing = false;
var index = 0;

function resetSchedulerState() {
  queue.length = 0;
  has = {};
  if (process.env.NODE_ENV !== 'production') {
    circular = {};
  }
  waiting = flushing = false;
}

function flushSchedulerQueue() {
  flushing = true;
  var watcher, id, vm;

  queue.sort(function (a, b) {
    return a.id - b.id;
  });

  for (index = 0; index < queue.length; index++) {
    watcher = queue[index];
    id = watcher.id;
    has[id] = null;
    watcher.run();

    if (process.env.NODE_ENV !== 'production' && has[id] != null) {
      circular[id] = (circular[id] || 0) + 1;
      if (circular[id] > config._maxUpdateCount) {
        warn('You may have an infinite update loop ' + (watcher.user ? "in watcher with expression \"" + watcher.expression + "\"" : "in a component render function."), watcher.vm);
        break;
      }
    }
  }

  var oldQueue = queue.slice();
  resetSchedulerState();

  index = oldQueue.length;
  while (index--) {
    watcher = oldQueue[index];
    vm = watcher.vm;
    if (vm._watcher === watcher && vm._isMounted) {
      callHook(vm, 'updated');
    }
  }

  if (devtools && config.devtools) {
    devtools.emit('flush');
  }
}

function queueWatcher(watcher) {
  var id = watcher.id;
  if (has[id] == null) {
    has[id] = true;
    if (!flushing) {
      queue.push(watcher);
    } else {
      var i = queue.length - 1;
      while (i >= 0 && queue[i].id > watcher.id) {
        i--;
      }
      queue.splice(Math.max(i, index) + 1, 0, watcher);
    }

    if (!waiting) {
      waiting = true;
      nextTick(flushSchedulerQueue);
    }
  }
}

var uid$2 = 0;

var Watcher = function Watcher(vm, expOrFn, cb, options) {
  this.vm = vm;
  vm._watchers.push(this);

  if (options) {
    this.deep = !!options.deep;
    this.user = !!options.user;
    this.lazy = !!options.lazy;
    this.sync = !!options.sync;
  } else {
    this.deep = this.user = this.lazy = this.sync = false;
  }
  this.cb = cb;
  this.id = ++uid$2;
  this.active = true;
  this.dirty = this.lazy;
  this.deps = [];
  this.newDeps = [];
  this.depIds = new _Set();
  this.newDepIds = new _Set();
  this.expression = process.env.NODE_ENV !== 'production' ? expOrFn.toString() : '';

  if (typeof expOrFn === 'function') {
    this.getter = expOrFn;
  } else {
    this.getter = parsePath(expOrFn);
    if (!this.getter) {
      this.getter = function () {};
      process.env.NODE_ENV !== 'production' && warn("Failed watching path: \"" + expOrFn + "\" " + 'Watcher only accepts simple dot-delimited paths. ' + 'For full control, use a function instead.', vm);
    }
  }
  this.value = this.lazy ? undefined : this.get();
};

Watcher.prototype.get = function get() {
  pushTarget(this);
  var value;
  var vm = this.vm;
  if (this.user) {
    try {
      value = this.getter.call(vm, vm);
    } catch (e) {
      handleError(e, vm, "getter for watcher \"" + this.expression + "\"");
    }
  } else {
    value = this.getter.call(vm, vm);
  }

  if (this.deep) {
    traverse(value);
  }
  popTarget();
  this.cleanupDeps();
  return value;
};

Watcher.prototype.addDep = function addDep(dep) {
  var id = dep.id;
  if (!this.newDepIds.has(id)) {
    this.newDepIds.add(id);
    this.newDeps.push(dep);
    if (!this.depIds.has(id)) {
      dep.addSub(this);
    }
  }
};

Watcher.prototype.cleanupDeps = function cleanupDeps() {
  var this$1 = this;

  var i = this.deps.length;
  while (i--) {
    var dep = this$1.deps[i];
    if (!this$1.newDepIds.has(dep.id)) {
      dep.removeSub(this$1);
    }
  }
  var tmp = this.depIds;
  this.depIds = this.newDepIds;
  this.newDepIds = tmp;
  this.newDepIds.clear();
  tmp = this.deps;
  this.deps = this.newDeps;
  this.newDeps = tmp;
  this.newDeps.length = 0;
};

Watcher.prototype.update = function update() {
  if (this.lazy) {
    this.dirty = true;
  } else if (this.sync) {
    this.run();
  } else {
    queueWatcher(this);
  }
};

Watcher.prototype.run = function run() {
  if (this.active) {
    var value = this.get();
    if (value !== this.value || isObject(value) || this.deep) {
      var oldValue = this.value;
      this.value = value;
      if (this.user) {
        try {
          this.cb.call(this.vm, value, oldValue);
        } catch (e) {
          handleError(e, this.vm, "callback for watcher \"" + this.expression + "\"");
        }
      } else {
        this.cb.call(this.vm, value, oldValue);
      }
    }
  }
};

Watcher.prototype.evaluate = function evaluate() {
  this.value = this.get();
  this.dirty = false;
};

Watcher.prototype.depend = function depend() {
  var this$1 = this;

  var i = this.deps.length;
  while (i--) {
    this$1.deps[i].depend();
  }
};

Watcher.prototype.teardown = function teardown() {
  var this$1 = this;

  if (this.active) {
    if (!this.vm._isBeingDestroyed) {
      remove(this.vm._watchers, this);
    }
    var i = this.deps.length;
    while (i--) {
      this$1.deps[i].removeSub(this$1);
    }
    this.active = false;
  }
};

var seenObjects = new _Set();
function traverse(val) {
  seenObjects.clear();
  _traverse(val, seenObjects);
}

function _traverse(val, seen) {
  var i, keys;
  var isA = Array.isArray(val);
  if (!isA && !isObject(val) || !Object.isExtensible(val)) {
    return;
  }
  if (val.__ob__) {
    var depId = val.__ob__.dep.id;
    if (seen.has(depId)) {
      return;
    }
    seen.add(depId);
  }
  if (isA) {
    i = val.length;
    while (i--) {
      _traverse(val[i], seen);
    }
  } else {
    keys = Object.keys(val);
    i = keys.length;
    while (i--) {
      _traverse(val[keys[i]], seen);
    }
  }
}

var sharedPropertyDefinition = {
  enumerable: true,
  configurable: true,
  get: noop,
  set: noop
};

function proxy(target, sourceKey, key) {
  sharedPropertyDefinition.get = function proxyGetter() {
    return this[sourceKey][key];
  };
  sharedPropertyDefinition.set = function proxySetter(val) {
    this[sourceKey][key] = val;
  };
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function initState(vm) {
  vm._watchers = [];
  var opts = vm.$options;
  if (opts.props) {
    initProps(vm, opts.props);
  }
  if (opts.methods) {
    initMethods(vm, opts.methods);
  }
  if (opts.data) {
    initData(vm);
  } else {
    observe(vm._data = {}, true);
  }
  if (opts.computed) {
    initComputed(vm, opts.computed);
  }
  if (opts.watch) {
    initWatch(vm, opts.watch);
  }
}

var isReservedProp = { key: 1, ref: 1, slot: 1 };

function initProps(vm, propsOptions) {
  var propsData = vm.$options.propsData || {};
  var props = vm._props = {};

  var keys = vm.$options._propKeys = [];
  var isRoot = !vm.$parent;

  observerState.shouldConvert = isRoot;
  var loop = function loop(key) {
    keys.push(key);
    var value = validateProp(key, propsOptions, propsData, vm);

    if (process.env.NODE_ENV !== 'production') {
      if (isReservedProp[key]) {
        warn("\"" + key + "\" is a reserved attribute and cannot be used as component prop.", vm);
      }
      defineReactive$$1(props, key, value, function () {
        if (vm.$parent && !observerState.isSettingProps) {
          warn("Avoid mutating a prop directly since the value will be " + "overwritten whenever the parent component re-renders. " + "Instead, use a data or computed property based on the prop's " + "value. Prop being mutated: \"" + key + "\"", vm);
        }
      });
    } else {
      defineReactive$$1(props, key, value);
    }

    if (!(key in vm)) {
      proxy(vm, "_props", key);
    }
  };

  for (var key in propsOptions) {
    loop(key);
  }observerState.shouldConvert = true;
}

function initData(vm) {
  var data = vm.$options.data;
  data = vm._data = typeof data === 'function' ? getData(data, vm) : data || {};
  if (!isPlainObject(data)) {
    data = {};
    process.env.NODE_ENV !== 'production' && warn('data functions should return an object:\n' + 'https://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function', vm);
  }

  var keys = Object.keys(data);
  var props = vm.$options.props;
  var i = keys.length;
  while (i--) {
    if (props && hasOwn(props, keys[i])) {
      process.env.NODE_ENV !== 'production' && warn("The data property \"" + keys[i] + "\" is already declared as a prop. " + "Use prop default value instead.", vm);
    } else if (!isReserved(keys[i])) {
      proxy(vm, "_data", keys[i]);
    }
  }

  observe(data, true);
}

function getData(data, vm) {
  try {
    return data.call(vm);
  } catch (e) {
    handleError(e, vm, "data()");
    return {};
  }
}

var computedWatcherOptions = { lazy: true };

function initComputed(vm, computed) {
  var watchers = vm._computedWatchers = Object.create(null);

  for (var key in computed) {
    var userDef = computed[key];
    var getter = typeof userDef === 'function' ? userDef : userDef.get;
    if (process.env.NODE_ENV !== 'production') {
      if (getter === undefined) {
        warn("No getter function has been defined for computed property \"" + key + "\".", vm);
        getter = noop;
      }
    }

    watchers[key] = new Watcher(vm, getter, noop, computedWatcherOptions);

    if (!(key in vm)) {
      defineComputed(vm, key, userDef);
    }
  }
}

function defineComputed(target, key, userDef) {
  if (typeof userDef === 'function') {
    sharedPropertyDefinition.get = createComputedGetter(key);
    sharedPropertyDefinition.set = noop;
  } else {
    sharedPropertyDefinition.get = userDef.get ? userDef.cache !== false ? createComputedGetter(key) : userDef.get : noop;
    sharedPropertyDefinition.set = userDef.set ? userDef.set : noop;
  }
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function createComputedGetter(key) {
  return function computedGetter() {
    var watcher = this._computedWatchers && this._computedWatchers[key];
    if (watcher) {
      if (watcher.dirty) {
        watcher.evaluate();
      }
      if (Dep.target) {
        watcher.depend();
      }
      return watcher.value;
    }
  };
}

function initMethods(vm, methods) {
  var props = vm.$options.props;
  for (var key in methods) {
    vm[key] = methods[key] == null ? noop : bind(methods[key], vm);
    if (process.env.NODE_ENV !== 'production') {
      if (methods[key] == null) {
        warn("method \"" + key + "\" has an undefined value in the component definition. " + "Did you reference the function correctly?", vm);
      }
      if (props && hasOwn(props, key)) {
        warn("method \"" + key + "\" has already been defined as a prop.", vm);
      }
    }
  }
}

function initWatch(vm, watch) {
  for (var key in watch) {
    var handler = watch[key];
    if (Array.isArray(handler)) {
      for (var i = 0; i < handler.length; i++) {
        createWatcher(vm, key, handler[i]);
      }
    } else {
      createWatcher(vm, key, handler);
    }
  }
}

function createWatcher(vm, key, handler) {
  var options;
  if (isPlainObject(handler)) {
    options = handler;
    handler = handler.handler;
  }
  if (typeof handler === 'string') {
    handler = vm[handler];
  }
  vm.$watch(key, handler, options);
}

function stateMixin(Vue) {
  var dataDef = {};
  dataDef.get = function () {
    return this._data;
  };
  var propsDef = {};
  propsDef.get = function () {
    return this._props;
  };
  if (process.env.NODE_ENV !== 'production') {
    dataDef.set = function (newData) {
      warn('Avoid replacing instance root $data. ' + 'Use nested data properties instead.', this);
    };
    propsDef.set = function () {
      warn("$props is readonly.", this);
    };
  }
  Object.defineProperty(Vue.prototype, '$data', dataDef);
  Object.defineProperty(Vue.prototype, '$props', propsDef);

  Vue.prototype.$set = set;
  Vue.prototype.$delete = del;

  Vue.prototype.$watch = function (expOrFn, cb, options) {
    var vm = this;
    options = options || {};
    options.user = true;
    var watcher = new Watcher(vm, expOrFn, cb, options);
    if (options.immediate) {
      cb.call(vm, watcher.value);
    }
    return function unwatchFn() {
      watcher.teardown();
    };
  };
}

var componentVNodeHooks = {
  init: function init(vnode, hydrating, parentElm, refElm) {
    if (!vnode.componentInstance || vnode.componentInstance._isDestroyed) {
      var child = vnode.componentInstance = createComponentInstanceForVnode(vnode, activeInstance, parentElm, refElm);
      child.$mount(hydrating ? vnode.elm : undefined, hydrating);
    } else if (vnode.data.keepAlive) {
      var mountedNode = vnode;
      componentVNodeHooks.prepatch(mountedNode, mountedNode);
    }
  },

  prepatch: function prepatch(oldVnode, vnode) {
    var options = vnode.componentOptions;
    var child = vnode.componentInstance = oldVnode.componentInstance;
    updateChildComponent(child, options.propsData, options.listeners, vnode, options.children);
  },

  insert: function insert(vnode) {
    if (!vnode.componentInstance._isMounted) {
      vnode.componentInstance._isMounted = true;
      callHook(vnode.componentInstance, 'mounted');
    }
    if (vnode.data.keepAlive) {
      activateChildComponent(vnode.componentInstance, true);
    }
  },

  destroy: function destroy(vnode) {
    if (!vnode.componentInstance._isDestroyed) {
      if (!vnode.data.keepAlive) {
        vnode.componentInstance.$destroy();
      } else {
        deactivateChildComponent(vnode.componentInstance, true);
      }
    }
  }
};

var hooksToMerge = Object.keys(componentVNodeHooks);

function createComponent(Ctor, data, context, children, tag) {
  if (!Ctor) {
    return;
  }

  var baseCtor = context.$options._base;
  if (isObject(Ctor)) {
    Ctor = baseCtor.extend(Ctor);
  }

  if (typeof Ctor !== 'function') {
    if (process.env.NODE_ENV !== 'production') {
      warn("Invalid Component definition: " + String(Ctor), context);
    }
    return;
  }

  if (!Ctor.cid) {
    if (Ctor.resolved) {
      Ctor = Ctor.resolved;
    } else {
      Ctor = resolveAsyncComponent(Ctor, baseCtor, function () {
        context.$forceUpdate();
      });
      if (!Ctor) {
        return;
      }
    }
  }

  resolveConstructorOptions(Ctor);

  data = data || {};

  if (data.model) {
    transformModel(Ctor.options, data);
  }

  var propsData = extractProps(data, Ctor, tag);

  if (Ctor.options.functional) {
    return createFunctionalComponent(Ctor, propsData, data, context, children);
  }

  var listeners = data.on;

  data.on = data.nativeOn;

  if (Ctor.options.abstract) {
    data = {};
  }

  mergeHooks(data);

  var name = Ctor.options.name || tag;
  var vnode = new VNode("vue-component-" + Ctor.cid + (name ? "-" + name : ''), data, undefined, undefined, undefined, context, { Ctor: Ctor, propsData: propsData, listeners: listeners, tag: tag, children: children });
  return vnode;
}

function createFunctionalComponent(Ctor, propsData, data, context, children) {
  var props = {};
  var propOptions = Ctor.options.props;
  if (propOptions) {
    for (var key in propOptions) {
      props[key] = validateProp(key, propOptions, propsData);
    }
  }

  var _context = Object.create(context);
  var h = function h(a, b, c, d) {
    return createElement(_context, a, b, c, d, true);
  };
  var vnode = Ctor.options.render.call(null, h, {
    props: props,
    data: data,
    parent: context,
    children: children,
    slots: function slots() {
      return resolveSlots(children, context);
    }
  });
  if (vnode instanceof VNode) {
    vnode.functionalContext = context;
    if (data.slot) {
      (vnode.data || (vnode.data = {})).slot = data.slot;
    }
  }
  return vnode;
}

function createComponentInstanceForVnode(vnode, parent, parentElm, refElm) {
  var vnodeComponentOptions = vnode.componentOptions;
  var options = {
    _isComponent: true,
    parent: parent,
    propsData: vnodeComponentOptions.propsData,
    _componentTag: vnodeComponentOptions.tag,
    _parentVnode: vnode,
    _parentListeners: vnodeComponentOptions.listeners,
    _renderChildren: vnodeComponentOptions.children,
    _parentElm: parentElm || null,
    _refElm: refElm || null
  };

  var inlineTemplate = vnode.data.inlineTemplate;
  if (inlineTemplate) {
    options.render = inlineTemplate.render;
    options.staticRenderFns = inlineTemplate.staticRenderFns;
  }
  return new vnodeComponentOptions.Ctor(options);
}

function resolveAsyncComponent(factory, baseCtor, cb) {
  if (factory.requested) {
    factory.pendingCallbacks.push(cb);
  } else {
    factory.requested = true;
    var cbs = factory.pendingCallbacks = [cb];
    var sync = true;

    var resolve = function resolve(res) {
      if (isObject(res)) {
        res = baseCtor.extend(res);
      }

      factory.resolved = res;

      if (!sync) {
        for (var i = 0, l = cbs.length; i < l; i++) {
          cbs[i](res);
        }
      }
    };

    var reject = function reject(reason) {
      process.env.NODE_ENV !== 'production' && warn("Failed to resolve async component: " + String(factory) + (reason ? "\nReason: " + reason : ''));
    };

    var res = factory(resolve, reject);

    if (res && typeof res.then === 'function' && !factory.resolved) {
      res.then(resolve, reject);
    }

    sync = false;

    return factory.resolved;
  }
}

function extractProps(data, Ctor, tag) {
  var propOptions = Ctor.options.props;
  if (!propOptions) {
    return;
  }
  var res = {};
  var attrs = data.attrs;
  var props = data.props;
  var domProps = data.domProps;
  if (attrs || props || domProps) {
    for (var key in propOptions) {
      var altKey = hyphenate(key);
      if (process.env.NODE_ENV !== 'production') {
        var keyInLowerCase = key.toLowerCase();
        if (key !== keyInLowerCase && attrs && attrs.hasOwnProperty(keyInLowerCase)) {
          tip("Prop \"" + keyInLowerCase + "\" is passed to component " + formatComponentName(tag || Ctor) + ", but the declared prop name is" + " \"" + key + "\". " + "Note that HTML attributes are case-insensitive and camelCased " + "props need to use their kebab-case equivalents when using in-DOM " + "templates. You should probably use \"" + altKey + "\" instead of \"" + key + "\".");
        }
      }
      checkProp(res, props, key, altKey, true) || checkProp(res, attrs, key, altKey) || checkProp(res, domProps, key, altKey);
    }
  }
  return res;
}

function checkProp(res, hash, key, altKey, preserve) {
  if (hash) {
    if (hasOwn(hash, key)) {
      res[key] = hash[key];
      if (!preserve) {
        delete hash[key];
      }
      return true;
    } else if (hasOwn(hash, altKey)) {
      res[key] = hash[altKey];
      if (!preserve) {
        delete hash[altKey];
      }
      return true;
    }
  }
  return false;
}

function mergeHooks(data) {
  if (!data.hook) {
    data.hook = {};
  }
  for (var i = 0; i < hooksToMerge.length; i++) {
    var key = hooksToMerge[i];
    var fromParent = data.hook[key];
    var ours = componentVNodeHooks[key];
    data.hook[key] = fromParent ? mergeHook$1(ours, fromParent) : ours;
  }
}

function mergeHook$1(one, two) {
  return function (a, b, c, d) {
    one(a, b, c, d);
    two(a, b, c, d);
  };
}

function transformModel(options, data) {
  var prop = options.model && options.model.prop || 'value';
  var event = options.model && options.model.event || 'input';(data.props || (data.props = {}))[prop] = data.model.value;
  var on = data.on || (data.on = {});
  if (on[event]) {
    on[event] = [data.model.callback].concat(on[event]);
  } else {
    on[event] = data.model.callback;
  }
}

var SIMPLE_NORMALIZE = 1;
var ALWAYS_NORMALIZE = 2;

function createElement(context, tag, data, children, normalizationType, alwaysNormalize) {
  if (Array.isArray(data) || isPrimitive(data)) {
    normalizationType = children;
    children = data;
    data = undefined;
  }
  if (alwaysNormalize) {
    normalizationType = ALWAYS_NORMALIZE;
  }
  return _createElement(context, tag, data, children, normalizationType);
}

function _createElement(context, tag, data, children, normalizationType) {
  if (data && data.__ob__) {
    process.env.NODE_ENV !== 'production' && warn("Avoid using observed data object as vnode data: " + JSON.stringify(data) + "\n" + 'Always create fresh vnode data objects in each render!', context);
    return createEmptyVNode();
  }
  if (!tag) {
    return createEmptyVNode();
  }

  if (Array.isArray(children) && typeof children[0] === 'function') {
    data = data || {};
    data.scopedSlots = { default: children[0] };
    children.length = 0;
  }
  if (normalizationType === ALWAYS_NORMALIZE) {
    children = normalizeChildren(children);
  } else if (normalizationType === SIMPLE_NORMALIZE) {
    children = simpleNormalizeChildren(children);
  }
  var vnode, ns;
  if (typeof tag === 'string') {
    var Ctor;
    ns = config.getTagNamespace(tag);
    if (config.isReservedTag(tag)) {
      vnode = new VNode(config.parsePlatformTagName(tag), data, children, undefined, undefined, context);
    } else if (Ctor = resolveAsset(context.$options, 'components', tag)) {
      vnode = createComponent(Ctor, data, context, children, tag);
    } else {
      vnode = new VNode(tag, data, children, undefined, undefined, context);
    }
  } else {
    vnode = createComponent(tag, data, context, children);
  }
  if (vnode) {
    if (ns) {
      applyNS(vnode, ns);
    }
    return vnode;
  } else {
    return createEmptyVNode();
  }
}

function applyNS(vnode, ns) {
  vnode.ns = ns;
  if (vnode.tag === 'foreignObject') {
    return;
  }
  if (vnode.children) {
    for (var i = 0, l = vnode.children.length; i < l; i++) {
      var child = vnode.children[i];
      if (child.tag && !child.ns) {
        applyNS(child, ns);
      }
    }
  }
}

function renderList(val, render) {
  var ret, i, l, keys, key;
  if (Array.isArray(val) || typeof val === 'string') {
    ret = new Array(val.length);
    for (i = 0, l = val.length; i < l; i++) {
      ret[i] = render(val[i], i);
    }
  } else if (typeof val === 'number') {
    ret = new Array(val);
    for (i = 0; i < val; i++) {
      ret[i] = render(i + 1, i);
    }
  } else if (isObject(val)) {
    keys = Object.keys(val);
    ret = new Array(keys.length);
    for (i = 0, l = keys.length; i < l; i++) {
      key = keys[i];
      ret[i] = render(val[key], key, i);
    }
  }
  return ret;
}

function renderSlot(name, fallback, props, bindObject) {
  var scopedSlotFn = this.$scopedSlots[name];
  if (scopedSlotFn) {
    props = props || {};
    if (bindObject) {
      extend(props, bindObject);
    }
    return scopedSlotFn(props) || fallback;
  } else {
    var slotNodes = this.$slots[name];

    if (slotNodes && process.env.NODE_ENV !== 'production') {
      slotNodes._rendered && warn("Duplicate presence of slot \"" + name + "\" found in the same render tree " + "- this will likely cause render errors.", this);
      slotNodes._rendered = true;
    }
    return slotNodes || fallback;
  }
}

function resolveFilter(id) {
  return resolveAsset(this.$options, 'filters', id, true) || identity;
}

function checkKeyCodes(eventKeyCode, key, builtInAlias) {
  var keyCodes = config.keyCodes[key] || builtInAlias;
  if (Array.isArray(keyCodes)) {
    return keyCodes.indexOf(eventKeyCode) === -1;
  } else {
    return keyCodes !== eventKeyCode;
  }
}

function bindObjectProps(data, tag, value, asProp) {
  if (value) {
    if (!isObject(value)) {
      process.env.NODE_ENV !== 'production' && warn('v-bind without argument expects an Object or Array value', this);
    } else {
      if (Array.isArray(value)) {
        value = toObject(value);
      }
      var hash;
      for (var key in value) {
        if (key === 'class' || key === 'style') {
          hash = data;
        } else {
          var type = data.attrs && data.attrs.type;
          hash = asProp || config.mustUseProp(tag, type, key) ? data.domProps || (data.domProps = {}) : data.attrs || (data.attrs = {});
        }
        if (!(key in hash)) {
          hash[key] = value[key];
        }
      }
    }
  }
  return data;
}

function renderStatic(index, isInFor) {
  var tree = this._staticTrees[index];

  if (tree && !isInFor) {
    return Array.isArray(tree) ? cloneVNodes(tree) : cloneVNode(tree);
  }

  tree = this._staticTrees[index] = this.$options.staticRenderFns[index].call(this._renderProxy);
  markStatic(tree, "__static__" + index, false);
  return tree;
}

function markOnce(tree, index, key) {
  markStatic(tree, "__once__" + index + (key ? "_" + key : ""), true);
  return tree;
}

function markStatic(tree, key, isOnce) {
  if (Array.isArray(tree)) {
    for (var i = 0; i < tree.length; i++) {
      if (tree[i] && typeof tree[i] !== 'string') {
        markStaticNode(tree[i], key + "_" + i, isOnce);
      }
    }
  } else {
    markStaticNode(tree, key, isOnce);
  }
}

function markStaticNode(node, key, isOnce) {
  node.isStatic = true;
  node.key = key;
  node.isOnce = isOnce;
}

function initRender(vm) {
  vm.$vnode = null;
  vm._vnode = null;
  vm._staticTrees = null;
  var parentVnode = vm.$options._parentVnode;
  var renderContext = parentVnode && parentVnode.context;
  vm.$slots = resolveSlots(vm.$options._renderChildren, renderContext);
  vm.$scopedSlots = emptyObject;

  vm._c = function (a, b, c, d) {
    return createElement(vm, a, b, c, d, false);
  };

  vm.$createElement = function (a, b, c, d) {
    return createElement(vm, a, b, c, d, true);
  };
}

function renderMixin(Vue) {
  Vue.prototype.$nextTick = function (fn) {
    return nextTick(fn, this);
  };

  Vue.prototype._render = function () {
    var vm = this;
    var ref = vm.$options;
    var render = ref.render;
    var staticRenderFns = ref.staticRenderFns;
    var _parentVnode = ref._parentVnode;

    if (vm._isMounted) {
      for (var key in vm.$slots) {
        vm.$slots[key] = cloneVNodes(vm.$slots[key]);
      }
    }

    vm.$scopedSlots = _parentVnode && _parentVnode.data.scopedSlots || emptyObject;

    if (staticRenderFns && !vm._staticTrees) {
      vm._staticTrees = [];
    }

    vm.$vnode = _parentVnode;

    var vnode;
    try {
      vnode = render.call(vm._renderProxy, vm.$createElement);
    } catch (e) {
      handleError(e, vm, "render function");

      if (process.env.NODE_ENV !== 'production') {
        vnode = vm.$options.renderError ? vm.$options.renderError.call(vm._renderProxy, vm.$createElement, e) : vm._vnode;
      } else {
        vnode = vm._vnode;
      }
    }

    if (!(vnode instanceof VNode)) {
      if (process.env.NODE_ENV !== 'production' && Array.isArray(vnode)) {
        warn('Multiple root nodes returned from render function. Render function ' + 'should return a single root node.', vm);
      }
      vnode = createEmptyVNode();
    }

    vnode.parent = _parentVnode;
    return vnode;
  };

  Vue.prototype._o = markOnce;
  Vue.prototype._n = toNumber;
  Vue.prototype._s = _toString;
  Vue.prototype._l = renderList;
  Vue.prototype._t = renderSlot;
  Vue.prototype._q = looseEqual;
  Vue.prototype._i = looseIndexOf;
  Vue.prototype._m = renderStatic;
  Vue.prototype._f = resolveFilter;
  Vue.prototype._k = checkKeyCodes;
  Vue.prototype._b = bindObjectProps;
  Vue.prototype._v = createTextVNode;
  Vue.prototype._e = createEmptyVNode;
  Vue.prototype._u = resolveScopedSlots;
}

function initProvide(vm) {
  var provide = vm.$options.provide;
  if (provide) {
    vm._provided = typeof provide === 'function' ? provide.call(vm) : provide;
  }
}

function initInjections(vm) {
  var inject = vm.$options.inject;
  if (inject) {
    var isArray = Array.isArray(inject);
    var keys = isArray ? inject : hasSymbol ? Reflect.ownKeys(inject) : Object.keys(inject);

    var loop = function loop(i) {
      var key = keys[i];
      var provideKey = isArray ? key : inject[key];
      var source = vm;
      while (source) {
        if (source._provided && provideKey in source._provided) {
          if (process.env.NODE_ENV !== 'production') {
            defineReactive$$1(vm, key, source._provided[provideKey], function () {
              warn("Avoid mutating an injected value directly since the changes will be " + "overwritten whenever the provided component re-renders. " + "injection being mutated: \"" + key + "\"", vm);
            });
          } else {
            defineReactive$$1(vm, key, source._provided[provideKey]);
          }
          break;
        }
        source = source.$parent;
      }
    };

    for (var i = 0; i < keys.length; i++) {
      loop(i);
    }
  }
}

var uid = 0;

function initMixin(Vue) {
  Vue.prototype._init = function (options) {
    var vm = this;

    vm._uid = uid++;

    var startTag, endTag;

    if (process.env.NODE_ENV !== 'production' && config.performance && mark) {
      startTag = "vue-perf-init:" + vm._uid;
      endTag = "vue-perf-end:" + vm._uid;
      mark(startTag);
    }

    vm._isVue = true;

    if (options && options._isComponent) {
      initInternalComponent(vm, options);
    } else {
      vm.$options = mergeOptions(resolveConstructorOptions(vm.constructor), options || {}, vm);
    }

    if (process.env.NODE_ENV !== 'production') {
      initProxy(vm);
    } else {
      vm._renderProxy = vm;
    }

    vm._self = vm;
    initLifecycle(vm);
    initEvents(vm);
    initRender(vm);
    callHook(vm, 'beforeCreate');
    initInjections(vm);
    initState(vm);
    initProvide(vm);
    callHook(vm, 'created');

    if (process.env.NODE_ENV !== 'production' && config.performance && mark) {
      vm._name = formatComponentName(vm, false);
      mark(endTag);
      measure(vm._name + " init", startTag, endTag);
    }

    if (vm.$options.el) {
      vm.$mount(vm.$options.el);
    }
  };
}

function initInternalComponent(vm, options) {
  var opts = vm.$options = Object.create(vm.constructor.options);

  opts.parent = options.parent;
  opts.propsData = options.propsData;
  opts._parentVnode = options._parentVnode;
  opts._parentListeners = options._parentListeners;
  opts._renderChildren = options._renderChildren;
  opts._componentTag = options._componentTag;
  opts._parentElm = options._parentElm;
  opts._refElm = options._refElm;
  if (options.render) {
    opts.render = options.render;
    opts.staticRenderFns = options.staticRenderFns;
  }
}

function resolveConstructorOptions(Ctor) {
  var options = Ctor.options;
  if (Ctor.super) {
    var superOptions = resolveConstructorOptions(Ctor.super);
    var cachedSuperOptions = Ctor.superOptions;
    if (superOptions !== cachedSuperOptions) {
      Ctor.superOptions = superOptions;

      var modifiedOptions = resolveModifiedOptions(Ctor);

      if (modifiedOptions) {
        extend(Ctor.extendOptions, modifiedOptions);
      }
      options = Ctor.options = mergeOptions(superOptions, Ctor.extendOptions);
      if (options.name) {
        options.components[options.name] = Ctor;
      }
    }
  }
  return options;
}

function resolveModifiedOptions(Ctor) {
  var modified;
  var latest = Ctor.options;
  var sealed = Ctor.sealedOptions;
  for (var key in latest) {
    if (latest[key] !== sealed[key]) {
      if (!modified) {
        modified = {};
      }
      modified[key] = dedupe(latest[key], sealed[key]);
    }
  }
  return modified;
}

function dedupe(latest, sealed) {
  if (Array.isArray(latest)) {
    var res = [];
    sealed = Array.isArray(sealed) ? sealed : [sealed];
    for (var i = 0; i < latest.length; i++) {
      if (sealed.indexOf(latest[i]) < 0) {
        res.push(latest[i]);
      }
    }
    return res;
  } else {
    return latest;
  }
}

function Vue$3(options) {
  if (process.env.NODE_ENV !== 'production' && !(this instanceof Vue$3)) {
    warn('Vue is a constructor and should be called with the `new` keyword');
  }
  this._init(options);
}

initMixin(Vue$3);
stateMixin(Vue$3);
eventsMixin(Vue$3);
lifecycleMixin(Vue$3);
renderMixin(Vue$3);

function initUse(Vue) {
  Vue.use = function (plugin) {
    if (plugin.installed) {
      return;
    }

    var args = toArray(arguments, 1);
    args.unshift(this);
    if (typeof plugin.install === 'function') {
      plugin.install.apply(plugin, args);
    } else if (typeof plugin === 'function') {
      plugin.apply(null, args);
    }
    plugin.installed = true;
    return this;
  };
}

function initMixin$1(Vue) {
  Vue.mixin = function (mixin) {
    this.options = mergeOptions(this.options, mixin);
  };
}

function initExtend(Vue) {
  Vue.cid = 0;
  var cid = 1;

  Vue.extend = function (extendOptions) {
    extendOptions = extendOptions || {};
    var Super = this;
    var SuperId = Super.cid;
    var cachedCtors = extendOptions._Ctor || (extendOptions._Ctor = {});
    if (cachedCtors[SuperId]) {
      return cachedCtors[SuperId];
    }

    var name = extendOptions.name || Super.options.name;
    if (process.env.NODE_ENV !== 'production') {
      if (!/^[a-zA-Z][\w-]*$/.test(name)) {
        warn('Invalid component name: "' + name + '". Component names ' + 'can only contain alphanumeric characters and the hyphen, ' + 'and must start with a letter.');
      }
    }

    var Sub = function VueComponent(options) {
      this._init(options);
    };
    Sub.prototype = Object.create(Super.prototype);
    Sub.prototype.constructor = Sub;
    Sub.cid = cid++;
    Sub.options = mergeOptions(Super.options, extendOptions);
    Sub['super'] = Super;

    if (Sub.options.props) {
      initProps$1(Sub);
    }
    if (Sub.options.computed) {
      initComputed$1(Sub);
    }

    Sub.extend = Super.extend;
    Sub.mixin = Super.mixin;
    Sub.use = Super.use;

    config._assetTypes.forEach(function (type) {
      Sub[type] = Super[type];
    });

    if (name) {
      Sub.options.components[name] = Sub;
    }

    Sub.superOptions = Super.options;
    Sub.extendOptions = extendOptions;
    Sub.sealedOptions = extend({}, Sub.options);

    cachedCtors[SuperId] = Sub;
    return Sub;
  };
}

function initProps$1(Comp) {
  var props = Comp.options.props;
  for (var key in props) {
    proxy(Comp.prototype, "_props", key);
  }
}

function initComputed$1(Comp) {
  var computed = Comp.options.computed;
  for (var key in computed) {
    defineComputed(Comp.prototype, key, computed[key]);
  }
}

function initAssetRegisters(Vue) {
  config._assetTypes.forEach(function (type) {
    Vue[type] = function (id, definition) {
      if (!definition) {
        return this.options[type + 's'][id];
      } else {
        if (process.env.NODE_ENV !== 'production') {
          if (type === 'component' && config.isReservedTag(id)) {
            warn('Do not use built-in or reserved HTML elements as component ' + 'id: ' + id);
          }
        }
        if (type === 'component' && isPlainObject(definition)) {
          definition.name = definition.name || id;
          definition = this.options._base.extend(definition);
        }
        if (type === 'directive' && typeof definition === 'function') {
          definition = { bind: definition, update: definition };
        }
        this.options[type + 's'][id] = definition;
        return definition;
      }
    };
  });
}

var patternTypes = [String, RegExp];

function getComponentName(opts) {
  return opts && (opts.Ctor.options.name || opts.tag);
}

function matches(pattern, name) {
  if (typeof pattern === 'string') {
    return pattern.split(',').indexOf(name) > -1;
  } else if (pattern instanceof RegExp) {
    return pattern.test(name);
  }

  return false;
}

function pruneCache(cache, filter) {
  for (var key in cache) {
    var cachedNode = cache[key];
    if (cachedNode) {
      var name = getComponentName(cachedNode.componentOptions);
      if (name && !filter(name)) {
        pruneCacheEntry(cachedNode);
        cache[key] = null;
      }
    }
  }
}

function pruneCacheEntry(vnode) {
  if (vnode) {
    if (!vnode.componentInstance._inactive) {
      callHook(vnode.componentInstance, 'deactivated');
    }
    vnode.componentInstance.$destroy();
  }
}

var KeepAlive = {
  name: 'keep-alive',
  abstract: true,

  props: {
    include: patternTypes,
    exclude: patternTypes
  },

  created: function created() {
    this.cache = Object.create(null);
  },

  destroyed: function destroyed() {
    var this$1 = this;

    for (var key in this$1.cache) {
      pruneCacheEntry(this$1.cache[key]);
    }
  },

  watch: {
    include: function include(val) {
      pruneCache(this.cache, function (name) {
        return matches(val, name);
      });
    },
    exclude: function exclude(val) {
      pruneCache(this.cache, function (name) {
        return !matches(val, name);
      });
    }
  },

  render: function render() {
    var vnode = getFirstComponentChild(this.$slots.default);
    var componentOptions = vnode && vnode.componentOptions;
    if (componentOptions) {
      var name = getComponentName(componentOptions);
      if (name && (this.include && !matches(this.include, name) || this.exclude && matches(this.exclude, name))) {
        return vnode;
      }
      var key = vnode.key == null ? componentOptions.Ctor.cid + (componentOptions.tag ? "::" + componentOptions.tag : '') : vnode.key;
      if (this.cache[key]) {
        vnode.componentInstance = this.cache[key].componentInstance;
      } else {
        this.cache[key] = vnode;
      }
      vnode.data.keepAlive = true;
    }
    return vnode;
  }
};

var builtInComponents = {
  KeepAlive: KeepAlive
};

function initGlobalAPI(Vue) {
  var configDef = {};
  configDef.get = function () {
    return config;
  };
  if (process.env.NODE_ENV !== 'production') {
    configDef.set = function () {
      warn('Do not replace the Vue.config object, set individual fields instead.');
    };
  }
  Object.defineProperty(Vue, 'config', configDef);

  Vue.util = {
    warn: warn,
    extend: extend,
    mergeOptions: mergeOptions,
    defineReactive: defineReactive$$1
  };

  Vue.set = set;
  Vue.delete = del;
  Vue.nextTick = nextTick;

  Vue.options = Object.create(null);
  config._assetTypes.forEach(function (type) {
    Vue.options[type + 's'] = Object.create(null);
  });

  Vue.options._base = Vue;

  extend(Vue.options.components, builtInComponents);

  initUse(Vue);
  initMixin$1(Vue);
  initExtend(Vue);
  initAssetRegisters(Vue);
}

initGlobalAPI(Vue$3);

Object.defineProperty(Vue$3.prototype, '$isServer', {
  get: isServerRendering
});

Vue$3.version = '2.2.6';

var acceptValue = makeMap('input,textarea,option,select');
var mustUseProp = function mustUseProp(tag, type, attr) {
  return attr === 'value' && acceptValue(tag) && type !== 'button' || attr === 'selected' && tag === 'option' || attr === 'checked' && tag === 'input' || attr === 'muted' && tag === 'video';
};

var isEnumeratedAttr = makeMap('contenteditable,draggable,spellcheck');

var isBooleanAttr = makeMap('allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,' + 'default,defaultchecked,defaultmuted,defaultselected,defer,disabled,' + 'enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,' + 'muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,' + 'required,reversed,scoped,seamless,selected,sortable,translate,' + 'truespeed,typemustmatch,visible');

var xlinkNS = 'http://www.w3.org/1999/xlink';

var isXlink = function isXlink(name) {
  return name.charAt(5) === ':' && name.slice(0, 5) === 'xlink';
};

var getXlinkProp = function getXlinkProp(name) {
  return isXlink(name) ? name.slice(6, name.length) : '';
};

var isFalsyAttrValue = function isFalsyAttrValue(val) {
  return val == null || val === false;
};

function genClassForVnode(vnode) {
  var data = vnode.data;
  var parentNode = vnode;
  var childNode = vnode;
  while (childNode.componentInstance) {
    childNode = childNode.componentInstance._vnode;
    if (childNode.data) {
      data = mergeClassData(childNode.data, data);
    }
  }
  while (parentNode = parentNode.parent) {
    if (parentNode.data) {
      data = mergeClassData(data, parentNode.data);
    }
  }
  return genClassFromData(data);
}

function mergeClassData(child, parent) {
  return {
    staticClass: concat(child.staticClass, parent.staticClass),
    class: child.class ? [child.class, parent.class] : parent.class
  };
}

function genClassFromData(data) {
  var dynamicClass = data.class;
  var staticClass = data.staticClass;
  if (staticClass || dynamicClass) {
    return concat(staticClass, stringifyClass(dynamicClass));
  }

  return '';
}

function concat(a, b) {
  return a ? b ? a + ' ' + b : a : b || '';
}

function stringifyClass(value) {
  var res = '';
  if (!value) {
    return res;
  }
  if (typeof value === 'string') {
    return value;
  }
  if (Array.isArray(value)) {
    var stringified;
    for (var i = 0, l = value.length; i < l; i++) {
      if (value[i]) {
        if (stringified = stringifyClass(value[i])) {
          res += stringified + ' ';
        }
      }
    }
    return res.slice(0, -1);
  }
  if (isObject(value)) {
    for (var key in value) {
      if (value[key]) {
        res += key + ' ';
      }
    }
    return res.slice(0, -1);
  }

  return res;
}

var namespaceMap = {
  svg: 'http://www.w3.org/2000/svg',
  math: 'http://www.w3.org/1998/Math/MathML'
};

var isHTMLTag = makeMap('html,body,base,head,link,meta,style,title,' + 'address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,' + 'div,dd,dl,dt,figcaption,figure,hr,img,li,main,ol,p,pre,ul,' + 'a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,' + 's,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,' + 'embed,object,param,source,canvas,script,noscript,del,ins,' + 'caption,col,colgroup,table,thead,tbody,td,th,tr,' + 'button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,' + 'output,progress,select,textarea,' + 'details,dialog,menu,menuitem,summary,' + 'content,element,shadow,template');

var isSVG = makeMap('svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,' + 'foreignObject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,' + 'polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view', true);

var isPreTag = function isPreTag(tag) {
  return tag === 'pre';
};

var isReservedTag = function isReservedTag(tag) {
  return isHTMLTag(tag) || isSVG(tag);
};

function getTagNamespace(tag) {
  if (isSVG(tag)) {
    return 'svg';
  }

  if (tag === 'math') {
    return 'math';
  }
}

var unknownElementCache = Object.create(null);
function isUnknownElement(tag) {
  if (!inBrowser) {
    return true;
  }
  if (isReservedTag(tag)) {
    return false;
  }
  tag = tag.toLowerCase();

  if (unknownElementCache[tag] != null) {
    return unknownElementCache[tag];
  }
  var el = document.createElement(tag);
  if (tag.indexOf('-') > -1) {
    return unknownElementCache[tag] = el.constructor === window.HTMLUnknownElement || el.constructor === window.HTMLElement;
  } else {
    return unknownElementCache[tag] = /HTMLUnknownElement/.test(el.toString());
  }
}

function query(el) {
  if (typeof el === 'string') {
    var selected = document.querySelector(el);
    if (!selected) {
      process.env.NODE_ENV !== 'production' && warn('Cannot find element: ' + el);
      return document.createElement('div');
    }
    return selected;
  } else {
    return el;
  }
}

function createElement$1(tagName, vnode) {
  var elm = document.createElement(tagName);
  if (tagName !== 'select') {
    return elm;
  }

  if (vnode.data && vnode.data.attrs && vnode.data.attrs.multiple !== undefined) {
    elm.setAttribute('multiple', 'multiple');
  }
  return elm;
}

function createElementNS(namespace, tagName) {
  return document.createElementNS(namespaceMap[namespace], tagName);
}

function createTextNode(text) {
  return document.createTextNode(text);
}

function createComment(text) {
  return document.createComment(text);
}

function insertBefore(parentNode, newNode, referenceNode) {
  parentNode.insertBefore(newNode, referenceNode);
}

function removeChild(node, child) {
  node.removeChild(child);
}

function appendChild(node, child) {
  node.appendChild(child);
}

function parentNode(node) {
  return node.parentNode;
}

function nextSibling(node) {
  return node.nextSibling;
}

function tagName(node) {
  return node.tagName;
}

function setTextContent(node, text) {
  node.textContent = text;
}

function setAttribute(node, key, val) {
  node.setAttribute(key, val);
}

var nodeOps = Object.freeze({
  createElement: createElement$1,
  createElementNS: createElementNS,
  createTextNode: createTextNode,
  createComment: createComment,
  insertBefore: insertBefore,
  removeChild: removeChild,
  appendChild: appendChild,
  parentNode: parentNode,
  nextSibling: nextSibling,
  tagName: tagName,
  setTextContent: setTextContent,
  setAttribute: setAttribute
});

var ref = {
  create: function create(_, vnode) {
    registerRef(vnode);
  },
  update: function update(oldVnode, vnode) {
    if (oldVnode.data.ref !== vnode.data.ref) {
      registerRef(oldVnode, true);
      registerRef(vnode);
    }
  },
  destroy: function destroy(vnode) {
    registerRef(vnode, true);
  }
};

function registerRef(vnode, isRemoval) {
  var key = vnode.data.ref;
  if (!key) {
    return;
  }

  var vm = vnode.context;
  var ref = vnode.componentInstance || vnode.elm;
  var refs = vm.$refs;
  if (isRemoval) {
    if (Array.isArray(refs[key])) {
      remove(refs[key], ref);
    } else if (refs[key] === ref) {
      refs[key] = undefined;
    }
  } else {
    if (vnode.data.refInFor) {
      if (Array.isArray(refs[key]) && refs[key].indexOf(ref) < 0) {
        refs[key].push(ref);
      } else {
        refs[key] = [ref];
      }
    } else {
      refs[key] = ref;
    }
  }
}

var emptyNode = new VNode('', {}, []);

var hooks = ['create', 'activate', 'update', 'remove', 'destroy'];

function isUndef(v) {
  return v === undefined || v === null;
}

function isDef(v) {
  return v !== undefined && v !== null;
}

function isTrue(v) {
  return v === true;
}

function sameVnode(a, b) {
  return a.key === b.key && a.tag === b.tag && a.isComment === b.isComment && isDef(a.data) === isDef(b.data) && sameInputType(a, b);
}

function sameInputType(a, b) {
  if (a.tag !== 'input') {
    return true;
  }
  var i;
  var typeA = isDef(i = a.data) && isDef(i = i.attrs) && i.type;
  var typeB = isDef(i = b.data) && isDef(i = i.attrs) && i.type;
  return typeA === typeB;
}

function createKeyToOldIdx(children, beginIdx, endIdx) {
  var i, key;
  var map = {};
  for (i = beginIdx; i <= endIdx; ++i) {
    key = children[i].key;
    if (isDef(key)) {
      map[key] = i;
    }
  }
  return map;
}

function createPatchFunction(backend) {
  var i, j;
  var cbs = {};

  var modules = backend.modules;
  var nodeOps = backend.nodeOps;

  for (i = 0; i < hooks.length; ++i) {
    cbs[hooks[i]] = [];
    for (j = 0; j < modules.length; ++j) {
      if (isDef(modules[j][hooks[i]])) {
        cbs[hooks[i]].push(modules[j][hooks[i]]);
      }
    }
  }

  function emptyNodeAt(elm) {
    return new VNode(nodeOps.tagName(elm).toLowerCase(), {}, [], undefined, elm);
  }

  function createRmCb(childElm, listeners) {
    function remove$$1() {
      if (--remove$$1.listeners === 0) {
        removeNode(childElm);
      }
    }
    remove$$1.listeners = listeners;
    return remove$$1;
  }

  function removeNode(el) {
    var parent = nodeOps.parentNode(el);

    if (isDef(parent)) {
      nodeOps.removeChild(parent, el);
    }
  }

  var inPre = 0;
  function createElm(vnode, insertedVnodeQueue, parentElm, refElm, nested) {
    vnode.isRootInsert = !nested;
    if (createComponent(vnode, insertedVnodeQueue, parentElm, refElm)) {
      return;
    }

    var data = vnode.data;
    var children = vnode.children;
    var tag = vnode.tag;
    if (isDef(tag)) {
      if (process.env.NODE_ENV !== 'production') {
        if (data && data.pre) {
          inPre++;
        }
        if (!inPre && !vnode.ns && !(config.ignoredElements.length && config.ignoredElements.indexOf(tag) > -1) && config.isUnknownElement(tag)) {
          warn('Unknown custom element: <' + tag + '> - did you ' + 'register the component correctly? For recursive components, ' + 'make sure to provide the "name" option.', vnode.context);
        }
      }
      vnode.elm = vnode.ns ? nodeOps.createElementNS(vnode.ns, tag) : nodeOps.createElement(tag, vnode);
      setScope(vnode);

      {
        createChildren(vnode, children, insertedVnodeQueue);
        if (isDef(data)) {
          invokeCreateHooks(vnode, insertedVnodeQueue);
        }
        insert(parentElm, vnode.elm, refElm);
      }

      if (process.env.NODE_ENV !== 'production' && data && data.pre) {
        inPre--;
      }
    } else if (isTrue(vnode.isComment)) {
      vnode.elm = nodeOps.createComment(vnode.text);
      insert(parentElm, vnode.elm, refElm);
    } else {
      vnode.elm = nodeOps.createTextNode(vnode.text);
      insert(parentElm, vnode.elm, refElm);
    }
  }

  function createComponent(vnode, insertedVnodeQueue, parentElm, refElm) {
    var i = vnode.data;
    if (isDef(i)) {
      var isReactivated = isDef(vnode.componentInstance) && i.keepAlive;
      if (isDef(i = i.hook) && isDef(i = i.init)) {
        i(vnode, false, parentElm, refElm);
      }

      if (isDef(vnode.componentInstance)) {
        initComponent(vnode, insertedVnodeQueue);
        if (isTrue(isReactivated)) {
          reactivateComponent(vnode, insertedVnodeQueue, parentElm, refElm);
        }
        return true;
      }
    }
  }

  function initComponent(vnode, insertedVnodeQueue) {
    if (isDef(vnode.data.pendingInsert)) {
      insertedVnodeQueue.push.apply(insertedVnodeQueue, vnode.data.pendingInsert);
    }
    vnode.elm = vnode.componentInstance.$el;
    if (isPatchable(vnode)) {
      invokeCreateHooks(vnode, insertedVnodeQueue);
      setScope(vnode);
    } else {
      registerRef(vnode);

      insertedVnodeQueue.push(vnode);
    }
  }

  function reactivateComponent(vnode, insertedVnodeQueue, parentElm, refElm) {
    var i;

    var innerNode = vnode;
    while (innerNode.componentInstance) {
      innerNode = innerNode.componentInstance._vnode;
      if (isDef(i = innerNode.data) && isDef(i = i.transition)) {
        for (i = 0; i < cbs.activate.length; ++i) {
          cbs.activate[i](emptyNode, innerNode);
        }
        insertedVnodeQueue.push(innerNode);
        break;
      }
    }

    insert(parentElm, vnode.elm, refElm);
  }

  function insert(parent, elm, ref) {
    if (isDef(parent)) {
      if (isDef(ref)) {
        nodeOps.insertBefore(parent, elm, ref);
      } else {
        nodeOps.appendChild(parent, elm);
      }
    }
  }

  function createChildren(vnode, children, insertedVnodeQueue) {
    if (Array.isArray(children)) {
      for (var i = 0; i < children.length; ++i) {
        createElm(children[i], insertedVnodeQueue, vnode.elm, null, true);
      }
    } else if (isPrimitive(vnode.text)) {
      nodeOps.appendChild(vnode.elm, nodeOps.createTextNode(vnode.text));
    }
  }

  function isPatchable(vnode) {
    while (vnode.componentInstance) {
      vnode = vnode.componentInstance._vnode;
    }
    return isDef(vnode.tag);
  }

  function invokeCreateHooks(vnode, insertedVnodeQueue) {
    for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
      cbs.create[i$1](emptyNode, vnode);
    }
    i = vnode.data.hook;
    if (isDef(i)) {
      if (isDef(i.create)) {
        i.create(emptyNode, vnode);
      }
      if (isDef(i.insert)) {
        insertedVnodeQueue.push(vnode);
      }
    }
  }

  function setScope(vnode) {
    var i;
    var ancestor = vnode;
    while (ancestor) {
      if (isDef(i = ancestor.context) && isDef(i = i.$options._scopeId)) {
        nodeOps.setAttribute(vnode.elm, i, '');
      }
      ancestor = ancestor.parent;
    }

    if (isDef(i = activeInstance) && i !== vnode.context && isDef(i = i.$options._scopeId)) {
      nodeOps.setAttribute(vnode.elm, i, '');
    }
  }

  function addVnodes(parentElm, refElm, vnodes, startIdx, endIdx, insertedVnodeQueue) {
    for (; startIdx <= endIdx; ++startIdx) {
      createElm(vnodes[startIdx], insertedVnodeQueue, parentElm, refElm);
    }
  }

  function invokeDestroyHook(vnode) {
    var i, j;
    var data = vnode.data;
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.destroy)) {
        i(vnode);
      }
      for (i = 0; i < cbs.destroy.length; ++i) {
        cbs.destroy[i](vnode);
      }
    }
    if (isDef(i = vnode.children)) {
      for (j = 0; j < vnode.children.length; ++j) {
        invokeDestroyHook(vnode.children[j]);
      }
    }
  }

  function removeVnodes(parentElm, vnodes, startIdx, endIdx) {
    for (; startIdx <= endIdx; ++startIdx) {
      var ch = vnodes[startIdx];
      if (isDef(ch)) {
        if (isDef(ch.tag)) {
          removeAndInvokeRemoveHook(ch);
          invokeDestroyHook(ch);
        } else {
          removeNode(ch.elm);
        }
      }
    }
  }

  function removeAndInvokeRemoveHook(vnode, rm) {
    if (isDef(rm) || isDef(vnode.data)) {
      var listeners = cbs.remove.length + 1;
      if (isDef(rm)) {
        rm.listeners += listeners;
      } else {
        rm = createRmCb(vnode.elm, listeners);
      }

      if (isDef(i = vnode.componentInstance) && isDef(i = i._vnode) && isDef(i.data)) {
        removeAndInvokeRemoveHook(i, rm);
      }
      for (i = 0; i < cbs.remove.length; ++i) {
        cbs.remove[i](vnode, rm);
      }
      if (isDef(i = vnode.data.hook) && isDef(i = i.remove)) {
        i(vnode, rm);
      } else {
        rm();
      }
    } else {
      removeNode(vnode.elm);
    }
  }

  function updateChildren(parentElm, oldCh, newCh, insertedVnodeQueue, removeOnly) {
    var oldStartIdx = 0;
    var newStartIdx = 0;
    var oldEndIdx = oldCh.length - 1;
    var oldStartVnode = oldCh[0];
    var oldEndVnode = oldCh[oldEndIdx];
    var newEndIdx = newCh.length - 1;
    var newStartVnode = newCh[0];
    var newEndVnode = newCh[newEndIdx];
    var oldKeyToIdx, idxInOld, elmToMove, refElm;

    var canMove = !removeOnly;

    while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
      if (isUndef(oldStartVnode)) {
        oldStartVnode = oldCh[++oldStartIdx];
      } else if (isUndef(oldEndVnode)) {
        oldEndVnode = oldCh[--oldEndIdx];
      } else if (sameVnode(oldStartVnode, newStartVnode)) {
        patchVnode(oldStartVnode, newStartVnode, insertedVnodeQueue);
        oldStartVnode = oldCh[++oldStartIdx];
        newStartVnode = newCh[++newStartIdx];
      } else if (sameVnode(oldEndVnode, newEndVnode)) {
        patchVnode(oldEndVnode, newEndVnode, insertedVnodeQueue);
        oldEndVnode = oldCh[--oldEndIdx];
        newEndVnode = newCh[--newEndIdx];
      } else if (sameVnode(oldStartVnode, newEndVnode)) {
        patchVnode(oldStartVnode, newEndVnode, insertedVnodeQueue);
        canMove && nodeOps.insertBefore(parentElm, oldStartVnode.elm, nodeOps.nextSibling(oldEndVnode.elm));
        oldStartVnode = oldCh[++oldStartIdx];
        newEndVnode = newCh[--newEndIdx];
      } else if (sameVnode(oldEndVnode, newStartVnode)) {
        patchVnode(oldEndVnode, newStartVnode, insertedVnodeQueue);
        canMove && nodeOps.insertBefore(parentElm, oldEndVnode.elm, oldStartVnode.elm);
        oldEndVnode = oldCh[--oldEndIdx];
        newStartVnode = newCh[++newStartIdx];
      } else {
        if (isUndef(oldKeyToIdx)) {
          oldKeyToIdx = createKeyToOldIdx(oldCh, oldStartIdx, oldEndIdx);
        }
        idxInOld = isDef(newStartVnode.key) ? oldKeyToIdx[newStartVnode.key] : null;
        if (isUndef(idxInOld)) {
          createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm);
          newStartVnode = newCh[++newStartIdx];
        } else {
          elmToMove = oldCh[idxInOld];

          if (process.env.NODE_ENV !== 'production' && !elmToMove) {
            warn('It seems there are duplicate keys that is causing an update error. ' + 'Make sure each v-for item has a unique key.');
          }
          if (sameVnode(elmToMove, newStartVnode)) {
            patchVnode(elmToMove, newStartVnode, insertedVnodeQueue);
            oldCh[idxInOld] = undefined;
            canMove && nodeOps.insertBefore(parentElm, newStartVnode.elm, oldStartVnode.elm);
            newStartVnode = newCh[++newStartIdx];
          } else {
            createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm);
            newStartVnode = newCh[++newStartIdx];
          }
        }
      }
    }
    if (oldStartIdx > oldEndIdx) {
      refElm = isUndef(newCh[newEndIdx + 1]) ? null : newCh[newEndIdx + 1].elm;
      addVnodes(parentElm, refElm, newCh, newStartIdx, newEndIdx, insertedVnodeQueue);
    } else if (newStartIdx > newEndIdx) {
      removeVnodes(parentElm, oldCh, oldStartIdx, oldEndIdx);
    }
  }

  function patchVnode(oldVnode, vnode, insertedVnodeQueue, removeOnly) {
    if (oldVnode === vnode) {
      return;
    }

    if (isTrue(vnode.isStatic) && isTrue(oldVnode.isStatic) && vnode.key === oldVnode.key && (isTrue(vnode.isCloned) || isTrue(vnode.isOnce))) {
      vnode.elm = oldVnode.elm;
      vnode.componentInstance = oldVnode.componentInstance;
      return;
    }
    var i;
    var data = vnode.data;
    if (isDef(data) && isDef(i = data.hook) && isDef(i = i.prepatch)) {
      i(oldVnode, vnode);
    }
    var elm = vnode.elm = oldVnode.elm;
    var oldCh = oldVnode.children;
    var ch = vnode.children;
    if (isDef(data) && isPatchable(vnode)) {
      for (i = 0; i < cbs.update.length; ++i) {
        cbs.update[i](oldVnode, vnode);
      }
      if (isDef(i = data.hook) && isDef(i = i.update)) {
        i(oldVnode, vnode);
      }
    }
    if (isUndef(vnode.text)) {
      if (isDef(oldCh) && isDef(ch)) {
        if (oldCh !== ch) {
          updateChildren(elm, oldCh, ch, insertedVnodeQueue, removeOnly);
        }
      } else if (isDef(ch)) {
        if (isDef(oldVnode.text)) {
          nodeOps.setTextContent(elm, '');
        }
        addVnodes(elm, null, ch, 0, ch.length - 1, insertedVnodeQueue);
      } else if (isDef(oldCh)) {
        removeVnodes(elm, oldCh, 0, oldCh.length - 1);
      } else if (isDef(oldVnode.text)) {
        nodeOps.setTextContent(elm, '');
      }
    } else if (oldVnode.text !== vnode.text) {
      nodeOps.setTextContent(elm, vnode.text);
    }
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.postpatch)) {
        i(oldVnode, vnode);
      }
    }
  }

  function invokeInsertHook(vnode, queue, initial) {
    if (isTrue(initial) && isDef(vnode.parent)) {
      vnode.parent.data.pendingInsert = queue;
    } else {
      for (var i = 0; i < queue.length; ++i) {
        queue[i].data.hook.insert(queue[i]);
      }
    }
  }

  var bailed = false;

  var isRenderedModule = makeMap('attrs,style,class,staticClass,staticStyle,key');

  function hydrate(elm, vnode, insertedVnodeQueue) {
    if (process.env.NODE_ENV !== 'production') {
      if (!assertNodeMatch(elm, vnode)) {
        return false;
      }
    }
    vnode.elm = elm;
    var tag = vnode.tag;
    var data = vnode.data;
    var children = vnode.children;
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.init)) {
        i(vnode, true);
      }
      if (isDef(i = vnode.componentInstance)) {
        initComponent(vnode, insertedVnodeQueue);
        return true;
      }
    }
    if (isDef(tag)) {
      if (isDef(children)) {
        if (!elm.hasChildNodes()) {
          createChildren(vnode, children, insertedVnodeQueue);
        } else {
          var childrenMatch = true;
          var childNode = elm.firstChild;
          for (var i$1 = 0; i$1 < children.length; i$1++) {
            if (!childNode || !hydrate(childNode, children[i$1], insertedVnodeQueue)) {
              childrenMatch = false;
              break;
            }
            childNode = childNode.nextSibling;
          }

          if (!childrenMatch || childNode) {
            if (process.env.NODE_ENV !== 'production' && typeof console !== 'undefined' && !bailed) {
              bailed = true;
              console.warn('Parent: ', elm);
              console.warn('Mismatching childNodes vs. VNodes: ', elm.childNodes, children);
            }
            return false;
          }
        }
      }
      if (isDef(data)) {
        for (var key in data) {
          if (!isRenderedModule(key)) {
            invokeCreateHooks(vnode, insertedVnodeQueue);
            break;
          }
        }
      }
    } else if (elm.data !== vnode.text) {
      elm.data = vnode.text;
    }
    return true;
  }

  function assertNodeMatch(node, vnode) {
    if (isDef(vnode.tag)) {
      return vnode.tag.indexOf('vue-component') === 0 || vnode.tag.toLowerCase() === (node.tagName && node.tagName.toLowerCase());
    } else {
      return node.nodeType === (vnode.isComment ? 8 : 3);
    }
  }

  return function patch(oldVnode, vnode, hydrating, removeOnly, parentElm, refElm) {
    if (isUndef(vnode)) {
      if (isDef(oldVnode)) {
        invokeDestroyHook(oldVnode);
      }
      return;
    }

    var isInitialPatch = false;
    var insertedVnodeQueue = [];

    if (isUndef(oldVnode)) {
      isInitialPatch = true;
      createElm(vnode, insertedVnodeQueue, parentElm, refElm);
    } else {
      var isRealElement = isDef(oldVnode.nodeType);
      if (!isRealElement && sameVnode(oldVnode, vnode)) {
        patchVnode(oldVnode, vnode, insertedVnodeQueue, removeOnly);
      } else {
        if (isRealElement) {
          if (oldVnode.nodeType === 1 && oldVnode.hasAttribute('server-rendered')) {
            oldVnode.removeAttribute('server-rendered');
            hydrating = true;
          }
          if (isTrue(hydrating)) {
            if (hydrate(oldVnode, vnode, insertedVnodeQueue)) {
              invokeInsertHook(vnode, insertedVnodeQueue, true);
              return oldVnode;
            } else if (process.env.NODE_ENV !== 'production') {
              warn('The client-side rendered virtual DOM tree is not matching ' + 'server-rendered content. This is likely caused by incorrect ' + 'HTML markup, for example nesting block-level elements inside ' + '<p>, or missing <tbody>. Bailing hydration and performing ' + 'full client-side render.');
            }
          }

          oldVnode = emptyNodeAt(oldVnode);
        }

        var oldElm = oldVnode.elm;
        var parentElm$1 = nodeOps.parentNode(oldElm);
        createElm(vnode, insertedVnodeQueue, oldElm._leaveCb ? null : parentElm$1, nodeOps.nextSibling(oldElm));

        if (isDef(vnode.parent)) {
          var ancestor = vnode.parent;
          while (ancestor) {
            ancestor.elm = vnode.elm;
            ancestor = ancestor.parent;
          }
          if (isPatchable(vnode)) {
            for (var i = 0; i < cbs.create.length; ++i) {
              cbs.create[i](emptyNode, vnode.parent);
            }
          }
        }

        if (isDef(parentElm$1)) {
          removeVnodes(parentElm$1, [oldVnode], 0, 0);
        } else if (isDef(oldVnode.tag)) {
          invokeDestroyHook(oldVnode);
        }
      }
    }

    invokeInsertHook(vnode, insertedVnodeQueue, isInitialPatch);
    return vnode.elm;
  };
}

var directives = {
  create: updateDirectives,
  update: updateDirectives,
  destroy: function unbindDirectives(vnode) {
    updateDirectives(vnode, emptyNode);
  }
};

function updateDirectives(oldVnode, vnode) {
  if (oldVnode.data.directives || vnode.data.directives) {
    _update(oldVnode, vnode);
  }
}

function _update(oldVnode, vnode) {
  var isCreate = oldVnode === emptyNode;
  var isDestroy = vnode === emptyNode;
  var oldDirs = normalizeDirectives$1(oldVnode.data.directives, oldVnode.context);
  var newDirs = normalizeDirectives$1(vnode.data.directives, vnode.context);

  var dirsWithInsert = [];
  var dirsWithPostpatch = [];

  var key, oldDir, dir;
  for (key in newDirs) {
    oldDir = oldDirs[key];
    dir = newDirs[key];
    if (!oldDir) {
      callHook$1(dir, 'bind', vnode, oldVnode);
      if (dir.def && dir.def.inserted) {
        dirsWithInsert.push(dir);
      }
    } else {
      dir.oldValue = oldDir.value;
      callHook$1(dir, 'update', vnode, oldVnode);
      if (dir.def && dir.def.componentUpdated) {
        dirsWithPostpatch.push(dir);
      }
    }
  }

  if (dirsWithInsert.length) {
    var callInsert = function callInsert() {
      for (var i = 0; i < dirsWithInsert.length; i++) {
        callHook$1(dirsWithInsert[i], 'inserted', vnode, oldVnode);
      }
    };
    if (isCreate) {
      mergeVNodeHook(vnode.data.hook || (vnode.data.hook = {}), 'insert', callInsert);
    } else {
      callInsert();
    }
  }

  if (dirsWithPostpatch.length) {
    mergeVNodeHook(vnode.data.hook || (vnode.data.hook = {}), 'postpatch', function () {
      for (var i = 0; i < dirsWithPostpatch.length; i++) {
        callHook$1(dirsWithPostpatch[i], 'componentUpdated', vnode, oldVnode);
      }
    });
  }

  if (!isCreate) {
    for (key in oldDirs) {
      if (!newDirs[key]) {
        callHook$1(oldDirs[key], 'unbind', oldVnode, oldVnode, isDestroy);
      }
    }
  }
}

var emptyModifiers = Object.create(null);

function normalizeDirectives$1(dirs, vm) {
  var res = Object.create(null);
  if (!dirs) {
    return res;
  }
  var i, dir;
  for (i = 0; i < dirs.length; i++) {
    dir = dirs[i];
    if (!dir.modifiers) {
      dir.modifiers = emptyModifiers;
    }
    res[getRawDirName(dir)] = dir;
    dir.def = resolveAsset(vm.$options, 'directives', dir.name, true);
  }
  return res;
}

function getRawDirName(dir) {
  return dir.rawName || dir.name + "." + Object.keys(dir.modifiers || {}).join('.');
}

function callHook$1(dir, hook, vnode, oldVnode, isDestroy) {
  var fn = dir.def && dir.def[hook];
  if (fn) {
    fn(vnode.elm, dir, vnode, oldVnode, isDestroy);
  }
}

var baseModules = [ref, directives];

function updateAttrs(oldVnode, vnode) {
  if (!oldVnode.data.attrs && !vnode.data.attrs) {
    return;
  }
  var key, cur, old;
  var elm = vnode.elm;
  var oldAttrs = oldVnode.data.attrs || {};
  var attrs = vnode.data.attrs || {};

  if (attrs.__ob__) {
    attrs = vnode.data.attrs = extend({}, attrs);
  }

  for (key in attrs) {
    cur = attrs[key];
    old = oldAttrs[key];
    if (old !== cur) {
      setAttr(elm, key, cur);
    }
  }

  if (isIE9 && attrs.value !== oldAttrs.value) {
    setAttr(elm, 'value', attrs.value);
  }
  for (key in oldAttrs) {
    if (attrs[key] == null) {
      if (isXlink(key)) {
        elm.removeAttributeNS(xlinkNS, getXlinkProp(key));
      } else if (!isEnumeratedAttr(key)) {
        elm.removeAttribute(key);
      }
    }
  }
}

function setAttr(el, key, value) {
  if (isBooleanAttr(key)) {
    if (isFalsyAttrValue(value)) {
      el.removeAttribute(key);
    } else {
      el.setAttribute(key, key);
    }
  } else if (isEnumeratedAttr(key)) {
    el.setAttribute(key, isFalsyAttrValue(value) || value === 'false' ? 'false' : 'true');
  } else if (isXlink(key)) {
    if (isFalsyAttrValue(value)) {
      el.removeAttributeNS(xlinkNS, getXlinkProp(key));
    } else {
      el.setAttributeNS(xlinkNS, key, value);
    }
  } else {
    if (isFalsyAttrValue(value)) {
      el.removeAttribute(key);
    } else {
      el.setAttribute(key, value);
    }
  }
}

var attrs = {
  create: updateAttrs,
  update: updateAttrs
};

function updateClass(oldVnode, vnode) {
  var el = vnode.elm;
  var data = vnode.data;
  var oldData = oldVnode.data;
  if (!data.staticClass && !data.class && (!oldData || !oldData.staticClass && !oldData.class)) {
    return;
  }

  var cls = genClassForVnode(vnode);

  var transitionClass = el._transitionClasses;
  if (transitionClass) {
    cls = concat(cls, stringifyClass(transitionClass));
  }

  if (cls !== el._prevClass) {
    el.setAttribute('class', cls);
    el._prevClass = cls;
  }
}

var klass = {
  create: updateClass,
  update: updateClass
};

var validDivisionCharRE = /[\w).+\-_$\]]/;

function parseFilters(exp) {
  var inSingle = false;
  var inDouble = false;
  var inTemplateString = false;
  var inRegex = false;
  var curly = 0;
  var square = 0;
  var paren = 0;
  var lastFilterIndex = 0;
  var c, prev, i, expression, filters;

  for (i = 0; i < exp.length; i++) {
    prev = c;
    c = exp.charCodeAt(i);
    if (inSingle) {
      if (c === 0x27 && prev !== 0x5C) {
        inSingle = false;
      }
    } else if (inDouble) {
      if (c === 0x22 && prev !== 0x5C) {
        inDouble = false;
      }
    } else if (inTemplateString) {
      if (c === 0x60 && prev !== 0x5C) {
        inTemplateString = false;
      }
    } else if (inRegex) {
      if (c === 0x2f && prev !== 0x5C) {
        inRegex = false;
      }
    } else if (c === 0x7C && exp.charCodeAt(i + 1) !== 0x7C && exp.charCodeAt(i - 1) !== 0x7C && !curly && !square && !paren) {
      if (expression === undefined) {
        lastFilterIndex = i + 1;
        expression = exp.slice(0, i).trim();
      } else {
        pushFilter();
      }
    } else {
      switch (c) {
        case 0x22:
          inDouble = true;break;
        case 0x27:
          inSingle = true;break;
        case 0x60:
          inTemplateString = true;break;
        case 0x28:
          paren++;break;
        case 0x29:
          paren--;break;
        case 0x5B:
          square++;break;
        case 0x5D:
          square--;break;
        case 0x7B:
          curly++;break;
        case 0x7D:
          curly--;break;}
      if (c === 0x2f) {
        var j = i - 1;
        var p = void 0;

        for (; j >= 0; j--) {
          p = exp.charAt(j);
          if (p !== ' ') {
            break;
          }
        }
        if (!p || !validDivisionCharRE.test(p)) {
          inRegex = true;
        }
      }
    }
  }

  if (expression === undefined) {
    expression = exp.slice(0, i).trim();
  } else if (lastFilterIndex !== 0) {
    pushFilter();
  }

  function pushFilter() {
    (filters || (filters = [])).push(exp.slice(lastFilterIndex, i).trim());
    lastFilterIndex = i + 1;
  }

  if (filters) {
    for (i = 0; i < filters.length; i++) {
      expression = wrapFilter(expression, filters[i]);
    }
  }

  return expression;
}

function wrapFilter(exp, filter) {
  var i = filter.indexOf('(');
  if (i < 0) {
    return "_f(\"" + filter + "\")(" + exp + ")";
  } else {
    var name = filter.slice(0, i);
    var args = filter.slice(i + 1);
    return "_f(\"" + name + "\")(" + exp + "," + args;
  }
}

function baseWarn(msg) {
  console.error("[Vue compiler]: " + msg);
}

function pluckModuleFunction(modules, key) {
  return modules ? modules.map(function (m) {
    return m[key];
  }).filter(function (_) {
    return _;
  }) : [];
}

function addProp(el, name, value) {
  (el.props || (el.props = [])).push({ name: name, value: value });
}

function addAttr(el, name, value) {
  (el.attrs || (el.attrs = [])).push({ name: name, value: value });
}

function addDirective(el, name, rawName, value, arg, modifiers) {
  (el.directives || (el.directives = [])).push({ name: name, rawName: rawName, value: value, arg: arg, modifiers: modifiers });
}

function addHandler(el, name, value, modifiers, important) {
  if (modifiers && modifiers.capture) {
    delete modifiers.capture;
    name = '!' + name;
  }
  if (modifiers && modifiers.once) {
    delete modifiers.once;
    name = '~' + name;
  }
  var events;
  if (modifiers && modifiers.native) {
    delete modifiers.native;
    events = el.nativeEvents || (el.nativeEvents = {});
  } else {
    events = el.events || (el.events = {});
  }
  var newHandler = { value: value, modifiers: modifiers };
  var handlers = events[name];

  if (Array.isArray(handlers)) {
    important ? handlers.unshift(newHandler) : handlers.push(newHandler);
  } else if (handlers) {
    events[name] = important ? [newHandler, handlers] : [handlers, newHandler];
  } else {
    events[name] = newHandler;
  }
}

function getBindingAttr(el, name, getStatic) {
  var dynamicValue = getAndRemoveAttr(el, ':' + name) || getAndRemoveAttr(el, 'v-bind:' + name);
  if (dynamicValue != null) {
    return parseFilters(dynamicValue);
  } else if (getStatic !== false) {
    var staticValue = getAndRemoveAttr(el, name);
    if (staticValue != null) {
      return JSON.stringify(staticValue);
    }
  }
}

function getAndRemoveAttr(el, name) {
  var val;
  if ((val = el.attrsMap[name]) != null) {
    var list = el.attrsList;
    for (var i = 0, l = list.length; i < l; i++) {
      if (list[i].name === name) {
        list.splice(i, 1);
        break;
      }
    }
  }
  return val;
}

function genComponentModel(el, value, modifiers) {
  var ref = modifiers || {};
  var number = ref.number;
  var trim = ref.trim;

  var baseValueExpression = '$$v';
  var valueExpression = baseValueExpression;
  if (trim) {
    valueExpression = "(typeof " + baseValueExpression + " === 'string'" + "? " + baseValueExpression + ".trim()" + ": " + baseValueExpression + ")";
  }
  if (number) {
    valueExpression = "_n(" + valueExpression + ")";
  }
  var assignment = genAssignmentCode(value, valueExpression);

  el.model = {
    value: "(" + value + ")",
    expression: "\"" + value + "\"",
    callback: "function (" + baseValueExpression + ") {" + assignment + "}"
  };
}

function genAssignmentCode(value, assignment) {
  var modelRs = parseModel(value);
  if (modelRs.idx === null) {
    return value + "=" + assignment;
  } else {
    return "var $$exp = " + modelRs.exp + ", $$idx = " + modelRs.idx + ";" + "if (!Array.isArray($$exp)){" + value + "=" + assignment + "}" + "else{$$exp.splice($$idx, 1, " + assignment + ")}";
  }
}

var len;
var str;
var chr;
var index$1;
var expressionPos;
var expressionEndPos;

function parseModel(val) {
  str = val;
  len = str.length;
  index$1 = expressionPos = expressionEndPos = 0;

  if (val.indexOf('[') < 0 || val.lastIndexOf(']') < len - 1) {
    return {
      exp: val,
      idx: null
    };
  }

  while (!eof()) {
    chr = next();

    if (isStringStart(chr)) {
      parseString(chr);
    } else if (chr === 0x5B) {
      parseBracket(chr);
    }
  }

  return {
    exp: val.substring(0, expressionPos),
    idx: val.substring(expressionPos + 1, expressionEndPos)
  };
}

function next() {
  return str.charCodeAt(++index$1);
}

function eof() {
  return index$1 >= len;
}

function isStringStart(chr) {
  return chr === 0x22 || chr === 0x27;
}

function parseBracket(chr) {
  var inBracket = 1;
  expressionPos = index$1;
  while (!eof()) {
    chr = next();
    if (isStringStart(chr)) {
      parseString(chr);
      continue;
    }
    if (chr === 0x5B) {
      inBracket++;
    }
    if (chr === 0x5D) {
      inBracket--;
    }
    if (inBracket === 0) {
      expressionEndPos = index$1;
      break;
    }
  }
}

function parseString(chr) {
  var stringQuote = chr;
  while (!eof()) {
    chr = next();
    if (chr === stringQuote) {
      break;
    }
  }
}

var warn$1;

var RANGE_TOKEN = '__r';
var CHECKBOX_RADIO_TOKEN = '__c';

function model(el, dir, _warn) {
  warn$1 = _warn;
  var value = dir.value;
  var modifiers = dir.modifiers;
  var tag = el.tag;
  var type = el.attrsMap.type;

  if (process.env.NODE_ENV !== 'production') {
    var dynamicType = el.attrsMap['v-bind:type'] || el.attrsMap[':type'];
    if (tag === 'input' && dynamicType) {
      warn$1("<input :type=\"" + dynamicType + "\" v-model=\"" + value + "\">:\n" + "v-model does not support dynamic input types. Use v-if branches instead.");
    }

    if (tag === 'input' && type === 'file') {
      warn$1("<" + el.tag + " v-model=\"" + value + "\" type=\"file\">:\n" + "File inputs are read only. Use a v-on:change listener instead.");
    }
  }

  if (tag === 'select') {
    genSelect(el, value, modifiers);
  } else if (tag === 'input' && type === 'checkbox') {
    genCheckboxModel(el, value, modifiers);
  } else if (tag === 'input' && type === 'radio') {
    genRadioModel(el, value, modifiers);
  } else if (tag === 'input' || tag === 'textarea') {
    genDefaultModel(el, value, modifiers);
  } else if (!config.isReservedTag(tag)) {
    genComponentModel(el, value, modifiers);

    return false;
  } else if (process.env.NODE_ENV !== 'production') {
    warn$1("<" + el.tag + " v-model=\"" + value + "\">: " + "v-model is not supported on this element type. " + 'If you are working with contenteditable, it\'s recommended to ' + 'wrap a library dedicated for that purpose inside a custom component.');
  }

  return true;
}

function genCheckboxModel(el, value, modifiers) {
  var number = modifiers && modifiers.number;
  var valueBinding = getBindingAttr(el, 'value') || 'null';
  var trueValueBinding = getBindingAttr(el, 'true-value') || 'true';
  var falseValueBinding = getBindingAttr(el, 'false-value') || 'false';
  addProp(el, 'checked', "Array.isArray(" + value + ")" + "?_i(" + value + "," + valueBinding + ")>-1" + (trueValueBinding === 'true' ? ":(" + value + ")" : ":_q(" + value + "," + trueValueBinding + ")"));
  addHandler(el, CHECKBOX_RADIO_TOKEN, "var $$a=" + value + "," + '$$el=$event.target,' + "$$c=$$el.checked?(" + trueValueBinding + "):(" + falseValueBinding + ");" + 'if(Array.isArray($$a)){' + "var $$v=" + (number ? '_n(' + valueBinding + ')' : valueBinding) + "," + '$$i=_i($$a,$$v);' + "if($$c){$$i<0&&(" + value + "=$$a.concat($$v))}" + "else{$$i>-1&&(" + value + "=$$a.slice(0,$$i).concat($$a.slice($$i+1)))}" + "}else{" + value + "=$$c}", null, true);
}

function genRadioModel(el, value, modifiers) {
  var number = modifiers && modifiers.number;
  var valueBinding = getBindingAttr(el, 'value') || 'null';
  valueBinding = number ? "_n(" + valueBinding + ")" : valueBinding;
  addProp(el, 'checked', "_q(" + value + "," + valueBinding + ")");
  addHandler(el, CHECKBOX_RADIO_TOKEN, genAssignmentCode(value, valueBinding), null, true);
}

function genSelect(el, value, modifiers) {
  var number = modifiers && modifiers.number;
  var selectedVal = "Array.prototype.filter" + ".call($event.target.options,function(o){return o.selected})" + ".map(function(o){var val = \"_value\" in o ? o._value : o.value;" + "return " + (number ? '_n(val)' : 'val') + "})";

  var assignment = '$event.target.multiple ? $$selectedVal : $$selectedVal[0]';
  var code = "var $$selectedVal = " + selectedVal + ";";
  code = code + " " + genAssignmentCode(value, assignment);
  addHandler(el, 'change', code, null, true);
}

function genDefaultModel(el, value, modifiers) {
  var type = el.attrsMap.type;
  var ref = modifiers || {};
  var lazy = ref.lazy;
  var number = ref.number;
  var trim = ref.trim;
  var needCompositionGuard = !lazy && type !== 'range';
  var event = lazy ? 'change' : type === 'range' ? RANGE_TOKEN : 'input';

  var valueExpression = '$event.target.value';
  if (trim) {
    valueExpression = "$event.target.value.trim()";
  }
  if (number) {
    valueExpression = "_n(" + valueExpression + ")";
  }

  var code = genAssignmentCode(value, valueExpression);
  if (needCompositionGuard) {
    code = "if($event.target.composing)return;" + code;
  }

  addProp(el, 'value', "(" + value + ")");
  addHandler(el, event, code, null, true);
  if (trim || number || type === 'number') {
    addHandler(el, 'blur', '$forceUpdate()');
  }
}

function normalizeEvents(on) {
  var event;

  if (on[RANGE_TOKEN]) {
    event = isIE ? 'change' : 'input';
    on[event] = [].concat(on[RANGE_TOKEN], on[event] || []);
    delete on[RANGE_TOKEN];
  }
  if (on[CHECKBOX_RADIO_TOKEN]) {
    event = isChrome ? 'click' : 'change';
    on[event] = [].concat(on[CHECKBOX_RADIO_TOKEN], on[event] || []);
    delete on[CHECKBOX_RADIO_TOKEN];
  }
}

var target$1;

function add$1(event, _handler, once, capture) {
  if (once) {
    var oldHandler = _handler;
    var _target = target$1;
    _handler = function handler(ev) {
      var res = arguments.length === 1 ? oldHandler(ev) : oldHandler.apply(null, arguments);
      if (res !== null) {
        remove$2(event, _handler, capture, _target);
      }
    };
  }
  target$1.addEventListener(event, _handler, capture);
}

function remove$2(event, handler, capture, _target) {
  (_target || target$1).removeEventListener(event, handler, capture);
}

function updateDOMListeners(oldVnode, vnode) {
  if (!oldVnode.data.on && !vnode.data.on) {
    return;
  }
  var on = vnode.data.on || {};
  var oldOn = oldVnode.data.on || {};
  target$1 = vnode.elm;
  normalizeEvents(on);
  updateListeners(on, oldOn, add$1, remove$2, vnode.context);
}

var events = {
  create: updateDOMListeners,
  update: updateDOMListeners
};

function updateDOMProps(oldVnode, vnode) {
  if (!oldVnode.data.domProps && !vnode.data.domProps) {
    return;
  }
  var key, cur;
  var elm = vnode.elm;
  var oldProps = oldVnode.data.domProps || {};
  var props = vnode.data.domProps || {};

  if (props.__ob__) {
    props = vnode.data.domProps = extend({}, props);
  }

  for (key in oldProps) {
    if (props[key] == null) {
      elm[key] = '';
    }
  }
  for (key in props) {
    cur = props[key];

    if (key === 'textContent' || key === 'innerHTML') {
      if (vnode.children) {
        vnode.children.length = 0;
      }
      if (cur === oldProps[key]) {
        continue;
      }
    }

    if (key === 'value') {
      elm._value = cur;

      var strCur = cur == null ? '' : String(cur);
      if (shouldUpdateValue(elm, vnode, strCur)) {
        elm.value = strCur;
      }
    } else {
      elm[key] = cur;
    }
  }
}

function shouldUpdateValue(elm, vnode, checkVal) {
  return !elm.composing && (vnode.tag === 'option' || isDirty(elm, checkVal) || isInputChanged(elm, checkVal));
}

function isDirty(elm, checkVal) {
  return document.activeElement !== elm && elm.value !== checkVal;
}

function isInputChanged(elm, newVal) {
  var value = elm.value;
  var modifiers = elm._vModifiers;
  if (modifiers && modifiers.number || elm.type === 'number') {
    return toNumber(value) !== toNumber(newVal);
  }
  if (modifiers && modifiers.trim) {
    return value.trim() !== newVal.trim();
  }
  return value !== newVal;
}

var domProps = {
  create: updateDOMProps,
  update: updateDOMProps
};

var parseStyleText = cached(function (cssText) {
  var res = {};
  var listDelimiter = /;(?![^(]*\))/g;
  var propertyDelimiter = /:(.+)/;
  cssText.split(listDelimiter).forEach(function (item) {
    if (item) {
      var tmp = item.split(propertyDelimiter);
      tmp.length > 1 && (res[tmp[0].trim()] = tmp[1].trim());
    }
  });
  return res;
});

function normalizeStyleData(data) {
  var style = normalizeStyleBinding(data.style);

  return data.staticStyle ? extend(data.staticStyle, style) : style;
}

function normalizeStyleBinding(bindingStyle) {
  if (Array.isArray(bindingStyle)) {
    return toObject(bindingStyle);
  }
  if (typeof bindingStyle === 'string') {
    return parseStyleText(bindingStyle);
  }
  return bindingStyle;
}

function getStyle(vnode, checkChild) {
  var res = {};
  var styleData;

  if (checkChild) {
    var childNode = vnode;
    while (childNode.componentInstance) {
      childNode = childNode.componentInstance._vnode;
      if (childNode.data && (styleData = normalizeStyleData(childNode.data))) {
        extend(res, styleData);
      }
    }
  }

  if (styleData = normalizeStyleData(vnode.data)) {
    extend(res, styleData);
  }

  var parentNode = vnode;
  while (parentNode = parentNode.parent) {
    if (parentNode.data && (styleData = normalizeStyleData(parentNode.data))) {
      extend(res, styleData);
    }
  }
  return res;
}

var cssVarRE = /^--/;
var importantRE = /\s*!important$/;
var setProp = function setProp(el, name, val) {
  if (cssVarRE.test(name)) {
    el.style.setProperty(name, val);
  } else if (importantRE.test(val)) {
    el.style.setProperty(name, val.replace(importantRE, ''), 'important');
  } else {
    el.style[normalize(name)] = val;
  }
};

var prefixes = ['Webkit', 'Moz', 'ms'];

var testEl;
var normalize = cached(function (prop) {
  testEl = testEl || document.createElement('div');
  prop = camelize(prop);
  if (prop !== 'filter' && prop in testEl.style) {
    return prop;
  }
  var upper = prop.charAt(0).toUpperCase() + prop.slice(1);
  for (var i = 0; i < prefixes.length; i++) {
    var prefixed = prefixes[i] + upper;
    if (prefixed in testEl.style) {
      return prefixed;
    }
  }
});

function updateStyle(oldVnode, vnode) {
  var data = vnode.data;
  var oldData = oldVnode.data;

  if (!data.staticStyle && !data.style && !oldData.staticStyle && !oldData.style) {
    return;
  }

  var cur, name;
  var el = vnode.elm;
  var oldStaticStyle = oldVnode.data.staticStyle;
  var oldStyleBinding = oldVnode.data.style || {};

  var oldStyle = oldStaticStyle || oldStyleBinding;

  var style = normalizeStyleBinding(vnode.data.style) || {};

  vnode.data.style = style.__ob__ ? extend({}, style) : style;

  var newStyle = getStyle(vnode, true);

  for (name in oldStyle) {
    if (newStyle[name] == null) {
      setProp(el, name, '');
    }
  }
  for (name in newStyle) {
    cur = newStyle[name];
    if (cur !== oldStyle[name]) {
      setProp(el, name, cur == null ? '' : cur);
    }
  }
}

var style = {
  create: updateStyle,
  update: updateStyle
};

function addClass(el, cls) {
  if (!cls || !(cls = cls.trim())) {
    return;
  }

  if (el.classList) {
    if (cls.indexOf(' ') > -1) {
      cls.split(/\s+/).forEach(function (c) {
        return el.classList.add(c);
      });
    } else {
      el.classList.add(cls);
    }
  } else {
    var cur = " " + (el.getAttribute('class') || '') + " ";
    if (cur.indexOf(' ' + cls + ' ') < 0) {
      el.setAttribute('class', (cur + cls).trim());
    }
  }
}

function removeClass(el, cls) {
  if (!cls || !(cls = cls.trim())) {
    return;
  }

  if (el.classList) {
    if (cls.indexOf(' ') > -1) {
      cls.split(/\s+/).forEach(function (c) {
        return el.classList.remove(c);
      });
    } else {
      el.classList.remove(cls);
    }
  } else {
    var cur = " " + (el.getAttribute('class') || '') + " ";
    var tar = ' ' + cls + ' ';
    while (cur.indexOf(tar) >= 0) {
      cur = cur.replace(tar, ' ');
    }
    el.setAttribute('class', cur.trim());
  }
}

function resolveTransition(def$$1) {
  if (!def$$1) {
    return;
  }

  if ((typeof def$$1 === 'undefined' ? 'undefined' : _typeof(def$$1)) === 'object') {
    var res = {};
    if (def$$1.css !== false) {
      extend(res, autoCssTransition(def$$1.name || 'v'));
    }
    extend(res, def$$1);
    return res;
  } else if (typeof def$$1 === 'string') {
    return autoCssTransition(def$$1);
  }
}

var autoCssTransition = cached(function (name) {
  return {
    enterClass: name + "-enter",
    enterToClass: name + "-enter-to",
    enterActiveClass: name + "-enter-active",
    leaveClass: name + "-leave",
    leaveToClass: name + "-leave-to",
    leaveActiveClass: name + "-leave-active"
  };
});

var hasTransition = inBrowser && !isIE9;
var TRANSITION = 'transition';
var ANIMATION = 'animation';

var transitionProp = 'transition';
var transitionEndEvent = 'transitionend';
var animationProp = 'animation';
var animationEndEvent = 'animationend';
if (hasTransition) {
  if (window.ontransitionend === undefined && window.onwebkittransitionend !== undefined) {
    transitionProp = 'WebkitTransition';
    transitionEndEvent = 'webkitTransitionEnd';
  }
  if (window.onanimationend === undefined && window.onwebkitanimationend !== undefined) {
    animationProp = 'WebkitAnimation';
    animationEndEvent = 'webkitAnimationEnd';
  }
}

var raf = inBrowser && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : setTimeout;

function nextFrame(fn) {
  raf(function () {
    raf(fn);
  });
}

function addTransitionClass(el, cls) {
  (el._transitionClasses || (el._transitionClasses = [])).push(cls);
  addClass(el, cls);
}

function removeTransitionClass(el, cls) {
  if (el._transitionClasses) {
    remove(el._transitionClasses, cls);
  }
  removeClass(el, cls);
}

function whenTransitionEnds(el, expectedType, cb) {
  var ref = getTransitionInfo(el, expectedType);
  var type = ref.type;
  var timeout = ref.timeout;
  var propCount = ref.propCount;
  if (!type) {
    return cb();
  }
  var event = type === TRANSITION ? transitionEndEvent : animationEndEvent;
  var ended = 0;
  var end = function end() {
    el.removeEventListener(event, onEnd);
    cb();
  };
  var onEnd = function onEnd(e) {
    if (e.target === el) {
      if (++ended >= propCount) {
        end();
      }
    }
  };
  setTimeout(function () {
    if (ended < propCount) {
      end();
    }
  }, timeout + 1);
  el.addEventListener(event, onEnd);
}

var transformRE = /\b(transform|all)(,|$)/;

function getTransitionInfo(el, expectedType) {
  var styles = window.getComputedStyle(el);
  var transitionDelays = styles[transitionProp + 'Delay'].split(', ');
  var transitionDurations = styles[transitionProp + 'Duration'].split(', ');
  var transitionTimeout = getTimeout(transitionDelays, transitionDurations);
  var animationDelays = styles[animationProp + 'Delay'].split(', ');
  var animationDurations = styles[animationProp + 'Duration'].split(', ');
  var animationTimeout = getTimeout(animationDelays, animationDurations);

  var type;
  var timeout = 0;
  var propCount = 0;

  if (expectedType === TRANSITION) {
    if (transitionTimeout > 0) {
      type = TRANSITION;
      timeout = transitionTimeout;
      propCount = transitionDurations.length;
    }
  } else if (expectedType === ANIMATION) {
    if (animationTimeout > 0) {
      type = ANIMATION;
      timeout = animationTimeout;
      propCount = animationDurations.length;
    }
  } else {
    timeout = Math.max(transitionTimeout, animationTimeout);
    type = timeout > 0 ? transitionTimeout > animationTimeout ? TRANSITION : ANIMATION : null;
    propCount = type ? type === TRANSITION ? transitionDurations.length : animationDurations.length : 0;
  }
  var hasTransform = type === TRANSITION && transformRE.test(styles[transitionProp + 'Property']);
  return {
    type: type,
    timeout: timeout,
    propCount: propCount,
    hasTransform: hasTransform
  };
}

function getTimeout(delays, durations) {
  while (delays.length < durations.length) {
    delays = delays.concat(delays);
  }

  return Math.max.apply(null, durations.map(function (d, i) {
    return toMs(d) + toMs(delays[i]);
  }));
}

function toMs(s) {
  return Number(s.slice(0, -1)) * 1000;
}

function enter(vnode, toggleDisplay) {
  var el = vnode.elm;

  if (el._leaveCb) {
    el._leaveCb.cancelled = true;
    el._leaveCb();
  }

  var data = resolveTransition(vnode.data.transition);
  if (!data) {
    return;
  }

  if (el._enterCb || el.nodeType !== 1) {
    return;
  }

  var css = data.css;
  var type = data.type;
  var enterClass = data.enterClass;
  var enterToClass = data.enterToClass;
  var enterActiveClass = data.enterActiveClass;
  var appearClass = data.appearClass;
  var appearToClass = data.appearToClass;
  var appearActiveClass = data.appearActiveClass;
  var beforeEnter = data.beforeEnter;
  var enter = data.enter;
  var afterEnter = data.afterEnter;
  var enterCancelled = data.enterCancelled;
  var beforeAppear = data.beforeAppear;
  var appear = data.appear;
  var afterAppear = data.afterAppear;
  var appearCancelled = data.appearCancelled;
  var duration = data.duration;

  var context = activeInstance;
  var transitionNode = activeInstance.$vnode;
  while (transitionNode && transitionNode.parent) {
    transitionNode = transitionNode.parent;
    context = transitionNode.context;
  }

  var isAppear = !context._isMounted || !vnode.isRootInsert;

  if (isAppear && !appear && appear !== '') {
    return;
  }

  var startClass = isAppear && appearClass ? appearClass : enterClass;
  var activeClass = isAppear && appearActiveClass ? appearActiveClass : enterActiveClass;
  var toClass = isAppear && appearToClass ? appearToClass : enterToClass;

  var beforeEnterHook = isAppear ? beforeAppear || beforeEnter : beforeEnter;
  var enterHook = isAppear ? typeof appear === 'function' ? appear : enter : enter;
  var afterEnterHook = isAppear ? afterAppear || afterEnter : afterEnter;
  var enterCancelledHook = isAppear ? appearCancelled || enterCancelled : enterCancelled;

  var explicitEnterDuration = toNumber(isObject(duration) ? duration.enter : duration);

  if (process.env.NODE_ENV !== 'production' && explicitEnterDuration != null) {
    checkDuration(explicitEnterDuration, 'enter', vnode);
  }

  var expectsCSS = css !== false && !isIE9;
  var userWantsControl = getHookArgumentsLength(enterHook);

  var cb = el._enterCb = once(function () {
    if (expectsCSS) {
      removeTransitionClass(el, toClass);
      removeTransitionClass(el, activeClass);
    }
    if (cb.cancelled) {
      if (expectsCSS) {
        removeTransitionClass(el, startClass);
      }
      enterCancelledHook && enterCancelledHook(el);
    } else {
      afterEnterHook && afterEnterHook(el);
    }
    el._enterCb = null;
  });

  if (!vnode.data.show) {
    mergeVNodeHook(vnode.data.hook || (vnode.data.hook = {}), 'insert', function () {
      var parent = el.parentNode;
      var pendingNode = parent && parent._pending && parent._pending[vnode.key];
      if (pendingNode && pendingNode.tag === vnode.tag && pendingNode.elm._leaveCb) {
        pendingNode.elm._leaveCb();
      }
      enterHook && enterHook(el, cb);
    });
  }

  beforeEnterHook && beforeEnterHook(el);
  if (expectsCSS) {
    addTransitionClass(el, startClass);
    addTransitionClass(el, activeClass);
    nextFrame(function () {
      addTransitionClass(el, toClass);
      removeTransitionClass(el, startClass);
      if (!cb.cancelled && !userWantsControl) {
        if (isValidDuration(explicitEnterDuration)) {
          setTimeout(cb, explicitEnterDuration);
        } else {
          whenTransitionEnds(el, type, cb);
        }
      }
    });
  }

  if (vnode.data.show) {
    toggleDisplay && toggleDisplay();
    enterHook && enterHook(el, cb);
  }

  if (!expectsCSS && !userWantsControl) {
    cb();
  }
}

function leave(vnode, rm) {
  var el = vnode.elm;

  if (el._enterCb) {
    el._enterCb.cancelled = true;
    el._enterCb();
  }

  var data = resolveTransition(vnode.data.transition);
  if (!data) {
    return rm();
  }

  if (el._leaveCb || el.nodeType !== 1) {
    return;
  }

  var css = data.css;
  var type = data.type;
  var leaveClass = data.leaveClass;
  var leaveToClass = data.leaveToClass;
  var leaveActiveClass = data.leaveActiveClass;
  var beforeLeave = data.beforeLeave;
  var leave = data.leave;
  var afterLeave = data.afterLeave;
  var leaveCancelled = data.leaveCancelled;
  var delayLeave = data.delayLeave;
  var duration = data.duration;

  var expectsCSS = css !== false && !isIE9;
  var userWantsControl = getHookArgumentsLength(leave);

  var explicitLeaveDuration = toNumber(isObject(duration) ? duration.leave : duration);

  if (process.env.NODE_ENV !== 'production' && explicitLeaveDuration != null) {
    checkDuration(explicitLeaveDuration, 'leave', vnode);
  }

  var cb = el._leaveCb = once(function () {
    if (el.parentNode && el.parentNode._pending) {
      el.parentNode._pending[vnode.key] = null;
    }
    if (expectsCSS) {
      removeTransitionClass(el, leaveToClass);
      removeTransitionClass(el, leaveActiveClass);
    }
    if (cb.cancelled) {
      if (expectsCSS) {
        removeTransitionClass(el, leaveClass);
      }
      leaveCancelled && leaveCancelled(el);
    } else {
      rm();
      afterLeave && afterLeave(el);
    }
    el._leaveCb = null;
  });

  if (delayLeave) {
    delayLeave(performLeave);
  } else {
    performLeave();
  }

  function performLeave() {
    if (cb.cancelled) {
      return;
    }

    if (!vnode.data.show) {
      (el.parentNode._pending || (el.parentNode._pending = {}))[vnode.key] = vnode;
    }
    beforeLeave && beforeLeave(el);
    if (expectsCSS) {
      addTransitionClass(el, leaveClass);
      addTransitionClass(el, leaveActiveClass);
      nextFrame(function () {
        addTransitionClass(el, leaveToClass);
        removeTransitionClass(el, leaveClass);
        if (!cb.cancelled && !userWantsControl) {
          if (isValidDuration(explicitLeaveDuration)) {
            setTimeout(cb, explicitLeaveDuration);
          } else {
            whenTransitionEnds(el, type, cb);
          }
        }
      });
    }
    leave && leave(el, cb);
    if (!expectsCSS && !userWantsControl) {
      cb();
    }
  }
}

function checkDuration(val, name, vnode) {
  if (typeof val !== 'number') {
    warn("<transition> explicit " + name + " duration is not a valid number - " + "got " + JSON.stringify(val) + ".", vnode.context);
  } else if (isNaN(val)) {
    warn("<transition> explicit " + name + " duration is NaN - " + 'the duration expression might be incorrect.', vnode.context);
  }
}

function isValidDuration(val) {
  return typeof val === 'number' && !isNaN(val);
}

function getHookArgumentsLength(fn) {
  if (!fn) {
    return false;
  }
  var invokerFns = fn.fns;
  if (invokerFns) {
    return getHookArgumentsLength(Array.isArray(invokerFns) ? invokerFns[0] : invokerFns);
  } else {
    return (fn._length || fn.length) > 1;
  }
}

function _enter(_, vnode) {
  if (!vnode.data.show) {
    enter(vnode);
  }
}

var transition = inBrowser ? {
  create: _enter,
  activate: _enter,
  remove: function remove$$1(vnode, rm) {
    if (!vnode.data.show) {
      leave(vnode, rm);
    } else {
      rm();
    }
  }
} : {};

var platformModules = [attrs, klass, events, domProps, style, transition];

var modules = platformModules.concat(baseModules);

var patch = createPatchFunction({ nodeOps: nodeOps, modules: modules });

if (isIE9) {
  document.addEventListener('selectionchange', function () {
    var el = document.activeElement;
    if (el && el.vmodel) {
      trigger(el, 'input');
    }
  });
}

var model$1 = {
  inserted: function inserted(el, binding, vnode) {
    if (vnode.tag === 'select') {
      var cb = function cb() {
        setSelected(el, binding, vnode.context);
      };
      cb();

      if (isIE || isEdge) {
        setTimeout(cb, 0);
      }
    } else if (vnode.tag === 'textarea' || el.type === 'text' || el.type === 'password') {
      el._vModifiers = binding.modifiers;
      if (!binding.modifiers.lazy) {
        if (!isAndroid) {
          el.addEventListener('compositionstart', onCompositionStart);
          el.addEventListener('compositionend', onCompositionEnd);
        }

        if (isIE9) {
          el.vmodel = true;
        }
      }
    }
  },
  componentUpdated: function componentUpdated(el, binding, vnode) {
    if (vnode.tag === 'select') {
      setSelected(el, binding, vnode.context);

      var needReset = el.multiple ? binding.value.some(function (v) {
        return hasNoMatchingOption(v, el.options);
      }) : binding.value !== binding.oldValue && hasNoMatchingOption(binding.value, el.options);
      if (needReset) {
        trigger(el, 'change');
      }
    }
  }
};

function setSelected(el, binding, vm) {
  var value = binding.value;
  var isMultiple = el.multiple;
  if (isMultiple && !Array.isArray(value)) {
    process.env.NODE_ENV !== 'production' && warn("<select multiple v-model=\"" + binding.expression + "\"> " + "expects an Array value for its binding, but got " + Object.prototype.toString.call(value).slice(8, -1), vm);
    return;
  }
  var selected, option;
  for (var i = 0, l = el.options.length; i < l; i++) {
    option = el.options[i];
    if (isMultiple) {
      selected = looseIndexOf(value, getValue(option)) > -1;
      if (option.selected !== selected) {
        option.selected = selected;
      }
    } else {
      if (looseEqual(getValue(option), value)) {
        if (el.selectedIndex !== i) {
          el.selectedIndex = i;
        }
        return;
      }
    }
  }
  if (!isMultiple) {
    el.selectedIndex = -1;
  }
}

function hasNoMatchingOption(value, options) {
  for (var i = 0, l = options.length; i < l; i++) {
    if (looseEqual(getValue(options[i]), value)) {
      return false;
    }
  }
  return true;
}

function getValue(option) {
  return '_value' in option ? option._value : option.value;
}

function onCompositionStart(e) {
  e.target.composing = true;
}

function onCompositionEnd(e) {
  e.target.composing = false;
  trigger(e.target, 'input');
}

function trigger(el, type) {
  var e = document.createEvent('HTMLEvents');
  e.initEvent(type, true, true);
  el.dispatchEvent(e);
}

function locateNode(vnode) {
  return vnode.componentInstance && (!vnode.data || !vnode.data.transition) ? locateNode(vnode.componentInstance._vnode) : vnode;
}

var show = {
  bind: function bind(el, ref, vnode) {
    var value = ref.value;

    vnode = locateNode(vnode);
    var transition = vnode.data && vnode.data.transition;
    var originalDisplay = el.__vOriginalDisplay = el.style.display === 'none' ? '' : el.style.display;
    if (value && transition && !isIE9) {
      vnode.data.show = true;
      enter(vnode, function () {
        el.style.display = originalDisplay;
      });
    } else {
      el.style.display = value ? originalDisplay : 'none';
    }
  },

  update: function update(el, ref, vnode) {
    var value = ref.value;
    var oldValue = ref.oldValue;

    if (value === oldValue) {
      return;
    }
    vnode = locateNode(vnode);
    var transition = vnode.data && vnode.data.transition;
    if (transition && !isIE9) {
      vnode.data.show = true;
      if (value) {
        enter(vnode, function () {
          el.style.display = el.__vOriginalDisplay;
        });
      } else {
        leave(vnode, function () {
          el.style.display = 'none';
        });
      }
    } else {
      el.style.display = value ? el.__vOriginalDisplay : 'none';
    }
  },

  unbind: function unbind(el, binding, vnode, oldVnode, isDestroy) {
    if (!isDestroy) {
      el.style.display = el.__vOriginalDisplay;
    }
  }
};

var platformDirectives = {
  model: model$1,
  show: show
};

var transitionProps = {
  name: String,
  appear: Boolean,
  css: Boolean,
  mode: String,
  type: String,
  enterClass: String,
  leaveClass: String,
  enterToClass: String,
  leaveToClass: String,
  enterActiveClass: String,
  leaveActiveClass: String,
  appearClass: String,
  appearActiveClass: String,
  appearToClass: String,
  duration: [Number, String, Object]
};

function getRealChild(vnode) {
  var compOptions = vnode && vnode.componentOptions;
  if (compOptions && compOptions.Ctor.options.abstract) {
    return getRealChild(getFirstComponentChild(compOptions.children));
  } else {
    return vnode;
  }
}

function extractTransitionData(comp) {
  var data = {};
  var options = comp.$options;

  for (var key in options.propsData) {
    data[key] = comp[key];
  }

  var listeners = options._parentListeners;
  for (var key$1 in listeners) {
    data[camelize(key$1)] = listeners[key$1];
  }
  return data;
}

function placeholder(h, rawChild) {
  return (/\d-keep-alive$/.test(rawChild.tag) ? h('keep-alive') : null
  );
}

function hasParentTransition(vnode) {
  while (vnode = vnode.parent) {
    if (vnode.data.transition) {
      return true;
    }
  }
}

function isSameChild(child, oldChild) {
  return oldChild.key === child.key && oldChild.tag === child.tag;
}

var Transition = {
  name: 'transition',
  props: transitionProps,
  abstract: true,

  render: function render(h) {
    var this$1 = this;

    var children = this.$slots.default;
    if (!children) {
      return;
    }

    children = children.filter(function (c) {
      return c.tag;
    });

    if (!children.length) {
      return;
    }

    if (process.env.NODE_ENV !== 'production' && children.length > 1) {
      warn('<transition> can only be used on a single element. Use ' + '<transition-group> for lists.', this.$parent);
    }

    var mode = this.mode;

    if (process.env.NODE_ENV !== 'production' && mode && mode !== 'in-out' && mode !== 'out-in') {
      warn('invalid <transition> mode: ' + mode, this.$parent);
    }

    var rawChild = children[0];

    if (hasParentTransition(this.$vnode)) {
      return rawChild;
    }

    var child = getRealChild(rawChild);

    if (!child) {
      return rawChild;
    }

    if (this._leaving) {
      return placeholder(h, rawChild);
    }

    var id = "__transition-" + this._uid + "-";
    child.key = child.key == null ? id + child.tag : isPrimitive(child.key) ? String(child.key).indexOf(id) === 0 ? child.key : id + child.key : child.key;

    var data = (child.data || (child.data = {})).transition = extractTransitionData(this);
    var oldRawChild = this._vnode;
    var oldChild = getRealChild(oldRawChild);

    if (child.data.directives && child.data.directives.some(function (d) {
      return d.name === 'show';
    })) {
      child.data.show = true;
    }

    if (oldChild && oldChild.data && !isSameChild(child, oldChild)) {
      var oldData = oldChild && (oldChild.data.transition = extend({}, data));

      if (mode === 'out-in') {
        this._leaving = true;
        mergeVNodeHook(oldData, 'afterLeave', function () {
          this$1._leaving = false;
          this$1.$forceUpdate();
        });
        return placeholder(h, rawChild);
      } else if (mode === 'in-out') {
        var delayedLeave;
        var performLeave = function performLeave() {
          delayedLeave();
        };
        mergeVNodeHook(data, 'afterEnter', performLeave);
        mergeVNodeHook(data, 'enterCancelled', performLeave);
        mergeVNodeHook(oldData, 'delayLeave', function (leave) {
          delayedLeave = leave;
        });
      }
    }

    return rawChild;
  }
};

var props = extend({
  tag: String,
  moveClass: String
}, transitionProps);

delete props.mode;

var TransitionGroup = {
  props: props,

  render: function render(h) {
    var tag = this.tag || this.$vnode.data.tag || 'span';
    var map = Object.create(null);
    var prevChildren = this.prevChildren = this.children;
    var rawChildren = this.$slots.default || [];
    var children = this.children = [];
    var transitionData = extractTransitionData(this);

    for (var i = 0; i < rawChildren.length; i++) {
      var c = rawChildren[i];
      if (c.tag) {
        if (c.key != null && String(c.key).indexOf('__vlist') !== 0) {
          children.push(c);
          map[c.key] = c;(c.data || (c.data = {})).transition = transitionData;
        } else if (process.env.NODE_ENV !== 'production') {
          var opts = c.componentOptions;
          var name = opts ? opts.Ctor.options.name || opts.tag || '' : c.tag;
          warn("<transition-group> children must be keyed: <" + name + ">");
        }
      }
    }

    if (prevChildren) {
      var kept = [];
      var removed = [];
      for (var i$1 = 0; i$1 < prevChildren.length; i$1++) {
        var c$1 = prevChildren[i$1];
        c$1.data.transition = transitionData;
        c$1.data.pos = c$1.elm.getBoundingClientRect();
        if (map[c$1.key]) {
          kept.push(c$1);
        } else {
          removed.push(c$1);
        }
      }
      this.kept = h(tag, null, kept);
      this.removed = removed;
    }

    return h(tag, null, children);
  },

  beforeUpdate: function beforeUpdate() {
    this.__patch__(this._vnode, this.kept, false, true);
    this._vnode = this.kept;
  },

  updated: function updated() {
    var children = this.prevChildren;
    var moveClass = this.moveClass || (this.name || 'v') + '-move';
    if (!children.length || !this.hasMove(children[0].elm, moveClass)) {
      return;
    }

    children.forEach(callPendingCbs);
    children.forEach(recordPosition);
    children.forEach(applyTranslation);

    var body = document.body;
    var f = body.offsetHeight;

    children.forEach(function (c) {
      if (c.data.moved) {
        var el = c.elm;
        var s = el.style;
        addTransitionClass(el, moveClass);
        s.transform = s.WebkitTransform = s.transitionDuration = '';
        el.addEventListener(transitionEndEvent, el._moveCb = function cb(e) {
          if (!e || /transform$/.test(e.propertyName)) {
            el.removeEventListener(transitionEndEvent, cb);
            el._moveCb = null;
            removeTransitionClass(el, moveClass);
          }
        });
      }
    });
  },

  methods: {
    hasMove: function hasMove(el, moveClass) {
      if (!hasTransition) {
        return false;
      }
      if (this._hasMove != null) {
        return this._hasMove;
      }

      var clone = el.cloneNode();
      if (el._transitionClasses) {
        el._transitionClasses.forEach(function (cls) {
          removeClass(clone, cls);
        });
      }
      addClass(clone, moveClass);
      clone.style.display = 'none';
      this.$el.appendChild(clone);
      var info = getTransitionInfo(clone);
      this.$el.removeChild(clone);
      return this._hasMove = info.hasTransform;
    }
  }
};

function callPendingCbs(c) {
  if (c.elm._moveCb) {
    c.elm._moveCb();
  }

  if (c.elm._enterCb) {
    c.elm._enterCb();
  }
}

function recordPosition(c) {
  c.data.newPos = c.elm.getBoundingClientRect();
}

function applyTranslation(c) {
  var oldPos = c.data.pos;
  var newPos = c.data.newPos;
  var dx = oldPos.left - newPos.left;
  var dy = oldPos.top - newPos.top;
  if (dx || dy) {
    c.data.moved = true;
    var s = c.elm.style;
    s.transform = s.WebkitTransform = "translate(" + dx + "px," + dy + "px)";
    s.transitionDuration = '0s';
  }
}

var platformComponents = {
  Transition: Transition,
  TransitionGroup: TransitionGroup
};

Vue$3.config.mustUseProp = mustUseProp;
Vue$3.config.isReservedTag = isReservedTag;
Vue$3.config.getTagNamespace = getTagNamespace;
Vue$3.config.isUnknownElement = isUnknownElement;

extend(Vue$3.options.directives, platformDirectives);
extend(Vue$3.options.components, platformComponents);

Vue$3.prototype.__patch__ = inBrowser ? patch : noop;

Vue$3.prototype.$mount = function (el, hydrating) {
  el = el && inBrowser ? query(el) : undefined;
  return mountComponent(this, el, hydrating);
};

setTimeout(function () {
  if (config.devtools) {
    if (devtools) {
      devtools.emit('init', Vue$3);
    } else if (process.env.NODE_ENV !== 'production' && isChrome) {
      console[console.info ? 'info' : 'log']('Download the Vue Devtools extension for a better development experience:\n' + 'https://github.com/vuejs/vue-devtools');
    }
  }
  if (process.env.NODE_ENV !== 'production' && config.productionTip !== false && inBrowser && typeof console !== 'undefined') {
    console[console.info ? 'info' : 'log']("You are running Vue in development mode.\n" + "Make sure to turn on production mode when deploying for production.\n" + "See more tips at https://vuejs.org/guide/deployment.html");
  }
}, 0);

function shouldDecode(content, encoded) {
  var div = document.createElement('div');
  div.innerHTML = "<div a=\"" + content + "\">";
  return div.innerHTML.indexOf(encoded) > 0;
}

var shouldDecodeNewlines = inBrowser ? shouldDecode('\n', '&#10;') : false;

var isUnaryTag = makeMap('area,base,br,col,embed,frame,hr,img,input,isindex,keygen,' + 'link,meta,param,source,track,wbr');

var canBeLeftOpenTag = makeMap('colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr,source');

var isNonPhrasingTag = makeMap('address,article,aside,base,blockquote,body,caption,col,colgroup,dd,' + 'details,dialog,div,dl,dt,fieldset,figcaption,figure,footer,form,' + 'h1,h2,h3,h4,h5,h6,head,header,hgroup,hr,html,legend,li,menuitem,meta,' + 'optgroup,option,param,rp,rt,source,style,summary,tbody,td,tfoot,th,thead,' + 'title,tr,track');

var decoder;

function decode(html) {
  decoder = decoder || document.createElement('div');
  decoder.innerHTML = html;
  return decoder.textContent;
}

var singleAttrIdentifier = /([^\s"'<>/=]+)/;
var singleAttrAssign = /(?:=)/;
var singleAttrValues = [/"([^"]*)"+/.source, /'([^']*)'+/.source, /([^\s"'=<>`]+)/.source];
var attribute = new RegExp('^\\s*' + singleAttrIdentifier.source + '(?:\\s*(' + singleAttrAssign.source + ')' + '\\s*(?:' + singleAttrValues.join('|') + '))?');

var ncname = '[a-zA-Z_][\\w\\-\\.]*';
var qnameCapture = '((?:' + ncname + '\\:)?' + ncname + ')';
var startTagOpen = new RegExp('^<' + qnameCapture);
var startTagClose = /^\s*(\/?)>/;
var endTag = new RegExp('^<\\/' + qnameCapture + '[^>]*>');
var doctype = /^<!DOCTYPE [^>]+>/i;
var comment = /^<!--/;
var conditionalComment = /^<!\[/;

var IS_REGEX_CAPTURING_BROKEN = false;
'x'.replace(/x(.)?/g, function (m, g) {
  IS_REGEX_CAPTURING_BROKEN = g === '';
});

var isPlainTextElement = makeMap('script,style,textarea', true);
var reCache = {};

var decodingMap = {
  '&lt;': '<',
  '&gt;': '>',
  '&quot;': '"',
  '&amp;': '&',
  '&#10;': '\n'
};
var encodedAttr = /&(?:lt|gt|quot|amp);/g;
var encodedAttrWithNewLines = /&(?:lt|gt|quot|amp|#10);/g;

function decodeAttr(value, shouldDecodeNewlines) {
  var re = shouldDecodeNewlines ? encodedAttrWithNewLines : encodedAttr;
  return value.replace(re, function (match) {
    return decodingMap[match];
  });
}

function parseHTML(html, options) {
  var stack = [];
  var expectHTML = options.expectHTML;
  var isUnaryTag$$1 = options.isUnaryTag || no;
  var canBeLeftOpenTag$$1 = options.canBeLeftOpenTag || no;
  var index = 0;
  var last, lastTag;
  while (html) {
    last = html;

    if (!lastTag || !isPlainTextElement(lastTag)) {
      var textEnd = html.indexOf('<');
      if (textEnd === 0) {
        if (comment.test(html)) {
          var commentEnd = html.indexOf('-->');

          if (commentEnd >= 0) {
            advance(commentEnd + 3);
            continue;
          }
        }

        if (conditionalComment.test(html)) {
          var conditionalEnd = html.indexOf(']>');

          if (conditionalEnd >= 0) {
            advance(conditionalEnd + 2);
            continue;
          }
        }

        var doctypeMatch = html.match(doctype);
        if (doctypeMatch) {
          advance(doctypeMatch[0].length);
          continue;
        }

        var endTagMatch = html.match(endTag);
        if (endTagMatch) {
          var curIndex = index;
          advance(endTagMatch[0].length);
          parseEndTag(endTagMatch[1], curIndex, index);
          continue;
        }

        var startTagMatch = parseStartTag();
        if (startTagMatch) {
          handleStartTag(startTagMatch);
          continue;
        }
      }

      var text = void 0,
          rest$1 = void 0,
          next = void 0;
      if (textEnd >= 0) {
        rest$1 = html.slice(textEnd);
        while (!endTag.test(rest$1) && !startTagOpen.test(rest$1) && !comment.test(rest$1) && !conditionalComment.test(rest$1)) {
          next = rest$1.indexOf('<', 1);
          if (next < 0) {
            break;
          }
          textEnd += next;
          rest$1 = html.slice(textEnd);
        }
        text = html.substring(0, textEnd);
        advance(textEnd);
      }

      if (textEnd < 0) {
        text = html;
        html = '';
      }

      if (options.chars && text) {
        options.chars(text);
      }
    } else {
      var stackedTag = lastTag.toLowerCase();
      var reStackedTag = reCache[stackedTag] || (reCache[stackedTag] = new RegExp('([\\s\\S]*?)(</' + stackedTag + '[^>]*>)', 'i'));
      var endTagLength = 0;
      var rest = html.replace(reStackedTag, function (all, text, endTag) {
        endTagLength = endTag.length;
        if (!isPlainTextElement(stackedTag) && stackedTag !== 'noscript') {
          text = text.replace(/<!--([\s\S]*?)-->/g, '$1').replace(/<!\[CDATA\[([\s\S]*?)]]>/g, '$1');
        }
        if (options.chars) {
          options.chars(text);
        }
        return '';
      });
      index += html.length - rest.length;
      html = rest;
      parseEndTag(stackedTag, index - endTagLength, index);
    }

    if (html === last) {
      options.chars && options.chars(html);
      if (process.env.NODE_ENV !== 'production' && !stack.length && options.warn) {
        options.warn("Mal-formatted tag at end of template: \"" + html + "\"");
      }
      break;
    }
  }

  parseEndTag();

  function advance(n) {
    index += n;
    html = html.substring(n);
  }

  function parseStartTag() {
    var start = html.match(startTagOpen);
    if (start) {
      var match = {
        tagName: start[1],
        attrs: [],
        start: index
      };
      advance(start[0].length);
      var end, attr;
      while (!(end = html.match(startTagClose)) && (attr = html.match(attribute))) {
        advance(attr[0].length);
        match.attrs.push(attr);
      }
      if (end) {
        match.unarySlash = end[1];
        advance(end[0].length);
        match.end = index;
        return match;
      }
    }
  }

  function handleStartTag(match) {
    var tagName = match.tagName;
    var unarySlash = match.unarySlash;

    if (expectHTML) {
      if (lastTag === 'p' && isNonPhrasingTag(tagName)) {
        parseEndTag(lastTag);
      }
      if (canBeLeftOpenTag$$1(tagName) && lastTag === tagName) {
        parseEndTag(tagName);
      }
    }

    var unary = isUnaryTag$$1(tagName) || tagName === 'html' && lastTag === 'head' || !!unarySlash;

    var l = match.attrs.length;
    var attrs = new Array(l);
    for (var i = 0; i < l; i++) {
      var args = match.attrs[i];

      if (IS_REGEX_CAPTURING_BROKEN && args[0].indexOf('""') === -1) {
        if (args[3] === '') {
          delete args[3];
        }
        if (args[4] === '') {
          delete args[4];
        }
        if (args[5] === '') {
          delete args[5];
        }
      }
      var value = args[3] || args[4] || args[5] || '';
      attrs[i] = {
        name: args[1],
        value: decodeAttr(value, options.shouldDecodeNewlines)
      };
    }

    if (!unary) {
      stack.push({ tag: tagName, lowerCasedTag: tagName.toLowerCase(), attrs: attrs });
      lastTag = tagName;
    }

    if (options.start) {
      options.start(tagName, attrs, unary, match.start, match.end);
    }
  }

  function parseEndTag(tagName, start, end) {
    var pos, lowerCasedTagName;
    if (start == null) {
      start = index;
    }
    if (end == null) {
      end = index;
    }

    if (tagName) {
      lowerCasedTagName = tagName.toLowerCase();
    }

    if (tagName) {
      for (pos = stack.length - 1; pos >= 0; pos--) {
        if (stack[pos].lowerCasedTag === lowerCasedTagName) {
          break;
        }
      }
    } else {
      pos = 0;
    }

    if (pos >= 0) {
      for (var i = stack.length - 1; i >= pos; i--) {
        if (process.env.NODE_ENV !== 'production' && (i > pos || !tagName) && options.warn) {
          options.warn("tag <" + stack[i].tag + "> has no matching end tag.");
        }
        if (options.end) {
          options.end(stack[i].tag, start, end);
        }
      }

      stack.length = pos;
      lastTag = pos && stack[pos - 1].tag;
    } else if (lowerCasedTagName === 'br') {
      if (options.start) {
        options.start(tagName, [], true, start, end);
      }
    } else if (lowerCasedTagName === 'p') {
      if (options.start) {
        options.start(tagName, [], false, start, end);
      }
      if (options.end) {
        options.end(tagName, start, end);
      }
    }
  }
}

var defaultTagRE = /\{\{((?:.|\n)+?)\}\}/g;
var regexEscapeRE = /[-.*+?^${}()|[\]\/\\]/g;

var buildRegex = cached(function (delimiters) {
  var open = delimiters[0].replace(regexEscapeRE, '\\$&');
  var close = delimiters[1].replace(regexEscapeRE, '\\$&');
  return new RegExp(open + '((?:.|\\n)+?)' + close, 'g');
});

function parseText(text, delimiters) {
  var tagRE = delimiters ? buildRegex(delimiters) : defaultTagRE;
  if (!tagRE.test(text)) {
    return;
  }
  var tokens = [];
  var lastIndex = tagRE.lastIndex = 0;
  var match, index;
  while (match = tagRE.exec(text)) {
    index = match.index;

    if (index > lastIndex) {
      tokens.push(JSON.stringify(text.slice(lastIndex, index)));
    }

    var exp = parseFilters(match[1].trim());
    tokens.push("_s(" + exp + ")");
    lastIndex = index + match[0].length;
  }
  if (lastIndex < text.length) {
    tokens.push(JSON.stringify(text.slice(lastIndex)));
  }
  return tokens.join('+');
}

var onRE = /^@|^v-on:/;
var dirRE = /^v-|^@|^:/;
var forAliasRE = /(.*?)\s+(?:in|of)\s+(.*)/;
var forIteratorRE = /\((\{[^}]*\}|[^,]*),([^,]*)(?:,([^,]*))?\)/;

var argRE = /:(.*)$/;
var bindRE = /^:|^v-bind:/;
var modifierRE = /\.[^.]+/g;

var decodeHTMLCached = cached(decode);

var warn$2;
var delimiters;
var transforms;
var preTransforms;
var postTransforms;
var platformIsPreTag;
var platformMustUseProp;
var platformGetTagNamespace;

function parse(template, options) {
  warn$2 = options.warn || baseWarn;
  platformGetTagNamespace = options.getTagNamespace || no;
  platformMustUseProp = options.mustUseProp || no;
  platformIsPreTag = options.isPreTag || no;
  preTransforms = pluckModuleFunction(options.modules, 'preTransformNode');
  transforms = pluckModuleFunction(options.modules, 'transformNode');
  postTransforms = pluckModuleFunction(options.modules, 'postTransformNode');
  delimiters = options.delimiters;

  var stack = [];
  var preserveWhitespace = options.preserveWhitespace !== false;
  var root;
  var currentParent;
  var inVPre = false;
  var inPre = false;
  var warned = false;

  function warnOnce(msg) {
    if (!warned) {
      warned = true;
      warn$2(msg);
    }
  }

  function endPre(element) {
    if (element.pre) {
      inVPre = false;
    }
    if (platformIsPreTag(element.tag)) {
      inPre = false;
    }
  }

  parseHTML(template, {
    warn: warn$2,
    expectHTML: options.expectHTML,
    isUnaryTag: options.isUnaryTag,
    canBeLeftOpenTag: options.canBeLeftOpenTag,
    shouldDecodeNewlines: options.shouldDecodeNewlines,
    start: function start(tag, attrs, unary) {
      var ns = currentParent && currentParent.ns || platformGetTagNamespace(tag);

      if (isIE && ns === 'svg') {
        attrs = guardIESVGBug(attrs);
      }

      var element = {
        type: 1,
        tag: tag,
        attrsList: attrs,
        attrsMap: makeAttrsMap(attrs),
        parent: currentParent,
        children: []
      };
      if (ns) {
        element.ns = ns;
      }

      if (isForbiddenTag(element) && !isServerRendering()) {
        element.forbidden = true;
        process.env.NODE_ENV !== 'production' && warn$2('Templates should only be responsible for mapping the state to the ' + 'UI. Avoid placing tags with side-effects in your templates, such as ' + "<" + tag + ">" + ', as they will not be parsed.');
      }

      for (var i = 0; i < preTransforms.length; i++) {
        preTransforms[i](element, options);
      }

      if (!inVPre) {
        processPre(element);
        if (element.pre) {
          inVPre = true;
        }
      }
      if (platformIsPreTag(element.tag)) {
        inPre = true;
      }
      if (inVPre) {
        processRawAttrs(element);
      } else {
        processFor(element);
        processIf(element);
        processOnce(element);
        processKey(element);

        element.plain = !element.key && !attrs.length;

        processRef(element);
        processSlot(element);
        processComponent(element);
        for (var i$1 = 0; i$1 < transforms.length; i$1++) {
          transforms[i$1](element, options);
        }
        processAttrs(element);
      }

      function checkRootConstraints(el) {
        if (process.env.NODE_ENV !== 'production') {
          if (el.tag === 'slot' || el.tag === 'template') {
            warnOnce("Cannot use <" + el.tag + "> as component root element because it may " + 'contain multiple nodes.');
          }
          if (el.attrsMap.hasOwnProperty('v-for')) {
            warnOnce('Cannot use v-for on stateful component root element because ' + 'it renders multiple elements.');
          }
        }
      }

      if (!root) {
        root = element;
        checkRootConstraints(root);
      } else if (!stack.length) {
        if (root.if && (element.elseif || element.else)) {
          checkRootConstraints(element);
          addIfCondition(root, {
            exp: element.elseif,
            block: element
          });
        } else if (process.env.NODE_ENV !== 'production') {
          warnOnce("Component template should contain exactly one root element. " + "If you are using v-if on multiple elements, " + "use v-else-if to chain them instead.");
        }
      }
      if (currentParent && !element.forbidden) {
        if (element.elseif || element.else) {
          processIfConditions(element, currentParent);
        } else if (element.slotScope) {
          currentParent.plain = false;
          var name = element.slotTarget || '"default"';(currentParent.scopedSlots || (currentParent.scopedSlots = {}))[name] = element;
        } else {
          currentParent.children.push(element);
          element.parent = currentParent;
        }
      }
      if (!unary) {
        currentParent = element;
        stack.push(element);
      } else {
        endPre(element);
      }

      for (var i$2 = 0; i$2 < postTransforms.length; i$2++) {
        postTransforms[i$2](element, options);
      }
    },

    end: function end() {
      var element = stack[stack.length - 1];
      var lastNode = element.children[element.children.length - 1];
      if (lastNode && lastNode.type === 3 && lastNode.text === ' ' && !inPre) {
        element.children.pop();
      }

      stack.length -= 1;
      currentParent = stack[stack.length - 1];
      endPre(element);
    },

    chars: function chars(text) {
      if (!currentParent) {
        if (process.env.NODE_ENV !== 'production') {
          if (text === template) {
            warnOnce('Component template requires a root element, rather than just text.');
          } else if (text = text.trim()) {
            warnOnce("text \"" + text + "\" outside root element will be ignored.");
          }
        }
        return;
      }

      if (isIE && currentParent.tag === 'textarea' && currentParent.attrsMap.placeholder === text) {
        return;
      }
      var children = currentParent.children;
      text = inPre || text.trim() ? decodeHTMLCached(text) : preserveWhitespace && children.length ? ' ' : '';
      if (text) {
        var expression;
        if (!inVPre && text !== ' ' && (expression = parseText(text, delimiters))) {
          children.push({
            type: 2,
            expression: expression,
            text: text
          });
        } else if (text !== ' ' || !children.length || children[children.length - 1].text !== ' ') {
          children.push({
            type: 3,
            text: text
          });
        }
      }
    }
  });
  return root;
}

function processPre(el) {
  if (getAndRemoveAttr(el, 'v-pre') != null) {
    el.pre = true;
  }
}

function processRawAttrs(el) {
  var l = el.attrsList.length;
  if (l) {
    var attrs = el.attrs = new Array(l);
    for (var i = 0; i < l; i++) {
      attrs[i] = {
        name: el.attrsList[i].name,
        value: JSON.stringify(el.attrsList[i].value)
      };
    }
  } else if (!el.pre) {
    el.plain = true;
  }
}

function processKey(el) {
  var exp = getBindingAttr(el, 'key');
  if (exp) {
    if (process.env.NODE_ENV !== 'production' && el.tag === 'template') {
      warn$2("<template> cannot be keyed. Place the key on real elements instead.");
    }
    el.key = exp;
  }
}

function processRef(el) {
  var ref = getBindingAttr(el, 'ref');
  if (ref) {
    el.ref = ref;
    el.refInFor = checkInFor(el);
  }
}

function processFor(el) {
  var exp;
  if (exp = getAndRemoveAttr(el, 'v-for')) {
    var inMatch = exp.match(forAliasRE);
    if (!inMatch) {
      process.env.NODE_ENV !== 'production' && warn$2("Invalid v-for expression: " + exp);
      return;
    }
    el.for = inMatch[2].trim();
    var alias = inMatch[1].trim();
    var iteratorMatch = alias.match(forIteratorRE);
    if (iteratorMatch) {
      el.alias = iteratorMatch[1].trim();
      el.iterator1 = iteratorMatch[2].trim();
      if (iteratorMatch[3]) {
        el.iterator2 = iteratorMatch[3].trim();
      }
    } else {
      el.alias = alias;
    }
  }
}

function processIf(el) {
  var exp = getAndRemoveAttr(el, 'v-if');
  if (exp) {
    el.if = exp;
    addIfCondition(el, {
      exp: exp,
      block: el
    });
  } else {
    if (getAndRemoveAttr(el, 'v-else') != null) {
      el.else = true;
    }
    var elseif = getAndRemoveAttr(el, 'v-else-if');
    if (elseif) {
      el.elseif = elseif;
    }
  }
}

function processIfConditions(el, parent) {
  var prev = findPrevElement(parent.children);
  if (prev && prev.if) {
    addIfCondition(prev, {
      exp: el.elseif,
      block: el
    });
  } else if (process.env.NODE_ENV !== 'production') {
    warn$2("v-" + (el.elseif ? 'else-if="' + el.elseif + '"' : 'else') + " " + "used on element <" + el.tag + "> without corresponding v-if.");
  }
}

function findPrevElement(children) {
  var i = children.length;
  while (i--) {
    if (children[i].type === 1) {
      return children[i];
    } else {
      if (process.env.NODE_ENV !== 'production' && children[i].text !== ' ') {
        warn$2("text \"" + children[i].text.trim() + "\" between v-if and v-else(-if) " + "will be ignored.");
      }
      children.pop();
    }
  }
}

function addIfCondition(el, condition) {
  if (!el.ifConditions) {
    el.ifConditions = [];
  }
  el.ifConditions.push(condition);
}

function processOnce(el) {
  var once$$1 = getAndRemoveAttr(el, 'v-once');
  if (once$$1 != null) {
    el.once = true;
  }
}

function processSlot(el) {
  if (el.tag === 'slot') {
    el.slotName = getBindingAttr(el, 'name');
    if (process.env.NODE_ENV !== 'production' && el.key) {
      warn$2("`key` does not work on <slot> because slots are abstract outlets " + "and can possibly expand into multiple elements. " + "Use the key on a wrapping element instead.");
    }
  } else {
    var slotTarget = getBindingAttr(el, 'slot');
    if (slotTarget) {
      el.slotTarget = slotTarget === '""' ? '"default"' : slotTarget;
    }
    if (el.tag === 'template') {
      el.slotScope = getAndRemoveAttr(el, 'scope');
    }
  }
}

function processComponent(el) {
  var binding;
  if (binding = getBindingAttr(el, 'is')) {
    el.component = binding;
  }
  if (getAndRemoveAttr(el, 'inline-template') != null) {
    el.inlineTemplate = true;
  }
}

function processAttrs(el) {
  var list = el.attrsList;
  var i, l, name, rawName, value, modifiers, isProp;
  for (i = 0, l = list.length; i < l; i++) {
    name = rawName = list[i].name;
    value = list[i].value;
    if (dirRE.test(name)) {
      el.hasBindings = true;

      modifiers = parseModifiers(name);
      if (modifiers) {
        name = name.replace(modifierRE, '');
      }
      if (bindRE.test(name)) {
        name = name.replace(bindRE, '');
        value = parseFilters(value);
        isProp = false;
        if (modifiers) {
          if (modifiers.prop) {
            isProp = true;
            name = camelize(name);
            if (name === 'innerHtml') {
              name = 'innerHTML';
            }
          }
          if (modifiers.camel) {
            name = camelize(name);
          }
        }
        if (isProp || platformMustUseProp(el.tag, el.attrsMap.type, name)) {
          addProp(el, name, value);
        } else {
          addAttr(el, name, value);
        }
      } else if (onRE.test(name)) {
        name = name.replace(onRE, '');
        addHandler(el, name, value, modifiers);
      } else {
        name = name.replace(dirRE, '');

        var argMatch = name.match(argRE);
        var arg = argMatch && argMatch[1];
        if (arg) {
          name = name.slice(0, -(arg.length + 1));
        }
        addDirective(el, name, rawName, value, arg, modifiers);
        if (process.env.NODE_ENV !== 'production' && name === 'model') {
          checkForAliasModel(el, value);
        }
      }
    } else {
      if (process.env.NODE_ENV !== 'production') {
        var expression = parseText(value, delimiters);
        if (expression) {
          warn$2(name + "=\"" + value + "\": " + 'Interpolation inside attributes has been removed. ' + 'Use v-bind or the colon shorthand instead. For example, ' + 'instead of <div id="{{ val }}">, use <div :id="val">.');
        }
      }
      addAttr(el, name, JSON.stringify(value));
    }
  }
}

function checkInFor(el) {
  var parent = el;
  while (parent) {
    if (parent.for !== undefined) {
      return true;
    }
    parent = parent.parent;
  }
  return false;
}

function parseModifiers(name) {
  var match = name.match(modifierRE);
  if (match) {
    var ret = {};
    match.forEach(function (m) {
      ret[m.slice(1)] = true;
    });
    return ret;
  }
}

function makeAttrsMap(attrs) {
  var map = {};
  for (var i = 0, l = attrs.length; i < l; i++) {
    if (process.env.NODE_ENV !== 'production' && map[attrs[i].name] && !isIE) {
      warn$2('duplicate attribute: ' + attrs[i].name);
    }
    map[attrs[i].name] = attrs[i].value;
  }
  return map;
}

function isForbiddenTag(el) {
  return el.tag === 'style' || el.tag === 'script' && (!el.attrsMap.type || el.attrsMap.type === 'text/javascript');
}

var ieNSBug = /^xmlns:NS\d+/;
var ieNSPrefix = /^NS\d+:/;

function guardIESVGBug(attrs) {
  var res = [];
  for (var i = 0; i < attrs.length; i++) {
    var attr = attrs[i];
    if (!ieNSBug.test(attr.name)) {
      attr.name = attr.name.replace(ieNSPrefix, '');
      res.push(attr);
    }
  }
  return res;
}

function checkForAliasModel(el, value) {
  var _el = el;
  while (_el) {
    if (_el.for && _el.alias === value) {
      warn$2("<" + el.tag + " v-model=\"" + value + "\">: " + "You are binding v-model directly to a v-for iteration alias. " + "This will not be able to modify the v-for source array because " + "writing to the alias is like modifying a function local variable. " + "Consider using an array of objects and use v-model on an object property instead.");
    }
    _el = _el.parent;
  }
}

var isStaticKey;
var isPlatformReservedTag;

var genStaticKeysCached = cached(genStaticKeys$1);

function optimize(root, options) {
  if (!root) {
    return;
  }
  isStaticKey = genStaticKeysCached(options.staticKeys || '');
  isPlatformReservedTag = options.isReservedTag || no;

  markStatic$1(root);

  markStaticRoots(root, false);
}

function genStaticKeys$1(keys) {
  return makeMap('type,tag,attrsList,attrsMap,plain,parent,children,attrs' + (keys ? ',' + keys : ''));
}

function markStatic$1(node) {
  node.static = isStatic(node);
  if (node.type === 1) {
    if (!isPlatformReservedTag(node.tag) && node.tag !== 'slot' && node.attrsMap['inline-template'] == null) {
      return;
    }
    for (var i = 0, l = node.children.length; i < l; i++) {
      var child = node.children[i];
      markStatic$1(child);
      if (!child.static) {
        node.static = false;
      }
    }
  }
}

function markStaticRoots(node, isInFor) {
  if (node.type === 1) {
    if (node.static || node.once) {
      node.staticInFor = isInFor;
    }

    if (node.static && node.children.length && !(node.children.length === 1 && node.children[0].type === 3)) {
      node.staticRoot = true;
      return;
    } else {
      node.staticRoot = false;
    }
    if (node.children) {
      for (var i = 0, l = node.children.length; i < l; i++) {
        markStaticRoots(node.children[i], isInFor || !!node.for);
      }
    }
    if (node.ifConditions) {
      walkThroughConditionsBlocks(node.ifConditions, isInFor);
    }
  }
}

function walkThroughConditionsBlocks(conditionBlocks, isInFor) {
  for (var i = 1, len = conditionBlocks.length; i < len; i++) {
    markStaticRoots(conditionBlocks[i].block, isInFor);
  }
}

function isStatic(node) {
  if (node.type === 2) {
    return false;
  }
  if (node.type === 3) {
    return true;
  }
  return !!(node.pre || !node.hasBindings && !node.if && !node.for && !isBuiltInTag(node.tag) && isPlatformReservedTag(node.tag) && !isDirectChildOfTemplateFor(node) && Object.keys(node).every(isStaticKey));
}

function isDirectChildOfTemplateFor(node) {
  while (node.parent) {
    node = node.parent;
    if (node.tag !== 'template') {
      return false;
    }
    if (node.for) {
      return true;
    }
  }
  return false;
}

var fnExpRE = /^\s*([\w$_]+|\([^)]*?\))\s*=>|^function\s*\(/;
var simplePathRE = /^\s*[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['.*?']|\[".*?"]|\[\d+]|\[[A-Za-z_$][\w$]*])*\s*$/;

var keyCodes = {
  esc: 27,
  tab: 9,
  enter: 13,
  space: 32,
  up: 38,
  left: 37,
  right: 39,
  down: 40,
  'delete': [8, 46]
};

var genGuard = function genGuard(condition) {
  return "if(" + condition + ")return null;";
};

var modifierCode = {
  stop: '$event.stopPropagation();',
  prevent: '$event.preventDefault();',
  self: genGuard("$event.target !== $event.currentTarget"),
  ctrl: genGuard("!$event.ctrlKey"),
  shift: genGuard("!$event.shiftKey"),
  alt: genGuard("!$event.altKey"),
  meta: genGuard("!$event.metaKey"),
  left: genGuard("'button' in $event && $event.button !== 0"),
  middle: genGuard("'button' in $event && $event.button !== 1"),
  right: genGuard("'button' in $event && $event.button !== 2")
};

function genHandlers(events, native) {
  var res = native ? 'nativeOn:{' : 'on:{';
  for (var name in events) {
    res += "\"" + name + "\":" + genHandler(name, events[name]) + ",";
  }
  return res.slice(0, -1) + '}';
}

function genHandler(name, handler) {
  if (!handler) {
    return 'function(){}';
  }

  if (Array.isArray(handler)) {
    return "[" + handler.map(function (handler) {
      return genHandler(name, handler);
    }).join(',') + "]";
  }

  var isMethodPath = simplePathRE.test(handler.value);
  var isFunctionExpression = fnExpRE.test(handler.value);

  if (!handler.modifiers) {
    return isMethodPath || isFunctionExpression ? handler.value : "function($event){" + handler.value + "}";
  } else {
    var code = '';
    var genModifierCode = '';
    var keys = [];
    for (var key in handler.modifiers) {
      if (modifierCode[key]) {
        genModifierCode += modifierCode[key];

        if (keyCodes[key]) {
          keys.push(key);
        }
      } else {
        keys.push(key);
      }
    }
    if (keys.length) {
      code += genKeyFilter(keys);
    }

    if (genModifierCode) {
      code += genModifierCode;
    }
    var handlerCode = isMethodPath ? handler.value + '($event)' : isFunctionExpression ? "(" + handler.value + ")($event)" : handler.value;
    return "function($event){" + code + handlerCode + "}";
  }
}

function genKeyFilter(keys) {
  return "if(!('button' in $event)&&" + keys.map(genFilterCode).join('&&') + ")return null;";
}

function genFilterCode(key) {
  var keyVal = parseInt(key, 10);
  if (keyVal) {
    return "$event.keyCode!==" + keyVal;
  }
  var alias = keyCodes[key];
  return "_k($event.keyCode," + JSON.stringify(key) + (alias ? ',' + JSON.stringify(alias) : '') + ")";
}

function bind$1(el, dir) {
  el.wrapData = function (code) {
    return "_b(" + code + ",'" + el.tag + "'," + dir.value + (dir.modifiers && dir.modifiers.prop ? ',true' : '') + ")";
  };
}

var baseDirectives = {
  bind: bind$1,
  cloak: noop
};

var warn$3;
var transforms$1;
var dataGenFns;
var platformDirectives$1;
var isPlatformReservedTag$1;
var staticRenderFns;
var onceCount;
var currentOptions;

function generate(ast, options) {
  var prevStaticRenderFns = staticRenderFns;
  var currentStaticRenderFns = staticRenderFns = [];
  var prevOnceCount = onceCount;
  onceCount = 0;
  currentOptions = options;
  warn$3 = options.warn || baseWarn;
  transforms$1 = pluckModuleFunction(options.modules, 'transformCode');
  dataGenFns = pluckModuleFunction(options.modules, 'genData');
  platformDirectives$1 = options.directives || {};
  isPlatformReservedTag$1 = options.isReservedTag || no;
  var code = ast ? genElement(ast) : '_c("div")';
  staticRenderFns = prevStaticRenderFns;
  onceCount = prevOnceCount;
  return {
    render: "with(this){return " + code + "}",
    staticRenderFns: currentStaticRenderFns
  };
}

function genElement(el) {
  if (el.staticRoot && !el.staticProcessed) {
    return genStatic(el);
  } else if (el.once && !el.onceProcessed) {
    return genOnce(el);
  } else if (el.for && !el.forProcessed) {
    return genFor(el);
  } else if (el.if && !el.ifProcessed) {
    return genIf(el);
  } else if (el.tag === 'template' && !el.slotTarget) {
    return genChildren(el) || 'void 0';
  } else if (el.tag === 'slot') {
    return genSlot(el);
  } else {
    var code;
    if (el.component) {
      code = genComponent(el.component, el);
    } else {
      var data = el.plain ? undefined : genData(el);

      var children = el.inlineTemplate ? null : genChildren(el, true);
      code = "_c('" + el.tag + "'" + (data ? "," + data : '') + (children ? "," + children : '') + ")";
    }

    for (var i = 0; i < transforms$1.length; i++) {
      code = transforms$1[i](el, code);
    }
    return code;
  }
}

function genStatic(el) {
  el.staticProcessed = true;
  staticRenderFns.push("with(this){return " + genElement(el) + "}");
  return "_m(" + (staticRenderFns.length - 1) + (el.staticInFor ? ',true' : '') + ")";
}

function genOnce(el) {
  el.onceProcessed = true;
  if (el.if && !el.ifProcessed) {
    return genIf(el);
  } else if (el.staticInFor) {
    var key = '';
    var parent = el.parent;
    while (parent) {
      if (parent.for) {
        key = parent.key;
        break;
      }
      parent = parent.parent;
    }
    if (!key) {
      process.env.NODE_ENV !== 'production' && warn$3("v-once can only be used inside v-for that is keyed. ");
      return genElement(el);
    }
    return "_o(" + genElement(el) + "," + onceCount++ + (key ? "," + key : "") + ")";
  } else {
    return genStatic(el);
  }
}

function genIf(el) {
  el.ifProcessed = true;
  return genIfConditions(el.ifConditions.slice());
}

function genIfConditions(conditions) {
  if (!conditions.length) {
    return '_e()';
  }

  var condition = conditions.shift();
  if (condition.exp) {
    return "(" + condition.exp + ")?" + genTernaryExp(condition.block) + ":" + genIfConditions(conditions);
  } else {
    return "" + genTernaryExp(condition.block);
  }

  function genTernaryExp(el) {
    return el.once ? genOnce(el) : genElement(el);
  }
}

function genFor(el) {
  var exp = el.for;
  var alias = el.alias;
  var iterator1 = el.iterator1 ? "," + el.iterator1 : '';
  var iterator2 = el.iterator2 ? "," + el.iterator2 : '';

  if (process.env.NODE_ENV !== 'production' && maybeComponent(el) && el.tag !== 'slot' && el.tag !== 'template' && !el.key) {
    warn$3("<" + el.tag + " v-for=\"" + alias + " in " + exp + "\">: component lists rendered with " + "v-for should have explicit keys. " + "See https://vuejs.org/guide/list.html#key for more info.", true);
  }

  el.forProcessed = true;
  return "_l((" + exp + ")," + "function(" + alias + iterator1 + iterator2 + "){" + "return " + genElement(el) + '})';
}

function genData(el) {
  var data = '{';

  var dirs = genDirectives(el);
  if (dirs) {
    data += dirs + ',';
  }

  if (el.key) {
    data += "key:" + el.key + ",";
  }

  if (el.ref) {
    data += "ref:" + el.ref + ",";
  }
  if (el.refInFor) {
    data += "refInFor:true,";
  }

  if (el.pre) {
    data += "pre:true,";
  }

  if (el.component) {
    data += "tag:\"" + el.tag + "\",";
  }

  for (var i = 0; i < dataGenFns.length; i++) {
    data += dataGenFns[i](el);
  }

  if (el.attrs) {
    data += "attrs:{" + genProps(el.attrs) + "},";
  }

  if (el.props) {
    data += "domProps:{" + genProps(el.props) + "},";
  }

  if (el.events) {
    data += genHandlers(el.events) + ",";
  }
  if (el.nativeEvents) {
    data += genHandlers(el.nativeEvents, true) + ",";
  }

  if (el.slotTarget) {
    data += "slot:" + el.slotTarget + ",";
  }

  if (el.scopedSlots) {
    data += genScopedSlots(el.scopedSlots) + ",";
  }

  if (el.model) {
    data += "model:{value:" + el.model.value + ",callback:" + el.model.callback + ",expression:" + el.model.expression + "},";
  }

  if (el.inlineTemplate) {
    var inlineTemplate = genInlineTemplate(el);
    if (inlineTemplate) {
      data += inlineTemplate + ",";
    }
  }
  data = data.replace(/,$/, '') + '}';

  if (el.wrapData) {
    data = el.wrapData(data);
  }
  return data;
}

function genDirectives(el) {
  var dirs = el.directives;
  if (!dirs) {
    return;
  }
  var res = 'directives:[';
  var hasRuntime = false;
  var i, l, dir, needRuntime;
  for (i = 0, l = dirs.length; i < l; i++) {
    dir = dirs[i];
    needRuntime = true;
    var gen = platformDirectives$1[dir.name] || baseDirectives[dir.name];
    if (gen) {
      needRuntime = !!gen(el, dir, warn$3);
    }
    if (needRuntime) {
      hasRuntime = true;
      res += "{name:\"" + dir.name + "\",rawName:\"" + dir.rawName + "\"" + (dir.value ? ",value:(" + dir.value + "),expression:" + JSON.stringify(dir.value) : '') + (dir.arg ? ",arg:\"" + dir.arg + "\"" : '') + (dir.modifiers ? ",modifiers:" + JSON.stringify(dir.modifiers) : '') + "},";
    }
  }
  if (hasRuntime) {
    return res.slice(0, -1) + ']';
  }
}

function genInlineTemplate(el) {
  var ast = el.children[0];
  if (process.env.NODE_ENV !== 'production' && (el.children.length > 1 || ast.type !== 1)) {
    warn$3('Inline-template components must have exactly one child element.');
  }
  if (ast.type === 1) {
    var inlineRenderFns = generate(ast, currentOptions);
    return "inlineTemplate:{render:function(){" + inlineRenderFns.render + "},staticRenderFns:[" + inlineRenderFns.staticRenderFns.map(function (code) {
      return "function(){" + code + "}";
    }).join(',') + "]}";
  }
}

function genScopedSlots(slots) {
  return "scopedSlots:_u([" + Object.keys(slots).map(function (key) {
    return genScopedSlot(key, slots[key]);
  }).join(',') + "])";
}

function genScopedSlot(key, el) {
  return "[" + key + ",function(" + String(el.attrsMap.scope) + "){" + "return " + (el.tag === 'template' ? genChildren(el) || 'void 0' : genElement(el)) + "}]";
}

function genChildren(el, checkSkip) {
  var children = el.children;
  if (children.length) {
    var el$1 = children[0];

    if (children.length === 1 && el$1.for && el$1.tag !== 'template' && el$1.tag !== 'slot') {
      return genElement(el$1);
    }
    var normalizationType = checkSkip ? getNormalizationType(children) : 0;
    return "[" + children.map(genNode).join(',') + "]" + (normalizationType ? "," + normalizationType : '');
  }
}

function getNormalizationType(children) {
  var res = 0;
  for (var i = 0; i < children.length; i++) {
    var el = children[i];
    if (el.type !== 1) {
      continue;
    }
    if (needsNormalization(el) || el.ifConditions && el.ifConditions.some(function (c) {
      return needsNormalization(c.block);
    })) {
      res = 2;
      break;
    }
    if (maybeComponent(el) || el.ifConditions && el.ifConditions.some(function (c) {
      return maybeComponent(c.block);
    })) {
      res = 1;
    }
  }
  return res;
}

function needsNormalization(el) {
  return el.for !== undefined || el.tag === 'template' || el.tag === 'slot';
}

function maybeComponent(el) {
  return !isPlatformReservedTag$1(el.tag);
}

function genNode(node) {
  if (node.type === 1) {
    return genElement(node);
  } else {
    return genText(node);
  }
}

function genText(text) {
  return "_v(" + (text.type === 2 ? text.expression : transformSpecialNewlines(JSON.stringify(text.text))) + ")";
}

function genSlot(el) {
  var slotName = el.slotName || '"default"';
  var children = genChildren(el);
  var res = "_t(" + slotName + (children ? "," + children : '');
  var attrs = el.attrs && "{" + el.attrs.map(function (a) {
    return camelize(a.name) + ":" + a.value;
  }).join(',') + "}";
  var bind$$1 = el.attrsMap['v-bind'];
  if ((attrs || bind$$1) && !children) {
    res += ",null";
  }
  if (attrs) {
    res += "," + attrs;
  }
  if (bind$$1) {
    res += (attrs ? '' : ',null') + "," + bind$$1;
  }
  return res + ')';
}

function genComponent(componentName, el) {
  var children = el.inlineTemplate ? null : genChildren(el, true);
  return "_c(" + componentName + "," + genData(el) + (children ? "," + children : '') + ")";
}

function genProps(props) {
  var res = '';
  for (var i = 0; i < props.length; i++) {
    var prop = props[i];
    res += "\"" + prop.name + "\":" + transformSpecialNewlines(prop.value) + ",";
  }
  return res.slice(0, -1);
}

function transformSpecialNewlines(text) {
  return text.replace(/\u2028/g, '\\u2028').replace(/\u2029/g, '\\u2029');
}

var prohibitedKeywordRE = new RegExp('\\b' + ('do,if,for,let,new,try,var,case,else,with,await,break,catch,class,const,' + 'super,throw,while,yield,delete,export,import,return,switch,default,' + 'extends,finally,continue,debugger,function,arguments').split(',').join('\\b|\\b') + '\\b');

var unaryOperatorsRE = new RegExp('\\b' + 'delete,typeof,void'.split(',').join('\\s*\\([^\\)]*\\)|\\b') + '\\s*\\([^\\)]*\\)');

var identRE = /[A-Za-z_$][\w$]*/;

var stripStringRE = /'(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*"|`(?:[^`\\]|\\.)*\$\{|\}(?:[^`\\]|\\.)*`|`(?:[^`\\]|\\.)*`/g;

function detectErrors(ast) {
  var errors = [];
  if (ast) {
    checkNode(ast, errors);
  }
  return errors;
}

function checkNode(node, errors) {
  if (node.type === 1) {
    for (var name in node.attrsMap) {
      if (dirRE.test(name)) {
        var value = node.attrsMap[name];
        if (value) {
          if (name === 'v-for') {
            checkFor(node, "v-for=\"" + value + "\"", errors);
          } else if (onRE.test(name)) {
            checkEvent(value, name + "=\"" + value + "\"", errors);
          } else {
            checkExpression(value, name + "=\"" + value + "\"", errors);
          }
        }
      }
    }
    if (node.children) {
      for (var i = 0; i < node.children.length; i++) {
        checkNode(node.children[i], errors);
      }
    }
  } else if (node.type === 2) {
    checkExpression(node.expression, node.text, errors);
  }
}

function checkEvent(exp, text, errors) {
  var keywordMatch = exp.replace(stripStringRE, '').match(unaryOperatorsRE);
  if (keywordMatch) {
    errors.push("avoid using JavaScript unary operator as property name: " + "\"" + keywordMatch[0] + "\" in expression " + text.trim());
  }
  checkExpression(exp, text, errors);
}

function checkFor(node, text, errors) {
  checkExpression(node.for || '', text, errors);
  checkIdentifier(node.alias, 'v-for alias', text, errors);
  checkIdentifier(node.iterator1, 'v-for iterator', text, errors);
  checkIdentifier(node.iterator2, 'v-for iterator', text, errors);
}

function checkIdentifier(ident, type, text, errors) {
  if (typeof ident === 'string' && !identRE.test(ident)) {
    errors.push("invalid " + type + " \"" + ident + "\" in expression: " + text.trim());
  }
}

function checkExpression(exp, text, errors) {
  try {
    new Function("return " + exp);
  } catch (e) {
    var keywordMatch = exp.replace(stripStringRE, '').match(prohibitedKeywordRE);
    if (keywordMatch) {
      errors.push("avoid using JavaScript keyword as property name: " + "\"" + keywordMatch[0] + "\" in expression " + text.trim());
    } else {
      errors.push("invalid expression: " + text.trim());
    }
  }
}

function baseCompile(template, options) {
  var ast = parse(template.trim(), options);
  optimize(ast, options);
  var code = generate(ast, options);
  return {
    ast: ast,
    render: code.render,
    staticRenderFns: code.staticRenderFns
  };
}

function makeFunction(code, errors) {
  try {
    return new Function(code);
  } catch (err) {
    errors.push({ err: err, code: code });
    return noop;
  }
}

function createCompiler(baseOptions) {
  var functionCompileCache = Object.create(null);

  function compile(template, options) {
    var finalOptions = Object.create(baseOptions);
    var errors = [];
    var tips = [];
    finalOptions.warn = function (msg, tip$$1) {
      (tip$$1 ? tips : errors).push(msg);
    };

    if (options) {
      if (options.modules) {
        finalOptions.modules = (baseOptions.modules || []).concat(options.modules);
      }

      if (options.directives) {
        finalOptions.directives = extend(Object.create(baseOptions.directives), options.directives);
      }

      for (var key in options) {
        if (key !== 'modules' && key !== 'directives') {
          finalOptions[key] = options[key];
        }
      }
    }

    var compiled = baseCompile(template, finalOptions);
    if (process.env.NODE_ENV !== 'production') {
      errors.push.apply(errors, detectErrors(compiled.ast));
    }
    compiled.errors = errors;
    compiled.tips = tips;
    return compiled;
  }

  function compileToFunctions(template, options, vm) {
    options = options || {};

    if (process.env.NODE_ENV !== 'production') {
      try {
        new Function('return 1');
      } catch (e) {
        if (e.toString().match(/unsafe-eval|CSP/)) {
          warn('It seems you are using the standalone build of Vue.js in an ' + 'environment with Content Security Policy that prohibits unsafe-eval. ' + 'The template compiler cannot work in this environment. Consider ' + 'relaxing the policy to allow unsafe-eval or pre-compiling your ' + 'templates into render functions.');
        }
      }
    }

    var key = options.delimiters ? String(options.delimiters) + template : template;
    if (functionCompileCache[key]) {
      return functionCompileCache[key];
    }

    var compiled = compile(template, options);

    if (process.env.NODE_ENV !== 'production') {
      if (compiled.errors && compiled.errors.length) {
        warn("Error compiling template:\n\n" + template + "\n\n" + compiled.errors.map(function (e) {
          return "- " + e;
        }).join('\n') + '\n', vm);
      }
      if (compiled.tips && compiled.tips.length) {
        compiled.tips.forEach(function (msg) {
          return tip(msg, vm);
        });
      }
    }

    var res = {};
    var fnGenErrors = [];
    res.render = makeFunction(compiled.render, fnGenErrors);
    var l = compiled.staticRenderFns.length;
    res.staticRenderFns = new Array(l);
    for (var i = 0; i < l; i++) {
      res.staticRenderFns[i] = makeFunction(compiled.staticRenderFns[i], fnGenErrors);
    }

    if (process.env.NODE_ENV !== 'production') {
      if ((!compiled.errors || !compiled.errors.length) && fnGenErrors.length) {
        warn("Failed to generate render function:\n\n" + fnGenErrors.map(function (ref) {
          var err = ref.err;
          var code = ref.code;

          return err.toString() + " in\n\n" + code + "\n";
        }).join('\n'), vm);
      }
    }

    return functionCompileCache[key] = res;
  }

  return {
    compile: compile,
    compileToFunctions: compileToFunctions
  };
}

function transformNode(el, options) {
  var warn = options.warn || baseWarn;
  var staticClass = getAndRemoveAttr(el, 'class');
  if (process.env.NODE_ENV !== 'production' && staticClass) {
    var expression = parseText(staticClass, options.delimiters);
    if (expression) {
      warn("class=\"" + staticClass + "\": " + 'Interpolation inside attributes has been removed. ' + 'Use v-bind or the colon shorthand instead. For example, ' + 'instead of <div class="{{ val }}">, use <div :class="val">.');
    }
  }
  if (staticClass) {
    el.staticClass = JSON.stringify(staticClass);
  }
  var classBinding = getBindingAttr(el, 'class', false);
  if (classBinding) {
    el.classBinding = classBinding;
  }
}

function genData$1(el) {
  var data = '';
  if (el.staticClass) {
    data += "staticClass:" + el.staticClass + ",";
  }
  if (el.classBinding) {
    data += "class:" + el.classBinding + ",";
  }
  return data;
}

var klass$1 = {
  staticKeys: ['staticClass'],
  transformNode: transformNode,
  genData: genData$1
};

function transformNode$1(el, options) {
  var warn = options.warn || baseWarn;
  var staticStyle = getAndRemoveAttr(el, 'style');
  if (staticStyle) {
    if (process.env.NODE_ENV !== 'production') {
      var expression = parseText(staticStyle, options.delimiters);
      if (expression) {
        warn("style=\"" + staticStyle + "\": " + 'Interpolation inside attributes has been removed. ' + 'Use v-bind or the colon shorthand instead. For example, ' + 'instead of <div style="{{ val }}">, use <div :style="val">.');
      }
    }
    el.staticStyle = JSON.stringify(parseStyleText(staticStyle));
  }

  var styleBinding = getBindingAttr(el, 'style', false);
  if (styleBinding) {
    el.styleBinding = styleBinding;
  }
}

function genData$2(el) {
  var data = '';
  if (el.staticStyle) {
    data += "staticStyle:" + el.staticStyle + ",";
  }
  if (el.styleBinding) {
    data += "style:(" + el.styleBinding + "),";
  }
  return data;
}

var style$1 = {
  staticKeys: ['staticStyle'],
  transformNode: transformNode$1,
  genData: genData$2
};

var modules$1 = [klass$1, style$1];

function text(el, dir) {
  if (dir.value) {
    addProp(el, 'textContent', "_s(" + dir.value + ")");
  }
}

function html(el, dir) {
  if (dir.value) {
    addProp(el, 'innerHTML', "_s(" + dir.value + ")");
  }
}

var directives$1 = {
  model: model,
  text: text,
  html: html
};

var baseOptions = {
  expectHTML: true,
  modules: modules$1,
  directives: directives$1,
  isPreTag: isPreTag,
  isUnaryTag: isUnaryTag,
  mustUseProp: mustUseProp,
  canBeLeftOpenTag: canBeLeftOpenTag,
  isReservedTag: isReservedTag,
  getTagNamespace: getTagNamespace,
  staticKeys: genStaticKeys(modules$1)
};

var ref$1 = createCompiler(baseOptions);
var compileToFunctions = ref$1.compileToFunctions;

var idToTemplate = cached(function (id) {
  var el = query(id);
  return el && el.innerHTML;
});

var mount = Vue$3.prototype.$mount;
Vue$3.prototype.$mount = function (el, hydrating) {
  el = el && query(el);

  if (el === document.body || el === document.documentElement) {
    process.env.NODE_ENV !== 'production' && warn("Do not mount Vue to <html> or <body> - mount to normal elements instead.");
    return this;
  }

  var options = this.$options;

  if (!options.render) {
    var template = options.template;
    if (template) {
      if (typeof template === 'string') {
        if (template.charAt(0) === '#') {
          template = idToTemplate(template);

          if (process.env.NODE_ENV !== 'production' && !template) {
            warn("Template element not found or is empty: " + options.template, this);
          }
        }
      } else if (template.nodeType) {
        template = template.innerHTML;
      } else {
        if (process.env.NODE_ENV !== 'production') {
          warn('invalid template option:' + template, this);
        }
        return this;
      }
    } else if (el) {
      template = getOuterHTML(el);
    }
    if (template) {
      if (process.env.NODE_ENV !== 'production' && config.performance && mark) {
        mark('compile');
      }

      var ref = compileToFunctions(template, {
        shouldDecodeNewlines: shouldDecodeNewlines,
        delimiters: options.delimiters
      }, this);
      var render = ref.render;
      var staticRenderFns = ref.staticRenderFns;
      options.render = render;
      options.staticRenderFns = staticRenderFns;

      if (process.env.NODE_ENV !== 'production' && config.performance && mark) {
        mark('compile end');
        measure(this._name + " compile", 'compile', 'compile end');
      }
    }
  }
  return mount.call(this, el, hydrating);
};

function getOuterHTML(el) {
  if (el.outerHTML) {
    return el.outerHTML;
  } else {
    var container = document.createElement('div');
    container.appendChild(el.cloneNode(true));
    return container.innerHTML;
  }
}

Vue$3.compile = compileToFunctions;

/* harmony default export */ __webpack_exports__["a"] = (Vue$3);
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(4), __webpack_require__(5)))

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(Buffer) {
module.exports = function (useSourceMap) {
	var list = [];

	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if (item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	list.i = function (modules, mediaQuery) {
		if (typeof modules === "string") modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for (var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if (typeof id === "number") alreadyImportedModules[id] = true;
		}
		for (i = 0; i < modules.length; i++) {
			var item = modules[i];

			if (typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if (mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if (mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap) {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

function toComment(sourceMap) {
	var base64 = new Buffer(JSON.stringify(sourceMap)).toString('base64');
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(13).Buffer))

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/

var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

var listToStyles = __webpack_require__(25)

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

module.exports = function (parentId, list, _isProduction) {
  isProduction = _isProduction

  var styles = listToStyles(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = listToStyles(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[data-vue-ssr-id~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),
/* 4 */
/***/ (function(module, exports) {


var process = module.exports = {};

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout() {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
})();
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        return setTimeout(fun, 0);
    }

    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        return cachedSetTimeout(fun, 0);
    } catch (e) {
        try {
            return cachedSetTimeout.call(null, fun, 0);
        } catch (e) {
            return cachedSetTimeout.call(this, fun, 0);
        }
    }
}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        return clearTimeout(marker);
    }

    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        return cachedClearTimeout(marker);
    } catch (e) {
        try {
            return cachedClearTimeout.call(null, marker);
        } catch (e) {
            return cachedClearTimeout.call(this, marker);
        }
    }
}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while (len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = '';
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () {
    return '/';
};
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function () {
    return 0;
};

/***/ }),
/* 5 */
/***/ (function(module, exports) {

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var g;

g = function () {
	return this;
}();

try {
	g = g || Function("return this")() || (1, eval)("this");
} catch (e) {
	if ((typeof window === "undefined" ? "undefined" : _typeof(window)) === "object") g = window;
}

module.exports = g;

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_router__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__containers_Full__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__containers_Full___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__containers_Full__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__plugins__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__themes__ = __webpack_require__(11);





var Dashboard = function Dashboard(resolve) {
  return __webpack_require__.e/* require */(10).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(46)]; (resolve.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
};
var Widgets = function Widgets(resolve) {
  return __webpack_require__.e/* require */(9).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(47)]; (resolve.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
};




__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].use(__WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */]({
  mode: 'history',
  base: '/admin',
  linkActiveClass: 'open active',
  scrollBehavior: function scrollBehavior() {
    return { y: 0 };
  },
  routes: [{
    path: '/',
    redirect: '/dashboard',
    name: 'Home',
    component: __WEBPACK_IMPORTED_MODULE_2__containers_Full___default.a,
    children: [{
      path: 'dashboard',
      name: 'Dashboard',
      component: Dashboard
    }, {
      path: 'widgets',
      name: 'Widgets',
      component: Widgets
    }, {
      path: 'plugins',
      redirect: '/plugins/buttons',
      name: 'Plugins',
      component: {
        render: function render(c) {
          return c('router-view');
        }
      },
      children: __WEBPACK_IMPORTED_MODULE_3__plugins__["a" /* default */]
    }, {
      path: 'themes',
      redirect: '/themes/font-awesome',
      name: 'Themes',
      component: {
        render: function render(c) {
          return c('router-view');
        }
      },
      children: __WEBPACK_IMPORTED_MODULE_4__themes__["a" /* default */]
    }]
  }]
}));

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(16),
  /* template */
  __webpack_require__(42),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/home/ubuntu/workspace/admin/frontend/App.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] App.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-c94b42e8", Component.options)
  } else {
    hotAPI.reload("data-v-c94b42e8", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof4 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

(function webpackUniversalModuleDefinition(root, factory) {
	if (( false ? 'undefined' : _typeof4(exports)) === 'object' && ( false ? 'undefined' : _typeof4(module)) === 'object') module.exports = factory();else if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else if ((typeof exports === 'undefined' ? 'undefined' : _typeof4(exports)) === 'object') exports["VueStrap"] = factory();else root["VueStrap"] = factory();
})(this, function () {
	return function (modules) {
		var installedModules = {};
		function __webpack_require__(moduleId) {
			if (installedModules[moduleId]) return installedModules[moduleId].exports;
			var module = installedModules[moduleId] = { exports: {},
				id: moduleId,
				loaded: false
			};
			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
			module.loaded = true;
			return module.exports;
		}
		__webpack_require__.m = modules;
		__webpack_require__.c = installedModules;
		__webpack_require__.p = "";
		return __webpack_require__(0);
	}([function (module, exports, __webpack_require__) {

		'use strict';

		var _NodeList = __webpack_require__(27);

		var _NodeList2 = _interopRequireDefault(_NodeList);

		var _Accordion = __webpack_require__(90);

		var _Accordion2 = _interopRequireDefault(_Accordion);

		var _Affix = __webpack_require__(94);

		var _Affix2 = _interopRequireDefault(_Affix);

		var _Alert = __webpack_require__(97);

		var _Alert2 = _interopRequireDefault(_Alert);

		var _Aside = __webpack_require__(104);

		var _Aside2 = _interopRequireDefault(_Aside);

		var _buttonGroup = __webpack_require__(109);

		var _buttonGroup2 = _interopRequireDefault(_buttonGroup);

		var _Carousel = __webpack_require__(112);

		var _Carousel2 = _interopRequireDefault(_Carousel);

		var _Checkbox = __webpack_require__(117);

		var _Checkbox2 = _interopRequireDefault(_Checkbox);

		var _Datepicker = __webpack_require__(122);

		var _Datepicker2 = _interopRequireDefault(_Datepicker);

		var _Dropdown = __webpack_require__(127);

		var _Dropdown2 = _interopRequireDefault(_Dropdown);

		var _FormGroup = __webpack_require__(132);

		var _FormGroup2 = _interopRequireDefault(_FormGroup);

		var _Input = __webpack_require__(135);

		var _Input2 = _interopRequireDefault(_Input);

		var _Modal = __webpack_require__(140);

		var _Modal2 = _interopRequireDefault(_Modal);

		var _Navbar = __webpack_require__(149);

		var _Navbar2 = _interopRequireDefault(_Navbar);

		var _Option = __webpack_require__(152);

		var _Option2 = _interopRequireDefault(_Option);

		var _Panel = __webpack_require__(155);

		var _Panel2 = _interopRequireDefault(_Panel);

		var _Popover = __webpack_require__(160);

		var _Popover2 = _interopRequireDefault(_Popover);

		var _Progressbar = __webpack_require__(166);

		var _Progressbar2 = _interopRequireDefault(_Progressbar);

		var _Radio = __webpack_require__(169);

		var _Radio2 = _interopRequireDefault(_Radio);

		var _Select = __webpack_require__(174);

		var _Select2 = _interopRequireDefault(_Select);

		var _Slider = __webpack_require__(194);

		var _Slider2 = _interopRequireDefault(_Slider);

		var _Spinner = __webpack_require__(197);

		var _Spinner2 = _interopRequireDefault(_Spinner);

		var _Tab = __webpack_require__(202);

		var _Tab2 = _interopRequireDefault(_Tab);

		var _TabGroup = __webpack_require__(205);

		var _TabGroup2 = _interopRequireDefault(_TabGroup);

		var _Tabset = __webpack_require__(210);

		var _Tabset2 = _interopRequireDefault(_Tabset);

		var _Tooltip = __webpack_require__(215);

		var _Tooltip2 = _interopRequireDefault(_Tooltip);

		var _Typeahead = __webpack_require__(220);

		var _Typeahead2 = _interopRequireDefault(_Typeahead);

		function _interopRequireDefault(obj) {
			return obj && obj.__esModule ? obj : { default: obj };
		}

		var VueStrap = {
			$: _NodeList2.default,
			accordion: _Accordion2.default,
			affix: _Affix2.default,
			alert: _Alert2.default,
			aside: _Aside2.default,
			buttonGroup: _buttonGroup2.default,
			carousel: _Carousel2.default,
			checkbox: _Checkbox2.default,
			datepicker: _Datepicker2.default,
			dropdown: _Dropdown2.default,
			formGroup: _FormGroup2.default,
			input: _Input2.default,
			modal: _Modal2.default,
			navbar: _Navbar2.default,
			option: _Option2.default,
			panel: _Panel2.default,
			popover: _Popover2.default,
			progressbar: _Progressbar2.default,
			radio: _Radio2.default,
			select: _Select2.default,
			slider: _Slider2.default,
			spinner: _Spinner2.default,
			tab: _Tab2.default,
			tabGroup: _TabGroup2.default,
			tabset: _Tabset2.default,
			tooltip: _Tooltip2.default,
			typeahead: _Typeahead2.default
		};

		module.exports = VueStrap;
	},,,,,,,,,,,,,,,,,,,,,,,,,,, function (module, exports, __webpack_require__) {

		'use strict';

		Object.defineProperty(exports, "__esModule", {
			value: true
		});

		var _defineProperty = __webpack_require__(28);

		var _defineProperty2 = _interopRequireDefault(_defineProperty);

		var _iterator = __webpack_require__(46);

		var _iterator2 = _interopRequireDefault(_iterator);

		var _getOwnPropertyNames = __webpack_require__(82);

		var _getOwnPropertyNames2 = _interopRequireDefault(_getOwnPropertyNames);

		var _classCallCheck2 = __webpack_require__(88);

		var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

		var _createClass2 = __webpack_require__(89);

		var _createClass3 = _interopRequireDefault(_createClass2);

		function _interopRequireDefault(obj) {
			return obj && obj.__esModule ? obj : { default: obj };
		}

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
				(0, _classCallCheck3.default)(this, NodeList);

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

			(0, _createClass3.default)(NodeList, [{
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

		(0, _getOwnPropertyNames2.default)(ArrayProto).forEach(function (key) {
			if (key !== 'join' && key !== 'copyWithin' && key !== 'fill' && NL[key] === undefined) {
				NL[key] = ArrayProto[key];
			}
		});
		if (window.Symbol && _iterator2.default) {
			NL[_iterator2.default] = NL.values = ArrayProto[_iterator2.default];
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
				(0, _defineProperty2.default)(NL, prop, {
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

		exports.default = NodeListJS;
	}, function (module, exports, __webpack_require__) {

		module.exports = { "default": __webpack_require__(29), __esModule: true };
	}, function (module, exports, __webpack_require__) {

		__webpack_require__(30);
		var $Object = __webpack_require__(33).Object;
		module.exports = function defineProperty(it, key, desc) {
			return $Object.defineProperty(it, key, desc);
		};
	}, function (module, exports, __webpack_require__) {

		var $export = __webpack_require__(31);

		$export($export.S + $export.F * !__webpack_require__(41), 'Object', { defineProperty: __webpack_require__(37).f });
	}, function (module, exports, __webpack_require__) {

		var global = __webpack_require__(32),
		    core = __webpack_require__(33),
		    ctx = __webpack_require__(34),
		    hide = __webpack_require__(36),
		    PROTOTYPE = 'prototype';

		var $export = function $export(type, name, source) {
			var IS_FORCED = type & $export.F,
			    IS_GLOBAL = type & $export.G,
			    IS_STATIC = type & $export.S,
			    IS_PROTO = type & $export.P,
			    IS_BIND = type & $export.B,
			    IS_WRAP = type & $export.W,
			    exports = IS_GLOBAL ? core : core[name] || (core[name] = {}),
			    expProto = exports[PROTOTYPE],
			    target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE],
			    key,
			    own,
			    out;
			if (IS_GLOBAL) source = name;
			for (key in source) {
				own = !IS_FORCED && target && target[key] !== undefined;
				if (own && key in exports) continue;

				out = own ? target[key] : source[key];

				exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key] : IS_BIND && own ? ctx(out, global) : IS_WRAP && target[key] == out ? function (C) {
					var F = function F(a, b, c) {
						if (this instanceof C) {
							switch (arguments.length) {
								case 0:
									return new C();
								case 1:
									return new C(a);
								case 2:
									return new C(a, b);
							}return new C(a, b, c);
						}return C.apply(this, arguments);
					};
					F[PROTOTYPE] = C[PROTOTYPE];
					return F;
				}(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;

				if (IS_PROTO) {
					(exports.virtual || (exports.virtual = {}))[key] = out;

					if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
				}
			}
		};

		$export.F = 1;
		$export.G = 2;
		$export.S = 4;
		$export.P = 8;
		$export.B = 16;
		$export.W = 32;
		$export.U = 64;
		$export.R = 128;
		module.exports = $export;
	}, function (module, exports) {
		var global = module.exports = typeof window != 'undefined' && window.Math == Math ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
		if (typeof __g == 'number') __g = global;
	}, function (module, exports) {

		var core = module.exports = { version: '2.4.0' };
		if (typeof __e == 'number') __e = core;
	}, function (module, exports, __webpack_require__) {
		var aFunction = __webpack_require__(35);
		module.exports = function (fn, that, length) {
			aFunction(fn);
			if (that === undefined) return fn;
			switch (length) {
				case 1:
					return function (a) {
						return fn.call(that, a);
					};
				case 2:
					return function (a, b) {
						return fn.call(that, a, b);
					};
				case 3:
					return function (a, b, c) {
						return fn.call(that, a, b, c);
					};
			}
			return function () {
				return fn.apply(that, arguments);
			};
		};
	}, function (module, exports) {

		module.exports = function (it) {
			if (typeof it != 'function') throw TypeError(it + ' is not a function!');
			return it;
		};
	}, function (module, exports, __webpack_require__) {

		var dP = __webpack_require__(37),
		    createDesc = __webpack_require__(45);
		module.exports = __webpack_require__(41) ? function (object, key, value) {
			return dP.f(object, key, createDesc(1, value));
		} : function (object, key, value) {
			object[key] = value;
			return object;
		};
	}, function (module, exports, __webpack_require__) {

		var anObject = __webpack_require__(38),
		    IE8_DOM_DEFINE = __webpack_require__(40),
		    toPrimitive = __webpack_require__(44),
		    dP = Object.defineProperty;

		exports.f = __webpack_require__(41) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
			anObject(O);
			P = toPrimitive(P, true);
			anObject(Attributes);
			if (IE8_DOM_DEFINE) try {
				return dP(O, P, Attributes);
			} catch (e) {}
			if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
			if ('value' in Attributes) O[P] = Attributes.value;
			return O;
		};
	}, function (module, exports, __webpack_require__) {

		var isObject = __webpack_require__(39);
		module.exports = function (it) {
			if (!isObject(it)) throw TypeError(it + ' is not an object!');
			return it;
		};
	}, function (module, exports) {

		module.exports = function (it) {
			return (typeof it === 'undefined' ? 'undefined' : _typeof4(it)) === 'object' ? it !== null : typeof it === 'function';
		};
	}, function (module, exports, __webpack_require__) {

		module.exports = !__webpack_require__(41) && !__webpack_require__(42)(function () {
			return Object.defineProperty(__webpack_require__(43)('div'), 'a', { get: function get() {
					return 7;
				} }).a != 7;
		});
	}, function (module, exports, __webpack_require__) {
		module.exports = !__webpack_require__(42)(function () {
			return Object.defineProperty({}, 'a', { get: function get() {
					return 7;
				} }).a != 7;
		});
	}, function (module, exports) {

		module.exports = function (exec) {
			try {
				return !!exec();
			} catch (e) {
				return true;
			}
		};
	}, function (module, exports, __webpack_require__) {

		var isObject = __webpack_require__(39),
		    document = __webpack_require__(32).document,
		    is = isObject(document) && isObject(document.createElement);
		module.exports = function (it) {
			return is ? document.createElement(it) : {};
		};
	}, function (module, exports, __webpack_require__) {
		var isObject = __webpack_require__(39);

		module.exports = function (it, S) {
			if (!isObject(it)) return it;
			var fn, val;
			if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
			if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
			if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
			throw TypeError("Can't convert object to primitive value");
		};
	}, function (module, exports) {

		module.exports = function (bitmap, value) {
			return {
				enumerable: !(bitmap & 1),
				configurable: !(bitmap & 2),
				writable: !(bitmap & 4),
				value: value
			};
		};
	}, function (module, exports, __webpack_require__) {

		module.exports = { "default": __webpack_require__(47), __esModule: true };
	}, function (module, exports, __webpack_require__) {

		__webpack_require__(48);
		__webpack_require__(77);
		module.exports = __webpack_require__(81).f('iterator');
	}, function (module, exports, __webpack_require__) {

		'use strict';

		var $at = __webpack_require__(49)(true);

		__webpack_require__(52)(String, 'String', function (iterated) {
			this._t = String(iterated);
			this._i = 0;
		}, function () {
			var O = this._t,
			    index = this._i,
			    point;
			if (index >= O.length) return { value: undefined, done: true };
			point = $at(O, index);
			this._i += point.length;
			return { value: point, done: false };
		});
	}, function (module, exports, __webpack_require__) {

		var toInteger = __webpack_require__(50),
		    defined = __webpack_require__(51);

		module.exports = function (TO_STRING) {
			return function (that, pos) {
				var s = String(defined(that)),
				    i = toInteger(pos),
				    l = s.length,
				    a,
				    b;
				if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
				a = s.charCodeAt(i);
				return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff ? TO_STRING ? s.charAt(i) : a : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
			};
		};
	}, function (module, exports) {
		var ceil = Math.ceil,
		    floor = Math.floor;
		module.exports = function (it) {
			return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
		};
	}, function (module, exports) {
		module.exports = function (it) {
			if (it == undefined) throw TypeError("Can't call method on  " + it);
			return it;
		};
	}, function (module, exports, __webpack_require__) {

		'use strict';

		var LIBRARY = __webpack_require__(53),
		    $export = __webpack_require__(31),
		    redefine = __webpack_require__(54),
		    hide = __webpack_require__(36),
		    has = __webpack_require__(55),
		    Iterators = __webpack_require__(56),
		    $iterCreate = __webpack_require__(57),
		    setToStringTag = __webpack_require__(73),
		    getPrototypeOf = __webpack_require__(75),
		    ITERATOR = __webpack_require__(74)('iterator'),
		    BUGGY = !([].keys && 'next' in [].keys()),
		    FF_ITERATOR = '@@iterator',
		    KEYS = 'keys',
		    VALUES = 'values';

		var returnThis = function returnThis() {
			return this;
		};

		module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
			$iterCreate(Constructor, NAME, next);
			var getMethod = function getMethod(kind) {
				if (!BUGGY && kind in proto) return proto[kind];
				switch (kind) {
					case KEYS:
						return function keys() {
							return new Constructor(this, kind);
						};
					case VALUES:
						return function values() {
							return new Constructor(this, kind);
						};
				}return function entries() {
					return new Constructor(this, kind);
				};
			};
			var TAG = NAME + ' Iterator',
			    DEF_VALUES = DEFAULT == VALUES,
			    VALUES_BUG = false,
			    proto = Base.prototype,
			    $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT],
			    $default = $native || getMethod(DEFAULT),
			    $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined,
			    $anyNative = NAME == 'Array' ? proto.entries || $native : $native,
			    methods,
			    key,
			    IteratorPrototype;

			if ($anyNative) {
				IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
				if (IteratorPrototype !== Object.prototype) {
					setToStringTag(IteratorPrototype, TAG, true);

					if (!LIBRARY && !has(IteratorPrototype, ITERATOR)) hide(IteratorPrototype, ITERATOR, returnThis);
				}
			}

			if (DEF_VALUES && $native && $native.name !== VALUES) {
				VALUES_BUG = true;
				$default = function values() {
					return $native.call(this);
				};
			}

			if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
				hide(proto, ITERATOR, $default);
			}

			Iterators[NAME] = $default;
			Iterators[TAG] = returnThis;
			if (DEFAULT) {
				methods = {
					values: DEF_VALUES ? $default : getMethod(VALUES),
					keys: IS_SET ? $default : getMethod(KEYS),
					entries: $entries
				};
				if (FORCED) for (key in methods) {
					if (!(key in proto)) redefine(proto, key, methods[key]);
				} else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
			}
			return methods;
		};
	}, function (module, exports) {

		module.exports = true;
	}, function (module, exports, __webpack_require__) {

		module.exports = __webpack_require__(36);
	}, function (module, exports) {

		var hasOwnProperty = {}.hasOwnProperty;
		module.exports = function (it, key) {
			return hasOwnProperty.call(it, key);
		};
	}, function (module, exports) {

		module.exports = {};
	}, function (module, exports, __webpack_require__) {

		'use strict';

		var create = __webpack_require__(58),
		    descriptor = __webpack_require__(45),
		    setToStringTag = __webpack_require__(73),
		    IteratorPrototype = {};

		__webpack_require__(36)(IteratorPrototype, __webpack_require__(74)('iterator'), function () {
			return this;
		});

		module.exports = function (Constructor, NAME, next) {
			Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
			setToStringTag(Constructor, NAME + ' Iterator');
		};
	}, function (module, exports, __webpack_require__) {
		var anObject = __webpack_require__(38),
		    dPs = __webpack_require__(59),
		    enumBugKeys = __webpack_require__(71),
		    IE_PROTO = __webpack_require__(68)('IE_PROTO'),
		    Empty = function Empty() {},
		    PROTOTYPE = 'prototype';

		var _createDict = function createDict() {
			var iframe = __webpack_require__(43)('iframe'),
			    i = enumBugKeys.length,
			    lt = '<',
			    gt = '>',
			    iframeDocument;
			iframe.style.display = 'none';
			__webpack_require__(72).appendChild(iframe);
			iframe.src = 'javascript:';
			iframeDocument = iframe.contentWindow.document;
			iframeDocument.open();
			iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
			iframeDocument.close();
			_createDict = iframeDocument.F;
			while (i--) {
				delete _createDict[PROTOTYPE][enumBugKeys[i]];
			}return _createDict();
		};

		module.exports = Object.create || function create(O, Properties) {
			var result;
			if (O !== null) {
				Empty[PROTOTYPE] = anObject(O);
				result = new Empty();
				Empty[PROTOTYPE] = null;

				result[IE_PROTO] = O;
			} else result = _createDict();
			return Properties === undefined ? result : dPs(result, Properties);
		};
	}, function (module, exports, __webpack_require__) {

		var dP = __webpack_require__(37),
		    anObject = __webpack_require__(38),
		    getKeys = __webpack_require__(60);

		module.exports = __webpack_require__(41) ? Object.defineProperties : function defineProperties(O, Properties) {
			anObject(O);
			var keys = getKeys(Properties),
			    length = keys.length,
			    i = 0,
			    P;
			while (length > i) {
				dP.f(O, P = keys[i++], Properties[P]);
			}return O;
		};
	}, function (module, exports, __webpack_require__) {
		var $keys = __webpack_require__(61),
		    enumBugKeys = __webpack_require__(71);

		module.exports = Object.keys || function keys(O) {
			return $keys(O, enumBugKeys);
		};
	}, function (module, exports, __webpack_require__) {

		var has = __webpack_require__(55),
		    toIObject = __webpack_require__(62),
		    arrayIndexOf = __webpack_require__(65)(false),
		    IE_PROTO = __webpack_require__(68)('IE_PROTO');

		module.exports = function (object, names) {
			var O = toIObject(object),
			    i = 0,
			    result = [],
			    key;
			for (key in O) {
				if (key != IE_PROTO) has(O, key) && result.push(key);
			}
			while (names.length > i) {
				if (has(O, key = names[i++])) {
					~arrayIndexOf(result, key) || result.push(key);
				}
			}return result;
		};
	}, function (module, exports, __webpack_require__) {
		var IObject = __webpack_require__(63),
		    defined = __webpack_require__(51);
		module.exports = function (it) {
			return IObject(defined(it));
		};
	}, function (module, exports, __webpack_require__) {
		var cof = __webpack_require__(64);
		module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
			return cof(it) == 'String' ? it.split('') : Object(it);
		};
	}, function (module, exports) {

		var toString = {}.toString;

		module.exports = function (it) {
			return toString.call(it).slice(8, -1);
		};
	}, function (module, exports, __webpack_require__) {
		var toIObject = __webpack_require__(62),
		    toLength = __webpack_require__(66),
		    toIndex = __webpack_require__(67);
		module.exports = function (IS_INCLUDES) {
			return function ($this, el, fromIndex) {
				var O = toIObject($this),
				    length = toLength(O.length),
				    index = toIndex(fromIndex, length),
				    value;

				if (IS_INCLUDES && el != el) while (length > index) {
					value = O[index++];
					if (value != value) return true;
				} else for (; length > index; index++) {
					if (IS_INCLUDES || index in O) {
						if (O[index] === el) return IS_INCLUDES || index || 0;
					}
				}return !IS_INCLUDES && -1;
			};
		};
	}, function (module, exports, __webpack_require__) {
		var toInteger = __webpack_require__(50),
		    min = Math.min;
		module.exports = function (it) {
			return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0;
		};
	}, function (module, exports, __webpack_require__) {

		var toInteger = __webpack_require__(50),
		    max = Math.max,
		    min = Math.min;
		module.exports = function (index, length) {
			index = toInteger(index);
			return index < 0 ? max(index + length, 0) : min(index, length);
		};
	}, function (module, exports, __webpack_require__) {

		var shared = __webpack_require__(69)('keys'),
		    uid = __webpack_require__(70);
		module.exports = function (key) {
			return shared[key] || (shared[key] = uid(key));
		};
	}, function (module, exports, __webpack_require__) {

		var global = __webpack_require__(32),
		    SHARED = '__core-js_shared__',
		    store = global[SHARED] || (global[SHARED] = {});
		module.exports = function (key) {
			return store[key] || (store[key] = {});
		};
	}, function (module, exports) {

		var id = 0,
		    px = Math.random();
		module.exports = function (key) {
			return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
		};
	}, function (module, exports) {
		module.exports = 'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'.split(',');
	}, function (module, exports, __webpack_require__) {

		module.exports = __webpack_require__(32).document && document.documentElement;
	}, function (module, exports, __webpack_require__) {

		var def = __webpack_require__(37).f,
		    has = __webpack_require__(55),
		    TAG = __webpack_require__(74)('toStringTag');

		module.exports = function (it, tag, stat) {
			if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
		};
	}, function (module, exports, __webpack_require__) {

		var store = __webpack_require__(69)('wks'),
		    uid = __webpack_require__(70),
		    _Symbol = __webpack_require__(32).Symbol,
		    USE_SYMBOL = typeof _Symbol == 'function';

		var $exports = module.exports = function (name) {
			return store[name] || (store[name] = USE_SYMBOL && _Symbol[name] || (USE_SYMBOL ? _Symbol : uid)('Symbol.' + name));
		};

		$exports.store = store;
	}, function (module, exports, __webpack_require__) {
		var has = __webpack_require__(55),
		    toObject = __webpack_require__(76),
		    IE_PROTO = __webpack_require__(68)('IE_PROTO'),
		    ObjectProto = Object.prototype;

		module.exports = Object.getPrototypeOf || function (O) {
			O = toObject(O);
			if (has(O, IE_PROTO)) return O[IE_PROTO];
			if (typeof O.constructor == 'function' && O instanceof O.constructor) {
				return O.constructor.prototype;
			}return O instanceof Object ? ObjectProto : null;
		};
	}, function (module, exports, __webpack_require__) {
		var defined = __webpack_require__(51);
		module.exports = function (it) {
			return Object(defined(it));
		};
	}, function (module, exports, __webpack_require__) {

		__webpack_require__(78);
		var global = __webpack_require__(32),
		    hide = __webpack_require__(36),
		    Iterators = __webpack_require__(56),
		    TO_STRING_TAG = __webpack_require__(74)('toStringTag');

		for (var collections = ['NodeList', 'DOMTokenList', 'MediaList', 'StyleSheetList', 'CSSRuleList'], i = 0; i < 5; i++) {
			var NAME = collections[i],
			    Collection = global[NAME],
			    proto = Collection && Collection.prototype;
			if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
			Iterators[NAME] = Iterators.Array;
		}
	}, function (module, exports, __webpack_require__) {

		'use strict';

		var addToUnscopables = __webpack_require__(79),
		    step = __webpack_require__(80),
		    Iterators = __webpack_require__(56),
		    toIObject = __webpack_require__(62);

		module.exports = __webpack_require__(52)(Array, 'Array', function (iterated, kind) {
			this._t = toIObject(iterated);
			this._i = 0;
			this._k = kind;
		}, function () {
			var O = this._t,
			    kind = this._k,
			    index = this._i++;
			if (!O || index >= O.length) {
				this._t = undefined;
				return step(1);
			}
			if (kind == 'keys') return step(0, index);
			if (kind == 'values') return step(0, O[index]);
			return step(0, [index, O[index]]);
		}, 'values');

		Iterators.Arguments = Iterators.Array;

		addToUnscopables('keys');
		addToUnscopables('values');
		addToUnscopables('entries');
	}, function (module, exports) {

		module.exports = function () {};
	}, function (module, exports) {

		module.exports = function (done, value) {
			return { value: value, done: !!done };
		};
	}, function (module, exports, __webpack_require__) {

		exports.f = __webpack_require__(74);
	}, function (module, exports, __webpack_require__) {

		module.exports = { "default": __webpack_require__(83), __esModule: true };
	}, function (module, exports, __webpack_require__) {

		__webpack_require__(84);
		var $Object = __webpack_require__(33).Object;
		module.exports = function getOwnPropertyNames(it) {
			return $Object.getOwnPropertyNames(it);
		};
	}, function (module, exports, __webpack_require__) {
		__webpack_require__(85)('getOwnPropertyNames', function () {
			return __webpack_require__(86).f;
		});
	}, function (module, exports, __webpack_require__) {
		var $export = __webpack_require__(31),
		    core = __webpack_require__(33),
		    fails = __webpack_require__(42);
		module.exports = function (KEY, exec) {
			var fn = (core.Object || {})[KEY] || Object[KEY],
			    exp = {};
			exp[KEY] = exec(fn);
			$export($export.S + $export.F * fails(function () {
				fn(1);
			}), 'Object', exp);
		};
	}, function (module, exports, __webpack_require__) {
		var toIObject = __webpack_require__(62),
		    gOPN = __webpack_require__(87).f,
		    toString = {}.toString;

		var windowNames = (typeof window === 'undefined' ? 'undefined' : _typeof4(window)) == 'object' && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];

		var getWindowNames = function getWindowNames(it) {
			try {
				return gOPN(it);
			} catch (e) {
				return windowNames.slice();
			}
		};

		module.exports.f = function getOwnPropertyNames(it) {
			return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
		};
	}, function (module, exports, __webpack_require__) {
		var $keys = __webpack_require__(61),
		    hiddenKeys = __webpack_require__(71).concat('length', 'prototype');

		exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
			return $keys(O, hiddenKeys);
		};
	}, function (module, exports) {

		"use strict";

		exports.__esModule = true;

		exports.default = function (instance, Constructor) {
			if (!(instance instanceof Constructor)) {
				throw new TypeError("Cannot call a class as a function");
			}
		};
	}, function (module, exports, __webpack_require__) {

		"use strict";

		exports.__esModule = true;

		var _defineProperty = __webpack_require__(28);

		var _defineProperty2 = _interopRequireDefault(_defineProperty);

		function _interopRequireDefault(obj) {
			return obj && obj.__esModule ? obj : { default: obj };
		}

		exports.default = function () {
			function defineProperties(target, props) {
				for (var i = 0; i < props.length; i++) {
					var descriptor = props[i];
					descriptor.enumerable = descriptor.enumerable || false;
					descriptor.configurable = true;
					if ("value" in descriptor) descriptor.writable = true;
					(0, _defineProperty2.default)(target, descriptor.key, descriptor);
				}
			}

			return function (Constructor, protoProps, staticProps) {
				if (protoProps) defineProperties(Constructor.prototype, protoProps);
				if (staticProps) defineProperties(Constructor, staticProps);
				return Constructor;
			};
		}();
	}, function (module, exports, __webpack_require__) {

		module.exports = __webpack_require__(91);

		if (module.exports.__esModule) module.exports = module.exports.default;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(93);
		if (false) {
			(function () {
				var hotAPI = require("vue-hot-reload-api");
				hotAPI.install(require("vue"));
				if (!hotAPI.compatible) return;
				var id = "-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Accordion.vue";
				hotAPI.createRecord(id, module.exports);
				module.hot.accept(["-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Accordion.vue", "-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./Accordion.vue"], function () {
					var newOptions = require("-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Accordion.vue");
					if (newOptions && newOptions.__esModule) newOptions = newOptions.default;
					var newTemplate = require("-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./Accordion.vue");
					hotAPI.update(id, newOptions, newTemplate);
				});
			})();
		}
	}, function (module, exports, __webpack_require__) {

		'use strict';

		Object.defineProperty(exports, "__esModule", {
			value: true
		});

		var _utils = __webpack_require__(92);

		exports.default = {
			props: {
				type: {
					type: String,
					default: null
				},
				oneAtAtime: {
					type: Boolean,
					coerce: _utils.coerce.boolean,
					default: false
				}
			},
			created: function created() {
				var _this = this;

				this._isAccordion = true;
				this.$on('isOpenEvent', function (child) {
					if (_this.oneAtAtime) {
						_this.$children.forEach(function (item) {
							if (child !== item) {
								item.isOpen = false;
							}
						});
					}
				});
			}
		};
	}, function (module, exports) {

		'use strict';

		Object.defineProperty(exports, "__esModule", {
			value: true
		});
		exports.getJSON = getJSON;
		exports.getScrollBarWidth = getScrollBarWidth;
		exports.translations = translations;
		exports.delayer = delayer;
		exports.VueFixer = VueFixer;

		var coerce = exports.coerce = {
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
					var response;
					var i;
					var value;

					(function () {
						var e = { status: request.status };
						if (request.status === 200) {
							try {
								response = request.responseText;

								for (i in data.done) {
									value = data.done[i](response);

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
					})();
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
	}, function (module, exports) {

		module.exports = "<div class=\"panel-group\">\r\n    <slot></slot>\r\n  </div>";
	}, function (module, exports, __webpack_require__) {

		module.exports = __webpack_require__(95);

		if (module.exports.__esModule) module.exports = module.exports.default;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(96);
		if (false) {
			(function () {
				var hotAPI = require("vue-hot-reload-api");
				hotAPI.install(require("vue"));
				if (!hotAPI.compatible) return;
				var id = "-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Affix.vue";
				hotAPI.createRecord(id, module.exports);
				module.hot.accept(["-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Affix.vue", "-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./Affix.vue"], function () {
					var newOptions = require("-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Affix.vue");
					if (newOptions && newOptions.__esModule) newOptions = newOptions.default;
					var newTemplate = require("-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./Affix.vue");
					hotAPI.update(id, newOptions, newTemplate);
				});
			})();
		}
	}, function (module, exports, __webpack_require__) {

		'use strict';

		Object.defineProperty(exports, "__esModule", {
			value: true
		});

		var _utils = __webpack_require__(92);

		var _NodeList = __webpack_require__(27);

		var _NodeList2 = _interopRequireDefault(_NodeList);

		function _interopRequireDefault(obj) {
			return obj && obj.__esModule ? obj : { default: obj };
		}

		exports.default = {
			props: {
				offset: {
					type: Number,
					coerce: _utils.coerce.number,
					default: 0
				}
			},
			data: function data() {
				return {
					affixed: false
				};
			},

			computed: {
				top: function top() {
					return this.offset > 0 ? this.offset + 'px' : null;
				}
			},
			methods: {
				checkScroll: function checkScroll() {
					var _this = this;

					if (!(this.$el.offsetWidth || this.$el.offsetHeight || this.$el.getClientRects().length)) {
						return;
					}

					var scroll = {};
					var element = {};
					var rect = this.$el.getBoundingClientRect();
					var body = document.body;
					['Top', 'Left'].forEach(function (type) {
						var t = type.toLowerCase();
						var ret = window['page' + (type === 'Top' ? 'Y' : 'X') + 'Offset'];
						var method = 'scroll' + type;
						if (typeof ret !== 'number') {
							ret = document.documentElement[method];
							if (typeof ret !== 'number') {
								ret = document.body[method];
							}
						}
						scroll[t] = ret;
						element[t] = scroll[t] + rect[t] - (_this.$el['client' + type] || body['client' + type] || 0);
					});
					var fix = scroll.top > element.top - this.offset;
					if (this.affixed !== fix) {
						this.affixed = fix;
					}
				}
			},
			ready: function ready() {
				var _this2 = this;

				(0, _NodeList2.default)(window).on('scroll resize', function () {
					return _this2.checkScroll();
				});
				setTimeout(function () {
					return _this2.checkScroll();
				}, 0);
			},
			beforeDestroy: function beforeDestroy() {
				var _this3 = this;

				(0, _NodeList2.default)(window).off('scroll resize', function () {
					return _this3.checkScroll();
				});
			}
		};
	}, function (module, exports) {

		module.exports = "<div class=\"hidden-print hidden-xs hidden-sm\">\r\n    <nav class=\"bs-docs-sidebar\" :class=\"{affix:affixed}\" :style=\"{marginTop:top}\">\r\n      <slot></slot>\r\n    </nav>\r\n  </div>";
	}, function (module, exports, __webpack_require__) {

		__webpack_require__(98);
		module.exports = __webpack_require__(102);

		if (module.exports.__esModule) module.exports = module.exports.default;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(103);
		if (false) {
			(function () {
				var hotAPI = require("vue-hot-reload-api");
				hotAPI.install(require("vue"));
				if (!hotAPI.compatible) return;
				var id = "-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Alert.vue";
				hotAPI.createRecord(id, module.exports);
				module.hot.accept(["-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Alert.vue", "-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./Alert.vue"], function () {
					var newOptions = require("-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Alert.vue");
					if (newOptions && newOptions.__esModule) newOptions = newOptions.default;
					var newTemplate = require("-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./Alert.vue");
					hotAPI.update(id, newOptions, newTemplate);
				});
			})();
		}
	}, function (module, exports, __webpack_require__) {
		var content = __webpack_require__(99);
		if (typeof content === 'string') content = [[module.id, content, '']];

		var update = __webpack_require__(101)(content, {});
		if (content.locals) module.exports = content.locals;

		if (false) {
			if (!content.locals) {
				module.hot.accept("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js?id=_v-200e8621&file=Alert.vue!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Alert.vue", function () {
					var newContent = require("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js?id=_v-200e8621&file=Alert.vue!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Alert.vue");
					if (typeof newContent === 'string') newContent = [[module.id, newContent, '']];
					update(newContent);
				});
			}

			module.hot.dispose(function () {
				update();
			});
		}
	}, function (module, exports, __webpack_require__) {

		exports = module.exports = __webpack_require__(100)();

		exports.push([module.id, ".fade-transition {\r\n  -webkit-transition: opacity .3s ease;\r\n  transition: opacity .3s ease;\r\n}\r\n.fade-enter,\r\n.fade-leave {\r\n  height: 0;\r\n  opacity: 0;\r\n}\r\n.alert.top {\r\n  position: fixed;\r\n  top: 30px;\r\n  margin: 0 auto;\r\n  left: 0;\r\n  right: 0;\r\n  z-index: 1050;\r\n}\r\n.alert.top-right {\r\n  position: fixed;\r\n  top: 30px;\r\n  right: 50px;\r\n  z-index: 1050;\r\n}", ""]);
	}, function (module, exports) {
		module.exports = function () {
			var list = [];

			list.toString = function toString() {
				var result = [];
				for (var i = 0; i < this.length; i++) {
					var item = this[i];
					if (item[2]) {
						result.push("@media " + item[2] + "{" + item[1] + "}");
					} else {
						result.push(item[1]);
					}
				}
				return result.join("");
			};

			list.i = function (modules, mediaQuery) {
				if (typeof modules === "string") modules = [[null, modules, ""]];
				var alreadyImportedModules = {};
				for (var i = 0; i < this.length; i++) {
					var id = this[i][0];
					if (typeof id === "number") alreadyImportedModules[id] = true;
				}
				for (i = 0; i < modules.length; i++) {
					var item = modules[i];

					if (typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
						if (mediaQuery && !item[2]) {
							item[2] = mediaQuery;
						} else if (mediaQuery) {
							item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
						}
						list.push(item);
					}
				}
			};
			return list;
		};
	}, function (module, exports, __webpack_require__) {
		var stylesInDom = {},
		    memoize = function memoize(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		    isOldIE = memoize(function () {
			return (/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())
			);
		}),
		    getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		    singletonElement = null,
		    singletonCounter = 0,
		    styleElementsInsertedAtTop = [];

		module.exports = function (list, options) {
			if (false) {
				if ((typeof document === 'undefined' ? 'undefined' : _typeof4(document)) !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
			}

			options = options || {};

			if (typeof options.singleton === "undefined") options.singleton = isOldIE();

			if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

			var styles = listToStyles(list);
			addStylesToDom(styles, options);

			return function update(newList) {
				var mayRemove = [];
				for (var i = 0; i < styles.length; i++) {
					var item = styles[i];
					var domStyle = stylesInDom[item.id];
					domStyle.refs--;
					mayRemove.push(domStyle);
				}
				if (newList) {
					var newStyles = listToStyles(newList);
					addStylesToDom(newStyles, options);
				}
				for (var i = 0; i < mayRemove.length; i++) {
					var domStyle = mayRemove[i];
					if (domStyle.refs === 0) {
						for (var j = 0; j < domStyle.parts.length; j++) {
							domStyle.parts[j]();
						}delete stylesInDom[domStyle.id];
					}
				}
			};
		};

		function addStylesToDom(styles, options) {
			for (var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				if (domStyle) {
					domStyle.refs++;
					for (var j = 0; j < domStyle.parts.length; j++) {
						domStyle.parts[j](item.parts[j]);
					}
					for (; j < item.parts.length; j++) {
						domStyle.parts.push(addStyle(item.parts[j], options));
					}
				} else {
					var parts = [];
					for (var j = 0; j < item.parts.length; j++) {
						parts.push(addStyle(item.parts[j], options));
					}
					stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts };
				}
			}
		}

		function listToStyles(list) {
			var styles = [];
			var newStyles = {};
			for (var i = 0; i < list.length; i++) {
				var item = list[i];
				var id = item[0];
				var css = item[1];
				var media = item[2];
				var sourceMap = item[3];
				var part = { css: css, media: media, sourceMap: sourceMap };
				if (!newStyles[id]) styles.push(newStyles[id] = { id: id, parts: [part] });else newStyles[id].parts.push(part);
			}
			return styles;
		}

		function insertStyleElement(options, styleElement) {
			var head = getHeadElement();
			var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
			if (options.insertAt === "top") {
				if (!lastStyleElementInsertedAtTop) {
					head.insertBefore(styleElement, head.firstChild);
				} else if (lastStyleElementInsertedAtTop.nextSibling) {
					head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
				} else {
					head.appendChild(styleElement);
				}
				styleElementsInsertedAtTop.push(styleElement);
			} else if (options.insertAt === "bottom") {
				head.appendChild(styleElement);
			} else {
				throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
			}
		}

		function removeStyleElement(styleElement) {
			styleElement.parentNode.removeChild(styleElement);
			var idx = styleElementsInsertedAtTop.indexOf(styleElement);
			if (idx >= 0) {
				styleElementsInsertedAtTop.splice(idx, 1);
			}
		}

		function createStyleElement(options) {
			var styleElement = document.createElement("style");
			styleElement.type = "text/css";
			insertStyleElement(options, styleElement);
			return styleElement;
		}

		function createLinkElement(options) {
			var linkElement = document.createElement("link");
			linkElement.rel = "stylesheet";
			insertStyleElement(options, linkElement);
			return linkElement;
		}

		function addStyle(obj, options) {
			var styleElement, update, remove;

			if (options.singleton) {
				var styleIndex = singletonCounter++;
				styleElement = singletonElement || (singletonElement = createStyleElement(options));
				update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
				remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
			} else if (obj.sourceMap && typeof URL === "function" && typeof URL.createObjectURL === "function" && typeof URL.revokeObjectURL === "function" && typeof Blob === "function" && typeof btoa === "function") {
				styleElement = createLinkElement(options);
				update = updateLink.bind(null, styleElement);
				remove = function remove() {
					removeStyleElement(styleElement);
					if (styleElement.href) URL.revokeObjectURL(styleElement.href);
				};
			} else {
				styleElement = createStyleElement(options);
				update = applyToTag.bind(null, styleElement);
				remove = function remove() {
					removeStyleElement(styleElement);
				};
			}

			update(obj);

			return function updateStyle(newObj) {
				if (newObj) {
					if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) return;
					update(obj = newObj);
				} else {
					remove();
				}
			};
		}

		var replaceText = function () {
			var textStore = [];

			return function (index, replacement) {
				textStore[index] = replacement;
				return textStore.filter(Boolean).join('\n');
			};
		}();

		function applyToSingletonTag(styleElement, index, remove, obj) {
			var css = remove ? "" : obj.css;

			if (styleElement.styleSheet) {
				styleElement.styleSheet.cssText = replaceText(index, css);
			} else {
				var cssNode = document.createTextNode(css);
				var childNodes = styleElement.childNodes;
				if (childNodes[index]) styleElement.removeChild(childNodes[index]);
				if (childNodes.length) {
					styleElement.insertBefore(cssNode, childNodes[index]);
				} else {
					styleElement.appendChild(cssNode);
				}
			}
		}

		function applyToTag(styleElement, obj) {
			var css = obj.css;
			var media = obj.media;

			if (media) {
				styleElement.setAttribute("media", media);
			}

			if (styleElement.styleSheet) {
				styleElement.styleSheet.cssText = css;
			} else {
				while (styleElement.firstChild) {
					styleElement.removeChild(styleElement.firstChild);
				}
				styleElement.appendChild(document.createTextNode(css));
			}
		}

		function updateLink(linkElement, obj) {
			var css = obj.css;
			var sourceMap = obj.sourceMap;

			if (sourceMap) {
				css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
			}

			var blob = new Blob([css], { type: "text/css" });

			var oldSrc = linkElement.href;

			linkElement.href = URL.createObjectURL(blob);

			if (oldSrc) URL.revokeObjectURL(oldSrc);
		}
	}, function (module, exports, __webpack_require__) {

		'use strict';

		Object.defineProperty(exports, "__esModule", {
			value: true
		});

		var _utils = __webpack_require__(92);

		exports.default = {
			props: {
				type: {
					type: String
				},
				dismissable: {
					type: Boolean,
					coerce: _utils.coerce.boolean,
					default: false
				},
				show: {
					type: Boolean,
					coerce: _utils.coerce.boolean,
					default: true,
					twoWay: true
				},
				duration: {
					type: Number,
					coerce: _utils.coerce.number,
					default: 0
				},
				width: {
					type: String
				},
				placement: {
					type: String
				}
			},
			watch: {
				show: function show(val) {
					var _this = this;

					if (this._timeout) clearTimeout(this._timeout);
					if (val && Boolean(this.duration)) {
						this._timeout = setTimeout(function () {
							_this.show = false;
						}, this.duration);
					}
				}
			}
		};
	}, function (module, exports) {

		module.exports = "<div\r\n    v-show=\"show\"\r\n    v-bind:class=\"{\r\n      'alert':\t\ttrue,\r\n      'alert-success':(type == 'success'),\r\n      'alert-warning':(type == 'warning'),\r\n      'alert-info':\t(type == 'info'),\r\n      'alert-danger':\t(type == 'danger'),\r\n      'top': \t\t\t(placement === 'top'),\r\n      'top-right': \t(placement === 'top-right')\r\n    }\"\r\n    transition=\"fade\"\r\n    v-bind:style=\"{width:width}\"\r\n    role=\"alert\">\r\n    <button v-show=\"dismissable\" type=\"button\" class=\"close\"\r\n      @click=\"show = false\">\r\n      <span>&times;</span>\r\n    </button>\r\n    <slot></slot>\r\n  </div>";
	}, function (module, exports, __webpack_require__) {

		__webpack_require__(105);
		module.exports = __webpack_require__(107);

		if (module.exports.__esModule) module.exports = module.exports.default;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(108);
		if (false) {
			(function () {
				var hotAPI = require("vue-hot-reload-api");
				hotAPI.install(require("vue"));
				if (!hotAPI.compatible) return;
				var id = "-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Aside.vue";
				hotAPI.createRecord(id, module.exports);
				module.hot.accept(["-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Aside.vue", "-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./Aside.vue"], function () {
					var newOptions = require("-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Aside.vue");
					if (newOptions && newOptions.__esModule) newOptions = newOptions.default;
					var newTemplate = require("-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./Aside.vue");
					hotAPI.update(id, newOptions, newTemplate);
				});
			})();
		}
	}, function (module, exports, __webpack_require__) {
		var content = __webpack_require__(106);
		if (typeof content === 'string') content = [[module.id, content, '']];

		var update = __webpack_require__(101)(content, {});
		if (content.locals) module.exports = content.locals;

		if (false) {
			if (!content.locals) {
				module.hot.accept("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js?id=_v-9bcf1806&file=Aside.vue!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Aside.vue", function () {
					var newContent = require("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js?id=_v-9bcf1806&file=Aside.vue!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Aside.vue");
					if (typeof newContent === 'string') newContent = [[module.id, newContent, '']];
					update(newContent);
				});
			}

			module.hot.dispose(function () {
				update();
			});
		}
	}, function (module, exports, __webpack_require__) {

		exports = module.exports = __webpack_require__(100)();

		exports.push([module.id, ".aside-open {\r\n  -webkit-transition: -webkit-transform 0.3s;\r\n  transition: -webkit-transform 0.3s;\r\n  transition: transform 0.3s;\r\n  transition: transform 0.3s, -webkit-transform 0.3s;\r\n}\r\n.aside-open.has-push-right {\r\n  -webkit-transform: translateX(-300px);\r\n          transform: translateX(-300px);\r\n}\r\n.aside {\r\n    position: fixed;\r\n    top: 0;\r\n    bottom: 0;\r\n    z-index: 1049;\r\n    overflow: auto;\r\n    background: #fff;\r\n}\r\n.aside.left {\r\n  left: 0;\r\n  right: auto;\r\n}\r\n.aside.right {\r\n  left: auto;\r\n  right: 0;\r\n}\r\n.slideleft-enter {\r\n  -webkit-animation:slideleft-in .3s;\r\n          animation:slideleft-in .3s;\r\n}\r\n.slideleft-leave {\r\n  -webkit-animation:slideleft-out .3s;\r\n          animation:slideleft-out .3s;\r\n}\r\n@-webkit-keyframes slideleft-in {\r\n  0% {\r\n    -webkit-transform: translateX(-100%);\r\n            transform: translateX(-100%);\r\n    opacity: 0;\r\n  }\r\n  100% {\r\n    -webkit-transform: translateX(0);\r\n            transform: translateX(0);\r\n    opacity: 1;\r\n  }\r\n}\r\n@keyframes slideleft-in {\r\n  0% {\r\n    -webkit-transform: translateX(-100%);\r\n            transform: translateX(-100%);\r\n    opacity: 0;\r\n  }\r\n  100% {\r\n    -webkit-transform: translateX(0);\r\n            transform: translateX(0);\r\n    opacity: 1;\r\n  }\r\n}\r\n@-webkit-keyframes slideleft-out {\r\n  0% {\r\n    -webkit-transform: translateX(0);\r\n            transform: translateX(0);\r\n    opacity: 1;\r\n  }\r\n  100% {\r\n    -webkit-transform: translateX(-100%);\r\n            transform: translateX(-100%);\r\n    opacity: 0;\r\n  }\r\n}\r\n@keyframes slideleft-out {\r\n  0% {\r\n    -webkit-transform: translateX(0);\r\n            transform: translateX(0);\r\n    opacity: 1;\r\n  }\r\n  100% {\r\n    -webkit-transform: translateX(-100%);\r\n            transform: translateX(-100%);\r\n    opacity: 0;\r\n  }\r\n}\r\n.slideright-enter {\r\n  -webkit-animation:slideright-in .3s;\r\n          animation:slideright-in .3s;\r\n}\r\n.slideright-leave {\r\n  -webkit-animation:slideright-out .3s;\r\n          animation:slideright-out .3s;\r\n}\r\n@-webkit-keyframes slideright-in {\r\n  0% {\r\n    -webkit-transform: translateX(100%);\r\n            transform: translateX(100%);\r\n    opacity: 0;\r\n  }\r\n  100% {\r\n    -webkit-transform: translateX(0);\r\n            transform: translateX(0);\r\n    opacity: 1;\r\n  }\r\n}\r\n@keyframes slideright-in {\r\n  0% {\r\n    -webkit-transform: translateX(100%);\r\n            transform: translateX(100%);\r\n    opacity: 0;\r\n  }\r\n  100% {\r\n    -webkit-transform: translateX(0);\r\n            transform: translateX(0);\r\n    opacity: 1;\r\n  }\r\n}\r\n@-webkit-keyframes slideright-out {\r\n  0% {\r\n    -webkit-transform: translateX(0);\r\n            transform: translateX(0);\r\n    opacity: 1;\r\n  }\r\n  100% {\r\n    -webkit-transform: translateX(100%);\r\n            transform: translateX(100%);\r\n    opacity: 0;\r\n  }\r\n}\r\n@keyframes slideright-out {\r\n  0% {\r\n    -webkit-transform: translateX(0);\r\n            transform: translateX(0);\r\n    opacity: 1;\r\n  }\r\n  100% {\r\n    -webkit-transform: translateX(100%);\r\n            transform: translateX(100%);\r\n    opacity: 0;\r\n  }\r\n}\r\n.aside:focus {\r\n    outline: 0\r\n}\r\n@media (max-width: 991px) {\r\n  .aside {\r\n    min-width:240px\r\n  }\r\n}\r\n.aside.left {\r\n  right: auto;\r\n  left: 0\r\n}\r\n.aside.right {\r\n  right: 0;\r\n  left: auto\r\n}\r\n.aside .aside-dialog .aside-header {\r\n  border-bottom: 1px solid #e5e5e5;\r\n  min-height: 16.43px;\r\n  padding: 6px 15px;\r\n  background: #337ab7;\r\n  color: #fff\r\n}\r\n.aside .aside-dialog .aside-header .close {\r\n  margin-right: -8px;\r\n  padding: 4px 8px;\r\n  color: #fff;\r\n  font-size: 25px;\r\n  opacity: .8\r\n}\r\n.aside .aside-dialog .aside-body {\r\n  position: relative;\r\n  padding: 15px\r\n}\r\n.aside .aside-dialog .aside-footer {\r\n  padding: 15px;\r\n  text-align: right;\r\n  border-top: 1px solid #e5e5e5\r\n}\r\n.aside .aside-dialog .aside-footer .btn+.btn {\r\n  margin-left: 5px;\r\n  margin-bottom: 0\r\n}\r\n.aside .aside-dialog .aside-footer .btn-group .btn+.btn {\r\n  margin-left: -1px\r\n}\r\n.aside .aside-dialog .aside-footer .btn-block+.btn-block {\r\n  margin-left: 0\r\n}\r\n.aside-backdrop {\r\n  position: fixed;\r\n  top: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  z-index: 1040;\r\n  opacity: 0;\r\n  -webkit-transition: opacity .3s ease;\r\n  transition: opacity .3s ease;\r\n  background-color: #000\r\n}\r\n.aside-backdrop.in {\r\n  opacity: .5;\r\n  filter: alpha(opacity=50)\r\n}", ""]);
	}, function (module, exports, __webpack_require__) {

		'use strict';

		Object.defineProperty(exports, "__esModule", {
			value: true
		});

		var _utils = __webpack_require__(92);

		var _NodeList = __webpack_require__(27);

		var _NodeList2 = _interopRequireDefault(_NodeList);

		function _interopRequireDefault(obj) {
			return obj && obj.__esModule ? obj : { default: obj };
		}

		exports.default = {
			props: {
				show: {
					type: Boolean,
					coerce: _utils.coerce.boolean,
					required: true,
					twoWay: true
				},
				placement: {
					type: String,
					default: 'right'
				},
				header: {
					type: String
				},
				width: {
					type: Number,
					coerce: _utils.coerce.number,
					default: 320
				}
			},
			watch: {
				show: function show(val) {
					var _this = this;

					var body = document.body;
					var scrollBarWidth = (0, _utils.getScrollBarWidth)();
					if (val) {
						if (!this._backdrop) {
							this._backdrop = document.createElement('div');
						}
						this._backdrop.className = 'aside-backdrop';
						body.appendChild(this._backdrop);
						body.classList.add('modal-open');
						if (scrollBarWidth !== 0) {
							body.style.paddingRight = scrollBarWidth + 'px';
						}

						var x = this._backdrop.clientHeight;
						this._backdrop.classList.add('in');
						(0, _NodeList2.default)(this._backdrop).on('click', function () {
							return _this.close();
						});
					} else {
						(0, _NodeList2.default)(this._backdrop).on('transitionend', function () {
							(0, _NodeList2.default)(_this._backdrop).off();
							try {
								body.classList.remove('modal-open');
								body.style.paddingRight = '0';
								body.removeChild(_this._backdrop);
								_this._backdrop = null;
							} catch (e) {}
						});
						this._backdrop.className = 'aside-backdrop';
					}
				}
			},
			methods: {
				close: function close() {
					this.show = false;
				}
			}
		};
	}, function (module, exports) {

		module.exports = "<div class=\"aside\"\r\n    v-bind:style=\"{width:width + 'px'}\"\r\n    v-bind:class=\"{\r\n    left:placement === 'left',\r\n    right:placement === 'right'\r\n    }\"\r\n    v-show=\"show\"\r\n    :transition=\"(this.placement === 'left') ? 'slideleft' : 'slideright'\">\r\n    <div class=\"aside-dialog\">\r\n      <div class=\"aside-content\">\r\n        <div class=\"aside-header\">\r\n          <button type=\"button\" class=\"close\" @click='close'><span>&times;</span></button>\r\n          <h4 class=\"aside-title\">\r\n          <slot name=\"header\">\r\n            {{ header }}\r\n          </slot>\r\n          </h4>\r\n        </div>\r\n        <div class=\"aside-body\">\r\n          <slot></slot>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>";
	}, function (module, exports, __webpack_require__) {

		module.exports = __webpack_require__(110);

		if (module.exports.__esModule) module.exports = module.exports.default;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(111);
		if (false) {
			(function () {
				var hotAPI = require("vue-hot-reload-api");
				hotAPI.install(require("vue"));
				if (!hotAPI.compatible) return;
				var id = "-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./buttonGroup.vue";
				hotAPI.createRecord(id, module.exports);
				module.hot.accept(["-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./buttonGroup.vue", "-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./buttonGroup.vue"], function () {
					var newOptions = require("-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./buttonGroup.vue");
					if (newOptions && newOptions.__esModule) newOptions = newOptions.default;
					var newTemplate = require("-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./buttonGroup.vue");
					hotAPI.update(id, newOptions, newTemplate);
				});
			})();
		}
	}, function (module, exports, __webpack_require__) {

		'use strict';

		Object.defineProperty(exports, "__esModule", {
			value: true
		});

		var _utils = __webpack_require__(92);

		exports.default = {
			props: {
				value: null,
				buttons: {
					type: Boolean,
					coerce: _utils.coerce.boolean,
					default: true
				},
				justified: {
					type: Boolean,
					coerce: _utils.coerce.boolean,
					default: false
				},
				type: {
					type: String,
					default: 'default'
				},
				vertical: {
					type: Boolean,
					coerce: _utils.coerce.boolean,
					default: false
				}
			},
			watch: {
				value: {
					deep: true,
					handler: function handler(val) {
						this.$children.forEach(function (el) {
							if (el.group && el.eval) el.eval();
						});
					}
				}
			},
			created: function created() {
				this._btnGroup = true;
			}
		};
	}, function (module, exports) {

		module.exports = "<div :class=\"{'btn-group':buttons,'btn-group-justified':justified,'btn-group-vertical':vertical}\" :data-toggle=\"buttons&&'buttons'\">\r\n    <slot></slot>\r\n  </div>";
	}, function (module, exports, __webpack_require__) {

		__webpack_require__(113);
		module.exports = __webpack_require__(115);

		if (module.exports.__esModule) module.exports = module.exports.default;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(116);
		if (false) {
			(function () {
				var hotAPI = require("vue-hot-reload-api");
				hotAPI.install(require("vue"));
				if (!hotAPI.compatible) return;
				var id = "-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Carousel.vue";
				hotAPI.createRecord(id, module.exports);
				module.hot.accept(["-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Carousel.vue", "-!vue-html-loader!./../node_modules/vue-loader/lib/template-rewriter.js?id=_v-5afe80ab&file=Carousel.vue!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./Carousel.vue"], function () {
					var newOptions = require("-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Carousel.vue");
					if (newOptions && newOptions.__esModule) newOptions = newOptions.default;
					var newTemplate = require("-!vue-html-loader!./../node_modules/vue-loader/lib/template-rewriter.js?id=_v-5afe80ab&file=Carousel.vue!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./Carousel.vue");
					hotAPI.update(id, newOptions, newTemplate);
				});
			})();
		}
	}, function (module, exports, __webpack_require__) {
		var content = __webpack_require__(114);
		if (typeof content === 'string') content = [[module.id, content, '']];

		var update = __webpack_require__(101)(content, {});
		if (content.locals) module.exports = content.locals;

		if (false) {
			if (!content.locals) {
				module.hot.accept("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js?id=_v-5afe80ab&file=Carousel.vue&scoped=true!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Carousel.vue", function () {
					var newContent = require("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js?id=_v-5afe80ab&file=Carousel.vue&scoped=true!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Carousel.vue");
					if (typeof newContent === 'string') newContent = [[module.id, newContent, '']];
					update(newContent);
				});
			}

			module.hot.dispose(function () {
				update();
			});
		}
	}, function (module, exports, __webpack_require__) {

		exports = module.exports = __webpack_require__(100)();

		exports.push([module.id, ".carousel-control[_v-5afe80ab] {\r\n  cursor: pointer;\r\n}", ""]);
	}, function (module, exports, __webpack_require__) {

		'use strict';

		Object.defineProperty(exports, "__esModule", {
			value: true
		});

		var _utils = __webpack_require__(92);

		var _NodeList = __webpack_require__(27);

		var _NodeList2 = _interopRequireDefault(_NodeList);

		function _interopRequireDefault(obj) {
			return obj && obj.__esModule ? obj : { default: obj };
		}

		exports.default = {
			props: {
				indicators: {
					type: Boolean,
					coerce: _utils.coerce.boolean,
					default: true
				},
				controls: {
					type: Boolean,
					coerce: _utils.coerce.boolean,
					default: true
				},
				interval: {
					type: Number,
					coerce: _utils.coerce.number,
					default: 5000
				}
			},
			data: function data() {
				return {
					indicator: [],
					index: 0,
					isAnimating: false
				};
			},

			watch: {
				index: function index(newVal, oldVal) {
					this.slide(newVal > oldVal ? 'left' : 'right', newVal, oldVal);
				}
			},
			methods: {
				indicatorClick: function indicatorClick(index) {
					if (this.isAnimating || this.index === index) return false;
					this.isAnimating = true;
					this.index = index;
				},
				slide: function slide(direction, next, prev) {
					var _this = this;

					if (!this.$el) {
						return;
					}
					var $slider = (0, _NodeList2.default)('.item', this.$el);
					if (!$slider.length) {
						return;
					}
					var selected = $slider[next] || $slider[0];
					(0, _NodeList2.default)(selected).addClass(direction === 'left' ? 'next' : 'prev');

					var x = selected.clientHeight;
					(0, _NodeList2.default)([$slider[prev], selected]).addClass(direction).on('transitionend', function () {
						$slider.off('transitionend').className = 'item';
						(0, _NodeList2.default)(selected).addClass('active');
						_this.isAnimating = false;
					});
				},
				next: function next() {
					if (!this.$el || this.isAnimating) {
						return false;
					}
					this.isAnimating = true;
					this.index + 1 < (0, _NodeList2.default)('.item', this.$el).length ? this.index += 1 : this.index = 0;
				},
				prev: function prev() {
					if (!this.$el || this.isAnimating) {
						return false;
					}
					this.isAnimating = true;
					this.index === 0 ? this.index = (0, _NodeList2.default)('.item', this.$el).length - 1 : this.index -= 1;
				},
				toggleInterval: function toggleInterval(val) {
					if (val === undefined) {
						val = this._intervalID;
					}
					if (this._intervalID) {
						clearInterval(this._intervalID);
						delete this._intervalID;
					}
					if (val && this.interval > 0) {
						this._intervalID = setInterval(this.next, this.interval);
					}
				}
			},
			ready: function ready() {
				var _this2 = this;

				this.toggleInterval(true);
				(0, _NodeList2.default)(this.$el).on('mouseenter', function () {
					return _this2.toggleInterval(false);
				}).on('mouseleave', function () {
					return _this2.toggleInterval(true);
				});
			},
			beforeDestroy: function beforeDestroy() {
				this.toggleInterval(false);
				(0, _NodeList2.default)(this.$el).off('mouseenter mouseleave');
			}
		};
	}, function (module, exports) {

		module.exports = "<div class=\"carousel slide\" data-ride=\"carousel\" _v-5afe80ab=\"\">\n  <!-- Indicators -->\n  <ol class=\"carousel-indicators\" v-show=\"indicators\" _v-5afe80ab=\"\">\n    <li v-for=\"i in indicator\" @click=\"indicatorClick($index)\" v-bind:class=\"{active:$index === index}\" _v-5afe80ab=\"\"><span _v-5afe80ab=\"\"></span></li>\n  </ol>\n  <!-- Wrapper for slides -->\n  <div class=\"carousel-inner\" role=\"listbox\" _v-5afe80ab=\"\">\n    <slot _v-5afe80ab=\"\"></slot>\n  </div>\n  <!-- Controls -->\n  <div v-show=\"controls\" class=\"carousel-controls hidden-xs\" _v-5afe80ab=\"\">\n    <a class=\"left carousel-control\" role=\"button\" @click=\"prev\" _v-5afe80ab=\"\">\n      <span class=\"glyphicon glyphicon-chevron-left\" aria-hidden=\"true\" _v-5afe80ab=\"\"></span>\n    </a>\n    <a class=\"right carousel-control\" role=\"button\" @click=\"next\" _v-5afe80ab=\"\">\n      <span class=\"glyphicon glyphicon-chevron-right\" aria-hidden=\"true\" _v-5afe80ab=\"\"></span>\n    </a>\n  </div>\n</div>";
	}, function (module, exports, __webpack_require__) {

		__webpack_require__(118);
		module.exports = __webpack_require__(120);

		if (module.exports.__esModule) module.exports = module.exports.default;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(121);
		if (false) {
			(function () {
				var hotAPI = require("vue-hot-reload-api");
				hotAPI.install(require("vue"));
				if (!hotAPI.compatible) return;
				var id = "-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Checkbox.vue";
				hotAPI.createRecord(id, module.exports);
				module.hot.accept(["-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Checkbox.vue", "-!vue-html-loader!./../node_modules/vue-loader/lib/template-rewriter.js?id=_v-dc195ce4&file=Checkbox.vue!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./Checkbox.vue"], function () {
					var newOptions = require("-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Checkbox.vue");
					if (newOptions && newOptions.__esModule) newOptions = newOptions.default;
					var newTemplate = require("-!vue-html-loader!./../node_modules/vue-loader/lib/template-rewriter.js?id=_v-dc195ce4&file=Checkbox.vue!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./Checkbox.vue");
					hotAPI.update(id, newOptions, newTemplate);
				});
			})();
		}
	}, function (module, exports, __webpack_require__) {
		var content = __webpack_require__(119);
		if (typeof content === 'string') content = [[module.id, content, '']];

		var update = __webpack_require__(101)(content, {});
		if (content.locals) module.exports = content.locals;

		if (false) {
			if (!content.locals) {
				module.hot.accept("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js?id=_v-dc195ce4&file=Checkbox.vue&scoped=true!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Checkbox.vue", function () {
					var newContent = require("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js?id=_v-dc195ce4&file=Checkbox.vue&scoped=true!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Checkbox.vue");
					if (typeof newContent === 'string') newContent = [[module.id, newContent, '']];
					update(newContent);
				});
			}

			module.hot.dispose(function () {
				update();
			});
		}
	}, function (module, exports, __webpack_require__) {

		exports = module.exports = __webpack_require__(100)();

		exports.push([module.id, "label.checkbox[_v-dc195ce4] {\r\n  position: relative;\r\n  padding-left: 18px;\r\n}\r\nlabel.checkbox > input[_v-dc195ce4] {\r\n  box-sizing: border-box;\r\n  position: absolute;\r\n  z-index: -1;\r\n  padding: 0;\r\n  opacity: 0;\r\n  margin: 0;\r\n}\r\nlabel.checkbox > .icon[_v-dc195ce4] {\r\n  position: absolute;\r\n  top: .2rem;\r\n  left: 0;\r\n  display: block;\r\n  width: 1.4rem;\r\n  height: 1.4rem;\r\n  line-height:1rem;\r\n  text-align: center;\r\n  -webkit-user-select: none;\r\n     -moz-user-select: none;\r\n      -ms-user-select: none;\r\n          user-select: none;\r\n  border-radius: .35rem;\r\n  background-repeat: no-repeat;\r\n  background-position: center center;\r\n  background-size: 50% 50%;\r\n}\r\nlabel.checkbox:not(.active) > .icon[_v-dc195ce4] {\r\n  background-color: #ddd;\r\n  border: 1px solid #bbb;\r\n}\r\nlabel.checkbox > input:focus ~ .icon[_v-dc195ce4] {\r\n  outline: 0;\r\n  border: 1px solid #66afe9;\r\n  box-shadow: inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(102,175,233,.6);\r\n}\r\nlabel.checkbox.active > .icon[_v-dc195ce4] {\r\n  background-size: 1rem 1rem;\r\n  background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iNyIgaGVpZ2h0PSI3Ij48cGF0aCBmaWxsPSIjZmZmIiBkPSJtNS43MywwLjUybC0zLjEyNDIyLDMuMzQxNjFsLTEuMzM4OTUsLTEuNDMyMTJsLTEuMjQ5NjksMS4zMzY2NWwyLjU4ODYzLDIuNzY4NzZsNC4zNzM5LC00LjY3ODI2bC0xLjI0OTY5LC0xLjMzNjY1bDAsMGwwLjAwMDAyLDAuMDAwMDF6Ii8+PC9zdmc+);\r\n}\r\nlabel.checkbox.active .btn-default[_v-dc195ce4] { -webkit-filter: brightness(75%); filter: brightness(75%); }\r\n\r\nlabel.checkbox.disabled[_v-dc195ce4],\r\nlabel.checkbox.readonly[_v-dc195ce4],\r\n.btn.readonly[_v-dc195ce4] {\r\n  filter: alpha(opacity=65);\r\n  box-shadow: none;\r\n  opacity: .65;\r\n}\r\nlabel.btn > input[type=checkbox][_v-dc195ce4] {\r\n  position: absolute;\r\n  clip: rect(0,0,0,0);\r\n  pointer-events: none;\r\n}", ""]);
	}, function (module, exports, __webpack_require__) {

		'use strict';

		Object.defineProperty(exports, "__esModule", {
			value: true
		});

		var _utils = __webpack_require__(92);

		exports.default = {
			props: {
				value: {
					default: true
				},
				checked: {
					twoWay: true
				},
				button: {
					type: Boolean,
					coerce: _utils.coerce.boolean,
					default: false
				},
				disabled: {
					type: Boolean,
					coerce: _utils.coerce.boolean,
					default: false
				},
				name: {
					type: String,
					default: null
				},
				readonly: {
					type: Boolean,
					coerce: _utils.coerce.boolean,
					default: false
				},
				type: {
					type: String,
					default: null
				}
			},
			computed: {
				active: function active() {
					return typeof this.value !== 'boolean' && this.group ? ~this.$parent.value.indexOf(this.value) : this.checked === this.value;
				},
				isButton: function isButton() {
					return this.button || this.group && this.$parent.buttons;
				},
				group: function group() {
					return this.$parent && this.$parent._checkboxGroup;
				},
				typeColor: function typeColor() {
					return this.type || this.$parent && this.$parent.type || 'default';
				}
			},
			watch: {
				checked: function checked(val) {
					if (typeof this.value !== 'boolean' && this.group) {
						if (this.checked && !~this.$parent.value.indexOf(this.value)) this.$parent.value.push(this.value);
						if (!this.checked && ~this.$parent.value.indexOf(this.value)) this.$parent.value.$remove(this.value);
					}
				}
			},
			created: function created() {
				if (typeof this.value === 'boolean') {
					return;
				}
				var parent = this.$parent;
				if (parent && parent._btnGroup && !parent._radioGroup) {
					parent._checkboxGroup = true;
					if (!(parent.value instanceof Array)) {
						parent.value = [];
					}
				}
			},
			ready: function ready() {
				if (!this.$parent._checkboxGroup || typeof this.value === 'boolean') {
					return;
				}
				if (this.$parent.value.length) {
					this.checked = ~this.$parent.value.indexOf(this.value);
				} else if (this.checked) {
					this.$parent.value.push(this.value);
				}
			},

			methods: {
				eval: function _eval() {
					if (typeof this.value !== 'boolean' && this.group) {
						this.checked = ~this.$parent.value.indexOf(this.value);
					}
				},
				focus: function focus() {
					this.$els.input.focus();
				},
				toggle: function toggle() {
					if (!this.disabled) {
						this.focus();
						if (!this.readonly) {
							this.checked = this.checked ? null : this.value;
							if (this.group && typeof this.value !== 'boolean') {
								var index = this.$parent.value.indexOf(this.value);
								this.$parent.value[~index ? '$remove' : 'push'](this.value);
							}
						}
					}
					return false;
				}
			}
		};
	}, function (module, exports) {

		module.exports = "<label :class=\"[isButton?'btn btn-'+typeColor:'open checkbox '+typeColor,{active:checked,disabled:disabled,readonly:readonly}]\" @click.prevent=\"toggle\" _v-dc195ce4=\"\">\n    <input type=\"checkbox\" autocomplete=\"off\" v-el:input=\"\" :checked=\"active\" :value=\"value\" :name=\"name\" :readonly=\"readonly\" :disabled=\"disabled\" _v-dc195ce4=\"\">\n    <span v-if=\"!isButton\" class=\"icon dropdown-toggle\" :class=\"[active?'btn-'+typeColor:'',{bg:typeColor==='default'}]\" _v-dc195ce4=\"\"></span>\n    <span v-if=\"!isButton&amp;active&amp;&amp;typeColor==='default'\" class=\"icon\" _v-dc195ce4=\"\"></span>\n    <slot _v-dc195ce4=\"\"></slot>\n  </label>";
	}, function (module, exports, __webpack_require__) {

		__webpack_require__(123);
		module.exports = __webpack_require__(125);

		if (module.exports.__esModule) module.exports = module.exports.default;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(126);
		if (false) {
			(function () {
				var hotAPI = require("vue-hot-reload-api");
				hotAPI.install(require("vue"));
				if (!hotAPI.compatible) return;
				var id = "-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Datepicker.vue";
				hotAPI.createRecord(id, module.exports);
				module.hot.accept(["-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Datepicker.vue", "-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./Datepicker.vue"], function () {
					var newOptions = require("-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Datepicker.vue");
					if (newOptions && newOptions.__esModule) newOptions = newOptions.default;
					var newTemplate = require("-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./Datepicker.vue");
					hotAPI.update(id, newOptions, newTemplate);
				});
			})();
		}
	}, function (module, exports, __webpack_require__) {
		var content = __webpack_require__(124);
		if (typeof content === 'string') content = [[module.id, content, '']];

		var update = __webpack_require__(101)(content, {});
		if (content.locals) module.exports = content.locals;

		if (false) {
			if (!content.locals) {
				module.hot.accept("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js?id=_v-7e712e47&file=Datepicker.vue!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Datepicker.vue", function () {
					var newContent = require("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js?id=_v-7e712e47&file=Datepicker.vue!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Datepicker.vue");
					if (typeof newContent === 'string') newContent = [[module.id, newContent, '']];
					update(newContent);
				});
			}

			module.hot.dispose(function () {
				update();
			});
		}
	}, function (module, exports, __webpack_require__) {

		exports = module.exports = __webpack_require__(100)();

		exports.push([module.id, ".datepicker{\r\n  position: relative;\r\n  display: inline-block;\r\n}\r\ninput.datepicker-input.with-reset-button {\r\n  padding-right: 25px;\r\n}\r\n.datepicker > button.close {\r\n  position: absolute;\r\n  top: 0;\r\n  right: 0;\r\n  outline: none;\r\n  z-index: 2;\r\n  display: block;\r\n  width: 34px;\r\n  height: 34px;\r\n  line-height: 34px;\r\n  text-align: center;\r\n}\r\n.datepicker > button.close:focus {\r\n  opacity: .2;\r\n}\r\n.datepicker-popup{\r\n  position: absolute;\r\n  border: 1px solid #ccc;\r\n  border-radius: 5px;\r\n  background: #fff;\r\n  margin-top: 2px;\r\n  z-index: 1000;\r\n  box-shadow: 0 6px 12px rgba(0,0,0,0.175);\r\n}\r\n.datepicker-inner{\r\n  width: 218px;\r\n}\r\n.datepicker-body{\r\n  padding: 10px 10px;\r\n}\r\n.datepicker-ctrl p,\r\n.datepicker-ctrl span,\r\n.datepicker-body span{\r\n  display: inline-block;\r\n  width: 28px;\r\n  line-height: 28px;\r\n  height: 28px;\r\n  border-radius: 4px;\r\n}\r\n.datepicker-ctrl p {\r\n  width: 65%;\r\n}\r\n.datepicker-ctrl span {\r\n  position: absolute;\r\n}\r\n.datepicker-body span {\r\n  text-align: center;\r\n}\r\n.datepicker-monthRange span{\r\n  width: 48px;\r\n  height: 50px;\r\n  line-height: 45px;\r\n}\r\n.datepicker-item-disable {\r\n  background-color: white!important;\r\n  cursor: not-allowed!important;\r\n}\r\n.decadeRange span:first-child,\r\n.decadeRange span:last-child,\r\n.datepicker-item-disable,\r\n.datepicker-item-gray{\r\n  color: #999;\r\n}\r\n\r\n.datepicker-dateRange-item-active:hover,\r\n.datepicker-dateRange-item-active {\r\n  background: rgb(50, 118, 177)!important;\r\n  color: white!important;\r\n}\r\n.datepicker-monthRange {\r\n  margin-top: 10px\r\n}\r\n.datepicker-monthRange span,\r\n.datepicker-ctrl span,\r\n.datepicker-ctrl p,\r\n.datepicker-dateRange span {\r\n  cursor: pointer;\r\n}\r\n.datepicker-monthRange span:hover,\r\n.datepicker-ctrl p:hover,\r\n.datepicker-ctrl i:hover,\r\n.datepicker-dateRange span:hover,\r\n.datepicker-dateRange-item-hover {\r\n  background-color : #eeeeee;\r\n}\r\n.datepicker-weekRange span{\r\n  font-weight: bold;\r\n}\r\n.datepicker-label{\r\n  background-color: #f8f8f8;\r\n  font-weight: 700;\r\n  padding: 7px 0;\r\n  text-align: center;\r\n}\r\n.datepicker-ctrl{\r\n  position: relative;\r\n  height: 30px;\r\n  line-height: 30px;\r\n  font-weight: bold;\r\n  text-align: center;\r\n}\r\n.month-btn{\r\n  font-weight: bold;\r\n  -webkit-user-select:none;\r\n  -moz-user-select:none;\r\n  -ms-user-select:none;\r\n  user-select:none;\r\n}\r\n.datepicker-preBtn{\r\n  left: 2px;\r\n}\r\n.datepicker-nextBtn{\r\n  right: 2px;\r\n}", ""]);
	}, function (module, exports, __webpack_require__) {

		'use strict';

		Object.defineProperty(exports, "__esModule", {
			value: true
		});

		var _utils = __webpack_require__(92);

		var _NodeList = __webpack_require__(27);

		var _NodeList2 = _interopRequireDefault(_NodeList);

		function _interopRequireDefault(obj) {
			return obj && obj.__esModule ? obj : { default: obj };
		}

		exports.default = {
			props: {
				value: {
					type: String,
					twoWay: true
				},
				format: {
					default: 'MM/dd/yyyy'
				},
				disabledDaysOfWeek: {
					type: Array,
					default: function _default() {
						return [];
					}
				},
				width: {
					type: String,
					default: '200px'
				},
				clearButton: {
					type: Boolean,
					default: false
				},
				lang: {
					type: String,
					default: navigator.language
				},
				placeholder: {
					type: String
				}
			},
			ready: function ready() {
				var _this = this;

				this._blur = function (e) {
					if (_this.$el !== null && !_this.$el.contains(e.target)) _this.close();
				};
				this.$dispatch('child-created', this);
				this.currDate = this.parse(this.value) || this.parse(new Date());
				(0, _NodeList2.default)(window).on('click', this._blur);
			},
			beforeDestroy: function beforeDestroy() {
				(0, _NodeList2.default)(window).off('click', this._blur);
			},
			data: function data() {
				return {
					currDate: new Date(),
					dateRange: [],
					decadeRange: [],
					displayDayView: false,
					displayMonthView: false,
					displayYearView: false
				};
			},

			watch: {
				currDate: function currDate() {
					this.getDateRange();
				}
			},
			computed: {
				text: function text() {
					return (0, _utils.translations)(this.lang);
				}
			},
			methods: {
				close: function close() {
					this.displayDayView = this.displayMonthView = this.displayYearView = false;
				},
				inputClick: function inputClick() {
					this.currDate = this.parse(this.value) || this.parse(new Date());
					if (this.displayMonthView || this.displayYearView) {
						this.displayDayView = false;
					} else {
						this.displayDayView = !this.displayDayView;
					}
				},
				preNextDecadeClick: function preNextDecadeClick(flag) {
					var year = this.currDate.getFullYear();
					var months = this.currDate.getMonth();
					var date = this.currDate.getDate();

					if (flag === 0) {
						this.currDate = new Date(year - 10, months, date);
					} else {
						this.currDate = new Date(year + 10, months, date);
					}
				},
				preNextMonthClick: function preNextMonthClick(flag) {
					var year = this.currDate.getFullYear();
					var month = this.currDate.getMonth();
					var date = this.currDate.getDate();

					if (flag === 0) {
						var preMonth = this.getYearMonth(year, month - 1);
						this.currDate = new Date(preMonth.year, preMonth.month, date);
					} else {
						var nextMonth = this.getYearMonth(year, month + 1);
						this.currDate = new Date(nextMonth.year, nextMonth.month, date);
					}
				},
				preNextYearClick: function preNextYearClick(flag) {
					var year = this.currDate.getFullYear();
					var months = this.currDate.getMonth();
					var date = this.currDate.getDate();

					if (flag === 0) {
						this.currDate = new Date(year - 1, months, date);
					} else {
						this.currDate = new Date(year + 1, months, date);
					}
				},
				yearSelect: function yearSelect(year) {
					this.displayYearView = false;
					this.displayMonthView = true;
					this.currDate = new Date(year, this.currDate.getMonth(), this.currDate.getDate());
				},
				daySelect: function daySelect(date, el) {
					if (el.$el.classList[0] === 'datepicker-item-disable') {
						return false;
					} else {
						this.currDate = date;
						this.value = this.stringify(this.currDate);
						this.displayDayView = false;
					}
				},
				switchMonthView: function switchMonthView() {
					this.displayDayView = false;
					this.displayMonthView = true;
				},
				switchDecadeView: function switchDecadeView() {
					this.displayMonthView = false;
					this.displayYearView = true;
				},
				monthSelect: function monthSelect(index) {
					this.displayMonthView = false;
					this.displayDayView = true;
					this.currDate = new Date(this.currDate.getFullYear(), index, this.currDate.getDate());
				},
				getYearMonth: function getYearMonth(year, month) {
					if (month > 11) {
						year++;
						month = 0;
					} else if (month < 0) {
						year--;
						month = 11;
					}
					return { year: year, month: month };
				},
				stringifyDecadeHeader: function stringifyDecadeHeader(date) {
					var yearStr = date.getFullYear().toString();
					var firstYearOfDecade = yearStr.substring(0, yearStr.length - 1) + 0;
					var lastYearOfDecade = parseInt(firstYearOfDecade, 10) + 10;
					return firstYearOfDecade + '-' + lastYearOfDecade;
				},
				stringifyDayHeader: function stringifyDayHeader(date) {
					return this.text.months[date.getMonth()] + ' ' + date.getFullYear();
				},
				parseMonth: function parseMonth(date) {
					return this.text.months[date.getMonth()];
				},
				stringifyYearHeader: function stringifyYearHeader(date) {
					return date.getFullYear();
				},
				stringify: function stringify(date) {
					var format = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.format;

					if (!date) date = this.parse();
					if (!date) return '';
					var year = date.getFullYear();
					var month = date.getMonth() + 1;
					var day = date.getDate();
					var monthName = this.parseMonth(date);

					return format.replace(/yyyy/g, year).replace(/MMMM/g, monthName).replace(/MMM/g, monthName.substring(0, 3)).replace(/MM/g, ('0' + month).slice(-2)).replace(/dd/g, ('0' + day).slice(-2)).replace(/yy/g, year).replace(/M(?!a)/g, month).replace(/d/g, day);
				},
				parse: function parse() {
					var str = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.value;

					var date = void 0;
					if (str.length === 10 && (this.format === 'dd-MM-yyyy' || this.format === 'dd/MM/yyyy')) {
						date = new Date(str.substring(6, 10), str.substring(3, 5) - 1, str.substring(0, 2));
					} else {
						date = new Date(str);
					}
					return isNaN(date.getFullYear()) ? new Date() : date;
				},
				getDayCount: function getDayCount(year, month) {
					var dict = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
					if (month === 1) {
						if (year % 400 === 0 || year % 4 === 0 && year % 100 !== 0) {
							return 29;
						}
					}
					return dict[month];
				},
				getDateRange: function getDateRange() {
					var _this2 = this;

					this.dateRange = [];
					this.decadeRange = [];
					var time = {
						year: this.currDate.getFullYear(),
						month: this.currDate.getMonth(),
						day: this.currDate.getDate()
					};
					var yearStr = time.year.toString();
					var firstYearOfDecade = yearStr.substring(0, yearStr.length - 1) + 0 - 1;
					for (var i = 0; i < 12; i++) {
						this.decadeRange.push({
							text: firstYearOfDecade + i
						});
					}

					var currMonthFirstDay = new Date(time.year, time.month, 1);
					var firstDayWeek = currMonthFirstDay.getDay() + 1;
					if (firstDayWeek === 0) {
						firstDayWeek = 7;
					}
					var dayCount = this.getDayCount(time.year, time.month);
					if (firstDayWeek > 1) {
						var preMonth = this.getYearMonth(time.year, time.month - 1);
						var prevMonthDayCount = this.getDayCount(preMonth.year, preMonth.month);
						for (var _i = 1; _i < firstDayWeek; _i++) {
							var dayText = prevMonthDayCount - firstDayWeek + _i + 1;
							this.dateRange.push({
								text: dayText,
								date: new Date(preMonth.year, preMonth.month, dayText),
								sclass: 'datepicker-item-gray'
							});
						}
					}

					var _loop = function _loop(_i2) {
						var date = new Date(time.year, time.month, _i2);
						var week = date.getDay();
						var sclass = '';
						_this2.disabledDaysOfWeek.forEach(function (el) {
							if (week === parseInt(el, 10)) sclass = 'datepicker-item-disable';
						});
						if (_i2 === time.day) {
							if (_this2.value) {
								var valueDate = _this2.parse(_this2.value);
								if (valueDate) {
									if (valueDate.getFullYear() === time.year && valueDate.getMonth() === time.month) {
										sclass = 'datepicker-dateRange-item-active';
									}
								}
							}
						}
						_this2.dateRange.push({
							text: _i2,
							date: date,
							sclass: sclass
						});
					};

					for (var _i2 = 1; _i2 <= dayCount; _i2++) {
						_loop(_i2);
					}

					if (this.dateRange.length < 42) {
						var nextMonthNeed = 42 - this.dateRange.length;
						var nextMonth = this.getYearMonth(time.year, time.month + 1);

						for (var _i3 = 1; _i3 <= nextMonthNeed; _i3++) {
							this.dateRange.push({
								text: _i3,
								date: new Date(nextMonth.year, nextMonth.month, _i3),
								sclass: 'datepicker-item-gray'
							});
						}
					}
				}
			}
		};
	}, function (module, exports) {

		module.exports = "<div class=\"datepicker\">\r\n    <input class=\"form-control datepicker-input\" :class=\"{'with-reset-button': clearButton}\" type=\"text\" :placeholder=\"placeholder\"\r\n        :style=\"{width:width}\"\r\n        @click=\"inputClick\"\r\n        v-model=\"value\"/>\r\n    <button v-if=\"clearButton && value\" type=\"button\" class=\"close\" @click=\"value = ''\">\r\n      <span>&times;</span>\r\n    </button>\r\n    <div class=\"datepicker-popup\" v-show=\"displayDayView\">\r\n      <div class=\"datepicker-inner\">\r\n        <div class=\"datepicker-body\">\r\n          <div class=\"datepicker-ctrl\">\r\n            <span class=\"datepicker-preBtn glyphicon glyphicon-chevron-left\" aria-hidden=\"true\" @click=\"preNextMonthClick(0)\"></span>\r\n            <span class=\"datepicker-nextBtn glyphicon glyphicon-chevron-right\" aria-hidden=\"true\" @click=\"preNextMonthClick(1)\"></span>\r\n            <p @click=\"switchMonthView\">{{stringifyDayHeader(currDate)}}</p>\r\n          </div>\r\n          <div class=\"datepicker-weekRange\">\r\n            <span v-for=\"w in text.daysOfWeek\">{{w}}</span>\r\n          </div>\r\n          <div class=\"datepicker-dateRange\">\r\n            <span v-for=\"d in dateRange\" :class=\"d.sclass\" @click=\"daySelect(d.date,this)\">{{d.text}}</span>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"datepicker-popup\" v-show=\"displayMonthView\">\r\n      <div class=\"datepicker-inner\">\r\n        <div class=\"datepicker-body\">\r\n          <div class=\"datepicker-ctrl\">\r\n            <span class=\"datepicker-preBtn glyphicon glyphicon-chevron-left\" aria-hidden=\"true\" @click=\"preNextYearClick(0)\"></span>\r\n            <span class=\"datepicker-nextBtn glyphicon glyphicon-chevron-right\" aria-hidden=\"true\" @click=\"preNextYearClick(1)\"></span>\r\n            <p @click=\"switchDecadeView\">{{stringifyYearHeader(currDate)}}</p>\r\n          </div>\r\n          <div class=\"datepicker-monthRange\">\r\n            <template v-for=\"m in text.months\">\r\n              <span   :class=\"{'datepicker-dateRange-item-active':\r\n                  (text.months[parse(value).getMonth()]  === m) &&\r\n                  currDate.getFullYear() === parse(value).getFullYear()}\"\r\n                  @click=\"monthSelect($index)\"\r\n                >{{m.substr(0,3)}}</span>\r\n            </template>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"datepicker-popup\" v-show=\"displayYearView\">\r\n      <div class=\"datepicker-inner\">\r\n        <div class=\"datepicker-body\">\r\n          <div class=\"datepicker-ctrl\">\r\n            <span class=\"datepicker-preBtn glyphicon glyphicon-chevron-left\" aria-hidden=\"true\" @click=\"preNextDecadeClick(0)\"></span>\r\n            <span class=\"datepicker-nextBtn glyphicon glyphicon-chevron-right\" aria-hidden=\"true\" @click=\"preNextDecadeClick(1)\"></span>\r\n            <p>{{stringifyDecadeHeader(currDate)}}</p>\r\n          </div>\r\n          <div class=\"datepicker-monthRange decadeRange\">\r\n            <template v-for=\"decade in decadeRange\">\r\n              <span :class=\"{'datepicker-dateRange-item-active':\r\n                  parse(this.value).getFullYear() === decade.text}\"\r\n                  @click.stop=\"yearSelect(decade.text)\"\r\n                >{{decade.text}}</span>\r\n            </template>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>";
	}, function (module, exports, __webpack_require__) {

		__webpack_require__(128);
		module.exports = __webpack_require__(130);

		if (module.exports.__esModule) module.exports = module.exports.default;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(131);
		if (false) {
			(function () {
				var hotAPI = require("vue-hot-reload-api");
				hotAPI.install(require("vue"));
				if (!hotAPI.compatible) return;
				var id = "-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Dropdown.vue";
				hotAPI.createRecord(id, module.exports);
				module.hot.accept(["-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Dropdown.vue", "-!vue-html-loader!./../node_modules/vue-loader/lib/template-rewriter.js?id=_v-628ea2dc&file=Dropdown.vue!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./Dropdown.vue"], function () {
					var newOptions = require("-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Dropdown.vue");
					if (newOptions && newOptions.__esModule) newOptions = newOptions.default;
					var newTemplate = require("-!vue-html-loader!./../node_modules/vue-loader/lib/template-rewriter.js?id=_v-628ea2dc&file=Dropdown.vue!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./Dropdown.vue");
					hotAPI.update(id, newOptions, newTemplate);
				});
			})();
		}
	}, function (module, exports, __webpack_require__) {
		var content = __webpack_require__(129);
		if (typeof content === 'string') content = [[module.id, content, '']];

		var update = __webpack_require__(101)(content, {});
		if (content.locals) module.exports = content.locals;

		if (false) {
			if (!content.locals) {
				module.hot.accept("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js?id=_v-628ea2dc&file=Dropdown.vue&scoped=true!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Dropdown.vue", function () {
					var newContent = require("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js?id=_v-628ea2dc&file=Dropdown.vue&scoped=true!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Dropdown.vue");
					if (typeof newContent === 'string') newContent = [[module.id, newContent, '']];
					update(newContent);
				});
			}

			module.hot.dispose(function () {
				update();
			});
		}
	}, function (module, exports, __webpack_require__) {

		exports = module.exports = __webpack_require__(100)();

		exports.push([module.id, ".secret[_v-628ea2dc] {\r\n  position: absolute;\r\n  clip: rect(0 0 0 0);\r\n  overflow: hidden;\r\n  margin: -1px;\r\n  height: 1px;\r\n  width: 1px;\r\n  padding: 0;\r\n  border: 0;\r\n}", ""]);
	}, function (module, exports, __webpack_require__) {

		'use strict';

		Object.defineProperty(exports, "__esModule", {
			value: true
		});

		var _utils = __webpack_require__(92);

		var _NodeList = __webpack_require__(27);

		var _NodeList2 = _interopRequireDefault(_NodeList);

		function _interopRequireDefault(obj) {
			return obj && obj.__esModule ? obj : { default: obj };
		}

		exports.default = {
			props: {
				show: {
					twoWay: true,
					type: Boolean,
					coerce: _utils.coerce.boolean,
					default: false
				},
				'class': null,
				disabled: {
					type: Boolean,
					coerce: _utils.coerce.boolean,
					default: false
				},
				text: {
					type: String,
					default: null
				},
				type: {
					type: String,
					default: 'default'
				}
			},
			computed: {
				classes: function classes() {
					return [{ open: this.show, disabled: this.disabled }, this.class, this.isLi ? 'dropdown' : this.inInput ? 'input-group-btn' : 'btn-group'];
				},
				inInput: function inInput() {
					return this.$parent._input;
				},
				isLi: function isLi() {
					return this.$parent._navbar || this.$parent.menu || this.$parent._tabset;
				},
				menu: function menu() {
					return !this.$parent || this.$parent.navbar;
				},
				submenu: function submenu() {
					return this.$parent && (this.$parent.menu || this.$parent.submenu);
				},
				slots: function slots() {
					return this._slotContents;
				}
			},
			methods: {
				blur: function blur() {
					var _this = this;

					this.unblur();
					this._hide = setTimeout(function () {
						_this._hide = null;
						_this.show = false;
					}, 100);
				},
				unblur: function unblur() {
					if (this._hide) {
						clearTimeout(this._hide);
						this._hide = null;
					}
				}
			},
			ready: function ready() {
				var _this2 = this;

				var $el = (0, _NodeList2.default)(this.$els.dropdown);
				$el.onBlur(function (e) {
					_this2.show = false;
				});
				$el.findChildren('a,button.dropdown-toggle').on('click', function (e) {
					e.preventDefault();
					if (_this2.disabled) {
						return false;
					}
					_this2.show = !_this2.show;
					return false;
				});
				$el.findChildren('ul').on('click', 'li>a', function (e) {
					_this2.show = false;
				});
			},
			beforeDestroy: function beforeDestroy() {
				var $el = (0, _NodeList2.default)(this.$els.dropdown);
				$el.offBlur();
				$el.findChildren('a,button').off();
				$el.findChildren('ul').off();
			}
		};
	}, function (module, exports) {

		module.exports = "<li v-if=\"isLi\" v-el:dropdown=\"\" :class=\"classes\" _v-628ea2dc=\"\">\n    <slot name=\"button\" _v-628ea2dc=\"\">\n      <a class=\"dropdown-toggle\" role=\"button\" :class=\"{disabled: disabled}\" @keyup.esc=\"show = false\" _v-628ea2dc=\"\">\n        {{ text }}\n        <span class=\"caret\" _v-628ea2dc=\"\"></span>\n      </a>\n    </slot>\n    <slot name=\"dropdown-menu\" _v-628ea2dc=\"\">\n      <ul v-else=\"\" class=\"dropdown-menu\" _v-628ea2dc=\"\">\n        <slot _v-628ea2dc=\"\"></slot>\n      </ul>\n    </slot>\n  </li>\n  <div v-else=\"\" v-el:dropdown=\"\" :class=\"classes\" _v-628ea2dc=\"\">\n    <slot name=\"before\" _v-628ea2dc=\"\"></slot>\n    <slot name=\"button\" _v-628ea2dc=\"\">\n      <button type=\"button\" class=\"btn btn-{{type}} dropdown-toggle\" @keyup.esc=\"show = false\" :disabled=\"disabled\" _v-628ea2dc=\"\">\n        {{ text }}\n        <span class=\"caret\" _v-628ea2dc=\"\"></span>\n      </button>\n    </slot>\n    <slot name=\"dropdown-menu\" _v-628ea2dc=\"\">\n      <ul class=\"dropdown-menu\" _v-628ea2dc=\"\">\n        <slot _v-628ea2dc=\"\"></slot>\n      </ul>\n    </slot>\n  </div>";
	}, function (module, exports, __webpack_require__) {

		module.exports = __webpack_require__(133);

		if (module.exports.__esModule) module.exports = module.exports.default;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(134);
		if (false) {
			(function () {
				var hotAPI = require("vue-hot-reload-api");
				hotAPI.install(require("vue"));
				if (!hotAPI.compatible) return;
				var id = "-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./FormGroup.vue";
				hotAPI.createRecord(id, module.exports);
				module.hot.accept(["-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./FormGroup.vue", "-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./FormGroup.vue"], function () {
					var newOptions = require("-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./FormGroup.vue");
					if (newOptions && newOptions.__esModule) newOptions = newOptions.default;
					var newTemplate = require("-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./FormGroup.vue");
					hotAPI.update(id, newOptions, newTemplate);
				});
			})();
		}
	}, function (module, exports, __webpack_require__) {

		'use strict';

		Object.defineProperty(exports, "__esModule", {
			value: true
		});

		var _utils = __webpack_require__(92);

		var _NodeList = __webpack_require__(27);

		var _NodeList2 = _interopRequireDefault(_NodeList);

		function _interopRequireDefault(obj) {
			return obj && obj.__esModule ? obj : { default: obj };
		}

		exports.default = {
			props: {
				valid: {
					twoWay: true,
					default: null
				},
				enterSubmit: {
					type: Boolean,
					coerce: _utils.coerce.boolean,
					default: false
				},
				icon: {
					type: Boolean,
					coerce: _utils.coerce.boolean,
					default: false
				},
				lang: {
					type: String,
					default: navigator.language
				}
			},
			data: function data() {
				return {
					children: [],
					timeout: null
				};
			},

			watch: {
				valid: function valid(val, old) {
					if (val === old) {
						return;
					}
					this._parent && this._parent.validate();
				}
			},
			methods: {
				focus: function focus() {
					this.$els.input.focus();
				},
				validate: function validate() {
					var valid = true;
					this.children.some(function (el) {
						var v = el.validate ? el.validate() : el.valid !== undefined ? el.valid : el.required && !~['', null, undefined].indexOf(el.value);
						if (!v) valid = false;
						return !valid;
					});
					this.valid = valid;
					return valid === true;
				}
			},
			created: function created() {
				this._formGroup = true;
				var parent = this.$parent;
				while (parent && !parent._formGroup) {
					parent = parent.$parent;
				}
				if (parent && parent._formGroup) {
					parent.children.push(this);
					this._parent = parent;
				}
			},
			ready: function ready() {
				this.validate();
			},
			beforeDestroy: function beforeDestroy() {
				if (this._parent) this._parent.children.$remove(this);
			}
		};
	}, function (module, exports) {

		module.exports = "<slot></slot>";
	}, function (module, exports, __webpack_require__) {

		__webpack_require__(136);
		module.exports = __webpack_require__(138);

		if (module.exports.__esModule) module.exports = module.exports.default;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(139);
		if (false) {
			(function () {
				var hotAPI = require("vue-hot-reload-api");
				hotAPI.install(require("vue"));
				if (!hotAPI.compatible) return;
				var id = "-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Input.vue";
				hotAPI.createRecord(id, module.exports);
				module.hot.accept(["-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Input.vue", "-!vue-html-loader!./../node_modules/vue-loader/lib/template-rewriter.js?id=_v-461124e2&file=Input.vue!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./Input.vue"], function () {
					var newOptions = require("-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Input.vue");
					if (newOptions && newOptions.__esModule) newOptions = newOptions.default;
					var newTemplate = require("-!vue-html-loader!./../node_modules/vue-loader/lib/template-rewriter.js?id=_v-461124e2&file=Input.vue!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./Input.vue");
					hotAPI.update(id, newOptions, newTemplate);
				});
			})();
		}
	}, function (module, exports, __webpack_require__) {
		var content = __webpack_require__(137);
		if (typeof content === 'string') content = [[module.id, content, '']];

		var update = __webpack_require__(101)(content, {});
		if (content.locals) module.exports = content.locals;

		if (false) {
			if (!content.locals) {
				module.hot.accept("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js?id=_v-461124e2&file=Input.vue&scoped=true!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Input.vue", function () {
					var newContent = require("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js?id=_v-461124e2&file=Input.vue&scoped=true!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Input.vue");
					if (typeof newContent === 'string') newContent = [[module.id, newContent, '']];
					update(newContent);
				});
			}

			module.hot.dispose(function () {
				update();
			});
		}
	}, function (module, exports, __webpack_require__) {

		exports = module.exports = __webpack_require__(100)();

		exports.push([module.id, ".form-group[_v-461124e2] {\r\n  position: relative;\r\n}\r\nlabel~.close[_v-461124e2] {\r\n  top: 25px;\r\n}\r\n.input-group>.icon[_v-461124e2] {\r\n  position: relative;\r\n  display: table-cell;\r\n  width:0;\r\n  z-index: 3;\r\n}\r\n.close[_v-461124e2] {\r\n  position: absolute;\r\n  top: 0;\r\n  right: 0;\r\n  z-index: 2;\r\n  display: block;\r\n  width: 34px;\r\n  height: 34px;\r\n  line-height: 34px;\r\n  text-align: center;\r\n}\r\n.has-feedback .close[_v-461124e2] {\r\n  right: 20px;\r\n}", ""]);
	}, function (module, exports, __webpack_require__) {

		'use strict';

		Object.defineProperty(exports, "__esModule", {
			value: true
		});

		var _utils = __webpack_require__(92);

		var _NodeList = __webpack_require__(27);

		var _NodeList2 = _interopRequireDefault(_NodeList);

		function _interopRequireDefault(obj) {
			return obj && obj.__esModule ? obj : { default: obj };
		}

		exports.default = {
			props: {
				value: {
					twoWay: true,
					default: null
				},
				match: {
					type: String,
					default: null
				},
				clearButton: {
					type: Boolean,
					coerce: _utils.coerce.boolean,
					default: false
				},
				disabled: {
					type: Boolean,
					coerce: _utils.coerce.boolean,
					default: false
				},
				enterSubmit: {
					type: Boolean,
					coerce: _utils.coerce.boolean,
					default: false
				},
				error: {
					type: String,
					default: null
				},
				help: {
					type: String,
					default: null
				},
				hideHelp: {
					type: Boolean,
					coerce: _utils.coerce.boolean,
					default: true
				},
				icon: {
					type: Boolean,
					coerce: _utils.coerce.boolean,
					default: false
				},
				label: {
					type: String,
					default: null
				},
				lang: {
					type: String,
					default: navigator.language
				},
				mask: null,
				maskDelay: {
					type: Number,
					coerce: _utils.coerce.number,
					default: 100
				},
				max: {
					type: String,
					coerce: _utils.coerce.string,
					default: null
				},
				maxlength: {
					type: Number,
					coerce: _utils.coerce.number,
					default: null
				},
				min: {
					type: String,
					coerce: _utils.coerce.string,
					default: null
				},
				minlength: {
					type: Number,
					coerce: _utils.coerce.number,
					default: 0
				},
				name: {
					type: String,
					default: null
				},
				pattern: {
					coerce: _utils.coerce.pattern,
					default: null
				},
				placeholder: {
					type: String,
					default: null
				},
				readonly: {
					type: Boolean,
					coerce: _utils.coerce.boolean,
					default: false
				},
				required: {
					type: Boolean,
					coerce: _utils.coerce.boolean,
					default: false
				},
				rows: {
					type: Number,
					coerce: _utils.coerce.number,
					default: 3
				},
				step: {
					type: Number,
					coerce: _utils.coerce.number,
					default: null
				},
				type: {
					type: String,
					default: 'text'
				},
				validationDelay: {
					type: Number,
					coerce: _utils.coerce.number,
					default: 250
				}
			},
			data: function data() {
				return {
					valid: null,
					timeout: null
				};
			},

			computed: {
				canValidate: function canValidate() {
					return !this.disabled && !this.readonly && (this.required || this.pattern || this.nativeValidate || this.match !== null);
				},
				errorText: function errorText() {
					var value = this.value;
					var error = [this.error];
					if (!value && this.required) error.push('(' + this.text.required.toLowerCase() + ')');
					if (value && value.length < this.minlength) error.push('(' + this.text.minLength.toLowerCase() + ': ' + this.minlength + ')');
					return error.join(' ');
				},
				input: function input() {
					return this.$els.input;
				},
				nativeValidate: function nativeValidate() {
					return (this.input || {}).checkValidity && (~['url', 'email'].indexOf(this.type.toLowerCase()) || this.min || this.max);
				},
				showClear: function showClear() {
					return (/\bEdge\//.test(window.navigator.userAgent) ? false : this.clearButton
					);
				},
				showError: function showError() {
					return this.error && this.valid === false;
				},
				showHelp: function showHelp() {
					return this.help && (!this.showError || !this.hideHelp);
				},
				slots: function slots() {
					return this._slotContents || {};
				},
				text: function text() {
					return (0, _utils.translations)(this.lang);
				},
				title: function title() {
					return this.errorText || this.help || '';
				}
			},
			watch: {
				match: function match(val) {
					this.eval();
				},
				valid: function valid(val, old) {
					if (val !== old) {
						this._parent && this._parent.validate();
					}
				},
				value: function value(val, old) {
					var _this = this;

					if (val !== old) {
						if (this.mask instanceof Function) {
							val = this.mask(val || '');
							if (this.value !== val) {
								if (this._timeout.mask) clearTimeout(this._timeout.mask);
								this._timeout.mask = setTimeout(function () {
									_this.value = val;
									_this.$els.input.value = val;
								}, this.maskDelay);
							}
						}
						this.eval();
					}
				}
			},
			methods: {
				attr: function attr(value) {
					return ~['', null, undefined].indexOf(value) || value instanceof Function ? undefined : value;
				},
				focus: function focus() {
					this.input.focus();
				},
				eval: function _eval() {
					var _this2 = this;

					if (this._timeout.eval) clearTimeout(this._timeout.eval);
					if (!this.canValidate) {
						this.valid = true;
					} else {
						this._timeout.eval = setTimeout(function () {
							_this2.valid = _this2.validate();
							_this2._timeout.eval = null;
						}, this.validationDelay);
					}
				},
				onblur: function onblur(e) {
					if (this.canValidate) {
						this.valid = this.validate();
					}
					this.$emit('blur', e);
				},
				onfocus: function onfocus(e) {
					this.$emit('focus', e);
				},
				submit: function submit() {
					if (this.$parent._formGroup) {
						return this.$parent.validate();
					}
					if (this.input.form) {
						var invalids = (0, _NodeList2.default)('.form-group.validate:not(.has-success)', this.input.form);
						if (invalids.length) {
							invalids.find('input,textarea,select')[0].focus();
						} else {
							this.input.form.submit();
						}
					}
				},
				validate: function validate() {
					if (!this.canValidate) {
						return true;
					}
					var value = (this.value || '').trim();
					if (!value) {
						return !this.required;
					}
					if (this.match !== null) {
						return this.match === value;
					}
					if (value.length < this.minlength) {
						return false;
					}
					if (this.nativeValidate && !this.input.checkValidity()) {
						return false;
					}
					if (this.pattern) {
						return this.pattern instanceof Function ? this.pattern(this.value) : this.pattern.test(this.value);
					}
					return true;
				}
			},
			created: function created() {
				this._input = true;
				this._timeout = {};
				var parent = this.$parent;
				while (parent && !parent._formGroup) {
					parent = parent.$parent;
				}
				if (parent && parent._formGroup) {
					this._parent = parent;
				}
			},
			ready: function ready() {
				var _this3 = this;

				this._parent && this._parent.children.push(this);
				(0, _NodeList2.default)(this.input).on('focus', function (e) {
					return _this3.$emit('focus', e);
				}).on('blur', function (e) {
					if (_this3.canValidate) {
						_this3.valid = _this3.validate();
					}
					_this3.$emit('blur', e);
				});
			},
			beforeDestroy: function beforeDestroy() {
				this._parent && this._parent.children.$remove(this);
				(0, _NodeList2.default)(this.input).off();
			}
		};
	}, function (module, exports) {

		module.exports = "<div class=\"form-group\" :class=\"{validate:canValidate,'has-feedback':icon,'has-error':canValidate&amp;&amp;valid===false,'has-success':canValidate&amp;&amp;valid}\" _v-461124e2=\"\">\n    <slot name=\"label\" _v-461124e2=\"\"><label v-if=\"label\" class=\"control-label\" @click=\"focus\" _v-461124e2=\"\">{{label}}</label></slot>\n    <div v-if=\"slots.before||slots.after\" class=\"input-group\" _v-461124e2=\"\">\n      <slot name=\"before\" _v-461124e2=\"\"></slot>\n      <textarea v-if=\"type=='textarea'\" class=\"form-control\" v-el:input=\"\" v-model=\"value\" :cols=\"cols\" :rows=\"rows\" :name=\"name\" :title=\"attr(title)\" :readonly=\"readonly\" :required=\"required\" :disabled=\"disabled\" :maxlength=\"maxlength\" :placeholder=\"placeholder\" @blur=\"onblur\" @focus=\"onfocus\" _v-461124e2=\"\"></textarea>\n      <input v-else=\"\" class=\"form-control\" v-el:input=\"\" v-model=\"value\" :name=\"name\" :max=\"attr(max)\" :min=\"attr(min)\" :step=\"step\" :type=\"type\" :title=\"attr(title)\" :readonly=\"readonly\" :required=\"required\" :disabled=\"disabled\" :maxlength=\"maxlength\" :placeholder=\"placeholder\" @keyup.enter=\"enterSubmit&amp;&amp;submit()\" @blur=\"onblur\" @focus=\"onfocus\" _v-461124e2=\"\">\n      <div v-if=\"showClear &amp;&amp; value\" :class=\"{icon:icon}\" _v-461124e2=\"\">\n        <span class=\"close\" @click=\"value = ''\" _v-461124e2=\"\">×</span>\n      </div>\n      <div v-if=\"icon\" class=\"icon\" _v-461124e2=\"\">\n        <span v-if=\"icon&amp;&amp;valid!==null\" :class=\"['form-control-feedback glyphicon','glyphicon-'+(valid?'ok':'remove')]\" aria-hidden=\"true\" _v-461124e2=\"\"></span>\n      </div>\n      <slot name=\"after\" _v-461124e2=\"\"></slot>\n    </div>\n    <template v-else=\"\" _v-461124e2=\"\">\n      <textarea v-if=\"type=='textarea'\" class=\"form-control\" v-el:input=\"\" v-model=\"value\" :cols=\"cols\" :rows=\"rows\" :name=\"name\" :title=\"attr(title)\" :readonly=\"readonly\" :required=\"required\" :disabled=\"disabled\" :maxlength=\"maxlength\" :placeholder=\"placeholder\" @blur=\"onblur\" @focus=\"onfocus\" _v-461124e2=\"\"></textarea>\n      <input v-else=\"\" class=\"form-control\" v-el:input=\"\" v-model=\"value\" :name=\"name\" :max=\"attr(max)\" :min=\"attr(min)\" :step=\"step\" :type=\"type\" :title=\"attr(title)\" :readonly=\"readonly\" :required=\"required\" :disabled=\"disabled\" :maxlength=\"maxlength\" :placeholder=\"placeholder\" @keyup.enter=\"enterSubmit&amp;&amp;submit()\" @blur=\"onblur\" @focus=\"onfocus\" _v-461124e2=\"\">\n      <span v-if=\"showClear &amp;&amp; value\" class=\"close\" @click=\"value = ''\" _v-461124e2=\"\">×</span>\n      <span v-if=\"icon&amp;&amp;valid!==null\" :class=\"['form-control-feedback glyphicon','glyphicon-'+(valid?'ok':'remove')]\" aria-hidden=\"true\" _v-461124e2=\"\"></span>\n    </template>\n    <div v-if=\"showHelp\" class=\"help-block\" @click=\"focus\" _v-461124e2=\"\">{{help}}</div>\n    <div v-if=\"showError\" class=\"help-block with-errors\" @click=\"focus\" _v-461124e2=\"\">{{errorText}}</div>\n  </div>";
	}, function (module, exports, __webpack_require__) {

		__webpack_require__(141);
		module.exports = __webpack_require__(143);

		if (module.exports.__esModule) module.exports = module.exports.default;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(148);
		if (false) {
			(function () {
				var hotAPI = require("vue-hot-reload-api");
				hotAPI.install(require("vue"));
				if (!hotAPI.compatible) return;
				var id = "-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Modal.vue";
				hotAPI.createRecord(id, module.exports);
				module.hot.accept(["-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Modal.vue", "-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./Modal.vue"], function () {
					var newOptions = require("-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Modal.vue");
					if (newOptions && newOptions.__esModule) newOptions = newOptions.default;
					var newTemplate = require("-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./Modal.vue");
					hotAPI.update(id, newOptions, newTemplate);
				});
			})();
		}
	}, function (module, exports, __webpack_require__) {
		var content = __webpack_require__(142);
		if (typeof content === 'string') content = [[module.id, content, '']];

		var update = __webpack_require__(101)(content, {});
		if (content.locals) module.exports = content.locals;

		if (false) {
			if (!content.locals) {
				module.hot.accept("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js?id=_v-0ee4321c&file=Modal.vue!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Modal.vue", function () {
					var newContent = require("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js?id=_v-0ee4321c&file=Modal.vue!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Modal.vue");
					if (typeof newContent === 'string') newContent = [[module.id, newContent, '']];
					update(newContent);
				});
			}

			module.hot.dispose(function () {
				update();
			});
		}
	}, function (module, exports, __webpack_require__) {

		exports = module.exports = __webpack_require__(100)();

		exports.push([module.id, ".modal {\r\n  -webkit-transition: all 0.3s ease;\r\n  transition: all 0.3s ease;\r\n}\r\n.modal.in {\r\n  background-color: rgba(0,0,0,0.5);\r\n}\r\n.modal.zoom .modal-dialog {\r\n  -webkit-transform: scale(0.1);\r\n  transform: scale(0.1);\r\n  top: 300px;\r\n  opacity: 0;\r\n  -webkit-transition: all 0.3s;\r\n  transition: all 0.3s;\r\n}\r\n.modal.zoom.in .modal-dialog {\r\n  -webkit-transform: scale(1);\r\n  transform: scale(1);\r\n  -webkit-transform: translate3d(0, -300px, 0);\r\n  transform: translate3d(0, -300px, 0);\r\n  opacity: 1;\r\n}", ""]);
	}, function (module, exports, __webpack_require__) {

		'use strict';

		Object.defineProperty(exports, "__esModule", {
			value: true
		});

		var _isInteger = __webpack_require__(144);

		var _isInteger2 = _interopRequireDefault(_isInteger);

		var _utils = __webpack_require__(92);

		var _NodeList = __webpack_require__(27);

		var _NodeList2 = _interopRequireDefault(_NodeList);

		function _interopRequireDefault(obj) {
			return obj && obj.__esModule ? obj : { default: obj };
		}

		exports.default = {
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
					coerce: _utils.coerce.boolean,
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
					coerce: _utils.coerce.boolean,
					default: true
				},
				large: {
					type: Boolean,
					coerce: _utils.coerce.boolean,
					default: false
				},
				small: {
					type: Boolean,
					coerce: _utils.coerce.boolean,
					default: false
				}
			},
			computed: {
				optionalWidth: function optionalWidth() {
					if (this.width === null) {
						return null;
					} else if ((0, _isInteger2.default)(this.width)) {
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
					var scrollBarWidth = (0, _utils.getScrollBarWidth)();
					if (val) {
						(0, _NodeList2.default)(el).find('.modal-content').focus();
						el.style.display = 'block';
						setTimeout(function () {
							return (0, _NodeList2.default)(el).addClass('in');
						}, 0);
						(0, _NodeList2.default)(body).addClass('modal-open');
						if (scrollBarWidth !== 0) {
							body.style.paddingRight = scrollBarWidth + 'px';
						}
						if (this.backdrop) {
							(0, _NodeList2.default)(el).on('click', function (e) {
								if (e.target === el) _this.show = false;
							});
						}
					} else {
						body.style.paddingRight = null;
						(0, _NodeList2.default)(body).removeClass('modal-open');
						(0, _NodeList2.default)(el).removeClass('in').on('transitionend', function () {
							(0, _NodeList2.default)(el).off('click transitionend');
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
		};
	}, function (module, exports, __webpack_require__) {

		module.exports = { "default": __webpack_require__(145), __esModule: true };
	}, function (module, exports, __webpack_require__) {

		__webpack_require__(146);
		module.exports = __webpack_require__(33).Number.isInteger;
	}, function (module, exports, __webpack_require__) {
		var $export = __webpack_require__(31);

		$export($export.S, 'Number', { isInteger: __webpack_require__(147) });
	}, function (module, exports, __webpack_require__) {
		var isObject = __webpack_require__(39),
		    floor = Math.floor;
		module.exports = function isInteger(it) {
			return !isObject(it) && isFinite(it) && floor(it) === it;
		};
	}, function (module, exports) {

		module.exports = "<div role=\"dialog\"\r\n    v-bind:class=\"{\r\n    'modal':true,\r\n    'fade':effect === 'fade',\r\n    'zoom':effect === 'zoom'\r\n    }\"\r\n    >\r\n    <div v-bind:class=\"{'modal-dialog':true,'modal-lg':large,'modal-sm':small}\" role=\"document\"\r\n      v-bind:style=\"{width: optionalWidth}\">\r\n      <div class=\"modal-content\">\r\n        <slot name=\"modal-header\">\r\n          <div class=\"modal-header\">\r\n            <button type=\"button\" class=\"close\" @click=\"close\"><span>&times;</span></button>\r\n            <h4 class=\"modal-title\">\r\n              <slot name=\"title\">\r\n                {{title}}\r\n              </slot>\r\n            </h4>\r\n          </div>\r\n        </slot>\r\n        <slot name=\"modal-body\">\r\n          <div class=\"modal-body\"></div>\r\n        </slot>\r\n        <slot name=\"modal-footer\">\r\n          <div class=\"modal-footer\">\r\n            <button type=\"button\" class=\"btn btn-default\" @click=\"close\">{{ cancelText }}</button>\r\n            <button type=\"button\" class=\"btn btn-primary\" @click=\"callback\">{{ okText }}</button>\r\n          </div>\r\n        </slot>\r\n      </div>\r\n    </div>\r\n  </div>";
	}, function (module, exports, __webpack_require__) {

		module.exports = __webpack_require__(150);

		if (module.exports.__esModule) module.exports = module.exports.default;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(151);
		if (false) {
			(function () {
				var hotAPI = require("vue-hot-reload-api");
				hotAPI.install(require("vue"));
				if (!hotAPI.compatible) return;
				var id = "-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Navbar.vue";
				hotAPI.createRecord(id, module.exports);
				module.hot.accept(["-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Navbar.vue", "-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./Navbar.vue"], function () {
					var newOptions = require("-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Navbar.vue");
					if (newOptions && newOptions.__esModule) newOptions = newOptions.default;
					var newTemplate = require("-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./Navbar.vue");
					hotAPI.update(id, newOptions, newTemplate);
				});
			})();
		}
	}, function (module, exports, __webpack_require__) {

		'use strict';

		Object.defineProperty(exports, "__esModule", {
			value: true
		});

		var _NodeList = __webpack_require__(27);

		var _NodeList2 = _interopRequireDefault(_NodeList);

		function _interopRequireDefault(obj) {
			return obj && obj.__esModule ? obj : { default: obj };
		}

		exports.default = {
			props: {
				type: {
					type: String,
					default: 'default'
				},
				placement: {
					type: String,
					default: ''
				}
			},
			data: function data() {
				return {
					id: 'bs-example-navbar-collapse-1',
					collapsed: true,
					styles: {}
				};
			},

			computed: {
				slots: function slots() {
					return this._slotContents;
				}
			},
			methods: {
				toggleCollapse: function toggleCollapse(e) {
					e && e.preventDefault();
					this.collapsed = !this.collapsed;
				}
			},
			created: function created() {
				this._navbar = true;
			},
			ready: function ready() {
				var _this = this;

				var $dropdown = (0, _NodeList2.default)('.dropdown>[data-toggle="dropdown"]', this.$el).parent();
				$dropdown.on('click', '.dropdown-toggle', function (e) {
					e.preventDefault();
					$dropdown.each(function (content) {
						if (content.contains(e.target)) content.classList.toggle('open');
					});
				}).on('click', '.dropdown-menu>li>a', function (e) {
					$dropdown.each(function (content) {
						if (content.contains(e.target)) content.classList.remove('open');
					});
				}).onBlur(function (e) {
					$dropdown.each(function (content) {
						if (!content.contains(e.target)) content.classList.remove('open');
					});
				});
				(0, _NodeList2.default)(this.$el).on('click touchstart', 'li:not(.dropdown)>a', function (e) {
					setTimeout(function () {
						_this.collapsed = true;
					}, 200);
				}).onBlur(function (e) {
					if (!_this.$el.contains(e.target)) {
						_this.collapsed = true;
					}
				});
				var height = this.$el.offsetHeight;
				if (this.placement === 'top') {
					document.body.style.paddingTop = height + 'px';
				}
				if (this.placement === 'bottom') {
					document.body.style.paddingBottom = height + 'px';
				}
				if (this.slots.collapse) (0, _NodeList2.default)('[data-toggle="collapse"]', this.$el).on('click', function (e) {
					return _this.toggleCollapse(e);
				});
			},
			beforeDestroy: function beforeDestroy() {
				(0, _NodeList2.default)('.dropdown', this.$el).off('click').offBlur();
				if (this.slots.collapse) (0, _NodeList2.default)('[data-toggle="collapse"]', this.$el).off('click');
			}
		};
	}, function (module, exports) {

		module.exports = "<nav v-el:navbar :class=\"['navbar',{\r\n    'navbar-inverse':(type == 'inverse'),\r\n    'navbar-default':(type == 'default'),\r\n    'navbar-fixed-top':(placement === 'top'),\r\n    'navbar-fixed-bottom':(placement === 'bottom'),\r\n    'navbar-static-top':(placement === 'static')\r\n  }]\">\r\n    <div class=\"container-fluid\">\r\n      <div class=\"navbar-header\">\r\n        <button v-if=\"!slots.collapse\" type=\"button\" class=\"navbar-toggle collapsed\"  aria-expanded=\"false\" @click=\"toggleCollapse\">\r\n          <span class=\"sr-only\">Toggle navigation</span>\r\n          <span class=\"icon-bar\"></span>\r\n          <span class=\"icon-bar\"></span>\r\n          <span class=\"icon-bar\"></span>\r\n        </button>\r\n        <slot name=\"collapse\"></slot>\r\n        <slot name=\"brand\"></slot>\r\n      </div>\r\n      <div :class=\"['navbar-collapse',{collapse:collapsed}]\">\r\n        <ul class=\"nav navbar-nav\">\r\n          <slot></slot>\r\n        </ul>\r\n        <ul v-if=\"slots.right\" class=\"nav navbar-nav navbar-right\">\r\n          <slot name=\"right\"></slot>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n  </nav>";
	}, function (module, exports, __webpack_require__) {

		module.exports = __webpack_require__(153);

		if (module.exports.__esModule) module.exports = module.exports.default;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(154);
		if (false) {
			(function () {
				var hotAPI = require("vue-hot-reload-api");
				hotAPI.install(require("vue"));
				if (!hotAPI.compatible) return;
				var id = "-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Option.vue";
				hotAPI.createRecord(id, module.exports);
				module.hot.accept(["-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Option.vue", "-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./Option.vue"], function () {
					var newOptions = require("-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Option.vue");
					if (newOptions && newOptions.__esModule) newOptions = newOptions.default;
					var newTemplate = require("-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./Option.vue");
					hotAPI.update(id, newOptions, newTemplate);
				});
			})();
		}
	}, function (module, exports) {

		'use strict';

		Object.defineProperty(exports, "__esModule", {
			value: true
		});

		exports.default = {
			props: { value: null },
			data: function data() {
				return { loading: true };
			},
			ready: function ready() {
				if (this.$parent._select) {
					if (!this.$parent.options) {
						this.$parent.options = [];
					}
					var el = {};
					el[this.$parent.optionsLabel] = this.$els.v.innerHTML;
					el[this.$parent.optionsValue] = this.value;
					this.$parent.options.push(el);
					this.loading = false;
				} else {
					console.warn('options only work inside a select component');
				}
			}
		};
	}, function (module, exports) {

		module.exports = "<li v-el:v v-if=\"loading\"><slot></slot></li>";
	}, function (module, exports, __webpack_require__) {

		__webpack_require__(156);
		module.exports = __webpack_require__(158);

		if (module.exports.__esModule) module.exports = module.exports.default;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(159);
		if (false) {
			(function () {
				var hotAPI = require("vue-hot-reload-api");
				hotAPI.install(require("vue"));
				if (!hotAPI.compatible) return;
				var id = "-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Panel.vue";
				hotAPI.createRecord(id, module.exports);
				module.hot.accept(["-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Panel.vue", "-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./Panel.vue"], function () {
					var newOptions = require("-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Panel.vue");
					if (newOptions && newOptions.__esModule) newOptions = newOptions.default;
					var newTemplate = require("-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./Panel.vue");
					hotAPI.update(id, newOptions, newTemplate);
				});
			})();
		}
	}, function (module, exports, __webpack_require__) {
		var content = __webpack_require__(157);
		if (typeof content === 'string') content = [[module.id, content, '']];

		var update = __webpack_require__(101)(content, {});
		if (content.locals) module.exports = content.locals;

		if (false) {
			if (!content.locals) {
				module.hot.accept("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js?id=_v-1edc72c9&file=Panel.vue!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Panel.vue", function () {
					var newContent = require("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js?id=_v-1edc72c9&file=Panel.vue!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Panel.vue");
					if (typeof newContent === 'string') newContent = [[module.id, newContent, '']];
					update(newContent);
				});
			}

			module.hot.dispose(function () {
				update();
			});
		}
	}, function (module, exports, __webpack_require__) {

		exports = module.exports = __webpack_require__(100)();

		exports.push([module.id, ".accordion-toggle {\r\n  cursor: pointer;\r\n}\r\n.collapse-transition {\r\n  -webkit-transition: max-height .5s ease;\r\n  transition: max-height .5s ease;\r\n}\r\n.collapse-enter, .collapse-leave {\r\n  max-height: 0!important;\r\n}", ""]);
	}, function (module, exports, __webpack_require__) {

		'use strict';

		Object.defineProperty(exports, "__esModule", {
			value: true
		});

		var _utils = __webpack_require__(92);

		exports.default = {
			props: {
				header: {
					type: String
				},
				isOpen: {
					type: Boolean,
					coerce: _utils.coerce.boolean,
					default: null
				},
				type: {
					type: String,
					default: null
				}
			},
			computed: {
				inAccordion: function inAccordion() {
					return this.$parent && this.$parent._isAccordion;
				},
				panelType: function panelType() {
					return 'panel panel-' + (this.type || this.$parent && this.$parent.type || 'default');
				}
			},
			methods: {
				toggle: function toggle() {
					this.isOpen = !this.isOpen;
					this.$dispatch('isOpenEvent', this);
				}
			},
			transitions: {
				collapse: {
					afterEnter: function afterEnter(el) {
						el.style.maxHeight = '';
						el.style.overflow = '';
					},
					beforeLeave: function beforeLeave(el) {
						el.style.maxHeight = el.offsetHeight + 'px';
						el.style.overflow = 'hidden';

						return el.offsetHeight;
					}
				}
			},
			created: function created() {
				if (this.isOpen === null) {
					this.isOpen = !this.inAccordion;
				}
			}
		};
	}, function (module, exports) {

		module.exports = "<div :class=\"panelType\">\r\n    <div :class=\"['panel-heading',{'accordion-toggle':inAccordion}]\" @click.prevent=\"inAccordion&&toggle()\">\r\n      <slot name=\"header\">\r\n        <h4 class=\"panel-title\">{{ header }}</h4>\r\n      </slot>\r\n    </div>\r\n    <div class=\"panel-collapse\"\r\n      v-el:panel\r\n      v-show=\"isOpen\"\r\n      transition=\"collapse\"\r\n    >\r\n      <div class=\"panel-body\">\r\n        <slot></slot>\r\n      </div>\r\n    </div>\r\n  </div>";
	}, function (module, exports, __webpack_require__) {

		__webpack_require__(161);
		module.exports = __webpack_require__(163);

		if (module.exports.__esModule) module.exports = module.exports.default;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(165);
		if (false) {
			(function () {
				var hotAPI = require("vue-hot-reload-api");
				hotAPI.install(require("vue"));
				if (!hotAPI.compatible) return;
				var id = "-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Popover.vue";
				hotAPI.createRecord(id, module.exports);
				module.hot.accept(["-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Popover.vue", "-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./Popover.vue"], function () {
					var newOptions = require("-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Popover.vue");
					if (newOptions && newOptions.__esModule) newOptions = newOptions.default;
					var newTemplate = require("-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./Popover.vue");
					hotAPI.update(id, newOptions, newTemplate);
				});
			})();
		}
	}, function (module, exports, __webpack_require__) {
		var content = __webpack_require__(162);
		if (typeof content === 'string') content = [[module.id, content, '']];

		var update = __webpack_require__(101)(content, {});
		if (content.locals) module.exports = content.locals;

		if (false) {
			if (!content.locals) {
				module.hot.accept("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js?id=_v-493790ac&file=Popover.vue!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Popover.vue", function () {
					var newContent = require("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js?id=_v-493790ac&file=Popover.vue!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Popover.vue");
					if (typeof newContent === 'string') newContent = [[module.id, newContent, '']];
					update(newContent);
				});
			}

			module.hot.dispose(function () {
				update();
			});
		}
	}, function (module, exports, __webpack_require__) {

		exports = module.exports = __webpack_require__(100)();

		exports.push([module.id, ".popover.top,\r\n.popover.left,\r\n.popover.right,\r\n.popover.bottom {\r\n  display: block;\r\n}\r\n.scale-enter {\r\n  -webkit-animation:scale-in 0.15s ease-in;\r\n          animation:scale-in 0.15s ease-in;\r\n}\r\n.scale-leave {\r\n  -webkit-animation:scale-out 0.15s ease-out;\r\n          animation:scale-out 0.15s ease-out;\r\n}\r\n@-webkit-keyframes scale-in {\r\n  0% {\r\n    -webkit-transform: scale(0);\r\n            transform: scale(0);\r\n    opacity: 0;\r\n  }\r\n  100% {\r\n    -webkit-transform: scale(1);\r\n            transform: scale(1);\r\n    opacity: 1;\r\n  }\r\n}\r\n@keyframes scale-in {\r\n  0% {\r\n    -webkit-transform: scale(0);\r\n            transform: scale(0);\r\n    opacity: 0;\r\n  }\r\n  100% {\r\n    -webkit-transform: scale(1);\r\n            transform: scale(1);\r\n    opacity: 1;\r\n  }\r\n}\r\n@-webkit-keyframes scale-out {\r\n  0% {\r\n    -webkit-transform: scale(1);\r\n            transform: scale(1);\r\n    opacity: 1;\r\n  }\r\n  100% {\r\n    -webkit-transform: scale(0);\r\n            transform: scale(0);\r\n    opacity: 0;\r\n  }\r\n}\r\n@keyframes scale-out {\r\n  0% {\r\n    -webkit-transform: scale(1);\r\n            transform: scale(1);\r\n    opacity: 1;\r\n  }\r\n  100% {\r\n    -webkit-transform: scale(0);\r\n            transform: scale(0);\r\n    opacity: 0;\r\n  }\r\n}", ""]);
	}, function (module, exports, __webpack_require__) {

		'use strict';

		Object.defineProperty(exports, "__esModule", {
			value: true
		});

		var _popoverMixins = __webpack_require__(164);

		var _popoverMixins2 = _interopRequireDefault(_popoverMixins);

		function _interopRequireDefault(obj) {
			return obj && obj.__esModule ? obj : { default: obj };
		}

		exports.default = {
			mixins: [_popoverMixins2.default],
			props: {
				trigger: {
					type: String,
					default: 'click'
				}
			}
		};
	}, function (module, exports, __webpack_require__) {

		'use strict';

		Object.defineProperty(exports, "__esModule", {
			value: true
		});

		var _utils = __webpack_require__(92);

		var _NodeList = __webpack_require__(27);

		var _NodeList2 = _interopRequireDefault(_NodeList);

		function _interopRequireDefault(obj) {
			return obj && obj.__esModule ? obj : { default: obj };
		}

		exports.default = {
			props: {
				trigger: {
					type: String
				},
				effect: {
					type: String,
					default: 'fade'
				},
				title: {
					type: String
				},
				content: {
					type: String
				},
				header: {
					type: Boolean,
					coerce: _utils.coerce.boolean,
					default: true
				},
				placement: {
					type: String,
					default: 'top'
				}
			},
			data: function data() {
				return {
					position: {
						top: 0,
						left: 0
					},
					show: false
				};
			},

			methods: {
				toggle: function toggle(e) {
					var _this = this;

					if (e && this.trigger === 'contextmenu') e.preventDefault();
					if (!(this.show = !this.show)) {
						return;
					}
					setTimeout(function () {
						var popover = _this.$els.popover;
						var trigger = _this.$els.trigger.children[0];
						switch (_this.placement) {
							case 'top':
								_this.position.left = trigger.offsetLeft - popover.offsetWidth / 2 + trigger.offsetWidth / 2;
								_this.position.top = trigger.offsetTop - popover.offsetHeight;
								break;
							case 'left':
								_this.position.left = trigger.offsetLeft - popover.offsetWidth;
								_this.position.top = trigger.offsetTop + trigger.offsetHeight / 2 - popover.offsetHeight / 2;
								break;
							case 'right':
								_this.position.left = trigger.offsetLeft + trigger.offsetWidth;
								_this.position.top = trigger.offsetTop + trigger.offsetHeight / 2 - popover.offsetHeight / 2;
								break;
							case 'bottom':
								_this.position.left = trigger.offsetLeft - popover.offsetWidth / 2 + trigger.offsetWidth / 2;
								_this.position.top = trigger.offsetTop + trigger.offsetHeight;
								break;
							default:
								console.warn('Wrong placement prop');
						}
						popover.style.top = _this.position.top + 'px';
						popover.style.left = _this.position.left + 'px';
					}, 0);
				}
			},
			ready: function ready() {
				var trigger = this.$els.trigger;
				if (!trigger) return console.error('Could not find trigger v-el in your component that uses popoverMixin.');

				if (this.trigger === 'focus' && !~trigger.tabIndex) {
					trigger = (0, _NodeList2.default)('a,input,select,textarea,button', trigger);
					if (!trigger.length) {
						trigger = null;
					}
				}
				if (trigger) {
					var events = { contextmenu: 'contextmenu', hover: 'mouseleave mouseenter', focus: 'blur focus' };
					(0, _NodeList2.default)(trigger).on(events[this.trigger] || 'click', this.toggle);
					this._trigger = trigger;
				}
			},
			beforeDestroy: function beforeDestroy() {
				if (this._trigger) (0, _NodeList2.default)(this._trigger).off();
			}
		};
	}, function (module, exports) {

		module.exports = "<span v-el:trigger>\r\n    <slot></slot>\r\n    <div v-el:popover v-if=\"show\"\r\n      :class=\"['popover',placement]\"\r\n      :transition=\"effect\"\r\n    >\r\n      <div class=\"arrow\"></div>\r\n      <h3 class=\"popover-title\" v-if=\"title\">\r\n        <slot name=\"title\">{{title}}</slot>\r\n      </h3>\r\n      <div class=\"popover-content\">\r\n        <slot name=\"content\">{{{content}}}</slot>\r\n      </div>\r\n    </div>\r\n  </span>";
	}, function (module, exports, __webpack_require__) {

		module.exports = __webpack_require__(167);

		if (module.exports.__esModule) module.exports = module.exports.default;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(168);
		if (false) {
			(function () {
				var hotAPI = require("vue-hot-reload-api");
				hotAPI.install(require("vue"));
				if (!hotAPI.compatible) return;
				var id = "-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Progressbar.vue";
				hotAPI.createRecord(id, module.exports);
				module.hot.accept(["-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Progressbar.vue", "-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./Progressbar.vue"], function () {
					var newOptions = require("-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Progressbar.vue");
					if (newOptions && newOptions.__esModule) newOptions = newOptions.default;
					var newTemplate = require("-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./Progressbar.vue");
					hotAPI.update(id, newOptions, newTemplate);
				});
			})();
		}
	}, function (module, exports, __webpack_require__) {

		'use strict';

		Object.defineProperty(exports, "__esModule", {
			value: true
		});

		var _utils = __webpack_require__(92);

		exports.default = {
			props: {
				now: {
					type: Number,
					coerce: _utils.coerce.number,
					required: true
				},
				label: {
					type: Boolean,
					coerce: _utils.coerce.boolean,
					default: false
				},
				type: {
					type: String
				},
				striped: {
					type: Boolean,
					coerce: _utils.coerce.boolean,
					default: false
				},
				animated: {
					type: Boolean,
					coerce: _utils.coerce.boolean,
					default: false
				}
			}
		};
	}, function (module, exports) {

		module.exports = "<div role=\"progressbar\" \r\n    :class=\"['progress-bar',{\r\n      'progress-bar-success':type == 'success',\r\n      'progress-bar-warning':type == 'warning',\r\n      'progress-bar-info':type == 'info',\r\n      'progress-bar-danger':type == 'danger',\r\n      'progress-bar-striped':striped,\r\n      'active':animated\r\n    }]\"\r\n    :style=\"{width: now + '%'}\"\r\n  >\r\n    {{label ? now + '%' : ''}}\r\n  </div>";
	}, function (module, exports, __webpack_require__) {

		__webpack_require__(170);
		module.exports = __webpack_require__(172);

		if (module.exports.__esModule) module.exports = module.exports.default;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(173);
		if (false) {
			(function () {
				var hotAPI = require("vue-hot-reload-api");
				hotAPI.install(require("vue"));
				if (!hotAPI.compatible) return;
				var id = "-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Radio.vue";
				hotAPI.createRecord(id, module.exports);
				module.hot.accept(["-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Radio.vue", "-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./Radio.vue"], function () {
					var newOptions = require("-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Radio.vue");
					if (newOptions && newOptions.__esModule) newOptions = newOptions.default;
					var newTemplate = require("-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./Radio.vue");
					hotAPI.update(id, newOptions, newTemplate);
				});
			})();
		}
	}, function (module, exports, __webpack_require__) {
		var content = __webpack_require__(171);
		if (typeof content === 'string') content = [[module.id, content, '']];

		var update = __webpack_require__(101)(content, {});
		if (content.locals) module.exports = content.locals;

		if (false) {
			if (!content.locals) {
				module.hot.accept("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js?id=_v-3d64a940&file=Radio.vue!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Radio.vue", function () {
					var newContent = require("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js?id=_v-3d64a940&file=Radio.vue!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Radio.vue");
					if (typeof newContent === 'string') newContent = [[module.id, newContent, '']];
					update(newContent);
				});
			}

			module.hot.dispose(function () {
				update();
			});
		}
	}, function (module, exports, __webpack_require__) {

		exports = module.exports = __webpack_require__(100)();

		exports.push([module.id, ".radio { position: relative; }\r\n.radio > label > input {\r\n  position: absolute;\r\n  margin: 0;\r\n  padding: 0;\r\n  opacity: 0;\r\n  z-index: -1;\r\n  box-sizing: border-box;\r\n}\r\n.radio > label > .icon {\r\n  position: absolute;\r\n  top: .15rem;\r\n  left: 0;\r\n  display: block;\r\n  width: 1.4rem;\r\n  height: 1.4rem;\r\n  text-align: center;\r\n  -webkit-user-select: none;\r\n     -moz-user-select: none;\r\n      -ms-user-select: none;\r\n          user-select: none;\r\n  border-radius: .7rem;\r\n  background-repeat: no-repeat;\r\n  background-position: center center;\r\n  background-size: 50% 50%;\r\n}\r\n.radio:not(.active) > label > .icon {\r\n  background-color: #ddd;\r\n  border: 1px solid #bbb;\r\n}\r\n.radio > label > input:focus ~ .icon {\r\n  outline: 0;\r\n  border: 1px solid #66afe9;\r\n  box-shadow: inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(102,175,233,.6);\r\n}\r\n.radio.active > label > .icon {\r\n  background-size: 1rem 1rem;\r\n  background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjxzdmcgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxjaXJjbGUgY3g9IjUiIGN5PSI1IiByPSI0IiBmaWxsPSIjZmZmIi8+PC9zdmc+);\r\n}\r\n.radio.active .btn-default { -webkit-filter: brightness(75%); filter: brightness(75%); }\r\n\r\n.radio.disabled > label > .icon,\r\n.radio.readonly > label > .icon,\r\n.btn.readonly {\r\n  filter: alpha(opacity=65);\r\n  box-shadow: none;\r\n  opacity: .65;\r\n}\r\nlabel.btn > input[type=radio] {\r\n  position: absolute;\r\n  clip: rect(0,0,0,0);\r\n  pointer-events: none;\r\n}", ""]);
	}, function (module, exports, __webpack_require__) {

		'use strict';

		Object.defineProperty(exports, "__esModule", {
			value: true
		});

		var _utils = __webpack_require__(92);

		exports.default = {
			props: {
				value: {
					default: true
				},
				checked: {
					twoWay: true
				},
				button: {
					type: Boolean,
					coerce: _utils.coerce.boolean,
					default: false
				},
				disabled: {
					type: Boolean,
					coerce: _utils.coerce.boolean,
					default: false
				},
				name: {
					type: String,
					default: null
				},
				readonly: {
					type: Boolean,
					coerce: _utils.coerce.boolean,
					default: false
				},
				type: {
					type: String,
					default: null
				}
			},
			computed: {
				active: function active() {
					return this.group ? this.$parent.value === this.value : this.value === this.checked;
				},
				buttonStyle: function buttonStyle() {
					return this.button || this.group && this.$parent.buttons;
				},
				group: function group() {
					return this.$parent && this.$parent._radioGroup;
				},
				typeColor: function typeColor() {
					return this.type || this.$parent && this.$parent.type || 'default';
				}
			},
			created: function created() {
				var parent = this.$parent;
				if (!parent) return;
				if (parent._btnGroup && !parent._checkboxGroup) {
					parent._radioGroup = true;
				}
			},
			ready: function ready() {
				if (!this.$parent._radioGroup) return;
				if (this.$parent.value) {
					this.checked = this.$parent.value === this.value;
				} else if (this.checked) {
					this.$parent.value = this.value;
				}
			},

			methods: {
				focus: function focus() {
					this.$els.input.focus();
				},
				toggle: function toggle() {
					if (this.disabled) {
						return;
					}
					this.focus();
					if (this.readonly) {
						return;
					}
					this.checked = this.value;
					if (this.group) {
						this.$parent.value = this.value;
					}
				}
			}
		};
	}, function (module, exports) {

		module.exports = "<label v-if=\"buttonStyle\" :class=\"['btn btn-'+typeColor,{active:active,disabled:disabled,readonly:readonly}]\" @click.prevent=\"toggle\">\r\n    <input type=\"radio\" autocomplete=\"off\"\r\n      v-el:input\r\n      v-show=\"!readonly\"\r\n      :checked=\"active\"\r\n      :value=\"value\"\r\n      :name=\"name\"\r\n      :readonly=\"readonly\"\r\n      :disabled=\"disabled\"\r\n    />\r\n    <slot></slot>\r\n  </label>\r\n  <div v-else :class=\"['radio',typeColor,{active:active,disabled:disabled,readonly:readonly}]\" @click.prevent=\"toggle\">\r\n    <label class=\"open\">\r\n      <input type=\"radio\" autocomplete=\"off\"\r\n        v-el:input\r\n        :checked=\"active\"\r\n        :value=\"value\"\r\n        :name=\"name\"\r\n        :readonly=\"readonly\"\r\n        :disabled=\"disabled\"\r\n      />\r\n      <span class=\"icon dropdown-toggle\" :class=\"[active?'btn-'+typeColor:'',{bg:typeColor==='default'}]\"></span>\r\n      <span v-if=\"active&&typeColor==='default'\" class=\"icon\"></span>\r\n      <slot></slot>\r\n    </label>\r\n  </div>";
	}, function (module, exports, __webpack_require__) {

		__webpack_require__(175);
		module.exports = __webpack_require__(177);

		if (module.exports.__esModule) module.exports = module.exports.default;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(193);
		if (false) {
			(function () {
				var hotAPI = require("vue-hot-reload-api");
				hotAPI.install(require("vue"));
				if (!hotAPI.compatible) return;
				var id = "-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Select.vue";
				hotAPI.createRecord(id, module.exports);
				module.hot.accept(["-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Select.vue", "-!vue-html-loader!./../node_modules/vue-loader/lib/template-rewriter.js?id=_v-0f3bb707&file=Select.vue!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./Select.vue"], function () {
					var newOptions = require("-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Select.vue");
					if (newOptions && newOptions.__esModule) newOptions = newOptions.default;
					var newTemplate = require("-!vue-html-loader!./../node_modules/vue-loader/lib/template-rewriter.js?id=_v-0f3bb707&file=Select.vue!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./Select.vue");
					hotAPI.update(id, newOptions, newTemplate);
				});
			})();
		}
	}, function (module, exports, __webpack_require__) {
		var content = __webpack_require__(176);
		if (typeof content === 'string') content = [[module.id, content, '']];

		var update = __webpack_require__(101)(content, {});
		if (content.locals) module.exports = content.locals;

		if (false) {
			if (!content.locals) {
				module.hot.accept("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js?id=_v-0f3bb707&file=Select.vue&scoped=true!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Select.vue", function () {
					var newContent = require("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js?id=_v-0f3bb707&file=Select.vue&scoped=true!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Select.vue");
					if (typeof newContent === 'string') newContent = [[module.id, newContent, '']];
					update(newContent);
				});
			}

			module.hot.dispose(function () {
				update();
			});
		}
	}, function (module, exports, __webpack_require__) {

		exports = module.exports = __webpack_require__(100)();

		exports.push([module.id, "button.form-control.dropdown-toggle[_v-0f3bb707]{\r\n  height: auto;\r\n  padding-right: 24px;\r\n}\r\nbutton.form-control.dropdown-toggle[_v-0f3bb707]:after{\r\n  content: ' ';\r\n  position: absolute;\r\n  right: 13px;\r\n  top: 50%;\r\n  margin: -1px 0 0;\r\n  border-top: 4px dashed;\r\n  border-top: 4px solid \\9;\r\n  border-right: 4px solid transparent;\r\n  border-left: 4px solid transparent;\r\n}\r\n.bs-searchbox[_v-0f3bb707] {\r\n  position: relative;\r\n  margin: 4px 8px;\r\n}\r\n.bs-searchbox .close[_v-0f3bb707] {\r\n  position: absolute;\r\n  top: 0;\r\n  right: 0;\r\n  z-index: 2;\r\n  display: block;\r\n  width: 34px;\r\n  height: 34px;\r\n  line-height: 34px;\r\n  text-align: center;\r\n}\r\n.bs-searchbox input[_v-0f3bb707]:focus,\r\n.secret:focus + button[_v-0f3bb707] {\r\n  outline: 0;\r\n  border-color: #66afe9 !important;\r\n  box-shadow: inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(102,175,233,.6);\r\n}\r\n.secret[_v-0f3bb707] {\r\n  border: 0;\r\n  clip: rect(0 0 0 0);\r\n  height: 1px;\r\n  margin: -1px;\r\n  overflow: hidden;\r\n  padding: 0;\r\n  position: absolute;\r\n  width: 1px;\r\n}\r\nbutton>.close[_v-0f3bb707] { margin-left: 5px;}\r\n.notify.out[_v-0f3bb707] { position: relative; }\r\n.notify.in[_v-0f3bb707],\r\n.notify>div[_v-0f3bb707] {\r\n  position: absolute;\r\n  width: 96%;\r\n  margin: 0 2%;\r\n  min-height: 26px;\r\n  padding: 3px 5px;\r\n  background: #f5f5f5;\r\n  border: 1px solid #e3e3e3;\r\n  box-shadow: inset 0 1px 1px rgba(0,0,0,.05);\r\n  pointer-events: none;\r\n}\r\n.notify>div[_v-0f3bb707] {\r\n  top: 5px;\r\n  z-index: 1;\r\n}\r\n.notify.in[_v-0f3bb707] {\r\n  opacity: .9;\r\n  bottom: 5px;\r\n}\r\n.btn-group-justified .dropdown-toggle>span[_v-0f3bb707]:not(.close) {\r\n  width: calc(100% - 18px);\r\n  display: inline-block;\r\n  overflow: hidden;\r\n  white-space: nowrap;\r\n  text-overflow: ellipsis;\r\n  margin-bottom: -4px;\r\n}\r\n.btn-group-justified .dropdown-menu[_v-0f3bb707] { width: 100%; }", ""]);
	}, function (module, exports, __webpack_require__) {

		'use strict';

		Object.defineProperty(exports, "__esModule", {
			value: true
		});

		var _typeof2 = __webpack_require__(178);

		var _typeof3 = _interopRequireDefault(_typeof2);

		var _utils = __webpack_require__(92);

		var _NodeList = __webpack_require__(27);

		var _NodeList2 = _interopRequireDefault(_NodeList);

		function _interopRequireDefault(obj) {
			return obj && obj.__esModule ? obj : { default: obj };
		}

		var timeout = {};
		exports.default = {
			props: {
				value: {
					twoWay: true
				},
				options: {
					type: Array,
					default: function _default() {
						return [];
					}
				},
				multiple: {
					type: Boolean,
					coerce: _utils.coerce.boolean,
					default: false
				},
				clearButton: {
					type: Boolean,
					coerce: _utils.coerce.boolean,
					default: false
				},
				closeOnSelect: {
					type: Boolean,
					coerce: _utils.coerce.boolean,
					default: false
				},
				disabled: {
					type: Boolean,
					coerce: _utils.coerce.boolean,
					default: false
				},
				lang: {
					type: String,
					default: navigator.language
				},
				limit: {
					type: Number,
					coerce: _utils.coerce.number,
					default: 1024
				},
				name: {
					type: String,
					default: null
				},
				optionsLabel: {
					type: String,
					default: 'label'
				},
				optionsValue: {
					type: String,
					default: 'value'
				},
				parent: {
					default: true
				},
				placeholder: {
					type: String,
					default: null
				},
				readonly: {
					type: Boolean,
					coerce: _utils.coerce.boolean,
					default: null
				},
				required: {
					type: Boolean,
					coerce: _utils.coerce.boolean,
					default: null
				},
				minSearch: {
					type: Number,
					coerce: _utils.coerce.number,
					default: 0
				},
				search: {
					type: Boolean,
					coerce: _utils.coerce.boolean,
					default: false
				},
				searchText: {
					type: String,
					default: null
				},
				url: {
					type: String,
					default: null
				}
			},
			data: function data() {
				return {
					loading: null,
					searchValue: null,
					show: false,
					showNotify: false,
					valid: null
				};
			},

			computed: {
				selected: function selected() {
					var _this = this;

					if (this.options.length === 0) {
						return '';
					}
					var foundItems = [];
					this.values.forEach(function (item) {
						if (~['number', 'string'].indexOf(typeof item === 'undefined' ? 'undefined' : (0, _typeof3.default)(item))) {
							var option = null;
							if (_this.options.some(function (o) {
								if (o instanceof Object ? o[_this.optionsValue] === item : o === item) {
									option = o;
									return true;
								}
							})) {
								foundItems.push(option[_this.optionsLabel] || option);
							}
						}
					});
					return foundItems.join(', ');
				},
				classes: function classes() {
					return [{ open: this.show, disabled: this.disabled }, this.class, this.isLi ? 'dropdown' : this.inInput ? 'input-group-btn' : 'btn-group'];
				},
				inInput: function inInput() {
					return this.$parent._input;
				},
				isLi: function isLi() {
					return this.$parent._navbar || this.$parent.menu || this.$parent._tabset;
				},
				canSearch: function canSearch() {
					return this.minSearch ? this.options.length >= this.minSearch : this.search;
				},
				limitText: function limitText() {
					return this.text.limit.replace('{{limit}}', this.limit);
				},
				showPlaceholder: function showPlaceholder() {
					return this.values.length === 0 || !this.hasParent ? this.placeholder || this.text.notSelected : null;
				},
				text: function text() {
					return (0, _utils.translations)(this.lang);
				},
				hasParent: function hasParent() {
					return this.parent instanceof Array ? this.parent.length : this.parent;
				},
				values: function values() {
					return this.value instanceof Array ? this.value : this.value !== null && this.value !== undefined ? [this.value] : [];
				}
			},
			watch: {
				options: function options(_options) {
					var _this2 = this;

					var changed = false;
					if (_options instanceof Array && _options.length) {
						_options.map(function (el) {
							if (!(el instanceof Object)) {
								var obj = {};
								obj[_this2.optionsLabel] = el;
								obj[_this2.optionsValue] = el;
								changed = true;
								return obj;
							}
							return el;
						});
					}
					if (changed) {
						this.options = _options;
					}
				},
				show: function show(val) {
					if (val) {
						this.$els.sel.focus();
						this.$els.search && this.$els.search.focus();
					}
				},
				url: function url() {
					this.update();
				},
				value: function value(val) {
					var _this3 = this;

					this.$emit('change', val);
					this.$emit('selected', this.selected);
					if (this.value instanceof Array && val.length > this.limit) {
						this.showNotify = true;
						if (timeout.limit) clearTimeout(timeout.limit);
						timeout.limit = setTimeout(function () {
							timeout.limit = false;
							_this3.showNotify = false;
						}, 1500);
					}
					this.checkValue();
					this.valid = this.validate();
				},
				valid: function valid(val, old) {
					if (val === old) {
						return;
					}
					this._parent && this._parent.validate();
				}
			},
			methods: {
				blur: function blur() {
					this.show = false;
				},
				clear: function clear() {
					if (this.disabled || this.readonly) {
						return;
					}
					this.value = this.value instanceof Array ? [] : null;
					this.toggle();
				},
				clearSearch: function clearSearch() {
					this.searchValue = '';
					this.$els.search.focus();
				},
				checkValue: function checkValue() {
					if (this.multiple && !(this.value instanceof Array)) {
						this.value = this.value === null || this.value === undefined ? [] : [this.value];
					}
					if (!this.multiple && this.value instanceof Array) {
						this.value = this.value.length ? this.value.pop() : null;
					}
					if (this.limit < 1) {
						this.limit = 1;
					}
					if (this.values.length > this.limit) {
						this.value = this.value.slice(0, this.limit);
					}
				},
				isSelected: function isSelected(v) {
					return this.values.indexOf(v) > -1;
				},
				select: function select(v, alt) {
					if (this.value instanceof Array) {
						if (~this.value.indexOf(v)) {
							this.value.$remove(v);
						} else {
							this.value.push(v);
						}
						if (this.closeOnSelect) {
							this.toggle();
						}
					} else {
						this.value = !~['', null, undefined].indexOf(v) ? v : alt;
						this.toggle();
					}
				},
				toggle: function toggle() {
					this.show = !this.show;
				},
				update: function update() {
					var _this4 = this;

					if (!this.url) return;
					this.loading = true;
					(0, _utils.getJSON)(this.url).then(function (data) {
						var options = [];
						data.forEach(function (opc) {
							if (opc[_this4.optionsValue] !== undefined && opc[_this4.optionsLabel] !== undefined) options.push(opc);
						});
						_this4.options = options;
						if (!options.length) {
							_this4.value = _this4.value instanceof Array ? [] : null;
						}
					}).always(function () {
						_this4.loading = false;
						_this4.checkValue();
					});
				},
				validate: function validate() {
					return !this.required ? true : this.value instanceof Array ? this.value.length > 0 : this.value !== null;
				}
			},
			created: function created() {
				this._select = true;
				if (this.value === undefined || !this.parent) {
					this.value = null;
				}
				if (!this.multiple && this.value instanceof Array) {
					this.value = this.value.shift();
				}
				this.checkValue();
				if (this.url) this.update();
				var parent = this.$parent;
				while (parent && !parent._formGroup) {
					parent = parent.$parent;
				}
				if (parent && parent._formGroup) {
					parent.children.push(this);
					this._parent = parent;
				}
			},
			ready: function ready() {
				var _this5 = this;

				(0, _NodeList2.default)(this.$els.select).onBlur(function (e) {
					_this5.show = false;
				});
			},
			beforeDestroy: function beforeDestroy() {
				if (this._parent) this._parent.children.$remove(this);
				(0, _NodeList2.default)(this.$els.select).offBlur();
			}
		};
	}, function (module, exports, __webpack_require__) {

		"use strict";

		exports.__esModule = true;

		var _iterator = __webpack_require__(46);

		var _iterator2 = _interopRequireDefault(_iterator);

		var _symbol = __webpack_require__(179);

		var _symbol2 = _interopRequireDefault(_symbol);

		var _typeof = typeof _symbol2.default === "function" && _typeof4(_iterator2.default) === "symbol" ? function (obj) {
			return typeof obj === 'undefined' ? 'undefined' : _typeof4(obj);
		} : function (obj) {
			return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === 'undefined' ? 'undefined' : _typeof4(obj);
		};

		function _interopRequireDefault(obj) {
			return obj && obj.__esModule ? obj : { default: obj };
		}

		exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
			return typeof obj === "undefined" ? "undefined" : _typeof(obj);
		} : function (obj) {
			return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
		};
	}, function (module, exports, __webpack_require__) {

		module.exports = { "default": __webpack_require__(180), __esModule: true };
	}, function (module, exports, __webpack_require__) {

		__webpack_require__(181);
		__webpack_require__(190);
		__webpack_require__(191);
		__webpack_require__(192);
		module.exports = __webpack_require__(33).Symbol;
	}, function (module, exports, __webpack_require__) {

		'use strict';

		var global = __webpack_require__(32),
		    has = __webpack_require__(55),
		    DESCRIPTORS = __webpack_require__(41),
		    $export = __webpack_require__(31),
		    redefine = __webpack_require__(54),
		    META = __webpack_require__(182).KEY,
		    $fails = __webpack_require__(42),
		    shared = __webpack_require__(69),
		    setToStringTag = __webpack_require__(73),
		    uid = __webpack_require__(70),
		    wks = __webpack_require__(74),
		    wksExt = __webpack_require__(81),
		    wksDefine = __webpack_require__(183),
		    keyOf = __webpack_require__(184),
		    enumKeys = __webpack_require__(185),
		    isArray = __webpack_require__(188),
		    anObject = __webpack_require__(38),
		    toIObject = __webpack_require__(62),
		    toPrimitive = __webpack_require__(44),
		    createDesc = __webpack_require__(45),
		    _create = __webpack_require__(58),
		    gOPNExt = __webpack_require__(86),
		    $GOPD = __webpack_require__(189),
		    $DP = __webpack_require__(37),
		    $keys = __webpack_require__(60),
		    gOPD = $GOPD.f,
		    dP = $DP.f,
		    gOPN = gOPNExt.f,
		    $Symbol = global.Symbol,
		    $JSON = global.JSON,
		    _stringify = $JSON && $JSON.stringify,
		    PROTOTYPE = 'prototype',
		    HIDDEN = wks('_hidden'),
		    TO_PRIMITIVE = wks('toPrimitive'),
		    isEnum = {}.propertyIsEnumerable,
		    SymbolRegistry = shared('symbol-registry'),
		    AllSymbols = shared('symbols'),
		    OPSymbols = shared('op-symbols'),
		    ObjectProto = Object[PROTOTYPE],
		    USE_NATIVE = typeof $Symbol == 'function',
		    QObject = global.QObject;

		var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

		var setSymbolDesc = DESCRIPTORS && $fails(function () {
			return _create(dP({}, 'a', {
				get: function get() {
					return dP(this, 'a', { value: 7 }).a;
				}
			})).a != 7;
		}) ? function (it, key, D) {
			var protoDesc = gOPD(ObjectProto, key);
			if (protoDesc) delete ObjectProto[key];
			dP(it, key, D);
			if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
		} : dP;

		var wrap = function wrap(tag) {
			var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
			sym._k = tag;
			return sym;
		};

		var isSymbol = USE_NATIVE && _typeof4($Symbol.iterator) == 'symbol' ? function (it) {
			return (typeof it === 'undefined' ? 'undefined' : _typeof4(it)) == 'symbol';
		} : function (it) {
			return it instanceof $Symbol;
		};

		var $defineProperty = function defineProperty(it, key, D) {
			if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
			anObject(it);
			key = toPrimitive(key, true);
			anObject(D);
			if (has(AllSymbols, key)) {
				if (!D.enumerable) {
					if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
					it[HIDDEN][key] = true;
				} else {
					if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
					D = _create(D, { enumerable: createDesc(0, false) });
				}return setSymbolDesc(it, key, D);
			}return dP(it, key, D);
		};
		var $defineProperties = function defineProperties(it, P) {
			anObject(it);
			var keys = enumKeys(P = toIObject(P)),
			    i = 0,
			    l = keys.length,
			    key;
			while (l > i) {
				$defineProperty(it, key = keys[i++], P[key]);
			}return it;
		};
		var $create = function create(it, P) {
			return P === undefined ? _create(it) : $defineProperties(_create(it), P);
		};
		var $propertyIsEnumerable = function propertyIsEnumerable(key) {
			var E = isEnum.call(this, key = toPrimitive(key, true));
			if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
			return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
		};
		var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
			it = toIObject(it);
			key = toPrimitive(key, true);
			if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
			var D = gOPD(it, key);
			if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
			return D;
		};
		var $getOwnPropertyNames = function getOwnPropertyNames(it) {
			var names = gOPN(toIObject(it)),
			    result = [],
			    i = 0,
			    key;
			while (names.length > i) {
				if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
			}return result;
		};
		var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
			var IS_OP = it === ObjectProto,
			    names = gOPN(IS_OP ? OPSymbols : toIObject(it)),
			    result = [],
			    i = 0,
			    key;
			while (names.length > i) {
				if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
			}return result;
		};

		if (!USE_NATIVE) {
			$Symbol = function _Symbol2() {
				if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
				var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
				var $set = function $set(value) {
					if (this === ObjectProto) $set.call(OPSymbols, value);
					if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
					setSymbolDesc(this, tag, createDesc(1, value));
				};
				if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
				return wrap(tag);
			};
			redefine($Symbol[PROTOTYPE], 'toString', function toString() {
				return this._k;
			});

			$GOPD.f = $getOwnPropertyDescriptor;
			$DP.f = $defineProperty;
			__webpack_require__(87).f = gOPNExt.f = $getOwnPropertyNames;
			__webpack_require__(187).f = $propertyIsEnumerable;
			__webpack_require__(186).f = $getOwnPropertySymbols;

			if (DESCRIPTORS && !__webpack_require__(53)) {
				redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
			}

			wksExt.f = function (name) {
				return wrap(wks(name));
			};
		}

		$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

		for (var symbols = 'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'.split(','), i = 0; symbols.length > i;) {
			wks(symbols[i++]);
		}for (var symbols = $keys(wks.store), i = 0; symbols.length > i;) {
			wksDefine(symbols[i++]);
		}$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
			'for': function _for(key) {
				return has(SymbolRegistry, key += '') ? SymbolRegistry[key] : SymbolRegistry[key] = $Symbol(key);
			},

			keyFor: function keyFor(key) {
				if (isSymbol(key)) return keyOf(SymbolRegistry, key);
				throw TypeError(key + ' is not a symbol!');
			},
			useSetter: function useSetter() {
				setter = true;
			},
			useSimple: function useSimple() {
				setter = false;
			}
		});

		$export($export.S + $export.F * !USE_NATIVE, 'Object', {
			create: $create,

			defineProperty: $defineProperty,

			defineProperties: $defineProperties,

			getOwnPropertyDescriptor: $getOwnPropertyDescriptor,

			getOwnPropertyNames: $getOwnPropertyNames,

			getOwnPropertySymbols: $getOwnPropertySymbols
		});

		$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
			var S = $Symbol();

			return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
		})), 'JSON', {
			stringify: function stringify(it) {
				if (it === undefined || isSymbol(it)) return;
				var args = [it],
				    i = 1,
				    replacer,
				    $replacer;
				while (arguments.length > i) {
					args.push(arguments[i++]);
				}replacer = args[1];
				if (typeof replacer == 'function') $replacer = replacer;
				if ($replacer || !isArray(replacer)) replacer = function replacer(key, value) {
					if ($replacer) value = $replacer.call(this, key, value);
					if (!isSymbol(value)) return value;
				};
				args[1] = replacer;
				return _stringify.apply($JSON, args);
			}
		});

		$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(36)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);

		setToStringTag($Symbol, 'Symbol');

		setToStringTag(Math, 'Math', true);

		setToStringTag(global.JSON, 'JSON', true);
	}, function (module, exports, __webpack_require__) {

		var META = __webpack_require__(70)('meta'),
		    isObject = __webpack_require__(39),
		    has = __webpack_require__(55),
		    setDesc = __webpack_require__(37).f,
		    id = 0;
		var isExtensible = Object.isExtensible || function () {
			return true;
		};
		var FREEZE = !__webpack_require__(42)(function () {
			return isExtensible(Object.preventExtensions({}));
		});
		var setMeta = function setMeta(it) {
			setDesc(it, META, { value: {
					i: 'O' + ++id,
					w: {} } });
		};
		var fastKey = function fastKey(it, create) {
			if (!isObject(it)) return (typeof it === 'undefined' ? 'undefined' : _typeof4(it)) == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
			if (!has(it, META)) {
				if (!isExtensible(it)) return 'F';

				if (!create) return 'E';

				setMeta(it);
			}return it[META].i;
		};
		var getWeak = function getWeak(it, create) {
			if (!has(it, META)) {
				if (!isExtensible(it)) return true;

				if (!create) return false;

				setMeta(it);
			}return it[META].w;
		};

		var onFreeze = function onFreeze(it) {
			if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
			return it;
		};
		var meta = module.exports = {
			KEY: META,
			NEED: false,
			fastKey: fastKey,
			getWeak: getWeak,
			onFreeze: onFreeze
		};
	}, function (module, exports, __webpack_require__) {

		var global = __webpack_require__(32),
		    core = __webpack_require__(33),
		    LIBRARY = __webpack_require__(53),
		    wksExt = __webpack_require__(81),
		    defineProperty = __webpack_require__(37).f;
		module.exports = function (name) {
			var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
			if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
		};
	}, function (module, exports, __webpack_require__) {

		var getKeys = __webpack_require__(60),
		    toIObject = __webpack_require__(62);
		module.exports = function (object, el) {
			var O = toIObject(object),
			    keys = getKeys(O),
			    length = keys.length,
			    index = 0,
			    key;
			while (length > index) {
				if (O[key = keys[index++]] === el) return key;
			}
		};
	}, function (module, exports, __webpack_require__) {
		var getKeys = __webpack_require__(60),
		    gOPS = __webpack_require__(186),
		    pIE = __webpack_require__(187);
		module.exports = function (it) {
			var result = getKeys(it),
			    getSymbols = gOPS.f;
			if (getSymbols) {
				var symbols = getSymbols(it),
				    isEnum = pIE.f,
				    i = 0,
				    key;
				while (symbols.length > i) {
					if (isEnum.call(it, key = symbols[i++])) result.push(key);
				}
			}return result;
		};
	}, function (module, exports) {

		exports.f = Object.getOwnPropertySymbols;
	}, function (module, exports) {

		exports.f = {}.propertyIsEnumerable;
	}, function (module, exports, __webpack_require__) {
		var cof = __webpack_require__(64);
		module.exports = Array.isArray || function isArray(arg) {
			return cof(arg) == 'Array';
		};
	}, function (module, exports, __webpack_require__) {

		var pIE = __webpack_require__(187),
		    createDesc = __webpack_require__(45),
		    toIObject = __webpack_require__(62),
		    toPrimitive = __webpack_require__(44),
		    has = __webpack_require__(55),
		    IE8_DOM_DEFINE = __webpack_require__(40),
		    gOPD = Object.getOwnPropertyDescriptor;

		exports.f = __webpack_require__(41) ? gOPD : function getOwnPropertyDescriptor(O, P) {
			O = toIObject(O);
			P = toPrimitive(P, true);
			if (IE8_DOM_DEFINE) try {
				return gOPD(O, P);
			} catch (e) {}
			if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
		};
	}, function (module, exports) {}, function (module, exports, __webpack_require__) {

		__webpack_require__(183)('asyncIterator');
	}, function (module, exports, __webpack_require__) {

		__webpack_require__(183)('observable');
	}, function (module, exports) {

		module.exports = "<div v-el:select=\"\" :class=\"classes\" _v-0f3bb707=\"\">\n    <button type=\"button\" class=\"form-control dropdown-toggle\" :disabled=\"disabled || !hasParent\" :readonly=\"readonly\" @click=\"toggle()\" @keyup.esc=\"show = false\" _v-0f3bb707=\"\">\n      <span class=\"btn-content\" v-html=\"loading ? text.loading : showPlaceholder || selected\" _v-0f3bb707=\"\"></span>\n      <span v-if=\"clearButton&amp;&amp;values.length\" class=\"close\" @click=\"clear()\" _v-0f3bb707=\"\">×</span>\n    </button>\n    <select v-el:sel=\"\" v-model=\"value\" v-show=\"show\" name=\"{{name}}\" class=\"secret\" :multiple=\"multiple\" :required=\"required\" :readonly=\"readonly\" :disabled=\"disabled\" _v-0f3bb707=\"\">\n      <option v-if=\"required\" value=\"\" _v-0f3bb707=\"\"></option>\n      <option v-for=\"option in options\" :value=\"option[optionsValue]||option\" _v-0f3bb707=\"\">{{ option[optionsLabel]||option }}</option>\n    </select>\n    <ul class=\"dropdown-menu\" _v-0f3bb707=\"\">\n      <template v-if=\"options.length\" _v-0f3bb707=\"\">\n        <li v-if=\"canSearch\" class=\"bs-searchbox\" _v-0f3bb707=\"\">\n          <input type=\"text\" placeholder=\"{{searchText||text.search}}\" class=\"form-control\" autocomplete=\"off\" v-el:search=\"\" v-model=\"searchValue\" @keyup.esc=\"show = false\" _v-0f3bb707=\"\">\n          <span v-show=\"searchValue\" class=\"close\" @click=\"clearSearch\" _v-0f3bb707=\"\">×</span>\n        </li>\n        <li v-if=\"required&amp;&amp;!clearButton\" _v-0f3bb707=\"\"><a @mousedown.prevent=\"clear() &amp;&amp; blur()\" _v-0f3bb707=\"\">{{ placeholder || text.notSelected }}</a></li>\n        <li v-for=\"option in options | filterBy searchValue\" :id=\"option[optionsValue]||option\" _v-0f3bb707=\"\">\n          <a @mousedown.prevent=\"select(option[optionsValue],option)\" _v-0f3bb707=\"\">\n            <span v-html=\"option[optionsLabel]||option\" _v-0f3bb707=\"\"></span>\n            <span class=\"glyphicon glyphicon-ok check-mark\" v-show=\"isSelected(option[optionsValue])\" _v-0f3bb707=\"\"></span>\n          </a>\n        </li>\n      </template>\n      <slot _v-0f3bb707=\"\"></slot>\n      <div v-if=\"showNotify &amp;&amp; !closeOnSelect\" class=\"notify in\" transition=\"fadein\" _v-0f3bb707=\"\">{{limitText}}</div>\n    </ul>\n    <div v-if=\"showNotify &amp;&amp; closeOnSelect\" class=\"notify out\" transition=\"fadein\" _v-0f3bb707=\"\"><div _v-0f3bb707=\"\">{{limitText}}</div></div>\n  </div>";
	}, function (module, exports, __webpack_require__) {

		module.exports = __webpack_require__(195);

		if (module.exports.__esModule) module.exports = module.exports.default;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(196);
		if (false) {
			(function () {
				var hotAPI = require("vue-hot-reload-api");
				hotAPI.install(require("vue"));
				if (!hotAPI.compatible) return;
				var id = "-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Slider.vue";
				hotAPI.createRecord(id, module.exports);
				module.hot.accept(["-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Slider.vue", "-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./Slider.vue"], function () {
					var newOptions = require("-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Slider.vue");
					if (newOptions && newOptions.__esModule) newOptions = newOptions.default;
					var newTemplate = require("-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./Slider.vue");
					hotAPI.update(id, newOptions, newTemplate);
				});
			})();
		}
	}, function (module, exports) {

		'use strict';

		Object.defineProperty(exports, "__esModule", {
			value: true
		});

		exports.default = {
			data: function data() {
				return {
					index: 0,
					show: false
				};
			},

			computed: {
				show: function show() {
					return this.$parent.index === this.index;
				}
			},
			ready: function ready() {
				for (var c in this.$parent.$children) {
					if (this.$parent.$children[c] === this) {
						this.index = parseInt(c, 10);
						break;
					}
				}

				this.$parent.indicator.push(this.index);
				if (this.index === 0) {
					this.$el.classList.add('active');
				}
			}
		};
	}, function (module, exports) {

		module.exports = "<div class=\"item\">\r\n    <slot></slot>\r\n  </div>";
	}, function (module, exports, __webpack_require__) {

		__webpack_require__(198);
		module.exports = __webpack_require__(200);

		if (module.exports.__esModule) module.exports = module.exports.default;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(201);
		if (false) {
			(function () {
				var hotAPI = require("vue-hot-reload-api");
				hotAPI.install(require("vue"));
				if (!hotAPI.compatible) return;
				var id = "-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Spinner.vue";
				hotAPI.createRecord(id, module.exports);
				module.hot.accept(["-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Spinner.vue", "-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./Spinner.vue"], function () {
					var newOptions = require("-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Spinner.vue");
					if (newOptions && newOptions.__esModule) newOptions = newOptions.default;
					var newTemplate = require("-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./Spinner.vue");
					hotAPI.update(id, newOptions, newTemplate);
				});
			})();
		}
	}, function (module, exports, __webpack_require__) {
		var content = __webpack_require__(199);
		if (typeof content === 'string') content = [[module.id, content, '']];

		var update = __webpack_require__(101)(content, {});
		if (content.locals) module.exports = content.locals;

		if (false) {
			if (!content.locals) {
				module.hot.accept("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js?id=_v-7169b11e&file=Spinner.vue!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Spinner.vue", function () {
					var newContent = require("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js?id=_v-7169b11e&file=Spinner.vue!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Spinner.vue");
					if (typeof newContent === 'string') newContent = [[module.id, newContent, '']];
					update(newContent);
				});
			}

			module.hot.dispose(function () {
				update();
			});
		}
	}, function (module, exports, __webpack_require__) {

		exports = module.exports = __webpack_require__(100)();

		exports.push([module.id, "@-webkit-keyframes spin {\r\n  100% {\r\n    -webkit-transform: rotate(360deg);\r\n            transform: rotate(360deg);\r\n  }\r\n}\r\n@keyframes spin {\r\n  100% {\r\n    -webkit-transform: rotate(360deg);\r\n            transform: rotate(360deg);\r\n  }\r\n}\r\n.spinner-gritcode {\r\n  top: 0;\r\n  left: 0;\r\n  bottom: 0;\r\n  right: 0;\r\n  z-index: 9998;\r\n  position: absolute;\r\n  width: 100%;\r\n  text-align: center;\r\n  background: rgba(255, 255, 255, 0.9);\r\n}\r\n.spinner-gritcode.spinner-fixed {\r\n  position: fixed;\r\n}\r\n.spinner-gritcode .spinner-wrapper {\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  -webkit-transform: translate(-50%, -50%);\r\n          transform: translate(-50%, -50%);\r\n  -ms-transform: translate(-50%, -50%);\r\n}\r\n.spinner-gritcode .spinner-circle {\r\n  position: relative;\r\n  border: 4px solid #ccc;\r\n  border-right-color: #337ab7;\r\n  border-radius: 50%;\r\n  display: inline-block;\r\n  -webkit-animation: spin 0.6s linear;\r\n          animation: spin 0.6s linear;\r\n  -webkit-animation-iteration-count: infinite;\r\n          animation-iteration-count: infinite;\r\n  width: 3em;\r\n  height: 3em;\r\n  z-index: 2;\r\n}\r\n.spinner-gritcode .spinner-text {\r\n  position: relative;\r\n  text-align: center;\r\n  margin-top: 0.5em;\r\n  z-index: 2;\r\n  width: 100%;\r\n  font-size: 95%;\r\n  color: #337ab7;\r\n}\r\n.spinner-gritcode.spinner-sm .spinner-circle {\r\n  width: 1.5em;\r\n  height: 1.5em;\r\n}\r\n.spinner-gritcode.spinner-md .spinner-circle {\r\n  width: 2em;\r\n  height: 2em;\r\n}\r\n.spinner-gritcode.spinner-lg .spinner-circle {\r\n  width: 2.5em;\r\n  height: 2.5em;\r\n}\r\n.spinner-gritcode.spinner-xl .spinner-circle {\r\n  width: 3.5em;\r\n  height: 3.5em;\r\n}\r\n.lt-ie10 .spinner-gritcode .spinner-circle,\r\n.ie9 .spinner-gritcode .spinner-circle,\r\n.oldie .spinner-gritcode .spinner-circle,\r\n.no-csstransitions .spinner-gritcode .spinner-circle,\r\n.no-csstransforms3d .spinner-gritcode .spinner-circle {\r\n  background: url(\"http://i2.wp.com/www.thegreatnovelingadventure.com/wp-content/plugins/wp-polls/images/loading.gif\") center center no-repeat;\r\n  -webkit-animation: none;\r\n          animation: none;\r\n  margin-left: 0;\r\n  margin-top: 5px;\r\n  border: none;\r\n  width: 32px;\r\n  height: 32px;\r\n}", ""]);
	}, function (module, exports, __webpack_require__) {

		'use strict';

		Object.defineProperty(exports, "__esModule", {
			value: true
		});

		var _utils = __webpack_require__(92);

		var MIN_WAIT = 500;
		exports.default = {
			props: {
				size: {
					type: String,
					default: 'md'
				},
				text: {
					type: String,
					default: ''
				},
				fixed: {
					type: Boolean,
					coerce: _utils.coerce.boolean,
					default: false
				}
			},
			data: function data() {
				return {
					active: false
				};
			},

			computed: {
				spinnerSize: function spinnerSize() {
					return this.size ? 'spinner-' + this.size : 'spinner-sm';
				}
			},
			ready: function ready() {
				this._body = document.querySelector('body');
				this._bodyOverflow = this._body.style.overflowY || '';
			},

			methods: {
				getMinWait: function getMinWait(delay) {
					delay = delay || 0;
					return new Date().getTime() - this._started.getTime() < MIN_WAIT ? MIN_WAIT - parseInt(new Date().getTime() - this._started.getTime(), 10) + delay : 0 + delay;
				},
				show: function show(options) {
					if (options && options.text) {
						this.text = options.text;
					}
					if (options && options.size) {
						this.size = options.size;
					}
					if (options && options.fixed) {
						this.fixed = options.fixed;
					}

					this._body.style.overflowY = 'hidden';

					this._started = new Date();
					this.active = true;
					this.$root.$broadcast('shown::spinner');
				},
				hide: function hide() {
					var _this = this;

					var delay = 0;
					this._spinnerAnimation = setTimeout(function () {
						_this.active = false;
						_this._body.style.overflowY = _this._bodyOverflow;
						_this.$root.$broadcast('hidden::spinner');
					}, this.getMinWait(delay));
				}
			},
			events: {
				'show::spinner': function showSpinner(options) {
					this.show(options);
				},
				'hide::spinner': function hideSpinner() {
					this.hide();
				},
				'start::ajax': function startAjax(options) {
					this.show(options);
				},
				'end::ajax': function endAjax() {
					this.hide();
				}
			},
			beforeDestroy: function beforeDestroy() {
				clearTimeout(this._spinnerAnimation);
				this._body.style.overflowY = this._bodyOverflow;
			}
		};
	}, function (module, exports) {

		module.exports = "<div :class=\"['spinner spinner-gritcode',spinnerSize,{'spinner-fixed':fixed}]\" v-show=\"active\">\r\n    <div class=\"spinner-wrapper\">\r\n      <div class=\"spinner-circle\"></div>\r\n      <div class=\"spinner-text\">{{text}}</div>\r\n    </div>\r\n  </div>";
	}, function (module, exports, __webpack_require__) {

		module.exports = __webpack_require__(203);

		if (module.exports.__esModule) module.exports = module.exports.default;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(204);
		if (false) {
			(function () {
				var hotAPI = require("vue-hot-reload-api");
				hotAPI.install(require("vue"));
				if (!hotAPI.compatible) return;
				var id = "-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Tab.vue";
				hotAPI.createRecord(id, module.exports);
				module.hot.accept(["-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Tab.vue", "-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./Tab.vue"], function () {
					var newOptions = require("-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Tab.vue");
					if (newOptions && newOptions.__esModule) newOptions = newOptions.default;
					var newTemplate = require("-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./Tab.vue");
					hotAPI.update(id, newOptions, newTemplate);
				});
			})();
		}
	}, function (module, exports, __webpack_require__) {

		'use strict';

		Object.defineProperty(exports, "__esModule", {
			value: true
		});

		var _utils = __webpack_require__(92);

		exports.default = {
			props: {
				header: {
					type: String
				},
				disabled: {
					type: Boolean,
					coerce: _utils.coerce.boolean,
					default: false
				}
			},
			computed: {
				active: function active() {
					return this._tabset.show === this;
				},
				index: function index() {
					return this._tabset.tabs.indexOf(this);
				},
				show: function show() {
					return this._tabset && this._tabset.show === this;
				},
				transition: function transition() {
					return this._tabset ? this._tabset.effect : null;
				}
			},
			created: function created() {
				this._ingroup = this.$parent && this.$parent._tabgroup;
				var tabset = this;
				while (tabset && tabset._tabset !== true && tabset.$parent) {
					tabset = tabset.$parent;
				}
				if (!tabset._tabset) {
					this._tabset = {};
					console.warn('Warning: "tab" depend on "tabset" to work properly.');
				} else {
					tabset.tabs.push(this);
					if (!this._ingroup) {
						tabset.headers.push(this);
					} else {
						if (!~tabset.headers.indexOf(this.$parent)) {
							tabset.headers.push(this.$parent);
						}
					}
					this._tabset = tabset;
				}
				if (this._ingroup) {
					this.$parent.tabs.push(this);
				}
			},
			beforeDestroy: function beforeDestroy() {
				if (this._tabset.active === this.index) {
					this._tabset.active = 0;
				}
				if (this._ingroup) {
					this.$parent.tabs.$remove(this);
				}
				this._tabset.tabs.$remove(this);
			}
		};
	}, function (module, exports) {

		module.exports = "<div role=\"tabpanel\" class=\"tab-pane active\" v-show=\"show\"\r\n    :class=\"{hide:!show}\"\r\n    :transition=\"transition\"\r\n  >\r\n    <slot></slot>\r\n  </div>";
	}, function (module, exports, __webpack_require__) {

		__webpack_require__(206);
		module.exports = __webpack_require__(208);

		if (module.exports.__esModule) module.exports = module.exports.default;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(209);
		if (false) {
			(function () {
				var hotAPI = require("vue-hot-reload-api");
				hotAPI.install(require("vue"));
				if (!hotAPI.compatible) return;
				var id = "-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./TabGroup.vue";
				hotAPI.createRecord(id, module.exports);
				module.hot.accept(["-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./TabGroup.vue", "-!vue-html-loader!./../node_modules/vue-loader/lib/template-rewriter.js?id=_v-7ecb8635&file=TabGroup.vue!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./TabGroup.vue"], function () {
					var newOptions = require("-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./TabGroup.vue");
					if (newOptions && newOptions.__esModule) newOptions = newOptions.default;
					var newTemplate = require("-!vue-html-loader!./../node_modules/vue-loader/lib/template-rewriter.js?id=_v-7ecb8635&file=TabGroup.vue!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./TabGroup.vue");
					hotAPI.update(id, newOptions, newTemplate);
				});
			})();
		}
	}, function (module, exports, __webpack_require__) {
		var content = __webpack_require__(207);
		if (typeof content === 'string') content = [[module.id, content, '']];

		var update = __webpack_require__(101)(content, {});
		if (content.locals) module.exports = content.locals;

		if (false) {
			if (!content.locals) {
				module.hot.accept("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js?id=_v-7ecb8635&file=TabGroup.vue&scoped=true!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./TabGroup.vue", function () {
					var newContent = require("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js?id=_v-7ecb8635&file=TabGroup.vue&scoped=true!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./TabGroup.vue");
					if (typeof newContent === 'string') newContent = [[module.id, newContent, '']];
					update(newContent);
				});
			}

			module.hot.dispose(function () {
				update();
			});
		}
	}, function (module, exports, __webpack_require__) {

		exports = module.exports = __webpack_require__(100)();

		exports.push([module.id, ".nav-tabs[_v-7ecb8635] {\r\n  margin-bottom: 15px;\r\n}", ""]);
	}, function (module, exports, __webpack_require__) {

		'use strict';

		Object.defineProperty(exports, "__esModule", {
			value: true
		});

		var _utils = __webpack_require__(92);

		exports.default = {
			props: {
				disabled: {
					type: Boolean,
					coerce: _utils.coerce.boolean,
					default: false
				},
				header: {
					type: String
				}
			},
			data: function data() {
				return {
					tabs: [],
					show: false
				};
			},

			computed: {
				active: function active() {
					return ~this.tabs.indexOf(this._tabset.show);
				}
			},
			created: function created() {
				this._tabgroup = true;
				var tabset = this.$parent && this.$parent._tabset === true ? this.$parent : {};
				if (this.$parent && this.$parent._tabgroup) {
					console.error('Can\'t nest tabgroups.');
				}
				while (tabset && !tabset._tabset && tabset.$parent) {
					tabset = tabset.$parent;
				}
				if (!tabset._tabset) {
					this._tabset = {};
					this.show = true;
					console.warn('Warning: tabgroup depend on tabset to work properly.');
				} else {
					this._tabset = tabset;
				}
			},

			methods: {
				blur: function blur() {
					this.show = false;
				},
				toggle: function toggle() {
					this.show = !this.show;
				}
			}
		};
	}, function (module, exports) {

		module.exports = "<slot _v-7ecb8635=\"\"></slot>";
	}, function (module, exports, __webpack_require__) {

		__webpack_require__(211);
		module.exports = __webpack_require__(213);

		if (module.exports.__esModule) module.exports = module.exports.default;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(214);
		if (false) {
			(function () {
				var hotAPI = require("vue-hot-reload-api");
				hotAPI.install(require("vue"));
				if (!hotAPI.compatible) return;
				var id = "-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Tabset.vue";
				hotAPI.createRecord(id, module.exports);
				module.hot.accept(["-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Tabset.vue", "-!vue-html-loader!./../node_modules/vue-loader/lib/template-rewriter.js?id=_v-e8aecb90&file=Tabset.vue!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./Tabset.vue"], function () {
					var newOptions = require("-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Tabset.vue");
					if (newOptions && newOptions.__esModule) newOptions = newOptions.default;
					var newTemplate = require("-!vue-html-loader!./../node_modules/vue-loader/lib/template-rewriter.js?id=_v-e8aecb90&file=Tabset.vue!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./Tabset.vue");
					hotAPI.update(id, newOptions, newTemplate);
				});
			})();
		}
	}, function (module, exports, __webpack_require__) {
		var content = __webpack_require__(212);
		if (typeof content === 'string') content = [[module.id, content, '']];

		var update = __webpack_require__(101)(content, {});
		if (content.locals) module.exports = content.locals;

		if (false) {
			if (!content.locals) {
				module.hot.accept("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js?id=_v-e8aecb90&file=Tabset.vue&scoped=true!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Tabset.vue", function () {
					var newContent = require("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js?id=_v-e8aecb90&file=Tabset.vue&scoped=true!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Tabset.vue");
					if (typeof newContent === 'string') newContent = [[module.id, newContent, '']];
					update(newContent);
				});
			}

			module.hot.dispose(function () {
				update();
			});
		}
	}, function (module, exports, __webpack_require__) {

		exports = module.exports = __webpack_require__(100)();

		exports.push([module.id, ".nav-tabs[_v-e8aecb90] {\r\n  margin-bottom: 15px;\r\n}", ""]);
	}, function (module, exports, __webpack_require__) {

		'use strict';

		Object.defineProperty(exports, "__esModule", {
			value: true
		});

		var _utils = __webpack_require__(92);

		var _Dropdown = __webpack_require__(127);

		var _Dropdown2 = _interopRequireDefault(_Dropdown);

		function _interopRequireDefault(obj) {
			return obj && obj.__esModule ? obj : { default: obj };
		}

		exports.default = {
			components: {
				dropdown: _Dropdown2.default
			},
			props: {
				navStyle: {
					type: String,
					default: 'tabs'
				},
				effect: {
					type: String,
					default: 'fadein'
				},
				active: {
					twoWay: true,
					type: Number,
					coerce: _utils.coerce.number,
					default: 0
				}
			},
			data: function data() {
				return {
					show: null,
					headers: [],
					tabs: []
				};
			},
			created: function created() {
				this._tabset = true;
			},

			watch: {
				active: function active(val) {
					this.show = this.tabs[val];
				}
			},
			ready: function ready() {
				this.show = this.tabs[this.active];
			},

			methods: {
				select: function select(tab) {
					if (!tab.disabled) {
						this.active = tab.index;
					}
				}
			}
		};
	}, function (module, exports) {

		module.exports = "<div _v-e8aecb90=\"\">\n    <!-- Nav tabs -->\n    <ul class=\"nav nav-{{navStyle}}\" role=\"tablist\" _v-e8aecb90=\"\">\n      <template v-for=\"t in headers\" _v-e8aecb90=\"\">\n        <li v-if=\"!t._tabgroup\" :class=\"{active:t.active, disabled:t.disabled}\" @click.prevent=\"select(t)\" _v-e8aecb90=\"\">\n          <a href=\"#\" _v-e8aecb90=\"\"><slot name=\"header\" _v-e8aecb90=\"\">{{{t.header}}}</slot></a>\n        </li>\n        <dropdown v-else=\"\" :text=\"t.header\" :class=\"{active:t.active}\" :disabled=\"t.disabled\" _v-e8aecb90=\"\">\n          <li v-for=\"tab in t.tabs\" :class=\"{disabled:tab.disabled}\" _v-e8aecb90=\"\"><a href=\"#\" @click.prevent=\"select(tab)\" _v-e8aecb90=\"\">{{tab.header}}</a></li>\n        </dropdown>\n      </template>\n    </ul>\n    <div class=\"tab-content\" v-el:tab-content=\"\" _v-e8aecb90=\"\">\n      <slot _v-e8aecb90=\"\"></slot>\n    </div>\n  </div>";
	}, function (module, exports, __webpack_require__) {

		__webpack_require__(216);
		module.exports = __webpack_require__(218);

		if (module.exports.__esModule) module.exports = module.exports.default;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(219);
		if (false) {
			(function () {
				var hotAPI = require("vue-hot-reload-api");
				hotAPI.install(require("vue"));
				if (!hotAPI.compatible) return;
				var id = "-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Tooltip.vue";
				hotAPI.createRecord(id, module.exports);
				module.hot.accept(["-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Tooltip.vue", "-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./Tooltip.vue"], function () {
					var newOptions = require("-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Tooltip.vue");
					if (newOptions && newOptions.__esModule) newOptions = newOptions.default;
					var newTemplate = require("-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./Tooltip.vue");
					hotAPI.update(id, newOptions, newTemplate);
				});
			})();
		}
	}, function (module, exports, __webpack_require__) {
		var content = __webpack_require__(217);
		if (typeof content === 'string') content = [[module.id, content, '']];

		var update = __webpack_require__(101)(content, {});
		if (content.locals) module.exports = content.locals;

		if (false) {
			if (!content.locals) {
				module.hot.accept("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js?id=_v-000c6bf0&file=Tooltip.vue!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Tooltip.vue", function () {
					var newContent = require("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js?id=_v-000c6bf0&file=Tooltip.vue!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Tooltip.vue");
					if (typeof newContent === 'string') newContent = [[module.id, newContent, '']];
					update(newContent);
				});
			}

			module.hot.dispose(function () {
				update();
			});
		}
	}, function (module, exports, __webpack_require__) {

		exports = module.exports = __webpack_require__(100)();

		exports.push([module.id, ".tooltip.top,\r\n.tooltip.left,\r\n.tooltip.right,\r\n.tooltip.bottom {\r\n  opacity: .9\r\n}\r\n.fadein-enter {\r\n  -webkit-animation:fadein-in 0.3s ease-in;\r\n          animation:fadein-in 0.3s ease-in;\r\n}\r\n.fadein-leave {\r\n  -webkit-animation:fadein-out 0.3s ease-out;\r\n          animation:fadein-out 0.3s ease-out;\r\n}\r\n@-webkit-keyframes fadein-in {\r\n  0% {\r\n    opacity: 0;\r\n  }\r\n  100% {\r\n    opacity: .9;\r\n  }\r\n}\r\n@keyframes fadein-in {\r\n  0% {\r\n    opacity: 0;\r\n  }\r\n  100% {\r\n    opacity: .9;\r\n  }\r\n}\r\n@-webkit-keyframes fadein-out {\r\n  0% {\r\n    opacity: .9;\r\n  }\r\n  100% {\r\n    opacity: 0;\r\n  }\r\n}\r\n@keyframes fadein-out {\r\n  0% {\r\n    opacity: .9;\r\n  }\r\n  100% {\r\n    opacity: 0;\r\n  }\r\n}", ""]);
	}, function (module, exports, __webpack_require__) {

		'use strict';

		Object.defineProperty(exports, "__esModule", {
			value: true
		});

		var _popoverMixins = __webpack_require__(164);

		var _popoverMixins2 = _interopRequireDefault(_popoverMixins);

		function _interopRequireDefault(obj) {
			return obj && obj.__esModule ? obj : { default: obj };
		}

		exports.default = {
			mixins: [_popoverMixins2.default],
			props: {
				trigger: {
					type: String,
					default: 'hover'
				},
				effect: {
					type: String,
					default: 'scale'
				}
			}
		};
	}, function (module, exports) {

		module.exports = "<span v-el:trigger>\r\n    <slot></slot>\r\n    <div v-el:popover v-if=\"show\" style=\"display:block;\"\r\n      :class=\"['tooltip',placement]\"\r\n      :transition=\"effect\"\r\n    >\r\n      <div class=\"tooltip-arrow\"></div>\r\n      <div class=\"tooltip-inner\">\r\n        <slot name=\"content\">{{{content}}}</slot>\r\n    </div>\r\n    </div>\r\n  </span>";
	}, function (module, exports, __webpack_require__) {

		__webpack_require__(221);
		module.exports = __webpack_require__(223);

		if (module.exports.__esModule) module.exports = module.exports.default;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(224);
		if (false) {
			(function () {
				var hotAPI = require("vue-hot-reload-api");
				hotAPI.install(require("vue"));
				if (!hotAPI.compatible) return;
				var id = "-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Typeahead.vue";
				hotAPI.createRecord(id, module.exports);
				module.hot.accept(["-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Typeahead.vue", "-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./Typeahead.vue"], function () {
					var newOptions = require("-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Typeahead.vue");
					if (newOptions && newOptions.__esModule) newOptions = newOptions.default;
					var newTemplate = require("-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./Typeahead.vue");
					hotAPI.update(id, newOptions, newTemplate);
				});
			})();
		}
	}, function (module, exports, __webpack_require__) {
		var content = __webpack_require__(222);
		if (typeof content === 'string') content = [[module.id, content, '']];

		var update = __webpack_require__(101)(content, {});
		if (content.locals) module.exports = content.locals;

		if (false) {
			if (!content.locals) {
				module.hot.accept("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js?id=_v-78dbe8e8&file=Typeahead.vue!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Typeahead.vue", function () {
					var newContent = require("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js?id=_v-78dbe8e8&file=Typeahead.vue!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Typeahead.vue");
					if (typeof newContent === 'string') newContent = [[module.id, newContent, '']];
					update(newContent);
				});
			}

			module.hot.dispose(function () {
				update();
			});
		}
	}, function (module, exports, __webpack_require__) {

		exports = module.exports = __webpack_require__(100)();

		exports.push([module.id, ".dropdown-menu > li > a {\r\n  cursor: pointer;\r\n}", ""]);
	}, function (module, exports, __webpack_require__) {

		'use strict';

		Object.defineProperty(exports, "__esModule", {
			value: true
		});

		var _utils = __webpack_require__(92);

		var Vue = window.Vue;

		var _DELAY_ = 200;

		exports.default = {
			created: function created() {
				this.items = this.primitiveData;
			},

			partials: {
				default: '<span v-html="item | highlight value"></span>'
			},
			props: {
				value: {
					twoWay: true,
					type: String,
					default: ''
				},
				data: {
					type: Array
				},
				limit: {
					type: Number,
					default: 8
				},
				async: {
					type: String
				},
				template: {
					type: String
				},
				templateName: {
					type: String,
					default: 'default'
				},
				key: {
					type: String,
					default: null
				},
				matchCase: {
					type: Boolean,
					coerce: _utils.coerce.boolean,
					default: false
				},
				matchStart: {
					type: Boolean,
					coerce: _utils.coerce.boolean,
					default: false
				},
				onHit: {
					type: Function,
					default: function _default(items) {
						this.reset();
						this.value = items;
					}
				},
				placeholder: {
					type: String
				},
				delay: {
					type: Number,
					default: _DELAY_,
					coerce: _utils.coerce.number
				}
			},
			data: function data() {
				return {
					showDropdown: false,
					noResults: true,
					current: 0,
					items: []
				};
			},

			computed: {
				primitiveData: function primitiveData() {
					var _this = this;

					if (this.data) {
						return this.data.filter(function (value) {
							value = _this.matchCase ? value : value.toLowerCase();
							var query = _this.matchCase ? _this.value : _this.value.toLowerCase();
							return _this.matchStart ? value.indexOf(query) === 0 : value.indexOf(query) !== -1;
						}).slice(0, this.limit);
					}
				}
			},
			ready: function ready() {
				if (this.templateName && this.templateName !== 'default') {
					Vue.partial(this.templateName, this.template);
				}
			},

			methods: {
				update: function update() {
					if (!this.value) {
						this.reset();
						return false;
					}
					if (this.data) {
						this.items = this.primitiveData;
						this.showDropdown = this.items.length > 0;
					}
					if (this.async) this.query();
				},

				query: (0, _utils.delayer)(function () {
					var _this2 = this;

					(0, _utils.getJSON)(this.async + this.value).then(function (data) {
						_this2.items = (_this2.key ? data[_this2.key] : data).slice(0, _this2.limit);
						_this2.showDropdown = _this2.items.length;
					});
				}, 'delay', _DELAY_),
				reset: function reset() {
					this.items = [];
					this.value = '';
					this.loading = false;
					this.showDropdown = false;
				},
				setActive: function setActive(index) {
					this.current = index;
				},
				isActive: function isActive(index) {
					return this.current === index;
				},
				hit: function hit(e) {
					e.preventDefault();
					this.onHit(this.items[this.current], this);
				},
				up: function up() {
					if (this.current > 0) this.current--;
				},
				down: function down() {
					if (this.current < this.items.length - 1) this.current++;
				}
			},
			filters: {
				highlight: function highlight(value, phrase) {
					return value.replace(new RegExp('(' + phrase + ')', 'gi'), '<strong>$1</strong>');
				}
			}
		};
	}, function (module, exports) {

		module.exports = "<div style=\"position: relative\"\r\n       v-bind:class=\"{'open':showDropdown}\"\r\n  >\r\n    <input type=\"text\" class=\"form-control\"\r\n      :placeholder=\"placeholder\"\r\n      autocomplete=\"off\"\r\n      v-model=\"value\"\r\n      @input=\"update\"\r\n      @keydown.up=\"up\"\r\n      @keydown.down=\"down\"\r\n      @keydown.enter= \"hit\"\r\n      @keydown.esc=\"reset\"\r\n      @blur=\"showDropdown = false\"\r\n    />\r\n    <ul class=\"dropdown-menu\" v-el:dropdown>\r\n      <li v-for=\"item in items\" v-bind:class=\"{'active': isActive($index)}\">\r\n        <a @mousedown.prevent=\"hit\" @mousemove=\"setActive($index)\">\r\n          <partial :name=\"templateName\"></partial>\r\n        </a>\r\n      </li>\r\n    </ul>\r\n  </div>";
	}]);
});
;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(26)(module)))

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App_vue__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__App_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__router__ = __webpack_require__(6);




new __WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */]({
  el: '#app',
  router: __WEBPACK_IMPORTED_MODULE_2__router__["a" /* default */],
  template: '<App />',
  components: { App: __WEBPACK_IMPORTED_MODULE_1__App_vue___default.a }
});

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

var Buttons = function Buttons(resolve) {
  return __webpack_require__.e/* require */(8).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(48)]; (resolve.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
};
var SocialButtons = function SocialButtons(resolve) {
  return __webpack_require__.e/* require */(1).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(52)]; (resolve.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
};
var Cards = function Cards(resolve) {
  return __webpack_require__.e/* require */(7).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(49)]; (resolve.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
};
var Forms = function Forms(resolve) {
  return __webpack_require__.e/* require */(6).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(50)]; (resolve.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
};
var Modals = function Modals(resolve) {
  return __webpack_require__.e/* require */(0).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(51)]; (resolve.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
};
var Switches = function Switches(resolve) {
  return __webpack_require__.e/* require */(5).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(53)]; (resolve.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
};
var Tables = function Tables(resolve) {
  return __webpack_require__.e/* require */(4).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(54)]; (resolve.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
};

/* harmony default export */ __webpack_exports__["a"] = ([{
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
}]);

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

var FontAwesome = function FontAwesome(resolve) {
  return __webpack_require__.e/* require */(3).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(55)]; (resolve.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
};
var SimpleLineIcons = function SimpleLineIcons(resolve) {
  return __webpack_require__.e/* require */(2).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(56)]; (resolve.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
};

/* harmony default export */ __webpack_exports__["a"] = ([{
  path: 'font-awesome',
  name: 'Font Awesome',
  component: FontAwesome
}, {
  path: 'simple-line-icons',
  name: 'Simple Line Icons',
  component: SimpleLineIcons
}]);

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.byteLength = byteLength;
exports.toByteArray = toByteArray;
exports.fromByteArray = fromByteArray;

var lookup = [];
var revLookup = [];
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array;

var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
for (var i = 0, len = code.length; i < len; ++i) {
  lookup[i] = code[i];
  revLookup[code.charCodeAt(i)] = i;
}

revLookup['-'.charCodeAt(0)] = 62;
revLookup['_'.charCodeAt(0)] = 63;

function placeHoldersCount(b64) {
  var len = b64.length;
  if (len % 4 > 0) {
    throw new Error('Invalid string. Length must be a multiple of 4');
  }

  return b64[len - 2] === '=' ? 2 : b64[len - 1] === '=' ? 1 : 0;
}

function byteLength(b64) {
  return b64.length * 3 / 4 - placeHoldersCount(b64);
}

function toByteArray(b64) {
  var i, j, l, tmp, placeHolders, arr;
  var len = b64.length;
  placeHolders = placeHoldersCount(b64);

  arr = new Arr(len * 3 / 4 - placeHolders);

  l = placeHolders > 0 ? len - 4 : len;

  var L = 0;

  for (i = 0, j = 0; i < l; i += 4, j += 3) {
    tmp = revLookup[b64.charCodeAt(i)] << 18 | revLookup[b64.charCodeAt(i + 1)] << 12 | revLookup[b64.charCodeAt(i + 2)] << 6 | revLookup[b64.charCodeAt(i + 3)];
    arr[L++] = tmp >> 16 & 0xFF;
    arr[L++] = tmp >> 8 & 0xFF;
    arr[L++] = tmp & 0xFF;
  }

  if (placeHolders === 2) {
    tmp = revLookup[b64.charCodeAt(i)] << 2 | revLookup[b64.charCodeAt(i + 1)] >> 4;
    arr[L++] = tmp & 0xFF;
  } else if (placeHolders === 1) {
    tmp = revLookup[b64.charCodeAt(i)] << 10 | revLookup[b64.charCodeAt(i + 1)] << 4 | revLookup[b64.charCodeAt(i + 2)] >> 2;
    arr[L++] = tmp >> 8 & 0xFF;
    arr[L++] = tmp & 0xFF;
  }

  return arr;
}

function tripletToBase64(num) {
  return lookup[num >> 18 & 0x3F] + lookup[num >> 12 & 0x3F] + lookup[num >> 6 & 0x3F] + lookup[num & 0x3F];
}

function encodeChunk(uint8, start, end) {
  var tmp;
  var output = [];
  for (var i = start; i < end; i += 3) {
    tmp = (uint8[i] << 16) + (uint8[i + 1] << 8) + uint8[i + 2];
    output.push(tripletToBase64(tmp));
  }
  return output.join('');
}

function fromByteArray(uint8) {
  var tmp;
  var len = uint8.length;
  var extraBytes = len % 3;
  var output = '';
  var parts = [];
  var maxChunkLength = 16383;
  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
    parts.push(encodeChunk(uint8, i, i + maxChunkLength > len2 ? len2 : i + maxChunkLength));
  }

  if (extraBytes === 1) {
    tmp = uint8[len - 1];
    output += lookup[tmp >> 2];
    output += lookup[tmp << 4 & 0x3F];
    output += '==';
  } else if (extraBytes === 2) {
    tmp = (uint8[len - 2] << 8) + uint8[len - 1];
    output += lookup[tmp >> 10];
    output += lookup[tmp >> 4 & 0x3F];
    output += lookup[tmp << 2 & 0x3F];
    output += '=';
  }

  parts.push(output);

  return parts.join('');
}

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */


var base64 = __webpack_require__(12);
var ieee754 = __webpack_require__(14);
var isArray = __webpack_require__(15);

exports.Buffer = Buffer;
exports.SlowBuffer = SlowBuffer;
exports.INSPECT_MAX_BYTES = 50;

Buffer.TYPED_ARRAY_SUPPORT = global.TYPED_ARRAY_SUPPORT !== undefined ? global.TYPED_ARRAY_SUPPORT : typedArraySupport();

exports.kMaxLength = kMaxLength();

function typedArraySupport() {
  try {
    var arr = new Uint8Array(1);
    arr.__proto__ = { __proto__: Uint8Array.prototype, foo: function foo() {
        return 42;
      } };
    return arr.foo() === 42 && typeof arr.subarray === 'function' && arr.subarray(1, 1).byteLength === 0;
  } catch (e) {
    return false;
  }
}

function kMaxLength() {
  return Buffer.TYPED_ARRAY_SUPPORT ? 0x7fffffff : 0x3fffffff;
}

function createBuffer(that, length) {
  if (kMaxLength() < length) {
    throw new RangeError('Invalid typed array length');
  }
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    that = new Uint8Array(length);
    that.__proto__ = Buffer.prototype;
  } else {
    if (that === null) {
      that = new Buffer(length);
    }
    that.length = length;
  }

  return that;
}

function Buffer(arg, encodingOrOffset, length) {
  if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
    return new Buffer(arg, encodingOrOffset, length);
  }

  if (typeof arg === 'number') {
    if (typeof encodingOrOffset === 'string') {
      throw new Error('If encoding is specified then the first argument must be a string');
    }
    return allocUnsafe(this, arg);
  }
  return from(this, arg, encodingOrOffset, length);
}

Buffer.poolSize = 8192;
Buffer._augment = function (arr) {
  arr.__proto__ = Buffer.prototype;
  return arr;
};

function from(that, value, encodingOrOffset, length) {
  if (typeof value === 'number') {
    throw new TypeError('"value" argument must not be a number');
  }

  if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
    return fromArrayBuffer(that, value, encodingOrOffset, length);
  }

  if (typeof value === 'string') {
    return fromString(that, value, encodingOrOffset);
  }

  return fromObject(that, value);
}

Buffer.from = function (value, encodingOrOffset, length) {
  return from(null, value, encodingOrOffset, length);
};

if (Buffer.TYPED_ARRAY_SUPPORT) {
  Buffer.prototype.__proto__ = Uint8Array.prototype;
  Buffer.__proto__ = Uint8Array;
  if (typeof Symbol !== 'undefined' && Symbol.species && Buffer[Symbol.species] === Buffer) {
    Object.defineProperty(Buffer, Symbol.species, {
      value: null,
      configurable: true
    });
  }
}

function assertSize(size) {
  if (typeof size !== 'number') {
    throw new TypeError('"size" argument must be a number');
  } else if (size < 0) {
    throw new RangeError('"size" argument must not be negative');
  }
}

function alloc(that, size, fill, encoding) {
  assertSize(size);
  if (size <= 0) {
    return createBuffer(that, size);
  }
  if (fill !== undefined) {
    return typeof encoding === 'string' ? createBuffer(that, size).fill(fill, encoding) : createBuffer(that, size).fill(fill);
  }
  return createBuffer(that, size);
}

Buffer.alloc = function (size, fill, encoding) {
  return alloc(null, size, fill, encoding);
};

function allocUnsafe(that, size) {
  assertSize(size);
  that = createBuffer(that, size < 0 ? 0 : checked(size) | 0);
  if (!Buffer.TYPED_ARRAY_SUPPORT) {
    for (var i = 0; i < size; ++i) {
      that[i] = 0;
    }
  }
  return that;
}

Buffer.allocUnsafe = function (size) {
  return allocUnsafe(null, size);
};

Buffer.allocUnsafeSlow = function (size) {
  return allocUnsafe(null, size);
};

function fromString(that, string, encoding) {
  if (typeof encoding !== 'string' || encoding === '') {
    encoding = 'utf8';
  }

  if (!Buffer.isEncoding(encoding)) {
    throw new TypeError('"encoding" must be a valid string encoding');
  }

  var length = byteLength(string, encoding) | 0;
  that = createBuffer(that, length);

  var actual = that.write(string, encoding);

  if (actual !== length) {
    that = that.slice(0, actual);
  }

  return that;
}

function fromArrayLike(that, array) {
  var length = array.length < 0 ? 0 : checked(array.length) | 0;
  that = createBuffer(that, length);
  for (var i = 0; i < length; i += 1) {
    that[i] = array[i] & 255;
  }
  return that;
}

function fromArrayBuffer(that, array, byteOffset, length) {
  array.byteLength;

  if (byteOffset < 0 || array.byteLength < byteOffset) {
    throw new RangeError('\'offset\' is out of bounds');
  }

  if (array.byteLength < byteOffset + (length || 0)) {
    throw new RangeError('\'length\' is out of bounds');
  }

  if (byteOffset === undefined && length === undefined) {
    array = new Uint8Array(array);
  } else if (length === undefined) {
    array = new Uint8Array(array, byteOffset);
  } else {
    array = new Uint8Array(array, byteOffset, length);
  }

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    that = array;
    that.__proto__ = Buffer.prototype;
  } else {
    that = fromArrayLike(that, array);
  }
  return that;
}

function fromObject(that, obj) {
  if (Buffer.isBuffer(obj)) {
    var len = checked(obj.length) | 0;
    that = createBuffer(that, len);

    if (that.length === 0) {
      return that;
    }

    obj.copy(that, 0, 0, len);
    return that;
  }

  if (obj) {
    if (typeof ArrayBuffer !== 'undefined' && obj.buffer instanceof ArrayBuffer || 'length' in obj) {
      if (typeof obj.length !== 'number' || isnan(obj.length)) {
        return createBuffer(that, 0);
      }
      return fromArrayLike(that, obj);
    }

    if (obj.type === 'Buffer' && isArray(obj.data)) {
      return fromArrayLike(that, obj.data);
    }
  }

  throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.');
}

function checked(length) {
  if (length >= kMaxLength()) {
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' + 'size: 0x' + kMaxLength().toString(16) + ' bytes');
  }
  return length | 0;
}

function SlowBuffer(length) {
  if (+length != length) {
    length = 0;
  }
  return Buffer.alloc(+length);
}

Buffer.isBuffer = function isBuffer(b) {
  return !!(b != null && b._isBuffer);
};

Buffer.compare = function compare(a, b) {
  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
    throw new TypeError('Arguments must be Buffers');
  }

  if (a === b) return 0;

  var x = a.length;
  var y = b.length;

  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i];
      y = b[i];
      break;
    }
  }

  if (x < y) return -1;
  if (y < x) return 1;
  return 0;
};

Buffer.isEncoding = function isEncoding(encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'latin1':
    case 'binary':
    case 'base64':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true;
    default:
      return false;
  }
};

Buffer.concat = function concat(list, length) {
  if (!isArray(list)) {
    throw new TypeError('"list" argument must be an Array of Buffers');
  }

  if (list.length === 0) {
    return Buffer.alloc(0);
  }

  var i;
  if (length === undefined) {
    length = 0;
    for (i = 0; i < list.length; ++i) {
      length += list[i].length;
    }
  }

  var buffer = Buffer.allocUnsafe(length);
  var pos = 0;
  for (i = 0; i < list.length; ++i) {
    var buf = list[i];
    if (!Buffer.isBuffer(buf)) {
      throw new TypeError('"list" argument must be an Array of Buffers');
    }
    buf.copy(buffer, pos);
    pos += buf.length;
  }
  return buffer;
};

function byteLength(string, encoding) {
  if (Buffer.isBuffer(string)) {
    return string.length;
  }
  if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' && (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
    return string.byteLength;
  }
  if (typeof string !== 'string') {
    string = '' + string;
  }

  var len = string.length;
  if (len === 0) return 0;

  var loweredCase = false;
  for (;;) {
    switch (encoding) {
      case 'ascii':
      case 'latin1':
      case 'binary':
        return len;
      case 'utf8':
      case 'utf-8':
      case undefined:
        return utf8ToBytes(string).length;
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return len * 2;
      case 'hex':
        return len >>> 1;
      case 'base64':
        return base64ToBytes(string).length;
      default:
        if (loweredCase) return utf8ToBytes(string).length;
        encoding = ('' + encoding).toLowerCase();
        loweredCase = true;
    }
  }
}
Buffer.byteLength = byteLength;

function slowToString(encoding, start, end) {
  var loweredCase = false;

  if (start === undefined || start < 0) {
    start = 0;
  }

  if (start > this.length) {
    return '';
  }

  if (end === undefined || end > this.length) {
    end = this.length;
  }

  if (end <= 0) {
    return '';
  }

  end >>>= 0;
  start >>>= 0;

  if (end <= start) {
    return '';
  }

  if (!encoding) encoding = 'utf8';

  while (true) {
    switch (encoding) {
      case 'hex':
        return hexSlice(this, start, end);

      case 'utf8':
      case 'utf-8':
        return utf8Slice(this, start, end);

      case 'ascii':
        return asciiSlice(this, start, end);

      case 'latin1':
      case 'binary':
        return latin1Slice(this, start, end);

      case 'base64':
        return base64Slice(this, start, end);

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return utf16leSlice(this, start, end);

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding);
        encoding = (encoding + '').toLowerCase();
        loweredCase = true;
    }
  }
}

Buffer.prototype._isBuffer = true;

function swap(b, n, m) {
  var i = b[n];
  b[n] = b[m];
  b[m] = i;
}

Buffer.prototype.swap16 = function swap16() {
  var len = this.length;
  if (len % 2 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 16-bits');
  }
  for (var i = 0; i < len; i += 2) {
    swap(this, i, i + 1);
  }
  return this;
};

Buffer.prototype.swap32 = function swap32() {
  var len = this.length;
  if (len % 4 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 32-bits');
  }
  for (var i = 0; i < len; i += 4) {
    swap(this, i, i + 3);
    swap(this, i + 1, i + 2);
  }
  return this;
};

Buffer.prototype.swap64 = function swap64() {
  var len = this.length;
  if (len % 8 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 64-bits');
  }
  for (var i = 0; i < len; i += 8) {
    swap(this, i, i + 7);
    swap(this, i + 1, i + 6);
    swap(this, i + 2, i + 5);
    swap(this, i + 3, i + 4);
  }
  return this;
};

Buffer.prototype.toString = function toString() {
  var length = this.length | 0;
  if (length === 0) return '';
  if (arguments.length === 0) return utf8Slice(this, 0, length);
  return slowToString.apply(this, arguments);
};

Buffer.prototype.equals = function equals(b) {
  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer');
  if (this === b) return true;
  return Buffer.compare(this, b) === 0;
};

Buffer.prototype.inspect = function inspect() {
  var str = '';
  var max = exports.INSPECT_MAX_BYTES;
  if (this.length > 0) {
    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ');
    if (this.length > max) str += ' ... ';
  }
  return '<Buffer ' + str + '>';
};

Buffer.prototype.compare = function compare(target, start, end, thisStart, thisEnd) {
  if (!Buffer.isBuffer(target)) {
    throw new TypeError('Argument must be a Buffer');
  }

  if (start === undefined) {
    start = 0;
  }
  if (end === undefined) {
    end = target ? target.length : 0;
  }
  if (thisStart === undefined) {
    thisStart = 0;
  }
  if (thisEnd === undefined) {
    thisEnd = this.length;
  }

  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
    throw new RangeError('out of range index');
  }

  if (thisStart >= thisEnd && start >= end) {
    return 0;
  }
  if (thisStart >= thisEnd) {
    return -1;
  }
  if (start >= end) {
    return 1;
  }

  start >>>= 0;
  end >>>= 0;
  thisStart >>>= 0;
  thisEnd >>>= 0;

  if (this === target) return 0;

  var x = thisEnd - thisStart;
  var y = end - start;
  var len = Math.min(x, y);

  var thisCopy = this.slice(thisStart, thisEnd);
  var targetCopy = target.slice(start, end);

  for (var i = 0; i < len; ++i) {
    if (thisCopy[i] !== targetCopy[i]) {
      x = thisCopy[i];
      y = targetCopy[i];
      break;
    }
  }

  if (x < y) return -1;
  if (y < x) return 1;
  return 0;
};

function bidirectionalIndexOf(buffer, val, byteOffset, encoding, dir) {
  if (buffer.length === 0) return -1;

  if (typeof byteOffset === 'string') {
    encoding = byteOffset;
    byteOffset = 0;
  } else if (byteOffset > 0x7fffffff) {
    byteOffset = 0x7fffffff;
  } else if (byteOffset < -0x80000000) {
    byteOffset = -0x80000000;
  }
  byteOffset = +byteOffset;
  if (isNaN(byteOffset)) {
    byteOffset = dir ? 0 : buffer.length - 1;
  }

  if (byteOffset < 0) byteOffset = buffer.length + byteOffset;
  if (byteOffset >= buffer.length) {
    if (dir) return -1;else byteOffset = buffer.length - 1;
  } else if (byteOffset < 0) {
    if (dir) byteOffset = 0;else return -1;
  }

  if (typeof val === 'string') {
    val = Buffer.from(val, encoding);
  }

  if (Buffer.isBuffer(val)) {
    if (val.length === 0) {
      return -1;
    }
    return arrayIndexOf(buffer, val, byteOffset, encoding, dir);
  } else if (typeof val === 'number') {
    val = val & 0xFF;
    if (Buffer.TYPED_ARRAY_SUPPORT && typeof Uint8Array.prototype.indexOf === 'function') {
      if (dir) {
        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset);
      } else {
        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset);
      }
    }
    return arrayIndexOf(buffer, [val], byteOffset, encoding, dir);
  }

  throw new TypeError('val must be string, number or Buffer');
}

function arrayIndexOf(arr, val, byteOffset, encoding, dir) {
  var indexSize = 1;
  var arrLength = arr.length;
  var valLength = val.length;

  if (encoding !== undefined) {
    encoding = String(encoding).toLowerCase();
    if (encoding === 'ucs2' || encoding === 'ucs-2' || encoding === 'utf16le' || encoding === 'utf-16le') {
      if (arr.length < 2 || val.length < 2) {
        return -1;
      }
      indexSize = 2;
      arrLength /= 2;
      valLength /= 2;
      byteOffset /= 2;
    }
  }

  function read(buf, i) {
    if (indexSize === 1) {
      return buf[i];
    } else {
      return buf.readUInt16BE(i * indexSize);
    }
  }

  var i;
  if (dir) {
    var foundIndex = -1;
    for (i = byteOffset; i < arrLength; i++) {
      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
        if (foundIndex === -1) foundIndex = i;
        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize;
      } else {
        if (foundIndex !== -1) i -= i - foundIndex;
        foundIndex = -1;
      }
    }
  } else {
    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength;
    for (i = byteOffset; i >= 0; i--) {
      var found = true;
      for (var j = 0; j < valLength; j++) {
        if (read(arr, i + j) !== read(val, j)) {
          found = false;
          break;
        }
      }
      if (found) return i;
    }
  }

  return -1;
}

Buffer.prototype.includes = function includes(val, byteOffset, encoding) {
  return this.indexOf(val, byteOffset, encoding) !== -1;
};

Buffer.prototype.indexOf = function indexOf(val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, true);
};

Buffer.prototype.lastIndexOf = function lastIndexOf(val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, false);
};

function hexWrite(buf, string, offset, length) {
  offset = Number(offset) || 0;
  var remaining = buf.length - offset;
  if (!length) {
    length = remaining;
  } else {
    length = Number(length);
    if (length > remaining) {
      length = remaining;
    }
  }

  var strLen = string.length;
  if (strLen % 2 !== 0) throw new TypeError('Invalid hex string');

  if (length > strLen / 2) {
    length = strLen / 2;
  }
  for (var i = 0; i < length; ++i) {
    var parsed = parseInt(string.substr(i * 2, 2), 16);
    if (isNaN(parsed)) return i;
    buf[offset + i] = parsed;
  }
  return i;
}

function utf8Write(buf, string, offset, length) {
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length);
}

function asciiWrite(buf, string, offset, length) {
  return blitBuffer(asciiToBytes(string), buf, offset, length);
}

function latin1Write(buf, string, offset, length) {
  return asciiWrite(buf, string, offset, length);
}

function base64Write(buf, string, offset, length) {
  return blitBuffer(base64ToBytes(string), buf, offset, length);
}

function ucs2Write(buf, string, offset, length) {
  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length);
}

Buffer.prototype.write = function write(string, offset, length, encoding) {
  if (offset === undefined) {
    encoding = 'utf8';
    length = this.length;
    offset = 0;
  } else if (length === undefined && typeof offset === 'string') {
    encoding = offset;
    length = this.length;
    offset = 0;
  } else if (isFinite(offset)) {
    offset = offset | 0;
    if (isFinite(length)) {
      length = length | 0;
      if (encoding === undefined) encoding = 'utf8';
    } else {
      encoding = length;
      length = undefined;
    }
  } else {
    throw new Error('Buffer.write(string, encoding, offset[, length]) is no longer supported');
  }

  var remaining = this.length - offset;
  if (length === undefined || length > remaining) length = remaining;

  if (string.length > 0 && (length < 0 || offset < 0) || offset > this.length) {
    throw new RangeError('Attempt to write outside buffer bounds');
  }

  if (!encoding) encoding = 'utf8';

  var loweredCase = false;
  for (;;) {
    switch (encoding) {
      case 'hex':
        return hexWrite(this, string, offset, length);

      case 'utf8':
      case 'utf-8':
        return utf8Write(this, string, offset, length);

      case 'ascii':
        return asciiWrite(this, string, offset, length);

      case 'latin1':
      case 'binary':
        return latin1Write(this, string, offset, length);

      case 'base64':
        return base64Write(this, string, offset, length);

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return ucs2Write(this, string, offset, length);

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding);
        encoding = ('' + encoding).toLowerCase();
        loweredCase = true;
    }
  }
};

Buffer.prototype.toJSON = function toJSON() {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  };
};

function base64Slice(buf, start, end) {
  if (start === 0 && end === buf.length) {
    return base64.fromByteArray(buf);
  } else {
    return base64.fromByteArray(buf.slice(start, end));
  }
}

function utf8Slice(buf, start, end) {
  end = Math.min(buf.length, end);
  var res = [];

  var i = start;
  while (i < end) {
    var firstByte = buf[i];
    var codePoint = null;
    var bytesPerSequence = firstByte > 0xEF ? 4 : firstByte > 0xDF ? 3 : firstByte > 0xBF ? 2 : 1;

    if (i + bytesPerSequence <= end) {
      var secondByte, thirdByte, fourthByte, tempCodePoint;

      switch (bytesPerSequence) {
        case 1:
          if (firstByte < 0x80) {
            codePoint = firstByte;
          }
          break;
        case 2:
          secondByte = buf[i + 1];
          if ((secondByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0x1F) << 0x6 | secondByte & 0x3F;
            if (tempCodePoint > 0x7F) {
              codePoint = tempCodePoint;
            }
          }
          break;
        case 3:
          secondByte = buf[i + 1];
          thirdByte = buf[i + 2];
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | thirdByte & 0x3F;
            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
              codePoint = tempCodePoint;
            }
          }
          break;
        case 4:
          secondByte = buf[i + 1];
          thirdByte = buf[i + 2];
          fourthByte = buf[i + 3];
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | fourthByte & 0x3F;
            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
              codePoint = tempCodePoint;
            }
          }
      }
    }

    if (codePoint === null) {
      codePoint = 0xFFFD;
      bytesPerSequence = 1;
    } else if (codePoint > 0xFFFF) {
      codePoint -= 0x10000;
      res.push(codePoint >>> 10 & 0x3FF | 0xD800);
      codePoint = 0xDC00 | codePoint & 0x3FF;
    }

    res.push(codePoint);
    i += bytesPerSequence;
  }

  return decodeCodePointsArray(res);
}

var MAX_ARGUMENTS_LENGTH = 0x1000;

function decodeCodePointsArray(codePoints) {
  var len = codePoints.length;
  if (len <= MAX_ARGUMENTS_LENGTH) {
    return String.fromCharCode.apply(String, codePoints);
  }

  var res = '';
  var i = 0;
  while (i < len) {
    res += String.fromCharCode.apply(String, codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH));
  }
  return res;
}

function asciiSlice(buf, start, end) {
  var ret = '';
  end = Math.min(buf.length, end);

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i] & 0x7F);
  }
  return ret;
}

function latin1Slice(buf, start, end) {
  var ret = '';
  end = Math.min(buf.length, end);

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i]);
  }
  return ret;
}

function hexSlice(buf, start, end) {
  var len = buf.length;

  if (!start || start < 0) start = 0;
  if (!end || end < 0 || end > len) end = len;

  var out = '';
  for (var i = start; i < end; ++i) {
    out += toHex(buf[i]);
  }
  return out;
}

function utf16leSlice(buf, start, end) {
  var bytes = buf.slice(start, end);
  var res = '';
  for (var i = 0; i < bytes.length; i += 2) {
    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256);
  }
  return res;
}

Buffer.prototype.slice = function slice(start, end) {
  var len = this.length;
  start = ~~start;
  end = end === undefined ? len : ~~end;

  if (start < 0) {
    start += len;
    if (start < 0) start = 0;
  } else if (start > len) {
    start = len;
  }

  if (end < 0) {
    end += len;
    if (end < 0) end = 0;
  } else if (end > len) {
    end = len;
  }

  if (end < start) end = start;

  var newBuf;
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    newBuf = this.subarray(start, end);
    newBuf.__proto__ = Buffer.prototype;
  } else {
    var sliceLen = end - start;
    newBuf = new Buffer(sliceLen, undefined);
    for (var i = 0; i < sliceLen; ++i) {
      newBuf[i] = this[i + start];
    }
  }

  return newBuf;
};

function checkOffset(offset, ext, length) {
  if (offset % 1 !== 0 || offset < 0) throw new RangeError('offset is not uint');
  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length');
}

Buffer.prototype.readUIntLE = function readUIntLE(offset, byteLength, noAssert) {
  offset = offset | 0;
  byteLength = byteLength | 0;
  if (!noAssert) checkOffset(offset, byteLength, this.length);

  var val = this[offset];
  var mul = 1;
  var i = 0;
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul;
  }

  return val;
};

Buffer.prototype.readUIntBE = function readUIntBE(offset, byteLength, noAssert) {
  offset = offset | 0;
  byteLength = byteLength | 0;
  if (!noAssert) {
    checkOffset(offset, byteLength, this.length);
  }

  var val = this[offset + --byteLength];
  var mul = 1;
  while (byteLength > 0 && (mul *= 0x100)) {
    val += this[offset + --byteLength] * mul;
  }

  return val;
};

Buffer.prototype.readUInt8 = function readUInt8(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length);
  return this[offset];
};

Buffer.prototype.readUInt16LE = function readUInt16LE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length);
  return this[offset] | this[offset + 1] << 8;
};

Buffer.prototype.readUInt16BE = function readUInt16BE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length);
  return this[offset] << 8 | this[offset + 1];
};

Buffer.prototype.readUInt32LE = function readUInt32LE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length);

  return (this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16) + this[offset + 3] * 0x1000000;
};

Buffer.prototype.readUInt32BE = function readUInt32BE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length);

  return this[offset] * 0x1000000 + (this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3]);
};

Buffer.prototype.readIntLE = function readIntLE(offset, byteLength, noAssert) {
  offset = offset | 0;
  byteLength = byteLength | 0;
  if (!noAssert) checkOffset(offset, byteLength, this.length);

  var val = this[offset];
  var mul = 1;
  var i = 0;
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul;
  }
  mul *= 0x80;

  if (val >= mul) val -= Math.pow(2, 8 * byteLength);

  return val;
};

Buffer.prototype.readIntBE = function readIntBE(offset, byteLength, noAssert) {
  offset = offset | 0;
  byteLength = byteLength | 0;
  if (!noAssert) checkOffset(offset, byteLength, this.length);

  var i = byteLength;
  var mul = 1;
  var val = this[offset + --i];
  while (i > 0 && (mul *= 0x100)) {
    val += this[offset + --i] * mul;
  }
  mul *= 0x80;

  if (val >= mul) val -= Math.pow(2, 8 * byteLength);

  return val;
};

Buffer.prototype.readInt8 = function readInt8(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length);
  if (!(this[offset] & 0x80)) return this[offset];
  return (0xff - this[offset] + 1) * -1;
};

Buffer.prototype.readInt16LE = function readInt16LE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length);
  var val = this[offset] | this[offset + 1] << 8;
  return val & 0x8000 ? val | 0xFFFF0000 : val;
};

Buffer.prototype.readInt16BE = function readInt16BE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length);
  var val = this[offset + 1] | this[offset] << 8;
  return val & 0x8000 ? val | 0xFFFF0000 : val;
};

Buffer.prototype.readInt32LE = function readInt32LE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length);

  return this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16 | this[offset + 3] << 24;
};

Buffer.prototype.readInt32BE = function readInt32BE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length);

  return this[offset] << 24 | this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3];
};

Buffer.prototype.readFloatLE = function readFloatLE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length);
  return ieee754.read(this, offset, true, 23, 4);
};

Buffer.prototype.readFloatBE = function readFloatBE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length);
  return ieee754.read(this, offset, false, 23, 4);
};

Buffer.prototype.readDoubleLE = function readDoubleLE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length);
  return ieee754.read(this, offset, true, 52, 8);
};

Buffer.prototype.readDoubleBE = function readDoubleBE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length);
  return ieee754.read(this, offset, false, 52, 8);
};

function checkInt(buf, value, offset, ext, max, min) {
  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance');
  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds');
  if (offset + ext > buf.length) throw new RangeError('Index out of range');
}

Buffer.prototype.writeUIntLE = function writeUIntLE(value, offset, byteLength, noAssert) {
  value = +value;
  offset = offset | 0;
  byteLength = byteLength | 0;
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1;
    checkInt(this, value, offset, byteLength, maxBytes, 0);
  }

  var mul = 1;
  var i = 0;
  this[offset] = value & 0xFF;
  while (++i < byteLength && (mul *= 0x100)) {
    this[offset + i] = value / mul & 0xFF;
  }

  return offset + byteLength;
};

Buffer.prototype.writeUIntBE = function writeUIntBE(value, offset, byteLength, noAssert) {
  value = +value;
  offset = offset | 0;
  byteLength = byteLength | 0;
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1;
    checkInt(this, value, offset, byteLength, maxBytes, 0);
  }

  var i = byteLength - 1;
  var mul = 1;
  this[offset + i] = value & 0xFF;
  while (--i >= 0 && (mul *= 0x100)) {
    this[offset + i] = value / mul & 0xFF;
  }

  return offset + byteLength;
};

Buffer.prototype.writeUInt8 = function writeUInt8(value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0);
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value);
  this[offset] = value & 0xff;
  return offset + 1;
};

function objectWriteUInt16(buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffff + value + 1;
  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
    buf[offset + i] = (value & 0xff << 8 * (littleEndian ? i : 1 - i)) >>> (littleEndian ? i : 1 - i) * 8;
  }
}

Buffer.prototype.writeUInt16LE = function writeUInt16LE(value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0);
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = value & 0xff;
    this[offset + 1] = value >>> 8;
  } else {
    objectWriteUInt16(this, value, offset, true);
  }
  return offset + 2;
};

Buffer.prototype.writeUInt16BE = function writeUInt16BE(value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0);
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = value >>> 8;
    this[offset + 1] = value & 0xff;
  } else {
    objectWriteUInt16(this, value, offset, false);
  }
  return offset + 2;
};

function objectWriteUInt32(buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffffffff + value + 1;
  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
    buf[offset + i] = value >>> (littleEndian ? i : 3 - i) * 8 & 0xff;
  }
}

Buffer.prototype.writeUInt32LE = function writeUInt32LE(value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0);
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset + 3] = value >>> 24;
    this[offset + 2] = value >>> 16;
    this[offset + 1] = value >>> 8;
    this[offset] = value & 0xff;
  } else {
    objectWriteUInt32(this, value, offset, true);
  }
  return offset + 4;
};

Buffer.prototype.writeUInt32BE = function writeUInt32BE(value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0);
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = value >>> 24;
    this[offset + 1] = value >>> 16;
    this[offset + 2] = value >>> 8;
    this[offset + 3] = value & 0xff;
  } else {
    objectWriteUInt32(this, value, offset, false);
  }
  return offset + 4;
};

Buffer.prototype.writeIntLE = function writeIntLE(value, offset, byteLength, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1);

    checkInt(this, value, offset, byteLength, limit - 1, -limit);
  }

  var i = 0;
  var mul = 1;
  var sub = 0;
  this[offset] = value & 0xFF;
  while (++i < byteLength && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
      sub = 1;
    }
    this[offset + i] = (value / mul >> 0) - sub & 0xFF;
  }

  return offset + byteLength;
};

Buffer.prototype.writeIntBE = function writeIntBE(value, offset, byteLength, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1);

    checkInt(this, value, offset, byteLength, limit - 1, -limit);
  }

  var i = byteLength - 1;
  var mul = 1;
  var sub = 0;
  this[offset + i] = value & 0xFF;
  while (--i >= 0 && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
      sub = 1;
    }
    this[offset + i] = (value / mul >> 0) - sub & 0xFF;
  }

  return offset + byteLength;
};

Buffer.prototype.writeInt8 = function writeInt8(value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80);
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value);
  if (value < 0) value = 0xff + value + 1;
  this[offset] = value & 0xff;
  return offset + 1;
};

Buffer.prototype.writeInt16LE = function writeInt16LE(value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000);
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = value & 0xff;
    this[offset + 1] = value >>> 8;
  } else {
    objectWriteUInt16(this, value, offset, true);
  }
  return offset + 2;
};

Buffer.prototype.writeInt16BE = function writeInt16BE(value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000);
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = value >>> 8;
    this[offset + 1] = value & 0xff;
  } else {
    objectWriteUInt16(this, value, offset, false);
  }
  return offset + 2;
};

Buffer.prototype.writeInt32LE = function writeInt32LE(value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000);
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = value & 0xff;
    this[offset + 1] = value >>> 8;
    this[offset + 2] = value >>> 16;
    this[offset + 3] = value >>> 24;
  } else {
    objectWriteUInt32(this, value, offset, true);
  }
  return offset + 4;
};

Buffer.prototype.writeInt32BE = function writeInt32BE(value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000);
  if (value < 0) value = 0xffffffff + value + 1;
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = value >>> 24;
    this[offset + 1] = value >>> 16;
    this[offset + 2] = value >>> 8;
    this[offset + 3] = value & 0xff;
  } else {
    objectWriteUInt32(this, value, offset, false);
  }
  return offset + 4;
};

function checkIEEE754(buf, value, offset, ext, max, min) {
  if (offset + ext > buf.length) throw new RangeError('Index out of range');
  if (offset < 0) throw new RangeError('Index out of range');
}

function writeFloat(buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38);
  }
  ieee754.write(buf, value, offset, littleEndian, 23, 4);
  return offset + 4;
}

Buffer.prototype.writeFloatLE = function writeFloatLE(value, offset, noAssert) {
  return writeFloat(this, value, offset, true, noAssert);
};

Buffer.prototype.writeFloatBE = function writeFloatBE(value, offset, noAssert) {
  return writeFloat(this, value, offset, false, noAssert);
};

function writeDouble(buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308);
  }
  ieee754.write(buf, value, offset, littleEndian, 52, 8);
  return offset + 8;
}

Buffer.prototype.writeDoubleLE = function writeDoubleLE(value, offset, noAssert) {
  return writeDouble(this, value, offset, true, noAssert);
};

Buffer.prototype.writeDoubleBE = function writeDoubleBE(value, offset, noAssert) {
  return writeDouble(this, value, offset, false, noAssert);
};

Buffer.prototype.copy = function copy(target, targetStart, start, end) {
  if (!start) start = 0;
  if (!end && end !== 0) end = this.length;
  if (targetStart >= target.length) targetStart = target.length;
  if (!targetStart) targetStart = 0;
  if (end > 0 && end < start) end = start;

  if (end === start) return 0;
  if (target.length === 0 || this.length === 0) return 0;

  if (targetStart < 0) {
    throw new RangeError('targetStart out of bounds');
  }
  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds');
  if (end < 0) throw new RangeError('sourceEnd out of bounds');

  if (end > this.length) end = this.length;
  if (target.length - targetStart < end - start) {
    end = target.length - targetStart + start;
  }

  var len = end - start;
  var i;

  if (this === target && start < targetStart && targetStart < end) {
    for (i = len - 1; i >= 0; --i) {
      target[i + targetStart] = this[i + start];
    }
  } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
    for (i = 0; i < len; ++i) {
      target[i + targetStart] = this[i + start];
    }
  } else {
    Uint8Array.prototype.set.call(target, this.subarray(start, start + len), targetStart);
  }

  return len;
};

Buffer.prototype.fill = function fill(val, start, end, encoding) {
  if (typeof val === 'string') {
    if (typeof start === 'string') {
      encoding = start;
      start = 0;
      end = this.length;
    } else if (typeof end === 'string') {
      encoding = end;
      end = this.length;
    }
    if (val.length === 1) {
      var code = val.charCodeAt(0);
      if (code < 256) {
        val = code;
      }
    }
    if (encoding !== undefined && typeof encoding !== 'string') {
      throw new TypeError('encoding must be a string');
    }
    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
      throw new TypeError('Unknown encoding: ' + encoding);
    }
  } else if (typeof val === 'number') {
    val = val & 255;
  }

  if (start < 0 || this.length < start || this.length < end) {
    throw new RangeError('Out of range index');
  }

  if (end <= start) {
    return this;
  }

  start = start >>> 0;
  end = end === undefined ? this.length : end >>> 0;

  if (!val) val = 0;

  var i;
  if (typeof val === 'number') {
    for (i = start; i < end; ++i) {
      this[i] = val;
    }
  } else {
    var bytes = Buffer.isBuffer(val) ? val : utf8ToBytes(new Buffer(val, encoding).toString());
    var len = bytes.length;
    for (i = 0; i < end - start; ++i) {
      this[i + start] = bytes[i % len];
    }
  }

  return this;
};

var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g;

function base64clean(str) {
  str = stringtrim(str).replace(INVALID_BASE64_RE, '');

  if (str.length < 2) return '';

  while (str.length % 4 !== 0) {
    str = str + '=';
  }
  return str;
}

function stringtrim(str) {
  if (str.trim) return str.trim();
  return str.replace(/^\s+|\s+$/g, '');
}

function toHex(n) {
  if (n < 16) return '0' + n.toString(16);
  return n.toString(16);
}

function utf8ToBytes(string, units) {
  units = units || Infinity;
  var codePoint;
  var length = string.length;
  var leadSurrogate = null;
  var bytes = [];

  for (var i = 0; i < length; ++i) {
    codePoint = string.charCodeAt(i);

    if (codePoint > 0xD7FF && codePoint < 0xE000) {
      if (!leadSurrogate) {
        if (codePoint > 0xDBFF) {
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
          continue;
        } else if (i + 1 === length) {
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
          continue;
        }

        leadSurrogate = codePoint;

        continue;
      }

      if (codePoint < 0xDC00) {
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
        leadSurrogate = codePoint;
        continue;
      }

      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000;
    } else if (leadSurrogate) {
      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
    }

    leadSurrogate = null;

    if (codePoint < 0x80) {
      if ((units -= 1) < 0) break;
      bytes.push(codePoint);
    } else if (codePoint < 0x800) {
      if ((units -= 2) < 0) break;
      bytes.push(codePoint >> 0x6 | 0xC0, codePoint & 0x3F | 0x80);
    } else if (codePoint < 0x10000) {
      if ((units -= 3) < 0) break;
      bytes.push(codePoint >> 0xC | 0xE0, codePoint >> 0x6 & 0x3F | 0x80, codePoint & 0x3F | 0x80);
    } else if (codePoint < 0x110000) {
      if ((units -= 4) < 0) break;
      bytes.push(codePoint >> 0x12 | 0xF0, codePoint >> 0xC & 0x3F | 0x80, codePoint >> 0x6 & 0x3F | 0x80, codePoint & 0x3F | 0x80);
    } else {
      throw new Error('Invalid code point');
    }
  }

  return bytes;
}

function asciiToBytes(str) {
  var byteArray = [];
  for (var i = 0; i < str.length; ++i) {
    byteArray.push(str.charCodeAt(i) & 0xFF);
  }
  return byteArray;
}

function utf16leToBytes(str, units) {
  var c, hi, lo;
  var byteArray = [];
  for (var i = 0; i < str.length; ++i) {
    if ((units -= 2) < 0) break;

    c = str.charCodeAt(i);
    hi = c >> 8;
    lo = c % 256;
    byteArray.push(lo);
    byteArray.push(hi);
  }

  return byteArray;
}

function base64ToBytes(str) {
  return base64.toByteArray(base64clean(str));
}

function blitBuffer(src, dst, offset, length) {
  for (var i = 0; i < length; ++i) {
    if (i + offset >= dst.length || i >= src.length) break;
    dst[i + offset] = src[i];
  }
  return i;
}

function isnan(val) {
  return val !== val;
}
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ }),
/* 14 */
/***/ (function(module, exports) {

exports.read = function (buffer, offset, isLE, mLen, nBytes) {
  var e, m;
  var eLen = nBytes * 8 - mLen - 1;
  var eMax = (1 << eLen) - 1;
  var eBias = eMax >> 1;
  var nBits = -7;
  var i = isLE ? nBytes - 1 : 0;
  var d = isLE ? -1 : 1;
  var s = buffer[offset + i];

  i += d;

  e = s & (1 << -nBits) - 1;
  s >>= -nBits;
  nBits += eLen;
  for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8) {}

  m = e & (1 << -nBits) - 1;
  e >>= -nBits;
  nBits += mLen;
  for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8) {}

  if (e === 0) {
    e = 1 - eBias;
  } else if (e === eMax) {
    return m ? NaN : (s ? -1 : 1) * Infinity;
  } else {
    m = m + Math.pow(2, mLen);
    e = e - eBias;
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen);
};

exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c;
  var eLen = nBytes * 8 - mLen - 1;
  var eMax = (1 << eLen) - 1;
  var eBias = eMax >> 1;
  var rt = mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0;
  var i = isLE ? 0 : nBytes - 1;
  var d = isLE ? 1 : -1;
  var s = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0;

  value = Math.abs(value);

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0;
    e = eMax;
  } else {
    e = Math.floor(Math.log(value) / Math.LN2);
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--;
      c *= 2;
    }
    if (e + eBias >= 1) {
      value += rt / c;
    } else {
      value += rt * Math.pow(2, 1 - eBias);
    }
    if (value * c >= 2) {
      e++;
      c /= 2;
    }

    if (e + eBias >= eMax) {
      m = 0;
      e = eMax;
    } else if (e + eBias >= 1) {
      m = (value * c - 1) * Math.pow(2, mLen);
      e = e + eBias;
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen);
      e = 0;
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

  e = e << mLen | m;
  eLen += mLen;
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

  buffer[offset + i - d] |= s * 128;
};

/***/ }),
/* 15 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = Array.isArray || function (arr) {
  return toString.call(arr) == '[object Array]';
};

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'app'
});

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'aside'
});

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });


/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    list: {
      type: Array,
      required: true,
      default: function _default() {
        return [];
      }
    },
    separator: String
  },
  methods: {
    isLast: function isLast(index) {
      return index === this.list.length - 1;
    },
    showName: function showName(item) {
      return item.meta && item.meta.label || item.name;
    }
  }
});

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'footer'
});

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Navbar__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Navbar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Navbar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_strap__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_strap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_vue_strap__);




/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'header',
  components: {
    navbar: __WEBPACK_IMPORTED_MODULE_0__Navbar___default.a,
    dropdown: __WEBPACK_IMPORTED_MODULE_1_vue_strap__["dropdown"]
  },
  methods: {
    click: function click() {},
    sidebarToggle: function sidebarToggle(e) {
      e.preventDefault();
      document.body.classList.toggle('sidebar-hidden');
    },
    mobileSidebarToggle: function mobileSidebarToggle(e) {
      e.preventDefault();
      document.body.classList.toggle('sidebar-mobile-show');
    },
    asideToggle: function asideToggle(e) {
      e.preventDefault();
      document.body.classList.toggle('aside-menu-hidden');
    }
  }
});

/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'navbar',
  created: function created() {
    this._navbar = true;
  }
});

/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'sidebar',
  methods: {
    handleClick: function handleClick(e) {
      e.preventDefault();
      e.target.parentElement.classList.toggle('open');
    }
  }
});

/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_Header__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_Header___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_Header__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Sidebar__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Sidebar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__components_Sidebar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Aside__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Aside___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__components_Aside__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Footer__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Footer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__components_Footer__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_Breadcrumb__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_Breadcrumb___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__components_Breadcrumb__);








/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'full',
  components: {
    AppHeader: __WEBPACK_IMPORTED_MODULE_0__components_Header___default.a,
    Sidebar: __WEBPACK_IMPORTED_MODULE_1__components_Sidebar___default.a,
    AppAside: __WEBPACK_IMPORTED_MODULE_2__components_Aside___default.a,
    AppFooter: __WEBPACK_IMPORTED_MODULE_3__components_Footer___default.a,
    Breadcrumb: __WEBPACK_IMPORTED_MODULE_4__components_Breadcrumb___default.a
  },
  computed: {
    name: function name() {
      return this.$route.name;
    },
    list: function list() {
      return this.$route.matched;
    }
  }
});

/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
  * vue-router v2.4.0
  * (c) 2017 Evan You
  * @license MIT
  */
function assert(condition, message) {
  if (!condition) {
    throw new Error("[vue-router] " + message);
  }
}

function warn(condition, message) {
  if (process.env.NODE_ENV !== 'production' && !condition) {
    typeof console !== 'undefined' && console.warn("[vue-router] " + message);
  }
}

var View = {
  name: 'router-view',
  functional: true,
  props: {
    name: {
      type: String,
      default: 'default'
    }
  },
  render: function render(h, ref) {
    var props = ref.props;
    var children = ref.children;
    var parent = ref.parent;
    var data = ref.data;

    data.routerView = true;

    var name = props.name;
    var route = parent.$route;
    var cache = parent._routerViewCache || (parent._routerViewCache = {});

    var depth = 0;
    var inactive = false;
    while (parent) {
      if (parent.$vnode && parent.$vnode.data.routerView) {
        depth++;
      }
      if (parent._inactive) {
        inactive = true;
      }
      parent = parent.$parent;
    }
    data.routerViewDepth = depth;

    if (inactive) {
      return h(cache[name], data, children);
    }

    var matched = route.matched[depth];

    if (!matched) {
      cache[name] = null;
      return h();
    }

    var component = cache[name] = matched.components[name];

    data.registerRouteInstance = function (vm, val) {
      if (matched.instances[name] !== vm) {
        matched.instances[name] = val;
      }
    };

    data.props = resolveProps(route, matched.props && matched.props[name]);

    return h(component, data, children);
  }
};

function resolveProps(route, config) {
  switch (typeof config === 'undefined' ? 'undefined' : _typeof(config)) {
    case 'undefined':
      return;
    case 'object':
      return config;
    case 'function':
      return config(route);
    case 'boolean':
      return config ? route.params : undefined;
    default:
      if (process.env.NODE_ENV !== 'production') {
        warn(false, "props in \"" + route.path + "\" is a " + (typeof config === 'undefined' ? 'undefined' : _typeof(config)) + ", " + "expecting an object, function or boolean.");
      }
  }
}

var encodeReserveRE = /[!'()*]/g;
var encodeReserveReplacer = function encodeReserveReplacer(c) {
  return '%' + c.charCodeAt(0).toString(16);
};
var commaRE = /%2C/g;

var encode = function encode(str) {
  return encodeURIComponent(str).replace(encodeReserveRE, encodeReserveReplacer).replace(commaRE, ',');
};

var decode = decodeURIComponent;

function resolveQuery(query, extraQuery, _parseQuery) {
  if (extraQuery === void 0) extraQuery = {};

  var parse = _parseQuery || parseQuery;
  var parsedQuery;
  try {
    parsedQuery = parse(query || '');
  } catch (e) {
    process.env.NODE_ENV !== 'production' && warn(false, e.message);
    parsedQuery = {};
  }
  for (var key in extraQuery) {
    var val = extraQuery[key];
    parsedQuery[key] = Array.isArray(val) ? val.slice() : val;
  }
  return parsedQuery;
}

function parseQuery(query) {
  var res = {};

  query = query.trim().replace(/^(\?|#|&)/, '');

  if (!query) {
    return res;
  }

  query.split('&').forEach(function (param) {
    var parts = param.replace(/\+/g, ' ').split('=');
    var key = decode(parts.shift());
    var val = parts.length > 0 ? decode(parts.join('=')) : null;

    if (res[key] === undefined) {
      res[key] = val;
    } else if (Array.isArray(res[key])) {
      res[key].push(val);
    } else {
      res[key] = [res[key], val];
    }
  });

  return res;
}

function stringifyQuery(obj) {
  var res = obj ? Object.keys(obj).map(function (key) {
    var val = obj[key];

    if (val === undefined) {
      return '';
    }

    if (val === null) {
      return encode(key);
    }

    if (Array.isArray(val)) {
      var result = [];
      val.slice().forEach(function (val2) {
        if (val2 === undefined) {
          return;
        }
        if (val2 === null) {
          result.push(encode(key));
        } else {
          result.push(encode(key) + '=' + encode(val2));
        }
      });
      return result.join('&');
    }

    return encode(key) + '=' + encode(val);
  }).filter(function (x) {
    return x.length > 0;
  }).join('&') : null;
  return res ? "?" + res : '';
}

var trailingSlashRE = /\/?$/;

function createRoute(record, location, redirectedFrom, router) {
  var stringifyQuery$$1 = router && router.options.stringifyQuery;
  var route = {
    name: location.name || record && record.name,
    meta: record && record.meta || {},
    path: location.path || '/',
    hash: location.hash || '',
    query: location.query || {},
    params: location.params || {},
    fullPath: getFullPath(location, stringifyQuery$$1),
    matched: record ? formatMatch(record) : []
  };
  if (redirectedFrom) {
    route.redirectedFrom = getFullPath(redirectedFrom, stringifyQuery$$1);
  }
  return Object.freeze(route);
}

var START = createRoute(null, {
  path: '/'
});

function formatMatch(record) {
  var res = [];
  while (record) {
    res.unshift(record);
    record = record.parent;
  }
  return res;
}

function getFullPath(ref, _stringifyQuery) {
  var path = ref.path;
  var query = ref.query;if (query === void 0) query = {};
  var hash = ref.hash;if (hash === void 0) hash = '';

  var stringify = _stringifyQuery || stringifyQuery;
  return (path || '/') + stringify(query) + hash;
}

function isSameRoute(a, b) {
  if (b === START) {
    return a === b;
  } else if (!b) {
    return false;
  } else if (a.path && b.path) {
    return a.path.replace(trailingSlashRE, '') === b.path.replace(trailingSlashRE, '') && a.hash === b.hash && isObjectEqual(a.query, b.query);
  } else if (a.name && b.name) {
    return a.name === b.name && a.hash === b.hash && isObjectEqual(a.query, b.query) && isObjectEqual(a.params, b.params);
  } else {
    return false;
  }
}

function isObjectEqual(a, b) {
  if (a === void 0) a = {};
  if (b === void 0) b = {};

  var aKeys = Object.keys(a);
  var bKeys = Object.keys(b);
  if (aKeys.length !== bKeys.length) {
    return false;
  }
  return aKeys.every(function (key) {
    return String(a[key]) === String(b[key]);
  });
}

function isIncludedRoute(current, target) {
  return current.path.replace(trailingSlashRE, '/').indexOf(target.path.replace(trailingSlashRE, '/')) === 0 && (!target.hash || current.hash === target.hash) && queryIncludes(current.query, target.query);
}

function queryIncludes(current, target) {
  for (var key in target) {
    if (!(key in current)) {
      return false;
    }
  }
  return true;
}

var toTypes = [String, Object];
var eventTypes = [String, Array];

var Link = {
  name: 'router-link',
  props: {
    to: {
      type: toTypes,
      required: true
    },
    tag: {
      type: String,
      default: 'a'
    },
    exact: Boolean,
    append: Boolean,
    replace: Boolean,
    activeClass: {
      type: String,
      default: 'router-link-active'
    },
    event: {
      type: eventTypes,
      default: 'click'
    }
  },
  render: function render(h) {
    var this$1 = this;

    var router = this.$router;
    var current = this.$route;
    var ref = router.resolve(this.to, current, this.append);
    var location = ref.location;
    var route = ref.route;
    var href = ref.href;

    var classes = {};
    var globalActiveClass = router.options.linkActiveClass;
    var activeClass = globalActiveClass == null ? this.activeClass : globalActiveClass;
    var compareTarget = location.path ? createRoute(null, location, null, router) : route;

    classes[activeClass] = this.exact ? isSameRoute(current, compareTarget) : isIncludedRoute(current, compareTarget);

    var handler = function handler(e) {
      if (guardEvent(e)) {
        if (this$1.replace) {
          router.replace(location);
        } else {
          router.push(location);
        }
      }
    };

    var on = { click: guardEvent };
    if (Array.isArray(this.event)) {
      this.event.forEach(function (e) {
        on[e] = handler;
      });
    } else {
      on[this.event] = handler;
    }

    var data = {
      class: classes
    };

    if (this.tag === 'a') {
      data.on = on;
      data.attrs = { href: href };
    } else {
      var a = findAnchor(this.$slots.default);
      if (a) {
        a.isStatic = false;
        var extend = _Vue.util.extend;
        var aData = a.data = extend({}, a.data);
        aData.on = on;
        var aAttrs = a.data.attrs = extend({}, a.data.attrs);
        aAttrs.href = href;
      } else {
        data.on = on;
      }
    }

    return h(this.tag, data, this.$slots.default);
  }
};

function guardEvent(e) {
  if (e.metaKey || e.ctrlKey || e.shiftKey) {
    return;
  }

  if (e.defaultPrevented) {
    return;
  }

  if (e.button !== undefined && e.button !== 0) {
    return;
  }

  if (e.currentTarget && e.currentTarget.getAttribute) {
    var target = e.currentTarget.getAttribute('target');
    if (/\b_blank\b/i.test(target)) {
      return;
    }
  }

  if (e.preventDefault) {
    e.preventDefault();
  }
  return true;
}

function findAnchor(children) {
  if (children) {
    var child;
    for (var i = 0; i < children.length; i++) {
      child = children[i];
      if (child.tag === 'a') {
        return child;
      }
      if (child.children && (child = findAnchor(child.children))) {
        return child;
      }
    }
  }
}

var _Vue;

function install(Vue) {
  if (install.installed) {
    return;
  }
  install.installed = true;

  _Vue = Vue;

  Object.defineProperty(Vue.prototype, '$router', {
    get: function get() {
      return this.$root._router;
    }
  });

  Object.defineProperty(Vue.prototype, '$route', {
    get: function get() {
      return this.$root._route;
    }
  });

  var isDef = function isDef(v) {
    return v !== undefined;
  };

  var registerInstance = function registerInstance(vm, callVal) {
    var i = vm.$options._parentVnode;
    if (isDef(i) && isDef(i = i.data) && isDef(i = i.registerRouteInstance)) {
      i(vm, callVal);
    }
  };

  Vue.mixin({
    beforeCreate: function beforeCreate() {
      if (isDef(this.$options.router)) {
        this._router = this.$options.router;
        this._router.init(this);
        Vue.util.defineReactive(this, '_route', this._router.history.current);
      }
      registerInstance(this, this);
    },
    destroyed: function destroyed() {
      registerInstance(this);
    }
  });

  Vue.component('router-view', View);
  Vue.component('router-link', Link);

  var strats = Vue.config.optionMergeStrategies;

  strats.beforeRouteEnter = strats.beforeRouteLeave = strats.created;
}

var inBrowser = typeof window !== 'undefined';

function resolvePath(relative, base, append) {
  var firstChar = relative.charAt(0);
  if (firstChar === '/') {
    return relative;
  }

  if (firstChar === '?' || firstChar === '#') {
    return base + relative;
  }

  var stack = base.split('/');

  if (!append || !stack[stack.length - 1]) {
    stack.pop();
  }

  var segments = relative.replace(/^\//, '').split('/');
  for (var i = 0; i < segments.length; i++) {
    var segment = segments[i];
    if (segment === '..') {
      stack.pop();
    } else if (segment !== '.') {
      stack.push(segment);
    }
  }

  if (stack[0] !== '') {
    stack.unshift('');
  }

  return stack.join('/');
}

function parsePath(path) {
  var hash = '';
  var query = '';

  var hashIndex = path.indexOf('#');
  if (hashIndex >= 0) {
    hash = path.slice(hashIndex);
    path = path.slice(0, hashIndex);
  }

  var queryIndex = path.indexOf('?');
  if (queryIndex >= 0) {
    query = path.slice(queryIndex + 1);
    path = path.slice(0, queryIndex);
  }

  return {
    path: path,
    query: query,
    hash: hash
  };
}

function cleanPath(path) {
  return path.replace(/\/\//g, '/');
}

function createRouteMap(routes, oldPathMap, oldNameMap) {
  var pathMap = oldPathMap || Object.create(null);
  var nameMap = oldNameMap || Object.create(null);

  routes.forEach(function (route) {
    addRouteRecord(pathMap, nameMap, route);
  });

  return {
    pathMap: pathMap,
    nameMap: nameMap
  };
}

function addRouteRecord(pathMap, nameMap, route, parent, matchAs) {
  var path = route.path;
  var name = route.name;
  if (process.env.NODE_ENV !== 'production') {
    assert(path != null, "\"path\" is required in a route configuration.");
    assert(typeof route.component !== 'string', "route config \"component\" for path: " + String(path || name) + " cannot be a " + "string id. Use an actual component instead.");
  }

  var record = {
    path: normalizePath(path, parent),
    components: route.components || { default: route.component },
    instances: {},
    name: name,
    parent: parent,
    matchAs: matchAs,
    redirect: route.redirect,
    beforeEnter: route.beforeEnter,
    meta: route.meta || {},
    props: route.props == null ? {} : route.components ? route.props : { default: route.props }
  };

  if (route.children) {
    if (process.env.NODE_ENV !== 'production') {
      if (route.name && route.children.some(function (child) {
        return (/^\/?$/.test(child.path)
        );
      })) {
        warn(false, "Named Route '" + route.name + "' has a default child route. " + "When navigating to this named route (:to=\"{name: '" + route.name + "'\"), " + "the default child route will not be rendered. Remove the name from " + "this route and use the name of the default child route for named " + "links instead.");
      }
    }
    route.children.forEach(function (child) {
      var childMatchAs = matchAs ? cleanPath(matchAs + "/" + child.path) : undefined;
      addRouteRecord(pathMap, nameMap, child, record, childMatchAs);
    });
  }

  if (route.alias !== undefined) {
    if (Array.isArray(route.alias)) {
      route.alias.forEach(function (alias) {
        var aliasRoute = {
          path: alias,
          children: route.children
        };
        addRouteRecord(pathMap, nameMap, aliasRoute, parent, record.path);
      });
    } else {
      var aliasRoute = {
        path: route.alias,
        children: route.children
      };
      addRouteRecord(pathMap, nameMap, aliasRoute, parent, record.path);
    }
  }

  if (!pathMap[record.path]) {
    pathMap[record.path] = record;
  }

  if (name) {
    if (!nameMap[name]) {
      nameMap[name] = record;
    } else if (process.env.NODE_ENV !== 'production' && !matchAs) {
      warn(false, "Duplicate named routes definition: " + "{ name: \"" + name + "\", path: \"" + record.path + "\" }");
    }
  }
}

function normalizePath(path, parent) {
  path = path.replace(/\/$/, '');
  if (path[0] === '/') {
    return path;
  }
  if (parent == null) {
    return path;
  }
  return cleanPath(parent.path + "/" + path);
}

var index$1 = Array.isArray || function (arr) {
  return Object.prototype.toString.call(arr) == '[object Array]';
};

var isarray = index$1;

var index = pathToRegexp;
var parse_1 = parse;
var compile_1 = compile;
var tokensToFunction_1 = tokensToFunction;
var tokensToRegExp_1 = tokensToRegExp;

var PATH_REGEXP = new RegExp(['(\\\\.)', '([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))'].join('|'), 'g');

function parse(str, options) {
  var tokens = [];
  var key = 0;
  var index = 0;
  var path = '';
  var defaultDelimiter = options && options.delimiter || '/';
  var res;

  while ((res = PATH_REGEXP.exec(str)) != null) {
    var m = res[0];
    var escaped = res[1];
    var offset = res.index;
    path += str.slice(index, offset);
    index = offset + m.length;

    if (escaped) {
      path += escaped[1];
      continue;
    }

    var next = str[index];
    var prefix = res[2];
    var name = res[3];
    var capture = res[4];
    var group = res[5];
    var modifier = res[6];
    var asterisk = res[7];

    if (path) {
      tokens.push(path);
      path = '';
    }

    var partial = prefix != null && next != null && next !== prefix;
    var repeat = modifier === '+' || modifier === '*';
    var optional = modifier === '?' || modifier === '*';
    var delimiter = res[2] || defaultDelimiter;
    var pattern = capture || group;

    tokens.push({
      name: name || key++,
      prefix: prefix || '',
      delimiter: delimiter,
      optional: optional,
      repeat: repeat,
      partial: partial,
      asterisk: !!asterisk,
      pattern: pattern ? escapeGroup(pattern) : asterisk ? '.*' : '[^' + escapeString(delimiter) + ']+?'
    });
  }

  if (index < str.length) {
    path += str.substr(index);
  }

  if (path) {
    tokens.push(path);
  }

  return tokens;
}

function compile(str, options) {
  return tokensToFunction(parse(str, options));
}

function encodeURIComponentPretty(str) {
  return encodeURI(str).replace(/[\/?#]/g, function (c) {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase();
  });
}

function encodeAsterisk(str) {
  return encodeURI(str).replace(/[?#]/g, function (c) {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase();
  });
}

function tokensToFunction(tokens) {
  var matches = new Array(tokens.length);

  for (var i = 0; i < tokens.length; i++) {
    if (_typeof(tokens[i]) === 'object') {
      matches[i] = new RegExp('^(?:' + tokens[i].pattern + ')$');
    }
  }

  return function (obj, opts) {
    var path = '';
    var data = obj || {};
    var options = opts || {};
    var encode = options.pretty ? encodeURIComponentPretty : encodeURIComponent;

    for (var i = 0; i < tokens.length; i++) {
      var token = tokens[i];

      if (typeof token === 'string') {
        path += token;

        continue;
      }

      var value = data[token.name];
      var segment;

      if (value == null) {
        if (token.optional) {
          if (token.partial) {
            path += token.prefix;
          }

          continue;
        } else {
          throw new TypeError('Expected "' + token.name + '" to be defined');
        }
      }

      if (isarray(value)) {
        if (!token.repeat) {
          throw new TypeError('Expected "' + token.name + '" to not repeat, but received `' + JSON.stringify(value) + '`');
        }

        if (value.length === 0) {
          if (token.optional) {
            continue;
          } else {
            throw new TypeError('Expected "' + token.name + '" to not be empty');
          }
        }

        for (var j = 0; j < value.length; j++) {
          segment = encode(value[j]);

          if (!matches[i].test(segment)) {
            throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but received `' + JSON.stringify(segment) + '`');
          }

          path += (j === 0 ? token.prefix : token.delimiter) + segment;
        }

        continue;
      }

      segment = token.asterisk ? encodeAsterisk(value) : encode(value);

      if (!matches[i].test(segment)) {
        throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"');
      }

      path += token.prefix + segment;
    }

    return path;
  };
}

function escapeString(str) {
  return str.replace(/([.+*?=^!:${}()[\]|\/\\])/g, '\\$1');
}

function escapeGroup(group) {
  return group.replace(/([=!:$\/()])/g, '\\$1');
}

function attachKeys(re, keys) {
  re.keys = keys;
  return re;
}

function flags(options) {
  return options.sensitive ? '' : 'i';
}

function regexpToRegexp(path, keys) {
  var groups = path.source.match(/\((?!\?)/g);

  if (groups) {
    for (var i = 0; i < groups.length; i++) {
      keys.push({
        name: i,
        prefix: null,
        delimiter: null,
        optional: false,
        repeat: false,
        partial: false,
        asterisk: false,
        pattern: null
      });
    }
  }

  return attachKeys(path, keys);
}

function arrayToRegexp(path, keys, options) {
  var parts = [];

  for (var i = 0; i < path.length; i++) {
    parts.push(pathToRegexp(path[i], keys, options).source);
  }

  var regexp = new RegExp('(?:' + parts.join('|') + ')', flags(options));

  return attachKeys(regexp, keys);
}

function stringToRegexp(path, keys, options) {
  return tokensToRegExp(parse(path, options), keys, options);
}

function tokensToRegExp(tokens, keys, options) {
  if (!isarray(keys)) {
    options = keys || options;
    keys = [];
  }

  options = options || {};

  var strict = options.strict;
  var end = options.end !== false;
  var route = '';

  for (var i = 0; i < tokens.length; i++) {
    var token = tokens[i];

    if (typeof token === 'string') {
      route += escapeString(token);
    } else {
      var prefix = escapeString(token.prefix);
      var capture = '(?:' + token.pattern + ')';

      keys.push(token);

      if (token.repeat) {
        capture += '(?:' + prefix + capture + ')*';
      }

      if (token.optional) {
        if (!token.partial) {
          capture = '(?:' + prefix + '(' + capture + '))?';
        } else {
          capture = prefix + '(' + capture + ')?';
        }
      } else {
        capture = prefix + '(' + capture + ')';
      }

      route += capture;
    }
  }

  var delimiter = escapeString(options.delimiter || '/');
  var endsWithDelimiter = route.slice(-delimiter.length) === delimiter;

  if (!strict) {
    route = (endsWithDelimiter ? route.slice(0, -delimiter.length) : route) + '(?:' + delimiter + '(?=$))?';
  }

  if (end) {
    route += '$';
  } else {
    route += strict && endsWithDelimiter ? '' : '(?=' + delimiter + '|$)';
  }

  return attachKeys(new RegExp('^' + route, flags(options)), keys);
}

function pathToRegexp(path, keys, options) {
  if (!isarray(keys)) {
    options = keys || options;
    keys = [];
  }

  options = options || {};

  if (path instanceof RegExp) {
    return regexpToRegexp(path, keys);
  }

  if (isarray(path)) {
    return arrayToRegexp(path, keys, options);
  }

  return stringToRegexp(path, keys, options);
}

index.parse = parse_1;
index.compile = compile_1;
index.tokensToFunction = tokensToFunction_1;
index.tokensToRegExp = tokensToRegExp_1;

var regexpCache = Object.create(null);

function getRouteRegex(path) {
  var hit = regexpCache[path];
  var keys, regexp;

  if (hit) {
    keys = hit.keys;
    regexp = hit.regexp;
  } else {
    keys = [];
    regexp = index(path, keys);
    regexpCache[path] = { keys: keys, regexp: regexp };
  }

  return { keys: keys, regexp: regexp };
}

var regexpCompileCache = Object.create(null);

function fillParams(path, params, routeMsg) {
  try {
    var filler = regexpCompileCache[path] || (regexpCompileCache[path] = index.compile(path));
    return filler(params || {}, { pretty: true });
  } catch (e) {
    if (process.env.NODE_ENV !== 'production') {
      warn(false, "missing param for " + routeMsg + ": " + e.message);
    }
    return '';
  }
}

function normalizeLocation(raw, current, append, router) {
  var next = typeof raw === 'string' ? { path: raw } : raw;

  if (next.name || next._normalized) {
    return next;
  }

  if (!next.path && next.params && current) {
    next = assign({}, next);
    next._normalized = true;
    var params = assign(assign({}, current.params), next.params);
    if (current.name) {
      next.name = current.name;
      next.params = params;
    } else if (current.matched) {
      var rawPath = current.matched[current.matched.length - 1].path;
      next.path = fillParams(rawPath, params, "path " + current.path);
    } else if (process.env.NODE_ENV !== 'production') {
      warn(false, "relative params navigation requires a current route.");
    }
    return next;
  }

  var parsedPath = parsePath(next.path || '');
  var basePath = current && current.path || '/';
  var path = parsedPath.path ? resolvePath(parsedPath.path, basePath, append || next.append) : current && current.path || '/';

  var query = resolveQuery(parsedPath.query, next.query, router && router.options.parseQuery);

  var hash = next.hash || parsedPath.hash;
  if (hash && hash.charAt(0) !== '#') {
    hash = "#" + hash;
  }

  return {
    _normalized: true,
    path: path,
    query: query,
    hash: hash
  };
}

function assign(a, b) {
  for (var key in b) {
    a[key] = b[key];
  }
  return a;
}

function createMatcher(routes, router) {
  var ref = createRouteMap(routes);
  var pathMap = ref.pathMap;
  var nameMap = ref.nameMap;

  function addRoutes(routes) {
    createRouteMap(routes, pathMap, nameMap);
  }

  function match(raw, currentRoute, redirectedFrom) {
    var location = normalizeLocation(raw, currentRoute, false, router);
    var name = location.name;

    if (name) {
      var record = nameMap[name];
      if (process.env.NODE_ENV !== 'production') {
        warn(record, "Route with name '" + name + "' does not exist");
      }
      var paramNames = getRouteRegex(record.path).keys.filter(function (key) {
        return !key.optional;
      }).map(function (key) {
        return key.name;
      });

      if (_typeof(location.params) !== 'object') {
        location.params = {};
      }

      if (currentRoute && _typeof(currentRoute.params) === 'object') {
        for (var key in currentRoute.params) {
          if (!(key in location.params) && paramNames.indexOf(key) > -1) {
            location.params[key] = currentRoute.params[key];
          }
        }
      }

      if (record) {
        location.path = fillParams(record.path, location.params, "named route \"" + name + "\"");
        return _createRoute(record, location, redirectedFrom);
      }
    } else if (location.path) {
      location.params = {};
      for (var path in pathMap) {
        if (matchRoute(path, location.params, location.path)) {
          return _createRoute(pathMap[path], location, redirectedFrom);
        }
      }
    }

    return _createRoute(null, location);
  }

  function redirect(record, location) {
    var originalRedirect = record.redirect;
    var redirect = typeof originalRedirect === 'function' ? originalRedirect(createRoute(record, location, null, router)) : originalRedirect;

    if (typeof redirect === 'string') {
      redirect = { path: redirect };
    }

    if (!redirect || (typeof redirect === 'undefined' ? 'undefined' : _typeof(redirect)) !== 'object') {
      if (process.env.NODE_ENV !== 'production') {
        warn(false, "invalid redirect option: " + JSON.stringify(redirect));
      }
      return _createRoute(null, location);
    }

    var re = redirect;
    var name = re.name;
    var path = re.path;
    var query = location.query;
    var hash = location.hash;
    var params = location.params;
    query = re.hasOwnProperty('query') ? re.query : query;
    hash = re.hasOwnProperty('hash') ? re.hash : hash;
    params = re.hasOwnProperty('params') ? re.params : params;

    if (name) {
      var targetRecord = nameMap[name];
      if (process.env.NODE_ENV !== 'production') {
        assert(targetRecord, "redirect failed: named route \"" + name + "\" not found.");
      }
      return match({
        _normalized: true,
        name: name,
        query: query,
        hash: hash,
        params: params
      }, undefined, location);
    } else if (path) {
      var rawPath = resolveRecordPath(path, record);

      var resolvedPath = fillParams(rawPath, params, "redirect route with path \"" + rawPath + "\"");

      return match({
        _normalized: true,
        path: resolvedPath,
        query: query,
        hash: hash
      }, undefined, location);
    } else {
      if (process.env.NODE_ENV !== 'production') {
        warn(false, "invalid redirect option: " + JSON.stringify(redirect));
      }
      return _createRoute(null, location);
    }
  }

  function alias(record, location, matchAs) {
    var aliasedPath = fillParams(matchAs, location.params, "aliased route with path \"" + matchAs + "\"");
    var aliasedMatch = match({
      _normalized: true,
      path: aliasedPath
    });
    if (aliasedMatch) {
      var matched = aliasedMatch.matched;
      var aliasedRecord = matched[matched.length - 1];
      location.params = aliasedMatch.params;
      return _createRoute(aliasedRecord, location);
    }
    return _createRoute(null, location);
  }

  function _createRoute(record, location, redirectedFrom) {
    if (record && record.redirect) {
      return redirect(record, redirectedFrom || location);
    }
    if (record && record.matchAs) {
      return alias(record, location, record.matchAs);
    }
    return createRoute(record, location, redirectedFrom, router);
  }

  return {
    match: match,
    addRoutes: addRoutes
  };
}

function matchRoute(path, params, pathname) {
  var ref = getRouteRegex(path);
  var regexp = ref.regexp;
  var keys = ref.keys;
  var m = pathname.match(regexp);

  if (!m) {
    return false;
  } else if (!params) {
    return true;
  }

  for (var i = 1, len = m.length; i < len; ++i) {
    var key = keys[i - 1];
    var val = typeof m[i] === 'string' ? decodeURIComponent(m[i]) : m[i];
    if (key) {
      params[key.name] = val;
    }
  }

  return true;
}

function resolveRecordPath(path, record) {
  return resolvePath(path, record.parent ? record.parent.path : '/', true);
}

var positionStore = Object.create(null);

function setupScroll() {
  window.addEventListener('popstate', function (e) {
    saveScrollPosition();
    if (e.state && e.state.key) {
      setStateKey(e.state.key);
    }
  });
}

function handleScroll(router, to, from, isPop) {
  if (!router.app) {
    return;
  }

  var behavior = router.options.scrollBehavior;
  if (!behavior) {
    return;
  }

  if (process.env.NODE_ENV !== 'production') {
    assert(typeof behavior === 'function', "scrollBehavior must be a function");
  }

  router.app.$nextTick(function () {
    var position = getScrollPosition();
    var shouldScroll = behavior(to, from, isPop ? position : null);
    if (!shouldScroll) {
      return;
    }
    var isObject = (typeof shouldScroll === 'undefined' ? 'undefined' : _typeof(shouldScroll)) === 'object';
    if (isObject && typeof shouldScroll.selector === 'string') {
      var el = document.querySelector(shouldScroll.selector);
      if (el) {
        position = getElementPosition(el);
      } else if (isValidPosition(shouldScroll)) {
        position = normalizePosition(shouldScroll);
      }
    } else if (isObject && isValidPosition(shouldScroll)) {
      position = normalizePosition(shouldScroll);
    }

    if (position) {
      window.scrollTo(position.x, position.y);
    }
  });
}

function saveScrollPosition() {
  var key = getStateKey();
  if (key) {
    positionStore[key] = {
      x: window.pageXOffset,
      y: window.pageYOffset
    };
  }
}

function getScrollPosition() {
  var key = getStateKey();
  if (key) {
    return positionStore[key];
  }
}

function getElementPosition(el) {
  var docEl = document.documentElement;
  var docRect = docEl.getBoundingClientRect();
  var elRect = el.getBoundingClientRect();
  return {
    x: elRect.left - docRect.left,
    y: elRect.top - docRect.top
  };
}

function isValidPosition(obj) {
  return isNumber(obj.x) || isNumber(obj.y);
}

function normalizePosition(obj) {
  return {
    x: isNumber(obj.x) ? obj.x : window.pageXOffset,
    y: isNumber(obj.y) ? obj.y : window.pageYOffset
  };
}

function isNumber(v) {
  return typeof v === 'number';
}

var supportsPushState = inBrowser && function () {
  var ua = window.navigator.userAgent;

  if ((ua.indexOf('Android 2.') !== -1 || ua.indexOf('Android 4.0') !== -1) && ua.indexOf('Mobile Safari') !== -1 && ua.indexOf('Chrome') === -1 && ua.indexOf('Windows Phone') === -1) {
    return false;
  }

  return window.history && 'pushState' in window.history;
}();

var Time = inBrowser && window.performance && window.performance.now ? window.performance : Date;

var _key = genKey();

function genKey() {
  return Time.now().toFixed(3);
}

function getStateKey() {
  return _key;
}

function setStateKey(key) {
  _key = key;
}

function pushState(url, replace) {
  saveScrollPosition();

  var history = window.history;
  try {
    if (replace) {
      history.replaceState({ key: _key }, '', url);
    } else {
      _key = genKey();
      history.pushState({ key: _key }, '', url);
    }
  } catch (e) {
    window.location[replace ? 'replace' : 'assign'](url);
  }
}

function replaceState(url) {
  pushState(url, true);
}

function runQueue(queue, fn, cb) {
  var step = function step(index) {
    if (index >= queue.length) {
      cb();
    } else {
      if (queue[index]) {
        fn(queue[index], function () {
          step(index + 1);
        });
      } else {
        step(index + 1);
      }
    }
  };
  step(0);
}

var History = function History(router, base) {
  this.router = router;
  this.base = normalizeBase(base);

  this.current = START;
  this.pending = null;
  this.ready = false;
  this.readyCbs = [];
  this.readyErrorCbs = [];
  this.errorCbs = [];
};

History.prototype.listen = function listen(cb) {
  this.cb = cb;
};

History.prototype.onReady = function onReady(cb, errorCb) {
  if (this.ready) {
    cb();
  } else {
    this.readyCbs.push(cb);
    if (errorCb) {
      this.readyErrorCbs.push(errorCb);
    }
  }
};

History.prototype.onError = function onError(errorCb) {
  this.errorCbs.push(errorCb);
};

History.prototype.transitionTo = function transitionTo(location, onComplete, onAbort) {
  var this$1 = this;

  var route = this.router.match(location, this.current);
  this.confirmTransition(route, function () {
    this$1.updateRoute(route);
    onComplete && onComplete(route);
    this$1.ensureURL();

    if (!this$1.ready) {
      this$1.ready = true;
      this$1.readyCbs.forEach(function (cb) {
        cb(route);
      });
    }
  }, function (err) {
    if (onAbort) {
      onAbort(err);
    }
    if (err && !this$1.ready) {
      this$1.ready = true;
      this$1.readyErrorCbs.forEach(function (cb) {
        cb(err);
      });
    }
  });
};

History.prototype.confirmTransition = function confirmTransition(route, onComplete, onAbort) {
  var this$1 = this;

  var current = this.current;
  var abort = function abort(err) {
    if (err instanceof Error) {
      this$1.errorCbs.forEach(function (cb) {
        cb(err);
      });
    }
    onAbort && onAbort(err);
  };
  if (isSameRoute(route, current) && route.matched.length === current.matched.length) {
    this.ensureURL();
    return abort();
  }

  var ref = resolveQueue(this.current.matched, route.matched);
  var updated = ref.updated;
  var deactivated = ref.deactivated;
  var activated = ref.activated;

  var queue = [].concat(extractLeaveGuards(deactivated), this.router.beforeHooks, extractUpdateHooks(updated), activated.map(function (m) {
    return m.beforeEnter;
  }), resolveAsyncComponents(activated));

  this.pending = route;
  var iterator = function iterator(hook, next) {
    if (this$1.pending !== route) {
      return abort();
    }
    try {
      hook(route, current, function (to) {
        if (to === false || to instanceof Error) {
          this$1.ensureURL(true);
          abort(to);
        } else if (typeof to === 'string' || (typeof to === 'undefined' ? 'undefined' : _typeof(to)) === 'object') {
          abort();
          if ((typeof to === 'undefined' ? 'undefined' : _typeof(to)) === 'object' && to.replace) {
            this$1.replace(to);
          } else {
            this$1.push(to);
          }
        } else {
          next(to);
        }
      });
    } catch (e) {
      abort(e);
    }
  };

  runQueue(queue, iterator, function () {
    var postEnterCbs = [];
    var isValid = function isValid() {
      return this$1.current === route;
    };
    var enterGuards = extractEnterGuards(activated, postEnterCbs, isValid);

    runQueue(enterGuards, iterator, function () {
      if (this$1.pending !== route) {
        return abort();
      }
      this$1.pending = null;
      onComplete(route);
      if (this$1.router.app) {
        this$1.router.app.$nextTick(function () {
          postEnterCbs.forEach(function (cb) {
            cb();
          });
        });
      }
    });
  });
};

History.prototype.updateRoute = function updateRoute(route) {
  var prev = this.current;
  this.current = route;
  this.cb && this.cb(route);
  this.router.afterHooks.forEach(function (hook) {
    hook && hook(route, prev);
  });
};

function normalizeBase(base) {
  if (!base) {
    if (inBrowser) {
      var baseEl = document.querySelector('base');
      base = baseEl && baseEl.getAttribute('href') || '/';
    } else {
      base = '/';
    }
  }

  if (base.charAt(0) !== '/') {
    base = '/' + base;
  }

  return base.replace(/\/$/, '');
}

function resolveQueue(current, next) {
  var i;
  var max = Math.max(current.length, next.length);
  for (i = 0; i < max; i++) {
    if (current[i] !== next[i]) {
      break;
    }
  }
  return {
    updated: next.slice(0, i),
    activated: next.slice(i),
    deactivated: current.slice(i)
  };
}

function extractGuards(records, name, bind, reverse) {
  var guards = flatMapComponents(records, function (def, instance, match, key) {
    var guard = extractGuard(def, name);
    if (guard) {
      return Array.isArray(guard) ? guard.map(function (guard) {
        return bind(guard, instance, match, key);
      }) : bind(guard, instance, match, key);
    }
  });
  return flatten(reverse ? guards.reverse() : guards);
}

function extractGuard(def, key) {
  if (typeof def !== 'function') {
    def = _Vue.extend(def);
  }
  return def.options[key];
}

function extractLeaveGuards(deactivated) {
  return extractGuards(deactivated, 'beforeRouteLeave', bindGuard, true);
}

function extractUpdateHooks(updated) {
  return extractGuards(updated, 'beforeRouteUpdate', bindGuard);
}

function bindGuard(guard, instance) {
  return function boundRouteGuard() {
    return guard.apply(instance, arguments);
  };
}

function extractEnterGuards(activated, cbs, isValid) {
  return extractGuards(activated, 'beforeRouteEnter', function (guard, _, match, key) {
    return bindEnterGuard(guard, match, key, cbs, isValid);
  });
}

function bindEnterGuard(guard, match, key, cbs, isValid) {
  return function routeEnterGuard(to, from, next) {
    return guard(to, from, function (cb) {
      next(cb);
      if (typeof cb === 'function') {
        cbs.push(function () {
          poll(cb, match.instances, key, isValid);
        });
      }
    });
  };
}

function poll(cb, instances, key, isValid) {
  if (instances[key]) {
    cb(instances[key]);
  } else if (isValid()) {
    setTimeout(function () {
      poll(cb, instances, key, isValid);
    }, 16);
  }
}

function resolveAsyncComponents(matched) {
  var _next;
  var pending = 0;
  var error = null;

  flatMapComponents(matched, function (def, _, match, key) {
    if (typeof def === 'function' && def.cid === undefined) {
      pending++;

      var resolve = once(function (resolvedDef) {
        def.resolved = typeof resolvedDef === 'function' ? resolvedDef : _Vue.extend(resolvedDef);
        match.components[key] = resolvedDef;
        pending--;
        if (pending <= 0 && _next) {
          _next();
        }
      });

      var reject = once(function (reason) {
        var msg = "Failed to resolve async component " + key + ": " + reason;
        process.env.NODE_ENV !== 'production' && warn(false, msg);
        if (!error) {
          error = reason instanceof Error ? reason : new Error(msg);
          if (_next) {
            _next(error);
          }
        }
      });

      var res;
      try {
        res = def(resolve, reject);
      } catch (e) {
        reject(e);
      }
      if (res) {
        if (typeof res.then === 'function') {
          res.then(resolve, reject);
        } else {
          var comp = res.component;
          if (comp && typeof comp.then === 'function') {
            comp.then(resolve, reject);
          }
        }
      }
    }
  });

  return function (to, from, next) {
    if (error) {
      next(error);
    } else if (pending <= 0) {
      next();
    } else {
      _next = next;
    }
  };
}

function flatMapComponents(matched, fn) {
  return flatten(matched.map(function (m) {
    return Object.keys(m.components).map(function (key) {
      return fn(m.components[key], m.instances[key], m, key);
    });
  }));
}

function flatten(arr) {
  return Array.prototype.concat.apply([], arr);
}

function once(fn) {
  var called = false;
  return function () {
    if (called) {
      return;
    }
    called = true;
    return fn.apply(this, arguments);
  };
}

var HTML5History = function (History$$1) {
  function HTML5History(router, base) {
    var this$1 = this;

    History$$1.call(this, router, base);

    var expectScroll = router.options.scrollBehavior;

    if (expectScroll) {
      setupScroll();
    }

    window.addEventListener('popstate', function (e) {
      this$1.transitionTo(getLocation(this$1.base), function (route) {
        if (expectScroll) {
          handleScroll(router, route, this$1.current, true);
        }
      });
    });
  }

  if (History$$1) HTML5History.__proto__ = History$$1;
  HTML5History.prototype = Object.create(History$$1 && History$$1.prototype);
  HTML5History.prototype.constructor = HTML5History;

  HTML5History.prototype.go = function go(n) {
    window.history.go(n);
  };

  HTML5History.prototype.push = function push(location, onComplete, onAbort) {
    var this$1 = this;

    var ref = this;
    var fromRoute = ref.current;
    this.transitionTo(location, function (route) {
      pushState(cleanPath(this$1.base + route.fullPath));
      handleScroll(this$1.router, route, fromRoute, false);
      onComplete && onComplete(route);
    }, onAbort);
  };

  HTML5History.prototype.replace = function replace(location, onComplete, onAbort) {
    var this$1 = this;

    var ref = this;
    var fromRoute = ref.current;
    this.transitionTo(location, function (route) {
      replaceState(cleanPath(this$1.base + route.fullPath));
      handleScroll(this$1.router, route, fromRoute, false);
      onComplete && onComplete(route);
    }, onAbort);
  };

  HTML5History.prototype.ensureURL = function ensureURL(push) {
    if (getLocation(this.base) !== this.current.fullPath) {
      var current = cleanPath(this.base + this.current.fullPath);
      push ? pushState(current) : replaceState(current);
    }
  };

  HTML5History.prototype.getCurrentLocation = function getCurrentLocation() {
    return getLocation(this.base);
  };

  return HTML5History;
}(History);

function getLocation(base) {
  var path = window.location.pathname;
  if (base && path.indexOf(base) === 0) {
    path = path.slice(base.length);
  }
  return (path || '/') + window.location.search + window.location.hash;
}

var HashHistory = function (History$$1) {
  function HashHistory(router, base, fallback) {
    History$$1.call(this, router, base);

    if (fallback && checkFallback(this.base)) {
      return;
    }
    ensureSlash();
  }

  if (History$$1) HashHistory.__proto__ = History$$1;
  HashHistory.prototype = Object.create(History$$1 && History$$1.prototype);
  HashHistory.prototype.constructor = HashHistory;

  HashHistory.prototype.setupListeners = function setupListeners() {
    var this$1 = this;

    window.addEventListener('hashchange', function () {
      if (!ensureSlash()) {
        return;
      }
      this$1.transitionTo(getHash(), function (route) {
        replaceHash(route.fullPath);
      });
    });
  };

  HashHistory.prototype.push = function push(location, onComplete, onAbort) {
    this.transitionTo(location, function (route) {
      pushHash(route.fullPath);
      onComplete && onComplete(route);
    }, onAbort);
  };

  HashHistory.prototype.replace = function replace(location, onComplete, onAbort) {
    this.transitionTo(location, function (route) {
      replaceHash(route.fullPath);
      onComplete && onComplete(route);
    }, onAbort);
  };

  HashHistory.prototype.go = function go(n) {
    window.history.go(n);
  };

  HashHistory.prototype.ensureURL = function ensureURL(push) {
    var current = this.current.fullPath;
    if (getHash() !== current) {
      push ? pushHash(current) : replaceHash(current);
    }
  };

  HashHistory.prototype.getCurrentLocation = function getCurrentLocation() {
    return getHash();
  };

  return HashHistory;
}(History);

function checkFallback(base) {
  var location = getLocation(base);
  if (!/^\/#/.test(location)) {
    window.location.replace(cleanPath(base + '/#' + location));
    return true;
  }
}

function ensureSlash() {
  var path = getHash();
  if (path.charAt(0) === '/') {
    return true;
  }
  replaceHash('/' + path);
  return false;
}

function getHash() {
  var href = window.location.href;
  var index = href.indexOf('#');
  return index === -1 ? '' : href.slice(index + 1);
}

function pushHash(path) {
  window.location.hash = path;
}

function replaceHash(path) {
  var i = window.location.href.indexOf('#');
  window.location.replace(window.location.href.slice(0, i >= 0 ? i : 0) + '#' + path);
}

var AbstractHistory = function (History$$1) {
  function AbstractHistory(router, base) {
    History$$1.call(this, router, base);
    this.stack = [];
    this.index = -1;
  }

  if (History$$1) AbstractHistory.__proto__ = History$$1;
  AbstractHistory.prototype = Object.create(History$$1 && History$$1.prototype);
  AbstractHistory.prototype.constructor = AbstractHistory;

  AbstractHistory.prototype.push = function push(location, onComplete, onAbort) {
    var this$1 = this;

    this.transitionTo(location, function (route) {
      this$1.stack = this$1.stack.slice(0, this$1.index + 1).concat(route);
      this$1.index++;
      onComplete && onComplete(route);
    }, onAbort);
  };

  AbstractHistory.prototype.replace = function replace(location, onComplete, onAbort) {
    var this$1 = this;

    this.transitionTo(location, function (route) {
      this$1.stack = this$1.stack.slice(0, this$1.index).concat(route);
      onComplete && onComplete(route);
    }, onAbort);
  };

  AbstractHistory.prototype.go = function go(n) {
    var this$1 = this;

    var targetIndex = this.index + n;
    if (targetIndex < 0 || targetIndex >= this.stack.length) {
      return;
    }
    var route = this.stack[targetIndex];
    this.confirmTransition(route, function () {
      this$1.index = targetIndex;
      this$1.updateRoute(route);
    });
  };

  AbstractHistory.prototype.getCurrentLocation = function getCurrentLocation() {
    var current = this.stack[this.stack.length - 1];
    return current ? current.fullPath : '/';
  };

  AbstractHistory.prototype.ensureURL = function ensureURL() {};

  return AbstractHistory;
}(History);

var VueRouter = function VueRouter(options) {
  if (options === void 0) options = {};

  this.app = null;
  this.apps = [];
  this.options = options;
  this.beforeHooks = [];
  this.afterHooks = [];
  this.matcher = createMatcher(options.routes || [], this);

  var mode = options.mode || 'hash';
  this.fallback = mode === 'history' && !supportsPushState;
  if (this.fallback) {
    mode = 'hash';
  }
  if (!inBrowser) {
    mode = 'abstract';
  }
  this.mode = mode;

  switch (mode) {
    case 'history':
      this.history = new HTML5History(this, options.base);
      break;
    case 'hash':
      this.history = new HashHistory(this, options.base, this.fallback);
      break;
    case 'abstract':
      this.history = new AbstractHistory(this, options.base);
      break;
    default:
      if (process.env.NODE_ENV !== 'production') {
        assert(false, "invalid mode: " + mode);
      }
  }
};

var prototypeAccessors = { currentRoute: {} };

VueRouter.prototype.match = function match(raw, current, redirectedFrom) {
  return this.matcher.match(raw, current, redirectedFrom);
};

prototypeAccessors.currentRoute.get = function () {
  return this.history && this.history.current;
};

VueRouter.prototype.init = function init(app) {
  var this$1 = this;

  process.env.NODE_ENV !== 'production' && assert(install.installed, "not installed. Make sure to call `Vue.use(VueRouter)` " + "before creating root instance.");

  this.apps.push(app);

  if (this.app) {
    return;
  }

  this.app = app;

  var history = this.history;

  if (history instanceof HTML5History) {
    history.transitionTo(history.getCurrentLocation());
  } else if (history instanceof HashHistory) {
    var setupHashListener = function setupHashListener() {
      history.setupListeners();
    };
    history.transitionTo(history.getCurrentLocation(), setupHashListener, setupHashListener);
  }

  history.listen(function (route) {
    this$1.apps.forEach(function (app) {
      app._route = route;
    });
  });
};

VueRouter.prototype.beforeEach = function beforeEach(fn) {
  this.beforeHooks.push(fn);
};

VueRouter.prototype.afterEach = function afterEach(fn) {
  this.afterHooks.push(fn);
};

VueRouter.prototype.onReady = function onReady(cb, errorCb) {
  this.history.onReady(cb, errorCb);
};

VueRouter.prototype.onError = function onError(errorCb) {
  this.history.onError(errorCb);
};

VueRouter.prototype.push = function push(location, onComplete, onAbort) {
  this.history.push(location, onComplete, onAbort);
};

VueRouter.prototype.replace = function replace(location, onComplete, onAbort) {
  this.history.replace(location, onComplete, onAbort);
};

VueRouter.prototype.go = function go(n) {
  this.history.go(n);
};

VueRouter.prototype.back = function back() {
  this.go(-1);
};

VueRouter.prototype.forward = function forward() {
  this.go(1);
};

VueRouter.prototype.getMatchedComponents = function getMatchedComponents(to) {
  var route = to ? this.resolve(to).route : this.currentRoute;
  if (!route) {
    return [];
  }
  return [].concat.apply([], route.matched.map(function (m) {
    return Object.keys(m.components).map(function (key) {
      return m.components[key];
    });
  }));
};

VueRouter.prototype.resolve = function resolve(to, current, append) {
  var location = normalizeLocation(to, current || this.history.current, append, this);
  var route = this.match(location, current);
  var fullPath = route.redirectedFrom || route.fullPath;
  var base = this.history.base;
  var href = createHref(base, fullPath, this.mode);
  return {
    location: location,
    route: route,
    href: href,

    normalizedTo: location,
    resolved: route
  };
};

VueRouter.prototype.addRoutes = function addRoutes(routes) {
  this.matcher.addRoutes(routes);
  if (this.history.current !== START) {
    this.history.transitionTo(this.history.getCurrentLocation());
  }
};

Object.defineProperties(VueRouter.prototype, prototypeAccessors);

function createHref(base, fullPath, mode) {
  var path = mode === 'hash' ? '#' + fullPath : fullPath;
  return base ? cleanPath(base + '/' + path) : path;
}

VueRouter.install = install;
VueRouter.version = '2.4.0';

if (inBrowser && window.Vue) {
  window.Vue.use(VueRouter);
}

/* harmony default export */ __webpack_exports__["a"] = (VueRouter);
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(4)))

/***/ }),
/* 25 */
/***/ (function(module, exports) {


module.exports = function listToStyles(parentId, list) {
  var styles = [];
  var newStyles = {};
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = item[0];
    var css = item[1];
    var media = item[2];
    var sourceMap = item[3];
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    };
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] });
    } else {
      newStyles[id].parts.push(part);
    }
  }
  return styles;
};

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = function (module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function () {};
		module.paths = [];

		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function get() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function get() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(undefined);
// imports


// module
exports.push([module.i, "\n.dropdown-toggle::after {\n  /*display: none !important;*/\n}\n", ""]);

// exports


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(undefined);
// imports


// module
exports.push([module.i, "\n.nav-link {\n  cursor:pointer;\n}\n", ""]);

// exports


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(17),
  /* template */
  __webpack_require__(38),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/home/ubuntu/workspace/admin/frontend/components/Aside.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Aside.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-57696064", Component.options)
  } else {
    hotAPI.reload("data-v-57696064", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(18),
  /* template */
  __webpack_require__(41),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/home/ubuntu/workspace/admin/frontend/components/Breadcrumb.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Breadcrumb.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-b506bdf2", Component.options)
  } else {
    hotAPI.reload("data-v-b506bdf2", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(19),
  /* template */
  __webpack_require__(39),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/home/ubuntu/workspace/admin/frontend/components/Footer.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Footer.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-692f1ec2", Component.options)
  } else {
    hotAPI.reload("data-v-692f1ec2", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(44)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(20),
  /* template */
  __webpack_require__(36),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/home/ubuntu/workspace/admin/frontend/components/Header.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Header.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-26ca56de", Component.options)
  } else {
    hotAPI.reload("data-v-26ca56de", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(21),
  /* template */
  __webpack_require__(40),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/home/ubuntu/workspace/admin/frontend/components/Navbar.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Navbar.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6a1a9494", Component.options)
  } else {
    hotAPI.reload("data-v-6a1a9494", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(45)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(22),
  /* template */
  __webpack_require__(37),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/home/ubuntu/workspace/admin/frontend/components/Sidebar.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Sidebar.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4a501f88", Component.options)
  } else {
    hotAPI.reload("data-v-4a501f88", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(23),
  /* template */
  __webpack_require__(43),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/home/ubuntu/workspace/admin/frontend/containers/Full.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Full.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-d4572dd2", Component.options)
  } else {
    hotAPI.reload("data-v-d4572dd2", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('navbar', [_c('button', {
    staticClass: "navbar-toggler mobile-sidebar-toggler hidden-lg-up",
    attrs: {
      "type": "button"
    },
    on: {
      "click": _vm.mobileSidebarToggle
    }
  }, [_vm._v("☰")]), _vm._v(" "), _c('a', {
    staticClass: "navbar-brand",
    attrs: {
      "href": "#"
    }
  }), _vm._v(" "), _c('ul', {
    staticClass: "nav navbar-nav hidden-md-down"
  }, [_c('li', {
    staticClass: "nav-item"
  }, [_c('a', {
    staticClass: "nav-link navbar-toggler sidebar-toggler",
    attrs: {
      "href": "#"
    },
    on: {
      "click": _vm.sidebarToggle
    }
  }, [_vm._v("☰")])]), _vm._v(" "), _c('li', {
    staticClass: "nav-item px-1"
  }, [_c('a', {
    staticClass: "nav-link",
    attrs: {
      "href": "#"
    }
  }, [_vm._v("Dashboard")])]), _vm._v(" "), _c('li', {
    staticClass: "nav-item px-1"
  }, [_c('a', {
    staticClass: "nav-link",
    attrs: {
      "href": "#"
    }
  }, [_vm._v("Users")])]), _vm._v(" "), _c('li', {
    staticClass: "nav-item px-1"
  }, [_c('a', {
    staticClass: "nav-link",
    attrs: {
      "href": "#"
    }
  }, [_vm._v("Settings")])])]), _vm._v(" "), _c('ul', {
    staticClass: "nav navbar-nav ml-auto"
  }, [_c('li', {
    staticClass: "nav-item hidden-md-down"
  }, [_c('a', {
    staticClass: "nav-link",
    attrs: {
      "href": "#"
    }
  }, [_c('i', {
    staticClass: "icon-bell"
  }), _c('span', {
    staticClass: "badge badge-pill badge-danger"
  }, [_vm._v("5")])])]), _vm._v(" "), _c('li', {
    staticClass: "nav-item hidden-md-down"
  }, [_c('a', {
    staticClass: "nav-link",
    attrs: {
      "href": "#"
    }
  }, [_c('i', {
    staticClass: "icon-list"
  })])]), _vm._v(" "), _c('li', {
    staticClass: "nav-item hidden-md-down"
  }, [_c('a', {
    staticClass: "nav-link",
    attrs: {
      "href": "#"
    }
  }, [_c('i', {
    staticClass: "icon-location-pin"
  })])]), _vm._v(" "), _c('dropdown', {
    staticClass: "nav-item",
    attrs: {
      "size": "nav"
    }
  }, [_c('span', {
    slot: "button"
  }, [_c('img', {
    staticClass: "img-avatar",
    attrs: {
      "src": "https://genesisui.com/demo/root/bootstrap4-vue/static/img/avatars/6.jpg",
      "alt": "admin@bootstrapmaster.com"
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "hidden-md-down"
  }, [_vm._v("admin")])]), _vm._v(" "), _c('div', {
    staticClass: "dropdown-menu dropdown-menu-right",
    slot: "dropdown-menu"
  }, [_c('div', {
    staticClass: "dropdown-header text-center"
  }, [_c('strong', [_vm._v("Account")])]), _vm._v(" "), _c('a', {
    staticClass: "dropdown-item",
    attrs: {
      "href": "#"
    }
  }, [_c('i', {
    staticClass: "fa fa-bell-o"
  }), _vm._v(" Updates"), _c('span', {
    staticClass: "badge badge-info"
  }, [_vm._v("42")])]), _vm._v(" "), _c('a', {
    staticClass: "dropdown-item",
    attrs: {
      "href": "#"
    }
  }, [_c('i', {
    staticClass: "fa fa-envelope-o"
  }), _vm._v(" Messages"), _c('span', {
    staticClass: "badge badge-success"
  }, [_vm._v("42")])]), _vm._v(" "), _c('a', {
    staticClass: "dropdown-item",
    attrs: {
      "href": "#"
    }
  }, [_c('i', {
    staticClass: "fa fa-tasks"
  }), _vm._v(" Tasks"), _c('span', {
    staticClass: "badge badge-danger"
  }, [_vm._v("42")])]), _vm._v(" "), _c('a', {
    staticClass: "dropdown-item",
    attrs: {
      "href": "#"
    }
  }, [_c('i', {
    staticClass: "fa fa-comments"
  }), _vm._v(" Comments"), _c('span', {
    staticClass: "badge badge-warning"
  }, [_vm._v("42")])]), _vm._v(" "), _c('div', {
    staticClass: "dropdown-header text-center"
  }, [_c('strong', [_vm._v("Settings")])]), _vm._v(" "), _c('a', {
    staticClass: "dropdown-item",
    attrs: {
      "href": "#"
    }
  }, [_c('i', {
    staticClass: "fa fa-user"
  }), _vm._v(" Profile")]), _vm._v(" "), _c('a', {
    staticClass: "dropdown-item",
    attrs: {
      "href": "#"
    }
  }, [_c('i', {
    staticClass: "fa fa-wrench"
  }), _vm._v(" Settings")]), _vm._v(" "), _c('a', {
    staticClass: "dropdown-item",
    attrs: {
      "href": "#"
    }
  }, [_c('i', {
    staticClass: "fa fa-usd"
  }), _vm._v(" Payments"), _c('span', {
    staticClass: "badge badge-default"
  }, [_vm._v("42")])]), _vm._v(" "), _c('a', {
    staticClass: "dropdown-item",
    attrs: {
      "href": "#"
    }
  }, [_c('i', {
    staticClass: "fa fa-file"
  }), _vm._v(" Projects"), _c('span', {
    staticClass: "badge badge-primary"
  }, [_vm._v("42")])]), _vm._v(" "), _c('div', {
    staticClass: "divider"
  }), _vm._v(" "), _c('a', {
    staticClass: "dropdown-item",
    attrs: {
      "href": "#"
    }
  }, [_c('i', {
    staticClass: "fa fa-shield"
  }), _vm._v(" Lock Account")]), _vm._v(" "), _c('a', {
    staticClass: "dropdown-item",
    attrs: {
      "href": "#"
    }
  }, [_c('i', {
    staticClass: "fa fa-lock"
  }), _vm._v(" Logout")])])]), _vm._v(" "), _c('li', {
    staticClass: "nav-item hidden-md-down"
  }, [_c('a', {
    staticClass: "nav-link navbar-toggler aside-menu-toggler",
    attrs: {
      "href": "#"
    },
    on: {
      "click": _vm.asideToggle
    }
  }, [_vm._v("☰")])])], 1)])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-26ca56de", module.exports)
  }
}

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "sidebar"
  }, [_c('nav', {
    staticClass: "sidebar-nav"
  }, [_c('ul', {
    staticClass: "nav"
  }, [_c('li', {
    staticClass: "nav-item"
  }, [_c('router-link', {
    staticClass: "nav-link",
    attrs: {
      "to": '/dashboard'
    }
  }, [_c('i', {
    staticClass: "icon-speedometer"
  }), _vm._v(" Dashboard")])], 1), _vm._v(" "), _c('router-link', {
    staticClass: "nav-item nav-dropdown",
    attrs: {
      "tag": "li",
      "to": {
        path: '/plugins'
      },
      "disabled": ""
    }
  }, [_c('div', {
    staticClass: "nav-link nav-dropdown-toggle",
    on: {
      "click": _vm.handleClick
    }
  }, [_c('i', {
    staticClass: "icon-puzzle"
  }), _vm._v(" Plugins")]), _vm._v(" "), _c('ul', {
    staticClass: "nav-dropdown-items"
  }, [_c('li', {
    staticClass: "nav-item"
  }, [_c('router-link', {
    staticClass: "nav-link",
    attrs: {
      "to": '/plugins/buttons',
      "exact": ""
    }
  }, [_c('i', {
    staticClass: "icon-puzzle"
  }), _vm._v(" Buttons")])], 1), _vm._v(" "), _c('li', {
    staticClass: "nav-item"
  }, [_c('router-link', {
    staticClass: "nav-link",
    attrs: {
      "to": '/plugins/social-buttons',
      "exact": ""
    }
  }, [_c('i', {
    staticClass: "icon-puzzle"
  }), _vm._v(" Social Buttons")])], 1), _vm._v(" "), _c('li', {
    staticClass: "nav-item"
  }, [_c('router-link', {
    staticClass: "nav-link",
    attrs: {
      "to": '/plugins/cards',
      "exact": ""
    }
  }, [_c('i', {
    staticClass: "icon-puzzle"
  }), _vm._v(" Cards")])], 1), _vm._v(" "), _c('li', {
    staticClass: "nav-item"
  }, [_c('router-link', {
    staticClass: "nav-link",
    attrs: {
      "to": '/plugins/forms',
      "exact": ""
    }
  }, [_c('i', {
    staticClass: "icon-puzzle"
  }), _vm._v(" Forms")])], 1), _vm._v(" "), _c('li', {
    staticClass: "nav-item"
  }, [_c('router-link', {
    staticClass: "nav-link",
    attrs: {
      "to": '/plugins/modals',
      "exact": ""
    }
  }, [_c('i', {
    staticClass: "icon-puzzle"
  }), _vm._v(" Modals")])], 1), _vm._v(" "), _c('li', {
    staticClass: "nav-item"
  }, [_c('router-link', {
    staticClass: "nav-link",
    attrs: {
      "to": '/plugins/switches',
      "exact": ""
    }
  }, [_c('i', {
    staticClass: "icon-puzzle"
  }), _vm._v(" Switches")])], 1), _vm._v(" "), _c('li', {
    staticClass: "nav-item"
  }, [_c('router-link', {
    staticClass: "nav-link",
    attrs: {
      "to": '/plugins/tables',
      "exact": ""
    }
  }, [_c('i', {
    staticClass: "icon-puzzle"
  }), _vm._v(" Tables")])], 1)])]), _vm._v(" "), _c('router-link', {
    staticClass: "nav-item nav-dropdown",
    attrs: {
      "tag": "li",
      "to": {
        path: '/themes'
      },
      "disabled": ""
    }
  }, [_c('div', {
    staticClass: "nav-link nav-dropdown-toggle",
    on: {
      "click": _vm.handleClick
    }
  }, [_c('i', {
    staticClass: "icon-star"
  }), _vm._v(" Themes")]), _vm._v(" "), _c('ul', {
    staticClass: "nav-dropdown-items"
  }, [_c('li', {
    staticClass: "nav-item"
  }, [_c('router-link', {
    staticClass: "nav-link",
    attrs: {
      "to": '/themes/font-awesome',
      "exact": ""
    }
  }, [_c('i', {
    staticClass: "icon-star"
  }), _vm._v(" Font Awesome")])], 1), _vm._v(" "), _c('li', {
    staticClass: "nav-item"
  }, [_c('router-link', {
    staticClass: "nav-link",
    attrs: {
      "to": '/themes/simple-line-icons',
      "exact": ""
    }
  }, [_c('i', {
    staticClass: "icon-star"
  }), _vm._v(" Simple Line Icons")])], 1)])]), _vm._v(" "), _c('li', {
    staticClass: "nav-item"
  }, [_c('router-link', {
    staticClass: "nav-link",
    attrs: {
      "to": '/widgets',
      "exact": ""
    }
  }, [_c('i', {
    staticClass: "icon-calculator"
  }), _vm._v(" Widgets "), _c('span', {
    staticClass: "badge badge-info"
  }, [_vm._v("NEW")])])], 1), _vm._v(" "), _c('li', {
    staticClass: "nav-item"
  }, [_c('router-link', {
    staticClass: "nav-link",
    attrs: {
      "to": '/charts',
      "exact": ""
    }
  }, [_c('i', {
    staticClass: "icon-pie-chart"
  }), _vm._v(" Charts")])], 1), _vm._v(" "), _c('li', {
    staticClass: "divider"
  }), _vm._v(" "), _c('li', {
    staticClass: "nav-title"
  }, [_vm._v("\n        Extras\n      ")]), _vm._v(" "), _c('li', {
    staticClass: "nav-item nav-dropdown"
  }, [_c('a', {
    staticClass: "nav-link nav-dropdown-toggle",
    attrs: {
      "href": "#"
    },
    on: {
      "click": _vm.handleClick
    }
  }, [_c('i', {
    staticClass: "icon-star"
  }), _vm._v(" Pages")]), _vm._v(" "), _c('ul', {
    staticClass: "nav-dropdown-items"
  }, [_c('li', {
    staticClass: "nav-item"
  }, [_c('router-link', {
    staticClass: "nav-link",
    attrs: {
      "to": '/pages/login',
      "exact": ""
    }
  }, [_c('i', {
    staticClass: "icon-star"
  }), _vm._v(" Login")])], 1), _vm._v(" "), _c('li', {
    staticClass: "nav-item"
  }, [_c('router-link', {
    staticClass: "nav-link",
    attrs: {
      "to": '/pages/register',
      "exact": ""
    }
  }, [_c('i', {
    staticClass: "icon-star"
  }), _vm._v(" Register")])], 1), _vm._v(" "), _c('li', {
    staticClass: "nav-item"
  }, [_c('router-link', {
    staticClass: "nav-link",
    attrs: {
      "to": '/pages/404',
      "exact": ""
    }
  }, [_c('i', {
    staticClass: "icon-star"
  }), _vm._v(" Error 404")])], 1), _vm._v(" "), _c('li', {
    staticClass: "nav-item"
  }, [_c('router-link', {
    staticClass: "nav-link",
    attrs: {
      "to": '/pages/500',
      "exact": ""
    }
  }, [_c('i', {
    staticClass: "icon-star"
  }), _vm._v(" Error 500")])], 1)])])], 1)])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-4a501f88", module.exports)
  }
}

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _vm._m(0)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('aside', {
    staticClass: "aside-menu px-2"
  }, [_c('div', {
    staticClass: "aside-options"
  }, [_c('div', {
    staticClass: "clearfix mt-2"
  }, [_c('small', [_c('b', [_vm._v("Option 1")])]), _vm._v(" "), _c('label', {
    staticClass: "switch switch-text switch-pill switch-success switch-sm float-right"
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
  })])]), _vm._v(" "), _c('div', [_c('small', {
    staticClass: "text-muted"
  }, [_vm._v("Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")])])]), _vm._v(" "), _c('div', {
    staticClass: "aside-options"
  }, [_c('div', {
    staticClass: "clearfix mt-1"
  }, [_c('small', [_c('b', [_vm._v("Option 2")])]), _vm._v(" "), _c('label', {
    staticClass: "switch switch-text switch-pill switch-success switch-sm float-right"
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
  })])]), _vm._v(" "), _c('div', [_c('small', {
    staticClass: "text-muted"
  }, [_vm._v("Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")])])]), _vm._v(" "), _c('div', {
    staticClass: "aside-options"
  }, [_c('div', {
    staticClass: "clearfix mt-1"
  }, [_c('small', [_c('b', [_vm._v("Option 3")])]), _vm._v(" "), _c('label', {
    staticClass: "switch switch-text switch-pill switch-success switch-sm float-right"
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
  })])])]), _vm._v(" "), _c('div', {
    staticClass: "aside-options"
  }, [_c('div', {
    staticClass: "clearfix mt-1"
  }, [_c('small', [_c('b', [_vm._v("Option 4")])]), _vm._v(" "), _c('label', {
    staticClass: "switch switch-text switch-pill switch-success switch-sm float-right"
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
  })])])]), _vm._v(" "), _c('hr'), _vm._v(" "), _c('h6', [_vm._v("System Utilization")]), _vm._v(" "), _c('div', {
    staticClass: "text-uppercase mb-q mt-2"
  }, [_c('small', [_c('b', [_vm._v("CPU Usage")])])]), _vm._v(" "), _c('div', {
    staticClass: "progress progress-xs"
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
  }, [_vm._v("348 Processes. 1/4 Cores.")]), _vm._v(" "), _c('div', {
    staticClass: "text-uppercase mb-q mt-h"
  }, [_c('small', [_c('b', [_vm._v("Memory Usage")])])]), _vm._v(" "), _c('div', {
    staticClass: "progress progress-xs"
  }, [_c('div', {
    staticClass: "progress-bar bg-warning",
    staticStyle: {
      "width": "70%"
    },
    attrs: {
      "role": "progressbar",
      "aria-valuenow": "70",
      "aria-valuemin": "0",
      "aria-valuemax": "100"
    }
  })]), _vm._v(" "), _c('small', {
    staticClass: "text-muted"
  }, [_vm._v("11444GB/16384MB")]), _vm._v(" "), _c('div', {
    staticClass: "text-uppercase mb-q mt-h"
  }, [_c('small', [_c('b', [_vm._v("SSD 1 Usage")])])]), _vm._v(" "), _c('div', {
    staticClass: "progress progress-xs"
  }, [_c('div', {
    staticClass: "progress-bar bg-danger",
    staticStyle: {
      "width": "95%"
    },
    attrs: {
      "role": "progressbar",
      "aria-valuenow": "95",
      "aria-valuemin": "0",
      "aria-valuemax": "100"
    }
  })]), _vm._v(" "), _c('small', {
    staticClass: "text-muted"
  }, [_vm._v("243GB/256GB")]), _vm._v(" "), _c('div', {
    staticClass: "text-uppercase mb-q mt-h"
  }, [_c('small', [_c('b', [_vm._v("SSD 2 Usage")])])]), _vm._v(" "), _c('div', {
    staticClass: "progress progress-xs"
  }, [_c('div', {
    staticClass: "progress-bar bg-success",
    staticStyle: {
      "width": "10%"
    },
    attrs: {
      "role": "progressbar",
      "aria-valuenow": "10",
      "aria-valuemin": "0",
      "aria-valuemax": "100"
    }
  })]), _vm._v(" "), _c('small', {
    staticClass: "text-muted"
  }, [_vm._v("25GB/256GB")])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-57696064", module.exports)
  }
}

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _vm._m(0)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('footer', {
    staticClass: "app-footer"
  }, [_c('a', {
    attrs: {
      "href": "http://coreui.io"
    }
  }, [_vm._v("CoreUI")]), _vm._v(" © 2017 creativeLabs.\n  "), _c('span', {
    staticClass: "float-right"
  }, [_vm._v("Powered by "), _c('a', {
    attrs: {
      "href": "http://coreui.io"
    }
  }, [_vm._v("CoreUI")])])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-692f1ec2", module.exports)
  }
}

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('header', {
    staticClass: "app-header navbar"
  }, [_vm._t("default")], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-6a1a9494", module.exports)
  }
}

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('ol', {
    staticClass: "breadcrumb"
  }, _vm._l((_vm.list), function(item, index) {
    return _c('li', {
      staticClass: "breadcrumb-item"
    }, [(_vm.isLast(index)) ? _c('span', {
      staticClass: "active"
    }, [_vm._v(_vm._s(_vm.showName(item)))]) : _c('router-link', {
      attrs: {
        "to": item.path
      }
    }, [_vm._v(_vm._s(_vm.showName(item)))])], 1)
  }))
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-b506bdf2", module.exports)
  }
}

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('router-view')
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-c94b42e8", module.exports)
  }
}

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "app"
  }, [_c('AppHeader'), _vm._v(" "), _c('div', {
    staticClass: "app-body"
  }, [_c('Sidebar'), _vm._v(" "), _c('main', {
    staticClass: "main"
  }, [_c('breadcrumb', {
    attrs: {
      "list": _vm.list
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "container-fluid"
  }, [_c('router-view')], 1)], 1), _vm._v(" "), _c('AppAside')], 1), _vm._v(" "), _c('AppFooter')], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-d4572dd2", module.exports)
  }
}

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(27);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("2e6fa833", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-26ca56de\",\"scoped\":false,\"hasInlineConfig\":false}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Header.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-26ca56de\",\"scoped\":false,\"hasInlineConfig\":false}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Header.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(28);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("8e2db89e", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-4a501f88\",\"scoped\":false,\"hasInlineConfig\":false}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Sidebar.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-4a501f88\",\"scoped\":false,\"hasInlineConfig\":false}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Sidebar.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ })
/******/ ]);