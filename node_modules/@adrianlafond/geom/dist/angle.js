"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Angle = /** @class */ (function () {
    function Angle() {
    }
    /**
     * @param value {number} degrees
     */
    Angle.toRadians = function (value) {
        return value * Math.PI / 180;
    };
    /**
    * @param value {number} radians
    */
    Angle.toDegrees = function (value) {
        return value * 180 / Math.PI;
    };
    /**
     *
     */
    Angle.delta = function (r1, r2) {
        return Angle.normalize(r1 - r2);
    };
    /**
    * @param r1 in radians
    * @param r2 in radians
    * @param progress percent expressed as a value between 0 and 1
    */
    Angle.interpolate = function (r1, r2, progress) {
        var a1 = Angle.normalize(r1);
        var a2 = Angle.normalize(r2);
        var delta = a2 - a1;
        if (Math.abs(delta) > Math.PI) {
            var circumference = Math.PI * 2 * (a2 > a1 ? -1 : 1);
            delta = a2 + circumference - a1;
        }
        return Angle.normalize(a1 + delta * progress);
    };
    Angle.normalize = function (value) {
        var result = value % (Math.PI * 2);
        if (result < 0) {
            result += Math.PI * 2;
        }
        return result;
    };
    return Angle;
}());
exports.default = Angle;
