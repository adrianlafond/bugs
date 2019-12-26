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
                    willHitObstacle: options.willHitObstacle,
                })],
            target: new geom_1.Point(targetX, targetY),
            progress: 0,
            onTargetReached: options.onTargetReached || (function () { }),
        };
        this.target = this.model.target;
    }
    Bug.prototype.tick = function (delta) {
        var _this = this;
        if (delta === void 0) { delta = 1; }
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
            vectorStart: new geom_1.Vector(),
            step: 0,
            onTargetReached: null,
            willHitObstacle: null,
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
        var _a = this.model, threshold = _a.maxDistance, vector = _a.vector, target = _a.target, willHitObstacle = _a.willHitObstacle;
        this.model.vectorStart = vector.clone();
        this.model.stepTarget = target.clone();
        if (willHitObstacle) {
            var _b = this.model, stepTarget = _b.stepTarget, vectorStart = _b.vectorStart;
            var hit = willHitObstacle(vector.point, target, threshold);
            if (hit) {
                if (hit.from === 'left') {
                    stepTarget.x = hit.obstacle.x - threshold * 2;
                }
                else if (hit.from === 'right') {
                    stepTarget.x = hit.obstacle.x + hit.obstacle.width + threshold * 2;
                }
                else if (hit.from === 'top') {
                    stepTarget.y = hit.obstacle.y - threshold * 2;
                }
                else if (hit.from === 'bottom') {
                    stepTarget.y = hit.obstacle.y + hit.obstacle.height + threshold * 2;
                }
                if (hit.from === 'left' || hit.from === 'right') {
                    var topIsClosest = stepTarget.y - hit.obstacle.y <
                        hit.obstacle.y + hit.obstacle.height - stepTarget.y;
                    stepTarget.y = vectorStart.y + (topIsClosest ? -threshold : threshold);
                }
                else {
                    var leftIsClosest = stepTarget.x - hit.obstacle.x <
                        hit.obstacle.x + hit.obstacle.width - stepTarget.x;
                    stepTarget.x = vectorStart.x + (leftIsClosest ? -threshold : threshold);
                }
            }
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
        vector.radians = targetRadians; // Angle.normalize(vectorStart.radians) + deltaRadians * progress;
        var moveDistance = distance * progress;
        vector.x = vectorStart.x + Math.cos(vector.radians) * moveDistance;
        vector.y = vectorStart.y + Math.sin(vector.radians) * moveDistance;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9CdWcvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL0J1Zy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9CdWcvLi9ub2RlX21vZHVsZXMvQGFkcmlhbmxhZm9uZC9nZW9tL2Rpc3QvZ2VvbS5qcyIsIndlYnBhY2s6Ly9CdWcvLi9zcmMvYnVnL2J1Zy50cyIsIndlYnBhY2s6Ly9CdWcvLi9zcmMvYnVnL2luZGV4LnRzIiwid2VicGFjazovL0J1Zy8uL3NyYy9idWcvbGVnLnRzIiwid2VicGFjazovL0J1Zy8uL3NyYy9idWcvc2VnbWVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDbEZBLGVBQWUsS0FBaUQs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QUs7QUFDTDtBQUNBLGtDQUFrQyxjQUFjO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUM7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLDhCQUE4QiwyQkFBMkIsNENBQTRDLGtDQUFrQyxpQkFBaUIsRUFBRSxHQUFHLEVBQUUsR0FBRztBQUNsSyxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLENBQUM7QUFDRCIsImZpbGUiOiJidWcuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShcIkJ1Z1wiLCBbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJCdWdcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiQnVnXCJdID0gZmFjdG9yeSgpO1xufSkod2luZG93LCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9idWcvaW5kZXgudHNcIik7XG4iLCIhZnVuY3Rpb24odCxlKXtcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cyYmXCJvYmplY3RcIj09dHlwZW9mIG1vZHVsZT9tb2R1bGUuZXhwb3J0cz1lKCk6XCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZShcIkdlb21cIixbXSxlKTpcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cz9leHBvcnRzLkdlb209ZSgpOnQuR2VvbT1lKCl9KHdpbmRvdyxmdW5jdGlvbigpe3JldHVybiBmdW5jdGlvbih0KXt2YXIgZT17fTtmdW5jdGlvbiBuKHIpe2lmKGVbcl0pcmV0dXJuIGVbcl0uZXhwb3J0czt2YXIgbz1lW3JdPXtpOnIsbDohMSxleHBvcnRzOnt9fTtyZXR1cm4gdFtyXS5jYWxsKG8uZXhwb3J0cyxvLG8uZXhwb3J0cyxuKSxvLmw9ITAsby5leHBvcnRzfXJldHVybiBuLm09dCxuLmM9ZSxuLmQ9ZnVuY3Rpb24odCxlLHIpe24ubyh0LGUpfHxPYmplY3QuZGVmaW5lUHJvcGVydHkodCxlLHtlbnVtZXJhYmxlOiEwLGdldDpyfSl9LG4ucj1mdW5jdGlvbih0KXtcInVuZGVmaW5lZFwiIT10eXBlb2YgU3ltYm9sJiZTeW1ib2wudG9TdHJpbmdUYWcmJk9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFN5bWJvbC50b1N0cmluZ1RhZyx7dmFsdWU6XCJNb2R1bGVcIn0pLE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pfSxuLnQ9ZnVuY3Rpb24odCxlKXtpZigxJmUmJih0PW4odCkpLDgmZSlyZXR1cm4gdDtpZig0JmUmJlwib2JqZWN0XCI9PXR5cGVvZiB0JiZ0JiZ0Ll9fZXNNb2R1bGUpcmV0dXJuIHQ7dmFyIHI9T2JqZWN0LmNyZWF0ZShudWxsKTtpZihuLnIociksT2JqZWN0LmRlZmluZVByb3BlcnR5KHIsXCJkZWZhdWx0XCIse2VudW1lcmFibGU6ITAsdmFsdWU6dH0pLDImZSYmXCJzdHJpbmdcIiE9dHlwZW9mIHQpZm9yKHZhciBvIGluIHQpbi5kKHIsbyxmdW5jdGlvbihlKXtyZXR1cm4gdFtlXX0uYmluZChudWxsLG8pKTtyZXR1cm4gcn0sbi5uPWZ1bmN0aW9uKHQpe3ZhciBlPXQmJnQuX19lc01vZHVsZT9mdW5jdGlvbigpe3JldHVybiB0LmRlZmF1bHR9OmZ1bmN0aW9uKCl7cmV0dXJuIHR9O3JldHVybiBuLmQoZSxcImFcIixlKSxlfSxuLm89ZnVuY3Rpb24odCxlKXtyZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHQsZSl9LG4ucD1cIlwiLG4obi5zPTEpfShbZnVuY3Rpb24odCxlLG4pe1widXNlIHN0cmljdFwiO09iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pO3ZhciByPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gdCh0LGUpe3ZvaWQgMD09PXQmJih0PTApLHZvaWQgMD09PWUmJihlPTApLHRoaXMueD10LHRoaXMueT1lfXJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkodC5wcm90b3R5cGUsXCJkYXRhXCIse2dldDpmdW5jdGlvbigpe3JldHVybnt4OnRoaXMueCx5OnRoaXMueX19LGVudW1lcmFibGU6ITAsY29uZmlndXJhYmxlOiEwfSksdC5wcm90b3R5cGUuY2xvbmU9ZnVuY3Rpb24oKXtyZXR1cm4gbmV3IHQodGhpcy54LHRoaXMueSl9LHQucHJvdG90eXBlLmFkZD1mdW5jdGlvbih0KXtyZXR1cm4gdGhpcy54Kz10LngsdGhpcy55Kz10LnksdGhpc30sdC5wcm90b3R5cGUuc3VidHJhY3Q9ZnVuY3Rpb24odCl7cmV0dXJuIHRoaXMueC09dC54LHRoaXMueS09dC55LHRoaXN9LHQucHJvdG90eXBlLnRvU3RyaW5nPWZ1bmN0aW9uKCl7cmV0dXJuIEpTT04uc3RyaW5naWZ5KHRoaXMuZGF0YSl9LHQuZGlzdGFuY2U9ZnVuY3Rpb24odCxlKXtyZXR1cm4gTWF0aC5zcXJ0KCh0LngtZS54KSoodC54LWUueCkrKHQueS1lLnkpKih0LnktZS55KSl9LHQucmFkaWFucz1mdW5jdGlvbih0LGUpe3JldHVybiBNYXRoLmF0YW4yKGUueS10LnksZS54LXQueCl9LHR9KCk7ZS5kZWZhdWx0PXJ9LGZ1bmN0aW9uKHQsZSxuKXtcInVzZSBzdHJpY3RcIjtPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KTt2YXIgcj1uKDIpO2UuQW5nbGU9ci5kZWZhdWx0O3ZhciBvPW4oMCk7ZS5Qb2ludD1vLmRlZmF1bHQ7dmFyIGk9bigzKTtlLlZlY3Rvcj1pLmRlZmF1bHR9LGZ1bmN0aW9uKHQsZSxuKXtcInVzZSBzdHJpY3RcIjtPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KTt2YXIgcj1mdW5jdGlvbigpe2Z1bmN0aW9uIHQoKXt9cmV0dXJuIHQudG9SYWRpYW5zPWZ1bmN0aW9uKHQpe3JldHVybiB0Kk1hdGguUEkvMTgwfSx0LnRvRGVncmVlcz1mdW5jdGlvbih0KXtyZXR1cm4gMTgwKnQvTWF0aC5QSX0sdC5pbnRlcnBvbGF0ZT1mdW5jdGlvbihlLG4scil7cmV0dXJuIHQubm9ybWFsaXplKGUrdC5kZWx0YShlLG4pKnIpfSx0LmRlbHRhPWZ1bmN0aW9uKGUsbil7dmFyIHI9dC5ub3JtYWxpemUoZSksbz10Lm5vcm1hbGl6ZShuKSxpPW8tcjtyZXR1cm4gTWF0aC5hYnMoaSk+TWF0aC5QSSYmKGk9by0yKk1hdGguUEktciksaX0sdC5ub3JtYWxpemU9ZnVuY3Rpb24odCl7dmFyIGU9dCUoMipNYXRoLlBJKTtyZXR1cm4gZTwwJiYoZSs9MipNYXRoLlBJKSxlfSx0fSgpO2UuZGVmYXVsdD1yfSxmdW5jdGlvbih0LGUsbil7XCJ1c2Ugc3RyaWN0XCI7T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSk7dmFyIHI9bigwKSxvPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gdCh0LGUsbil7dm9pZCAwPT09dCYmKHQ9MCksdm9pZCAwPT09ZSYmKGU9MCksdm9pZCAwPT09biYmKG49MCksdGhpcy5tb2RlbD17fSx0IGluc3RhbmNlb2Ygci5kZWZhdWx0Pyh0aGlzLm1vZGVsLnBvaW50PXQuY2xvbmUoKSx0aGlzLm1vZGVsLnJhZGlhbnM9ZSk6KHRoaXMubW9kZWwucG9pbnQ9bmV3IHIuZGVmYXVsdCh0LGUpLHRoaXMubW9kZWwucmFkaWFucz1uKX1yZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KHQucHJvdG90eXBlLFwicG9pbnRcIix7Z2V0OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMubW9kZWwucG9pbnQuY2xvbmUoKX0sZW51bWVyYWJsZTohMCxjb25maWd1cmFibGU6ITB9KSxPYmplY3QuZGVmaW5lUHJvcGVydHkodC5wcm90b3R5cGUsXCJ4XCIse2dldDpmdW5jdGlvbigpe3JldHVybiB0aGlzLm1vZGVsLnBvaW50Lnh9LHNldDpmdW5jdGlvbih0KXt0aGlzLm1vZGVsLnBvaW50Lng9dH0sZW51bWVyYWJsZTohMCxjb25maWd1cmFibGU6ITB9KSxPYmplY3QuZGVmaW5lUHJvcGVydHkodC5wcm90b3R5cGUsXCJ5XCIse2dldDpmdW5jdGlvbigpe3JldHVybiB0aGlzLm1vZGVsLnBvaW50Lnl9LHNldDpmdW5jdGlvbih0KXt0aGlzLm1vZGVsLnBvaW50Lnk9dH0sZW51bWVyYWJsZTohMCxjb25maWd1cmFibGU6ITB9KSxPYmplY3QuZGVmaW5lUHJvcGVydHkodC5wcm90b3R5cGUsXCJyYWRpYW5zXCIse2dldDpmdW5jdGlvbigpe3JldHVybiB0aGlzLm1vZGVsLnJhZGlhbnN9LHNldDpmdW5jdGlvbih0KXt0aGlzLm1vZGVsLnJhZGlhbnM9dH0sZW51bWVyYWJsZTohMCxjb25maWd1cmFibGU6ITB9KSxPYmplY3QuZGVmaW5lUHJvcGVydHkodC5wcm90b3R5cGUsXCJkYXRhXCIse2dldDpmdW5jdGlvbigpe3JldHVybnt4OnRoaXMueCx5OnRoaXMueSxyYWRpYW5zOnRoaXMucmFkaWFuc319LGVudW1lcmFibGU6ITAsY29uZmlndXJhYmxlOiEwfSksdC5wcm90b3R5cGUuY2xvbmU9ZnVuY3Rpb24oKXtyZXR1cm4gbmV3IHQodGhpcy5wb2ludCx0aGlzLnJhZGlhbnMpfSx0LnByb3RvdHlwZS50b1N0cmluZz1mdW5jdGlvbigpe3JldHVybiBKU09OLnN0cmluZ2lmeSh0aGlzLmRhdGEpfSx0fSgpO2UuZGVmYXVsdD1vfV0pfSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1nZW9tLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIGdlb21fMSA9IHJlcXVpcmUoXCJAYWRyaWFubGFmb25kL2dlb21cIik7XG52YXIgc2VnbWVudF8xID0gcmVxdWlyZShcIi4vc2VnbWVudFwiKTtcbnZhciBCdWcgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gQnVnKG9wdGlvbnMpIHtcbiAgICAgICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cbiAgICAgICAgdmFyIF9hID0gb3B0aW9ucy54LCB4ID0gX2EgPT09IHZvaWQgMCA/IDAgOiBfYSwgX2IgPSBvcHRpb25zLnksIHkgPSBfYiA9PT0gdm9pZCAwID8gMCA6IF9iLCBfYyA9IG9wdGlvbnMucmFkaWFucywgcmFkaWFucyA9IF9jID09PSB2b2lkIDAgPyAwIDogX2M7XG4gICAgICAgIHZhciBfZCA9IG9wdGlvbnMudGFyZ2V0IHx8IHt9LCBfZSA9IF9kLngsIHRhcmdldFggPSBfZSA9PT0gdm9pZCAwID8gMCA6IF9lLCBfZiA9IF9kLnksIHRhcmdldFkgPSBfZiA9PT0gdm9pZCAwID8gMCA6IF9mO1xuICAgICAgICB0aGlzLm1vZGVsID0ge1xuICAgICAgICAgICAgc2VnbWVudHM6IFtuZXcgc2VnbWVudF8xLlNlZ21lbnQoe1xuICAgICAgICAgICAgICAgICAgICB2ZWN0b3I6IG5ldyBnZW9tXzEuVmVjdG9yKHgsIHksIHJhZGlhbnMpLFxuICAgICAgICAgICAgICAgICAgICBvblRhcmdldFJlYWNoZWQ6IHRoaXMub25UYXJnZXRSZWFjaGVkLmJpbmQodGhpcyksXG4gICAgICAgICAgICAgICAgICAgIHdpbGxIaXRPYnN0YWNsZTogb3B0aW9ucy53aWxsSGl0T2JzdGFjbGUsXG4gICAgICAgICAgICAgICAgfSldLFxuICAgICAgICAgICAgdGFyZ2V0OiBuZXcgZ2VvbV8xLlBvaW50KHRhcmdldFgsIHRhcmdldFkpLFxuICAgICAgICAgICAgcHJvZ3Jlc3M6IDAsXG4gICAgICAgICAgICBvblRhcmdldFJlYWNoZWQ6IG9wdGlvbnMub25UYXJnZXRSZWFjaGVkIHx8IChmdW5jdGlvbiAoKSB7IH0pLFxuICAgICAgICB9O1xuICAgICAgICB0aGlzLnRhcmdldCA9IHRoaXMubW9kZWwudGFyZ2V0O1xuICAgIH1cbiAgICBCdWcucHJvdG90eXBlLnRpY2sgPSBmdW5jdGlvbiAoZGVsdGEpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgaWYgKGRlbHRhID09PSB2b2lkIDApIHsgZGVsdGEgPSAxOyB9XG4gICAgICAgIC8vIFRPRE86IEluY29ycG9yYXRlIGRlbHRhIGFzIGFuIG9wdGlvbj8gTWFrZXMgZm9yIHVuc21vb3RoIGFuaW1hdGlvbiBldmVuXG4gICAgICAgIC8vIGlmIGluY29ycG9yYXRpbmcgaXQgaXMgbW9yZSBcImFjY3VyYXRlXCIuXG4gICAgICAgIHRoaXMubW9kZWwucHJvZ3Jlc3MgPSBNYXRoLm1pbigxLCB0aGlzLm1vZGVsLnByb2dyZXNzICsgMC4xKTsgLy8gKiBkZWx0YVxuICAgICAgICB2YXIgaXNTdGVwQ29tcGxldGUgPSB0aGlzLm1vZGVsLnByb2dyZXNzID49IDE7XG4gICAgICAgIHRoaXMubW9kZWwuc2VnbWVudHMuZm9yRWFjaChmdW5jdGlvbiAoc2VnbWVudCkge1xuICAgICAgICAgICAgc2VnbWVudC50aWNrKF90aGlzLm1vZGVsLnByb2dyZXNzKTtcbiAgICAgICAgICAgIGlmIChpc1N0ZXBDb21wbGV0ZSkge1xuICAgICAgICAgICAgICAgIHNlZ21lbnQuc3RlcCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKGlzU3RlcENvbXBsZXRlKSB7XG4gICAgICAgICAgICB0aGlzLm1vZGVsLnByb2dyZXNzID0gMDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShCdWcucHJvdG90eXBlLCBcInRhcmdldFwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMubW9kZWwudGFyZ2V0LmRhdGE7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLm1vZGVsLnRhcmdldC54ID0gdmFsdWUueDtcbiAgICAgICAgICAgIHRoaXMubW9kZWwudGFyZ2V0LnkgPSB2YWx1ZS55O1xuICAgICAgICAgICAgdGhpcy5tb2RlbC5zZWdtZW50c1swXS50YXJnZXQgPSB0aGlzLm1vZGVsLnRhcmdldDtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEJ1Zy5wcm90b3R5cGUsIFwieFwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMubW9kZWwuc2VnbWVudHNbMF0ueDtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMubW9kZWwuc2VnbWVudHNbMF0ueCA9IHZhbHVlO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQnVnLnByb3RvdHlwZSwgXCJ5XCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5tb2RlbC5zZWdtZW50c1swXS55O1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5tb2RlbC5zZWdtZW50c1swXS55ID0gdmFsdWU7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShCdWcucHJvdG90eXBlLCBcInJhZGlhbnNcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm1vZGVsLnNlZ21lbnRzWzBdLnJhZGlhbnM7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLm1vZGVsLnNlZ21lbnRzWzBdLnJhZGlhbnMgPSB2YWx1ZTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEJ1Zy5wcm90b3R5cGUsIFwic2VnbWVudHNcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm1vZGVsLnNlZ21lbnRzLm1hcChmdW5jdGlvbiAoc2VnbWVudCkgeyByZXR1cm4gc2VnbWVudC5kYXRhOyB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgQnVnLnByb3RvdHlwZS5vblRhcmdldFJlYWNoZWQgPSBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gICAgICAgIHRoaXMubW9kZWwub25UYXJnZXRSZWFjaGVkKHRhcmdldCk7XG4gICAgfTtcbiAgICByZXR1cm4gQnVnO1xufSgpKTtcbmV4cG9ydHMuQnVnID0gQnVnO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgYnVnXzEgPSByZXF1aXJlKFwiLi9idWdcIik7XG5leHBvcnRzLkJ1ZyA9IGJ1Z18xLkJ1ZztcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fYXNzaWduID0gKHRoaXMgJiYgdGhpcy5fX2Fzc2lnbikgfHwgZnVuY3Rpb24gKCkge1xuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbih0KSB7XG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSlcbiAgICAgICAgICAgICAgICB0W3BdID0gc1twXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdDtcbiAgICB9O1xuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBnZW9tXzEgPSByZXF1aXJlKFwiQGFkcmlhbmxhZm9uZC9nZW9tXCIpO1xudmFyIExlZyA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBMZWcob3B0aW9ucykge1xuICAgICAgICB0aGlzLm1vZGVsID0gX19hc3NpZ24oe30sIG9wdGlvbnMsIHsgbWFwOiB0aGlzLmNsb25lKG9wdGlvbnMuam9pbnRzKS5tYXAoZnVuY3Rpb24gKHBvaW50KSB7IHJldHVybiBuZXcgZ2VvbV8xLlZlY3Rvcihwb2ludC54LCBwb2ludC55LCBNYXRoLmF0YW4yKHBvaW50LnksIHBvaW50LngpKTsgfSksIGpvaW50c1N0YXJ0OiB0aGlzLmNsb25lKG9wdGlvbnMuam9pbnRzKSB9KTtcbiAgICB9XG4gICAgTGVnLnByb3RvdHlwZS5vZmZzZXQgPSBmdW5jdGlvbiAodmVjdG9yLCBpbmRleCkge1xuICAgICAgICBpZiAoaW5kZXggPT09IHZvaWQgMCkgeyBpbmRleCA9IDA7IH1cbiAgICAgICAgdmFyIF9hID0gdGhpcy5tb2RlbCwgam9pbnRzID0gX2Euam9pbnRzLCBtYXAgPSBfYS5tYXA7XG4gICAgICAgIHZhciBqb2ludCA9IGpvaW50c1tpbmRleF07XG4gICAgICAgIHZhciBtYXBKb2ludCA9IG1hcFtpbmRleF07XG4gICAgICAgIHZhciBkaXN0YW5jZSA9IGdlb21fMS5Qb2ludC5kaXN0YW5jZShtYXBKb2ludC5wb2ludCwgbmV3IGdlb21fMS5Qb2ludCgwLCAwKSk7XG4gICAgICAgIHZhciByYWRpYW5zID0gbWFwSm9pbnQucmFkaWFucyArIHZlY3Rvci5yYWRpYW5zO1xuICAgICAgICBqb2ludC54ID0gdmVjdG9yLnggKyBNYXRoLmNvcyhyYWRpYW5zKSAqIGRpc3RhbmNlO1xuICAgICAgICBqb2ludC55ID0gdmVjdG9yLnkgKyBNYXRoLnNpbihyYWRpYW5zKSAqIGRpc3RhbmNlO1xuICAgIH07XG4gICAgTGVnLnByb3RvdHlwZS5vZmZzZXRBbGwgPSBmdW5jdGlvbiAodmVjdG9yKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHRoaXMubW9kZWwuam9pbnRzLmZvckVhY2goZnVuY3Rpb24gKGpvaW50LCBpbmRleCkge1xuICAgICAgICAgICAgX3RoaXMub2Zmc2V0KHZlY3RvciwgaW5kZXgpO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIExlZy5wcm90b3R5cGUudGljayA9IGZ1bmN0aW9uICh2ZWN0b3IsIHByb2dyZXNzKSB7XG4gICAgICAgIHZhciBfYSA9IHRoaXMubW9kZWwsIGpvaW50cyA9IF9hLmpvaW50cywgam9pbnRzU3RhcnQgPSBfYS5qb2ludHNTdGFydCwgbWFwID0gX2EubWFwO1xuICAgICAgICB2YXIgaW5kZXggPSBqb2ludHMubGVuZ3RoIC0gMTtcbiAgICAgICAgdmFyIHJhZGlhbnMgPSBNYXRoLmF0YW4yKG1hcFtpbmRleF0ueSwgbWFwW2luZGV4XS54KSArIHZlY3Rvci5yYWRpYW5zO1xuICAgICAgICB2YXIgcmFkaXVzID0gZ2VvbV8xLlBvaW50LmRpc3RhbmNlKG1hcFtpbmRleF0ucG9pbnQsIG5ldyBnZW9tXzEuUG9pbnQoKSk7XG4gICAgICAgIHZhciBsYW5kID0gbmV3IGdlb21fMS5Qb2ludCh2ZWN0b3IueCArIE1hdGguY29zKHJhZGlhbnMpICogcmFkaXVzLCB2ZWN0b3IueSArIE1hdGguc2luKHJhZGlhbnMpICogcmFkaXVzKTtcbiAgICAgICAgdmFyIGxhbmRSYWRpYW5zID0gTWF0aC5hdGFuMihsYW5kLnkgLSBqb2ludHNTdGFydFtpbmRleF0ueSwgbGFuZC54IC0gam9pbnRzU3RhcnRbaW5kZXhdLngpO1xuICAgICAgICB2YXIgZGlzdGFuY2UgPSBnZW9tXzEuUG9pbnQuZGlzdGFuY2UobGFuZCwgam9pbnRzU3RhcnRbaW5kZXhdKTtcbiAgICAgICAgam9pbnRzW2luZGV4XS54ID0gam9pbnRzU3RhcnRbaW5kZXhdLnggKyBNYXRoLmNvcyhsYW5kUmFkaWFucykgKlxuICAgICAgICAgICAgKGRpc3RhbmNlICogcHJvZ3Jlc3MpO1xuICAgICAgICBqb2ludHNbaW5kZXhdLnkgPSBqb2ludHNTdGFydFtpbmRleF0ueSArIE1hdGguc2luKGxhbmRSYWRpYW5zKSAqXG4gICAgICAgICAgICAoZGlzdGFuY2UgKiBwcm9ncmVzcyk7XG4gICAgfTtcbiAgICBMZWcucHJvdG90eXBlLnJlc3RhcnRTdGVwID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLm1vZGVsLmpvaW50c1N0YXJ0ID0gdGhpcy5jbG9uZSgpO1xuICAgIH07XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KExlZy5wcm90b3R5cGUsIFwiZGF0YVwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMubW9kZWwuam9pbnRzLm1hcChmdW5jdGlvbiAoam9pbnQpIHsgcmV0dXJuIGpvaW50LmRhdGE7IH0pO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBMZWcucHJvdG90eXBlLmNsb25lID0gZnVuY3Rpb24gKGpvaW50cykge1xuICAgICAgICBpZiAoam9pbnRzID09PSB2b2lkIDApIHsgam9pbnRzID0gdGhpcy5tb2RlbC5qb2ludHM7IH1cbiAgICAgICAgcmV0dXJuIGpvaW50cy5tYXAoZnVuY3Rpb24gKGpvaW50KSB7IHJldHVybiBqb2ludC5jbG9uZSgpOyB9KTtcbiAgICB9O1xuICAgIHJldHVybiBMZWc7XG59KCkpO1xuZXhwb3J0cy5MZWcgPSBMZWc7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2Fzc2lnbiA9ICh0aGlzICYmIHRoaXMuX19hc3NpZ24pIHx8IGZ1bmN0aW9uICgpIHtcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24odCkge1xuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpXG4gICAgICAgICAgICAgICAgdFtwXSA9IHNbcF07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHQ7XG4gICAgfTtcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgZ2VvbV8xID0gcmVxdWlyZShcIkBhZHJpYW5sYWZvbmQvZ2VvbVwiKTtcbnZhciBsZWdfMSA9IHJlcXVpcmUoXCIuL2xlZ1wiKTtcbnZhciBTZWdtZW50ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFNlZ21lbnQob3B0aW9ucykge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB0aGlzLm1vZGVsID0ge1xuICAgICAgICAgICAgdmVjdG9yOiBuZXcgZ2VvbV8xLlZlY3RvcigpLFxuICAgICAgICAgICAgbGVnczogW1xuICAgICAgICAgICAgICAgIFtuZXcgbGVnXzEuTGVnKHsgam9pbnRzOiBbbmV3IGdlb21fMS5Qb2ludCgyLCAtNSksIG5ldyBnZW9tXzEuUG9pbnQoMTIsIC0xNCldIH0pLFxuICAgICAgICAgICAgICAgICAgICBuZXcgbGVnXzEuTGVnKHsgam9pbnRzOiBbbmV3IGdlb21fMS5Qb2ludCgwLCAtNSksIG5ldyBnZW9tXzEuUG9pbnQoMCwgLTE2KV0gfSksXG4gICAgICAgICAgICAgICAgICAgIG5ldyBsZWdfMS5MZWcoeyBqb2ludHM6IFtuZXcgZ2VvbV8xLlBvaW50KC00LCAtNSksIG5ldyBnZW9tXzEuUG9pbnQoLTgsIC0xMildIH0pXSxcbiAgICAgICAgICAgICAgICBbbmV3IGxlZ18xLkxlZyh7IGpvaW50czogW25ldyBnZW9tXzEuUG9pbnQoMiwgNSksIG5ldyBnZW9tXzEuUG9pbnQoMTIsIDE0KV0gfSksXG4gICAgICAgICAgICAgICAgICAgIG5ldyBsZWdfMS5MZWcoeyBqb2ludHM6IFtuZXcgZ2VvbV8xLlBvaW50KDAsIDUpLCBuZXcgZ2VvbV8xLlBvaW50KDAsIDE2KV0gfSksXG4gICAgICAgICAgICAgICAgICAgIG5ldyBsZWdfMS5MZWcoeyBqb2ludHM6IFtuZXcgZ2VvbV8xLlBvaW50KC00LCA1KSwgbmV3IGdlb21fMS5Qb2ludCgtOCwgMTIpXSB9KV0sXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgbWF4Um90YXRpb246IE1hdGguUEkgKiAwLjUsXG4gICAgICAgICAgICBtYXhEaXN0YW5jZTogMTAsXG4gICAgICAgICAgICB0YXJnZXQ6IG5ldyBnZW9tXzEuUG9pbnQoKSxcbiAgICAgICAgICAgIHN0ZXBUYXJnZXQ6IG5ldyBnZW9tXzEuUG9pbnQoKSxcbiAgICAgICAgICAgIHZlY3RvclN0YXJ0OiBuZXcgZ2VvbV8xLlZlY3RvcigpLFxuICAgICAgICAgICAgc3RlcDogMCxcbiAgICAgICAgICAgIG9uVGFyZ2V0UmVhY2hlZDogbnVsbCxcbiAgICAgICAgICAgIHdpbGxIaXRPYnN0YWNsZTogbnVsbCxcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5tb2RlbCA9IF9fYXNzaWduKHt9LCB0aGlzLm1vZGVsLCBvcHRpb25zKTtcbiAgICAgICAgdGhpcy5tb2RlbC52ZWN0b3JTdGFydCA9IHRoaXMubW9kZWwudmVjdG9yLmNsb25lKCk7XG4gICAgICAgIHRoaXMubW9kZWwubGVncy5mb3JFYWNoKGZ1bmN0aW9uIChzaWRlKSB7XG4gICAgICAgICAgICBzaWRlLmZvckVhY2goZnVuY3Rpb24gKGxlZykge1xuICAgICAgICAgICAgICAgIGxlZy5vZmZzZXRBbGwoX3RoaXMubW9kZWwudmVjdG9yKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5zdGVwKCk7XG4gICAgfVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShTZWdtZW50LnByb3RvdHlwZSwgXCJ0YXJnZXRcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm1vZGVsLnRhcmdldC5jbG9uZSgpO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5tb2RlbC50YXJnZXQgPSB2YWx1ZTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgU2VnbWVudC5wcm90b3R5cGUudGljayA9IGZ1bmN0aW9uIChwcm9ncmVzcykge1xuICAgICAgICBpZiAocHJvZ3Jlc3MgPT09IHZvaWQgMCkgeyBwcm9ncmVzcyA9IDA7IH1cbiAgICAgICAgdmFyIF9hID0gdGhpcy5tb2RlbCwgdGFyZ2V0ID0gX2EudGFyZ2V0LCB2ZWN0b3JTdGFydCA9IF9hLnZlY3RvclN0YXJ0LCBtYXhEaXN0YW5jZSA9IF9hLm1heERpc3RhbmNlO1xuICAgICAgICB2YXIgZGlzdGFuY2UgPSBNYXRoLm1pbihtYXhEaXN0YW5jZSwgZ2VvbV8xLlBvaW50LmRpc3RhbmNlKHRhcmdldCwgdmVjdG9yU3RhcnQucG9pbnQpKTtcbiAgICAgICAgdGhpcy5tb3ZlU2VnbWVudChwcm9ncmVzcywgZGlzdGFuY2UpO1xuICAgICAgICB0aGlzLm1vdmVMZWdzKHByb2dyZXNzLCBkaXN0YW5jZSk7XG4gICAgfTtcbiAgICBTZWdtZW50LnByb3RvdHlwZS5zdGVwID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLnJlc3RhcnRTdGVwKCk7XG4gICAgICAgIHRoaXMubW9kZWwuc3RlcCA9ICh0aGlzLm1vZGVsLnN0ZXAgKyAxKSAlIHRoaXMubW9kZWwubGVncy5sZW5ndGg7XG4gICAgfTtcbiAgICBTZWdtZW50LnByb3RvdHlwZS5yZXN0YXJ0U3RlcCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF9hID0gdGhpcy5tb2RlbCwgdGhyZXNob2xkID0gX2EubWF4RGlzdGFuY2UsIHZlY3RvciA9IF9hLnZlY3RvciwgdGFyZ2V0ID0gX2EudGFyZ2V0LCB3aWxsSGl0T2JzdGFjbGUgPSBfYS53aWxsSGl0T2JzdGFjbGU7XG4gICAgICAgIHRoaXMubW9kZWwudmVjdG9yU3RhcnQgPSB2ZWN0b3IuY2xvbmUoKTtcbiAgICAgICAgdGhpcy5tb2RlbC5zdGVwVGFyZ2V0ID0gdGFyZ2V0LmNsb25lKCk7XG4gICAgICAgIGlmICh3aWxsSGl0T2JzdGFjbGUpIHtcbiAgICAgICAgICAgIHZhciBfYiA9IHRoaXMubW9kZWwsIHN0ZXBUYXJnZXQgPSBfYi5zdGVwVGFyZ2V0LCB2ZWN0b3JTdGFydCA9IF9iLnZlY3RvclN0YXJ0O1xuICAgICAgICAgICAgdmFyIGhpdCA9IHdpbGxIaXRPYnN0YWNsZSh2ZWN0b3IucG9pbnQsIHRhcmdldCwgdGhyZXNob2xkKTtcbiAgICAgICAgICAgIGlmIChoaXQpIHtcbiAgICAgICAgICAgICAgICBpZiAoaGl0LmZyb20gPT09ICdsZWZ0Jykge1xuICAgICAgICAgICAgICAgICAgICBzdGVwVGFyZ2V0LnggPSBoaXQub2JzdGFjbGUueCAtIHRocmVzaG9sZCAqIDI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGhpdC5mcm9tID09PSAncmlnaHQnKSB7XG4gICAgICAgICAgICAgICAgICAgIHN0ZXBUYXJnZXQueCA9IGhpdC5vYnN0YWNsZS54ICsgaGl0Lm9ic3RhY2xlLndpZHRoICsgdGhyZXNob2xkICogMjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoaGl0LmZyb20gPT09ICd0b3AnKSB7XG4gICAgICAgICAgICAgICAgICAgIHN0ZXBUYXJnZXQueSA9IGhpdC5vYnN0YWNsZS55IC0gdGhyZXNob2xkICogMjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoaGl0LmZyb20gPT09ICdib3R0b20nKSB7XG4gICAgICAgICAgICAgICAgICAgIHN0ZXBUYXJnZXQueSA9IGhpdC5vYnN0YWNsZS55ICsgaGl0Lm9ic3RhY2xlLmhlaWdodCArIHRocmVzaG9sZCAqIDI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChoaXQuZnJvbSA9PT0gJ2xlZnQnIHx8IGhpdC5mcm9tID09PSAncmlnaHQnKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciB0b3BJc0Nsb3Nlc3QgPSBzdGVwVGFyZ2V0LnkgLSBoaXQub2JzdGFjbGUueSA8XG4gICAgICAgICAgICAgICAgICAgICAgICBoaXQub2JzdGFjbGUueSArIGhpdC5vYnN0YWNsZS5oZWlnaHQgLSBzdGVwVGFyZ2V0Lnk7XG4gICAgICAgICAgICAgICAgICAgIHN0ZXBUYXJnZXQueSA9IHZlY3RvclN0YXJ0LnkgKyAodG9wSXNDbG9zZXN0ID8gLXRocmVzaG9sZCA6IHRocmVzaG9sZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB2YXIgbGVmdElzQ2xvc2VzdCA9IHN0ZXBUYXJnZXQueCAtIGhpdC5vYnN0YWNsZS54IDxcbiAgICAgICAgICAgICAgICAgICAgICAgIGhpdC5vYnN0YWNsZS54ICsgaGl0Lm9ic3RhY2xlLndpZHRoIC0gc3RlcFRhcmdldC54O1xuICAgICAgICAgICAgICAgICAgICBzdGVwVGFyZ2V0LnggPSB2ZWN0b3JTdGFydC54ICsgKGxlZnRJc0Nsb3Nlc3QgPyAtdGhyZXNob2xkIDogdGhyZXNob2xkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5tb2RlbC5sZWdzLmZvckVhY2goZnVuY3Rpb24gKHNpZGUpIHtcbiAgICAgICAgICAgIHNpZGUuZm9yRWFjaChmdW5jdGlvbiAobGVnKSB7XG4gICAgICAgICAgICAgICAgbGVnLnJlc3RhcnRTdGVwKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBTZWdtZW50LnByb3RvdHlwZS5tb3ZlU2VnbWVudCA9IGZ1bmN0aW9uIChwcm9ncmVzcywgZGlzdGFuY2UpIHtcbiAgICAgICAgdmFyIF9hID0gdGhpcy5tb2RlbCwgc3RlcFRhcmdldCA9IF9hLnN0ZXBUYXJnZXQsIHRhcmdldCA9IF9hLnRhcmdldCwgdmVjdG9yID0gX2EudmVjdG9yLCB2ZWN0b3JTdGFydCA9IF9hLnZlY3RvclN0YXJ0LCBtYXhEaXN0YW5jZSA9IF9hLm1heERpc3RhbmNlLCBtYXhSb3RhdGlvbiA9IF9hLm1heFJvdGF0aW9uLCBvblRhcmdldFJlYWNoZWQgPSBfYS5vblRhcmdldFJlYWNoZWQ7XG4gICAgICAgIHZhciB0YXJnZXRSYWRpYW5zID0gTWF0aC5hdGFuMihzdGVwVGFyZ2V0LnkgLSB2ZWN0b3JTdGFydC55LCBzdGVwVGFyZ2V0LnggLSB2ZWN0b3JTdGFydC54KTtcbiAgICAgICAgdmFyIGRlbHRhUmFkaWFucyA9IE1hdGgubWF4KC1tYXhSb3RhdGlvbiwgTWF0aC5taW4obWF4Um90YXRpb24sIGdlb21fMS5BbmdsZS5kZWx0YSh2ZWN0b3IucmFkaWFucywgdGFyZ2V0UmFkaWFucykpKTtcbiAgICAgICAgdmVjdG9yLnJhZGlhbnMgPSB0YXJnZXRSYWRpYW5zOyAvLyBBbmdsZS5ub3JtYWxpemUodmVjdG9yU3RhcnQucmFkaWFucykgKyBkZWx0YVJhZGlhbnMgKiBwcm9ncmVzcztcbiAgICAgICAgdmFyIG1vdmVEaXN0YW5jZSA9IGRpc3RhbmNlICogcHJvZ3Jlc3M7XG4gICAgICAgIHZlY3Rvci54ID0gdmVjdG9yU3RhcnQueCArIE1hdGguY29zKHZlY3Rvci5yYWRpYW5zKSAqIG1vdmVEaXN0YW5jZTtcbiAgICAgICAgdmVjdG9yLnkgPSB2ZWN0b3JTdGFydC55ICsgTWF0aC5zaW4odmVjdG9yLnJhZGlhbnMpICogbW92ZURpc3RhbmNlO1xuICAgICAgICBpZiAob25UYXJnZXRSZWFjaGVkKSB7XG4gICAgICAgICAgICBpZiAoZ2VvbV8xLlBvaW50LmRpc3RhbmNlKHRhcmdldCwgdmVjdG9yLnBvaW50KSA8PSBtYXhEaXN0YW5jZSkge1xuICAgICAgICAgICAgICAgIG9uVGFyZ2V0UmVhY2hlZCh0YXJnZXQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICBTZWdtZW50LnByb3RvdHlwZS5tb3ZlTGVncyA9IGZ1bmN0aW9uIChwcm9ncmVzcywgZGlzdGFuY2UpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdmFyIF9hID0gdGhpcy5tb2RlbCwgbGVncyA9IF9hLmxlZ3MsIHZlY3RvciA9IF9hLnZlY3RvciwgdmVjdG9yU3RhcnQgPSBfYS52ZWN0b3JTdGFydDtcbiAgICAgICAgbGVncy5mb3JFYWNoKGZ1bmN0aW9uIChzaWRlLCBzaWRlSW5kZXgpIHtcbiAgICAgICAgICAgIHNpZGUuZm9yRWFjaChmdW5jdGlvbiAobGVnKSB7XG4gICAgICAgICAgICAgICAgbGVnLm9mZnNldCh2ZWN0b3IpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAoc2lkZUluZGV4ID09PSBfdGhpcy5tb2RlbC5zdGVwKSB7XG4gICAgICAgICAgICAgICAgdmFyIHRhcmdldFZlY3Rvcl8xID0gbmV3IGdlb21fMS5WZWN0b3IodmVjdG9yU3RhcnQueCArIE1hdGguY29zKHZlY3Rvci5yYWRpYW5zKSAqIGRpc3RhbmNlLCB2ZWN0b3JTdGFydC55ICsgTWF0aC5zaW4odmVjdG9yLnJhZGlhbnMpICogZGlzdGFuY2UsIHZlY3Rvci5yYWRpYW5zKTtcbiAgICAgICAgICAgICAgICBzaWRlLmZvckVhY2goZnVuY3Rpb24gKGxlZykge1xuICAgICAgICAgICAgICAgICAgICBsZWcudGljayh0YXJnZXRWZWN0b3JfMSwgcHJvZ3Jlc3MpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9O1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShTZWdtZW50LnByb3RvdHlwZSwgXCJ4XCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5tb2RlbC52ZWN0b3IueDtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMubW9kZWwudmVjdG9yLnggPSB2YWx1ZTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFNlZ21lbnQucHJvdG90eXBlLCBcInlcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm1vZGVsLnZlY3Rvci55O1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5tb2RlbC52ZWN0b3IueSA9IHZhbHVlO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoU2VnbWVudC5wcm90b3R5cGUsIFwicmFkaWFuc1wiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMubW9kZWwudmVjdG9yLnJhZGlhbnM7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLm1vZGVsLnZlY3Rvci5yYWRpYW5zID0gdmFsdWU7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShTZWdtZW50LnByb3RvdHlwZSwgXCJkYXRhXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gX19hc3NpZ24oe30sIHRoaXMubW9kZWwudmVjdG9yLmRhdGEsIHsgbGVnczogdGhpcy5tb2RlbC5sZWdzLm1hcChmdW5jdGlvbiAoc2lkZSkgeyByZXR1cm4gKHNpZGUubWFwKGZ1bmN0aW9uIChsZWcpIHsgcmV0dXJuIGxlZy5kYXRhOyB9KSk7IH0pIH0pO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICByZXR1cm4gU2VnbWVudDtcbn0oKSk7XG5leHBvcnRzLlNlZ21lbnQgPSBTZWdtZW50O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==