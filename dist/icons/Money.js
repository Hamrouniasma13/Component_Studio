"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgMoney = function SvgMoney(props) {
  return _react["default"].createElement("svg", _extends({
    viewBox: "0 0 24 19"
  }, props), _react["default"].createElement("defs", null, _react["default"].createElement("path", {
    id: "money_svg__a",
    d: "M31.613 11c.232 0 .387.16.387.401v17.66c0 .24-.155.4-.387.4H8.387c-.232 0-.387-.16-.387-.4V11.4c0-.24.155-.401.387-.401h23.226zm-.387 17.659V11.803H8.774v16.856h22.452zM20 23.04c-1.51 0-2.71-1.244-2.71-2.81 0-1.564 1.2-2.809 2.71-2.809s2.71 1.245 2.71 2.81-1.2 2.81-2.71 2.81zm0-4.816c-1.084 0-1.935.883-1.935 2.007s.851 2.006 1.935 2.006 1.935-.882 1.935-2.006c0-1.124-.851-2.007-1.935-2.007zm-8.439 4.615c-.232 0-.387-.2-.387-.4l-.077-4.616c0-.12.038-.2.116-.281a.346.346 0 0 1 .27-.12c1.55 0 2.71-1.205 2.71-2.81 0-.24.155-.401.388-.401h10.838c.233 0 .387.16.387.401 0 1.605 1.162 2.81 2.71 2.81.232 0 .387.16.387.4v4.817c0 .24-.155.401-.387.401-1.548 0-2.71 1.204-2.71 2.81 0 .24-.154.4-.387.4H14.581c-.233 0-.387-.16-.387-.4 0-1.646-1.162-3.01-2.633-3.01zm3.368-7.826c-.155 1.686-1.432 3.01-3.058 3.17l.077 3.814c1.587.2 2.865 1.645 3.02 3.411h10.064c.155-1.686 1.433-3.01 3.058-3.17v-4.054c-1.625-.16-2.903-1.485-3.058-3.17H14.93z"
  })), _react["default"].createElement("use", {
    transform: "translate(-8 -11)",
    xlinkHref: "#money_svg__a"
  }));
};

var _default = SvgMoney;
exports["default"] = _default;