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
var n = 0;
function getUid() {
    return "obstacle-" + n++;
}
var World = /** @class */ (function () {
    function World() {
        this.obstacles = [];
        /**
         * @param {Vector} vector Location of an object/bug.
         * @param {number} threshold Pixels distance between vector and obstacle.
         * @returns {Vector} Compenstation for obstacle, if any.
         */
        // accountForObstacles(start: Point, vector: Vector, threshold: number): Vector {
        //   this.obstacles.some(obstacle => {
        //     if (hitsObstacle(obstacle, vector.point, threshold)) {
        //       const distance = Point.distance(start, vector.point);
        //       if (hitsX(obstacle, start, threshold)) {
        //         vector.y = start.y;
        //         // const radians = vector.x > start.x ? 0 : Math.PI;
        //         const radians = 0;
        //         vector.x += distance; // Math.cos(radians) * distance;
        //       } else if (hitsY(obstacle, start, threshold)) {
        //         vector.x = start.x;
        //         const radians = vector.y > start.y ? Math.PI * 0.5 : Math.PI * 1.5;
        //         vector.y = start.y + Math.sin(radians) * distance;
        //       }
        //       return true;
        //     }
        //     return false;
        //   });
        //   return vector;
        // }
    }
    World.prototype.addObstacle = function (obstacle) {
        var copy = __assign({}, obstacle);
        var existingIndex = this.obstacles.findIndex(function (item) { return item.id === copy.id; });
        if (existingIndex !== -1) {
            this.obstacles.splice(existingIndex, 1, copy);
        }
        else {
            copy.id = copy.hasOwnProperty('id') ? copy.id : getUid();
            this.obstacles.push(copy);
        }
        return __assign({}, copy);
    };
    World.prototype.removeObstacle = function (id) {
        var searchId = (typeof id === 'string') ? id : id.id;
        var searchIndex = this.obstacles.findIndex(function (item) { return item.id === searchId; });
        if (searchIndex !== -1) {
            this.obstacles.splice(searchIndex, 1);
        }
    };
    World.prototype.willHitObstacle = function (current, target, threshold) {
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
                    // TODO: find closest obstacle side to determine correct `from`.
                    var distances = [ty - y, x2 - tx, y2 - ty, tx - x];
                    var fromValues_1 = ['top', 'right', 'bottom', 'left'];
                    var closest_1 = Number.MAX_VALUE;
                    distances.forEach(function (d, i) {
                        if (d >= 0 && d < closest_1) {
                            closest_1 = d;
                            from = fromValues_1[i];
                        }
                    });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Xb3JsZC93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vV29ybGQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vV29ybGQvLi9zcmMvd29ybGQvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vV29ybGQvLi9zcmMvd29ybGQvd29ybGQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRmE7QUFDYjtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RCxTQUFTLG1CQUFPLENBQUMscUNBQVM7Ozs7Ozs7Ozs7Ozs7QUNMYjtBQUNiO0FBQ0E7QUFDQSxnREFBZ0QsT0FBTztBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixPQUFPO0FBQzFCLG1CQUFtQixPQUFPO0FBQzFCLHFCQUFxQixPQUFPO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QztBQUN4QyxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEI7QUFDOUIsc0VBQXNFLDRCQUE0QixFQUFFO0FBQ3BHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCO0FBQzFCO0FBQ0E7QUFDQTtBQUNBLG9FQUFvRSw2QkFBNkIsRUFBRTtBQUNuRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsaUNBQWlDO0FBQ2pDO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJ3b3JsZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFwiV29ybGRcIiwgW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiV29ybGRcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiV29ybGRcIl0gPSBmYWN0b3J5KCk7XG59KSh3aW5kb3csIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL3dvcmxkL2luZGV4LnRzXCIpO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5mdW5jdGlvbiBfX2V4cG9ydChtKSB7XG4gICAgZm9yICh2YXIgcCBpbiBtKSBpZiAoIWV4cG9ydHMuaGFzT3duUHJvcGVydHkocCkpIGV4cG9ydHNbcF0gPSBtW3BdO1xufVxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuX19leHBvcnQocmVxdWlyZShcIi4vd29ybGRcIikpO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19hc3NpZ24gPSAodGhpcyAmJiB0aGlzLl9fYXNzaWduKSB8fCBmdW5jdGlvbiAoKSB7XG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKVxuICAgICAgICAgICAgICAgIHRbcF0gPSBzW3BdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0O1xuICAgIH07XG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIG4gPSAwO1xuZnVuY3Rpb24gZ2V0VWlkKCkge1xuICAgIHJldHVybiBcIm9ic3RhY2xlLVwiICsgbisrO1xufVxudmFyIFdvcmxkID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFdvcmxkKCkge1xuICAgICAgICB0aGlzLm9ic3RhY2xlcyA9IFtdO1xuICAgICAgICAvKipcbiAgICAgICAgICogQHBhcmFtIHtWZWN0b3J9IHZlY3RvciBMb2NhdGlvbiBvZiBhbiBvYmplY3QvYnVnLlxuICAgICAgICAgKiBAcGFyYW0ge251bWJlcn0gdGhyZXNob2xkIFBpeGVscyBkaXN0YW5jZSBiZXR3ZWVuIHZlY3RvciBhbmQgb2JzdGFjbGUuXG4gICAgICAgICAqIEByZXR1cm5zIHtWZWN0b3J9IENvbXBlbnN0YXRpb24gZm9yIG9ic3RhY2xlLCBpZiBhbnkuXG4gICAgICAgICAqL1xuICAgICAgICAvLyBhY2NvdW50Rm9yT2JzdGFjbGVzKHN0YXJ0OiBQb2ludCwgdmVjdG9yOiBWZWN0b3IsIHRocmVzaG9sZDogbnVtYmVyKTogVmVjdG9yIHtcbiAgICAgICAgLy8gICB0aGlzLm9ic3RhY2xlcy5zb21lKG9ic3RhY2xlID0+IHtcbiAgICAgICAgLy8gICAgIGlmIChoaXRzT2JzdGFjbGUob2JzdGFjbGUsIHZlY3Rvci5wb2ludCwgdGhyZXNob2xkKSkge1xuICAgICAgICAvLyAgICAgICBjb25zdCBkaXN0YW5jZSA9IFBvaW50LmRpc3RhbmNlKHN0YXJ0LCB2ZWN0b3IucG9pbnQpO1xuICAgICAgICAvLyAgICAgICBpZiAoaGl0c1gob2JzdGFjbGUsIHN0YXJ0LCB0aHJlc2hvbGQpKSB7XG4gICAgICAgIC8vICAgICAgICAgdmVjdG9yLnkgPSBzdGFydC55O1xuICAgICAgICAvLyAgICAgICAgIC8vIGNvbnN0IHJhZGlhbnMgPSB2ZWN0b3IueCA+IHN0YXJ0LnggPyAwIDogTWF0aC5QSTtcbiAgICAgICAgLy8gICAgICAgICBjb25zdCByYWRpYW5zID0gMDtcbiAgICAgICAgLy8gICAgICAgICB2ZWN0b3IueCArPSBkaXN0YW5jZTsgLy8gTWF0aC5jb3MocmFkaWFucykgKiBkaXN0YW5jZTtcbiAgICAgICAgLy8gICAgICAgfSBlbHNlIGlmIChoaXRzWShvYnN0YWNsZSwgc3RhcnQsIHRocmVzaG9sZCkpIHtcbiAgICAgICAgLy8gICAgICAgICB2ZWN0b3IueCA9IHN0YXJ0Lng7XG4gICAgICAgIC8vICAgICAgICAgY29uc3QgcmFkaWFucyA9IHZlY3Rvci55ID4gc3RhcnQueSA/IE1hdGguUEkgKiAwLjUgOiBNYXRoLlBJICogMS41O1xuICAgICAgICAvLyAgICAgICAgIHZlY3Rvci55ID0gc3RhcnQueSArIE1hdGguc2luKHJhZGlhbnMpICogZGlzdGFuY2U7XG4gICAgICAgIC8vICAgICAgIH1cbiAgICAgICAgLy8gICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIC8vICAgICB9XG4gICAgICAgIC8vICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIC8vICAgfSk7XG4gICAgICAgIC8vICAgcmV0dXJuIHZlY3RvcjtcbiAgICAgICAgLy8gfVxuICAgIH1cbiAgICBXb3JsZC5wcm90b3R5cGUuYWRkT2JzdGFjbGUgPSBmdW5jdGlvbiAob2JzdGFjbGUpIHtcbiAgICAgICAgdmFyIGNvcHkgPSBfX2Fzc2lnbih7fSwgb2JzdGFjbGUpO1xuICAgICAgICB2YXIgZXhpc3RpbmdJbmRleCA9IHRoaXMub2JzdGFjbGVzLmZpbmRJbmRleChmdW5jdGlvbiAoaXRlbSkgeyByZXR1cm4gaXRlbS5pZCA9PT0gY29weS5pZDsgfSk7XG4gICAgICAgIGlmIChleGlzdGluZ0luZGV4ICE9PSAtMSkge1xuICAgICAgICAgICAgdGhpcy5vYnN0YWNsZXMuc3BsaWNlKGV4aXN0aW5nSW5kZXgsIDEsIGNvcHkpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY29weS5pZCA9IGNvcHkuaGFzT3duUHJvcGVydHkoJ2lkJykgPyBjb3B5LmlkIDogZ2V0VWlkKCk7XG4gICAgICAgICAgICB0aGlzLm9ic3RhY2xlcy5wdXNoKGNvcHkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBfX2Fzc2lnbih7fSwgY29weSk7XG4gICAgfTtcbiAgICBXb3JsZC5wcm90b3R5cGUucmVtb3ZlT2JzdGFjbGUgPSBmdW5jdGlvbiAoaWQpIHtcbiAgICAgICAgdmFyIHNlYXJjaElkID0gKHR5cGVvZiBpZCA9PT0gJ3N0cmluZycpID8gaWQgOiBpZC5pZDtcbiAgICAgICAgdmFyIHNlYXJjaEluZGV4ID0gdGhpcy5vYnN0YWNsZXMuZmluZEluZGV4KGZ1bmN0aW9uIChpdGVtKSB7IHJldHVybiBpdGVtLmlkID09PSBzZWFyY2hJZDsgfSk7XG4gICAgICAgIGlmIChzZWFyY2hJbmRleCAhPT0gLTEpIHtcbiAgICAgICAgICAgIHRoaXMub2JzdGFjbGVzLnNwbGljZShzZWFyY2hJbmRleCwgMSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFdvcmxkLnByb3RvdHlwZS53aWxsSGl0T2JzdGFjbGUgPSBmdW5jdGlvbiAoY3VycmVudCwgdGFyZ2V0LCB0aHJlc2hvbGQpIHtcbiAgICAgICAgdmFyIGN4ID0gY3VycmVudC54LCBjeSA9IGN1cnJlbnQueTtcbiAgICAgICAgdmFyIHJhZGlhbnMgPSBNYXRoLmF0YW4yKHRhcmdldC55IC0gY3ksIHRhcmdldC54IC0gY3gpO1xuICAgICAgICB2YXIgdHggPSBjeCArIE1hdGguY29zKHJhZGlhbnMpICogdGhyZXNob2xkO1xuICAgICAgICB2YXIgdHkgPSBjeSArIE1hdGguc2luKHJhZGlhbnMpICogdGhyZXNob2xkO1xuICAgICAgICB2YXIgZnJvbSA9ICd0b3AnO1xuICAgICAgICB2YXIgb2JzdGFjbGUgPSB0aGlzLm9ic3RhY2xlcy5maW5kKGZ1bmN0aW9uICh0ZXN0T2JzdGFjbGUpIHtcbiAgICAgICAgICAgIHZhciB4ID0gdGVzdE9ic3RhY2xlLngsIHkgPSB0ZXN0T2JzdGFjbGUueSwgd2lkdGggPSB0ZXN0T2JzdGFjbGUud2lkdGgsIGhlaWdodCA9IHRlc3RPYnN0YWNsZS5oZWlnaHQ7XG4gICAgICAgICAgICB2YXIgeDIgPSB4ICsgd2lkdGg7XG4gICAgICAgICAgICB2YXIgeTIgPSB5ICsgaGVpZ2h0O1xuICAgICAgICAgICAgdmFyIGNyb3NzZXNYTCA9IGN4IDwgdHggJiYgY3ggKyB0aHJlc2hvbGQgPCB4ICYmIHR4IC0gdGhyZXNob2xkID49IHg7XG4gICAgICAgICAgICB2YXIgY3Jvc3Nlc1hSID0gY3ggPiB0eCAmJiBjeCAtIHRocmVzaG9sZCA+IHgyICYmIHR4ICsgdGhyZXNob2xkIDw9IHgyO1xuICAgICAgICAgICAgdmFyIGlzT25YID0gdHggKyB0aHJlc2hvbGQgPj0geCAmJiB0eCAtIHRocmVzaG9sZCA8PSB4MjtcbiAgICAgICAgICAgIHZhciBjcm9zc2VzWVQgPSBjeSA8IHR5ICYmIGN5ICsgdGhyZXNob2xkIDwgeSAmJiB0eSAtIHRocmVzaG9sZCA+PSB5O1xuICAgICAgICAgICAgdmFyIGNyb3NzZXNZQiA9IGN5ID4gdHkgJiYgY3kgLSB0aHJlc2hvbGQgPiB5MiAmJiB0eSArIHRocmVzaG9sZCA8PSB5MjtcbiAgICAgICAgICAgIHZhciBpc09uWSA9IHR5ICsgdGhyZXNob2xkID49IHkgJiYgdHkgLSB0aHJlc2hvbGQgPD0geTI7XG4gICAgICAgICAgICB2YXIgaGl0c1ggPSBjcm9zc2VzWEwgfHwgY3Jvc3Nlc1hSIHx8IGlzT25YO1xuICAgICAgICAgICAgdmFyIGhpdHNZID0gY3Jvc3Nlc1lUIHx8IGNyb3NzZXNZQiB8fCBpc09uWTtcbiAgICAgICAgICAgIGlmIChoaXRzWCAmJiBoaXRzWSkge1xuICAgICAgICAgICAgICAgIGlmIChjcm9zc2VzWEwpIHtcbiAgICAgICAgICAgICAgICAgICAgZnJvbSA9ICdsZWZ0JztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoY3Jvc3Nlc1hSKSB7XG4gICAgICAgICAgICAgICAgICAgIGZyb20gPSAncmlnaHQnO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChjcm9zc2VzWVQpIHtcbiAgICAgICAgICAgICAgICAgICAgZnJvbSA9ICd0b3AnO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChjcm9zc2VzWUIpIHtcbiAgICAgICAgICAgICAgICAgICAgZnJvbSA9ICdib3R0b20nO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gVE9ETzogZmluZCBjbG9zZXN0IG9ic3RhY2xlIHNpZGUgdG8gZGV0ZXJtaW5lIGNvcnJlY3QgYGZyb21gLlxuICAgICAgICAgICAgICAgICAgICB2YXIgZGlzdGFuY2VzID0gW3R5IC0geSwgeDIgLSB0eCwgeTIgLSB0eSwgdHggLSB4XTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGZyb21WYWx1ZXNfMSA9IFsndG9wJywgJ3JpZ2h0JywgJ2JvdHRvbScsICdsZWZ0J107XG4gICAgICAgICAgICAgICAgICAgIHZhciBjbG9zZXN0XzEgPSBOdW1iZXIuTUFYX1ZBTFVFO1xuICAgICAgICAgICAgICAgICAgICBkaXN0YW5jZXMuZm9yRWFjaChmdW5jdGlvbiAoZCwgaSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGQgPj0gMCAmJiBkIDwgY2xvc2VzdF8xKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xvc2VzdF8xID0gZDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmcm9tID0gZnJvbVZhbHVlc18xW2ldO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gb2JzdGFjbGUgPyB7XG4gICAgICAgICAgICBvYnN0YWNsZTogX19hc3NpZ24oe30sIG9ic3RhY2xlKSxcbiAgICAgICAgICAgIGZyb206IGZyb21cbiAgICAgICAgfSA6IG51bGw7XG4gICAgfTtcbiAgICByZXR1cm4gV29ybGQ7XG59KCkpO1xuZXhwb3J0cy5Xb3JsZCA9IFdvcmxkO1xuZnVuY3Rpb24gaGl0c1gob2JzdGFjbGUsIHBvaW50LCB0aHJlc2hvbGQpIHtcbiAgICB2YXIgeCA9IG9ic3RhY2xlLngsIHcgPSBvYnN0YWNsZS53aWR0aDtcbiAgICB2YXIgcHggPSBwb2ludC54O1xuICAgIHJldHVybiBweCArIHRocmVzaG9sZCA+PSB4ICYmIHB4IC0gdGhyZXNob2xkIDw9IHggKyB3O1xufVxuZnVuY3Rpb24gaGl0c1kob2JzdGFjbGUsIHBvaW50LCB0aHJlc2hvbGQpIHtcbiAgICB2YXIgeSA9IG9ic3RhY2xlLnksIGggPSBvYnN0YWNsZS5oZWlnaHQ7XG4gICAgdmFyIHB5ID0gcG9pbnQueTtcbiAgICByZXR1cm4gcHkgKyB0aHJlc2hvbGQgPj0geSAmJiBweSAtIHRocmVzaG9sZCA8PSB5ICsgaDtcbn1cbmZ1bmN0aW9uIGhpdHNPYnN0YWNsZShvYnN0YWNsZSwgcG9pbnQsIHRocmVzaG9sZCkge1xuICAgIHJldHVybiBoaXRzWChvYnN0YWNsZSwgcG9pbnQsIHRocmVzaG9sZCkgJiYgaGl0c1kob2JzdGFjbGUsIHBvaW50LCB0aHJlc2hvbGQpO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==