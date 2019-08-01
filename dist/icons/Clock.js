"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgClock = function SvgClock(props) {
  return _react["default"].createElement("svg", _extends({
    viewBox: "0 0 24 24"
  }, props), _react["default"].createElement("defs", null, _react["default"].createElement("path", {
    id: "clock_svg__a",
    d: "M23.984 15.468a.387.387 0 1 1 .548.548l-2.919 2.918c.203.307.322.672.322 1.066A1.938 1.938 0 0 1 20 21.935 1.938 1.938 0 0 1 18.065 20c0-.394.12-.76.322-1.066l-4.854-4.854a.387.387 0 1 1 .547-.547l4.854 4.854a1.923 1.923 0 0 1 2.132 0l2.918-2.919zM20 21.161c.64 0 1.161-.52 1.161-1.161 0-.64-.52-1.161-1.161-1.161-.64 0-1.161.52-1.161 1.161 0 .64.52 1.161 1.161 1.161zM20 8c6.617 0 12 5.383 12 12s-5.383 12-12 12S8 26.617 8 20 13.383 8 20 8zm0 23.226c6.19 0 11.226-5.036 11.226-11.226 0-6.19-5.036-11.226-11.226-11.226C13.81 8.774 8.774 13.81 8.774 20c0 6.19 5.036 11.226 11.226 11.226zm0-18.968a.387.387 0 0 1-.387-.387V10.71a.387.387 0 1 1 .774 0v1.161a.387.387 0 0 1-.387.387zM27.742 20c0-.214.173-.387.387-.387h1.161a.387.387 0 1 1 0 .774H28.13a.387.387 0 0 1-.387-.387zM20 27.742c.214 0 .387.173.387.387v1.161a.387.387 0 1 1-.774 0V28.13c0-.214.173-.387.387-.387zm-8.129-8.13a.387.387 0 1 1 0 .775H10.71a.387.387 0 1 1 0-.774h1.161z"
  })), _react["default"].createElement("use", {
    transform: "translate(-8 -8)",
    xlinkHref: "#clock_svg__a"
  }));
};

var _default = SvgClock;
exports["default"] = _default;