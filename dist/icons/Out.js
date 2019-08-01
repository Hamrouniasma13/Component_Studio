"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgOut = function SvgOut(props) {
  return _react["default"].createElement("svg", _extends({
    viewBox: "0 0 19 23"
  }, props), _react["default"].createElement("defs", null, _react["default"].createElement("path", {
    id: "out_svg__a",
    d: "M16.853 15.146a.5.5 0 0 1 0 .707L12.706 20H26.5a.5.5 0 1 1 0 1H12.706l4.147 4.146a.5.5 0 1 1-.707.707l-5-4.999a.5.5 0 0 1 0-.708l5-5a.5.5 0 0 1 .707 0zM29.999 31.5a.5.5 0 0 1-.5.5h-12a.5.5 0 1 1 0-1H29V10H17.5a.5.5 0 1 1 0-1h12a.5.5 0 0 1 .5.5v22z"
  })), _react["default"].createElement("use", {
    transform: "translate(-11 -9)",
    xlinkHref: "#out_svg__a"
  }));
};

var _default = SvgOut;
exports["default"] = _default;