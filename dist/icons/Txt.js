"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgTxt = function SvgTxt(props) {
  return _react["default"].createElement("svg", _extends({
    viewBox: "0 0 48 48"
  }, props), _react["default"].createElement("path", {
    d: "M44 27H4l-3-4 4-4h38l4 4z",
    fill: "#939393"
  }), _react["default"].createElement("path", {
    d: "M41 47H7a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h24l12 12v32a2 2 0 0 1-2 2z",
    fill: "#e6e6e6"
  }), _react["default"].createElement("path", {
    d: "M31 1v10a2 2 0 0 0 2 2h10zM45 41H3a2 2 0 0 1-2-2V23h46v16a2 2 0 0 1-2 2z",
    fill: "#b3b3b3"
  }), _react["default"].createElement("g", {
    fill: "#fff"
  }, _react["default"].createElement("path", {
    d: "M17.836 36h-2.121v-6.117h-1.918v-1.735h5.951v1.735h-1.912zM27.945 36H25.49l-1.531-2.455L22.445 36h-2.401l2.604-4.018-2.449-3.835h2.354l1.418 2.428 1.363-2.428h2.423l-2.487 4.001zM32.29 36h-2.122v-6.117h-1.917v-1.735h5.951v1.735H32.29z"
  })));
};

var _default = SvgTxt;
exports["default"] = _default;