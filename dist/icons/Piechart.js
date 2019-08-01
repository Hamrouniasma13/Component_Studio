"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgPiechart = function SvgPiechart(props) {
  return _react["default"].createElement("svg", _extends({
    viewBox: "0 0 24 24"
  }, props), _react["default"].createElement("defs", null, _react["default"].createElement("path", {
    id: "piechart_svg__a",
    d: "M23.455 10.91h-9.819c-.327 0-.545-.22-.545-.546V.545c0-.327.218-.545.545-.545A10.359 10.359 0 0 1 24 10.364c0 .327-.218.545-.545.545zm-9.273-9.82v8.728h8.727c-.273-4.69-4.036-8.454-8.727-8.727zm-3.818 2.183c.327 0 .545.218.545.545v9.273h9.273c.327 0 .545.218.545.545A10.359 10.359 0 0 1 10.364 24 10.359 10.359 0 0 1 0 13.636 10.359 10.359 0 0 1 10.364 3.273zm9.272 10.909h-9.272c-.328 0-.546-.218-.546-.546V4.364c-4.854.272-8.727 4.363-8.727 9.272a9.265 9.265 0 0 0 9.273 9.273c4.963 0 9-3.873 9.272-8.727z"
  })), _react["default"].createElement("use", {
    xlinkHref: "#piechart_svg__a"
  }));
};

var _default = SvgPiechart;
exports["default"] = _default;