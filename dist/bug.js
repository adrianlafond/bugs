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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/bug.ts":
/*!********************!*\
  !*** ./src/bug.ts ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var segment_1 = __webpack_require__(/*! ./segment */ "./src/segment.ts");
var point_1 = __webpack_require__(/*! ./geom/point */ "./src/geom/point.ts");
var Bug = /** @class */ (function () {
    function Bug(options) {
        if (options === void 0) { options = {}; }
        var _a = options.x, x = _a === void 0 ? 0 : _a, _b = options.y, y = _b === void 0 ? 0 : _b;
        this.model = {
            id: getUid(),
            ticks: 0,
            segments: [new segment_1.default({
                    position: new point_1.default(x, y)
                })],
        };
    }
    Object.defineProperty(Bug.prototype, "id", {
        get: function () {
            return this.model.id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Bug.prototype, "ticks", {
        get: function () {
            return this.model.ticks;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Bug.prototype, "data", {
        get: function () {
            var segment0 = this.segments[0];
            var x = segment0.x, y = segment0.y, radians = segment0.radians;
            return {
                x: x,
                y: y,
                radians: radians,
                segments: this.segments.map(function (o) { return ({
                    x: o.x - x,
                    y: o.y - y,
                    radians: o.radians,
                    legs: o.legs.map(function (leg) { return ({
                        joint: { x: leg.joint.x - x, y: leg.joint.y - y },
                        foot: { x: leg.foot.x - x, y: leg.foot.y - y },
                        planted: leg.planted,
                    }); }),
                }); }),
            };
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
    Bug.prototype.tick = function () {
        ++this.model.ticks;
    };
    return Bug;
}());
var uid = 0;
function getUid() {
    return "bug-" + uid++;
}
exports.default = Bug;


/***/ }),

/***/ "./src/geom/angle.ts":
/*!***************************!*\
  !*** ./src/geom/angle.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function degreesToRadians(value) {
    if (value === void 0) { value = 0; }
    return normalizeRadians(Math.PI * (value - 90) / 180);
}
exports.degreesToRadians = degreesToRadians;
function radiansToDegrees(value) {
    if (value === void 0) { value = 0; }
    return normalizeDegrees((value + Math.PI / 2) * 180 / Math.PI);
}
exports.radiansToDegrees = radiansToDegrees;
function normalizeRadians(value) {
    if (value === void 0) { value = 0; }
    var fullPi = Math.PI * 2;
    return shave(value >= 0 ? value % fullPi : (value % fullPi) + fullPi);
}
exports.normalizeRadians = normalizeRadians;
function normalizeDegrees(value) {
    if (value === void 0) { value = 0; }
    return shave(value >= 0 ? value % 360 : (value % 360) + 360);
}
exports.normalizeDegrees = normalizeDegrees;
function shave(value) {
    var rounded = Math.round(value);
    return Math.abs(rounded - value) < 0.00005 ? rounded : value;
}
var Angle = /** @class */ (function () {
    function Angle(value, isRadians) {
        if (value === void 0) { value = 0; }
        if (isRadians === void 0) { isRadians = false; }
        this.model = {};
        if (isRadians) {
            this.radians = value;
        }
        else {
            this.degrees = value;
        }
    }
    Object.defineProperty(Angle.prototype, "degrees", {
        get: function () {
            return this.model.degrees;
        },
        set: function (value) {
            this.model.degrees = value;
            this.model.radians = degreesToRadians(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Angle.prototype, "radians", {
        get: function () {
            return this.model.radians;
        },
        set: function (value) {
            this.model.radians = value;
            this.model.degrees = radiansToDegrees(value);
        },
        enumerable: true,
        configurable: true
    });
    return Angle;
}());
exports.default = Angle;


/***/ }),

/***/ "./src/geom/point.ts":
/*!***************************!*\
  !*** ./src/geom/point.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
;
var Point = /** @class */ (function () {
    function Point(x, y) {
        if (x === void 0) { x = 0; }
        if (y === void 0) { y = 0; }
        this.x = x;
        this.y = y;
    }
    Object.defineProperty(Point.prototype, "data", {
        get: function () {
            return { x: this.x, y: this.y };
        },
        enumerable: true,
        configurable: true
    });
    Point.prototype.clone = function () {
        return new Point(this.x, this.y);
    };
    Point.prototype.add = function (point) {
        this.x += point.x;
        this.y += point.y;
        return this;
    };
    Point.prototype.subtract = function (point) {
        this.x -= point.x;
        this.y -= point.y;
        return this;
    };
    Point.prototype.toString = function () {
        return JSON.stringify(this.data);
    };
    Point.distance = function (p1, p2) {
        return Math.sqrt((p1.x - p2.x) * (p1.x - p2.x) + (p1.y - p2.y) * (p1.y - p2.y));
    };
    Point.radians = function (p1, p2) {
        return Math.atan2(p2.y - p1.y, p2.x - p1.x);
    };
    return Point;
}());
exports.default = Point;


/***/ }),

/***/ "./src/geom/vector.ts":
/*!****************************!*\
  !*** ./src/geom/vector.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var point_1 = __webpack_require__(/*! ./point */ "./src/geom/point.ts");
var Vector = /** @class */ (function () {
    function Vector(x_point, y_point, angle) {
        if (x_point === void 0) { x_point = 0; }
        if (y_point === void 0) { y_point = 0; }
        if (angle === void 0) { angle = 0; }
        this.model = {};
        if (x_point instanceof point_1.default) {
            this.model.point = x_point.clone();
            this.model.angle = y_point;
        }
        else {
            this.model.point = new point_1.default(x_point, y_point);
            this.model.angle = angle;
        }
    }
    Object.defineProperty(Vector.prototype, "point", {
        get: function () {
            return this.model.point.clone();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Vector.prototype, "x", {
        get: function () {
            return this.model.point.x;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Vector.prototype, "y", {
        get: function () {
            return this.model.point.y;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Vector.prototype, "angle", {
        get: function () {
            return this.model.angle;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Vector.prototype, "data", {
        get: function () {
            var _a = this, x = _a.x, y = _a.y, angle = _a.angle;
            return { x: x, y: y, angle: angle };
        },
        enumerable: true,
        configurable: true
    });
    Vector.prototype.clone = function () {
        return new Vector(this.point, this.angle);
    };
    Vector.prototype.toString = function () {
        return JSON.stringify(this.data);
    };
    return Vector;
}());
exports.default = Vector;


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var bug_1 = __webpack_require__(/*! ./bug */ "./src/bug.ts");
exports.default = bug_1.default;


/***/ }),

/***/ "./src/leg.ts":
/*!********************!*\
  !*** ./src/leg.ts ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var point_1 = __webpack_require__(/*! ./geom/point */ "./src/geom/point.ts");
exports.MAXIMUM_LENGTH = 20;
var Leg = /** @class */ (function () {
    function Leg(options) {
        if (options === void 0) { options = {}; }
        var _a = options.joint, joint = _a === void 0 ? new point_1.default(0, 0) : _a, _b = options.foot, foot = _b === void 0 ? new point_1.default(exports.MAXIMUM_LENGTH / 2, 0) : _b, _c = options.target, target = _c === void 0 ? new point_1.default() : _c, _d = options.progress, progress = _d === void 0 ? 0 : _d, _e = options.maxLength, maxLength = _e === void 0 ? exports.MAXIMUM_LENGTH : _e, _f = options.planted, planted = _f === void 0 ? true : _f;
        this.model = { foot: foot, maxLength: maxLength, planted: planted };
        this.joint = joint;
        this.target = target;
        this.model.progress = progress;
    }
    Object.defineProperty(Leg.prototype, "data", {
        get: function () {
            return {
                joint: this.model.joint.data,
                foot: this.model.foot.data,
                planted: this.model.planted,
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Leg.prototype, "joint", {
        get: function () {
            return this.model.joint.clone();
        },
        set: function (point) {
            this.model.radians = point_1.default.radians(new point_1.default(), point);
            this.model.joint = point.clone();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Leg.prototype, "foot", {
        get: function () {
            return this.model.foot.clone();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Leg.prototype, "start", {
        get: function () {
            return this.model.start.clone();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Leg.prototype, "target", {
        get: function () {
            return this.model.target.clone();
        },
        set: function (point) {
            var _a = this.model, foot = _a.foot, maxLength = _a.maxLength;
            var distance = point_1.default.distance(foot, point);
            if (distance > maxLength) {
                var radians = point_1.default.radians(foot, point);
                this.model.target = new point_1.default(foot.x + Math.cos(radians) * maxLength, foot.y + Math.sin(radians) * maxLength);
            }
            else {
                this.model.target = point.clone();
            }
            this.model.start = this.model.foot.clone();
            this.model.progress = 0;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Leg.prototype, "maxLength", {
        get: function () {
            return this.model.maxLength;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Leg.prototype, "progress", {
        get: function () {
            return this.model.progress;
        },
        set: function (value) {
            var _a = this.model, foot = _a.foot, start = _a.start, target = _a.target;
            var constrainedValue = Math.max(0, Math.min(1.0, value));
            foot.x = (target.x - start.x) * constrainedValue + start.x;
            foot.y = (target.y - start.y) * constrainedValue + start.y;
            this.model.progress = constrainedValue;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Leg.prototype, "planted", {
        get: function () {
            return this.model.planted;
        },
        set: function (value) {
            this.model.planted = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Leg.prototype, "radians", {
        get: function () {
            return this.model.radians;
        },
        enumerable: true,
        configurable: true
    });
    Leg.prototype.moveJoint = function (point, radians) {
        // this.model.joint.add(point);
        // this.model.radians += radians;
        this.model.joint = point.clone();
        this.model.radians = radians;
    };
    return Leg;
}());
exports.default = Leg;


/***/ }),

/***/ "./src/segment.ts":
/*!************************!*\
  !*** ./src/segment.ts ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var point_1 = __webpack_require__(/*! ./geom/point */ "./src/geom/point.ts");
var angle_1 = __webpack_require__(/*! ./geom/angle */ "./src/geom/angle.ts");
var leg_1 = __webpack_require__(/*! ./leg */ "./src/leg.ts");
var vector_1 = __webpack_require__(/*! ./geom/vector */ "./src/geom/vector.ts");
var Segment = /** @class */ (function () {
    function Segment(options) {
        if (options === void 0) { options = {}; }
        var _a = options.position, position = _a === void 0 ? new point_1.default() : _a, _b = options.radians, radians = _b === void 0 ? angle_1.degreesToRadians(0) : _b, _c = options.progress, progress = _c === void 0 ? 0 : _c, _d = options.step, step = _d === void 0 ? 0 : _d, _e = options.target, target = _e === void 0 ? new vector_1.default() : _e, _f = options.legs, legs = _f === void 0 ? [] : _f;
        legs[0] = legs[0] || new leg_1.default({
            joint: position.clone(),
            foot: position.clone().add(new point_1.default(leg_1.MAXIMUM_LENGTH / 2, 0)),
        });
        legs[1] = legs[1] || new leg_1.default({
            joint: position.clone(),
            foot: position.clone().add(new point_1.default(-leg_1.MAXIMUM_LENGTH / 2, 0)),
        });
        this.model = { position: position, radians: radians, legs: legs };
        this.writeLayout();
        this.step = constrainStep(step);
        this.target = target;
        this.progress = progress;
    }
    Object.defineProperty(Segment.prototype, "data", {
        get: function () {
            var _a = this.position, x = _a.x, y = _a.y;
            var _b = this, radians = _b.radians, legs = _b.legs;
            return {
                x: x, y: y, radians: radians, legs: legs
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Segment.prototype, "position", {
        get: function () {
            return this.model.position.clone();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Segment.prototype, "radians", {
        get: function () {
            return this.model.radians;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Segment.prototype, "progress", {
        get: function () {
            return this.model.progress;
        },
        set: function (value) {
            var progress = Math.max(0, Math.min(1.0, value));
            this.moveSegment(progress);
            this.moveJoints();
            this.moveFeet(progress);
            this.updateProgress(progress);
        },
        enumerable: true,
        configurable: true
    });
    Segment.prototype.moveSegment = function (progress) {
        var _a = this.model, position = _a.position, target = _a.target, start = _a.start;
        position.x = (target.x - start.x) * progress + start.x;
        position.y = (target.y - start.y) * progress + start.y;
        this.model.radians = angle_1.normalizeRadians((target.angle - start.angle)
            * progress + start.angle);
    };
    Segment.prototype.moveJoints = function () {
        var _a = this.model, layout = _a.layout, position = _a.position, radians = _a.radians;
        var jointLayout = layout.legs[this.step].joint;
        var jointRadians = jointLayout.radians + radians;
        var jointPoint = new point_1.default(Math.cos(jointRadians) * jointLayout.distance + position.x, Math.sin(jointRadians) * jointLayout.distance + position.y);
        this.model.legs[this.step].moveJoint(jointPoint, jointRadians);
    };
    Segment.prototype.moveFeet = function (progress) {
        this.model.legs[this.step].progress = progress;
    };
    Segment.prototype.updateProgress = function (progress) {
        var prevProgress = this.model.progress;
        this.model.progress = progress;
        if ((prevProgress !== 1 && progress === 1) ||
            (prevProgress !== 0 && progress === 0)) {
            this.model.step = this.model.step === 1 ? 0 : 1;
        }
    };
    Object.defineProperty(Segment.prototype, "step", {
        get: function () {
            return this.model.step;
        },
        set: function (value) {
            this.legs[this.step || 0].planted = true;
            this.model.step = constrainStep(value);
            this.legs[this.step].planted = false;
            this.model.progress = 0;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Segment.prototype, "target", {
        get: function () {
            return this.model.target;
        },
        set: function (value) {
            this.model.target = value;
            this.model.start = new vector_1.default(this.position, this.radians);
            var target = this.model.target;
            var _a = this.model.layout, position = _a.position, legs = _a.legs;
            var deltaAngle = target.angle - position.angle;
            var deltaDistance = point_1.default.distance(target.point, position.point);
            var leg = this.model.legs[this.step];
            var legLayout = legs[this.step];
            var radians = deltaAngle + legLayout.foot.radians;
            leg.target = new point_1.default(Math.cos(deltaDistance) * radians + position.point.x, Math.sin(deltaDistance) * radians + position.point.y);
            this.progress = 0;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Segment.prototype, "legs", {
        get: function () {
            return this.model.legs.map(function (leg) { return leg.data; });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Segment.prototype, "layout", {
        get: function () {
            var _a = this.model.layout, position = _a.position, legs = _a.legs;
            return {
                position: position.clone(),
                legs: legs.map(function (leg) { return ({
                    joint: { distance: leg.joint.distance, radians: leg.joint.radians },
                    foot: { distance: leg.foot.distance, radians: leg.foot.radians },
                }); }),
            };
        },
        enumerable: true,
        configurable: true
    });
    Segment.prototype.writeLayout = function () {
        var _a = this.model, position = _a.position, radians = _a.radians, legs = _a.legs;
        this.model.layout = {
            position: new vector_1.default(position, radians),
            legs: legs.map(function (leg) {
                return {
                    joint: {
                        distance: point_1.default.distance(position, leg.joint),
                        radians: point_1.default.radians(position, leg.joint),
                    },
                    foot: {
                        distance: point_1.default.distance(position, leg.foot),
                        radians: point_1.default.radians(position, leg.foot),
                    }
                };
            }),
        };
    };
    return Segment;
}());
exports.default = Segment;
function constrainStep(value) {
    return Math.round(Math.max(0, Math.min(1, value)));
}


/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9CdWcvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL0J1Zy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9CdWcvLi9zcmMvYnVnLnRzIiwid2VicGFjazovL0J1Zy8uL3NyYy9nZW9tL2FuZ2xlLnRzIiwid2VicGFjazovL0J1Zy8uL3NyYy9nZW9tL3BvaW50LnRzIiwid2VicGFjazovL0J1Zy8uL3NyYy9nZW9tL3ZlY3Rvci50cyIsIndlYnBhY2s6Ly9CdWcvLi9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vQnVnLy4vc3JjL2xlZy50cyIsIndlYnBhY2s6Ly9CdWcvLi9zcmMvc2VnbWVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFD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QUNMLFFBQVEsRUFBRSxlQUFLLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxHQUFHLENBQUMsS0FBSyxDQUFDO3dCQUM3QyxPQUFPLEVBQUUsZUFBSyxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsR0FBRyxDQUFDLEtBQUssQ0FBQztxQkFDNUM7b0JBQ0QsSUFBSSxFQUFFO3dCQUNKLFFBQVEsRUFBRSxlQUFLLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDO3dCQUM1QyxPQUFPLEVBQUUsZUFBSyxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQztxQkFDM0M7aUJBQ0YsQ0FBQztZQUNKLENBQUMsQ0FBQztTQUNILENBQUM7SUFDSixDQUFDO0lBQ0gsY0FBQztBQUFELENBQUM7O0FBRUQsU0FBUyxhQUFhLENBQUMsS0FBYTtJQUNsQyxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ3JELENBQUMiLCJmaWxlIjoiYnVnLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoXCJCdWdcIiwgW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiQnVnXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIkJ1Z1wiXSA9IGZhY3RvcnkoKTtcbn0pKHdpbmRvdywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXgudHNcIik7XG4iLCJpbXBvcnQgU2VnbWVudCwgeyBTZWdtZW50RGF0YSB9IGZyb20gJy4vc2VnbWVudCc7XG5pbXBvcnQgUG9pbnQgZnJvbSAnLi9nZW9tL3BvaW50JztcblxuZXhwb3J0IGludGVyZmFjZSBCdWdNb2RlbCB7XG4gIGlkOiBzdHJpbmc7XG4gIHRpY2tzOiBudW1iZXI7XG4gIHNlZ21lbnRzOiBTZWdtZW50W107XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQnVnT3B0aW9ucyB7XG4gIHg/OiBudW1iZXI7XG4gIHk/OiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQnVnRGF0YSB7XG4gIHg6IG51bWJlcjtcbiAgeTogbnVtYmVyO1xuICByYWRpYW5zOiBudW1iZXI7XG4gIHNlZ21lbnRzOiBTZWdtZW50RGF0YVtdO1xufVxuXG5jbGFzcyBCdWcge1xuICBwcml2YXRlIG1vZGVsOiBCdWdNb2RlbDtcblxuICBjb25zdHJ1Y3RvcihvcHRpb25zOiBCdWdPcHRpb25zID0ge30pIHtcbiAgICBjb25zdCB7XG4gICAgICB4ID0gMCxcbiAgICAgIHkgPSAwLFxuICAgIH0gPSBvcHRpb25zO1xuICAgIHRoaXMubW9kZWwgPSB7XG4gICAgICBpZDogZ2V0VWlkKCksXG4gICAgICB0aWNrczogMCxcbiAgICAgIHNlZ21lbnRzOiBbbmV3IFNlZ21lbnQoe1xuICAgICAgICBwb3NpdGlvbjogbmV3IFBvaW50KHgsIHkpXG4gICAgICB9KV0sXG4gICAgfTtcbiAgfVxuXG4gIGdldCBpZCgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLm1vZGVsLmlkO1xuICB9XG5cbiAgZ2V0IHRpY2tzKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMubW9kZWwudGlja3M7XG4gIH1cblxuICBnZXQgZGF0YSgpOiBCdWdEYXRhIHtcbiAgICBjb25zdCBzZWdtZW50MCA9IHRoaXMuc2VnbWVudHNbMF07XG4gICAgY29uc3QgeyB4LCB5LCByYWRpYW5zIH0gPSBzZWdtZW50MDtcbiAgICByZXR1cm4ge1xuICAgICAgeCxcbiAgICAgIHksXG4gICAgICByYWRpYW5zLFxuICAgICAgc2VnbWVudHM6IHRoaXMuc2VnbWVudHMubWFwKG8gPT4gKHtcbiAgICAgICAgeDogby54IC0geCxcbiAgICAgICAgeTogby55IC0geSxcbiAgICAgICAgcmFkaWFuczogby5yYWRpYW5zLFxuICAgICAgICBsZWdzOiBvLmxlZ3MubWFwKGxlZyA9PiAoe1xuICAgICAgICAgIGpvaW50OiB7IHg6IGxlZy5qb2ludC54IC0geCwgeTogbGVnLmpvaW50LnkgLSB5IH0sXG4gICAgICAgICAgZm9vdDogeyB4OiBsZWcuZm9vdC54IC0geCwgeTogbGVnLmZvb3QueSAtIHkgfSxcbiAgICAgICAgICBwbGFudGVkOiBsZWcucGxhbnRlZCxcbiAgICAgICAgfSkpLFxuICAgICAgfSkpLFxuICAgIH07XG4gIH1cblxuICBnZXQgc2VnbWVudHMoKTogU2VnbWVudERhdGFbXSB7XG4gICAgcmV0dXJuIHRoaXMubW9kZWwuc2VnbWVudHMubWFwKHNlZ21lbnQgPT4gc2VnbWVudC5kYXRhKTtcbiAgfVxuXG4gIHRpY2soKSB7XG4gICAgKyt0aGlzLm1vZGVsLnRpY2tzO1xuICB9XG59XG5cbmxldCB1aWQ6IG51bWJlciA9IDA7XG5mdW5jdGlvbiBnZXRVaWQoKTogc3RyaW5nIHtcbiAgcmV0dXJuIGBidWctJHt1aWQrK31gO1xufVxuXG5leHBvcnQgZGVmYXVsdCBCdWc7XG4iLCJleHBvcnQgZnVuY3Rpb24gZGVncmVlc1RvUmFkaWFucyh2YWx1ZTogbnVtYmVyID0gMCk6IG51bWJlciB7XG4gIHJldHVybiBub3JtYWxpemVSYWRpYW5zKE1hdGguUEkgKiAodmFsdWUgLSA5MCkgLyAxODApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmFkaWFuc1RvRGVncmVlcyh2YWx1ZTogbnVtYmVyID0gMCk6IG51bWJlciB7XG4gIHJldHVybiBub3JtYWxpemVEZWdyZWVzKCh2YWx1ZSArIE1hdGguUEkgLyAyKSAqIDE4MCAvIE1hdGguUEkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbm9ybWFsaXplUmFkaWFucyh2YWx1ZTogbnVtYmVyID0gMCk6IG51bWJlciB7XG4gIGNvbnN0IGZ1bGxQaSA9IE1hdGguUEkgKiAyO1xuICByZXR1cm4gc2hhdmUodmFsdWUgPj0gMCA/IHZhbHVlICUgZnVsbFBpIDogKHZhbHVlICUgZnVsbFBpKSArIGZ1bGxQaSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBub3JtYWxpemVEZWdyZWVzKHZhbHVlOiBudW1iZXIgPSAwKTogbnVtYmVyIHtcbiAgcmV0dXJuIHNoYXZlKHZhbHVlID49IDAgPyB2YWx1ZSAlIDM2MCA6ICh2YWx1ZSAlIDM2MCkgKyAzNjApO1xufVxuXG5mdW5jdGlvbiBzaGF2ZSh2YWx1ZTogbnVtYmVyKTogbnVtYmVyIHtcbiAgY29uc3Qgcm91bmRlZCA9IE1hdGgucm91bmQodmFsdWUpO1xuICByZXR1cm4gTWF0aC5hYnMocm91bmRlZCAtIHZhbHVlKSA8IDAuMDAwMDUgPyByb3VuZGVkIDogdmFsdWU7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQW5nbGVNb2RlbCB7XG4gIGRlZ3JlZXM/OiBudW1iZXI7XG4gIHJhZGlhbnM/OiBudW1iZXI7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFuZ2xlIHtcbiAgcHJpdmF0ZSBtb2RlbDogQW5nbGVNb2RlbCA9IHt9O1xuXG4gIGNvbnN0cnVjdG9yKHZhbHVlOiBudW1iZXIgPSAwLCBpc1JhZGlhbnM6IGJvb2xlYW4gPSBmYWxzZSkge1xuICAgIGlmIChpc1JhZGlhbnMpIHtcbiAgICAgIHRoaXMucmFkaWFucyA9IHZhbHVlO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmRlZ3JlZXMgPSB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICBnZXQgZGVncmVlcygpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLm1vZGVsLmRlZ3JlZXM7XG4gIH1cblxuICBzZXQgZGVncmVlcyh2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5tb2RlbC5kZWdyZWVzID0gdmFsdWU7XG4gICAgdGhpcy5tb2RlbC5yYWRpYW5zID0gZGVncmVlc1RvUmFkaWFucyh2YWx1ZSk7XG4gIH1cblxuICBnZXQgcmFkaWFucygpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLm1vZGVsLnJhZGlhbnM7XG4gIH1cblxuICBzZXQgcmFkaWFucyh2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5tb2RlbC5yYWRpYW5zID0gdmFsdWU7XG4gICAgdGhpcy5tb2RlbC5kZWdyZWVzID0gcmFkaWFuc1RvRGVncmVlcyh2YWx1ZSk7XG4gIH1cbn0iLCIvKipcbiAqXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgUG9pbnREYXRhIHtcbiAgeDogbnVtYmVyLFxuICB5OiBudW1iZXIsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQb2ludCB7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyB4OiBudW1iZXIgPSAwLCBwdWJsaWMgeTogbnVtYmVyID0gMCkge31cblxuICBnZXQgZGF0YSgpOiBQb2ludERhdGEge1xuICAgIHJldHVybiB7IHg6IHRoaXMueCwgeTogdGhpcy55IH07XG4gIH1cblxuICBjbG9uZSgpOiBQb2ludCB7XG4gICAgcmV0dXJuIG5ldyBQb2ludCh0aGlzLngsIHRoaXMueSk7XG4gIH1cblxuICBhZGQocG9pbnQ6IFBvaW50KTogUG9pbnQge1xuICAgIHRoaXMueCArPSBwb2ludC54O1xuICAgIHRoaXMueSArPSBwb2ludC55O1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgc3VidHJhY3QocG9pbnQ6IFBvaW50KTogUG9pbnQge1xuICAgIHRoaXMueCAtPSBwb2ludC54O1xuICAgIHRoaXMueSAtPSBwb2ludC55O1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgdG9TdHJpbmcoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkodGhpcy5kYXRhKTtcbiAgfVxuXG4gIHN0YXRpYyBkaXN0YW5jZShwMTogUG9pbnQsIHAyOiBQb2ludCk6IG51bWJlciB7XG4gICAgcmV0dXJuIE1hdGguc3FydCgocDEueCAtIHAyLngpICogKHAxLnggLSBwMi54KSArIChwMS55IC0gcDIueSkgKiAocDEueSAtIHAyLnkpKTtcbiAgfVxuXG4gIHN0YXRpYyByYWRpYW5zKHAxOiBQb2ludCwgcDI6IFBvaW50KTogbnVtYmVyIHtcbiAgICByZXR1cm4gTWF0aC5hdGFuMihwMi55IC0gcDEueSwgcDIueCAtIHAxLngpO1xuICB9XG59XG4iLCJpbXBvcnQgUG9pbnQgZnJvbSAnLi9wb2ludCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgVmVjdG9yTW9kZWwge1xuICBwb2ludD86IFBvaW50O1xuICBhbmdsZT86IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBWZWN0b3JEYXRhIHtcbiAgeDogbnVtYmVyO1xuICB5OiBudW1iZXI7XG4gIGFuZ2xlOiBudW1iZXI7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFZlY3RvciB7XG4gIHByaXZhdGUgbW9kZWw6IFZlY3Rvck1vZGVsID0ge307XG5cbiAgY29uc3RydWN0b3IoeF9wb2ludDogbnVtYmVyfFBvaW50ID0gMCwgeV9wb2ludDogbnVtYmVyID0gMCwgYW5nbGU6IG51bWJlciA9IDApIHtcbiAgICBpZiAoeF9wb2ludCBpbnN0YW5jZW9mIFBvaW50KSB7XG4gICAgICB0aGlzLm1vZGVsLnBvaW50ID0geF9wb2ludC5jbG9uZSgpO1xuICAgICAgdGhpcy5tb2RlbC5hbmdsZSA9IHlfcG9pbnQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMubW9kZWwucG9pbnQgPSBuZXcgUG9pbnQoeF9wb2ludCwgeV9wb2ludCk7XG4gICAgICB0aGlzLm1vZGVsLmFuZ2xlID0gYW5nbGU7XG4gICAgfVxuICB9XG5cbiAgZ2V0IHBvaW50KCk6IFBvaW50IHtcbiAgICByZXR1cm4gdGhpcy5tb2RlbC5wb2ludC5jbG9uZSgpO1xuICB9XG5cbiAgZ2V0IHgoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5tb2RlbC5wb2ludC54O1xuICB9XG5cbiAgZ2V0IHkoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5tb2RlbC5wb2ludC55O1xuICB9XG5cbiAgZ2V0IGFuZ2xlKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMubW9kZWwuYW5nbGU7XG4gIH1cblxuICBnZXQgZGF0YSgpOiBWZWN0b3JEYXRhIHtcbiAgICBjb25zdCB7IHgsIHksIGFuZ2xlIH0gPSB0aGlzO1xuICAgIHJldHVybiB7IHgsIHksIGFuZ2xlIH07XG4gIH1cblxuICBjbG9uZSgpOiBWZWN0b3Ige1xuICAgIHJldHVybiBuZXcgVmVjdG9yKHRoaXMucG9pbnQsIHRoaXMuYW5nbGUpO1xuICB9XG5cbiAgdG9TdHJpbmcoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkodGhpcy5kYXRhKTtcbiAgfVxufSIsImltcG9ydCBCdWcgZnJvbSAnLi9idWcnO1xuXG5leHBvcnQgZGVmYXVsdCBCdWc7XG4iLCJpbXBvcnQgUG9pbnQsIHsgUG9pbnREYXRhIH0gZnJvbSAnLi9nZW9tL3BvaW50JztcblxuZXhwb3J0IGNvbnN0IE1BWElNVU1fTEVOR1RIOiBudW1iZXIgPSAyMDtcblxuZXhwb3J0IGludGVyZmFjZSBMZWdPcHRpb25zIHtcbiAgam9pbnQ/OiBQb2ludDtcbiAgZm9vdD86IFBvaW50O1xuICB0YXJnZXQ/OiBQb2ludDtcbiAgcHJvZ3Jlc3M/OiBudW1iZXI7XG4gIG1heExlbmd0aD86IG51bWJlcjtcbiAgcGxhbnRlZD86IGJvb2xlYW47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTGVnTW9kZWwgZXh0ZW5kcyBMZWdPcHRpb25zIHtcbiAgcmFkaWFucz86IG51bWJlcjtcbiAgc3RhcnQ/OiBQb2ludDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBMZWdEYXRhIHtcbiAgam9pbnQ6IFBvaW50RGF0YSxcbiAgZm9vdDogUG9pbnREYXRhLFxuICBwbGFudGVkOiBib29sZWFuO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMZWcge1xuICBwcml2YXRlIG1vZGVsOiBMZWdNb2RlbDtcblxuICBjb25zdHJ1Y3RvcihvcHRpb25zOiBMZWdPcHRpb25zID0ge30pIHtcbiAgICBjb25zdCB7XG4gICAgICBqb2ludCA9IG5ldyBQb2ludCgwLCAwKSxcbiAgICAgIGZvb3QgPSBuZXcgUG9pbnQoTUFYSU1VTV9MRU5HVEggLyAyLCAwKSxcbiAgICAgIHRhcmdldCA9IG5ldyBQb2ludCgpLFxuICAgICAgcHJvZ3Jlc3MgPSAwLFxuICAgICAgbWF4TGVuZ3RoID0gTUFYSU1VTV9MRU5HVEgsXG4gICAgICBwbGFudGVkID0gdHJ1ZSxcbiAgICB9ID0gb3B0aW9ucztcbiAgICB0aGlzLm1vZGVsID0geyBmb290LCBtYXhMZW5ndGgsIHBsYW50ZWQgfTtcbiAgICB0aGlzLmpvaW50ID0gam9pbnQ7XG4gICAgdGhpcy50YXJnZXQgPSB0YXJnZXQ7XG4gICAgdGhpcy5tb2RlbC5wcm9ncmVzcyA9IHByb2dyZXNzO1xuICB9XG5cbiAgZ2V0IGRhdGEoKTogTGVnRGF0YSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGpvaW50OiB0aGlzLm1vZGVsLmpvaW50LmRhdGEsXG4gICAgICBmb290OiB0aGlzLm1vZGVsLmZvb3QuZGF0YSxcbiAgICAgIHBsYW50ZWQ6IHRoaXMubW9kZWwucGxhbnRlZCxcbiAgICB9O1xuICB9XG5cbiAgZ2V0IGpvaW50KCk6IFBvaW50IHtcbiAgICByZXR1cm4gdGhpcy5tb2RlbC5qb2ludC5jbG9uZSgpO1xuICB9XG5cbiAgc2V0IGpvaW50KHBvaW50OiBQb2ludCkge1xuICAgIHRoaXMubW9kZWwucmFkaWFucyA9IFBvaW50LnJhZGlhbnMobmV3IFBvaW50KCksIHBvaW50KTtcbiAgICB0aGlzLm1vZGVsLmpvaW50ID0gcG9pbnQuY2xvbmUoKTtcbiAgfVxuXG4gIGdldCBmb290KCk6IFBvaW50IHtcbiAgICByZXR1cm4gdGhpcy5tb2RlbC5mb290LmNsb25lKCk7XG4gIH1cblxuICBnZXQgc3RhcnQoKTogUG9pbnQge1xuICAgIHJldHVybiB0aGlzLm1vZGVsLnN0YXJ0LmNsb25lKCk7XG4gIH1cblxuICBnZXQgdGFyZ2V0KCk6IFBvaW50IHtcbiAgICByZXR1cm4gdGhpcy5tb2RlbC50YXJnZXQuY2xvbmUoKTtcbiAgfVxuXG4gIHNldCB0YXJnZXQocG9pbnQ6IFBvaW50KSB7XG4gICAgY29uc3QgeyBmb290LCBtYXhMZW5ndGggfSA9IHRoaXMubW9kZWw7XG4gICAgY29uc3QgZGlzdGFuY2UgPSBQb2ludC5kaXN0YW5jZShmb290LCBwb2ludCk7XG4gICAgaWYgKGRpc3RhbmNlID4gbWF4TGVuZ3RoKSB7XG4gICAgICBjb25zdCByYWRpYW5zID0gUG9pbnQucmFkaWFucyhmb290LCBwb2ludCk7XG4gICAgICB0aGlzLm1vZGVsLnRhcmdldCA9IG5ldyBQb2ludChcbiAgICAgICAgZm9vdC54ICsgTWF0aC5jb3MocmFkaWFucykgKiBtYXhMZW5ndGgsXG4gICAgICAgIGZvb3QueSArIE1hdGguc2luKHJhZGlhbnMpICogbWF4TGVuZ3RoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5tb2RlbC50YXJnZXQgPSBwb2ludC5jbG9uZSgpO1xuICAgIH1cbiAgICB0aGlzLm1vZGVsLnN0YXJ0ID0gdGhpcy5tb2RlbC5mb290LmNsb25lKCk7XG4gICAgdGhpcy5tb2RlbC5wcm9ncmVzcyA9IDA7XG4gIH1cblxuICBnZXQgbWF4TGVuZ3RoKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMubW9kZWwubWF4TGVuZ3RoO1xuICB9XG5cbiAgZ2V0IHByb2dyZXNzKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMubW9kZWwucHJvZ3Jlc3M7XG4gIH1cblxuICBzZXQgcHJvZ3Jlc3ModmFsdWU6IG51bWJlcikge1xuICAgIGNvbnN0IHsgZm9vdCwgc3RhcnQsIHRhcmdldCB9ID0gdGhpcy5tb2RlbDtcbiAgICBjb25zdCBjb25zdHJhaW5lZFZhbHVlOiBudW1iZXIgPSBNYXRoLm1heCgwLCBNYXRoLm1pbigxLjAsIHZhbHVlKSk7XG4gICAgZm9vdC54ID0gKHRhcmdldC54IC0gc3RhcnQueCkgKiBjb25zdHJhaW5lZFZhbHVlICsgc3RhcnQueDtcbiAgICBmb290LnkgPSAodGFyZ2V0LnkgLSBzdGFydC55KSAqIGNvbnN0cmFpbmVkVmFsdWUgKyBzdGFydC55O1xuICAgIHRoaXMubW9kZWwucHJvZ3Jlc3MgPSBjb25zdHJhaW5lZFZhbHVlO1xuICB9XG5cbiAgZ2V0IHBsYW50ZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMubW9kZWwucGxhbnRlZDtcbiAgfVxuXG4gIHNldCBwbGFudGVkKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5tb2RlbC5wbGFudGVkID0gdmFsdWU7XG4gIH1cblxuICBnZXQgcmFkaWFucygpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLm1vZGVsLnJhZGlhbnM7XG4gIH1cblxuICBtb3ZlSm9pbnQocG9pbnQ6IFBvaW50LCByYWRpYW5zOiBudW1iZXIpIHtcbiAgICAvLyB0aGlzLm1vZGVsLmpvaW50LmFkZChwb2ludCk7XG4gICAgLy8gdGhpcy5tb2RlbC5yYWRpYW5zICs9IHJhZGlhbnM7XG4gICAgdGhpcy5tb2RlbC5qb2ludCA9IHBvaW50LmNsb25lKCk7XG4gICAgdGhpcy5tb2RlbC5yYWRpYW5zID0gcmFkaWFucztcbiAgfVxufVxuIiwiaW1wb3J0IFBvaW50IGZyb20gJy4vZ2VvbS9wb2ludCc7XG5pbXBvcnQge1xuICBkZWdyZWVzVG9SYWRpYW5zLFxuICBub3JtYWxpemVSYWRpYW5zLFxufSBmcm9tICcuL2dlb20vYW5nbGUnO1xuaW1wb3J0IExlZywgeyBMZWdEYXRhLCBNQVhJTVVNX0xFTkdUSCB9IGZyb20gJy4vbGVnJztcbmltcG9ydCBWZWN0b3IgZnJvbSAnLi9nZW9tL3ZlY3Rvcic7XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2VnbWVudE9wdGlvbnMge1xuICBwb3NpdGlvbj86IFBvaW50O1xuICByYWRpYW5zPzogbnVtYmVyO1xuICBwcm9ncmVzcz86IG51bWJlcjtcbiAgc3RlcD86IG51bWJlcjtcbiAgdGFyZ2V0PzogVmVjdG9yO1xuICBsZWdzPzogTGVnW107XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTGVnTGF5b3V0IHtcbiAgam9pbnQ6IHsgZGlzdGFuY2U6IG51bWJlciwgcmFkaWFuczogbnVtYmVyIH07XG4gIGZvb3Q6IHsgZGlzdGFuY2U6IG51bWJlciwgcmFkaWFuczogbnVtYmVyIH07XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2VnbWVudExheW91dCB7XG4gIHBvc2l0aW9uOiBWZWN0b3I7XG4gIGxlZ3M6IExlZ0xheW91dFtdO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFNlZ21lbnRNb2RlbCBleHRlbmRzIFNlZ21lbnRPcHRpb25zIHtcbiAgc3RhcnQ/OiBWZWN0b3I7XG4gIGxheW91dD86IFNlZ21lbnRMYXlvdXQ7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2VnbWVudERhdGEge1xuICB4OiBudW1iZXI7XG4gIHk6IG51bWJlcjtcbiAgcmFkaWFuczogbnVtYmVyO1xuICBsZWdzOiBMZWdEYXRhW107XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlZ21lbnQge1xuICBwcml2YXRlIG1vZGVsOiBTZWdtZW50TW9kZWw7XG5cbiAgY29uc3RydWN0b3Iob3B0aW9uczogU2VnbWVudE9wdGlvbnMgPSB7fSkge1xuICAgIGNvbnN0IHtcbiAgICAgIHBvc2l0aW9uID0gbmV3IFBvaW50KCksXG4gICAgICByYWRpYW5zID0gZGVncmVlc1RvUmFkaWFucygwKSxcbiAgICAgIHByb2dyZXNzID0gMCxcbiAgICAgIHN0ZXAgPSAwLFxuICAgICAgdGFyZ2V0ID0gbmV3IFZlY3RvcigpLFxuICAgICAgbGVncyA9IFtdLFxuICAgIH0gPSBvcHRpb25zO1xuICAgIGxlZ3NbMF0gPSBsZWdzWzBdIHx8IG5ldyBMZWcoe1xuICAgICAgam9pbnQ6IHBvc2l0aW9uLmNsb25lKCksXG4gICAgICBmb290OiBwb3NpdGlvbi5jbG9uZSgpLmFkZChuZXcgUG9pbnQoTUFYSU1VTV9MRU5HVEggLyAyLCAwKSksXG4gICAgfSk7XG4gICAgbGVnc1sxXSA9IGxlZ3NbMV0gfHwgbmV3IExlZyh7XG4gICAgICBqb2ludDogcG9zaXRpb24uY2xvbmUoKSxcbiAgICAgIGZvb3Q6IHBvc2l0aW9uLmNsb25lKCkuYWRkKG5ldyBQb2ludCgtTUFYSU1VTV9MRU5HVEggLyAyLCAwKSksXG4gICAgfSk7XG4gICAgdGhpcy5tb2RlbCA9IHsgcG9zaXRpb24sIHJhZGlhbnMsIGxlZ3MgfTtcbiAgICB0aGlzLndyaXRlTGF5b3V0KCk7XG4gICAgdGhpcy5zdGVwID0gY29uc3RyYWluU3RlcChzdGVwKTtcbiAgICB0aGlzLnRhcmdldCA9IHRhcmdldDtcbiAgICB0aGlzLnByb2dyZXNzID0gcHJvZ3Jlc3M7XG4gIH1cblxuICBnZXQgZGF0YSgpOiBTZWdtZW50RGF0YSB7XG4gICAgY29uc3QgeyB4LCB5IH0gPSB0aGlzLnBvc2l0aW9uO1xuICAgIGNvbnN0IHsgcmFkaWFucywgbGVncyB9ID0gdGhpcztcbiAgICByZXR1cm4ge1xuICAgICAgeCwgeSwgcmFkaWFucywgbGVnc1xuICAgIH07XG4gIH1cblxuICBnZXQgcG9zaXRpb24oKTogUG9pbnQge1xuICAgIHJldHVybiB0aGlzLm1vZGVsLnBvc2l0aW9uLmNsb25lKCk7XG4gIH1cblxuICBnZXQgcmFkaWFucygpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLm1vZGVsLnJhZGlhbnM7XG4gIH1cblxuICBnZXQgcHJvZ3Jlc3MoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5tb2RlbC5wcm9ncmVzcztcbiAgfVxuXG4gIHNldCBwcm9ncmVzcyh2YWx1ZTogbnVtYmVyKSB7XG4gICAgY29uc3QgcHJvZ3Jlc3MgPSBNYXRoLm1heCgwLCBNYXRoLm1pbigxLjAsIHZhbHVlKSk7XG4gICAgdGhpcy5tb3ZlU2VnbWVudChwcm9ncmVzcyk7XG4gICAgdGhpcy5tb3ZlSm9pbnRzKCk7XG4gICAgdGhpcy5tb3ZlRmVldChwcm9ncmVzcyk7XG4gICAgdGhpcy51cGRhdGVQcm9ncmVzcyhwcm9ncmVzcyk7XG4gIH1cblxuICBwcml2YXRlIG1vdmVTZWdtZW50KHByb2dyZXNzOiBudW1iZXIpIHtcbiAgICBjb25zdCB7IHBvc2l0aW9uLCB0YXJnZXQsIHN0YXJ0IH0gPSB0aGlzLm1vZGVsO1xuICAgIHBvc2l0aW9uLnggPSAodGFyZ2V0LnggLSBzdGFydC54KSAqIHByb2dyZXNzICsgc3RhcnQueDtcbiAgICBwb3NpdGlvbi55ID0gKHRhcmdldC55IC0gc3RhcnQueSkgKiBwcm9ncmVzcyArIHN0YXJ0Lnk7XG4gICAgdGhpcy5tb2RlbC5yYWRpYW5zID0gbm9ybWFsaXplUmFkaWFucygodGFyZ2V0LmFuZ2xlIC0gc3RhcnQuYW5nbGUpXG4gICAgICAqIHByb2dyZXNzICsgc3RhcnQuYW5nbGUpO1xuICB9XG5cbiAgcHJpdmF0ZSBtb3ZlSm9pbnRzKCkge1xuICAgIGNvbnN0IHsgbGF5b3V0LCBwb3NpdGlvbiwgcmFkaWFucyB9ID0gdGhpcy5tb2RlbDtcbiAgICBjb25zdCBqb2ludExheW91dCA9IGxheW91dC5sZWdzW3RoaXMuc3RlcF0uam9pbnQ7XG4gICAgY29uc3Qgam9pbnRSYWRpYW5zID0gam9pbnRMYXlvdXQucmFkaWFucyArIHJhZGlhbnM7XG4gICAgY29uc3Qgam9pbnRQb2ludCA9IG5ldyBQb2ludChcbiAgICAgIE1hdGguY29zKGpvaW50UmFkaWFucykgKiBqb2ludExheW91dC5kaXN0YW5jZSArIHBvc2l0aW9uLngsXG4gICAgICBNYXRoLnNpbihqb2ludFJhZGlhbnMpICogam9pbnRMYXlvdXQuZGlzdGFuY2UgKyBwb3NpdGlvbi55LFxuICAgICk7XG4gICAgdGhpcy5tb2RlbC5sZWdzW3RoaXMuc3RlcF0ubW92ZUpvaW50KGpvaW50UG9pbnQsIGpvaW50UmFkaWFucyk7XG4gIH1cblxuICBwcml2YXRlIG1vdmVGZWV0KHByb2dyZXNzOiBudW1iZXIpIHtcbiAgICB0aGlzLm1vZGVsLmxlZ3NbdGhpcy5zdGVwXS5wcm9ncmVzcyA9IHByb2dyZXNzO1xuICB9XG5cbiAgcHJpdmF0ZSB1cGRhdGVQcm9ncmVzcyhwcm9ncmVzczogbnVtYmVyKSB7XG4gICAgY29uc3QgeyBwcm9ncmVzczogcHJldlByb2dyZXNzIH0gPSB0aGlzLm1vZGVsO1xuICAgIHRoaXMubW9kZWwucHJvZ3Jlc3MgPSBwcm9ncmVzcztcbiAgICBpZiAoKHByZXZQcm9ncmVzcyAhPT0gMSAmJiBwcm9ncmVzcyA9PT0gMSkgfHxcbiAgICAgICAgKHByZXZQcm9ncmVzcyAhPT0gMCAmJiBwcm9ncmVzcyA9PT0gMCkpIHtcbiAgICAgIHRoaXMubW9kZWwuc3RlcCA9IHRoaXMubW9kZWwuc3RlcCA9PT0gMSA/IDAgOiAxO1xuICAgIH1cbiAgfVxuXG4gIGdldCBzdGVwKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMubW9kZWwuc3RlcDtcbiAgfVxuXG4gIHNldCBzdGVwKHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLmxlZ3NbdGhpcy5zdGVwIHx8IDBdLnBsYW50ZWQgPSB0cnVlO1xuICAgIHRoaXMubW9kZWwuc3RlcCA9IGNvbnN0cmFpblN0ZXAodmFsdWUpO1xuICAgIHRoaXMubGVnc1t0aGlzLnN0ZXBdLnBsYW50ZWQgPSBmYWxzZTtcbiAgICB0aGlzLm1vZGVsLnByb2dyZXNzID0gMDtcbiAgfVxuXG4gIGdldCB0YXJnZXQoKTogVmVjdG9yIHtcbiAgICByZXR1cm4gdGhpcy5tb2RlbC50YXJnZXQ7XG4gIH1cblxuICBzZXQgdGFyZ2V0KHZhbHVlOiBWZWN0b3IpIHtcbiAgICB0aGlzLm1vZGVsLnRhcmdldCA9IHZhbHVlO1xuICAgIHRoaXMubW9kZWwuc3RhcnQgPSBuZXcgVmVjdG9yKHRoaXMucG9zaXRpb24sIHRoaXMucmFkaWFucyk7XG5cbiAgICBjb25zdCB7IHRhcmdldCB9ID0gdGhpcy5tb2RlbDtcbiAgICBjb25zdCB7IHBvc2l0aW9uLCBsZWdzIH0gPSB0aGlzLm1vZGVsLmxheW91dDtcbiAgICBjb25zdCBkZWx0YUFuZ2xlID0gdGFyZ2V0LmFuZ2xlIC0gcG9zaXRpb24uYW5nbGU7XG4gICAgY29uc3QgZGVsdGFEaXN0YW5jZSA9IFBvaW50LmRpc3RhbmNlKHRhcmdldC5wb2ludCwgcG9zaXRpb24ucG9pbnQpO1xuICAgIGNvbnN0IGxlZyA9IHRoaXMubW9kZWwubGVnc1t0aGlzLnN0ZXBdO1xuICAgIGNvbnN0IGxlZ0xheW91dCA9IGxlZ3NbdGhpcy5zdGVwXTtcbiAgICBjb25zdCByYWRpYW5zID0gZGVsdGFBbmdsZSArIGxlZ0xheW91dC5mb290LnJhZGlhbnM7XG4gICAgbGVnLnRhcmdldCA9IG5ldyBQb2ludChcbiAgICAgIE1hdGguY29zKGRlbHRhRGlzdGFuY2UpICogcmFkaWFucyArIHBvc2l0aW9uLnBvaW50LngsXG4gICAgICBNYXRoLnNpbihkZWx0YURpc3RhbmNlKSAqIHJhZGlhbnMgKyBwb3NpdGlvbi5wb2ludC55LFxuICAgICk7XG5cbiAgICB0aGlzLnByb2dyZXNzID0gMDtcbiAgfVxuXG4gIGdldCBsZWdzKCk6IExlZ0RhdGFbXSB7XG4gICAgcmV0dXJuIHRoaXMubW9kZWwubGVncy5tYXAobGVnID0+IGxlZy5kYXRhKTtcbiAgfVxuXG4gIGdldCBsYXlvdXQoKTogU2VnbWVudExheW91dCB7XG4gICAgY29uc3QgeyBwb3NpdGlvbiwgbGVncyB9ID0gdGhpcy5tb2RlbC5sYXlvdXQ7XG4gICAgcmV0dXJuIHtcbiAgICAgIHBvc2l0aW9uOiBwb3NpdGlvbi5jbG9uZSgpLFxuICAgICAgbGVnczogbGVncy5tYXAobGVnID0+ICh7XG4gICAgICAgIGpvaW50OiB7IGRpc3RhbmNlOiBsZWcuam9pbnQuZGlzdGFuY2UsIHJhZGlhbnM6IGxlZy5qb2ludC5yYWRpYW5zIH0sXG4gICAgICAgIGZvb3Q6IHsgZGlzdGFuY2U6IGxlZy5mb290LmRpc3RhbmNlLCByYWRpYW5zOiBsZWcuZm9vdC5yYWRpYW5zIH0sXG4gICAgICB9KSksXG4gICAgfTtcbiAgfVxuXG4gIHByaXZhdGUgd3JpdGVMYXlvdXQoKSB7XG4gICAgY29uc3QgeyBwb3NpdGlvbiwgcmFkaWFucywgbGVncyB9ID0gdGhpcy5tb2RlbDtcbiAgICB0aGlzLm1vZGVsLmxheW91dCA9IHtcbiAgICAgIHBvc2l0aW9uOiBuZXcgVmVjdG9yKHBvc2l0aW9uLCByYWRpYW5zKSxcbiAgICAgIGxlZ3M6IGxlZ3MubWFwKGxlZyA9PiB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgam9pbnQ6IHtcbiAgICAgICAgICAgIGRpc3RhbmNlOiBQb2ludC5kaXN0YW5jZShwb3NpdGlvbiwgbGVnLmpvaW50KSxcbiAgICAgICAgICAgIHJhZGlhbnM6IFBvaW50LnJhZGlhbnMocG9zaXRpb24sIGxlZy5qb2ludCksXG4gICAgICAgICAgfSxcbiAgICAgICAgICBmb290OiB7XG4gICAgICAgICAgICBkaXN0YW5jZTogUG9pbnQuZGlzdGFuY2UocG9zaXRpb24sIGxlZy5mb290KSxcbiAgICAgICAgICAgIHJhZGlhbnM6IFBvaW50LnJhZGlhbnMocG9zaXRpb24sIGxlZy5mb290KSxcbiAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICB9KSxcbiAgICB9O1xuICB9XG59XG5cbmZ1bmN0aW9uIGNvbnN0cmFpblN0ZXAodmFsdWU6IG51bWJlcik6IG51bWJlciB7XG4gIHJldHVybiBNYXRoLnJvdW5kKE1hdGgubWF4KDAsIE1hdGgubWluKDEsIHZhbHVlKSkpO1xufSJdLCJzb3VyY2VSb290IjoiIn0=