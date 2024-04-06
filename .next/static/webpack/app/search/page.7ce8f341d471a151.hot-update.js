"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/search/page",{

/***/ "(app-pages-browser)/./app/search/page.jsx":
/*!*****************************!*\
  !*** ./app/search/page.jsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Search_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/styles/Search.module.scss */ \"(app-pages-browser)/./styles/Search.module.scss\");\n/* harmony import */ var _styles_Search_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_Search_module_scss__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var _components_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/card */ \"(app-pages-browser)/./components/card.jsx\");\n/* harmony import */ var _assets_icons_search_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/assets/icons/search.svg */ \"(app-pages-browser)/./assets/icons/search.svg\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst Search = ()=>{\n    _s();\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [value, setValue] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        axios__WEBPACK_IMPORTED_MODULE_5__[\"default\"].get(\"http://localhost:8000/shoesall\").then((response)=>{\n            setData(response.data);\n        }).catch((error)=>{\n            console.log(error);\n        });\n        setTimeout(()=>setLoading(false), 1000);\n    }, []);\n    function searchData(value) {\n        let newData = data.filter((item)=>item.title);\n        console.log(data.filter((item)=>console.log(item.title)));\n        console.log(newData);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Search_module_scss__WEBPACK_IMPORTED_MODULE_6___default().search),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: \"Search Shoes\"\n            }, void 0, false, {\n                fileName: \"D:\\\\projects\\\\my projects\\\\kick\\\\app\\\\search\\\\page.jsx\",\n                lineNumber: 32,\n                columnNumber: 10\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                children: \"You can find your pair of shoes\"\n            }, void 0, false, {\n                fileName: \"D:\\\\projects\\\\my projects\\\\kick\\\\app\\\\search\\\\page.jsx\",\n                lineNumber: 33,\n                columnNumber: 10\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Search_module_scss__WEBPACK_IMPORTED_MODULE_6___default().search_input),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        onChange: (e)=>setValue(e.target.value),\n                        type: \"text\",\n                        placeholder: \"Search your shoe ....\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\projects\\\\my projects\\\\kick\\\\app\\\\search\\\\page.jsx\",\n                        lineNumber: 35,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: ()=>searchData(value),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                            width: 24,\n                            height: 24,\n                            alt: \"Kick\",\n                            src: _assets_icons_search_svg__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n                        }, void 0, false, {\n                            fileName: \"D:\\\\projects\\\\my projects\\\\kick\\\\app\\\\search\\\\page.jsx\",\n                            lineNumber: 37,\n                            columnNumber: 16\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\projects\\\\my projects\\\\kick\\\\app\\\\search\\\\page.jsx\",\n                        lineNumber: 36,\n                        columnNumber: 13\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\projects\\\\my projects\\\\kick\\\\app\\\\search\\\\page.jsx\",\n                lineNumber: 34,\n                columnNumber: 10\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Search_module_scss__WEBPACK_IMPORTED_MODULE_6___default().search_items),\n                children: data.map((item, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_card__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        index: index,\n                        item: item,\n                        loading: loading\n                    }, index, false, {\n                        fileName: \"D:\\\\projects\\\\my projects\\\\kick\\\\app\\\\search\\\\page.jsx\",\n                        lineNumber: 42,\n                        columnNumber: 16\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"D:\\\\projects\\\\my projects\\\\kick\\\\app\\\\search\\\\page.jsx\",\n                lineNumber: 40,\n                columnNumber: 10\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\projects\\\\my projects\\\\kick\\\\app\\\\search\\\\page.jsx\",\n        lineNumber: 31,\n        columnNumber: 7\n    }, undefined);\n};\n_s(Search, \"A96ufcCzEope3li9U3AYVyk1QWE=\");\n_c = Search;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Search);\nvar _c;\n$RefreshReg$(_c, \"Search\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9zZWFyY2gvcGFnZS5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQ2tEO0FBQ0g7QUFDdEI7QUFDVztBQUNVO0FBQ2hCO0FBQzlCLE1BQU1RLFNBQVM7O0lBQ1osTUFBTSxDQUFDQyxTQUFTQyxXQUFXLEdBQUdSLCtDQUFRQSxDQUFDO0lBQ3ZDLE1BQU0sQ0FBQ1MsTUFBTUMsUUFBUSxHQUFHViwrQ0FBUUEsQ0FBQyxFQUFFO0lBQ25DLE1BQU0sQ0FBQ1csT0FBT0MsU0FBUyxHQUFHWiwrQ0FBUUEsQ0FBQztJQUNuQ0QsZ0RBQVNBLENBQUM7UUFDUEcsNkNBQUtBLENBQUNXLEdBQUcsQ0FBQyxrQ0FDTkMsSUFBSSxDQUFDLENBQUNDO1lBQ0pMLFFBQVFLLFNBQVNOLElBQUk7UUFDeEIsR0FDQ08sS0FBSyxDQUFDLENBQUNDO1lBQ0xDLFFBQVFDLEdBQUcsQ0FBQ0Y7UUFDZjtRQUVIRyxXQUFXLElBQU1aLFdBQVcsUUFBUTtJQUV2QyxHQUFHLEVBQUU7SUFFTCxTQUFTYSxXQUFXVixLQUFLO1FBQ3RCLElBQUlXLFVBQVViLEtBQUtjLE1BQU0sQ0FBQ0MsQ0FBQUEsT0FBUUEsS0FBS0MsS0FBSztRQUM1Q1AsUUFBUUMsR0FBRyxDQUFDVixLQUFLYyxNQUFNLENBQUNDLENBQUFBLE9BQVFOLFFBQVFDLEdBQUcsQ0FBQ0ssS0FBS0MsS0FBSztRQUN0RFAsUUFBUUMsR0FBRyxDQUFDRztJQUNmO0lBQ0EscUJBQ0csOERBQUNJO1FBQUlDLFdBQVcxQiwwRUFBWTs7MEJBQ3pCLDhEQUFDMkI7MEJBQUc7Ozs7OzswQkFDSiw4REFBQ0M7MEJBQUc7Ozs7OzswQkFDSiw4REFBQ0g7Z0JBQUlDLFdBQVcxQixnRkFBa0I7O2tDQUMvQiw4REFBQzhCO3dCQUFNQyxVQUFVLENBQUNDLElBQU1yQixTQUFTcUIsRUFBRUMsTUFBTSxDQUFDdkIsS0FBSzt3QkFBR3dCLE1BQUs7d0JBQU9DLGFBQVk7Ozs7OztrQ0FDMUUsOERBQUNDO3dCQUFPQyxTQUFTLElBQU1qQixXQUFXVjtrQ0FDL0IsNEVBQUNOLGtEQUFLQTs0QkFBQ2tDLE9BQU87NEJBQUlDLFFBQVE7NEJBQUlDLEtBQUk7NEJBQU9DLEtBQUt0QyxnRUFBTUE7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQUcxRCw4REFBQ3NCO2dCQUFJQyxXQUFXMUIsZ0ZBQWtCOzBCQUM5QlEsS0FBS21DLEdBQUcsQ0FBQyxDQUFDcEIsTUFBTXFCLHNCQUNkLDhEQUFDMUMsd0RBQUlBO3dCQUFhMEMsT0FBT0E7d0JBQU9yQixNQUFNQTt3QkFBTWpCLFNBQVNBO3VCQUExQ3NDOzs7Ozs7Ozs7Ozs7Ozs7O0FBSzFCO0dBdkNNdkM7S0FBQUE7QUF5Q04sK0RBQWVBLE1BQU1BLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL3NlYXJjaC9wYWdlLmpzeD82NWQzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiXHJcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBzdHlsZSBmcm9tICdAL3N0eWxlcy9TZWFyY2gubW9kdWxlLnNjc3MnXHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcclxuaW1wb3J0IENhcmQgZnJvbSAnQC9jb21wb25lbnRzL2NhcmQnXHJcbmltcG9ydCBzZWFyY2ggZnJvbSAnQC9hc3NldHMvaWNvbnMvc2VhcmNoLnN2ZydcclxuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXHJcbmNvbnN0IFNlYXJjaCA9ICgpID0+IHtcclxuICAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSlcclxuICAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGUoW10pXHJcbiAgIGNvbnN0IFt2YWx1ZSwgc2V0VmFsdWVdID0gdXNlU3RhdGUobnVsbClcclxuICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgYXhpb3MuZ2V0KCdodHRwOi8vbG9jYWxob3N0OjgwMDAvc2hvZXNhbGwnKVxyXG4gICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgc2V0RGF0YShyZXNwb25zZS5kYXRhKVxyXG4gICAgICAgICB9KVxyXG4gICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICAgfSlcclxuXHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4gc2V0TG9hZGluZyhmYWxzZSksIDEwMDApXHJcblxyXG4gICB9LCBbXSlcclxuXHJcbiAgIGZ1bmN0aW9uIHNlYXJjaERhdGEodmFsdWUpIHtcclxuICAgICAgbGV0IG5ld0RhdGEgPSBkYXRhLmZpbHRlcihpdGVtID0+IGl0ZW0udGl0bGUpXHJcbiAgICAgIGNvbnNvbGUubG9nKGRhdGEuZmlsdGVyKGl0ZW0gPT4gY29uc29sZS5sb2coaXRlbS50aXRsZSkpKVxyXG4gICAgICBjb25zb2xlLmxvZyhuZXdEYXRhKVxyXG4gICB9XHJcbiAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5zZWFyY2h9PlxyXG4gICAgICAgICA8aDI+U2VhcmNoIFNob2VzPC9oMj5cclxuICAgICAgICAgPGgzPllvdSBjYW4gZmluZCB5b3VyIHBhaXIgb2Ygc2hvZXM8L2gzPlxyXG4gICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuc2VhcmNoX2lucHV0fT5cclxuICAgICAgICAgICAgPGlucHV0IG9uQ2hhbmdlPXsoZSkgPT4gc2V0VmFsdWUoZS50YXJnZXQudmFsdWUpfSB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPSdTZWFyY2ggeW91ciBzaG9lIC4uLi4nIC8+XHJcbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gc2VhcmNoRGF0YSh2YWx1ZSl9PlxyXG4gICAgICAgICAgICAgICA8SW1hZ2Ugd2lkdGg9ezI0fSBoZWlnaHQ9ezI0fSBhbHQ9J0tpY2snIHNyYz17c2VhcmNofSAvPlxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5zZWFyY2hfaXRlbXN9PlxyXG4gICAgICAgICAgICB7ZGF0YS5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgIDxDYXJkIGtleT17aW5kZXh9IGluZGV4PXtpbmRleH0gaXRlbT17aXRlbX0gbG9hZGluZz17bG9hZGluZ30gLz5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTZWFyY2hcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJzdHlsZSIsImF4aW9zIiwiQ2FyZCIsInNlYXJjaCIsIkltYWdlIiwiU2VhcmNoIiwibG9hZGluZyIsInNldExvYWRpbmciLCJkYXRhIiwic2V0RGF0YSIsInZhbHVlIiwic2V0VmFsdWUiLCJnZXQiLCJ0aGVuIiwicmVzcG9uc2UiLCJjYXRjaCIsImVycm9yIiwiY29uc29sZSIsImxvZyIsInNldFRpbWVvdXQiLCJzZWFyY2hEYXRhIiwibmV3RGF0YSIsImZpbHRlciIsIml0ZW0iLCJ0aXRsZSIsImRpdiIsImNsYXNzTmFtZSIsImgyIiwiaDMiLCJzZWFyY2hfaW5wdXQiLCJpbnB1dCIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsInR5cGUiLCJwbGFjZWhvbGRlciIsImJ1dHRvbiIsIm9uQ2xpY2siLCJ3aWR0aCIsImhlaWdodCIsImFsdCIsInNyYyIsInNlYXJjaF9pdGVtcyIsIm1hcCIsImluZGV4Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/search/page.jsx\n"));

/***/ })

});