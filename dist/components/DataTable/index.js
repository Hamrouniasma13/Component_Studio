"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = DataTable;

var _core = require("@emotion/core");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Row = _interopRequireDefault(require("./Row"));

var _Text = _interopRequireDefault(require("../Text"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function DataTable(_ref) {
  var className = _ref.className,
      title = _ref.title,
      info = _ref.info,
      rows = _ref.rows;
  var styles = {
    titleWrapper: {
      marginBottom: 20,
      overflow: 'hidden'
    },
    title: {
      "float": 'left'
    },
    info: {
      "float": 'right'
    }
  };
  return (0, _core.jsx)("div", {
    className: className
  }, title || info ? (0, _core.jsx)("div", {
    css: styles.titleWrapper
  }, (0, _core.jsx)(_Text["default"], {
    css: styles.title,
    size: "typo3"
  }, title), info && (0, _core.jsx)(_Text["default"], {
    css: styles.info
  }, info)) : null, (0, _core.jsx)("div", null, rows && rows.length > 0 ? rows.map(function (row, i) {
    return (0, _core.jsx)(_Row["default"], _extends({}, row, {
      key: i
    }));
  }) : null));
}

DataTable.propTypes = {
  title: _propTypes["default"].string,
  info: _propTypes["default"].string,
  rows: _propTypes["default"].arrayOf(_propTypes["default"].shape(_Row["default"].propTypes))
};
DataTable.Row = _Row["default"];