"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgPdf = function SvgPdf(props) {
  return _react["default"].createElement("svg", _extends({
    viewBox: "0 0 48 48"
  }, props), _react["default"].createElement("path", {
    fill: "#870000",
    d: "M44 27H4l-3-4 4-4h38l4 4z"
  }), _react["default"].createElement("path", {
    fill: "#E6E6E6",
    d: "M41 47H7a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h24l12 12v32a2 2 0 0 1-2 2z"
  }), _react["default"].createElement("path", {
    fill: "#B3B3B3",
    d: "M31 1v10a2 2 0 0 0 2 2h10L31 1z"
  }), _react["default"].createElement("path", {
    fill: "#BD0100",
    d: "M45 41H3a2 2 0 0 1-2-2V23h46v16a2 2 0 0 1-2 2z"
  }), _react["default"].createElement("path", {
    fill: "#FFF",
    d: "M20.071 30.645c0 .878-.259 1.556-.776 2.033-.518.479-1.252.717-2.205.717h-.596V36h-2.122v-7.853h2.718c.992 0 1.737.217 2.234.649.498.434.747 1.051.747 1.849zm-3.577 1.021h.387c.319 0 .572-.09.76-.27.188-.179.282-.426.282-.74 0-.53-.293-.795-.881-.795h-.548v1.805zM27.988 31.907c0 1.311-.361 2.32-1.083 3.029-.721.71-1.735 1.064-3.042 1.064h-2.541v-7.853h2.718c1.26 0 2.233.322 2.919.967.686.645 1.029 1.575 1.029 2.793zm-2.202.075c0-.72-.142-1.253-.427-1.601-.284-.348-.717-.521-1.297-.521h-.618v4.398h.473c.645 0 1.117-.188 1.418-.562s.451-.944.451-1.714zM31.484 36h-2.089v-7.853h4.641v1.702h-2.551v1.499h2.353v1.702h-2.353V36z"
  }));
};

var _default = SvgPdf;
exports["default"] = _default;