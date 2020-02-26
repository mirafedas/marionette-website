(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["advert"],{

/***/ "./app/templates/advert.hbs":
/*!**********************************!*\
  !*** ./app/templates/advert.hbs ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var Handlebars = __webpack_require__(/*! ../../node_modules/handlebars/runtime.js */ \"./node_modules/handlebars/runtime.js\");\nfunction __default(obj) { return obj && (obj.__esModule ? obj[\"default\"] : obj); }\nmodule.exports = (Handlebars[\"default\"] || Handlebars).template({\"compiler\":[8,\">= 4.3.0\"],\"main\":function(container,depth0,helpers,partials,data) {\n    var stack1, alias1=container.lambda, alias2=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {\n        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {\n          return parent[propertyName];\n        }\n        return undefined\n    };\n\n  return \"<div class=\\\"promo content__wrapper\\\" style=\\\"background-image: url(\"\n    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,\"advert\") : depth0)) != null ? lookupProperty(stack1,\"image\") : stack1), depth0))\n    + \")\\\">\\n  <div class=\\\"promo-content\\\">\\n    <div class=\\\"promo-text\\\">\"\n    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,\"advert\") : depth0)) != null ? lookupProperty(stack1,\"subtitle\") : stack1), depth0))\n    + \"</div>\\n    <div class=\\\"promo-heading\\\">\"\n    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,\"advert\") : depth0)) != null ? lookupProperty(stack1,\"title\") : stack1), depth0))\n    + \"</div>\\n    <div class=\\\"promo-price\\\">\"\n    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,\"advert\") : depth0)) != null ? lookupProperty(stack1,\"price\") : stack1), depth0))\n    + \"</div>\\n  </div>\\n</div>\";\n},\"useData\":true});\n\n//# sourceURL=webpack:///./app/templates/advert.hbs?");

/***/ }),

/***/ "./app/views/advert.js":
/*!*****************************!*\
  !*** ./app/views/advert.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return AdvertView; });\n/* harmony import */ var backbone_marionette__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! backbone.marionette */ \"./node_modules/backbone.marionette/lib/core/backbone.marionette.js\");\n/* harmony import */ var backbone_marionette__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(backbone_marionette__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _templates_advert_hbs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../templates/advert.hbs */ \"./app/templates/advert.hbs\");\n/* harmony import */ var _templates_advert_hbs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_templates_advert_hbs__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nclass AdvertView extends backbone_marionette__WEBPACK_IMPORTED_MODULE_0___default.a.LayoutView \n{\n  constructor(options) \n  {\n    options.template = _templates_advert_hbs__WEBPACK_IMPORTED_MODULE_1___default.a;\n    \n    super(options)\n  }\n}\n\n//# sourceURL=webpack:///./app/views/advert.js?");

/***/ })

}]);