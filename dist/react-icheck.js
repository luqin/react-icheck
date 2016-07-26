(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("classnames"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "classnames"], factory);
	else if(typeof exports === 'object')
		exports["ReactIcheck"] = factory(require("react"), require("classnames"));
	else
		root["ReactIcheck"] = factory(root["react"], root["classnames"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_38__, __WEBPACK_EXTERNAL_MODULE_42__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _interopRequireDefault = __webpack_require__(1)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _Checkbox = __webpack_require__(2);
	
	var _Checkbox2 = _interopRequireDefault(_Checkbox);
	
	var _Radio = __webpack_require__(43);
	
	var _Radio2 = _interopRequireDefault(_Radio);
	
	var _RadioGroup = __webpack_require__(44);
	
	var _RadioGroup2 = _interopRequireDefault(_RadioGroup);
	
	exports['default'] = {
	  Checkbox: _Checkbox2['default'],
	  Radio: _Radio2['default'],
	  RadioGroup: _RadioGroup2['default']
	};
	module.exports = exports['default'];

/***/ },
/* 1 */
/***/ function(module, exports) {

	"use strict";
	
	exports["default"] = function (obj) {
	  return obj && obj.__esModule ? obj : {
	    "default": obj
	  };
	};
	
	exports.__esModule = true;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _get = __webpack_require__(3)['default'];
	
	var _inherits = __webpack_require__(19)['default'];
	
	var _createClass = __webpack_require__(28)['default'];
	
	var _classCallCheck = __webpack_require__(31)['default'];
	
	var _extends = __webpack_require__(32)['default'];
	
	var _interopRequireDefault = __webpack_require__(1)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _react = __webpack_require__(38);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _EnhancedSwitch = __webpack_require__(39);
	
	var _EnhancedSwitch2 = _interopRequireDefault(_EnhancedSwitch);
	
	var Checkbox = (function (_React$Component) {
	  _inherits(Checkbox, _React$Component);
	
	  function Checkbox(props) {
	    _classCallCheck(this, Checkbox);
	
	    _get(Object.getPrototypeOf(Checkbox.prototype), 'constructor', this).call(this, props);
	    this.state = {};
	  }
	
	  _createClass(Checkbox, [{
	    key: 'getValue',
	    value: function getValue() {
	      return this.refs.enhancedSwitch.getValue();
	    }
	  }, {
	    key: 'setChecked',
	    value: function setChecked(newCheckedValue) {
	      this.refs.enhancedSwitch.setChecked(newCheckedValue);
	    }
	  }, {
	    key: 'isChecked',
	    value: function isChecked() {
	      return this.refs.enhancedSwitch.isChecked();
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2['default'].createElement(_EnhancedSwitch2['default'], _extends({ ref: 'enhancedSwitch' }, this.props, { inputType: 'checkbox' }));
	    }
	  }]);
	
	  return Checkbox;
	})(_react2['default'].Component);
	
	exports['default'] = Checkbox;
	module.exports = exports['default'];

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _Object$getOwnPropertyDescriptor = __webpack_require__(4)["default"];
	
	exports["default"] = function get(_x, _x2, _x3) {
	  var _again = true;
	
	  _function: while (_again) {
	    var object = _x,
	        property = _x2,
	        receiver = _x3;
	    _again = false;
	    if (object === null) object = Function.prototype;
	
	    var desc = _Object$getOwnPropertyDescriptor(object, property);
	
	    if (desc === undefined) {
	      var parent = Object.getPrototypeOf(object);
	
	      if (parent === null) {
	        return undefined;
	      } else {
	        _x = parent;
	        _x2 = property;
	        _x3 = receiver;
	        _again = true;
	        desc = parent = undefined;
	        continue _function;
	      }
	    } else if ("value" in desc) {
	      return desc.value;
	    } else {
	      var getter = desc.get;
	
	      if (getter === undefined) {
	        return undefined;
	      }
	
	      return getter.call(receiver);
	    }
	  }
	};
	
	exports.__esModule = true;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(5), __esModule: true };

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(6);
	__webpack_require__(7);
	module.exports = function getOwnPropertyDescriptor(it, key){
	  return $.getDesc(it, key);
	};

/***/ },
/* 6 */
/***/ function(module, exports) {

	var $Object = Object;
	module.exports = {
	  create:     $Object.create,
	  getProto:   $Object.getPrototypeOf,
	  isEnum:     {}.propertyIsEnumerable,
	  getDesc:    $Object.getOwnPropertyDescriptor,
	  setDesc:    $Object.defineProperty,
	  setDescs:   $Object.defineProperties,
	  getKeys:    $Object.keys,
	  getNames:   $Object.getOwnPropertyNames,
	  getSymbols: $Object.getOwnPropertySymbols,
	  each:       [].forEach
	};

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
	var toIObject = __webpack_require__(8);
	
	__webpack_require__(12)('getOwnPropertyDescriptor', function($getOwnPropertyDescriptor){
	  return function getOwnPropertyDescriptor(it, key){
	    return $getOwnPropertyDescriptor(toIObject(it), key);
	  };
	});

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(9)
	  , defined = __webpack_require__(11);
	module.exports = function(it){
	  return IObject(defined(it));
	};

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(10);
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};

/***/ },
/* 10 */
/***/ function(module, exports) {

	var toString = {}.toString;
	
	module.exports = function(it){
	  return toString.call(it).slice(8, -1);
	};

/***/ },
/* 11 */
/***/ function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function(it){
	  if(it == undefined)throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	// most Object methods by ES6 should accept primitives
	var $export = __webpack_require__(13)
	  , core    = __webpack_require__(15)
	  , fails   = __webpack_require__(18);
	module.exports = function(KEY, exec){
	  var fn  = (core.Object || {})[KEY] || Object[KEY]
	    , exp = {};
	  exp[KEY] = exec(fn);
	  $export($export.S + $export.F * fails(function(){ fn(1); }), 'Object', exp);
	};

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(14)
	  , core      = __webpack_require__(15)
	  , ctx       = __webpack_require__(16)
	  , PROTOTYPE = 'prototype';
	
	var $export = function(type, name, source){
	  var IS_FORCED = type & $export.F
	    , IS_GLOBAL = type & $export.G
	    , IS_STATIC = type & $export.S
	    , IS_PROTO  = type & $export.P
	    , IS_BIND   = type & $export.B
	    , IS_WRAP   = type & $export.W
	    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
	    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
	    , key, own, out;
	  if(IS_GLOBAL)source = name;
	  for(key in source){
	    // contains in native
	    own = !IS_FORCED && target && key in target;
	    if(own && key in exports)continue;
	    // export native or passed
	    out = own ? target[key] : source[key];
	    // prevent global pollution for namespaces
	    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
	    // bind timers to global for call from export context
	    : IS_BIND && own ? ctx(out, global)
	    // wrap global constructors for prevent change them in library
	    : IS_WRAP && target[key] == out ? (function(C){
	      var F = function(param){
	        return this instanceof C ? new C(param) : C(param);
	      };
	      F[PROTOTYPE] = C[PROTOTYPE];
	      return F;
	    // make static versions for prototype methods
	    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
	    if(IS_PROTO)(exports[PROTOTYPE] || (exports[PROTOTYPE] = {}))[key] = out;
	  }
	};
	// type bitmap
	$export.F = 1;  // forced
	$export.G = 2;  // global
	$export.S = 4;  // static
	$export.P = 8;  // proto
	$export.B = 16; // bind
	$export.W = 32; // wrap
	module.exports = $export;

/***/ },
/* 14 */
/***/ function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ },
/* 15 */
/***/ function(module, exports) {

	var core = module.exports = {version: '1.2.6'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(17);
	module.exports = function(fn, that, length){
	  aFunction(fn);
	  if(that === undefined)return fn;
	  switch(length){
	    case 1: return function(a){
	      return fn.call(that, a);
	    };
	    case 2: return function(a, b){
	      return fn.call(that, a, b);
	    };
	    case 3: return function(a, b, c){
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function(/* ...args */){
	    return fn.apply(that, arguments);
	  };
	};

/***/ },
/* 17 */
/***/ function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ },
/* 18 */
/***/ function(module, exports) {

	module.exports = function(exec){
	  try {
	    return !!exec();
	  } catch(e){
	    return true;
	  }
	};

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _Object$create = __webpack_require__(20)["default"];
	
	var _Object$setPrototypeOf = __webpack_require__(22)["default"];
	
	exports["default"] = function (subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
	  }
	
	  subClass.prototype = _Object$create(superClass && superClass.prototype, {
	    constructor: {
	      value: subClass,
	      enumerable: false,
	      writable: true,
	      configurable: true
	    }
	  });
	  if (superClass) _Object$setPrototypeOf ? _Object$setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	};
	
	exports.__esModule = true;

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(21), __esModule: true };

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(6);
	module.exports = function create(P, D){
	  return $.create(P, D);
	};

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(23), __esModule: true };

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(24);
	module.exports = __webpack_require__(15).Object.setPrototypeOf;

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.19 Object.setPrototypeOf(O, proto)
	var $export = __webpack_require__(13);
	$export($export.S, 'Object', {setPrototypeOf: __webpack_require__(25).set});

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	// Works with __proto__ only. Old v8 can't work with null proto objects.
	/* eslint-disable no-proto */
	var getDesc  = __webpack_require__(6).getDesc
	  , isObject = __webpack_require__(26)
	  , anObject = __webpack_require__(27);
	var check = function(O, proto){
	  anObject(O);
	  if(!isObject(proto) && proto !== null)throw TypeError(proto + ": can't set as prototype!");
	};
	module.exports = {
	  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
	    function(test, buggy, set){
	      try {
	        set = __webpack_require__(16)(Function.call, getDesc(Object.prototype, '__proto__').set, 2);
	        set(test, []);
	        buggy = !(test instanceof Array);
	      } catch(e){ buggy = true; }
	      return function setPrototypeOf(O, proto){
	        check(O, proto);
	        if(buggy)O.__proto__ = proto;
	        else set(O, proto);
	        return O;
	      };
	    }({}, false) : undefined),
	  check: check
	};

/***/ },
/* 26 */
/***/ function(module, exports) {

	module.exports = function(it){
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(26);
	module.exports = function(it){
	  if(!isObject(it))throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _Object$defineProperty = __webpack_require__(29)["default"];
	
	exports["default"] = (function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];
	      descriptor.enumerable = descriptor.enumerable || false;
	      descriptor.configurable = true;
	      if ("value" in descriptor) descriptor.writable = true;
	
	      _Object$defineProperty(target, descriptor.key, descriptor);
	    }
	  }
	
	  return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);
	    if (staticProps) defineProperties(Constructor, staticProps);
	    return Constructor;
	  };
	})();
	
	exports.__esModule = true;

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(30), __esModule: true };

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(6);
	module.exports = function defineProperty(it, key, desc){
	  return $.setDesc(it, key, desc);
	};

/***/ },
/* 31 */
/***/ function(module, exports) {

	"use strict";
	
	exports["default"] = function (instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	};
	
	exports.__esModule = true;

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _Object$assign = __webpack_require__(33)["default"];
	
	exports["default"] = _Object$assign || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];
	
	    for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }
	
	  return target;
	};
	
	exports.__esModule = true;

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(34), __esModule: true };

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(35);
	module.exports = __webpack_require__(15).Object.assign;

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.1 Object.assign(target, source)
	var $export = __webpack_require__(13);
	
	$export($export.S + $export.F, 'Object', {assign: __webpack_require__(36)});

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.1 Object.assign(target, source, ...)
	var $        = __webpack_require__(6)
	  , toObject = __webpack_require__(37)
	  , IObject  = __webpack_require__(9);
	
	// should work with symbols and should have deterministic property order (V8 bug)
	module.exports = __webpack_require__(18)(function(){
	  var a = Object.assign
	    , A = {}
	    , B = {}
	    , S = Symbol()
	    , K = 'abcdefghijklmnopqrst';
	  A[S] = 7;
	  K.split('').forEach(function(k){ B[k] = k; });
	  return a({}, A)[S] != 7 || Object.keys(a({}, B)).join('') != K;
	}) ? function assign(target, source){ // eslint-disable-line no-unused-vars
	  var T     = toObject(target)
	    , $$    = arguments
	    , $$len = $$.length
	    , index = 1
	    , getKeys    = $.getKeys
	    , getSymbols = $.getSymbols
	    , isEnum     = $.isEnum;
	  while($$len > index){
	    var S      = IObject($$[index++])
	      , keys   = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S)
	      , length = keys.length
	      , j      = 0
	      , key;
	    while(length > j)if(isEnum.call(S, key = keys[j++]))T[key] = S[key];
	  }
	  return T;
	} : Object.assign;

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(11);
	module.exports = function(it){
	  return Object(defined(it));
	};

/***/ },
/* 38 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_38__;

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _get = __webpack_require__(3)['default'];
	
	var _inherits = __webpack_require__(19)['default'];
	
	var _createClass = __webpack_require__(28)['default'];
	
	var _classCallCheck = __webpack_require__(31)['default'];
	
	var _defineProperty = __webpack_require__(40)['default'];
	
	var _objectWithoutProperties = __webpack_require__(41)['default'];
	
	var _extends = __webpack_require__(32)['default'];
	
	var _interopRequireDefault = __webpack_require__(1)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _react = __webpack_require__(38);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames2 = __webpack_require__(42);
	
	var _classnames3 = _interopRequireDefault(_classnames2);
	
	var _iCheck = 'iCheck';
	var _iCheckHelper = _iCheck + '-helper';
	
	var EnhancedSwitch = (function (_React$Component) {
	  _inherits(EnhancedSwitch, _React$Component);
	
	  _createClass(EnhancedSwitch, null, [{
	    key: 'propTypes',
	    value: {
	      inputType: _react2['default'].PropTypes.string.isRequired,
	
	      checked: _react2['default'].PropTypes.bool,
	      defaultChecked: _react2['default'].PropTypes.bool,
	
	      label: _react2['default'].PropTypes.node,
	
	      disabled: _react2['default'].PropTypes.bool,
	
	      indeterminate: _react2['default'].PropTypes.bool,
	
	      onChange: _react2['default'].PropTypes.func,
	      onBlur: _react2['default'].PropTypes.func,
	      onFocus: _react2['default'].PropTypes.func,
	
	      // base class added to customized checkboxes
	      checkboxClass: _react2['default'].PropTypes.string,
	
	      // base class added to customized radio buttons
	      radioClass: _react2['default'].PropTypes.string,
	
	      // class added on checked state (input.checked = true)
	      checkedClass: _react2['default'].PropTypes.string,
	
	      // if not empty, used instead of 'checkedClass' option (input type specific)
	      checkedCheckboxClass: _react2['default'].PropTypes.string,
	      checkedRadioClass: _react2['default'].PropTypes.string,
	
	      // if not empty, added as class name on unchecked state (input.checked = false)
	      uncheckedClass: _react2['default'].PropTypes.string,
	
	      // if not empty, used instead of 'uncheckedClass' option (input type specific)
	      uncheckedCheckboxClass: _react2['default'].PropTypes.string,
	      uncheckedRadioClass: _react2['default'].PropTypes.string,
	
	      // class added on disabled state (input.disabled = true)
	      disabledClass: _react2['default'].PropTypes.string,
	
	      // if not empty, used instead of 'disabledClass' option (input type specific)
	      disabledCheckboxClass: _react2['default'].PropTypes.string,
	      disabledRadioClass: _react2['default'].PropTypes.string,
	
	      // if not empty, added as class name on enabled state (input.disabled = false)
	      enabledClass: _react2['default'].PropTypes.string,
	
	      // if not empty, used instead of 'enabledClass' option (input type specific)
	      enabledCheckboxClass: _react2['default'].PropTypes.string,
	      enabledRadioClass: _react2['default'].PropTypes.string,
	
	      // class added on indeterminate state (input.indeterminate = true)
	      indeterminateClass: _react2['default'].PropTypes.string,
	
	      // if not empty, used instead of 'indeterminateClass' option (input type specific)
	      indeterminateCheckboxClass: _react2['default'].PropTypes.string,
	      indeterminateRadioClass: _react2['default'].PropTypes.string,
	
	      // if not empty, added as class name on determinate state (input.indeterminate = false)
	      determinateClass: _react2['default'].PropTypes.string,
	
	      // if not empty, used instead of 'determinateClass' option (input type specific)
	      determinateCheckboxClass: _react2['default'].PropTypes.string,
	      determinateRadioClass: _react2['default'].PropTypes.string,
	
	      // class added on hover state (pointer is moved onto input)
	      hoverClass: _react2['default'].PropTypes.string,
	
	      // class added on focus state (input has gained focus)
	      focusClass: _react2['default'].PropTypes.string,
	
	      // class added on active state (mouse button is pressed on input)
	      activeClass: _react2['default'].PropTypes.string,
	
	      // adds hoverClass to customized input on label hover and labelHoverClass to label on input hover
	      labelHover: _react2['default'].PropTypes.bool,
	
	      // class added to label if labelHover set to true
	      labelHoverClass: _react2['default'].PropTypes.string,
	
	      // increase clickable area by given % (negative number to decrease)
	      increaseArea: _react2['default'].PropTypes.string,
	
	      // true to set 'pointer' CSS cursor over enabled inputs and 'default' over disabled
	      cursor: _react2['default'].PropTypes.bool,
	
	      // set true to inherit original input's class name
	      inheritClass: _react2['default'].PropTypes.bool,
	
	      // if set to true, input's id is prefixed with 'iCheck-' and attached
	      inheritID: _react2['default'].PropTypes.bool,
	
	      // set true to activate ARIA support
	      aria: _react2['default'].PropTypes.bool,
	
	      // add HTML code or text inside customized input
	      insert: _react2['default'].PropTypes.node,
	
	      children: _react2['default'].PropTypes.node
	    },
	    enumerable: true
	  }, {
	    key: 'defaultProps',
	    value: {
	
	      checkboxClass: 'icheckbox',
	
	      // base class added to customized radio buttons
	      radioClass: 'iradio',
	
	      // class added on checked state (input.checked = true)
	      checkedClass: 'checked',
	
	      // class added on disabled state (input.disabled = true)
	      disabledClass: 'disabled',
	
	      // class added on indeterminate state (input.indeterminate = true)
	      indeterminateClass: 'indeterminate',
	
	      // class added on hover state (pointer is moved onto input)
	      hoverClass: 'hover',
	
	      // class added on focus state (input has gained focus)
	      focusClass: 'focus',
	
	      // class added on active state (mouse button is pressed on input)
	      activeClass: 'active',
	
	      // adds hoverClass to customized input on label hover and labelHoverClass to label on input hover
	      labelHover: true,
	
	      // class added to label if labelHover set to true
	      labelHoverClass: 'hover',
	
	      // increase clickable area by given % (negative number to decrease)
	      increaseArea: '',
	
	      // true to set 'pointer' CSS cursor over enabled inputs and 'default' over disabled
	      cursor: false,
	
	      // set true to inherit original input's class name
	      inheritClass: false,
	
	      // if set to true, input's id is prefixed with 'iCheck-' and attached
	      inheritID: false,
	
	      // set true to activate ARIA support
	      aria: false
	    },
	    enumerable: true
	  }]);
	
	  function EnhancedSwitch(props) {
	    _classCallCheck(this, EnhancedSwitch);
	
	    _get(Object.getPrototypeOf(EnhancedSwitch.prototype), 'constructor', this).call(this, props);
	    var checked = false;
	    if ('checked' in props) {
	      checked = props.checked;
	    } else {
	      checked = props.defaultChecked;
	    }
	    // Assume we aren't on a mobile for server-side-rendering
	    this._mobile = false;
	    this.state = {
	      checked: checked,
	      focused: false,
	      hovered: false,
	      active: false
	    };
	  }
	
	  _createClass(EnhancedSwitch, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      if (typeof navigator !== 'undefined') {
	        this._mobile = /ipad|iphone|ipod|android|blackberry|windows phone|opera mini|silk/i.test(navigator.userAgent);
	      }
	      this.adjustStyle();
	      this.setIndeterminate();
	      this.forceUpdate();
	    }
	  }, {
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      if ('checked' in nextProps) {
	        this.setState({
	          checked: nextProps.checked
	        });
	      }
	    }
	  }, {
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate() {
	      this.adjustStyle();
	      this.setIndeterminate();
	    }
	  }, {
	    key: 'getValue',
	    value: function getValue() {
	      return this.refs.checkbox.value;
	    }
	  }, {
	    key: 'setChecked',
	    value: function setChecked(newCheckedValue) {
	      if (!this.props.hasOwnProperty('checked') || this.props.checked === false) {
	        // TODO: this.props.onParentShouldUpdate(newSwitchedValue);
	        this.refs.checkbox.checked = newCheckedValue;
	      } else {
	        if (false) {
	          var message = 'Cannot call set method while checked is defined as a property.';
	          console.error(message); // eslint-disable-line
	        }
	      }
	    }
	  }, {
	    key: 'setIndeterminate',
	    value: function setIndeterminate() {
	      if (this.props.indeterminate) {
	        this.refs.checkbox.indeterminate = true;
	      }
	    }
	  }, {
	    key: 'adjustStyle',
	    value: function adjustStyle() {
	      var inputContainer = this.refs.inputContainer;
	
	      var _window$getComputedStyle = window.getComputedStyle(inputContainer);
	
	      var position = _window$getComputedStyle.position;
	
	      if (position === 'static') {
	        inputContainer.style.position = 'relative';
	      }
	    }
	  }, {
	    key: 'isChecked',
	    value: function isChecked() {
	      return this.refs.checkbox.checked;
	    }
	  }, {
	    key: 'handleChange',
	    value: function handleChange(e) {
	      var checked = e.target.checked;
	      if (!('checked' in this.props)) {
	        this.setState({
	          checked: checked
	        });
	      }
	
	      if (this.props.onChange) {
	        this.props.onChange(e, checked);
	      }
	    }
	  }, {
	    key: 'handleBlur',
	    value: function handleBlur(e) {
	      this.setState({
	        focused: false
	      });
	
	      if (this.props.onBlur) {
	        this.props.onBlur(e);
	      }
	    }
	  }, {
	    key: 'handleFocus',
	    value: function handleFocus(e) {
	      this.setState({
	        focused: true
	      });
	
	      if (this.props.onFocus) {
	        this.props.onFocus(e);
	      }
	    }
	  }, {
	    key: 'handleHelperClick',
	    value: function handleHelperClick(event) {
	      if (this.props.label) {
	        return;
	      }
	
	      if (this.props.disabled) {
	        return;
	      }
	
	      var newChecked = !this.refs.checkbox.checked;
	
	      if (!('checked' in this.props)) {
	        this.refs.checkbox.checked = newChecked;
	        this.setState({
	          checked: newChecked
	        });
	      }
	
	      event.preventDefault();
	      event.stopPropagation();
	
	      if (this.props.onChange) {
	        // make sure <ins /> element is not target
	        event.target = this.refs.checkbox;
	        this.props.onChange(event, newChecked);
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _classnames;
	
	      var props = this.props;
	      var disabled = props.disabled;
	      var type = props.type;
	      var name = props.name;
	      var value = props.value;
	      var label = props.label;
	      var onBlur = props.onBlur;
	      var onFocus = props.onFocus;
	      var onMouseUp = props.onMouseUp;
	      var onMouseDown = props.onMouseDown;
	      var onMouseLeave = props.onMouseLeave;
	      var onTouchStart = props.onTouchStart;
	      var onTouchEnd = props.onTouchEnd;
	      var className = props.className;
	
	      var other = _objectWithoutProperties(props, ['type', 'name', 'value', 'label', 'onBlur', 'onFocus', 'onMouseUp', 'onMouseDown', 'onMouseLeave', 'onTouchStart', 'onTouchEnd', 'className']);
	
	      var checked = this.state.checked;
	
	      // Setup clickable area
	      var area = ('' + props.increaseArea).replace('%', '') | 0;
	
	      // Clickable area limit
	      if (area < -50) {
	        area = -50;
	      }
	
	      var id = props.id;
	
	      // Layer styles
	      var offset = -area + '%';
	      var size = 100 + area * 2 + '%';
	      var layer = {
	        position: 'absolute',
	        top: offset,
	        left: offset,
	        display: 'block',
	        width: size,
	        height: size,
	        margin: 0,
	        padding: 0,
	        background: '#fff',
	        border: 0,
	        opacity: 0,
	        cursor: disabled ? 'default' : 'pointer'
	      };
	
	      // Choose how to hide input
	      var hide = undefined;
	      if (this._mobile) {
	        hide = {
	          position: 'absolute',
	          visibility: 'hidden'
	        };
	      } else if (area) {
	        hide = layer;
	      } else {
	        hide = {
	          position: 'absolute',
	          opacity: 0
	        };
	      }
	
	      // Check ARIA option
	      var aria = !!props.aria;
	
	      // TODO: Set ARIA placeholder
	      // let ariaID = _iCheck + '-' + Math.random().toString(36).substr(2, 6);
	
	      var helper = undefined;
	      var indeterminateClass = props.indeterminateClass;
	      if (props.inputType === 'checkbox' && typeof props.indeterminateCheckboxClass !== 'undefined') {
	        indeterminateClass = props.indeterminateCheckboxClass;
	      } else if (props.inputType === 'radio' && typeof props.indeterminateRadioClass !== 'undefined') {
	        indeterminateClass = props.indeterminateRadioClass;
	      }
	
	      var wrapProps = {
	        className: (0, _classnames3['default'])((_classnames = {}, _defineProperty(_classnames, props.checkboxClass, props.inputType === 'checkbox'), _defineProperty(_classnames, props.radioClass, props.inputType === 'radio'), _defineProperty(_classnames, indeterminateClass, props.indeterminate), _defineProperty(_classnames, props.checkedClass, checked), _defineProperty(_classnames, props.disabledClass, disabled), _defineProperty(_classnames, props.hoverClass, this.state.hovered), _defineProperty(_classnames, props.focusClass, this.state.focused), _defineProperty(_classnames, props.activeClass, this.state.active), _classnames))
	      };
	
	      if (aria) {
	        wrapProps.role = props.inputType;
	        // Set ARIA "labelledby"
	        wrapProps['aria-labelledby'] = '';
	      }
	
	      if (props.inheritClass) {
	        wrapProps.className = (0, _classnames3['default'])(wrapProps.className, props.className);
	      }
	
	      if (props.inheritID && id) {
	        wrapProps.id = _iCheck + '-' + id;
	      }
	
	      var helperProps = {
	        className: _iCheckHelper,
	        style: layer,
	        onClick: this.handleHelperClick.bind(this)
	      };
	
	      // Layer addition
	      helper = _react2['default'].createElement('ins', helperProps);
	
	      var inputProps = {
	        ref: 'checkbox',
	        type: props.inputType,
	        style: hide,
	        name: name,
	        value: value,
	        defaultChecked: props.defaultChecked,
	        onChange: this.handleChange.bind(this),
	        onBlur: this.handleBlur.bind(this),
	        onFocus: this.handleFocus.bind(this)
	      };
	
	      var inputElement = _react2['default'].createElement('input', _extends({}, other, inputProps));
	
	      var insertElement = props.insert || undefined;
	      if (insertElement && !_react2['default'].isValidElement(insertElement)) {
	        insertElement = _react2['default'].createElement('div', { dangerouslySetInnerHTML: { __html: insertElement } });
	      }
	
	      var inputContainer = _react2['default'].createElement(
	        'div',
	        _extends({ ref: 'inputContainer' }, wrapProps),
	        inputElement,
	        insertElement,
	        helper
	      );
	
	      var labelElement = props.label;
	      if (!labelElement) {
	        return inputContainer;
	      }
	      if (!_react2['default'].isValidElement(labelElement)) {
	        labelElement = _react2['default'].createElement('span', { dangerouslySetInnerHTML: { __html: labelElement } });
	      }
	
	      // Label events
	      function handleLabelEvent(event) {
	        // Do nothing if input is disabled
	        if (disabled) {
	          return;
	        }
	
	        var etype = event.type;
	
	        // Click
	        if (etype === 'click') {
	          // FIXME
	          // if ($(event.target).is('a')) {
	          //  return;
	          // }
	          // Hover state
	        } else if (props.labelHover) {
	            // mouseout|touchend false
	            this.setState({
	              hovered: !/ut|nd/.test(etype)
	            });
	          }
	
	        if (this._mobile) {
	          event.stopPropagation();
	        }
	        // return false;
	      }
	
	      var labelProps = {
	        // onClick: handleLabelEvent.bind(this),
	        onMouseOver: handleLabelEvent.bind(this),
	        onMouseOut: handleLabelEvent.bind(this),
	        onTouchStart: handleLabelEvent.bind(this),
	        onTouchEnd: handleLabelEvent.bind(this)
	      };
	
	      return _react2['default'].createElement(
	        'label',
	        labelProps,
	        inputContainer,
	        labelElement
	      );
	    }
	  }]);
	
	  return EnhancedSwitch;
	})(_react2['default'].Component);
	
	exports['default'] = EnhancedSwitch;
	module.exports = exports['default'];

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _Object$defineProperty = __webpack_require__(29)["default"];
	
	exports["default"] = function (obj, key, value) {
	  if (key in obj) {
	    _Object$defineProperty(obj, key, {
	      value: value,
	      enumerable: true,
	      configurable: true,
	      writable: true
	    });
	  } else {
	    obj[key] = value;
	  }
	
	  return obj;
	};
	
	exports.__esModule = true;

/***/ },
/* 41 */
/***/ function(module, exports) {

	"use strict";
	
	exports["default"] = function (obj, keys) {
	  var target = {};
	
	  for (var i in obj) {
	    if (keys.indexOf(i) >= 0) continue;
	    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
	    target[i] = obj[i];
	  }
	
	  return target;
	};
	
	exports.__esModule = true;

/***/ },
/* 42 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_42__;

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _get = __webpack_require__(3)['default'];
	
	var _inherits = __webpack_require__(19)['default'];
	
	var _createClass = __webpack_require__(28)['default'];
	
	var _classCallCheck = __webpack_require__(31)['default'];
	
	var _extends = __webpack_require__(32)['default'];
	
	var _interopRequireDefault = __webpack_require__(1)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _react = __webpack_require__(38);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _EnhancedSwitch = __webpack_require__(39);
	
	var _EnhancedSwitch2 = _interopRequireDefault(_EnhancedSwitch);
	
	var Radio = (function (_React$Component) {
	  _inherits(Radio, _React$Component);
	
	  function Radio() {
	    _classCallCheck(this, Radio);
	
	    _get(Object.getPrototypeOf(Radio.prototype), 'constructor', this).apply(this, arguments);
	  }
	
	  _createClass(Radio, [{
	    key: 'getValue',
	    value: function getValue() {
	      return this.refs.enhancedSwitch.getValue();
	    }
	  }, {
	    key: 'setChecked',
	    value: function setChecked(newCheckedValue) {
	      this.refs.enhancedSwitch.setSwitched(newCheckedValue);
	    }
	  }, {
	    key: 'isChecked',
	    value: function isChecked() {
	      return this.refs.enhancedSwitch.isSwitched();
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var enhancedSwitchProps = {
	        ref: 'enhancedSwitch',
	        inputType: 'radio'
	      };
	
	      // labelClassName
	      return _react2['default'].createElement(_EnhancedSwitch2['default'], _extends({}, this.props, enhancedSwitchProps));
	    }
	  }]);
	
	  return Radio;
	})(_react2['default'].Component);
	
	exports['default'] = Radio;
	module.exports = exports['default'];

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _get = __webpack_require__(3)['default'];
	
	var _inherits = __webpack_require__(19)['default'];
	
	var _createClass = __webpack_require__(28)['default'];
	
	var _classCallCheck = __webpack_require__(31)['default'];
	
	var _objectWithoutProperties = __webpack_require__(41)['default'];
	
	var _extends = __webpack_require__(32)['default'];
	
	var _interopRequireDefault = __webpack_require__(1)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _react = __webpack_require__(38);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Radio = __webpack_require__(43);
	
	var _Radio2 = _interopRequireDefault(_Radio);
	
	var RadioGroup = (function (_React$Component) {
	  _inherits(RadioGroup, _React$Component);
	
	  _createClass(RadioGroup, null, [{
	    key: 'propTypes',
	    value: {
	      /**
	       * The name that will be applied to all radio buttons inside it.
	       */
	      name: _react2['default'].PropTypes.string.isRequired,
	
	      /**
	       * Sets the default radio button to be the one whose
	       * value matches defaultValue (case-sensitive).
	       * This will override any individual radio button with
	       * the defaultChecked or checked property stated.
	       */
	      defaultValue: _react2['default'].PropTypes.string,
	
	      /**
	       * The value of the currently selected radio button.
	       */
	      value: _react2['default'].PropTypes.string,
	
	      /**
	       * Callback function that is fired when a radio button has
	       * been clicked. Returns the event and the value of the radio
	       * button that has been selected.
	       */
	      onChange: _react2['default'].PropTypes.func,
	
	      /**
	       * Should be used to pass `Radio` components.
	       */
	      children: _react2['default'].PropTypes.node,
	
	      /**
	       * The css class name of the root element.
	       */
	      className: _react2['default'].PropTypes.string
	    },
	    enumerable: true
	  }]);
	
	  function RadioGroup(props) {
	    _classCallCheck(this, RadioGroup);
	
	    _get(Object.getPrototypeOf(RadioGroup.prototype), 'constructor', this).call(this, props);
	    this.state = {
	      numberCheckedRadioButtons: 0,
	      value: this.props.value || this.props.defaultValue || ''
	    };
	  }
	
	  _createClass(RadioGroup, [{
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	      var _this = this;
	
	      var cnt = 0;
	
	      _react2['default'].Children.forEach(this.props.children, function (option) {
	        if (_this.hasCheckAttribute(option)) cnt++;
	      }, this);
	
	      this.setState({ numberCheckedRadioButtons: cnt });
	    }
	  }, {
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      if (nextProps.hasOwnProperty('value')) {
	        this.setState({
	          value: nextProps.value
	        });
	      }
	    }
	  }, {
	    key: 'getValue',
	    value: function getValue() {
	      return this.state.value;
	    }
	  }, {
	    key: 'setValue',
	    value: function setValue(newValue) {
	      this.updateRadioButtons(newValue);
	    }
	  }, {
	    key: 'clearValue',
	    value: function clearValue() {
	      this.setValue('');
	    }
	  }, {
	    key: 'hasCheckAttribute',
	    value: function hasCheckAttribute(radioButton) {
	      return radioButton.props.hasOwnProperty('checked') && radioButton.props.checked;
	    }
	  }, {
	    key: 'updateRadioButtons',
	    value: function updateRadioButtons(newValue) {
	      if (this.state.numberCheckedRadioButtons === 0) {
	        this.setState({ value: newValue });
	      } else {
	        if (false) {
	          var message = 'Cannot select a different radio button while another radio button ' + 'has the \'checked\' property set to true.';
	          console.error(message); // eslint-disable-line
	        }
	      }
	    }
	  }, {
	    key: 'handleChange',
	    value: function handleChange(e /* TODO , newValue */) {
	      var newValue = e.target.value;
	
	      this.updateRadioButtons(newValue);
	
	      // Successful update
	      if (this.state.numberCheckedRadioButtons === 0) {
	        if (this.props.onChange) {
	          this.props.onChange(e, newValue);
	        }
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;
	
	      var options = _react2['default'].Children.map(this.props.children, function (option) {
	        var _option$props = option.props;
	        var name = _option$props.name;
	        var value = _option$props.value;
	        var label = _option$props.label;
	        var onChange = _option$props.onChange;
	
	        var other = _objectWithoutProperties(_option$props, ['name', 'value', 'label', 'onChange']);
	
	        return _react2['default'].createElement(_Radio2['default'], _extends({}, other, {
	          ref: option.props.value,
	          name: _this2.props.name,
	          key: option.props.value,
	          value: option.props.value,
	          label: option.props.label,
	          onChange: _this2.handleChange.bind(_this2),
	          checked: option.props.value === _this2.state.value
	        }));
	      }, this);
	
	      return _react2['default'].createElement(
	        'div',
	        { className: this.props.className },
	        options
	      );
	    }
	  }]);
	
	  return RadioGroup;
	})(_react2['default'].Component);
	
	exports['default'] = RadioGroup;
	module.exports = exports['default'];

/***/ }
/******/ ])
});
;
//# sourceMappingURL=react-icheck.js.map