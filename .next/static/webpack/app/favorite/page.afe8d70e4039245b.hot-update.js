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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _components_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/card */ \"(app-pages-browser)/./components/card.jsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"(app-pages-browser)/./node_modules/react-redux/dist/react-redux.mjs\");\n/* harmony import */ var _styles_Favorite_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/styles/Favorite.module.scss */ \"(app-pages-browser)/./styles/Favorite.module.scss\");\n/* harmony import */ var _styles_Favorite_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_Favorite_module_scss__WEBPACK_IMPORTED_MODULE_4__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst Favorite = ()=>{\n    _s();\n    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    let allLike = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)((state)=>state.wishList.items.fitler((item)=>item.liked === true));\n    console.log(allLike);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        if (allLike === undefined) return;\n        setData(allLike);\n    }, [\n        allLike\n    ]);\n    console.log(data);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Favorite_module_scss__WEBPACK_IMPORTED_MODULE_4___default().favorite),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: \"Liked Shoes\"\n            }, void 0, false, {\n                fileName: \"D:\\\\projects\\\\my projects\\\\kick\\\\app\\\\favorite\\\\page.jsx\",\n                lineNumber: 19,\n                columnNumber: 10\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                children: \"You can see shoes that you put in your wishlist\"\n            }, void 0, false, {\n                fileName: \"D:\\\\projects\\\\my projects\\\\kick\\\\app\\\\favorite\\\\page.jsx\",\n                lineNumber: 20,\n                columnNumber: 10\n            }, undefined),\n            data.map((item, index)=>{\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_card__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                    item: item,\n                    index: index\n                }, index, false, {\n                    fileName: \"D:\\\\projects\\\\my projects\\\\kick\\\\app\\\\favorite\\\\page.jsx\",\n                    lineNumber: 23,\n                    columnNumber: 16\n                }, undefined);\n            })\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\projects\\\\my projects\\\\kick\\\\app\\\\favorite\\\\page.jsx\",\n        lineNumber: 18,\n        columnNumber: 7\n    }, undefined);\n};\n_s(Favorite, \"/AhM56ynJ5ozZQEk5KjahuAr9xc=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector\n    ];\n});\n_c = Favorite;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Favorite);\nvar _c;\n$RefreshReg$(_c, \"Favorite\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9mYXZvcml0ZS9wYWdlLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQ29DO0FBQ2M7QUFDVDtBQUNRO0FBRWpELE1BQU1NLFdBQVc7O0lBQ2QsTUFBTSxDQUFDQyxNQUFNQyxRQUFRLEdBQUdMLCtDQUFRQSxDQUFDLEVBQUU7SUFDbkMsSUFBSU0sVUFBVUwsd0RBQVdBLENBQUMsQ0FBQ00sUUFBVUEsTUFBTUMsUUFBUSxDQUFDQyxLQUFLLENBQUNDLE1BQU0sQ0FBQ0MsQ0FBQUEsT0FBUUEsS0FBS0MsS0FBSyxLQUFLO0lBQ3hGQyxRQUFRQyxHQUFHLENBQUNSO0lBRVpQLGdEQUFTQSxDQUFDO1FBQ1AsSUFBSU8sWUFBWVMsV0FBVztRQUMzQlYsUUFBUUM7SUFDWCxHQUFHO1FBQUNBO0tBQVE7SUFDWk8sUUFBUUMsR0FBRyxDQUFDVjtJQUNaLHFCQUNHLDhEQUFDWTtRQUFJQyxXQUFXZiw4RUFBYzs7MEJBQzNCLDhEQUFDaUI7MEJBQUc7Ozs7OzswQkFDSiw4REFBQ0M7MEJBQUc7Ozs7OztZQUNIaEIsS0FBS2lCLEdBQUcsQ0FBQyxDQUFDVixNQUFNVztnQkFDZCxxQkFDRyw4REFBQ3pCLHdEQUFJQTtvQkFBQ2MsTUFBTUE7b0JBQWtCVyxPQUFPQTttQkFBZEE7Ozs7O1lBRTdCOzs7Ozs7O0FBTVQ7R0F4Qk1uQjs7UUFFV0Ysb0RBQVdBOzs7S0FGdEJFO0FBMEJOLCtEQUFlQSxRQUFRQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9mYXZvcml0ZS9wYWdlLmpzeD9kMTg5Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiXHJcbmltcG9ydCBDYXJkIGZyb20gJ0AvY29tcG9uZW50cy9jYXJkJ1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5pbXBvcnQgc3R5bGUgZnJvbSAnQC9zdHlsZXMvRmF2b3JpdGUubW9kdWxlLnNjc3MnXHJcblxyXG5jb25zdCBGYXZvcml0ZSA9ICgpID0+IHtcclxuICAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGUoW10pXHJcbiAgIGxldCBhbGxMaWtlID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS53aXNoTGlzdC5pdGVtcy5maXRsZXIoaXRlbSA9PiBpdGVtLmxpa2VkID09PSB0cnVlKSlcclxuICAgY29uc29sZS5sb2coYWxsTGlrZSlcclxuXHJcbiAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgIGlmIChhbGxMaWtlID09PSB1bmRlZmluZWQpIHJldHVyblxyXG4gICAgICBzZXREYXRhKGFsbExpa2UpXHJcbiAgIH0sIFthbGxMaWtlXSlcclxuICAgY29uc29sZS5sb2coZGF0YSlcclxuICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmZhdm9yaXRlfT5cclxuICAgICAgICAgPGgyPkxpa2VkIFNob2VzPC9oMj5cclxuICAgICAgICAgPGgzPllvdSBjYW4gc2VlIHNob2VzIHRoYXQgeW91IHB1dCBpbiB5b3VyIHdpc2hsaXN0PC9oMz5cclxuICAgICAgICAge2RhdGEubWFwKChpdGVtLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICA8Q2FyZCBpdGVtPXtpdGVtfSBrZXk9e2luZGV4fSBpbmRleD17aW5kZXh9IC8+XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICAgfVxyXG5cclxuICAgICAgICAgKX1cclxuXHJcbiAgICAgIDwvZGl2PlxyXG4gICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZhdm9yaXRlXHJcbiJdLCJuYW1lcyI6WyJDYXJkIiwiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInVzZVNlbGVjdG9yIiwic3R5bGUiLCJGYXZvcml0ZSIsImRhdGEiLCJzZXREYXRhIiwiYWxsTGlrZSIsInN0YXRlIiwid2lzaExpc3QiLCJpdGVtcyIsImZpdGxlciIsIml0ZW0iLCJsaWtlZCIsImNvbnNvbGUiLCJsb2ciLCJ1bmRlZmluZWQiLCJkaXYiLCJjbGFzc05hbWUiLCJmYXZvcml0ZSIsImgyIiwiaDMiLCJtYXAiLCJpbmRleCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/favorite/page.jsx\n"));

/***/ })

});