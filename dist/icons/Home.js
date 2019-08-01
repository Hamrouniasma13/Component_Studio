"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgHome = function SvgHome(props) {
  return _react["default"].createElement("svg", _extends({
    viewBox: "0 0 24 22"
  }, props), _react["default"].createElement("defs", null, _react["default"].createElement("path", {
    id: "home_svg__a",
    d: "M22.087 30.912a.522.522 0 0 1-.522-.521v-4.696h-3.13v4.696a.522.522 0 0 1-.522.521h-6.26a.522.522 0 0 1-.523-.521V18.29l-2.257 2.052a.523.523 0 0 1-.702-.772L19.649 9.135c.2-.18.503-.18.702 0L31.829 19.57a.522.522 0 1 1-.702.772l-2.258-2.052v12.1a.522.522 0 0 1-.521.522h-6.261zm-4.174-6.26h4.174c.288 0 .522.233.522.521v4.696h5.217V17.342L20 10.227l-7.826 7.114V29.87h5.217v-4.696c0-.288.234-.521.522-.521zM22.609 21a.522.522 0 0 1-.522.521h-4.174a.522.522 0 0 1-.522-.521v-4.174c0-.289.234-.522.522-.522h4.174c.288 0 .522.233.522.522V21zm-1.044-.522v-3.13h-3.13v3.13h3.13z"
  })), _react["default"].createElement("use", {
    transform: "translate(-8 -9)",
    xlinkHref: "#home_svg__a"
  }));
};

var _default = SvgHome;
exports["default"] = _default;