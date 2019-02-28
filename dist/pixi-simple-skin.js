(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("PixiSimpleSkin", [], factory);
	else if(typeof exports === 'object')
		exports["PixiSimpleSkin"] = factory();
	else
		root["PixiSimpleSkin"] = factory();
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/skin/pixi-simple.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/skin/pixi-simple.ts":
/*!*********************************!*\
  !*** ./src/skin/pixi-simple.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var SEGMENT_RADIUS = 6;
var JOINT_RADIUS = 2;
var FOOT_RADIUS = 3;
var PixiSimpleSkin = /** @class */ (function () {
    function PixiSimpleSkin(app, container) {
        this.app = app;
        this.container = container;
    }
    PixiSimpleSkin.prototype.create = function (bug) {
        this.bug = bug;
        this.createSegment();
        this.createLegs();
        this.update();
    };
    PixiSimpleSkin.prototype.update = function (bug) {
        if (bug === void 0) { bug = this.bug; }
        this.bug = bug;
        var segment = this.bug.segments[0];
        this.container.x = bug.x;
        this.container.y = bug.y;
        this.segment.rotation = segment.radians + Math.PI / 2;
        this.segmentGfx.x = segment.x - SEGMENT_RADIUS;
        this.segmentGfx.y = segment.y - SEGMENT_RADIUS;
        this.legs.forEach(function (leg, i) {
            leg.joint.x = segment.legs[i].joint.x - JOINT_RADIUS;
            leg.joint.y = segment.legs[i].joint.y - JOINT_RADIUS;
            // leg.joint.rotation = this.segment.rotation;
            leg.foot.x = segment.legs[i].foot.x - FOOT_RADIUS;
            leg.foot.y = segment.legs[i].foot.y - FOOT_RADIUS;
        });
    };
    PixiSimpleSkin.prototype.createSegment = function () {
        var gfx = new PIXI.Graphics();
        gfx.lineStyle(1, 0x000000, 1);
        gfx.drawCircle(0, 0, SEGMENT_RADIUS);
        gfx.drawCircle(0, -2, JOINT_RADIUS);
        var texture = this.app.renderer.generateTexture(gfx);
        this.segmentGfx = new PIXI.Sprite(texture);
        this.segmentGfx.x = -SEGMENT_RADIUS;
        this.segmentGfx.y = -SEGMENT_RADIUS;
        this.segment = new PIXI.Container();
        this.segment.addChild(this.segmentGfx);
        this.container.addChild(this.segment);
    };
    PixiSimpleSkin.prototype.createLegs = function () {
        var _this = this;
        this.legs = [];
        this.bug.segments[0].legs.forEach(function (leg, i) {
            var jointGfx = new PIXI.Graphics();
            var footGfx = new PIXI.Graphics();
            var hex = i === 0 ? 0xff0000 : 0x009900;
            jointGfx.lineStyle(1, hex, 1);
            jointGfx.drawCircle(0, 0, JOINT_RADIUS);
            footGfx.lineStyle(1, hex, 1);
            footGfx.drawCircle(0, 0, FOOT_RADIUS);
            var jointTexture = _this.app.renderer.generateTexture(jointGfx);
            var footTexture = _this.app.renderer.generateTexture(footGfx);
            _this.legs[i] = {
                joint: new PIXI.Sprite(jointTexture),
                foot: new PIXI.Sprite(footTexture),
            };
            _this.container.addChild(_this.legs[i].joint);
            _this.container.addChild(_this.legs[i].foot);
        });
    };
    return PixiSimpleSkin;
}());
exports.default = PixiSimpleSkin;


/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9QaXhpU2ltcGxlU2tpbi93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vUGl4aVNpbXBsZVNraW4vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vUGl4aVNpbXBsZVNraW4vLi9zcmMvc2tpbi9waXhpLXNpbXBsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDeEVBLElBQU0sY0FBYyxHQUFHLENBQUMsQ0FBQztBQUN6QixJQUFNLFlBQVksR0FBRyxDQUFDLENBQUM7QUFDdkIsSUFBTSxXQUFXLEdBQUcsQ0FBQyxDQUFDO0FBT3RCO0lBUUUsd0JBQVksR0FBZ0IsRUFBRSxTQUFvQjtRQUNoRCxJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztRQUNmLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO0lBQzdCLENBQUM7SUFFRCwrQkFBTSxHQUFOLFVBQU8sR0FBWTtRQUNqQixJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztRQUNmLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUNyQixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDbEIsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ2hCLENBQUM7SUFFRCwrQkFBTSxHQUFOLFVBQU8sR0FBdUI7UUFBdkIsNEJBQWUsSUFBSSxDQUFDLEdBQUc7UUFDNUIsSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7UUFDZixJQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNyQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ3pCLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDekIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEdBQUcsT0FBTyxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUN0RCxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsR0FBRyxPQUFPLENBQUMsQ0FBQyxHQUFHLGNBQWMsQ0FBQztRQUMvQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsR0FBRyxPQUFPLENBQUMsQ0FBQyxHQUFHLGNBQWMsQ0FBQztRQUMvQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFDLEdBQUcsRUFBRSxDQUFDO1lBQ3ZCLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxZQUFZLENBQUM7WUFDckQsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLFlBQVksQ0FBQztZQUNyRCw4Q0FBOEM7WUFDOUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLFdBQVcsQ0FBQztZQUNsRCxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsV0FBVyxDQUFDO1FBQ3BELENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVPLHNDQUFhLEdBQXJCO1FBQ0UsSUFBTSxHQUFHLEdBQWEsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDMUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQzlCLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxjQUFjLENBQUMsQ0FBQztRQUNyQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxZQUFZLENBQUMsQ0FBQztRQUNwQyxJQUFNLE9BQU8sR0FBa0IsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsZUFBZSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3RFLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzNDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDO1FBQ3BDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDO1FBQ3BDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDcEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUN4QyxDQUFDO0lBRU8sbUNBQVUsR0FBbEI7UUFBQSxpQkFtQkM7UUFsQkMsSUFBSSxDQUFDLElBQUksR0FBRyxFQUFFLENBQUM7UUFDZixJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQUMsR0FBRyxFQUFFLENBQUM7WUFDdkMsSUFBTSxRQUFRLEdBQUcsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDckMsSUFBTSxPQUFPLEdBQUcsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDcEMsSUFBTSxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUM7WUFDMUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQzlCLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxZQUFZLENBQUMsQ0FBQztZQUN4QyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDN0IsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLFdBQVcsQ0FBQyxDQUFDO1lBQ3RDLElBQU0sWUFBWSxHQUFHLEtBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUNqRSxJQUFNLFdBQVcsR0FBRyxLQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDL0QsS0FBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRztnQkFDYixLQUFLLEVBQUUsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQztnQkFDcEMsSUFBSSxFQUFFLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUM7YUFDbkMsQ0FBQztZQUNGLEtBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLEtBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDNUMsS0FBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsS0FBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM3QyxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFDSCxxQkFBQztBQUFELENBQUM7QUFFRCxrQkFBZSxjQUFjLENBQUMiLCJmaWxlIjoicGl4aS1zaW1wbGUtc2tpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFwiUGl4aVNpbXBsZVNraW5cIiwgW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiUGl4aVNpbXBsZVNraW5cIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiUGl4aVNpbXBsZVNraW5cIl0gPSBmYWN0b3J5KCk7XG59KSh3aW5kb3csIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL3NraW4vcGl4aS1zaW1wbGUudHNcIik7XG4iLCJpbXBvcnQgU2tpbiBmcm9tICcuL3NraW4nO1xuaW1wb3J0IHsgQnVnRGF0YSB9IGZyb20gJy4uL2J1Zyc7XG5pbXBvcnQge1xuICBBcHBsaWNhdGlvbixcbiAgQ29udGFpbmVyLFxuICBHcmFwaGljcyxcbiAgUmVuZGVyVGV4dHVyZSxcbiAgU3ByaXRlLFxufSBmcm9tICdwaXhpLmpzJztcblxuY29uc3QgU0VHTUVOVF9SQURJVVMgPSA2O1xuY29uc3QgSk9JTlRfUkFESVVTID0gMjtcbmNvbnN0IEZPT1RfUkFESVVTID0gMztcblxuaW50ZXJmYWNlIExlZ3Mge1xuICBqb2ludDogU3ByaXRlO1xuICBmb290OiBTcHJpdGU7XG59XG5cbmNsYXNzIFBpeGlTaW1wbGVTa2luIGltcGxlbWVudHMgU2tpbiB7XG4gIGFwcDogQXBwbGljYXRpb247XG4gIGNvbnRhaW5lcjogQ29udGFpbmVyO1xuICBzZWdtZW50OiBDb250YWluZXI7XG4gIHNlZ21lbnRHZng6IFNwcml0ZTtcbiAgbGVnczogTGVnc1tdO1xuICBidWc6IEJ1Z0RhdGE7XG5cbiAgY29uc3RydWN0b3IoYXBwOiBBcHBsaWNhdGlvbiwgY29udGFpbmVyOiBDb250YWluZXIpIHtcbiAgICB0aGlzLmFwcCA9IGFwcDtcbiAgICB0aGlzLmNvbnRhaW5lciA9IGNvbnRhaW5lcjtcbiAgfVxuXG4gIGNyZWF0ZShidWc6IEJ1Z0RhdGEpIHtcbiAgICB0aGlzLmJ1ZyA9IGJ1ZztcbiAgICB0aGlzLmNyZWF0ZVNlZ21lbnQoKTtcbiAgICB0aGlzLmNyZWF0ZUxlZ3MoKTtcbiAgICB0aGlzLnVwZGF0ZSgpO1xuICB9XG5cbiAgdXBkYXRlKGJ1ZzogQnVnRGF0YSA9IHRoaXMuYnVnKSB7XG4gICAgdGhpcy5idWcgPSBidWc7XG4gICAgY29uc3Qgc2VnbWVudCA9IHRoaXMuYnVnLnNlZ21lbnRzWzBdO1xuICAgIHRoaXMuY29udGFpbmVyLnggPSBidWcueDtcbiAgICB0aGlzLmNvbnRhaW5lci55ID0gYnVnLnk7XG4gICAgdGhpcy5zZWdtZW50LnJvdGF0aW9uID0gc2VnbWVudC5yYWRpYW5zICsgTWF0aC5QSSAvIDI7XG4gICAgdGhpcy5zZWdtZW50R2Z4LnggPSBzZWdtZW50LnggLSBTRUdNRU5UX1JBRElVUztcbiAgICB0aGlzLnNlZ21lbnRHZngueSA9IHNlZ21lbnQueSAtIFNFR01FTlRfUkFESVVTO1xuICAgIHRoaXMubGVncy5mb3JFYWNoKChsZWcsIGkpID0+IHtcbiAgICAgIGxlZy5qb2ludC54ID0gc2VnbWVudC5sZWdzW2ldLmpvaW50LnggLSBKT0lOVF9SQURJVVM7XG4gICAgICBsZWcuam9pbnQueSA9IHNlZ21lbnQubGVnc1tpXS5qb2ludC55IC0gSk9JTlRfUkFESVVTO1xuICAgICAgLy8gbGVnLmpvaW50LnJvdGF0aW9uID0gdGhpcy5zZWdtZW50LnJvdGF0aW9uO1xuICAgICAgbGVnLmZvb3QueCA9IHNlZ21lbnQubGVnc1tpXS5mb290LnggLSBGT09UX1JBRElVUztcbiAgICAgIGxlZy5mb290LnkgPSBzZWdtZW50LmxlZ3NbaV0uZm9vdC55IC0gRk9PVF9SQURJVVM7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGNyZWF0ZVNlZ21lbnQoKSB7XG4gICAgY29uc3QgZ2Z4OiBHcmFwaGljcyA9IG5ldyBQSVhJLkdyYXBoaWNzKCk7XG4gICAgZ2Z4LmxpbmVTdHlsZSgxLCAweDAwMDAwMCwgMSk7XG4gICAgZ2Z4LmRyYXdDaXJjbGUoMCwgMCwgU0VHTUVOVF9SQURJVVMpO1xuICAgIGdmeC5kcmF3Q2lyY2xlKDAsIC0yLCBKT0lOVF9SQURJVVMpO1xuICAgIGNvbnN0IHRleHR1cmU6IFJlbmRlclRleHR1cmUgPSB0aGlzLmFwcC5yZW5kZXJlci5nZW5lcmF0ZVRleHR1cmUoZ2Z4KTtcbiAgICB0aGlzLnNlZ21lbnRHZnggPSBuZXcgUElYSS5TcHJpdGUodGV4dHVyZSk7XG4gICAgdGhpcy5zZWdtZW50R2Z4LnggPSAtU0VHTUVOVF9SQURJVVM7XG4gICAgdGhpcy5zZWdtZW50R2Z4LnkgPSAtU0VHTUVOVF9SQURJVVM7XG4gICAgdGhpcy5zZWdtZW50ID0gbmV3IFBJWEkuQ29udGFpbmVyKCk7XG4gICAgdGhpcy5zZWdtZW50LmFkZENoaWxkKHRoaXMuc2VnbWVudEdmeCk7XG4gICAgdGhpcy5jb250YWluZXIuYWRkQ2hpbGQodGhpcy5zZWdtZW50KTtcbiAgfVxuXG4gIHByaXZhdGUgY3JlYXRlTGVncygpIHtcbiAgICB0aGlzLmxlZ3MgPSBbXTtcbiAgICB0aGlzLmJ1Zy5zZWdtZW50c1swXS5sZWdzLmZvckVhY2goKGxlZywgaSkgPT4ge1xuICAgICAgY29uc3Qgam9pbnRHZnggPSBuZXcgUElYSS5HcmFwaGljcygpO1xuICAgICAgY29uc3QgZm9vdEdmeCA9IG5ldyBQSVhJLkdyYXBoaWNzKCk7XG4gICAgICBjb25zdCBoZXggPSBpID09PSAwID8gMHhmZjAwMDAgOiAweDAwOTkwMDtcbiAgICAgIGpvaW50R2Z4LmxpbmVTdHlsZSgxLCBoZXgsIDEpO1xuICAgICAgam9pbnRHZnguZHJhd0NpcmNsZSgwLCAwLCBKT0lOVF9SQURJVVMpO1xuICAgICAgZm9vdEdmeC5saW5lU3R5bGUoMSwgaGV4LCAxKTtcbiAgICAgIGZvb3RHZnguZHJhd0NpcmNsZSgwLCAwLCBGT09UX1JBRElVUyk7XG4gICAgICBjb25zdCBqb2ludFRleHR1cmUgPSB0aGlzLmFwcC5yZW5kZXJlci5nZW5lcmF0ZVRleHR1cmUoam9pbnRHZngpO1xuICAgICAgY29uc3QgZm9vdFRleHR1cmUgPSB0aGlzLmFwcC5yZW5kZXJlci5nZW5lcmF0ZVRleHR1cmUoZm9vdEdmeCk7XG4gICAgICB0aGlzLmxlZ3NbaV0gPSB7XG4gICAgICAgIGpvaW50OiBuZXcgUElYSS5TcHJpdGUoam9pbnRUZXh0dXJlKSxcbiAgICAgICAgZm9vdDogbmV3IFBJWEkuU3ByaXRlKGZvb3RUZXh0dXJlKSxcbiAgICAgIH07XG4gICAgICB0aGlzLmNvbnRhaW5lci5hZGRDaGlsZCh0aGlzLmxlZ3NbaV0uam9pbnQpO1xuICAgICAgdGhpcy5jb250YWluZXIuYWRkQ2hpbGQodGhpcy5sZWdzW2ldLmZvb3QpO1xuICAgIH0pO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFBpeGlTaW1wbGVTa2luO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==