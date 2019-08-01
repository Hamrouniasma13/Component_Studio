"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgAdd = function SvgAdd(props) {
  return _react["default"].createElement("svg", _extends({
    viewBox: "0 0 14 14"
  }, props), _react["default"].createElement("defs", null, _react["default"].createElement("path", {
    id: "add_svg__a",
    d: "M19.364 20.636H13v-1.272h6.364V13h1.272v6.364H27v1.272h-6.364V27h-1.272v-6.364z"
  })), _react["default"].createElement("use", {
    fillRule: "evenodd",
    transform: "translate(-13 -13)",
    xlinkHref: "#add_svg__a"
  }));
};

var _default = SvgAdd;
exports["default"] = _default;