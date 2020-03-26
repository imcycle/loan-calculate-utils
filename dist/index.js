/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
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
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/number-precision/build/index.js":
/*!******************************************************!*\
  !*** ./node_modules/number-precision/build/index.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, '__esModule', { value: true });\n\n/**\r\n * @desc 解决浮动运算问题，避免小数点后产生多位数和计算精度损失。\r\n * 问题示例：2.3 + 2.4 = 4.699999999999999，1.0 - 0.9 = 0.09999999999999998\r\n */\r\n/**\r\n * 把错误的数据转正\r\n * strip(0.09999999999999998)=0.1\r\n */\r\nfunction strip(num, precision) {\r\n    if (precision === void 0) { precision = 12; }\r\n    return +parseFloat(num.toPrecision(precision));\r\n}\r\n/**\r\n * Return digits length of a number\r\n * @param {*number} num Input number\r\n */\r\nfunction digitLength(num) {\r\n    // Get digit length of e\r\n    var eSplit = num.toString().split(/[eE]/);\r\n    var len = (eSplit[0].split('.')[1] || '').length - (+(eSplit[1] || 0));\r\n    return len > 0 ? len : 0;\r\n}\r\n/**\r\n * 把小数转成整数，支持科学计数法。如果是小数则放大成整数\r\n * @param {*number} num 输入数\r\n */\r\nfunction float2Fixed(num) {\r\n    if (num.toString().indexOf('e') === -1) {\r\n        return Number(num.toString().replace('.', ''));\r\n    }\r\n    var dLen = digitLength(num);\r\n    return dLen > 0 ? strip(num * Math.pow(10, dLen)) : num;\r\n}\r\n/**\r\n * 检测数字是否越界，如果越界给出提示\r\n * @param {*number} num 输入数\r\n */\r\nfunction checkBoundary(num) {\r\n    if (_boundaryCheckingState) {\r\n        if (num > Number.MAX_SAFE_INTEGER || num < Number.MIN_SAFE_INTEGER) {\r\n            console.warn(num + \" is beyond boundary when transfer to integer, the results may not be accurate\");\r\n        }\r\n    }\r\n}\r\n/**\r\n * 精确乘法\r\n */\r\nfunction times(num1, num2) {\r\n    var others = [];\r\n    for (var _i = 2; _i < arguments.length; _i++) {\r\n        others[_i - 2] = arguments[_i];\r\n    }\r\n    if (others.length > 0) {\r\n        return times.apply(void 0, [times(num1, num2), others[0]].concat(others.slice(1)));\r\n    }\r\n    var num1Changed = float2Fixed(num1);\r\n    var num2Changed = float2Fixed(num2);\r\n    var baseNum = digitLength(num1) + digitLength(num2);\r\n    var leftValue = num1Changed * num2Changed;\r\n    checkBoundary(leftValue);\r\n    return leftValue / Math.pow(10, baseNum);\r\n}\r\n/**\r\n * 精确加法\r\n */\r\nfunction plus(num1, num2) {\r\n    var others = [];\r\n    for (var _i = 2; _i < arguments.length; _i++) {\r\n        others[_i - 2] = arguments[_i];\r\n    }\r\n    if (others.length > 0) {\r\n        return plus.apply(void 0, [plus(num1, num2), others[0]].concat(others.slice(1)));\r\n    }\r\n    var baseNum = Math.pow(10, Math.max(digitLength(num1), digitLength(num2)));\r\n    return (times(num1, baseNum) + times(num2, baseNum)) / baseNum;\r\n}\r\n/**\r\n * 精确减法\r\n */\r\nfunction minus(num1, num2) {\r\n    var others = [];\r\n    for (var _i = 2; _i < arguments.length; _i++) {\r\n        others[_i - 2] = arguments[_i];\r\n    }\r\n    if (others.length > 0) {\r\n        return minus.apply(void 0, [minus(num1, num2), others[0]].concat(others.slice(1)));\r\n    }\r\n    var baseNum = Math.pow(10, Math.max(digitLength(num1), digitLength(num2)));\r\n    return (times(num1, baseNum) - times(num2, baseNum)) / baseNum;\r\n}\r\n/**\r\n * 精确除法\r\n */\r\nfunction divide(num1, num2) {\r\n    var others = [];\r\n    for (var _i = 2; _i < arguments.length; _i++) {\r\n        others[_i - 2] = arguments[_i];\r\n    }\r\n    if (others.length > 0) {\r\n        return divide.apply(void 0, [divide(num1, num2), others[0]].concat(others.slice(1)));\r\n    }\r\n    var num1Changed = float2Fixed(num1);\r\n    var num2Changed = float2Fixed(num2);\r\n    checkBoundary(num1Changed);\r\n    checkBoundary(num2Changed);\r\n    // fix: 类似 10 ** -4 为 0.00009999999999999999，strip 修正\r\n    return times((num1Changed / num2Changed), strip(Math.pow(10, digitLength(num2) - digitLength(num1))));\r\n}\r\n/**\r\n * 四舍五入\r\n */\r\nfunction round(num, ratio) {\r\n    var base = Math.pow(10, ratio);\r\n    return divide(Math.round(times(num, base)), base);\r\n}\r\nvar _boundaryCheckingState = true;\r\n/**\r\n * 是否进行边界检查，默认开启\r\n * @param flag 标记开关，true 为开启，false 为关闭，默认为 true\r\n */\r\nfunction enableBoundaryChecking(flag) {\r\n    if (flag === void 0) { flag = true; }\r\n    _boundaryCheckingState = flag;\r\n}\r\nvar index = { strip: strip, plus: plus, minus: minus, times: times, divide: divide, round: round, digitLength: digitLength, float2Fixed: float2Fixed, enableBoundaryChecking: enableBoundaryChecking };\n\nexports.strip = strip;\nexports.plus = plus;\nexports.minus = minus;\nexports.times = times;\nexports.divide = divide;\nexports.round = round;\nexports.digitLength = digitLength;\nexports.float2Fixed = float2Fixed;\nexports.enableBoundaryChecking = enableBoundaryChecking;\nexports['default'] = index;\n\n\n//# sourceURL=webpack:///./node_modules/number-precision/build/index.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var number_precision__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! number-precision */ \"./node_modules/number-precision/build/index.js\");\n/* harmony import */ var number_precision__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(number_precision__WEBPACK_IMPORTED_MODULE_0__);\n\n\n/**\n * Average Capital Plus Interest（等额本息）\n * @param {{\n *  amount: number; // 贷款金额\n *  term: number;   // 贷款月数\n *  rate: number;   // 年利率\n * }} param0 \n */\nfunction calcAverageCapitalPlusInterest({ amount, term, rate }) {\n  // 月利率\n  var monthlyRate = Object(number_precision__WEBPACK_IMPORTED_MODULE_0__[\"times\"])(Object(number_precision__WEBPACK_IMPORTED_MODULE_0__[\"divide\"])(rate, 12), 0.01);\n\n  // 每月月供 每月月供额 =〔贷款本金×月利率×(1＋月利率)＾还款月数〕÷〔(1＋月利率)＾还款月数-1〕\n  var monthlyPayment = Object(number_precision__WEBPACK_IMPORTED_MODULE_0__[\"divide\"])(\n    Object(number_precision__WEBPACK_IMPORTED_MODULE_0__[\"times\"])(\n      amount,\n      monthlyRate,\n      Math.pow(\n        Object(number_precision__WEBPACK_IMPORTED_MODULE_0__[\"plus\"])(1, monthlyRate),\n        term\n      ),\n    ),\n    Object(number_precision__WEBPACK_IMPORTED_MODULE_0__[\"minus\"])(\n      Math.pow(\n        Object(number_precision__WEBPACK_IMPORTED_MODULE_0__[\"plus\"])(1, monthlyRate),\n        term,\n      ),\n      1,\n    )\n  );\n\n  // 还款总额\n  var totalPayment = Object(number_precision__WEBPACK_IMPORTED_MODULE_0__[\"times\"])(monthlyPayment, term);\n\n  // 利息总额\n  var totalInterest = Object(number_precision__WEBPACK_IMPORTED_MODULE_0__[\"minus\"])(totalPayment, amount);\n\n  // 每月还款明细\n  var list = [];\n  var beginningBalance = amount;\n  for (var i = 0; i < term; i++) {\n    var monthlyInterest = Object(number_precision__WEBPACK_IMPORTED_MODULE_0__[\"times\"])(beginningBalance, monthlyRate);\n    var monthlyPrincipal = Object(number_precision__WEBPACK_IMPORTED_MODULE_0__[\"minus\"])(monthlyPayment, monthlyInterest);\n    var endingBalance = Object(number_precision__WEBPACK_IMPORTED_MODULE_0__[\"minus\"])(beginningBalance, monthlyPrincipal);\n    list.push({\n      key: i + 1,\n      beginningBalance: beginningBalance.toFixed(2),\n      interest: monthlyInterest.toFixed(2),\n      principal: monthlyPrincipal.toFixed(2),\n      endingBalance: endingBalance.toFixed(2),\n    });\n    beginningBalance = endingBalance;\n  }\n\n  return {\n    monthlyPayment: monthlyPayment.toFixed(2),\n    totalPayment: totalPayment.toFixed(2),\n    totalInterest: totalInterest.toFixed(2),\n    list,\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  calcAverageCapitalPlusInterest\n});\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });