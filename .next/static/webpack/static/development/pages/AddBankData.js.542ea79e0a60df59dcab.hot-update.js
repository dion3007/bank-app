webpackHotUpdate("static\\development\\pages\\AddBankData.js",{

/***/ "./app/lib/AddBankDataToLocal.js":
/*!***************************************!*\
  !*** ./app/lib/AddBankDataToLocal.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__);


var AddBankDataToLocal = function AddBankDataToLocal(payload) {
  var id = payload.id,
      accountName = payload.accountName,
      accountNumber = payload.accountNumber,
      swiftCode = payload.swiftCode,
      address = payload.address,
      city = payload.city,
      country = payload.country,
      firstName = payload.firstName,
      lastName = payload.lastName,
      companyName = payload.companyName,
      type = payload.type,
      currency = payload.currency;
  var bankItem = {
    id: id,
    data: {
      accountName: accountName,
      accountNumber: accountNumber,
      swiftCode: swiftCode,
      address: address,
      city: city,
      country: country,
      firstName: firstName,
      lastName: lastName,
      companyName: companyName,
      type: type,
      currency: currency
    }
  };
  var oldItems = [];
  oldItems = JSON.parse(localStorage.getItem('bank'));
  oldItems.push(bankItem);
  localStorage.setItem('bank', _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(oldItems));
};

/* harmony default export */ __webpack_exports__["default"] = (AddBankDataToLocal);

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/readOnlyError.js":
false

})
//# sourceMappingURL=AddBankData.js.542ea79e0a60df59dcab.hot-update.js.map