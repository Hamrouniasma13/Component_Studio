"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgCircledown = function SvgCircledown(props) {
  return _react["default"].createElement("svg", _extends({
    viewBox: "0 0 24 24"
  }, props), _react["default"].createElement("defs", null, _react["default"].createElement("path", {
    id: "circledown_svg__a",
    d: "M23.805 20.675a.521.521 0 1 1 .738.737l-4.174 4.174a.527.527 0 0 1-.568.113.527.527 0 0 1-.17-.113l-4.174-4.174a.521.521 0 1 1 .738-.737l3.283 3.283V13.739a.522.522 0 0 1 1.044 0v10.219l3.283-3.283zM20 8c6.617 0 12 5.383 12 12s-5.383 12-12 12S8 26.617 8 20 13.383 8 20 8zm0 22.957c6.042 0 10.957-4.915 10.957-10.957 0-6.042-4.915-10.957-10.957-10.957-6.042 0-10.957 4.915-10.957 10.957 0 6.042 4.915 10.957 10.957 10.957z"
  })), _react["default"].createElement("use", {
    transform: "translate(-8 -8)",
    xlinkHref: "#circledown_svg__a"
  }));
};

var _default = SvgCircledown;
exports["default"] = _default;