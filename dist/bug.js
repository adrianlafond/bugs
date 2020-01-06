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

!function(t,e){ true?module.exports=e():undefined}(window,function(){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=1)}([function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(t,e){void 0===t&&(t=0),void 0===e&&(e=0),this.x=t,this.y=e}return Object.defineProperty(t.prototype,"data",{get:function(){return{x:this.x,y:this.y}},enumerable:!0,configurable:!0}),t.prototype.clone=function(){return new t(this.x,this.y)},t.prototype.add=function(t){return this.x+=t.x,this.y+=t.y,this},t.prototype.subtract=function(t){return this.x-=t.x,this.y-=t.y,this},t.prototype.toString=function(){return JSON.stringify(this.data)},t.distance=function(t,e){return Math.sqrt((t.x-e.x)*(t.x-e.x)+(t.y-e.y)*(t.y-e.y))},t.radians=function(t,e){return Math.atan2(e.y-t.y,e.x-t.x)},t}();e.default=r},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(2);e.Angle=r.default;var o=n(0);e.Point=o.default;var i=n(3);e.Vector=i.default},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(){}return t.toRadians=function(t){return t*Math.PI/180},t.toDegrees=function(t){return 180*t/Math.PI},t.interpolate=function(e,n,r){return t.normalize(e+t.delta(e,n)*r)},t.delta=function(e,n){var r=t.normalize(e),o=t.normalize(n),i=o-r;return Math.abs(i)>Math.PI&&(i=o-2*Math.PI-r),i},t.normalize=function(t){var e=t%(2*Math.PI);return e<0&&(e+=2*Math.PI),e},t}();e.default=r},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(0),o=function(){function t(t,e,n){void 0===t&&(t=0),void 0===e&&(e=0),void 0===n&&(n=0),this.model={},t instanceof r.default?(this.model.point=t.clone(),this.model.radians=e):(this.model.point=new r.default(t,e),this.model.radians=n)}return Object.defineProperty(t.prototype,"point",{get:function(){return this.model.point.clone()},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"x",{get:function(){return this.model.point.x},set:function(t){this.model.point.x=t},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"y",{get:function(){return this.model.point.y},set:function(t){this.model.point.y=t},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"radians",{get:function(){return this.model.radians},set:function(t){this.model.radians=t},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"data",{get:function(){return{x:this.x,y:this.y,radians:this.radians}},enumerable:!0,configurable:!0}),t.prototype.clone=function(){return new t(this.point,this.radians)},t.prototype.toString=function(){return JSON.stringify(this.data)},t}();e.default=o}])});
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
            segments: [new segment_1.Segment({
                    vector: new geom_1.Vector(x, y, radians),
                    onTargetReached: this.onTargetReached.bind(this),
                    navigateWorld: options.navigateWorld,
                })],
            target: new geom_1.Point(targetX, targetY),
            progress: 0,
            onTargetReached: options.onTargetReached || (function () { }),
        };
        this.target = this.model.target;
    }
    Bug.prototype.tick = function (_delta) {
        var _this = this;
        if (_delta === void 0) { _delta = 1; }
        // TODO: Incorporate delta as an option? Makes for unsmooth animation even
        // if incorporating it is more "accurate".
        this.model.progress = Math.min(1, this.model.progress + 0.1); // * delta
        var isStepComplete = this.model.progress >= 1;
        this.model.segments.forEach(function (segment) {
            segment.tick(_this.model.progress);
            if (isStepComplete) {
                segment.step();
            }
        });
        if (isStepComplete) {
            this.model.progress = 0;
        }
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
    Bug.prototype.onTargetReached = function (target) {
        this.model.onTargetReached(target);
    };
    return Bug;
}());
exports.Bug = Bug;


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
exports.Bug = bug_1.Bug;


/***/ }),

/***/ "./src/bug/leg.ts":
/*!************************!*\
  !*** ./src/bug/leg.ts ***!
  \************************/
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
var Leg = /** @class */ (function () {
    function Leg(options) {
        this.model = __assign({}, options, { map: this.clone(options.joints).map(function (point) { return new geom_1.Vector(point.x, point.y, Math.atan2(point.y, point.x)); }), jointsStart: this.clone(options.joints) });
    }
    Leg.prototype.offset = function (vector, index) {
        if (index === void 0) { index = 0; }
        var _a = this.model, joints = _a.joints, map = _a.map;
        var joint = joints[index];
        var mapJoint = map[index];
        var distance = geom_1.Point.distance(mapJoint.point, new geom_1.Point(0, 0));
        var radians = mapJoint.radians + vector.radians;
        joint.x = vector.x + Math.cos(radians) * distance;
        joint.y = vector.y + Math.sin(radians) * distance;
    };
    Leg.prototype.offsetAll = function (vector) {
        var _this = this;
        this.model.joints.forEach(function (joint, index) {
            _this.offset(vector, index);
        });
    };
    Leg.prototype.tick = function (vector, progress) {
        var _a = this.model, joints = _a.joints, jointsStart = _a.jointsStart, map = _a.map;
        var index = joints.length - 1;
        var radians = Math.atan2(map[index].y, map[index].x) + vector.radians;
        var radius = geom_1.Point.distance(map[index].point, new geom_1.Point());
        var land = new geom_1.Point(vector.x + Math.cos(radians) * radius, vector.y + Math.sin(radians) * radius);
        var landRadians = Math.atan2(land.y - jointsStart[index].y, land.x - jointsStart[index].x);
        var distance = geom_1.Point.distance(land, jointsStart[index]);
        joints[index].x = jointsStart[index].x + Math.cos(landRadians) *
            (distance * progress);
        joints[index].y = jointsStart[index].y + Math.sin(landRadians) *
            (distance * progress);
    };
    Leg.prototype.restartStep = function () {
        this.model.jointsStart = this.clone();
    };
    Object.defineProperty(Leg.prototype, "data", {
        get: function () {
            return this.model.joints.map(function (joint) { return joint.data; });
        },
        enumerable: true,
        configurable: true
    });
    Leg.prototype.clone = function (joints) {
        if (joints === void 0) { joints = this.model.joints; }
        return joints.map(function (joint) { return joint.clone(); });
    };
    return Leg;
}());
exports.Leg = Leg;


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
        var _this = this;
        this.model = {
            vector: new geom_1.Vector(),
            legs: [
                [new leg_1.Leg({ joints: [new geom_1.Point(2, -5), new geom_1.Point(12, -14)] }),
                    new leg_1.Leg({ joints: [new geom_1.Point(0, -5), new geom_1.Point(0, -16)] }),
                    new leg_1.Leg({ joints: [new geom_1.Point(-4, -5), new geom_1.Point(-8, -12)] })],
                [new leg_1.Leg({ joints: [new geom_1.Point(2, 5), new geom_1.Point(12, 14)] }),
                    new leg_1.Leg({ joints: [new geom_1.Point(0, 5), new geom_1.Point(0, 16)] }),
                    new leg_1.Leg({ joints: [new geom_1.Point(-4, 5), new geom_1.Point(-8, 12)] })],
            ],
            maxRotation: Math.PI * 0.5,
            maxDistance: 10,
            target: new geom_1.Point(),
            stepTarget: new geom_1.Point(),
            previousStepTarget: new geom_1.Point(),
            vectorStart: new geom_1.Vector(),
            step: 0,
            onTargetReached: null,
            navigateWorld: null,
        };
        this.model = __assign({}, this.model, options);
        this.model.vectorStart = this.model.vector.clone();
        this.model.legs.forEach(function (side) {
            side.forEach(function (leg) {
                leg.offsetAll(_this.model.vector);
            });
        });
        this.step();
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
        var _a = this.model, target = _a.target, vectorStart = _a.vectorStart, maxDistance = _a.maxDistance;
        var distance = Math.min(maxDistance, geom_1.Point.distance(target, vectorStart.point));
        this.moveSegment(progress, distance);
        this.moveLegs(progress, distance);
    };
    Segment.prototype.step = function () {
        this.restartStep();
        this.model.step = (this.model.step + 1) % this.model.legs.length;
    };
    Segment.prototype.restartStep = function () {
        var _a = this.model, vector = _a.vector, target = _a.target, navigateWorld = _a.navigateWorld, previousStepTarget = _a.previousStepTarget;
        this.model.vectorStart = vector.clone();
        this.model.stepTarget = navigateWorld ? navigateWorld(vector.point, target, previousStepTarget) : target.clone();
        var stepTarget = this.model.stepTarget;
        if (previousStepTarget.x !== stepTarget.x && previousStepTarget.y !== stepTarget.y) {
            this.model.previousStepTarget = stepTarget;
        }
        this.model.legs.forEach(function (side) {
            side.forEach(function (leg) {
                leg.restartStep();
            });
        });
    };
    Segment.prototype.moveSegment = function (progress, distance) {
        var _a = this.model, stepTarget = _a.stepTarget, target = _a.target, vector = _a.vector, vectorStart = _a.vectorStart, maxDistance = _a.maxDistance, maxRotation = _a.maxRotation, onTargetReached = _a.onTargetReached;
        var targetRadians = Math.atan2(stepTarget.y - vectorStart.y, stepTarget.x - vectorStart.x);
        var deltaRadians = Math.max(-maxRotation, Math.min(maxRotation, geom_1.Angle.delta(vector.radians, targetRadians)));
        vector.radians = geom_1.Angle.normalize(vectorStart.radians) + deltaRadians * progress;
        var radiansDelta = Math.abs(geom_1.Angle.normalize(targetRadians) - vector.radians);
        var radiansDamper = 1 - radiansDelta / (Math.PI * 2);
        var moveDistance = distance * progress * radiansDamper;
        vector.x = vectorStart.x + Math.cos(targetRadians) * moveDistance;
        vector.y = vectorStart.y + Math.sin(targetRadians) * moveDistance;
        if (onTargetReached) {
            if (geom_1.Point.distance(target, vector.point) <= maxDistance) {
                onTargetReached(target);
            }
        }
    };
    Segment.prototype.moveLegs = function (progress, distance) {
        var _this = this;
        var _a = this.model, legs = _a.legs, vector = _a.vector, vectorStart = _a.vectorStart;
        legs.forEach(function (side, sideIndex) {
            side.forEach(function (leg) {
                leg.offset(vector);
            });
            if (sideIndex === _this.model.step) {
                var targetVector_1 = new geom_1.Vector(vectorStart.x + Math.cos(vector.radians) * distance, vectorStart.y + Math.sin(vector.radians) * distance, vector.radians);
                side.forEach(function (leg) {
                    leg.tick(targetVector_1, progress);
                });
            }
        });
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
            return __assign({}, this.model.vector.data, { legs: this.model.legs.map(function (side) { return (side.map(function (leg) { return leg.data; })); }) });
        },
        enumerable: true,
        configurable: true
    });
    return Segment;
}());
exports.Segment = Segment;


/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9CdWcvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL0J1Zy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9CdWcvLi9ub2RlX21vZHVsZXMvQGFkcmlhbmxhZm9uZC9nZW9tL2Rpc3QvZ2VvbS5qcyIsIndlYnBhY2s6Ly9CdWcvLi9zcmMvYnVnL2J1Zy50cyIsIndlYnBhY2s6Ly9CdWcvLi9zcmMvYnVnL2luZGV4LnRzIiwid2VicGFjazovL0J1Zy8uL3NyYy9idWcvbGVnLnRzIiwid2VicGFjazovL0J1Zy8uL3NyYy9idWcvc2VnbWVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDbEZBLGVBQWUsS0FBaUQs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Q0EsS0FBSztBQUNMO0FBQ0Esa0NBQWtDLGNBQWM7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSw4QkFBOEIsMkJBQTJCLDRDQUE0QyxrQ0FBa0MsaUJBQWlCLEVBQUUsR0FBRyxFQUFFLEdBQUc7QUFDbEssU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxDQUFDO0FBQ0QiLCJmaWxlIjoiYnVnLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoXCJCdWdcIiwgW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiQnVnXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIkJ1Z1wiXSA9IGZhY3RvcnkoKTtcbn0pKHdpbmRvdywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvYnVnL2luZGV4LnRzXCIpO1xuIiwiIWZ1bmN0aW9uKHQsZSl7XCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHMmJlwib2JqZWN0XCI9PXR5cGVvZiBtb2R1bGU/bW9kdWxlLmV4cG9ydHM9ZSgpOlwiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZD9kZWZpbmUoXCJHZW9tXCIsW10sZSk6XCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHM/ZXhwb3J0cy5HZW9tPWUoKTp0Lkdlb209ZSgpfSh3aW5kb3csZnVuY3Rpb24oKXtyZXR1cm4gZnVuY3Rpb24odCl7dmFyIGU9e307ZnVuY3Rpb24gbihyKXtpZihlW3JdKXJldHVybiBlW3JdLmV4cG9ydHM7dmFyIG89ZVtyXT17aTpyLGw6ITEsZXhwb3J0czp7fX07cmV0dXJuIHRbcl0uY2FsbChvLmV4cG9ydHMsbyxvLmV4cG9ydHMsbiksby5sPSEwLG8uZXhwb3J0c31yZXR1cm4gbi5tPXQsbi5jPWUsbi5kPWZ1bmN0aW9uKHQsZSxyKXtuLm8odCxlKXx8T2JqZWN0LmRlZmluZVByb3BlcnR5KHQsZSx7ZW51bWVyYWJsZTohMCxnZXQ6cn0pfSxuLnI9ZnVuY3Rpb24odCl7XCJ1bmRlZmluZWRcIiE9dHlwZW9mIFN5bWJvbCYmU3ltYm9sLnRvU3RyaW5nVGFnJiZPYmplY3QuZGVmaW5lUHJvcGVydHkodCxTeW1ib2wudG9TdHJpbmdUYWcse3ZhbHVlOlwiTW9kdWxlXCJ9KSxPYmplY3QuZGVmaW5lUHJvcGVydHkodCxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KX0sbi50PWZ1bmN0aW9uKHQsZSl7aWYoMSZlJiYodD1uKHQpKSw4JmUpcmV0dXJuIHQ7aWYoNCZlJiZcIm9iamVjdFwiPT10eXBlb2YgdCYmdCYmdC5fX2VzTW9kdWxlKXJldHVybiB0O3ZhciByPU9iamVjdC5jcmVhdGUobnVsbCk7aWYobi5yKHIpLE9iamVjdC5kZWZpbmVQcm9wZXJ0eShyLFwiZGVmYXVsdFwiLHtlbnVtZXJhYmxlOiEwLHZhbHVlOnR9KSwyJmUmJlwic3RyaW5nXCIhPXR5cGVvZiB0KWZvcih2YXIgbyBpbiB0KW4uZChyLG8sZnVuY3Rpb24oZSl7cmV0dXJuIHRbZV19LmJpbmQobnVsbCxvKSk7cmV0dXJuIHJ9LG4ubj1mdW5jdGlvbih0KXt2YXIgZT10JiZ0Ll9fZXNNb2R1bGU/ZnVuY3Rpb24oKXtyZXR1cm4gdC5kZWZhdWx0fTpmdW5jdGlvbigpe3JldHVybiB0fTtyZXR1cm4gbi5kKGUsXCJhXCIsZSksZX0sbi5vPWZ1bmN0aW9uKHQsZSl7cmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCh0LGUpfSxuLnA9XCJcIixuKG4ucz0xKX0oW2Z1bmN0aW9uKHQsZSxuKXtcInVzZSBzdHJpY3RcIjtPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KTt2YXIgcj1mdW5jdGlvbigpe2Z1bmN0aW9uIHQodCxlKXt2b2lkIDA9PT10JiYodD0wKSx2b2lkIDA9PT1lJiYoZT0wKSx0aGlzLng9dCx0aGlzLnk9ZX1yZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KHQucHJvdG90eXBlLFwiZGF0YVwiLHtnZXQ6ZnVuY3Rpb24oKXtyZXR1cm57eDp0aGlzLngseTp0aGlzLnl9fSxlbnVtZXJhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMH0pLHQucHJvdG90eXBlLmNsb25lPWZ1bmN0aW9uKCl7cmV0dXJuIG5ldyB0KHRoaXMueCx0aGlzLnkpfSx0LnByb3RvdHlwZS5hZGQ9ZnVuY3Rpb24odCl7cmV0dXJuIHRoaXMueCs9dC54LHRoaXMueSs9dC55LHRoaXN9LHQucHJvdG90eXBlLnN1YnRyYWN0PWZ1bmN0aW9uKHQpe3JldHVybiB0aGlzLngtPXQueCx0aGlzLnktPXQueSx0aGlzfSx0LnByb3RvdHlwZS50b1N0cmluZz1mdW5jdGlvbigpe3JldHVybiBKU09OLnN0cmluZ2lmeSh0aGlzLmRhdGEpfSx0LmRpc3RhbmNlPWZ1bmN0aW9uKHQsZSl7cmV0dXJuIE1hdGguc3FydCgodC54LWUueCkqKHQueC1lLngpKyh0LnktZS55KSoodC55LWUueSkpfSx0LnJhZGlhbnM9ZnVuY3Rpb24odCxlKXtyZXR1cm4gTWF0aC5hdGFuMihlLnktdC55LGUueC10LngpfSx0fSgpO2UuZGVmYXVsdD1yfSxmdW5jdGlvbih0LGUsbil7XCJ1c2Ugc3RyaWN0XCI7T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSk7dmFyIHI9bigyKTtlLkFuZ2xlPXIuZGVmYXVsdDt2YXIgbz1uKDApO2UuUG9pbnQ9by5kZWZhdWx0O3ZhciBpPW4oMyk7ZS5WZWN0b3I9aS5kZWZhdWx0fSxmdW5jdGlvbih0LGUsbil7XCJ1c2Ugc3RyaWN0XCI7T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSk7dmFyIHI9ZnVuY3Rpb24oKXtmdW5jdGlvbiB0KCl7fXJldHVybiB0LnRvUmFkaWFucz1mdW5jdGlvbih0KXtyZXR1cm4gdCpNYXRoLlBJLzE4MH0sdC50b0RlZ3JlZXM9ZnVuY3Rpb24odCl7cmV0dXJuIDE4MCp0L01hdGguUEl9LHQuaW50ZXJwb2xhdGU9ZnVuY3Rpb24oZSxuLHIpe3JldHVybiB0Lm5vcm1hbGl6ZShlK3QuZGVsdGEoZSxuKSpyKX0sdC5kZWx0YT1mdW5jdGlvbihlLG4pe3ZhciByPXQubm9ybWFsaXplKGUpLG89dC5ub3JtYWxpemUobiksaT1vLXI7cmV0dXJuIE1hdGguYWJzKGkpPk1hdGguUEkmJihpPW8tMipNYXRoLlBJLXIpLGl9LHQubm9ybWFsaXplPWZ1bmN0aW9uKHQpe3ZhciBlPXQlKDIqTWF0aC5QSSk7cmV0dXJuIGU8MCYmKGUrPTIqTWF0aC5QSSksZX0sdH0oKTtlLmRlZmF1bHQ9cn0sZnVuY3Rpb24odCxlLG4pe1widXNlIHN0cmljdFwiO09iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pO3ZhciByPW4oMCksbz1mdW5jdGlvbigpe2Z1bmN0aW9uIHQodCxlLG4pe3ZvaWQgMD09PXQmJih0PTApLHZvaWQgMD09PWUmJihlPTApLHZvaWQgMD09PW4mJihuPTApLHRoaXMubW9kZWw9e30sdCBpbnN0YW5jZW9mIHIuZGVmYXVsdD8odGhpcy5tb2RlbC5wb2ludD10LmNsb25lKCksdGhpcy5tb2RlbC5yYWRpYW5zPWUpOih0aGlzLm1vZGVsLnBvaW50PW5ldyByLmRlZmF1bHQodCxlKSx0aGlzLm1vZGVsLnJhZGlhbnM9bil9cmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LnByb3RvdHlwZSxcInBvaW50XCIse2dldDpmdW5jdGlvbigpe3JldHVybiB0aGlzLm1vZGVsLnBvaW50LmNsb25lKCl9LGVudW1lcmFibGU6ITAsY29uZmlndXJhYmxlOiEwfSksT2JqZWN0LmRlZmluZVByb3BlcnR5KHQucHJvdG90eXBlLFwieFwiLHtnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5tb2RlbC5wb2ludC54fSxzZXQ6ZnVuY3Rpb24odCl7dGhpcy5tb2RlbC5wb2ludC54PXR9LGVudW1lcmFibGU6ITAsY29uZmlndXJhYmxlOiEwfSksT2JqZWN0LmRlZmluZVByb3BlcnR5KHQucHJvdG90eXBlLFwieVwiLHtnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5tb2RlbC5wb2ludC55fSxzZXQ6ZnVuY3Rpb24odCl7dGhpcy5tb2RlbC5wb2ludC55PXR9LGVudW1lcmFibGU6ITAsY29uZmlndXJhYmxlOiEwfSksT2JqZWN0LmRlZmluZVByb3BlcnR5KHQucHJvdG90eXBlLFwicmFkaWFuc1wiLHtnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5tb2RlbC5yYWRpYW5zfSxzZXQ6ZnVuY3Rpb24odCl7dGhpcy5tb2RlbC5yYWRpYW5zPXR9LGVudW1lcmFibGU6ITAsY29uZmlndXJhYmxlOiEwfSksT2JqZWN0LmRlZmluZVByb3BlcnR5KHQucHJvdG90eXBlLFwiZGF0YVwiLHtnZXQ6ZnVuY3Rpb24oKXtyZXR1cm57eDp0aGlzLngseTp0aGlzLnkscmFkaWFuczp0aGlzLnJhZGlhbnN9fSxlbnVtZXJhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMH0pLHQucHJvdG90eXBlLmNsb25lPWZ1bmN0aW9uKCl7cmV0dXJuIG5ldyB0KHRoaXMucG9pbnQsdGhpcy5yYWRpYW5zKX0sdC5wcm90b3R5cGUudG9TdHJpbmc9ZnVuY3Rpb24oKXtyZXR1cm4gSlNPTi5zdHJpbmdpZnkodGhpcy5kYXRhKX0sdH0oKTtlLmRlZmF1bHQ9b31dKX0pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Z2VvbS5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBnZW9tXzEgPSByZXF1aXJlKFwiQGFkcmlhbmxhZm9uZC9nZW9tXCIpO1xudmFyIHNlZ21lbnRfMSA9IHJlcXVpcmUoXCIuL3NlZ21lbnRcIik7XG52YXIgQnVnID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIEJ1ZyhvcHRpb25zKSB7XG4gICAgICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHt9OyB9XG4gICAgICAgIHZhciBfYSA9IG9wdGlvbnMueCwgeCA9IF9hID09PSB2b2lkIDAgPyAwIDogX2EsIF9iID0gb3B0aW9ucy55LCB5ID0gX2IgPT09IHZvaWQgMCA/IDAgOiBfYiwgX2MgPSBvcHRpb25zLnJhZGlhbnMsIHJhZGlhbnMgPSBfYyA9PT0gdm9pZCAwID8gMCA6IF9jO1xuICAgICAgICB2YXIgX2QgPSBvcHRpb25zLnRhcmdldCB8fCB7fSwgX2UgPSBfZC54LCB0YXJnZXRYID0gX2UgPT09IHZvaWQgMCA/IDAgOiBfZSwgX2YgPSBfZC55LCB0YXJnZXRZID0gX2YgPT09IHZvaWQgMCA/IDAgOiBfZjtcbiAgICAgICAgdGhpcy5tb2RlbCA9IHtcbiAgICAgICAgICAgIHNlZ21lbnRzOiBbbmV3IHNlZ21lbnRfMS5TZWdtZW50KHtcbiAgICAgICAgICAgICAgICAgICAgdmVjdG9yOiBuZXcgZ2VvbV8xLlZlY3Rvcih4LCB5LCByYWRpYW5zKSxcbiAgICAgICAgICAgICAgICAgICAgb25UYXJnZXRSZWFjaGVkOiB0aGlzLm9uVGFyZ2V0UmVhY2hlZC5iaW5kKHRoaXMpLFxuICAgICAgICAgICAgICAgICAgICBuYXZpZ2F0ZVdvcmxkOiBvcHRpb25zLm5hdmlnYXRlV29ybGQsXG4gICAgICAgICAgICAgICAgfSldLFxuICAgICAgICAgICAgdGFyZ2V0OiBuZXcgZ2VvbV8xLlBvaW50KHRhcmdldFgsIHRhcmdldFkpLFxuICAgICAgICAgICAgcHJvZ3Jlc3M6IDAsXG4gICAgICAgICAgICBvblRhcmdldFJlYWNoZWQ6IG9wdGlvbnMub25UYXJnZXRSZWFjaGVkIHx8IChmdW5jdGlvbiAoKSB7IH0pLFxuICAgICAgICB9O1xuICAgICAgICB0aGlzLnRhcmdldCA9IHRoaXMubW9kZWwudGFyZ2V0O1xuICAgIH1cbiAgICBCdWcucHJvdG90eXBlLnRpY2sgPSBmdW5jdGlvbiAoX2RlbHRhKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIGlmIChfZGVsdGEgPT09IHZvaWQgMCkgeyBfZGVsdGEgPSAxOyB9XG4gICAgICAgIC8vIFRPRE86IEluY29ycG9yYXRlIGRlbHRhIGFzIGFuIG9wdGlvbj8gTWFrZXMgZm9yIHVuc21vb3RoIGFuaW1hdGlvbiBldmVuXG4gICAgICAgIC8vIGlmIGluY29ycG9yYXRpbmcgaXQgaXMgbW9yZSBcImFjY3VyYXRlXCIuXG4gICAgICAgIHRoaXMubW9kZWwucHJvZ3Jlc3MgPSBNYXRoLm1pbigxLCB0aGlzLm1vZGVsLnByb2dyZXNzICsgMC4xKTsgLy8gKiBkZWx0YVxuICAgICAgICB2YXIgaXNTdGVwQ29tcGxldGUgPSB0aGlzLm1vZGVsLnByb2dyZXNzID49IDE7XG4gICAgICAgIHRoaXMubW9kZWwuc2VnbWVudHMuZm9yRWFjaChmdW5jdGlvbiAoc2VnbWVudCkge1xuICAgICAgICAgICAgc2VnbWVudC50aWNrKF90aGlzLm1vZGVsLnByb2dyZXNzKTtcbiAgICAgICAgICAgIGlmIChpc1N0ZXBDb21wbGV0ZSkge1xuICAgICAgICAgICAgICAgIHNlZ21lbnQuc3RlcCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKGlzU3RlcENvbXBsZXRlKSB7XG4gICAgICAgICAgICB0aGlzLm1vZGVsLnByb2dyZXNzID0gMDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShCdWcucHJvdG90eXBlLCBcInRhcmdldFwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMubW9kZWwudGFyZ2V0LmRhdGE7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLm1vZGVsLnRhcmdldC54ID0gdmFsdWUueDtcbiAgICAgICAgICAgIHRoaXMubW9kZWwudGFyZ2V0LnkgPSB2YWx1ZS55O1xuICAgICAgICAgICAgdGhpcy5tb2RlbC5zZWdtZW50c1swXS50YXJnZXQgPSB0aGlzLm1vZGVsLnRhcmdldDtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEJ1Zy5wcm90b3R5cGUsIFwieFwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMubW9kZWwuc2VnbWVudHNbMF0ueDtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMubW9kZWwuc2VnbWVudHNbMF0ueCA9IHZhbHVlO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQnVnLnByb3RvdHlwZSwgXCJ5XCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5tb2RlbC5zZWdtZW50c1swXS55O1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5tb2RlbC5zZWdtZW50c1swXS55ID0gdmFsdWU7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShCdWcucHJvdG90eXBlLCBcInJhZGlhbnNcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm1vZGVsLnNlZ21lbnRzWzBdLnJhZGlhbnM7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLm1vZGVsLnNlZ21lbnRzWzBdLnJhZGlhbnMgPSB2YWx1ZTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEJ1Zy5wcm90b3R5cGUsIFwic2VnbWVudHNcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm1vZGVsLnNlZ21lbnRzLm1hcChmdW5jdGlvbiAoc2VnbWVudCkgeyByZXR1cm4gc2VnbWVudC5kYXRhOyB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgQnVnLnByb3RvdHlwZS5vblRhcmdldFJlYWNoZWQgPSBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gICAgICAgIHRoaXMubW9kZWwub25UYXJnZXRSZWFjaGVkKHRhcmdldCk7XG4gICAgfTtcbiAgICByZXR1cm4gQnVnO1xufSgpKTtcbmV4cG9ydHMuQnVnID0gQnVnO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgYnVnXzEgPSByZXF1aXJlKFwiLi9idWdcIik7XG5leHBvcnRzLkJ1ZyA9IGJ1Z18xLkJ1ZztcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fYXNzaWduID0gKHRoaXMgJiYgdGhpcy5fX2Fzc2lnbikgfHwgZnVuY3Rpb24gKCkge1xuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbih0KSB7XG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSlcbiAgICAgICAgICAgICAgICB0W3BdID0gc1twXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdDtcbiAgICB9O1xuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBnZW9tXzEgPSByZXF1aXJlKFwiQGFkcmlhbmxhZm9uZC9nZW9tXCIpO1xudmFyIExlZyA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBMZWcob3B0aW9ucykge1xuICAgICAgICB0aGlzLm1vZGVsID0gX19hc3NpZ24oe30sIG9wdGlvbnMsIHsgbWFwOiB0aGlzLmNsb25lKG9wdGlvbnMuam9pbnRzKS5tYXAoZnVuY3Rpb24gKHBvaW50KSB7IHJldHVybiBuZXcgZ2VvbV8xLlZlY3Rvcihwb2ludC54LCBwb2ludC55LCBNYXRoLmF0YW4yKHBvaW50LnksIHBvaW50LngpKTsgfSksIGpvaW50c1N0YXJ0OiB0aGlzLmNsb25lKG9wdGlvbnMuam9pbnRzKSB9KTtcbiAgICB9XG4gICAgTGVnLnByb3RvdHlwZS5vZmZzZXQgPSBmdW5jdGlvbiAodmVjdG9yLCBpbmRleCkge1xuICAgICAgICBpZiAoaW5kZXggPT09IHZvaWQgMCkgeyBpbmRleCA9IDA7IH1cbiAgICAgICAgdmFyIF9hID0gdGhpcy5tb2RlbCwgam9pbnRzID0gX2Euam9pbnRzLCBtYXAgPSBfYS5tYXA7XG4gICAgICAgIHZhciBqb2ludCA9IGpvaW50c1tpbmRleF07XG4gICAgICAgIHZhciBtYXBKb2ludCA9IG1hcFtpbmRleF07XG4gICAgICAgIHZhciBkaXN0YW5jZSA9IGdlb21fMS5Qb2ludC5kaXN0YW5jZShtYXBKb2ludC5wb2ludCwgbmV3IGdlb21fMS5Qb2ludCgwLCAwKSk7XG4gICAgICAgIHZhciByYWRpYW5zID0gbWFwSm9pbnQucmFkaWFucyArIHZlY3Rvci5yYWRpYW5zO1xuICAgICAgICBqb2ludC54ID0gdmVjdG9yLnggKyBNYXRoLmNvcyhyYWRpYW5zKSAqIGRpc3RhbmNlO1xuICAgICAgICBqb2ludC55ID0gdmVjdG9yLnkgKyBNYXRoLnNpbihyYWRpYW5zKSAqIGRpc3RhbmNlO1xuICAgIH07XG4gICAgTGVnLnByb3RvdHlwZS5vZmZzZXRBbGwgPSBmdW5jdGlvbiAodmVjdG9yKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHRoaXMubW9kZWwuam9pbnRzLmZvckVhY2goZnVuY3Rpb24gKGpvaW50LCBpbmRleCkge1xuICAgICAgICAgICAgX3RoaXMub2Zmc2V0KHZlY3RvciwgaW5kZXgpO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIExlZy5wcm90b3R5cGUudGljayA9IGZ1bmN0aW9uICh2ZWN0b3IsIHByb2dyZXNzKSB7XG4gICAgICAgIHZhciBfYSA9IHRoaXMubW9kZWwsIGpvaW50cyA9IF9hLmpvaW50cywgam9pbnRzU3RhcnQgPSBfYS5qb2ludHNTdGFydCwgbWFwID0gX2EubWFwO1xuICAgICAgICB2YXIgaW5kZXggPSBqb2ludHMubGVuZ3RoIC0gMTtcbiAgICAgICAgdmFyIHJhZGlhbnMgPSBNYXRoLmF0YW4yKG1hcFtpbmRleF0ueSwgbWFwW2luZGV4XS54KSArIHZlY3Rvci5yYWRpYW5zO1xuICAgICAgICB2YXIgcmFkaXVzID0gZ2VvbV8xLlBvaW50LmRpc3RhbmNlKG1hcFtpbmRleF0ucG9pbnQsIG5ldyBnZW9tXzEuUG9pbnQoKSk7XG4gICAgICAgIHZhciBsYW5kID0gbmV3IGdlb21fMS5Qb2ludCh2ZWN0b3IueCArIE1hdGguY29zKHJhZGlhbnMpICogcmFkaXVzLCB2ZWN0b3IueSArIE1hdGguc2luKHJhZGlhbnMpICogcmFkaXVzKTtcbiAgICAgICAgdmFyIGxhbmRSYWRpYW5zID0gTWF0aC5hdGFuMihsYW5kLnkgLSBqb2ludHNTdGFydFtpbmRleF0ueSwgbGFuZC54IC0gam9pbnRzU3RhcnRbaW5kZXhdLngpO1xuICAgICAgICB2YXIgZGlzdGFuY2UgPSBnZW9tXzEuUG9pbnQuZGlzdGFuY2UobGFuZCwgam9pbnRzU3RhcnRbaW5kZXhdKTtcbiAgICAgICAgam9pbnRzW2luZGV4XS54ID0gam9pbnRzU3RhcnRbaW5kZXhdLnggKyBNYXRoLmNvcyhsYW5kUmFkaWFucykgKlxuICAgICAgICAgICAgKGRpc3RhbmNlICogcHJvZ3Jlc3MpO1xuICAgICAgICBqb2ludHNbaW5kZXhdLnkgPSBqb2ludHNTdGFydFtpbmRleF0ueSArIE1hdGguc2luKGxhbmRSYWRpYW5zKSAqXG4gICAgICAgICAgICAoZGlzdGFuY2UgKiBwcm9ncmVzcyk7XG4gICAgfTtcbiAgICBMZWcucHJvdG90eXBlLnJlc3RhcnRTdGVwID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLm1vZGVsLmpvaW50c1N0YXJ0ID0gdGhpcy5jbG9uZSgpO1xuICAgIH07XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KExlZy5wcm90b3R5cGUsIFwiZGF0YVwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMubW9kZWwuam9pbnRzLm1hcChmdW5jdGlvbiAoam9pbnQpIHsgcmV0dXJuIGpvaW50LmRhdGE7IH0pO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBMZWcucHJvdG90eXBlLmNsb25lID0gZnVuY3Rpb24gKGpvaW50cykge1xuICAgICAgICBpZiAoam9pbnRzID09PSB2b2lkIDApIHsgam9pbnRzID0gdGhpcy5tb2RlbC5qb2ludHM7IH1cbiAgICAgICAgcmV0dXJuIGpvaW50cy5tYXAoZnVuY3Rpb24gKGpvaW50KSB7IHJldHVybiBqb2ludC5jbG9uZSgpOyB9KTtcbiAgICB9O1xuICAgIHJldHVybiBMZWc7XG59KCkpO1xuZXhwb3J0cy5MZWcgPSBMZWc7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2Fzc2lnbiA9ICh0aGlzICYmIHRoaXMuX19hc3NpZ24pIHx8IGZ1bmN0aW9uICgpIHtcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24odCkge1xuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpXG4gICAgICAgICAgICAgICAgdFtwXSA9IHNbcF07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHQ7XG4gICAgfTtcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgZ2VvbV8xID0gcmVxdWlyZShcIkBhZHJpYW5sYWZvbmQvZ2VvbVwiKTtcbnZhciBsZWdfMSA9IHJlcXVpcmUoXCIuL2xlZ1wiKTtcbnZhciBTZWdtZW50ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFNlZ21lbnQob3B0aW9ucykge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB0aGlzLm1vZGVsID0ge1xuICAgICAgICAgICAgdmVjdG9yOiBuZXcgZ2VvbV8xLlZlY3RvcigpLFxuICAgICAgICAgICAgbGVnczogW1xuICAgICAgICAgICAgICAgIFtuZXcgbGVnXzEuTGVnKHsgam9pbnRzOiBbbmV3IGdlb21fMS5Qb2ludCgyLCAtNSksIG5ldyBnZW9tXzEuUG9pbnQoMTIsIC0xNCldIH0pLFxuICAgICAgICAgICAgICAgICAgICBuZXcgbGVnXzEuTGVnKHsgam9pbnRzOiBbbmV3IGdlb21fMS5Qb2ludCgwLCAtNSksIG5ldyBnZW9tXzEuUG9pbnQoMCwgLTE2KV0gfSksXG4gICAgICAgICAgICAgICAgICAgIG5ldyBsZWdfMS5MZWcoeyBqb2ludHM6IFtuZXcgZ2VvbV8xLlBvaW50KC00LCAtNSksIG5ldyBnZW9tXzEuUG9pbnQoLTgsIC0xMildIH0pXSxcbiAgICAgICAgICAgICAgICBbbmV3IGxlZ18xLkxlZyh7IGpvaW50czogW25ldyBnZW9tXzEuUG9pbnQoMiwgNSksIG5ldyBnZW9tXzEuUG9pbnQoMTIsIDE0KV0gfSksXG4gICAgICAgICAgICAgICAgICAgIG5ldyBsZWdfMS5MZWcoeyBqb2ludHM6IFtuZXcgZ2VvbV8xLlBvaW50KDAsIDUpLCBuZXcgZ2VvbV8xLlBvaW50KDAsIDE2KV0gfSksXG4gICAgICAgICAgICAgICAgICAgIG5ldyBsZWdfMS5MZWcoeyBqb2ludHM6IFtuZXcgZ2VvbV8xLlBvaW50KC00LCA1KSwgbmV3IGdlb21fMS5Qb2ludCgtOCwgMTIpXSB9KV0sXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgbWF4Um90YXRpb246IE1hdGguUEkgKiAwLjUsXG4gICAgICAgICAgICBtYXhEaXN0YW5jZTogMTAsXG4gICAgICAgICAgICB0YXJnZXQ6IG5ldyBnZW9tXzEuUG9pbnQoKSxcbiAgICAgICAgICAgIHN0ZXBUYXJnZXQ6IG5ldyBnZW9tXzEuUG9pbnQoKSxcbiAgICAgICAgICAgIHByZXZpb3VzU3RlcFRhcmdldDogbmV3IGdlb21fMS5Qb2ludCgpLFxuICAgICAgICAgICAgdmVjdG9yU3RhcnQ6IG5ldyBnZW9tXzEuVmVjdG9yKCksXG4gICAgICAgICAgICBzdGVwOiAwLFxuICAgICAgICAgICAgb25UYXJnZXRSZWFjaGVkOiBudWxsLFxuICAgICAgICAgICAgbmF2aWdhdGVXb3JsZDogbnVsbCxcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5tb2RlbCA9IF9fYXNzaWduKHt9LCB0aGlzLm1vZGVsLCBvcHRpb25zKTtcbiAgICAgICAgdGhpcy5tb2RlbC52ZWN0b3JTdGFydCA9IHRoaXMubW9kZWwudmVjdG9yLmNsb25lKCk7XG4gICAgICAgIHRoaXMubW9kZWwubGVncy5mb3JFYWNoKGZ1bmN0aW9uIChzaWRlKSB7XG4gICAgICAgICAgICBzaWRlLmZvckVhY2goZnVuY3Rpb24gKGxlZykge1xuICAgICAgICAgICAgICAgIGxlZy5vZmZzZXRBbGwoX3RoaXMubW9kZWwudmVjdG9yKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5zdGVwKCk7XG4gICAgfVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShTZWdtZW50LnByb3RvdHlwZSwgXCJ0YXJnZXRcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm1vZGVsLnRhcmdldC5jbG9uZSgpO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5tb2RlbC50YXJnZXQgPSB2YWx1ZTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgU2VnbWVudC5wcm90b3R5cGUudGljayA9IGZ1bmN0aW9uIChwcm9ncmVzcykge1xuICAgICAgICBpZiAocHJvZ3Jlc3MgPT09IHZvaWQgMCkgeyBwcm9ncmVzcyA9IDA7IH1cbiAgICAgICAgdmFyIF9hID0gdGhpcy5tb2RlbCwgdGFyZ2V0ID0gX2EudGFyZ2V0LCB2ZWN0b3JTdGFydCA9IF9hLnZlY3RvclN0YXJ0LCBtYXhEaXN0YW5jZSA9IF9hLm1heERpc3RhbmNlO1xuICAgICAgICB2YXIgZGlzdGFuY2UgPSBNYXRoLm1pbihtYXhEaXN0YW5jZSwgZ2VvbV8xLlBvaW50LmRpc3RhbmNlKHRhcmdldCwgdmVjdG9yU3RhcnQucG9pbnQpKTtcbiAgICAgICAgdGhpcy5tb3ZlU2VnbWVudChwcm9ncmVzcywgZGlzdGFuY2UpO1xuICAgICAgICB0aGlzLm1vdmVMZWdzKHByb2dyZXNzLCBkaXN0YW5jZSk7XG4gICAgfTtcbiAgICBTZWdtZW50LnByb3RvdHlwZS5zdGVwID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLnJlc3RhcnRTdGVwKCk7XG4gICAgICAgIHRoaXMubW9kZWwuc3RlcCA9ICh0aGlzLm1vZGVsLnN0ZXAgKyAxKSAlIHRoaXMubW9kZWwubGVncy5sZW5ndGg7XG4gICAgfTtcbiAgICBTZWdtZW50LnByb3RvdHlwZS5yZXN0YXJ0U3RlcCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF9hID0gdGhpcy5tb2RlbCwgdmVjdG9yID0gX2EudmVjdG9yLCB0YXJnZXQgPSBfYS50YXJnZXQsIG5hdmlnYXRlV29ybGQgPSBfYS5uYXZpZ2F0ZVdvcmxkLCBwcmV2aW91c1N0ZXBUYXJnZXQgPSBfYS5wcmV2aW91c1N0ZXBUYXJnZXQ7XG4gICAgICAgIHRoaXMubW9kZWwudmVjdG9yU3RhcnQgPSB2ZWN0b3IuY2xvbmUoKTtcbiAgICAgICAgdGhpcy5tb2RlbC5zdGVwVGFyZ2V0ID0gbmF2aWdhdGVXb3JsZCA/IG5hdmlnYXRlV29ybGQodmVjdG9yLnBvaW50LCB0YXJnZXQsIHByZXZpb3VzU3RlcFRhcmdldCkgOiB0YXJnZXQuY2xvbmUoKTtcbiAgICAgICAgdmFyIHN0ZXBUYXJnZXQgPSB0aGlzLm1vZGVsLnN0ZXBUYXJnZXQ7XG4gICAgICAgIGlmIChwcmV2aW91c1N0ZXBUYXJnZXQueCAhPT0gc3RlcFRhcmdldC54ICYmIHByZXZpb3VzU3RlcFRhcmdldC55ICE9PSBzdGVwVGFyZ2V0LnkpIHtcbiAgICAgICAgICAgIHRoaXMubW9kZWwucHJldmlvdXNTdGVwVGFyZ2V0ID0gc3RlcFRhcmdldDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm1vZGVsLmxlZ3MuZm9yRWFjaChmdW5jdGlvbiAoc2lkZSkge1xuICAgICAgICAgICAgc2lkZS5mb3JFYWNoKGZ1bmN0aW9uIChsZWcpIHtcbiAgICAgICAgICAgICAgICBsZWcucmVzdGFydFN0ZXAoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIFNlZ21lbnQucHJvdG90eXBlLm1vdmVTZWdtZW50ID0gZnVuY3Rpb24gKHByb2dyZXNzLCBkaXN0YW5jZSkge1xuICAgICAgICB2YXIgX2EgPSB0aGlzLm1vZGVsLCBzdGVwVGFyZ2V0ID0gX2Euc3RlcFRhcmdldCwgdGFyZ2V0ID0gX2EudGFyZ2V0LCB2ZWN0b3IgPSBfYS52ZWN0b3IsIHZlY3RvclN0YXJ0ID0gX2EudmVjdG9yU3RhcnQsIG1heERpc3RhbmNlID0gX2EubWF4RGlzdGFuY2UsIG1heFJvdGF0aW9uID0gX2EubWF4Um90YXRpb24sIG9uVGFyZ2V0UmVhY2hlZCA9IF9hLm9uVGFyZ2V0UmVhY2hlZDtcbiAgICAgICAgdmFyIHRhcmdldFJhZGlhbnMgPSBNYXRoLmF0YW4yKHN0ZXBUYXJnZXQueSAtIHZlY3RvclN0YXJ0LnksIHN0ZXBUYXJnZXQueCAtIHZlY3RvclN0YXJ0LngpO1xuICAgICAgICB2YXIgZGVsdGFSYWRpYW5zID0gTWF0aC5tYXgoLW1heFJvdGF0aW9uLCBNYXRoLm1pbihtYXhSb3RhdGlvbiwgZ2VvbV8xLkFuZ2xlLmRlbHRhKHZlY3Rvci5yYWRpYW5zLCB0YXJnZXRSYWRpYW5zKSkpO1xuICAgICAgICB2ZWN0b3IucmFkaWFucyA9IGdlb21fMS5BbmdsZS5ub3JtYWxpemUodmVjdG9yU3RhcnQucmFkaWFucykgKyBkZWx0YVJhZGlhbnMgKiBwcm9ncmVzcztcbiAgICAgICAgdmFyIHJhZGlhbnNEZWx0YSA9IE1hdGguYWJzKGdlb21fMS5BbmdsZS5ub3JtYWxpemUodGFyZ2V0UmFkaWFucykgLSB2ZWN0b3IucmFkaWFucyk7XG4gICAgICAgIHZhciByYWRpYW5zRGFtcGVyID0gMSAtIHJhZGlhbnNEZWx0YSAvIChNYXRoLlBJICogMik7XG4gICAgICAgIHZhciBtb3ZlRGlzdGFuY2UgPSBkaXN0YW5jZSAqIHByb2dyZXNzICogcmFkaWFuc0RhbXBlcjtcbiAgICAgICAgdmVjdG9yLnggPSB2ZWN0b3JTdGFydC54ICsgTWF0aC5jb3ModGFyZ2V0UmFkaWFucykgKiBtb3ZlRGlzdGFuY2U7XG4gICAgICAgIHZlY3Rvci55ID0gdmVjdG9yU3RhcnQueSArIE1hdGguc2luKHRhcmdldFJhZGlhbnMpICogbW92ZURpc3RhbmNlO1xuICAgICAgICBpZiAob25UYXJnZXRSZWFjaGVkKSB7XG4gICAgICAgICAgICBpZiAoZ2VvbV8xLlBvaW50LmRpc3RhbmNlKHRhcmdldCwgdmVjdG9yLnBvaW50KSA8PSBtYXhEaXN0YW5jZSkge1xuICAgICAgICAgICAgICAgIG9uVGFyZ2V0UmVhY2hlZCh0YXJnZXQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICBTZWdtZW50LnByb3RvdHlwZS5tb3ZlTGVncyA9IGZ1bmN0aW9uIChwcm9ncmVzcywgZGlzdGFuY2UpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdmFyIF9hID0gdGhpcy5tb2RlbCwgbGVncyA9IF9hLmxlZ3MsIHZlY3RvciA9IF9hLnZlY3RvciwgdmVjdG9yU3RhcnQgPSBfYS52ZWN0b3JTdGFydDtcbiAgICAgICAgbGVncy5mb3JFYWNoKGZ1bmN0aW9uIChzaWRlLCBzaWRlSW5kZXgpIHtcbiAgICAgICAgICAgIHNpZGUuZm9yRWFjaChmdW5jdGlvbiAobGVnKSB7XG4gICAgICAgICAgICAgICAgbGVnLm9mZnNldCh2ZWN0b3IpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAoc2lkZUluZGV4ID09PSBfdGhpcy5tb2RlbC5zdGVwKSB7XG4gICAgICAgICAgICAgICAgdmFyIHRhcmdldFZlY3Rvcl8xID0gbmV3IGdlb21fMS5WZWN0b3IodmVjdG9yU3RhcnQueCArIE1hdGguY29zKHZlY3Rvci5yYWRpYW5zKSAqIGRpc3RhbmNlLCB2ZWN0b3JTdGFydC55ICsgTWF0aC5zaW4odmVjdG9yLnJhZGlhbnMpICogZGlzdGFuY2UsIHZlY3Rvci5yYWRpYW5zKTtcbiAgICAgICAgICAgICAgICBzaWRlLmZvckVhY2goZnVuY3Rpb24gKGxlZykge1xuICAgICAgICAgICAgICAgICAgICBsZWcudGljayh0YXJnZXRWZWN0b3JfMSwgcHJvZ3Jlc3MpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9O1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShTZWdtZW50LnByb3RvdHlwZSwgXCJ4XCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5tb2RlbC52ZWN0b3IueDtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMubW9kZWwudmVjdG9yLnggPSB2YWx1ZTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFNlZ21lbnQucHJvdG90eXBlLCBcInlcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm1vZGVsLnZlY3Rvci55O1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5tb2RlbC52ZWN0b3IueSA9IHZhbHVlO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoU2VnbWVudC5wcm90b3R5cGUsIFwicmFkaWFuc1wiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMubW9kZWwudmVjdG9yLnJhZGlhbnM7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLm1vZGVsLnZlY3Rvci5yYWRpYW5zID0gdmFsdWU7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShTZWdtZW50LnByb3RvdHlwZSwgXCJkYXRhXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gX19hc3NpZ24oe30sIHRoaXMubW9kZWwudmVjdG9yLmRhdGEsIHsgbGVnczogdGhpcy5tb2RlbC5sZWdzLm1hcChmdW5jdGlvbiAoc2lkZSkgeyByZXR1cm4gKHNpZGUubWFwKGZ1bmN0aW9uIChsZWcpIHsgcmV0dXJuIGxlZy5kYXRhOyB9KSk7IH0pIH0pO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICByZXR1cm4gU2VnbWVudDtcbn0oKSk7XG5leHBvcnRzLlNlZ21lbnQgPSBTZWdtZW50O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==