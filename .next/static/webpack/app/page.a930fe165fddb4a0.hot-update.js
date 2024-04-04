"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./components/card.jsx":
/*!*****************************!*\
  !*** ./components/card.jsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _styles_Card_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/styles/Card.module.scss */ \"(app-pages-browser)/./styles/Card.module.scss\");\n/* harmony import */ var _styles_Card_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_Card_module_scss__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _cardSkeleton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./cardSkeleton */ \"(app-pages-browser)/./components/cardSkeleton.jsx\");\n\n\n\n\n\n\nconst Card = (param)=>{\n    let { item } = param;\n    console.log(item.colors.join(\"/\"));\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Card_module_scss__WEBPACK_IMPORTED_MODULE_5___default().card),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                width: 300,\n                height: 300,\n                src: item.mainImg,\n                alt: \"Kick\",\n                loading: \"lazy\"\n            }, \"Kick\", false, {\n                fileName: \"D:\\\\projects\\\\my projects\\\\kick\\\\components\\\\card.jsx\",\n                lineNumber: 10,\n                columnNumber: 10\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Card_module_scss__WEBPACK_IMPORTED_MODULE_5___default().card_text),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                children: item.title\n                            }, void 0, false, {\n                                fileName: \"D:\\\\projects\\\\my projects\\\\kick\\\\components\\\\card.jsx\",\n                                lineNumber: 14,\n                                columnNumber: 16\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                children: item.colors.join(\"/\")\n                            }, void 0, false, {\n                                fileName: \"D:\\\\projects\\\\my projects\\\\kick\\\\components\\\\card.jsx\",\n                                lineNumber: 15,\n                                columnNumber: 16\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\projects\\\\my projects\\\\kick\\\\components\\\\card.jsx\",\n                        lineNumber: 13,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                        children: [\n                            \"$\",\n                            item.price\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\projects\\\\my projects\\\\kick\\\\components\\\\card.jsx\",\n                        lineNumber: 17,\n                        columnNumber: 13\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\projects\\\\my projects\\\\kick\\\\components\\\\card.jsx\",\n                lineNumber: 12,\n                columnNumber: 10\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                href: \"/product\",\n                children: \"View Product\"\n            }, void 0, false, {\n                fileName: \"D:\\\\projects\\\\my projects\\\\kick\\\\components\\\\card.jsx\",\n                lineNumber: 21,\n                columnNumber: 10\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\projects\\\\my projects\\\\kick\\\\components\\\\card.jsx\",\n        lineNumber: 9,\n        columnNumber: 7\n    }, undefined);\n};\n_c = Card;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Card);\nvar _c;\n$RefreshReg$(_c, \"Card\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvY2FyZC5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUE4QjtBQUNGO0FBQ0g7QUFDb0I7QUFDSjtBQUN6QyxNQUFNSyxPQUFPO1FBQUMsRUFBRUMsSUFBSSxFQUFFO0lBQ25CQyxRQUFRQyxHQUFHLENBQUNGLEtBQUtHLE1BQU0sQ0FBQ0MsSUFBSSxDQUFDO0lBQzdCLHFCQUNHLDhEQUFDQztRQUFJQyxXQUFXVCxzRUFBVTs7MEJBQ3ZCLDhEQUFDSCxrREFBS0E7Z0JBQWNjLE9BQU87Z0JBQUtDLFFBQVE7Z0JBQUtDLEtBQUtWLEtBQUtXLE9BQU87Z0JBQUVDLEtBQUk7Z0JBQU9DLFNBQVE7ZUFBdkU7Ozs7OzBCQUVaLDhEQUFDUjtnQkFBSUMsV0FBV1QsMkVBQWU7O2tDQUM1Qiw4REFBQ1E7OzBDQUNFLDhEQUFDVTswQ0FBSWYsS0FBS2dCLEtBQUs7Ozs7OzswQ0FDZiw4REFBQ0M7MENBQUlqQixLQUFLRyxNQUFNLENBQUNDLElBQUksQ0FBQzs7Ozs7Ozs7Ozs7O2tDQUV6Qiw4REFBQ2M7OzRCQUFHOzRCQUFFbEIsS0FBS21CLEtBQUs7Ozs7Ozs7Ozs7Ozs7MEJBSW5CLDhEQUFDeEIsaURBQUlBO2dCQUFDeUIsTUFBTzswQkFBVzs7Ozs7Ozs7Ozs7O0FBR2pDO0tBbEJNckI7QUFvQk4sK0RBQWVBLElBQUlBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jYXJkLmpzeD8wMjBmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHN0eWxlIGZyb20gJ0Avc3R5bGVzL0NhcmQubW9kdWxlLnNjc3MnXHJcbmltcG9ydCBDYXJkU2tlbGV0b24gZnJvbSAnLi9jYXJkU2tlbGV0b24nXHJcbmNvbnN0IENhcmQgPSAoeyBpdGVtIH0pID0+IHtcclxuICAgY29uc29sZS5sb2coaXRlbS5jb2xvcnMuam9pbignLycpKVxyXG4gICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuY2FyZH0+XHJcbiAgICAgICAgIDxJbWFnZSBrZXk9eydLaWNrJ30gd2lkdGg9ezMwMH0gaGVpZ2h0PXszMDB9IHNyYz17aXRlbS5tYWluSW1nfSBhbHQ9J0tpY2snIGxvYWRpbmc9J2xhenknIC8+XHJcblxyXG4gICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuY2FyZF90ZXh0fT5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgPGgzPntpdGVtLnRpdGxlfTwvaDM+XHJcbiAgICAgICAgICAgICAgIDxoND57aXRlbS5jb2xvcnMuam9pbignLycpfTwvaDQ+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8aDU+JHtpdGVtLnByaWNlfTwvaDU+XHJcblxyXG4gICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgIDxMaW5rIGhyZWY9e2AvcHJvZHVjdGB9PlZpZXcgUHJvZHVjdDwvTGluaz5cclxuICAgICAgPC9kaXY+XHJcbiAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2FyZFxyXG4iXSwibmFtZXMiOlsiSW1hZ2UiLCJMaW5rIiwiUmVhY3QiLCJzdHlsZSIsIkNhcmRTa2VsZXRvbiIsIkNhcmQiLCJpdGVtIiwiY29uc29sZSIsImxvZyIsImNvbG9ycyIsImpvaW4iLCJkaXYiLCJjbGFzc05hbWUiLCJjYXJkIiwid2lkdGgiLCJoZWlnaHQiLCJzcmMiLCJtYWluSW1nIiwiYWx0IiwibG9hZGluZyIsImNhcmRfdGV4dCIsImgzIiwidGl0bGUiLCJoNCIsImg1IiwicHJpY2UiLCJocmVmIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/card.jsx\n"));

/***/ })

});