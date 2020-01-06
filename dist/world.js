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
    World.prototype.navigateWorld = function (current, target) {
        var currentBlock = this.getBlockFromXY(current.x, current.y);
        if (currentBlock) {
            var radians = geom_1.Point.radians(current, target);
            var radius = Math.sqrt((this.blockSize + this.blockSize) * (this.blockSize + this.blockSize));
            var targetBlock = this.getBlockFromXY(current.x + Math.cos(radians) * radius, current.y + Math.sin(radians) * radius);
            if (targetBlock) {
                targetBlock = this.getBestBlock(currentBlock, targetBlock);
            }
            return (targetBlock || currentBlock).point;
        }
        return target;
    };
    World.prototype.getBestBlock = function (currentBlock, targetBlock) {
        var cx = currentBlock.column, cy = currentBlock.row;
        var tx = targetBlock.column, ty = targetBlock.row;
        if (cx > tx && cy > ty) {
            return this.getOpenBlock(currentBlock, go.TL);
        }
        else if (cx === tx && cy > ty) {
            return this.getOpenBlock(currentBlock, go.T);
        }
        else if (cx < tx && cy > ty) {
            return this.getOpenBlock(currentBlock, go.TR);
        }
        else if (cx < tx && cy === ty) {
            return this.getOpenBlock(currentBlock, go.R);
        }
        else if (cx < tx && cy < ty) {
            return this.getOpenBlock(currentBlock, go.BR);
        }
        else if (cx === tx && cy < ty) {
            return this.getOpenBlock(currentBlock, go.B);
        }
        else if (cx > tx && cy < ty) {
            return this.getOpenBlock(currentBlock, go.BL);
        }
        else if (cx > tx && cy === ty) {
            return this.getOpenBlock(currentBlock, go.L);
        }
        return currentBlock;
    };
    World.prototype.getOpenBlock = function (currentBlock, directions) {
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
                    if (b1Ok && b2Ok) {
                        return block;
                    }
                    else if (b1Ok && !b2Ok) {
                        return b1;
                    }
                    else if (!b1Ok && b2Ok) {
                        return b2;
                    }
                }
                else {
                    return block;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Xb3JsZC93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vV29ybGQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vV29ybGQvLi9ub2RlX21vZHVsZXMvQGFkcmlhbmxhZm9uZC9nZW9tL2Rpc3QvZ2VvbS5qcyIsIndlYnBhY2s6Ly9Xb3JsZC8uL3NyYy93b3JsZC9pbmRleC50cyIsIndlYnBhY2s6Ly9Xb3JsZC8uL3NyYy93b3JsZC93b3JsZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDbEZBLGVBQWUsS0FBaUQsb0JBQW9CLFNBQThHLENBQUMsbUJBQW1CLG1CQUFtQixTQUFTLGNBQWMsNEJBQTRCLFlBQVks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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEIiwiZmlsZSI6IndvcmxkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoXCJXb3JsZFwiLCBbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJXb3JsZFwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJXb3JsZFwiXSA9IGZhY3RvcnkoKTtcbn0pKHdpbmRvdywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvd29ybGQvaW5kZXgudHNcIik7XG4iLCIhZnVuY3Rpb24odCxlKXtcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cyYmXCJvYmplY3RcIj09dHlwZW9mIG1vZHVsZT9tb2R1bGUuZXhwb3J0cz1lKCk6XCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZShcIkdlb21cIixbXSxlKTpcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cz9leHBvcnRzLkdlb209ZSgpOnQuR2VvbT1lKCl9KHdpbmRvdyxmdW5jdGlvbigpe3JldHVybiBmdW5jdGlvbih0KXt2YXIgZT17fTtmdW5jdGlvbiBuKHIpe2lmKGVbcl0pcmV0dXJuIGVbcl0uZXhwb3J0czt2YXIgbz1lW3JdPXtpOnIsbDohMSxleHBvcnRzOnt9fTtyZXR1cm4gdFtyXS5jYWxsKG8uZXhwb3J0cyxvLG8uZXhwb3J0cyxuKSxvLmw9ITAsby5leHBvcnRzfXJldHVybiBuLm09dCxuLmM9ZSxuLmQ9ZnVuY3Rpb24odCxlLHIpe24ubyh0LGUpfHxPYmplY3QuZGVmaW5lUHJvcGVydHkodCxlLHtlbnVtZXJhYmxlOiEwLGdldDpyfSl9LG4ucj1mdW5jdGlvbih0KXtcInVuZGVmaW5lZFwiIT10eXBlb2YgU3ltYm9sJiZTeW1ib2wudG9TdHJpbmdUYWcmJk9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFN5bWJvbC50b1N0cmluZ1RhZyx7dmFsdWU6XCJNb2R1bGVcIn0pLE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pfSxuLnQ9ZnVuY3Rpb24odCxlKXtpZigxJmUmJih0PW4odCkpLDgmZSlyZXR1cm4gdDtpZig0JmUmJlwib2JqZWN0XCI9PXR5cGVvZiB0JiZ0JiZ0Ll9fZXNNb2R1bGUpcmV0dXJuIHQ7dmFyIHI9T2JqZWN0LmNyZWF0ZShudWxsKTtpZihuLnIociksT2JqZWN0LmRlZmluZVByb3BlcnR5KHIsXCJkZWZhdWx0XCIse2VudW1lcmFibGU6ITAsdmFsdWU6dH0pLDImZSYmXCJzdHJpbmdcIiE9dHlwZW9mIHQpZm9yKHZhciBvIGluIHQpbi5kKHIsbyxmdW5jdGlvbihlKXtyZXR1cm4gdFtlXX0uYmluZChudWxsLG8pKTtyZXR1cm4gcn0sbi5uPWZ1bmN0aW9uKHQpe3ZhciBlPXQmJnQuX19lc01vZHVsZT9mdW5jdGlvbigpe3JldHVybiB0LmRlZmF1bHR9OmZ1bmN0aW9uKCl7cmV0dXJuIHR9O3JldHVybiBuLmQoZSxcImFcIixlKSxlfSxuLm89ZnVuY3Rpb24odCxlKXtyZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHQsZSl9LG4ucD1cIlwiLG4obi5zPTEpfShbZnVuY3Rpb24odCxlLG4pe1widXNlIHN0cmljdFwiO09iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pO3ZhciByPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gdCh0LGUpe3ZvaWQgMD09PXQmJih0PTApLHZvaWQgMD09PWUmJihlPTApLHRoaXMueD10LHRoaXMueT1lfXJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkodC5wcm90b3R5cGUsXCJkYXRhXCIse2dldDpmdW5jdGlvbigpe3JldHVybnt4OnRoaXMueCx5OnRoaXMueX19LGVudW1lcmFibGU6ITAsY29uZmlndXJhYmxlOiEwfSksdC5wcm90b3R5cGUuY2xvbmU9ZnVuY3Rpb24oKXtyZXR1cm4gbmV3IHQodGhpcy54LHRoaXMueSl9LHQucHJvdG90eXBlLmFkZD1mdW5jdGlvbih0KXtyZXR1cm4gdGhpcy54Kz10LngsdGhpcy55Kz10LnksdGhpc30sdC5wcm90b3R5cGUuc3VidHJhY3Q9ZnVuY3Rpb24odCl7cmV0dXJuIHRoaXMueC09dC54LHRoaXMueS09dC55LHRoaXN9LHQucHJvdG90eXBlLnRvU3RyaW5nPWZ1bmN0aW9uKCl7cmV0dXJuIEpTT04uc3RyaW5naWZ5KHRoaXMuZGF0YSl9LHQuZGlzdGFuY2U9ZnVuY3Rpb24odCxlKXtyZXR1cm4gTWF0aC5zcXJ0KCh0LngtZS54KSoodC54LWUueCkrKHQueS1lLnkpKih0LnktZS55KSl9LHQucmFkaWFucz1mdW5jdGlvbih0LGUpe3JldHVybiBNYXRoLmF0YW4yKGUueS10LnksZS54LXQueCl9LHR9KCk7ZS5kZWZhdWx0PXJ9LGZ1bmN0aW9uKHQsZSxuKXtcInVzZSBzdHJpY3RcIjtPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KTt2YXIgcj1uKDIpO2UuQW5nbGU9ci5kZWZhdWx0O3ZhciBvPW4oMCk7ZS5Qb2ludD1vLmRlZmF1bHQ7dmFyIGk9bigzKTtlLlZlY3Rvcj1pLmRlZmF1bHR9LGZ1bmN0aW9uKHQsZSxuKXtcInVzZSBzdHJpY3RcIjtPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KTt2YXIgcj1mdW5jdGlvbigpe2Z1bmN0aW9uIHQoKXt9cmV0dXJuIHQudG9SYWRpYW5zPWZ1bmN0aW9uKHQpe3JldHVybiB0Kk1hdGguUEkvMTgwfSx0LnRvRGVncmVlcz1mdW5jdGlvbih0KXtyZXR1cm4gMTgwKnQvTWF0aC5QSX0sdC5pbnRlcnBvbGF0ZT1mdW5jdGlvbihlLG4scil7cmV0dXJuIHQubm9ybWFsaXplKGUrdC5kZWx0YShlLG4pKnIpfSx0LmRlbHRhPWZ1bmN0aW9uKGUsbil7dmFyIHI9dC5ub3JtYWxpemUoZSksbz10Lm5vcm1hbGl6ZShuKSxpPW8tcjtyZXR1cm4gTWF0aC5hYnMoaSk+TWF0aC5QSSYmKGk9by0yKk1hdGguUEktciksaX0sdC5ub3JtYWxpemU9ZnVuY3Rpb24odCl7dmFyIGU9dCUoMipNYXRoLlBJKTtyZXR1cm4gZTwwJiYoZSs9MipNYXRoLlBJKSxlfSx0fSgpO2UuZGVmYXVsdD1yfSxmdW5jdGlvbih0LGUsbil7XCJ1c2Ugc3RyaWN0XCI7T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSk7dmFyIHI9bigwKSxvPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gdCh0LGUsbil7dm9pZCAwPT09dCYmKHQ9MCksdm9pZCAwPT09ZSYmKGU9MCksdm9pZCAwPT09biYmKG49MCksdGhpcy5tb2RlbD17fSx0IGluc3RhbmNlb2Ygci5kZWZhdWx0Pyh0aGlzLm1vZGVsLnBvaW50PXQuY2xvbmUoKSx0aGlzLm1vZGVsLnJhZGlhbnM9ZSk6KHRoaXMubW9kZWwucG9pbnQ9bmV3IHIuZGVmYXVsdCh0LGUpLHRoaXMubW9kZWwucmFkaWFucz1uKX1yZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KHQucHJvdG90eXBlLFwicG9pbnRcIix7Z2V0OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMubW9kZWwucG9pbnQuY2xvbmUoKX0sZW51bWVyYWJsZTohMCxjb25maWd1cmFibGU6ITB9KSxPYmplY3QuZGVmaW5lUHJvcGVydHkodC5wcm90b3R5cGUsXCJ4XCIse2dldDpmdW5jdGlvbigpe3JldHVybiB0aGlzLm1vZGVsLnBvaW50Lnh9LHNldDpmdW5jdGlvbih0KXt0aGlzLm1vZGVsLnBvaW50Lng9dH0sZW51bWVyYWJsZTohMCxjb25maWd1cmFibGU6ITB9KSxPYmplY3QuZGVmaW5lUHJvcGVydHkodC5wcm90b3R5cGUsXCJ5XCIse2dldDpmdW5jdGlvbigpe3JldHVybiB0aGlzLm1vZGVsLnBvaW50Lnl9LHNldDpmdW5jdGlvbih0KXt0aGlzLm1vZGVsLnBvaW50Lnk9dH0sZW51bWVyYWJsZTohMCxjb25maWd1cmFibGU6ITB9KSxPYmplY3QuZGVmaW5lUHJvcGVydHkodC5wcm90b3R5cGUsXCJyYWRpYW5zXCIse2dldDpmdW5jdGlvbigpe3JldHVybiB0aGlzLm1vZGVsLnJhZGlhbnN9LHNldDpmdW5jdGlvbih0KXt0aGlzLm1vZGVsLnJhZGlhbnM9dH0sZW51bWVyYWJsZTohMCxjb25maWd1cmFibGU6ITB9KSxPYmplY3QuZGVmaW5lUHJvcGVydHkodC5wcm90b3R5cGUsXCJkYXRhXCIse2dldDpmdW5jdGlvbigpe3JldHVybnt4OnRoaXMueCx5OnRoaXMueSxyYWRpYW5zOnRoaXMucmFkaWFuc319LGVudW1lcmFibGU6ITAsY29uZmlndXJhYmxlOiEwfSksdC5wcm90b3R5cGUuY2xvbmU9ZnVuY3Rpb24oKXtyZXR1cm4gbmV3IHQodGhpcy5wb2ludCx0aGlzLnJhZGlhbnMpfSx0LnByb3RvdHlwZS50b1N0cmluZz1mdW5jdGlvbigpe3JldHVybiBKU09OLnN0cmluZ2lmeSh0aGlzLmRhdGEpfSx0fSgpO2UuZGVmYXVsdD1vfV0pfSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1nZW9tLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuZnVuY3Rpb24gX19leHBvcnQobSkge1xuICAgIGZvciAodmFyIHAgaW4gbSkgaWYgKCFleHBvcnRzLmhhc093blByb3BlcnR5KHApKSBleHBvcnRzW3BdID0gbVtwXTtcbn1cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbl9fZXhwb3J0KHJlcXVpcmUoXCIuL3dvcmxkXCIpKTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIGdlb21fMSA9IHJlcXVpcmUoXCJAYWRyaWFubGFmb25kL2dlb21cIik7XG52YXIgZ28gPSB7XG4gICAgVEw6IFsnVEwnLCAnVCcsICdMJywgJ1RSJywgJ0JMJywgJ1InLCAnQicsICdCUiddLFxuICAgIFQ6IFsnVCcsICdUUicsICdUTCcsICdSJywgJ0wnLCAnQlInLCAnQkwnLCAnQiddLFxuICAgIFRSOiBbJ1RSJywgJ1InLCAnVCcsICdCUicsICdUTCcsICdCJywgJ0wnLCAnQkwnXSxcbiAgICBSOiBbJ1InLCAnQlInLCAnVFInLCAnQicsICdUJywgJ0JMJywgJ1RMJywgJ0wnXSxcbiAgICBCUjogWydCUicsICdCJywgJ1InLCAnQkwnLCAnVEwnLCAnTCcsICdUJywgJ1RMJ10sXG4gICAgQjogWydCJywgJ0JMJywgJ0JSJywgJ0wnLCAnUicsICdUTCcsICdUUicsICdUJ10sXG4gICAgQkw6IFsnQkwnLCAnTCcsICdCJywgJ1RMJywgJ0JSJywgJ1QnLCAnUicsICdUUiddLFxuICAgIEw6IFsnTCcsICdUTCcsICdCTCcsICdUJywgJ0InLCAnVFInLCAnQlInLCAnUiddXG59O1xuZnVuY3Rpb24gaXNEaWFnb25hbChkaXJlY3Rpb24pIHtcbiAgICByZXR1cm4gZGlyZWN0aW9uID09PSAnVEwnIHx8IGRpcmVjdGlvbiA9PT0gJ1RSJyB8fCBkaXJlY3Rpb24gPT09ICdCUicgfHwgZGlyZWN0aW9uID09PSAnQkwnO1xufVxudmFyIFdvcmxkID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFdvcmxkKHdpZHRoLCBoZWlnaHQsIGJsb2NrU2l6ZSkge1xuICAgICAgICBpZiAod2lkdGggPT09IHZvaWQgMCkgeyB3aWR0aCA9IDMyMDsgfVxuICAgICAgICBpZiAoaGVpZ2h0ID09PSB2b2lkIDApIHsgaGVpZ2h0ID0gMzIwOyB9XG4gICAgICAgIGlmIChibG9ja1NpemUgPT09IHZvaWQgMCkgeyBibG9ja1NpemUgPSAyMDsgfVxuICAgICAgICB0aGlzLndpZHRoID0gd2lkdGg7XG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgICAgICB0aGlzLmJsb2NrU2l6ZSA9IGJsb2NrU2l6ZTtcbiAgICAgICAgdGhpcy5jcmVhdGVHcmlkKCk7XG4gICAgfVxuICAgIFdvcmxkLnByb3RvdHlwZS5jcmVhdGVHcmlkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmdyaWQgPSBbXTtcbiAgICAgICAgdmFyIGNvbHMgPSBNYXRoLmZsb29yKHRoaXMud2lkdGggLyB0aGlzLmJsb2NrU2l6ZSk7XG4gICAgICAgIHZhciByb3dzID0gTWF0aC5mbG9vcih0aGlzLmhlaWdodCAvIHRoaXMuYmxvY2tTaXplKTtcbiAgICAgICAgZm9yICh2YXIgYyA9IDA7IGMgPCBjb2xzOyBjKyspIHtcbiAgICAgICAgICAgIHRoaXMuZ3JpZFtjXSA9IFtdO1xuICAgICAgICAgICAgZm9yICh2YXIgciA9IDA7IHIgPCByb3dzOyByKyspIHtcbiAgICAgICAgICAgICAgICB0aGlzLmdyaWRbY11bcl0gPSB7XG4gICAgICAgICAgICAgICAgICAgIHBvaW50OiBuZXcgZ2VvbV8xLlBvaW50KGMgKiB0aGlzLmJsb2NrU2l6ZSArIHRoaXMuYmxvY2tTaXplIC8gMiwgciAqIHRoaXMuYmxvY2tTaXplICsgdGhpcy5ibG9ja1NpemUgLyAyKSxcbiAgICAgICAgICAgICAgICAgICAgY29sdW1uOiBjLFxuICAgICAgICAgICAgICAgICAgICByb3c6IHIsXG4gICAgICAgICAgICAgICAgICAgIGZpbGxlZDogZmFsc2UsXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgV29ybGQucHJvdG90eXBlLmZpbGxCbG9jayA9IGZ1bmN0aW9uICh4LCB5KSB7XG4gICAgICAgIHZhciBibG9jayA9IHRoaXMuZ2V0QmxvY2tGcm9tWFkoeCwgeSk7XG4gICAgICAgIGlmIChibG9jaykge1xuICAgICAgICAgICAgYmxvY2suZmlsbGVkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYmxvY2sgPyBibG9jay5wb2ludC5jbG9uZSgpIDogbnVsbDtcbiAgICB9O1xuICAgIFdvcmxkLnByb3RvdHlwZS5jbGVhckJsb2NrID0gZnVuY3Rpb24gKHgsIHkpIHtcbiAgICAgICAgdmFyIGJsb2NrID0gdGhpcy5nZXRCbG9ja0Zyb21YWSh4LCB5KTtcbiAgICAgICAgaWYgKGJsb2NrKSB7XG4gICAgICAgICAgICBibG9jay5maWxsZWQgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYmxvY2sgPyBibG9jay5wb2ludC5jbG9uZSgpIDogbnVsbDtcbiAgICB9O1xuICAgIFdvcmxkLnByb3RvdHlwZS5uYXZpZ2F0ZVdvcmxkID0gZnVuY3Rpb24gKGN1cnJlbnQsIHRhcmdldCkge1xuICAgICAgICB2YXIgY3VycmVudEJsb2NrID0gdGhpcy5nZXRCbG9ja0Zyb21YWShjdXJyZW50LngsIGN1cnJlbnQueSk7XG4gICAgICAgIGlmIChjdXJyZW50QmxvY2spIHtcbiAgICAgICAgICAgIHZhciByYWRpYW5zID0gZ2VvbV8xLlBvaW50LnJhZGlhbnMoY3VycmVudCwgdGFyZ2V0KTtcbiAgICAgICAgICAgIHZhciByYWRpdXMgPSBNYXRoLnNxcnQoKHRoaXMuYmxvY2tTaXplICsgdGhpcy5ibG9ja1NpemUpICogKHRoaXMuYmxvY2tTaXplICsgdGhpcy5ibG9ja1NpemUpKTtcbiAgICAgICAgICAgIHZhciB0YXJnZXRCbG9jayA9IHRoaXMuZ2V0QmxvY2tGcm9tWFkoY3VycmVudC54ICsgTWF0aC5jb3MocmFkaWFucykgKiByYWRpdXMsIGN1cnJlbnQueSArIE1hdGguc2luKHJhZGlhbnMpICogcmFkaXVzKTtcbiAgICAgICAgICAgIGlmICh0YXJnZXRCbG9jaykge1xuICAgICAgICAgICAgICAgIHRhcmdldEJsb2NrID0gdGhpcy5nZXRCZXN0QmxvY2soY3VycmVudEJsb2NrLCB0YXJnZXRCbG9jayk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gKHRhcmdldEJsb2NrIHx8IGN1cnJlbnRCbG9jaykucG9pbnQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRhcmdldDtcbiAgICB9O1xuICAgIFdvcmxkLnByb3RvdHlwZS5nZXRCZXN0QmxvY2sgPSBmdW5jdGlvbiAoY3VycmVudEJsb2NrLCB0YXJnZXRCbG9jaykge1xuICAgICAgICB2YXIgY3ggPSBjdXJyZW50QmxvY2suY29sdW1uLCBjeSA9IGN1cnJlbnRCbG9jay5yb3c7XG4gICAgICAgIHZhciB0eCA9IHRhcmdldEJsb2NrLmNvbHVtbiwgdHkgPSB0YXJnZXRCbG9jay5yb3c7XG4gICAgICAgIGlmIChjeCA+IHR4ICYmIGN5ID4gdHkpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdldE9wZW5CbG9jayhjdXJyZW50QmxvY2ssIGdvLlRMKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChjeCA9PT0gdHggJiYgY3kgPiB0eSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0T3BlbkJsb2NrKGN1cnJlbnRCbG9jaywgZ28uVCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoY3ggPCB0eCAmJiBjeSA+IHR5KSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5nZXRPcGVuQmxvY2soY3VycmVudEJsb2NrLCBnby5UUik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoY3ggPCB0eCAmJiBjeSA9PT0gdHkpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdldE9wZW5CbG9jayhjdXJyZW50QmxvY2ssIGdvLlIpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGN4IDwgdHggJiYgY3kgPCB0eSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0T3BlbkJsb2NrKGN1cnJlbnRCbG9jaywgZ28uQlIpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGN4ID09PSB0eCAmJiBjeSA8IHR5KSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5nZXRPcGVuQmxvY2soY3VycmVudEJsb2NrLCBnby5CKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChjeCA+IHR4ICYmIGN5IDwgdHkpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdldE9wZW5CbG9jayhjdXJyZW50QmxvY2ssIGdvLkJMKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChjeCA+IHR4ICYmIGN5ID09PSB0eSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0T3BlbkJsb2NrKGN1cnJlbnRCbG9jaywgZ28uTCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGN1cnJlbnRCbG9jaztcbiAgICB9O1xuICAgIFdvcmxkLnByb3RvdHlwZS5nZXRPcGVuQmxvY2sgPSBmdW5jdGlvbiAoY3VycmVudEJsb2NrLCBkaXJlY3Rpb25zKSB7XG4gICAgICAgIGZvciAodmFyIF9pID0gMCwgZGlyZWN0aW9uc18xID0gZGlyZWN0aW9uczsgX2kgPCBkaXJlY3Rpb25zXzEubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICB2YXIgZGlyID0gZGlyZWN0aW9uc18xW19pXTtcbiAgICAgICAgICAgIHZhciBibG9jayA9IHRoaXMuZ2V0QmxvY2tGb3JEaXJlY3Rpb24oY3VycmVudEJsb2NrLCBkaXIpO1xuICAgICAgICAgICAgaWYgKGJsb2NrICYmICFibG9jay5maWxsZWQpIHtcbiAgICAgICAgICAgICAgICBpZiAoaXNEaWFnb25hbChkaXIpKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBiMSA9IHZvaWQgMDtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGIyID0gdm9pZCAwO1xuICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKGRpcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnVEwnOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGIxID0gdGhpcy5nZXRCbG9ja0ZvckRpcmVjdGlvbihjdXJyZW50QmxvY2ssICdUJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYjIgPSB0aGlzLmdldEJsb2NrRm9yRGlyZWN0aW9uKGN1cnJlbnRCbG9jaywgJ0wnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ1RSJzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiMSA9IHRoaXMuZ2V0QmxvY2tGb3JEaXJlY3Rpb24oY3VycmVudEJsb2NrLCAnUicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGIyID0gdGhpcy5nZXRCbG9ja0ZvckRpcmVjdGlvbihjdXJyZW50QmxvY2ssICdUJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdCUic6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYjEgPSB0aGlzLmdldEJsb2NrRm9yRGlyZWN0aW9uKGN1cnJlbnRCbG9jaywgJ0InKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiMiA9IHRoaXMuZ2V0QmxvY2tGb3JEaXJlY3Rpb24oY3VycmVudEJsb2NrLCAnUicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnQkwnOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGIxID0gdGhpcy5nZXRCbG9ja0ZvckRpcmVjdGlvbihjdXJyZW50QmxvY2ssICdMJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYjIgPSB0aGlzLmdldEJsb2NrRm9yRGlyZWN0aW9uKGN1cnJlbnRCbG9jaywgJ0InKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdmFyIGIxT2sgPSBiMSAmJiAhYjEuZmlsbGVkO1xuICAgICAgICAgICAgICAgICAgICB2YXIgYjJPayA9IGIyICYmICFiMi5maWxsZWQ7XG4gICAgICAgICAgICAgICAgICAgIGlmIChiMU9rICYmIGIyT2spIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBibG9jaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChiMU9rICYmICFiMk9rKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYjE7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoIWIxT2sgJiYgYjJPaykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGIyO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYmxvY2s7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjdXJyZW50QmxvY2s7XG4gICAgfTtcbiAgICBXb3JsZC5wcm90b3R5cGUuZ2V0QmxvY2tGb3JEaXJlY3Rpb24gPSBmdW5jdGlvbiAoY3VycmVudEJsb2NrLCBkaXJlY3Rpb24pIHtcbiAgICAgICAgdmFyIGN4ID0gY3VycmVudEJsb2NrLmNvbHVtbiwgY3kgPSBjdXJyZW50QmxvY2sucm93O1xuICAgICAgICB2YXIgX2EgPSB0aGlzLm1heEdyaWRMZW5ndGhzKCksIGNvbHVtbnMgPSBfYS5jb2x1bW5zLCByb3dzID0gX2Eucm93cztcbiAgICAgICAgdmFyIG1heENvbHVtbiA9IGNvbHVtbnMgLSAxO1xuICAgICAgICB2YXIgbWF4Um93ID0gcm93cyAtIDE7XG4gICAgICAgIHN3aXRjaCAoZGlyZWN0aW9uKSB7XG4gICAgICAgICAgICBjYXNlICdUTCc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIGN4ID4gMCAmJiBjeSA+IDAgPyB0aGlzLmdyaWRbY3ggLSAxXVtjeSAtIDFdIDogbnVsbDtcbiAgICAgICAgICAgIGNhc2UgJ1QnOlxuICAgICAgICAgICAgICAgIHJldHVybiBjeSA+IDAgPyB0aGlzLmdyaWRbY3hdW2N5IC0gMV0gOiBudWxsO1xuICAgICAgICAgICAgY2FzZSAnVFInOlxuICAgICAgICAgICAgICAgIHJldHVybiBjeCA8IG1heENvbHVtbiAmJiBjeSA+IDAgPyB0aGlzLmdyaWRbY3ggKyAxXVtjeSAtIDFdIDogbnVsbDtcbiAgICAgICAgICAgIGNhc2UgJ1InOlxuICAgICAgICAgICAgICAgIHJldHVybiBjeCA8IG1heENvbHVtbiA/IHRoaXMuZ3JpZFtjeCArIDFdW2N5XSA6IG51bGw7XG4gICAgICAgICAgICBjYXNlICdCUic6XG4gICAgICAgICAgICAgICAgcmV0dXJuIGN4IDwgbWF4Q29sdW1uICYmIGN5IDwgbWF4Um93ID8gdGhpcy5ncmlkW2N4ICsgMV1bY3kgKyAxXSA6IG51bGw7XG4gICAgICAgICAgICBjYXNlICdCJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gY3kgPCBtYXhSb3cgPyB0aGlzLmdyaWRbY3hdW2N5ICsgMV0gOiBudWxsO1xuICAgICAgICAgICAgY2FzZSAnQkwnOlxuICAgICAgICAgICAgICAgIHJldHVybiBjeCA+IDAgJiYgY3kgPCBtYXhSb3cgPyB0aGlzLmdyaWRbY3ggLSAxXVtjeSArIDFdIDogbnVsbDtcbiAgICAgICAgICAgIGNhc2UgJ0wnOlxuICAgICAgICAgICAgICAgIHJldHVybiBjeCA+IDAgPyB0aGlzLmdyaWRbY3ggLSAxXVtjeV0gOiBudWxsO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgIH07XG4gICAgV29ybGQucHJvdG90eXBlLmdldEJsb2NrRnJvbVhZID0gZnVuY3Rpb24gKHgsIHkpIHtcbiAgICAgICAgdmFyIF9hID0gdGhpcy5tYXhHcmlkTGVuZ3RocygpLCBjb2x1bW5zID0gX2EuY29sdW1ucywgcm93cyA9IF9hLnJvd3M7XG4gICAgICAgIHZhciBjb2wgPSBNYXRoLm1heCgwLCBNYXRoLm1pbihjb2x1bW5zIC0gMSwgTWF0aC5mbG9vcih4IC8gdGhpcy53aWR0aCAqIGNvbHVtbnMpKSk7XG4gICAgICAgIHZhciByb3cgPSBNYXRoLm1heCgwLCBNYXRoLm1pbihyb3dzIC0gMSwgTWF0aC5mbG9vcih5IC8gdGhpcy5oZWlnaHQgKiByb3dzKSkpO1xuICAgICAgICByZXR1cm4gKHRoaXMuZ3JpZFtjb2xdICYmIHRoaXMuZ3JpZFtjb2xdW3Jvd10pID8gdGhpcy5ncmlkW2NvbF1bcm93XSA6IG51bGw7XG4gICAgfTtcbiAgICBXb3JsZC5wcm90b3R5cGUubWF4R3JpZExlbmd0aHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB7IGNvbHVtbnM6IHRoaXMubWF4Q29sdW1ucygpLCByb3dzOiB0aGlzLm1heFJvd3MoKSB9O1xuICAgIH07XG4gICAgV29ybGQucHJvdG90eXBlLm1heENvbHVtbnMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdyaWQubGVuZ3RoO1xuICAgIH07XG4gICAgV29ybGQucHJvdG90eXBlLm1heFJvd3MgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdyaWRbMF0ubGVuZ3RoO1xuICAgIH07XG4gICAgcmV0dXJuIFdvcmxkO1xufSgpKTtcbmV4cG9ydHMuV29ybGQgPSBXb3JsZDtcbiJdLCJzb3VyY2VSb290IjoiIn0=