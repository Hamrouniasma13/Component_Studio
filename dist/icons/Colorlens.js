"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgColorlens = function SvgColorlens(props) {
  return _react["default"].createElement("svg", _extends({
    viewBox: "0 0 18 24"
  }, props), _react["default"].createElement("defs", null, _react["default"].createElement("path", {
    id: "colorlens_svg__a",
    d: "M28.74 20V8.522A.522.522 0 0 0 28.216 8h-3.13c-.187 0-.36.1-.453.263L23 11.123l-1.634-2.86A.522.522 0 0 0 20.913 8h-9.391a.522.522 0 0 0-.522.522V20a3.657 3.657 0 0 0 3.652 3.652h2.609v5.74A2.612 2.612 0 0 0 19.87 32a2.612 2.612 0 0 0 2.608-2.609v-5.739h2.609A3.657 3.657 0 0 0 28.739 20zM20.61 9.043l1.937 3.39c.185.325.72.325.906 0l1.937-3.39h2.306v9.392H12.043V9.043h8.567zm1.347 13.566a.522.522 0 0 0-.522.521v6.261c0 .863-.702 1.566-1.565 1.566a1.567 1.567 0 0 1-1.566-1.566v-6.26a.522.522 0 0 0-.521-.522h-3.13A2.612 2.612 0 0 1 12.042 20v-.522h15.653V20a2.612 2.612 0 0 1-2.609 2.609h-3.13z"
  })), _react["default"].createElement("use", {
    transform: "translate(-11 -8)",
    xlinkHref: "#colorlens_svg__a"
  }));
};

var _default = SvgColorlens;
exports["default"] = _default;