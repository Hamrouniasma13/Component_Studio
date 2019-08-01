"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgGoto = function SvgGoto(props) {
  return _react["default"].createElement("svg", _extends({
    viewBox: "0 0 24 24"
  }, props), _react["default"].createElement("defs", null, _react["default"].createElement("path", {
    id: "goto_svg__a",
    d: "M30.218 9.044h-7.61V8H32v9.391h-1.044v-7.61L20.37 20.37l-.738-.738L30.218 9.044zM8 8h1.043v22.957H32V32H8V8z"
  })), _react["default"].createElement("use", {
    fillRule: "evenodd",
    transform: "translate(-8 -8)",
    xlinkHref: "#goto_svg__a"
  }));
};

var _default = SvgGoto;
exports["default"] = _default;