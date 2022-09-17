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
  const apiKeyInput = document.createElement('input')
  const apiKeySubmit = document.createElement('button')

  apiKeyLabel.textContent = 'API Key:'
  apiKeyLabel.for = 'api-key'

  apiKeyInput.id = 'api-key'
  apiKeyInput.name = 'api-key'
  apiKeyInput.type = 'password'
  apiKeyInput.minLength = '50'
  apiKeyInput.autocomplete = 'current-password'
  apiKeyInput.autofocus = true
  apiKeyInput.required = true

  apiKeySubmit.textContent = 'Save'
  apiKeySubmit.id = 'api-key-submit'
  apiKeySubmit.type = 'submit'

  authForm.appendChild(apiKeyLabel)
  authForm.appendChild(apiKeyInput)
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5pdC5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7VUFBQTtVQUNBOzs7OztXQ0RBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWU7QUFDZjtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tbHMtc2NyYXBlci93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9tbHMtc2NyYXBlci93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vbWxzLXNjcmFwZXIvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9tbHMtc2NyYXBlci93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL21scy1zY3JhcGVyLy4vc3JjL2luaXQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIHJlcXVpcmUgc2NvcGVcbnZhciBfX3dlYnBhY2tfcmVxdWlyZV9fID0ge307XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJmdW5jdGlvbiBzZXRIZWFkZXIgKCkge1xuICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpXG4gIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hlYWRlcicpXG4gIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKVxuXG4gIHRpdGxlLnRleHRDb250ZW50ID0gJ01MUyBTY3JhcGVyJ1xuICB0aXRsZS5pZCA9ICd0aXRsZSdcblxuICBoZWFkZXIuYXBwZW5kQ2hpbGQodGl0bGUpXG4gIGJvZHkuYXBwZW5kQ2hpbGQoaGVhZGVyKVxufVxuXG5mdW5jdGlvbiBzZXRNYWluICgpIHtcbiAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKVxuICBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWFpbicpXG4gIGNvbnN0IGF1dGhGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpXG4gIGNvbnN0IGFwaUtleUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKVxuICBjb25zdCBhcGlLZXlJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbiAgY29uc3QgYXBpS2V5U3VibWl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcblxuICBhcGlLZXlMYWJlbC50ZXh0Q29udGVudCA9ICdBUEkgS2V5OidcbiAgYXBpS2V5TGFiZWwuZm9yID0gJ2FwaS1rZXknXG5cbiAgYXBpS2V5SW5wdXQuaWQgPSAnYXBpLWtleSdcbiAgYXBpS2V5SW5wdXQubmFtZSA9ICdhcGkta2V5J1xuICBhcGlLZXlJbnB1dC50eXBlID0gJ3Bhc3N3b3JkJ1xuICBhcGlLZXlJbnB1dC5taW5MZW5ndGggPSAnNTAnXG4gIGFwaUtleUlucHV0LmF1dG9jb21wbGV0ZSA9ICdjdXJyZW50LXBhc3N3b3JkJ1xuICBhcGlLZXlJbnB1dC5hdXRvZm9jdXMgPSB0cnVlXG4gIGFwaUtleUlucHV0LnJlcXVpcmVkID0gdHJ1ZVxuXG4gIGFwaUtleVN1Ym1pdC50ZXh0Q29udGVudCA9ICdTYXZlJ1xuICBhcGlLZXlTdWJtaXQuaWQgPSAnYXBpLWtleS1zdWJtaXQnXG4gIGFwaUtleVN1Ym1pdC50eXBlID0gJ3N1Ym1pdCdcblxuICBhdXRoRm9ybS5hcHBlbmRDaGlsZChhcGlLZXlMYWJlbClcbiAgYXV0aEZvcm0uYXBwZW5kQ2hpbGQoYXBpS2V5SW5wdXQpXG4gIGF1dGhGb3JtLmFwcGVuZENoaWxkKGFwaUtleVN1Ym1pdClcbiAgbWFpbi5hcHBlbmRDaGlsZChhdXRoRm9ybSlcbiAgYm9keS5hcHBlbmRDaGlsZChtYWluKVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBidWlsZFdlYnNpdGUgKCkge1xuICBzZXRIZWFkZXIoKVxuICBzZXRNYWluKClcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==