"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgFbwhite = function SvgFbwhite(props) {
  return _react["default"].createElement("svg", _extends({
    viewBox: "0 0 24 24"
  }, props), _react["default"].createElement("defs", null, _react["default"].createElement("path", {
    d: "M16.5 24v-9.5h3L20 11h-3.5V8.771c0-1.048.291-1.763 1.795-1.763h1.918v-3.24c-.332-.045-1.47-.143-2.795-.143-2.765 0-4.658 1.688-4.658 4.788V11H9.5v3.5h3.26V24H1a1 1 0 0 1-1-1V1a1 1 0 0 1 1-1h22a1 1 0 0 1 1 1v22a1 1 0 0 1-1 1h-6.5z",
    id: "fbwhite_svg__a"
  })), _react["default"].createElement("use", {
    fill: "#FFF",
    fillRule: "nonzero",
    xlinkHref: "#fbwhite_svg__a"
  }));
};

var _default = SvgFbwhite;
exports["default"] = _default;