webpackHotUpdate("static\\development\\pages\\AddBankData.js",{

/***/ "./app/lib/AddBankDataToLocal.js":
/*!***************************************!*\
  !*** ./app/lib/AddBankDataToLocal.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
  };
  localStorage.removeItem('bank');
};

/* harmony default export */ __webpack_exports__["default"] = (AddBankDataToLocal);

/***/ })

})
//# sourceMappingURL=AddBankData.js.d5ddc294579df0b17b96.hot-update.js.map