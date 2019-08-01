"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgArrowup = function SvgArrowup(props) {
  return _react["default"].createElement("svg", _extends({
    viewBox: "0 0 19 19"
  }, props), _react["default"].createElement("defs", null, _react["default"].createElement("path", {
    id: "arrowup_svg__a",
    d: "M28.146 12h-4.792v-1h6.5v6.5h-1v-4.793L11.707 29.854 11 29.146 28.146 12z"
  })), _react["default"].createElement("use", {
    transform: "translate(-11 -11)",
    xlinkHref: "#arrowup_svg__a"
  }));
};

var _default = SvgArrowup;
exports["default"] = _default;