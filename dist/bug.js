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
            this.model.stepTarget = willHitObstacle(vector.point, this.model.stepTarget, target, threshold);
            // const { stepTarget, vectorStart } = this.model;
            // const hit = willHitObstacle(vector.point, target, threshold);
            // if (hit) {
            //   if (hit.from === 'left') {
            //     stepTarget.x = hit.obstacle.x - threshold * 2;
            //   } else if (hit.from === 'right') {
            //     stepTarget.x = hit.obstacle.x + hit.obstacle.width + threshold * 2;
            //   } else if (hit.from === 'top') {
            //     stepTarget.y = hit.obstacle.y - threshold * 2;
            //   } else if (hit.from === 'bottom') {
            //     stepTarget.y = hit.obstacle.y + hit.obstacle.height + threshold * 2;
            //   }
            //   if (hit.from === 'left' || hit.from === 'right') {
            //     const topIsClosest = stepTarget.y - hit.obstacle.y <
            //       hit.obstacle.y + hit.obstacle.height - stepTarget.y
            //     stepTarget.y = topIsClosest ? (hit.obstacle.y - threshold) :
            //       (hit.obstacle.y + hit.obstacle.height + threshold);
            //   } else {
            //     const leftIsClosest = stepTarget.x - hit.obstacle.x <
            //       hit.obstacle.x + hit.obstacle.width - stepTarget.x;
            //     stepTarget.x = leftIsClosest ? (hit.obstacle.x - threshold) :
            //       (hit.obstacle.x + hit.obstacle.width + threshold);
            //   }
            // }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9CdWcvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL0J1Zy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9CdWcvLi9ub2RlX21vZHVsZXMvQGFkcmlhbmxhZm9uZC9nZW9tL2Rpc3QvZ2VvbS5qcyIsIndlYnBhY2s6Ly9CdWcvLi9zcmMvYnVnL2J1Zy50cyIsIndlYnBhY2s6Ly9CdWcvLi9zcmMvYnVnL2luZGV4LnRzIiwid2VicGFjazovL0J1Zy8uL3NyYy9idWcvbGVnLnRzIiwid2VicGFjazovL0J1Zy8uL3NyYy9idWcvc2VnbWVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDbEZBLGVBQWUsS0FBaUQs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QUs7QUFDTDtBQUNBLGtDQUFrQyxjQUFjO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQiwwQkFBMEI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsOEJBQThCLDJCQUEyQiw0Q0FBNEMsa0NBQWtDLGlCQUFpQixFQUFFLEdBQUcsRUFBRSxHQUFHO0FBQ2xLLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsQ0FBQztBQUNEIiwiZmlsZSI6ImJ1Zy5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFwiQnVnXCIsIFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIkJ1Z1wiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJCdWdcIl0gPSBmYWN0b3J5KCk7XG59KSh3aW5kb3csIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2J1Zy9pbmRleC50c1wiKTtcbiIsIiFmdW5jdGlvbih0LGUpe1wib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzJiZcIm9iamVjdFwiPT10eXBlb2YgbW9kdWxlP21vZHVsZS5leHBvcnRzPWUoKTpcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQ/ZGVmaW5lKFwiR2VvbVwiLFtdLGUpOlwib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzP2V4cG9ydHMuR2VvbT1lKCk6dC5HZW9tPWUoKX0od2luZG93LGZ1bmN0aW9uKCl7cmV0dXJuIGZ1bmN0aW9uKHQpe3ZhciBlPXt9O2Z1bmN0aW9uIG4ocil7aWYoZVtyXSlyZXR1cm4gZVtyXS5leHBvcnRzO3ZhciBvPWVbcl09e2k6cixsOiExLGV4cG9ydHM6e319O3JldHVybiB0W3JdLmNhbGwoby5leHBvcnRzLG8sby5leHBvcnRzLG4pLG8ubD0hMCxvLmV4cG9ydHN9cmV0dXJuIG4ubT10LG4uYz1lLG4uZD1mdW5jdGlvbih0LGUscil7bi5vKHQsZSl8fE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LGUse2VudW1lcmFibGU6ITAsZ2V0OnJ9KX0sbi5yPWZ1bmN0aW9uKHQpe1widW5kZWZpbmVkXCIhPXR5cGVvZiBTeW1ib2wmJlN5bWJvbC50b1N0cmluZ1RhZyYmT2JqZWN0LmRlZmluZVByb3BlcnR5KHQsU3ltYm9sLnRvU3RyaW5nVGFnLHt2YWx1ZTpcIk1vZHVsZVwifSksT2JqZWN0LmRlZmluZVByb3BlcnR5KHQsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSl9LG4udD1mdW5jdGlvbih0LGUpe2lmKDEmZSYmKHQ9bih0KSksOCZlKXJldHVybiB0O2lmKDQmZSYmXCJvYmplY3RcIj09dHlwZW9mIHQmJnQmJnQuX19lc01vZHVsZSlyZXR1cm4gdDt2YXIgcj1PYmplY3QuY3JlYXRlKG51bGwpO2lmKG4ucihyKSxPYmplY3QuZGVmaW5lUHJvcGVydHkocixcImRlZmF1bHRcIix7ZW51bWVyYWJsZTohMCx2YWx1ZTp0fSksMiZlJiZcInN0cmluZ1wiIT10eXBlb2YgdClmb3IodmFyIG8gaW4gdCluLmQocixvLGZ1bmN0aW9uKGUpe3JldHVybiB0W2VdfS5iaW5kKG51bGwsbykpO3JldHVybiByfSxuLm49ZnVuY3Rpb24odCl7dmFyIGU9dCYmdC5fX2VzTW9kdWxlP2Z1bmN0aW9uKCl7cmV0dXJuIHQuZGVmYXVsdH06ZnVuY3Rpb24oKXtyZXR1cm4gdH07cmV0dXJuIG4uZChlLFwiYVwiLGUpLGV9LG4ubz1mdW5jdGlvbih0LGUpe3JldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwodCxlKX0sbi5wPVwiXCIsbihuLnM9MSl9KFtmdW5jdGlvbih0LGUsbil7XCJ1c2Ugc3RyaWN0XCI7T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSk7dmFyIHI9ZnVuY3Rpb24oKXtmdW5jdGlvbiB0KHQsZSl7dm9pZCAwPT09dCYmKHQ9MCksdm9pZCAwPT09ZSYmKGU9MCksdGhpcy54PXQsdGhpcy55PWV9cmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LnByb3RvdHlwZSxcImRhdGFcIix7Z2V0OmZ1bmN0aW9uKCl7cmV0dXJue3g6dGhpcy54LHk6dGhpcy55fX0sZW51bWVyYWJsZTohMCxjb25maWd1cmFibGU6ITB9KSx0LnByb3RvdHlwZS5jbG9uZT1mdW5jdGlvbigpe3JldHVybiBuZXcgdCh0aGlzLngsdGhpcy55KX0sdC5wcm90b3R5cGUuYWRkPWZ1bmN0aW9uKHQpe3JldHVybiB0aGlzLngrPXQueCx0aGlzLnkrPXQueSx0aGlzfSx0LnByb3RvdHlwZS5zdWJ0cmFjdD1mdW5jdGlvbih0KXtyZXR1cm4gdGhpcy54LT10LngsdGhpcy55LT10LnksdGhpc30sdC5wcm90b3R5cGUudG9TdHJpbmc9ZnVuY3Rpb24oKXtyZXR1cm4gSlNPTi5zdHJpbmdpZnkodGhpcy5kYXRhKX0sdC5kaXN0YW5jZT1mdW5jdGlvbih0LGUpe3JldHVybiBNYXRoLnNxcnQoKHQueC1lLngpKih0LngtZS54KSsodC55LWUueSkqKHQueS1lLnkpKX0sdC5yYWRpYW5zPWZ1bmN0aW9uKHQsZSl7cmV0dXJuIE1hdGguYXRhbjIoZS55LXQueSxlLngtdC54KX0sdH0oKTtlLmRlZmF1bHQ9cn0sZnVuY3Rpb24odCxlLG4pe1widXNlIHN0cmljdFwiO09iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pO3ZhciByPW4oMik7ZS5BbmdsZT1yLmRlZmF1bHQ7dmFyIG89bigwKTtlLlBvaW50PW8uZGVmYXVsdDt2YXIgaT1uKDMpO2UuVmVjdG9yPWkuZGVmYXVsdH0sZnVuY3Rpb24odCxlLG4pe1widXNlIHN0cmljdFwiO09iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pO3ZhciByPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gdCgpe31yZXR1cm4gdC50b1JhZGlhbnM9ZnVuY3Rpb24odCl7cmV0dXJuIHQqTWF0aC5QSS8xODB9LHQudG9EZWdyZWVzPWZ1bmN0aW9uKHQpe3JldHVybiAxODAqdC9NYXRoLlBJfSx0LmludGVycG9sYXRlPWZ1bmN0aW9uKGUsbixyKXtyZXR1cm4gdC5ub3JtYWxpemUoZSt0LmRlbHRhKGUsbikqcil9LHQuZGVsdGE9ZnVuY3Rpb24oZSxuKXt2YXIgcj10Lm5vcm1hbGl6ZShlKSxvPXQubm9ybWFsaXplKG4pLGk9by1yO3JldHVybiBNYXRoLmFicyhpKT5NYXRoLlBJJiYoaT1vLTIqTWF0aC5QSS1yKSxpfSx0Lm5vcm1hbGl6ZT1mdW5jdGlvbih0KXt2YXIgZT10JSgyKk1hdGguUEkpO3JldHVybiBlPDAmJihlKz0yKk1hdGguUEkpLGV9LHR9KCk7ZS5kZWZhdWx0PXJ9LGZ1bmN0aW9uKHQsZSxuKXtcInVzZSBzdHJpY3RcIjtPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KTt2YXIgcj1uKDApLG89ZnVuY3Rpb24oKXtmdW5jdGlvbiB0KHQsZSxuKXt2b2lkIDA9PT10JiYodD0wKSx2b2lkIDA9PT1lJiYoZT0wKSx2b2lkIDA9PT1uJiYobj0wKSx0aGlzLm1vZGVsPXt9LHQgaW5zdGFuY2VvZiByLmRlZmF1bHQ/KHRoaXMubW9kZWwucG9pbnQ9dC5jbG9uZSgpLHRoaXMubW9kZWwucmFkaWFucz1lKToodGhpcy5tb2RlbC5wb2ludD1uZXcgci5kZWZhdWx0KHQsZSksdGhpcy5tb2RlbC5yYWRpYW5zPW4pfXJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkodC5wcm90b3R5cGUsXCJwb2ludFwiLHtnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5tb2RlbC5wb2ludC5jbG9uZSgpfSxlbnVtZXJhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMH0pLE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LnByb3RvdHlwZSxcInhcIix7Z2V0OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMubW9kZWwucG9pbnQueH0sc2V0OmZ1bmN0aW9uKHQpe3RoaXMubW9kZWwucG9pbnQueD10fSxlbnVtZXJhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMH0pLE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LnByb3RvdHlwZSxcInlcIix7Z2V0OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMubW9kZWwucG9pbnQueX0sc2V0OmZ1bmN0aW9uKHQpe3RoaXMubW9kZWwucG9pbnQueT10fSxlbnVtZXJhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMH0pLE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LnByb3RvdHlwZSxcInJhZGlhbnNcIix7Z2V0OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMubW9kZWwucmFkaWFuc30sc2V0OmZ1bmN0aW9uKHQpe3RoaXMubW9kZWwucmFkaWFucz10fSxlbnVtZXJhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMH0pLE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LnByb3RvdHlwZSxcImRhdGFcIix7Z2V0OmZ1bmN0aW9uKCl7cmV0dXJue3g6dGhpcy54LHk6dGhpcy55LHJhZGlhbnM6dGhpcy5yYWRpYW5zfX0sZW51bWVyYWJsZTohMCxjb25maWd1cmFibGU6ITB9KSx0LnByb3RvdHlwZS5jbG9uZT1mdW5jdGlvbigpe3JldHVybiBuZXcgdCh0aGlzLnBvaW50LHRoaXMucmFkaWFucyl9LHQucHJvdG90eXBlLnRvU3RyaW5nPWZ1bmN0aW9uKCl7cmV0dXJuIEpTT04uc3RyaW5naWZ5KHRoaXMuZGF0YSl9LHR9KCk7ZS5kZWZhdWx0PW99XSl9KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWdlb20uanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgZ2VvbV8xID0gcmVxdWlyZShcIkBhZHJpYW5sYWZvbmQvZ2VvbVwiKTtcbnZhciBzZWdtZW50XzEgPSByZXF1aXJlKFwiLi9zZWdtZW50XCIpO1xudmFyIEJ1ZyA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBCdWcob3B0aW9ucykge1xuICAgICAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSB7fTsgfVxuICAgICAgICB2YXIgX2EgPSBvcHRpb25zLngsIHggPSBfYSA9PT0gdm9pZCAwID8gMCA6IF9hLCBfYiA9IG9wdGlvbnMueSwgeSA9IF9iID09PSB2b2lkIDAgPyAwIDogX2IsIF9jID0gb3B0aW9ucy5yYWRpYW5zLCByYWRpYW5zID0gX2MgPT09IHZvaWQgMCA/IDAgOiBfYztcbiAgICAgICAgdmFyIF9kID0gb3B0aW9ucy50YXJnZXQgfHwge30sIF9lID0gX2QueCwgdGFyZ2V0WCA9IF9lID09PSB2b2lkIDAgPyAwIDogX2UsIF9mID0gX2QueSwgdGFyZ2V0WSA9IF9mID09PSB2b2lkIDAgPyAwIDogX2Y7XG4gICAgICAgIHRoaXMubW9kZWwgPSB7XG4gICAgICAgICAgICBzZWdtZW50czogW25ldyBzZWdtZW50XzEuU2VnbWVudCh7XG4gICAgICAgICAgICAgICAgICAgIHZlY3RvcjogbmV3IGdlb21fMS5WZWN0b3IoeCwgeSwgcmFkaWFucyksXG4gICAgICAgICAgICAgICAgICAgIG9uVGFyZ2V0UmVhY2hlZDogdGhpcy5vblRhcmdldFJlYWNoZWQuYmluZCh0aGlzKSxcbiAgICAgICAgICAgICAgICAgICAgd2lsbEhpdE9ic3RhY2xlOiBvcHRpb25zLndpbGxIaXRPYnN0YWNsZSxcbiAgICAgICAgICAgICAgICB9KV0sXG4gICAgICAgICAgICB0YXJnZXQ6IG5ldyBnZW9tXzEuUG9pbnQodGFyZ2V0WCwgdGFyZ2V0WSksXG4gICAgICAgICAgICBwcm9ncmVzczogMCxcbiAgICAgICAgICAgIG9uVGFyZ2V0UmVhY2hlZDogb3B0aW9ucy5vblRhcmdldFJlYWNoZWQgfHwgKGZ1bmN0aW9uICgpIHsgfSksXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMudGFyZ2V0ID0gdGhpcy5tb2RlbC50YXJnZXQ7XG4gICAgfVxuICAgIEJ1Zy5wcm90b3R5cGUudGljayA9IGZ1bmN0aW9uIChkZWx0YSkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICBpZiAoZGVsdGEgPT09IHZvaWQgMCkgeyBkZWx0YSA9IDE7IH1cbiAgICAgICAgLy8gVE9ETzogSW5jb3Jwb3JhdGUgZGVsdGEgYXMgYW4gb3B0aW9uPyBNYWtlcyBmb3IgdW5zbW9vdGggYW5pbWF0aW9uIGV2ZW5cbiAgICAgICAgLy8gaWYgaW5jb3Jwb3JhdGluZyBpdCBpcyBtb3JlIFwiYWNjdXJhdGVcIi5cbiAgICAgICAgdGhpcy5tb2RlbC5wcm9ncmVzcyA9IE1hdGgubWluKDEsIHRoaXMubW9kZWwucHJvZ3Jlc3MgKyAwLjEpOyAvLyAqIGRlbHRhXG4gICAgICAgIHZhciBpc1N0ZXBDb21wbGV0ZSA9IHRoaXMubW9kZWwucHJvZ3Jlc3MgPj0gMTtcbiAgICAgICAgdGhpcy5tb2RlbC5zZWdtZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChzZWdtZW50KSB7XG4gICAgICAgICAgICBzZWdtZW50LnRpY2soX3RoaXMubW9kZWwucHJvZ3Jlc3MpO1xuICAgICAgICAgICAgaWYgKGlzU3RlcENvbXBsZXRlKSB7XG4gICAgICAgICAgICAgICAgc2VnbWVudC5zdGVwKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoaXNTdGVwQ29tcGxldGUpIHtcbiAgICAgICAgICAgIHRoaXMubW9kZWwucHJvZ3Jlc3MgPSAwO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEJ1Zy5wcm90b3R5cGUsIFwidGFyZ2V0XCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5tb2RlbC50YXJnZXQuZGF0YTtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMubW9kZWwudGFyZ2V0LnggPSB2YWx1ZS54O1xuICAgICAgICAgICAgdGhpcy5tb2RlbC50YXJnZXQueSA9IHZhbHVlLnk7XG4gICAgICAgICAgICB0aGlzLm1vZGVsLnNlZ21lbnRzWzBdLnRhcmdldCA9IHRoaXMubW9kZWwudGFyZ2V0O1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQnVnLnByb3RvdHlwZSwgXCJ4XCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5tb2RlbC5zZWdtZW50c1swXS54O1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5tb2RlbC5zZWdtZW50c1swXS54ID0gdmFsdWU7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShCdWcucHJvdG90eXBlLCBcInlcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm1vZGVsLnNlZ21lbnRzWzBdLnk7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLm1vZGVsLnNlZ21lbnRzWzBdLnkgPSB2YWx1ZTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEJ1Zy5wcm90b3R5cGUsIFwicmFkaWFuc1wiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMubW9kZWwuc2VnbWVudHNbMF0ucmFkaWFucztcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMubW9kZWwuc2VnbWVudHNbMF0ucmFkaWFucyA9IHZhbHVlO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQnVnLnByb3RvdHlwZSwgXCJzZWdtZW50c1wiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMubW9kZWwuc2VnbWVudHMubWFwKGZ1bmN0aW9uIChzZWdtZW50KSB7IHJldHVybiBzZWdtZW50LmRhdGE7IH0pO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBCdWcucHJvdG90eXBlLm9uVGFyZ2V0UmVhY2hlZCA9IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgICAgICAgdGhpcy5tb2RlbC5vblRhcmdldFJlYWNoZWQodGFyZ2V0KTtcbiAgICB9O1xuICAgIHJldHVybiBCdWc7XG59KCkpO1xuZXhwb3J0cy5CdWcgPSBCdWc7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBidWdfMSA9IHJlcXVpcmUoXCIuL2J1Z1wiKTtcbmV4cG9ydHMuQnVnID0gYnVnXzEuQnVnO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19hc3NpZ24gPSAodGhpcyAmJiB0aGlzLl9fYXNzaWduKSB8fCBmdW5jdGlvbiAoKSB7XG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKVxuICAgICAgICAgICAgICAgIHRbcF0gPSBzW3BdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0O1xuICAgIH07XG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIGdlb21fMSA9IHJlcXVpcmUoXCJAYWRyaWFubGFmb25kL2dlb21cIik7XG52YXIgTGVnID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIExlZyhvcHRpb25zKSB7XG4gICAgICAgIHRoaXMubW9kZWwgPSBfX2Fzc2lnbih7fSwgb3B0aW9ucywgeyBtYXA6IHRoaXMuY2xvbmUob3B0aW9ucy5qb2ludHMpLm1hcChmdW5jdGlvbiAocG9pbnQpIHsgcmV0dXJuIG5ldyBnZW9tXzEuVmVjdG9yKHBvaW50LngsIHBvaW50LnksIE1hdGguYXRhbjIocG9pbnQueSwgcG9pbnQueCkpOyB9KSwgam9pbnRzU3RhcnQ6IHRoaXMuY2xvbmUob3B0aW9ucy5qb2ludHMpIH0pO1xuICAgIH1cbiAgICBMZWcucHJvdG90eXBlLm9mZnNldCA9IGZ1bmN0aW9uICh2ZWN0b3IsIGluZGV4KSB7XG4gICAgICAgIGlmIChpbmRleCA9PT0gdm9pZCAwKSB7IGluZGV4ID0gMDsgfVxuICAgICAgICB2YXIgX2EgPSB0aGlzLm1vZGVsLCBqb2ludHMgPSBfYS5qb2ludHMsIG1hcCA9IF9hLm1hcDtcbiAgICAgICAgdmFyIGpvaW50ID0gam9pbnRzW2luZGV4XTtcbiAgICAgICAgdmFyIG1hcEpvaW50ID0gbWFwW2luZGV4XTtcbiAgICAgICAgdmFyIGRpc3RhbmNlID0gZ2VvbV8xLlBvaW50LmRpc3RhbmNlKG1hcEpvaW50LnBvaW50LCBuZXcgZ2VvbV8xLlBvaW50KDAsIDApKTtcbiAgICAgICAgdmFyIHJhZGlhbnMgPSBtYXBKb2ludC5yYWRpYW5zICsgdmVjdG9yLnJhZGlhbnM7XG4gICAgICAgIGpvaW50LnggPSB2ZWN0b3IueCArIE1hdGguY29zKHJhZGlhbnMpICogZGlzdGFuY2U7XG4gICAgICAgIGpvaW50LnkgPSB2ZWN0b3IueSArIE1hdGguc2luKHJhZGlhbnMpICogZGlzdGFuY2U7XG4gICAgfTtcbiAgICBMZWcucHJvdG90eXBlLm9mZnNldEFsbCA9IGZ1bmN0aW9uICh2ZWN0b3IpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdGhpcy5tb2RlbC5qb2ludHMuZm9yRWFjaChmdW5jdGlvbiAoam9pbnQsIGluZGV4KSB7XG4gICAgICAgICAgICBfdGhpcy5vZmZzZXQodmVjdG9yLCBpbmRleCk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgTGVnLnByb3RvdHlwZS50aWNrID0gZnVuY3Rpb24gKHZlY3RvciwgcHJvZ3Jlc3MpIHtcbiAgICAgICAgdmFyIF9hID0gdGhpcy5tb2RlbCwgam9pbnRzID0gX2Euam9pbnRzLCBqb2ludHNTdGFydCA9IF9hLmpvaW50c1N0YXJ0LCBtYXAgPSBfYS5tYXA7XG4gICAgICAgIHZhciBpbmRleCA9IGpvaW50cy5sZW5ndGggLSAxO1xuICAgICAgICB2YXIgcmFkaWFucyA9IE1hdGguYXRhbjIobWFwW2luZGV4XS55LCBtYXBbaW5kZXhdLngpICsgdmVjdG9yLnJhZGlhbnM7XG4gICAgICAgIHZhciByYWRpdXMgPSBnZW9tXzEuUG9pbnQuZGlzdGFuY2UobWFwW2luZGV4XS5wb2ludCwgbmV3IGdlb21fMS5Qb2ludCgpKTtcbiAgICAgICAgdmFyIGxhbmQgPSBuZXcgZ2VvbV8xLlBvaW50KHZlY3Rvci54ICsgTWF0aC5jb3MocmFkaWFucykgKiByYWRpdXMsIHZlY3Rvci55ICsgTWF0aC5zaW4ocmFkaWFucykgKiByYWRpdXMpO1xuICAgICAgICB2YXIgbGFuZFJhZGlhbnMgPSBNYXRoLmF0YW4yKGxhbmQueSAtIGpvaW50c1N0YXJ0W2luZGV4XS55LCBsYW5kLnggLSBqb2ludHNTdGFydFtpbmRleF0ueCk7XG4gICAgICAgIHZhciBkaXN0YW5jZSA9IGdlb21fMS5Qb2ludC5kaXN0YW5jZShsYW5kLCBqb2ludHNTdGFydFtpbmRleF0pO1xuICAgICAgICBqb2ludHNbaW5kZXhdLnggPSBqb2ludHNTdGFydFtpbmRleF0ueCArIE1hdGguY29zKGxhbmRSYWRpYW5zKSAqXG4gICAgICAgICAgICAoZGlzdGFuY2UgKiBwcm9ncmVzcyk7XG4gICAgICAgIGpvaW50c1tpbmRleF0ueSA9IGpvaW50c1N0YXJ0W2luZGV4XS55ICsgTWF0aC5zaW4obGFuZFJhZGlhbnMpICpcbiAgICAgICAgICAgIChkaXN0YW5jZSAqIHByb2dyZXNzKTtcbiAgICB9O1xuICAgIExlZy5wcm90b3R5cGUucmVzdGFydFN0ZXAgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMubW9kZWwuam9pbnRzU3RhcnQgPSB0aGlzLmNsb25lKCk7XG4gICAgfTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTGVnLnByb3RvdHlwZSwgXCJkYXRhXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5tb2RlbC5qb2ludHMubWFwKGZ1bmN0aW9uIChqb2ludCkgeyByZXR1cm4gam9pbnQuZGF0YTsgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIExlZy5wcm90b3R5cGUuY2xvbmUgPSBmdW5jdGlvbiAoam9pbnRzKSB7XG4gICAgICAgIGlmIChqb2ludHMgPT09IHZvaWQgMCkgeyBqb2ludHMgPSB0aGlzLm1vZGVsLmpvaW50czsgfVxuICAgICAgICByZXR1cm4gam9pbnRzLm1hcChmdW5jdGlvbiAoam9pbnQpIHsgcmV0dXJuIGpvaW50LmNsb25lKCk7IH0pO1xuICAgIH07XG4gICAgcmV0dXJuIExlZztcbn0oKSk7XG5leHBvcnRzLkxlZyA9IExlZztcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fYXNzaWduID0gKHRoaXMgJiYgdGhpcy5fX2Fzc2lnbikgfHwgZnVuY3Rpb24gKCkge1xuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbih0KSB7XG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSlcbiAgICAgICAgICAgICAgICB0W3BdID0gc1twXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdDtcbiAgICB9O1xuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBnZW9tXzEgPSByZXF1aXJlKFwiQGFkcmlhbmxhZm9uZC9nZW9tXCIpO1xudmFyIGxlZ18xID0gcmVxdWlyZShcIi4vbGVnXCIpO1xudmFyIFNlZ21lbnQgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gU2VnbWVudChvcHRpb25zKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHRoaXMubW9kZWwgPSB7XG4gICAgICAgICAgICB2ZWN0b3I6IG5ldyBnZW9tXzEuVmVjdG9yKCksXG4gICAgICAgICAgICBsZWdzOiBbXG4gICAgICAgICAgICAgICAgW25ldyBsZWdfMS5MZWcoeyBqb2ludHM6IFtuZXcgZ2VvbV8xLlBvaW50KDIsIC01KSwgbmV3IGdlb21fMS5Qb2ludCgxMiwgLTE0KV0gfSksXG4gICAgICAgICAgICAgICAgICAgIG5ldyBsZWdfMS5MZWcoeyBqb2ludHM6IFtuZXcgZ2VvbV8xLlBvaW50KDAsIC01KSwgbmV3IGdlb21fMS5Qb2ludCgwLCAtMTYpXSB9KSxcbiAgICAgICAgICAgICAgICAgICAgbmV3IGxlZ18xLkxlZyh7IGpvaW50czogW25ldyBnZW9tXzEuUG9pbnQoLTQsIC01KSwgbmV3IGdlb21fMS5Qb2ludCgtOCwgLTEyKV0gfSldLFxuICAgICAgICAgICAgICAgIFtuZXcgbGVnXzEuTGVnKHsgam9pbnRzOiBbbmV3IGdlb21fMS5Qb2ludCgyLCA1KSwgbmV3IGdlb21fMS5Qb2ludCgxMiwgMTQpXSB9KSxcbiAgICAgICAgICAgICAgICAgICAgbmV3IGxlZ18xLkxlZyh7IGpvaW50czogW25ldyBnZW9tXzEuUG9pbnQoMCwgNSksIG5ldyBnZW9tXzEuUG9pbnQoMCwgMTYpXSB9KSxcbiAgICAgICAgICAgICAgICAgICAgbmV3IGxlZ18xLkxlZyh7IGpvaW50czogW25ldyBnZW9tXzEuUG9pbnQoLTQsIDUpLCBuZXcgZ2VvbV8xLlBvaW50KC04LCAxMildIH0pXSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBtYXhSb3RhdGlvbjogTWF0aC5QSSAqIDAuNSxcbiAgICAgICAgICAgIG1heERpc3RhbmNlOiAxMCxcbiAgICAgICAgICAgIHRhcmdldDogbmV3IGdlb21fMS5Qb2ludCgpLFxuICAgICAgICAgICAgc3RlcFRhcmdldDogbmV3IGdlb21fMS5Qb2ludCgpLFxuICAgICAgICAgICAgdmVjdG9yU3RhcnQ6IG5ldyBnZW9tXzEuVmVjdG9yKCksXG4gICAgICAgICAgICBzdGVwOiAwLFxuICAgICAgICAgICAgb25UYXJnZXRSZWFjaGVkOiBudWxsLFxuICAgICAgICAgICAgd2lsbEhpdE9ic3RhY2xlOiBudWxsLFxuICAgICAgICB9O1xuICAgICAgICB0aGlzLm1vZGVsID0gX19hc3NpZ24oe30sIHRoaXMubW9kZWwsIG9wdGlvbnMpO1xuICAgICAgICB0aGlzLm1vZGVsLnZlY3RvclN0YXJ0ID0gdGhpcy5tb2RlbC52ZWN0b3IuY2xvbmUoKTtcbiAgICAgICAgdGhpcy5tb2RlbC5sZWdzLmZvckVhY2goZnVuY3Rpb24gKHNpZGUpIHtcbiAgICAgICAgICAgIHNpZGUuZm9yRWFjaChmdW5jdGlvbiAobGVnKSB7XG4gICAgICAgICAgICAgICAgbGVnLm9mZnNldEFsbChfdGhpcy5tb2RlbC52ZWN0b3IpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnN0ZXAoKTtcbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFNlZ21lbnQucHJvdG90eXBlLCBcInRhcmdldFwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMubW9kZWwudGFyZ2V0LmNsb25lKCk7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLm1vZGVsLnRhcmdldCA9IHZhbHVlO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBTZWdtZW50LnByb3RvdHlwZS50aWNrID0gZnVuY3Rpb24gKHByb2dyZXNzKSB7XG4gICAgICAgIGlmIChwcm9ncmVzcyA9PT0gdm9pZCAwKSB7IHByb2dyZXNzID0gMDsgfVxuICAgICAgICB2YXIgX2EgPSB0aGlzLm1vZGVsLCB0YXJnZXQgPSBfYS50YXJnZXQsIHZlY3RvclN0YXJ0ID0gX2EudmVjdG9yU3RhcnQsIG1heERpc3RhbmNlID0gX2EubWF4RGlzdGFuY2U7XG4gICAgICAgIHZhciBkaXN0YW5jZSA9IE1hdGgubWluKG1heERpc3RhbmNlLCBnZW9tXzEuUG9pbnQuZGlzdGFuY2UodGFyZ2V0LCB2ZWN0b3JTdGFydC5wb2ludCkpO1xuICAgICAgICB0aGlzLm1vdmVTZWdtZW50KHByb2dyZXNzLCBkaXN0YW5jZSk7XG4gICAgICAgIHRoaXMubW92ZUxlZ3MocHJvZ3Jlc3MsIGRpc3RhbmNlKTtcbiAgICB9O1xuICAgIFNlZ21lbnQucHJvdG90eXBlLnN0ZXAgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMucmVzdGFydFN0ZXAoKTtcbiAgICAgICAgdGhpcy5tb2RlbC5zdGVwID0gKHRoaXMubW9kZWwuc3RlcCArIDEpICUgdGhpcy5tb2RlbC5sZWdzLmxlbmd0aDtcbiAgICB9O1xuICAgIFNlZ21lbnQucHJvdG90eXBlLnJlc3RhcnRTdGVwID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX2EgPSB0aGlzLm1vZGVsLCB0aHJlc2hvbGQgPSBfYS5tYXhEaXN0YW5jZSwgdmVjdG9yID0gX2EudmVjdG9yLCB0YXJnZXQgPSBfYS50YXJnZXQsIHdpbGxIaXRPYnN0YWNsZSA9IF9hLndpbGxIaXRPYnN0YWNsZTtcbiAgICAgICAgdGhpcy5tb2RlbC52ZWN0b3JTdGFydCA9IHZlY3Rvci5jbG9uZSgpO1xuICAgICAgICB0aGlzLm1vZGVsLnN0ZXBUYXJnZXQgPSB0YXJnZXQuY2xvbmUoKTtcbiAgICAgICAgaWYgKHdpbGxIaXRPYnN0YWNsZSkge1xuICAgICAgICAgICAgdGhpcy5tb2RlbC5zdGVwVGFyZ2V0ID0gd2lsbEhpdE9ic3RhY2xlKHZlY3Rvci5wb2ludCwgdGhpcy5tb2RlbC5zdGVwVGFyZ2V0LCB0YXJnZXQsIHRocmVzaG9sZCk7XG4gICAgICAgICAgICAvLyBjb25zdCB7IHN0ZXBUYXJnZXQsIHZlY3RvclN0YXJ0IH0gPSB0aGlzLm1vZGVsO1xuICAgICAgICAgICAgLy8gY29uc3QgaGl0ID0gd2lsbEhpdE9ic3RhY2xlKHZlY3Rvci5wb2ludCwgdGFyZ2V0LCB0aHJlc2hvbGQpO1xuICAgICAgICAgICAgLy8gaWYgKGhpdCkge1xuICAgICAgICAgICAgLy8gICBpZiAoaGl0LmZyb20gPT09ICdsZWZ0Jykge1xuICAgICAgICAgICAgLy8gICAgIHN0ZXBUYXJnZXQueCA9IGhpdC5vYnN0YWNsZS54IC0gdGhyZXNob2xkICogMjtcbiAgICAgICAgICAgIC8vICAgfSBlbHNlIGlmIChoaXQuZnJvbSA9PT0gJ3JpZ2h0Jykge1xuICAgICAgICAgICAgLy8gICAgIHN0ZXBUYXJnZXQueCA9IGhpdC5vYnN0YWNsZS54ICsgaGl0Lm9ic3RhY2xlLndpZHRoICsgdGhyZXNob2xkICogMjtcbiAgICAgICAgICAgIC8vICAgfSBlbHNlIGlmIChoaXQuZnJvbSA9PT0gJ3RvcCcpIHtcbiAgICAgICAgICAgIC8vICAgICBzdGVwVGFyZ2V0LnkgPSBoaXQub2JzdGFjbGUueSAtIHRocmVzaG9sZCAqIDI7XG4gICAgICAgICAgICAvLyAgIH0gZWxzZSBpZiAoaGl0LmZyb20gPT09ICdib3R0b20nKSB7XG4gICAgICAgICAgICAvLyAgICAgc3RlcFRhcmdldC55ID0gaGl0Lm9ic3RhY2xlLnkgKyBoaXQub2JzdGFjbGUuaGVpZ2h0ICsgdGhyZXNob2xkICogMjtcbiAgICAgICAgICAgIC8vICAgfVxuICAgICAgICAgICAgLy8gICBpZiAoaGl0LmZyb20gPT09ICdsZWZ0JyB8fCBoaXQuZnJvbSA9PT0gJ3JpZ2h0Jykge1xuICAgICAgICAgICAgLy8gICAgIGNvbnN0IHRvcElzQ2xvc2VzdCA9IHN0ZXBUYXJnZXQueSAtIGhpdC5vYnN0YWNsZS55IDxcbiAgICAgICAgICAgIC8vICAgICAgIGhpdC5vYnN0YWNsZS55ICsgaGl0Lm9ic3RhY2xlLmhlaWdodCAtIHN0ZXBUYXJnZXQueVxuICAgICAgICAgICAgLy8gICAgIHN0ZXBUYXJnZXQueSA9IHRvcElzQ2xvc2VzdCA/IChoaXQub2JzdGFjbGUueSAtIHRocmVzaG9sZCkgOlxuICAgICAgICAgICAgLy8gICAgICAgKGhpdC5vYnN0YWNsZS55ICsgaGl0Lm9ic3RhY2xlLmhlaWdodCArIHRocmVzaG9sZCk7XG4gICAgICAgICAgICAvLyAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyAgICAgY29uc3QgbGVmdElzQ2xvc2VzdCA9IHN0ZXBUYXJnZXQueCAtIGhpdC5vYnN0YWNsZS54IDxcbiAgICAgICAgICAgIC8vICAgICAgIGhpdC5vYnN0YWNsZS54ICsgaGl0Lm9ic3RhY2xlLndpZHRoIC0gc3RlcFRhcmdldC54O1xuICAgICAgICAgICAgLy8gICAgIHN0ZXBUYXJnZXQueCA9IGxlZnRJc0Nsb3Nlc3QgPyAoaGl0Lm9ic3RhY2xlLnggLSB0aHJlc2hvbGQpIDpcbiAgICAgICAgICAgIC8vICAgICAgIChoaXQub2JzdGFjbGUueCArIGhpdC5vYnN0YWNsZS53aWR0aCArIHRocmVzaG9sZCk7XG4gICAgICAgICAgICAvLyAgIH1cbiAgICAgICAgICAgIC8vIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLm1vZGVsLmxlZ3MuZm9yRWFjaChmdW5jdGlvbiAoc2lkZSkge1xuICAgICAgICAgICAgc2lkZS5mb3JFYWNoKGZ1bmN0aW9uIChsZWcpIHtcbiAgICAgICAgICAgICAgICBsZWcucmVzdGFydFN0ZXAoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIFNlZ21lbnQucHJvdG90eXBlLm1vdmVTZWdtZW50ID0gZnVuY3Rpb24gKHByb2dyZXNzLCBkaXN0YW5jZSkge1xuICAgICAgICB2YXIgX2EgPSB0aGlzLm1vZGVsLCBzdGVwVGFyZ2V0ID0gX2Euc3RlcFRhcmdldCwgdGFyZ2V0ID0gX2EudGFyZ2V0LCB2ZWN0b3IgPSBfYS52ZWN0b3IsIHZlY3RvclN0YXJ0ID0gX2EudmVjdG9yU3RhcnQsIG1heERpc3RhbmNlID0gX2EubWF4RGlzdGFuY2UsIG1heFJvdGF0aW9uID0gX2EubWF4Um90YXRpb24sIG9uVGFyZ2V0UmVhY2hlZCA9IF9hLm9uVGFyZ2V0UmVhY2hlZDtcbiAgICAgICAgdmFyIHRhcmdldFJhZGlhbnMgPSBNYXRoLmF0YW4yKHN0ZXBUYXJnZXQueSAtIHZlY3RvclN0YXJ0LnksIHN0ZXBUYXJnZXQueCAtIHZlY3RvclN0YXJ0LngpO1xuICAgICAgICB2YXIgZGVsdGFSYWRpYW5zID0gTWF0aC5tYXgoLW1heFJvdGF0aW9uLCBNYXRoLm1pbihtYXhSb3RhdGlvbiwgZ2VvbV8xLkFuZ2xlLmRlbHRhKHZlY3Rvci5yYWRpYW5zLCB0YXJnZXRSYWRpYW5zKSkpO1xuICAgICAgICB2ZWN0b3IucmFkaWFucyA9IGdlb21fMS5BbmdsZS5ub3JtYWxpemUodmVjdG9yU3RhcnQucmFkaWFucykgKyBkZWx0YVJhZGlhbnMgKiBwcm9ncmVzcztcbiAgICAgICAgdmFyIHJhZGlhbnNEZWx0YSA9IE1hdGguYWJzKGdlb21fMS5BbmdsZS5ub3JtYWxpemUodGFyZ2V0UmFkaWFucykgLSB2ZWN0b3IucmFkaWFucyk7XG4gICAgICAgIHZhciByYWRpYW5zRGFtcGVyID0gMSAtIHJhZGlhbnNEZWx0YSAvIChNYXRoLlBJICogMik7XG4gICAgICAgIHZhciBtb3ZlRGlzdGFuY2UgPSBkaXN0YW5jZSAqIHByb2dyZXNzICogcmFkaWFuc0RhbXBlcjtcbiAgICAgICAgdmVjdG9yLnggPSB2ZWN0b3JTdGFydC54ICsgTWF0aC5jb3ModGFyZ2V0UmFkaWFucykgKiBtb3ZlRGlzdGFuY2U7XG4gICAgICAgIHZlY3Rvci55ID0gdmVjdG9yU3RhcnQueSArIE1hdGguc2luKHRhcmdldFJhZGlhbnMpICogbW92ZURpc3RhbmNlO1xuICAgICAgICBpZiAob25UYXJnZXRSZWFjaGVkKSB7XG4gICAgICAgICAgICBpZiAoZ2VvbV8xLlBvaW50LmRpc3RhbmNlKHRhcmdldCwgdmVjdG9yLnBvaW50KSA8PSBtYXhEaXN0YW5jZSkge1xuICAgICAgICAgICAgICAgIG9uVGFyZ2V0UmVhY2hlZCh0YXJnZXQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICBTZWdtZW50LnByb3RvdHlwZS5tb3ZlTGVncyA9IGZ1bmN0aW9uIChwcm9ncmVzcywgZGlzdGFuY2UpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdmFyIF9hID0gdGhpcy5tb2RlbCwgbGVncyA9IF9hLmxlZ3MsIHZlY3RvciA9IF9hLnZlY3RvciwgdmVjdG9yU3RhcnQgPSBfYS52ZWN0b3JTdGFydDtcbiAgICAgICAgbGVncy5mb3JFYWNoKGZ1bmN0aW9uIChzaWRlLCBzaWRlSW5kZXgpIHtcbiAgICAgICAgICAgIHNpZGUuZm9yRWFjaChmdW5jdGlvbiAobGVnKSB7XG4gICAgICAgICAgICAgICAgbGVnLm9mZnNldCh2ZWN0b3IpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAoc2lkZUluZGV4ID09PSBfdGhpcy5tb2RlbC5zdGVwKSB7XG4gICAgICAgICAgICAgICAgdmFyIHRhcmdldFZlY3Rvcl8xID0gbmV3IGdlb21fMS5WZWN0b3IodmVjdG9yU3RhcnQueCArIE1hdGguY29zKHZlY3Rvci5yYWRpYW5zKSAqIGRpc3RhbmNlLCB2ZWN0b3JTdGFydC55ICsgTWF0aC5zaW4odmVjdG9yLnJhZGlhbnMpICogZGlzdGFuY2UsIHZlY3Rvci5yYWRpYW5zKTtcbiAgICAgICAgICAgICAgICBzaWRlLmZvckVhY2goZnVuY3Rpb24gKGxlZykge1xuICAgICAgICAgICAgICAgICAgICBsZWcudGljayh0YXJnZXRWZWN0b3JfMSwgcHJvZ3Jlc3MpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9O1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShTZWdtZW50LnByb3RvdHlwZSwgXCJ4XCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5tb2RlbC52ZWN0b3IueDtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMubW9kZWwudmVjdG9yLnggPSB2YWx1ZTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFNlZ21lbnQucHJvdG90eXBlLCBcInlcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm1vZGVsLnZlY3Rvci55O1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5tb2RlbC52ZWN0b3IueSA9IHZhbHVlO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoU2VnbWVudC5wcm90b3R5cGUsIFwicmFkaWFuc1wiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMubW9kZWwudmVjdG9yLnJhZGlhbnM7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLm1vZGVsLnZlY3Rvci5yYWRpYW5zID0gdmFsdWU7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShTZWdtZW50LnByb3RvdHlwZSwgXCJkYXRhXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gX19hc3NpZ24oe30sIHRoaXMubW9kZWwudmVjdG9yLmRhdGEsIHsgbGVnczogdGhpcy5tb2RlbC5sZWdzLm1hcChmdW5jdGlvbiAoc2lkZSkgeyByZXR1cm4gKHNpZGUubWFwKGZ1bmN0aW9uIChsZWcpIHsgcmV0dXJuIGxlZy5kYXRhOyB9KSk7IH0pIH0pO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICByZXR1cm4gU2VnbWVudDtcbn0oKSk7XG5leHBvcnRzLlNlZ21lbnQgPSBTZWdtZW50O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==