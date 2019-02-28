webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _component_Layouts__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../component/Layouts */ "./component/Layouts.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/styles/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/index.es.js");
/* harmony import */ var _app_lib_DelBankDataFromLocal__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../app/lib/DelBankDataFromLocal */ "./app/lib/DelBankDataFromLocal.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_12__);







var _jsxFileName = "E:\\Dion-Project\\projek\\_A\\bank-app\\pages\\index.js";







var styles = function styles(theme) {
  return {
    root: {
      width: '100%',
      marginTop: theme.spacing.unit * 3,
      overflowX: 'auto'
    },
    table: {
      minWidth: 700
    }
  };
};

var Index =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Index, _Component);

  function Index() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Index);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Index)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "state", {
      res: []
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleDelete", function (params) {
      Object(_app_lib_DelBankDataFromLocal__WEBPACK_IMPORTED_MODULE_11__["default"])({
        id: params
      });

      _this.getData();
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Index, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.getData();
    }
  }, {
    key: "getData",
    value: function getData() {
      this.setState({
        res: JSON.parse(localStorage.getItem('bank'))
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var classes = this.props.classes;
      console.log(this.state.res);
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_component_Layouts__WEBPACK_IMPORTED_MODULE_8__["default"], {
        title: "Bank Central Dion",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_12___default.a, {
        href: "/AddBankData",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["Button"], {
        className: "m-bgs",
        variant: "contained",
        color: "primary",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }, "+ Add")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["Paper"], {
        className: classes.root,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["Table"], {
        className: classes.table,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["TableHead"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["TableRow"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["TableCell"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }, "Account Number"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["TableCell"], {
        align: "right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }, "Swift Code"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["TableCell"], {
        align: "right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }, "Address"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["TableCell"], {
        align: "right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      }, "Currency"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["TableCell"], {
        align: "right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      }, "Type"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["TableCell"], {
        align: "right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }, "Action"))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["TableBody"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      }, this.state.res.map == null && react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["TableRow"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["TableCell"], {
        component: "th",
        scope: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      }, "No Data")), this.state.res.map !== null && this.state.res.map(function (row) {
        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["TableRow"], {
          key: row.id,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 75
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["TableCell"], {
          component: "th",
          scope: "row",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 76
          },
          __self: this
        }, row.accountNumber), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["TableCell"], {
          align: "right",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 79
          },
          __self: this
        }, row.swiftCode), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["TableCell"], {
          align: "right",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 80
          },
          __self: this
        }, row.address), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["TableCell"], {
          align: "right",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 81
          },
          __self: this
        }, row.currency), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["TableCell"], {
          align: "right",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 82
          },
          __self: this
        }, row.type), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["TableCell"], {
          align: "right",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 83
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["Button"], {
          onClick: function onClick() {
            return _this2.handleDelete(row.id);
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 83
          },
          __self: this
        }, "Delete")));
      }))))));
    }
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_9__["withStyles"])(styles)(Index));

/***/ })

})
//# sourceMappingURL=index.js.313ec08440523a7ef0eb.hot-update.js.map