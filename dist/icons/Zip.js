"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgZip = function SvgZip(props) {
  return _react["default"].createElement("svg", _extends({
    viewBox: "0 0 48 48"
  }, props), _react["default"].createElement("path", {
    d: "M44 27H4l-3-4 4-4h38l4 4z",
    fill: "#a67c52"
  }), _react["default"].createElement("path", {
    d: "M41 47H7a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h24l12 12v32a2 2 0 0 1-2 2z",
    fill: "#e6e6e6"
  }), _react["default"].createElement("path", {
    d: "M31 1v10a2 2 0 0 0 2 2h10z",
    fill: "#b3b3b3"
  }), _react["default"].createElement("path", {
    d: "M45 41H3a2 2 0 0 1-2-2V23h46v16a2 2 0 0 1-2 2z",
    fill: "#c19f85"
  }), _react["default"].createElement("g", {
    fill: "#fff"
  }, _react["default"].createElement("path", {
    d: "M21.695 36h-6.117v-1.311l3.4-4.828h-3.32v-1.714h5.951v1.306l-3.399 4.834h3.485zM22.818 36v-7.853h2.133V36zM32.347 30.645c0 .878-.259 1.556-.776 2.033-.518.479-1.252.717-2.205.717h-.596V36h-2.121v-7.853h2.717c.992 0 1.737.217 2.234.649.498.434.747 1.051.747 1.849zm-3.577 1.021h.387c.318 0 .572-.09.76-.27.188-.179.282-.426.282-.74 0-.53-.294-.795-.881-.795h-.548z"
  })));
};

var _default = SvgZip;
exports["default"] = _default;