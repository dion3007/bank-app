webpackHotUpdate("static\\development\\pages\\DetailBankData.js",{

/***/ "./pages/DetailBankData.js":
/*!*********************************!*\
  !*** ./pages/DetailBankData.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _component_Layouts__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../component/Layouts */ "./component/Layouts.js");
/* harmony import */ var _app_api_currencyAPI__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../app/api/currencyAPI */ "./app/api/currencyAPI.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/index.es.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_13__);









var _jsxFileName = "E:\\Dion-Project\\projek\\_A\\bank-app\\pages\\DetailBankData.js";






var Index =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(Index, _Component);

  function Index() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Index);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Index)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "state", {
      currencyItems: [],
      type: 'Individual',
      currency: '',
      accountName: '',
      accountNumber: '',
      swiftCode: '',
      address: '',
      city: '',
      country: '',
      firstName: '',
      lastName: '',
      companyName: ''
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "handleChange", function (event) {
      _this.setState(Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])({}, event.target.name, event.target.value));
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(Index, [{
    key: "componentDidMount",
    value: function () {
      var _componentDidMount = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var currency;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return Object(_app_api_currencyAPI__WEBPACK_IMPORTED_MODULE_11__["getCurrency"])();

              case 3:
                currency = _context.sent;

                if (!(currency.status === 200)) {
                  _context.next = 6;
                  break;
                }

                throw Error();

              case 6:
                this.setState({
                  currencyItems: currency
                });
                _context.next = 12;
                break;

              case 9:
                _context.prev = 9;
                _context.t0 = _context["catch"](0);
                this.setState({
                  error: 'Terjadi kesalahan pada saat memuat data'
                });

              case 12:
                this.setState({
                  initialLoading: false
                });
                this.getData();

              case 14:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 9]]);
      }));

      function componentDidMount() {
        return _componentDidMount.apply(this, arguments);
      }

      return componentDidMount;
    }()
  }, {
    key: "getData",
    value: function getData() {
      var urlParams = new URLSearchParams(window.location.search);
      var id = urlParams.get('id');
      var bankLS = JSON.parse(localStorage.getItem('bank')) || [];
      var prevItem = bankLS.find(function (p) {
        return p.id === id;
      });
      console.log(prevItem);
      this.setState({
        res: prevItem
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          type = _this$state.type,
          currencyItems = _this$state.currencyItems,
          currency = _this$state.currency;
      return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_component_Layouts__WEBPACK_IMPORTED_MODULE_10__["default"], {
        title: "Bank Central Dion",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__["Paper"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("form", {
        className: "container ml-104",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__["TextField"], {
        className: "m-bgs w-bgs",
        id: "accountName",
        name: "accountName",
        label: "Account Name",
        value: this.state.accountName,
        onChange: this.handleChange,
        disabled: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__["TextField"], {
        className: "m-bgs w-bgs",
        id: "accountNumber",
        name: "accountNumber",
        label: "Account Number",
        value: this.state.accountNumber,
        onChange: this.handleChange,
        disabled: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__["TextField"], {
        className: "m-bgs w-bgs",
        id: "swiftCode",
        name: "swiftCode",
        label: "Swift Code",
        value: this.state.swiftCode,
        onChange: this.handleChange,
        disabled: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__["TextField"], {
        className: "m-bgs w-bgs",
        id: "address",
        name: "address",
        label: "Address",
        value: this.state.address,
        onChange: this.handleChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__["TextField"], {
        className: "m-bgs w-bgs",
        id: "city",
        name: "city",
        label: "City",
        value: this.state.city,
        onChange: this.handleChange,
        disabled: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__["TextField"], {
        className: "m-bgs w-bgs",
        id: "country",
        name: "country",
        label: "Country",
        value: this.state.country,
        onChange: this.handleChange,
        disabled: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__["FormControl"], {
        className: "m-bgs w-bgs",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__["InputLabel"], {
        htmlFor: "currency",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113
        },
        __self: this
      }, "Currency"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__["Select"], {
        value: currency,
        onChange: this.handleChange,
        disabled: true,
        inputProps: {
          name: 'currency',
          id: 'currency'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__["MenuItem"], {
        value: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("em", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124
        },
        __self: this
      }, "None")), currencyItems.map(function (n) {
        return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__["MenuItem"], {
          value: n.currencies[0].code,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 126
          },
          __self: this
        }, n.currencies[0].symbol, " -- ", n.name);
      }))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__["FormControl"], {
        className: "m-bgs w-bgs",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 129
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__["InputLabel"], {
        htmlFor: "type",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 130
        },
        __self: this
      }, "Type"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__["Select"], {
        value: this.state.type,
        onChange: this.handleChange,
        disabled: true,
        inputProps: {
          name: 'type',
          id: 'type'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 131
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__["MenuItem"], {
        value: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 140
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("em", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 141
        },
        __self: this
      }, "None")), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__["MenuItem"], {
        value: "Individual",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 143
        },
        __self: this
      }, "Individual"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__["MenuItem"], {
        value: "Company",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 144
        },
        __self: this
      }, "Company"))), type === 'Individual' && react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 148
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__["TextField"], {
        className: "m-bgs w-bgs",
        id: "firstName",
        name: "firstName",
        label: "First Name",
        value: this.state.firstName,
        onChange: this.handleChange,
        disabled: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 149
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__["TextField"], {
        className: "m-bgs w-bgs",
        id: "lastName",
        name: "lastName",
        label: "Last Name",
        value: this.state.lastName,
        onChange: this.handleChange,
        disabled: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 158
        },
        __self: this
      })), type === 'Company' && react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 170
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__["TextField"], {
        className: "m-bgs w-bgs",
        id: "companyName",
        name: "companyName",
        label: "Company Name",
        value: this.state.companyName,
        onChange: this.handleChange,
        disabled: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 171
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_13___default.a, {
        href: "/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 183
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__["Button"], {
        className: "btnSbmt ml-24 w-bgs",
        variant: "contained",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 184
        },
        __self: this
      }, "Okay!"))))));
    }
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_9__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=DetailBankData.js.4e97333d9c7491314c5a.hot-update.js.map