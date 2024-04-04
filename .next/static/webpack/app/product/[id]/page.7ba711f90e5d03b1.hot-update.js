"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/product/[id]/page",{

/***/ "(app-pages-browser)/./redux/slices/cartSlice.js":
/*!***********************************!*\
  !*** ./redux/slices/cartSlice.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addToBasket: function() { return /* binding */ addToBasket; },\n/* harmony export */   cartSlice: function() { return /* binding */ cartSlice; }\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"(app-pages-browser)/./node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs\");\n\nconst addItemToCart = (cartItems, cartItemToAdd)=>{\n    const existingCartItem = cartItems.find((cartItem)=>cartItem.id === cartItemToAdd.id);\n    if (existingCartItem) {\n        return cartItems.map((cartItem)=>cartItem.id === cartItemToAdd.id ? {\n                ...cartItem,\n                quantity: cartItem.quantity + 1\n            } : cartItem);\n    }\n    return [\n        ...cartItems,\n        {\n            ...cartItemToAdd,\n            quantity: 1\n        }\n    ];\n};\nconst cartSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n    name: \"cart\",\n    initialState: {\n        items: []\n    },\n    reducers: {\n        addToBasket: (state, action)=>{\n            state.items = addItemToCart(state.items, action.payload);\n        }\n    }\n});\nconst { addToBasket } = cartSlice.actions;\n// Selectors - This is how we pull information from the Global store slice\n/* harmony default export */ __webpack_exports__[\"default\"] = (cartSlice.reducer);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3JlZHV4L3NsaWNlcy9jYXJ0U2xpY2UuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQStDO0FBSS9DLE1BQU1DLGdCQUFnQixDQUFDQyxXQUFXQztJQUMvQixNQUFNQyxtQkFBbUJGLFVBQVVHLElBQUksQ0FDcEMsQ0FBQ0MsV0FBYUEsU0FBU0MsRUFBRSxLQUFLSixjQUFjSSxFQUFFO0lBR2pELElBQUlILGtCQUFrQjtRQUNuQixPQUFPRixVQUFVTSxHQUFHLENBQUMsQ0FBQ0YsV0FDbkJBLFNBQVNDLEVBQUUsS0FBS0osY0FBY0ksRUFBRSxHQUMzQjtnQkFBRSxHQUFHRCxRQUFRO2dCQUFFRyxVQUFVSCxTQUFTRyxRQUFRLEdBQUc7WUFBRSxJQUMvQ0g7SUFFWDtJQUVBLE9BQU87V0FBSUo7UUFBVztZQUFFLEdBQUdDLGFBQWE7WUFBRU0sVUFBVTtRQUFFO0tBQUU7QUFDM0Q7QUFJTyxNQUFNQyxZQUFZViw2REFBV0EsQ0FBQztJQUNsQ1csTUFBTTtJQUNOQyxjQUFjO1FBQ1hDLE9BQU8sRUFBRTtJQUNaO0lBQ0FDLFVBQVU7UUFDUEMsYUFBYSxDQUFDQyxPQUFPQztZQUNsQkQsTUFBTUgsS0FBSyxHQUFHWixjQUFjZSxNQUFNSCxLQUFLLEVBQUVJLE9BQU9DLE9BQU87UUFDMUQ7SUFDSDtBQUNILEdBQUU7QUFHSyxNQUFNLEVBQ1ZILFdBQVcsRUFDYixHQUFHTCxVQUFVUyxPQUFPLENBQUM7QUFFdEIsMEVBQTBFO0FBRTFFLCtEQUFlVCxVQUFVVSxPQUFPLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdXgvc2xpY2VzL2NhcnRTbGljZS5qcz8zZTk0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVNsaWNlIH0gZnJvbSBcIkByZWR1eGpzL3Rvb2xraXRcIjtcclxuXHJcblxyXG5cclxuY29uc3QgYWRkSXRlbVRvQ2FydCA9IChjYXJ0SXRlbXMsIGNhcnRJdGVtVG9BZGQpID0+IHtcclxuICAgY29uc3QgZXhpc3RpbmdDYXJ0SXRlbSA9IGNhcnRJdGVtcy5maW5kKFxyXG4gICAgICAoY2FydEl0ZW0pID0+IGNhcnRJdGVtLmlkID09PSBjYXJ0SXRlbVRvQWRkLmlkXHJcbiAgICk7XHJcblxyXG4gICBpZiAoZXhpc3RpbmdDYXJ0SXRlbSkge1xyXG4gICAgICByZXR1cm4gY2FydEl0ZW1zLm1hcCgoY2FydEl0ZW0pID0+XHJcbiAgICAgICAgIGNhcnRJdGVtLmlkID09PSBjYXJ0SXRlbVRvQWRkLmlkXHJcbiAgICAgICAgICAgID8geyAuLi5jYXJ0SXRlbSwgcXVhbnRpdHk6IGNhcnRJdGVtLnF1YW50aXR5ICsgMSB9XHJcbiAgICAgICAgICAgIDogY2FydEl0ZW1cclxuICAgICAgKTtcclxuICAgfVxyXG5cclxuICAgcmV0dXJuIFsuLi5jYXJ0SXRlbXMsIHsgLi4uY2FydEl0ZW1Ub0FkZCwgcXVhbnRpdHk6IDEgfV07XHJcbn07XHJcblxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBjYXJ0U2xpY2UgPSBjcmVhdGVTbGljZSh7XHJcbiAgIG5hbWU6IFwiY2FydFwiLFxyXG4gICBpbml0aWFsU3RhdGU6IHtcclxuICAgICAgaXRlbXM6IFtdXHJcbiAgIH0sXHJcbiAgIHJlZHVjZXJzOiB7XHJcbiAgICAgIGFkZFRvQmFza2V0OiAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgICAgICBzdGF0ZS5pdGVtcyA9IGFkZEl0ZW1Ub0NhcnQoc3RhdGUuaXRlbXMsIGFjdGlvbi5wYXlsb2FkKTtcclxuICAgICAgfSxcclxuICAgfVxyXG59KVxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCB7XHJcbiAgIGFkZFRvQmFza2V0LFxyXG59ID0gY2FydFNsaWNlLmFjdGlvbnM7XHJcblxyXG4vLyBTZWxlY3RvcnMgLSBUaGlzIGlzIGhvdyB3ZSBwdWxsIGluZm9ybWF0aW9uIGZyb20gdGhlIEdsb2JhbCBzdG9yZSBzbGljZVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2FydFNsaWNlLnJlZHVjZXI7Il0sIm5hbWVzIjpbImNyZWF0ZVNsaWNlIiwiYWRkSXRlbVRvQ2FydCIsImNhcnRJdGVtcyIsImNhcnRJdGVtVG9BZGQiLCJleGlzdGluZ0NhcnRJdGVtIiwiZmluZCIsImNhcnRJdGVtIiwiaWQiLCJtYXAiLCJxdWFudGl0eSIsImNhcnRTbGljZSIsIm5hbWUiLCJpbml0aWFsU3RhdGUiLCJpdGVtcyIsInJlZHVjZXJzIiwiYWRkVG9CYXNrZXQiLCJzdGF0ZSIsImFjdGlvbiIsInBheWxvYWQiLCJhY3Rpb25zIiwicmVkdWNlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./redux/slices/cartSlice.js\n"));

/***/ })

});