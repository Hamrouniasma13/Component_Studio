"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgPinselected = function SvgPinselected(props) {
  return _react["default"].createElement("svg", _extends({
    viewBox: "0 0 38 49"
  }, props), _react["default"].createElement("defs", null, _react["default"].createElement("filter", {
    x: "-22.2%",
    y: "-17.4%",
    width: "144.4%",
    height: "134.8%",
    filterUnits: "objectBoundingBox",
    id: "pinselected_svg__a"
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
    filter: "url(#pinselected_svg__a)",
    transform: "translate(-1 -1)",
    fillRule: "nonzero",
    fill: "none"
  }, _react["default"].createElement("path", {
    d: "M18 46a1 1 0 0 1-.707-.293C16.627 45.042 1 29.285 1 18A16.836 16.836 0 0 1 18 1a16.836 16.836 0 0 1 17 17c0 11.285-15.627 27.042-16.293 27.707A1 1 0 0 1 18 46z",
    fill: "#005792"
  }), _react["default"].createElement("circle", {
    fill: "#FFF",
    cx: 18,
    cy: 18,
    r: 6
  })));
};

var _default = SvgPinselected;
exports["default"] = _default;