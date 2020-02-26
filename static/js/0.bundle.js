(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./app/views/factory.js":
/*!******************************!*\
  !*** ./app/views/factory.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Factory; });\nclass Factory {\n  activate(chunk, model, element) {\n    const view = new chunk(model);\n\n    if (element) {\n      view.setElement(element);\n    }\n    return view;\n  }\n\n  async accessories(model, element) {\n    const chunk = await Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./accessories */ \"./app/views/accessories.js\"));\n\n    return this.activate(chunk, model, element);\n  }\n\n  async advert(model, element) {\n    const chunk = await Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./advert */ \"./app/views/advert.js\"));\n\n    return this.activate(chunk, model, element);\n  }\n\n  async bannerlist(model, element) {\n    const chunk = await Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./bannerlist */ \"./app/views/bannerlist.js\"));\n\n    return this.activate(chunk, model, element);\n  }\n\n  async blog(model, element) {\n    const chunk = await Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./blog */ \"./app/views/blog.js\"));\n\n    return this.activate(chunk, model, element);\n  }\n\n  async menu(model, element) {\n    const chunk = await Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./menu */ \"./app/views/menu.js\"));\n\n    return this.activate(chunk, model, element);\n  }\n\n  async productlist(model, element) {\n    const chunk = await Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./productlist */ \"./app/views/productlist.js\"));\n\n    return this.activate(chunk, model, element);\n  }\n}\n\n//# sourceURL=webpack:///./app/views/factory.js?");

/***/ })

}]);