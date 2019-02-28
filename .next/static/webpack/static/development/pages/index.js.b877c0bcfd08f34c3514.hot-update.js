webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./app/lib/DelBankDataFromLocal.js":
/*!*****************************************!*\
  !*** ./app/lib/DelBankDataFromLocal.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__);


var DelBankDataFromLocal = function DelBankDataFromLocal(payload) {
  var id = payload.id;
  var bankLS = JSON.parse(localStorage.getItem('bank')) || [];
  bankLS = bankLS.filter(function (item) {
    return item.id !== id;
  });
  localStorage.setItem('bank', _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(bankLS));
};

/* harmony default export */ __webpack_exports__["default"] = (DelBankDataFromLocal);

/***/ })

})
//# sourceMappingURL=index.js.b877c0bcfd08f34c3514.hot-update.js.map