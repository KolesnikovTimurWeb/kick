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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _components_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/card */ \"(app-pages-browser)/./components/card.jsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"(app-pages-browser)/./node_modules/react-redux/dist/react-redux.mjs\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst Favorite = ()=>{\n    _s();\n    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    let allLike = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)((state)=>state.wishList.items);\n    console.log(allLike);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        if (allLike === undefined) return;\n        setData(allLike);\n    }, [\n        allLike\n    ]);\n    console.log(data);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: ()=>console.log(allLike),\n                children: \"asdad\"\n            }, void 0, false, {\n                fileName: \"D:\\\\projects\\\\my projects\\\\kick\\\\app\\\\favorite\\\\page.jsx\",\n                lineNumber: 18,\n                columnNumber: 10\n            }, undefined),\n            data.map((item, index)=>{\n                console.log(\"asd\");\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_card__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                    item: item,\n                    index: index\n                }, index, false, {\n                    fileName: \"D:\\\\projects\\\\my projects\\\\kick\\\\app\\\\favorite\\\\page.jsx\",\n                    lineNumber: 22,\n                    columnNumber: 16\n                }, undefined);\n            })\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\projects\\\\my projects\\\\kick\\\\app\\\\favorite\\\\page.jsx\",\n        lineNumber: 17,\n        columnNumber: 7\n    }, undefined);\n};\n_s(Favorite, \"/AhM56ynJ5ozZQEk5KjahuAr9xc=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector\n    ];\n});\n_c = Favorite;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Favorite);\nvar _c;\n$RefreshReg$(_c, \"Favorite\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9mYXZvcml0ZS9wYWdlLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUNvQztBQUNjO0FBQ1Q7QUFFekMsTUFBTUssV0FBVzs7SUFDZCxNQUFNLENBQUNDLE1BQU1DLFFBQVEsR0FBR0osK0NBQVFBLENBQUMsRUFBRTtJQUNuQyxJQUFJSyxVQUFVSix3REFBV0EsQ0FBQyxDQUFDSyxRQUFVQSxNQUFNQyxRQUFRLENBQUNDLEtBQUs7SUFDekRDLFFBQVFDLEdBQUcsQ0FBQ0w7SUFFWk4sZ0RBQVNBLENBQUM7UUFDUCxJQUFJTSxZQUFZTSxXQUFXO1FBQzNCUCxRQUFRQztJQUNYLEdBQUc7UUFBQ0E7S0FBUTtJQUNaSSxRQUFRQyxHQUFHLENBQUNQO0lBQ1oscUJBQ0csOERBQUNTOzswQkFDRSw4REFBQ0M7Z0JBQU9DLFNBQVMsSUFBTUwsUUFBUUMsR0FBRyxDQUFDTDswQkFBVTs7Ozs7O1lBQzVDRixLQUFLWSxHQUFHLENBQUMsQ0FBQ0MsTUFBTUM7Z0JBQ2RSLFFBQVFDLEdBQUcsQ0FBQztnQkFDWixxQkFDRyw4REFBQ2Isd0RBQUlBO29CQUFDbUIsTUFBTUE7b0JBQWtCQyxPQUFPQTttQkFBZEE7Ozs7O1lBRTdCOzs7Ozs7O0FBTVQ7R0F4Qk1mOztRQUVXRCxvREFBV0E7OztLQUZ0QkM7QUEwQk4sK0RBQWVBLFFBQVFBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2Zhdm9yaXRlL3BhZ2UuanN4P2QxODkiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCJcclxuaW1wb3J0IENhcmQgZnJvbSAnQC9jb21wb25lbnRzL2NhcmQnXHJcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnXHJcblxyXG5jb25zdCBGYXZvcml0ZSA9ICgpID0+IHtcclxuICAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGUoW10pXHJcbiAgIGxldCBhbGxMaWtlID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS53aXNoTGlzdC5pdGVtcylcclxuICAgY29uc29sZS5sb2coYWxsTGlrZSlcclxuXHJcbiAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgIGlmIChhbGxMaWtlID09PSB1bmRlZmluZWQpIHJldHVyblxyXG4gICAgICBzZXREYXRhKGFsbExpa2UpXHJcbiAgIH0sIFthbGxMaWtlXSlcclxuICAgY29uc29sZS5sb2coZGF0YSlcclxuICAgcmV0dXJuIChcclxuICAgICAgPGRpdj5cclxuICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBjb25zb2xlLmxvZyhhbGxMaWtlKX0+YXNkYWQ8L2J1dHRvbj5cclxuICAgICAgICAge2RhdGEubWFwKChpdGVtLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnYXNkJylcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgPENhcmQgaXRlbT17aXRlbX0ga2V5PXtpbmRleH0gaW5kZXg9e2luZGV4fSAvPlxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICl9XHJcblxyXG4gICAgICA8L2Rpdj5cclxuICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGYXZvcml0ZVxyXG4iXSwibmFtZXMiOlsiQ2FyZCIsIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VTZWxlY3RvciIsIkZhdm9yaXRlIiwiZGF0YSIsInNldERhdGEiLCJhbGxMaWtlIiwic3RhdGUiLCJ3aXNoTGlzdCIsIml0ZW1zIiwiY29uc29sZSIsImxvZyIsInVuZGVmaW5lZCIsImRpdiIsImJ1dHRvbiIsIm9uQ2xpY2siLCJtYXAiLCJpdGVtIiwiaW5kZXgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/favorite/page.jsx\n"));

/***/ })

});