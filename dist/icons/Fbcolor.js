"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgFbcolor = function SvgFbcolor(props) {
  return _react["default"].createElement("svg", _extends({
    viewBox: "0 0 40 40"
  }, props), _react["default"].createElement("g", {
    fill: "none",
    fillRule: "nonzero"
  }, _react["default"].createElement("path", {
    d: "M31 32a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v22a1 1 0 0 0 1 1h22z",
    fill: "#39579A"
  }), _react["default"].createElement("path", {
    d: "M20.76 32v-9.5H17.5V19h3.26v-2.587c0-3.1 1.893-4.788 4.658-4.788 1.325 0 2.463.098 2.795.143v3.24h-1.918c-1.504 0-1.795.715-1.795 1.763V19H28l-.5 3.5h-3V32h-3.74z",
    fill: "#FFF"
  })));
};

var _default = SvgFbcolor;
exports["default"] = _default;