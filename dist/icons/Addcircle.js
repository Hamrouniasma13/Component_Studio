"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgAddcircle = function SvgAddcircle(props) {
  return _react["default"].createElement("svg", _extends({
    viewBox: "0 0 24 24"
  }, props), _react["default"].createElement("defs", null, _react["default"].createElement("path", {
    id: "addcircle_svg__a",
    d: "M25.217 19.478a.522.522 0 1 1 0 1.044h-4.695v4.695a.522.522 0 1 1-1.044 0v-4.695h-4.695a.522.522 0 1 1 0-1.044h4.695v-4.695a.522.522 0 1 1 1.044 0v4.695h4.695zM20 8c6.617 0 12 5.383 12 12s-5.383 12-12 12S8 26.617 8 20 13.383 8 20 8zm0 22.957c6.042 0 10.957-4.916 10.957-10.957S26.042 9.043 20 9.043C13.958 9.043 9.043 13.96 9.043 20S13.958 30.957 20 30.957z"
  })), _react["default"].createElement("use", {
    transform: "translate(-8 -8)",
    xlinkHref: "#addcircle_svg__a"
  }));
};

var _default = SvgAddcircle;
exports["default"] = _default;