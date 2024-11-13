/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Game)\n/* harmony export */ });\n/* harmony import */ var _player_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player.js */ \"./src/player.js\");\n/* harmony import */ var _obstacle_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./obstacle.js */ \"./src/obstacle.js\");\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError(\"Cannot call a class as a function\"); }\nfunction _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, \"value\" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }\nfunction _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, \"prototype\", { writable: !1 }), e; }\nfunction _toPropertyKey(t) { var i = _toPrimitive(t, \"string\"); return \"symbol\" == _typeof(i) ? i : i + \"\"; }\nfunction _toPrimitive(t, r) { if (\"object\" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || \"default\"); if (\"object\" != _typeof(i)) return i; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (\"string\" === r ? String : Number)(t); }\n\n\nvar Game = /*#__PURE__*/function () {\n  function Game() {\n    _classCallCheck(this, Game);\n    this.canvas = document.getElementById('game-container');\n    this.ctx = this.canvas.getContext('2d');\n    this.player = new _player_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this);\n    this.obstacles = [];\n    this.lastObstacleTime = 0;\n    this.gameOver = false;\n    this.startGame();\n  }\n  return _createClass(Game, [{\n    key: \"startGame\",\n    value: function startGame() {\n      this.canvas.width = window.innerWidth; // Canvas genişliği\n      this.canvas.height = window.innerHeight; // Canvas yüksekliği\n      this.ctx = this.canvas.getContext('2d'); // 2D context\n      this.player = new _player_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this); // Oyuncu nesnesini oluştur\n      this.obstacles = []; // Engeller dizisi\n      this.lastObstacleTime = 0;\n      this.gameOver = false; // Oyun bitme durumu\n      this.gameLoop(); // Oyunu başlat\n    }\n  }, {\n    key: \"gameLoop\",\n    value: function gameLoop() {\n      if (this.gameOver) return;\n      this.update(); // Oyun durumunu güncelle\n      this.draw(); // Oyunu çiz\n\n      requestAnimationFrame(this.gameLoop.bind(this)); // Sonsuz döngü\n    }\n  }, {\n    key: \"update\",\n    value: function update() {\n      this.player.update();\n      this.obstacles.forEach(function (obstacle) {\n        return obstacle.update();\n      });\n      this.checkCollisions();\n    }\n  }, {\n    key: \"draw\",\n    value: function draw() {\n      var _this = this;\n      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height); // Arka planı temizle\n      this.player.draw(this.ctx); // Oyuncuyu çiz\n      this.obstacles.forEach(function (obstacle) {\n        return obstacle.draw(_this.ctx);\n      }); // Engelleri çiz\n    }\n  }, {\n    key: \"checkCollisions\",\n    value: function checkCollisions() {\n      var _this2 = this;\n      this.obstacles.forEach(function (obstacle) {\n        if (_this2.player.collidesWith(obstacle)) {\n          _this2.gameOver = true;\n          alert('Oyun Bitti!'); // Çarpışma sonrası oyun biter\n        }\n      });\n    }\n  }]);\n}();\n\n\n//# sourceURL=webpack://oyun/./src/game.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ \"./src/game.js\");\n\nvar canvas = document.getElementById('gameCanvas');\nvar game = new _game__WEBPACK_IMPORTED_MODULE_0__[\"default\"](canvas);\ngame.start();\n\n//# sourceURL=webpack://oyun/./src/index.js?");

/***/ }),

/***/ "./src/obstacle.js":
/*!*************************!*\
  !*** ./src/obstacle.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Obstacle)\n/* harmony export */ });\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError(\"Cannot call a class as a function\"); }\nfunction _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, \"value\" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }\nfunction _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, \"prototype\", { writable: !1 }), e; }\nfunction _toPropertyKey(t) { var i = _toPrimitive(t, \"string\"); return \"symbol\" == _typeof(i) ? i : i + \"\"; }\nfunction _toPrimitive(t, r) { if (\"object\" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || \"default\"); if (\"object\" != _typeof(i)) return i; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (\"string\" === r ? String : Number)(t); }\nvar Obstacle = /*#__PURE__*/function () {\n  function Obstacle(game) {\n    _classCallCheck(this, Obstacle);\n    this.game = game;\n    this.width = 20;\n    this.height = 50;\n    this.x = this.game.canvas.width;\n    this.y = this.game.canvas.height - this.height;\n    this.speed = -5; // Engelin hareketi\n  }\n  return _createClass(Obstacle, [{\n    key: \"update\",\n    value: function update() {\n      this.x += this.speed; // Engeli sola hareket ettir\n    }\n  }, {\n    key: \"draw\",\n    value: function draw(ctx) {\n      ctx.fillStyle = 'red';\n      ctx.fillRect(this.x, this.y, this.width, this.height);\n    }\n  }]);\n}();\n\n\n//# sourceURL=webpack://oyun/./src/obstacle.js?");

/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Player)\n/* harmony export */ });\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError(\"Cannot call a class as a function\"); }\nfunction _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, \"value\" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }\nfunction _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, \"prototype\", { writable: !1 }), e; }\nfunction _toPropertyKey(t) { var i = _toPrimitive(t, \"string\"); return \"symbol\" == _typeof(i) ? i : i + \"\"; }\nfunction _toPrimitive(t, r) { if (\"object\" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || \"default\"); if (\"object\" != _typeof(i)) return i; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (\"string\" === r ? String : Number)(t); }\nvar Player = /*#__PURE__*/function () {\n  function Player(game) {\n    var _this = this;\n    _classCallCheck(this, Player);\n    this.game = game;\n    this.width = 50;\n    this.height = 50;\n    this.x = 50;\n    this.y = this.game.canvas.height - this.height;\n    this.yVelocity = 0;\n    this.isJumping = false;\n    window.addEventListener('keydown', function (e) {\n      if (e.key === ' ' && !_this.isJumping) _this.jump();\n    });\n  }\n  return _createClass(Player, [{\n    key: \"jump\",\n    value: function jump() {\n      this.yVelocity = -15;\n      this.isJumping = true;\n    }\n  }, {\n    key: \"update\",\n    value: function update() {\n      this.y += this.yVelocity;\n      this.yVelocity += 0.8; // Yer çekimi etkisi\n\n      // Yere çarptığında durma\n      if (this.y > this.game.canvas.height - this.height) {\n        this.y = this.game.canvas.height - this.height;\n        this.isJumping = false;\n      }\n    }\n  }, {\n    key: \"draw\",\n    value: function draw(ctx) {\n      ctx.fillStyle = 'blue'; // Oyuncu rengini mavi olarak ayarla\n      ctx.fillRect(this.x, this.y, this.width, this.height); // Oyuncuyu çiz\n    }\n  }, {\n    key: \"collidesWith\",\n    value: function collidesWith(obstacle) {\n      return this.x < obstacle.x + obstacle.width && this.x + this.width > obstacle.x && this.y < obstacle.y + obstacle.height && this.y + this.height > obstacle.y;\n    }\n  }]);\n}();\n\n\n//# sourceURL=webpack://oyun/./src/player.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;