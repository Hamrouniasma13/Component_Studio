"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgNature = function SvgNature(props) {
  return _react["default"].createElement("svg", _extends({
    viewBox: "0 0 21 21"
  }, props), _react["default"].createElement("defs", null, _react["default"].createElement("path", {
    id: "nature_svg__a",
    d: "M28 23.5V21h-7v2.5c0 .3-.2.5-.5.5s-.5-.2-.5-.5V21h-7v2.5c0 .3-.2.5-.5.5s-.5-.2-.5-.5v-3c0-.3.2-.5.5-.5H20v-2.5c0-.3.2-.5.5-.5s.5.2.5.5V20h7.5c.3 0 .5.2.5.5v3c0 .3-.2.5-.5.5s-.5-.2-.5-.5zm-5-11c0 1.4-1.1 2.5-2.5 2.5S18 13.9 18 12.5s1.1-2.5 2.5-2.5 2.5 1.1 2.5 2.5zm-4 0c0 .85.65 1.5 1.5 1.5s1.5-.65 1.5-1.5-.65-1.5-1.5-1.5-1.5.65-1.5 1.5zm-9 16c0-1.4 1.1-2.5 2.5-2.5s2.5 1.1 2.5 2.5-1.1 2.5-2.5 2.5-2.5-1.1-2.5-2.5zm2.5-1.5c-.85 0-1.5.65-1.5 1.5s.65 1.5 1.5 1.5 1.5-.65 1.5-1.5-.65-1.5-1.5-1.5zm5.5 1.5c0-1.4 1.1-2.5 2.5-2.5s2.5 1.1 2.5 2.5-1.1 2.5-2.5 2.5-2.5-1.1-2.5-2.5zm4 0c0-.85-.65-1.5-1.5-1.5s-1.5.65-1.5 1.5.65 1.5 1.5 1.5 1.5-.65 1.5-1.5zm6.5 2.5c-1.4 0-2.5-1.1-2.5-2.5s1.1-2.5 2.5-2.5 2.5 1.1 2.5 2.5-1.1 2.5-2.5 2.5zm0-4c-.85 0-1.5.65-1.5 1.5s.65 1.5 1.5 1.5 1.5-.65 1.5-1.5-.65-1.5-1.5-1.5z"
  })), _react["default"].createElement("use", {
    transform: "translate(-10 -10)",
    xlinkHref: "#nature_svg__a"
  }));
};

var _default = SvgNature;
exports["default"] = _default;