(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("World", [], factory);
	else if(typeof exports === 'object')
		exports["World"] = factory();
	else
		root["World"] = factory();
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/world/index.ts");
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

/***/ "./src/world/index.ts":
/*!****************************!*\
  !*** ./src/world/index.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./world */ "./src/world/world.ts"));


/***/ }),

/***/ "./src/world/world.ts":
/*!****************************!*\
  !*** ./src/world/world.ts ***!
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
var World = /** @class */ (function () {
    function World(width, height, blockSize) {
        if (width === void 0) { width = 320; }
        if (height === void 0) { height = 320; }
        if (blockSize === void 0) { blockSize = 20; }
        this.width = width;
        this.height = height;
        this.blockSize = blockSize;
        this.obstacles = [];
        this.createGrid();
    }
    World.prototype.createGrid = function () {
        this.grid = [];
        var cols = Math.floor(this.width / this.blockSize);
        var rows = Math.floor(this.height / this.blockSize);
        for (var c = 0; c < cols; c++) {
            this.grid[c] = [];
            for (var r = 0; r < rows; r++) {
                this.grid[c][r] = {
                    point: new geom_1.Point(c * this.blockSize + this.blockSize / 2, r * this.blockSize + this.blockSize / 2),
                    filled: false,
                };
            }
        }
    };
    World.prototype.fillBlock = function (x, y) {
        var block = this.getBlockFromXY(x, y);
        if (block) {
            block.filled = true;
        }
        return block ? block.point.clone() : null;
    };
    World.prototype.clearBlock = function (x, y) {
        var block = this.getBlockFromXY(x, y);
        if (block) {
            block.filled = false;
        }
        return block ? block.point.clone() : null;
    };
    World.prototype.navigateWorld = function (current, target) {
        return current;
    };
    World.prototype.getBlockFromXY = function (x, y) {
        var col = Math.floor((x + this.blockSize / 2) / this.width * this.grid.length);
        var row = Math.floor((y + this.blockSize / 2) / this.height * this.grid[0].length);
        return (this.grid[col] && this.grid[col][row]) ? this.grid[col][row] : null;
    };
    World.prototype.willHitObstacleY = function (current, stepTarget, ultimateTarget, threshold) {
        var cx = current.x, cy = current.y;
        var tx = stepTarget.x, ty = stepTarget.y;
        var redirectedTarget = stepTarget.clone();
        this.obstacles.some(function (obstacle) {
            var x1 = obstacle.x - threshold;
            var y1 = obstacle.y - threshold;
            var x2 = obstacle.x + obstacle.width + threshold;
            var y2 = obstacle.y + obstacle.height + threshold;
            var thruX = (cx < x2 && tx > x1) || (cx > x1 && tx < x2);
            var thruY = (cy < y2 && ty > y1) || (cy > y1 && ty < y2);
            if (thruX && thruY) {
                var corners = [
                    new geom_1.Point(x1, y1),
                    new geom_1.Point(x2, y1),
                    new geom_1.Point(x2, y2),
                    new geom_1.Point(x1, y2),
                ];
                // Find closest corner:
                var closestDistance_1 = Number.MAX_VALUE;
                var closestCorner_1;
                corners.forEach(function (testPoint) {
                    var testDistance = geom_1.Point.distance(current, testPoint);
                    if (testDistance < closestDistance_1) {
                        closestDistance_1 = testDistance;
                        closestCorner_1 = testPoint;
                    }
                });
                // Then find target corner:
                closestDistance_1 = Number.MAX_VALUE;
                corners.forEach(function (testPoint) {
                    if (testPoint.x === closestCorner_1.x || testPoint.y === closestCorner_1.y) {
                        var testDistance = geom_1.Point.distance(ultimateTarget, testPoint);
                        if (testDistance < closestDistance_1) {
                            closestDistance_1 = testDistance;
                            redirectedTarget = testPoint;
                        }
                    }
                });
                return true;
            }
        });
        return redirectedTarget;
    };
    World.prototype.willHitObstacleX = function (current, target, threshold) {
        var cx = current.x, cy = current.y;
        var radians = Math.atan2(target.y - cy, target.x - cx);
        var tx = cx + Math.cos(radians) * threshold;
        var ty = cy + Math.sin(radians) * threshold;
        var from = 'top';
        var obstacle = this.obstacles.find(function (testObstacle) {
            var x = testObstacle.x, y = testObstacle.y, width = testObstacle.width, height = testObstacle.height;
            var x2 = x + width;
            var y2 = y + height;
            var crossesXL = cx < tx && cx + threshold < x && tx - threshold >= x;
            var crossesXR = cx > tx && cx - threshold > x2 && tx + threshold <= x2;
            var isOnX = tx + threshold >= x && tx - threshold <= x2;
            var crossesYT = cy < ty && cy + threshold < y && ty - threshold >= y;
            var crossesYB = cy > ty && cy - threshold > y2 && ty + threshold <= y2;
            var isOnY = ty + threshold >= y && ty - threshold <= y2;
            var hitsX = crossesXL || crossesXR || isOnX;
            var hitsY = crossesYT || crossesYB || isOnY;
            if (hitsX && hitsY) {
                if (crossesXL) {
                    from = 'left';
                }
                else if (crossesXR) {
                    from = 'right';
                }
                else if (crossesYT) {
                    from = 'top';
                }
                else if (crossesYB) {
                    from = 'bottom';
                }
                else {
                    var xDis = x - cx;
                    var x2Dis = cx - x2;
                    var yDis = y - cy;
                    var y2Dis = cy - y2;
                    if (xDis >= 0 && yDis >= 0) {
                        from = xDis >= yDis ? 'left' : 'top';
                    }
                    else if (x2Dis >= 0 && yDis >= 0) {
                        from = x2Dis >= yDis ? 'right' : 'top';
                    }
                    else if (xDis >= 0 && y2Dis >= 0) {
                        from = xDis >= y2Dis ? 'left' : 'bottom';
                    }
                    else if (x2Dis >= 0 && y2Dis >= 0) {
                        from = x2Dis >= y2Dis ? 'right' : 'bottom';
                    }
                    else if (xDis >= 0) {
                        from = 'left';
                    }
                    else if (x2Dis >= 0) {
                        from = 'right';
                    }
                    else if (yDis >= 0) {
                        from = 'top';
                    }
                    else if (y2Dis >= 0) {
                        from = 'bottom';
                    }
                    else {
                        from = 'unknown';
                    }
                }
                return true;
            }
        });
        return obstacle ? {
            obstacle: __assign({}, obstacle),
            from: from
        } : null;
    };
    return World;
}());
exports.World = World;
function hitsX(obstacle, point, threshold) {
    var x = obstacle.x, w = obstacle.width;
    var px = point.x;
    return px + threshold >= x && px - threshold <= x + w;
}
function hitsY(obstacle, point, threshold) {
    var y = obstacle.y, h = obstacle.height;
    var py = point.y;
    return py + threshold >= y && py - threshold <= y + h;
}
function hitsObstacle(obstacle, point, threshold) {
    return hitsX(obstacle, point, threshold) && hitsY(obstacle, point, threshold);
}


/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Xb3JsZC93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vV29ybGQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vV29ybGQvLi9ub2RlX21vZHVsZXMvQGFkcmlhbmxhZm9uZC9nZW9tL2Rpc3QvZ2VvbS5qcyIsIndlYnBhY2s6Ly9Xb3JsZC8uL3NyYy93b3JsZC9pbmRleC50cyIsIndlYnBhY2s6Ly9Xb3JsZC8uL3NyYy93b3JsZC93b3JsZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDbEZBLGVBQWUsS0FBaUQsb0JBQW9CLFNBQThHLENBQUMsbUJBQW1CLG1CQUFtQixTQUFTLGNBQWMsNEJBQTRCLFlBQVks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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsaUNBQWlDO0FBQ2pDO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJ3b3JsZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFwiV29ybGRcIiwgW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiV29ybGRcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiV29ybGRcIl0gPSBmYWN0b3J5KCk7XG59KSh3aW5kb3csIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL3dvcmxkL2luZGV4LnRzXCIpO1xuIiwiIWZ1bmN0aW9uKHQsZSl7XCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHMmJlwib2JqZWN0XCI9PXR5cGVvZiBtb2R1bGU/bW9kdWxlLmV4cG9ydHM9ZSgpOlwiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZD9kZWZpbmUoXCJHZW9tXCIsW10sZSk6XCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHM/ZXhwb3J0cy5HZW9tPWUoKTp0Lkdlb209ZSgpfSh3aW5kb3csZnVuY3Rpb24oKXtyZXR1cm4gZnVuY3Rpb24odCl7dmFyIGU9e307ZnVuY3Rpb24gbihyKXtpZihlW3JdKXJldHVybiBlW3JdLmV4cG9ydHM7dmFyIG89ZVtyXT17aTpyLGw6ITEsZXhwb3J0czp7fX07cmV0dXJuIHRbcl0uY2FsbChvLmV4cG9ydHMsbyxvLmV4cG9ydHMsbiksby5sPSEwLG8uZXhwb3J0c31yZXR1cm4gbi5tPXQsbi5jPWUsbi5kPWZ1bmN0aW9uKHQsZSxyKXtuLm8odCxlKXx8T2JqZWN0LmRlZmluZVByb3BlcnR5KHQsZSx7ZW51bWVyYWJsZTohMCxnZXQ6cn0pfSxuLnI9ZnVuY3Rpb24odCl7XCJ1bmRlZmluZWRcIiE9dHlwZW9mIFN5bWJvbCYmU3ltYm9sLnRvU3RyaW5nVGFnJiZPYmplY3QuZGVmaW5lUHJvcGVydHkodCxTeW1ib2wudG9TdHJpbmdUYWcse3ZhbHVlOlwiTW9kdWxlXCJ9KSxPYmplY3QuZGVmaW5lUHJvcGVydHkodCxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KX0sbi50PWZ1bmN0aW9uKHQsZSl7aWYoMSZlJiYodD1uKHQpKSw4JmUpcmV0dXJuIHQ7aWYoNCZlJiZcIm9iamVjdFwiPT10eXBlb2YgdCYmdCYmdC5fX2VzTW9kdWxlKXJldHVybiB0O3ZhciByPU9iamVjdC5jcmVhdGUobnVsbCk7aWYobi5yKHIpLE9iamVjdC5kZWZpbmVQcm9wZXJ0eShyLFwiZGVmYXVsdFwiLHtlbnVtZXJhYmxlOiEwLHZhbHVlOnR9KSwyJmUmJlwic3RyaW5nXCIhPXR5cGVvZiB0KWZvcih2YXIgbyBpbiB0KW4uZChyLG8sZnVuY3Rpb24oZSl7cmV0dXJuIHRbZV19LmJpbmQobnVsbCxvKSk7cmV0dXJuIHJ9LG4ubj1mdW5jdGlvbih0KXt2YXIgZT10JiZ0Ll9fZXNNb2R1bGU/ZnVuY3Rpb24oKXtyZXR1cm4gdC5kZWZhdWx0fTpmdW5jdGlvbigpe3JldHVybiB0fTtyZXR1cm4gbi5kKGUsXCJhXCIsZSksZX0sbi5vPWZ1bmN0aW9uKHQsZSl7cmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCh0LGUpfSxuLnA9XCJcIixuKG4ucz0xKX0oW2Z1bmN0aW9uKHQsZSxuKXtcInVzZSBzdHJpY3RcIjtPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KTt2YXIgcj1mdW5jdGlvbigpe2Z1bmN0aW9uIHQodCxlKXt2b2lkIDA9PT10JiYodD0wKSx2b2lkIDA9PT1lJiYoZT0wKSx0aGlzLng9dCx0aGlzLnk9ZX1yZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KHQucHJvdG90eXBlLFwiZGF0YVwiLHtnZXQ6ZnVuY3Rpb24oKXtyZXR1cm57eDp0aGlzLngseTp0aGlzLnl9fSxlbnVtZXJhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMH0pLHQucHJvdG90eXBlLmNsb25lPWZ1bmN0aW9uKCl7cmV0dXJuIG5ldyB0KHRoaXMueCx0aGlzLnkpfSx0LnByb3RvdHlwZS5hZGQ9ZnVuY3Rpb24odCl7cmV0dXJuIHRoaXMueCs9dC54LHRoaXMueSs9dC55LHRoaXN9LHQucHJvdG90eXBlLnN1YnRyYWN0PWZ1bmN0aW9uKHQpe3JldHVybiB0aGlzLngtPXQueCx0aGlzLnktPXQueSx0aGlzfSx0LnByb3RvdHlwZS50b1N0cmluZz1mdW5jdGlvbigpe3JldHVybiBKU09OLnN0cmluZ2lmeSh0aGlzLmRhdGEpfSx0LmRpc3RhbmNlPWZ1bmN0aW9uKHQsZSl7cmV0dXJuIE1hdGguc3FydCgodC54LWUueCkqKHQueC1lLngpKyh0LnktZS55KSoodC55LWUueSkpfSx0LnJhZGlhbnM9ZnVuY3Rpb24odCxlKXtyZXR1cm4gTWF0aC5hdGFuMihlLnktdC55LGUueC10LngpfSx0fSgpO2UuZGVmYXVsdD1yfSxmdW5jdGlvbih0LGUsbil7XCJ1c2Ugc3RyaWN0XCI7T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSk7dmFyIHI9bigyKTtlLkFuZ2xlPXIuZGVmYXVsdDt2YXIgbz1uKDApO2UuUG9pbnQ9by5kZWZhdWx0O3ZhciBpPW4oMyk7ZS5WZWN0b3I9aS5kZWZhdWx0fSxmdW5jdGlvbih0LGUsbil7XCJ1c2Ugc3RyaWN0XCI7T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSk7dmFyIHI9ZnVuY3Rpb24oKXtmdW5jdGlvbiB0KCl7fXJldHVybiB0LnRvUmFkaWFucz1mdW5jdGlvbih0KXtyZXR1cm4gdCpNYXRoLlBJLzE4MH0sdC50b0RlZ3JlZXM9ZnVuY3Rpb24odCl7cmV0dXJuIDE4MCp0L01hdGguUEl9LHQuaW50ZXJwb2xhdGU9ZnVuY3Rpb24oZSxuLHIpe3JldHVybiB0Lm5vcm1hbGl6ZShlK3QuZGVsdGEoZSxuKSpyKX0sdC5kZWx0YT1mdW5jdGlvbihlLG4pe3ZhciByPXQubm9ybWFsaXplKGUpLG89dC5ub3JtYWxpemUobiksaT1vLXI7cmV0dXJuIE1hdGguYWJzKGkpPk1hdGguUEkmJihpPW8tMipNYXRoLlBJLXIpLGl9LHQubm9ybWFsaXplPWZ1bmN0aW9uKHQpe3ZhciBlPXQlKDIqTWF0aC5QSSk7cmV0dXJuIGU8MCYmKGUrPTIqTWF0aC5QSSksZX0sdH0oKTtlLmRlZmF1bHQ9cn0sZnVuY3Rpb24odCxlLG4pe1widXNlIHN0cmljdFwiO09iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pO3ZhciByPW4oMCksbz1mdW5jdGlvbigpe2Z1bmN0aW9uIHQodCxlLG4pe3ZvaWQgMD09PXQmJih0PTApLHZvaWQgMD09PWUmJihlPTApLHZvaWQgMD09PW4mJihuPTApLHRoaXMubW9kZWw9e30sdCBpbnN0YW5jZW9mIHIuZGVmYXVsdD8odGhpcy5tb2RlbC5wb2ludD10LmNsb25lKCksdGhpcy5tb2RlbC5yYWRpYW5zPWUpOih0aGlzLm1vZGVsLnBvaW50PW5ldyByLmRlZmF1bHQodCxlKSx0aGlzLm1vZGVsLnJhZGlhbnM9bil9cmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LnByb3RvdHlwZSxcInBvaW50XCIse2dldDpmdW5jdGlvbigpe3JldHVybiB0aGlzLm1vZGVsLnBvaW50LmNsb25lKCl9LGVudW1lcmFibGU6ITAsY29uZmlndXJhYmxlOiEwfSksT2JqZWN0LmRlZmluZVByb3BlcnR5KHQucHJvdG90eXBlLFwieFwiLHtnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5tb2RlbC5wb2ludC54fSxzZXQ6ZnVuY3Rpb24odCl7dGhpcy5tb2RlbC5wb2ludC54PXR9LGVudW1lcmFibGU6ITAsY29uZmlndXJhYmxlOiEwfSksT2JqZWN0LmRlZmluZVByb3BlcnR5KHQucHJvdG90eXBlLFwieVwiLHtnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5tb2RlbC5wb2ludC55fSxzZXQ6ZnVuY3Rpb24odCl7dGhpcy5tb2RlbC5wb2ludC55PXR9LGVudW1lcmFibGU6ITAsY29uZmlndXJhYmxlOiEwfSksT2JqZWN0LmRlZmluZVByb3BlcnR5KHQucHJvdG90eXBlLFwicmFkaWFuc1wiLHtnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5tb2RlbC5yYWRpYW5zfSxzZXQ6ZnVuY3Rpb24odCl7dGhpcy5tb2RlbC5yYWRpYW5zPXR9LGVudW1lcmFibGU6ITAsY29uZmlndXJhYmxlOiEwfSksT2JqZWN0LmRlZmluZVByb3BlcnR5KHQucHJvdG90eXBlLFwiZGF0YVwiLHtnZXQ6ZnVuY3Rpb24oKXtyZXR1cm57eDp0aGlzLngseTp0aGlzLnkscmFkaWFuczp0aGlzLnJhZGlhbnN9fSxlbnVtZXJhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMH0pLHQucHJvdG90eXBlLmNsb25lPWZ1bmN0aW9uKCl7cmV0dXJuIG5ldyB0KHRoaXMucG9pbnQsdGhpcy5yYWRpYW5zKX0sdC5wcm90b3R5cGUudG9TdHJpbmc9ZnVuY3Rpb24oKXtyZXR1cm4gSlNPTi5zdHJpbmdpZnkodGhpcy5kYXRhKX0sdH0oKTtlLmRlZmF1bHQ9b31dKX0pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Z2VvbS5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbmZ1bmN0aW9uIF9fZXhwb3J0KG0pIHtcbiAgICBmb3IgKHZhciBwIGluIG0pIGlmICghZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShwKSkgZXhwb3J0c1twXSA9IG1bcF07XG59XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5fX2V4cG9ydChyZXF1aXJlKFwiLi93b3JsZFwiKSk7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2Fzc2lnbiA9ICh0aGlzICYmIHRoaXMuX19hc3NpZ24pIHx8IGZ1bmN0aW9uICgpIHtcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24odCkge1xuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpXG4gICAgICAgICAgICAgICAgdFtwXSA9IHNbcF07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHQ7XG4gICAgfTtcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgZ2VvbV8xID0gcmVxdWlyZShcIkBhZHJpYW5sYWZvbmQvZ2VvbVwiKTtcbnZhciBXb3JsZCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBXb3JsZCh3aWR0aCwgaGVpZ2h0LCBibG9ja1NpemUpIHtcbiAgICAgICAgaWYgKHdpZHRoID09PSB2b2lkIDApIHsgd2lkdGggPSAzMjA7IH1cbiAgICAgICAgaWYgKGhlaWdodCA9PT0gdm9pZCAwKSB7IGhlaWdodCA9IDMyMDsgfVxuICAgICAgICBpZiAoYmxvY2tTaXplID09PSB2b2lkIDApIHsgYmxvY2tTaXplID0gMjA7IH1cbiAgICAgICAgdGhpcy53aWR0aCA9IHdpZHRoO1xuICAgICAgICB0aGlzLmhlaWdodCA9IGhlaWdodDtcbiAgICAgICAgdGhpcy5ibG9ja1NpemUgPSBibG9ja1NpemU7XG4gICAgICAgIHRoaXMub2JzdGFjbGVzID0gW107XG4gICAgICAgIHRoaXMuY3JlYXRlR3JpZCgpO1xuICAgIH1cbiAgICBXb3JsZC5wcm90b3R5cGUuY3JlYXRlR3JpZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5ncmlkID0gW107XG4gICAgICAgIHZhciBjb2xzID0gTWF0aC5mbG9vcih0aGlzLndpZHRoIC8gdGhpcy5ibG9ja1NpemUpO1xuICAgICAgICB2YXIgcm93cyA9IE1hdGguZmxvb3IodGhpcy5oZWlnaHQgLyB0aGlzLmJsb2NrU2l6ZSk7XG4gICAgICAgIGZvciAodmFyIGMgPSAwOyBjIDwgY29sczsgYysrKSB7XG4gICAgICAgICAgICB0aGlzLmdyaWRbY10gPSBbXTtcbiAgICAgICAgICAgIGZvciAodmFyIHIgPSAwOyByIDwgcm93czsgcisrKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5ncmlkW2NdW3JdID0ge1xuICAgICAgICAgICAgICAgICAgICBwb2ludDogbmV3IGdlb21fMS5Qb2ludChjICogdGhpcy5ibG9ja1NpemUgKyB0aGlzLmJsb2NrU2l6ZSAvIDIsIHIgKiB0aGlzLmJsb2NrU2l6ZSArIHRoaXMuYmxvY2tTaXplIC8gMiksXG4gICAgICAgICAgICAgICAgICAgIGZpbGxlZDogZmFsc2UsXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgV29ybGQucHJvdG90eXBlLmZpbGxCbG9jayA9IGZ1bmN0aW9uICh4LCB5KSB7XG4gICAgICAgIHZhciBibG9jayA9IHRoaXMuZ2V0QmxvY2tGcm9tWFkoeCwgeSk7XG4gICAgICAgIGlmIChibG9jaykge1xuICAgICAgICAgICAgYmxvY2suZmlsbGVkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYmxvY2sgPyBibG9jay5wb2ludC5jbG9uZSgpIDogbnVsbDtcbiAgICB9O1xuICAgIFdvcmxkLnByb3RvdHlwZS5jbGVhckJsb2NrID0gZnVuY3Rpb24gKHgsIHkpIHtcbiAgICAgICAgdmFyIGJsb2NrID0gdGhpcy5nZXRCbG9ja0Zyb21YWSh4LCB5KTtcbiAgICAgICAgaWYgKGJsb2NrKSB7XG4gICAgICAgICAgICBibG9jay5maWxsZWQgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYmxvY2sgPyBibG9jay5wb2ludC5jbG9uZSgpIDogbnVsbDtcbiAgICB9O1xuICAgIFdvcmxkLnByb3RvdHlwZS5uYXZpZ2F0ZVdvcmxkID0gZnVuY3Rpb24gKGN1cnJlbnQsIHRhcmdldCkge1xuICAgICAgICByZXR1cm4gY3VycmVudDtcbiAgICB9O1xuICAgIFdvcmxkLnByb3RvdHlwZS5nZXRCbG9ja0Zyb21YWSA9IGZ1bmN0aW9uICh4LCB5KSB7XG4gICAgICAgIHZhciBjb2wgPSBNYXRoLmZsb29yKCh4ICsgdGhpcy5ibG9ja1NpemUgLyAyKSAvIHRoaXMud2lkdGggKiB0aGlzLmdyaWQubGVuZ3RoKTtcbiAgICAgICAgdmFyIHJvdyA9IE1hdGguZmxvb3IoKHkgKyB0aGlzLmJsb2NrU2l6ZSAvIDIpIC8gdGhpcy5oZWlnaHQgKiB0aGlzLmdyaWRbMF0ubGVuZ3RoKTtcbiAgICAgICAgcmV0dXJuICh0aGlzLmdyaWRbY29sXSAmJiB0aGlzLmdyaWRbY29sXVtyb3ddKSA/IHRoaXMuZ3JpZFtjb2xdW3Jvd10gOiBudWxsO1xuICAgIH07XG4gICAgV29ybGQucHJvdG90eXBlLndpbGxIaXRPYnN0YWNsZVkgPSBmdW5jdGlvbiAoY3VycmVudCwgc3RlcFRhcmdldCwgdWx0aW1hdGVUYXJnZXQsIHRocmVzaG9sZCkge1xuICAgICAgICB2YXIgY3ggPSBjdXJyZW50LngsIGN5ID0gY3VycmVudC55O1xuICAgICAgICB2YXIgdHggPSBzdGVwVGFyZ2V0LngsIHR5ID0gc3RlcFRhcmdldC55O1xuICAgICAgICB2YXIgcmVkaXJlY3RlZFRhcmdldCA9IHN0ZXBUYXJnZXQuY2xvbmUoKTtcbiAgICAgICAgdGhpcy5vYnN0YWNsZXMuc29tZShmdW5jdGlvbiAob2JzdGFjbGUpIHtcbiAgICAgICAgICAgIHZhciB4MSA9IG9ic3RhY2xlLnggLSB0aHJlc2hvbGQ7XG4gICAgICAgICAgICB2YXIgeTEgPSBvYnN0YWNsZS55IC0gdGhyZXNob2xkO1xuICAgICAgICAgICAgdmFyIHgyID0gb2JzdGFjbGUueCArIG9ic3RhY2xlLndpZHRoICsgdGhyZXNob2xkO1xuICAgICAgICAgICAgdmFyIHkyID0gb2JzdGFjbGUueSArIG9ic3RhY2xlLmhlaWdodCArIHRocmVzaG9sZDtcbiAgICAgICAgICAgIHZhciB0aHJ1WCA9IChjeCA8IHgyICYmIHR4ID4geDEpIHx8IChjeCA+IHgxICYmIHR4IDwgeDIpO1xuICAgICAgICAgICAgdmFyIHRocnVZID0gKGN5IDwgeTIgJiYgdHkgPiB5MSkgfHwgKGN5ID4geTEgJiYgdHkgPCB5Mik7XG4gICAgICAgICAgICBpZiAodGhydVggJiYgdGhydVkpIHtcbiAgICAgICAgICAgICAgICB2YXIgY29ybmVycyA9IFtcbiAgICAgICAgICAgICAgICAgICAgbmV3IGdlb21fMS5Qb2ludCh4MSwgeTEpLFxuICAgICAgICAgICAgICAgICAgICBuZXcgZ2VvbV8xLlBvaW50KHgyLCB5MSksXG4gICAgICAgICAgICAgICAgICAgIG5ldyBnZW9tXzEuUG9pbnQoeDIsIHkyKSxcbiAgICAgICAgICAgICAgICAgICAgbmV3IGdlb21fMS5Qb2ludCh4MSwgeTIpLFxuICAgICAgICAgICAgICAgIF07XG4gICAgICAgICAgICAgICAgLy8gRmluZCBjbG9zZXN0IGNvcm5lcjpcbiAgICAgICAgICAgICAgICB2YXIgY2xvc2VzdERpc3RhbmNlXzEgPSBOdW1iZXIuTUFYX1ZBTFVFO1xuICAgICAgICAgICAgICAgIHZhciBjbG9zZXN0Q29ybmVyXzE7XG4gICAgICAgICAgICAgICAgY29ybmVycy5mb3JFYWNoKGZ1bmN0aW9uICh0ZXN0UG9pbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRlc3REaXN0YW5jZSA9IGdlb21fMS5Qb2ludC5kaXN0YW5jZShjdXJyZW50LCB0ZXN0UG9pbnQpO1xuICAgICAgICAgICAgICAgICAgICBpZiAodGVzdERpc3RhbmNlIDwgY2xvc2VzdERpc3RhbmNlXzEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsb3Nlc3REaXN0YW5jZV8xID0gdGVzdERpc3RhbmNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xvc2VzdENvcm5lcl8xID0gdGVzdFBvaW50O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgLy8gVGhlbiBmaW5kIHRhcmdldCBjb3JuZXI6XG4gICAgICAgICAgICAgICAgY2xvc2VzdERpc3RhbmNlXzEgPSBOdW1iZXIuTUFYX1ZBTFVFO1xuICAgICAgICAgICAgICAgIGNvcm5lcnMuZm9yRWFjaChmdW5jdGlvbiAodGVzdFBvaW50KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0ZXN0UG9pbnQueCA9PT0gY2xvc2VzdENvcm5lcl8xLnggfHwgdGVzdFBvaW50LnkgPT09IGNsb3Nlc3RDb3JuZXJfMS55KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgdGVzdERpc3RhbmNlID0gZ2VvbV8xLlBvaW50LmRpc3RhbmNlKHVsdGltYXRlVGFyZ2V0LCB0ZXN0UG9pbnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRlc3REaXN0YW5jZSA8IGNsb3Nlc3REaXN0YW5jZV8xKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xvc2VzdERpc3RhbmNlXzEgPSB0ZXN0RGlzdGFuY2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVkaXJlY3RlZFRhcmdldCA9IHRlc3RQb2ludDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHJlZGlyZWN0ZWRUYXJnZXQ7XG4gICAgfTtcbiAgICBXb3JsZC5wcm90b3R5cGUud2lsbEhpdE9ic3RhY2xlWCA9IGZ1bmN0aW9uIChjdXJyZW50LCB0YXJnZXQsIHRocmVzaG9sZCkge1xuICAgICAgICB2YXIgY3ggPSBjdXJyZW50LngsIGN5ID0gY3VycmVudC55O1xuICAgICAgICB2YXIgcmFkaWFucyA9IE1hdGguYXRhbjIodGFyZ2V0LnkgLSBjeSwgdGFyZ2V0LnggLSBjeCk7XG4gICAgICAgIHZhciB0eCA9IGN4ICsgTWF0aC5jb3MocmFkaWFucykgKiB0aHJlc2hvbGQ7XG4gICAgICAgIHZhciB0eSA9IGN5ICsgTWF0aC5zaW4ocmFkaWFucykgKiB0aHJlc2hvbGQ7XG4gICAgICAgIHZhciBmcm9tID0gJ3RvcCc7XG4gICAgICAgIHZhciBvYnN0YWNsZSA9IHRoaXMub2JzdGFjbGVzLmZpbmQoZnVuY3Rpb24gKHRlc3RPYnN0YWNsZSkge1xuICAgICAgICAgICAgdmFyIHggPSB0ZXN0T2JzdGFjbGUueCwgeSA9IHRlc3RPYnN0YWNsZS55LCB3aWR0aCA9IHRlc3RPYnN0YWNsZS53aWR0aCwgaGVpZ2h0ID0gdGVzdE9ic3RhY2xlLmhlaWdodDtcbiAgICAgICAgICAgIHZhciB4MiA9IHggKyB3aWR0aDtcbiAgICAgICAgICAgIHZhciB5MiA9IHkgKyBoZWlnaHQ7XG4gICAgICAgICAgICB2YXIgY3Jvc3Nlc1hMID0gY3ggPCB0eCAmJiBjeCArIHRocmVzaG9sZCA8IHggJiYgdHggLSB0aHJlc2hvbGQgPj0geDtcbiAgICAgICAgICAgIHZhciBjcm9zc2VzWFIgPSBjeCA+IHR4ICYmIGN4IC0gdGhyZXNob2xkID4geDIgJiYgdHggKyB0aHJlc2hvbGQgPD0geDI7XG4gICAgICAgICAgICB2YXIgaXNPblggPSB0eCArIHRocmVzaG9sZCA+PSB4ICYmIHR4IC0gdGhyZXNob2xkIDw9IHgyO1xuICAgICAgICAgICAgdmFyIGNyb3NzZXNZVCA9IGN5IDwgdHkgJiYgY3kgKyB0aHJlc2hvbGQgPCB5ICYmIHR5IC0gdGhyZXNob2xkID49IHk7XG4gICAgICAgICAgICB2YXIgY3Jvc3Nlc1lCID0gY3kgPiB0eSAmJiBjeSAtIHRocmVzaG9sZCA+IHkyICYmIHR5ICsgdGhyZXNob2xkIDw9IHkyO1xuICAgICAgICAgICAgdmFyIGlzT25ZID0gdHkgKyB0aHJlc2hvbGQgPj0geSAmJiB0eSAtIHRocmVzaG9sZCA8PSB5MjtcbiAgICAgICAgICAgIHZhciBoaXRzWCA9IGNyb3NzZXNYTCB8fCBjcm9zc2VzWFIgfHwgaXNPblg7XG4gICAgICAgICAgICB2YXIgaGl0c1kgPSBjcm9zc2VzWVQgfHwgY3Jvc3Nlc1lCIHx8IGlzT25ZO1xuICAgICAgICAgICAgaWYgKGhpdHNYICYmIGhpdHNZKSB7XG4gICAgICAgICAgICAgICAgaWYgKGNyb3NzZXNYTCkge1xuICAgICAgICAgICAgICAgICAgICBmcm9tID0gJ2xlZnQnO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChjcm9zc2VzWFIpIHtcbiAgICAgICAgICAgICAgICAgICAgZnJvbSA9ICdyaWdodCc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGNyb3NzZXNZVCkge1xuICAgICAgICAgICAgICAgICAgICBmcm9tID0gJ3RvcCc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGNyb3NzZXNZQikge1xuICAgICAgICAgICAgICAgICAgICBmcm9tID0gJ2JvdHRvbSc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB2YXIgeERpcyA9IHggLSBjeDtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHgyRGlzID0gY3ggLSB4MjtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHlEaXMgPSB5IC0gY3k7XG4gICAgICAgICAgICAgICAgICAgIHZhciB5MkRpcyA9IGN5IC0geTI7XG4gICAgICAgICAgICAgICAgICAgIGlmICh4RGlzID49IDAgJiYgeURpcyA+PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmcm9tID0geERpcyA+PSB5RGlzID8gJ2xlZnQnIDogJ3RvcCc7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoeDJEaXMgPj0gMCAmJiB5RGlzID49IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZyb20gPSB4MkRpcyA+PSB5RGlzID8gJ3JpZ2h0JyA6ICd0b3AnO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKHhEaXMgPj0gMCAmJiB5MkRpcyA+PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmcm9tID0geERpcyA+PSB5MkRpcyA/ICdsZWZ0JyA6ICdib3R0b20nO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKHgyRGlzID49IDAgJiYgeTJEaXMgPj0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZnJvbSA9IHgyRGlzID49IHkyRGlzID8gJ3JpZ2h0JyA6ICdib3R0b20nO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKHhEaXMgPj0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZnJvbSA9ICdsZWZ0JztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmICh4MkRpcyA+PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmcm9tID0gJ3JpZ2h0JztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmICh5RGlzID49IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZyb20gPSAndG9wJztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmICh5MkRpcyA+PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmcm9tID0gJ2JvdHRvbSc7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmcm9tID0gJ3Vua25vd24nO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIG9ic3RhY2xlID8ge1xuICAgICAgICAgICAgb2JzdGFjbGU6IF9fYXNzaWduKHt9LCBvYnN0YWNsZSksXG4gICAgICAgICAgICBmcm9tOiBmcm9tXG4gICAgICAgIH0gOiBudWxsO1xuICAgIH07XG4gICAgcmV0dXJuIFdvcmxkO1xufSgpKTtcbmV4cG9ydHMuV29ybGQgPSBXb3JsZDtcbmZ1bmN0aW9uIGhpdHNYKG9ic3RhY2xlLCBwb2ludCwgdGhyZXNob2xkKSB7XG4gICAgdmFyIHggPSBvYnN0YWNsZS54LCB3ID0gb2JzdGFjbGUud2lkdGg7XG4gICAgdmFyIHB4ID0gcG9pbnQueDtcbiAgICByZXR1cm4gcHggKyB0aHJlc2hvbGQgPj0geCAmJiBweCAtIHRocmVzaG9sZCA8PSB4ICsgdztcbn1cbmZ1bmN0aW9uIGhpdHNZKG9ic3RhY2xlLCBwb2ludCwgdGhyZXNob2xkKSB7XG4gICAgdmFyIHkgPSBvYnN0YWNsZS55LCBoID0gb2JzdGFjbGUuaGVpZ2h0O1xuICAgIHZhciBweSA9IHBvaW50Lnk7XG4gICAgcmV0dXJuIHB5ICsgdGhyZXNob2xkID49IHkgJiYgcHkgLSB0aHJlc2hvbGQgPD0geSArIGg7XG59XG5mdW5jdGlvbiBoaXRzT2JzdGFjbGUob2JzdGFjbGUsIHBvaW50LCB0aHJlc2hvbGQpIHtcbiAgICByZXR1cm4gaGl0c1gob2JzdGFjbGUsIHBvaW50LCB0aHJlc2hvbGQpICYmIGhpdHNZKG9ic3RhY2xlLCBwb2ludCwgdGhyZXNob2xkKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=