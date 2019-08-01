"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgFile = function SvgFile(props) {
  return _react["default"].createElement("svg", _extends({
    viewBox: "0 0 48 48"
  }, props), _react["default"].createElement("path", {
    d: "M44 27H4l-3-4 4-4h38l4 4z",
    fill: "#b57504"
  }), _react["default"].createElement("path", {
    d: "M41 47H7c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h24l12 12v32c0 1.1-.9 2-2 2z",
    fill: "#e6e6e6"
  }), _react["default"].createElement("path", {
    d: "M31 1v10c0 1.1.9 2 2 2h10z",
    fill: "#b3b3b3"
  }), _react["default"].createElement("path", {
    d: "M45 41H3c-1.1 0-2-.9-2-2V23h46v16c0 1.1-.9 2-2 2z",
    fill: "#f0a202"
  }));
};

var _default = SvgFile;
exports["default"] = _default;