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
var vector_1 = __webpack_require__(/*! ./geom/vector */ "./src/geom/vector.ts");
var Bug = /** @class */ (function () {
    function Bug(options) {
        if (options === void 0) { options = {}; }
        var _a = options.x, x = _a === void 0 ? 0 : _a, _b = options.y, y = _b === void 0 ? 0 : _b;
        var position = new point_1.default(x, y);
        this.model = {
            id: getUid(),
            ticks: 0,
            progress: 0,
            segments: [new segment_1.default({ position: position })],
            target: Object.assign(position.data, { distance: 0 }),
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
            var segment0 = this.model.segments[0].data;
            var x = segment0.x, y = segment0.y, radians = segment0.radians;
            return {
                x: x,
                y: y,
                radians: radians,
                segments: this.model.segments.map(function (s) {
                    var data = s.data;
                    return {
                        x: data.x - x,
                        y: data.y - y,
                        radians: data.radians,
                        legs: data.legs.map(function (leg) { return ({
                            joint: { x: leg.joint.x - x, y: leg.joint.y - y },
                            foot: { x: leg.foot.x - x, y: leg.foot.y - y },
                            planted: leg.planted,
                        }); }),
                    };
                }),
            };
        },
        enumerable: true,
        configurable: true
    });
    Bug.prototype.tick = function (deltaTime) {
        if (deltaTime === void 0) { deltaTime = 1; }
        ++this.model.ticks;
        this.updateProgress();
        this.model.segments[0].progress = this.model.progress;
    };
    Bug.prototype.getTarget = function () {
        var _a = this.model.target, x = _a.x, y = _a.y, distance = _a.distance;
        return { x: x, y: y, distance: distance };
    };
    Bug.prototype.setTarget = function (x, y, distance) {
        if (x === void 0) { x = 0; }
        if (y === void 0) { y = 0; }
        if (distance === void 0) { distance = 0; }
        this.model.target = { x: x, y: y, distance: distance };
        this.updateSegmentsTargets();
    };
    Bug.prototype.updateProgress = function () {
        var p = this.model.progress;
        p = p === 1 ? 0 : Math.min(1, p + 0.01);
        if (this.model.progress !== 0 && p === 0) {
            this.updateSegmentsTargets();
        }
        this.model.progress = p;
    };
    Bug.prototype.updateSegmentsTargets = function () {
        var _a = this.model.target, x = _a.x, y = _a.y;
        var data = this.model.segments[0].data;
        var position = new point_1.default(data.x, data.y);
        var targetPosition = new point_1.default(x, y);
        var targetRadians = point_1.default.radians(position, targetPosition);
        var targetDistance = point_1.default.distance(position, targetPosition);
        this.model.segments[0].target = new vector_1.default(position.x + 5, position.y + 5, targetRadians);
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
    return normalizeRadians(Math.PI * value / 180);
}
exports.degreesToRadians = degreesToRadians;
function radiansToDegrees(value) {
    if (value === void 0) { value = 0; }
    return normalizeDegrees(value * 180 / Math.PI);
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
        var _a = options.position, position = _a === void 0 ? new point_1.default() : _a, _b = options.radians, radians = _b === void 0 ? -Math.PI / 2 : _b, _c = options.progress, progress = _c === void 0 ? 0 : _c, _d = options.step, step = _d === void 0 ? 0 : _d, _e = options.target, target = _e === void 0 ? new vector_1.default() : _e, _f = options.legs, legs = _f === void 0 ? [] : _f;
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
            // this.moveFeet(progress);
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
        var _this = this;
        var _a = this.model, layout = _a.layout, position = _a.position, radians = _a.radians;
        layout.legs.forEach(function (leg, index) {
            var jointLayout = layout.legs[index].joint;
            var jointRadians = jointLayout.radians + radians;
            var jointPoint = new point_1.default(Math.cos(jointRadians) * jointLayout.distance + position.x, Math.sin(jointRadians) * jointLayout.distance + position.y);
            _this.model.legs[index].moveJoint(jointPoint, jointRadians);
        });
    };
    Segment.prototype.moveFeet = function (progress) {
        this.model.legs[this.step].progress = progress;
    };
    Segment.prototype.updateProgress = function (progress) {
        var prevProgress = this.model.progress;
        this.model.progress = progress;
        if (prevProgress < 1 && progress >= 1) {
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
            var deltaAngle = angle_1.normalizeRadians(target.angle - position.angle);
            var deltaDistance = point_1.default.distance(target.point, position.point);
            var leg = this.model.legs[this.step];
            var legLayout = legs[this.step];
            var radians = angle_1.normalizeRadians(legLayout.foot.radians + deltaAngle);
            leg.target = new point_1.default(Math.cos(legLayout.foot.distance) * radians + target.point.x, Math.sin(legLayout.foot.distance) * radians + target.point.y);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9CdWcvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL0J1Zy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9CdWcvLi9zcmMvYnVnLnRzIiwid2VicGFjazovL0J1Zy8uL3NyYy9nZW9tL2FuZ2xlLnRzIiwid2VicGFjazovL0J1Zy8uL3NyYy9nZW9tL3BvaW50LnRzIiwid2VicGFjazovL0J1Zy8uL3NyYy9nZW9tL3ZlY3Rvci50cyIsIndlYnBhY2s6Ly9CdWcvLi9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vQnVnLy4vc3JjL2xlZy50cyIsIndlYnBhY2s6Ly9CdWcvLi9zcmMvc2VnbWVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFD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QUVELFNBQVMsYUFBYSxDQUFDLEtBQWE7SUFDbEMsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNyRCxDQUFDIiwiZmlsZSI6ImJ1Zy5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFwiQnVnXCIsIFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIkJ1Z1wiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJCdWdcIl0gPSBmYWN0b3J5KCk7XG59KSh3aW5kb3csIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LnRzXCIpO1xuIiwiaW1wb3J0IFNlZ21lbnQsIHsgU2VnbWVudERhdGEgfSBmcm9tICcuL3NlZ21lbnQnO1xuaW1wb3J0IFBvaW50LCB7IFBvaW50RGF0YSB9IGZyb20gJy4vZ2VvbS9wb2ludCc7XG5pbXBvcnQgVmVjdG9yIGZyb20gJy4vZ2VvbS92ZWN0b3InO1xuXG5leHBvcnQgaW50ZXJmYWNlIEJ1Z1RhcmdldCB7XG4gIHg6IG51bWJlcjtcbiAgeTogbnVtYmVyO1xuICBkaXN0YW5jZTogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEJ1Z01vZGVsIHtcbiAgaWQ6IHN0cmluZztcbiAgdGlja3M6IG51bWJlcjtcbiAgcHJvZ3Jlc3M6IG51bWJlcjtcbiAgc2VnbWVudHM6IFNlZ21lbnRbXTtcbiAgdGFyZ2V0OiBCdWdUYXJnZXQ7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQnVnT3B0aW9ucyB7XG4gIHg/OiBudW1iZXI7XG4gIHk/OiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQnVnRGF0YSB7XG4gIHg6IG51bWJlcjtcbiAgeTogbnVtYmVyO1xuICByYWRpYW5zOiBudW1iZXI7XG4gIHNlZ21lbnRzOiBTZWdtZW50RGF0YVtdO1xufVxuXG5jbGFzcyBCdWcge1xuICBwcml2YXRlIG1vZGVsOiBCdWdNb2RlbDtcblxuICBjb25zdHJ1Y3RvcihvcHRpb25zOiBCdWdPcHRpb25zID0ge30pIHtcbiAgICBjb25zdCB7XG4gICAgICB4ID0gMCxcbiAgICAgIHkgPSAwLFxuICAgIH0gPSBvcHRpb25zO1xuICAgIGNvbnN0IHBvc2l0aW9uID0gbmV3IFBvaW50KHgsIHkpO1xuICAgIHRoaXMubW9kZWwgPSB7XG4gICAgICBpZDogZ2V0VWlkKCksXG4gICAgICB0aWNrczogMCxcbiAgICAgIHByb2dyZXNzOiAwLFxuICAgICAgc2VnbWVudHM6IFtuZXcgU2VnbWVudCh7IHBvc2l0aW9uIH0pXSxcbiAgICAgIHRhcmdldDogT2JqZWN0LmFzc2lnbihwb3NpdGlvbi5kYXRhLCB7IGRpc3RhbmNlOiAwIH0pLFxuICAgIH07XG4gIH1cblxuICBnZXQgaWQoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5tb2RlbC5pZDtcbiAgfVxuXG4gIGdldCB0aWNrcygpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLm1vZGVsLnRpY2tzO1xuICB9XG5cbiAgZ2V0IGRhdGEoKTogQnVnRGF0YSB7XG4gICAgY29uc3Qgc2VnbWVudDAgPSB0aGlzLm1vZGVsLnNlZ21lbnRzWzBdLmRhdGE7XG4gICAgY29uc3QgeyB4LCB5LCByYWRpYW5zIH0gPSBzZWdtZW50MDtcbiAgICByZXR1cm4ge1xuICAgICAgeCxcbiAgICAgIHksXG4gICAgICByYWRpYW5zLFxuICAgICAgc2VnbWVudHM6IHRoaXMubW9kZWwuc2VnbWVudHMubWFwKHMgPT4ge1xuICAgICAgICBjb25zdCBkYXRhID0gcy5kYXRhO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHg6IGRhdGEueCAtIHgsXG4gICAgICAgICAgeTogZGF0YS55IC0geSxcbiAgICAgICAgICByYWRpYW5zOiBkYXRhLnJhZGlhbnMsXG4gICAgICAgICAgbGVnczogZGF0YS5sZWdzLm1hcChsZWcgPT4gKHtcbiAgICAgICAgICAgIGpvaW50OiB7IHg6IGxlZy5qb2ludC54IC0geCwgeTogbGVnLmpvaW50LnkgLSB5IH0sXG4gICAgICAgICAgICBmb290OiB7IHg6IGxlZy5mb290LnggLSB4LCB5OiBsZWcuZm9vdC55IC0geSB9LFxuICAgICAgICAgICAgcGxhbnRlZDogbGVnLnBsYW50ZWQsXG4gICAgICAgICAgfSkpLFxuICAgICAgICB9O1xuICAgICAgfSksXG4gICAgfTtcbiAgfVxuXG4gIHRpY2soZGVsdGFUaW1lOiBudW1iZXIgPSAxKSB7XG4gICAgKyt0aGlzLm1vZGVsLnRpY2tzO1xuICAgIHRoaXMudXBkYXRlUHJvZ3Jlc3MoKTtcbiAgICB0aGlzLm1vZGVsLnNlZ21lbnRzWzBdLnByb2dyZXNzID0gdGhpcy5tb2RlbC5wcm9ncmVzcztcbiAgfVxuXG4gIGdldFRhcmdldCgpOiBCdWdUYXJnZXQge1xuICAgIGNvbnN0IHsgeCwgeSwgZGlzdGFuY2UgfSA9IHRoaXMubW9kZWwudGFyZ2V0O1xuICAgIHJldHVybiB7IHgsIHksIGRpc3RhbmNlIH07XG4gIH1cblxuICBzZXRUYXJnZXQoeDogbnVtYmVyID0gMCwgeTogbnVtYmVyID0gMCwgZGlzdGFuY2UgPSAwKSB7XG4gICAgdGhpcy5tb2RlbC50YXJnZXQgPSB7IHgsIHksIGRpc3RhbmNlIH07XG4gICAgdGhpcy51cGRhdGVTZWdtZW50c1RhcmdldHMoKTtcbiAgfVxuXG4gIHByaXZhdGUgdXBkYXRlUHJvZ3Jlc3MoKSB7XG4gICAgbGV0IHAgPSB0aGlzLm1vZGVsLnByb2dyZXNzO1xuICAgIHAgPSBwID09PSAxID8gMCA6IE1hdGgubWluKDEsIHAgKyAwLjAxKTtcbiAgICBpZiAodGhpcy5tb2RlbC5wcm9ncmVzcyAhPT0gMCAmJiBwID09PSAwKSB7XG4gICAgICB0aGlzLnVwZGF0ZVNlZ21lbnRzVGFyZ2V0cygpO1xuICAgIH1cbiAgICB0aGlzLm1vZGVsLnByb2dyZXNzID0gcDtcbiAgfVxuXG4gIHByaXZhdGUgdXBkYXRlU2VnbWVudHNUYXJnZXRzKCkge1xuICAgIGNvbnN0IHsgeCwgeSB9ID0gdGhpcy5tb2RlbC50YXJnZXQ7XG4gICAgY29uc3QgZGF0YSA9IHRoaXMubW9kZWwuc2VnbWVudHNbMF0uZGF0YTtcbiAgICBjb25zdCBwb3NpdGlvbiA9IG5ldyBQb2ludChkYXRhLngsIGRhdGEueSk7XG4gICAgY29uc3QgdGFyZ2V0UG9zaXRpb24gPSBuZXcgUG9pbnQoeCwgeSk7XG4gICAgY29uc3QgdGFyZ2V0UmFkaWFucyA9IFBvaW50LnJhZGlhbnMocG9zaXRpb24sIHRhcmdldFBvc2l0aW9uKTtcbiAgICBjb25zdCB0YXJnZXREaXN0YW5jZSA9IFBvaW50LmRpc3RhbmNlKHBvc2l0aW9uLCB0YXJnZXRQb3NpdGlvbik7XG4gICAgdGhpcy5tb2RlbC5zZWdtZW50c1swXS50YXJnZXQgPSBuZXcgVmVjdG9yKHBvc2l0aW9uLnggKyA1LCBwb3NpdGlvbi55ICsgNSwgdGFyZ2V0UmFkaWFucyk7XG4gIH1cbn1cblxubGV0IHVpZDogbnVtYmVyID0gMDtcbmZ1bmN0aW9uIGdldFVpZCgpOiBzdHJpbmcge1xuICByZXR1cm4gYGJ1Zy0ke3VpZCsrfWA7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEJ1ZztcbiIsImV4cG9ydCBmdW5jdGlvbiBkZWdyZWVzVG9SYWRpYW5zKHZhbHVlOiBudW1iZXIgPSAwKTogbnVtYmVyIHtcbiAgcmV0dXJuIG5vcm1hbGl6ZVJhZGlhbnMoTWF0aC5QSSAqIHZhbHVlIC8gMTgwKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJhZGlhbnNUb0RlZ3JlZXModmFsdWU6IG51bWJlciA9IDApOiBudW1iZXIge1xuICByZXR1cm4gbm9ybWFsaXplRGVncmVlcyh2YWx1ZSAqIDE4MCAvIE1hdGguUEkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbm9ybWFsaXplUmFkaWFucyh2YWx1ZTogbnVtYmVyID0gMCk6IG51bWJlciB7XG4gIGNvbnN0IGZ1bGxQaSA9IE1hdGguUEkgKiAyO1xuICByZXR1cm4gc2hhdmUodmFsdWUgPj0gMCA/IHZhbHVlICUgZnVsbFBpIDogKHZhbHVlICUgZnVsbFBpKSArIGZ1bGxQaSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBub3JtYWxpemVEZWdyZWVzKHZhbHVlOiBudW1iZXIgPSAwKTogbnVtYmVyIHtcbiAgcmV0dXJuIHNoYXZlKHZhbHVlID49IDAgPyB2YWx1ZSAlIDM2MCA6ICh2YWx1ZSAlIDM2MCkgKyAzNjApO1xufVxuXG5mdW5jdGlvbiBzaGF2ZSh2YWx1ZTogbnVtYmVyKTogbnVtYmVyIHtcbiAgY29uc3Qgcm91bmRlZCA9IE1hdGgucm91bmQodmFsdWUpO1xuICByZXR1cm4gTWF0aC5hYnMocm91bmRlZCAtIHZhbHVlKSA8IDAuMDAwMDUgPyByb3VuZGVkIDogdmFsdWU7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQW5nbGVNb2RlbCB7XG4gIGRlZ3JlZXM/OiBudW1iZXI7XG4gIHJhZGlhbnM/OiBudW1iZXI7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFuZ2xlIHtcbiAgcHJpdmF0ZSBtb2RlbDogQW5nbGVNb2RlbCA9IHt9O1xuXG4gIGNvbnN0cnVjdG9yKHZhbHVlOiBudW1iZXIgPSAwLCBpc1JhZGlhbnM6IGJvb2xlYW4gPSBmYWxzZSkge1xuICAgIGlmIChpc1JhZGlhbnMpIHtcbiAgICAgIHRoaXMucmFkaWFucyA9IHZhbHVlO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmRlZ3JlZXMgPSB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICBnZXQgZGVncmVlcygpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLm1vZGVsLmRlZ3JlZXM7XG4gIH1cblxuICBzZXQgZGVncmVlcyh2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5tb2RlbC5kZWdyZWVzID0gdmFsdWU7XG4gICAgdGhpcy5tb2RlbC5yYWRpYW5zID0gZGVncmVlc1RvUmFkaWFucyh2YWx1ZSk7XG4gIH1cblxuICBnZXQgcmFkaWFucygpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLm1vZGVsLnJhZGlhbnM7XG4gIH1cblxuICBzZXQgcmFkaWFucyh2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5tb2RlbC5yYWRpYW5zID0gdmFsdWU7XG4gICAgdGhpcy5tb2RlbC5kZWdyZWVzID0gcmFkaWFuc1RvRGVncmVlcyh2YWx1ZSk7XG4gIH1cbn0iLCIvKipcbiAqXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgUG9pbnREYXRhIHtcbiAgeDogbnVtYmVyLFxuICB5OiBudW1iZXIsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQb2ludCB7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyB4OiBudW1iZXIgPSAwLCBwdWJsaWMgeTogbnVtYmVyID0gMCkge31cblxuICBnZXQgZGF0YSgpOiBQb2ludERhdGEge1xuICAgIHJldHVybiB7IHg6IHRoaXMueCwgeTogdGhpcy55IH07XG4gIH1cblxuICBjbG9uZSgpOiBQb2ludCB7XG4gICAgcmV0dXJuIG5ldyBQb2ludCh0aGlzLngsIHRoaXMueSk7XG4gIH1cblxuICBhZGQocG9pbnQ6IFBvaW50KTogUG9pbnQge1xuICAgIHRoaXMueCArPSBwb2ludC54O1xuICAgIHRoaXMueSArPSBwb2ludC55O1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgc3VidHJhY3QocG9pbnQ6IFBvaW50KTogUG9pbnQge1xuICAgIHRoaXMueCAtPSBwb2ludC54O1xuICAgIHRoaXMueSAtPSBwb2ludC55O1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgdG9TdHJpbmcoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkodGhpcy5kYXRhKTtcbiAgfVxuXG4gIHN0YXRpYyBkaXN0YW5jZShwMTogUG9pbnQsIHAyOiBQb2ludCk6IG51bWJlciB7XG4gICAgcmV0dXJuIE1hdGguc3FydCgocDEueCAtIHAyLngpICogKHAxLnggLSBwMi54KSArIChwMS55IC0gcDIueSkgKiAocDEueSAtIHAyLnkpKTtcbiAgfVxuXG4gIHN0YXRpYyByYWRpYW5zKHAxOiBQb2ludCwgcDI6IFBvaW50KTogbnVtYmVyIHtcbiAgICByZXR1cm4gTWF0aC5hdGFuMihwMi55IC0gcDEueSwgcDIueCAtIHAxLngpO1xuICB9XG59XG4iLCJpbXBvcnQgUG9pbnQgZnJvbSAnLi9wb2ludCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgVmVjdG9yTW9kZWwge1xuICBwb2ludD86IFBvaW50O1xuICBhbmdsZT86IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBWZWN0b3JEYXRhIHtcbiAgeDogbnVtYmVyO1xuICB5OiBudW1iZXI7XG4gIGFuZ2xlOiBudW1iZXI7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFZlY3RvciB7XG4gIHByaXZhdGUgbW9kZWw6IFZlY3Rvck1vZGVsID0ge307XG5cbiAgY29uc3RydWN0b3IoeF9wb2ludDogbnVtYmVyfFBvaW50ID0gMCwgeV9wb2ludDogbnVtYmVyID0gMCwgYW5nbGU6IG51bWJlciA9IDApIHtcbiAgICBpZiAoeF9wb2ludCBpbnN0YW5jZW9mIFBvaW50KSB7XG4gICAgICB0aGlzLm1vZGVsLnBvaW50ID0geF9wb2ludC5jbG9uZSgpO1xuICAgICAgdGhpcy5tb2RlbC5hbmdsZSA9IHlfcG9pbnQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMubW9kZWwucG9pbnQgPSBuZXcgUG9pbnQoeF9wb2ludCwgeV9wb2ludCk7XG4gICAgICB0aGlzLm1vZGVsLmFuZ2xlID0gYW5nbGU7XG4gICAgfVxuICB9XG5cbiAgZ2V0IHBvaW50KCk6IFBvaW50IHtcbiAgICByZXR1cm4gdGhpcy5tb2RlbC5wb2ludC5jbG9uZSgpO1xuICB9XG5cbiAgZ2V0IHgoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5tb2RlbC5wb2ludC54O1xuICB9XG5cbiAgZ2V0IHkoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5tb2RlbC5wb2ludC55O1xuICB9XG5cbiAgZ2V0IGFuZ2xlKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMubW9kZWwuYW5nbGU7XG4gIH1cblxuICBnZXQgZGF0YSgpOiBWZWN0b3JEYXRhIHtcbiAgICBjb25zdCB7IHgsIHksIGFuZ2xlIH0gPSB0aGlzO1xuICAgIHJldHVybiB7IHgsIHksIGFuZ2xlIH07XG4gIH1cblxuICBjbG9uZSgpOiBWZWN0b3Ige1xuICAgIHJldHVybiBuZXcgVmVjdG9yKHRoaXMucG9pbnQsIHRoaXMuYW5nbGUpO1xuICB9XG5cbiAgdG9TdHJpbmcoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkodGhpcy5kYXRhKTtcbiAgfVxufSIsImltcG9ydCBCdWcgZnJvbSAnLi9idWcnO1xuXG5leHBvcnQgZGVmYXVsdCBCdWc7XG4iLCJpbXBvcnQgUG9pbnQsIHsgUG9pbnREYXRhIH0gZnJvbSAnLi9nZW9tL3BvaW50JztcblxuZXhwb3J0IGNvbnN0IE1BWElNVU1fTEVOR1RIOiBudW1iZXIgPSAyMDtcblxuZXhwb3J0IGludGVyZmFjZSBMZWdPcHRpb25zIHtcbiAgam9pbnQ/OiBQb2ludDtcbiAgZm9vdD86IFBvaW50O1xuICB0YXJnZXQ/OiBQb2ludDtcbiAgcHJvZ3Jlc3M/OiBudW1iZXI7XG4gIG1heExlbmd0aD86IG51bWJlcjtcbiAgcGxhbnRlZD86IGJvb2xlYW47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTGVnTW9kZWwgZXh0ZW5kcyBMZWdPcHRpb25zIHtcbiAgcmFkaWFucz86IG51bWJlcjtcbiAgc3RhcnQ/OiBQb2ludDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBMZWdEYXRhIHtcbiAgam9pbnQ6IFBvaW50RGF0YSxcbiAgZm9vdDogUG9pbnREYXRhLFxuICBwbGFudGVkOiBib29sZWFuO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMZWcge1xuICBwcml2YXRlIG1vZGVsOiBMZWdNb2RlbDtcblxuICBjb25zdHJ1Y3RvcihvcHRpb25zOiBMZWdPcHRpb25zID0ge30pIHtcbiAgICBjb25zdCB7XG4gICAgICBqb2ludCA9IG5ldyBQb2ludCgwLCAwKSxcbiAgICAgIGZvb3QgPSBuZXcgUG9pbnQoTUFYSU1VTV9MRU5HVEggLyAyLCAwKSxcbiAgICAgIHRhcmdldCA9IG5ldyBQb2ludCgpLFxuICAgICAgcHJvZ3Jlc3MgPSAwLFxuICAgICAgbWF4TGVuZ3RoID0gTUFYSU1VTV9MRU5HVEgsXG4gICAgICBwbGFudGVkID0gdHJ1ZSxcbiAgICB9ID0gb3B0aW9ucztcbiAgICB0aGlzLm1vZGVsID0geyBmb290LCBtYXhMZW5ndGgsIHBsYW50ZWQgfTtcbiAgICB0aGlzLmpvaW50ID0gam9pbnQ7XG4gICAgdGhpcy50YXJnZXQgPSB0YXJnZXQ7XG4gICAgdGhpcy5tb2RlbC5wcm9ncmVzcyA9IHByb2dyZXNzO1xuICB9XG5cbiAgZ2V0IGRhdGEoKTogTGVnRGF0YSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGpvaW50OiB0aGlzLm1vZGVsLmpvaW50LmRhdGEsXG4gICAgICBmb290OiB0aGlzLm1vZGVsLmZvb3QuZGF0YSxcbiAgICAgIHBsYW50ZWQ6IHRoaXMubW9kZWwucGxhbnRlZCxcbiAgICB9O1xuICB9XG5cbiAgZ2V0IGpvaW50KCk6IFBvaW50IHtcbiAgICByZXR1cm4gdGhpcy5tb2RlbC5qb2ludC5jbG9uZSgpO1xuICB9XG5cbiAgc2V0IGpvaW50KHBvaW50OiBQb2ludCkge1xuICAgIHRoaXMubW9kZWwucmFkaWFucyA9IFBvaW50LnJhZGlhbnMobmV3IFBvaW50KCksIHBvaW50KTtcbiAgICB0aGlzLm1vZGVsLmpvaW50ID0gcG9pbnQuY2xvbmUoKTtcbiAgfVxuXG4gIGdldCBmb290KCk6IFBvaW50IHtcbiAgICByZXR1cm4gdGhpcy5tb2RlbC5mb290LmNsb25lKCk7XG4gIH1cblxuICBnZXQgc3RhcnQoKTogUG9pbnQge1xuICAgIHJldHVybiB0aGlzLm1vZGVsLnN0YXJ0LmNsb25lKCk7XG4gIH1cblxuICBnZXQgdGFyZ2V0KCk6IFBvaW50IHtcbiAgICByZXR1cm4gdGhpcy5tb2RlbC50YXJnZXQuY2xvbmUoKTtcbiAgfVxuXG4gIHNldCB0YXJnZXQocG9pbnQ6IFBvaW50KSB7XG4gICAgY29uc3QgeyBmb290LCBtYXhMZW5ndGggfSA9IHRoaXMubW9kZWw7XG4gICAgY29uc3QgZGlzdGFuY2UgPSBQb2ludC5kaXN0YW5jZShmb290LCBwb2ludCk7XG4gICAgaWYgKGRpc3RhbmNlID4gbWF4TGVuZ3RoKSB7XG4gICAgICBjb25zdCByYWRpYW5zID0gUG9pbnQucmFkaWFucyhmb290LCBwb2ludCk7XG4gICAgICB0aGlzLm1vZGVsLnRhcmdldCA9IG5ldyBQb2ludChcbiAgICAgICAgZm9vdC54ICsgTWF0aC5jb3MocmFkaWFucykgKiBtYXhMZW5ndGgsXG4gICAgICAgIGZvb3QueSArIE1hdGguc2luKHJhZGlhbnMpICogbWF4TGVuZ3RoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5tb2RlbC50YXJnZXQgPSBwb2ludC5jbG9uZSgpO1xuICAgIH1cbiAgICB0aGlzLm1vZGVsLnN0YXJ0ID0gdGhpcy5tb2RlbC5mb290LmNsb25lKCk7XG4gICAgdGhpcy5tb2RlbC5wcm9ncmVzcyA9IDA7XG4gIH1cblxuICBnZXQgbWF4TGVuZ3RoKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMubW9kZWwubWF4TGVuZ3RoO1xuICB9XG5cbiAgZ2V0IHByb2dyZXNzKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMubW9kZWwucHJvZ3Jlc3M7XG4gIH1cblxuICBzZXQgcHJvZ3Jlc3ModmFsdWU6IG51bWJlcikge1xuICAgIGNvbnN0IHsgZm9vdCwgc3RhcnQsIHRhcmdldCB9ID0gdGhpcy5tb2RlbDtcbiAgICBjb25zdCBjb25zdHJhaW5lZFZhbHVlOiBudW1iZXIgPSBNYXRoLm1heCgwLCBNYXRoLm1pbigxLjAsIHZhbHVlKSk7XG4gICAgZm9vdC54ID0gKHRhcmdldC54IC0gc3RhcnQueCkgKiBjb25zdHJhaW5lZFZhbHVlICsgc3RhcnQueDtcbiAgICBmb290LnkgPSAodGFyZ2V0LnkgLSBzdGFydC55KSAqIGNvbnN0cmFpbmVkVmFsdWUgKyBzdGFydC55O1xuICAgIHRoaXMubW9kZWwucHJvZ3Jlc3MgPSBjb25zdHJhaW5lZFZhbHVlO1xuICB9XG5cbiAgZ2V0IHBsYW50ZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMubW9kZWwucGxhbnRlZDtcbiAgfVxuXG4gIHNldCBwbGFudGVkKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5tb2RlbC5wbGFudGVkID0gdmFsdWU7XG4gIH1cblxuICBnZXQgcmFkaWFucygpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLm1vZGVsLnJhZGlhbnM7XG4gIH1cblxuICBtb3ZlSm9pbnQocG9pbnQ6IFBvaW50LCByYWRpYW5zOiBudW1iZXIpIHtcbiAgICB0aGlzLm1vZGVsLmpvaW50ID0gcG9pbnQuY2xvbmUoKTtcbiAgICB0aGlzLm1vZGVsLnJhZGlhbnMgPSByYWRpYW5zO1xuICB9XG59XG4iLCJpbXBvcnQgUG9pbnQgZnJvbSAnLi9nZW9tL3BvaW50JztcbmltcG9ydCB7XG4gIGRlZ3JlZXNUb1JhZGlhbnMsXG4gIG5vcm1hbGl6ZVJhZGlhbnMsXG59IGZyb20gJy4vZ2VvbS9hbmdsZSc7XG5pbXBvcnQgTGVnLCB7IExlZ0RhdGEsIE1BWElNVU1fTEVOR1RIIH0gZnJvbSAnLi9sZWcnO1xuaW1wb3J0IFZlY3RvciBmcm9tICcuL2dlb20vdmVjdG9yJztcblxuZXhwb3J0IGludGVyZmFjZSBTZWdtZW50T3B0aW9ucyB7XG4gIHBvc2l0aW9uPzogUG9pbnQ7XG4gIHJhZGlhbnM/OiBudW1iZXI7XG4gIHByb2dyZXNzPzogbnVtYmVyO1xuICBzdGVwPzogbnVtYmVyO1xuICB0YXJnZXQ/OiBWZWN0b3I7XG4gIGxlZ3M/OiBMZWdbXTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBMZWdMYXlvdXQge1xuICBqb2ludDogeyBkaXN0YW5jZTogbnVtYmVyLCByYWRpYW5zOiBudW1iZXIgfTtcbiAgZm9vdDogeyBkaXN0YW5jZTogbnVtYmVyLCByYWRpYW5zOiBudW1iZXIgfTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTZWdtZW50TGF5b3V0IHtcbiAgcG9zaXRpb246IFZlY3RvcjtcbiAgbGVnczogTGVnTGF5b3V0W107XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2VnbWVudE1vZGVsIGV4dGVuZHMgU2VnbWVudE9wdGlvbnMge1xuICBzdGFydD86IFZlY3RvcjtcbiAgbGF5b3V0PzogU2VnbWVudExheW91dDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTZWdtZW50RGF0YSB7XG4gIHg6IG51bWJlcjtcbiAgeTogbnVtYmVyO1xuICByYWRpYW5zOiBudW1iZXI7XG4gIGxlZ3M6IExlZ0RhdGFbXTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VnbWVudCB7XG4gIHByaXZhdGUgbW9kZWw6IFNlZ21lbnRNb2RlbDtcblxuICBjb25zdHJ1Y3RvcihvcHRpb25zOiBTZWdtZW50T3B0aW9ucyA9IHt9KSB7XG4gICAgY29uc3Qge1xuICAgICAgcG9zaXRpb24gPSBuZXcgUG9pbnQoKSxcbiAgICAgIHJhZGlhbnMgPSAtTWF0aC5QSSAvIDIsXG4gICAgICBwcm9ncmVzcyA9IDAsXG4gICAgICBzdGVwID0gMCxcbiAgICAgIHRhcmdldCA9IG5ldyBWZWN0b3IoKSxcbiAgICAgIGxlZ3MgPSBbXSxcbiAgICB9ID0gb3B0aW9ucztcbiAgICBsZWdzWzBdID0gbGVnc1swXSB8fCBuZXcgTGVnKHtcbiAgICAgIGpvaW50OiBwb3NpdGlvbi5jbG9uZSgpLFxuICAgICAgZm9vdDogcG9zaXRpb24uY2xvbmUoKS5hZGQobmV3IFBvaW50KE1BWElNVU1fTEVOR1RIIC8gMiwgMCkpLFxuICAgIH0pO1xuICAgIGxlZ3NbMV0gPSBsZWdzWzFdIHx8IG5ldyBMZWcoe1xuICAgICAgam9pbnQ6IHBvc2l0aW9uLmNsb25lKCksXG4gICAgICBmb290OiBwb3NpdGlvbi5jbG9uZSgpLmFkZChuZXcgUG9pbnQoLU1BWElNVU1fTEVOR1RIIC8gMiwgMCkpLFxuICAgIH0pO1xuICAgIHRoaXMubW9kZWwgPSB7IHBvc2l0aW9uLCByYWRpYW5zLCBsZWdzIH07XG4gICAgdGhpcy53cml0ZUxheW91dCgpO1xuICAgIHRoaXMuc3RlcCA9IGNvbnN0cmFpblN0ZXAoc3RlcCk7XG4gICAgdGhpcy50YXJnZXQgPSB0YXJnZXQ7XG4gICAgdGhpcy5wcm9ncmVzcyA9IHByb2dyZXNzO1xuICB9XG5cbiAgZ2V0IGRhdGEoKTogU2VnbWVudERhdGEge1xuICAgIGNvbnN0IHsgeCwgeSB9ID0gdGhpcy5wb3NpdGlvbjtcbiAgICBjb25zdCB7IHJhZGlhbnMsIGxlZ3MgfSA9IHRoaXM7XG4gICAgcmV0dXJuIHtcbiAgICAgIHgsIHksIHJhZGlhbnMsIGxlZ3NcbiAgICB9O1xuICB9XG5cbiAgZ2V0IHBvc2l0aW9uKCk6IFBvaW50IHtcbiAgICByZXR1cm4gdGhpcy5tb2RlbC5wb3NpdGlvbi5jbG9uZSgpO1xuICB9XG5cbiAgZ2V0IHJhZGlhbnMoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5tb2RlbC5yYWRpYW5zO1xuICB9XG5cbiAgZ2V0IHByb2dyZXNzKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMubW9kZWwucHJvZ3Jlc3M7XG4gIH1cblxuICBzZXQgcHJvZ3Jlc3ModmFsdWU6IG51bWJlcikge1xuICAgIGNvbnN0IHByb2dyZXNzID0gTWF0aC5tYXgoMCwgTWF0aC5taW4oMS4wLCB2YWx1ZSkpO1xuICAgIHRoaXMubW92ZVNlZ21lbnQocHJvZ3Jlc3MpO1xuICAgIHRoaXMubW92ZUpvaW50cygpO1xuICAgIC8vIHRoaXMubW92ZUZlZXQocHJvZ3Jlc3MpO1xuICAgIHRoaXMudXBkYXRlUHJvZ3Jlc3MocHJvZ3Jlc3MpO1xuICB9XG5cbiAgcHJpdmF0ZSBtb3ZlU2VnbWVudChwcm9ncmVzczogbnVtYmVyKSB7XG4gICAgY29uc3QgeyBwb3NpdGlvbiwgdGFyZ2V0LCBzdGFydCB9ID0gdGhpcy5tb2RlbDtcbiAgICBwb3NpdGlvbi54ID0gKHRhcmdldC54IC0gc3RhcnQueCkgKiBwcm9ncmVzcyArIHN0YXJ0Lng7XG4gICAgcG9zaXRpb24ueSA9ICh0YXJnZXQueSAtIHN0YXJ0LnkpICogcHJvZ3Jlc3MgKyBzdGFydC55O1xuICAgIHRoaXMubW9kZWwucmFkaWFucyA9IG5vcm1hbGl6ZVJhZGlhbnMoKHRhcmdldC5hbmdsZSAtIHN0YXJ0LmFuZ2xlKVxuICAgICAgKiBwcm9ncmVzcyArIHN0YXJ0LmFuZ2xlKTtcbiAgfVxuXG4gIHByaXZhdGUgbW92ZUpvaW50cygpIHtcbiAgICBjb25zdCB7IGxheW91dCwgcG9zaXRpb24sIHJhZGlhbnMgfSA9IHRoaXMubW9kZWw7XG4gICAgbGF5b3V0LmxlZ3MuZm9yRWFjaCgobGVnLCBpbmRleCkgPT4ge1xuICAgICAgY29uc3Qgam9pbnRMYXlvdXQgPSBsYXlvdXQubGVnc1tpbmRleF0uam9pbnQ7XG4gICAgICBjb25zdCBqb2ludFJhZGlhbnMgPSBqb2ludExheW91dC5yYWRpYW5zICsgcmFkaWFucztcbiAgICAgIGNvbnN0IGpvaW50UG9pbnQgPSBuZXcgUG9pbnQoXG4gICAgICAgIE1hdGguY29zKGpvaW50UmFkaWFucykgKiBqb2ludExheW91dC5kaXN0YW5jZSArIHBvc2l0aW9uLngsXG4gICAgICAgIE1hdGguc2luKGpvaW50UmFkaWFucykgKiBqb2ludExheW91dC5kaXN0YW5jZSArIHBvc2l0aW9uLnksXG4gICAgICApO1xuICAgICAgdGhpcy5tb2RlbC5sZWdzW2luZGV4XS5tb3ZlSm9pbnQoam9pbnRQb2ludCwgam9pbnRSYWRpYW5zKTtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgbW92ZUZlZXQocHJvZ3Jlc3M6IG51bWJlcikge1xuICAgIHRoaXMubW9kZWwubGVnc1t0aGlzLnN0ZXBdLnByb2dyZXNzID0gcHJvZ3Jlc3M7XG4gIH1cblxuICBwcml2YXRlIHVwZGF0ZVByb2dyZXNzKHByb2dyZXNzOiBudW1iZXIpIHtcbiAgICBjb25zdCB7IHByb2dyZXNzOiBwcmV2UHJvZ3Jlc3MgfSA9IHRoaXMubW9kZWw7XG4gICAgdGhpcy5tb2RlbC5wcm9ncmVzcyA9IHByb2dyZXNzO1xuICAgIGlmIChwcmV2UHJvZ3Jlc3MgPCAxICYmIHByb2dyZXNzID49IDEpIHtcbiAgICAgIHRoaXMubW9kZWwuc3RlcCA9IHRoaXMubW9kZWwuc3RlcCA9PT0gMSA/IDAgOiAxO1xuICAgIH1cbiAgfVxuXG4gIGdldCBzdGVwKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMubW9kZWwuc3RlcDtcbiAgfVxuXG4gIHNldCBzdGVwKHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLmxlZ3NbdGhpcy5zdGVwIHx8IDBdLnBsYW50ZWQgPSB0cnVlO1xuICAgIHRoaXMubW9kZWwuc3RlcCA9IGNvbnN0cmFpblN0ZXAodmFsdWUpO1xuICAgIHRoaXMubGVnc1t0aGlzLnN0ZXBdLnBsYW50ZWQgPSBmYWxzZTtcbiAgICB0aGlzLm1vZGVsLnByb2dyZXNzID0gMDtcbiAgfVxuXG4gIGdldCB0YXJnZXQoKTogVmVjdG9yIHtcbiAgICByZXR1cm4gdGhpcy5tb2RlbC50YXJnZXQ7XG4gIH1cblxuICBzZXQgdGFyZ2V0KHZhbHVlOiBWZWN0b3IpIHtcbiAgICB0aGlzLm1vZGVsLnRhcmdldCA9IHZhbHVlO1xuICAgIHRoaXMubW9kZWwuc3RhcnQgPSBuZXcgVmVjdG9yKHRoaXMucG9zaXRpb24sIHRoaXMucmFkaWFucyk7XG5cbiAgICBjb25zdCB7IHRhcmdldCB9ID0gdGhpcy5tb2RlbDtcbiAgICBjb25zdCB7IHBvc2l0aW9uLCBsZWdzIH0gPSB0aGlzLm1vZGVsLmxheW91dDtcbiAgICBjb25zdCBkZWx0YUFuZ2xlID0gbm9ybWFsaXplUmFkaWFucyh0YXJnZXQuYW5nbGUgLSBwb3NpdGlvbi5hbmdsZSk7XG4gICAgY29uc3QgZGVsdGFEaXN0YW5jZSA9IFBvaW50LmRpc3RhbmNlKHRhcmdldC5wb2ludCwgcG9zaXRpb24ucG9pbnQpO1xuXG4gICAgY29uc3QgbGVnID0gdGhpcy5tb2RlbC5sZWdzW3RoaXMuc3RlcF07XG4gICAgY29uc3QgbGVnTGF5b3V0ID0gbGVnc1t0aGlzLnN0ZXBdO1xuICAgIGNvbnN0IHJhZGlhbnMgPSBub3JtYWxpemVSYWRpYW5zKGxlZ0xheW91dC5mb290LnJhZGlhbnMgKyBkZWx0YUFuZ2xlKTtcbiAgICBsZWcudGFyZ2V0ID0gbmV3IFBvaW50KFxuICAgICAgTWF0aC5jb3MobGVnTGF5b3V0LmZvb3QuZGlzdGFuY2UpICogcmFkaWFucyArIHRhcmdldC5wb2ludC54LFxuICAgICAgTWF0aC5zaW4obGVnTGF5b3V0LmZvb3QuZGlzdGFuY2UpICogcmFkaWFucyArIHRhcmdldC5wb2ludC55LFxuICAgICk7XG5cbiAgICB0aGlzLnByb2dyZXNzID0gMDtcbiAgfVxuXG4gIGdldCBsZWdzKCk6IExlZ0RhdGFbXSB7XG4gICAgcmV0dXJuIHRoaXMubW9kZWwubGVncy5tYXAobGVnID0+IGxlZy5kYXRhKTtcbiAgfVxuXG4gIGdldCBsYXlvdXQoKTogU2VnbWVudExheW91dCB7XG4gICAgY29uc3QgeyBwb3NpdGlvbiwgbGVncyB9ID0gdGhpcy5tb2RlbC5sYXlvdXQ7XG4gICAgcmV0dXJuIHtcbiAgICAgIHBvc2l0aW9uOiBwb3NpdGlvbi5jbG9uZSgpLFxuICAgICAgbGVnczogbGVncy5tYXAobGVnID0+ICh7XG4gICAgICAgIGpvaW50OiB7IGRpc3RhbmNlOiBsZWcuam9pbnQuZGlzdGFuY2UsIHJhZGlhbnM6IGxlZy5qb2ludC5yYWRpYW5zIH0sXG4gICAgICAgIGZvb3Q6IHsgZGlzdGFuY2U6IGxlZy5mb290LmRpc3RhbmNlLCByYWRpYW5zOiBsZWcuZm9vdC5yYWRpYW5zIH0sXG4gICAgICB9KSksXG4gICAgfTtcbiAgfVxuXG4gIHByaXZhdGUgd3JpdGVMYXlvdXQoKSB7XG4gICAgY29uc3QgeyBwb3NpdGlvbiwgcmFkaWFucywgbGVncyB9ID0gdGhpcy5tb2RlbDtcbiAgICB0aGlzLm1vZGVsLmxheW91dCA9IHtcbiAgICAgIHBvc2l0aW9uOiBuZXcgVmVjdG9yKHBvc2l0aW9uLCByYWRpYW5zKSxcbiAgICAgIGxlZ3M6IGxlZ3MubWFwKGxlZyA9PiB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgam9pbnQ6IHtcbiAgICAgICAgICAgIGRpc3RhbmNlOiBQb2ludC5kaXN0YW5jZShwb3NpdGlvbiwgbGVnLmpvaW50KSxcbiAgICAgICAgICAgIHJhZGlhbnM6IFBvaW50LnJhZGlhbnMocG9zaXRpb24sIGxlZy5qb2ludCksXG4gICAgICAgICAgfSxcbiAgICAgICAgICBmb290OiB7XG4gICAgICAgICAgICBkaXN0YW5jZTogUG9pbnQuZGlzdGFuY2UocG9zaXRpb24sIGxlZy5mb290KSxcbiAgICAgICAgICAgIHJhZGlhbnM6IFBvaW50LnJhZGlhbnMocG9zaXRpb24sIGxlZy5mb290KSxcbiAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICB9KSxcbiAgICB9O1xuICB9XG59XG5cbmZ1bmN0aW9uIGNvbnN0cmFpblN0ZXAodmFsdWU6IG51bWJlcik6IG51bWJlciB7XG4gIHJldHVybiBNYXRoLnJvdW5kKE1hdGgubWF4KDAsIE1hdGgubWluKDEsIHZhbHVlKSkpO1xufSJdLCJzb3VyY2VSb290IjoiIn0=