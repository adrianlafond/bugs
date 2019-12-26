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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Xb3JsZC93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vV29ybGQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vV29ybGQvLi9zcmMvd29ybGQvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vV29ybGQvLi9zcmMvd29ybGQvd29ybGQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRmE7QUFDYjtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RCxTQUFTLG1CQUFPLENBQUMscUNBQVM7Ozs7Ozs7Ozs7Ozs7QUNMYjtBQUNiO0FBQ0E7QUFDQSxnREFBZ0QsT0FBTztBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixPQUFPO0FBQzFCLG1CQUFtQixPQUFPO0FBQzFCLHFCQUFxQixPQUFPO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QztBQUN4QyxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEI7QUFDOUIsc0VBQXNFLDRCQUE0QixFQUFFO0FBQ3BHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCO0FBQzFCO0FBQ0E7QUFDQTtBQUNBLG9FQUFvRSw2QkFBNkIsRUFBRTtBQUNuRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLGlDQUFpQztBQUNqQztBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoid29ybGQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShcIldvcmxkXCIsIFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIldvcmxkXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIldvcmxkXCJdID0gZmFjdG9yeSgpO1xufSkod2luZG93LCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy93b3JsZC9pbmRleC50c1wiKTtcbiIsIlwidXNlIHN0cmljdFwiO1xuZnVuY3Rpb24gX19leHBvcnQobSkge1xuICAgIGZvciAodmFyIHAgaW4gbSkgaWYgKCFleHBvcnRzLmhhc093blByb3BlcnR5KHApKSBleHBvcnRzW3BdID0gbVtwXTtcbn1cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbl9fZXhwb3J0KHJlcXVpcmUoXCIuL3dvcmxkXCIpKTtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fYXNzaWduID0gKHRoaXMgJiYgdGhpcy5fX2Fzc2lnbikgfHwgZnVuY3Rpb24gKCkge1xuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbih0KSB7XG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSlcbiAgICAgICAgICAgICAgICB0W3BdID0gc1twXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdDtcbiAgICB9O1xuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBuID0gMDtcbmZ1bmN0aW9uIGdldFVpZCgpIHtcbiAgICByZXR1cm4gXCJvYnN0YWNsZS1cIiArIG4rKztcbn1cbnZhciBXb3JsZCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBXb3JsZCgpIHtcbiAgICAgICAgdGhpcy5vYnN0YWNsZXMgPSBbXTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwYXJhbSB7VmVjdG9yfSB2ZWN0b3IgTG9jYXRpb24gb2YgYW4gb2JqZWN0L2J1Zy5cbiAgICAgICAgICogQHBhcmFtIHtudW1iZXJ9IHRocmVzaG9sZCBQaXhlbHMgZGlzdGFuY2UgYmV0d2VlbiB2ZWN0b3IgYW5kIG9ic3RhY2xlLlxuICAgICAgICAgKiBAcmV0dXJucyB7VmVjdG9yfSBDb21wZW5zdGF0aW9uIGZvciBvYnN0YWNsZSwgaWYgYW55LlxuICAgICAgICAgKi9cbiAgICAgICAgLy8gYWNjb3VudEZvck9ic3RhY2xlcyhzdGFydDogUG9pbnQsIHZlY3RvcjogVmVjdG9yLCB0aHJlc2hvbGQ6IG51bWJlcik6IFZlY3RvciB7XG4gICAgICAgIC8vICAgdGhpcy5vYnN0YWNsZXMuc29tZShvYnN0YWNsZSA9PiB7XG4gICAgICAgIC8vICAgICBpZiAoaGl0c09ic3RhY2xlKG9ic3RhY2xlLCB2ZWN0b3IucG9pbnQsIHRocmVzaG9sZCkpIHtcbiAgICAgICAgLy8gICAgICAgY29uc3QgZGlzdGFuY2UgPSBQb2ludC5kaXN0YW5jZShzdGFydCwgdmVjdG9yLnBvaW50KTtcbiAgICAgICAgLy8gICAgICAgaWYgKGhpdHNYKG9ic3RhY2xlLCBzdGFydCwgdGhyZXNob2xkKSkge1xuICAgICAgICAvLyAgICAgICAgIHZlY3Rvci55ID0gc3RhcnQueTtcbiAgICAgICAgLy8gICAgICAgICAvLyBjb25zdCByYWRpYW5zID0gdmVjdG9yLnggPiBzdGFydC54ID8gMCA6IE1hdGguUEk7XG4gICAgICAgIC8vICAgICAgICAgY29uc3QgcmFkaWFucyA9IDA7XG4gICAgICAgIC8vICAgICAgICAgdmVjdG9yLnggKz0gZGlzdGFuY2U7IC8vIE1hdGguY29zKHJhZGlhbnMpICogZGlzdGFuY2U7XG4gICAgICAgIC8vICAgICAgIH0gZWxzZSBpZiAoaGl0c1kob2JzdGFjbGUsIHN0YXJ0LCB0aHJlc2hvbGQpKSB7XG4gICAgICAgIC8vICAgICAgICAgdmVjdG9yLnggPSBzdGFydC54O1xuICAgICAgICAvLyAgICAgICAgIGNvbnN0IHJhZGlhbnMgPSB2ZWN0b3IueSA+IHN0YXJ0LnkgPyBNYXRoLlBJICogMC41IDogTWF0aC5QSSAqIDEuNTtcbiAgICAgICAgLy8gICAgICAgICB2ZWN0b3IueSA9IHN0YXJ0LnkgKyBNYXRoLnNpbihyYWRpYW5zKSAqIGRpc3RhbmNlO1xuICAgICAgICAvLyAgICAgICB9XG4gICAgICAgIC8vICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAvLyAgICAgfVxuICAgICAgICAvLyAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAvLyAgIH0pO1xuICAgICAgICAvLyAgIHJldHVybiB2ZWN0b3I7XG4gICAgICAgIC8vIH1cbiAgICB9XG4gICAgV29ybGQucHJvdG90eXBlLmFkZE9ic3RhY2xlID0gZnVuY3Rpb24gKG9ic3RhY2xlKSB7XG4gICAgICAgIHZhciBjb3B5ID0gX19hc3NpZ24oe30sIG9ic3RhY2xlKTtcbiAgICAgICAgdmFyIGV4aXN0aW5nSW5kZXggPSB0aGlzLm9ic3RhY2xlcy5maW5kSW5kZXgoZnVuY3Rpb24gKGl0ZW0pIHsgcmV0dXJuIGl0ZW0uaWQgPT09IGNvcHkuaWQ7IH0pO1xuICAgICAgICBpZiAoZXhpc3RpbmdJbmRleCAhPT0gLTEpIHtcbiAgICAgICAgICAgIHRoaXMub2JzdGFjbGVzLnNwbGljZShleGlzdGluZ0luZGV4LCAxLCBjb3B5KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNvcHkuaWQgPSBjb3B5Lmhhc093blByb3BlcnR5KCdpZCcpID8gY29weS5pZCA6IGdldFVpZCgpO1xuICAgICAgICAgICAgdGhpcy5vYnN0YWNsZXMucHVzaChjb3B5KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gX19hc3NpZ24oe30sIGNvcHkpO1xuICAgIH07XG4gICAgV29ybGQucHJvdG90eXBlLnJlbW92ZU9ic3RhY2xlID0gZnVuY3Rpb24gKGlkKSB7XG4gICAgICAgIHZhciBzZWFyY2hJZCA9ICh0eXBlb2YgaWQgPT09ICdzdHJpbmcnKSA/IGlkIDogaWQuaWQ7XG4gICAgICAgIHZhciBzZWFyY2hJbmRleCA9IHRoaXMub2JzdGFjbGVzLmZpbmRJbmRleChmdW5jdGlvbiAoaXRlbSkgeyByZXR1cm4gaXRlbS5pZCA9PT0gc2VhcmNoSWQ7IH0pO1xuICAgICAgICBpZiAoc2VhcmNoSW5kZXggIT09IC0xKSB7XG4gICAgICAgICAgICB0aGlzLm9ic3RhY2xlcy5zcGxpY2Uoc2VhcmNoSW5kZXgsIDEpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBXb3JsZC5wcm90b3R5cGUud2lsbEhpdE9ic3RhY2xlID0gZnVuY3Rpb24gKGN1cnJlbnQsIHRhcmdldCwgdGhyZXNob2xkKSB7XG4gICAgICAgIHZhciBjeCA9IGN1cnJlbnQueCwgY3kgPSBjdXJyZW50Lnk7XG4gICAgICAgIHZhciByYWRpYW5zID0gTWF0aC5hdGFuMih0YXJnZXQueSAtIGN5LCB0YXJnZXQueCAtIGN4KTtcbiAgICAgICAgdmFyIHR4ID0gY3ggKyBNYXRoLmNvcyhyYWRpYW5zKSAqIHRocmVzaG9sZDtcbiAgICAgICAgdmFyIHR5ID0gY3kgKyBNYXRoLnNpbihyYWRpYW5zKSAqIHRocmVzaG9sZDtcbiAgICAgICAgdmFyIGZyb20gPSAndG9wJztcbiAgICAgICAgdmFyIG9ic3RhY2xlID0gdGhpcy5vYnN0YWNsZXMuZmluZChmdW5jdGlvbiAodGVzdE9ic3RhY2xlKSB7XG4gICAgICAgICAgICB2YXIgeCA9IHRlc3RPYnN0YWNsZS54LCB5ID0gdGVzdE9ic3RhY2xlLnksIHdpZHRoID0gdGVzdE9ic3RhY2xlLndpZHRoLCBoZWlnaHQgPSB0ZXN0T2JzdGFjbGUuaGVpZ2h0O1xuICAgICAgICAgICAgdmFyIHgyID0geCArIHdpZHRoO1xuICAgICAgICAgICAgdmFyIHkyID0geSArIGhlaWdodDtcbiAgICAgICAgICAgIHZhciBjcm9zc2VzWEwgPSBjeCA8IHR4ICYmIGN4ICsgdGhyZXNob2xkIDwgeCAmJiB0eCAtIHRocmVzaG9sZCA+PSB4O1xuICAgICAgICAgICAgdmFyIGNyb3NzZXNYUiA9IGN4ID4gdHggJiYgY3ggLSB0aHJlc2hvbGQgPiB4MiAmJiB0eCArIHRocmVzaG9sZCA8PSB4MjtcbiAgICAgICAgICAgIHZhciBpc09uWCA9IHR4ICsgdGhyZXNob2xkID49IHggJiYgdHggLSB0aHJlc2hvbGQgPD0geDI7XG4gICAgICAgICAgICB2YXIgY3Jvc3Nlc1lUID0gY3kgPCB0eSAmJiBjeSArIHRocmVzaG9sZCA8IHkgJiYgdHkgLSB0aHJlc2hvbGQgPj0geTtcbiAgICAgICAgICAgIHZhciBjcm9zc2VzWUIgPSBjeSA+IHR5ICYmIGN5IC0gdGhyZXNob2xkID4geTIgJiYgdHkgKyB0aHJlc2hvbGQgPD0geTI7XG4gICAgICAgICAgICB2YXIgaXNPblkgPSB0eSArIHRocmVzaG9sZCA+PSB5ICYmIHR5IC0gdGhyZXNob2xkIDw9IHkyO1xuICAgICAgICAgICAgdmFyIGhpdHNYID0gY3Jvc3Nlc1hMIHx8IGNyb3NzZXNYUiB8fCBpc09uWDtcbiAgICAgICAgICAgIHZhciBoaXRzWSA9IGNyb3NzZXNZVCB8fCBjcm9zc2VzWUIgfHwgaXNPblk7XG4gICAgICAgICAgICBpZiAoaGl0c1ggJiYgaGl0c1kpIHtcbiAgICAgICAgICAgICAgICBpZiAoY3Jvc3Nlc1hMKSB7XG4gICAgICAgICAgICAgICAgICAgIGZyb20gPSAnbGVmdCc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGNyb3NzZXNYUikge1xuICAgICAgICAgICAgICAgICAgICBmcm9tID0gJ3JpZ2h0JztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoY3Jvc3Nlc1lUKSB7XG4gICAgICAgICAgICAgICAgICAgIGZyb20gPSAndG9wJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoY3Jvc3Nlc1lCKSB7XG4gICAgICAgICAgICAgICAgICAgIGZyb20gPSAnYm90dG9tJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciB4RGlzID0geCAtIGN4O1xuICAgICAgICAgICAgICAgICAgICB2YXIgeDJEaXMgPSBjeCAtIHgyO1xuICAgICAgICAgICAgICAgICAgICB2YXIgeURpcyA9IHkgLSBjeTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHkyRGlzID0gY3kgLSB5MjtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHhEaXMgPj0gMCAmJiB5RGlzID49IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZyb20gPSB4RGlzID49IHlEaXMgPyAnbGVmdCcgOiAndG9wJztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmICh4MkRpcyA+PSAwICYmIHlEaXMgPj0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZnJvbSA9IHgyRGlzID49IHlEaXMgPyAncmlnaHQnIDogJ3RvcCc7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoeERpcyA+PSAwICYmIHkyRGlzID49IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZyb20gPSB4RGlzID49IHkyRGlzID8gJ2xlZnQnIDogJ2JvdHRvbSc7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoeDJEaXMgPj0gMCAmJiB5MkRpcyA+PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmcm9tID0geDJEaXMgPj0geTJEaXMgPyAncmlnaHQnIDogJ2JvdHRvbSc7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoeERpcyA+PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmcm9tID0gJ2xlZnQnO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKHgyRGlzID49IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZyb20gPSAncmlnaHQnO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKHlEaXMgPj0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZnJvbSA9ICd0b3AnO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKHkyRGlzID49IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZyb20gPSAnYm90dG9tJztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZyb20gPSAndW5rbm93bic7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gb2JzdGFjbGUgPyB7XG4gICAgICAgICAgICBvYnN0YWNsZTogX19hc3NpZ24oe30sIG9ic3RhY2xlKSxcbiAgICAgICAgICAgIGZyb206IGZyb21cbiAgICAgICAgfSA6IG51bGw7XG4gICAgfTtcbiAgICByZXR1cm4gV29ybGQ7XG59KCkpO1xuZXhwb3J0cy5Xb3JsZCA9IFdvcmxkO1xuZnVuY3Rpb24gaGl0c1gob2JzdGFjbGUsIHBvaW50LCB0aHJlc2hvbGQpIHtcbiAgICB2YXIgeCA9IG9ic3RhY2xlLngsIHcgPSBvYnN0YWNsZS53aWR0aDtcbiAgICB2YXIgcHggPSBwb2ludC54O1xuICAgIHJldHVybiBweCArIHRocmVzaG9sZCA+PSB4ICYmIHB4IC0gdGhyZXNob2xkIDw9IHggKyB3O1xufVxuZnVuY3Rpb24gaGl0c1kob2JzdGFjbGUsIHBvaW50LCB0aHJlc2hvbGQpIHtcbiAgICB2YXIgeSA9IG9ic3RhY2xlLnksIGggPSBvYnN0YWNsZS5oZWlnaHQ7XG4gICAgdmFyIHB5ID0gcG9pbnQueTtcbiAgICByZXR1cm4gcHkgKyB0aHJlc2hvbGQgPj0geSAmJiBweSAtIHRocmVzaG9sZCA8PSB5ICsgaDtcbn1cbmZ1bmN0aW9uIGhpdHNPYnN0YWNsZShvYnN0YWNsZSwgcG9pbnQsIHRocmVzaG9sZCkge1xuICAgIHJldHVybiBoaXRzWChvYnN0YWNsZSwgcG9pbnQsIHRocmVzaG9sZCkgJiYgaGl0c1kob2JzdGFjbGUsIHBvaW50LCB0aHJlc2hvbGQpO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==