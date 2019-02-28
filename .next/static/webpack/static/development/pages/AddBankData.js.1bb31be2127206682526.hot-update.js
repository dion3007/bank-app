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
  var bankItem = {
    payload: payload
  };
  console.log(bankItem);
  var oldItems = [];
  oldItems = localStorage.getItem('bank');
  oldItems.push(bankItem);
  localStorage.setItem('bank', oldItems);
};

/* harmony default export */ __webpack_exports__["default"] = (AddBankDataToLocal);

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/fn/json/stringify.js":
false

})
//# sourceMappingURL=AddBankData.js.1bb31be2127206682526.hot-update.js.map