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

/***/ "(app-pages-browser)/./app/product/[id]/page.jsx":
/*!***********************************!*\
  !*** ./app/product/[id]/page.jsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Product_module_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/styles/Product.module.scss */ \"(app-pages-browser)/./styles/Product.module.scss\");\n/* harmony import */ var _styles_Product_module_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_styles_Product_module_scss__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ \"(app-pages-browser)/./node_modules/react-redux/dist/react-redux.mjs\");\n/* harmony import */ var _redux_slices_cartSlice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/redux/slices/cartSlice */ \"(app-pages-browser)/./redux/slices/cartSlice.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! clsx */ \"(app-pages-browser)/./node_modules/clsx/dist/clsx.mjs\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/render/dom/motion.mjs\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nconst Product = ()=>{\n    _s();\n    const route = (0,next_navigation__WEBPACK_IMPORTED_MODULE_5__.useParams)();\n    console.log(route.id);\n    const [active, setActive] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [colors, setColors] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [color, setColor] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [colorIndex, setColorIndex] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const check = (0,react_redux__WEBPACK_IMPORTED_MODULE_7__.useSelector)((state)=>state.cart.value);\n    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_7__.useDispatch)();\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const variants = {\n        hidden: {\n            opacity: 0\n        },\n        visible: {\n            opacity: 1\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        axios__WEBPACK_IMPORTED_MODULE_8__[\"default\"].get(\"http://localhost:8000/shoes/\".concat(route.id)).then((response)=>{\n            setData(...response.data);\n            console.log(...response.data);\n            setTimeout(()=>setLoading(false), 1000);\n        }).catch((error)=>{\n            console.log(error);\n        });\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Product_module_scss__WEBPACK_IMPORTED_MODULE_9___default().card),\n        children: [\n            loading === true && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Product_module_scss__WEBPACK_IMPORTED_MODULE_9___default().card_skeleton_img),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {}, void 0, false, {\n                        fileName: \"D:\\\\projects\\\\my projects\\\\kick\\\\app\\\\product\\\\[id]\\\\page.jsx\",\n                        lineNumber: 47,\n                        columnNumber: 16\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {}, void 0, false, {\n                        fileName: \"D:\\\\projects\\\\my projects\\\\kick\\\\app\\\\product\\\\[id]\\\\page.jsx\",\n                        lineNumber: 48,\n                        columnNumber: 16\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {}, void 0, false, {\n                        fileName: \"D:\\\\projects\\\\my projects\\\\kick\\\\app\\\\product\\\\[id]\\\\page.jsx\",\n                        lineNumber: 49,\n                        columnNumber: 16\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {}, void 0, false, {\n                        fileName: \"D:\\\\projects\\\\my projects\\\\kick\\\\app\\\\product\\\\[id]\\\\page.jsx\",\n                        lineNumber: 50,\n                        columnNumber: 16\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\projects\\\\my projects\\\\kick\\\\app\\\\product\\\\[id]\\\\page.jsx\",\n                lineNumber: 46,\n                columnNumber: 13\n            }, undefined),\n            loading === false && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_10__.motion.div, {\n                variants: variants,\n                initial: \"hidden\",\n                animate: \"visible\",\n                transition: {\n                    delay: 0.1,\n                    ease: \"easeInOut\",\n                    duration: 0.5\n                },\n                className: (_styles_Product_module_scss__WEBPACK_IMPORTED_MODULE_9___default().card_images),\n                children: data.images[colorIndex].map((item, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        width: 1000,\n                        height: 1000,\n                        src: item,\n                        alt: \"Kick\",\n                        loading: \"lazy\"\n                    }, index, false, {\n                        fileName: \"D:\\\\projects\\\\my projects\\\\kick\\\\app\\\\product\\\\[id]\\\\page.jsx\",\n                        lineNumber: 66,\n                        columnNumber: 22\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"D:\\\\projects\\\\my projects\\\\kick\\\\app\\\\product\\\\[id]\\\\page.jsx\",\n                lineNumber: 54,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Product_module_scss__WEBPACK_IMPORTED_MODULE_9___default().card_text),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        children: data.title\n                    }, void 0, false, {\n                        fileName: \"D:\\\\projects\\\\my projects\\\\kick\\\\app\\\\product\\\\[id]\\\\page.jsx\",\n                        lineNumber: 72,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        children: [\n                            \"$\",\n                            data.price,\n                            \".00\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\projects\\\\my projects\\\\kick\\\\app\\\\product\\\\[id]\\\\page.jsx\",\n                        lineNumber: 73,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Product_module_scss__WEBPACK_IMPORTED_MODULE_9___default().card_title),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                children: \"Size\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\projects\\\\my projects\\\\kick\\\\app\\\\product\\\\[id]\\\\page.jsx\",\n                                lineNumber: 75,\n                                columnNumber: 16\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                                children: \"Size chart\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\projects\\\\my projects\\\\kick\\\\app\\\\product\\\\[id]\\\\page.jsx\",\n                                lineNumber: 76,\n                                columnNumber: 16\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\projects\\\\my projects\\\\kick\\\\app\\\\product\\\\[id]\\\\page.jsx\",\n                        lineNumber: 74,\n                        columnNumber: 13\n                    }, undefined),\n                    colors,\n                    loading === true && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Product_module_scss__WEBPACK_IMPORTED_MODULE_9___default().card_size_skeleton),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {}, void 0, false, {\n                            fileName: \"D:\\\\projects\\\\my projects\\\\kick\\\\app\\\\product\\\\[id]\\\\page.jsx\",\n                            lineNumber: 81,\n                            columnNumber: 19\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\projects\\\\my projects\\\\kick\\\\app\\\\product\\\\[id]\\\\page.jsx\",\n                        lineNumber: 80,\n                        columnNumber: 16\n                    }, undefined),\n                    loading === false && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Product_module_scss__WEBPACK_IMPORTED_MODULE_9___default().card_size),\n                        children: data.size.map((item, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: ()=>setActive(item),\n                                className: \"list-group-item \".concat(active == item && (_styles_Product_module_scss__WEBPACK_IMPORTED_MODULE_9___default().card_size_active)),\n                                children: item\n                            }, index, false, {\n                                fileName: \"D:\\\\projects\\\\my projects\\\\kick\\\\app\\\\product\\\\[id]\\\\page.jsx\",\n                                lineNumber: 90,\n                                columnNumber: 22\n                            }, undefined))\n                    }, void 0, false, {\n                        fileName: \"D:\\\\projects\\\\my projects\\\\kick\\\\app\\\\product\\\\[id]\\\\page.jsx\",\n                        lineNumber: 88,\n                        columnNumber: 16\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Product_module_scss__WEBPACK_IMPORTED_MODULE_9___default().card_title),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                            children: \"Colors\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\projects\\\\my projects\\\\kick\\\\app\\\\product\\\\[id]\\\\page.jsx\",\n                            lineNumber: 99,\n                            columnNumber: 16\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\projects\\\\my projects\\\\kick\\\\app\\\\product\\\\[id]\\\\page.jsx\",\n                        lineNumber: 98,\n                        columnNumber: 13\n                    }, undefined),\n                    colors,\n                    loading === true && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Product_module_scss__WEBPACK_IMPORTED_MODULE_9___default().card_color_skeleton),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {}, void 0, false, {\n                                fileName: \"D:\\\\projects\\\\my projects\\\\kick\\\\app\\\\product\\\\[id]\\\\page.jsx\",\n                                lineNumber: 104,\n                                columnNumber: 19\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {}, void 0, false, {\n                                fileName: \"D:\\\\projects\\\\my projects\\\\kick\\\\app\\\\product\\\\[id]\\\\page.jsx\",\n                                lineNumber: 105,\n                                columnNumber: 19\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {}, void 0, false, {\n                                fileName: \"D:\\\\projects\\\\my projects\\\\kick\\\\app\\\\product\\\\[id]\\\\page.jsx\",\n                                lineNumber: 106,\n                                columnNumber: 19\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {}, void 0, false, {\n                                fileName: \"D:\\\\projects\\\\my projects\\\\kick\\\\app\\\\product\\\\[id]\\\\page.jsx\",\n                                lineNumber: 107,\n                                columnNumber: 19\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\projects\\\\my projects\\\\kick\\\\app\\\\product\\\\[id]\\\\page.jsx\",\n                        lineNumber: 103,\n                        columnNumber: 16\n                    }, undefined),\n                    loading === false && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Product_module_scss__WEBPACK_IMPORTED_MODULE_9___default().card_color),\n                        children: data.colors.map((item, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: ()=>{\n                                    setColor(item), setColorIndex(index);\n                                },\n                                style: {\n                                    backgroundColor: item,\n                                    transform: color === item ? \"scale(1.25)\" : \"\"\n                                }\n                            }, index, false, {\n                                fileName: \"D:\\\\projects\\\\my projects\\\\kick\\\\app\\\\product\\\\[id]\\\\page.jsx\",\n                                lineNumber: 114,\n                                columnNumber: 22\n                            }, undefined))\n                    }, void 0, false, {\n                        fileName: \"D:\\\\projects\\\\my projects\\\\kick\\\\app\\\\product\\\\[id]\\\\page.jsx\",\n                        lineNumber: 111,\n                        columnNumber: 16\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: ()=>dispatch((0,_redux_slices_cartSlice__WEBPACK_IMPORTED_MODULE_3__.addToBasket)()),\n                        className: (_styles_Product_module_scss__WEBPACK_IMPORTED_MODULE_9___default().card_button),\n                        children: \"Add to cart\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\projects\\\\my projects\\\\kick\\\\app\\\\product\\\\[id]\\\\page.jsx\",\n                        lineNumber: 123,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Product_module_scss__WEBPACK_IMPORTED_MODULE_9___default().card_about),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_styles_Product_module_scss__WEBPACK_IMPORTED_MODULE_9___default().card_title),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                    children: \"About the product\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\projects\\\\my projects\\\\kick\\\\app\\\\product\\\\[id]\\\\page.jsx\",\n                                    lineNumber: 127,\n                                    columnNumber: 19\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"D:\\\\projects\\\\my projects\\\\kick\\\\app\\\\product\\\\[id]\\\\page.jsx\",\n                                lineNumber: 126,\n                                columnNumber: 16\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: \"Shadow Navy / Army Green\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\projects\\\\my projects\\\\kick\\\\app\\\\product\\\\[id]\\\\page.jsx\",\n                                lineNumber: 129,\n                                columnNumber: 16\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: \" This product is excluded from all promotional discounts and offers.\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\projects\\\\my projects\\\\kick\\\\app\\\\product\\\\[id]\\\\page.jsx\",\n                                lineNumber: 131,\n                                columnNumber: 16\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: \"  Pay over time in interest-free installments with Affirm, Klarna or Afterpay. Join adiClub to get unlimited free standard shipping, returns, & exchanges.\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\projects\\\\my projects\\\\kick\\\\app\\\\product\\\\[id]\\\\page.jsx\",\n                                lineNumber: 132,\n                                columnNumber: 16\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\projects\\\\my projects\\\\kick\\\\app\\\\product\\\\[id]\\\\page.jsx\",\n                        lineNumber: 125,\n                        columnNumber: 13\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\projects\\\\my projects\\\\kick\\\\app\\\\product\\\\[id]\\\\page.jsx\",\n                lineNumber: 71,\n                columnNumber: 10\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\projects\\\\my projects\\\\kick\\\\app\\\\product\\\\[id]\\\\page.jsx\",\n        lineNumber: 44,\n        columnNumber: 7\n    }, undefined);\n};\n_s(Product, \"WX42qqsQLU52g4xV5IsyBjetlMk=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_5__.useParams,\n        react_redux__WEBPACK_IMPORTED_MODULE_7__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_7__.useDispatch\n    ];\n});\n_c = Product;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Product);\nvar _c;\n$RefreshReg$(_c, \"Product\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9wcm9kdWN0L1tpZF0vcGFnZS5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUNrRDtBQUNGO0FBQ3BCO0FBQzBCO0FBQ2E7QUFDckM7QUFDTDtBQUNrQjtBQUNwQjtBQUN5QztBQUVoRSxNQUFNaUIsVUFBVTs7SUFDYixNQUFNQyxRQUFRUCwwREFBU0E7SUFDdkJRLFFBQVFDLEdBQUcsQ0FBQ0YsTUFBTUcsRUFBRTtJQUNwQixNQUFNLENBQUNDLFFBQVFDLFVBQVUsR0FBR3JCLCtDQUFRQSxDQUFDO0lBQ3JDLE1BQU0sQ0FBQ3NCLE1BQU1DLFFBQVEsR0FBR3ZCLCtDQUFRQSxDQUFDLEVBQUU7SUFDbkMsTUFBTSxDQUFDd0IsUUFBUUMsVUFBVSxHQUFHekIsK0NBQVFBLENBQUMsRUFBRTtJQUN2QyxNQUFNLENBQUMwQixPQUFPQyxTQUFTLEdBQUczQiwrQ0FBUUEsQ0FBQztJQUNuQyxNQUFNLENBQUM0QixZQUFZQyxjQUFjLEdBQUc3QiwrQ0FBUUEsQ0FBQztJQUM3QyxNQUFNOEIsUUFBUTFCLHdEQUFXQSxDQUFDLENBQUMyQixRQUFVQSxNQUFNQyxJQUFJLENBQUNDLEtBQUs7SUFDckQsTUFBTUMsV0FBVy9CLHdEQUFXQTtJQUM1QixNQUFNLENBQUNnQyxTQUFTQyxXQUFXLEdBQUdwQywrQ0FBUUEsQ0FBQztJQUN2QyxNQUFNcUMsV0FBVztRQUNkQyxRQUFRO1lBQUVDLFNBQVM7UUFBRTtRQUNyQkMsU0FBUztZQUFFRCxTQUFTO1FBQUU7SUFDekI7SUFDQXhDLGdEQUFTQSxDQUFDO1FBQ1BTLDZDQUFLQSxDQUFDaUMsR0FBRyxDQUFDLCtCQUF3QyxPQUFUekIsTUFBTUcsRUFBRSxHQUM3Q3VCLElBQUksQ0FBQyxDQUFDQztZQUNKcEIsV0FBV29CLFNBQVNyQixJQUFJO1lBQ3hCTCxRQUFRQyxHQUFHLElBQUl5QixTQUFTckIsSUFBSTtZQUM1QnNCLFdBQVcsSUFBTVIsV0FBVyxRQUFRO1FBRXZDLEdB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QUFTQTtRQU9UTCxvREFBV0E7UUFDUkQsb0RBQVdBOzs7S0FUekJZO0FBK0hOLCtEQUFlQSxPQUFPQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9wcm9kdWN0L1tpZF0vcGFnZS5qc3g/ZTEwYiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIlxyXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgc3R5bGUgZnJvbSAnQC9zdHlsZXMvUHJvZHVjdC5tb2R1bGUuc2NzcydcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCdcclxuaW1wb3J0IHsgYWRkVG9CYXNrZXQsIHNlbGVjdEl0ZW1zIH0gZnJvbSAnQC9yZWR1eC9zbGljZXMvY2FydFNsaWNlJ1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xyXG5pbXBvcnQgeyB1c2VQYXJhbXMgfSBmcm9tICduZXh0L25hdmlnYXRpb24nXHJcbmltcG9ydCBjbHN4IGZyb20gJ2Nsc3gnXHJcbmltcG9ydCB7IGRlbGF5LCBlYXNlSW4sIGVhc2VJbk91dCwgbW90aW9uIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIlxyXG5cclxuY29uc3QgUHJvZHVjdCA9ICgpID0+IHtcclxuICAgY29uc3Qgcm91dGUgPSB1c2VQYXJhbXMoKVxyXG4gICBjb25zb2xlLmxvZyhyb3V0ZS5pZClcclxuICAgY29uc3QgW2FjdGl2ZSwgc2V0QWN0aXZlXSA9IHVzZVN0YXRlKG51bGwpXHJcbiAgIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlKFtdKVxyXG4gICBjb25zdCBbY29sb3JzLCBzZXRDb2xvcnNdID0gdXNlU3RhdGUoW10pXHJcbiAgIGNvbnN0IFtjb2xvciwgc2V0Q29sb3JdID0gdXNlU3RhdGUobnVsbClcclxuICAgY29uc3QgW2NvbG9ySW5kZXgsIHNldENvbG9ySW5kZXhdID0gdXNlU3RhdGUoMClcclxuICAgY29uc3QgY2hlY2sgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLmNhcnQudmFsdWUpXHJcbiAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKVxyXG4gICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKVxyXG4gICBjb25zdCB2YXJpYW50cyA9IHtcclxuICAgICAgaGlkZGVuOiB7IG9wYWNpdHk6IDAgfSxcclxuICAgICAgdmlzaWJsZTogeyBvcGFjaXR5OiAxIH0sXHJcbiAgIH1cclxuICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgYXhpb3MuZ2V0KGBodHRwOi8vbG9jYWxob3N0OjgwMDAvc2hvZXMvJHtyb3V0ZS5pZH1gKVxyXG4gICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgc2V0RGF0YSguLi5yZXNwb25zZS5kYXRhKVxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyguLi5yZXNwb25zZS5kYXRhKVxyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHNldExvYWRpbmcoZmFsc2UpLCAxMDAwKVxyXG5cclxuICAgICAgICAgfSlcclxuICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgIH0pXHJcblxyXG5cclxuICAgfSwgW10pXHJcblxyXG4gICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuY2FyZH0+XHJcbiAgICAgICAgIHtsb2FkaW5nID09PSB0cnVlICYmIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmNhcmRfc2tlbGV0b25faW1nfT5cclxuICAgICAgICAgICAgICAgPGRpdj48L2Rpdj5cclxuICAgICAgICAgICAgICAgPGRpdj48L2Rpdj5cclxuICAgICAgICAgICAgICAgPGRpdj48L2Rpdj5cclxuICAgICAgICAgICAgICAgPGRpdj48L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICl9XHJcbiAgICAgICAgIHtsb2FkaW5nID09PSBmYWxzZSAmJlxyXG4gICAgICAgICAgICA8bW90aW9uLmRpdlxyXG4gICAgICAgICAgICAgICB2YXJpYW50cz17dmFyaWFudHN9XHJcbiAgICAgICAgICAgICAgIGluaXRpYWw9J2hpZGRlbidcclxuICAgICAgICAgICAgICAgYW5pbWF0ZT0ndmlzaWJsZSdcclxuICAgICAgICAgICAgICAgdHJhbnNpdGlvbj17e1xyXG4gICAgICAgICAgICAgICAgICBkZWxheTogMC4xLFxyXG4gICAgICAgICAgICAgICAgICBlYXNlOiBcImVhc2VJbk91dFwiLFxyXG4gICAgICAgICAgICAgICAgICBkdXJhdGlvbjogMC41LFxyXG4gICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlLmNhcmRfaW1hZ2VzfT5cclxuICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICBkYXRhLmltYWdlc1tjb2xvckluZGV4XS5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSBrZXk9e2luZGV4fSB3aWR0aD17MTAwMH0gaGVpZ2h0PXsxMDAwfSBzcmM9e2l0ZW19IGFsdD0nS2ljaycgbG9hZGluZz0nbGF6eScgLz5cclxuICAgICAgICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8L21vdGlvbi5kaXY+XHJcbiAgICAgICAgIH1cclxuICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmNhcmRfdGV4dH0+XHJcbiAgICAgICAgICAgIDxoMj57ZGF0YS50aXRsZX08L2gyPlxyXG4gICAgICAgICAgICA8aDM+JHtkYXRhLnByaWNlfS4wMDwvaDM+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5jYXJkX3RpdGxlfT5cclxuICAgICAgICAgICAgICAgPGg0PlNpemU8L2g0PlxyXG4gICAgICAgICAgICAgICA8aDU+U2l6ZSBjaGFydDwvaDU+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICB7Y29sb3JzfVxyXG4gICAgICAgICAgICB7bG9hZGluZyA9PT0gdHJ1ZSAmJlxyXG4gICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuY2FyZF9zaXplX3NrZWxldG9ufT5cclxuICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG5cclxuICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAge2xvYWRpbmcgPT09IGZhbHNlICYmXHJcbiAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5jYXJkX3NpemV9PlxyXG4gICAgICAgICAgICAgICAgICB7ZGF0YS5zaXplLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBrZXk9e2luZGV4fSBvbkNsaWNrPXsoKSA9PiBzZXRBY3RpdmUoaXRlbSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGxpc3QtZ3JvdXAtaXRlbSAke2FjdGl2ZSA9PSBpdGVtICYmIHN0eWxlLmNhcmRfc2l6ZV9hY3RpdmV9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtfVxyXG4gICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgKSl9XHJcblxyXG4gICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuY2FyZF90aXRsZX0+XHJcbiAgICAgICAgICAgICAgIDxoND5Db2xvcnM8L2g0PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAge2NvbG9yc31cclxuICAgICAgICAgICAge2xvYWRpbmcgPT09IHRydWUgJiYgKFxyXG4gICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuY2FyZF9jb2xvcl9za2VsZXRvbn0+XHJcbiAgICAgICAgICAgICAgICAgIDxidXR0b24+PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgIDxidXR0b24+PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgIDxidXR0b24+PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgIDxidXR0b24+PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgICB7bG9hZGluZyA9PT0gZmFsc2UgJiZcclxuICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmNhcmRfY29sb3J9PlxyXG5cclxuICAgICAgICAgICAgICAgICAge2RhdGEuY29sb3JzLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBrZXk9e2luZGV4fSBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldENvbG9yKGl0ZW0pLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRDb2xvckluZGV4KGluZGV4KVxyXG4gICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6IGl0ZW0sIHRyYW5zZm9ybTogY29sb3IgPT09IGl0ZW0gPyBcInNjYWxlKDEuMjUpXCIgOiAnJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGRpc3BhdGNoKGFkZFRvQmFza2V0KCkpfSBjbGFzc05hbWU9e3N0eWxlLmNhcmRfYnV0dG9ufT5BZGQgdG8gY2FydDwvYnV0dG9uPlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmNhcmRfYWJvdXR9PlxyXG4gICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuY2FyZF90aXRsZX0+XHJcbiAgICAgICAgICAgICAgICAgIDxoND5BYm91dCB0aGUgcHJvZHVjdDwvaDQ+XHJcbiAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICA8cD5TaGFkb3cgTmF2eSAvIEFybXkgR3JlZW5cclxuICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICA8cD4gVGhpcyBwcm9kdWN0IGlzIGV4Y2x1ZGVkIGZyb20gYWxsIHByb21vdGlvbmFsIGRpc2NvdW50cyBhbmQgb2ZmZXJzLjwvcD5cclxuICAgICAgICAgICAgICAgPHA+ICBQYXkgb3ZlciB0aW1lIGluIGludGVyZXN0LWZyZWUgaW5zdGFsbG1lbnRzIHdpdGggQWZmaXJtLCBLbGFybmEgb3IgQWZ0ZXJwYXkuXHJcbiAgICAgICAgICAgICAgICAgIEpvaW4gYWRpQ2x1YiB0byBnZXQgdW5saW1pdGVkIGZyZWUgc3RhbmRhcmQgc2hpcHBpbmcsIHJldHVybnMsICYgZXhjaGFuZ2VzLjwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2RpdiA+XHJcbiAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvZHVjdFxyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInN0eWxlIiwiTGluayIsInVzZURpc3BhdGNoIiwidXNlU2VsZWN0b3IiLCJhZGRUb0Jhc2tldCIsInNlbGVjdEl0ZW1zIiwiSW1hZ2UiLCJheGlvcyIsInVzZVBhcmFtcyIsImNsc3giLCJkZWxheSIsImVhc2VJbiIsImVhc2VJbk91dCIsIm1vdGlvbiIsIlByb2R1Y3QiLCJyb3V0ZSIsImNvbnNvbGUiLCJsb2ciLCJpZCIsImFjdGl2ZSIsInNldEFjdGl2ZSIsImRhdGEiLCJzZXREYXRhIiwiY29sb3JzIiwic2V0Q29sb3JzIiwiY29sb3IiLCJzZXRDb2xvciIsImNvbG9ySW5kZXgiLCJzZXRDb2xvckluZGV4IiwiY2hlY2siLCJzdGF0ZSIsImNhcnQiLCJ2YWx1ZSIsImRpc3BhdGNoIiwibG9hZGluZyIsInNldExvYWRpbmciLCJ2YXJpYW50cyIsImhpZGRlbiIsIm9wYWNpdHkiLCJ2aXNpYmxlIiwiZ2V0IiwidGhlbiIsInJlc3BvbnNlIiwic2V0VGltZW91dCIsImNhdGNoIiwiZXJyb3IiLCJkaXYiLCJjbGFzc05hbWUiLCJjYXJkIiwiY2FyZF9za2VsZXRvbl9pbWciLCJpbml0aWFsIiwiYW5pbWF0ZSIsInRyYW5zaXRpb24iLCJlYXNlIiwiZHVyYXRpb24iLCJjYXJkX2ltYWdlcyIsImltYWdlcyIsIm1hcCIsIml0ZW0iLCJpbmRleCIsIndpZHRoIiwiaGVpZ2h0Iiwic3JjIiwiYWx0IiwiY2FyZF90ZXh0IiwiaDIiLCJ0aXRsZSIsImgzIiwicHJpY2UiLCJjYXJkX3RpdGxlIiwiaDQiLCJoNSIsImNhcmRfc2l6ZV9za2VsZXRvbiIsImJ1dHRvbiIsImNhcmRfc2l6ZSIsInNpemUiLCJvbkNsaWNrIiwiY2FyZF9zaXplX2FjdGl2ZSIsImNhcmRfY29sb3Jfc2tlbGV0b24iLCJjYXJkX2NvbG9yIiwiYmFja2dyb3VuZENvbG9yIiwidHJhbnNmb3JtIiwiY2FyZF9idXR0b24iLCJjYXJkX2Fib3V0IiwicCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/product/[id]/page.jsx\n"));

/***/ })

});