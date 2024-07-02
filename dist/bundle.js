/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `/* Body and Container Styles */\r\nbody {\r\n  display: flex;\r\n  flex-direction: column;\r\n  margin: 0;\r\n  padding: 0;\r\n  font-family: Arial, sans-serif;\r\n  height: 100%;\r\n}\r\n\r\n\r\nbody.night {\r\n  background: linear-gradient(to bottom,#010619,#122159);\r\n}\r\n\r\n#today-image{\r\n    width: 150px;\r\n    height: 150px;\r\n}\r\n\r\nbody.rain {\r\n  background: linear-gradient(\r\n    to bottom,\r\n    #181b1d,\r\n    #555a5b\r\n  ); /* Adjust for rain condition */\r\n}\r\n\r\nbody.cloudy {\r\n  background: linear-gradient(to bottom, #596E7C, #CD9C8D);\r\n  /* background: rgba(0, 14, 44, 0.478); */\r\n}\r\n\r\nbody.clear {\r\n  background: linear-gradient(to bottom, #307d9b, #A6BAAB);\r\n}\r\n\r\nbody.drizzle{\r\n    background: linear-gradient(\r\n        to bottom,\r\n        #354A51,\r\n        #617E87\r\n      );\r\n}\r\n\r\nbody.snow {\r\n  background: linear-gradient(\r\n    to bottom,\r\n    #c8d7d9,\r\n    #e9f0f1\r\n  ); \r\n}\r\n\r\n\r\nbody.mist {\r\n  background: linear-gradient(\r\n    to bottom,\r\n    #9ea3a7,\r\n    #d2d5d6\r\n  ); /* Adjust for mist condition */\r\n}\r\n\r\n#bg-container {\r\n  margin: 48px;\r\n  border-radius: 24px;\r\n}\r\n\r\n#container {\r\n  padding: 48px;\r\n  text-align: center;\r\n  /* margin: 20px; */\r\n}\r\n\r\n\r\n.search-bar {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  margin-bottom: 20px;\r\n  color: white;\r\n  gap: 8px;\r\n  padding-top: 15px;\r\n  padding-left: 40px;\r\n\r\n}\r\n\r\n#current-time{\r\n    color: white;\r\n    font-size: 18px;\r\n}\r\n\r\n#search-container {\r\n  position: sticky;\r\n  top: 0px;\r\n  z-index: 1000; /* Ensure it's above other content */\r\n  display: flex;\r\n  /* flex-direction: column; */\r\n  gap: 48px;\r\n  align-items: center;\r\n  backdrop-filter: blur(10px);\r\n  justify-content: space-between;\r\n}\r\n\r\n.suggestion-container {\r\n  position: absolute;\r\n  top: 72px;\r\n  left: 72px;\r\n  z-index: 100;\r\n  background-color: white;\r\n  margin: auto;\r\n  border-radius: 24px;\r\n}\r\n\r\n.searchInput {\r\n  width: 500px;\r\n  padding: 16px;\r\n  font-size: 16px;\r\n  border-radius: 20px;\r\n  border: none;\r\n  outline: none;\r\n  background-color: white;\r\n}\r\n\r\n.today {\r\n  border-radius: 24px;\r\n  padding: 64px;\r\n  display: flex;\r\n  \r\n  justify-content: space-between;\r\n}\r\n\r\n#today-description {\r\n  color: white;\r\n  font-size: 24px;\r\n}\r\n\r\n.desc{\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  gap: 0;\r\n}\r\n\r\n.details {\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.temperature {\r\n  font-size: 72px;\r\n  font-weight: 300;\r\n  margin: 10px 0;\r\n  color: white;\r\n}\r\n\r\n.description {\r\n  font-size: 16px;\r\n  color: #666;\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.hourly-forecast,\r\n.daily-forecast {\r\n  color: white;\r\n  font-size: 24px;\r\n  display: flex;\r\n}\r\n\r\n.hour-container,\r\n.day-container {\r\n  /* margin-top: 15px; */\r\n  margin-bottom: 20px;\r\n  display: flex;\r\n  justify-content: space-evenly;\r\n  background-color: rgba(0, 0, 0, 0.337);\r\n  align-items: start;\r\n  border-radius: 24px;\r\n  padding: 32px;\r\n}\r\n\r\n.hourlyData,\r\n.dailyData {\r\n  align-self: auto;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: start;\r\n  color: white;\r\n  width: 100px;\r\n  padding: 10px;\r\n  margin: 10px;\r\n  text-align: center;\r\n}\r\n\r\n.hourlyData img,\r\n.dailyData img {\r\n  width: 50px;\r\n  height: 50px;\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.temp {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  margin-top: 10px;\r\n}\r\n\r\n.temp p {\r\n  margin: 0 5px;\r\n}\r\n\r\n.suggestion {\r\n  padding: 10px;\r\n  cursor: pointer;\r\n  transition: background-color 0.3s ease;\r\n  z-index: 100;\r\n  border-radius: 24px;\r\n}\r\n\r\n.suggestion:hover {\r\n  background-color: #f0f0f0;\r\n  border-radius: 24px;\r\n}\r\n\r\n#location {\r\n  color: white;\r\n  font-size: 32px;\r\n}\r\n\r\n.degree-change{\r\n  padding: 15px 20px;\r\n  background-color: white;\r\n  border-radius: 24px;\r\n  margin-right: 48px;\r\n}\r\n\r\n\r\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://weather-app/./src/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://weather-app/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://weather-app/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://weather-app/./src/styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://weather-app/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://weather-app/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://weather-app/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://weather-app/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://weather-app/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://weather-app/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/api.js":
/*!********************!*\
  !*** ./src/api.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getCurrent: () => (/* binding */ getCurrent),\n/* harmony export */   getForecast: () => (/* binding */ getForecast),\n/* harmony export */   getSearch: () => (/* binding */ getSearch)\n/* harmony export */ });\nconst current =\r\n  \"https://api.weatherapi.com/v1/current.json?key=1264af36d4f441d0b7e114002242006&q=\";\r\nconst forecast =\r\n  \"http://api.weatherapi.com/v1/forecast.json?key=1264af36d4f441d0b7e114002242006&days=7&q=\";\r\nconst search =\r\n  \"http://api.weatherapi.com/v1/search.json?key=1264af36d4f441d0b7e114002242006&q=\";\r\n\r\nasync function getCurrent(location) {\r\n  let url = current + location;\r\n  const response = await fetch(url);\r\n  const weatherData = await response.json();\r\n  let weatherObj = {\r\n    localDate: new Date(weatherData.location.localtime).toDateString(),\r\n    localHour: new Date(weatherData.location.localtime).getHours(),\r\n    localMinutes: new Date(weatherData.location.localtime).getMinutes(), \r\n    location: weatherData.location.name,\r\n    temperatureC: weatherData.current.temp_c + \"°C\",\r\n    temperatureF: weatherData.current.temp_f + \"°F\",\r\n    description: weatherData.current.condition.text,\r\n    icon: weatherData.current.condition.icon,\r\n  };\r\n  return weatherObj;\r\n}\r\n\r\nasync function getForecast(location) {\r\n  let url = forecast + location;\r\n  const response = await fetch(url);\r\n  const weatherData = await response.json();\r\n  const currentHour = new Date().getHours();\r\n  // eslint-disable-next-line no-unused-vars\r\n  // eslint-disable-next-line no-unused-vars\r\n\r\n  const todayHours = weatherData.forecast.forecastday[0].hour;\r\n  const tomorrowHours = weatherData.forecast.forecastday[1]?.hour || [];\r\n  const combinedHours = todayHours.concat(tomorrowHours);\r\n\r\n  let weatherObj = {\r\n    sunrise :weatherData.forecast.forecastday[0].astro.sunrise,\r\n    sunset : weatherData.forecast.forecastday[0].astro.sunset,\r\n    hourlyData: combinedHours\r\n      .slice(currentHour, currentHour + 6)\r\n      .map((hour) => ({\r\n        time: new Date(hour.time).getHours(),\r\n        temperatureC: hour.temp_c + \"°C\",\r\n        temperatureF: hour.temp_f + \"°F\",\r\n        description: hour.condition.text,\r\n        icon: hour.condition.icon,\r\n      })),\r\n    dailyData: weatherData.forecast.forecastday.slice(0, 6).map((day) => ({\r\n      date: new Date(day.date).toDateString(),\r\n      minTempC: day.day.mintemp_c + \"°C\",\r\n      minTempF: day.day.mintemp_f + \"°F\",\r\n      maxTempC: day.day.maxtemp_c + \"°C\",\r\n      maxTempF: day.day.maxtemp_f + \"°F\",\r\n      description: day.day.condition.text,\r\n      icon: day.day.condition.icon,\r\n    })),\r\n  };\r\n  return weatherObj;\r\n}\r\n\r\nasync function getSearch(location) {\r\n  let url = search + location;\r\n  const response = await fetch(url);\r\n  const weatherData = await response.json();\r\n  let weatherObj = {\r\n    suggestions: weatherData.map((item) => ({\r\n      name: item.name,\r\n      region: item.region,\r\n      country: item.country,\r\n    })),\r\n  };\r\n  return weatherObj;\r\n}\r\n\n\n//# sourceURL=webpack://weather-app/./src/api.js?");

/***/ }),

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   current: () => (/* binding */ current),\n/* harmony export */   forecast: () => (/* binding */ forecast),\n/* harmony export */   search: () => (/* binding */ search)\n/* harmony export */ });\n/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api */ \"./src/api.js\");\n\r\n\r\nasync function search(input) {\r\n  const result = await (0,_api__WEBPACK_IMPORTED_MODULE_0__.getSearch)(input);\r\n  return result;\r\n}\r\n\r\nasync function current(location) {\r\n  const result = await (0,_api__WEBPACK_IMPORTED_MODULE_0__.getCurrent)(location);\r\n  return result;\r\n}\r\n\r\nasync function forecast(location) {\r\n  const result = await (0,_api__WEBPACK_IMPORTED_MODULE_0__.getForecast)(location);\r\n  return result;\r\n}\r\n\n\n//# sourceURL=webpack://weather-app/./src/app.js?");

/***/ }),

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   bgContainer: () => (/* binding */ bgContainer),\n/* harmony export */   container: () => (/* binding */ container),\n/* harmony export */   dayContainer: () => (/* binding */ dayContainer),\n/* harmony export */   degreeChange: () => (/* binding */ degreeChange),\n/* harmony export */   hourContainer: () => (/* binding */ hourContainer),\n/* harmony export */   searchBar: () => (/* binding */ searchBar),\n/* harmony export */   searchContainer: () => (/* binding */ searchContainer),\n/* harmony export */   searchIcon: () => (/* binding */ searchIcon),\n/* harmony export */   searchInput: () => (/* binding */ searchInput),\n/* harmony export */   suggestionContainer: () => (/* binding */ suggestionContainer)\n/* harmony export */ });\nconst container = document.getElementById(\"container\");\r\nconst bgContainer = document.getElementById('bg-container');\r\nconst searchContainer = document.getElementById(\"search-container\");\r\n\r\n\r\nconst degreeChange = document.createElement('button');\r\ndegreeChange.classList.add(\"degree-change\");\r\ndegreeChange.textContent = \"Switch to °F\";\r\n\r\nconst suggestionContainer = document.createElement(\"div\");\r\nsuggestionContainer.classList.add('suggestion-container');\r\n\r\nconst searchInput = document.createElement(\"input\");\r\nsearchInput.classList.add(\"searchInput\");\r\nsearchInput.type = \"text\";\r\nsearchInput.placeholder = \"place (enter at least 3 letters to search)\";\r\n\r\nconst searchIcon = document.createElement(\"span\");\r\nsearchIcon.classList.add(\"material-symbols-outlined\");\r\nsearchIcon.textContent = \"search\";\r\n\r\nconst searchBar = document.createElement(\"div\");\r\nsearchBar.classList.add(\"search-bar\");\r\nsearchBar.appendChild(searchIcon);\r\nsearchBar.appendChild(searchInput);\r\n\r\nsearchContainer.appendChild(searchBar);\r\nsearchContainer.appendChild(degreeChange);\r\n\r\nconst hourContainer = document.createElement(\"div\");\r\nhourContainer.classList.add(\"hour-container\");\r\n\r\nconst dayContainer = document.createElement(\"div\");\r\ndayContainer.classList.add(\"day-container\");\r\n\r\n\n\n//# sourceURL=webpack://weather-app/./src/dom.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   renderCurrent: () => (/* binding */ renderCurrent),\n/* harmony export */   renderForecastByDay: () => (/* binding */ renderForecastByDay),\n/* harmony export */   renderForecastByHour: () => (/* binding */ renderForecastByHour),\n/* harmony export */   setBackgroundBasedOnLocation: () => (/* binding */ setBackgroundBasedOnLocation)\n/* harmony export */ });\n/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app */ \"./src/app.js\");\n/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom */ \"./src/dom.js\");\n/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api */ \"./src/api.js\");\n/* harmony import */ var _rain_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./rain.jpg */ \"./src/rain.jpg\");\n/* harmony import */ var _cloudy_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./cloudy.jpg */ \"./src/cloudy.jpg\");\n/* harmony import */ var _summer_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./summer.jpg */ \"./src/summer.jpg\");\n/* harmony import */ var _snow_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./snow.jpg */ \"./src/snow.jpg\");\n/* harmony import */ var _mist_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./mist.jpg */ \"./src/mist.jpg\");\n/* harmony import */ var _lightRain_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./lightRain.jpg */ \"./src/lightRain.jpg\");\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* eslint-disable no-unused-vars */\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\ndocument.addEventListener(\"click\", () => {\r\n  _dom__WEBPACK_IMPORTED_MODULE_1__.suggestionContainer.innerHTML = \"\";\r\n});\r\n\r\n_dom__WEBPACK_IMPORTED_MODULE_1__.searchInput.addEventListener(\"input\", renderSearch);\r\n\r\nlet currentUnit = \"°C\";\r\n\r\n_dom__WEBPACK_IMPORTED_MODULE_1__.degreeChange.addEventListener(\"click\", () => {\r\n  if (currentUnit === \"°C\") {\r\n    currentUnit = \"°F\";\r\n    _dom__WEBPACK_IMPORTED_MODULE_1__.degreeChange.textContent = \"Switch to °C\";\r\n  } else {\r\n    currentUnit = \"°C\";\r\n    _dom__WEBPACK_IMPORTED_MODULE_1__.degreeChange.textContent = \"Switch to °F\";\r\n  }\r\n  updateTemperatureUnit();\r\n});\r\n\r\nasync function updateTemperatureUnit() {\r\n  const location = document\r\n    .querySelector(\"#location\")\r\n    ?.textContent?.split(\",\")[0];\r\n  const region = document.querySelector(\"#location\")?.textContent.split(\",\")[1];\r\n  const country = document\r\n    .querySelector(\"#location\")\r\n    ?.textContent.split(\",\")[2];\r\n\r\n  if (location) {\r\n    renderCurrent(location, region, country);\r\n    renderForecastByHour(location);\r\n    renderForecastByDay(location);\r\n  }\r\n}\r\n\r\nasync function renderSearch(event) {\r\n  const inputValue = event.target.value.trim();\r\n\r\n  if (inputValue.length >= 3) {\r\n    try {\r\n      const result = await (0,_app__WEBPACK_IMPORTED_MODULE_0__.search)(inputValue);\r\n      _dom__WEBPACK_IMPORTED_MODULE_1__.suggestionContainer.innerHTML = \"\";\r\n      result.suggestions.forEach((suggestion) => {\r\n        const suggestionDiv = document.createElement(\"div\");\r\n        suggestionDiv.classList.add(\"suggestion\");\r\n        suggestionDiv.innerHTML = `<p><strong id=\"location-name\">${suggestion.name}</strong>, <span id=\"region-name\">${suggestion.region}</span>, <span id=\"country-name\">${suggestion.country}</span></p>`;\r\n        suggestionDiv.addEventListener(\"click\", () => {\r\n          renderCurrent(suggestion.name, suggestion.region, suggestion.country);\r\n          setBackgroundBasedOnLocation(suggestion.name);\r\n          renderForecastByHour(suggestion.name);\r\n          renderForecastByDay(suggestion.name);\r\n        });\r\n        _dom__WEBPACK_IMPORTED_MODULE_1__.suggestionContainer.appendChild(suggestionDiv);\r\n      });\r\n      _dom__WEBPACK_IMPORTED_MODULE_1__.searchContainer.appendChild(_dom__WEBPACK_IMPORTED_MODULE_1__.suggestionContainer);\r\n    } catch (error) {\r\n      console.error(\"Error fetching search results:\", error);\r\n    }\r\n  } else {\r\n    _dom__WEBPACK_IMPORTED_MODULE_1__.suggestionContainer.innerHTML = \"\";\r\n  }\r\n}\r\n\r\nasync function renderCurrent(location, region, country) {\r\n  _dom__WEBPACK_IMPORTED_MODULE_1__.suggestionContainer.innerHTML = \"\";\r\n  const today = document.createElement(\"div\");\r\n  today.innerHTML = \"\";\r\n  _dom__WEBPACK_IMPORTED_MODULE_1__.bgContainer.innerHTML = \"\";\r\n  const result = await (0,_app__WEBPACK_IMPORTED_MODULE_0__.current)(location);\r\n  let temp;\r\n  if (currentUnit === \"°F\") temp = result.temperatureF;\r\n  else temp = result.temperatureC;\r\n\r\n  const details = document.createElement(\"div\");\r\n  let min;\r\n  if (result.localMinutes < 10) {\r\n    min = \"0\" + `${result.localMinutes}`;\r\n  } else {\r\n    min = `${result.localMinutes}`;\r\n  }\r\n  details.innerHTML = `<p id='location'>${location}, ${region}, ${country}</p><p id=\"current-time\">${result.localDate}, ${result.localHour}:${min}</p><p class=\"temperature\">${temp}</p>`;\r\n  details.classList.add(\"details\");\r\n\r\n  const desc = document.createElement(\"div\");\r\n  desc.classList.add(\"desc\");\r\n  desc.innerHTML = `<img id=\"today-image\" src=\"${result.icon}\"><p id=\"today-description\">${result.description}</p>`;\r\n\r\n  today.appendChild(details);\r\n  today.appendChild(desc);\r\n  today.classList.add(\"today\");\r\n  _dom__WEBPACK_IMPORTED_MODULE_1__.bgContainer.appendChild(today);\r\n}\r\n\r\nasync function renderForecastByHour(location) {\r\n  const result = await (0,_app__WEBPACK_IMPORTED_MODULE_0__.forecast)(location);\r\n  _dom__WEBPACK_IMPORTED_MODULE_1__.container.innerHTML = \"\";\r\n\r\n  const hourlyForecast = document.createElement(\"p\");\r\n  hourlyForecast.textContent = \"Hourly Forecast\";\r\n  hourlyForecast.classList.add(\"hourly-forecast\");\r\n\r\n  _dom__WEBPACK_IMPORTED_MODULE_1__.container.appendChild(hourlyForecast);\r\n  _dom__WEBPACK_IMPORTED_MODULE_1__.hourContainer.innerHTML = \"\"; // Clear previous content\r\n  result.hourlyData.forEach((hour) => {\r\n    let temp;\r\n    if (currentUnit === \"°F\") temp = hour.temperatureF;\r\n    else temp = hour.temperatureC;\r\n    const hourDiv = document.createElement(\"div\");\r\n    hourDiv.classList.add(\"hourlyData\");\r\n    hourDiv.innerHTML = `<p>${hour.time}:00</p> <img src=${hour.icon}> <p>${hour.description}</p> <div class=\"temp\"> <p>${temp}</p></div>`;\r\n    _dom__WEBPACK_IMPORTED_MODULE_1__.hourContainer.appendChild(hourDiv);\r\n  });\r\n  _dom__WEBPACK_IMPORTED_MODULE_1__.container.appendChild(_dom__WEBPACK_IMPORTED_MODULE_1__.hourContainer);\r\n}\r\n\r\nasync function renderForecastByDay(location) {\r\n  const result = await (0,_app__WEBPACK_IMPORTED_MODULE_0__.forecast)(location);\r\n  console.log(result);\r\n\r\n  const dailyForecast = document.createElement(\"p\");\r\n  dailyForecast.textContent = \"Daily Forecast\";\r\n  dailyForecast.classList.add(\"daily-forecast\");\r\n\r\n  _dom__WEBPACK_IMPORTED_MODULE_1__.container.appendChild(dailyForecast);\r\n  _dom__WEBPACK_IMPORTED_MODULE_1__.dayContainer.innerHTML = \"\"; // Clear previous content\r\n  const daysOfWeek = [\r\n    \"Sunday\",\r\n    \"Monday\",\r\n    \"Tuesday\",\r\n    \"Wednesday\",\r\n    \"Thursday\",\r\n    \"Friday\",\r\n    \"Saturday\",\r\n  ];\r\n  result.dailyData.forEach((day) => {\r\n    let minTemp, maxTemp;\r\n    if (currentUnit === \"°F\") {\r\n      minTemp = day.maxTempF;\r\n      maxTemp = day.maxTempF;\r\n    } else {\r\n      minTemp = day.maxTempC;\r\n      maxTemp = day.maxTempC;\r\n    }\r\n    const dayDiv = document.createElement(\"div\");\r\n    dayDiv.classList.add(\"dailyData\");\r\n    dayDiv.innerHTML = `<p>${\r\n      daysOfWeek[new Date(day.date).getDay()]\r\n    }</p><img src=\"${day.icon}\" alt=\"${day.description}\"><p>${\r\n      day.description\r\n    }</p><div class=\"temp\"><p>${minTemp} / ${maxTemp}</p></div>`;\r\n    _dom__WEBPACK_IMPORTED_MODULE_1__.dayContainer.appendChild(dayDiv);\r\n  });\r\n  _dom__WEBPACK_IMPORTED_MODULE_1__.container.appendChild(_dom__WEBPACK_IMPORTED_MODULE_1__.dayContainer);\r\n}\r\n\r\nasync function getTimeAndDay(location) {\r\n  try {\r\n    const currentWeather = await (0,_app__WEBPACK_IMPORTED_MODULE_0__.current)(location);\r\n    const currentForecast = await (0,_app__WEBPACK_IMPORTED_MODULE_0__.forecast)(location);\r\n    const hour = currentWeather.localHour;\r\n    const min = currentWeather.localMinutes;\r\n    console.log(hour);\r\n    const sunriseHour = parseTime12to24(currentForecast.sunrise); // Convert 12-hour to 24-hour\r\n    const sunriseMin = parseMinutes(currentForecast.sunrise);\r\n    const sunsetHour = parseTime12to24(currentForecast.sunset); // Convert 12-hour to 24-hour\r\n    const sunsetMin = parseMinutes(currentForecast.sunset);\r\n\r\n    if (\r\n      (hour > sunriseHour || (hour === sunriseHour && min >= sunriseMin)) &&\r\n      (hour < sunsetHour || (hour === sunsetHour && min < sunsetMin))\r\n    ) {\r\n      return \"day\";\r\n    } else {\r\n      return \"night\";\r\n    }\r\n  } catch (error) {\r\n    console.error(\"Error fetching time and day:\", error);\r\n    return \"day\";\r\n  }\r\n}\r\n\r\nasync function setBackgroundBasedOnLocation(location) {\r\n  try {\r\n    document.body.classList.remove(\r\n      \"day\",\r\n      \"night\",\r\n      \"rain\",\r\n      \"cloudy\",\r\n      \"clear\",\r\n      \"snow\",\r\n      \"mist\",\r\n      \"drizzle\"\r\n    );\r\n    const timeOfDay = await getTimeAndDay(location);\r\n    const weather = await (0,_api__WEBPACK_IMPORTED_MODULE_2__.getCurrent)(location);\r\n\r\n    let backgroundImageUrl = \"\";\r\n    let overlayColor = \"\";\r\n\r\n    let desc = weather.description.toLowerCase();\r\n\r\n    if (\r\n      (desc.includes(\"patchy\") && desc.includes(\"rain\")) ||\r\n      (desc.includes(\"light\") && desc.includes(\"rain\")) ||\r\n      desc.includes(\"drizzle\")\r\n    ) {\r\n      backgroundImageUrl = `url('${_lightRain_jpg__WEBPACK_IMPORTED_MODULE_8__}')`;\r\n      document.body.classList.add(\"drizzle\");\r\n    } else if (desc.includes(\"rain\") || desc.includes(\"thundery\")) {\r\n      backgroundImageUrl = `url('${_rain_jpg__WEBPACK_IMPORTED_MODULE_3__}')`;\r\n      document.body.classList.add(\"rain\");\r\n    } else if (desc.includes(\"cloudy\") || desc.includes(\"overcast\")) {\r\n      backgroundImageUrl = `url('${_cloudy_jpg__WEBPACK_IMPORTED_MODULE_4__}')`;\r\n      document.body.classList.add(\"cloudy\");\r\n    } else if (desc.includes(\"clear\") || desc.includes(\"sunny\")) {\r\n      backgroundImageUrl = `url('${_summer_jpg__WEBPACK_IMPORTED_MODULE_5__}')`;\r\n      document.body.classList.add(\"clear\");\r\n    } else if (desc.includes(\"snow\")) {\r\n      backgroundImageUrl = `url('${_snow_jpg__WEBPACK_IMPORTED_MODULE_6__}')`;\r\n      document.body.classList.add(\"snow\");\r\n    } else if (desc.includes(\"mist\")) {\r\n      backgroundImageUrl = `url('${_mist_jpg__WEBPACK_IMPORTED_MODULE_7__}')`;\r\n      document.body.classList.add(\"mist\");\r\n    }\r\n\r\n    if (timeOfDay == \"day\") {\r\n      overlayColor = \"rgba(0, 0, 0, 0.3)\";\r\n    } else {\r\n      document.body.classList.add(timeOfDay);\r\n      overlayColor = \"\";\r\n      document.body.classList.remove(\r\n        \"day\",\r\n        \"rain\",\r\n        \"cloudy\",\r\n        \"clear\",\r\n        \"snow\",\r\n        \"mist\",\r\n        \"drizzle\"\r\n      );\r\n      overlayColor = \"rgba(1, 6, 25, 0.83)\";\r\n      console.log(overlayColor);\r\n    }\r\n\r\n    console.log(overlayColor);\r\n    _dom__WEBPACK_IMPORTED_MODULE_1__.bgContainer.style.backgroundImage = `linear-gradient(${overlayColor}, ${overlayColor}),${backgroundImageUrl}`;\r\n    console.log(overlayColor);\r\n    console.log(_dom__WEBPACK_IMPORTED_MODULE_1__.bgContainer);\r\n    _dom__WEBPACK_IMPORTED_MODULE_1__.bgContainer.style.backgroundSize = \"cover\"; // Ensures the background covers the container\r\n    _dom__WEBPACK_IMPORTED_MODULE_1__.bgContainer.style.backgroundPosition = \"center\"; // Centers the background image\r\n  } catch (error) {\r\n    console.error(\"Error setting background based on location:\", error);\r\n  }\r\n}\r\n\r\nfunction parseTime12to24(time12) {\r\n  // Example time12 format: \"06:01 AM\"\r\n  const [time, period] = time12.split(\" \");\r\n  let [hour, minute] = time.split(\":\");\r\n  hour = parseInt(hour, 10);\r\n  minute = parseInt(minute, 10);\r\n\r\n  if (period === \"PM\" && hour !== 12) {\r\n    hour += 12;\r\n  } else if (period === \"AM\" && hour === 12) {\r\n    hour = 0;\r\n  }\r\n\r\n  return hour;\r\n}\r\n\r\nfunction parseMinutes(time12) {\r\n  // eslint-disable-next-line no-unused-vars\r\n  const [time, period] = time12.split(\" \");\r\n  let [hour, minute] = time.split(\":\");\r\n  minute = parseInt(minute, 10);\r\n  return minute;\r\n}\r\n\r\n\r\nconst defaultLocation = \"Surat\";\r\nconst defaultRegion = \"Gujarat\";\r\nconst defaultCountry = \"India\";\r\n\r\n// Render the default current weather information\r\nrenderCurrent(defaultLocation, defaultRegion, defaultCountry);\r\n\r\nsetBackgroundBasedOnLocation(defaultLocation);\r\n\r\nrenderForecastByHour(defaultLocation);\r\nrenderForecastByDay(defaultLocation);\n\n//# sourceURL=webpack://weather-app/./src/index.js?");

/***/ }),

/***/ "./src/cloudy.jpg":
/*!************************!*\
  !*** ./src/cloudy.jpg ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"cb867add299fc30bffa0.jpg\";\n\n//# sourceURL=webpack://weather-app/./src/cloudy.jpg?");

/***/ }),

/***/ "./src/lightRain.jpg":
/*!***************************!*\
  !*** ./src/lightRain.jpg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"e49b96362c1d8b85f218.jpg\";\n\n//# sourceURL=webpack://weather-app/./src/lightRain.jpg?");

/***/ }),

/***/ "./src/mist.jpg":
/*!**********************!*\
  !*** ./src/mist.jpg ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"47cbcf497c70a6b57e06.jpg\";\n\n//# sourceURL=webpack://weather-app/./src/mist.jpg?");

/***/ }),

/***/ "./src/rain.jpg":
/*!**********************!*\
  !*** ./src/rain.jpg ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"61eb38aced5413bdaeb9.jpg\";\n\n//# sourceURL=webpack://weather-app/./src/rain.jpg?");

/***/ }),

/***/ "./src/snow.jpg":
/*!**********************!*\
  !*** ./src/snow.jpg ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"c6ffa199a358261106ba.jpg\";\n\n//# sourceURL=webpack://weather-app/./src/snow.jpg?");

/***/ }),

/***/ "./src/summer.jpg":
/*!************************!*\
  !*** ./src/summer.jpg ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"62af1f214a66b0709e96.jpg\";\n\n//# sourceURL=webpack://weather-app/./src/summer.jpg?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;