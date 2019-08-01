"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgTriangle = function SvgTriangle(props) {
  return _react["default"].createElement("svg", _extends({
    viewBox: "0 0 16 11"
  }, props), _react["default"].createElement("defs", null, _react["default"].createElement("path", {
    id: "triangle_svg__a",
    d: "M12 15l8 10.667L28 15H12zm1.6.8h12.8L20 24.333 13.6 15.8z"
  })), _react["default"].createElement("use", {
    fillRule: "evenodd",
    transform: "translate(-12 -15)",
    xlinkHref: "#triangle_svg__a"
  }));
};

var _default = SvgTriangle;
exports["default"] = _default;