"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgGlobe = function SvgGlobe(props) {
  return _react["default"].createElement("svg", _extends({
    viewBox: "0 0 21 24"
  }, props), _react["default"].createElement("defs", null, _react["default"].createElement("path", {
    id: "globe_svg__a",
    d: "M10.51 27.915c-.153 0-.255-.051-.306-.051a.494.494 0 0 1 0-.715l1.634-1.634c-.46-.46-.817-.97-1.174-1.532-.153-.255-.102-.562.153-.715.255-.153.562-.102.715.153a8.393 8.393 0 0 0 1.328 1.685 9.655 9.655 0 0 0 6.842 2.809 9.698 9.698 0 0 0 9.702-9.702c0-3.32-1.634-6.383-4.442-8.17-.256-.154-.307-.46-.153-.715.153-.205.46-.307.663-.154.511.307.97.664 1.43 1.073l1.634-1.634a.494.494 0 0 1 .715 0 .494.494 0 0 1 0 .715l-1.634 1.634a10.609 10.609 0 0 1 2.809 7.2c0 5.719-4.545 10.417-10.213 10.672v2.094h3.574c.307 0 .51.204.51.51 0 .307-.203.51-.51.51h-8.17c-.306 0-.51-.203-.51-.51 0-.306.204-.51.51-.51h3.574v-2.043a10.488 10.488 0 0 1-6.689-2.757l-1.634 1.634a.464.464 0 0 1-.357.153zm9.192-2.043a7.65 7.65 0 0 1-7.66-7.66 7.65 7.65 0 0 1 7.66-7.659 7.65 7.65 0 0 1 7.66 7.66 7.65 7.65 0 0 1-7.66 7.66zm0-14.298a6.625 6.625 0 0 0-6.638 6.639 6.625 6.625 0 0 0 6.638 6.638 6.625 6.625 0 0 0 6.638-6.638 6.625 6.625 0 0 0-6.638-6.639z"
  })), _react["default"].createElement("use", {
    transform: "translate(-10 -8)",
    xlinkHref: "#globe_svg__a"
  }));
};

var _default = SvgGlobe;
exports["default"] = _default;