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

Object.defineProperty(exports, "__esModule", { value: true });
var geom_1 = __webpack_require__(/*! @adrianlafond/geom */ "./node_modules/@adrianlafond/geom/dist/geom.js");
var go = {
    TL: ['TL', 'T', 'L', 'TR', 'BL', 'R', 'B', 'BR'],
    T: ['T', 'TR', 'TL', 'R', 'L', 'BR', 'BL', 'B'],
    TR: ['TR', 'R', 'T', 'BR', 'TL', 'B', 'L', 'BL'],
    R: ['R', 'BR', 'TR', 'B', 'T', 'BL', 'TL', 'L'],
    BR: ['BR', 'B', 'R', 'BL', 'TL', 'L', 'T', 'TL'],
    B: ['B', 'BL', 'BR', 'L', 'R', 'TL', 'TR', 'T'],
    BL: ['BL', 'L', 'B', 'TL', 'BR', 'T', 'R', 'TR'],
    L: ['L', 'TL', 'BL', 'T', 'B', 'TR', 'BR', 'R']
};
function isDiagonal(direction) {
    return direction === 'TL' || direction === 'TR' || direction === 'BR' || direction === 'BL';
}
function blockIsNotPrev(block, prevTarget) {
    return block.point.x !== prevTarget.x || block.point.y !== prevTarget.y;
}
var World = /** @class */ (function () {
    function World(width, height, blockSize) {
        if (width === void 0) { width = 320; }
        if (height === void 0) { height = 320; }
        if (blockSize === void 0) { blockSize = 20; }
        this.width = width;
        this.height = height;
        this.blockSize = blockSize;
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
                    column: c,
                    row: r,
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
    World.prototype.navigateWorld = function (current, target, prevTarget) {
        var currentBlock = this.getBlockFromXY(current.x, current.y);
        if (currentBlock) {
            var radians = geom_1.Point.radians(current, target);
            var radius = Math.sqrt((this.blockSize + this.blockSize) * (this.blockSize + this.blockSize));
            var targetBlock = this.getBlockFromXY(current.x + Math.cos(radians) * radius, current.y + Math.sin(radians) * radius);
            if (targetBlock) {
                targetBlock = this.getBestBlock(currentBlock, targetBlock, prevTarget);
            }
            return (targetBlock || currentBlock).point;
        }
        return target;
    };
    World.prototype.getBestBlock = function (currentBlock, targetBlock, prevTarget) {
        var cx = currentBlock.column, cy = currentBlock.row;
        var tx = targetBlock.column, ty = targetBlock.row;
        if (cx > tx && cy > ty) {
            return this.getOpenBlock(currentBlock, go.TL, prevTarget);
        }
        else if (cx === tx && cy > ty) {
            return this.getOpenBlock(currentBlock, go.T, prevTarget);
        }
        else if (cx < tx && cy > ty) {
            return this.getOpenBlock(currentBlock, go.TR, prevTarget);
        }
        else if (cx < tx && cy === ty) {
            return this.getOpenBlock(currentBlock, go.R, prevTarget);
        }
        else if (cx < tx && cy < ty) {
            return this.getOpenBlock(currentBlock, go.BR, prevTarget);
        }
        else if (cx === tx && cy < ty) {
            return this.getOpenBlock(currentBlock, go.B, prevTarget);
        }
        else if (cx > tx && cy < ty) {
            return this.getOpenBlock(currentBlock, go.BL, prevTarget);
        }
        else if (cx > tx && cy === ty) {
            return this.getOpenBlock(currentBlock, go.L, prevTarget);
        }
        return currentBlock;
    };
    World.prototype.getOpenBlock = function (currentBlock, directions, prevTarget) {
        for (var _i = 0, directions_1 = directions; _i < directions_1.length; _i++) {
            var dir = directions_1[_i];
            var block = this.getBlockForDirection(currentBlock, dir);
            if (block && !block.filled) {
                if (isDiagonal(dir)) {
                    var b1 = void 0;
                    var b2 = void 0;
                    switch (dir) {
                        case 'TL':
                            b1 = this.getBlockForDirection(currentBlock, 'T');
                            b2 = this.getBlockForDirection(currentBlock, 'L');
                            break;
                        case 'TR':
                            b1 = this.getBlockForDirection(currentBlock, 'R');
                            b2 = this.getBlockForDirection(currentBlock, 'T');
                            break;
                        case 'BR':
                            b1 = this.getBlockForDirection(currentBlock, 'B');
                            b2 = this.getBlockForDirection(currentBlock, 'R');
                            break;
                        case 'BL':
                            b1 = this.getBlockForDirection(currentBlock, 'L');
                            b2 = this.getBlockForDirection(currentBlock, 'B');
                            break;
                        default:
                            break;
                    }
                    var b1Ok = b1 && !b1.filled;
                    var b2Ok = b2 && !b2.filled;
                    if (b1Ok && b2Ok && blockIsNotPrev(block, prevTarget)) {
                        return block;
                    }
                    else if (b1Ok && !b2Ok && blockIsNotPrev(b1, prevTarget)) {
                        return b1;
                    }
                    else if (!b1Ok && b2Ok && blockIsNotPrev(b2, prevTarget)) {
                        return b2;
                    }
                }
                else {
                    if (blockIsNotPrev(block, prevTarget)) {
                        return block;
                    }
                }
            }
        }
        return currentBlock;
    };
    World.prototype.getBlockForDirection = function (currentBlock, direction) {
        var cx = currentBlock.column, cy = currentBlock.row;
        var _a = this.maxGridLengths(), columns = _a.columns, rows = _a.rows;
        var maxColumn = columns - 1;
        var maxRow = rows - 1;
        switch (direction) {
            case 'TL':
                return cx > 0 && cy > 0 ? this.grid[cx - 1][cy - 1] : null;
            case 'T':
                return cy > 0 ? this.grid[cx][cy - 1] : null;
            case 'TR':
                return cx < maxColumn && cy > 0 ? this.grid[cx + 1][cy - 1] : null;
            case 'R':
                return cx < maxColumn ? this.grid[cx + 1][cy] : null;
            case 'BR':
                return cx < maxColumn && cy < maxRow ? this.grid[cx + 1][cy + 1] : null;
            case 'B':
                return cy < maxRow ? this.grid[cx][cy + 1] : null;
            case 'BL':
                return cx > 0 && cy < maxRow ? this.grid[cx - 1][cy + 1] : null;
            case 'L':
                return cx > 0 ? this.grid[cx - 1][cy] : null;
            default:
                return null;
        }
    };
    World.prototype.getBlockFromXY = function (x, y) {
        var _a = this.maxGridLengths(), columns = _a.columns, rows = _a.rows;
        var col = Math.max(0, Math.min(columns - 1, Math.floor(x / this.width * columns)));
        var row = Math.max(0, Math.min(rows - 1, Math.floor(y / this.height * rows)));
        return (this.grid[col] && this.grid[col][row]) ? this.grid[col][row] : null;
    };
    World.prototype.maxGridLengths = function () {
        return { columns: this.maxColumns(), rows: this.maxRows() };
    };
    World.prototype.maxColumns = function () {
        return this.grid.length;
    };
    World.prototype.maxRows = function () {
        return this.grid[0].length;
    };
    return World;
}());
exports.World = World;


/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Xb3JsZC93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vV29ybGQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vV29ybGQvLi9ub2RlX21vZHVsZXMvQGFkcmlhbmxhZm9uZC9nZW9tL2Rpc3QvZ2VvbS5qcyIsIndlYnBhY2s6Ly9Xb3JsZC8uL3NyYy93b3JsZC9pbmRleC50cyIsIndlYnBhY2s6Ly9Xb3JsZC8uL3NyYy93b3JsZC93b3JsZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDbEZBLGVBQWUsS0FBaUQsb0JBQW9CLFNBQThHLENBQUMsbUJBQW1CLG1CQUFtQixTQUFTLGNBQWMsNEJBQTRCLFlBQVks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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCIsImZpbGUiOiJ3b3JsZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFwiV29ybGRcIiwgW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiV29ybGRcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiV29ybGRcIl0gPSBmYWN0b3J5KCk7XG59KSh3aW5kb3csIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL3dvcmxkL2luZGV4LnRzXCIpO1xuIiwiIWZ1bmN0aW9uKHQsZSl7XCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHMmJlwib2JqZWN0XCI9PXR5cGVvZiBtb2R1bGU/bW9kdWxlLmV4cG9ydHM9ZSgpOlwiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZD9kZWZpbmUoXCJHZW9tXCIsW10sZSk6XCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHM/ZXhwb3J0cy5HZW9tPWUoKTp0Lkdlb209ZSgpfSh3aW5kb3csZnVuY3Rpb24oKXtyZXR1cm4gZnVuY3Rpb24odCl7dmFyIGU9e307ZnVuY3Rpb24gbihyKXtpZihlW3JdKXJldHVybiBlW3JdLmV4cG9ydHM7dmFyIG89ZVtyXT17aTpyLGw6ITEsZXhwb3J0czp7fX07cmV0dXJuIHRbcl0uY2FsbChvLmV4cG9ydHMsbyxvLmV4cG9ydHMsbiksby5sPSEwLG8uZXhwb3J0c31yZXR1cm4gbi5tPXQsbi5jPWUsbi5kPWZ1bmN0aW9uKHQsZSxyKXtuLm8odCxlKXx8T2JqZWN0LmRlZmluZVByb3BlcnR5KHQsZSx7ZW51bWVyYWJsZTohMCxnZXQ6cn0pfSxuLnI9ZnVuY3Rpb24odCl7XCJ1bmRlZmluZWRcIiE9dHlwZW9mIFN5bWJvbCYmU3ltYm9sLnRvU3RyaW5nVGFnJiZPYmplY3QuZGVmaW5lUHJvcGVydHkodCxTeW1ib2wudG9TdHJpbmdUYWcse3ZhbHVlOlwiTW9kdWxlXCJ9KSxPYmplY3QuZGVmaW5lUHJvcGVydHkodCxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KX0sbi50PWZ1bmN0aW9uKHQsZSl7aWYoMSZlJiYodD1uKHQpKSw4JmUpcmV0dXJuIHQ7aWYoNCZlJiZcIm9iamVjdFwiPT10eXBlb2YgdCYmdCYmdC5fX2VzTW9kdWxlKXJldHVybiB0O3ZhciByPU9iamVjdC5jcmVhdGUobnVsbCk7aWYobi5yKHIpLE9iamVjdC5kZWZpbmVQcm9wZXJ0eShyLFwiZGVmYXVsdFwiLHtlbnVtZXJhYmxlOiEwLHZhbHVlOnR9KSwyJmUmJlwic3RyaW5nXCIhPXR5cGVvZiB0KWZvcih2YXIgbyBpbiB0KW4uZChyLG8sZnVuY3Rpb24oZSl7cmV0dXJuIHRbZV19LmJpbmQobnVsbCxvKSk7cmV0dXJuIHJ9LG4ubj1mdW5jdGlvbih0KXt2YXIgZT10JiZ0Ll9fZXNNb2R1bGU/ZnVuY3Rpb24oKXtyZXR1cm4gdC5kZWZhdWx0fTpmdW5jdGlvbigpe3JldHVybiB0fTtyZXR1cm4gbi5kKGUsXCJhXCIsZSksZX0sbi5vPWZ1bmN0aW9uKHQsZSl7cmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCh0LGUpfSxuLnA9XCJcIixuKG4ucz0xKX0oW2Z1bmN0aW9uKHQsZSxuKXtcInVzZSBzdHJpY3RcIjtPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KTt2YXIgcj1mdW5jdGlvbigpe2Z1bmN0aW9uIHQodCxlKXt2b2lkIDA9PT10JiYodD0wKSx2b2lkIDA9PT1lJiYoZT0wKSx0aGlzLng9dCx0aGlzLnk9ZX1yZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KHQucHJvdG90eXBlLFwiZGF0YVwiLHtnZXQ6ZnVuY3Rpb24oKXtyZXR1cm57eDp0aGlzLngseTp0aGlzLnl9fSxlbnVtZXJhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMH0pLHQucHJvdG90eXBlLmNsb25lPWZ1bmN0aW9uKCl7cmV0dXJuIG5ldyB0KHRoaXMueCx0aGlzLnkpfSx0LnByb3RvdHlwZS5hZGQ9ZnVuY3Rpb24odCl7cmV0dXJuIHRoaXMueCs9dC54LHRoaXMueSs9dC55LHRoaXN9LHQucHJvdG90eXBlLnN1YnRyYWN0PWZ1bmN0aW9uKHQpe3JldHVybiB0aGlzLngtPXQueCx0aGlzLnktPXQueSx0aGlzfSx0LnByb3RvdHlwZS50b1N0cmluZz1mdW5jdGlvbigpe3JldHVybiBKU09OLnN0cmluZ2lmeSh0aGlzLmRhdGEpfSx0LmRpc3RhbmNlPWZ1bmN0aW9uKHQsZSl7cmV0dXJuIE1hdGguc3FydCgodC54LWUueCkqKHQueC1lLngpKyh0LnktZS55KSoodC55LWUueSkpfSx0LnJhZGlhbnM9ZnVuY3Rpb24odCxlKXtyZXR1cm4gTWF0aC5hdGFuMihlLnktdC55LGUueC10LngpfSx0fSgpO2UuZGVmYXVsdD1yfSxmdW5jdGlvbih0LGUsbil7XCJ1c2Ugc3RyaWN0XCI7T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSk7dmFyIHI9bigyKTtlLkFuZ2xlPXIuZGVmYXVsdDt2YXIgbz1uKDApO2UuUG9pbnQ9by5kZWZhdWx0O3ZhciBpPW4oMyk7ZS5WZWN0b3I9aS5kZWZhdWx0fSxmdW5jdGlvbih0LGUsbil7XCJ1c2Ugc3RyaWN0XCI7T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSk7dmFyIHI9ZnVuY3Rpb24oKXtmdW5jdGlvbiB0KCl7fXJldHVybiB0LnRvUmFkaWFucz1mdW5jdGlvbih0KXtyZXR1cm4gdCpNYXRoLlBJLzE4MH0sdC50b0RlZ3JlZXM9ZnVuY3Rpb24odCl7cmV0dXJuIDE4MCp0L01hdGguUEl9LHQuaW50ZXJwb2xhdGU9ZnVuY3Rpb24oZSxuLHIpe3JldHVybiB0Lm5vcm1hbGl6ZShlK3QuZGVsdGEoZSxuKSpyKX0sdC5kZWx0YT1mdW5jdGlvbihlLG4pe3ZhciByPXQubm9ybWFsaXplKGUpLG89dC5ub3JtYWxpemUobiksaT1vLXI7cmV0dXJuIE1hdGguYWJzKGkpPk1hdGguUEkmJihpPW8tMipNYXRoLlBJLXIpLGl9LHQubm9ybWFsaXplPWZ1bmN0aW9uKHQpe3ZhciBlPXQlKDIqTWF0aC5QSSk7cmV0dXJuIGU8MCYmKGUrPTIqTWF0aC5QSSksZX0sdH0oKTtlLmRlZmF1bHQ9cn0sZnVuY3Rpb24odCxlLG4pe1widXNlIHN0cmljdFwiO09iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pO3ZhciByPW4oMCksbz1mdW5jdGlvbigpe2Z1bmN0aW9uIHQodCxlLG4pe3ZvaWQgMD09PXQmJih0PTApLHZvaWQgMD09PWUmJihlPTApLHZvaWQgMD09PW4mJihuPTApLHRoaXMubW9kZWw9e30sdCBpbnN0YW5jZW9mIHIuZGVmYXVsdD8odGhpcy5tb2RlbC5wb2ludD10LmNsb25lKCksdGhpcy5tb2RlbC5yYWRpYW5zPWUpOih0aGlzLm1vZGVsLnBvaW50PW5ldyByLmRlZmF1bHQodCxlKSx0aGlzLm1vZGVsLnJhZGlhbnM9bil9cmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LnByb3RvdHlwZSxcInBvaW50XCIse2dldDpmdW5jdGlvbigpe3JldHVybiB0aGlzLm1vZGVsLnBvaW50LmNsb25lKCl9LGVudW1lcmFibGU6ITAsY29uZmlndXJhYmxlOiEwfSksT2JqZWN0LmRlZmluZVByb3BlcnR5KHQucHJvdG90eXBlLFwieFwiLHtnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5tb2RlbC5wb2ludC54fSxzZXQ6ZnVuY3Rpb24odCl7dGhpcy5tb2RlbC5wb2ludC54PXR9LGVudW1lcmFibGU6ITAsY29uZmlndXJhYmxlOiEwfSksT2JqZWN0LmRlZmluZVByb3BlcnR5KHQucHJvdG90eXBlLFwieVwiLHtnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5tb2RlbC5wb2ludC55fSxzZXQ6ZnVuY3Rpb24odCl7dGhpcy5tb2RlbC5wb2ludC55PXR9LGVudW1lcmFibGU6ITAsY29uZmlndXJhYmxlOiEwfSksT2JqZWN0LmRlZmluZVByb3BlcnR5KHQucHJvdG90eXBlLFwicmFkaWFuc1wiLHtnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5tb2RlbC5yYWRpYW5zfSxzZXQ6ZnVuY3Rpb24odCl7dGhpcy5tb2RlbC5yYWRpYW5zPXR9LGVudW1lcmFibGU6ITAsY29uZmlndXJhYmxlOiEwfSksT2JqZWN0LmRlZmluZVByb3BlcnR5KHQucHJvdG90eXBlLFwiZGF0YVwiLHtnZXQ6ZnVuY3Rpb24oKXtyZXR1cm57eDp0aGlzLngseTp0aGlzLnkscmFkaWFuczp0aGlzLnJhZGlhbnN9fSxlbnVtZXJhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMH0pLHQucHJvdG90eXBlLmNsb25lPWZ1bmN0aW9uKCl7cmV0dXJuIG5ldyB0KHRoaXMucG9pbnQsdGhpcy5yYWRpYW5zKX0sdC5wcm90b3R5cGUudG9TdHJpbmc9ZnVuY3Rpb24oKXtyZXR1cm4gSlNPTi5zdHJpbmdpZnkodGhpcy5kYXRhKX0sdH0oKTtlLmRlZmF1bHQ9b31dKX0pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Z2VvbS5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbmZ1bmN0aW9uIF9fZXhwb3J0KG0pIHtcbiAgICBmb3IgKHZhciBwIGluIG0pIGlmICghZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShwKSkgZXhwb3J0c1twXSA9IG1bcF07XG59XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5fX2V4cG9ydChyZXF1aXJlKFwiLi93b3JsZFwiKSk7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBnZW9tXzEgPSByZXF1aXJlKFwiQGFkcmlhbmxhZm9uZC9nZW9tXCIpO1xudmFyIGdvID0ge1xuICAgIFRMOiBbJ1RMJywgJ1QnLCAnTCcsICdUUicsICdCTCcsICdSJywgJ0InLCAnQlInXSxcbiAgICBUOiBbJ1QnLCAnVFInLCAnVEwnLCAnUicsICdMJywgJ0JSJywgJ0JMJywgJ0InXSxcbiAgICBUUjogWydUUicsICdSJywgJ1QnLCAnQlInLCAnVEwnLCAnQicsICdMJywgJ0JMJ10sXG4gICAgUjogWydSJywgJ0JSJywgJ1RSJywgJ0InLCAnVCcsICdCTCcsICdUTCcsICdMJ10sXG4gICAgQlI6IFsnQlInLCAnQicsICdSJywgJ0JMJywgJ1RMJywgJ0wnLCAnVCcsICdUTCddLFxuICAgIEI6IFsnQicsICdCTCcsICdCUicsICdMJywgJ1InLCAnVEwnLCAnVFInLCAnVCddLFxuICAgIEJMOiBbJ0JMJywgJ0wnLCAnQicsICdUTCcsICdCUicsICdUJywgJ1InLCAnVFInXSxcbiAgICBMOiBbJ0wnLCAnVEwnLCAnQkwnLCAnVCcsICdCJywgJ1RSJywgJ0JSJywgJ1InXVxufTtcbmZ1bmN0aW9uIGlzRGlhZ29uYWwoZGlyZWN0aW9uKSB7XG4gICAgcmV0dXJuIGRpcmVjdGlvbiA9PT0gJ1RMJyB8fCBkaXJlY3Rpb24gPT09ICdUUicgfHwgZGlyZWN0aW9uID09PSAnQlInIHx8IGRpcmVjdGlvbiA9PT0gJ0JMJztcbn1cbmZ1bmN0aW9uIGJsb2NrSXNOb3RQcmV2KGJsb2NrLCBwcmV2VGFyZ2V0KSB7XG4gICAgcmV0dXJuIGJsb2NrLnBvaW50LnggIT09IHByZXZUYXJnZXQueCB8fCBibG9jay5wb2ludC55ICE9PSBwcmV2VGFyZ2V0Lnk7XG59XG52YXIgV29ybGQgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gV29ybGQod2lkdGgsIGhlaWdodCwgYmxvY2tTaXplKSB7XG4gICAgICAgIGlmICh3aWR0aCA9PT0gdm9pZCAwKSB7IHdpZHRoID0gMzIwOyB9XG4gICAgICAgIGlmIChoZWlnaHQgPT09IHZvaWQgMCkgeyBoZWlnaHQgPSAzMjA7IH1cbiAgICAgICAgaWYgKGJsb2NrU2l6ZSA9PT0gdm9pZCAwKSB7IGJsb2NrU2l6ZSA9IDIwOyB9XG4gICAgICAgIHRoaXMud2lkdGggPSB3aWR0aDtcbiAgICAgICAgdGhpcy5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgICAgIHRoaXMuYmxvY2tTaXplID0gYmxvY2tTaXplO1xuICAgICAgICB0aGlzLmNyZWF0ZUdyaWQoKTtcbiAgICB9XG4gICAgV29ybGQucHJvdG90eXBlLmNyZWF0ZUdyaWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuZ3JpZCA9IFtdO1xuICAgICAgICB2YXIgY29scyA9IE1hdGguZmxvb3IodGhpcy53aWR0aCAvIHRoaXMuYmxvY2tTaXplKTtcbiAgICAgICAgdmFyIHJvd3MgPSBNYXRoLmZsb29yKHRoaXMuaGVpZ2h0IC8gdGhpcy5ibG9ja1NpemUpO1xuICAgICAgICBmb3IgKHZhciBjID0gMDsgYyA8IGNvbHM7IGMrKykge1xuICAgICAgICAgICAgdGhpcy5ncmlkW2NdID0gW107XG4gICAgICAgICAgICBmb3IgKHZhciByID0gMDsgciA8IHJvd3M7IHIrKykge1xuICAgICAgICAgICAgICAgIHRoaXMuZ3JpZFtjXVtyXSA9IHtcbiAgICAgICAgICAgICAgICAgICAgcG9pbnQ6IG5ldyBnZW9tXzEuUG9pbnQoYyAqIHRoaXMuYmxvY2tTaXplICsgdGhpcy5ibG9ja1NpemUgLyAyLCByICogdGhpcy5ibG9ja1NpemUgKyB0aGlzLmJsb2NrU2l6ZSAvIDIpLFxuICAgICAgICAgICAgICAgICAgICBjb2x1bW46IGMsXG4gICAgICAgICAgICAgICAgICAgIHJvdzogcixcbiAgICAgICAgICAgICAgICAgICAgZmlsbGVkOiBmYWxzZSxcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICBXb3JsZC5wcm90b3R5cGUuZmlsbEJsb2NrID0gZnVuY3Rpb24gKHgsIHkpIHtcbiAgICAgICAgdmFyIGJsb2NrID0gdGhpcy5nZXRCbG9ja0Zyb21YWSh4LCB5KTtcbiAgICAgICAgaWYgKGJsb2NrKSB7XG4gICAgICAgICAgICBibG9jay5maWxsZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBibG9jayA/IGJsb2NrLnBvaW50LmNsb25lKCkgOiBudWxsO1xuICAgIH07XG4gICAgV29ybGQucHJvdG90eXBlLmNsZWFyQmxvY2sgPSBmdW5jdGlvbiAoeCwgeSkge1xuICAgICAgICB2YXIgYmxvY2sgPSB0aGlzLmdldEJsb2NrRnJvbVhZKHgsIHkpO1xuICAgICAgICBpZiAoYmxvY2spIHtcbiAgICAgICAgICAgIGJsb2NrLmZpbGxlZCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBibG9jayA/IGJsb2NrLnBvaW50LmNsb25lKCkgOiBudWxsO1xuICAgIH07XG4gICAgV29ybGQucHJvdG90eXBlLm5hdmlnYXRlV29ybGQgPSBmdW5jdGlvbiAoY3VycmVudCwgdGFyZ2V0LCBwcmV2VGFyZ2V0KSB7XG4gICAgICAgIHZhciBjdXJyZW50QmxvY2sgPSB0aGlzLmdldEJsb2NrRnJvbVhZKGN1cnJlbnQueCwgY3VycmVudC55KTtcbiAgICAgICAgaWYgKGN1cnJlbnRCbG9jaykge1xuICAgICAgICAgICAgdmFyIHJhZGlhbnMgPSBnZW9tXzEuUG9pbnQucmFkaWFucyhjdXJyZW50LCB0YXJnZXQpO1xuICAgICAgICAgICAgdmFyIHJhZGl1cyA9IE1hdGguc3FydCgodGhpcy5ibG9ja1NpemUgKyB0aGlzLmJsb2NrU2l6ZSkgKiAodGhpcy5ibG9ja1NpemUgKyB0aGlzLmJsb2NrU2l6ZSkpO1xuICAgICAgICAgICAgdmFyIHRhcmdldEJsb2NrID0gdGhpcy5nZXRCbG9ja0Zyb21YWShjdXJyZW50LnggKyBNYXRoLmNvcyhyYWRpYW5zKSAqIHJhZGl1cywgY3VycmVudC55ICsgTWF0aC5zaW4ocmFkaWFucykgKiByYWRpdXMpO1xuICAgICAgICAgICAgaWYgKHRhcmdldEJsb2NrKSB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0QmxvY2sgPSB0aGlzLmdldEJlc3RCbG9jayhjdXJyZW50QmxvY2ssIHRhcmdldEJsb2NrLCBwcmV2VGFyZ2V0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiAodGFyZ2V0QmxvY2sgfHwgY3VycmVudEJsb2NrKS5wb2ludDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGFyZ2V0O1xuICAgIH07XG4gICAgV29ybGQucHJvdG90eXBlLmdldEJlc3RCbG9jayA9IGZ1bmN0aW9uIChjdXJyZW50QmxvY2ssIHRhcmdldEJsb2NrLCBwcmV2VGFyZ2V0KSB7XG4gICAgICAgIHZhciBjeCA9IGN1cnJlbnRCbG9jay5jb2x1bW4sIGN5ID0gY3VycmVudEJsb2NrLnJvdztcbiAgICAgICAgdmFyIHR4ID0gdGFyZ2V0QmxvY2suY29sdW1uLCB0eSA9IHRhcmdldEJsb2NrLnJvdztcbiAgICAgICAgaWYgKGN4ID4gdHggJiYgY3kgPiB0eSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0T3BlbkJsb2NrKGN1cnJlbnRCbG9jaywgZ28uVEwsIHByZXZUYXJnZXQpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGN4ID09PSB0eCAmJiBjeSA+IHR5KSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5nZXRPcGVuQmxvY2soY3VycmVudEJsb2NrLCBnby5ULCBwcmV2VGFyZ2V0KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChjeCA8IHR4ICYmIGN5ID4gdHkpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdldE9wZW5CbG9jayhjdXJyZW50QmxvY2ssIGdvLlRSLCBwcmV2VGFyZ2V0KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChjeCA8IHR4ICYmIGN5ID09PSB0eSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0T3BlbkJsb2NrKGN1cnJlbnRCbG9jaywgZ28uUiwgcHJldlRhcmdldCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoY3ggPCB0eCAmJiBjeSA8IHR5KSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5nZXRPcGVuQmxvY2soY3VycmVudEJsb2NrLCBnby5CUiwgcHJldlRhcmdldCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoY3ggPT09IHR4ICYmIGN5IDwgdHkpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdldE9wZW5CbG9jayhjdXJyZW50QmxvY2ssIGdvLkIsIHByZXZUYXJnZXQpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGN4ID4gdHggJiYgY3kgPCB0eSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0T3BlbkJsb2NrKGN1cnJlbnRCbG9jaywgZ28uQkwsIHByZXZUYXJnZXQpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGN4ID4gdHggJiYgY3kgPT09IHR5KSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5nZXRPcGVuQmxvY2soY3VycmVudEJsb2NrLCBnby5MLCBwcmV2VGFyZ2V0KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY3VycmVudEJsb2NrO1xuICAgIH07XG4gICAgV29ybGQucHJvdG90eXBlLmdldE9wZW5CbG9jayA9IGZ1bmN0aW9uIChjdXJyZW50QmxvY2ssIGRpcmVjdGlvbnMsIHByZXZUYXJnZXQpIHtcbiAgICAgICAgZm9yICh2YXIgX2kgPSAwLCBkaXJlY3Rpb25zXzEgPSBkaXJlY3Rpb25zOyBfaSA8IGRpcmVjdGlvbnNfMS5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgIHZhciBkaXIgPSBkaXJlY3Rpb25zXzFbX2ldO1xuICAgICAgICAgICAgdmFyIGJsb2NrID0gdGhpcy5nZXRCbG9ja0ZvckRpcmVjdGlvbihjdXJyZW50QmxvY2ssIGRpcik7XG4gICAgICAgICAgICBpZiAoYmxvY2sgJiYgIWJsb2NrLmZpbGxlZCkge1xuICAgICAgICAgICAgICAgIGlmIChpc0RpYWdvbmFsKGRpcikpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGIxID0gdm9pZCAwO1xuICAgICAgICAgICAgICAgICAgICB2YXIgYjIgPSB2b2lkIDA7XG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaCAoZGlyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdUTCc6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYjEgPSB0aGlzLmdldEJsb2NrRm9yRGlyZWN0aW9uKGN1cnJlbnRCbG9jaywgJ1QnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiMiA9IHRoaXMuZ2V0QmxvY2tGb3JEaXJlY3Rpb24oY3VycmVudEJsb2NrLCAnTCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnVFInOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGIxID0gdGhpcy5nZXRCbG9ja0ZvckRpcmVjdGlvbihjdXJyZW50QmxvY2ssICdSJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYjIgPSB0aGlzLmdldEJsb2NrRm9yRGlyZWN0aW9uKGN1cnJlbnRCbG9jaywgJ1QnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ0JSJzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiMSA9IHRoaXMuZ2V0QmxvY2tGb3JEaXJlY3Rpb24oY3VycmVudEJsb2NrLCAnQicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGIyID0gdGhpcy5nZXRCbG9ja0ZvckRpcmVjdGlvbihjdXJyZW50QmxvY2ssICdSJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdCTCc6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYjEgPSB0aGlzLmdldEJsb2NrRm9yRGlyZWN0aW9uKGN1cnJlbnRCbG9jaywgJ0wnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiMiA9IHRoaXMuZ2V0QmxvY2tGb3JEaXJlY3Rpb24oY3VycmVudEJsb2NrLCAnQicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB2YXIgYjFPayA9IGIxICYmICFiMS5maWxsZWQ7XG4gICAgICAgICAgICAgICAgICAgIHZhciBiMk9rID0gYjIgJiYgIWIyLmZpbGxlZDtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGIxT2sgJiYgYjJPayAmJiBibG9ja0lzTm90UHJldihibG9jaywgcHJldlRhcmdldCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBibG9jaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChiMU9rICYmICFiMk9rICYmIGJsb2NrSXNOb3RQcmV2KGIxLCBwcmV2VGFyZ2V0KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGIxO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKCFiMU9rICYmIGIyT2sgJiYgYmxvY2tJc05vdFByZXYoYjIsIHByZXZUYXJnZXQpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYjI7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChibG9ja0lzTm90UHJldihibG9jaywgcHJldlRhcmdldCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBibG9jaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY3VycmVudEJsb2NrO1xuICAgIH07XG4gICAgV29ybGQucHJvdG90eXBlLmdldEJsb2NrRm9yRGlyZWN0aW9uID0gZnVuY3Rpb24gKGN1cnJlbnRCbG9jaywgZGlyZWN0aW9uKSB7XG4gICAgICAgIHZhciBjeCA9IGN1cnJlbnRCbG9jay5jb2x1bW4sIGN5ID0gY3VycmVudEJsb2NrLnJvdztcbiAgICAgICAgdmFyIF9hID0gdGhpcy5tYXhHcmlkTGVuZ3RocygpLCBjb2x1bW5zID0gX2EuY29sdW1ucywgcm93cyA9IF9hLnJvd3M7XG4gICAgICAgIHZhciBtYXhDb2x1bW4gPSBjb2x1bW5zIC0gMTtcbiAgICAgICAgdmFyIG1heFJvdyA9IHJvd3MgLSAxO1xuICAgICAgICBzd2l0Y2ggKGRpcmVjdGlvbikge1xuICAgICAgICAgICAgY2FzZSAnVEwnOlxuICAgICAgICAgICAgICAgIHJldHVybiBjeCA+IDAgJiYgY3kgPiAwID8gdGhpcy5ncmlkW2N4IC0gMV1bY3kgLSAxXSA6IG51bGw7XG4gICAgICAgICAgICBjYXNlICdUJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gY3kgPiAwID8gdGhpcy5ncmlkW2N4XVtjeSAtIDFdIDogbnVsbDtcbiAgICAgICAgICAgIGNhc2UgJ1RSJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gY3ggPCBtYXhDb2x1bW4gJiYgY3kgPiAwID8gdGhpcy5ncmlkW2N4ICsgMV1bY3kgLSAxXSA6IG51bGw7XG4gICAgICAgICAgICBjYXNlICdSJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gY3ggPCBtYXhDb2x1bW4gPyB0aGlzLmdyaWRbY3ggKyAxXVtjeV0gOiBudWxsO1xuICAgICAgICAgICAgY2FzZSAnQlInOlxuICAgICAgICAgICAgICAgIHJldHVybiBjeCA8IG1heENvbHVtbiAmJiBjeSA8IG1heFJvdyA/IHRoaXMuZ3JpZFtjeCArIDFdW2N5ICsgMV0gOiBudWxsO1xuICAgICAgICAgICAgY2FzZSAnQic6XG4gICAgICAgICAgICAgICAgcmV0dXJuIGN5IDwgbWF4Um93ID8gdGhpcy5ncmlkW2N4XVtjeSArIDFdIDogbnVsbDtcbiAgICAgICAgICAgIGNhc2UgJ0JMJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gY3ggPiAwICYmIGN5IDwgbWF4Um93ID8gdGhpcy5ncmlkW2N4IC0gMV1bY3kgKyAxXSA6IG51bGw7XG4gICAgICAgICAgICBjYXNlICdMJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gY3ggPiAwID8gdGhpcy5ncmlkW2N4IC0gMV1bY3ldIDogbnVsbDtcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFdvcmxkLnByb3RvdHlwZS5nZXRCbG9ja0Zyb21YWSA9IGZ1bmN0aW9uICh4LCB5KSB7XG4gICAgICAgIHZhciBfYSA9IHRoaXMubWF4R3JpZExlbmd0aHMoKSwgY29sdW1ucyA9IF9hLmNvbHVtbnMsIHJvd3MgPSBfYS5yb3dzO1xuICAgICAgICB2YXIgY29sID0gTWF0aC5tYXgoMCwgTWF0aC5taW4oY29sdW1ucyAtIDEsIE1hdGguZmxvb3IoeCAvIHRoaXMud2lkdGggKiBjb2x1bW5zKSkpO1xuICAgICAgICB2YXIgcm93ID0gTWF0aC5tYXgoMCwgTWF0aC5taW4ocm93cyAtIDEsIE1hdGguZmxvb3IoeSAvIHRoaXMuaGVpZ2h0ICogcm93cykpKTtcbiAgICAgICAgcmV0dXJuICh0aGlzLmdyaWRbY29sXSAmJiB0aGlzLmdyaWRbY29sXVtyb3ddKSA/IHRoaXMuZ3JpZFtjb2xdW3Jvd10gOiBudWxsO1xuICAgIH07XG4gICAgV29ybGQucHJvdG90eXBlLm1heEdyaWRMZW5ndGhzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4geyBjb2x1bW5zOiB0aGlzLm1heENvbHVtbnMoKSwgcm93czogdGhpcy5tYXhSb3dzKCkgfTtcbiAgICB9O1xuICAgIFdvcmxkLnByb3RvdHlwZS5tYXhDb2x1bW5zID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5ncmlkLmxlbmd0aDtcbiAgICB9O1xuICAgIFdvcmxkLnByb3RvdHlwZS5tYXhSb3dzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5ncmlkWzBdLmxlbmd0aDtcbiAgICB9O1xuICAgIHJldHVybiBXb3JsZDtcbn0oKSk7XG5leHBvcnRzLldvcmxkID0gV29ybGQ7XG4iXSwic291cmNlUm9vdCI6IiJ9