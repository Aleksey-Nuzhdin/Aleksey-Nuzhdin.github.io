/******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/assets/scss/main.scss":
/*!***********************************!*\
  !*** ./src/assets/scss/main.scss ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXNzZXRzL3Njc3MvbWFpbi5zY3NzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9zY3NzL21haW4uc2Nzcz84MDNkIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiJdLCJtYXBwaW5ncyI6IkFBQUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/assets/scss/main.scss\n");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _assets_scss_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/scss/main.scss */ \"./src/assets/scss/main.scss\");\n/* harmony import */ var _assets_scss_main_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_assets_scss_main_scss__WEBPACK_IMPORTED_MODULE_0__);\n\nvar $buttoStart = document.querySelector('.start');\nvar $playingField = document.querySelector('.playingField');\nvar $timeTimer = document.querySelector('.timer__time');\nvar $inputTimer = document.querySelector('.setupTimer__input');\nvar $title = document.querySelectorAll('.timer__title');\nvar timeGame = 5.0;\nvar points = 0;\n$timeTimer.innerHTML = timeGame;\n$inputTimer.value = timeGame;\n\nvar startGame = function startGame() {\n  $title[0].innerHTML = 'Оставшееся время: ';\n  timeGame = $inputTimer.value;\n  var timerTime = $inputTimer.value;\n  var interval = setInterval(function () {\n    timerTime = (timerTime - 0.1).toFixed(1);\n    $timeTimer.innerHTML = timerTime;\n\n    if (timerTime <= 0) {\n      clearInterval(interval);\n      gameEnd();\n    }\n  }, 100);\n  $buttoStart.style.display = 'none';\n  $playingField.style.backgroundColor = '#ddd';\n  $playingField.append(renderBox());\n};\n\nvar renderBox = function renderBox() {\n  var rand = function rand(to) {\n    var from = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;\n    return Math.random() * (to - from) + from;\n  };\n\n  var box = document.createElement('div');\n  var size = rand(150, 50).toFixed(0);\n  var pos = {\n    x: 0,\n    y: 0\n  };\n  pos.x = rand(342 - size).toFixed(0);\n  pos.y = rand(342 - size).toFixed(0);\n  box.classList = 'gameBox';\n  box.style.width = box.style.height = size + 'px';\n  box.style.left = pos.x + 'px';\n  box.style.top = pos.y + 'px';\n  box.style.backgroundColor = \"rgb(\".concat(rand(255), \", \").concat(rand(255), \", \").concat(rand(255), \")\");\n  box.setAttribute('data-box', 'true');\n  return box;\n};\n\nvar hendleBoxClick = function hendleBoxClick(event) {\n  if (event.target.dataset.box == 'true') {\n    event.target.remove();\n    points++;\n    $playingField.append(renderBox());\n  }\n};\n\nvar gameEnd = function gameEnd() {\n  $title[0].innerHTML = 'Результат: ';\n  $title[1].innerHTML = points;\n  $playingField.innerHTML = '';\n  $playingField.style.backgroundColor = 'rgb(105, 105, 105)';\n  setTimeout(function () {\n    $playingField.append($buttoStart);\n    $buttoStart.style.display = 'block';\n    $buttoStart.innerHTML = 'Restart';\n  }, 200);\n  points = 0;\n};\n\n$buttoStart.addEventListener('click', startGame);\n$playingField.addEventListener('click', hendleBoxClick);\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc2NzcyBmcm9tICcuL2Fzc2V0cy9zY3NzL21haW4uc2Nzcyc7XHJcblxyXG5jb25zdCAkYnV0dG9TdGFydCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdGFydCcpXHJcbmNvbnN0ICRwbGF5aW5nRmllbGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGxheWluZ0ZpZWxkJylcclxuY29uc3QgJHRpbWVUaW1lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50aW1lcl9fdGltZScpXHJcbmNvbnN0ICRpbnB1dFRpbWVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNldHVwVGltZXJfX2lucHV0JylcclxuY29uc3QgJHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRpbWVyX190aXRsZScpXHJcblxyXG5sZXQgdGltZUdhbWUgPSA1LjBcclxubGV0IHBvaW50cyA9IDBcclxuXHJcbiR0aW1lVGltZXIuaW5uZXJIVE1MID0gdGltZUdhbWVcclxuJGlucHV0VGltZXIudmFsdWUgPSB0aW1lR2FtZVxyXG5cclxuY29uc3Qgc3RhcnRHYW1lID0gKCk9PntcclxuICAkdGl0bGVbMF0uaW5uZXJIVE1MID0gJ9Ce0YHRgtCw0LLRiNC10LXRgdGPINCy0YDQtdC80Y86wqAnXHJcbiAgdGltZUdhbWUgPSAkaW5wdXRUaW1lci52YWx1ZVxyXG4gIGxldCB0aW1lclRpbWUgPSAkaW5wdXRUaW1lci52YWx1ZVxyXG5cclxuICBjb25zdCBpbnRlcnZhbCA9IHNldEludGVydmFsKCgpPT57XHJcblxyXG4gICAgdGltZXJUaW1lID0gKHRpbWVyVGltZS0wLjEpLnRvRml4ZWQoMSlcclxuICAgICR0aW1lVGltZXIuaW5uZXJIVE1MID0gdGltZXJUaW1lXHJcblxyXG4gICAgaWYodGltZXJUaW1lIDw9IDApIHtcclxuICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbClcclxuICAgICAgZ2FtZUVuZCgpXHJcbiAgICB9XHJcblxyXG5cclxuICB9LCAxMDApXHJcbiAgJGJ1dHRvU3RhcnQuc3R5bGUuZGlzcGxheSA9ICdub25lJ1xyXG4gICRwbGF5aW5nRmllbGQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyNkZGQnXHJcbiAgXHJcbiAgJHBsYXlpbmdGaWVsZC5hcHBlbmQocmVuZGVyQm94KCkpXHJcbn1cclxuXHJcbmNvbnN0IHJlbmRlckJveCA9ICgpPT57XHJcbiAgY29uc3QgcmFuZCA9ICh0bywgZnJvbSA9IDApID0+IE1hdGgucmFuZG9tKCkqKHRvLWZyb20pICsgZnJvbVxyXG4gIGxldCBib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gIGxldCBzaXplID0gcmFuZCgxNTAsIDUwKS50b0ZpeGVkKDApXHJcbiAgbGV0IHBvcyA9IHt4OjAsIHk6MH1cclxuICBwb3MueCA9IHJhbmQoMzQyLXNpemUpLnRvRml4ZWQoMClcclxuICBwb3MueSA9IHJhbmQoMzQyLXNpemUpLnRvRml4ZWQoMClcclxuXHJcblxyXG4gIGJveC5jbGFzc0xpc3QgPSAnZ2FtZUJveCdcclxuICBib3guc3R5bGUud2lkdGggPSBib3guc3R5bGUuaGVpZ2h0ID0gc2l6ZSsncHgnXHJcbiAgYm94LnN0eWxlLmxlZnQgPSBwb3MueCsncHgnXHJcbiAgYm94LnN0eWxlLnRvcCA9IHBvcy55KydweCdcclxuICBib3guc3R5bGUuYmFja2dyb3VuZENvbG9yID0gYHJnYigke3JhbmQoMjU1KX0sICR7cmFuZCgyNTUpfSwgJHtyYW5kKDI1NSl9KWBcclxuICBib3guc2V0QXR0cmlidXRlKCdkYXRhLWJveCcsICd0cnVlJylcclxuXHJcbiAgcmV0dXJuIGJveFxyXG5cclxufVxyXG5cclxuY29uc3QgaGVuZGxlQm94Q2xpY2sgPSAoZXZlbnQpPT57XHJcbiAgaWYoZXZlbnQudGFyZ2V0LmRhdGFzZXQuYm94ID09ICd0cnVlJyl7XHJcbiAgICBldmVudC50YXJnZXQucmVtb3ZlKClcclxuICAgIHBvaW50cysrXHJcbiAgICAkcGxheWluZ0ZpZWxkLmFwcGVuZChyZW5kZXJCb3goKSlcclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IGdhbWVFbmQgPSAoKT0+e1xyXG4gIFxyXG5cclxuICAkdGl0bGVbMF0uaW5uZXJIVE1MID0gJ9Cg0LXQt9GD0LvRjNGC0LDRgjrCoCdcclxuICAkdGl0bGVbMV0uaW5uZXJIVE1MID0gcG9pbnRzXHJcbiAgJHBsYXlpbmdGaWVsZC5pbm5lckhUTUwgPSAnJ1xyXG4gICRwbGF5aW5nRmllbGQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3JnYigxMDUsIDEwNSwgMTA1KSdcclxuICBzZXRUaW1lb3V0KCgpPT57XHJcbiAgICAkcGxheWluZ0ZpZWxkLmFwcGVuZCgkYnV0dG9TdGFydClcclxuICAgICRidXR0b1N0YXJ0LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snXHJcbiAgICAkYnV0dG9TdGFydC5pbm5lckhUTUwgPSAnUmVzdGFydCdcclxuICB9LCAyMDApXHJcblxyXG4gIHBvaW50cyA9IDBcclxuXHJcbn1cclxuXHJcbiRidXR0b1N0YXJ0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc3RhcnRHYW1lKVxyXG4kcGxheWluZ0ZpZWxkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGVuZGxlQm94Q2xpY2spXHJcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ })

/******/ });
//# sourceMappingURL=main.js.map