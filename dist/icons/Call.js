"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgCall = function SvgCall(props) {
  return _react["default"].createElement("svg", _extends({
    viewBox: "0 0 24 24"
  }, props), _react["default"].createElement("defs", null, _react["default"].createElement("path", {
    id: "call_svg__a",
    d: "M20.182 24a.543.543 0 0 0 .385-.16l3.273-3.273a.545.545 0 0 0 0-.77l-5.454-5.455a.545.545 0 0 0-.772 0l-2.887 2.887-7.956-7.956 2.887-2.887a.545.545 0 0 0 0-.772L4.204.16a.545.545 0 0 0-.771 0L.16 3.433a.544.544 0 0 0-.16.385C0 14.947 9.053 24 20.182 24zM3.818 1.317L8.501 6 5.614 8.887a.545.545 0 0 0 0 .771l8.728 8.728a.545.545 0 0 0 .77 0L18 15.499l4.683 4.683-2.726 2.726C9.61 22.788 1.213 14.391 1.092 4.043l2.726-2.726z"
  })), _react["default"].createElement("use", {
    fill: props.fill,
    xlinkHref: "#call_svg__a"
  }));
};

var _default = SvgCall;
exports["default"] = _default;
SvgCall.defaultProps = {
  fill: '#222221'
};