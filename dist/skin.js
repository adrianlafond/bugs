(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("Skin", [], factory);
	else if(typeof exports === 'object')
		exports["Skin"] = factory();
	else
		root["Skin"] = factory();
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/skin/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/skin/index.ts":
/*!***************************!*\
  !*** ./src/skin/index.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var pixi_1 = __webpack_require__(/*! ./pixi */ "./src/skin/pixi.ts");
exports.Pixi = pixi_1.Pixi;


/***/ }),

/***/ "./src/skin/pixi.ts":
/*!**************************!*\
  !*** ./src/skin/pixi.ts ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var BODY_RADIUS = 8;
var Pixi = /** @class */ (function () {
    function Pixi(bug, app) {
        this.bug = bug;
        this.app = app;
        this.legs = [];
        this.createParts();
        this.app.stage.addChild(this.container);
        this.render();
    }
    Pixi.prototype.render = function (delta) {
        var _this = this;
        if (delta === void 0) { delta = 1; }
        this.bug.tick(delta);
        this.destroyLegs();
        this.segments.forEach(function (segment, index) {
            var bugSegment = _this.bug.segments[index];
            segment.x = bugSegment.x;
            segment.y = bugSegment.y;
            segment.rotation = bugSegment.radians;
            bugSegment.legs.forEach(function (side) {
                side.forEach(function (leg) {
                    var gfx = new PIXI.Graphics();
                    gfx.lineStyle(1, 0x000000, 1);
                    leg.forEach(function (point, index) {
                        var method = index === 0 ? 'moveTo' : 'lineTo';
                        gfx[method](point.x, point.y);
                    });
                    _this.legs.push(gfx);
                    _this.container.addChild(gfx);
                });
            });
        });
        return this;
    };
    Pixi.prototype.createParts = function () {
        this.container = new PIXI.Container();
        this.createSegments();
    };
    Pixi.prototype.createSegments = function () {
        var _this = this;
        this.segments = this.bug.segments.map(function () {
            var container = new PIXI.Container();
            container.pivot = new PIXI.Point(BODY_RADIUS, BODY_RADIUS);
            var gfx = new PIXI.Graphics();
            gfx.lineStyle(1, 0x000000, 1);
            gfx.beginFill(0x808080);
            gfx.drawCircle(BODY_RADIUS, BODY_RADIUS, BODY_RADIUS);
            gfx.endFill();
            var texture = _this.app.renderer.generateTexture(gfx, 1, 1);
            var sprite = new PIXI.Sprite(texture);
            container.addChild(sprite);
            container.addChild(_this.createFace());
            _this.container.addChild(container);
            return container;
        });
    };
    Pixi.prototype.createFace = function () {
        var x = BODY_RADIUS;
        var y = BODY_RADIUS;
        var line1 = new PIXI.Graphics();
        line1.lineStyle(1, 0x000000, 1);
        line1.moveTo(x + 1, y - 3);
        line1.lineTo(x + 5, y - 3);
        var line2 = new PIXI.Graphics();
        line2.lineStyle(1, 0x000000, 1);
        line2.moveTo(x + 3, y - 1);
        line2.lineTo(x + 3, y - 5);
        var line3 = new PIXI.Graphics();
        line3.lineStyle(1, 0x000000, 1);
        line3.moveTo(x + 1, y + 3);
        line3.lineTo(x + 5, y + 3);
        var line4 = new PIXI.Graphics();
        line4.lineStyle(1, 0x000000, 1);
        line4.moveTo(x + 3, y + 1);
        line4.lineTo(x + 3, y + 5);
        var face = new PIXI.Container();
        face.addChild(line1);
        face.addChild(line2);
        face.addChild(line3);
        face.addChild(line4);
        return face;
    };
    Pixi.prototype.destroyLegs = function () {
        this.legs.forEach(function (leg) {
            leg.parent.removeChild(leg);
            leg.destroy();
        });
        this.legs = [];
    };
    return Pixi;
}());
exports.Pixi = Pixi;


/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Ta2luL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9Ta2luL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL1NraW4vLi9zcmMvc2tpbi9pbmRleC50cyIsIndlYnBhY2s6Ly9Ta2luLy4vc3JjL3NraW4vcGl4aS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGYTtBQUNiLDhDQUE4QyxjQUFjO0FBQzVELGFBQWEsbUJBQU8sQ0FBQyxrQ0FBUTtBQUM3Qjs7Ozs7Ozs7Ozs7OztBQ0hhO0FBQ2IsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLFdBQVc7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEIiwiZmlsZSI6InNraW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShcIlNraW5cIiwgW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiU2tpblwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJTa2luXCJdID0gZmFjdG9yeSgpO1xufSkod2luZG93LCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9za2luL2luZGV4LnRzXCIpO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgcGl4aV8xID0gcmVxdWlyZShcIi4vcGl4aVwiKTtcbmV4cG9ydHMuUGl4aSA9IHBpeGlfMS5QaXhpO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgQk9EWV9SQURJVVMgPSA4O1xudmFyIFBpeGkgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gUGl4aShidWcsIGFwcCkge1xuICAgICAgICB0aGlzLmJ1ZyA9IGJ1ZztcbiAgICAgICAgdGhpcy5hcHAgPSBhcHA7XG4gICAgICAgIHRoaXMubGVncyA9IFtdO1xuICAgICAgICB0aGlzLmNyZWF0ZVBhcnRzKCk7XG4gICAgICAgIHRoaXMuYXBwLnN0YWdlLmFkZENoaWxkKHRoaXMuY29udGFpbmVyKTtcbiAgICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICB9XG4gICAgUGl4aS5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gKGRlbHRhKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIGlmIChkZWx0YSA9PT0gdm9pZCAwKSB7IGRlbHRhID0gMTsgfVxuICAgICAgICB0aGlzLmJ1Zy50aWNrKGRlbHRhKTtcbiAgICAgICAgdGhpcy5kZXN0cm95TGVncygpO1xuICAgICAgICB0aGlzLnNlZ21lbnRzLmZvckVhY2goZnVuY3Rpb24gKHNlZ21lbnQsIGluZGV4KSB7XG4gICAgICAgICAgICB2YXIgYnVnU2VnbWVudCA9IF90aGlzLmJ1Zy5zZWdtZW50c1tpbmRleF07XG4gICAgICAgICAgICBzZWdtZW50LnggPSBidWdTZWdtZW50Lng7XG4gICAgICAgICAgICBzZWdtZW50LnkgPSBidWdTZWdtZW50Lnk7XG4gICAgICAgICAgICBzZWdtZW50LnJvdGF0aW9uID0gYnVnU2VnbWVudC5yYWRpYW5zO1xuICAgICAgICAgICAgYnVnU2VnbWVudC5sZWdzLmZvckVhY2goZnVuY3Rpb24gKHNpZGUpIHtcbiAgICAgICAgICAgICAgICBzaWRlLmZvckVhY2goZnVuY3Rpb24gKGxlZykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgZ2Z4ID0gbmV3IFBJWEkuR3JhcGhpY3MoKTtcbiAgICAgICAgICAgICAgICAgICAgZ2Z4LmxpbmVTdHlsZSgxLCAweDAwMDAwMCwgMSk7XG4gICAgICAgICAgICAgICAgICAgIGxlZy5mb3JFYWNoKGZ1bmN0aW9uIChwb2ludCwgaW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtZXRob2QgPSBpbmRleCA9PT0gMCA/ICdtb3ZlVG8nIDogJ2xpbmVUbyc7XG4gICAgICAgICAgICAgICAgICAgICAgICBnZnhbbWV0aG9kXShwb2ludC54LCBwb2ludC55KTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLmxlZ3MucHVzaChnZngpO1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy5jb250YWluZXIuYWRkQ2hpbGQoZ2Z4KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcbiAgICBQaXhpLnByb3RvdHlwZS5jcmVhdGVQYXJ0cyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5jb250YWluZXIgPSBuZXcgUElYSS5Db250YWluZXIoKTtcbiAgICAgICAgdGhpcy5jcmVhdGVTZWdtZW50cygpO1xuICAgIH07XG4gICAgUGl4aS5wcm90b3R5cGUuY3JlYXRlU2VnbWVudHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHRoaXMuc2VnbWVudHMgPSB0aGlzLmJ1Zy5zZWdtZW50cy5tYXAoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGNvbnRhaW5lciA9IG5ldyBQSVhJLkNvbnRhaW5lcigpO1xuICAgICAgICAgICAgY29udGFpbmVyLnBpdm90ID0gbmV3IFBJWEkuUG9pbnQoQk9EWV9SQURJVVMsIEJPRFlfUkFESVVTKTtcbiAgICAgICAgICAgIHZhciBnZnggPSBuZXcgUElYSS5HcmFwaGljcygpO1xuICAgICAgICAgICAgZ2Z4LmxpbmVTdHlsZSgxLCAweDAwMDAwMCwgMSk7XG4gICAgICAgICAgICBnZnguYmVnaW5GaWxsKDB4ODA4MDgwKTtcbiAgICAgICAgICAgIGdmeC5kcmF3Q2lyY2xlKEJPRFlfUkFESVVTLCBCT0RZX1JBRElVUywgQk9EWV9SQURJVVMpO1xuICAgICAgICAgICAgZ2Z4LmVuZEZpbGwoKTtcbiAgICAgICAgICAgIHZhciB0ZXh0dXJlID0gX3RoaXMuYXBwLnJlbmRlcmVyLmdlbmVyYXRlVGV4dHVyZShnZngsIDEsIDEpO1xuICAgICAgICAgICAgdmFyIHNwcml0ZSA9IG5ldyBQSVhJLlNwcml0ZSh0ZXh0dXJlKTtcbiAgICAgICAgICAgIGNvbnRhaW5lci5hZGRDaGlsZChzcHJpdGUpO1xuICAgICAgICAgICAgY29udGFpbmVyLmFkZENoaWxkKF90aGlzLmNyZWF0ZUZhY2UoKSk7XG4gICAgICAgICAgICBfdGhpcy5jb250YWluZXIuYWRkQ2hpbGQoY29udGFpbmVyKTtcbiAgICAgICAgICAgIHJldHVybiBjb250YWluZXI7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgUGl4aS5wcm90b3R5cGUuY3JlYXRlRmFjZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHggPSBCT0RZX1JBRElVUztcbiAgICAgICAgdmFyIHkgPSBCT0RZX1JBRElVUztcbiAgICAgICAgdmFyIGxpbmUxID0gbmV3IFBJWEkuR3JhcGhpY3MoKTtcbiAgICAgICAgbGluZTEubGluZVN0eWxlKDEsIDB4MDAwMDAwLCAxKTtcbiAgICAgICAgbGluZTEubW92ZVRvKHggKyAxLCB5IC0gMyk7XG4gICAgICAgIGxpbmUxLmxpbmVUbyh4ICsgNSwgeSAtIDMpO1xuICAgICAgICB2YXIgbGluZTIgPSBuZXcgUElYSS5HcmFwaGljcygpO1xuICAgICAgICBsaW5lMi5saW5lU3R5bGUoMSwgMHgwMDAwMDAsIDEpO1xuICAgICAgICBsaW5lMi5tb3ZlVG8oeCArIDMsIHkgLSAxKTtcbiAgICAgICAgbGluZTIubGluZVRvKHggKyAzLCB5IC0gNSk7XG4gICAgICAgIHZhciBsaW5lMyA9IG5ldyBQSVhJLkdyYXBoaWNzKCk7XG4gICAgICAgIGxpbmUzLmxpbmVTdHlsZSgxLCAweDAwMDAwMCwgMSk7XG4gICAgICAgIGxpbmUzLm1vdmVUbyh4ICsgMSwgeSArIDMpO1xuICAgICAgICBsaW5lMy5saW5lVG8oeCArIDUsIHkgKyAzKTtcbiAgICAgICAgdmFyIGxpbmU0ID0gbmV3IFBJWEkuR3JhcGhpY3MoKTtcbiAgICAgICAgbGluZTQubGluZVN0eWxlKDEsIDB4MDAwMDAwLCAxKTtcbiAgICAgICAgbGluZTQubW92ZVRvKHggKyAzLCB5ICsgMSk7XG4gICAgICAgIGxpbmU0LmxpbmVUbyh4ICsgMywgeSArIDUpO1xuICAgICAgICB2YXIgZmFjZSA9IG5ldyBQSVhJLkNvbnRhaW5lcigpO1xuICAgICAgICBmYWNlLmFkZENoaWxkKGxpbmUxKTtcbiAgICAgICAgZmFjZS5hZGRDaGlsZChsaW5lMik7XG4gICAgICAgIGZhY2UuYWRkQ2hpbGQobGluZTMpO1xuICAgICAgICBmYWNlLmFkZENoaWxkKGxpbmU0KTtcbiAgICAgICAgcmV0dXJuIGZhY2U7XG4gICAgfTtcbiAgICBQaXhpLnByb3RvdHlwZS5kZXN0cm95TGVncyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5sZWdzLmZvckVhY2goZnVuY3Rpb24gKGxlZykge1xuICAgICAgICAgICAgbGVnLnBhcmVudC5yZW1vdmVDaGlsZChsZWcpO1xuICAgICAgICAgICAgbGVnLmRlc3Ryb3koKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMubGVncyA9IFtdO1xuICAgIH07XG4gICAgcmV0dXJuIFBpeGk7XG59KCkpO1xuZXhwb3J0cy5QaXhpID0gUGl4aTtcbiJdLCJzb3VyY2VSb290IjoiIn0=