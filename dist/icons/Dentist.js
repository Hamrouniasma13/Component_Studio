"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgDentist = function SvgDentist(props) {
  return _react["default"].createElement("svg", _extends({
    viewBox: "0 0 24 24"
  }, props), _react["default"].createElement("defs", null, _react["default"].createElement("path", {
    id: "dentist_svg__a",
    d: "M20 22.857c1.218 0 2.334.628 3.41 1.92l4.398 5.197c.472.59.957.883 1.45.883.881 0 1.6-.718 1.6-1.6L29.705 17.66l.032-.107c.011-.038 1.12-3.828 1.12-5.553A2.86 2.86 0 0 0 28 9.143c-.507 0-1.71.193-4.567 1.115-2.323.734-4.776.696-6.871-.001C13.71 9.336 12.507 9.143 12 9.143A2.86 2.86 0 0 0 9.143 12c0 1.725 1.108 5.515 1.12 5.553l.03.107L9.14 29.314c.003.825.72 1.543 1.603 1.543.595 0 1.118-.51 1.459-.894l4.39-5.19c1.031-1.251 2.211-1.916 3.408-1.916zM29.257 32c-.857 0-1.642-.438-2.332-1.3l-4.39-5.188C21.686 24.493 20.858 24 20 24c-1.066 0-1.965.82-2.53 1.506l-4.405 5.205c-.497.56-1.267 1.289-2.322 1.289A2.746 2.746 0 0 1 8 29.257l1.135-11.489C8.945 17.109 8 13.737 8 12c0-2.206 1.794-4 4-4 .869 0 2.477.383 4.918 1.17A9.983 9.983 0 0 0 20 9.657c1.022 0 2.06-.164 3.085-.488C25.523 8.383 27.131 8 28 8c2.205 0 4 1.794 4 4 0 1.737-.945 5.11-1.135 5.767l1.132 11.434C32 30.77 30.77 32 29.257 32zM20 15.371c-1.277 0-2.444-.136-3.567-.417l-.555-.139.277-1.108.555.139c1.031.257 2.107.383 3.29.383 1.183 0 2.259-.126 3.29-.383l.555-.14.277 1.11-.555.138a14.54 14.54 0 0 1-3.567.417z"
  })), _react["default"].createElement("use", {
    fillRule: "evenodd",
    transform: "translate(-8 -8)",
    xlinkHref: "#dentist_svg__a"
  }));
};

var _default = SvgDentist;
exports["default"] = _default;