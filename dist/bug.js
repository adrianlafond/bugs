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
                segments: this.segments,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9CdWcvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL0J1Zy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9CdWcvLi9zcmMvYnVnLnRzIiwid2VicGFjazovL0J1Zy8uL3NyYy9nZW9tL2FuZ2xlLnRzIiwid2VicGFjazovL0J1Zy8uL3NyYy9nZW9tL3BvaW50LnRzIiwid2VicGFjazovL0J1Zy8uL3NyYy9nZW9tL3ZlY3Rvci50cyIsIndlYnBhY2s6Ly9CdWcvLi9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vQnVnLy4vc3JjL2xlZy50cyIsIndlYnBhY2s6Ly9CdWcvLi9zcmMvc2VnbWVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFD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Q29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShcIkJ1Z1wiLCBbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJCdWdcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiQnVnXCJdID0gZmFjdG9yeSgpO1xufSkod2luZG93LCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC50c1wiKTtcbiIsImltcG9ydCBTZWdtZW50LCB7IFNlZ21lbnREYXRhIH0gZnJvbSAnLi9zZWdtZW50JztcbmltcG9ydCBQb2ludCBmcm9tICcuL2dlb20vcG9pbnQnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEJ1Z01vZGVsIHtcbiAgaWQ6IHN0cmluZztcbiAgdGlja3M6IG51bWJlcjtcbiAgc2VnbWVudHM6IFNlZ21lbnRbXTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBCdWdPcHRpb25zIHtcbiAgeD86IG51bWJlcjtcbiAgeT86IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBCdWdEYXRhIHtcbiAgeDogbnVtYmVyO1xuICB5OiBudW1iZXI7XG4gIHJhZGlhbnM6IG51bWJlcjtcbiAgc2VnbWVudHM6IFNlZ21lbnREYXRhW107XG59XG5cbmNsYXNzIEJ1ZyB7XG4gIHByaXZhdGUgbW9kZWw6IEJ1Z01vZGVsO1xuXG4gIGNvbnN0cnVjdG9yKG9wdGlvbnM6IEJ1Z09wdGlvbnMgPSB7fSkge1xuICAgIGNvbnN0IHtcbiAgICAgIHggPSAwLFxuICAgICAgeSA9IDAsXG4gICAgfSA9IG9wdGlvbnM7XG4gICAgdGhpcy5tb2RlbCA9IHtcbiAgICAgIGlkOiBnZXRVaWQoKSxcbiAgICAgIHRpY2tzOiAwLFxuICAgICAgc2VnbWVudHM6IFtuZXcgU2VnbWVudCh7XG4gICAgICAgIHBvc2l0aW9uOiBuZXcgUG9pbnQoeCwgeSlcbiAgICAgIH0pXSxcbiAgICB9O1xuICB9XG5cbiAgZ2V0IGlkKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMubW9kZWwuaWQ7XG4gIH1cblxuICBnZXQgdGlja3MoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5tb2RlbC50aWNrcztcbiAgfVxuXG4gIGdldCBkYXRhKCk6IEJ1Z0RhdGEge1xuICAgIGNvbnN0IHNlZ21lbnQwID0gdGhpcy5zZWdtZW50c1swXTtcbiAgICBjb25zdCB7IHgsIHksIHJhZGlhbnMgfSA9IHNlZ21lbnQwO1xuICAgIHJldHVybiB7XG4gICAgICB4LFxuICAgICAgeSxcbiAgICAgIHJhZGlhbnMsXG4gICAgICBzZWdtZW50czogdGhpcy5zZWdtZW50cyxcbiAgICB9O1xuICB9XG5cbiAgZ2V0IHNlZ21lbnRzKCk6IFNlZ21lbnREYXRhW10ge1xuICAgIHJldHVybiB0aGlzLm1vZGVsLnNlZ21lbnRzLm1hcChzZWdtZW50ID0+IHNlZ21lbnQuZGF0YSk7XG4gIH1cblxuICB0aWNrKCkge1xuICAgICsrdGhpcy5tb2RlbC50aWNrcztcbiAgfVxufVxuXG5sZXQgdWlkOiBudW1iZXIgPSAwO1xuZnVuY3Rpb24gZ2V0VWlkKCk6IHN0cmluZyB7XG4gIHJldHVybiBgYnVnLSR7dWlkKyt9YDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQnVnO1xuIiwiZXhwb3J0IGZ1bmN0aW9uIGRlZ3JlZXNUb1JhZGlhbnModmFsdWU6IG51bWJlciA9IDApOiBudW1iZXIge1xuICByZXR1cm4gbm9ybWFsaXplUmFkaWFucyhNYXRoLlBJICogKHZhbHVlIC0gOTApIC8gMTgwKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJhZGlhbnNUb0RlZ3JlZXModmFsdWU6IG51bWJlciA9IDApOiBudW1iZXIge1xuICByZXR1cm4gbm9ybWFsaXplRGVncmVlcygodmFsdWUgKyBNYXRoLlBJIC8gMikgKiAxODAgLyBNYXRoLlBJKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5vcm1hbGl6ZVJhZGlhbnModmFsdWU6IG51bWJlciA9IDApOiBudW1iZXIge1xuICBjb25zdCBmdWxsUGkgPSBNYXRoLlBJICogMjtcbiAgcmV0dXJuIHNoYXZlKHZhbHVlID49IDAgPyB2YWx1ZSAlIGZ1bGxQaSA6ICh2YWx1ZSAlIGZ1bGxQaSkgKyBmdWxsUGkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbm9ybWFsaXplRGVncmVlcyh2YWx1ZTogbnVtYmVyID0gMCk6IG51bWJlciB7XG4gIHJldHVybiBzaGF2ZSh2YWx1ZSA+PSAwID8gdmFsdWUgJSAzNjAgOiAodmFsdWUgJSAzNjApICsgMzYwKTtcbn1cblxuZnVuY3Rpb24gc2hhdmUodmFsdWU6IG51bWJlcik6IG51bWJlciB7XG4gIGNvbnN0IHJvdW5kZWQgPSBNYXRoLnJvdW5kKHZhbHVlKTtcbiAgcmV0dXJuIE1hdGguYWJzKHJvdW5kZWQgLSB2YWx1ZSkgPCAwLjAwMDA1ID8gcm91bmRlZCA6IHZhbHVlO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEFuZ2xlTW9kZWwge1xuICBkZWdyZWVzPzogbnVtYmVyO1xuICByYWRpYW5zPzogbnVtYmVyO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBbmdsZSB7XG4gIHByaXZhdGUgbW9kZWw6IEFuZ2xlTW9kZWwgPSB7fTtcblxuICBjb25zdHJ1Y3Rvcih2YWx1ZTogbnVtYmVyID0gMCwgaXNSYWRpYW5zOiBib29sZWFuID0gZmFsc2UpIHtcbiAgICBpZiAoaXNSYWRpYW5zKSB7XG4gICAgICB0aGlzLnJhZGlhbnMgPSB2YWx1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5kZWdyZWVzID0gdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgZ2V0IGRlZ3JlZXMoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5tb2RlbC5kZWdyZWVzO1xuICB9XG5cbiAgc2V0IGRlZ3JlZXModmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMubW9kZWwuZGVncmVlcyA9IHZhbHVlO1xuICAgIHRoaXMubW9kZWwucmFkaWFucyA9IGRlZ3JlZXNUb1JhZGlhbnModmFsdWUpO1xuICB9XG5cbiAgZ2V0IHJhZGlhbnMoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5tb2RlbC5yYWRpYW5zO1xuICB9XG5cbiAgc2V0IHJhZGlhbnModmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMubW9kZWwucmFkaWFucyA9IHZhbHVlO1xuICAgIHRoaXMubW9kZWwuZGVncmVlcyA9IHJhZGlhbnNUb0RlZ3JlZXModmFsdWUpO1xuICB9XG59IiwiLyoqXG4gKlxuICovXG5leHBvcnQgaW50ZXJmYWNlIFBvaW50RGF0YSB7XG4gIHg6IG51bWJlcixcbiAgeTogbnVtYmVyLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG9pbnQge1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgeDogbnVtYmVyID0gMCwgcHVibGljIHk6IG51bWJlciA9IDApIHt9XG5cbiAgZ2V0IGRhdGEoKTogUG9pbnREYXRhIHtcbiAgICByZXR1cm4geyB4OiB0aGlzLngsIHk6IHRoaXMueSB9O1xuICB9XG5cbiAgY2xvbmUoKTogUG9pbnQge1xuICAgIHJldHVybiBuZXcgUG9pbnQodGhpcy54LCB0aGlzLnkpO1xuICB9XG5cbiAgYWRkKHBvaW50OiBQb2ludCk6IFBvaW50IHtcbiAgICB0aGlzLnggKz0gcG9pbnQueDtcbiAgICB0aGlzLnkgKz0gcG9pbnQueTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHN1YnRyYWN0KHBvaW50OiBQb2ludCk6IFBvaW50IHtcbiAgICB0aGlzLnggLT0gcG9pbnQueDtcbiAgICB0aGlzLnkgLT0gcG9pbnQueTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHRvU3RyaW5nKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHRoaXMuZGF0YSk7XG4gIH1cblxuICBzdGF0aWMgZGlzdGFuY2UocDE6IFBvaW50LCBwMjogUG9pbnQpOiBudW1iZXIge1xuICAgIHJldHVybiBNYXRoLnNxcnQoKHAxLnggLSBwMi54KSAqIChwMS54IC0gcDIueCkgKyAocDEueSAtIHAyLnkpICogKHAxLnkgLSBwMi55KSk7XG4gIH1cblxuICBzdGF0aWMgcmFkaWFucyhwMTogUG9pbnQsIHAyOiBQb2ludCk6IG51bWJlciB7XG4gICAgcmV0dXJuIE1hdGguYXRhbjIocDIueSAtIHAxLnksIHAyLnggLSBwMS54KTtcbiAgfVxufVxuIiwiaW1wb3J0IFBvaW50IGZyb20gJy4vcG9pbnQnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFZlY3Rvck1vZGVsIHtcbiAgcG9pbnQ/OiBQb2ludDtcbiAgYW5nbGU/OiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVmVjdG9yRGF0YSB7XG4gIHg6IG51bWJlcjtcbiAgeTogbnVtYmVyO1xuICBhbmdsZTogbnVtYmVyO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBWZWN0b3Ige1xuICBwcml2YXRlIG1vZGVsOiBWZWN0b3JNb2RlbCA9IHt9O1xuXG4gIGNvbnN0cnVjdG9yKHhfcG9pbnQ6IG51bWJlcnxQb2ludCA9IDAsIHlfcG9pbnQ6IG51bWJlciA9IDAsIGFuZ2xlOiBudW1iZXIgPSAwKSB7XG4gICAgaWYgKHhfcG9pbnQgaW5zdGFuY2VvZiBQb2ludCkge1xuICAgICAgdGhpcy5tb2RlbC5wb2ludCA9IHhfcG9pbnQuY2xvbmUoKTtcbiAgICAgIHRoaXMubW9kZWwuYW5nbGUgPSB5X3BvaW50O1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm1vZGVsLnBvaW50ID0gbmV3IFBvaW50KHhfcG9pbnQsIHlfcG9pbnQpO1xuICAgICAgdGhpcy5tb2RlbC5hbmdsZSA9IGFuZ2xlO1xuICAgIH1cbiAgfVxuXG4gIGdldCBwb2ludCgpOiBQb2ludCB7XG4gICAgcmV0dXJuIHRoaXMubW9kZWwucG9pbnQuY2xvbmUoKTtcbiAgfVxuXG4gIGdldCB4KCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMubW9kZWwucG9pbnQueDtcbiAgfVxuXG4gIGdldCB5KCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMubW9kZWwucG9pbnQueTtcbiAgfVxuXG4gIGdldCBhbmdsZSgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLm1vZGVsLmFuZ2xlO1xuICB9XG5cbiAgZ2V0IGRhdGEoKTogVmVjdG9yRGF0YSB7XG4gICAgY29uc3QgeyB4LCB5LCBhbmdsZSB9ID0gdGhpcztcbiAgICByZXR1cm4geyB4LCB5LCBhbmdsZSB9O1xuICB9XG5cbiAgY2xvbmUoKTogVmVjdG9yIHtcbiAgICByZXR1cm4gbmV3IFZlY3Rvcih0aGlzLnBvaW50LCB0aGlzLmFuZ2xlKTtcbiAgfVxuXG4gIHRvU3RyaW5nKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHRoaXMuZGF0YSk7XG4gIH1cbn0iLCJpbXBvcnQgQnVnIGZyb20gJy4vYnVnJztcblxuZXhwb3J0IGRlZmF1bHQgQnVnO1xuIiwiaW1wb3J0IFBvaW50LCB7IFBvaW50RGF0YSB9IGZyb20gJy4vZ2VvbS9wb2ludCc7XG5cbmV4cG9ydCBjb25zdCBNQVhJTVVNX0xFTkdUSDogbnVtYmVyID0gMjA7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTGVnT3B0aW9ucyB7XG4gIGpvaW50PzogUG9pbnQ7XG4gIGZvb3Q/OiBQb2ludDtcbiAgdGFyZ2V0PzogUG9pbnQ7XG4gIHByb2dyZXNzPzogbnVtYmVyO1xuICBtYXhMZW5ndGg/OiBudW1iZXI7XG4gIHBsYW50ZWQ/OiBib29sZWFuO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIExlZ01vZGVsIGV4dGVuZHMgTGVnT3B0aW9ucyB7XG4gIHJhZGlhbnM/OiBudW1iZXI7XG4gIHN0YXJ0PzogUG9pbnQ7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTGVnRGF0YSB7XG4gIGpvaW50OiBQb2ludERhdGEsXG4gIGZvb3Q6IFBvaW50RGF0YSxcbiAgcGxhbnRlZDogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGVnIHtcbiAgcHJpdmF0ZSBtb2RlbDogTGVnTW9kZWw7XG5cbiAgY29uc3RydWN0b3Iob3B0aW9uczogTGVnT3B0aW9ucyA9IHt9KSB7XG4gICAgY29uc3Qge1xuICAgICAgam9pbnQgPSBuZXcgUG9pbnQoMCwgMCksXG4gICAgICBmb290ID0gbmV3IFBvaW50KE1BWElNVU1fTEVOR1RIIC8gMiwgMCksXG4gICAgICB0YXJnZXQgPSBuZXcgUG9pbnQoKSxcbiAgICAgIHByb2dyZXNzID0gMCxcbiAgICAgIG1heExlbmd0aCA9IE1BWElNVU1fTEVOR1RILFxuICAgICAgcGxhbnRlZCA9IHRydWUsXG4gICAgfSA9IG9wdGlvbnM7XG4gICAgdGhpcy5tb2RlbCA9IHsgZm9vdCwgbWF4TGVuZ3RoLCBwbGFudGVkIH07XG4gICAgdGhpcy5qb2ludCA9IGpvaW50O1xuICAgIHRoaXMudGFyZ2V0ID0gdGFyZ2V0O1xuICAgIHRoaXMubW9kZWwucHJvZ3Jlc3MgPSBwcm9ncmVzcztcbiAgfVxuXG4gIGdldCBkYXRhKCk6IExlZ0RhdGEge1xuICAgIHJldHVybiB7XG4gICAgICBqb2ludDogdGhpcy5tb2RlbC5qb2ludC5kYXRhLFxuICAgICAgZm9vdDogdGhpcy5tb2RlbC5mb290LmRhdGEsXG4gICAgICBwbGFudGVkOiB0aGlzLm1vZGVsLnBsYW50ZWQsXG4gICAgfTtcbiAgfVxuXG4gIGdldCBqb2ludCgpOiBQb2ludCB7XG4gICAgcmV0dXJuIHRoaXMubW9kZWwuam9pbnQuY2xvbmUoKTtcbiAgfVxuXG4gIHNldCBqb2ludChwb2ludDogUG9pbnQpIHtcbiAgICB0aGlzLm1vZGVsLnJhZGlhbnMgPSBQb2ludC5yYWRpYW5zKG5ldyBQb2ludCgpLCBwb2ludCk7XG4gICAgdGhpcy5tb2RlbC5qb2ludCA9IHBvaW50LmNsb25lKCk7XG4gIH1cblxuICBnZXQgZm9vdCgpOiBQb2ludCB7XG4gICAgcmV0dXJuIHRoaXMubW9kZWwuZm9vdC5jbG9uZSgpO1xuICB9XG5cbiAgZ2V0IHN0YXJ0KCk6IFBvaW50IHtcbiAgICByZXR1cm4gdGhpcy5tb2RlbC5zdGFydC5jbG9uZSgpO1xuICB9XG5cbiAgZ2V0IHRhcmdldCgpOiBQb2ludCB7XG4gICAgcmV0dXJuIHRoaXMubW9kZWwudGFyZ2V0LmNsb25lKCk7XG4gIH1cblxuICBzZXQgdGFyZ2V0KHBvaW50OiBQb2ludCkge1xuICAgIGNvbnN0IHsgZm9vdCwgbWF4TGVuZ3RoIH0gPSB0aGlzLm1vZGVsO1xuICAgIGNvbnN0IGRpc3RhbmNlID0gUG9pbnQuZGlzdGFuY2UoZm9vdCwgcG9pbnQpO1xuICAgIGlmIChkaXN0YW5jZSA+IG1heExlbmd0aCkge1xuICAgICAgY29uc3QgcmFkaWFucyA9IFBvaW50LnJhZGlhbnMoZm9vdCwgcG9pbnQpO1xuICAgICAgdGhpcy5tb2RlbC50YXJnZXQgPSBuZXcgUG9pbnQoXG4gICAgICAgIGZvb3QueCArIE1hdGguY29zKHJhZGlhbnMpICogbWF4TGVuZ3RoLFxuICAgICAgICBmb290LnkgKyBNYXRoLnNpbihyYWRpYW5zKSAqIG1heExlbmd0aCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMubW9kZWwudGFyZ2V0ID0gcG9pbnQuY2xvbmUoKTtcbiAgICB9XG4gICAgdGhpcy5tb2RlbC5zdGFydCA9IHRoaXMubW9kZWwuZm9vdC5jbG9uZSgpO1xuICAgIHRoaXMubW9kZWwucHJvZ3Jlc3MgPSAwO1xuICB9XG5cbiAgZ2V0IG1heExlbmd0aCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLm1vZGVsLm1heExlbmd0aDtcbiAgfVxuXG4gIGdldCBwcm9ncmVzcygpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLm1vZGVsLnByb2dyZXNzO1xuICB9XG5cbiAgc2V0IHByb2dyZXNzKHZhbHVlOiBudW1iZXIpIHtcbiAgICBjb25zdCB7IGZvb3QsIHN0YXJ0LCB0YXJnZXQgfSA9IHRoaXMubW9kZWw7XG4gICAgY29uc3QgY29uc3RyYWluZWRWYWx1ZTogbnVtYmVyID0gTWF0aC5tYXgoMCwgTWF0aC5taW4oMS4wLCB2YWx1ZSkpO1xuICAgIGZvb3QueCA9ICh0YXJnZXQueCAtIHN0YXJ0LngpICogY29uc3RyYWluZWRWYWx1ZSArIHN0YXJ0Lng7XG4gICAgZm9vdC55ID0gKHRhcmdldC55IC0gc3RhcnQueSkgKiBjb25zdHJhaW5lZFZhbHVlICsgc3RhcnQueTtcbiAgICB0aGlzLm1vZGVsLnByb2dyZXNzID0gY29uc3RyYWluZWRWYWx1ZTtcbiAgfVxuXG4gIGdldCBwbGFudGVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLm1vZGVsLnBsYW50ZWQ7XG4gIH1cblxuICBzZXQgcGxhbnRlZCh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMubW9kZWwucGxhbnRlZCA9IHZhbHVlO1xuICB9XG5cbiAgZ2V0IHJhZGlhbnMoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5tb2RlbC5yYWRpYW5zO1xuICB9XG5cbiAgbW92ZUpvaW50KHBvaW50OiBQb2ludCwgcmFkaWFuczogbnVtYmVyKSB7XG4gICAgLy8gdGhpcy5tb2RlbC5qb2ludC5hZGQocG9pbnQpO1xuICAgIC8vIHRoaXMubW9kZWwucmFkaWFucyArPSByYWRpYW5zO1xuICAgIHRoaXMubW9kZWwuam9pbnQgPSBwb2ludC5jbG9uZSgpO1xuICAgIHRoaXMubW9kZWwucmFkaWFucyA9IHJhZGlhbnM7XG4gIH1cbn1cbiIsImltcG9ydCBQb2ludCBmcm9tICcuL2dlb20vcG9pbnQnO1xuaW1wb3J0IHtcbiAgZGVncmVlc1RvUmFkaWFucyxcbiAgbm9ybWFsaXplUmFkaWFucyxcbn0gZnJvbSAnLi9nZW9tL2FuZ2xlJztcbmltcG9ydCBMZWcsIHsgTGVnRGF0YSwgTUFYSU1VTV9MRU5HVEggfSBmcm9tICcuL2xlZyc7XG5pbXBvcnQgVmVjdG9yIGZyb20gJy4vZ2VvbS92ZWN0b3InO1xuXG5leHBvcnQgaW50ZXJmYWNlIFNlZ21lbnRPcHRpb25zIHtcbiAgcG9zaXRpb24/OiBQb2ludDtcbiAgcmFkaWFucz86IG51bWJlcjtcbiAgcHJvZ3Jlc3M/OiBudW1iZXI7XG4gIHN0ZXA/OiBudW1iZXI7XG4gIHRhcmdldD86IFZlY3RvcjtcbiAgbGVncz86IExlZ1tdO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIExlZ0xheW91dCB7XG4gIGpvaW50OiB7IGRpc3RhbmNlOiBudW1iZXIsIHJhZGlhbnM6IG51bWJlciB9O1xuICBmb290OiB7IGRpc3RhbmNlOiBudW1iZXIsIHJhZGlhbnM6IG51bWJlciB9O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFNlZ21lbnRMYXlvdXQge1xuICBwb3NpdGlvbjogVmVjdG9yO1xuICBsZWdzOiBMZWdMYXlvdXRbXTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTZWdtZW50TW9kZWwgZXh0ZW5kcyBTZWdtZW50T3B0aW9ucyB7XG4gIHN0YXJ0PzogVmVjdG9yO1xuICBsYXlvdXQ/OiBTZWdtZW50TGF5b3V0O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFNlZ21lbnREYXRhIHtcbiAgeDogbnVtYmVyO1xuICB5OiBudW1iZXI7XG4gIHJhZGlhbnM6IG51bWJlcjtcbiAgbGVnczogTGVnRGF0YVtdO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZWdtZW50IHtcbiAgcHJpdmF0ZSBtb2RlbDogU2VnbWVudE1vZGVsO1xuXG4gIGNvbnN0cnVjdG9yKG9wdGlvbnM6IFNlZ21lbnRPcHRpb25zID0ge30pIHtcbiAgICBjb25zdCB7XG4gICAgICBwb3NpdGlvbiA9IG5ldyBQb2ludCgpLFxuICAgICAgcmFkaWFucyA9IGRlZ3JlZXNUb1JhZGlhbnMoMCksXG4gICAgICBwcm9ncmVzcyA9IDAsXG4gICAgICBzdGVwID0gMCxcbiAgICAgIHRhcmdldCA9IG5ldyBWZWN0b3IoKSxcbiAgICAgIGxlZ3MgPSBbXSxcbiAgICB9ID0gb3B0aW9ucztcbiAgICBsZWdzWzBdID0gbGVnc1swXSB8fCBuZXcgTGVnKHtcbiAgICAgIGpvaW50OiBwb3NpdGlvbi5jbG9uZSgpLFxuICAgICAgZm9vdDogcG9zaXRpb24uY2xvbmUoKS5hZGQobmV3IFBvaW50KE1BWElNVU1fTEVOR1RIIC8gMiwgMCkpLFxuICAgIH0pO1xuICAgIGxlZ3NbMV0gPSBsZWdzWzFdIHx8IG5ldyBMZWcoe1xuICAgICAgam9pbnQ6IHBvc2l0aW9uLmNsb25lKCksXG4gICAgICBmb290OiBwb3NpdGlvbi5jbG9uZSgpLmFkZChuZXcgUG9pbnQoLU1BWElNVU1fTEVOR1RIIC8gMiwgMCkpLFxuICAgIH0pO1xuICAgIHRoaXMubW9kZWwgPSB7IHBvc2l0aW9uLCByYWRpYW5zLCBsZWdzIH07XG4gICAgdGhpcy53cml0ZUxheW91dCgpO1xuICAgIHRoaXMuc3RlcCA9IGNvbnN0cmFpblN0ZXAoc3RlcCk7XG4gICAgdGhpcy50YXJnZXQgPSB0YXJnZXQ7XG4gICAgdGhpcy5wcm9ncmVzcyA9IHByb2dyZXNzO1xuICB9XG5cbiAgZ2V0IGRhdGEoKTogU2VnbWVudERhdGEge1xuICAgIGNvbnN0IHsgeCwgeSB9ID0gdGhpcy5wb3NpdGlvbjtcbiAgICBjb25zdCB7IHJhZGlhbnMsIGxlZ3MgfSA9IHRoaXM7XG4gICAgcmV0dXJuIHtcbiAgICAgIHgsIHksIHJhZGlhbnMsIGxlZ3NcbiAgICB9O1xuICB9XG5cbiAgZ2V0IHBvc2l0aW9uKCk6IFBvaW50IHtcbiAgICByZXR1cm4gdGhpcy5tb2RlbC5wb3NpdGlvbi5jbG9uZSgpO1xuICB9XG5cbiAgZ2V0IHJhZGlhbnMoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5tb2RlbC5yYWRpYW5zO1xuICB9XG5cbiAgZ2V0IHByb2dyZXNzKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMubW9kZWwucHJvZ3Jlc3M7XG4gIH1cblxuICBzZXQgcHJvZ3Jlc3ModmFsdWU6IG51bWJlcikge1xuICAgIGNvbnN0IHByb2dyZXNzID0gTWF0aC5tYXgoMCwgTWF0aC5taW4oMS4wLCB2YWx1ZSkpO1xuICAgIHRoaXMubW92ZVNlZ21lbnQocHJvZ3Jlc3MpO1xuICAgIHRoaXMubW92ZUpvaW50cygpO1xuICAgIHRoaXMubW92ZUZlZXQocHJvZ3Jlc3MpO1xuICAgIHRoaXMudXBkYXRlUHJvZ3Jlc3MocHJvZ3Jlc3MpO1xuICB9XG5cbiAgcHJpdmF0ZSBtb3ZlU2VnbWVudChwcm9ncmVzczogbnVtYmVyKSB7XG4gICAgY29uc3QgeyBwb3NpdGlvbiwgdGFyZ2V0LCBzdGFydCB9ID0gdGhpcy5tb2RlbDtcbiAgICBwb3NpdGlvbi54ID0gKHRhcmdldC54IC0gc3RhcnQueCkgKiBwcm9ncmVzcyArIHN0YXJ0Lng7XG4gICAgcG9zaXRpb24ueSA9ICh0YXJnZXQueSAtIHN0YXJ0LnkpICogcHJvZ3Jlc3MgKyBzdGFydC55O1xuICAgIHRoaXMubW9kZWwucmFkaWFucyA9IG5vcm1hbGl6ZVJhZGlhbnMoKHRhcmdldC5hbmdsZSAtIHN0YXJ0LmFuZ2xlKVxuICAgICAgKiBwcm9ncmVzcyArIHN0YXJ0LmFuZ2xlKTtcbiAgfVxuXG4gIHByaXZhdGUgbW92ZUpvaW50cygpIHtcbiAgICBjb25zdCB7IGxheW91dCwgcG9zaXRpb24sIHJhZGlhbnMgfSA9IHRoaXMubW9kZWw7XG4gICAgY29uc3Qgam9pbnRMYXlvdXQgPSBsYXlvdXQubGVnc1t0aGlzLnN0ZXBdLmpvaW50O1xuICAgIGNvbnN0IGpvaW50UmFkaWFucyA9IGpvaW50TGF5b3V0LnJhZGlhbnMgKyByYWRpYW5zO1xuICAgIGNvbnN0IGpvaW50UG9pbnQgPSBuZXcgUG9pbnQoXG4gICAgICBNYXRoLmNvcyhqb2ludFJhZGlhbnMpICogam9pbnRMYXlvdXQuZGlzdGFuY2UgKyBwb3NpdGlvbi54LFxuICAgICAgTWF0aC5zaW4oam9pbnRSYWRpYW5zKSAqIGpvaW50TGF5b3V0LmRpc3RhbmNlICsgcG9zaXRpb24ueSxcbiAgICApO1xuICAgIHRoaXMubW9kZWwubGVnc1t0aGlzLnN0ZXBdLm1vdmVKb2ludChqb2ludFBvaW50LCBqb2ludFJhZGlhbnMpO1xuICB9XG5cbiAgcHJpdmF0ZSBtb3ZlRmVldChwcm9ncmVzczogbnVtYmVyKSB7XG4gICAgdGhpcy5tb2RlbC5sZWdzW3RoaXMuc3RlcF0ucHJvZ3Jlc3MgPSBwcm9ncmVzcztcbiAgfVxuXG4gIHByaXZhdGUgdXBkYXRlUHJvZ3Jlc3MocHJvZ3Jlc3M6IG51bWJlcikge1xuICAgIGNvbnN0IHsgcHJvZ3Jlc3M6IHByZXZQcm9ncmVzcyB9ID0gdGhpcy5tb2RlbDtcbiAgICB0aGlzLm1vZGVsLnByb2dyZXNzID0gcHJvZ3Jlc3M7XG4gICAgaWYgKChwcmV2UHJvZ3Jlc3MgIT09IDEgJiYgcHJvZ3Jlc3MgPT09IDEpIHx8XG4gICAgICAgIChwcmV2UHJvZ3Jlc3MgIT09IDAgJiYgcHJvZ3Jlc3MgPT09IDApKSB7XG4gICAgICB0aGlzLm1vZGVsLnN0ZXAgPSB0aGlzLm1vZGVsLnN0ZXAgPT09IDEgPyAwIDogMTtcbiAgICB9XG4gIH1cblxuICBnZXQgc3RlcCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLm1vZGVsLnN0ZXA7XG4gIH1cblxuICBzZXQgc3RlcCh2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5sZWdzW3RoaXMuc3RlcCB8fCAwXS5wbGFudGVkID0gdHJ1ZTtcbiAgICB0aGlzLm1vZGVsLnN0ZXAgPSBjb25zdHJhaW5TdGVwKHZhbHVlKTtcbiAgICB0aGlzLmxlZ3NbdGhpcy5zdGVwXS5wbGFudGVkID0gZmFsc2U7XG4gICAgdGhpcy5tb2RlbC5wcm9ncmVzcyA9IDA7XG4gIH1cblxuICBnZXQgdGFyZ2V0KCk6IFZlY3RvciB7XG4gICAgcmV0dXJuIHRoaXMubW9kZWwudGFyZ2V0O1xuICB9XG5cbiAgc2V0IHRhcmdldCh2YWx1ZTogVmVjdG9yKSB7XG4gICAgdGhpcy5tb2RlbC50YXJnZXQgPSB2YWx1ZTtcbiAgICB0aGlzLm1vZGVsLnN0YXJ0ID0gbmV3IFZlY3Rvcih0aGlzLnBvc2l0aW9uLCB0aGlzLnJhZGlhbnMpO1xuXG4gICAgY29uc3QgeyB0YXJnZXQgfSA9IHRoaXMubW9kZWw7XG4gICAgY29uc3QgeyBwb3NpdGlvbiwgbGVncyB9ID0gdGhpcy5tb2RlbC5sYXlvdXQ7XG4gICAgY29uc3QgZGVsdGFBbmdsZSA9IHRhcmdldC5hbmdsZSAtIHBvc2l0aW9uLmFuZ2xlO1xuICAgIGNvbnN0IGRlbHRhRGlzdGFuY2UgPSBQb2ludC5kaXN0YW5jZSh0YXJnZXQucG9pbnQsIHBvc2l0aW9uLnBvaW50KTtcbiAgICBjb25zdCBsZWcgPSB0aGlzLm1vZGVsLmxlZ3NbdGhpcy5zdGVwXTtcbiAgICBjb25zdCBsZWdMYXlvdXQgPSBsZWdzW3RoaXMuc3RlcF07XG4gICAgY29uc3QgcmFkaWFucyA9IGRlbHRhQW5nbGUgKyBsZWdMYXlvdXQuZm9vdC5yYWRpYW5zO1xuICAgIGxlZy50YXJnZXQgPSBuZXcgUG9pbnQoXG4gICAgICBNYXRoLmNvcyhkZWx0YURpc3RhbmNlKSAqIHJhZGlhbnMgKyBwb3NpdGlvbi5wb2ludC54LFxuICAgICAgTWF0aC5zaW4oZGVsdGFEaXN0YW5jZSkgKiByYWRpYW5zICsgcG9zaXRpb24ucG9pbnQueSxcbiAgICApO1xuXG4gICAgdGhpcy5wcm9ncmVzcyA9IDA7XG4gIH1cblxuICBnZXQgbGVncygpOiBMZWdEYXRhW10ge1xuICAgIHJldHVybiB0aGlzLm1vZGVsLmxlZ3MubWFwKGxlZyA9PiBsZWcuZGF0YSk7XG4gIH1cblxuICBnZXQgbGF5b3V0KCk6IFNlZ21lbnRMYXlvdXQge1xuICAgIGNvbnN0IHsgcG9zaXRpb24sIGxlZ3MgfSA9IHRoaXMubW9kZWwubGF5b3V0O1xuICAgIHJldHVybiB7XG4gICAgICBwb3NpdGlvbjogcG9zaXRpb24uY2xvbmUoKSxcbiAgICAgIGxlZ3M6IGxlZ3MubWFwKGxlZyA9PiAoe1xuICAgICAgICBqb2ludDogeyBkaXN0YW5jZTogbGVnLmpvaW50LmRpc3RhbmNlLCByYWRpYW5zOiBsZWcuam9pbnQucmFkaWFucyB9LFxuICAgICAgICBmb290OiB7IGRpc3RhbmNlOiBsZWcuZm9vdC5kaXN0YW5jZSwgcmFkaWFuczogbGVnLmZvb3QucmFkaWFucyB9LFxuICAgICAgfSkpLFxuICAgIH07XG4gIH1cblxuICBwcml2YXRlIHdyaXRlTGF5b3V0KCkge1xuICAgIGNvbnN0IHsgcG9zaXRpb24sIHJhZGlhbnMsIGxlZ3MgfSA9IHRoaXMubW9kZWw7XG4gICAgdGhpcy5tb2RlbC5sYXlvdXQgPSB7XG4gICAgICBwb3NpdGlvbjogbmV3IFZlY3Rvcihwb3NpdGlvbiwgcmFkaWFucyksXG4gICAgICBsZWdzOiBsZWdzLm1hcChsZWcgPT4ge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGpvaW50OiB7XG4gICAgICAgICAgICBkaXN0YW5jZTogUG9pbnQuZGlzdGFuY2UocG9zaXRpb24sIGxlZy5qb2ludCksXG4gICAgICAgICAgICByYWRpYW5zOiBQb2ludC5yYWRpYW5zKHBvc2l0aW9uLCBsZWcuam9pbnQpLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgZm9vdDoge1xuICAgICAgICAgICAgZGlzdGFuY2U6IFBvaW50LmRpc3RhbmNlKHBvc2l0aW9uLCBsZWcuZm9vdCksXG4gICAgICAgICAgICByYWRpYW5zOiBQb2ludC5yYWRpYW5zKHBvc2l0aW9uLCBsZWcuZm9vdCksXG4gICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgfSksXG4gICAgfTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjb25zdHJhaW5TdGVwKHZhbHVlOiBudW1iZXIpOiBudW1iZXIge1xuICByZXR1cm4gTWF0aC5yb3VuZChNYXRoLm1heCgwLCBNYXRoLm1pbigxLCB2YWx1ZSkpKTtcbn0iXSwic291cmNlUm9vdCI6IiJ9