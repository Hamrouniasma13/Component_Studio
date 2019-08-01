"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgServices = function SvgServices(props) {
  return _react["default"].createElement("svg", _extends({
    viewBox: "0 0 24 24"
  }, props), _react["default"].createElement("defs", null, _react["default"].createElement("path", {
    id: "services_svg__a",
    d: "M8.246 15.754v.525a5.783 5.783 0 0 0 5.777 5.776 5.785 5.785 0 0 0 5.756-5.291 3.682 3.682 0 0 1-3.13-3.636 3.68 3.68 0 0 1 3.675-3.676A3.68 3.68 0 0 1 24 13.128a3.682 3.682 0 0 1-3.168 3.641c-.252 3.536-3.21 6.337-6.81 6.337a6.835 6.835 0 0 1-6.826-6.827v-.525H4.308a2.668 2.668 0 0 1-2.62-2.229L.007 1.807c-.043-.496.116-.96.43-1.301C.737.18 1.142 0 1.577 0h3.518v1.05H1.577a.494.494 0 0 0-.367.167.625.625 0 0 0-.16.472l1.677 11.68c.12.758.8 1.335 1.58 1.335h6.827c.8 0 1.465-.563 1.581-1.339l1.68-11.707a.498.498 0 0 0-.115-.41.555.555 0 0 0-.415-.198h-3.518V0h3.518c.466 0 .91.208 1.216.57.298.352.426.807.353 1.25l-1.68 11.697a2.623 2.623 0 0 1-2.62 2.237H8.246zm12.078-5.251a2.629 2.629 0 0 0-2.626 2.625 2.629 2.629 0 0 0 2.626 2.626 2.629 2.629 0 0 0 2.626-2.626 2.629 2.629 0 0 0-2.626-2.625z"
  })), _react["default"].createElement("use", {
    fillRule: "evenodd",
    xlinkHref: "#services_svg__a"
  }));
};

var _default = SvgServices;
exports["default"] = _default;