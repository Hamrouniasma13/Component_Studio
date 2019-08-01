"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgPinuser = function SvgPinuser(props) {
  return _react["default"].createElement("svg", _extends({
    fill: "none",
    viewBox: "0 0 36 36"
  }, props), _react["default"].createElement("path", {
    d: "M18 0C11.364 0 4.5 5.049 4.5 13.5c0 7.934 11.927 20.044 12.435 20.558a1.5 1.5 0 0 0 2.13 0C19.574 33.545 31.5 21.434 31.5 13.5 31.5 5.049 24.636 0 18 0zm0 7.5a3 3 0 1 1 0 6 3 3 0 1 1 0-6zm-6 12a4.5 4.5 0 0 1 4.5-4.5h3a4.5 4.5 0 0 1 4.5 4.5z",
    fill: "#ff0303"
  }));
};

var _default = SvgPinuser;
exports["default"] = _default;