"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = CommissionsRepartition;

var _core = require("@emotion/core");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Slice = _interopRequireDefault(require("./Slice"));

var _PieChart = _interopRequireDefault(require("../components/PieChart"));

var _DataTable = _interopRequireDefault(require("../components/DataTable"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function CommissionsRepartition(_ref) {
  var title = _ref.title,
      chart = _ref.chart,
      table = _ref.table;
  var styles = {
    wrapper: {
      backgroundColor: '#fff',
      display: 'flex',
      alignItems: 'center',
      padding: 40,
      border: '1px solid #f3f3f3',
      boxShadow: '0px 0px 1px 1px rgba(0,0,0,0.04)'
    },
    pie: {
      paddingLeft: 40,
      paddingRight: 80
    },
    table: {
      flex: 1
    }
  };
  return (0, _core.jsx)(_Slice["default"], {
    title: title
  }, (0, _core.jsx)("div", {
    css: styles.wrapper
  }, (0, _core.jsx)("div", {
    css: styles.pie
  }, chart && (0, _core.jsx)(_PieChart["default"], _extends({}, chart, {
    size: 230
  }))), (0, _core.jsx)("div", {
    css: styles.table
  }, table && (0, _core.jsx)(_DataTable["default"], table))));
}

CommissionsRepartition.propTypes = {
  title: _Slice["default"].propTypes.title,
  chart: _propTypes["default"].shape(_PieChart["default"].propTypes),
  table: _propTypes["default"].shape(_DataTable["default"].propTypes)
};