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

/***/ "(app-pages-browser)/./redux/slices/searchsSlice.js":
/*!**************************************!*\
  !*** ./redux/slices/searchsSlice.js ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   changeSearch: function() { return /* binding */ changeSearch; },\n/* harmony export */   searchsSlice: function() { return /* binding */ searchsSlice; }\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"(app-pages-browser)/./node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs\");\n\nconst searchsSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n    name: \"search\",\n    initialState: {\n        value: false\n    },\n    reducers: {\n        changeSearch: (state, action)=>{\n            state.value = action.payload;\n        }\n    }\n});\nconst { changeSearch } = searchsSlice.actions;\n// Selectors - This is how we pull information from the Global store slice\n/* harmony default export */ __webpack_exports__[\"default\"] = (searchsSlice.reducer);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3JlZHV4L3NsaWNlcy9zZWFyY2hzU2xpY2UuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQStDO0FBRXhDLE1BQU1DLGVBQWVELDZEQUFXQSxDQUFDO0lBQ3JDRSxNQUFNO0lBQ05DLGNBQWM7UUFDWEMsT0FBTztJQUNWO0lBQ0FDLFVBQVU7UUFDUEMsY0FBYyxDQUFDQyxPQUFPQztZQUNuQkQsTUFBTUgsS0FBSyxHQUFHSSxPQUFPQyxPQUFPO1FBQy9CO0lBQ0g7QUFDSCxHQUFFO0FBR0ssTUFBTSxFQUNWSCxZQUFZLEVBQ2QsR0FBR0wsYUFBYVMsT0FBTyxDQUFDO0FBRXpCLDBFQUEwRTtBQUUxRSwrREFBZVQsYUFBYVUsT0FBTyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3JlZHV4L3NsaWNlcy9zZWFyY2hzU2xpY2UuanM/ZDI0MyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVTbGljZSB9IGZyb20gXCJAcmVkdXhqcy90b29sa2l0XCI7XHJcblxyXG5leHBvcnQgY29uc3Qgc2VhcmNoc1NsaWNlID0gY3JlYXRlU2xpY2Uoe1xyXG4gICBuYW1lOiBcInNlYXJjaFwiLFxyXG4gICBpbml0aWFsU3RhdGU6IHtcclxuICAgICAgdmFsdWU6IGZhbHNlXHJcbiAgIH0sXHJcbiAgIHJlZHVjZXJzOiB7XHJcbiAgICAgIGNoYW5nZVNlYXJjaDogKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgICAgICAgc3RhdGUudmFsdWUgPSBhY3Rpb24ucGF5bG9hZDtcclxuICAgICAgfSxcclxuICAgfVxyXG59KVxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCB7XHJcbiAgIGNoYW5nZVNlYXJjaFxyXG59ID0gc2VhcmNoc1NsaWNlLmFjdGlvbnM7XHJcblxyXG4vLyBTZWxlY3RvcnMgLSBUaGlzIGlzIGhvdyB3ZSBwdWxsIGluZm9ybWF0aW9uIGZyb20gdGhlIEdsb2JhbCBzdG9yZSBzbGljZVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgc2VhcmNoc1NsaWNlLnJlZHVjZXI7Il0sIm5hbWVzIjpbImNyZWF0ZVNsaWNlIiwic2VhcmNoc1NsaWNlIiwibmFtZSIsImluaXRpYWxTdGF0ZSIsInZhbHVlIiwicmVkdWNlcnMiLCJjaGFuZ2VTZWFyY2giLCJzdGF0ZSIsImFjdGlvbiIsInBheWxvYWQiLCJhY3Rpb25zIiwicmVkdWNlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./redux/slices/searchsSlice.js\n"));

/***/ })

});