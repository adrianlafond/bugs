"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var point_1 = require("./point");
var Vector = /** @class */ (function () {
    function Vector(x_point, y_point, radians) {
        if (x_point === void 0) { x_point = 0; }
        if (y_point === void 0) { y_point = 0; }
        if (radians === void 0) { radians = 0; }
        this.model = {};
        if (x_point instanceof point_1.default) {
            this.model.point = x_point.clone();
            this.model.radians = y_point;
        }
        else {
            this.model.point = new point_1.default(x_point, y_point);
            this.model.radians = radians;
        }
    }
    Object.defineProperty(Vector.prototype, "point", {
        get: function () {
            return this.model.point.clone();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Vector.prototype, "x", {
        get: function () {
            return this.model.point.x;
        },
        set: function (value) {
            this.model.point.x = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Vector.prototype, "y", {
        get: function () {
            return this.model.point.y;
        },
        set: function (value) {
            this.model.point.y = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Vector.prototype, "radians", {
        get: function () {
            return this.model.radians;
        },
        set: function (value) {
            this.model.radians = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Vector.prototype, "data", {
        get: function () {
            var _a = this, x = _a.x, y = _a.y, radians = _a.radians;
            return { x: x, y: y, radians: radians };
        },
        enumerable: false,
        configurable: true
    });
    Vector.prototype.clone = function () {
        return new Vector(this.point, this.radians);
    };
    Vector.prototype.toString = function () {
        return JSON.stringify(this.data);
    };
    return Vector;
}());
exports.default = Vector;
