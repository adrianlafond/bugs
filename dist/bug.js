(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("Bug", [], factory);
	else if(typeof exports === 'object')
		exports["Bug"] = factory();
	else
		root["Bug"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/bug/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@adrianlafond/geom/dist/geom.js":
/*!******************************************************!*\
  !*** ./node_modules/@adrianlafond/geom/dist/geom.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(t,e){ true?module.exports=e():undefined}(window,function(){return function(t){var e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(o,r,function(e){return t[e]}.bind(null,r));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=1)}([function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=function(){function t(t,e){void 0===t&&(t=0),void 0===e&&(e=0),this.x=t,this.y=e}return Object.defineProperty(t.prototype,"data",{get:function(){return{x:this.x,y:this.y}},enumerable:!0,configurable:!0}),t.prototype.clone=function(){return new t(this.x,this.y)},t.prototype.add=function(t){return this.x+=t.x,this.y+=t.y,this},t.prototype.subtract=function(t){return this.x-=t.x,this.y-=t.y,this},t.prototype.toString=function(){return JSON.stringify(this.data)},t.distance=function(t,e){return Math.sqrt((t.x-e.x)*(t.x-e.x)+(t.y-e.y)*(t.y-e.y))},t.radians=function(t,e){return Math.atan2(e.y-t.y,e.x-t.x)},t}();e.default=o},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(0);e.Point=o.default;var r=n(2);e.Vector=r.default},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(0),r=function(){function t(t,e,n){void 0===t&&(t=0),void 0===e&&(e=0),void 0===n&&(n=0),this.model={},t instanceof o.default?(this.model.point=t.clone(),this.model.radians=e):(this.model.point=new o.default(t,e),this.model.radians=n)}return Object.defineProperty(t.prototype,"point",{get:function(){return this.model.point.clone()},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"x",{get:function(){return this.model.point.x},set:function(t){this.model.point.x=t},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"y",{get:function(){return this.model.point.y},set:function(t){this.model.point.y=t},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"radians",{get:function(){return this.model.radians},set:function(t){this.model.radians=t},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"data",{get:function(){return{x:this.x,y:this.y,radians:this.radians}},enumerable:!0,configurable:!0}),t.prototype.clone=function(){return new t(this.point,this.radians)},t.prototype.toString=function(){return JSON.stringify(this.data)},t}();e.default=r}])});
//# sourceMappingURL=geom.js.map

/***/ }),

/***/ "./src/bug/bug.ts":
/*!************************!*\
  !*** ./src/bug/bug.ts ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var geom_1 = __webpack_require__(/*! @adrianlafond/geom */ "./node_modules/@adrianlafond/geom/dist/geom.js");
var segment_1 = __webpack_require__(/*! ./segment */ "./src/bug/segment.ts");
var Bug = /** @class */ (function () {
    function Bug(options) {
        if (options === void 0) { options = {}; }
        var _a = options.x, x = _a === void 0 ? 0 : _a, _b = options.y, y = _b === void 0 ? 0 : _b, _c = options.radians, radians = _c === void 0 ? 0 : _c;
        var _d = options.target || {}, _e = _d.x, targetX = _e === void 0 ? 0 : _e, _f = _d.y, targetY = _f === void 0 ? 0 : _f;
        this.model = {
            segments: [new segment_1.default({
                    vector: new geom_1.Vector(x, y, radians),
                })],
            target: new geom_1.Point(targetX, targetY),
            progress: 0,
            step: 0,
            maxSteps: 2,
        };
        this.target = this.model.target;
    }
    Bug.prototype.tick = function (delta) {
        var _this = this;
        if (delta === void 0) { delta = 1; }
        this.model.progress = Math.min(1, this.model.progress + 0.05);
        var isStepComplete = this.model.progress >= 1;
        this.model.segments.forEach(function (segment) {
            segment.tick(delta * _this.model.progress);
            if (isStepComplete) {
                segment.step();
            }
        });
        if (isStepComplete) {
            this.model.progress = 0;
            this.model.step += 1;
            if (this.model.step >= this.model.maxSteps) {
                this.model.step = 0;
            }
        }
        var _a = this.model, progress = _a.progress, step = _a.step;
        return this;
    };
    Object.defineProperty(Bug.prototype, "target", {
        get: function () {
            return this.model.target.data;
        },
        set: function (value) {
            this.model.target.x = value.x;
            this.model.target.y = value.y;
            this.model.segments[0].target = this.model.target;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Bug.prototype, "x", {
        get: function () {
            return this.model.segments[0].x;
        },
        set: function (value) {
            this.model.segments[0].x = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Bug.prototype, "y", {
        get: function () {
            return this.model.segments[0].y;
        },
        set: function (value) {
            this.model.segments[0].y = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Bug.prototype, "radians", {
        get: function () {
            return this.model.segments[0].radians;
        },
        set: function (value) {
            this.model.segments[0].radians = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Bug.prototype, "segments", {
        get: function () {
            return this.model.segments.map(function (segment) { return segment.data; });
        },
        enumerable: true,
        configurable: true
    });
    return Bug;
}());
exports.default = Bug;


/***/ }),

/***/ "./src/bug/index.ts":
/*!**************************!*\
  !*** ./src/bug/index.ts ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var bug_1 = __webpack_require__(/*! ./bug */ "./src/bug/bug.ts");
exports.default = bug_1.default;


/***/ }),

/***/ "./src/bug/leg.ts":
/*!************************!*\
  !*** ./src/bug/leg.ts ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Leg = /** @class */ (function () {
    function Leg(options) {
        this.model = options;
    }
    Object.defineProperty(Leg.prototype, "data", {
        get: function () {
            return this.model.joints.map(function (joint) { return joint.data; });
        },
        enumerable: true,
        configurable: true
    });
    return Leg;
}());
exports.default = Leg;


/***/ }),

/***/ "./src/bug/segment.ts":
/*!****************************!*\
  !*** ./src/bug/segment.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var geom_1 = __webpack_require__(/*! @adrianlafond/geom */ "./node_modules/@adrianlafond/geom/dist/geom.js");
var leg_1 = __webpack_require__(/*! ./leg */ "./src/bug/leg.ts");
var Segment = /** @class */ (function () {
    function Segment(options) {
        this.model = {
            vector: new geom_1.Vector(),
            legs: [
                new leg_1.default({ joints: [new geom_1.Point(), new geom_1.Point(12, 2), new geom_1.Point(18, -2)] }),
                new leg_1.default({ joints: [new geom_1.Point(), new geom_1.Point(-12, 2), new geom_1.Point(-18, -2)] }),
            ],
            maxRotation: Math.PI * 0.5,
            maxDistance: 10,
            target: new geom_1.Point(),
            vectorStart: new geom_1.Vector(),
        };
        this.model = __assign({}, this.model, options);
        this.model.vectorStart = this.model.vector.clone();
    }
    Object.defineProperty(Segment.prototype, "target", {
        get: function () {
            return this.model.target.clone();
        },
        set: function (value) {
            this.model.target = value;
        },
        enumerable: true,
        configurable: true
    });
    Segment.prototype.tick = function (progress) {
        if (progress === void 0) { progress = 0; }
        var compensateRadians = Math.PI * 0.5;
        var _a = this.model, target = _a.target, vector = _a.vector, vectorStart = _a.vectorStart, maxDistance = _a.maxDistance;
        var targetRadians = Math.atan2(target.y - vectorStart.y, target.x - vectorStart.x) + compensateRadians;
        console.log(targetRadians, vectorStart.radians);
        var distance = Math.min(maxDistance, geom_1.Point.distance(target, vectorStart.point));
        vector.radians = vectorStart.radians + (targetRadians - vectorStart.radians) * progress;
        vector.x = vectorStart.x + Math.cos(vector.radians - compensateRadians) * (distance * progress);
        vector.y = vectorStart.y + Math.sin(vector.radians - compensateRadians) * (distance * progress);
    };
    Segment.prototype.step = function () {
        this.model.vectorStart = this.model.vector.clone();
    };
    Object.defineProperty(Segment.prototype, "x", {
        get: function () {
            return this.model.vector.x;
        },
        set: function (value) {
            this.model.vector.x = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Segment.prototype, "y", {
        get: function () {
            return this.model.vector.y;
        },
        set: function (value) {
            this.model.vector.y = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Segment.prototype, "radians", {
        get: function () {
            return this.model.vector.radians;
        },
        set: function (value) {
            this.model.vector.radians = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Segment.prototype, "data", {
        get: function () {
            var _this = this;
            return __assign({}, this.model.vector.data, { legs: this.model.legs.map(function (leg) { return (leg.data.map(function (point) { return ({
                    x: point.x + _this.x,
                    y: point.y + _this.y,
                }); })); }) });
        },
        enumerable: true,
        configurable: true
    });
    return Segment;
}());
exports.default = Segment;


/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9CdWcvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL0J1Zy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9CdWcvLi9ub2RlX21vZHVsZXMvQGFkcmlhbmxhZm9uZC9nZW9tL2Rpc3QvZ2VvbS5qcyIsIndlYnBhY2s6Ly9CdWcvLi9zcmMvYnVnL2J1Zy50cyIsIndlYnBhY2s6Ly9CdWcvLi9zcmMvYnVnL2luZGV4LnRzIiwid2VicGFjazovL0J1Zy8uL3NyYy9idWcvbGVnLnRzIiwid2VicGFjazovL0J1Zy8uL3NyYy9idWcvc2VnbWVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDbEZBLGVBQWUsS0FBaUQs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Q3pDLFlBQVksbUJBQU8sQ0FBQywrQkFBTztBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DLGtGQUFrRjtBQUNySCxtQ0FBbUMsb0ZBQW9GO0FBQ3ZIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQztBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLGtDQUFrQyxjQUFjO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QiwyQkFBMkIsMkNBQTJDLHdDQUF3QztBQUM1STtBQUNBO0FBQ0EsaUJBQWlCLEVBQUUsRUFBRSxHQUFHLEVBQUUsR0FBRztBQUM3QixTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLENBQUM7QUFDRCIsImZpbGUiOiJidWcuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShcIkJ1Z1wiLCBbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJCdWdcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiQnVnXCJdID0gZmFjdG9yeSgpO1xufSkod2luZG93LCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9idWcvaW5kZXgudHNcIik7XG4iLCIhZnVuY3Rpb24odCxlKXtcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cyYmXCJvYmplY3RcIj09dHlwZW9mIG1vZHVsZT9tb2R1bGUuZXhwb3J0cz1lKCk6XCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZShcIkdlb21cIixbXSxlKTpcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cz9leHBvcnRzLkdlb209ZSgpOnQuR2VvbT1lKCl9KHdpbmRvdyxmdW5jdGlvbigpe3JldHVybiBmdW5jdGlvbih0KXt2YXIgZT17fTtmdW5jdGlvbiBuKG8pe2lmKGVbb10pcmV0dXJuIGVbb10uZXhwb3J0czt2YXIgcj1lW29dPXtpOm8sbDohMSxleHBvcnRzOnt9fTtyZXR1cm4gdFtvXS5jYWxsKHIuZXhwb3J0cyxyLHIuZXhwb3J0cyxuKSxyLmw9ITAsci5leHBvcnRzfXJldHVybiBuLm09dCxuLmM9ZSxuLmQ9ZnVuY3Rpb24odCxlLG8pe24ubyh0LGUpfHxPYmplY3QuZGVmaW5lUHJvcGVydHkodCxlLHtlbnVtZXJhYmxlOiEwLGdldDpvfSl9LG4ucj1mdW5jdGlvbih0KXtcInVuZGVmaW5lZFwiIT10eXBlb2YgU3ltYm9sJiZTeW1ib2wudG9TdHJpbmdUYWcmJk9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFN5bWJvbC50b1N0cmluZ1RhZyx7dmFsdWU6XCJNb2R1bGVcIn0pLE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pfSxuLnQ9ZnVuY3Rpb24odCxlKXtpZigxJmUmJih0PW4odCkpLDgmZSlyZXR1cm4gdDtpZig0JmUmJlwib2JqZWN0XCI9PXR5cGVvZiB0JiZ0JiZ0Ll9fZXNNb2R1bGUpcmV0dXJuIHQ7dmFyIG89T2JqZWN0LmNyZWF0ZShudWxsKTtpZihuLnIobyksT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sXCJkZWZhdWx0XCIse2VudW1lcmFibGU6ITAsdmFsdWU6dH0pLDImZSYmXCJzdHJpbmdcIiE9dHlwZW9mIHQpZm9yKHZhciByIGluIHQpbi5kKG8scixmdW5jdGlvbihlKXtyZXR1cm4gdFtlXX0uYmluZChudWxsLHIpKTtyZXR1cm4gb30sbi5uPWZ1bmN0aW9uKHQpe3ZhciBlPXQmJnQuX19lc01vZHVsZT9mdW5jdGlvbigpe3JldHVybiB0LmRlZmF1bHR9OmZ1bmN0aW9uKCl7cmV0dXJuIHR9O3JldHVybiBuLmQoZSxcImFcIixlKSxlfSxuLm89ZnVuY3Rpb24odCxlKXtyZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHQsZSl9LG4ucD1cIlwiLG4obi5zPTEpfShbZnVuY3Rpb24odCxlLG4pe1widXNlIHN0cmljdFwiO09iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pO3ZhciBvPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gdCh0LGUpe3ZvaWQgMD09PXQmJih0PTApLHZvaWQgMD09PWUmJihlPTApLHRoaXMueD10LHRoaXMueT1lfXJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkodC5wcm90b3R5cGUsXCJkYXRhXCIse2dldDpmdW5jdGlvbigpe3JldHVybnt4OnRoaXMueCx5OnRoaXMueX19LGVudW1lcmFibGU6ITAsY29uZmlndXJhYmxlOiEwfSksdC5wcm90b3R5cGUuY2xvbmU9ZnVuY3Rpb24oKXtyZXR1cm4gbmV3IHQodGhpcy54LHRoaXMueSl9LHQucHJvdG90eXBlLmFkZD1mdW5jdGlvbih0KXtyZXR1cm4gdGhpcy54Kz10LngsdGhpcy55Kz10LnksdGhpc30sdC5wcm90b3R5cGUuc3VidHJhY3Q9ZnVuY3Rpb24odCl7cmV0dXJuIHRoaXMueC09dC54LHRoaXMueS09dC55LHRoaXN9LHQucHJvdG90eXBlLnRvU3RyaW5nPWZ1bmN0aW9uKCl7cmV0dXJuIEpTT04uc3RyaW5naWZ5KHRoaXMuZGF0YSl9LHQuZGlzdGFuY2U9ZnVuY3Rpb24odCxlKXtyZXR1cm4gTWF0aC5zcXJ0KCh0LngtZS54KSoodC54LWUueCkrKHQueS1lLnkpKih0LnktZS55KSl9LHQucmFkaWFucz1mdW5jdGlvbih0LGUpe3JldHVybiBNYXRoLmF0YW4yKGUueS10LnksZS54LXQueCl9LHR9KCk7ZS5kZWZhdWx0PW99LGZ1bmN0aW9uKHQsZSxuKXtcInVzZSBzdHJpY3RcIjtPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KTt2YXIgbz1uKDApO2UuUG9pbnQ9by5kZWZhdWx0O3ZhciByPW4oMik7ZS5WZWN0b3I9ci5kZWZhdWx0fSxmdW5jdGlvbih0LGUsbil7XCJ1c2Ugc3RyaWN0XCI7T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSk7dmFyIG89bigwKSxyPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gdCh0LGUsbil7dm9pZCAwPT09dCYmKHQ9MCksdm9pZCAwPT09ZSYmKGU9MCksdm9pZCAwPT09biYmKG49MCksdGhpcy5tb2RlbD17fSx0IGluc3RhbmNlb2Ygby5kZWZhdWx0Pyh0aGlzLm1vZGVsLnBvaW50PXQuY2xvbmUoKSx0aGlzLm1vZGVsLnJhZGlhbnM9ZSk6KHRoaXMubW9kZWwucG9pbnQ9bmV3IG8uZGVmYXVsdCh0LGUpLHRoaXMubW9kZWwucmFkaWFucz1uKX1yZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KHQucHJvdG90eXBlLFwicG9pbnRcIix7Z2V0OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMubW9kZWwucG9pbnQuY2xvbmUoKX0sZW51bWVyYWJsZTohMCxjb25maWd1cmFibGU6ITB9KSxPYmplY3QuZGVmaW5lUHJvcGVydHkodC5wcm90b3R5cGUsXCJ4XCIse2dldDpmdW5jdGlvbigpe3JldHVybiB0aGlzLm1vZGVsLnBvaW50Lnh9LHNldDpmdW5jdGlvbih0KXt0aGlzLm1vZGVsLnBvaW50Lng9dH0sZW51bWVyYWJsZTohMCxjb25maWd1cmFibGU6ITB9KSxPYmplY3QuZGVmaW5lUHJvcGVydHkodC5wcm90b3R5cGUsXCJ5XCIse2dldDpmdW5jdGlvbigpe3JldHVybiB0aGlzLm1vZGVsLnBvaW50Lnl9LHNldDpmdW5jdGlvbih0KXt0aGlzLm1vZGVsLnBvaW50Lnk9dH0sZW51bWVyYWJsZTohMCxjb25maWd1cmFibGU6ITB9KSxPYmplY3QuZGVmaW5lUHJvcGVydHkodC5wcm90b3R5cGUsXCJyYWRpYW5zXCIse2dldDpmdW5jdGlvbigpe3JldHVybiB0aGlzLm1vZGVsLnJhZGlhbnN9LHNldDpmdW5jdGlvbih0KXt0aGlzLm1vZGVsLnJhZGlhbnM9dH0sZW51bWVyYWJsZTohMCxjb25maWd1cmFibGU6ITB9KSxPYmplY3QuZGVmaW5lUHJvcGVydHkodC5wcm90b3R5cGUsXCJkYXRhXCIse2dldDpmdW5jdGlvbigpe3JldHVybnt4OnRoaXMueCx5OnRoaXMueSxyYWRpYW5zOnRoaXMucmFkaWFuc319LGVudW1lcmFibGU6ITAsY29uZmlndXJhYmxlOiEwfSksdC5wcm90b3R5cGUuY2xvbmU9ZnVuY3Rpb24oKXtyZXR1cm4gbmV3IHQodGhpcy5wb2ludCx0aGlzLnJhZGlhbnMpfSx0LnByb3RvdHlwZS50b1N0cmluZz1mdW5jdGlvbigpe3JldHVybiBKU09OLnN0cmluZ2lmeSh0aGlzLmRhdGEpfSx0fSgpO2UuZGVmYXVsdD1yfV0pfSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1nZW9tLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIGdlb21fMSA9IHJlcXVpcmUoXCJAYWRyaWFubGFmb25kL2dlb21cIik7XG52YXIgc2VnbWVudF8xID0gcmVxdWlyZShcIi4vc2VnbWVudFwiKTtcbnZhciBCdWcgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gQnVnKG9wdGlvbnMpIHtcbiAgICAgICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cbiAgICAgICAgdmFyIF9hID0gb3B0aW9ucy54LCB4ID0gX2EgPT09IHZvaWQgMCA/IDAgOiBfYSwgX2IgPSBvcHRpb25zLnksIHkgPSBfYiA9PT0gdm9pZCAwID8gMCA6IF9iLCBfYyA9IG9wdGlvbnMucmFkaWFucywgcmFkaWFucyA9IF9jID09PSB2b2lkIDAgPyAwIDogX2M7XG4gICAgICAgIHZhciBfZCA9IG9wdGlvbnMudGFyZ2V0IHx8IHt9LCBfZSA9IF9kLngsIHRhcmdldFggPSBfZSA9PT0gdm9pZCAwID8gMCA6IF9lLCBfZiA9IF9kLnksIHRhcmdldFkgPSBfZiA9PT0gdm9pZCAwID8gMCA6IF9mO1xuICAgICAgICB0aGlzLm1vZGVsID0ge1xuICAgICAgICAgICAgc2VnbWVudHM6IFtuZXcgc2VnbWVudF8xLmRlZmF1bHQoe1xuICAgICAgICAgICAgICAgICAgICB2ZWN0b3I6IG5ldyBnZW9tXzEuVmVjdG9yKHgsIHksIHJhZGlhbnMpLFxuICAgICAgICAgICAgICAgIH0pXSxcbiAgICAgICAgICAgIHRhcmdldDogbmV3IGdlb21fMS5Qb2ludCh0YXJnZXRYLCB0YXJnZXRZKSxcbiAgICAgICAgICAgIHByb2dyZXNzOiAwLFxuICAgICAgICAgICAgc3RlcDogMCxcbiAgICAgICAgICAgIG1heFN0ZXBzOiAyLFxuICAgICAgICB9O1xuICAgICAgICB0aGlzLnRhcmdldCA9IHRoaXMubW9kZWwudGFyZ2V0O1xuICAgIH1cbiAgICBCdWcucHJvdG90eXBlLnRpY2sgPSBmdW5jdGlvbiAoZGVsdGEpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgaWYgKGRlbHRhID09PSB2b2lkIDApIHsgZGVsdGEgPSAxOyB9XG4gICAgICAgIHRoaXMubW9kZWwucHJvZ3Jlc3MgPSBNYXRoLm1pbigxLCB0aGlzLm1vZGVsLnByb2dyZXNzICsgMC4wNSk7XG4gICAgICAgIHZhciBpc1N0ZXBDb21wbGV0ZSA9IHRoaXMubW9kZWwucHJvZ3Jlc3MgPj0gMTtcbiAgICAgICAgdGhpcy5tb2RlbC5zZWdtZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChzZWdtZW50KSB7XG4gICAgICAgICAgICBzZWdtZW50LnRpY2soZGVsdGEgKiBfdGhpcy5tb2RlbC5wcm9ncmVzcyk7XG4gICAgICAgICAgICBpZiAoaXNTdGVwQ29tcGxldGUpIHtcbiAgICAgICAgICAgICAgICBzZWdtZW50LnN0ZXAoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChpc1N0ZXBDb21wbGV0ZSkge1xuICAgICAgICAgICAgdGhpcy5tb2RlbC5wcm9ncmVzcyA9IDA7XG4gICAgICAgICAgICB0aGlzLm1vZGVsLnN0ZXAgKz0gMTtcbiAgICAgICAgICAgIGlmICh0aGlzLm1vZGVsLnN0ZXAgPj0gdGhpcy5tb2RlbC5tYXhTdGVwcykge1xuICAgICAgICAgICAgICAgIHRoaXMubW9kZWwuc3RlcCA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdmFyIF9hID0gdGhpcy5tb2RlbCwgcHJvZ3Jlc3MgPSBfYS5wcm9ncmVzcywgc3RlcCA9IF9hLnN0ZXA7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEJ1Zy5wcm90b3R5cGUsIFwidGFyZ2V0XCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5tb2RlbC50YXJnZXQuZGF0YTtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMubW9kZWwudGFyZ2V0LnggPSB2YWx1ZS54O1xuICAgICAgICAgICAgdGhpcy5tb2RlbC50YXJnZXQueSA9IHZhbHVlLnk7XG4gICAgICAgICAgICB0aGlzLm1vZGVsLnNlZ21lbnRzWzBdLnRhcmdldCA9IHRoaXMubW9kZWwudGFyZ2V0O1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQnVnLnByb3RvdHlwZSwgXCJ4XCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5tb2RlbC5zZWdtZW50c1swXS54O1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5tb2RlbC5zZWdtZW50c1swXS54ID0gdmFsdWU7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShCdWcucHJvdG90eXBlLCBcInlcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm1vZGVsLnNlZ21lbnRzWzBdLnk7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLm1vZGVsLnNlZ21lbnRzWzBdLnkgPSB2YWx1ZTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEJ1Zy5wcm90b3R5cGUsIFwicmFkaWFuc1wiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMubW9kZWwuc2VnbWVudHNbMF0ucmFkaWFucztcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMubW9kZWwuc2VnbWVudHNbMF0ucmFkaWFucyA9IHZhbHVlO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQnVnLnByb3RvdHlwZSwgXCJzZWdtZW50c1wiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMubW9kZWwuc2VnbWVudHMubWFwKGZ1bmN0aW9uIChzZWdtZW50KSB7IHJldHVybiBzZWdtZW50LmRhdGE7IH0pO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICByZXR1cm4gQnVnO1xufSgpKTtcbmV4cG9ydHMuZGVmYXVsdCA9IEJ1ZztcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIGJ1Z18xID0gcmVxdWlyZShcIi4vYnVnXCIpO1xuZXhwb3J0cy5kZWZhdWx0ID0gYnVnXzEuZGVmYXVsdDtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIExlZyA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBMZWcob3B0aW9ucykge1xuICAgICAgICB0aGlzLm1vZGVsID0gb3B0aW9ucztcbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KExlZy5wcm90b3R5cGUsIFwiZGF0YVwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMubW9kZWwuam9pbnRzLm1hcChmdW5jdGlvbiAoam9pbnQpIHsgcmV0dXJuIGpvaW50LmRhdGE7IH0pO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICByZXR1cm4gTGVnO1xufSgpKTtcbmV4cG9ydHMuZGVmYXVsdCA9IExlZztcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fYXNzaWduID0gKHRoaXMgJiYgdGhpcy5fX2Fzc2lnbikgfHwgZnVuY3Rpb24gKCkge1xuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbih0KSB7XG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSlcbiAgICAgICAgICAgICAgICB0W3BdID0gc1twXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdDtcbiAgICB9O1xuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBnZW9tXzEgPSByZXF1aXJlKFwiQGFkcmlhbmxhZm9uZC9nZW9tXCIpO1xudmFyIGxlZ18xID0gcmVxdWlyZShcIi4vbGVnXCIpO1xudmFyIFNlZ21lbnQgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gU2VnbWVudChvcHRpb25zKSB7XG4gICAgICAgIHRoaXMubW9kZWwgPSB7XG4gICAgICAgICAgICB2ZWN0b3I6IG5ldyBnZW9tXzEuVmVjdG9yKCksXG4gICAgICAgICAgICBsZWdzOiBbXG4gICAgICAgICAgICAgICAgbmV3IGxlZ18xLmRlZmF1bHQoeyBqb2ludHM6IFtuZXcgZ2VvbV8xLlBvaW50KCksIG5ldyBnZW9tXzEuUG9pbnQoMTIsIDIpLCBuZXcgZ2VvbV8xLlBvaW50KDE4LCAtMildIH0pLFxuICAgICAgICAgICAgICAgIG5ldyBsZWdfMS5kZWZhdWx0KHsgam9pbnRzOiBbbmV3IGdlb21fMS5Qb2ludCgpLCBuZXcgZ2VvbV8xLlBvaW50KC0xMiwgMiksIG5ldyBnZW9tXzEuUG9pbnQoLTE4LCAtMildIH0pLFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIG1heFJvdGF0aW9uOiBNYXRoLlBJICogMC41LFxuICAgICAgICAgICAgbWF4RGlzdGFuY2U6IDEwLFxuICAgICAgICAgICAgdGFyZ2V0OiBuZXcgZ2VvbV8xLlBvaW50KCksXG4gICAgICAgICAgICB2ZWN0b3JTdGFydDogbmV3IGdlb21fMS5WZWN0b3IoKSxcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5tb2RlbCA9IF9fYXNzaWduKHt9LCB0aGlzLm1vZGVsLCBvcHRpb25zKTtcbiAgICAgICAgdGhpcy5tb2RlbC52ZWN0b3JTdGFydCA9IHRoaXMubW9kZWwudmVjdG9yLmNsb25lKCk7XG4gICAgfVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShTZWdtZW50LnByb3RvdHlwZSwgXCJ0YXJnZXRcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm1vZGVsLnRhcmdldC5jbG9uZSgpO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5tb2RlbC50YXJnZXQgPSB2YWx1ZTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgU2VnbWVudC5wcm90b3R5cGUudGljayA9IGZ1bmN0aW9uIChwcm9ncmVzcykge1xuICAgICAgICBpZiAocHJvZ3Jlc3MgPT09IHZvaWQgMCkgeyBwcm9ncmVzcyA9IDA7IH1cbiAgICAgICAgdmFyIGNvbXBlbnNhdGVSYWRpYW5zID0gTWF0aC5QSSAqIDAuNTtcbiAgICAgICAgdmFyIF9hID0gdGhpcy5tb2RlbCwgdGFyZ2V0ID0gX2EudGFyZ2V0LCB2ZWN0b3IgPSBfYS52ZWN0b3IsIHZlY3RvclN0YXJ0ID0gX2EudmVjdG9yU3RhcnQsIG1heERpc3RhbmNlID0gX2EubWF4RGlzdGFuY2U7XG4gICAgICAgIHZhciB0YXJnZXRSYWRpYW5zID0gTWF0aC5hdGFuMih0YXJnZXQueSAtIHZlY3RvclN0YXJ0LnksIHRhcmdldC54IC0gdmVjdG9yU3RhcnQueCkgKyBjb21wZW5zYXRlUmFkaWFucztcbiAgICAgICAgY29uc29sZS5sb2codGFyZ2V0UmFkaWFucywgdmVjdG9yU3RhcnQucmFkaWFucyk7XG4gICAgICAgIHZhciBkaXN0YW5jZSA9IE1hdGgubWluKG1heERpc3RhbmNlLCBnZW9tXzEuUG9pbnQuZGlzdGFuY2UodGFyZ2V0LCB2ZWN0b3JTdGFydC5wb2ludCkpO1xuICAgICAgICB2ZWN0b3IucmFkaWFucyA9IHZlY3RvclN0YXJ0LnJhZGlhbnMgKyAodGFyZ2V0UmFkaWFucyAtIHZlY3RvclN0YXJ0LnJhZGlhbnMpICogcHJvZ3Jlc3M7XG4gICAgICAgIHZlY3Rvci54ID0gdmVjdG9yU3RhcnQueCArIE1hdGguY29zKHZlY3Rvci5yYWRpYW5zIC0gY29tcGVuc2F0ZVJhZGlhbnMpICogKGRpc3RhbmNlICogcHJvZ3Jlc3MpO1xuICAgICAgICB2ZWN0b3IueSA9IHZlY3RvclN0YXJ0LnkgKyBNYXRoLnNpbih2ZWN0b3IucmFkaWFucyAtIGNvbXBlbnNhdGVSYWRpYW5zKSAqIChkaXN0YW5jZSAqIHByb2dyZXNzKTtcbiAgICB9O1xuICAgIFNlZ21lbnQucHJvdG90eXBlLnN0ZXAgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMubW9kZWwudmVjdG9yU3RhcnQgPSB0aGlzLm1vZGVsLnZlY3Rvci5jbG9uZSgpO1xuICAgIH07XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFNlZ21lbnQucHJvdG90eXBlLCBcInhcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm1vZGVsLnZlY3Rvci54O1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5tb2RlbC52ZWN0b3IueCA9IHZhbHVlO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoU2VnbWVudC5wcm90b3R5cGUsIFwieVwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMubW9kZWwudmVjdG9yLnk7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLm1vZGVsLnZlY3Rvci55ID0gdmFsdWU7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShTZWdtZW50LnByb3RvdHlwZSwgXCJyYWRpYW5zXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5tb2RlbC52ZWN0b3IucmFkaWFucztcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMubW9kZWwudmVjdG9yLnJhZGlhbnMgPSB2YWx1ZTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFNlZ21lbnQucHJvdG90eXBlLCBcImRhdGFcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgICAgICByZXR1cm4gX19hc3NpZ24oe30sIHRoaXMubW9kZWwudmVjdG9yLmRhdGEsIHsgbGVnczogdGhpcy5tb2RlbC5sZWdzLm1hcChmdW5jdGlvbiAobGVnKSB7IHJldHVybiAobGVnLmRhdGEubWFwKGZ1bmN0aW9uIChwb2ludCkgeyByZXR1cm4gKHtcbiAgICAgICAgICAgICAgICAgICAgeDogcG9pbnQueCArIF90aGlzLngsXG4gICAgICAgICAgICAgICAgICAgIHk6IHBvaW50LnkgKyBfdGhpcy55LFxuICAgICAgICAgICAgICAgIH0pOyB9KSk7IH0pIH0pO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICByZXR1cm4gU2VnbWVudDtcbn0oKSk7XG5leHBvcnRzLmRlZmF1bHQgPSBTZWdtZW50O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==