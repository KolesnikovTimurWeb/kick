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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _styles_Card_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/styles/Card.module.scss */ \"(app-pages-browser)/./styles/Card.module.scss\");\n/* harmony import */ var _styles_Card_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_Card_module_scss__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _cardSkeleton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./cardSkeleton */ \"(app-pages-browser)/./components/cardSkeleton.jsx\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/render/dom/motion.mjs\");\n\n\n\n\n\n\n\nconst Card = (param)=>{\n    let { item, index } = param;\n    const variants = {\n        hidden: {\n            opacity: 0\n        },\n        visible: {\n            opacity: 1\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.div, {\n        variants: variants,\n        initial: \"hidden\",\n        animate: \"visible\",\n        transition: {\n            delay: 0.15 * index,\n            ease: \"easeInOut\",\n            duration: 0.5\n        },\n        className: (_styles_Card_module_scss__WEBPACK_IMPORTED_MODULE_6___default().card),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                width: 300,\n                height: 300,\n                src: item.mainImg,\n                alt: \"Kick\",\n                loading: \"lazy\"\n            }, \"Kick\", false, {\n                fileName: \"D:\\\\projects\\\\my projects\\\\kick\\\\components\\\\card.jsx\",\n                lineNumber: 23,\n                columnNumber: 10\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Card_module_scss__WEBPACK_IMPORTED_MODULE_6___default().card_text),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                children: item.title\n                            }, void 0, false, {\n                                fileName: \"D:\\\\projects\\\\my projects\\\\kick\\\\components\\\\card.jsx\",\n                                lineNumber: 27,\n                                columnNumber: 16\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                children: item.colors.join(\"/\")\n                            }, void 0, false, {\n                                fileName: \"D:\\\\projects\\\\my projects\\\\kick\\\\components\\\\card.jsx\",\n                                lineNumber: 28,\n                                columnNumber: 16\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\projects\\\\my projects\\\\kick\\\\components\\\\card.jsx\",\n                        lineNumber: 26,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                        children: [\n                            \"$\",\n                            item.price\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\projects\\\\my projects\\\\kick\\\\components\\\\card.jsx\",\n                        lineNumber: 30,\n                        columnNumber: 13\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\projects\\\\my projects\\\\kick\\\\components\\\\card.jsx\",\n                lineNumber: 25,\n                columnNumber: 10\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Card_module_scss__WEBPACK_IMPORTED_MODULE_6___default().card_heart)\n            }, void 0, false, {\n                fileName: \"D:\\\\projects\\\\my projects\\\\kick\\\\components\\\\card.jsx\",\n                lineNumber: 33,\n                columnNumber: 10\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                href: \"/product/\".concat(item.title.replace(/\\s/g, \"-\")),\n                children: \"View Product\"\n            }, void 0, false, {\n                fileName: \"D:\\\\projects\\\\my projects\\\\kick\\\\components\\\\card.jsx\",\n                lineNumber: 36,\n                columnNumber: 10\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\projects\\\\my projects\\\\kick\\\\components\\\\card.jsx\",\n        lineNumber: 14,\n        columnNumber: 7\n    }, undefined);\n};\n_c = Card;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Card);\nvar _c;\n$RefreshReg$(_c, \"Card\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvY2FyZC5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBOEI7QUFDRjtBQUNIO0FBQ29CO0FBQ0o7QUFDdUI7QUFFaEUsTUFBTVMsT0FBTztRQUFDLEVBQUVDLElBQUksRUFBRUMsS0FBSyxFQUFFO0lBQzFCLE1BQU1DLFdBQVc7UUFDZEMsUUFBUTtZQUFFQyxTQUFTO1FBQUU7UUFDckJDLFNBQVM7WUFBRUQsU0FBUztRQUFFO0lBQ3pCO0lBQ0EscUJBQ0csOERBQUNOLGlEQUFNQSxDQUFDUSxHQUFHO1FBQ1JKLFVBQVVBO1FBQ1ZLLFNBQVE7UUFDUkMsU0FBUTtRQUNSQyxZQUFZO1lBQ1RkLE9BQU8sT0FBT007WUFDZFMsTUFBTTtZQUNOQyxVQUFVO1FBQ2I7UUFBR0MsV0FBV25CLHNFQUFVOzswQkFDeEIsOERBQUNILGtEQUFLQTtnQkFBY3dCLE9BQU87Z0JBQUtDLFFBQVE7Z0JBQUtDLEtBQUtoQixLQUFLaUIsT0FBTztnQkFBRUMsS0FBSTtnQkFBT0MsU0FBUTtlQUF2RTs7Ozs7MEJBRVosOERBQUNiO2dCQUFJTSxXQUFXbkIsMkVBQWU7O2tDQUM1Qiw4REFBQ2E7OzBDQUNFLDhEQUFDZTswQ0FBSXJCLEtBQUtzQixLQUFLOzs7Ozs7MENBQ2YsOERBQUNDOzBDQUFJdkIsS0FBS3dCLE1BQU0sQ0FBQ0MsSUFBSSxDQUFDOzs7Ozs7Ozs7Ozs7a0NBRXpCLDhEQUFDQzs7NEJBQUc7NEJBQUUxQixLQUFLMkIsS0FBSzs7Ozs7Ozs7Ozs7OzswQkFHbkIsOERBQUNyQjtnQkFBSU0sV0FBV25CLDRFQUFnQjs7Ozs7OzBCQUdoQyw4REFBQ0YsaURBQUlBO2dCQUFDc0MsTUFBTSxZQUEyQyxPQUEvQjdCLEtBQUtzQixLQUFLLENBQUNRLE9BQU8sQ0FBQyxPQUFPOzBCQUFROzs7Ozs7Ozs7Ozs7QUFHbkU7S0EvQk0vQjtBQWlDTiwrREFBZUEsSUFBSUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2NhcmQuanN4PzAyMGYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgc3R5bGUgZnJvbSAnQC9zdHlsZXMvQ2FyZC5tb2R1bGUuc2NzcydcclxuaW1wb3J0IENhcmRTa2VsZXRvbiBmcm9tICcuL2NhcmRTa2VsZXRvbidcclxuaW1wb3J0IHsgZGVsYXksIGVhc2VJbiwgZWFzZUluT3V0LCBtb3Rpb24gfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiXHJcblxyXG5jb25zdCBDYXJkID0gKHsgaXRlbSwgaW5kZXggfSkgPT4ge1xyXG4gICBjb25zdCB2YXJpYW50cyA9IHtcclxuICAgICAgaGlkZGVuOiB7IG9wYWNpdHk6IDAgfSxcclxuICAgICAgdmlzaWJsZTogeyBvcGFjaXR5OiAxIH0sXHJcbiAgIH1cclxuICAgcmV0dXJuIChcclxuICAgICAgPG1vdGlvbi5kaXZcclxuICAgICAgICAgdmFyaWFudHM9e3ZhcmlhbnRzfVxyXG4gICAgICAgICBpbml0aWFsPSdoaWRkZW4nXHJcbiAgICAgICAgIGFuaW1hdGU9J3Zpc2libGUnXHJcbiAgICAgICAgIHRyYW5zaXRpb249e3tcclxuICAgICAgICAgICAgZGVsYXk6IDAuMTUgKiBpbmRleCxcclxuICAgICAgICAgICAgZWFzZTogXCJlYXNlSW5PdXRcIixcclxuICAgICAgICAgICAgZHVyYXRpb246IDAuNSxcclxuICAgICAgICAgfX0gY2xhc3NOYW1lPXtzdHlsZS5jYXJkfT5cclxuICAgICAgICAgPEltYWdlIGtleT17J0tpY2snfSB3aWR0aD17MzAwfSBoZWlnaHQ9ezMwMH0gc3JjPXtpdGVtLm1haW5JbWd9IGFsdD0nS2ljaycgbG9hZGluZz0nbGF6eScgLz5cclxuXHJcbiAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5jYXJkX3RleHR9PlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICA8aDM+e2l0ZW0udGl0bGV9PC9oMz5cclxuICAgICAgICAgICAgICAgPGg0PntpdGVtLmNvbG9ycy5qb2luKCcvJyl9PC9oND5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxoNT4ke2l0ZW0ucHJpY2V9PC9oNT5cclxuXHJcbiAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuY2FyZF9oZWFydH0+XHJcblxyXG4gICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgPExpbmsgaHJlZj17YC9wcm9kdWN0LyR7aXRlbS50aXRsZS5yZXBsYWNlKC9cXHMvZywgJy0nKX1gfT5WaWV3IFByb2R1Y3Q8L0xpbms+XHJcbiAgICAgIDwvbW90aW9uLmRpdj5cclxuICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDYXJkXHJcbiJdLCJuYW1lcyI6WyJJbWFnZSIsIkxpbmsiLCJSZWFjdCIsInN0eWxlIiwiQ2FyZFNrZWxldG9uIiwiZGVsYXkiLCJlYXNlSW4iLCJlYXNlSW5PdXQiLCJtb3Rpb24iLCJDYXJkIiwiaXRlbSIsImluZGV4IiwidmFyaWFudHMiLCJoaWRkZW4iLCJvcGFjaXR5IiwidmlzaWJsZSIsImRpdiIsImluaXRpYWwiLCJhbmltYXRlIiwidHJhbnNpdGlvbiIsImVhc2UiLCJkdXJhdGlvbiIsImNsYXNzTmFtZSIsImNhcmQiLCJ3aWR0aCIsImhlaWdodCIsInNyYyIsIm1haW5JbWciLCJhbHQiLCJsb2FkaW5nIiwiY2FyZF90ZXh0IiwiaDMiLCJ0aXRsZSIsImg0IiwiY29sb3JzIiwiam9pbiIsImg1IiwicHJpY2UiLCJjYXJkX2hlYXJ0IiwiaHJlZiIsInJlcGxhY2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/card.jsx\n"));

/***/ })

});