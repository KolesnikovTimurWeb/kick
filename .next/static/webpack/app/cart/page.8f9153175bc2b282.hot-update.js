"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/cart/page",{

/***/ "(app-pages-browser)/./redux/slices/cartSlice.js":
/*!***********************************!*\
  !*** ./redux/slices/cartSlice.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addToBasket: function() { return /* binding */ addToBasket; },\n/* harmony export */   cartSlice: function() { return /* binding */ cartSlice; },\n/* harmony export */   minusItem: function() { return /* binding */ minusItem; },\n/* harmony export */   plusItem: function() { return /* binding */ plusItem; },\n/* harmony export */   removeFromBasket: function() { return /* binding */ removeFromBasket; }\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"(app-pages-browser)/./node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs\");\n\nconst addItemToCart = (cartItems, cartItemToAdd)=>{\n    const existingCartItem = cartItems.find((cartItem)=>cartItem.title === cartItemToAdd.title && cartItem.ChoosedColor === cartItemToAdd.ChoosedColor && cartItem.ChoosedSize === cartItemToAdd.ChoosedSize);\n    if (existingCartItem) {\n        return cartItems.map((cartItem)=>cartItem.title === cartItemToAdd.title && cartItem.ChoosedColor === cartItemToAdd.ChoosedColor && cartItem.ChoosedSize === cartItemToAdd.ChoosedSize ? {\n                ...cartItem,\n                quantity: cartItem.quantity + 1\n            } : cartItem);\n    }\n    return [\n        ...cartItems,\n        {\n            ...cartItemToAdd,\n            quantity: 1,\n            ChoosedColor: cartItemToAdd.ChoosedColor,\n            ChoosedSize: cartItemToAdd.ChoosedSize\n        }\n    ];\n};\nconst cartSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n    name: \"cart\",\n    initialState: {\n        items: []\n    },\n    reducers: {\n        addToBasket: (state, action)=>{\n            state.items = addItemToCart(state.items, action.payload);\n        },\n        plusItem: (state, action)=>{\n            [\n                ...state.items,\n                state.items[action.payload].quantity += 1\n            ];\n        },\n        minusItem: (state, action)=>{\n            [\n                ...state.items,\n                state.items[action.payload].quantity -= 1\n            ];\n        },\n        removeFromBasket: (state, action)=>{\n            state.items = state.items.filter((item)=>console.log(item.ChoosedSize !== action.payload.ChoosedSize && item.ChoosedColor !== action.payload.ChoosedColor && item.title !== action.payload.title));\n        }\n    }\n});\nconst { addToBasket, plusItem, minusItem, removeFromBasket } = cartSlice.actions;\n// Selectors - This is how we pull information from the Global store slice\n/* harmony default export */ __webpack_exports__[\"default\"] = (cartSlice.reducer);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3JlZHV4L3NsaWNlcy9jYXJ0U2xpY2UuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQStDO0FBSS9DLE1BQU1DLGdCQUFnQixDQUFDQyxXQUFXQztJQUMvQixNQUFNQyxtQkFBbUJGLFVBQVVHLElBQUksQ0FDcEMsQ0FBQ0MsV0FBYUEsU0FBU0MsS0FBSyxLQUFLSixjQUFjSSxLQUFLLElBQUlELFNBQVNFLFlBQVksS0FBS0wsY0FBY0ssWUFBWSxJQUFJRixTQUFTRyxXQUFXLEtBQUtOLGNBQWNNLFdBQVc7SUFHckssSUFBSUwsa0JBQWtCO1FBQ25CLE9BQU9GLFVBQVVRLEdBQUcsQ0FBQyxDQUFDSixXQUNuQkEsU0FBU0MsS0FBSyxLQUFLSixjQUFjSSxLQUFLLElBQUlELFNBQVNFLFlBQVksS0FBS0wsY0FBY0ssWUFBWSxJQUFJRixTQUFTRyxXQUFXLEtBQUtOLGNBQWNNLFdBQVcsR0FDL0k7Z0JBQUUsR0FBR0gsUUFBUTtnQkFBRUssVUFBVUwsU0FBU0ssUUFBUSxHQUFHO1lBQUUsSUFDL0NMO0lBRVg7SUFFQSxPQUFPO1dBQUlKO1FBQVc7WUFBRSxHQUFHQyxhQUFhO1lBQUVRLFVBQVU7WUFBR0gsY0FBY0wsY0FBY0ssWUFBWTtZQUFFQyxhQUFhTixjQUFjTSxXQUFXO1FBQUM7S0FBRTtBQUM3STtBQUlPLE1BQU1HLFlBQVlaLDZEQUFXQSxDQUFDO0lBQ2xDYSxNQUFNO0lBQ05DLGNBQWM7UUFDWEMsT0FBTyxFQUFFO0lBQ1o7SUFDQUMsVUFBVTtRQUNQQyxhQUFhLENBQUNDLE9BQU9DO1lBQ2xCRCxNQUFNSCxLQUFLLEdBQUdkLGNBQWNpQixNQUFNSCxLQUFLLEVBQUVJLE9BQU9DLE9BQU87UUFDMUQ7UUFDQUMsVUFBVSxDQUFDSCxPQUFPQztZQUNmO21CQUFJRCxNQUFNSCxLQUFLO2dCQUFHRyxNQUFNSCxLQUFLLENBQUNJLE9BQU9DLE9BQU8sQ0FBQyxDQUFDVCxRQUFRLElBQUk7YUFBRztRQUNoRTtRQUNBVyxXQUFXLENBQUNKLE9BQU9DO1lBQ2hCO21CQUFJRCxNQUFNSCxLQUFLO2dCQUFHRyxNQUFNSCxLQUFLLENBQUNJLE9BQU9DLE9BQU8sQ0FBQyxDQUFDVCxRQUFRLElBQUk7YUFBRztRQUNoRTtRQUNBWSxrQkFBa0IsQ0FBQ0wsT0FBT0M7WUFDdkJELE1BQU1ILEtBQUssR0FBR0csTUFBTUgsS0FBSyxDQUFDUyxNQUFNLENBQUMsQ0FBQ0MsT0FBU0MsUUFBUUMsR0FBRyxDQUFDRixLQUFLaEIsV0FBVyxLQUFLVSxPQUFPQyxPQUFPLENBQUNYLFdBQVcsSUFBSWdCLEtBQUtqQixZQUFZLEtBQUtXLE9BQU9DLE9BQU8sQ0FBQ1osWUFBWSxJQUFJaUIsS0FBS2xCLEtBQUssS0FBS1ksT0FBT0MsT0FBTyxDQUFDYixLQUFLO1FBQ3JNO0lBQ0g7QUFDSCxHQUFFO0FBR0ssTUFBTSxFQUNWVSxXQUFXLEVBQ1hJLFFBQVEsRUFDUkMsU0FBUyxFQUNUQyxnQkFBZ0IsRUFDbEIsR0FBR1gsVUFBVWdCLE9BQU8sQ0FBQztBQUV0QiwwRUFBMEU7QUFFMUUsK0RBQWVoQixVQUFVaUIsT0FBTyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3JlZHV4L3NsaWNlcy9jYXJ0U2xpY2UuanM/M2U5NCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVTbGljZSB9IGZyb20gXCJAcmVkdXhqcy90b29sa2l0XCI7XHJcblxyXG5cclxuXHJcbmNvbnN0IGFkZEl0ZW1Ub0NhcnQgPSAoY2FydEl0ZW1zLCBjYXJ0SXRlbVRvQWRkKSA9PiB7XHJcbiAgIGNvbnN0IGV4aXN0aW5nQ2FydEl0ZW0gPSBjYXJ0SXRlbXMuZmluZChcclxuICAgICAgKGNhcnRJdGVtKSA9PiBjYXJ0SXRlbS50aXRsZSA9PT0gY2FydEl0ZW1Ub0FkZC50aXRsZSAmJiBjYXJ0SXRlbS5DaG9vc2VkQ29sb3IgPT09IGNhcnRJdGVtVG9BZGQuQ2hvb3NlZENvbG9yICYmIGNhcnRJdGVtLkNob29zZWRTaXplID09PSBjYXJ0SXRlbVRvQWRkLkNob29zZWRTaXplXHJcbiAgICk7XHJcblxyXG4gICBpZiAoZXhpc3RpbmdDYXJ0SXRlbSkge1xyXG4gICAgICByZXR1cm4gY2FydEl0ZW1zLm1hcCgoY2FydEl0ZW0pID0+XHJcbiAgICAgICAgIGNhcnRJdGVtLnRpdGxlID09PSBjYXJ0SXRlbVRvQWRkLnRpdGxlICYmIGNhcnRJdGVtLkNob29zZWRDb2xvciA9PT0gY2FydEl0ZW1Ub0FkZC5DaG9vc2VkQ29sb3IgJiYgY2FydEl0ZW0uQ2hvb3NlZFNpemUgPT09IGNhcnRJdGVtVG9BZGQuQ2hvb3NlZFNpemVcclxuICAgICAgICAgICAgPyB7IC4uLmNhcnRJdGVtLCBxdWFudGl0eTogY2FydEl0ZW0ucXVhbnRpdHkgKyAxIH1cclxuICAgICAgICAgICAgOiBjYXJ0SXRlbVxyXG4gICAgICApO1xyXG4gICB9XHJcblxyXG4gICByZXR1cm4gWy4uLmNhcnRJdGVtcywgeyAuLi5jYXJ0SXRlbVRvQWRkLCBxdWFudGl0eTogMSwgQ2hvb3NlZENvbG9yOiBjYXJ0SXRlbVRvQWRkLkNob29zZWRDb2xvciwgQ2hvb3NlZFNpemU6IGNhcnRJdGVtVG9BZGQuQ2hvb3NlZFNpemUgfV07XHJcbn07XHJcblxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBjYXJ0U2xpY2UgPSBjcmVhdGVTbGljZSh7XHJcbiAgIG5hbWU6IFwiY2FydFwiLFxyXG4gICBpbml0aWFsU3RhdGU6IHtcclxuICAgICAgaXRlbXM6IFtdXHJcbiAgIH0sXHJcbiAgIHJlZHVjZXJzOiB7XHJcbiAgICAgIGFkZFRvQmFza2V0OiAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgICAgICBzdGF0ZS5pdGVtcyA9IGFkZEl0ZW1Ub0NhcnQoc3RhdGUuaXRlbXMsIGFjdGlvbi5wYXlsb2FkKTtcclxuICAgICAgfSxcclxuICAgICAgcGx1c0l0ZW06IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICAgICAgIFsuLi5zdGF0ZS5pdGVtcywgKHN0YXRlLml0ZW1zW2FjdGlvbi5wYXlsb2FkXS5xdWFudGl0eSArPSAxKV07XHJcbiAgICAgIH0sXHJcbiAgICAgIG1pbnVzSXRlbTogKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgICAgICAgWy4uLnN0YXRlLml0ZW1zLCAoc3RhdGUuaXRlbXNbYWN0aW9uLnBheWxvYWRdLnF1YW50aXR5IC09IDEpXTtcclxuICAgICAgfSxcclxuICAgICAgcmVtb3ZlRnJvbUJhc2tldDogKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgICAgICAgc3RhdGUuaXRlbXMgPSBzdGF0ZS5pdGVtcy5maWx0ZXIoKGl0ZW0pID0+IGNvbnNvbGUubG9nKGl0ZW0uQ2hvb3NlZFNpemUgIT09IGFjdGlvbi5wYXlsb2FkLkNob29zZWRTaXplICYmIGl0ZW0uQ2hvb3NlZENvbG9yICE9PSBhY3Rpb24ucGF5bG9hZC5DaG9vc2VkQ29sb3IgJiYgaXRlbS50aXRsZSAhPT0gYWN0aW9uLnBheWxvYWQudGl0bGUpKTtcclxuICAgICAgfSxcclxuICAgfVxyXG59KVxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCB7XHJcbiAgIGFkZFRvQmFza2V0LFxyXG4gICBwbHVzSXRlbSxcclxuICAgbWludXNJdGVtLFxyXG4gICByZW1vdmVGcm9tQmFza2V0XHJcbn0gPSBjYXJ0U2xpY2UuYWN0aW9ucztcclxuXHJcbi8vIFNlbGVjdG9ycyAtIFRoaXMgaXMgaG93IHdlIHB1bGwgaW5mb3JtYXRpb24gZnJvbSB0aGUgR2xvYmFsIHN0b3JlIHNsaWNlXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjYXJ0U2xpY2UucmVkdWNlcjsiXSwibmFtZXMiOlsiY3JlYXRlU2xpY2UiLCJhZGRJdGVtVG9DYXJ0IiwiY2FydEl0ZW1zIiwiY2FydEl0ZW1Ub0FkZCIsImV4aXN0aW5nQ2FydEl0ZW0iLCJmaW5kIiwiY2FydEl0ZW0iLCJ0aXRsZSIsIkNob29zZWRDb2xvciIsIkNob29zZWRTaXplIiwibWFwIiwicXVhbnRpdHkiLCJjYXJ0U2xpY2UiLCJuYW1lIiwiaW5pdGlhbFN0YXRlIiwiaXRlbXMiLCJyZWR1Y2VycyIsImFkZFRvQmFza2V0Iiwic3RhdGUiLCJhY3Rpb24iLCJwYXlsb2FkIiwicGx1c0l0ZW0iLCJtaW51c0l0ZW0iLCJyZW1vdmVGcm9tQmFza2V0IiwiZmlsdGVyIiwiaXRlbSIsImNvbnNvbGUiLCJsb2ciLCJhY3Rpb25zIiwicmVkdWNlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./redux/slices/cartSlice.js\n"));

/***/ })

});