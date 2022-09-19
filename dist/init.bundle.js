/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
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
/*!*********************!*\
  !*** ./src/init.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildWebsite)
/* harmony export */ });
function setHeader () {
  const body = document.querySelector('body')
  const header = document.createElement('header')
  const title = document.createElement('h1')

  title.textContent = 'MLS Scraper'
  title.id = 'title'

  header.appendChild(title)
  body.appendChild(header)
}

function setMain () {
  const body = document.querySelector('body')
  const main = document.createElement('main')
  const authForm = document.createElement('form')
  const apiKeyLabel = document.createElement('label')
  const apiGetKey = document.createElement('a')
  const apiKeyInput = document.createElement('input')
  const apiKeySubmit = document.createElement('button')

  apiKeyLabel.textContent = 'RapidAPI Key:'

  apiGetKey.textContent = '(i need a key)'
  apiGetKey.href = 'https://rapidapi.com/developer/'
  apiGetKey.target = '_blank'

  apiKeyInput.id = 'apiKeyInput'
  apiKeyInput.type = 'password'
  apiKeyInput.minLength = '50'
  apiKeyInput.autocomplete = 'current-password'
  apiKeyInput.autofocus = true
  apiKeyInput.required = true

  apiKeySubmit.textContent = 'Save'
  apiKeySubmit.id = 'apiKeySave'
  apiKeySubmit.type = 'button'

  authForm.appendChild(apiKeyLabel)
  authForm.appendChild(apiKeyInput)
  authForm.appendChild(apiGetKey)
  authForm.appendChild(apiKeySubmit)
  main.appendChild(authForm)
  body.appendChild(main)
}

function buildWebsite () {
  setHeader()
  setMain()
}

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5pdC5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7VUFBQTtVQUNBOzs7OztXQ0RBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVlO0FBQ2Y7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbWxzLXNjcmFwZXIvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vbWxzLXNjcmFwZXIvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL21scy1zY3JhcGVyL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vbWxzLXNjcmFwZXIvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9tbHMtc2NyYXBlci8uL3NyYy9pbml0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSByZXF1aXJlIHNjb3BlXG52YXIgX193ZWJwYWNrX3JlcXVpcmVfXyA9IHt9O1xuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiZnVuY3Rpb24gc2V0SGVhZGVyICgpIHtcbiAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKVxuICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoZWFkZXInKVxuICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJylcblxuICB0aXRsZS50ZXh0Q29udGVudCA9ICdNTFMgU2NyYXBlcidcbiAgdGl0bGUuaWQgPSAndGl0bGUnXG5cbiAgaGVhZGVyLmFwcGVuZENoaWxkKHRpdGxlKVxuICBib2R5LmFwcGVuZENoaWxkKGhlYWRlcilcbn1cblxuZnVuY3Rpb24gc2V0TWFpbiAoKSB7XG4gIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JylcbiAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ21haW4nKVxuICBjb25zdCBhdXRoRm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKVxuICBjb25zdCBhcGlLZXlMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJylcbiAgY29uc3QgYXBpR2V0S2V5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpXG4gIGNvbnN0IGFwaUtleUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICBjb25zdCBhcGlLZXlTdWJtaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuXG4gIGFwaUtleUxhYmVsLnRleHRDb250ZW50ID0gJ1JhcGlkQVBJIEtleTonXG5cbiAgYXBpR2V0S2V5LnRleHRDb250ZW50ID0gJyhpIG5lZWQgYSBrZXkpJ1xuICBhcGlHZXRLZXkuaHJlZiA9ICdodHRwczovL3JhcGlkYXBpLmNvbS9kZXZlbG9wZXIvJ1xuICBhcGlHZXRLZXkudGFyZ2V0ID0gJ19ibGFuaydcblxuICBhcGlLZXlJbnB1dC5pZCA9ICdhcGlLZXlJbnB1dCdcbiAgYXBpS2V5SW5wdXQudHlwZSA9ICdwYXNzd29yZCdcbiAgYXBpS2V5SW5wdXQubWluTGVuZ3RoID0gJzUwJ1xuICBhcGlLZXlJbnB1dC5hdXRvY29tcGxldGUgPSAnY3VycmVudC1wYXNzd29yZCdcbiAgYXBpS2V5SW5wdXQuYXV0b2ZvY3VzID0gdHJ1ZVxuICBhcGlLZXlJbnB1dC5yZXF1aXJlZCA9IHRydWVcblxuICBhcGlLZXlTdWJtaXQudGV4dENvbnRlbnQgPSAnU2F2ZSdcbiAgYXBpS2V5U3VibWl0LmlkID0gJ2FwaUtleVNhdmUnXG4gIGFwaUtleVN1Ym1pdC50eXBlID0gJ2J1dHRvbidcblxuICBhdXRoRm9ybS5hcHBlbmRDaGlsZChhcGlLZXlMYWJlbClcbiAgYXV0aEZvcm0uYXBwZW5kQ2hpbGQoYXBpS2V5SW5wdXQpXG4gIGF1dGhGb3JtLmFwcGVuZENoaWxkKGFwaUdldEtleSlcbiAgYXV0aEZvcm0uYXBwZW5kQ2hpbGQoYXBpS2V5U3VibWl0KVxuICBtYWluLmFwcGVuZENoaWxkKGF1dGhGb3JtKVxuICBib2R5LmFwcGVuZENoaWxkKG1haW4pXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGJ1aWxkV2Vic2l0ZSAoKSB7XG4gIHNldEhlYWRlcigpXG4gIHNldE1haW4oKVxufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9