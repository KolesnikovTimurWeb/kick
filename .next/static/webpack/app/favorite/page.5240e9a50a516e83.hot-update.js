"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/favorite/page",{

/***/ "(app-pages-browser)/./app/favorite/page.jsx":
/*!*******************************!*\
  !*** ./app/favorite/page.jsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _components_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/card */ \"(app-pages-browser)/./components/card.jsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"(app-pages-browser)/./node_modules/react-redux/dist/react-redux.mjs\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst Favorite = ()=>{\n    _s();\n    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    let allLike = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)((state)=>state.wishList.items.find((state)=>state.liked === true));\n    console.log(data);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        if (allLike) setData(allLike);\n    }, [\n        allLike\n    ]);\n    console.log(data);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: data.map((item, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_card__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                item: item,\n                index: index\n            }, index, false, {\n                fileName: \"D:\\\\projects\\\\my projects\\\\kick\\\\app\\\\favorite\\\\page.jsx\",\n                lineNumber: 19,\n                columnNumber: 13\n            }, undefined))\n    }, void 0, false, {\n        fileName: \"D:\\\\projects\\\\my projects\\\\kick\\\\app\\\\favorite\\\\page.jsx\",\n        lineNumber: 17,\n        columnNumber: 7\n    }, undefined);\n};\n_s(Favorite, \"/AhM56ynJ5ozZQEk5KjahuAr9xc=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector\n    ];\n});\n_c = Favorite;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Favorite);\nvar _c;\n$RefreshReg$(_c, \"Favorite\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9mYXZvcml0ZS9wYWdlLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUNvQztBQUNjO0FBQ1Q7QUFFekMsTUFBTUssV0FBVzs7SUFDZCxNQUFNLENBQUNDLE1BQU1DLFFBQVEsR0FBR0osK0NBQVFBLENBQUMsRUFBRTtJQUNuQyxJQUFJSyxVQUFVSix3REFBV0EsQ0FBQyxDQUFDSyxRQUFVQSxNQUFNQyxRQUFRLENBQUNDLEtBQUssQ0FBQ0MsSUFBSSxDQUFDSCxDQUFBQSxRQUFTQSxNQUFNSSxLQUFLLEtBQUs7SUFDeEZDLFFBQVFDLEdBQUcsQ0FBQ1Q7SUFFWkosZ0RBQVNBLENBQUM7UUFDUCxJQUFJTSxTQUNERCxRQUFRQztJQUNkLEdBQUc7UUFBQ0E7S0FBUTtJQUNaTSxRQUFRQyxHQUFHLENBQUNUO0lBQ1oscUJBQ0csOERBQUNVO2tCQUNHVixLQUFLVyxHQUFHLENBQUMsQ0FBQ0MsTUFBTUMsc0JBQ2QsOERBQUNuQix3REFBSUE7Z0JBQUNrQixNQUFNQTtnQkFBa0JDLE9BQU9BO2VBQWRBOzs7Ozs7Ozs7O0FBS25DO0dBbEJNZDs7UUFFV0Qsb0RBQVdBOzs7S0FGdEJDO0FBb0JOLCtEQUFlQSxRQUFRQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9mYXZvcml0ZS9wYWdlLmpzeD9kMTg5Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiXHJcbmltcG9ydCBDYXJkIGZyb20gJ0AvY29tcG9uZW50cy9jYXJkJ1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5cclxuY29uc3QgRmF2b3JpdGUgPSAoKSA9PiB7XHJcbiAgIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlKFtdKVxyXG4gICBsZXQgYWxsTGlrZSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUud2lzaExpc3QuaXRlbXMuZmluZChzdGF0ZSA9PiBzdGF0ZS5saWtlZCA9PT0gdHJ1ZSkpXHJcbiAgIGNvbnNvbGUubG9nKGRhdGEpXHJcblxyXG4gICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICBpZiAoYWxsTGlrZSlcclxuICAgICAgICAgc2V0RGF0YShhbGxMaWtlKVxyXG4gICB9LCBbYWxsTGlrZV0pXHJcbiAgIGNvbnNvbGUubG9nKGRhdGEpXHJcbiAgIHJldHVybiAoXHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgIHtkYXRhLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgPENhcmQgaXRlbT17aXRlbX0ga2V5PXtpbmRleH0gaW5kZXg9e2luZGV4fSAvPlxyXG4gICAgICAgICApKX1cclxuXHJcbiAgICAgIDwvZGl2PlxyXG4gICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZhdm9yaXRlXHJcbiJdLCJuYW1lcyI6WyJDYXJkIiwiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInVzZVNlbGVjdG9yIiwiRmF2b3JpdGUiLCJkYXRhIiwic2V0RGF0YSIsImFsbExpa2UiLCJzdGF0ZSIsIndpc2hMaXN0IiwiaXRlbXMiLCJmaW5kIiwibGlrZWQiLCJjb25zb2xlIiwibG9nIiwiZGl2IiwibWFwIiwiaXRlbSIsImluZGV4Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/favorite/page.jsx\n"));

/***/ })

});