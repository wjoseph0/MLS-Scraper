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
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
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

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOztVQUFBO1VBQ0E7Ozs7O1dDREE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ05lO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNEVBQTRFLEtBQUssY0FBYyxVQUFVO0FBQ3pHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL21scy1zY3JhcGVyL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL21scy1zY3JhcGVyL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9tbHMtc2NyYXBlci93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL21scy1zY3JhcGVyL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vbWxzLXNjcmFwZXIvLi9zcmMvYXBwLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSByZXF1aXJlIHNjb3BlXG52YXIgX193ZWJwYWNrX3JlcXVpcmVfXyA9IHt9O1xuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc2hvd0FwcCAoKSB7XG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtYWluJylcbiAgY29uc3QgYXBwRm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKVxuICBjb25zdCBjaXR5SW5wdXRMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJylcbiAgY29uc3QgY2l0eUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICBjb25zdCBzdGF0ZUlucHV0TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpXG4gIGNvbnN0IHN0YXRlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gIGNvbnN0IHNlYXJjaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG5cbiAgY2l0eUlucHV0TGFiZWwudGV4dENvbnRlbnQgPSAnQ2l0eTonXG4gIHN0YXRlSW5wdXRMYWJlbC50ZXh0Q29udGVudCA9ICdTdGF0ZTonXG5cbiAgc2VhcmNoLmlkID0gJ3NlYXJjaEJ1dHRvbidcbiAgc2VhcmNoLnRleHRDb250ZW50ID0gJ1NlYXJjaCdcbiAgc2VhcmNoLnR5cGUgPSAnYnV0dG9uJ1xuXG4gIGFwcEZvcm0uYXBwZW5kQ2hpbGQoY2l0eUlucHV0TGFiZWwpXG4gIGFwcEZvcm0uYXBwZW5kQ2hpbGQoY2l0eUlucHV0KVxuICBhcHBGb3JtLmFwcGVuZENoaWxkKHN0YXRlSW5wdXRMYWJlbClcbiAgYXBwRm9ybS5hcHBlbmRDaGlsZChzdGF0ZUlucHV0KVxuICBhcHBGb3JtLmFwcGVuZENoaWxkKHNlYXJjaClcbiAgbWFpbi5hcHBlbmRDaGlsZChhcHBGb3JtKVxuXG4gIHNlYXJjaC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBpZiAoY2l0eUlucHV0LnZhbHVlICE9PSAnJyAmJiBzdGF0ZUlucHV0LnZhbHVlICE9PSAnJykge1xuICAgICAgY29uc29sZS5sb2coJ2NpdHk6ICcgKyBjaXR5SW5wdXQudmFsdWUpXG4gICAgICBjb25zb2xlLmxvZygnc3RhdGU6ICcgKyBzdGF0ZUlucHV0LnZhbHVlKVxuICAgICAgZmV0Y2hEYXRhKGNpdHlJbnB1dC52YWx1ZSwgc3RhdGVJbnB1dC52YWx1ZSlcbiAgICB9XG4gIH0pXG59XG5cbmZ1bmN0aW9uIGZldGNoRGF0YSAoY2l0eSwgc3RhdGVDb2RlKSB7XG4gIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgbWV0aG9kOiAnR0VUJyxcbiAgICBoZWFkZXJzOiB7XG4gICAgICAnWC1SYXBpZEFQSS1LZXknOiBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdhcGlLZXknKSxcbiAgICAgICdYLVJhcGlkQVBJLUhvc3QnOiAncmVhbHR5LWluLXVzLnAucmFwaWRhcGkuY29tJ1xuICAgIH1cbiAgfVxuXG4gIGZldGNoKFxuICAgIGBodHRwczovL3JlYWx0eS1pbi11cy5wLnJhcGlkYXBpLmNvbS9wcm9wZXJ0aWVzL3YyL2xpc3QtZm9yLXNhbGU/Y2l0eT0ke2NpdHl9JnN0YXRlX2NvZGU9JHtzdGF0ZUNvZGV9Jm9mZnNldD0wJmxpbWl0PTIwMCZzb3J0PXJlbGV2YW5jZWAsXG4gICAgb3B0aW9uc1xuICApXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiBjb25zb2xlLmxvZyhyZXNwb25zZSkpXG4gICAgLmNhdGNoKChlcnIpID0+IGNvbnNvbGUuZXJyb3IoZXJyKSlcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==