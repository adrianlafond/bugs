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
        else {
            this.model.stepTarget = target.clone();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9CdWcvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL0J1Zy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9CdWcvLi9ub2RlX21vZHVsZXMvQGFkcmlhbmxhZm9uZC9nZW9tL2Rpc3QvZ2VvbS5qcyIsIndlYnBhY2s6Ly9CdWcvLi9zcmMvYnVnL2J1Zy50cyIsIndlYnBhY2s6Ly9CdWcvLi9zcmMvYnVnL2luZGV4LnRzIiwid2VicGFjazovL0J1Zy8uL3NyYy9idWcvbGVnLnRzIiwid2VicGFjazovL0J1Zy8uL3NyYy9idWcvc2VnbWVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDbEZBLGVBQWUsS0FBaUQs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QUs7QUFDTDtBQUNBLGtDQUFrQyxjQUFjO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQiwwQkFBMEI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSw4QkFBOEIsMkJBQTJCLDRDQUE0QyxrQ0FBa0MsaUJBQWlCLEVBQUUsR0FBRyxFQUFFLEdBQUc7QUFDbEssU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxDQUFDO0FBQ0QiLCJmaWxlIjoiYnVnLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoXCJCdWdcIiwgW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiQnVnXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIkJ1Z1wiXSA9IGZhY3RvcnkoKTtcbn0pKHdpbmRvdywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvYnVnL2luZGV4LnRzXCIpO1xuIiwiIWZ1bmN0aW9uKHQsZSl7XCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHMmJlwib2JqZWN0XCI9PXR5cGVvZiBtb2R1bGU/bW9kdWxlLmV4cG9ydHM9ZSgpOlwiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZD9kZWZpbmUoXCJHZW9tXCIsW10sZSk6XCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHM/ZXhwb3J0cy5HZW9tPWUoKTp0Lkdlb209ZSgpfSh3aW5kb3csZnVuY3Rpb24oKXtyZXR1cm4gZnVuY3Rpb24odCl7dmFyIGU9e307ZnVuY3Rpb24gbihyKXtpZihlW3JdKXJldHVybiBlW3JdLmV4cG9ydHM7dmFyIG89ZVtyXT17aTpyLGw6ITEsZXhwb3J0czp7fX07cmV0dXJuIHRbcl0uY2FsbChvLmV4cG9ydHMsbyxvLmV4cG9ydHMsbiksby5sPSEwLG8uZXhwb3J0c31yZXR1cm4gbi5tPXQsbi5jPWUsbi5kPWZ1bmN0aW9uKHQsZSxyKXtuLm8odCxlKXx8T2JqZWN0LmRlZmluZVByb3BlcnR5KHQsZSx7ZW51bWVyYWJsZTohMCxnZXQ6cn0pfSxuLnI9ZnVuY3Rpb24odCl7XCJ1bmRlZmluZWRcIiE9dHlwZW9mIFN5bWJvbCYmU3ltYm9sLnRvU3RyaW5nVGFnJiZPYmplY3QuZGVmaW5lUHJvcGVydHkodCxTeW1ib2wudG9TdHJpbmdUYWcse3ZhbHVlOlwiTW9kdWxlXCJ9KSxPYmplY3QuZGVmaW5lUHJvcGVydHkodCxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KX0sbi50PWZ1bmN0aW9uKHQsZSl7aWYoMSZlJiYodD1uKHQpKSw4JmUpcmV0dXJuIHQ7aWYoNCZlJiZcIm9iamVjdFwiPT10eXBlb2YgdCYmdCYmdC5fX2VzTW9kdWxlKXJldHVybiB0O3ZhciByPU9iamVjdC5jcmVhdGUobnVsbCk7aWYobi5yKHIpLE9iamVjdC5kZWZpbmVQcm9wZXJ0eShyLFwiZGVmYXVsdFwiLHtlbnVtZXJhYmxlOiEwLHZhbHVlOnR9KSwyJmUmJlwic3RyaW5nXCIhPXR5cGVvZiB0KWZvcih2YXIgbyBpbiB0KW4uZChyLG8sZnVuY3Rpb24oZSl7cmV0dXJuIHRbZV19LmJpbmQobnVsbCxvKSk7cmV0dXJuIHJ9LG4ubj1mdW5jdGlvbih0KXt2YXIgZT10JiZ0Ll9fZXNNb2R1bGU/ZnVuY3Rpb24oKXtyZXR1cm4gdC5kZWZhdWx0fTpmdW5jdGlvbigpe3JldHVybiB0fTtyZXR1cm4gbi5kKGUsXCJhXCIsZSksZX0sbi5vPWZ1bmN0aW9uKHQsZSl7cmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCh0LGUpfSxuLnA9XCJcIixuKG4ucz0xKX0oW2Z1bmN0aW9uKHQsZSxuKXtcInVzZSBzdHJpY3RcIjtPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KTt2YXIgcj1mdW5jdGlvbigpe2Z1bmN0aW9uIHQodCxlKXt2b2lkIDA9PT10JiYodD0wKSx2b2lkIDA9PT1lJiYoZT0wKSx0aGlzLng9dCx0aGlzLnk9ZX1yZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KHQucHJvdG90eXBlLFwiZGF0YVwiLHtnZXQ6ZnVuY3Rpb24oKXtyZXR1cm57eDp0aGlzLngseTp0aGlzLnl9fSxlbnVtZXJhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMH0pLHQucHJvdG90eXBlLmNsb25lPWZ1bmN0aW9uKCl7cmV0dXJuIG5ldyB0KHRoaXMueCx0aGlzLnkpfSx0LnByb3RvdHlwZS5hZGQ9ZnVuY3Rpb24odCl7cmV0dXJuIHRoaXMueCs9dC54LHRoaXMueSs9dC55LHRoaXN9LHQucHJvdG90eXBlLnN1YnRyYWN0PWZ1bmN0aW9uKHQpe3JldHVybiB0aGlzLngtPXQueCx0aGlzLnktPXQueSx0aGlzfSx0LnByb3RvdHlwZS50b1N0cmluZz1mdW5jdGlvbigpe3JldHVybiBKU09OLnN0cmluZ2lmeSh0aGlzLmRhdGEpfSx0LmRpc3RhbmNlPWZ1bmN0aW9uKHQsZSl7cmV0dXJuIE1hdGguc3FydCgodC54LWUueCkqKHQueC1lLngpKyh0LnktZS55KSoodC55LWUueSkpfSx0LnJhZGlhbnM9ZnVuY3Rpb24odCxlKXtyZXR1cm4gTWF0aC5hdGFuMihlLnktdC55LGUueC10LngpfSx0fSgpO2UuZGVmYXVsdD1yfSxmdW5jdGlvbih0LGUsbil7XCJ1c2Ugc3RyaWN0XCI7T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSk7dmFyIHI9bigyKTtlLkFuZ2xlPXIuZGVmYXVsdDt2YXIgbz1uKDApO2UuUG9pbnQ9by5kZWZhdWx0O3ZhciBpPW4oMyk7ZS5WZWN0b3I9aS5kZWZhdWx0fSxmdW5jdGlvbih0LGUsbil7XCJ1c2Ugc3RyaWN0XCI7T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSk7dmFyIHI9ZnVuY3Rpb24oKXtmdW5jdGlvbiB0KCl7fXJldHVybiB0LnRvUmFkaWFucz1mdW5jdGlvbih0KXtyZXR1cm4gdCpNYXRoLlBJLzE4MH0sdC50b0RlZ3JlZXM9ZnVuY3Rpb24odCl7cmV0dXJuIDE4MCp0L01hdGguUEl9LHQuaW50ZXJwb2xhdGU9ZnVuY3Rpb24oZSxuLHIpe3JldHVybiB0Lm5vcm1hbGl6ZShlK3QuZGVsdGEoZSxuKSpyKX0sdC5kZWx0YT1mdW5jdGlvbihlLG4pe3ZhciByPXQubm9ybWFsaXplKGUpLG89dC5ub3JtYWxpemUobiksaT1vLXI7cmV0dXJuIE1hdGguYWJzKGkpPk1hdGguUEkmJihpPW8tMipNYXRoLlBJLXIpLGl9LHQubm9ybWFsaXplPWZ1bmN0aW9uKHQpe3ZhciBlPXQlKDIqTWF0aC5QSSk7cmV0dXJuIGU8MCYmKGUrPTIqTWF0aC5QSSksZX0sdH0oKTtlLmRlZmF1bHQ9cn0sZnVuY3Rpb24odCxlLG4pe1widXNlIHN0cmljdFwiO09iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pO3ZhciByPW4oMCksbz1mdW5jdGlvbigpe2Z1bmN0aW9uIHQodCxlLG4pe3ZvaWQgMD09PXQmJih0PTApLHZvaWQgMD09PWUmJihlPTApLHZvaWQgMD09PW4mJihuPTApLHRoaXMubW9kZWw9e30sdCBpbnN0YW5jZW9mIHIuZGVmYXVsdD8odGhpcy5tb2RlbC5wb2ludD10LmNsb25lKCksdGhpcy5tb2RlbC5yYWRpYW5zPWUpOih0aGlzLm1vZGVsLnBvaW50PW5ldyByLmRlZmF1bHQodCxlKSx0aGlzLm1vZGVsLnJhZGlhbnM9bil9cmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LnByb3RvdHlwZSxcInBvaW50XCIse2dldDpmdW5jdGlvbigpe3JldHVybiB0aGlzLm1vZGVsLnBvaW50LmNsb25lKCl9LGVudW1lcmFibGU6ITAsY29uZmlndXJhYmxlOiEwfSksT2JqZWN0LmRlZmluZVByb3BlcnR5KHQucHJvdG90eXBlLFwieFwiLHtnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5tb2RlbC5wb2ludC54fSxzZXQ6ZnVuY3Rpb24odCl7dGhpcy5tb2RlbC5wb2ludC54PXR9LGVudW1lcmFibGU6ITAsY29uZmlndXJhYmxlOiEwfSksT2JqZWN0LmRlZmluZVByb3BlcnR5KHQucHJvdG90eXBlLFwieVwiLHtnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5tb2RlbC5wb2ludC55fSxzZXQ6ZnVuY3Rpb24odCl7dGhpcy5tb2RlbC5wb2ludC55PXR9LGVudW1lcmFibGU6ITAsY29uZmlndXJhYmxlOiEwfSksT2JqZWN0LmRlZmluZVByb3BlcnR5KHQucHJvdG90eXBlLFwicmFkaWFuc1wiLHtnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5tb2RlbC5yYWRpYW5zfSxzZXQ6ZnVuY3Rpb24odCl7dGhpcy5tb2RlbC5yYWRpYW5zPXR9LGVudW1lcmFibGU6ITAsY29uZmlndXJhYmxlOiEwfSksT2JqZWN0LmRlZmluZVByb3BlcnR5KHQucHJvdG90eXBlLFwiZGF0YVwiLHtnZXQ6ZnVuY3Rpb24oKXtyZXR1cm57eDp0aGlzLngseTp0aGlzLnkscmFkaWFuczp0aGlzLnJhZGlhbnN9fSxlbnVtZXJhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMH0pLHQucHJvdG90eXBlLmNsb25lPWZ1bmN0aW9uKCl7cmV0dXJuIG5ldyB0KHRoaXMucG9pbnQsdGhpcy5yYWRpYW5zKX0sdC5wcm90b3R5cGUudG9TdHJpbmc9ZnVuY3Rpb24oKXtyZXR1cm4gSlNPTi5zdHJpbmdpZnkodGhpcy5kYXRhKX0sdH0oKTtlLmRlZmF1bHQ9b31dKX0pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Z2VvbS5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBnZW9tXzEgPSByZXF1aXJlKFwiQGFkcmlhbmxhZm9uZC9nZW9tXCIpO1xudmFyIHNlZ21lbnRfMSA9IHJlcXVpcmUoXCIuL3NlZ21lbnRcIik7XG52YXIgQnVnID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIEJ1ZyhvcHRpb25zKSB7XG4gICAgICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHt9OyB9XG4gICAgICAgIHZhciBfYSA9IG9wdGlvbnMueCwgeCA9IF9hID09PSB2b2lkIDAgPyAwIDogX2EsIF9iID0gb3B0aW9ucy55LCB5ID0gX2IgPT09IHZvaWQgMCA/IDAgOiBfYiwgX2MgPSBvcHRpb25zLnJhZGlhbnMsIHJhZGlhbnMgPSBfYyA9PT0gdm9pZCAwID8gMCA6IF9jO1xuICAgICAgICB2YXIgX2QgPSBvcHRpb25zLnRhcmdldCB8fCB7fSwgX2UgPSBfZC54LCB0YXJnZXRYID0gX2UgPT09IHZvaWQgMCA/IDAgOiBfZSwgX2YgPSBfZC55LCB0YXJnZXRZID0gX2YgPT09IHZvaWQgMCA/IDAgOiBfZjtcbiAgICAgICAgdGhpcy5tb2RlbCA9IHtcbiAgICAgICAgICAgIHNlZ21lbnRzOiBbbmV3IHNlZ21lbnRfMS5TZWdtZW50KHtcbiAgICAgICAgICAgICAgICAgICAgdmVjdG9yOiBuZXcgZ2VvbV8xLlZlY3Rvcih4LCB5LCByYWRpYW5zKSxcbiAgICAgICAgICAgICAgICAgICAgb25UYXJnZXRSZWFjaGVkOiB0aGlzLm9uVGFyZ2V0UmVhY2hlZC5iaW5kKHRoaXMpLFxuICAgICAgICAgICAgICAgICAgICB3aWxsSGl0T2JzdGFjbGU6IG9wdGlvbnMud2lsbEhpdE9ic3RhY2xlLFxuICAgICAgICAgICAgICAgIH0pXSxcbiAgICAgICAgICAgIHRhcmdldDogbmV3IGdlb21fMS5Qb2ludCh0YXJnZXRYLCB0YXJnZXRZKSxcbiAgICAgICAgICAgIHByb2dyZXNzOiAwLFxuICAgICAgICAgICAgb25UYXJnZXRSZWFjaGVkOiBvcHRpb25zLm9uVGFyZ2V0UmVhY2hlZCB8fCAoZnVuY3Rpb24gKCkgeyB9KSxcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy50YXJnZXQgPSB0aGlzLm1vZGVsLnRhcmdldDtcbiAgICB9XG4gICAgQnVnLnByb3RvdHlwZS50aWNrID0gZnVuY3Rpb24gKGRlbHRhKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIGlmIChkZWx0YSA9PT0gdm9pZCAwKSB7IGRlbHRhID0gMTsgfVxuICAgICAgICAvLyBUT0RPOiBJbmNvcnBvcmF0ZSBkZWx0YSBhcyBhbiBvcHRpb24/IE1ha2VzIGZvciB1bnNtb290aCBhbmltYXRpb24gZXZlblxuICAgICAgICAvLyBpZiBpbmNvcnBvcmF0aW5nIGl0IGlzIG1vcmUgXCJhY2N1cmF0ZVwiLlxuICAgICAgICB0aGlzLm1vZGVsLnByb2dyZXNzID0gTWF0aC5taW4oMSwgdGhpcy5tb2RlbC5wcm9ncmVzcyArIDAuMSk7IC8vICogZGVsdGFcbiAgICAgICAgdmFyIGlzU3RlcENvbXBsZXRlID0gdGhpcy5tb2RlbC5wcm9ncmVzcyA+PSAxO1xuICAgICAgICB0aGlzLm1vZGVsLnNlZ21lbnRzLmZvckVhY2goZnVuY3Rpb24gKHNlZ21lbnQpIHtcbiAgICAgICAgICAgIHNlZ21lbnQudGljayhfdGhpcy5tb2RlbC5wcm9ncmVzcyk7XG4gICAgICAgICAgICBpZiAoaXNTdGVwQ29tcGxldGUpIHtcbiAgICAgICAgICAgICAgICBzZWdtZW50LnN0ZXAoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChpc1N0ZXBDb21wbGV0ZSkge1xuICAgICAgICAgICAgdGhpcy5tb2RlbC5wcm9ncmVzcyA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQnVnLnByb3RvdHlwZSwgXCJ0YXJnZXRcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm1vZGVsLnRhcmdldC5kYXRhO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5tb2RlbC50YXJnZXQueCA9IHZhbHVlLng7XG4gICAgICAgICAgICB0aGlzLm1vZGVsLnRhcmdldC55ID0gdmFsdWUueTtcbiAgICAgICAgICAgIHRoaXMubW9kZWwuc2VnbWVudHNbMF0udGFyZ2V0ID0gdGhpcy5tb2RlbC50YXJnZXQ7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShCdWcucHJvdG90eXBlLCBcInhcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm1vZGVsLnNlZ21lbnRzWzBdLng7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLm1vZGVsLnNlZ21lbnRzWzBdLnggPSB2YWx1ZTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEJ1Zy5wcm90b3R5cGUsIFwieVwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMubW9kZWwuc2VnbWVudHNbMF0ueTtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMubW9kZWwuc2VnbWVudHNbMF0ueSA9IHZhbHVlO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQnVnLnByb3RvdHlwZSwgXCJyYWRpYW5zXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5tb2RlbC5zZWdtZW50c1swXS5yYWRpYW5zO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5tb2RlbC5zZWdtZW50c1swXS5yYWRpYW5zID0gdmFsdWU7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShCdWcucHJvdG90eXBlLCBcInNlZ21lbnRzXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5tb2RlbC5zZWdtZW50cy5tYXAoZnVuY3Rpb24gKHNlZ21lbnQpIHsgcmV0dXJuIHNlZ21lbnQuZGF0YTsgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIEJ1Zy5wcm90b3R5cGUub25UYXJnZXRSZWFjaGVkID0gZnVuY3Rpb24gKHRhcmdldCkge1xuICAgICAgICB0aGlzLm1vZGVsLm9uVGFyZ2V0UmVhY2hlZCh0YXJnZXQpO1xuICAgIH07XG4gICAgcmV0dXJuIEJ1Zztcbn0oKSk7XG5leHBvcnRzLkJ1ZyA9IEJ1ZztcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIGJ1Z18xID0gcmVxdWlyZShcIi4vYnVnXCIpO1xuZXhwb3J0cy5CdWcgPSBidWdfMS5CdWc7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2Fzc2lnbiA9ICh0aGlzICYmIHRoaXMuX19hc3NpZ24pIHx8IGZ1bmN0aW9uICgpIHtcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24odCkge1xuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpXG4gICAgICAgICAgICAgICAgdFtwXSA9IHNbcF07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHQ7XG4gICAgfTtcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgZ2VvbV8xID0gcmVxdWlyZShcIkBhZHJpYW5sYWZvbmQvZ2VvbVwiKTtcbnZhciBMZWcgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gTGVnKG9wdGlvbnMpIHtcbiAgICAgICAgdGhpcy5tb2RlbCA9IF9fYXNzaWduKHt9LCBvcHRpb25zLCB7IG1hcDogdGhpcy5jbG9uZShvcHRpb25zLmpvaW50cykubWFwKGZ1bmN0aW9uIChwb2ludCkgeyByZXR1cm4gbmV3IGdlb21fMS5WZWN0b3IocG9pbnQueCwgcG9pbnQueSwgTWF0aC5hdGFuMihwb2ludC55LCBwb2ludC54KSk7IH0pLCBqb2ludHNTdGFydDogdGhpcy5jbG9uZShvcHRpb25zLmpvaW50cykgfSk7XG4gICAgfVxuICAgIExlZy5wcm90b3R5cGUub2Zmc2V0ID0gZnVuY3Rpb24gKHZlY3RvciwgaW5kZXgpIHtcbiAgICAgICAgaWYgKGluZGV4ID09PSB2b2lkIDApIHsgaW5kZXggPSAwOyB9XG4gICAgICAgIHZhciBfYSA9IHRoaXMubW9kZWwsIGpvaW50cyA9IF9hLmpvaW50cywgbWFwID0gX2EubWFwO1xuICAgICAgICB2YXIgam9pbnQgPSBqb2ludHNbaW5kZXhdO1xuICAgICAgICB2YXIgbWFwSm9pbnQgPSBtYXBbaW5kZXhdO1xuICAgICAgICB2YXIgZGlzdGFuY2UgPSBnZW9tXzEuUG9pbnQuZGlzdGFuY2UobWFwSm9pbnQucG9pbnQsIG5ldyBnZW9tXzEuUG9pbnQoMCwgMCkpO1xuICAgICAgICB2YXIgcmFkaWFucyA9IG1hcEpvaW50LnJhZGlhbnMgKyB2ZWN0b3IucmFkaWFucztcbiAgICAgICAgam9pbnQueCA9IHZlY3Rvci54ICsgTWF0aC5jb3MocmFkaWFucykgKiBkaXN0YW5jZTtcbiAgICAgICAgam9pbnQueSA9IHZlY3Rvci55ICsgTWF0aC5zaW4ocmFkaWFucykgKiBkaXN0YW5jZTtcbiAgICB9O1xuICAgIExlZy5wcm90b3R5cGUub2Zmc2V0QWxsID0gZnVuY3Rpb24gKHZlY3Rvcikge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB0aGlzLm1vZGVsLmpvaW50cy5mb3JFYWNoKGZ1bmN0aW9uIChqb2ludCwgaW5kZXgpIHtcbiAgICAgICAgICAgIF90aGlzLm9mZnNldCh2ZWN0b3IsIGluZGV4KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBMZWcucHJvdG90eXBlLnRpY2sgPSBmdW5jdGlvbiAodmVjdG9yLCBwcm9ncmVzcykge1xuICAgICAgICB2YXIgX2EgPSB0aGlzLm1vZGVsLCBqb2ludHMgPSBfYS5qb2ludHMsIGpvaW50c1N0YXJ0ID0gX2Euam9pbnRzU3RhcnQsIG1hcCA9IF9hLm1hcDtcbiAgICAgICAgdmFyIGluZGV4ID0gam9pbnRzLmxlbmd0aCAtIDE7XG4gICAgICAgIHZhciByYWRpYW5zID0gTWF0aC5hdGFuMihtYXBbaW5kZXhdLnksIG1hcFtpbmRleF0ueCkgKyB2ZWN0b3IucmFkaWFucztcbiAgICAgICAgdmFyIHJhZGl1cyA9IGdlb21fMS5Qb2ludC5kaXN0YW5jZShtYXBbaW5kZXhdLnBvaW50LCBuZXcgZ2VvbV8xLlBvaW50KCkpO1xuICAgICAgICB2YXIgbGFuZCA9IG5ldyBnZW9tXzEuUG9pbnQodmVjdG9yLnggKyBNYXRoLmNvcyhyYWRpYW5zKSAqIHJhZGl1cywgdmVjdG9yLnkgKyBNYXRoLnNpbihyYWRpYW5zKSAqIHJhZGl1cyk7XG4gICAgICAgIHZhciBsYW5kUmFkaWFucyA9IE1hdGguYXRhbjIobGFuZC55IC0gam9pbnRzU3RhcnRbaW5kZXhdLnksIGxhbmQueCAtIGpvaW50c1N0YXJ0W2luZGV4XS54KTtcbiAgICAgICAgdmFyIGRpc3RhbmNlID0gZ2VvbV8xLlBvaW50LmRpc3RhbmNlKGxhbmQsIGpvaW50c1N0YXJ0W2luZGV4XSk7XG4gICAgICAgIGpvaW50c1tpbmRleF0ueCA9IGpvaW50c1N0YXJ0W2luZGV4XS54ICsgTWF0aC5jb3MobGFuZFJhZGlhbnMpICpcbiAgICAgICAgICAgIChkaXN0YW5jZSAqIHByb2dyZXNzKTtcbiAgICAgICAgam9pbnRzW2luZGV4XS55ID0gam9pbnRzU3RhcnRbaW5kZXhdLnkgKyBNYXRoLnNpbihsYW5kUmFkaWFucykgKlxuICAgICAgICAgICAgKGRpc3RhbmNlICogcHJvZ3Jlc3MpO1xuICAgIH07XG4gICAgTGVnLnByb3RvdHlwZS5yZXN0YXJ0U3RlcCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5tb2RlbC5qb2ludHNTdGFydCA9IHRoaXMuY2xvbmUoKTtcbiAgICB9O1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShMZWcucHJvdG90eXBlLCBcImRhdGFcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm1vZGVsLmpvaW50cy5tYXAoZnVuY3Rpb24gKGpvaW50KSB7IHJldHVybiBqb2ludC5kYXRhOyB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgTGVnLnByb3RvdHlwZS5jbG9uZSA9IGZ1bmN0aW9uIChqb2ludHMpIHtcbiAgICAgICAgaWYgKGpvaW50cyA9PT0gdm9pZCAwKSB7IGpvaW50cyA9IHRoaXMubW9kZWwuam9pbnRzOyB9XG4gICAgICAgIHJldHVybiBqb2ludHMubWFwKGZ1bmN0aW9uIChqb2ludCkgeyByZXR1cm4gam9pbnQuY2xvbmUoKTsgfSk7XG4gICAgfTtcbiAgICByZXR1cm4gTGVnO1xufSgpKTtcbmV4cG9ydHMuTGVnID0gTGVnO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19hc3NpZ24gPSAodGhpcyAmJiB0aGlzLl9fYXNzaWduKSB8fCBmdW5jdGlvbiAoKSB7XG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKVxuICAgICAgICAgICAgICAgIHRbcF0gPSBzW3BdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0O1xuICAgIH07XG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIGdlb21fMSA9IHJlcXVpcmUoXCJAYWRyaWFubGFmb25kL2dlb21cIik7XG52YXIgbGVnXzEgPSByZXF1aXJlKFwiLi9sZWdcIik7XG52YXIgU2VnbWVudCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBTZWdtZW50KG9wdGlvbnMpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdGhpcy5tb2RlbCA9IHtcbiAgICAgICAgICAgIHZlY3RvcjogbmV3IGdlb21fMS5WZWN0b3IoKSxcbiAgICAgICAgICAgIGxlZ3M6IFtcbiAgICAgICAgICAgICAgICBbbmV3IGxlZ18xLkxlZyh7IGpvaW50czogW25ldyBnZW9tXzEuUG9pbnQoMiwgLTUpLCBuZXcgZ2VvbV8xLlBvaW50KDEyLCAtMTQpXSB9KSxcbiAgICAgICAgICAgICAgICAgICAgbmV3IGxlZ18xLkxlZyh7IGpvaW50czogW25ldyBnZW9tXzEuUG9pbnQoMCwgLTUpLCBuZXcgZ2VvbV8xLlBvaW50KDAsIC0xNildIH0pLFxuICAgICAgICAgICAgICAgICAgICBuZXcgbGVnXzEuTGVnKHsgam9pbnRzOiBbbmV3IGdlb21fMS5Qb2ludCgtNCwgLTUpLCBuZXcgZ2VvbV8xLlBvaW50KC04LCAtMTIpXSB9KV0sXG4gICAgICAgICAgICAgICAgW25ldyBsZWdfMS5MZWcoeyBqb2ludHM6IFtuZXcgZ2VvbV8xLlBvaW50KDIsIDUpLCBuZXcgZ2VvbV8xLlBvaW50KDEyLCAxNCldIH0pLFxuICAgICAgICAgICAgICAgICAgICBuZXcgbGVnXzEuTGVnKHsgam9pbnRzOiBbbmV3IGdlb21fMS5Qb2ludCgwLCA1KSwgbmV3IGdlb21fMS5Qb2ludCgwLCAxNildIH0pLFxuICAgICAgICAgICAgICAgICAgICBuZXcgbGVnXzEuTGVnKHsgam9pbnRzOiBbbmV3IGdlb21fMS5Qb2ludCgtNCwgNSksIG5ldyBnZW9tXzEuUG9pbnQoLTgsIDEyKV0gfSldLFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIG1heFJvdGF0aW9uOiBNYXRoLlBJICogMC41LFxuICAgICAgICAgICAgbWF4RGlzdGFuY2U6IDEwLFxuICAgICAgICAgICAgdGFyZ2V0OiBuZXcgZ2VvbV8xLlBvaW50KCksXG4gICAgICAgICAgICBzdGVwVGFyZ2V0OiBuZXcgZ2VvbV8xLlBvaW50KCksXG4gICAgICAgICAgICB2ZWN0b3JTdGFydDogbmV3IGdlb21fMS5WZWN0b3IoKSxcbiAgICAgICAgICAgIHN0ZXA6IDAsXG4gICAgICAgICAgICBvblRhcmdldFJlYWNoZWQ6IG51bGwsXG4gICAgICAgICAgICB3aWxsSGl0T2JzdGFjbGU6IG51bGwsXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMubW9kZWwgPSBfX2Fzc2lnbih7fSwgdGhpcy5tb2RlbCwgb3B0aW9ucyk7XG4gICAgICAgIHRoaXMubW9kZWwudmVjdG9yU3RhcnQgPSB0aGlzLm1vZGVsLnZlY3Rvci5jbG9uZSgpO1xuICAgICAgICB0aGlzLm1vZGVsLmxlZ3MuZm9yRWFjaChmdW5jdGlvbiAoc2lkZSkge1xuICAgICAgICAgICAgc2lkZS5mb3JFYWNoKGZ1bmN0aW9uIChsZWcpIHtcbiAgICAgICAgICAgICAgICBsZWcub2Zmc2V0QWxsKF90aGlzLm1vZGVsLnZlY3Rvcik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuc3RlcCgpO1xuICAgIH1cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoU2VnbWVudC5wcm90b3R5cGUsIFwidGFyZ2V0XCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5tb2RlbC50YXJnZXQuY2xvbmUoKTtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMubW9kZWwudGFyZ2V0ID0gdmFsdWU7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIFNlZ21lbnQucHJvdG90eXBlLnRpY2sgPSBmdW5jdGlvbiAocHJvZ3Jlc3MpIHtcbiAgICAgICAgaWYgKHByb2dyZXNzID09PSB2b2lkIDApIHsgcHJvZ3Jlc3MgPSAwOyB9XG4gICAgICAgIHZhciBfYSA9IHRoaXMubW9kZWwsIHRhcmdldCA9IF9hLnRhcmdldCwgdmVjdG9yU3RhcnQgPSBfYS52ZWN0b3JTdGFydCwgbWF4RGlzdGFuY2UgPSBfYS5tYXhEaXN0YW5jZTtcbiAgICAgICAgdmFyIGRpc3RhbmNlID0gTWF0aC5taW4obWF4RGlzdGFuY2UsIGdlb21fMS5Qb2ludC5kaXN0YW5jZSh0YXJnZXQsIHZlY3RvclN0YXJ0LnBvaW50KSk7XG4gICAgICAgIHRoaXMubW92ZVNlZ21lbnQocHJvZ3Jlc3MsIGRpc3RhbmNlKTtcbiAgICAgICAgdGhpcy5tb3ZlTGVncyhwcm9ncmVzcywgZGlzdGFuY2UpO1xuICAgIH07XG4gICAgU2VnbWVudC5wcm90b3R5cGUuc3RlcCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5yZXN0YXJ0U3RlcCgpO1xuICAgICAgICB0aGlzLm1vZGVsLnN0ZXAgPSAodGhpcy5tb2RlbC5zdGVwICsgMSkgJSB0aGlzLm1vZGVsLmxlZ3MubGVuZ3RoO1xuICAgIH07XG4gICAgU2VnbWVudC5wcm90b3R5cGUucmVzdGFydFN0ZXAgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfYSA9IHRoaXMubW9kZWwsIHRocmVzaG9sZCA9IF9hLm1heERpc3RhbmNlLCB2ZWN0b3IgPSBfYS52ZWN0b3IsIHRhcmdldCA9IF9hLnRhcmdldCwgd2lsbEhpdE9ic3RhY2xlID0gX2Eud2lsbEhpdE9ic3RhY2xlO1xuICAgICAgICB0aGlzLm1vZGVsLnZlY3RvclN0YXJ0ID0gdmVjdG9yLmNsb25lKCk7XG4gICAgICAgIHRoaXMubW9kZWwuc3RlcFRhcmdldCA9IHRhcmdldC5jbG9uZSgpO1xuICAgICAgICBpZiAod2lsbEhpdE9ic3RhY2xlKSB7XG4gICAgICAgICAgICB0aGlzLm1vZGVsLnN0ZXBUYXJnZXQgPSB3aWxsSGl0T2JzdGFjbGUodmVjdG9yLnBvaW50LCB0aGlzLm1vZGVsLnN0ZXBUYXJnZXQsIHRhcmdldCwgdGhyZXNob2xkKTtcbiAgICAgICAgICAgIC8vIGNvbnN0IHsgc3RlcFRhcmdldCwgdmVjdG9yU3RhcnQgfSA9IHRoaXMubW9kZWw7XG4gICAgICAgICAgICAvLyBjb25zdCBoaXQgPSB3aWxsSGl0T2JzdGFjbGUodmVjdG9yLnBvaW50LCB0YXJnZXQsIHRocmVzaG9sZCk7XG4gICAgICAgICAgICAvLyBpZiAoaGl0KSB7XG4gICAgICAgICAgICAvLyAgIGlmIChoaXQuZnJvbSA9PT0gJ2xlZnQnKSB7XG4gICAgICAgICAgICAvLyAgICAgc3RlcFRhcmdldC54ID0gaGl0Lm9ic3RhY2xlLnggLSB0aHJlc2hvbGQgKiAyO1xuICAgICAgICAgICAgLy8gICB9IGVsc2UgaWYgKGhpdC5mcm9tID09PSAncmlnaHQnKSB7XG4gICAgICAgICAgICAvLyAgICAgc3RlcFRhcmdldC54ID0gaGl0Lm9ic3RhY2xlLnggKyBoaXQub2JzdGFjbGUud2lkdGggKyB0aHJlc2hvbGQgKiAyO1xuICAgICAgICAgICAgLy8gICB9IGVsc2UgaWYgKGhpdC5mcm9tID09PSAndG9wJykge1xuICAgICAgICAgICAgLy8gICAgIHN0ZXBUYXJnZXQueSA9IGhpdC5vYnN0YWNsZS55IC0gdGhyZXNob2xkICogMjtcbiAgICAgICAgICAgIC8vICAgfSBlbHNlIGlmIChoaXQuZnJvbSA9PT0gJ2JvdHRvbScpIHtcbiAgICAgICAgICAgIC8vICAgICBzdGVwVGFyZ2V0LnkgPSBoaXQub2JzdGFjbGUueSArIGhpdC5vYnN0YWNsZS5oZWlnaHQgKyB0aHJlc2hvbGQgKiAyO1xuICAgICAgICAgICAgLy8gICB9XG4gICAgICAgICAgICAvLyAgIGlmIChoaXQuZnJvbSA9PT0gJ2xlZnQnIHx8IGhpdC5mcm9tID09PSAncmlnaHQnKSB7XG4gICAgICAgICAgICAvLyAgICAgY29uc3QgdG9wSXNDbG9zZXN0ID0gc3RlcFRhcmdldC55IC0gaGl0Lm9ic3RhY2xlLnkgPFxuICAgICAgICAgICAgLy8gICAgICAgaGl0Lm9ic3RhY2xlLnkgKyBoaXQub2JzdGFjbGUuaGVpZ2h0IC0gc3RlcFRhcmdldC55XG4gICAgICAgICAgICAvLyAgICAgc3RlcFRhcmdldC55ID0gdG9wSXNDbG9zZXN0ID8gKGhpdC5vYnN0YWNsZS55IC0gdGhyZXNob2xkKSA6XG4gICAgICAgICAgICAvLyAgICAgICAoaGl0Lm9ic3RhY2xlLnkgKyBoaXQub2JzdGFjbGUuaGVpZ2h0ICsgdGhyZXNob2xkKTtcbiAgICAgICAgICAgIC8vICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vICAgICBjb25zdCBsZWZ0SXNDbG9zZXN0ID0gc3RlcFRhcmdldC54IC0gaGl0Lm9ic3RhY2xlLnggPFxuICAgICAgICAgICAgLy8gICAgICAgaGl0Lm9ic3RhY2xlLnggKyBoaXQub2JzdGFjbGUud2lkdGggLSBzdGVwVGFyZ2V0Lng7XG4gICAgICAgICAgICAvLyAgICAgc3RlcFRhcmdldC54ID0gbGVmdElzQ2xvc2VzdCA/IChoaXQub2JzdGFjbGUueCAtIHRocmVzaG9sZCkgOlxuICAgICAgICAgICAgLy8gICAgICAgKGhpdC5vYnN0YWNsZS54ICsgaGl0Lm9ic3RhY2xlLndpZHRoICsgdGhyZXNob2xkKTtcbiAgICAgICAgICAgIC8vICAgfVxuICAgICAgICAgICAgLy8gfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5tb2RlbC5zdGVwVGFyZ2V0ID0gdGFyZ2V0LmNsb25lKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5tb2RlbC5sZWdzLmZvckVhY2goZnVuY3Rpb24gKHNpZGUpIHtcbiAgICAgICAgICAgIHNpZGUuZm9yRWFjaChmdW5jdGlvbiAobGVnKSB7XG4gICAgICAgICAgICAgICAgbGVnLnJlc3RhcnRTdGVwKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBTZWdtZW50LnByb3RvdHlwZS5tb3ZlU2VnbWVudCA9IGZ1bmN0aW9uIChwcm9ncmVzcywgZGlzdGFuY2UpIHtcbiAgICAgICAgdmFyIF9hID0gdGhpcy5tb2RlbCwgc3RlcFRhcmdldCA9IF9hLnN0ZXBUYXJnZXQsIHRhcmdldCA9IF9hLnRhcmdldCwgdmVjdG9yID0gX2EudmVjdG9yLCB2ZWN0b3JTdGFydCA9IF9hLnZlY3RvclN0YXJ0LCBtYXhEaXN0YW5jZSA9IF9hLm1heERpc3RhbmNlLCBtYXhSb3RhdGlvbiA9IF9hLm1heFJvdGF0aW9uLCBvblRhcmdldFJlYWNoZWQgPSBfYS5vblRhcmdldFJlYWNoZWQ7XG4gICAgICAgIHZhciB0YXJnZXRSYWRpYW5zID0gTWF0aC5hdGFuMihzdGVwVGFyZ2V0LnkgLSB2ZWN0b3JTdGFydC55LCBzdGVwVGFyZ2V0LnggLSB2ZWN0b3JTdGFydC54KTtcbiAgICAgICAgdmFyIGRlbHRhUmFkaWFucyA9IE1hdGgubWF4KC1tYXhSb3RhdGlvbiwgTWF0aC5taW4obWF4Um90YXRpb24sIGdlb21fMS5BbmdsZS5kZWx0YSh2ZWN0b3IucmFkaWFucywgdGFyZ2V0UmFkaWFucykpKTtcbiAgICAgICAgdmVjdG9yLnJhZGlhbnMgPSBnZW9tXzEuQW5nbGUubm9ybWFsaXplKHZlY3RvclN0YXJ0LnJhZGlhbnMpICsgZGVsdGFSYWRpYW5zICogcHJvZ3Jlc3M7XG4gICAgICAgIHZhciBtb3ZlRGlzdGFuY2UgPSBkaXN0YW5jZSAqIHByb2dyZXNzO1xuICAgICAgICB2ZWN0b3IueCA9IHZlY3RvclN0YXJ0LnggKyBNYXRoLmNvcyh2ZWN0b3IucmFkaWFucykgKiBtb3ZlRGlzdGFuY2U7XG4gICAgICAgIHZlY3Rvci55ID0gdmVjdG9yU3RhcnQueSArIE1hdGguc2luKHZlY3Rvci5yYWRpYW5zKSAqIG1vdmVEaXN0YW5jZTtcbiAgICAgICAgaWYgKG9uVGFyZ2V0UmVhY2hlZCkge1xuICAgICAgICAgICAgaWYgKGdlb21fMS5Qb2ludC5kaXN0YW5jZSh0YXJnZXQsIHZlY3Rvci5wb2ludCkgPD0gbWF4RGlzdGFuY2UpIHtcbiAgICAgICAgICAgICAgICBvblRhcmdldFJlYWNoZWQodGFyZ2V0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgU2VnbWVudC5wcm90b3R5cGUubW92ZUxlZ3MgPSBmdW5jdGlvbiAocHJvZ3Jlc3MsIGRpc3RhbmNlKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHZhciBfYSA9IHRoaXMubW9kZWwsIGxlZ3MgPSBfYS5sZWdzLCB2ZWN0b3IgPSBfYS52ZWN0b3IsIHZlY3RvclN0YXJ0ID0gX2EudmVjdG9yU3RhcnQ7XG4gICAgICAgIGxlZ3MuZm9yRWFjaChmdW5jdGlvbiAoc2lkZSwgc2lkZUluZGV4KSB7XG4gICAgICAgICAgICBzaWRlLmZvckVhY2goZnVuY3Rpb24gKGxlZykge1xuICAgICAgICAgICAgICAgIGxlZy5vZmZzZXQodmVjdG9yKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKHNpZGVJbmRleCA9PT0gX3RoaXMubW9kZWwuc3RlcCkge1xuICAgICAgICAgICAgICAgIHZhciB0YXJnZXRWZWN0b3JfMSA9IG5ldyBnZW9tXzEuVmVjdG9yKHZlY3RvclN0YXJ0LnggKyBNYXRoLmNvcyh2ZWN0b3IucmFkaWFucykgKiBkaXN0YW5jZSwgdmVjdG9yU3RhcnQueSArIE1hdGguc2luKHZlY3Rvci5yYWRpYW5zKSAqIGRpc3RhbmNlLCB2ZWN0b3IucmFkaWFucyk7XG4gICAgICAgICAgICAgICAgc2lkZS5mb3JFYWNoKGZ1bmN0aW9uIChsZWcpIHtcbiAgICAgICAgICAgICAgICAgICAgbGVnLnRpY2sodGFyZ2V0VmVjdG9yXzEsIHByb2dyZXNzKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoU2VnbWVudC5wcm90b3R5cGUsIFwieFwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMubW9kZWwudmVjdG9yLng7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLm1vZGVsLnZlY3Rvci54ID0gdmFsdWU7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShTZWdtZW50LnByb3RvdHlwZSwgXCJ5XCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5tb2RlbC52ZWN0b3IueTtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMubW9kZWwudmVjdG9yLnkgPSB2YWx1ZTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFNlZ21lbnQucHJvdG90eXBlLCBcInJhZGlhbnNcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm1vZGVsLnZlY3Rvci5yYWRpYW5zO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5tb2RlbC52ZWN0b3IucmFkaWFucyA9IHZhbHVlO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoU2VnbWVudC5wcm90b3R5cGUsIFwiZGF0YVwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIF9fYXNzaWduKHt9LCB0aGlzLm1vZGVsLnZlY3Rvci5kYXRhLCB7IGxlZ3M6IHRoaXMubW9kZWwubGVncy5tYXAoZnVuY3Rpb24gKHNpZGUpIHsgcmV0dXJuIChzaWRlLm1hcChmdW5jdGlvbiAobGVnKSB7IHJldHVybiBsZWcuZGF0YTsgfSkpOyB9KSB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgcmV0dXJuIFNlZ21lbnQ7XG59KCkpO1xuZXhwb3J0cy5TZWdtZW50ID0gU2VnbWVudDtcbiJdLCJzb3VyY2VSb290IjoiIn0=