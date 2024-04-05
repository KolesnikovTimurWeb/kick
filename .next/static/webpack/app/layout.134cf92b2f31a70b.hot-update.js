"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-pages-browser)/./redux/slices/wishListSlice.js":
/*!***************************************!*\
  !*** ./redux/slices/wishListSlice.js ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addToWishList: function() { return /* binding */ addToWishList; },\n/* harmony export */   removeFromBasket: function() { return /* binding */ removeFromBasket; },\n/* harmony export */   wishListSlice: function() { return /* binding */ wishListSlice; }\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"(app-pages-browser)/./node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs\");\n\nconst addItemToCart = (cartItems, cartItemToAdd)=>{\n    const existingCartItem = cartItems.find((cartItem)=>cartItem.title === cartItemToAdd.title);\n    if (existingCartItem) {\n        return cartItems.map((cartItem)=>cartItem.title === cartItemToAdd.title ? {\n                ...cartItem,\n                liked: false\n            } : cartItem);\n    }\n    return [\n        ...cartItems,\n        {\n            ...cartItemToAdd,\n            liked: true\n        }\n    ];\n};\nconst wishListSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n    name: \"wishList\",\n    initialState: {\n        items: []\n    },\n    reducers: {\n        addToWishList: (state, action)=>{\n            state.items = addItemToCart(state.items, action.payload);\n        },\n        removeFromBasket: (state, action)=>{\n            state.items = state.items.filter((item)=>item.ChoosedSize !== action.payload.ChoosedSize || item.ChoosedColor !== action.payload.ChoosedColor || item.title !== action.payload.title);\n        }\n    }\n});\nconst { addToWishList, removeFromBasket } = cartSlice.actions;\n// Selectors - This is how we pull information from the Global store slice\n/* harmony default export */ __webpack_exports__[\"default\"] = (wishListSlice.reducer);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3JlZHV4L3NsaWNlcy93aXNoTGlzdFNsaWNlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBK0M7QUFJL0MsTUFBTUMsZ0JBQWdCLENBQUNDLFdBQVdDO0lBQy9CLE1BQU1DLG1CQUFtQkYsVUFBVUcsSUFBSSxDQUNwQyxDQUFDQyxXQUFhQSxTQUFTQyxLQUFLLEtBQUtKLGNBQWNJLEtBQUs7SUFHdkQsSUFBSUgsa0JBQWtCO1FBQ25CLE9BQU9GLFVBQVVNLEdBQUcsQ0FBQyxDQUFDRixXQUNuQkEsU0FBU0MsS0FBSyxLQUFLSixjQUFjSSxLQUFLLEdBQ2pDO2dCQUFFLEdBQUdELFFBQVE7Z0JBQUVHLE9BQU87WUFBTSxJQUM1Qkg7SUFFWDtJQUVBLE9BQU87V0FBSUo7UUFBVztZQUFFLEdBQUdDLGFBQWE7WUFBRU0sT0FBTztRQUFLO0tBQUU7QUFDM0Q7QUFJTyxNQUFNQyxnQkFBZ0JWLDZEQUFXQSxDQUFDO0lBQ3RDVyxNQUFNO0lBQ05DLGNBQWM7UUFDWEMsT0FBTyxFQUFFO0lBQ1o7SUFDQUMsVUFBVTtRQUNQQyxlQUFlLENBQUNDLE9BQU9DO1lBQ3BCRCxNQUFNSCxLQUFLLEdBQUdaLGNBQWNlLE1BQU1ILEtBQUssRUFBRUksT0FBT0MsT0FBTztRQUMxRDtRQUNBQyxrQkFBa0IsQ0FBQ0gsT0FBT0M7WUFDdkJELE1BQU1ILEtBQUssR0FBR0csTUFBTUgsS0FBSyxDQUFDTyxNQUFNLENBQUMsQ0FBQ0MsT0FBU0EsS0FBS0MsV0FBVyxLQUFLTCxPQUFPQyxPQUFPLENBQUNJLFdBQVcsSUFBSUQsS0FBS0UsWUFBWSxLQUFLTixPQUFPQyxPQUFPLENBQUNLLFlBQVksSUFBSUYsS0FBS2QsS0FBSyxLQUFLVSxPQUFPQyxPQUFPLENBQUNYLEtBQUs7UUFDekw7SUFDSDtBQUNILEdBQUU7QUFHSyxNQUFNLEVBQ1ZRLGFBQWEsRUFDYkksZ0JBQWdCLEVBQ2xCLEdBQUdLLFVBQVVDLE9BQU8sQ0FBQztBQUV0QiwwRUFBMEU7QUFFMUUsK0RBQWVmLGNBQWNnQixPQUFPLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdXgvc2xpY2VzL3dpc2hMaXN0U2xpY2UuanM/OTEwMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVTbGljZSB9IGZyb20gXCJAcmVkdXhqcy90b29sa2l0XCI7XHJcblxyXG5cclxuXHJcbmNvbnN0IGFkZEl0ZW1Ub0NhcnQgPSAoY2FydEl0ZW1zLCBjYXJ0SXRlbVRvQWRkKSA9PiB7XHJcbiAgIGNvbnN0IGV4aXN0aW5nQ2FydEl0ZW0gPSBjYXJ0SXRlbXMuZmluZChcclxuICAgICAgKGNhcnRJdGVtKSA9PiBjYXJ0SXRlbS50aXRsZSA9PT0gY2FydEl0ZW1Ub0FkZC50aXRsZVxyXG4gICApO1xyXG5cclxuICAgaWYgKGV4aXN0aW5nQ2FydEl0ZW0pIHtcclxuICAgICAgcmV0dXJuIGNhcnRJdGVtcy5tYXAoKGNhcnRJdGVtKSA9PlxyXG4gICAgICAgICBjYXJ0SXRlbS50aXRsZSA9PT0gY2FydEl0ZW1Ub0FkZC50aXRsZVxyXG4gICAgICAgICAgICA/IHsgLi4uY2FydEl0ZW0sIGxpa2VkOiBmYWxzZSB9XHJcbiAgICAgICAgICAgIDogY2FydEl0ZW1cclxuICAgICAgKTtcclxuICAgfVxyXG5cclxuICAgcmV0dXJuIFsuLi5jYXJ0SXRlbXMsIHsgLi4uY2FydEl0ZW1Ub0FkZCwgbGlrZWQ6IHRydWUgfV07XHJcbn07XHJcblxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCB3aXNoTGlzdFNsaWNlID0gY3JlYXRlU2xpY2Uoe1xyXG4gICBuYW1lOiBcIndpc2hMaXN0XCIsXHJcbiAgIGluaXRpYWxTdGF0ZToge1xyXG4gICAgICBpdGVtczogW11cclxuICAgfSxcclxuICAgcmVkdWNlcnM6IHtcclxuICAgICAgYWRkVG9XaXNoTGlzdDogKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgICAgICAgc3RhdGUuaXRlbXMgPSBhZGRJdGVtVG9DYXJ0KHN0YXRlLml0ZW1zLCBhY3Rpb24ucGF5bG9hZCk7XHJcbiAgICAgIH0sXHJcbiAgICAgIHJlbW92ZUZyb21CYXNrZXQ6IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICAgICAgIHN0YXRlLml0ZW1zID0gc3RhdGUuaXRlbXMuZmlsdGVyKChpdGVtKSA9PiBpdGVtLkNob29zZWRTaXplICE9PSBhY3Rpb24ucGF5bG9hZC5DaG9vc2VkU2l6ZSB8fCBpdGVtLkNob29zZWRDb2xvciAhPT0gYWN0aW9uLnBheWxvYWQuQ2hvb3NlZENvbG9yIHx8IGl0ZW0udGl0bGUgIT09IGFjdGlvbi5wYXlsb2FkLnRpdGxlKTtcclxuICAgICAgfSxcclxuICAgfVxyXG59KVxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCB7XHJcbiAgIGFkZFRvV2lzaExpc3QsXHJcbiAgIHJlbW92ZUZyb21CYXNrZXRcclxufSA9IGNhcnRTbGljZS5hY3Rpb25zO1xyXG5cclxuLy8gU2VsZWN0b3JzIC0gVGhpcyBpcyBob3cgd2UgcHVsbCBpbmZvcm1hdGlvbiBmcm9tIHRoZSBHbG9iYWwgc3RvcmUgc2xpY2VcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpc2hMaXN0U2xpY2UucmVkdWNlcjsiXSwibmFtZXMiOlsiY3JlYXRlU2xpY2UiLCJhZGRJdGVtVG9DYXJ0IiwiY2FydEl0ZW1zIiwiY2FydEl0ZW1Ub0FkZCIsImV4aXN0aW5nQ2FydEl0ZW0iLCJmaW5kIiwiY2FydEl0ZW0iLCJ0aXRsZSIsIm1hcCIsImxpa2VkIiwid2lzaExpc3RTbGljZSIsIm5hbWUiLCJpbml0aWFsU3RhdGUiLCJpdGVtcyIsInJlZHVjZXJzIiwiYWRkVG9XaXNoTGlzdCIsInN0YXRlIiwiYWN0aW9uIiwicGF5bG9hZCIsInJlbW92ZUZyb21CYXNrZXQiLCJmaWx0ZXIiLCJpdGVtIiwiQ2hvb3NlZFNpemUiLCJDaG9vc2VkQ29sb3IiLCJjYXJ0U2xpY2UiLCJhY3Rpb25zIiwicmVkdWNlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./redux/slices/wishListSlice.js\n"));

/***/ })

});