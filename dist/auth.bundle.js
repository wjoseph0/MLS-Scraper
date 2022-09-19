/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ showApp)
/* harmony export */ });
function showApp () {
  const main = document.querySelector('main')
  const appForm = document.createElement('form')
  const cityInputLabel = document.createElement('label')
  const cityInput = document.createElement('input')
  const stateInputLabel = document.createElement('label')
  const stateInput = document.createElement('input')
  const search = document.createElement('button')

  cityInputLabel.textContent = 'City:'
  stateInputLabel.textContent = 'State:'

  search.id = 'searchButton'
  search.textContent = 'Search'
  search.type = 'button'

  appForm.appendChild(cityInputLabel)
  appForm.appendChild(cityInput)
  appForm.appendChild(stateInputLabel)
  appForm.appendChild(stateInput)
  appForm.appendChild(search)
  main.appendChild(appForm)

  search.addEventListener('click', () => {
    if (cityInput.value !== '' && stateInput.value !== '') {
      console.log('city: ' + cityInput.value)
      console.log('state: ' + stateInput.value)
      fetchData(cityInput.value, stateInput.value)
    }
  })
}

function fetchData (city, stateCode) {
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': sessionStorage.getItem('apiKey'),
      'X-RapidAPI-Host': 'realty-in-us.p.rapidapi.com'
    }
  }

  fetch(
    `https://realty-in-us.p.rapidapi.com/properties/v2/list-for-sale?city=${city}&state_code=${stateCode}&offset=0&limit=200&sort=relevance`,
    options
  )
    .then((response) => response.json())
    .then((response) => console.log(response))
    .catch((err) => console.error(err))
}


/***/ }),

/***/ "./src/helper.js":
/*!***********************!*\
  !*** ./src/helper.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "clearMain": () => (/* binding */ clearMain),
/* harmony export */   "saveApiKey": () => (/* binding */ saveApiKey)
/* harmony export */ });
function clearMain () {
  const main = document.querySelector('main')
  while (main.firstChild) {
    main.removeChild(main.firstChild)
  }
}

function saveApiKey (apiKey) {
  sessionStorage.setItem('apiKey', apiKey)
}


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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*********************!*\
  !*** ./src/auth.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ authenticate)
/* harmony export */ });
/* harmony import */ var _helper_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helper.js */ "./src/helper.js");
/* harmony import */ var _app_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.js */ "./src/app.js");



function authenticate () {
  const apiKeyInput = document.getElementById('apiKeyInput')
  const apiKeySave = document.getElementById('apiKeySave')

  apiKeySave.addEventListener('click', () => {
    if (apiKeyInput.value !== '') {
      (0,_helper_js__WEBPACK_IMPORTED_MODULE_0__.saveApiKey)(apiKeyInput.value)
      ;(0,_helper_js__WEBPACK_IMPORTED_MODULE_0__.clearMain)()
      ;(0,_app_js__WEBPACK_IMPORTED_MODULE_1__["default"])()
    }
  })
}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDRFQUE0RSxLQUFLLGNBQWMsVUFBVTtBQUN6RztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoRE87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTs7Ozs7OztVQ1RBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7O0FDTm1EO0FBQ3JCOztBQUVmO0FBQ2Y7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBTSxzREFBVTtBQUNoQixNQUFNLHNEQUFTO0FBQ2YsTUFBTSxvREFBTztBQUNiO0FBQ0EsR0FBRztBQUNIIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbWxzLXNjcmFwZXIvLi9zcmMvYXBwLmpzIiwid2VicGFjazovL21scy1zY3JhcGVyLy4vc3JjL2hlbHBlci5qcyIsIndlYnBhY2s6Ly9tbHMtc2NyYXBlci93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9tbHMtc2NyYXBlci93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vbWxzLXNjcmFwZXIvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9tbHMtc2NyYXBlci93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL21scy1zY3JhcGVyLy4vc3JjL2F1dGguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc2hvd0FwcCAoKSB7XG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtYWluJylcbiAgY29uc3QgYXBwRm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKVxuICBjb25zdCBjaXR5SW5wdXRMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJylcbiAgY29uc3QgY2l0eUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICBjb25zdCBzdGF0ZUlucHV0TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpXG4gIGNvbnN0IHN0YXRlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gIGNvbnN0IHNlYXJjaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG5cbiAgY2l0eUlucHV0TGFiZWwudGV4dENvbnRlbnQgPSAnQ2l0eTonXG4gIHN0YXRlSW5wdXRMYWJlbC50ZXh0Q29udGVudCA9ICdTdGF0ZTonXG5cbiAgc2VhcmNoLmlkID0gJ3NlYXJjaEJ1dHRvbidcbiAgc2VhcmNoLnRleHRDb250ZW50ID0gJ1NlYXJjaCdcbiAgc2VhcmNoLnR5cGUgPSAnYnV0dG9uJ1xuXG4gIGFwcEZvcm0uYXBwZW5kQ2hpbGQoY2l0eUlucHV0TGFiZWwpXG4gIGFwcEZvcm0uYXBwZW5kQ2hpbGQoY2l0eUlucHV0KVxuICBhcHBGb3JtLmFwcGVuZENoaWxkKHN0YXRlSW5wdXRMYWJlbClcbiAgYXBwRm9ybS5hcHBlbmRDaGlsZChzdGF0ZUlucHV0KVxuICBhcHBGb3JtLmFwcGVuZENoaWxkKHNlYXJjaClcbiAgbWFpbi5hcHBlbmRDaGlsZChhcHBGb3JtKVxuXG4gIHNlYXJjaC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBpZiAoY2l0eUlucHV0LnZhbHVlICE9PSAnJyAmJiBzdGF0ZUlucHV0LnZhbHVlICE9PSAnJykge1xuICAgICAgY29uc29sZS5sb2coJ2NpdHk6ICcgKyBjaXR5SW5wdXQudmFsdWUpXG4gICAgICBjb25zb2xlLmxvZygnc3RhdGU6ICcgKyBzdGF0ZUlucHV0LnZhbHVlKVxuICAgICAgZmV0Y2hEYXRhKGNpdHlJbnB1dC52YWx1ZSwgc3RhdGVJbnB1dC52YWx1ZSlcbiAgICB9XG4gIH0pXG59XG5cbmZ1bmN0aW9uIGZldGNoRGF0YSAoY2l0eSwgc3RhdGVDb2RlKSB7XG4gIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgbWV0aG9kOiAnR0VUJyxcbiAgICBoZWFkZXJzOiB7XG4gICAgICAnWC1SYXBpZEFQSS1LZXknOiBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdhcGlLZXknKSxcbiAgICAgICdYLVJhcGlkQVBJLUhvc3QnOiAncmVhbHR5LWluLXVzLnAucmFwaWRhcGkuY29tJ1xuICAgIH1cbiAgfVxuXG4gIGZldGNoKFxuICAgIGBodHRwczovL3JlYWx0eS1pbi11cy5wLnJhcGlkYXBpLmNvbS9wcm9wZXJ0aWVzL3YyL2xpc3QtZm9yLXNhbGU/Y2l0eT0ke2NpdHl9JnN0YXRlX2NvZGU9JHtzdGF0ZUNvZGV9Jm9mZnNldD0wJmxpbWl0PTIwMCZzb3J0PXJlbGV2YW5jZWAsXG4gICAgb3B0aW9uc1xuICApXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiBjb25zb2xlLmxvZyhyZXNwb25zZSkpXG4gICAgLmNhdGNoKChlcnIpID0+IGNvbnNvbGUuZXJyb3IoZXJyKSlcbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBjbGVhck1haW4gKCkge1xuICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWFpbicpXG4gIHdoaWxlIChtYWluLmZpcnN0Q2hpbGQpIHtcbiAgICBtYWluLnJlbW92ZUNoaWxkKG1haW4uZmlyc3RDaGlsZClcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gc2F2ZUFwaUtleSAoYXBpS2V5KSB7XG4gIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ2FwaUtleScsIGFwaUtleSlcbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgY2xlYXJNYWluLCBzYXZlQXBpS2V5IH0gZnJvbSAnLi9oZWxwZXIuanMnXG5pbXBvcnQgc2hvd0FwcCBmcm9tICcuL2FwcC5qcydcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYXV0aGVudGljYXRlICgpIHtcbiAgY29uc3QgYXBpS2V5SW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBpS2V5SW5wdXQnKVxuICBjb25zdCBhcGlLZXlTYXZlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwaUtleVNhdmUnKVxuXG4gIGFwaUtleVNhdmUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgaWYgKGFwaUtleUlucHV0LnZhbHVlICE9PSAnJykge1xuICAgICAgc2F2ZUFwaUtleShhcGlLZXlJbnB1dC52YWx1ZSlcbiAgICAgIGNsZWFyTWFpbigpXG4gICAgICBzaG93QXBwKClcbiAgICB9XG4gIH0pXG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=