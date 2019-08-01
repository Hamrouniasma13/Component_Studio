"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgDown = function SvgDown(props) {
  return _react["default"].createElement("svg", _extends({
    viewBox: "0 0 16 9"
  }, props), _react["default"].createElement("defs", null, _react["default"].createElement("path", {
    id: "down_svg__a",
    d: "M27.472 16L20 23.472 12.528 16l-.528.529 8 8 8-8z"
  })), _react["default"].createElement("use", {
    fillRule: "evenodd",
    transform: "translate(-12 -16)",
    xlinkHref: "#down_svg__a"
  }));
};

var _default = SvgDown;
exports["default"] = _default;