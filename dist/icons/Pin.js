"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgPin = function SvgPin(props) {
  return _react["default"].createElement("svg", _extends({
    viewBox: "0 0 23 28"
  }, props), _react["default"].createElement("defs", null, _react["default"].createElement("filter", {
    x: "-42.6%",
    y: "-33.3%",
    width: "186.3%",
    height: "166.7%",
    filterUnits: "objectBoundingBox",
    id: "pin_svg__a"
  }, _react["default"].createElement("feOffset", {
    dx: 2,
    dy: 2,
    "in": "SourceAlpha",
    result: "shadowOffsetOuter1"
  }), _react["default"].createElement("feGaussianBlur", {
    stdDeviation: 1,
    "in": "shadowOffsetOuter1",
    result: "shadowBlurOuter1"
  }), _react["default"].createElement("feColorMatrix", {
    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0",
    "in": "shadowBlurOuter1",
    result: "shadowMatrixOuter1"
  }), _react["default"].createElement("feMerge", null, _react["default"].createElement("feMergeNode", {
    "in": "shadowMatrixOuter1"
  }), _react["default"].createElement("feMergeNode", {
    "in": "SourceGraphic"
  })))), _react["default"].createElement("g", {
    filter: "url(#pin_svg__a)",
    fillRule: "nonzero",
    fill: "none"
  }, _react["default"].createElement("path", {
    d: "M9.391 24a.522.522 0 0 1-.369-.153C8.675 23.5.522 15.28.522 9.391a8.784 8.784 0 0 1 8.87-8.87 8.784 8.784 0 0 1 8.869 8.87c0 5.888-8.153 14.11-8.5 14.456a.522.522 0 0 1-.37.153z",
    fill: "#A0A0A0"
  }), _react["default"].createElement("circle", {
    fill: "#FFF",
    cx: 9.391,
    cy: 9.391,
    r: 3.13
  })));
};

var _default = SvgPin;
exports["default"] = _default;