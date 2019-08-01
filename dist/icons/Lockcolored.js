"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgLockcolored = function SvgLockcolored(props) {
  return _react["default"].createElement("svg", _extends({
    viewBox: "0 0 57 80"
  }, props), _react["default"].createElement("g", {
    fillRule: "nonzero",
    fill: "none"
  }, _react["default"].createElement("path", {
    d: "M16.667 31.667V18.333c0-6.433 5.233-11.666 11.666-11.666C34.766 6.667 40 11.9 40 18.333v5h6.667v-5C46.667 8.224 38.442 0 28.333 0S10 8.224 10 18.333v13.334h6.667z",
    fill: "#B3B3B3"
  }), _react["default"].createElement("path", {
    d: "M53.333 80h-50A3.333 3.333 0 0 1 0 76.667V33.333A3.333 3.333 0 0 1 3.333 30h50a3.333 3.333 0 0 1 3.334 3.333v43.334A3.333 3.333 0 0 1 53.333 80z",
    fill: "#F0A202"
  }), _react["default"].createElement("path", {
    d: "M35 50a6.667 6.667 0 1 0-13.333 0c0 2.461 1.349 4.587 3.333 5.742v10.925h6.667V55.742C33.65 54.587 35 52.462 35 50z",
    fill: "#4A4A4A"
  })));
};

var _default = SvgLockcolored;
exports["default"] = _default;